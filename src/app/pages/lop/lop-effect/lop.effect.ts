import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { exhaustMap, map } from "rxjs";
import { LopService } from "../lop-service/lop.service";
import { getAllLopAction, searchLopAction, setAllLopAction, setDataLopTableAction } from "../lop-action/lop.action";

@Injectable()
export class LopEffect {
    private actions$ = inject(Actions);

    constructor(
        private lopService: LopService,
        // private actions$: Actions,
        private store: Store
    ) { }


    layDanhSachLop$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getAllLopAction),
            exhaustMap(() =>
                this.lopService.getAllLop().pipe(
                    map((response: any) => {
                        console.log(response);
                        // Trả về action thay vì dispatch
                        this.store.dispatch(setAllLopAction({ listLop: response }))
                    })
                )
            )
        );
    }, {
        dispatch: false
    });


    layDanhSachLopTable$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(searchLopAction),
            exhaustMap((action) =>
                this.lopService.searchLop(action.searchString, action.pageNumber, action.pageSize).pipe(
                    map((response: any) => {
                        console.log(response);
                        // Trả về action thay vì dispatch
                        this.store.dispatch(setDataLopTableAction({ totalItems: response?.total, listLop: response?.listLop }))
                    })
                )
            )
        );
    }, {
        dispatch: false
    });


}