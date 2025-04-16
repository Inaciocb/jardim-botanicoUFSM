import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutEspeciesComponent } from './layout-especies.component';

describe('LayoutEspeciesComponent', () => {
  let component: LayoutEspeciesComponent;
  let fixture: ComponentFixture<LayoutEspeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutEspeciesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutEspeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
