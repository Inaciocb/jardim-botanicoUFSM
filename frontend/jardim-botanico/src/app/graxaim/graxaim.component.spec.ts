import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraxaimComponent } from './graxaim.component';

describe('GraxaimComponent', () => {
  let component: GraxaimComponent;
  let fixture: ComponentFixture<GraxaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraxaimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraxaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
