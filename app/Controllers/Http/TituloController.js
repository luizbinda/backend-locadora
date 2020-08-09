"use strict";

const Titulo = use("App/Models/Titulo");
const TituloAtor = use("App/Models/TituloAtor");
const Database = use("Database");

class TituloController {
  async index({ request, response, view }) {
    const ator = request.input("ator");
    const categoria = request.input("categoria");
    if (ator) {
      const titulos = await Titulo.query()
        .whereHas("ator", (atorQuery) => atorQuery.where("ator_id", ator))
        .with("diretor")
        .with("classe")
        .with("ator")
        .orderBy("id", "desc")
        .fetch();
      return titulos;
    }
    if (categoria) {
      const titulos = await Titulo.query()
        .select("*")
        .where("categoria", categoria)
        .with("diretor")
        .with("classe")
        .with("ator")
        .orderBy("id", "desc")
        .fetch();
      return titulos;
    }
    const titulos = await Titulo.query()
      .select("*")
      .with("diretor")
      .with("classe")
      .with("ator")
      .orderBy("id", "desc")
      .fetch();
    return titulos;
  }

  async store({ request }) {
    const { ator_id, ...data } = request.only([
      "nome",
      "sinopse",
      "categoria",
      "ano",
      "diretor_id",
      "classe_id",
      "ator_id",
    ]);

    const transaction = await Database.beginTransaction();

    const titulo = await Titulo.create(data, transaction);

    for (const ator in ator_id) {
      const element = ator_id[ator];
      await TituloAtor.create(
        {
          ator_id: element,
          titulo_id: titulo.$attributes.id,
        },
        transaction
      );
    }

    transaction.commit();

    return titulo;
  }

  async show({ params, request, response, view }) {
    const titulo = await Titulo.query()
      .select("*")
      .where("id", params.id)
      .with("diretor")
      .with("classe")
      .with("ator.ator")
      .orderBy("id")
      .first();
    return titulo;
  }

  async update({ request }) {
    const { id, ator_id, ...data } = request.only([
      "id",
      "nome",
      "sinopse",
      "categoria",
      "ano",
      "diretor_id",
      "classe_id",
      "ator_id",
    ]);

    const titulo = await Titulo.find(id);
    const transaction = await Database.beginTransaction();

    await TituloAtor.query().where("titulo_id", id).delete();

    titulo.merge(data);
    await titulo.save();

    for (const ator in ator_id) {
      const element = ator_id[ator];
      await TituloAtor.create(
        {
          ator_id: element,
          titulo_id: titulo.$attributes.id,
        },
        transaction
      );
    }

    transaction.commit();

    return titulo;
  }

  async destroy({ params }) {
    const titulo = await Titulo.find(params.id);

    await titulo.delete();
  }
}

module.exports = TituloController;
