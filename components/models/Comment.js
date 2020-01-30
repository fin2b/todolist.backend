import Sequelize from "sequelize";

export default class Comment extends Sequelize.Model {
  static init(sequelize) {
    super.init({
      id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
      text: {type: Sequelize.STRING, allowNull: false},
    }, {sequelize, modelName: 'comment'})
  }
}