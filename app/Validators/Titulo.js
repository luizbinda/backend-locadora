"use strict";
const Antl = use("Antl");
class Titulo {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      nome: "required|unique:titulos",
      sinopse: "required",
      categoria: "required",
      ano: "required",
      diretor_id: "required",
      classe_id: "required",
      ator_id: "required",
    };
  }

  get messages() {
    return Antl.list("validation");
  }
}

module.exports = Titulo;
