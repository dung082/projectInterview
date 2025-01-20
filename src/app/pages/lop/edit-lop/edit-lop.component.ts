import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { ToastrService } from 'ngx-toastr';
import { LopService } from '../lop-service/lop.service';
import { Store } from '@ngrx/store';
import { selectorLopState } from '../lop-reducer/lop.selector';
import { searchLopAction } from '../lop-action/lop.action';
import { Lop } from '../../main/main-models/main.model';

@Component({
  selector: 'app-edit-lop',
  standalone: false,

  templateUrl: './edit-lop.component.html',
  styleUrl: './edit-lop.component.css'
})
export class EditLopComponent {
  readonly #modal = inject(NzModalRef);
  readonly nzModalData: Lop = inject(NZ_MODAL_DATA);

  toastr = inject(ToastrService)
  addForm = new FormGroup({
    id: new FormControl<number | null>(this.nzModalData.id, [Validators.required]),
    maLop: new FormControl<string | null>(this.nzModalData.maLop, [Validators.required]),
    tenLop: new FormControl<string | null>(this.nzModalData.tenLop, [Validators.required]),
  })
  pageNumber: number = 0
  pageSize: number = 0
  searchString: string = ''
  constructor(private lopService: LopService, private store: Store) {
    this.store.select(selectorLopState).subscribe((state: any) => {
      console.log(state)
      this.pageNumber = state.pageNumber
      this.pageSize = state.pageSize
      this.searchString = state.searchString
    })
  }
  addLop() {
    if (this.addForm.valid) {
      let dto = {
        id: this.addForm.get('id')?.value,
        maLop: this.addForm.get('maLop')?.value,
        tenLop: this.addForm.get('tenLop')?.value,
      }

      console.log(dto);


      this.lopService.updateLop(dto).subscribe((response: any) => {

        this.toastr.success('Chỉnh sửa thành công', 'Thành công');

        this.store.dispatch(searchLopAction({ searchString: this.searchString, pageNumber: this.pageNumber, pageSize: this.pageSize }))
        // this.dialogRef.close();
        this.#modal?.destroy()
      },
        error => {

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
