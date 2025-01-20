import { CommonModule, registerLocaleData } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LopEffect } from './pages/lop/lop-effect/lop.effect';
import { lopReducer } from './pages/lop/lop-reducer/lop.reducer';
import { LopComponent } from './pages/lop/lop.component';
import { AddNguoidungComponent } from './pages/main/add-nguoidung/add-nguoidung/add-nguoidung.component';
import { MainEffect } from './pages/main/main-effect/main.effect';
import { NzIconModule } from 'ng-zorro-antd/icon';
import vi from '@angular/common/locales/vi';

import { mainReducer } from './pages/main/main-reducer/main.reducer';
import { MainComponent } from './pages/main/main.component';
import { UpdateNguoidungComponent } from './pages/main/update-nguoidung/update-nguoidung.component';
import { NguoiDungEffect } from './pages/nguoidung/nguoidung-effect/nguoidung.effect';
import { nguoiDungReducer } from './pages/nguoidung/nguoidung-reducer/nguoidung.reducer';
import { NguoidungComponent } from './pages/nguoidung/nguoidung.component';
import { NgRxModule } from './ngzorro/ant-module';
import { provideNzI18n, vi_VN } from 'ng-zorro-antd/i18n';
import { EditNguoidungComponent } from './pages/nguoidung/edit-nguoidung/edit-nguoidung.component';
import { AddNguoiDungComponent } from './pages/nguoidung/add-nguoidung/add-nguoidung.component';
import { AddLopComponent } from './pages/lop/add-lop/add-lop.component';
import { EditLopComponent } from './pages/lop/edit-lop/edit-lop.component';
// const routes: Routes = [
//   {
//     path: '',
//     component: MainComponent
//   },
// ];

const routes: Routes = [
  {
    path: '',
    component: NguoidungComponent
  },
  {
    path: 'nguoidung',
    component: NguoidungComponent
  },
  {
    path: 'lop',
    component: LopComponent
  },
  {
    path: 'hstronglop',
    component: MainComponent
  },
];
registerLocaleData(vi);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddNguoidungComponent,
    UpdateNguoidungComponent,
    NguoidungComponent,
    LopComponent,
    EditNguoidungComponent,
    AddNguoiDungComponent,
    AddLopComponent,
    EditLopComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgRxModule,
    // NzIconModule.forRoot(icons),
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    StoreModule.forRoot({ main: mainReducer, nguoidung: nguoiDungReducer, lop: lopReducer }),
    EffectsModule.forRoot([MainEffect, NguoiDungEffect, LopEffect]),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [provideHttpClient(withFetch()), provideAnimations(), // required animations providers
  provideToastr(), // Toastr providers
  provideNzI18n(vi_VN),
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
