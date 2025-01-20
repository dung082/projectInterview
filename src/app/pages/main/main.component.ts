import { Component, inject, model, signal } from '@angular/core';
import { HSTrongLop, Lop } from './main-models/main.model';
import { Store } from '@ngrx/store';
import { selectMainDSLop } from './main-reducer/main.selector';
import { layDanhSachHocSinhAction, layDanhSachLopAction, setPageAction, suaLopAction, suaNamHocAction } from './main-action/main.action';
import { AddNguoidungComponent } from './add-nguoidung/add-nguoidung/add-nguoidung.component';
import { UpdateNguoidungComponent } from './update-nguoidung/update-nguoidung.component';

@Component({
  selector: 'app-main',
  standalone: false,

  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  //view home
  listHS: HSTrongLop[] = [];
  namHoc: number = 0;
  lopId: number = 0;
  pageNumber: number = 0
  pageSize: number = 10
  totalItem = 0
  listDanhSachLop: Lop[] = []
  listNamHoc = [
    {
      value: 2023,
      label: 2023
    },
    {
      value: 2024,
      label: 2024
    },
    {
      value: 2025,
      label: 2025
    }
  ]
  // displayedColumns: string[] = ['Số thứ tự', 'Họ và tên', 'Tên lớp', "Ngày sinh"];
  displayedColumns: string[] = ['id', 'hoTen', 'tenLop', "ngaySinh", "actions"];
  listLop: any = []

  constructor(
    private store: Store
  ) {
    this.store.select(selectMainDSLop).subscribe((state: any) => {
      console.log(state)
      this.listDanhSachLop = state.listLop
      this.listHS = state.listHsTrongLop
      this.namHoc = state.namHoc
      this.lopId = state.lopId
      this.pageNumber = state.pageNumber
      this.pageSize = state.pageSize
      this.totalItem = state.totalItem
    })
  }

  ngOnInit() {
    this.store.dispatch(layDanhSachLopAction())
  }

  getDanhSachNguoiDung = () => {
    this.store.dispatch(layDanhSachHocSinhAction({ pageNumber: this.pageNumber, pageSize: this.pageSize, lopId: this.lopId, namHoc: this.namHoc }))
  }

  changeNamHoc = (event: any) => {
    console.log(event)
    this.store.dispatch(suaNamHocAction({ namhoc: event?.value }))
  }

  changeLop = (event: any) => {
    this.store.dispatch(suaLopAction({ lopId: event?.value }))
  }

  onChangePage = (event: any) => {
    this.store.dispatch(setPageAction({ pageNumber: event.pageIndex, pageSize: event.pageSize }))
    this.store.dispatch(layDanhSachHocSinhAction({ pageNumber: event.pageIndex, pageSize: event.pageSize, lopId: this.lopId, namHoc: this.namHoc }))
  }


  deleteNguoiDung(event: any) {
    console.log(event);
  }
}
