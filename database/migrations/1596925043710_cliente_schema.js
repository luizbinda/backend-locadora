"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ClienteSchema extends Schema {
  up() {
    this.create("clientes", (table) => {
      table.increments();
      table.string("nome").notNullable();
      table.string("sexo").notNullable();
      table.timestamp("data_nascimento").notNullable();
      table.string("endereco");
      table.string("telefone");
      table.string("cpf").unique();
      table
        .integer("cliente_id")
        .unsigned()
        .references("id")
        .inTable("clientes");
      table.timestamps();
    });
  }

  down() {
    this.drop("clientes");
  }
}

module.exports = ClienteSchema;
