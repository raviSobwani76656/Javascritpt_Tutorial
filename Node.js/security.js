/**
 * 🛡️ Securing Node.js Applications - Detailed Notes
 *
 * Security is CRUCIAL for Node.js apps, especially APIs and web apps.
 * Attackers often target vulnerabilities such as XSS, SQL injection, insecure authentication, etc.
 * Below are best practices with explanations and code examples.
 */

/////////////////////////////////////////////
// 1. Use HTTPS
/////////////////////////////////////////////

/**
 * - HTTPS encrypts data between client and server.
 * - Always use TLS certificates (Let's Encrypt, AWS ACM, etc.)
 * - Prevents Man-in-the-Middle (MITM) attacks.
 */

// Example using HTTPS in Node.js
const fs = require("fs");
const https = require("https");
const express = require("express");
const app = express();

const options = {
  key: fs.readFileSync("private-key.pem"),
  cert: fs.readFileSync("certificate.pem"),
};

https.createServer(options, app).listen(443, () => {
  console.log("Secure server running on https://localhost:443");
});

/////////////////////////////////////////////
// 2. Prevent SQL Injection
/////////////////////////////////////////////

/**
 * - Always use parameterized queries or ORM.
 * - Never directly inject user input into SQL queries.
 */

const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "test",
});

const userId = 1; // ❌ Don't trust user input
connection.query(
  "SELECT * FROM users WHERE id = ?",
  [userId],
  (err, results) => {
    if (err) throw err;
    console.log(results);
  }
);

/////////////////////////////////////////////
// 3. Prevent XSS (Cross-Site Scripting)
/////////////////////////////////////////////

/**
 * - Escape user input before rendering.
 * - Use libraries like helmet (adds security headers).
 */

const helmet = require("helmet");
app.use(helmet()); // Automatically sets headers like X-XSS-Protection, CSP, etc.

/////////////////////////////////////////////
// 4. Prevent CSRF (Cross-Site Request Forgery)
/////////////////////////////////////////////

/**
 * - CSRF tokens ensure requests come from trusted sources.
 */

const csrf = require("csurf");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(csrf({ cookie: true }));

app.get("/form", (req, res) => {
  res.send(`<form method="POST" action="/submit">
              <input type="hidden" name="_csrf" value="${req.csrfToken()}"/>
              <button type="submit">Submit</button>
            </form>`);
});

/////////////////////////////////////////////
// 5. Secure Authentication & Passwords
/////////////////////////////////////////////

/**
 * - Never store plain text passwords.
 * - Use bcrypt for hashing.
 * - Implement JWT securely.
 */

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const password = "userpassword123";

// Hashing password
bcrypt.hash(password, 10, (err, hash) => {
  console.log("Hashed Password:", hash);
});

// Verifying password
bcrypt.compare(password, hash, (err, result) => {
  console.log("Password match?", result);
});

// Creating secure JWT
const token = jwt.sign({ id: 1, role: "admin" }, "SECRET_KEY", {
  expiresIn: "1h",
});

/////////////////////////////////////////////
// 6. Input Validation & Sanitization
/////////////////////////////////////////////

/**
 * - Validate and sanitize user inputs.
 * - Prevent malicious scripts from entering the system.
 */

const { body, validationResult } = require("express-validator");

app.post(
  "/register",
  body("email").isEmail().normalizeEmail(),
  body("password").isLength({ min: 6 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    res.send("User registered securely!");
  }
);

/////////////////////////////////////////////
// 7. Environment Variables (Don't hardcode secrets!)
/////////////////////////////////////////////

/**
 * - Store secrets in `.env` file.
 * - Use process.env in Node.js.
 * - Never push .env to GitHub.
 */

require("dotenv").config();
const DB_PASSWORD = process.env.DB_PASSWORD;

/////////////////////////////////////////////
// 8. Rate Limiting & Brute-force Protection
/////////////////////////////////////////////

/**
 * - Prevents DDoS & brute force attacks.
 * - Limit requests per IP.
 */

const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100, // limit each IP
});

app.use(limiter);

/////////////////////////////////////////////
// 9. Avoid eval(), Function(), and insecure modules
/////////////////////////////////////////////

/**
 * - Never use `eval()` → allows arbitrary code execution.
 * - Regularly check dependencies for vulnerabilities:
 *   Run: `npm audit` and `npm audit fix`
 */

/////////////////////////////////////////////
// 10. Keep Node.js & Dependencies Updated
/////////////////////////////////////////////

/**
 * - Use latest stable Node.js version.
 * - Update dependencies regularly to patch security flaws.
 */

/////////////////////////////////////////////
// 🔑 Summary
/////////////////////////////////////////////

/**
 * ✅ Use HTTPS
 * ✅ Prevent SQL Injection
 * ✅ Prevent XSS & CSRF
 * ✅ Secure authentication (bcrypt + JWT)
 * ✅ Validate and sanitize input
 * ✅ Use environment variables
 * ✅ Implement rate limiting
 * ✅ Avoid dangerous functions like eval()
 * ✅ Keep dependencies updated
 */
