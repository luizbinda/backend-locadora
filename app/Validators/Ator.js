"use strict";

const Antl = use("Antl");

class Ator {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      nome: "required|unique:atores",
    };
  }

  get messages() {
    return Antl.list("validation");
  }
}

module.exports = Ator;
