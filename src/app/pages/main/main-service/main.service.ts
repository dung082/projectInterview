import { Injectable } from '@angular/core';
import { BaseService } from '../../../baseServices/base.service';

@Injectable({
  providedIn: 'root'
})
export class MainService extends BaseService {

  layDanhSach = (lopId: number, namHoc: number) => {
    return this.get(`nguoidungtronglop/getNguoiDungTrongLopByNamHoc?lopId=${lopId}&namHoc=${namHoc}`, {})
  }

  layDanhSachLop = () => {
    return this.get(`lop/getAllLop`, {})
  }

  layDanhSachNguoiDung = () => {
    return this.get(`nguoidung/getAllNguoiDung`, {})
  }

  addNguoiDung = (data: any) => {
    return this.post(`nguoidungtronglop/createNguoiDungTrongLop`, data, {})
  }

}
