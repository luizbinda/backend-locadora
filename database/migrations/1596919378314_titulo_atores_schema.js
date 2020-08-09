"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TituloAtoresSchema extends Schema {
  up() {
    this.rename("titulo_atores", "titulo_ators");
  }

  down() {
    this.rename("titulo_ators", "titulo_atores");
  }
}

module.exports = TituloAtoresSchema;
