import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  protected headerCompose = {
    inMod : [
    {
      title: 'Réception',
      name: 'hero',
      description: 'Acceuil publique de l\'application',
    },
    {
      title: 'Présentation',
      name: 'showing',
      description: 'Présentation général et explication du projet',
    },
    {
      title: 'Participer',
      name: 'joinus',
      description: 'Faire partit du projet. Nous rejoindre dans le développement de cette application et la continuité du projet.',

    }, {
      title: 'Documentation',
      name: 'doc',
      description: 'Documentation générale de l\'application et de son dévelopment',
    }
  ],
  outMod: [

  ]
  }
}
