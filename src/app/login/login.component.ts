import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginResult } from '../shared/LoginResult';
import { HttpErrorResponse } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {ERROR_MSG, ERROR_UNKNOW, MSG_LOGIN_CORRECTO, TITLE_MSG_LOGIN} from "../shared/Messages";

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
              private router: Router,
              private toastService: ToastrService) {
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
    if (loginResult.success === 'true') {
      this.toastService.success(MSG_LOGIN_CORRECTO, TITLE_MSG_LOGIN);
      localStorage.setItem('token', loginResult.token);
      this.router.navigate(['home']);
    }
  }

  private catchError(err) {
    if (err instanceof HttpErrorResponse) {
      this.toastService.error(ERROR_MSG, TITLE_MSG_LOGIN);
      console.log(err);
    } else {
      this.toastService.error(ERROR_UNKNOW, TITLE_MSG_LOGIN);
      console.log(err);
    }
  }

}
