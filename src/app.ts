import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import { loggerOption, registerEnv } from "./config";
import { injectDependencies, registerAwilix } from "./ioc";
import { globalErrorHandler } from "./hooks";

const isTest = process.env.NODE_ENV === "test";

const app = Fastify({
  logger: isTest ? false : loggerOption,
});

if (isTest) {
  injectDependencies(app);
}

const configure = async () => {
  await registerEnv(app);
  await registerAwilix(app);
};
void configure();

app.get("/home", (req: FastifyRequest, reply: FastifyReply) => {
  reply.status(200).send("Welcome to FService");
});

app.addHook("onError", globalErrorHandler);

export default app;
