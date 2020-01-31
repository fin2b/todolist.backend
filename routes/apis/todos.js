import express from 'express';
import {Todo} from "../../components/models";
const router = express.Router();

router.get('/', (req, res, next) => {
  Todo.findAll().then(todos => console.log(todos)).catch(next);
});

router.post('/', (req, res, next) => {
  const {title, description} = req.body;
  console.log('this ', Todo);
  Todo.create({title, description})
    .then(() => console.log('create'))
    .catch(next);
});

export default router;