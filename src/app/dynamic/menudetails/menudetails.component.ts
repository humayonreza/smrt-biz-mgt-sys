import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BackendService } from 'src/app/services/backend.service';
import { LookupService } from 'src/app/services/lookup.service';

@Component({
  selector: 'app-menudetails',
  templateUrl: './menudetails.component.html',
  styleUrls: ['./menudetails.component.css']
})
export class MenudetailsComponent implements OnInit {
  HeaderItemList: string;
  menuName: string;
  menuId: number = 0;
  imgUrl: string;
  iconUrl: string;
  OrgId: number = 1001;
  arrMenu: any[] = [];
  arrSubMenu: any[] = [];
  arrItemInfo: any[] = [];
  arrFilteredList: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private backendService: BackendService,
    public lookupService : LookupService,  
  ) { }

  // list_by_cat(filterId) {
    
  //   this.arrFilteredList = [];
  //   this.arrFilteredList  = this.arrItemInfo.filter(m => m.ServiceTypeId == filterId);    
  // }

  fetchArrSubMenu(OrgId, MenuId) {
    let data = {
      OrgId: OrgId,
      queryId: "2",
    }     
    this.lookupService.BackendService(data).subscribe((resp) => {
      
      if (resp) {
        let data = resp.filter(m => parseInt(m.MenuId) == MenuId);
        this.arrSubMenu = data;
        console.log("Sub Menu 1001 : ", this.arrSubMenu);
      }
    }); 
  }

  fetchArrItems(OrgId, MenuId) {
    let data = {
      OrgId: OrgId,
      MenuId: MenuId,
      queryId: "7",
    }     
    this.lookupService.BackendService(data).subscribe((resp) => {
      console.log("Item Info 1002 : ", resp);
      if (resp) {
        this.arrItemInfo = resp;   
        this.arrFilteredList = resp;
      }
    }); 
  }

  view_all() {
    this.arrFilteredList = [];
    this.arrFilteredList = this.arrItemInfo;
  }

  get_item_details(SubmenuId, SubmenuName) {
    console.log(SubmenuId + " ," + SubmenuName);
    this.menuName = SubmenuName;
    this.arrFilteredList = [];
    this.arrFilteredList = this.arrItemInfo;
    this.arrFilteredList  = this.arrItemInfo.filter(m => m.SubmenuId == SubmenuId);    
  }


  ngOnInit() {
    this.imgUrl = this.backendService.getImgUrl(2);
    this.route.queryParams
      .subscribe((params) => {
        console.log("Query Param : ", params);
        this.menuName = params.menu;
        this.menuId = params.id;
        this.fetchArrSubMenu(this.OrgId, this.menuId);
        this.fetchArrItems(this.OrgId, this.menuId);
        this.HeaderItemList = this.menuName + " List";
      });
    //   let iconFolder = this.menuId == "1" ? "la_carte/"
    //   : this.menuId == "2" ? "breakfast/"
    //   : this.menuId == "3" ? "dinner/"
    //   : this.menuId == "4" ? "dinner/"
    //   : this.menuId == "5" ? "dinner/"
    //   : this.menuId == "6" ? "fastfood/"
    //   : this.menuId == "7" ? "wines/"
    //   : this.menuId == "8" ? "icecream/"
    //   : null;
    // this.iconUrl = this.imgUrl + "icons/menu/" + iconFolder;
    
  }
}
