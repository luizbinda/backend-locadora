"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ItemSchema extends Schema {
  up() {
    this.table("items", (table) => {
      table.integer("locacao_id").unsigned();
    });
  }

  down() {
    this.table("items", (table) => {
      table.dropColumn("locacao_id");
    });
  }
}

module.exports = ItemSchema;
