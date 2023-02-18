import { Sequelize } from "sequelize-typescript";
import User from "./models/user";
import { config } from '../config/db'

const sequelize = new Sequelize({
    database: 'Beeteller',
    dialect: 'sqlite',
    username: 'root',
    password: '',
    storage: './database',
})

const models = [
    User,
];

sequelize.addModels(models);

export default sequelize;
