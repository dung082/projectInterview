import { LopState } from "./lop.reducer"

export const selectLopState = (state: LopState) => state
export const selectorLopState = (state: any) => state.lop
// export const selectMainDSLop = (state: any) => state.main

// export const selectDSHS = createSelector(
//     selectMainState,
//     (state: MainState) => state.listHsTrongLop
// )

// export const selectDsLop = createSelector(
//     selectMainState,
//     (state: MainState) => state.listLop
// )