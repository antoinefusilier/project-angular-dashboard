import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  
  protected heroInfo = {
    title: 'ADAC - Assistant to the digitalization and automation of companies',
    description: `Application de centralisation, uniformisation et automatisation du traitement des données en fonction de besoins spécifique d'une entreprise.Application de centralisation, uniformisation et automatisation du traitement des données en fonction de besoins spécifique d'une entreprise.`,
    action1:'Commencer dès maintenant',
    action2: 'Prévisualisation test'
  }
}
