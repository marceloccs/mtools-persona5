export class ClassroomQuizModel {
  day: number;
  month: number;
  question: string;
  response: string;
  responseOption: string;
  image: any;
  newYear:boolean;
  exame:boolean;

  constructor(day: number, month: number, question: string, response: string, responseOption: string, image: any, newYear:boolean, exame:boolean){
    this.day = day;
    this.month = month;
    this.question = question;
    this.response = response;
    this.responseOption = responseOption;
    this.image = image;
    this.newYear = newYear;
    this.exame = exame;
  }
}
