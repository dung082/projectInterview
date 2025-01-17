export interface Lop {
    id: number,
    maLop: string,
    tenLop: string
}

export interface HSTrongLop {
    id: number,
    nguoiDungId: number,
    lopId: number,
    hoTen: string,
    maLop: string,
    tenLop: string,
    diaChi: string,
    gioiTinh: number,
    role: number,
    ngaySinh: string,
    namhoc: number

}

export interface NguoiDung {
    diaChi: string,
    gioiTinh: number,
    hoTen: string,
    id: number,
    ngaySinh: string,
    role: number
}

export interface NguoiDungDto {
    id: number,
    lopId: number,
    nguoiDungId: number,
    namhoc: number
}