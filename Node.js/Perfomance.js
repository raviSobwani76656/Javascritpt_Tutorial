// ==========================================
// 📘 NODE.JS PERFORMANCE OPTIMIZATION NOTES
// ==========================================

// 🚀 1. Use Asynchronous and Non-Blocking Code
// --------------------------------------------
// Node.js is single-threaded, so blocking operations can degrade performance.
// Always use async functions, promises, or callbacks for I/O operations.

const fs = require("fs");

// ❌ Blocking (Synchronous)
const data = fs.readFileSync("file.txt", "utf-8");
console.log(data);

// ✅ Non-Blocking (Asynchronous)
fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// ==========================================

// 🧩 2. Use Clustering or Worker Threads
// --------------------------------------------
// Utilize all CPU cores for better scalability.

const cluster = require("cluster");
const http = require("http");
const os = require("os");

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) cluster.fork();
} else {
  http
    .createServer((req, res) => {
      res.end("Handled by worker process");
    })
    .listen(3000);
}

// ==========================================

// ⚡ 3. Use Caching to Reduce Repeated Computations or DB Calls
// --------------------------------------------
const cache = new Map();

function getUserData(id) {
  if (cache.has(id)) {
    return cache.get(id); // Fast retrieval
  }
  const data = { id, name: "User" + id }; // Simulated DB call
  cache.set(id, data);
  return data;
}

// ==========================================

// 🧠 4. Optimize Middleware and Routing in Express
// --------------------------------------------
// Avoid unnecessary middleware and perform route-level middleware loading.

const express = require("express");
const app = express();

// ✅ Use middleware only where needed
app.get("/api/user", (req, res) => {
  res.json({ user: "Ravi" });
});

// ==========================================

// 🧵 5. Use Compression
// --------------------------------------------
// Compress response data to reduce payload size and improve transfer speed.

const compression = require("compression");
app.use(compression());

// ==========================================

// 📦 6. Use Environment Variables for Config
// --------------------------------------------
// Avoid hardcoding configurations.

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

// ==========================================

// 🔁 7. Use a Reverse Proxy (Nginx)
// --------------------------------------------
// Use Nginx in front of Node.js for load balancing, caching, and SSL termination.

// ==========================================

// ⚙️ 8. Optimize Database Queries
// --------------------------------------------
// Use indexes and projection (fetch only required fields).

// MongoDB Example
db.users.find({}, { name: 1, email: 1 }); // ✅ Only select needed fields

// ==========================================

// 🧰 9. Use PM2 for Process Management
// --------------------------------------------
// PM2 handles restarts, monitoring, and load balancing.

// Run using: pm2 start app.js -i max

// ==========================================

// 🧪 10. Monitor and Profile Your Application
// --------------------------------------------
// Use tools like New Relic, Clinic.js, or Node’s built-in profiler to find bottlenecks.

// Run profiling: node --inspect app.js
// Open chrome://inspect to debug

// ==========================================

// 🧮 11. Use Streams for Large Data Processing
// --------------------------------------------
// Avoid loading large files into memory all at once.

const readStream = fs.createReadStream("bigFile.txt");
readStream.on("data", (chunk) => console.log("Reading chunk"));

// ==========================================

// 🚅 12. Keep Dependencies Lean
// --------------------------------------------
// Remove unused npm packages to reduce load time and security risk.

// Run: npm prune

// ==========================================

// ✅ SUMMARY OF BEST PRACTICES
// --------------------------------------------
// - Use async/await and avoid blocking code
// - Apply caching and compression
// - Optimize database queries
// - Scale with clustering or PM2
// - Use Nginx as a reverse proxy
// - Monitor and profile regularly
// - Optimize middleware usage
// - Stream large files
// - Use environment variables for configs
