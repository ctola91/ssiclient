import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Kardex} from '../../shared/Kardex';
import {ActivatedRoute, Router} from '@angular/router';
import {KardexService} from '../../services/kardex.service';

@Component({
  selector: 'ssi-crate-kardex',
  templateUrl: './crate-kardex.component.html',
  styleUrls: ['./crate-kardex.component.scss']
})
export class CrateKardexComponent implements OnInit {
  kardexForm: FormGroup;
  kardex: Kardex;

  constructor(private fb: FormBuilder,
              private kardexService: KardexService,
              private route: ActivatedRoute,
              private router: Router) {
              this.createForm();
  }

  ngOnInit() {
  }
  private createForm() {
      this.kardexForm = this.fb.group({
      equipmnent: ['', Validators.required],
      dateKardex: ['', Validators.required ],
      entry: ['', Validators.required ],
      outlay: ['', Validators.required ],
      balance: ['', Validators.required],
    });
  }
  onSubmit() {
    this.kardexService.saveKardex(this.kardexForm).subscribe(this.processData.bind(this), this.processError.bind(this));
  }

  private processData(response: any) {
    this.router.navigate(['inventory']);
  }
  private processError(err) {
    console.log(err);
  }
}
