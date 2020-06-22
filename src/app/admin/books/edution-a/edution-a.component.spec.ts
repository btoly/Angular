import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdutionAComponent } from './edution-a.component';

describe('EdutionAComponent', () => {
  let component: EdutionAComponent;
  let fixture: ComponentFixture<EdutionAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdutionAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdutionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
