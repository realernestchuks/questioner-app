import meetupdb from '../models/meetupdb';

class MeetupsController {
  getAllMeetups(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'meetups retrieved successfully',
      meetup: meetupdb,
    });
  }
 
  getOneMeetup(req, res) {
    const id = parseInt(req.params.id, 10);
    meetupdb.map((meetup) => {
      if (meetup.id === id) {
        return res.status(200).send({
          success: 'true',
          message: 'meetup retrieved successfully',
          meetup,
        });
      }
    });
    return res.status(404).send({
      success: 'false',
      message: 'meetup does not exist',
    });
  }

  createMeetup(req, res) {
    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required',
      });
    } else if(!req.body.happeningOn) {
  	return res.status(400).send({
  		success: 'false',
  		message: 'Date is required'
  	})
  } else if(!req.body.location) {
  	return res.status(400).send({
  		success: 'false',
  		message: 'loction is required'
  	})
  }
    const meetup = {
      id: meetupdb.length + 1,
      title: req.body.title,
      description: req.body.description,
      happeningOn: req.body.happeningOn,
      location: req.body.location
    };
    meetupdb.push(meetup);
    return res.status(201).send({
      success: 'true',
      message: 'meetup added successfully',
      meetup,
    });
  }

  updateMeetup(req, res) {
    const id = parseInt(req.params.id, 10);
    let meetupFound;
    let itemIndex;
    meetupdb.map((meetup, index) => {
      if (meetup.id === id) {
        meetupFound = meetup;
        itemIndex = index;
      }
    });

    if (!meetupFound) {
      return res.status(404).send({
        success: 'false',
        message: 'meetup not found',
      });
    }

    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required',
      });
    } else if(!req.body.happeningOn) {
  	return res.status(400).send({
  		success: 'false',
  		message: 'Date is required'
  	})
  } else if(!req.body.location) {
  	return res.status(400).send({
  		success: 'false',
  		message: 'loction is required'
  	})
  }

    const newMeetup = {
      id: meetupFound.id,
      title: req.body.title || meetupFound.title,
      description: req.body.description || meetupFound.description,
      happeningOn: req.body.description || meetupFound.happeningOn,
      location: req.body.location || meetupFound.location,
    };

    meetupdb.splice(itemIndex, 1, newMeetup);

    return res.status(201).send({
      success: 'true',
      message: 'meetup added successfully',
      newMeetup,
    });
  }

  deleteMeetup(req, res) {
    const id = parseInt(req.params.id, 10);
    let meetupFound;
    let itemIndex;
    meetupdb.map((meetup, index) => {
      if (meetup.id === id) {
        meetupFound = meetup;
        itemIndex = index;
      }
    });  

    if (!meetupFound) {
      return res.status(404).send({
        success: 'false',
        message: 'meetup not found',
      });
    }
    meetupdb.splice(itemIndex, 1);

    return res.status(200).send({
      success: 'true',
      message: 'meetup deleted successfuly',
    });
  }
} 



const meetupController = new MeetupsController();
export default meetupController;