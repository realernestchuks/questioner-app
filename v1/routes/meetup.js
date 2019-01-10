import express from 'express';
import meetupdb from '../models/meetupdb';
import meetupController from '../controllers/meetup';

const router = express.Router();

router.get('/api/v1/meetups', meetupController.getAllMeetups);
router.get('/api/v1/meetups/:id', meetupController.getOneMeetup);
router.post('/api/v1/meetups', meetupController.createMeetup);
router.put('/api/v1/meetups/:id', meetupController.updateMeetup);
router.delete('/api/v1/meetups/:id', meetupController.deleteMeetup);



export default router;
