"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TokensSchema extends Schema {
  up() {
    this.create("diretores", (table) => {
      table.increments();
      table.string("nome").notNullable().unique();
      table.timestamps();
    });
  }

  down() {
    this.drop("diretores");
  }
}

module.exports = TokensSchema;
