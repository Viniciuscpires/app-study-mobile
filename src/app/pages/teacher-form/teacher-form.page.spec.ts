import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeacherFormPage } from './teacher-form.page';

describe('TeacherFormPage', () => {
  let component: TeacherFormPage;
  let fixture: ComponentFixture<TeacherFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeacherFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
