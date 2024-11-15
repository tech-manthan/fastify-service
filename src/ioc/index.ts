import { fastifyAwilixPlugin } from "@fastify/awilix";
import { FastifyInstance } from "fastify";

import { diContainerClassic } from "@fastify/awilix";
import { asValue } from "awilix";
import { PrismaClient } from "@prisma/client";

export const registerAwilix = async (app: FastifyInstance) => {
  try {
    app.register(fastifyAwilixPlugin, {
      disposeOnClose: true,
      disposeOnResponse: true,
      strictBooleanEnforced: true,
    });
    await app.after();
    app.log.info({}, "awilix registered successfully");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

const isDepenciesInjected = false;
const prismaClient = new PrismaClient();

export const injectDependencies = (app: FastifyInstance) => {
  if (!isDepenciesInjected) {
    diContainerClassic.register({
      logger: asValue(app.log),
      prismaClient: asValue(prismaClient),
    });
  }
  app.log.info({}, "dependencies injected successfully");
  return diContainerClassic;
};
