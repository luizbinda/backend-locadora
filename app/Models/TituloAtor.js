"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Titulo_ator extends Model {
  ator() {
    return this.belongsTo("App/Models/Ator");
  }

  titulo() {
    return this.belongsTo("App/Models/Titulo");
  }
}

module.exports = Titulo_ator;
