import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  username$ = this.route.paramMap
  .pipe(
    map((params: ParamMap) => params.get('username'))
  );

  constructor(private route: ActivatedRoute){
    console.log('verif >> ', this.username$);
  }
}

