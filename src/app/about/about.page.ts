import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, Platform } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  loadDone = false;
  backToTop = false;
  info  = {
    name: 'Yeon Joon Kim',
    position: 'Front End Developer',
  };
  constructor(private platform: Platform) { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    setTimeout(_ => {
      this.loadDone = true;
    }, 500);
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
