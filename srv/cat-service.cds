using my.demo as my from '../db/schema';

service CatalogService {
    
@odata.draft.enabled
 entity Tests as projection on my.Tests  actions {
        action assignQuestionsToTest(questionsCounts : Integer) returns String; 
    }

 entity Questions as projection on my.Questions;
 

 entity Answers as projection on my.Questions.answer;

// action assignQuestionsToTest(questionsCount : Integer) returns String;
}
