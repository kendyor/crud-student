import { Component, OnInit } from '@angular/core';
import { StudentModel } from 'src/app/model/student.model';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

  user: StudentModel;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: StudentService) { }

  ngOnInit() {
    let userId = window.localStorage.getItem("editStudentId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      codigoStudent: ['', Validators.required]
    });
    this.apiService.getStudentById(userId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.apiService.updateStudent(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
     
            alert('Student updated successfully.');            
            this.router.navigate(['list-student']);
        },
        error => {
          alert(error);
        });
  }


}
