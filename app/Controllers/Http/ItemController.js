"use strict";

const Item = use("App/Models/Item");

class ItemController {
  async index({ request, response, view }) {
    const items = await Item.query().select("*").orderBy("id", "desc").fetch();
    return items;
  }

  async store({ request, response }) {
    const data = request.only([
      "numSerie",
      "tipo",
      "data_aquisicao",
      "titulo_id",
    ]);

    const item = await Item.create(data);

    return item;
  }

  async show({ params, request, response, view }) {
    const numSerie = request.input("numSerie");
    if (numSerie) {
      const item = await Item.query()
        .select("*")
        .where("numSerie", params.id)
        .with("titulo.classe")
        .orderBy("id")
        .first();
      return item;
    } else {
      const item = await Item.query()
        .select("*")
        .where("id", params.id)
        .with("titulo.classe")
        .orderBy("id")
        .first();
      return item;
    }
  }

  async update({ request }) {
    const { id, ...data } = request.only([
      "id",
      "numserie",
      "tipo",
      "data_aquisicao",
      "titulo_id",
    ]);

    const item = await Item.find(id);

    item.merge(data);
    await item.save();

    return item;
  }

  async destroy({ params }) {
    const item = await Item.find(params.id);

    await item.delete();
  }
}

module.exports = ItemController;
