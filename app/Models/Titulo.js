"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Titulo extends Model {
  classe() {
    return this.belongsTo("App/Models/Classe");
  }

  diretor() {
    return this.belongsTo("App/Models/Diretor");
  }

  item() {
    return this.hasMany("App/Models/Item");
  }

  ator() {
    return this.hasMany("App/Models/TituloAtor");
  }
}

module.exports = Titulo;
