import express from 'express';
import projectService from '../../services/projects';

const router = express.Router();


router.get('/', (req, res, next) => {
  projectService.retrieveAll()
    .then(projects => {
    res.json(projects);
  }).catch(next);
});

router.get('/:id', (req, res, next) => {
  const {id} = req.params;
  projectService.retrieve(id)
    .then(project => {
      res.status(200);
      res.json(project);
    }).catch(next);
});

router.post('/', (req, res, next) => {
  const {title} = req.body;
  projectService.create({title})
    .then(() => {
      res.status(200);
      res.end();
    }).catch(next);
});

export default router;