import {Project} from './models';

function retrieveAll() {
  return Project.findAll()
}

function retrieve(options) {
  return Project.findOne({where: {id: options.id}})
}

function createTitle(options) {
  return Project.create({title: options.title});
}

function update(options) {
  return Project.findOne({where: {id: options.id}})
    .then(project => project.update({title: options.title, description: options.description}))
}

function remove(options) {
  return Project.destroy({where: {id: options.id}})
}

export default {
  retrieveAll,
  retrieve,
  createTitle,
  update,
  remove,
}