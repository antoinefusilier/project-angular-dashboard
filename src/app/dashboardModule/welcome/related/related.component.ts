import { Component } from '@angular/core';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.css']
})
export class RelatedComponent {
  protected relateds = [
    {
      title : "Hostinger Panel",
      description: "Tableau de bord hostinger",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/82/Hostinger_logo.png",
      link: 'https://hpanel.hostinger.com/hosting/etsleblanc.fr'
    },
    {
      title : "Site Leblanc",
      description: "Site Leblanc disponible sur addressage IP",
      img: "assets/logo_leblanc.png",
      link: 'https://etsleblanc.fr'
    },
    {
      title : "Prestashop Admin",
      description: "Tableau de bord Prestashop",
      img: "https://upload.wikimedia.org/wikipedia/fr/7/7d/Prestashop-logo.png",
      link: 'https://etsleblanc.fr/ggh37uzgymaafwiv'
    },
    {
      title : "Divalto Web",
      description: "Accès web à Divalto",
      img: "https://syxperiane.com/wp-content/uploads/2022/08/logo-divalto-1.png",
      link: 'https://webapp.divaltocloud.com/lcweb/'
    }
  ]
}
