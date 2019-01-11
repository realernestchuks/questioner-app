import Joi from 'joi';

function validateQuestion(question) {
	const schema = {
        createdOn: Joi.string().trim().required(),
        title: Joi.string().trim().required(),
        body: Joi.string().required()
	};

	return Joi.validate(question, schema);
}

export default validateQuestion;