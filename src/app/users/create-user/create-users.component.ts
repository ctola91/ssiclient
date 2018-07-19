import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../shared/User';
import { ActivatedRoute, Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ERROR_MSG, MSG_PERSONAL_CREATED, TITLE_MSG_PERSONAL, TITLE_MSG_USER, MSG_USER_BODY_CREATED} from '../../shared/Messages';

@Component({
  selector: 'ssi-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss']
})
export class CreateUsersComponent implements OnInit {

  userForm: FormGroup;
  user: User;
  isUpdate = false;
  id: number;
 
  color = 'accent';
  checked = false;
  disabled = false;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private toastService: ToastrService) {
    this.createForm();
  }

  ngOnInit() {

    this.verifyEditParam();
  }

  private verifyEditParam(): void {
    this.route.params.subscribe(this.loadEditData.bind(this), this.processError.bind(this));
  }

  private createForm() {
    this.userForm = this.fb.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ],
      userActive: ['', Validators.required ]
    });
  }


  private loadEditData(params: any): void {
    if (params.id !== undefined) {
      this.id = params.id;
      this.userService.getUserById(params.id).subscribe(this.processPersonalData.bind(this), this.processError.bind(this));
    }
  }

  private processPersonalData(user: any): void {

    if( user != null) {
      this.isUpdate = true;
      this.loadEditUser(user);
    }

  }

  private loadEditUser(user: any): void {
    this.userForm.patchValue({
        username: user.username,
        password: user.password,
        userActive: user.userActive
     // area: personal.area.name
    });
  }

  onSubmit() {
    if (!this.isUpdate) {
      console.log(this.userForm.value);
      if(this.userForm.value.userActive == "") {
        this.userForm.value.userActive = false;
      }
      this.userService.saveUser(this.userForm.value)
        .subscribe(this.processData.bind(this), this.processError.bind(this));
    } else {
      this.userService.updateUser(this.userForm.value, this.id)
        .subscribe(this.processData.bind(this), this.processError.bind(this));
    }
  }

  private processData(response: any) {
    if (response !== null) {
      this.toastService.info(MSG_USER_BODY_CREATED, TITLE_MSG_USER);
      this.router.navigate(['users']);
    }
  }

  private processError(err) {
    console.log(err);
    this.toastService.error(err, ERROR_MSG);
  }
}
