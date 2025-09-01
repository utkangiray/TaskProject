const cds = require('@sap/cds');

class CatService extends cds.ApplicationService {
    async init() {
        return super.init();
    }

    async assignQuestionsToTest(TestsEntity, keys, questionsCount) { 
        return `Questions assigned to test successfully. Count: ${questionsCount}`;
    }
}

module.exports = CatService;
