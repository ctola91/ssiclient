import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ssi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ssi';

  constructor(private route: ActivatedRoute,
              private router: Router) {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['login']);
    }
  }
}
