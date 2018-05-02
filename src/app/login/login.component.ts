import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginResult } from '../shared/LoginResult';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ssi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    const user = this.form.value;
    this.userService.login(user)
      .subscribe(this.getLoginData.bind(this),
        this.catchError.bind(this));
  }

  private getLoginData(loginResult: LoginResult) {
    console.log();
    if (loginResult.success === 'true') {
      localStorage.setItem('token', loginResult.token);
      this.router.navigate(['home']);
    }
  }

  private catchError(err) {
    if (err instanceof HttpErrorResponse) {
      // this.message = `Http Error: ${err.status}, text: ${err.statusText}`;
      console.log(err);
    } else {
      // this.message = `Unknown error, text: ${err.message}`;
      console.log(err);
    }
    // this.fullError = err;
  }

}
