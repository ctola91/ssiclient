import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import {ActivatedRoute, Router} from "@angular/router";

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
      .subscribe(
        result => {
          if (result.body.success === 'true') {
            localStorage.setItem('token', result.body.token);
            this.router.navigate(['home']);
          }
        },
        error => {
          console.log(<any>error);
        }
      );
  }

}
