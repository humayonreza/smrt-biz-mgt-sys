import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContsetupComponent } from './contsetup.component';

describe('ContsetupComponent', () => {
  let component: ContsetupComponent;
  let fixture: ComponentFixture<ContsetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContsetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
