import app from './app.js'
import config from './config/env.js'
import https from "https";
import cron from "node-cron";

function keepAlive(url) {
  https
    .get(url, (res) => {
      console.log(`Status: ${res.statusCode}`);
    })
    .on("error", (error) => {
      console.error(`Error: ${error.message}`);
    });
}

cron.schedule("*/15 * * * *", () => {
  try {
    keepAlive(
      "https://hng-task-0-x9vo.onrender.com/api/info"
    );
    console.log("Pinging the server every 5 minutes");
  } catch (error) {
    console.error("Error during cron job execution:", error.message);
  }
});

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
