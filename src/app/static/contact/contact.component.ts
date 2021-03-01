import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { LookupService } from 'src/app/services/lookup.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat: number;
  lng: number;
  zoom: number = 14;
  baseImgUrl: string;
  panelOpenState: boolean;
  arrWkTimeTable: any[] = [];
  address: string = "23 National Circuit, Canberra";
  // ======= Contact us ==========
  ClientName: string;
  ClientEmail: string;
  ClientEmailSubscribe: string;
  ClientMsg: string;
  ClientPhoneNo: string;
// ===============================
  constructor(private router: Router,
    public backendService: BackendService,
    public lookupService: LookupService) { }
  send_msg(data) {
    console.log(data);
  }
  open_page(page_id) {
    page_id == 1 ? this.router.navigate(["/reservation"]) 
      : page_id == 2 ? this.router.navigate(["/menu"])
      : page_id == 3 ? this.router.navigate(["/takeaway"])
      : null;   
  }
  SrcPremiseImg: string;
  OrgAddress: string;
  OrgEmail: string;
  OrgContactNo: string;
  init() {
    this.baseImgUrl = this.backendService.getImgUrl(2);
    let arrOrgInfo = JSON.parse(localStorage.getItem("OrgInfo"));
    this.lat = parseFloat(arrOrgInfo[0].lat); 
    this.lng = parseFloat(arrOrgInfo[0].lng); 
    this.SrcPremiseImg = this.baseImgUrl + "premise/1001" + arrOrgInfo[0].ImgId + ".png";
    this.OrgAddress = arrOrgInfo[0].OrgAddress + ", " + arrOrgInfo[0].Suburb + ", " + arrOrgInfo[0].City;
    this.OrgEmail = arrOrgInfo[0].OrgEmail;
    this.OrgContactNo = arrOrgInfo[0].OrgContact;
  }
  ngOnInit() {
    this.baseImgUrl = this.backendService.getImgUrl(2);
    this.arrWkTimeTable = this.lookupService.getWkTimeTables();
    this.init();
  }

}
