import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../shared/model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private service: UserService,
    private router: Router,
    private fb: FormBuilder) {
    this.form = this.fb.group({
      account: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login() {
    // const formVal = this.form.value;
    // const model = <UserModel>{ account: formVal.account, password: formVal.password };
    // this.service.login(model).subscribe(result => {
    //   localStorage.setItem('userName', result.account);
    //   localStorage.setItem('token', result.token);
    //   this.router.navigate(['']);
    //   console.log(result)
    // }, (err: HttpErrorResponse) => { });
  }

}
