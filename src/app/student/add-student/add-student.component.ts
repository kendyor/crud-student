import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  addForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: StudentService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      codigoStudent: ['', Validators.required]
    });
  }

  onSubmit() {
    this.apiService.createStudent(this.addForm.value).subscribe( data => {
        this.router.navigate(['list-student']);
      });
  }
}
