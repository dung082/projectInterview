import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { ToastrService } from 'ngx-toastr';
import { NguoiDungService } from '../nguoidung.service/nguoidung.service';
import { Store } from '@ngrx/store';
import { selectorNguoiDungState } from '../nguoidung-reducer/nguoidung.selector';
import dayjs from 'dayjs';
import { searchNguoiDungAction } from '../nguoidung-action/nguoidung,action';
import { NguoiDung } from '../../main/main-models/main.model';

@Component({
  selector: 'app-edit-nguoidung',
  standalone: false,

  templateUrl: './edit-nguoidung.component.html',
  styleUrl: './edit-nguoidung.component.css'
})
export class EditNguoidungComponent {
  readonly #modal = inject(NzModalRef);
  readonly nzModalData: NguoiDung = inject(NZ_MODAL_DATA);

  toastr = inject(ToastrService)
  addForm = new FormGroup({
    id: new FormControl<number | null>(this.nzModalData.id, [Validators.required]),
    hoTen: new FormControl<string | null>(this.nzModalData.hoTen, [Validators.required]),
    diaChi: new FormControl<string | null>(this.nzModalData.hoTen, [Validators.required]),
    ngaySinh: new FormControl<Date>(new Date(this.nzModalData.ngaySinh), [Validators.required]),
    gioiTinh: new FormControl<number | null>(this.nzModalData.gioiTinh, [Validators.required]),
    role: new FormControl<number | null>(this.nzModalData.role, [Validators.required]),
  })
  pageNumber: number = 0
  pageSize: number = 0
  searchString: string = ''
  constructor(private nguoiDungService: NguoiDungService, private store: Store) {
    this.store.select(selectorNguoiDungState).subscribe((state: any) => {
      console.log(state)
      this.pageNumber = state.pageNumber
      this.pageSize = state.pageSize
      this.searchString = state.searchString
    })
  }
  suaNguoiDung() {
    if (this.addForm.valid) {
      let dto = {
        id: this.addForm.get('id')?.value,
        hoTen: this.addForm.get('hoTen')?.value,
        diaChi: this.addForm.get('diaChi')?.value,
        gioiTinh: this.addForm.get('gioiTinh')?.value,
        ngaySinh: dayjs(this.addForm.get('ngaySinh')?.value).format('YYYY-MM-DD HH:mm:ss')
      }

      console.log(dto);


      this.nguoiDungService.updateNguoiDung(dto).subscribe((response: any) => {

        this.toastr.success('Chỉnh sửa thành công', 'Thành công');

        this.store.dispatch(searchNguoiDungAction({ searchString: this.searchString, pageNumber: this.pageNumber, pageSize: this.pageSize }))
        this.#modal?.destroy()
      },
        error => {
          console.log('checkerror ', error);

          this.toastr.error('Chỉnh sửa thất bại', 'Thất bại');
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
