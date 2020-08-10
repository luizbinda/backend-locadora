"use strict";

const Antl = use("Antl");

class Diretor {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      nome: "required|unique:diretors",
    };
  }

  get messages() {
    return Antl.list("validation");
  }
}

module.exports = Diretor;
