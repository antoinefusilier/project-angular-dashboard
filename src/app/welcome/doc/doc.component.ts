import { Component } from '@angular/core';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent {
  protected documents = [
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
  protected currentDoc:any = this.documents[0];

}
