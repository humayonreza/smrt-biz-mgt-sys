import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarsetupComponent } from './navbarsetup.component';

describe('NavbarsetupComponent', () => {
  let component: NavbarsetupComponent;
  let fixture: ComponentFixture<NavbarsetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarsetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
