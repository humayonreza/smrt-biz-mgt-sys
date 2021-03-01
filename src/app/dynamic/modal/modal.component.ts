import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { BackendService } from "src/app/services/backend.service";
import { LookupService } from 'src/app/services/lookup.service';

export interface DialogData {
  PageId: number,
  TypeId: number,
  QueryId: number,
  QueryTxt: string  
}
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  arrServiceDetails: any[] = [];
  PageId: string;
  QueryId: string;
  QueryTxt: string;
  ErrCat: string;
  baseImgUrl: string;
  lat: number = -35.28346;
  lng: number = 149.12807;
  zoom: number = 14;
  OrgName: string = "Moments";
  OrgAddress: string = "23 Monument Street, Wooden, Canberra";
  Phone: string = "02-0450 829211";
  constructor(
    public backendService: BackendService,
    public lookupService : LookupService,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  slideConfigServiceDetailsImg = {
    "slidesToShow": 1,//screen.width < 500 ? 1 : 4,  
    "slidesToScroll": 1,  
    "dots": false,  
    "infinite": true,
    "autoplay":true,
  }

  ngOnInit() {
    console.log("Feed Data : ", this.data.QueryId);
    this.baseImgUrl = this.backendService.getImgUrl(2);
    this.ErrCat = this.data.QueryId == 401 ? "Error : Incomplete Dataentry" : null;
    this.arrServiceDetails = this.lookupService.return_service_details_by_id(6,this.data.QueryId);
    console.log("Feed Service Details : ", this.arrServiceDetails);
  }

}
