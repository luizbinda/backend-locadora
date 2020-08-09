"use strict";

const Locacao = use("App/Models/Locacao");
const Cliente = use("App/Models/Cliente");
const Item = use("App/Models/Item");
const Database = use("Database");

class LocacaoController {
  async index({ request, response, view }) {
    const locacoes = await Locacao.query()
      .select("*")
      .orderBy("id", "desc")
      .fetch();
    return locacoes;
  }

  async store({ request, response }) {
    const {
      cliente_id,
      data_devolucao_prevista,
      item_id,
      valor,
      multa,
    } = request.only([
      "cliente_id",
      "data_devolucao_prevista",
      "item_id",
      "valor",
      "multa",
    ]);

    const cliente = await Cliente.find(cliente_id);
    if (!cliente.ativo) {
      return response.status(404).json([{ message: "Cliente está em debito" }]);
    }

    const item = await Item.find(item_id);
    if (item.locacao_id) {
      const locacao = await Locacao.find(item.locacao_id);

      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      return response.status(404).json([
        {
          message: `Este Item já está Locado e está previsto para devolução ${locacao.data_devolucao_prevista
            .getDate()
            .toLocaleString("pt-BR")} de ${
            monthNames[
              locacao.data_devolucao_prevista.getMonth().toLocaleString("pt-BR")
            ]
          }`,
        },
      ]);
    }

    const transaction = await Database.beginTransaction();

    const locacao = await Locacao.create(
      {
        data_locacao: new Date(),
        data_devolucao_prevista,
        valor,
        item_id,
        cliente_id,
        multa,
      },
      transaction
    );

    transaction.commit();
    item.merge({ locacao_id: locacao.$attributes.id });
    await item.save();

    return locacao;
  }

  async show({ params, request, response, view }) {
    const locacao = await Locacao.query()
      .select("*")
      .where("id", params.id)
      .with("cliente")
      .orderBy("id")
      .first();
    return locacao;
  }

  async update({ request, response }) {
    const {
      id,
      cliente_id,
      data_devolucao_prevista,
      item_id,
      valor,
      multa,
    } = request.only([
      "id",
      "cliente_id",
      "data_devolucao_prevista",
      "item_id",
      "valor",
      "multa",
    ]);

    const locacao = await Locacao.find(id);

    const data_locao_array = locacao.data_locacao
      .toLocaleDateString("pt-BR")
      .split("/");
    const data_locacao_comparacao = new Date(data_locao_array[0]).getTime();
    const data_devolucao_prevista_comparacao = new Date(
      data_devolucao_prevista
    ).getTime();

    if (data_devolucao_prevista_comparacao < data_locacao_comparacao) {
      return response.status(404).json([
        {
          message:
            "Data de devolucao não pode ser menor que a Data de de locação",
        },
      ]);
    }

    locacao.merge({
      cliente_id,
      data_devolucao_prevista,
      item_id,
      valor,
      multa,
    });
    await locacao.save();

    const item = await Item.find(locacao.item_id);
    item.merge({ locacao_id: locacao.id });
    await item.save();

    return locacao;
  }

  async destroy({ params, response }) {
    const locacao = await Locacao.find(params.id);

    if (locacao.data_devolucao_efetiva)
      return response.status(404).json([
        {
          message:
            "locação possui um pagamento e, portanto, não pode ser cancelada",
        },
      ]);

    const item = await Item.find(locacao.item_id);
    item.merge({ locacao_id: null });
    await item.save();
    await locacao.delete();
  }
}

module.exports = LocacaoController;
