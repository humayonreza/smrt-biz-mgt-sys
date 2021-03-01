import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusetupComponent } from './menusetup.component';

describe('MenusetupComponent', () => {
  let component: MenusetupComponent;
  let fixture: ComponentFixture<MenusetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenusetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
