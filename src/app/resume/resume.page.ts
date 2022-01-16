import { Component, OnInit, ViewChild } from '@angular/core';
import { EducationService } from '../services/education.service';
import { ExperienceService } from '../services/experience.service';
import { CertificationService } from '../services/certification.service';
import { ReferalService } from '../services/referal.service';
import { IonContent, Platform } from '@ionic/angular';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
})
export class ResumePage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  education: any;
  experience: any;
  referal: any;
  certificate: any;
  selection = ['Experience', 'Education','Certification'];
  selected = this.selection[0];
  // display: number;
  upTrigger = '';
  backToTop = false;

  constructor(private edu: EducationService,
    private exp: ExperienceService,
     private certi: CertificationService,
      private ref: ReferalService,
      private platform: Platform,
      ) {
    }

  ngOnInit() {
    this.education = this.edu.getList();
    this.experience = this.exp.getList();
    this.referal = this.ref.getList();
    this.certificate = this.certi.getList();
  }

  ionViewDidEnter() {
    this.segmentChanged(this.selection[0]);
  }

  segmentChanged(value) {
    setTimeout(_ => {
      this.upTrigger = value;
    }, 10);
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
