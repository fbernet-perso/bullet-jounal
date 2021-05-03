import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscComponentComponent } from './misc-component.component';

describe('MiscComponentComponent', () => {
  let component: MiscComponentComponent;
  let fixture: ComponentFixture<MiscComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
