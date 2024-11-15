import {
  DoneFuncWithErrOrRes,
  FastifyError,
  FastifyReply,
  FastifyRequest,
} from "fastify";

function globalErrorHandler(
  req: FastifyRequest,
  reply: FastifyReply,
  error: FastifyError,
  done: DoneFuncWithErrOrRes,
) {
  //   const statusCode = error.statusCode || 500;

  req.log.error(error);

  done();
}

export default globalErrorHandler;
