import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
//import {AngularFire, FirebaseListObservable} from '@angular/fire';

import { Employee } from './employee.model';
//import { Option, Question, Quiz, QuizConfig } from 'src/app/models/index';
@Injectable()
export class EmployeeService {
  employeeList: AngularFireList<any>;
  
  selectedEmployee: Employee = new Employee();

//    quizList: AngularFireList<any>;
//  //  quizListobservable: FireBaseListObservable<any>
//    SelectedQuiz: Quiz;

  constructor(private firebase: AngularFireDatabase) { 
    this.employeeList= this.firebase.list('employees');
   // this.quizList= this.firebase.list('aspnet');
  }

//   getQuizData() {
//     this.quizList = this.firebase.list('aspnet');
//   //  this.quizList = this.firebase.object('aspnet/questions');
//     return this.quizList;
//   }


  getData() {
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }

  insertEmployee(empoloyee: Employee) {
    this.employeeList.push({
      name: empoloyee.name,
      position: empoloyee.position,
      office: empoloyee.office,
      salary: empoloyee.salary,
      imageUrl: empoloyee.imageUrl
    });
  }

  updateEmployee(emp : Employee){
     this.employeeList.update(emp.$key,{
       name : emp.name,
       position : emp.position,
       office : emp.office,
       salary : emp.salary,
       imageUrl: emp.imageUrl
     })
  }

  deleteEmployee(key : string){
    this.employeeList.remove(key);
  }

}
