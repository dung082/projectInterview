import { createSelector } from "@ngrx/store"
import { MainState } from "./main.reducer"

export const selectMainState = (state: MainState) => state
export const selectMainDSLop = (state: any) => state.main

export const selectDSHS = createSelector(
    selectMainState,
    (state: MainState) => state.listHsTrongLop
)

export const selectDsLop = createSelector(
    selectMainState,
    (state: MainState) => state.listLop
)