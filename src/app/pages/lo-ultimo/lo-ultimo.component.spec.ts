import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoUltimoComponent } from './lo-ultimo.component';

describe('LoUltimoComponent', () => {
  let component: LoUltimoComponent;
  let fixture: ComponentFixture<LoUltimoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoUltimoComponent]
    });
    fixture = TestBed.createComponent(LoUltimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
