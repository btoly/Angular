import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationStudantComponent } from './information-studant.component';

describe('InformationStudantComponent', () => {
  let component: InformationStudantComponent;
  let fixture: ComponentFixture<InformationStudantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationStudantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationStudantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
