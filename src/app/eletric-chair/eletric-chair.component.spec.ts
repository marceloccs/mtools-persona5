import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EletricChairComponent } from './eletric-chair.component';

describe('EletricChairComponent', () => {
  let component: EletricChairComponent;
  let fixture: ComponentFixture<EletricChairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EletricChairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EletricChairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
