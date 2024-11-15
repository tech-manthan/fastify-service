import fastifyEnv from "@fastify/env";
import Fastify from "fastify";
import { registerEnv } from "./config";

const app = Fastify({
  logger: true,
});

const configure = async () => {
  await registerEnv(app);
};

configure();

export default app;
