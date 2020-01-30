import Sequelize from 'sequelize';

export default class Project extends Sequelize.Model {
  static init(sequelize) {
    super.init({
      id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
      title: {type: Sequelize.STRING, unique: true, allowNull: false},
      description: {type: Sequelize.STRING, allowNull: true},
    }, {sequelize, modelName: 'project'})
  }
}