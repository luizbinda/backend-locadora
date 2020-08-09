"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TituloSchema extends Schema {
  up() {
    this.create("titulos", (table) => {
      table.increments();
      table.string("nome").notNullable();
      table.string("sinopse").notNullable();
      table.string("categoria").notNullable();
      table.timestamp("ano").notNullable();
      table
        .integer("diretor_id")
        .unsigned()
        .references("id")
        .inTable("diretores");
      table.integer("classe_id").unsigned().references("id").inTable("classes");
      table.timestamps();
    });
  }

  down() {
    this.drop("titulos");
  }
}

module.exports = TituloSchema;
