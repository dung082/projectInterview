import { createReducer, on } from "@ngrx/store"
import { ganDanhSachHocSinhAction, ganDanhSachLopAction, ganDanhSachNguoiDungAction, setPageAction, setTotalItemAction, suaLopAction, suaNamHocAction } from "../main-action/main.action"
import { HSTrongLop, Lop, NguoiDung } from "../main-models/main.model"

export interface MainState {
    listHsTrongLop: HSTrongLop[],
    namHoc: number,
    lopId: number,
    listLop: Lop[],
    listNguoiDung: NguoiDung[],
    pageNumber: number,
    pageSize: number,
    totalItem: number,
}

export const initalState: MainState = {
    listHsTrongLop: [],
    namHoc: 0,
    lopId: 0,
    listLop: [],
    listNguoiDung: [],
    pageNumber: 0,
    pageSize: 10,
    totalItem: 0,
}
export const mainReducer = createReducer(
    initalState,
    on(ganDanhSachHocSinhAction, (state, { listHs }) => {
        return {
            ...state,
            listHsTrongLop: listHs
        }
    }),
    on(ganDanhSachLopAction, (state, { listDSLop }) => {
        return {
            ...state,
            listLop: listDSLop
        }
    }),
    on(ganDanhSachNguoiDungAction, (state, { listNgDung }) => {
        return {
            ...state,
            listNguoiDung: listNgDung
        }
    }),
    on(suaLopAction, (state, { lopId }) => {
        return {
            ...state,
            lopId: lopId
        }
    }),
    on(suaNamHocAction, (state, { namhoc }) => {
        return {
            ...state,
            namHoc: namhoc
        }
    }),
    on(setPageAction, (state, { pageNumber, pageSize }) => {
        return {
            ...state,
            pageNumber: pageNumber,
            pageSize: pageSize
        }
    }),

    on(setTotalItemAction, (state, { totalItem }) => {
        return {
            ...state,
            totalItem: totalItem
        }
    }),
)