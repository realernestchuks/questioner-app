import express from 'express';
import meetupdb from '../models/meetupdb';
import meetupController from '../controllers/meetup';
import questionsdb from '../models/questionsdb';
import questionsController from '../controllers/questions';

const router = express.Router();

//Meetups routes
router.get('/api/v1/meetups', meetupController.getAllMeetups);
router.get('/api/v1/meetups/:id', meetupController.getOneMeetup);
router.post('/api/v1/meetups', meetupController.createMeetup);
router.put('/api/v1/meetups/:id', meetupController.updateMeetup);
router.delete('/api/v1/meetups/:id', meetupController.deleteMeetup);

//Questions routes
router.get('/api/v1/questions', questionsController.getAllQuestions);

export default router;