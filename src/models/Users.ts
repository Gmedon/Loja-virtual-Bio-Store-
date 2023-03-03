import { Model, DataTypes } from "sequelize";

import { sequelize } from "../instances/mysql";

interface UserType extends Model {
    id: number,
    nome: string,
    cpf: string,
    email: string,
    telefone: string,
    login: string,
    senha: string
}

export const Users = sequelize.define<UserType>("usuarios", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING
    },
    cpf: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    telefone: {
        type: DataTypes.STRING
    },
    login: {
        type: DataTypes.STRING
    },
    senha: {
        type: DataTypes.STRING
    },

}, {
    tableName: "usuarios",
    timestamps: false
})