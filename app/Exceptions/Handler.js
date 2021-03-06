"use strict";

const Env = use("Env");
const BaseExceptionHandler = use("BaseExceptionHandler");
const Youch = use("youch");

class ExceptionHandler extends BaseExceptionHandler {
  async handle(error, { request, response }) {
    if (error.name === "ValidationException") {
      return response.status(error.status).send(error.messages);
    }
    if (Env.get("NODE_ENV") === "development") {
      const youch = new Youch(error, request.request);
      const erroJSON = await youch.toJSON();

      return response.status(error.status).send(erroJSON);
    }

    return response.status(error.status);
  }

  async report(error, { request }) {}
}

module.exports = ExceptionHandler;
