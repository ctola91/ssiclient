import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Trainer} from '../../shared/trainer';
import {ActivatedRoute, Router} from '@angular/router';
import {TrainerService} from '../../services/trainer.service';

@Component({
  selector: 'ssi-create-trainer',
  templateUrl: './create-trainer.component.html',
  styleUrls: ['./create-trainer.component.scss']
})
export class CreateTrainerComponent implements OnInit {

  trainerForm: FormGroup;
  trainer: Trainer;
  title: String;
  idTrainer: number;
  isUpdate: boolean;

  constructor(private fb: FormBuilder,
              private trainerService: TrainerService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['id'] !== undefined) {
        this.title = 'Modificar capacitador';
        this.isUpdate = true;
        this.idTrainer = +params['id'];
        this.findTrainer();
      } else {
        this.title = 'Crear capacitador';
        this.isUpdate = false;
      }
    });

    this.createForm();
  }

  private findTrainer() {
    this.trainerService.findTrainerById(this.idTrainer).subscribe(trainer  => {
      this.trainer = trainer;
      if (this.isUpdate) {
        this.trainerForm.patchValue({
          name: trainer.name,
          ci: trainer.ci,
          speciality: trainer.speciality,
          skillsDescriptions: trainer.skillsDescriptions
        });
      }
    });
  }

  private createForm() {
    this.trainerForm = this.fb.group({
      name: ['', Validators.required],
      ci: ['', Validators.required],
      speciality: ['', Validators.required],
      skillsDescriptions: ['', Validators.required],
      image: ['']
    });
  }

  onSubmit() {
    if (this.isUpdate) {
      this.trainerService.updateTrainer(this.trainerForm.value, this.trainer.id)
        .subscribe(this.processData.bind(this), this.processError.bind(this));
    } else {
      this.trainerService.saveTrainer(this.trainerForm.value)
        .subscribe(this.processData.bind(this), this.processError.bind(this));
    }

  }

  private processData(response: any) {
    if (response !== null) {
      this.router.navigate(['trainers']);
    }
  }

  private processError(err) {
    console.log(err);
  }
}
