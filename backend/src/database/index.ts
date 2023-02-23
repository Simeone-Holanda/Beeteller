import { Sequelize } from "sequelize-typescript";
import User from "./models/user";
import dbConfig from "../config/db";

const sequelize = new Sequelize(dbConfig[process.env.NODE_ENV])

const models = [
    User,
];

sequelize.addModels(models);

export default sequelize;
