import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNguoidungComponent } from './add-nguoidung.component';

describe('AddNguoidungComponent', () => {
  let component: AddNguoidungComponent;
  let fixture: ComponentFixture<AddNguoidungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNguoidungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNguoidungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
