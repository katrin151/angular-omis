import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatSelectComponent } from './cat-select.component';

describe('CatSelectComponent', () => {
  let component: CatSelectComponent;
  let fixture: ComponentFixture<CatSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
