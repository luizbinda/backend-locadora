"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Classe extends Model {
  titulo() {
    return this.hasMany("App/Models/Titulo");
  }
}

module.exports = Classe;
