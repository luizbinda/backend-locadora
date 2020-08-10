"use strict";

const Diretor = use("App/Models/Diretor");

class DiretorController {
  async index({ request, response, view }) {
    const diretores = await Diretor.query()
      .select("*")
      .orderBy("id", "desc")
      .fetch();
    return diretores;
  }

  async store({ request, response }) {
    const data = request.only(["nome"]);

    const diretor = await Diretor.create(data);

    return diretor;
  }

  async show({ params, request, response, view }) {
    const diretor = await Diretor.query()
      .select("*")
      .where("id", params.id)
      .orderBy("id")
      .first();
    return diretor;
  }

  async update({ request }) {
    const { id, ...data } = request.only(["id", "nome"]);

    const diretor = await Diretor.find(id);

    diretor.merge(data);
    await diretor.save();

    return diretor;
  }

  async destroy({ params }) {
    const diretor = await Diretor.find(params.id);

    await Diretor.delete();
  }
}

module.exports = DiretorController;
