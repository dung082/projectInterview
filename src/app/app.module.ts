import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainEffect } from './pages/main/main-effect/main.effect';
import { mainReducer } from './pages/main/main-reducer/main.reducer';
import { MainComponent } from './pages/main/main.component';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddNguoidungComponent } from './pages/main/add-nguoidung/add-nguoidung/add-nguoidung.component';
import { provideToastr, ToastrModule } from 'ngx-toastr';
// const routes: Routes = [
//   {
//     path: '',
//     component: MainComponent
//   },
// ];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddNguoidungComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatPaginatorModule,
    // HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ main: mainReducer }),
    EffectsModule.forRoot([MainEffect]),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [provideHttpClient(withFetch()), provideAnimations(), // required animations providers
  provideToastr(), // Toastr providers
  ]
})
export class AppModule { }
