import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertsService } from '../appServices/alerts.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  constructor (private route: ActivatedRoute, private AlertService: AlertsService){

  }

  ngOnInit() {
    const error = this.route.snapshot.queryParamMap.get('error')
    console.log('Error handler',error)
    if (error && error === 'ERR_CONNECTION_REFUSED'){

      this.AlertService.error('Serveur déconnecté', 'Le serveur distant de l\'application (backend), ne répond plus... Si le problème persiste veuillez-vous rapporcher d\'un administrateur.')
    }
  }
}
