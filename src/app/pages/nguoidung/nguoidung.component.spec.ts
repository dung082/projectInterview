import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoidungComponent } from './nguoidung.component';

describe('NguoidungComponent', () => {
  let component: NguoidungComponent;
  let fixture: ComponentFixture<NguoidungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NguoidungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NguoidungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
