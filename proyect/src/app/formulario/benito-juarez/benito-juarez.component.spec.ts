import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BENITOJUAREZComponent } from './benito-juarez.component';

describe('BENITOJUAREZComponent', () => {
  let component: BENITOJUAREZComponent;
  let fixture: ComponentFixture<BENITOJUAREZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BENITOJUAREZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BENITOJUAREZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
