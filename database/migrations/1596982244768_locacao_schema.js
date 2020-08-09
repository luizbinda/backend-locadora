"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class LocacaoSchema extends Schema {
  up() {
    this.create("locacaos", (table) => {
      table.increments();
      table.timestamp("data_locacao").notNullable();
      table.timestamp("data_devolucao_prevista").notNullable();
      table.timestamp("data_devolucao_efetiva");
      table.float("valor").notNullable();
      table.float("multa");
      table
        .integer("cliente_id")
        .unsigned()
        .references("id")
        .inTable("clientes")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("item_id")
        .unsigned()
        .references("id")
        .inTable("items")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("locacaos");
  }
}

module.exports = LocacaoSchema;
