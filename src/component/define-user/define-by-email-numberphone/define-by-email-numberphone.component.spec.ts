import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineByEmailNumberphoneComponent } from './define-by-email-numberphone.component';

describe('DefineByEmailNumberphoneComponent', () => {
  let component: DefineByEmailNumberphoneComponent;
  let fixture: ComponentFixture<DefineByEmailNumberphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefineByEmailNumberphoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefineByEmailNumberphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
