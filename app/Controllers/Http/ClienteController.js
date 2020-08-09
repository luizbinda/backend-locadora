"use strict";

const Cliente = use("App/Models/Cliente");

class ClienteController {
  async index({ request, response, query }) {
    const dependente = request.input("dependente");
    const cliente_id = request.input("cliente_id");

    if (dependente) {
      const clientes = await Cliente.query()
        .select("*")
        .whereNull("cliente_id")
        .orderBy("id", "desc")
        .fetch();
      return clientes;
    } else if (cliente_id) {
      const clientes = await Cliente.query()
        .select("*")
        .where("cliente_id", cliente_id)
        .orderBy("id", "desc")
        .fetch();
      return clientes;
    } else {
      const clientes = await Cliente.query()
        .select("*")
        .orderBy("id", "desc")
        .fetch();
      return clientes;
    }
  }

  async store({ request, response }) {
    const {
      nome,
      sexo_id,
      telefone,
      data_nascimento,
      endereco,
      cpf,
      socio_id,
    } = request.only([
      "nome",
      "sexo_id",
      "telefone",
      "data_nascimento",
      "endereco",
      "cpf",
      "socio_id",
    ]);

    const cliente = await Cliente.create({
      nome,
      sexo: sexo_id,
      telefone,
      data_nascimento,
      endereco,
      cpf,
      cliente_id: socio_id,
    });

    return cliente;
  }

  async show({ params, request, response, view }) {
    const socio = request.input("socio");
    const dependente = request.input("dependente");

    if (socio) {
      const cliente = await Cliente.query()
        .select("*")
        .whereNull("cliente_id")
        .where("id", params.id)
        .orderBy("id")
        .first();
      return cliente;
    }
    if (dependente) {
      const cliente = await Cliente.query()
        .select("*")
        .whereNotNull("cliente_id")
        .where("id", params.id)
        .orderBy("id")
        .first();
      return cliente;
    }
  }

  async update({ request }) {
    const { id, ...data } = request.only([
      "id",
      "nome",
      "sexo",
      "telefone",
      "data_nascimento",
      "endereco",
      "cpf",
      "cliente_id",
    ]);

    const cliente = await Cliente.find(id);

    cliente.merge(data);
    await cliente.save();

    return cliente;
  }

  async destroy({ params }) {
    const cliente = await Cliente.find(params.id);

    await cliente.delete();
  }
}

module.exports = ClienteController;
