"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Cliente extends Model {
  dependente() {
    return this.hasMany("App/Models/Cliente");
  }

  locacao() {
    return this.hasMany("App/Models/Locacao");
  }
}

module.exports = Cliente;
