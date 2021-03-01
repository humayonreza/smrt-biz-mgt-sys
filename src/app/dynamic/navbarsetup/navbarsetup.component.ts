import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-navbarsetup',
  templateUrl: './navbarsetup.component.html',
  styleUrls: ['./navbarsetup.component.css']
})
export class NavbarsetupComponent implements OnInit {

  constructor(private backendService: BackendService) {}
  
  baseImgUrl: string;
  SrcLogoImg: string;
  init() {
    this.baseImgUrl = this.backendService.getImgUrl(2);
    let arrOrgInfo = JSON.parse(localStorage.getItem("OrgInfo"));
    this.SrcLogoImg = this.baseImgUrl + "logo/1001" + arrOrgInfo[0].ImgId + ".png";
  }
  ngOnInit() {
    this.init();  
  }

}
