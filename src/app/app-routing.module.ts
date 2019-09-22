import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'list-student', component: ListStudentComponent },
  { path: 'edit-student', component: EditStudentComponent },
  {path : '', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
