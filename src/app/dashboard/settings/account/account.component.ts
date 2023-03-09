import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  protected account = {
    type: 'admin',
    profile: {
      firstName: 'Antoine',
      lastName: 'Fusilier',
      email: 'antoinefusilier@gmail.com',
      role: 'Alternant Développeur FullStack'
    }
  }
}
