import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNguoidungComponent } from './edit-nguoidung.component';

describe('EditNguoidungComponent', () => {
  let component: EditNguoidungComponent;
  let fixture: ComponentFixture<EditNguoidungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditNguoidungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNguoidungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
