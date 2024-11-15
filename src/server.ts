import app from "./app";
import { getConfig } from "./config/envConfig";

const startServer = async () => {
  try {
    await app.ready();
    await app.listen({
      port: getConfig(app).PORT,
    });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

startServer();
