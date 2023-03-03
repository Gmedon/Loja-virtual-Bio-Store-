import { Model, DataTypes } from "sequelize";

import { sequelize } from "../instances/mysql";

interface useProducts extends Model {
    id: number,
    nome: string,
    descricao: string,
    cor: string,
    material: string,
    preco: number,
    estoque: number,
    min_estoque: number,
    tipo: string,
    vendas: number,
    link: string,
    valor_antigo: number
};

export const Products = sequelize.define<useProducts>("produtos", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.STRING
    },
    cor: {
        type: DataTypes.STRING
    },
    material: {
        type: DataTypes.STRING
    },
    preco: {
        type: DataTypes.INTEGER
    },
    estoque: {
        type: DataTypes.INTEGER
    },
    min_estoque: {
        type: DataTypes.INTEGER
    },
    tipo: {
        type: DataTypes.STRING
    },
    vendas: {
        type: DataTypes.INTEGER
    },
    link: {
        type: DataTypes.STRING
    },
    valor_antigo: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: "produtos",
    timestamps: false
});
