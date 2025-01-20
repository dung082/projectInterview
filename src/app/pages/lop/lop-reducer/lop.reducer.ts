import { createReducer, on } from "@ngrx/store";
import { Lop } from "../../main/main-models/main.model";
import { setAllLopAction, setDataLopTableAction, setAdvanceSearchAction } from "../lop-action/lop.action";

export interface LopState {
    listLopDataTable: Lop[],
    listAllLop: Lop[],
    pageNumber: number,
    pageSize: number,
    totalItems: number,
    searchString: string

}

export const initalState: LopState = {
    listLopDataTable: [],
    listAllLop: [],
    pageNumber: 1,
    pageSize: 10,
    totalItems: 0,
    searchString: ''
}

export const lopReducer = createReducer(
    initalState,
    on(setAllLopAction, (state, { listLop }) => {
        return {
            ...state,
            listAllLop: listLop
        }
    }),
    on(setDataLopTableAction, (state, { totalItems, listLop }) => {
        return {
            ...state,
            totalItems: totalItems,
            listLopDataTable: listLop
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
