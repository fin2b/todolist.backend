import Sequelize from 'sequelize';
import {Project, User, Todo, Comment} from './models';
import local from '../env/local';

const sequelize = new Sequelize(
  local.database.database,
  local.database.username,
  local.database.password, {
    dialect: local.database.dialect
  });

/**
 * initiate Model
 * @returns {Promise<this>}
 */
function init() {
  Project.init(sequelize);
  User.init(sequelize);
  Todo.init(sequelize);
  Comment.init(sequelize);
  User.hasMany(Project);
  Project.hasMany(Todo);
  Todo.hasMany(Comment);
  User.hasMany(Comment);
  Comment.belongsTo(User);
  return process.argv.indexOf("db") > 0 ? drop().then(setting) : setting();
}

function setting() {
  return sequelize.sync()
    .then(() => console.log('synchronized'));
}

function drop() {
  return sequelize.drop()
    .then(console.log);
}

/**
 * connect database
 * @returns {Promise<void>}
 */
export default () => sequelize.authenticate()
  .then(() => console.log('connection successfully'))
  .then(init)
  .catch(err => console.error('unable to connect to database: ', err));