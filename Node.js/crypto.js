/*
===============================
NODE.JS CRYPTO MODULE NOTES
===============================
The `crypto` module in Node.js is built-in and provides cryptographic functionality:
- Hashing
- HMAC
- Symmetric encryption/decryption
- Asymmetric encryption/decryption
- Digital signatures
- Random token generation
*/

/* 
-------------------------------
1. IMPORTING CRYPTO
-------------------------------
*/
const crypto = require("crypto");

/* 
-------------------------------
2. HASHING
-------------------------------
- Converts data to fixed-length string
- Common algorithms: sha256, sha512, md5
*/
const hash = crypto.createHash("sha256");
hash.update("myPassword123");
const hashedPassword = hash.digest("hex");
console.log("Hashed:", hashedPassword);

/* 
-------------------------------
3. HMAC (HASH-BASED MESSAGE AUTHENTICATION)
-------------------------------
- Hash + secret key
- Ensures data integrity
*/
const hmac = crypto.createHmac("sha256", "mySecretKey");
hmac.update("importantData");
const hmacDigest = hmac.digest("hex");
console.log("HMAC:", hmacDigest);

/* 
-------------------------------
4. SYMMETRIC ENCRYPTION / DECRYPTION (AES)
-------------------------------
- Same key for encryption & decryption
*/
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32); // 32 bytes key
const iv = crypto.randomBytes(16); // Initialization vector

// Encrypt
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update("Hello Node", "utf8", "hex");
encrypted += cipher.final("hex");
console.log("Encrypted:", encrypted);

// Decrypt
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
console.log("Decrypted:", decrypted);

/* 
-------------------------------
5. ASYMMETRIC ENCRYPTION (RSA)
-------------------------------
- Public key encrypts, private key decrypts
*/
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
});

// Encrypt with public key
const encryptedData = crypto.publicEncrypt(
  publicKey,
  Buffer.from("Secret message")
);

// Decrypt with private key
const decryptedData = crypto.privateDecrypt(privateKey, encryptedData);
console.log("RSA Decrypted:", decryptedData.toString());

/* 
-------------------------------
6. DIGITAL SIGNATURES
-------------------------------
- Sign with private key, verify with public key
*/
const sign = crypto.createSign("SHA256");
sign.update("Important message");
sign.end();

const signature = sign.sign(privateKey, "hex");

// Verify signature
const verify = crypto.createVerify("SHA256");
verify.update("Important message");
verify.end();

console.log("Signature valid?", verify.verify(publicKey, signature, "hex")); // true

/* 
-------------------------------
7. RANDOM BYTES / TOKENS
-------------------------------
- Used for API keys, password reset tokens, etc.
*/
const token = crypto.randomBytes(16).toString("hex");
console.log("Random Token:", token);

/* 
-------------------------------
SUMMARY
-------------------------------
- `crypto` is built-in in Node.js
- Hashing → data integrity
- HMAC → hash + secret key
- Symmetric encryption → AES
- Asymmetric encryption → RSA
- Digital signatures → Sign & Verify
- Random bytes → Tokens / keys
*/
