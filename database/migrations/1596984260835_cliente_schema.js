"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ClienteSchema extends Schema {
  up() {
    this.table("clientes", (table) => {
      table.boolean("ativo").default(true);
    });
  }

  down() {
    this.table("clientes", (table) => {
      table.dropColumn("ativo");
    });
  }
}

module.exports = ClienteSchema;
