const cds = require('@sap/cds');

class CatService extends cds.ApplicationService {
    async init() {
        return super.init();
    }

    async assignQuestionsToTest(TestsEntity, keys, questionsCount) { 
        return `Questions assigned to test successfully. Count: ${questionsCount}`;
    }
      async getQuestions(amount) {
    
    const triviaApi = await cds.connect.to('trivia-api');
    const response = await triviaApi.send({
      method: 'GET',
      path: `/api.php?amount=${amount}`, 
      headers: { Accept: 'application/json' }
    });

    return response.results.map(q => ({
      ...q,
      incorrect_answers: JSON.stringify(q.incorrect_answers)
    }));
  }
}

module.exports = CatService;
