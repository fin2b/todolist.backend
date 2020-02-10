import {Todo} from './models';

function retrieveAll(options) {
  return Todo.findAll({where: {projectId: options.projectId}})
}

function retrieve(options) {
  return Todo.findOne({where: {id: options.id, projectId: options.projectId}})
}

function create(options) {
  return Todo.create({title: options.title, projectId: options.projectId});
}

function update(options) {
  return Todo.findOne({where: {id: options.todoId}})
    .then(todo => todo.update({description: options.description}));
}

function remove(options) {
  return Todo.destroy({where: {id: options.id}})
}

export default {
  retrieveAll,
  retrieve,
  create,
  update,
  remove,
}