import questionsdb from '../models/questionsdb';

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
}

const questionsController = new QuestionsController();
export default questionsController;