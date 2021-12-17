import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegwizComponent } from './regwiz.component';

describe('RegwizComponent', () => {
  let component: RegwizComponent;
  let fixture: ComponentFixture<RegwizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegwizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegwizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
