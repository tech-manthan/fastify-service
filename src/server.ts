import app from "./app";
import { getConfig } from "./config/envConfig";
import { injectDependencies } from "./ioc";

const startServer = async () => {
  try {
    await app.ready();
    await app.listen({
      port: getConfig(app).PORT,
    });
    injectDependencies(app);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

void startServer();
