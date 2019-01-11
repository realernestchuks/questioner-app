import questionsdb from '../models/questionsdb';
import validateQuestion from "../validations/questions";

class QuestionsController {
	getAllQuestions(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'questionss retrieved successfully',
      question: questionsdb,
    });
  }

  getOneQuestion(req, res) {
    const id = parseInt(req.params.id, 10);
    questionsdb.map((question) => {
      if (question.id === id) {
        return res.status(200).send({
          success: 'true',
          message: 'question retrieved successfully',
          question,
        });
      }
    });
    return res.status(404).send({
      success: 'false',
      message: 'question does not exist',
    });
  }

  createQuestion(req, res) {
    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    } else if (!req.body.body) {
      return res.status(400).send({
        success: 'false',
        message: 'body is required',
      });
    } else if(!req.body.createdOn) {
  	return res.status(400).send({
  		success: 'false',
  		message: 'Date is required'
  	})
  } else if(!req.body.createdBy) {
  	return res.status(400).send({
  		success: 'false',
  		message: 'question creator is required'
  	})
  } 

    const question = {
      id: questionsdb.length + 1,
      title: req.body.title,
      body: req.body.body,
      createdOn: req.body.createdOn,
      createdBy: req.body.createdBy,
      votes: 0
    };
    
    questionsdb.push(question);
    return res.status(201).send({
      success: 'true',
      message: 'question added successfully',
      question,
    });
  }
}

const questionsController = new QuestionsController();
export default questionsController;