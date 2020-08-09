"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Diretor extends Model {
  titulo() {
    return this.hasMany("App/Models/Titulo");
  }
}

module.exports = Diretor;
