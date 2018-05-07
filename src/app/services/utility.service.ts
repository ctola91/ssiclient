import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class UtilityService {

  private state = new BehaviorSubject<boolean>(false);
  currentState = this.state.asObservable();

  constructor() { }

  changeState(status: boolean) {
    this.state.next(status);
  }
}
