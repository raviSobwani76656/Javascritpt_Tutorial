/*
  =========================================================
  Horizontal Scaling in Node.js
  =========================================================

  1. What is Horizontal Scaling?
     - Horizontal scaling means adding more instances (servers or processes)
       of your application to handle more traffic.
     - Different from vertical scaling (increasing CPU/RAM of one server).
     - Works well for stateless applications (no dependency on server memory).

  2. Why Horizontal Scaling is Needed?
     - Node.js runs on a single thread by default (1 CPU core).
     - High-traffic apps may need multiple processes or servers.
     - Improves performance, availability, and fault tolerance.

  3. How to Apply Horizontal Scaling in Node.js?
     a) Using Cluster Module (single machine, multiple CPU cores)
     b) Running multiple Node.js instances on different servers (multi-machine)
     c) Using a Load Balancer (like Nginx or HAProxy) to distribute traffic
     d) Using Process Managers (like PM2) for automation

  4. Key Benefits:
     - Utilizes all CPU cores efficiently
     - Handles more concurrent users
     - Reduces downtime (auto-restart if one worker fails)
     - Scales out easily by adding more servers

  =========================================================
  Example 1: Horizontal Scaling using Cluster Module
  =========================================================
*/

const cluster = require("cluster");
const http = require("http");
const os = require("os");

if (cluster.isMaster) {
  // Get number of CPU cores
  const numCPUs = os.cpus().length;
  console.log(`Master process ${process.pid} is running`);

  // Fork workers for each CPU core
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Listen if a worker dies and restart it
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  // Worker processes run the application
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end(`Hello from Worker ${process.pid}`);
    })
    .listen(3000);

  console.log(`Worker ${process.pid} started`);
}

/*
  =========================================================
  Example 2: Horizontal Scaling using PM2 (simpler way)
  =========================================================

  // Install PM2 globally
  npm install pm2 -g

  // Start Node.js app using all CPU cores
  pm2 start app.js -i max

  // PM2 handles:
  // - Auto-restarting crashed workers
  // - Load balancing across CPU cores
  // - Monitoring logs and process stats

  =========================================================
  Example 3: Horizontal Scaling across Multiple Servers
  =========================================================

  // Suppose you have 3 servers running the Node.js app:
  // Server 1 -> 192.168.1.101:3000
  // Server 2 -> 192.168.1.102:3000
  // Server 3 -> 192.168.1.103:3000

  // Use a Load Balancer (Nginx) to distribute requests:

  /*
    upstream node_app {
        server 192.168.1.101:3000;
        server 192.168.1.102:3000;
        server 192.168.1.103:3000;
    }

    server {
        listen 80;

        location / {
            proxy_pass http://node_app;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
  */

// Benefits:
// - Requests are distributed evenly across servers
// - If one server fails, others handle the traffic
// - Scales horizontally by adding new servers easily

/*
  =========================================================
  Key Takeaways:
  =========================================================
  1. Horizontal scaling = more instances of app (multi-core or multi-server)
  2. Use Cluster module for **multi-core single machine**
  3. Use PM2 for **process management + multi-core scaling**
  4. Use Load Balancer (Nginx/HAProxy) for **multi-server scaling**
  5. Horizontal scaling works best with **stateless apps** or shared session store
  6. Combine with caching, DB scaling, and CDNs for high-traffic apps
*/
