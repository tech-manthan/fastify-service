import path from "node:path";

const loggerOption = {
  transport: {
    targets: [
      {
        level: "error",
        target: "pino/file",
        options: {
          destination: path.resolve(__dirname, "../../app-logs/error.logs"),
        },
      },
      {
        level: "info",
        target: "pino/file",
        options: {
          destination: path.resolve(__dirname, "../../app-logs/combined.logs"),
        },
      },
      {
        level: "info", // Log everything from 'info' and above to the console
        target: "pino-pretty", // Pretty-print logs for readability
        options: {
          translateTime: "SYS:standard", // Adds timestamps
          ignore: "pid,hostname", // Removes unnecessary fields
        },
      },
    ],
  },
};

export default loggerOption;
