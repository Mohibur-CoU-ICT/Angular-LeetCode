import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm = new FormGroup({});

  constructor(private router: Router) { }

  get email() {
    return this.signinForm.get('email');
  }

  get password() {
    return this.signinForm.get('password');
  }

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
      rememberme: new FormControl()
    });
  }

  onClickSignin(data: FormGroup) {
    console.log('this.signinForm.valid ', this.signinForm.valid);
    if (this.signinForm.valid) {
      console.log('data = ', data);
      this.router.navigate(['/problemset/all']);
    }
  }

}
