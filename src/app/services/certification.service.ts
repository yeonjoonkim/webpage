import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {
  private certi = [
    {name: 'Cisco Certified Network Associate',
    certifiedDate: '24 Jun 2020',
    valid: '24 Jun 2021',
    verificationCode: 'VFJMZ10NC31E1NWZ',
    url: 'https://www.cisco.com/go/verifycertificate',
    downloadUrl: '../../assets/document/CCNA.pdf'
    }
  ];
  constructor() { }

  getList(){
    return this.certi;
  }
}
