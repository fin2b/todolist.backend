import Sequelize from "sequelize";

export default class User extends Sequelize.Model {
  static init(sequelize) {
    super.init({
      id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
      username: {type: Sequelize.STRING, unique: true, allowNull: false},
      profileImg: {type: Sequelize.STRING, allowNull: true},
    }, {sequelize, modelName: 'user'})
  }
}

