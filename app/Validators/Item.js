"use strict";

const Antl = use("Antl");

class Item {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      data_aquisicao: "required",
      numSerie: "required",
      tipo: "required",
      titulo_id: "required",
    };
  }

  get messages() {
    return Antl.list("validation");
  }
}

module.exports = Item;
