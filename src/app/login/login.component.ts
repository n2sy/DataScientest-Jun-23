import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  defaultLanguage = 'php';
  myComment = 'Rien à signaler...';
  showError = false;

  constructor(
    private http: HttpClient,
    private authSer: AuthService,
    private router: Router
  ) {}

  onLogin(f: NgForm) {
    this.authSer.seConnecter(f.value).subscribe({
      next: (response) => {
        alert(response['message']);
        localStorage.setItem('mytoken', response['token']);
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        this.showError = true;
        f.reset();
      },
    });
  }

  onReset(f: NgForm) {
    f.reset();
  }
  ngOnInit() {
    // this.http.get('https://jsonplaceholderx.typicode.com/users').subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    //   complete: () => {
    //     console.log('Flux terminée !');
    //   },
    // });
  }
}
