"use strict";

const Antl = use("Antl");

class Classe {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      nome: "required|unique:classes",
      valor: "required|number",
      prazo_devolucao: "required",
    };
  }

  get messages() {
    return Antl.list("validation");
  }
}

module.exports = Classe;
