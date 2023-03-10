import { Component, OnInit, Renderer2, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signOut } from "firebase/auth";
import { UserService } from 'src/app/services/user.service';

const auth = getAuth();

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userPictureURL: string = '';

  constructor(private router: Router, private Uservice: UserService){


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
