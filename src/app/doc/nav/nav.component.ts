import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  protected docs = [
    {
      title: 'Introduction',
      name: 'intro',
      subParts: [
        {
          title: 'Installation',
          name: 'install',
          description: '',
        }
      ]
    }
  ]
}
