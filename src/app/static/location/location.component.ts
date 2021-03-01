import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { LookupService } from 'src/app/services/lookup.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  baseImgUrl: string;
  lat: number;
  lng: number;
  zoom: number = 14;
  
  OrgName: string;
  OrgAddress: string;
  SrcPremiseImg: string;
  Carpark: string;
  OrgContactNo: string;
  constructor(
    private router: Router,
    public backendService: BackendService,
    public lookupService : LookupService,
  ) { }

  open_page(page_id) {
    page_id == 1 ? this.router.navigate(["/reservation"]) 
      : page_id == 2 ? this.router.navigate(["/menu"])
      : page_id == 3 ? this.router.navigate(["/takeaway"])
      : null;   
  }
  
  init() {
    this.baseImgUrl = this.backendService.getImgUrl(2);
    let arrOrgInfo = JSON.parse(localStorage.getItem("OrgInfo"));
    this.OrgName = arrOrgInfo[0].OrgName;
    this.OrgAddress = arrOrgInfo[0].OrgAddress + ", " + arrOrgInfo[0].Suburb + ", " + arrOrgInfo[0].City;
    this.OrgContactNo = arrOrgInfo[0].OrgContact;
    this.lat = parseFloat(arrOrgInfo[0].lat); 
    this.lng = parseFloat(arrOrgInfo[0].lng); 
    this.SrcPremiseImg = this.baseImgUrl + "premise/1001" + arrOrgInfo[0].ImgId + ".png";
    this.Carpark = arrOrgInfo[0].Carpark + ", " + arrOrgInfo[0].Suburb + ", " + arrOrgInfo[0].City + ", " + arrOrgInfo[0].Country;
  }
  ngOnInit() {
    this.baseImgUrl = this.backendService.getImgUrl(2);
    this.init();
  }

}
