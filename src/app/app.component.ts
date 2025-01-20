import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectInterview_angular';

  constructor(private router: Router) { }

  goToQLNguoiDung() {
    this.router.navigate(['/nguoidung'])
  }

  goToQLLop() {
    this.router.navigate(['/lop'])
  }
}
