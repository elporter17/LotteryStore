import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenSorteosComponent } from './resumen-sorteos.component';

describe('ResumenSorteosComponent', () => {
  let component: ResumenSorteosComponent;
  let fixture: ComponentFixture<ResumenSorteosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenSorteosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumenSorteosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
