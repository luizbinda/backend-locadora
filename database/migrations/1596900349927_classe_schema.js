"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ClasseSchema extends Schema {
  up() {
    this.create("classes", (table) => {
      table.increments();
      table.string("nome").notNullable().unique();
      table.float("valor").notNullable();
      table.integer("prazo_devolucao").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("classes");
  }
}

module.exports = ClasseSchema;
