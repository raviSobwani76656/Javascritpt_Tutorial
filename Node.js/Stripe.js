/**
 * ===============================
 * STRIPE PAYMENT NOTES - CLICKANDCARRY
 * ===============================
 * Author: BP Shubham
 * Purpose: Quick reference for Stripe payment integration and logic
 */

/**
 * 1️⃣ Stripe Basics
 * ----------------
 * Stripe is a payment processor to handle online payments.
 *
 * Key concepts:
 *  - PaymentIntent: Represents a single payment attempt
 *      - Contains: amount, currency, metadata, payment method
 *      - Tracks status: requires_payment_method → processing → succeeded/failed
 *  - Client Secret: Secret sent to frontend to complete payment securely
 *  - API Key: Stored in backend .env file; used to communicate with Stripe
 *
 * Important:
 *  - Never expose Stripe secret key to frontend
 *  - Frontend only uses client_secret to finalize payment
 */

/**
 * 2️⃣ Flow of Payment
 * ------------------
 * 1. User selects an order and payment method
 * 2. Controller receives { orderId, userId } from frontend/Postman
 * 3. Controller calls paymentService.createPayment(orderId, userId)
 * 4. Service validates order existence and payment status
 * 5. Service creates Stripe PaymentIntent
 * 6. Service saves Payment record in MongoDB
 * 7. Service returns client_secret and paymentIntent ID to frontend
 * 8. Frontend completes payment using Stripe SDK
 * 9. On success, backend marks order/payment as "paid"
 */

/**
 * 3️⃣ Example of createPayment (Service Layer)
 * -------------------------------------------
 */

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Order = require("../models/Order");
const Payment = require("../models/Payment");

class PaymentService {
  /**
   * createPayment
   * -------------
   * Purpose: Create a Stripe payment intent for an order and store internal Payment record
   * @param {String} orderId - ID of the order
   * @param {String} userId - ID of the user
   */
  async createPayment(orderId, userId) {
    try {
      // 1️⃣ Fetch order from MongoDB
      const order = await Order.findById(orderId).populate("orderItems");
      if (!order) throw new Error("Order not found");
      if (order.paymentStatus === "paid")
        throw new Error("Order is already paid");

      // 2️⃣ Create Stripe PaymentIntent
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(order.totalAmount * 100), // amount in cents
        currency: order.currency.toLowerCase(),
        metadata: { orderId, userId }, // useful for tracking
        automatic_payment_methods: { enabled: true },
        description: `Order ${order._id}`,
      });

      // 3️⃣ Update order with PaymentIntent ID
      order.stripePaymentIntent = paymentIntent.id;
      await order.save();

      // 4️⃣ Save Payment record in MongoDB
      await Payment.create({
        order: order._id,
        stripePaymentIntent: paymentIntent.id,
        paymentAmount: order.totalAmount,
        currency: order.currency,
        paymentMethod: order.paymentMethod || "credit_card",
        paymentStatus: "pending",
      });

      // 5️⃣ Return client_secret to frontend
      return {
        clientSecret: paymentIntent.client_secret,
        paymentIntent: paymentIntent.id,
      };
    } catch (error) {
      throw new Error(
        `Error occurred while creating payment: ${error.message}`
      );
    }
  }

  /**
   * handleSuccessfulPayment
   * -----------------------
   * Updates the order/payment status after payment is successful
   */
  async handleSuccessfulPayment(paymentIntentId) {
    try {
      const order = await Order.findOne({
        stripePaymentIntent: paymentIntentId,
      });
      if (!order) throw new Error("Order not found");
      if (order.paymentStatus === "paid") throw new Error("Order already paid");

      order.paymentStatus = "paid";
      order.status = "pending"; // or 'processing'
      await order.save();

      await Payment.findOneAndUpdate(
        { stripePaymentIntent: paymentIntentId },
        {
          paymentStatus: "paid",
          receiptURL: await this.getReceiptUrl(paymentIntentId),
        }
      );
    } catch (error) {
      throw new Error(`Error updating successful payment: ${error.message}`);
    }
  }

  /**
   * getReceiptUrl
   * -------------
   * Retrieves receipt URL from Stripe for completed payment
   */
  async getReceiptUrl(paymentIntentId) {
    try {
      const paymentIntent = await stripe.paymentIntents.retrieve(
        paymentIntentId
      );
      if (paymentIntent.charges.data.length > 0) {
        return paymentIntent.charges.data[0].receipt_url;
      }
      return null;
    } catch (error) {
      throw new Error(`Error retrieving receipt: ${error.message}`);
    }
  }
}

module.exports = new PaymentService();

/**
 * 4️⃣ Key Points to Remember
 * -------------------------
 * - PaymentIntent is always created on the backend
 * - client_secret is used by frontend to confirm payment
 * - Always validate order existence and status before creating payment
 * - Save internal Payment record to track history and status
 * - handleSuccessfulPayment updates DB after payment succeeds
 * - Stripe automatically handles payment processing, including failures
 */

/**
 * 5️⃣ Flow Diagram (Conceptual)
 * -----------------------------
 * Frontend (client)
 *     |
 *     | POST /createPayment {orderId, userId}
 *     v
 * Controller
 *     |
 *     | Calls paymentService.createPayment()
 *     v
 * PaymentService
 *     |
 *     | 1. Validate Order
 *     | 2. Create Stripe PaymentIntent
 *     | 3. Save Payment in MongoDB
 *     v
 * Returns client_secret to Frontend
 *     |
 *     | Frontend completes payment via Stripe SDK
 *     v
 * Stripe processes payment
 *     |
 *     | On success → call handleSuccessfulPayment() or webhook
 *     v
 * Backend updates Payment and Order status
 *     |
 *     v
 * Frontend shows payment success/failure
 */
