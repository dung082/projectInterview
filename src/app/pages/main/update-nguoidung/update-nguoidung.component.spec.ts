import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNguoidungComponent } from './update-nguoidung.component';

describe('UpdateNguoidungComponent', () => {
  let component: UpdateNguoidungComponent;
  let fixture: ComponentFixture<UpdateNguoidungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateNguoidungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateNguoidungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
