import { createAction, props } from "@ngrx/store"
import { Lop } from "../../main/main-models/main.model"

export enum LopAction {
    GET_ALL_LOP = "[LOP_ACTION]GET_ALL_LOP",
    SET_ALL_LOP = "[LOP_ACTION]SET_ALL_LOP",
    SEARCH_LOP = "[LOP_ACTION]SEARCH_LOP",
    SET_DATA_LOP_TABLE = "[LOP_ACTION]SET_DATA_LOP_TABLE",
    SET_ADVANCE_SEARCH = "[LOP_ACTION]SET_ADVANCE_SEARCH",
    ADD_LOP = "[LOP_ACTION]ADD_LOP",
    UPDATE_LOP = "[LOP_ACTION]UPDATE_LOP",
    DELETE_LOP = "[LOP_ACTION]DELETE_LOP",
}

export const getAllLopAction = createAction(
    LopAction.GET_ALL_LOP
)

export const searchLopAction = createAction(
    LopAction.SEARCH_LOP,
    props<{
        searchString: string,
        pageNumber: number,
        pageSize: number
    }>()
)

export const setAllLopAction = createAction(
    LopAction.SET_ALL_LOP,
    props<{ listLop: Lop[] }>()
)

export const setDataLopTableAction = createAction(
    LopAction.SET_DATA_LOP_TABLE,
    props<{ totalItems: number, listLop: Lop[] }>()
)

export const setAdvanceSearchAction = createAction(
    LopAction.SET_ADVANCE_SEARCH,
    props<{
        searchString: string,
        pageNumber: number,
        pageSize: number
    }>()
)

export const addLopAction = createAction(
    LopAction.ADD_LOP,
    props<{ data: any }>()
)

export const updateLopAction = createAction(
    LopAction.UPDATE_LOP,
    props<{ data: any }>()
)

export const deleteLopAction = createAction(
    LopAction.DELETE_LOP,
    props<{ id: number }>()
)
