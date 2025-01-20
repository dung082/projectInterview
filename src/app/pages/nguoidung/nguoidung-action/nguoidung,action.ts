import { createAction, props } from "@ngrx/store"
import { NguoiDung } from "../../main/main-models/main.model"

export enum NguoiDungAction {
    GET_ALL_NGUOI_DUNG = "[NGUOIDUNG_ACTION]GET_ALL_NGUOI_DUNG",
    SET_ALL_NGUOI_DUNG = "[NGUOIDUNG_ACTION]SET_ALL_NGUOI_DUNG",
    SEARCH_NGUOI_DUNG = "[NGUOIDUNG_ACTION]SEARCH_NGUOI_DUNG",
    SET_DATA_NGUOI_DUNG_TABLE = "[NGUOIDUNG_ACTION]SET_DATA_NGUOI_DUNG_TABLE",
    SET_ADVANCE_SEARCH = "[NGUOIDUNG_ACTION]SET_ADVANCE_SEARCH",
    ADD_NGUOI_DUNG = "[NGUOIDUNG_ACTION]ADD_NGUOI_DUNG",
    UPDATE_NGUOI_DUNG = "[NGUOIDUNG_ACTION]UPDATE_NGUOI_DUNG",
    DELETE_NGUOI_DUNG = "[NGUOIDUNG_ACTION]DELETE_NGUOI_DUNG",
}

export const getAllNguoiDungAction = createAction(
    NguoiDungAction.GET_ALL_NGUOI_DUNG
)

export const searchNguoiDungAction = createAction(
    NguoiDungAction.SET_ALL_NGUOI_DUNG,
    props<{
        searchString: string,
        pageNumber: number,
        pageSize: number
    }>()
)

export const setAllNguoiDungAction = createAction(
    NguoiDungAction.SET_ALL_NGUOI_DUNG,
    props<{ listNguoiDung: NguoiDung[] }>()
)

export const setDataNguoiDungTableAction = createAction(
    NguoiDungAction.SET_DATA_NGUOI_DUNG_TABLE,
    props<{ totalItems: number, listNguoiDung: NguoiDung[] }>()
)

export const setAdvanceSearchAction = createAction(
    NguoiDungAction.SET_ADVANCE_SEARCH,
    props<{
        searchString: string,
        pageNumber: number,
        pageSize: number
    }>()
)

export const addNguoiDungAction = createAction(
    NguoiDungAction.ADD_NGUOI_DUNG,
    props<{ data: any }>()
)

export const updateNguoiDungAction = createAction(
    NguoiDungAction.UPDATE_NGUOI_DUNG,
    props<{ data: any }>()
)

export const deleteNguoiDungAction = createAction(
    NguoiDungAction.DELETE_NGUOI_DUNG,
    props<{ id: number }>()
)
