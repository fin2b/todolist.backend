import express from 'express';
import {Project} from "../../components/models";
const router = express.Router();

router.get('/', (req, res, next) => {
  Project.findAll().then(projects => console.log(projects));
});

export default router;