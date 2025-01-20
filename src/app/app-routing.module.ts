import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { NguoidungComponent } from './pages/nguoidung/nguoidung.component';
import { LopComponent } from './pages/lop/lop.component';

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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
