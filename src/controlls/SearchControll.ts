import { Request, Response } from "express"
import { Op } from "sequelize";

import { createObjectmenu } from "../helpers/ObjectMenu";
import { Products } from "../models/Products";

export const search = async (req: Request, res: Response) => {
    let query: string = await req.body.searchProduct as string;
    let tipoProduct = `Você pesquisou por "${query}"`
    let Produtos = await Products.findAll({
        where: {
            nome: {
                [Op.like]: `%${query}%`
            }
        }
    });
    res.render("landingPage", {
        menu: createObjectmenu(""),
        Produtos,
        tipoProduct
    })
};


export const AddProduct = async (req: Request, res: Response) => {
    let ProdutosTotal = await Products.findAll()
    let nome = req.body.nome_produto;
    let descricao = req.body.descricao_produto;
    let cor = req.body.cor_produto;
    let material = req.body.material_produto;
    let estoque = req.body.estoque_atual;
    let min_estoque = req.body.min_estoque;
    let tipo = req.body.tipo_produto;
    let vendas = req.body.vendas_totais;
    let link = req.body.link_img;
    let preco = req.body.valor;
    let valor_antigo = req.body.valor_antigo;
    let id = ProdutosTotal.length + 1;

    const novoproduto = Products.build({
        id,
        nome,
        descricao,
        cor,
        material,
        preco,
        estoque,
        min_estoque,
        tipo,
        vendas,
        link,
        valor_antigo
    })
    await novoproduto.save();

    let Produtos = await Products.findAll()
    res.redirect("/areadm")
};

export const EditProduct = async (req: Request, res: Response) => {
    let id = req.query.id;
    let ProductEdit = await Products.findAll({
        where: {
            id
        }
    })

    res.render("formDelectEdit", {
        ProductEdit
    })
};

export const FinProductEdit = async (req: Request, res: Response) => {
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let cor = req.body.cor;
    let material = req.body.material;
    let estoque = req.body.estoque;
    let min_estoque = req.body.min_estoque;
    let tipo = req.body.tipo_produto;
    let vendas = req.body.vendas;
    let link = req.body.link;
    let preco = req.body.preco;
    let valor_antigo = req.body.valor_antigo;
    let id2 = req.body.id;
    let ProductEdit = await Products.findAll({
        where: {
            id: id2
        }
    })
    let produtos = ProductEdit[0]
    produtos.id = id2;
    produtos.nome = nome;
    produtos.descricao = descricao;
    produtos.cor = cor;
    produtos.material = material;
    produtos.estoque = estoque;
    produtos.min_estoque = min_estoque;
    produtos.tipo = tipo;
    produtos.vendas = vendas;
    produtos.link = link;
    produtos.preco = preco;
    produtos.valor_antigo = valor_antigo;
    await produtos.save()

    res.redirect("/areadm")
};

export const DelectProduct = async (req: Request, res: Response) => {
    let id = req.body.id;
    await Products.destroy({
        where: {
            id
        }
    })
    res.redirect("/areadm")
}