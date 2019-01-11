import questionsdb from '../models/questionsdb';

class QuestionsController {
	getAllQuestions(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'questionss retrieved successfully',
      question: questionsdb,
    });
  }
}

const questionsController = new QuestionsController();
export default questionsController;