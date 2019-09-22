import { Component, OnInit } from '@angular/core';
import { StudentModel } from 'src/app/model/student.model';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {

  students: StudentModel[];
  constructor(private router: Router, private apiService: StudentService) { }

  ngOnInit() {
    this.apiService.getStudents()
    .subscribe( data => {
      this.students = data;
    });
  }

  deleteStudent(student: StudentModel): void {
    this.apiService.deleteStudent(student.id)
      .subscribe( data => {
        this.students = this.students.filter(s => s !== student);
      })
  };

  editStudent(student: StudentModel): void {
    window.localStorage.removeItem("editStudentId");
    window.localStorage.setItem("editStudentId", student.id.toString());
    this.router.navigate(['edit-student']);
  };

  addStudent(): void {
    this.router.navigate(['add-student']);
  };

}
