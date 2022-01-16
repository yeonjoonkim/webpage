import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReferalService {

  private ref =[]
  constructor() { }

  getList(){
    return this.ref;
  }
}
