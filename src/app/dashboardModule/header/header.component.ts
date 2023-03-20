import { Component, OnInit, Renderer2, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signOut } from "firebase/auth";
import { AlertsService } from 'src/app/appServices/alerts.service';
import { UserService } from 'src/app/appServices/user.service';

const auth = getAuth();

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userPictureURL: string = '';

  constructor(
    private router: Router,
    private Uservice: UserService,
    private aServ: AlertsService){

  }
  newAlerte(){
    // this.aServ.alertTest('test title', 'test description')
    this.aServ.success('test title','Test success message');
  }
  ngOnInit(): void {
    // console.log(this.currentUser.photoURL);
    // this.userPictureURL = String(this.currentUser.photoURL)
  }
  disconnect = async() => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('Déconnexion ...')
      this.router.navigate(['/auth'])

    }).catch((error) => {
      // An error happened.
      console.log('Disconnect error ',error);

    });

  }

}
