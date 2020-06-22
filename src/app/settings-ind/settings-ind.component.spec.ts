import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsIndComponent } from './settings-ind.component';

describe('SettingsIndComponent', () => {
  let component: SettingsIndComponent;
  let fixture: ComponentFixture<SettingsIndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsIndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsIndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
