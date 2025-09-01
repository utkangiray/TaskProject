using my.demo as my from '../db/schema';

service CatalogService {
    
@odata.darft.enabled
 entity Tests as projection on my.Tests  actions {
        action assignQuestionsToTest(questionsCounts : Integer) returns String; 
    }
@odata.darft.enabled
 entity Questions as projection on my.Questions;
 
@odata.darft.enabled
 entity Answers as projection on my.Questions.answer;

// action assignQuestionsToTest(questionsCount : Integer) returns String;
}
