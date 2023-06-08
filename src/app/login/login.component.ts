import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  defaultLanguage = 'php';
  myComment = 'Rien à signaler...';

  constructor(private http: HttpClient) {}

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

  submitHandler(f: NgForm) {
    console.log(f);
  }

  onReset(f: NgForm) {
    f.reset();
  }
}
