import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  constructor(private router: Router) {}

  ngOnInit() {

  }

  ingresarSistema() {
    this.router.navigate(['/inicio']);
  }
}
