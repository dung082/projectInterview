import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ToastrService } from 'ngx-toastr';
import { LopService } from '../lop-service/lop.service';
import { Store } from '@ngrx/store';
import { selectorLopState } from '../lop-reducer/lop.selector';
import { searchLopAction } from '../lop-action/lop.action';

@Component({
  selector: 'app-add-lop',
  standalone: false,

  templateUrl: './add-lop.component.html',
  styleUrl: './add-lop.component.css'
})
export class AddLopComponent {
  readonly #modal = inject(NzModalRef);

  toastr = inject(ToastrService)
  addForm = new FormGroup({
    maLop: new FormControl<string | null>(null, [Validators.required]),
    tenLop: new FormControl<string | null>(null, [Validators.required]),
  })
  pageNumber: number = 0
  pageSize: number = 0
  searchString: string = ''
  constructor(private lopService: LopService, private store: Store, private modalService: NzModalService) {
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
        id: 0,
        maLop: this.addForm.get('maLop')?.value,
        tenLop: this.addForm.get('tenLop')?.value,
      }

      console.log(dto);


      this.lopService.addLop(dto).subscribe((response: any) => {

        this.toastr.success('Thành công', 'Thêm mới thành công');

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
