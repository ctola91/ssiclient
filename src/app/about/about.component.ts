import {Component, OnInit} from '@angular/core';
import {Personal} from '../shared/Personal';

@Component({
  selector: 'ssi-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public employees: Personal[];
  public employees2: Personal[];

  constructor() {
  }

  ngOnInit() {
    this.employees = [{
      id: 0, lastName: '', address: '', datebirth: '', telephone: 0,
      name: 'Jesús David Piérola Alvarado',
      email: 'jdpapiero@gmail.com',
      image: '../../assets/images/david.png'
    },
      {
        id: 0, lastName: '', address: '', datebirth: '', telephone: 0,
        name: 'Marcos Bustos Jimenez',
        email: 'marbusjim@gmail.com',
        image: '../../assets/images/marcos.png'
      },
      {
        id: 0, lastName: '', address: '', datebirth: '', telephone: 0,
        name: 'Ivan Misericordia Eulate',
        email: 'ivanmise@gmail.com',
        image: '../../assets/images/ivan.png'
      },
      {
        id: 0, lastName: '', address: '', datebirth: '', telephone: 0,
        name: 'Boris Gonzalo Medrano Guzman',
        email: 'borisytu2014@gmail.com',
        image: '../../assets/images/boris.png'
      }];

    this.employees2 = [
      {
        id: 0, lastName: '', address: '', datebirth: '', telephone: 0,
        name: 'Gilmer Daniel Fernandez Pinto',
        email: 'daniel.fernandezgp@gmail.com',
        image: '../../assets/images/daniel.png'
      },
      {
        id: 0, lastName: '', address: '', datebirth: '', telephone: 0,
        name: 'Christian Marcelo Tola Pacheco',
        email: 'ctolapacheco@gmail.com',
        image: '../../assets/images/christian.png'
      },
      {
        id: 0, lastName: '', address: '', datebirth: '', telephone: 0,
        name: 'Vanessa Alcocer Iriarte',
        email: 'valcocer.iriarte@gmail.com',
        image: '../../assets/images/vanessa.png'
      },
      {
        id: 0, lastName: '', address: '', datebirth: '', telephone: 0,
        name: 'Franz Alberto Lopez Choque',
        email: 'franzelunico@gmail.com',
        image: '../../assets/images/franz.png'
      }];
  }
}
