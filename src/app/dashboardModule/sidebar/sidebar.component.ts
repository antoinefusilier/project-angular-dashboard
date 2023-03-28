import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signOut } from "firebase/auth";
import { AlertsService } from 'src/app/appServices/alerts.service';
import { UserService } from 'src/app/appServices/user.service';

const auth = getAuth();

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  userPictureURL: string = '';

  @Input('ngModel') currUser: any = {};

  constructor(
    private router: Router,
    private Uservice: UserService,
    private aServ: AlertsService){
    
      this.getCurrentUser()


  }

  ngOnInit(){
    this.getCurrentUser()
    console.log('CURRENT USER 2',this.currUser)

  }

  getCurrentUser = async () => {
    this.Uservice.getCurrentUser().then((currentUser:any)=>{
      this.currUser = JSON.parse(currentUser)
      console.log('CURRENT USER',this.currUser)

      })
  }

  newAlerte(){
    // this.aServ.alertTest('test title', 'test description')
    this.aServ.success('test title','Test success message');
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
