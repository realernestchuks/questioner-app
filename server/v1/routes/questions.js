import express from 'express';
import questionsdb from '../models/questionsdb';
import questionsController from '../controllers/questions';

const questionRouter = express.Router();

questionRouter.get('/api/v1/questions', questionsController.getAllQuestions);
questionRouter.get('/api/v1/questions/:id', questionsController.getOneQuestion);

export default questionRouter;