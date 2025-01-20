import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { exhaustMap, map } from "rxjs";
import { getAllNguoiDungAction, searchNguoiDungAction, setAllNguoiDungAction, setDataNguoiDungTableAction } from "../nguoidung-action/nguoidung,action";
import { NguoiDungService } from "../nguoidung.service/nguoidung.service";

@Injectable()
export class NguoiDungEffect {
    private actions$ = inject(Actions);

    constructor(
        private nguoiDungService: NguoiDungService,
        // private actions$: Actions,
        private store: Store
    ) { }


    layDanhSachNguoiDung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getAllNguoiDungAction),
            exhaustMap(() =>
                this.nguoiDungService.getAllNguoiDung().pipe(
                    map((response: any) => {
                        console.log(response);
                        // Trả về action thay vì dispatch
                        this.store.dispatch(setAllNguoiDungAction({ listNguoiDung: response }))
                    })
                )
            )
        );
    }, {
        dispatch: false
    });


    layDanhSachNguoiDungTable$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(searchNguoiDungAction),
            exhaustMap((action) =>
                this.nguoiDungService.searchNguoiDung(action.searchString, action.pageNumber, action.pageSize).pipe(
                    map((response: any) => {
                        console.log(response);
                        // Trả về action thay vì dispatch
                        this.store.dispatch(setDataNguoiDungTableAction({ totalItems: response?.total, listNguoiDung: response?.listnguoiDung }))
                    })
                )
            )
        );
    }, {
        dispatch: false
    });


}