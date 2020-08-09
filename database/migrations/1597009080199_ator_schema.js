"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AtorSchema extends Schema {
  up() {
    this.rename("atores", "ators");
  }

  down() {
    this.rename("ators", "atores");
  }
}

module.exports = AtorSchema;
