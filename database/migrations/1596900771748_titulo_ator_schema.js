"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TituloAtorSchema extends Schema {
  up() {
    this.create("titulo_atores", (table) => {
      table.increments();
      table.integer("ator_id").unsigned().references("id").inTable("atores");
      table.integer("titulo_id").unsigned().references("id").inTable("titulos");
      table.timestamps();
    });
  }

  down() {
    this.drop("titulo_atores");
  }
}

module.exports = TituloAtorSchema;
