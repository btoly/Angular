import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAdmainComponent } from './register-admain.component';

describe('RegisterAdmainComponent', () => {
  let component: RegisterAdmainComponent;
  let fixture: ComponentFixture<RegisterAdmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAdmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAdmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
