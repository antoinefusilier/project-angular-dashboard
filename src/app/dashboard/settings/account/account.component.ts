import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  currentUserInfo = {};
  protected account = {
    type: 'admin',
    profile: {
      firstName: 'Antoine',
      lastName: 'Fusilier',
      email: 'antoinefusilier@gmail.com',
      role: 'Alternant Développeur FullStack'
    }
  }
  constructor(private router: Router, private route: ActivatedRoute, private title: Title, private Uservice: UserService){
    this.route.data.subscribe((value:any)=>{
      this.title = value.title
    })
    // this.Uservice.getUserInfo.then((userValues:any)=>{
    //   console.log('Données utilisateurs récupérées avec succès... !');
    //   this.currentUserInfo = userValues;
    // })
    // .catch((err:any)=>{
    //   console.log('Erreur lors de l\'appel de la methode de récupération des données utilisateur du UserService...',err);
    //   this.router.navigate(['']);
    // })
    // this.changeQuery();
  }

  changeQuery = () => {
    // this.router.navigate(['.'], {relativeTo: this.route, queryParams: {test1: '12345689'}})
  }
  ngOnInit(): void {

  }
}
