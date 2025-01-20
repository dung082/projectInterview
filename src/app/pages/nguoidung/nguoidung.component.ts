import { Component, inject } from '@angular/core';
import { NguoiDung } from '../main/main-models/main.model';
import { Store } from '@ngrx/store';
import { selectorNguoiDungState } from './nguoidung-reducer/nguoidung.selector';
import { searchNguoiDungAction, setAdvanceSearchAction } from './nguoidung-action/nguoidung,action';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddNguoiDungComponent } from './add-nguoidung/add-nguoidung.component';
import { EditNguoidungComponent } from './edit-nguoidung/edit-nguoidung.component';
import { NguoiDungService } from './nguoidung.service/nguoidung.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nguoidung',
  standalone: false,

  templateUrl: './nguoidung.component.html',
  styleUrl: './nguoidung.component.css'
})
export class NguoidungComponent {
  toastr = inject(ToastrService)
  listNguoiDungTable: NguoiDung[] = []
  totalItems: number = 0
  displayedColumns: string[] = ['id', 'hoTen', 'tenLop', "ngaySinh"];
  pageNumber: number = 0
  pageSize: number = 0
  searchString: string = ''
  searchStringInput: string = ''
  isVisibleAdd = true;
  constructor(private store: Store, private modal: NzModalService, private nguoiDungService: NguoiDungService) {
    this.store.select(selectorNguoiDungState).subscribe((state: any) => {
      console.log(state)
      this.listNguoiDungTable = state.listNguoiDungTable
      this.totalItems = state.totalItems
      this.pageNumber = state.pageNumber
      this.pageSize = state.pageSize
      this.searchString = state.searchString
    })

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.store.dispatch(searchNguoiDungAction({ searchString: this.searchString, pageNumber: this.pageNumber, pageSize: this.pageSize }))
  }

  onChangePage(event: any) {
    console.log(event);

    // this.store.dispatch(setAdvanceSearchAction({ searchString: this.searchString, pageNumber: event.pageIndex, pageSize: event.pageSize }))
    // this.store.dispatch(searchNguoiDungAction({ searchString: this.searchString, pageNumber: event.pageIndex, pageSize: event.pageSize }))
  }

  changeInput(event: any) {
    console.log(event);

  }

  themNguoiDung() {
    this.modal.create({
      nzTitle: 'Thêm người dùng mới',
      nzContent: AddNguoiDungComponent,
      nzData: {
        // Dữ liệu truyền vào modal
      },
      nzFooter: null // Loại bỏ footer nếu không cần nút OK/Cancel
    });
  }

  suaNguoiDung(event: any) {
    this.modal.create({
      nzTitle: 'Sửa thông tin người dùng',
      nzContent: EditNguoidungComponent,
      nzData: event,
      nzFooter: null // Loại bỏ footer nếu không cần nút OK/Cancel
    });
  }

  xoaNguoiDung(event: any) {
    const dialog = this.modal.confirm({
      nzTitle: 'Bạn có chắc chắn muốn xóa thông tin người dùng',
      // nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () => {
        const modal = this.nguoiDungService.deleteNguoiDung(event).subscribe((response: any) => {

          this.toastr.success('Xóa thành công', 'Thành công');

          this.store.dispatch(searchNguoiDungAction({ searchString: this.searchString, pageNumber: this.pageNumber, pageSize: this.pageSize }))

          dialog.destroy()
        },
          error => {

            this.toastr.error('Xóa thất bại', 'Thất bại');
          }
        )
      }
    });
  }

  searchInput() {
    this.store.dispatch(setAdvanceSearchAction({ searchString: this.searchStringInput, pageNumber: this.pageNumber, pageSize: this.pageSize }))
    this.store.dispatch(searchNguoiDungAction({ searchString: this.searchStringInput, pageNumber: this.pageNumber, pageSize: this.pageSize }))

    // this.store.dispatch(setAdvanceSearchAction({ searchString: this.searchString, pageNumber: event.pageIndex, pageSize: event.pageSize }))
    // this.store.dispatch(searchNguoiDungAction({ searchString: this.searchString, pageNumber: event.pageIndex, pageSize: event.pageSize }))
  }

  pageIndexChange(event: any) {
    this.store.dispatch(setAdvanceSearchAction({ searchString: this.searchString, pageNumber: event, pageSize: this.pageSize }))
    this.store.dispatch(searchNguoiDungAction({ searchString: this.searchString, pageNumber: event, pageSize: this.pageSize }))

  }

  pageSizeChange(event: any) {
    this.store.dispatch(setAdvanceSearchAction({ searchString: this.searchString, pageNumber: this.pageNumber, pageSize: event }))
    this.store.dispatch(searchNguoiDungAction({ searchString: this.searchString, pageNumber: this.pageNumber, pageSize: event }))

  }
}
