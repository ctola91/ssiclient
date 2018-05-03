import { Component, OnInit } from '@angular/core';
import {Trainer} from '../shared/trainer';
import {TrainerService} from '../services/trainer.service';
import {ResponseService} from '../shared/responseService';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ssi-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit {

  trainers: Trainer[];

  displayedColumns = ['image', 'name', 'ci', 'speciality', 'skillsDescriptions', 'Accion'];

  constructor(private trainerService: TrainerService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.trainerService.getTrainers().subscribe(
      trainers => this.trainers = trainers);
  }

  deleteTrainer(trainer: Trainer): void {

    this.trainerService.deleteTrainer(trainer)
      .subscribe(this.processData.bind(this), this.processError.bind(this));
  }

  private processData(response: ResponseService) {
    console.log(response.status);
    if (response.status === 'deleted') {
      this.trainerService.getTrainers().subscribe(
        trainers => this.trainers = trainers);
    }
  }

  private processError(err) {
    console.log(err);
  }
}
