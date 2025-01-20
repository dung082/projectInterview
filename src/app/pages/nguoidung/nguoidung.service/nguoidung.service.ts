import { Injectable } from '@angular/core';
import { BaseService } from '../../../baseServices/base.service';

@Injectable({
  providedIn: 'root'
})
export class NguoiDungService extends BaseService {

  getAllNguoiDung = () => {
    return this.get(`nguoidung/getAllNguoiDung`, {})
  }

  searchNguoiDung = (searchString: string, pageNumber: number, pageSize: number) => {
    return this.get(`nguoidung/searchNguoiDung?searchString=${searchString}&pageNumber=${pageNumber - 1}&pageSize=${pageSize}`, {})
  }

  addNguoiDung = (nguoidung: any) => {
    return this.post(`nguoidung/createNguoiDung`, nguoidung, {
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  updateNguoiDung = (nguoidung: any) => {
    return this.post(`nguoidung/updateNguoiDung`, nguoidung, {})
  }

  deleteNguoiDung = (id: number) => {
    return this.post(`nguoidung/deleteNguoiDung/${id}`, {}, {})
  }
}
