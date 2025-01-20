import { createReducer, on } from "@ngrx/store";
import { NguoiDung } from "../../main/main-models/main.model";
import { setAdvanceSearchAction, setAllNguoiDungAction, setDataNguoiDungTableAction } from "../nguoidung-action/nguoidung,action";

export interface NguoiDungState {
    listNguoiDungTable: NguoiDung[],
    listAllNguoiDung: NguoiDung[],
    pageNumber: number,
    pageSize: number,
    totalItems: number,
    searchString: string

}

export const initalState: NguoiDungState = {
    listNguoiDungTable: [],
    listAllNguoiDung: [],
    pageNumber: 1,
    pageSize: 10,
    totalItems: 0,
    searchString: ''
}

export const nguoiDungReducer = createReducer(
    initalState,
    on(setAllNguoiDungAction, (state, { listNguoiDung }) => {
        return {
            ...state,
            listAllNguoiDung: listNguoiDung
        }
    }),
    on(setDataNguoiDungTableAction, (state, { totalItems, listNguoiDung }) => {
        return {
            ...state,
            totalItems: totalItems,
            listNguoiDungTable: listNguoiDung
        }
    }),
    on(setAdvanceSearchAction, (state, { searchString, pageNumber, pageSize }) => {
        return {
            ...state,
            searchString: searchString,
            pageNumber: pageNumber,
            pageSize: pageSize
        }
    }),

)
