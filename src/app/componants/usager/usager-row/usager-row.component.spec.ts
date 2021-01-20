import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsagerRowComponent } from './usager-row.component';

describe('UsagerRowComponent', () => {
  let component: UsagerRowComponent;
  let fixture: ComponentFixture<UsagerRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsagerRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsagerRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
