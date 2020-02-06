import Sequelize from "sequelize";

export default class Todo extends Sequelize.Model {
  static init(sequelize ) {
    super.init({
      id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
      title: {type: Sequelize.STRING, allowNull: true},
      description: {type: Sequelize.STRING, allowNull: true},
    }, {sequelize, modelName: 'todo'})
  }
}