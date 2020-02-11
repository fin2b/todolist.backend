import express from 'express';
import todoService from '../../services/todos';
const router = express.Router();

router.get('/:id', (req, res, next) => {
  const projectId = req.params.id;
  todoService.retrieveAll({projectId})
    .then(todos => res.json(todos))
    .catch(next);
});

router.post('/', (req, res, next) => {
  const {title, projectId} = req.body;
  todoService.create({title, projectId})
    .then(() => {
      res.status(200);
      res.end();
    }).catch(next);
});

router.put('/', (req, res, next) => {
  const {description, todoId} = req.body;
  todoService.update({description, todoId})
    .then(() => {
      res.status(200);
      res.end();
    }).catch(next);
});

router.delete('/', (req, res, next) => {
  const {id} = req.body;
  todoService.remove({id})
    .then(() => {
      res.status(200);
      res.end();
    })
    .catch(next);
});

export default router;