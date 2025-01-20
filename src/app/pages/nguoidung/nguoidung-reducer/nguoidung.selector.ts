import { NguoiDungState } from "./nguoidung.reducer"

export const selectNguoiDungState = (state: NguoiDungState) => state
export const selectorNguoiDungState = (state: any) => state.nguoidung
// export const selectMainDSLop = (state: any) => state.main

// export const selectDSHS = createSelector(
//     selectMainState,
//     (state: MainState) => state.listHsTrongLop
// )

// export const selectDsLop = createSelector(
//     selectMainState,
//     (state: MainState) => state.listLop
// )