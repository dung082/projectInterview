import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNguoiDungComponent } from './add-nguoidung.component';

describe('AddNguoidungComponent', () => {
  let component: AddNguoiDungComponent;
  let fixture: ComponentFixture<AddNguoiDungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNguoiDungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
