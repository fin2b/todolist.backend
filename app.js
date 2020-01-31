import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import {projectsRouter, todosRouter, usersRouter} from './routes/apis';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('/*', function (req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  res.header('Access-Control-Allow-Credentials', true);
  if (!(req.method == 'OPTIONS' || req.method == 'GET' || req.method == 'POST' || req.method == 'DELETE' || req.method == 'PUT')) {
    res.status(405).end();
  } else {
    next();
  }
});

app.use('/', indexRouter);
app.use('/api/user', usersRouter);
app.use('/api/project', projectsRouter);
app.use('/api/todo', todosRouter);

/**
 * restful setting
 */
// put, delete method 처리에 필요
// app.use(methodOverride());
// CORS 헤더 설정



export default app;
