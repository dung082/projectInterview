import { Component, inject, model, signal } from '@angular/core';
import { HSTrongLop, Lop } from './main-models/main.model';
import { Store } from '@ngrx/store';
import { selectMainDSLop } from './main-reducer/main.selector';
import { layDanhSachHocSinhAction, layDanhSachLopAction, setPageAction, suaLopAction, suaNamHocAction } from './main-action/main.action';
import { AddNguoidungComponent } from './add-nguoidung/add-nguoidung/add-nguoidung.component';
import { UpdateNguoidungComponent } from './update-nguoidung/update-nguoidung.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { MainService } from './main-service/main.service';
import { ToastrService } from 'ngx-toastr';

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
  totalItems = 0
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
  toastr = inject(ToastrService)
  constructor(
    private store: Store,
    private modal: NzModalService,
    private nguoiDungTrongLopService: MainService
  ) {
    this.store.select(selectMainDSLop).subscribe((state: any) => {
      this.listDanhSachLop = state.listLop
      this.listHS = state.listHsTrongLop
      this.namHoc = state.namHoc
      this.lopId = state.lopId
      this.pageNumber = state.pageNumber
      this.pageSize = state.pageSize
      this.totalItems = state.totalItem
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
    this.store.dispatch(suaNamHocAction({ namhoc: event }))
  }

  changeLop = (event: any) => {
    console.log('check');

    this.store.dispatch(suaLopAction({ lopId: event }))
  }

  pageIndexChange(event: any) {
    this.store.dispatch(setPageAction({ pageNumber: event, pageSize: this.pageSize }))
    this.store.dispatch(layDanhSachHocSinhAction({ namHoc: this.namHoc, lopId: this.lopId, pageNumber: event, pageSize: this.pageSize }))

  }

  pageSizeChange(event: any) {
    this.store.dispatch(setPageAction({ pageNumber: this.pageNumber, pageSize: event }))
    this.store.dispatch(layDanhSachHocSinhAction({ namHoc: this.namHoc, lopId: this.lopId, pageNumber: this.pageNumber, pageSize: event }))

  }

  find() {
    this.store.dispatch(layDanhSachHocSinhAction({ namHoc: this.namHoc, lopId: this.lopId, pageNumber: this.pageNumber, pageSize: this.pageSize }))
  }

  deleteNguoiDung(event: any) {
    console.log(event);
  }

  themThongTin() {
    this.modal.create({
      nzTitle: 'Thêm người dùng mới',
      nzContent: AddNguoidungComponent,
      nzData: {
        // Dữ liệu truyền vào modal
      },
      nzFooter: null // Loại bỏ footer nếu không cần nút OK/Cancel
    });
  }

  suaThongTin(event: any) {
    this.modal.create({
      nzTitle: 'Sửa thông tin người dùng',
      nzContent: UpdateNguoidungComponent,
      nzData: event,
      nzFooter: null // Loại bỏ footer nếu không cần nút OK/Cancel
    });
  }

  xoaThongTin(event: any) {
    const dialog = this.modal.confirm({
      nzTitle: 'Bạn có chắc chắn muốn xóa thông tin người dùng',
      // nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () => {
        const modal = this.nguoiDungTrongLopService.deleteNguoiDung(event).subscribe((response: any) => {

          this.toastr.success('Xóa thành công', 'Thành công');

          this.store.dispatch(layDanhSachHocSinhAction({ pageNumber: this.pageNumber, pageSize: this.pageSize, lopId: this.lopId, namHoc: this.namHoc }))

          dialog.destroy()
        },
          error => {

            this.toastr.error('Xóa thất bại', 'Thất bại');
          }
        )
      }
    });
  }
}
