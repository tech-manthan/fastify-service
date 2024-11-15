import Fastify from "fastify";
import { registerEnv } from "./config";
import { registerAwilix } from "./ioc";

const app = Fastify({
  logger: true,
});

const configure = async () => {
  await registerEnv(app);
  await registerAwilix(app);
};

void configure();

export default app;
