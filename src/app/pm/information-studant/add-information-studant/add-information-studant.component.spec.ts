import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInformationStudantComponent } from './add-information-studant.component';

describe('AddInformationStudantComponent', () => {
  let component: AddInformationStudantComponent;
  let fixture: ComponentFixture<AddInformationStudantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInformationStudantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInformationStudantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
