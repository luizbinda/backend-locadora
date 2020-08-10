"use strict";

const Antl = use("Antl");

class Locacao {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      data_devolucao_prevista: "required",
      valor: "required",
      multa: "required",
    };
  }

  get messages() {
    return Antl.list("validation");
  }
}

module.exports = Locacao;
