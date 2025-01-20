import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NguoiDungService } from '../nguoidung.service/nguoidung.service';
import dayjs from 'dayjs'
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { searchNguoiDungAction } from '../nguoidung-action/nguoidung,action';
import { selectorNguoiDungState } from '../nguoidung-reducer/nguoidung.selector';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-add-nguoidung',
  standalone: false,

  templateUrl: './add-nguoidung.component.html',
  styleUrl: './add-nguoidung.component.css'
})
export class AddNguoiDungComponent {
  readonly #modal = inject(NzModalRef);

  toastr = inject(ToastrService)
  addForm = new FormGroup({
    hoTen: new FormControl<string | null>(null, [Validators.required]),
    diaChi: new FormControl<string | null>(null, [Validators.required]),
    ngaySinh: new FormControl<Date>(new Date(), [Validators.required]),
    gioiTinh: new FormControl<number | null>(null, [Validators.required]),
    role: new FormControl<number | null>(1, [Validators.required]),
  })
  pageNumber: number = 0
  pageSize: number = 0
  searchString: string = ''
  constructor(private nguoiDungService: NguoiDungService, private store: Store, private modalService: NzModalService) {
    this.store.select(selectorNguoiDungState).subscribe((state: any) => {
      console.log(state)
      this.pageNumber = state.pageNumber
      this.pageSize = state.pageSize
      this.searchString = state.searchString
    })
  }
  addNguoiDung() {
    if (this.addForm.valid) {
      let dto = {
        id: 0,
        hoTen: this.addForm.get('hoTen')?.value,
        diaChi: this.addForm.get('diaChi')?.value,
        gioiTinh: this.addForm.get('gioiTinh')?.value,
        ngaySinh: dayjs(this.addForm.get('ngaySinh')?.value).format('YYYY-MM-DD HH:mm:ss')
      }

      console.log(dto);


      this.nguoiDungService.addNguoiDung(dto).subscribe((response: any) => {

        this.toastr.success('Thành công', 'Thêm mới thành công');

        this.store.dispatch(searchNguoiDungAction({ searchString: this.searchString, pageNumber: this.pageNumber, pageSize: this.pageSize }))
        this.#modal?.destroy()
      },
        error => {
          console.log('checkerror ', error);

          this.toastr.error('Thêm mới thất bại', 'Thất bại');
        }
      )
    }
    else {
      this.addForm.markAllAsTouched()
    }
  }

  closeModal() {
    this.#modal?.destroy()
  }
}
