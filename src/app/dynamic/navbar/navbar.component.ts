import { Component, OnInit } from "@angular/core";
import { BackendService } from "src/app/services/backend.service";
import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from "src/app/dynamic/modal/modal.component";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  imgUrl: string;
  OrgId: number = 1001;
  constructor(
    private backendService: BackendService,
    public dialog: MatDialog
  ) {}

  baseImgUrl: string;
  SrcLogoImg: string;
  init() {
    this.baseImgUrl = this.backendService.getImgUrl(2);
    let arrOrgInfo = JSON.parse(localStorage.getItem("OrgInfo"));
    this.SrcLogoImg = this.baseImgUrl + "common/logo.png";
  }
  ngOnInit() {
    this.init();
  }
}
