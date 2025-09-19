const cds = require('@sap/cds');
const { connect } = cds;

class CatService extends cds.ApplicationService {
    async init() {
        return super.init();
    }

    async assignQuestionsToTest(TestsEntity, keys, questionsCount) {
        const questions = await this.getQuestion(questionsCount);
        const db = await connect.to('db');
        const { Questions } = db.entities;
        const entries = questions.map(data => ({
            test_ID: keys.ID, text: data.question, answer: [{
                text: data.correct_answer
            }]
        }));
        
        await db.run(INSERT.into(Questions).entries(entries))
        return `Questions assigned to test successfully. Count: ${questionsCount}`;
    }

    async getQuestion(count) {
        const tirivaApi = await connect.to('trivia-api');
        const response = await tirivaApi.send({
            method: 'GET',
            path: `/api.php?amount=${count}`
        });
        return response.results;
    }
}

module.exports = CatService;
