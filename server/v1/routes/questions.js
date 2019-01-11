import express from 'express';
import questionsdb from '../models/questionsdb';
import questionsController from '../controllers/questions';

const questionRouter = express.Router();

questionRouter.get('/api/v1/questions', questionsController.getAllQuestions);

export default questionRouter;