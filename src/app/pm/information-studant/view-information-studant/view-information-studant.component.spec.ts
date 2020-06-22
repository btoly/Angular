import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInformationStudantComponent } from './view-information-studant.component';

describe('ViewInformationStudantComponent', () => {
  let component: ViewInformationStudantComponent;
  let fixture: ComponentFixture<ViewInformationStudantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInformationStudantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInformationStudantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
