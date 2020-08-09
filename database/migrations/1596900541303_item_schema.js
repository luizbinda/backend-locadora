"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ItemSchema extends Schema {
  up() {
    this.create("items", (table) => {
      table.increments();
      table.string("numSerie").notNullable().unique();
      table.string("tipo").notNullable();
      table.timestamp("data_aquisicao").notNullable();
      table.integer("titulo_id").unsigned().references("id").inTable("titulos");
      table.timestamps();
    });
  }

  down() {
    this.drop("items");
  }
}

module.exports = ItemSchema;
