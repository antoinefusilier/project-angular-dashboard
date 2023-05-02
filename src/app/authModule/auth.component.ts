import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertsService } from '../appServices/alerts.service';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @Input('ngModel') message:any;


  constructor (private route: ActivatedRoute, private AlertService: AlertsService,
    private router: Router){


  }




  ngOnInit() {
    const error = this.route.snapshot.queryParamMap.get('error')
    console.log('Error handler',error)
    if (error && error === 'ERR_CONNECTION_REFUSED'){

      this.AlertService.error('Serveur déconnecté', 'Le serveur distant de l\'application (backend), ne répond plus... Si le problème persiste veuillez-vous rapporcher d\'un administrateur.')
      this.message = {
        title: 'En attente de réponse du serveur',
        description: 'Nous sommes désolé pour la gène occasionnée'
      }
      // this.router.navigate(['/auth/signin'])


    }
  }
}
