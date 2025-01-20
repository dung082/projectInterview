import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Lop } from '../main/main-models/main.model';
import { selectLopState, selectorLopState } from './lop-reducer/lop.selector';
import { searchLopAction, setAdvanceSearchAction } from './lop-action/lop.action';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddLopComponent } from './add-lop/add-lop.component';
import { EditLopComponent } from './edit-lop/edit-lop.component';
import { LopService } from './lop-service/lop.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lop',
  standalone: false,

  templateUrl: './lop.component.html',
  styleUrl: './lop.component.css'
})
export class LopComponent {
  toastr = inject(ToastrService)
  listLopTable: Lop[] = []
  totalItems: number = 0
  displayedColumns: string[] = ['id', 'hoTen', 'tenLop', "ngaySinh"];
  pageNumber: number = 0
  pageSize: number = 0
  searchString: string = ''
  searchStringInput: string = ''
  constructor(private store: Store, private lopService: LopService, private modal: NzModalService, private router: Router) {
    this.store.select(selectorLopState).subscribe((state: any) => {
      console.log(state)
      this.listLopTable = state.listLopDataTable
      this.totalItems = state.totalItems
      this.pageNumber = state.pageNumber
      this.pageSize = state.pageSize
      this.searchString = state.searchString
    })

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.store.dispatch(searchLopAction({ searchString: this.searchString, pageNumber: this.pageNumber, pageSize: this.pageSize }))
  }

  goToQLLop() {
    this.router.navigate(['/hstronglop'])
  }

  onChangePage(event: any) {
    console.log(event);

    // this.store.dispatch(setAdvanceSearchAction({ searchString: this.searchString, pageNumber: event.pageIndex, pageSize: event.pageSize }))
    // this.store.dispatch(searchNguoiDungAction({ searchString: this.searchString, pageNumber: event.pageIndex, pageSize: event.pageSize }))
  }

  themLop() {
    this.modal.create({
      nzTitle: 'Thêm người dùng mới',
      nzContent: AddLopComponent,
      nzData: {
        // Dữ liệu truyền vào modal
      },
      nzFooter: null // Loại bỏ footer nếu không cần nút OK/Cancel
    });
  }


  changeInput(event: any) {
    console.log(event);

  }

  searchInput() {
    this.store.dispatch(setAdvanceSearchAction({ searchString: this.searchStringInput, pageNumber: this.pageNumber, pageSize: this.pageSize }))
    this.store.dispatch(searchLopAction({ searchString: this.searchStringInput, pageNumber: this.pageNumber, pageSize: this.pageSize }))

    // this.store.dispatch(setAdvanceSearchAction({ searchString: this.searchString, pageNumber: event.pageIndex, pageSize: event.pageSize }))
    // this.store.dispatch(searchNguoiDungAction({ searchString: this.searchString, pageNumber: event.pageIndex, pageSize: event.pageSize }))
  }

  pageIndexChange(event: any) {
    this.store.dispatch(setAdvanceSearchAction({ searchString: this.searchString, pageNumber: event, pageSize: this.pageSize }))
    this.store.dispatch(searchLopAction({ searchString: this.searchString, pageNumber: event, pageSize: this.pageSize }))

  }

  pageSizeChange(event: any) {
    this.store.dispatch(setAdvanceSearchAction({ searchString: this.searchString, pageNumber: this.pageNumber, pageSize: event }))
    this.store.dispatch(searchLopAction({ searchString: this.searchString, pageNumber: this.pageNumber, pageSize: event }))

  }



  suaLop(event: any) {
    this.modal.create({
      nzTitle: 'Sửa thông tin lớp',
      nzContent: EditLopComponent,
      nzData: event,
      nzFooter: null // Loại bỏ footer nếu không cần nút OK/Cancel
    });
  }

  xoaLop(event: any) {
    const dialog = this.modal.confirm({
      nzTitle: 'Bạn có chắc chắn muốn xóa thông tin lớp',
      // nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () => {
        const modal = this.lopService.deleteLop(event).subscribe((response: any) => {

          this.toastr.success('Xóa thành công', 'Thành công');

          this.store.dispatch(searchLopAction({ searchString: this.searchString, pageNumber: this.pageNumber, pageSize: this.pageSize }))

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
