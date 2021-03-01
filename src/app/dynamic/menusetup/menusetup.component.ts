import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { AuthService } from 'src/app/services/auth.service';
import { Http } from '@angular/http';
import { LookupService } from 'src/app/services/lookup.service';
import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from 'src/app/dynamic/modal/modal.component';
import { Router } from '@angular/router';
export interface arrFoodOptions {
  Ser: number;
  OptionName: string;
  Checked: boolean;
  Val: number;
  Txt: string;  
}
@Component({
  selector: 'app-menusetup',
  templateUrl: './menusetup.component.html',
  styleUrls: ['./menusetup.component.css']
})
export class MenusetupComponent implements OnInit {
  isScrBg: boolean;
  imgUrl: string;
  arrWkTimeTable: any[] = [];
  lat: number = -35.28346;
  lng: number = 149.12807;
  zoom: number = 14;
  panelOpenState: boolean;
  OrgId: number;
  OrgType: number;
  OrgName: string;
  OrgSlogan: string;
  OrgAddress: string;
  OrgEmail: string;
  OrgContact: string;
  OrgChainId: number;
  FullName: string;

  // ==== Menu ====================================
  MenuSer: number = 0;
  MenuId: number;
  MenuName: string;
  MenuDesc: string;
  MenuSubmit: string = "Submit";
  MenuImgId: number = 0;
  ChangeMenuImg: boolean = false;
  arrMenu: any[] = [];
  arrMenuParam: any[] = [];
  SelectedImageMenu: string = "Image Name";
  // ==== Kitchen Spacial =================================
  SelectedMenuKS: string;
  MenuSerKS: number = 0;
  RefMenuIdKS: number;
  SplMenuName: string;
  SplMenuDesc: string;
  SplMenuCost: number;
  SplMenuPrice: number;
  IsOfferExistKS: number = 0;
  AmtOfferKS: number = 0;
  MenuImgIdKS: number = 0;
  OpenOfferPanel: boolean = false;
  ChangeMenuImgKS: boolean = false;
  ManageMenuKS: string = "Manage Submenu";
  MenuSubmitKS: string = "Submit";
  arrKitchenSpl: any[] = [];
  arrFilteredKS: any[] = [];
  arrCountryOrigin: any[] = [];
  arrServiceCategory: any[] = [];
  arrDecision: any[] = [];
  IsAllergicContent: boolean= false;
  SelectedImageKS: string = "Image Name";
  // 
  SvcCat1: string;
  SvcCat2: string;
  SvcCat3: string;
  SvcCat4: string;
  IsCatDisabled: boolean = false;
  IsDrinkDisabled: boolean = false;
  // 
  SelectedMenuItem: string;
  ManageItem: string = "Manage Item";
  ItemSer: number = 0;
  RefMenuIdItem: number = 0;
  ItemId: number = 0;
  ItemName: string;
  ItemDesc: string;
  ItemOriginId: number;
  UnitCost: number;
  ItemPrice: number;
  IsOfferExist: number = 0;
  OffrExist: boolean = false;
  AmtOffer: number;  
  CategoryId: number = 0;  
  IsVegetarian: number = 0;
  IsFeatured: number = 0;
  IsDiscontinued: number = 0;
  
  IsAllergic: number = 0;  

  IsGlutonFree: number = 1;
  IsEggFree: number = 1;
  IsLactoseFree: number = 1;
  IsSugarFree: number = 1;
  IsSeafoodFree: number = 1;
  IsNutFree: number = 1;
  arrRadioBtnAllergic: any[] = [];
  ItemImgId: string;
  // -------- Upload Image ----------------
  BaseImgUrl: string;
  UploadSequence: number = 0;
  FileContents: string;
  FileTypeId: number;
  elm = null;
  SelectedImageItem: string = "Image Name";
  AltImg: string;
  ChangeItemImg: boolean = false;
  // --------------------------------------
  checkedAll = true;
  checked1 = false;  
  val_check1: string = "No";
  ItemSubmit: string = "Submit";
  arrItems: any[] = [];
  arrFilteredItemList: any[] = [];
  // ==============================================
  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private backendService: BackendService,
    private lookupService: LookupService,
    private http: Http,
    public router: Router,
  ) { }

  

  // update_checkbox_option(Ser, val) {
  //   let index = this.arrFoodOptions.findIndex((p) => p.Ser == Ser);   
  //   this.arrFoodOptions[index].Val = val == 0 ? 1 : 0;
  //   this.arrFoodOptions[index].Txt = val == 0 ? "Yes" : "No";
  //   if (Ser == 1) {
  //     this.IsOfferExist = this.arrFoodOptions[index].Val;
  //     this.OffrExist = val == 0 ? true : false; 
  //   }else if (Ser == 2) {
  //     this.IsGlutonFree = this.arrFoodOptions[index].Val;
  //   }else if (Ser == 3) {
  //     this.IsEggFree = this.arrFoodOptions[index].Val;
  //   }else if (Ser == 4) {
  //     this.IsVegetarian = this.arrFoodOptions[index].Val;
  //   }else if (Ser == 5) {
  //     this.IsAllergic = this.arrFoodOptions[index].Val;
  //   }else if (Ser == 6) {
  //     this.IsDiscontinued = this.arrFoodOptions[index].Val;
  //   }    
  // }
  form_reset(val){
    if (val == 1) {
      this.MenuSer = 0;
      this.MenuName = "";
      this.MenuDesc = "";
      this.MenuSubmit = "Submit";  
      this.ChangeMenuImg = false;
    }
    else if (val == 2) {
      this.arrDecision = this.lookupService.getArrDropdownList(4, 0);
      this.arrCountryOrigin = this.lookupService.getArrDropdownList(2, 0);
      this.arrServiceCategory = this.lookupService.getArrDropdownList(3, 0);
      this.ItemSer = 0;
      this.RefMenuIdItem = 0;
      this.ItemId = 0;
      this.ItemName = "";
      this.ItemDesc = "";
      this.ItemOriginId = 0;
      this.UnitCost = null;
      this.ItemPrice = null;
      this.CategoryId = 0;
      this.IsOfferExist = 0;
      this.IsVegetarian = 0;
      this.IsAllergic = 0;
      this.IsFeatured = 0;
      this.IsDiscontinued = 0;  
      this.AmtOffer = 0;
      this.set_checked_radio_btn(1, 1);
      this.set_checked_radio_btn(2, 1);
      this.set_checked_radio_btn(3, 1);
      this.set_checked_radio_btn(4, 1);
      this.set_checked_radio_btn(5, 1);
      this.set_checked_radio_btn(6, 1);
      this.ItemSubmit = "Submit";
      this.IsAllergicContent = true;
    }
  
  }
  // 
  change_img(img_id) {
    this.ChangeMenuImg = true;
    console.log("Change Image Id :", img_id);
    this.MenuImgId = img_id;
  }

  edit_menu(data, edit_img) {
    if (edit_img == 0) {
      this.MenuSer = data.Ser;
      this.MenuId = data.MenuId;
      this.MenuDesc = data.MenuDesc;
      this.MenuSubmit = "Edit";
    } else {
      this.MenuSer = data.Ser;
      this.MenuId = data.MenuId;
      this.MenuDesc = data.MenuDesc;
      this.MenuSubmit = "Edit";      
      this.ChangeMenuImg = true;      
      this.MenuImgId = data.ImgId;      
    }     
  }
  // 
  edit_menu_ks(data, edit_img) {
    if (edit_img == 0) {
      this.MenuSerKS = data.Ser;
      this.RefMenuIdKS = data.MenuId;
      this.RefMenuIdKS = data.SplMenuId;
      this.SplMenuName = data.SplMenuName;
      this.SplMenuDesc = data.SplMenuDesc;
      this.SplMenuCost = data.UnitCost;
      this.SplMenuPrice = data.Price;
      this.IsOfferExistKS = data.IsOfferExist;
      this.AmtOfferKS = data.AmtOffer;
      this.MenuSubmitKS = "Edit";
    } else {
      console.log("I am here");
      this.MenuSerKS = data.Ser;
      this.RefMenuIdKS = data.MenuId;
      this.RefMenuIdKS = data.SplMenuId;
      this.SplMenuName = data.SplMenuName;
      this.SplMenuDesc = data.SplMenuDesc;
      this.SplMenuCost = data.UnitCost;
      this.SplMenuPrice = data.Price;
      this.IsOfferExistKS = data.IsOfferExist;
      this.AmtOfferKS = data.AmtOffer;     
      this.ChangeMenuImgKS = true;      
      this.MenuImgIdKS = data.ImgId;
      this.MenuSubmitKS = "Edit";
      console.log("Change Image Id :", this.MenuImgIdKS);
      // this.view_kitchen_spl(data.MenuId);
    }    
  }
  // 
  

  // Ser,MenuId,MenuDesc,ImgIdOrgId
  create_update_menu(form_data) {
    let data = {
      Ser: form_data.MenuSer ? form_data.MenuSer : 0,      
      MenuId: form_data.MenuId,
      MenuDesc: form_data.MenuDesc,
      MenuImgId: form_data.MenuImgId,
      OrgId: this.OrgId,
      queryId: "4",
    };
    this.backendService.SubmitData(data).subscribe((resp) => {
      
      if(resp) {
        if (resp.CrudCode == "201") {
          this.MenuSubmit = "Submit";
          this.fetch_menu(this.OrgId);          
          let ImageId = "0-0-" + this.OrgId + resp.ImgId;
          this.UploadSequence == 1 ? this.upload_image(ImageId) : null;
          this.form_reset(1);
        } else if (resp.CrudCode == "202") {
          if (this.ChangeMenuImg == true) {
            let ImageId = "0-0-" + this.OrgId + this.MenuImgId;
            this.UploadSequence == 1 ? this.upload_image(ImageId) : null;
          }
          this.fetch_menu(this.OrgId); 
          this.form_reset(1);
        }
      }
    })
  }
  // 
  
  select_item_by_menu(MenuId, MenuName) {
    this.RefMenuIdItem = MenuId;
    for (let k = 0; k < this.arrMenu.length; k++) {
      this.arrMenu[k].MenuId == MenuId ? this.arrMenu[k].myClass = "active" : this.arrMenu[k].myClass = "not-active";
    }
    console.log("MenuId, Item :", MenuId);
    let DropdownCatId = MenuId == 1 ? "0"
      : MenuId > 1 && MenuId < 4 ? "1"
      : "2";
    this.arrDecision = this.lookupService.getArrDropdownList(4, 1);
    this.arrCountryOrigin = this.lookupService.getArrDropdownList(2, 2);
    this.arrServiceCategory = this.lookupService.getArrDropdownList(3, DropdownCatId);
    
    console.log("Drop Down Array :", this.arrCountryOrigin);
    
    if (MenuId == 0) {
      this.arrFilteredItemList = this.arrItems;
    }
    else {
      this.arrFilteredItemList = this.arrItems.filter((m) => m.MenuId == MenuId);
    }
    this.SelectedMenuItem = MenuName;
  }
  
  // 
  select_kitchen_spl(MenuId, MenuName) {
    for (let k = 0; k < this.arrMenu.length; k++) {
      this.arrMenu[k].MenuId == MenuId ? this.arrMenu[k].myClass = "active" : this.arrMenu[k].myClass = "not-active";
    }
    this.SelectedMenuKS = MenuName;
    this.RefMenuIdKS = MenuId;
    this.arrFilteredKS = [];
    if (MenuId == 0) {
      this.arrFilteredKS = this.arrKitchenSpl;
    }
    else {
      this.arrFilteredKS = this.arrKitchenSpl.filter((m) => m.MenuId == MenuId);
    }
  }
  toggle_offer_kitchen_spacial(val) {    
    this.IsOfferExistKS = val;
    this.OpenOfferPanel = val == 0 ? false : true;
  }


  isAllergicFood(val) {
    this.IsAllergic = val;
    this.IsAllergicContent = val == 1 ? true : false;
  }
  // 
// Ser,MenuId,ItemId,ItemName,ItemDesc,ItemOriginId,UnitCost,Price,CategoryId,IsOfferExist,AmtOffer,
// IsVegetarian,IsAllergic,IsDiscontinued,ImgId,OrgId
  
// IsAllergic,IsGlutonFree,IsEggFree,IsLactoseFree,IsSugarFree,IsSeafoodFree,IsNutFree
// Ser,ItemId,IsGlutonFree,IsEggFree,IsLactoseFree,IsSugarFree,IsSeafoodFree,IsNutFree,OrgId

 
set_allergic_param(OptType, OptVal) {
  if (OptType == 1) {
    this.IsGlutonFree = OptVal;
  }else if (OptType == 2) {
    this.IsEggFree = OptVal;
  }else if (OptType == 3) {
    this.IsLactoseFree = OptVal;
  }else if (OptType == 4) {
    this.IsSugarFree = OptVal;
  }else if (OptType == 5) {
    this.IsSeafoodFree = OptVal;
  }else if (OptType == 6) {
    this.IsNutFree = OptVal;
  }
}

  set_checked_radio_btn(RadioBtnId, CheckVal) {
    let index = this.arrRadioBtnAllergic.findIndex((p) => p.RadioBtnId == RadioBtnId);
    this.arrRadioBtnAllergic[index].YesBoolean = CheckVal == 1 ? true : false;
    this.arrRadioBtnAllergic[index].NoBoolean = CheckVal == 1 ? false : true;
  }
  // 
  edit_itemlist(data, edit_img) {
  console.log("Row Data Selected : ", data);
  this.arrDecision = this.lookupService.getArrDropdownList(4, 0);
  this.arrCountryOrigin = this.lookupService.getArrDropdownList(2, 0);
  this.arrServiceCategory = this.lookupService.getArrDropdownList(3, 0);
  this.ItemSer = data.Ser;
  this.RefMenuIdItem = data.MenuId;
  this.ItemId = data.ItemId;
  this.ItemName = data.ItemName;
  this.ItemDesc = data.ItemDesc;
  this.ItemOriginId = data.ItemOriginId;
  this.UnitCost = data.UnitCost;
  this.ItemPrice = data.Price;
  this.CategoryId = data.CategoryId;
  this.IsOfferExist = data.IsOfferExist;
  this.IsVegetarian = data.IsVegetarian;
  this.IsAllergic = data.IsAllergic;
  this.IsFeatured = data.IsFeatured;
  this.IsDiscontinued = data.IsDiscontinued;  
  this.AmtOffer = data.AmtOffer;
  this.IsGlutonFree = data.IsGlutonFree;
  this.set_checked_radio_btn(1, data.IsGlutonFree);
  this.IsEggFree = data.IsEggFree;
  this.set_checked_radio_btn(2, data.IsEggFree);
  this.IsLactoseFree = data.IsLactoseFree;
  this.set_checked_radio_btn(3, data.IsLactoseFree);
  this.IsSugarFree = data.IsSugarFree;
  this.set_checked_radio_btn(4, data.IsSugarFree);
  this.IsSeafoodFree = data.IsSeafoodFree;
  this.set_checked_radio_btn(5, data.IsSeafoodFree);
  this.IsNutFree = data.IsNutFree;
  this.set_checked_radio_btn(6, data.IsNutFree);
  this.ItemSubmit = "Edit";  
  this.ItemImgId = data.ImgId;
  this.IsAllergicContent = true;
  if (edit_img == 1) {
    this.ChangeItemImg = true;
    console.log("Hei.. I am here...");
  } else {
    this.ChangeItemImg = false;
  }
}
  
// 
ErrorMessage(TypeId, QueryId, QueryTxt): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      data: { PageId: 2, TypeId : TypeId, QueryId: QueryId , QueryTxt : QueryTxt },
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
}
// 
create_update_items(fData) {       
    let data = {
      // Item Table
      Ser: fData.ItemSer ? parseInt(fData.ItemSer) : 0,
      MenuId: fData.RefMenuIdItem ? fData.RefMenuIdItem
        : this.ErrorMessage(401, 401, 'No Menu Selected (Breakfast | Lunch | Dinner | Drinks)'), // ??
      ItemId: fData.ItemId ? parseInt(fData.ItemId) : 0,
      ItemName: fData.ItemName,
      ItemDesc: fData.ItemDesc,
      ItemOriginId: fData.ItemOriginId =='NaN' || fData.ItemOriginId == '' ? 1 : fData.ItemOriginId,
      UnitCost: parseFloat(fData.UnitCost),
      ItemPrice: parseFloat(fData.ItemPrice),
      CategoryId: this.CategoryId,
      IsOfferExist: this.IsOfferExist,
      AmtOffer: this.IsOfferExist == 0 ? 0 : parseFloat(fData.AmtOffer),
      IsVegetarian: this.IsVegetarian,
      IsAllergic: this.IsAllergic,
      IsFeatured: this.IsFeatured,
      IsDiscontinued: this.IsDiscontinued,
      IsGlutonFree: this.IsGlutonFree, // Allergic Table 
      IsEggFree: this.IsEggFree,
      IsLactoseFree: this.IsLactoseFree,
      IsSugarFree: this.IsSugarFree,
      IsSeafoodFree: this.IsSeafoodFree,
      IsNutFree: this.IsNutFree,
      OrgId: this.OrgId,
      queryId: "6",
    };      
    this.backendService.SubmitData(data).subscribe((resp) => {
      if (resp) {
        if (resp.CrudCode == "201") {
          this.ItemSubmit = "Submit";
          let ImageId = "2-0-" + this.OrgId + resp.ImgId;          
          this.UploadSequence == 3 ? this.upload_image(ImageId) : null;
          this.fetch_itemlist(this.OrgId, data.MenuId);
        }
        else if (resp.CrudCode == "202")
        {
          if (this.ChangeItemImg == true)
          {
            console.log("I have also come here...");
            let ImageId = "2-0-" + this.OrgId + this.ItemImgId;
            this.UploadSequence == 3 ? this.upload_image(ImageId) : null;
            this.fetch_itemlist(this.OrgId, data.MenuId);
          }
        }
      } else {
        console.log("Submenu - Error | Bad Request...");
      }
    });
  }
  // 
  fetch_menu_param(OrgId, ParentId) {
    let data = {
      OrgId: OrgId,
      ParentId: ParentId,
      queryId: "9",
    };
    this.backendService.SubmitData(data).subscribe((resp) => {
      if (resp) {
        this.arrMenuParam = resp;   
        console.log("Menu Name Array ", this.arrMenuParam);
      } else {
        console.log("Error | Bad Request...");
      }
    });
  }
  // 
  fetch_menu(OrgId) {
    let data = {
      OrgId: OrgId,
      queryId: "1",
    };
    this.backendService.SubmitData(data).subscribe((resp) => {
      if (resp) {
        this.arrMenu = [];
        for (let index = 0; index < resp.length; index++){
          let data = {
            Ser: resp[index].Ser,
            MenuId: resp[index].MenuId,
            MenuName: resp[index].MenuName,
            MenuDesc: resp[index].MenuDesc,
            ImgId: resp[index].ImgId,
            OrgId: resp[index].OrgId,
            myClass: "not-active",
          }
          this.arrMenu.push(data);
        }
        console.log("Arr Menu 1234: ", this.arrMenu);
      } else {
        console.log("Error | Bad Request...");
      }
    });
  }
  // 
  fetch_kitchen_spl_list(OrgId, FilteredMenuId) {
    let data = {
      OrgId: OrgId,
      queryId: "2",
    };
    this.backendService.SubmitData(data).subscribe((resp) => {
      if (resp) {
        this.arrKitchenSpl = resp;
        this.arrFilteredKS = [];
        if (FilteredMenuId == 0) {
          this.arrFilteredKS = this.arrKitchenSpl;
        }
        else {
          this.arrFilteredKS = this.arrKitchenSpl.filter((m) => m.MenuId == FilteredMenuId);
        }
        this.MenuSerKS = 0;
        this.MenuSubmitKS = "Submit";   
        this.ChangeMenuImg = false; 
        console.log("arr Kitchen Spl List: ", this.arrKitchenSpl);
      } else {
        console.log("Error | Bad Request...");
      }
    });
  }
  // 
  return_category_name(CategoryId, MenuId) {
    if (MenuId == 4) {
      let Cat = CategoryId == 1 ? "Beer" : CategoryId == 2 ? "Spirit" : CategoryId == 3 ? "Wine" : null;
      return Cat;
    } else {
      let Cat = CategoryId == 1 ? "Starter" : CategoryId == 2 ? "Main" : CategoryId == 3 ? "Dessert" : "NA";
      return Cat;
    }
  }
  // 
  fetch_itemlist(OrgId, FilteredMenuId) {
    let data = {
      OrgId: OrgId,
      queryId: "8",
    };
    this.backendService.SubmitData(data).subscribe((resp) => {
      this.arrItems = [];
      if (resp) {
        console.log("ITEM LIST 1001: ", resp);
        for (let i = 0; i < resp.length; i++){
          let DSet = {
            Ser: resp[i].Ser,
            MenuId: resp[i].MenuId,
            MenuName: resp[i].MenuId == 1 ? "Breakfast"
              : resp[i].MenuId == 2 ? "Lunch"
                : resp[i].MenuId == 3 ? "Dinner"
                  : resp[i].MenuId == 4 ? "Drinks"
                    : null,
            ItemId: resp[i].ItemId,
            ItemName: resp[i].ItemName,
            ItemDesc: resp[i].ItemDesc,
            ItemOriginId: resp[i].ItemOriginId,
            UnitCost: resp[i].UnitCost,
            Price: resp[i].Price,
            CategoryId: resp[i].CategoryId,
            CatTxt: this.return_category_name(resp[i].CategoryId, resp[i].MenuId),
            IsOfferExist: resp[i].IsOfferExist,
            OfferTxt: resp[i].IsOfferExist == 1 ? "Y" : "N",
            AmtOffer: resp[i].AmtOffer,
            IsVegetarian: resp[i].IsVegetarian,
            VegTxt: resp[i].IsVegetarian == 1 ? "Y" : "N",
            IsAllergic: resp[i].IsAllergic,
            AllergicTxt: resp[i].IsAllergic == 1 ? "Y" : "N",
            IsGlutonFree: resp[i].IsGlutonFree,
            GFTxt: resp[i].IsGlutonFree == 1 ? "Y" : "N",
            IsEggFree: resp[i].IsEggFree,
            EggTxt: resp[i].IsEggFree == 1 ? "Y" : "N",
            IsLactoseFree: resp[i].IsLactoseFree,
            LactoseTxt: resp[i].IsLactoseFree == 1 ? "Y" : "N",
            IsSugarFree: resp[i].IsSugarFree,
            SugarTxt: resp[i].IsSugarFree == 1 ? "Y" : "N",
            IsSeafoodFree: resp[i].IsSeafoodFree,
            SeafoodTxt: resp[i].IsSeafoodFree == 1 ? "Y" : "N",
            IsNutFree: resp[i].IsNutFree,
            NutTxt: resp[i].IsNutFree == 1 ? "Y" : "N",
            ImgId: resp[i].ImgId,
            IsFeatured: resp[i].IsFeatured,
            FeaturedTxt: resp[i].IsFeatured == 1 ? "Y" : "N",
            IsDiscontinued: resp[i].IsDiscontinued,
            DisconTxt: resp[i].IsDiscontinued == 1 ? "Y" : "N",
            OrgId: resp[i].OrgId
          }
          this.arrItems.push(DSet);  
          this.arrFilteredItemList = this.arrItems;
        }
        this.arrFilteredItemList = [];
        if (FilteredMenuId == 0) {
          this.arrFilteredItemList = this.arrItems;
          console.log("I am here..: ", this.arrItems);
        } else {
          this.arrFilteredItemList = this.arrItems.filter((m) => m.MenuId == FilteredMenuId);
        }
        this.MenuSerKS = 0;
        this.MenuSubmitKS = "Submit";   
        this.ChangeMenuImg = false; 
      } else {
        console.log("Error | Bad Request...");
      }
    });    
  }

  view_items(MenuId) {
    this.arrFilteredItemList = [];
    this.arrFilteredItemList = this.arrItems.filter((m) => m.MenuId == MenuId);    
  }

  edit_kitchen_spl(data) {
    this.ManageItem = "Manage " + data.SplMenuName;
    this.MenuSerKS = data.Ser;
    this.RefMenuIdKS = data.MenuId;
    this.RefMenuIdKS = data.SplMenuId;
    this.SplMenuName = data.SplMenuName;
    this.SplMenuDesc = data.SplMenuDesc;
    this.SplMenuCost = data.UnitCost;
    this.SplMenuPrice = data.Price;
    this.IsOfferExistKS = data.IsOfferExist;
    this.AmtOfferKS = data.AmtOffer;
    this.MenuSubmitKS = "Edit";
  }
 
  
  set_category_by_menu(val) {
    this.CategoryId = val;
    console.log("Category Service:", val);
  }
  // ======================================================
  upload_image(ImgId) {
    let formData = new FormData();
    let Url = this.backendService.getImgUrl(1);    
    let imgRefInfo = ImgId + this.FileContents;
    formData.append("file", this.elm.files[0], imgRefInfo);
    console.log("File Name : ", this.elm.files[0]);
    this.http.post(Url + "image_upload_script.php", formData).subscribe((res) => {
      console.log(res);
    });
  }  
  // =======================================================
  onFileSelected(event, sequence) {
    this.UploadSequence = sequence;
    this.elm = event.target;
    if (this.elm.files.length > 0) {
      if (this.elm.files[0].type === "image/jpeg") {
        this.FileContents = ".jpg";
        sequence == 1 ? this.SelectedImageMenu = this.elm.files[0].name
          : sequence == 2 ? this.SelectedImageKS = this.elm.files[0].name
            : sequence == 3 ? this.SelectedImageItem = this.elm.files[0].name
              : null;
        // this.SelectedImage = this.elm.files[0].name;
        this.FileTypeId = 1;
      } else if (this.elm.files[0].type === "image/png") {
        this.FileContents = ".png";
        sequence == 1 ? this.SelectedImageMenu = this.elm.files[0].name
          : sequence == 2 ? this.SelectedImageKS = this.elm.files[0].name
            : sequence == 3 ? this.SelectedImageItem = this.elm.files[0].name
              : null;
        this.FileTypeId = 2;
      }       
    }
    console.log("File Type :", this.FileContents);
  }
  // =======================================================   
  open_page(page_id) {
    page_id == 1 ? this.router.navigate(["/reservation"]) 
      : page_id == 2 ? this.router.navigate(["/menu"])
      : page_id == 3 ? this.router.navigate(["/takeaway"])
      : null;   
  }
  ngOnInit() {
    let Token = JSON.parse(localStorage.getItem("token"));
    console.log("TOKEN 4:",Token);
    this.OrgId = parseInt(Token.OrgId);//this.authService.fetch_signin_info(1);
    this.OrgName = Token.OrgName;//this.authService.fetch_signin_info(3);
    this.imgUrl = this.backendService.getImgUrl(2);
    this.AltImg = this.imgUrl + "alt.png";
    this.fetch_menu(this.OrgId);
    this.arrRadioBtnAllergic = this.lookupService.getArr_RadioBtnCon_Allergic();
    this.fetch_itemlist(this.OrgId, 0);
    this.fetch_menu_param(this.OrgId, 0);
    this.arrDecision = this.lookupService.getArrDropdownList(1, 1);

  }
  arrFoodOptions: arrFoodOptions[] = [
    { Ser: 1, OptionName: "Offer Exist", Checked: false, Val: 0 , Txt:"No"},
    { Ser: 2, OptionName: "Gluton Exist", Checked: false, Val: 0, Txt:"No" },
    { Ser: 3, OptionName: "Halal Option", Checked: false, Val: 0, Txt:"No" },
    { Ser: 4, OptionName: "Vege Option", Checked: false, Val: 0, Txt:"No" },
    { Ser: 5, OptionName: "Allergic", Checked: false, Val: 0, Txt:"No" },
    { Ser: 6, OptionName: "Discontinued", Checked: false, Val: 0, Txt: "No" },    
  ];  


 
}

// item_details.Ser, 
// item_details., 
// item_details.ItemId, 
// item_details.ItemName, 
// item_details.ItemDesc, 
// item_details.ItemOriginId, 
// item_details.UnitCost, 
// item_details.Price, 
// item_details.CategoryId, 
// item_details.IsOfferExist, 
// item_details.AmtOffer, 
// item_details.IsVegetarian, 
// item_details.IsAllergic, 
// item_details.IsDiscontinued, 

// item_details.ImgId ,
// item_details.OrgId 

// let resp_data = {
// Ser: resp.Ser,
// MenuId: resp.MenuId,
// ItemId: resp.ItemId,
// ItemName: resp.ItemName,
// ItemDesc: resp.ItemDesc,
// ItemOriginId: resp.ItemOriginId,
// UnitCost: resp.UnitCost,
// Price: resp.Price,
// CategoryId: resp.CategoryId,
// IsOfferExist: resp.IsOfferExist,
// AmtOffer: resp.AmtOffer,
// IsVegetarian: resp.IsVegetarian,
// IsVegetarian: resp.IsVegetarian,
// IsAllergic: resp.IsAllergic,
// IsGlutonFree: resp.IsGlutonFree,
// GFTxt: resp.IsGlutonFree == 1 "Y" ? "N",
// IsEggFree: resp.IsEggFree,
// EggTxt: resp.IsEggFree == 1 "Y" ? "N",
// IsLactoseFree: resp.IsLactoseFree,
// LactoseTxt: resp.IsLactoseFree == 1 "Y" ? "N",
// IsSugarFree: resp.IsSugarFree,
// SugarTxt: resp.IsSugarFree == 1 "Y" ? "N",
// IsSeafoodFree: resp.IsSeafoodFree,
// SeafoodTxt: resp.IsSeafoodFree == 1 "Y" ? "N",
// IsNutFree: resp.IsNutFree,
// NutTxt: resp.IsNutFree == 1 "Y" ? "N",
// ImgId: resp.ImgId ,
// IsDiscontinued: resp.IsDiscontinued,
// OrgId: resp.OrgId,            
// };
// this.arrItems.push(resp_data); 
// let index = this.arrItems.findIndex((p) => p.Ser == resp.Ser);
// this.arrItems[index].MenuId = data.MenuId;
// this.arrItems[index].ItemId = resp.ItemId;
// this.arrItems[index].ItemName = data.ItemName;
// this.arrItems[index].ItemDesc = data.ItemDesc;
// this.arrItems[index].ItemOriginId = data.ItemOriginId;
// this.arrItems[index].UnitCost = data.UnitCost;
// this.arrItems[index].Price = data.ItemPrice;
// this.arrItems[index].CategoryId = data.CategoryId;
// this.arrItems[index].IsOfferExist = data.IsOfferExist;
// this.arrItems[index].AmtOffer = data.AmtOffer;
// this.arrItems[index].IsVegetarian = data.IsVegetarian;
// this.arrItems[index].IsAllergic = data.IsAllergic;
// this.arrItems[index].IsDiscontinued = data.IsDiscontinued;