import Joi from 'joi';

function validateMeetup(meetup) {
	const schema = {
		createdOn: Joi.date().trim().required(),
		title: Joi.string().trim().required(),
		location: Joi.string().trim().required(),
		body: Joi.string().trim().required(),
		happeningOn: Joi.string().trim().requuired(),
		tag: Joi.string().trim().required()
	};

	return Joi.validate(meetup, schema);
}

export default validateMeetup;