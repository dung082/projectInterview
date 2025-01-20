import { Injectable } from '@angular/core';
import { BaseService } from '../../../baseServices/base.service';

@Injectable({
  providedIn: 'root'
})
export class LopService extends BaseService {

  getAllLop = () => {
    return this.get(`lop/getAllLop`, {})
  }

  searchLop = (searchString: string, pageNumber: number, pageSize: number) => {
    return this.get(`lop/searchLop?searchString=${searchString}&pageNumber=${pageNumber - 1}&pageSize=${pageSize}`, {})
  }

  addLop = (lop: any) => {
    return this.post(`lop/createLop`, lop, {})
  }

  updateLop = (lop: any) => {
    return this.post(`lop/updateLop`, lop, {})
  }

  deleteLop = (id: number) => {
    return this.post(`lop/deleteLop/${id}`, {}, {})
  }
}
