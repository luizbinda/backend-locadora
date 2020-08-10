"use strict";
const Antl = use("Antl");
class Cliente {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      cpf: "unique:clientes",
      nome: "required",
      data_nascimento: "required",
      sexo_id: "required",
    };
  }

  get messages() {
    return Antl.list("validation");
  }
}

module.exports = Cliente;
