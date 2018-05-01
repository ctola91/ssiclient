import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import {STATUS_CODES} from '../shared/appconstants';

@Component({
  selector: 'ssi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService) {
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
      .subscribe(
        result => {
          const keys = result.headers.keys();
          console.log(keys);
        },
        error => {
          console.log(<any>error);
        }
      );
  }
}
