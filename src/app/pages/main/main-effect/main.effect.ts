import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { exhaustMap, map } from "rxjs";
import { ganDanhSachHocSinhAction, ganDanhSachLopAction, ganDanhSachNguoiDungAction, layDanhSachHocSinhAction, layDanhSachLopAction, layDanhSachNguoiDungAction } from "../main-action/main.action";
import { MainService } from "../main-service/main.service";


@Injectable()
export class MainEffect {
    private actions$ = inject(Actions);

    constructor(
        private mainService: MainService,
        // private actions$: Actions,
        private store: Store
    ) { }

    layDanhSachHocSinh$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(layDanhSachHocSinhAction),
            exhaustMap((action) =>
                this.mainService.layDanhSach(action.lopId, action.namHoc).pipe(
                    map((response: any) => {
                        // Trả về action thay vì dispatch
                        this.store.dispatch(ganDanhSachHocSinhAction({ listHs: response }));
                    })
                )
            )
        );
    }, {
        dispatch: false
    });

    layDanhSachLop$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(layDanhSachLopAction),
            exhaustMap(() =>
                this.mainService.layDanhSachLop().pipe(
                    map((response: any) => {
                        console.log(response);
                        // Trả về action thay vì dispatch
                        this.store.dispatch(ganDanhSachLopAction({ listDSLop: response }))
                    })
                )
            )
        );
    }, {
        dispatch: false
    });

    layDanhSachNguoiDung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(layDanhSachNguoiDungAction),
            exhaustMap(() =>
                this.mainService.layDanhSachNguoiDung().pipe(
                    map((response: any) => {
                        // Trả về action thay vì dispatch
                        this.store.dispatch(ganDanhSachNguoiDungAction({ listNgDung: response }))
                    })
                )
            )
        );
    }, {
        dispatch: false
    });
}