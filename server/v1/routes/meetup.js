import express from 'express';
import meetupdb from '../models/meetupdb';
import meetupController from '../controllers/meetup';

const meetupRouter = express.Router();

meetupRouter.get('/api/v1/meetups', meetupController.getAllMeetups);
meetupRouter.get('/api/v1/meetups/:id', meetupController.getOneMeetup);
meetupRouter.post('/api/v1/meetups', meetupController.createMeetup);
meetupRouter.put('/api/v1/meetups/:id', meetupController.updateMeetup);
meetupRouter.delete('/api/v1/meetups/:id', meetupController.deleteMeetup);

export default meetupRouter;