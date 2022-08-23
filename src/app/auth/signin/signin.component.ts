import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm = new UntypedFormGroup({});

  constructor(private router: Router) { }

  get email() {
    return this.signinForm.get('email');
  }

  get password() {
    return this.signinForm.get('password');
  }

  ngOnInit(): void {
    this.signinForm = new UntypedFormGroup({
      email: new UntypedFormControl('', [Validators.required]),
      password: new UntypedFormControl('', Validators.required),
      rememberme: new UntypedFormControl()
    });
  }

  onClickSignin(data: UntypedFormGroup) {
    console.log('this.signinForm.valid ', this.signinForm.valid);
    if (this.signinForm.valid) {
      console.log('data = ', data);
      this.router.navigate(['/problemset/all']);
    }
  }

}
