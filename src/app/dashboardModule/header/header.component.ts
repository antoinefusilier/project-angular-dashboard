import { Component, OnInit, Input } from '@angular/core';
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

  @Input('ngModel') currUser: any = {};
  @Input('ngModel') photoURL: any = String(this.currUser.photoURL)
  constructor(
    private router: Router,
    private Uservice: UserService,
    private aServ: AlertsService){
      this.getCurrentUser()
  }

  getCurrentUser = async () => {
     this.Uservice.getCurrentUser().then((currentUser:any)=>{
       this.currUser = JSON.parse(currentUser)})
   }

   alertNotWork(){
    // this.aServ.alertTest('test title', 'test description')
    this.aServ.error('En construction','La recherche n\'est pas encore disponible...');
  }
  ngOnInit(): void {
    this.getCurrentUser()
  }
  disconnect = async() => {
    this.Uservice.signOut()
      .then(()=>{
        this.aServ.success('Déconnecté', 'Vous être bien déconnecté')
      })
      .catch((err:any)=>{
        this.aServ.error('Erreur de déconnexion', 'Erreur lors de la déconnexion, veuillez le référer à un administrateur. Désolé pour la gène occasionnée');
      })

  }

}
