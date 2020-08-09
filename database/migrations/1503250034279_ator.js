"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("atores", (table) => {
      table.increments();
      table.string("nome").notNullable().unique();
      table.timestamps();
    });
  }

  down() {
    this.drop("atores");
  }
}

module.exports = UserSchema;
