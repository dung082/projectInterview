
import { createAction, props } from '@ngrx/store';
import { HSTrongLop, Lop, NguoiDung } from '../main-models/main.model';

export enum MainAction {
    THEM_HS_VAOLOP = "[MAIN_ACTION]THEM_HS_VAOLOP",
    LAY_DS_TRONG_LOP = "[MAIN_ACTION]LAY_DS_TRONG_LOP",
    GAN_DS_TRONG_LOP = "MAIN_ACTION]GAN_DS_TRONG_LOP",
    LAY_DANH_SACH_LOP = "[MAIN_ACTION]LAY_DANH_SACH_LOP",
    GAN_DANH_SACH_LOP = "[MAIN_ACTION]GAN_DANH_SACH_LOP",
    CHANGE_NAMHOC = "[MAIN_ACTION]CHANGE_NAMHOC",
    CHANGE_LOP = "[MAIN_ACTION]CHANGE_LOP",
    LAY_DS_NGUOIDUNG = "[MAIN_ACTION]LAY_DS_NGUOIDUNG",
    GAN_DS_NGUOIDUNG = "[MAIN_ACTION]GAN_DS_NGUOIDUNG",
    THEM_ND_VAOLOP = "[MAIN_ACTION]THEM_ND_VAOLOP",
    SET_PAGE = '[MAIN_ACTION]SET_PAGE',
    SET_TOTAL_ITEM = '[MAIN_ACTION]SET_TOTAL_ITEM',
    SUA_NGUOIDUNG_TRONGLOP = '[MAIN_ACTION]SUA_NGUOIDUNG_TRONGLOP',
    XOA_NGUOIDUNG_TRONGLOP = '[MAIN_ACTION]XOA_NGUOIDUNG_TRONGLOP'
}

export const layDanhSachHocSinhAction = createAction(
    MainAction.LAY_DS_TRONG_LOP,
    props<{
        pageNumber: number,
        pageSize: number,
        lopId: number,
        namHoc: number,

    }>()
)

export const themHocSinhVaoLopAction = createAction(
    MainAction.THEM_HS_VAOLOP,
    props<{ objectHocSinhLop: any }>()
)

export const ganDanhSachHocSinhAction = createAction(
    MainAction.GAN_DS_TRONG_LOP,
    props<{ listHs: HSTrongLop[] }>()
)

export const layDanhSachLopAction = createAction(
    MainAction.LAY_DANH_SACH_LOP
)

export const ganDanhSachNguoiDungAction = createAction(
    MainAction.GAN_DS_NGUOIDUNG,
    props<{ listNgDung: NguoiDung[] }>()
)

export const layDanhSachNguoiDungAction = createAction(
    MainAction.LAY_DS_NGUOIDUNG
)


export const ganDanhSachLopAction = createAction(
    MainAction.GAN_DANH_SACH_LOP,
    props<{ listDSLop: Lop[] }>()
)

export const suaNamHocAction = createAction(
    MainAction.CHANGE_NAMHOC,
    props<{ namhoc: number }>()
)

export const suaLopAction = createAction(
    MainAction.CHANGE_LOP,
    props<{ lopId: number }>()
)


export const setPageAction = createAction(
    MainAction.SET_PAGE,
    props<{ pageNumber: number, pageSize: number }>()
)

export const setTotalItemAction = createAction(
    MainAction.SET_TOTAL_ITEM,
    props<{ totalItem: number }>()
)

export const themNguoiDungAction = createAction(
    MainAction.THEM_ND_VAOLOP,
    props<{ data: any, lopId: number, namHoc: number }>()
)

export const suaNguoiDungAction = createAction(
    MainAction.SUA_NGUOIDUNG_TRONGLOP,
    props<{ data: any }>()
)

export const xoaNguoiDungTrongLop = createAction(
    MainAction.XOA_NGUOIDUNG_TRONGLOP,
    props<{ id: any }>()
)