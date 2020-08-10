"use strict";
const Classe = use("App/Models/Classe");

class ClasseController {
  async index({ request, response, view }) {
    const classes = await Classe.query()
      .select("*")
      .orderBy("id", "desc")
      .fetch();
    return classes;
  }

  async store({ request, response }) {
    const data = request.only(["nome", "valor", "prazo_devolucao"]);

    const classe = await Classe.create(data);

    return classe;
  }

  async show({ params, request, response, view }) {
    const classe = await Classe.query()
      .select(["id", "nome", "valor", "prazo_devolucao"])
      .where("id", params.id)
      .orderBy("id")
      .first();
    return classe;
  }

  async update({ request }) {
    const { id, ...data } = request.only([
      "id",
      "nome",
      "valor",
      "prazo_devolucao",
    ]);

    const classe = await Classe.find(id);

    classe.merge(data);
    await classe.save();

    return classe;
  }

  async destroy({ params }) {
    const classe = await Classe.find(params.id);

    await Classe.delete();
  }
}

module.exports = ClasseController;
