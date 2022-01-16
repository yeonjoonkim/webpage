import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private list = [
    {
      name: 'GitHub',
      url: 'https://github.com/yeonjoonkim/',
      icon: 'logo-github'
    }
  ];

  constructor() { }

  getList(){
    return this.list;
  }
}
