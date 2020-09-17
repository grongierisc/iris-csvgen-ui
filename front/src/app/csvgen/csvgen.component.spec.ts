import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvgenComponent } from './csvgen.component';

describe('CsvgenComponent', () => {
  let component: CsvgenComponent;
  let fixture: ComponentFixture<CsvgenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvgenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
