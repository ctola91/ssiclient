import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ssi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    // private authService: AuthService,
    private router: Router
  ) {
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
  }

  ngOnInit() {
  }

  login() {
    console.log(this.loginForm.value);
    // this.authService.login(this.loginForm.value)
    //   .subscribe(() => {
    //     console.log('login success');
    //     this.loginForm.reset();
    //   });
  }
}
