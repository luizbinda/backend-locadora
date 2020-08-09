"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class DiretorSchema extends Schema {
  up() {
    this.rename("diretores", "diretors");
  }

  down() {
    this.rename("diretors", "diretores");
  }
}

module.exports = DiretorSchema;
