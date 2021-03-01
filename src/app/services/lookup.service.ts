import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

export interface arrWeeklyTimeTable {
  Ser: string;
  value: string;
  viewValue: string;
  Lunch: string;
  Dinner: string;
}

export interface arrImages {
  Ser: string;
  PageId: string;
  ImagePath: string;
  Type: string;
  Caption: string;
  Txt: string;
  IsActive: string;
}

export interface arrServicedetails {
  Ser: string;
  ServiceId: string;
  Caption: string;
  Txt: string;
  ImgId: string;
  OrgId: string;
}

export interface arrLoouupDropdown {
  Ser: string;
  DropdownId: string;
  DropdownName: string;
  CategoryId: string;
  OptVal: string;
  OptTxt: string;
}

export interface arrServiceName {
  Ser: string;
  ServiceId: string;
  ServiceName: string;
  ImgId: string;
  OrgId: string;
}

export interface arrToggleBtn {
  Ser: string;
  PageId: string;
  value: string;
  Caption: string;
}

export interface arrFoodOption {
  Ser: string;
  value: string;
  Caption: string;
  IconClass: string;
  BtnClass: string;
}

export interface arrAllergicRadioCon {
  Ser: string;
  Caption: string;
  RadioBtnId: string;
  YesBoolean: string;
  NoBoolean: string;
}

export interface arrCategoryRadioCon {
  Ser: string;
  Caption: string;
  CategoryId: string;
  MenuId: string;
}
export interface arrContentOption {
  Ser: string;
  Caption: string;
  ContentId: string;
  ObjTypeId: string;
}

@Injectable({
  providedIn: "root",
})
export class LookupService {
  // private baseUrl = "assets/backendDEWS/scripts/";
  // private baseUrl = "http://localhost:8080/backendRESTAURANT/scripts/";
  // ===========================================================================
  private imgUrl = "http://localhost:8080/backendRESTAURANT/images/";
  private baseUrl = "http://localhost:8080/backendRESTAURANT/scripts/";
  // ===========================================================================
  // private baseUrl = "https://app-dev.online/backendRESTAURANT/scripts/";
  // private imgUrl = "https://app-dev.online/backendRESTAURANT/images/";

  constructor(private http: Http) {}
  arrMenu: any[] = [];
  arrSubMenu: any[] = [];
  arrItemDetails: any[] = [];
  arrImageInfo: any[] = [];
  arrServiceDetails: any[] = [];
  // OrgDesc: string;
  BackendService(data) {
    return this.http
      .post(this.baseUrl + "backend_service.php", JSON.stringify(data))
      .map((response) => {
        let result = response.json();
        if (result && result != "401") {
          return result;
        }
        return "401";
      });
  }
  arrOrgInfo: any[] = [];
  FetchOrgInfo(data) {
    return this.http
      .post(this.baseUrl + "backend_service.php", JSON.stringify(data))
      .map((response) => {
        let result = response.json();
        if (result && result != "401") {
          this.arrOrgInfo = result;
          localStorage.setItem("OrgInfo", JSON.stringify(result));
          return "201";
        }
        return "401";
      });
  }

  return_org_info() {
    return this.arrOrgInfo;
  }
  //
  arrOrgMiscInfo: any[] = [];
  FetchOrgMiscInfo(data) {
    return this.http
      .post(this.baseUrl + "backend_service.php", JSON.stringify(data))
      .map((response) => {
        let result = response.json();
        if (result && result != "401") {
          this.arrOrgMiscInfo = result;
          console.log("Look up :", this.arrOrgMiscInfo);
          // localStorage.setItem("OrgInfo", this.arrOrgInfo);
          return "201";
        }
        return "401";
      });
  }
  return_org_misc_info(filterId) {
    let data = this.arrOrgMiscInfo.filter((m) => m.ObjTypeId == filterId);
    return data;
  }

  return_service_details_by_id(ObjectId, Val) {
    this.arrServiceDetails = [];
    let data = this.arrOrgMiscInfo.filter(
      (m) => m.ObjTypeId == ObjectId && m.ParentId == Val
    );
    for (let i = 0; i < data.length; i++) {
      let arrFiltered = {
        ImgPath: this.imgUrl + "services/" + data[i].ImgId + ".png",
        Caption: data[i].TxtMain,
        // Txt: data[i].Txt,
      };
      this.arrServiceDetails.push(arrFiltered);
    }
    return this.arrServiceDetails;
  }
  remove_back_slash(url) {
    if (url.charAt(url.length - 1) == "/") {
      return url.substring(0, url.length - 1);
    } else {
      return url;
    }
  }
  init_webaddress(url) {
    let x = url.split("//");
    if (x[0] == "http:" || x[0] == "https:") {
      let n = x[1].split("ww.");
      if (n[0] == "w") {
        return this.remove_back_slash(n[1]);
      } else {
        return this.remove_back_slash(x[1]);
      }
    } else {
      console.log(0, x[0]);
      let n = x[0].split("ww.");
      if (n[0] == "w") {
        return this.remove_back_slash(n[1]);
      } else {
        return this.remove_back_slash(x[0]);
      }
    }
  }
  //
  //   export interface arrContentOption {
  //   Ser: string;
  //   Caption: string;
  //   ContentId: string;
  // }
  arrContentOption: arrContentOption[] = [
    { Ser: "1", Caption: "Banner Image", ContentId: "1", ObjTypeId: "7" },
    { Ser: "2", Caption: "Slide Show", ContentId: "2", ObjTypeId: "8" },
    { Ser: "3", Caption: "Service", ContentId: "3", ObjTypeId: "6" },
    { Ser: "4", Caption: "Review", ContentId: "4", ObjTypeId: "9" },
  ];
  get_arrContentOption() {
    return this.arrContentOption;
  }

  //
  arrAllergicRadioCon: arrAllergicRadioCon[] = [
    {
      Ser: "1",
      Caption: "Gluton Free",
      RadioBtnId: "1",
      YesBoolean: "1",
      NoBoolean: "0",
    },
    {
      Ser: "2",
      Caption: "Egg Free",
      RadioBtnId: "2",
      YesBoolean: "1",
      NoBoolean: "0",
    },
    {
      Ser: "3",
      Caption: "Lactose Free",
      RadioBtnId: "3",
      YesBoolean: "1",
      NoBoolean: "0",
    },
    {
      Ser: "4",
      Caption: "Suger Free",
      RadioBtnId: "4",
      YesBoolean: "1",
      NoBoolean: "0",
    },
    {
      Ser: "5",
      Caption: "Seafood Free",
      RadioBtnId: "5",
      YesBoolean: "1",
      NoBoolean: "0",
    },
    {
      Ser: "6",
      Caption: "Nut Free",
      RadioBtnId: "6",
      YesBoolean: "1",
      NoBoolean: "0",
    },
  ];
  getArr_RadioBtnCon_Allergic() {
    return this.arrAllergicRadioCon;
  }
  //
  arrCategoryRadioCon: arrCategoryRadioCon[] = [
    { Ser: "1", Caption: "Starter", CategoryId: "1", MenuId: "2" },
    { Ser: "2", Caption: "Main", CategoryId: "2", MenuId: "2" },
    { Ser: "3", Caption: "Dessert", CategoryId: "3", MenuId: "2" },
    { Ser: "4", Caption: "Spacial", CategoryId: "0", MenuId: "2" },
    { Ser: "5", Caption: "Beer", CategoryId: "1", MenuId: "4" },
    { Ser: "6", Caption: "Spirit", CategoryId: "2", MenuId: "4" },
    { Ser: "7", Caption: "Wine", CategoryId: "3", MenuId: "4" },
    { Ser: "8", Caption: "Non Alc", CategoryId: "4", MenuId: "4" },
    { Ser: "9", Caption: "Spacial", CategoryId: "0", MenuId: "4" },
  ];
  getArr_RadioBtnCon_Category(MenuId) {
    let id = MenuId == "2" || MenuId == "3" ? "2" : MenuId;
    let data = this.arrCategoryRadioCon.filter((m) => m.MenuId == id);
    return data;
  }
  //
  arrFoodOption: arrFoodOption[] = [
    {
      Ser: "1",
      value: "1",
      Caption: "Food",
      IconClass: "fa fa-cutlery",
      BtnClass: "not-active-btn",
    },
    {
      Ser: "2",
      value: "2",
      Caption: "Drinks",
      IconClass: "fa fa-glass",
      BtnClass: "not-active-btn",
    },
    {
      Ser: "3",
      value: "3",
      Caption: "Veg | Vegan",
      IconClass: "fa fa-leaf",
      BtnClass: "not-active-btn",
    },
  ];
  getArr_FoodOption() {
    return this.arrFoodOption;
  }
  //
  arrWeeklyTimeTable: arrWeeklyTimeTable[] = [
    {
      Ser: "1",
      value: "0",
      viewValue: "Sun",
      Lunch: "1230 - 1430",
      Dinner: "1700 - 2000",
    },
    {
      Ser: "2",
      value: "1",
      viewValue: "Mon",
      Lunch: "1230 - 1430",
      Dinner: "1700 - 2100",
    },
    {
      Ser: "3",
      value: "2",
      viewValue: "Tue",
      Lunch: "1230 - 1430",
      Dinner: "1700 - 2020",
    },
    {
      Ser: "4",
      value: "3",
      viewValue: "Wed",
      Lunch: "1230 - 1430",
      Dinner: "1700 - 2130",
    },
    {
      Ser: "5",
      value: "4",
      viewValue: "Thr",
      Lunch: "1230 - 1430",
      Dinner: "1700 - 2000",
    },
    {
      Ser: "6",
      value: "5",
      viewValue: "Fri",
      Lunch: "1230 - 1430",
      Dinner: "1800 - 2200",
    },
    {
      Ser: "6",
      value: "6",
      viewValue: "Sat",
      Lunch: "1230 - 1430",
      Dinner: "1800 - 2200",
    },
  ];
  arrLookupDropdown: arrLoouupDropdown[] = [
    {
      Ser: "1",
      DropdownId: "2",
      DropdownName: "CountryOrigin",
      CategoryId: "2",
      OptVal: "0",
      OptTxt: "Select from list",
    },
    {
      Ser: "2",
      DropdownId: "2",
      DropdownName: "CountryOrigin",
      CategoryId: "2",
      OptVal: "1",
      OptTxt: "Local",
    },
    {
      Ser: "3",
      DropdownId: "2",
      DropdownName: "CountryOrigin",
      CategoryId: "2",
      OptVal: "2",
      OptTxt: "Chinese",
    },

    {
      Ser: "4",
      DropdownId: "2",
      DropdownName: "CountryOrigin",
      CategoryId: "2",
      OptVal: "3",
      OptTxt: "Indian",
    },
    {
      Ser: "5",
      DropdownId: "2",
      DropdownName: "CountryOrigin",
      CategoryId: "2",
      OptVal: "4",
      OptTxt: "Mexican",
    },

    {
      Ser: "6",
      DropdownId: "2",
      DropdownName: "CountryOrigin",
      CategoryId: "2",
      OptVal: "5",
      OptTxt: "Labanese",
    },

    {
      Ser: "7",
      DropdownId: "3",
      DropdownName: "ItemCategory",
      CategoryId: "1",
      OptVal: "0",
      OptTxt: "Select from list",
    },
    {
      Ser: "8",
      DropdownId: "3",
      DropdownName: "ItemCategory",
      CategoryId: "1",
      OptVal: "1",
      OptTxt: "Starter",
    },
    {
      Ser: "9",
      DropdownId: "3",
      DropdownName: "ItemCategory",
      CategoryId: "1",
      OptVal: "2",
      OptTxt: "Main",
    },

    {
      Ser: "10",
      DropdownId: "3",
      DropdownName: "ItemCategory",
      CategoryId: "1",
      OptVal: "3",
      OptTxt: "Dessert",
    },

    {
      Ser: "11",
      DropdownId: "3",
      DropdownName: "ItemCategory",
      CategoryId: "2",
      OptVal: "0",
      OptTxt: "Select from list",
    },

    {
      Ser: "12",
      DropdownId: "3",
      DropdownName: "ItemCategory",
      CategoryId: "2",
      OptVal: "1",
      OptTxt: "Beer",
    },
    {
      Ser: "13",
      DropdownId: "3",
      DropdownName: "ItemCategory",
      CategoryId: "2",
      OptVal: "2",
      OptTxt: "Spirit",
    },

    {
      Ser: "14",
      DropdownId: "3",
      DropdownName: "ItemCategory",
      CategoryId: "2",
      OptVal: "3",
      OptTxt: "Wine",
    },
    {
      Ser: "15",
      DropdownId: "3",
      DropdownName: "ItemCategory",
      CategoryId: "2",
      OptVal: "4",
      OptTxt: "Non Alcoholic",
    },
    {
      Ser: "16",
      DropdownId: "4",
      DropdownName: "ItemCategory",
      CategoryId: "1",
      OptVal: "1",
      OptTxt: "Yes",
    },
    {
      Ser: "17",
      DropdownId: "4",
      DropdownName: "ItemCategory",
      CategoryId: "1",
      OptVal: "0",
      OptTxt: "No",
    },
  ];
  //
  getArrDropdownList(DropdownId, CategoryId) {
    if (CategoryId == 0) {
      let data = this.arrLookupDropdown.filter(
        (m) => m.DropdownId == DropdownId
      );
      return data;
    } else {
      let data = this.arrLookupDropdown.filter(
        (m) => m.DropdownId == DropdownId && m.CategoryId == CategoryId
      );
      return data;
    }
  }
  //
  arrServiceName: arrServiceName[] = [
    {
      Ser: "1",
      ServiceId: "1",
      ServiceName: "Casual Walkin",
      ImgId: "1001",
      OrgId: "1001",
    },
    {
      Ser: "2",
      ServiceId: "2",
      ServiceName: "Corporate Timeout",
      ImgId: "1002",
      OrgId: "1001",
    },
    {
      Ser: "3",
      ServiceId: "3",
      ServiceName: "Party & Events",
      ImgId: "1003",
      OrgId: "1001",
    },
    {
      Ser: "4",
      ServiceId: "4",
      ServiceName: "Catering Service",
      ImgId: "1004",
      OrgId: "1001",
    },
  ];

  getArrServiceName() {
    return this.arrServiceName;
  }
  //
  arrServicedetails: arrServicedetails[] = [
    {
      Ser: "1",
      ServiceId: "1",
      Caption: "Open on confirmation",
      Txt: "Its mean casual. Relax to enjoy you time your meal and company",
      ImgId: "10001",
      OrgId: "1001",
    },
    {
      Ser: "2",
      ServiceId: "1",
      Caption: "Casual Walkin",
      Txt: "Casual Walkin",
      ImgId: "10002",
      OrgId: "1001",
    },
    {
      Ser: "3",
      ServiceId: "1",
      Caption: "Casual Walkin",
      Txt: "Casual Walkin",
      ImgId: "10003",
      OrgId: "1001",
    },
    {
      Ser: "4",
      ServiceId: "2",
      Caption: "Corporate Timeout",
      Txt: "Corporate Timeout",
      ImgId: "10004",
      OrgId: "1001",
    },
    {
      Ser: "5",
      ServiceId: "2",
      Caption: "Corporate Timeout",
      Txt: "Corporate Timeout",
      ImgId: "10005",
      OrgId: "1001",
    },
    {
      Ser: "6",
      ServiceId: "2",
      Caption: "Corporate Timeout",
      Txt: "Corporate Timeout",
      ImgId: "10006",
      OrgId: "1001",
    },
    {
      Ser: "7",
      ServiceId: "2",
      Caption: "Corporate Timeout",
      Txt: "Corporate Timeout",
      ImgId: "10007",
      OrgId: "1001",
    },
    {
      Ser: "8",
      ServiceId: "3",
      Caption: "Party & Events",
      Txt: "Party & Events",
      ImgId: "10008",
      OrgId: "1001",
    },
    {
      Ser: "9",
      ServiceId: "3",
      Caption: "Party & Events",
      Txt: "Party & Events",
      ImgId: "10009",
      OrgId: "1001",
    },
    {
      Ser: "10",
      ServiceId: "4",
      Caption: "Catering Service",
      Txt: "Catering Service",
      ImgId: "10010",
      OrgId: "1001",
    },
    {
      Ser: "11",
      ServiceId: "4",
      Caption: "Catering Service",
      Txt: "Catering Service",
      ImgId: "10011",
      OrgId: "1001",
    },
    {
      Ser: "12",
      ServiceId: "4",
      Caption: "Catering Service",
      Txt: "Catering Service",
      ImgId: "10012",
      OrgId: "1001",
    },
  ];
  //

  //
  getWkTimeTables() {
    return this.arrWeeklyTimeTable;
  }
  //
  arrImages: arrImages[] = [
    {
      Ser: "1",
      PageId: "1",
      Type: "slider",
      ImagePath: "001.jpg",
      Caption: "Flower like florance",
      Txt: "Flower like florance",
      IsActive: "1",
    },
    {
      Ser: "2",
      PageId: "1",
      Type: "slider",
      ImagePath: "002.jpg",
      Caption: "Florence from floride",
      Txt: "Flower like florance",
      IsActive: "1",
    },
    {
      Ser: "3",
      PageId: "1",
      Type: "slider",
      ImagePath: "003.jpg",
      Caption: "From florida with love",
      Txt: "Flower like florance",
      IsActive: "1",
    },
    {
      Ser: "4",
      PageId: "1",
      Type: "slider",
      ImagePath: "004.jpg",
      Caption: "Flower like florance",
      Txt: "Flower like florance",
      IsActive: "1",
    },
    {
      Ser: "5",
      PageId: "1",
      Type: "slider",
      ImagePath: "005.jpg",
      Caption: "Florence from floride",
      Txt: "Flower like florance",
      IsActive: "1",
    },
    {
      Ser: "6",
      PageId: "1",
      Type: "slider",
      ImagePath: "006.jpg",
      Caption: "From florida with love",
      Txt: "Flower like florance",
      IsActive: "1",
    },

    {
      Ser: "7",
      PageId: "1",
      Type: "service",
      ImagePath: "001.jpg",
      Caption: "From florida with love",
      Txt: "Flower like florance",
      IsActive: "1",
    },
    {
      Ser: "8",
      PageId: "1",
      Type: "service",
      ImagePath: "002.jpg",
      Caption: "Flower like florance",
      Txt: "Flower like florance",
      IsActive: "1",
    },
    {
      Ser: "9",
      PageId: "1",
      Type: "service",
      ImagePath: "003.jpg",
      Caption: "Florence from floride",
      Txt: "Flower like florance",
      IsActive: "1",
    },
    {
      Ser: "10",
      PageId: "1",
      Type: "service",
      ImagePath: "004.jpg",
      Caption: "From florida with love",
      Txt: "Flower like florance",
      IsActive: "1",
    },

    {
      Ser: "11",
      PageId: "1",
      Type: "review",
      ImagePath: "na",
      Caption: "Only Writing some thing some time not enough. It would go far",
      Txt: "Flower like florance",
      IsActive: "1",
    },
    {
      Ser: "12",
      PageId: "1",
      Type: "review",
      ImagePath: "na",
      Caption: "Some time small care makes it bigger",
      Txt: "Flower like florance",
      IsActive: "1",
    },
    {
      Ser: "13",
      PageId: "1",
      Type: "review",
      ImagePath: "na",
      Caption: "The needle is more required then tiger skin",
      Txt: "Flower like florance",
      IsActive: "1",
    },
  ];

  getImageInfo(PageId, ImgType, ImgFolder) {
    this.arrImageInfo = [];
    let data = this.arrImages.filter(
      (m) => m.PageId == PageId && m.Type == ImgType
    );
    for (let i = 0; i < data.length; i++) {
      let Filteredrray = {
        ImgPath: ImgFolder == "na" ? "na" : ImgFolder + data[i].ImagePath,
        Caption: data[i].Caption,
        Txt: data[i].Txt,
      };
      this.arrImageInfo.push(Filteredrray);
    }
    return this.arrImageInfo;
  }
}
