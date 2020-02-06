import express from 'express';
import todoService from '../../services/todos';
const router = express.Router();

router.get('/:id', (req, res, next) => {
  const projectId = req.params.id;
  todoService.retrieveAll(projectId)
    .then(todos => console.log(todos))
    .catch(next);
});

router.post('/', (req, res, next) => {
  const {title, projectId} = req.body;
  todoService.create({title, projectId})
    .then(() => console.log('create'))
    .catch(next);
});

router.put('/', (req, res, next) => {
  const {description, projectId} = req.body;
  todoService.update({description, projectId})
    .then(() => console.log('update'))
    .catch(next);
});

router.delete('/', (req, res, next) => {
  const {id} = req.body;
  todoService.remove({id})
    .then(() => console.log('remove'))
    .catch(next);
});

export default router;