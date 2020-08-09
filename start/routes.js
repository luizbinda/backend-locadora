"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.post("ator", "AtorController.store").validator("Ator");
Route.get("ator", "AtorController.index");
Route.get("ator/:id", "AtorController.show");
Route.put("ator", "AtorController.update");
Route.delete("ator/:id", "AtorController.destroy");

Route.post("diretor", "DiretorController.store");
Route.get("diretor", "DiretorController.index");
Route.get("diretor/:id", "DiretorController.show");
Route.put("diretor", "DiretorController.update");
Route.delete("diretor/:id", "DiretorController.destroy");

Route.post("classe", "ClasseController.store");
Route.get("classe", "ClasseController.index");
Route.get("classe/:id", "ClasseController.show");
Route.put("classe", "ClasseController.update");
Route.delete("classe/:id", "ClasseController.destroy");

Route.post("item", "ItemController.store");
Route.get("item", "ItemController.index");
Route.get("item/:id", "ItemController.show");
Route.put("item", "ItemController.update");
Route.delete("item/:id", "ItemController.destroy");

Route.post("titulo", "TituloController.store");
Route.get("titulo", "TituloController.index");
Route.get("titulo/:id", "TituloController.show");
Route.put("titulo", "TituloController.update");
Route.delete("titulo/:id", "TituloController.destroy");

Route.post("cliente", "ClienteController.store");
Route.get("cliente", "ClienteController.index");
Route.get("cliente/:id", "ClienteController.show");
Route.put("cliente", "ClienteController.update");
Route.delete("cliente/:id", "ClienteController.destroy");

Route.post("locacao", "LocacaoController.store");
Route.get("locacao", "LocacaoController.index");
Route.get("locacao/:id", "LocacaoController.show");
Route.put("locacao", "LocacaoController.update");
Route.delete("locacao/:id", "LocacaoController.destroy");

Route.post("devolucao", "DevolucaoController.store");
