import { Component, inject, model, signal } from '@angular/core';
import { HSTrongLop, Lop } from './main-models/main.model';
import { Store } from '@ngrx/store';
import { selectDsLop, selectMainDSLop } from './main-reducer/main.selector';
import { layDanhSachHocSinhAction, layDanhSachLopAction, suaLopAction, suaNamHocAction } from './main-action/main.action';
import { Observable, of } from 'rxjs';
import { MainState } from './main-reducer/main.reducer';
import { MatDialog } from '@angular/material/dialog';
import { AddNguoidungComponent } from './add-nguoidung/add-nguoidung/add-nguoidung.component';

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
  displayedColumns: string[] = ['id', 'hoTen', 'tenLop', "ngaySinh"];
  listLop: any = []


  //dialog them
  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(AddNguoidungComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }


  constructor(
    private store: Store
  ) {
    this.store.select(selectMainDSLop).subscribe((state: any) => {
      console.log(state)
      this.listDanhSachLop = state.listLop
      this.listHS = state.listHsTrongLop
      this.namHoc = state.namHoc
      this.lopId = state.lopId
    })
  }

  ngOnInit() {
    this.store.dispatch(layDanhSachLopAction())
  }

  getDanhSachNguoiDung = () => {
    this.store.dispatch(layDanhSachHocSinhAction({ lopId: this.lopId, namHoc: this.namHoc }))
  }

  changeNamHoc = (event: any) => {
    console.log(event)
    this.store.dispatch(suaNamHocAction({ namhoc: event?.value }))
  }

  changeLop = (event: any) => {
    this.store.dispatch(suaLopAction({ lopId: event?.value }))
  }
}
