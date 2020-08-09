"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Item extends Model {
  titulo() {
    return this.belongsTo("App/Models/Titulo");
  }
}

module.exports = Item;
