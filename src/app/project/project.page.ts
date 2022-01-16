import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, Platform } from '@ionic/angular';

@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  list: any;
  backToTop = false;
  constructor(private platform: Platform) { }

  ngOnInit() {
  }

  getScrollPos(pos: number) {
    if (pos > this.platform.height()) {
         this.backToTop = true;
    } else {
         this.backToTop = false;
    }
  }
  gotToTop() {
    this.content.scrollToTop(1000);
  }

}
