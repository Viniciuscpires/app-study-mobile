import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherFormPage } from './teacher-form.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherFormPageRoutingModule {}
