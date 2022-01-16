import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  activePageTitle = 'about';

  Pages = [
    {
      title: 'About',
      url: '/about',
      icon: 'person'
    },    {
      title: 'Resume',
      url: '/resume',
      icon: 'person'
    },     {
      title: 'Project',
      url: '/project',
      icon: 'person'
    }
  ];
  LinkedIn = [
      {
        url:'https://www.linkedin.com/in/yeonjoon-kim',
        icon: 'logo-linkedin'
      }
    ];

  constructor(
  ) {
  }

}
