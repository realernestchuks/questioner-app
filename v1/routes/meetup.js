import express from 'express';
import meetupdb from '../models/meetupdb';
import meetupController from '../controllers/meetup';

const router = express.Router();

router.post('/api/v1/meetups', meetupController.createMeetup);
router.get('/api/v1/meetups', meetupController.getAllMeetups);


export default router;
