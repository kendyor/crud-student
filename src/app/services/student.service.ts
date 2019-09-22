import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: StudentModel[] = [
    { id:'1', nombre: 'Bruno', apellido: 'Palacios', edad: 35, codigoStudent: 10020},
    { id:'2', nombre: 'Kendy', apellido: 'Otiniano', edad: 28, codigoStudent: 88862},
    { id:'3', nombre: 'Demo', apellido: 'Demo', edad: 35, codigoStudent: 10040},
  ];

  constructor() { 
    
  }



  getStudents() : Observable<any> {
    //generamos un observable para simular que viene de un backend que tomará 1 segundo
    const studentsObservable = new Observable(observer => {
        setTimeout(()=> {
          observer.next(this.students)
        }, 500);
    })
    return studentsObservable;
  }

  getStudentById(id: string): Observable<any> {
    //return this.http.get(this.baseUrl + id);
    //var student=
    var student = this.students.find(s => s.id == id);
    console.log(JSON.stringify(student));
    const studentsObservable = new Observable(observer => {
        setTimeout(()=> {
          observer.next(student)
        }, 1000);
    })
    return studentsObservable;
  }

  createStudent(student: StudentModel): Observable<any> {
    student.id = (this.students.length+1).toString();
    this.students.push(student);
      const studentsObservable = new Observable(observer => {
        setTimeout(()=> {
          observer.next(this.students)
        }, 500);
    })
    return studentsObservable;
  }

  updateStudent(student: StudentModel): Observable<any> {
      
    this.students = this.students.filter(val => val.id != student.id);
    this.students.push(student);
    
      const studentsObservable = new Observable(observer => {
        setTimeout(()=> {
          observer.next(this.students)
        }, 300);
    })
    return studentsObservable;
  }

  deleteStudent(id: string): Observable<any> {
       
    this.students = this.students.filter(val => val.id != id); 
    
    const studentsObservable = new Observable(observer => {
        setTimeout(()=> {
          observer.next(this.students)
        }, 300);
    })
    return studentsObservable;
  }
}
