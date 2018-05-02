import { Component, OnInit } from '@angular/core';
import {Trainer} from '../shared/trainer';
import {TrainerService} from '../services/trainer.service';

@Component({
  selector: 'ssi-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit {

  trainers: Trainer[];

  constructor(private trainerService: TrainerService) { }

  ngOnInit() {
    this.trainerService.getTrainers().subscribe(
      trainers => this.trainers = trainers);
  }

}
