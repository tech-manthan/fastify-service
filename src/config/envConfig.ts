import fastifyEnv from "@fastify/env";
import { FastifyInstance } from "fastify";
import path from "node:path";

type CONFIG = {
  NODE_ENV: string;
  PORT: number;
};

const envSchema = {
  type: "object",
  required: ["NODE_ENV", "PORT"],
  properties: {
    NODE_ENV: { type: "string", default: "dev" },
    PORT: { type: "number", default: 3000 },
  },
};

const envOptions = {
  confKey: "config", // This attaches the parsed config to fastify.config
  schema: envSchema,
  dotenv: {
    path: path.join(__dirname, `../../.env.${process.env.NODE_ENV ?? "dev"}`),
  },
};

const registerEnv = async (app: FastifyInstance) => {
  try {
    app.register(fastifyEnv, envOptions);
    await app.after();
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

const getConfig = (app: FastifyInstance) => {
  return app.getEnvs<CONFIG>();
};

export { getConfig };

export default registerEnv;
