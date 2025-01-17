import { createReducer, on } from "@ngrx/store"
import { ganDanhSachHocSinhAction, ganDanhSachLopAction, ganDanhSachNguoiDungAction, suaLopAction, suaNamHocAction } from "../main-action/main.action"
import { HSTrongLop, Lop, NguoiDung } from "../main-models/main.model"

export interface MainState {
    listHsTrongLop: HSTrongLop[],
    namHoc: number,
    lopId: number,
    listLop: Lop[],
    listNguoiDung: NguoiDung[]
}

export const initalState: MainState = {
    listHsTrongLop: [],
    namHoc: 0,
    lopId: 0,
    listLop: [],
    listNguoiDung: []
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
)