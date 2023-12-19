import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineByQrcodeComponent } from './define-by-qrcode.component';

describe('DefineByQrcodeComponent', () => {
  let component: DefineByQrcodeComponent;
  let fixture: ComponentFixture<DefineByQrcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefineByQrcodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefineByQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
