using { cuid, managed } from '@sap/cds/common';
namespace my.demo;

entity Tests : cuid, managed {
  title  : String;
  description  : String;
  questions : Association to many Questions on questions.test = $self;
}

entity Questions : cuid  {
  test : Association to Tests; 
  text:  String;
  answer: Composition of one Answers;
}

aspect Answers : cuid { 
  text: String;
} 