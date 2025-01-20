import { Component, inject } from '@angular/core';
import { layDanhSachHocSinhAction, layDanhSachNguoiDungAction } from '../main-action/main.action';
import { HSTrongLop, Lop, NguoiDung, NguoiDungDto } from '../main-models/main.model';
import { ToastrService } from 'ngx-toastr';
import { MainService } from '../main-service/main.service';
import { Store } from '@ngrx/store';
import { selectMainDSLop } from '../main-reducer/main.selector';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-nguoidung',
  standalone: false,

  templateUrl: './update-nguoidung.component.html',
  styleUrl: './update-nguoidung.component.css'
})
export class UpdateNguoidungComponent {
  toastr = inject(ToastrService)
  listHS: HSTrongLop[] = []
  listDanhSachLop: Lop[] = []
  listNguoiDung: NguoiDung[] = []
  lopId: number = 0;
  namHoc: number = 0;
  nguoiDungId: number = 0;
  // readonly data = inject<DialogData>(MAT_DIALOG_DATA);
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

  updateForm = new FormGroup({

    // id: new FormControl<number | null>({ value: inject<any>(MAT_DIALOG_DATA)?.nguoiDungTrongLop?.id, disabled: true }, [Validators.required]),
    // lopId: new FormControl<number | null>({ value: inject<any>(MAT_DIALOG_DATA)?.nguoiDungTrongLop?.lopId, disabled: false }, [Validators.required]),
    // nguoiDungId: new FormControl<number | null>({ value: inject<any>(MAT_DIALOG_DATA)?.nguoiDungTrongLop?.nguoiDungId, disabled: true }, [Validators.required]),
    // namHoc: new FormControl<number | null>({ value: inject<any>(MAT_DIALOG_DATA)?.nguoiDungTrongLop?.namhoc, disabled: true }, [Validators.required])
  })

  ngOnInit() {
    // this.store.select(selectDsLop).subscribe(item => {
    //   this.listDanhSachLop = item
    // })

    this.store.dispatch(layDanhSachNguoiDungAction())

    // console.log(this.data);

  }

  saveNguoiDung = () => {

    // let dto = {
    //   id: this.updateForm.controls.id,
    //   lopId: this.updateForm.controls.lopId,
    //   nguoiDungId: this.updateForm.controls.nguoiDungId,
    //   namhoc: this.updateForm.controls.namHoc
    // }

    // this.mainService.updateNguoiDung(dto).subscribe((response: any) => {

    //   this.toastr.success('Thành công', 'Sửa thông tin người dùng thành công');

    //   this.store.dispatch(layDanhSachHocSinhAction({ pageNumber: this.pageNumber, pageSize: this.pageSize, lopId: this.lopIdReload, namHoc: this.namHocReload }))
    //   // this.dialogRef.close();

    // },
    //   error => {
    //     console.log('checkerror ', error);

    //     this.toastr.error('Sửa thông tin người dùng thất bại', 'Thất bại');
    //   }
    // )

  }
}
