"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Ator extends Model {
  tituloAtor() {
    return this.hasMany("App/Models/TituloAtor");
  }
}

module.exports = Ator;
