import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
declare let $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  hours: any;
  min: any;
  loading: boolean;
  errorMensage: boolean;

  constructor(private router: Router ) { }

  ngOnInit() {
    this.clock();
    document.body.classList.add('body_login');
  }

  ngOnDestroy() {
    document.body.classList.remove('body_login');
  }

  send() {
    this.loading = true;
    const password = $('#password').val();
    if (password !== 'admin') {
      $('.validate').show().effect('shake', 'fast');
      this.errorMensage = true;
      this.loading = false;
    } else {
      this.errorMensage = false;
      setTimeout(() => {
        this.loading = false;
        this.router.navigate(['/home']);
      }, 1000);
    }
  }

  clock() {
    setInterval(() => {
      const today = new Date();
      this.hours = today.getHours();
      this.min = today.getMinutes();
    }, 6000);

  }
}
