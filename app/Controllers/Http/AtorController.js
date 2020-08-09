"use strict";

const Ator = use("App/Models/Ator");

class AtorController {
  async index({ request, response, view }) {
    const atores = await Ator.query().select("*").orderBy("id", "desc").fetch();
    return atores;
  }

  async store({ request, response }) {
    const data = request.only(["nome"]);

    const ator = await Ator.create(data);

    return ator;
  }

  async show({ params, request, response, view }) {
    const ator = await Ator.query()
      .select("*")
      .where("id", params.id)
      .orderBy("id")
      .first();
    return ator;
  }

  async update({ request }) {
    const { id, ...data } = request.only(["id", "nome"]);

    const ator = await Ator.find(id);

    ator.merge(data);
    await ator.save();

    return ator;
  }

  async destroy({ params }) {
    const ator = await Ator.find(params.id);

    await ator.delete();
  }
}

module.exports = AtorController;
