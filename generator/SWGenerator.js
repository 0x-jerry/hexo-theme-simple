const fs = require("fs");
const path = require("path");
const generateServiceWorkers = require("generate-service-worker");

const serviceWorkers = generateServiceWorkers({
  cache: {
    offline: true,
    strategy: [
      {
        type: "race",
        matches: ["\\.(js|css|png|jpg|jpeg)"]
      }
    ]
  }
});

const wsPath = path.join(__dirname, "../source/ws.js");
fs.writeFileSync(wsPath, serviceWorkers.main);
