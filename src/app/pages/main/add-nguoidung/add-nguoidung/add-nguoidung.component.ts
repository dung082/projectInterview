import { Component, Inject, inject, model, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { layDanhSachHocSinhAction, layDanhSachNguoiDungAction } from '../../main-action/main.action';
import { selectMainDSLop } from '../../main-reducer/main.selector';
import { HSTrongLop, Lop, NguoiDung, NguoiDungDto } from '../../main-models/main.model';
import { MainService } from '../../main-service/main.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-nguoidung',
  standalone: false,

  templateUrl: './add-nguoidung.component.html',
  styleUrl: './add-nguoidung.component.css'
})
export class AddNguoidungComponent {
  toastr = inject(ToastrService)
  listHS: HSTrongLop[] = []
  listDanhSachLop: Lop[] = []
  listNguoiDung: NguoiDung[] = []
  lopId: number = 0;
  namHoc: number = 0;
  nguoiDungId: number = 0;

  pageNumber: number = 1;
  pageSize: number = 10

  lopIdReload: number = 0
  namHocReload: number = 0
  //dùng formControls để validate
  nguoiDungDto: NguoiDungDto = {
    id: 0,
    lopId: 0,
    nguoiDungId: 0,
    namhoc: 0
  }

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
  addForm = new FormGroup({

    id: new FormControl<number | null>(null, [Validators.required]),
    lopId: new FormControl<number | null>(null, [Validators.required]),
    nguoiDungId: new FormControl<number | null>(null, [Validators.required]),
    namHoc: new FormControl<number | null>(null, [Validators.required])
  })

  // readonly dialogRef = inject(MatDialogRef<AddNguoidungComponent>);
  // readonly data = inject<>(MAT_DIALOG_DATA);
  // readonly animal = model(this.data.animal);
  constructor(private store: Store, private mainService: MainService) {
    this.store.select(selectMainDSLop).subscribe((state: any) => {
      this.listDanhSachLop = state.listLop
      this.listNguoiDung = state.listNguoiDung
      this.lopIdReload = state.lopId
      this.namHocReload = state.namHoc
      this.pageNumber = state.pageNumber
      this.pageSize = state.pageSize
    })
  }

  ngOnInit() {
    // this.store.select(selectDsLop).subscribe(item => {
    //   this.listDanhSachLop = item
    // })

    this.store.dispatch(layDanhSachNguoiDungAction())
  }

  addNguoiDung = () => {
    let dto = {
      id: 0,
      lopId: this.lopId,
      nguoiDungId: this.nguoiDungId,
      namhoc: this.namHoc
    }

    this.mainService.addNguoiDung(dto).subscribe((response: any) => {

      this.toastr.success('Thành công', 'Thêm mới thành công');

      this.store.dispatch(layDanhSachHocSinhAction({ pageNumber: this.pageNumber, pageSize: this.pageSize, lopId: this.lopIdReload, namHoc: this.namHocReload }))
      // this.dialogRef.close();

    },
      error => {
        console.log('checkerror ', error);

        this.toastr.error('Thêm mới thất bại', 'Thất bại');
      }
    )

  }
}
