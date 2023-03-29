import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Event,Router,RouterEvent } from '@angular/router';
import { getAuth, signOut } from "firebase/auth";
import { filter } from 'rxjs';
import { AlertsService } from 'src/app/appServices/alerts.service';
import { UserService } from 'src/app/appServices/user.service';


const auth = getAuth();

declare var $:any
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  userPictureURL: string = '';
  displayingSideBar: boolean =  false;

  @Input('ngModel') currUser: any = {};

  constructor(
    private router: Router,
    private Uservice: UserService,
    private aServ: AlertsService,
    ){

      this.getCurrentUser()
      router.events.pipe(
        filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
     ).subscribe((e: RouterEvent) => {
      //  this.displaySideBar()
     });

  }

  ngOnInit(){
    this.getCurrentUser()
    console.log('CURRENT USER 2',this.currUser)

  }
  ngAfterViewInit(): void {
    this.displaySideBar()

  }
  displaySideBar = () => {


    let sidebar_mob = document.getElementById('sidebar_mobil');
    // $('#').attr('class', 'hidden')
    let sidebar_mob_bg = document.getElementById('sidebar_mobil_bg');
    if (sidebar_mob
      && sidebar_mob_bg
      && sidebar_mob.style.display !== 'none'){
      this.displayingSideBar = false;
      sidebar_mob.style.display = 'none';
      sidebar_mob_bg.style.display = 'none';

    } else if (sidebar_mob && sidebar_mob_bg) {
      sidebar_mob.style.display = 'flex';
      sidebar_mob_bg.style.display = 'block';

    } else if (this.displayingSideBar === true && sidebar_mob
      && sidebar_mob_bg){
      this.displayingSideBar = false;
      sidebar_mob.style.display = 'none';
      sidebar_mob_bg.style.display = 'none';
    }
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
