import express from 'express';
import meetupdb from '../models/meetupdb';
import meetupController from '../controllers/meetup';

const router = express.Router();

router.post('/api/v1/meetups', meetupController.createMeetup);
router.get('/api/v1/meetups', meetupController.getAllMeetups);
<<<<<<< HEAD
router.get('/api/v1/meetups/:id', meetupController.getOneMeetup);
=======
>>>>>>> ft-get-all-meetups-endpoint-163074304


export default router;
