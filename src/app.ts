import Fastify from "fastify";
import { loggerOption, registerEnv } from "./config";
import { registerAwilix } from "./ioc";

const app = Fastify({
  logger: loggerOption,
});

const configure = async () => {
  await registerEnv(app);
  await registerAwilix(app);
};
void configure();

export default app;
