import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRegisterComponent } from './select-register.component';

describe('SelectRegisterComponent', () => {
  let component: SelectRegisterComponent;
  let fixture: ComponentFixture<SelectRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
