"use strict";

const Locacao = use("App/Models/Locacao");
const Item = use("App/Models/Item");

class DevolucaoController {
  async store({ request, response }) {
    const { id } = request.only(["id"]);

    const locacao = await Locacao.find(id);

    const item = await Item.find(locacao.item_id);
    item.merge({ locacao_id: null });
    await item.save();

    locacao.merge({ data_devolucao_efetiva: new Date() });
    await locacao.save();

    return locacao;
  }
}

module.exports = DevolucaoController;
