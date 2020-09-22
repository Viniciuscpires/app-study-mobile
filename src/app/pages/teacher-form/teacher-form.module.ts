import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherFormPageRoutingModule } from './teacher-form-routing.module';

import { TeacherFormPage } from './teacher-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherFormPageRoutingModule
  ],
  declarations: [TeacherFormPage]
})
export class TeacherFormPageModule {}
