import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MapthemeService {
  maptheme: any[];
  mapMode() {
    return (this.maptheme = [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#212121"
          }
        ]
      },
      {
        elementType: "labels",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575"
          }
        ]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#212121"
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
          {
            color: "#757575"
          }
        ]
      },
      {
        featureType: "administrative.country",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#bdbdbd"
          }
        ]
      },
      {
        featureType: "administrative.neighborhood",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575"
          }
        ]
      },
      {
        featureType: "poi.business",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#181818"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1b1b1b"
          }
        ]
      },
      {
        featureType: "road",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#2c2c2c"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#8a8a8a"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#373737"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#3c3c3c"
          }
        ]
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [
          {
            color: "#4e4e4e"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161"
          }
        ]
      },
      {
        featureType: "transit",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#3d3d3d"
          }
        ]
      }
    ]);
  }
}


// import { Component, OnInit } from '@angular/core';
// import { BackendService } from 'src/app/services/backend.service';
// import { AuthService } from 'src/app/services/auth.service';
// import { Http } from '@angular/http';
// import { LookupService } from 'src/app/services/lookup.service';

// export interface arrFoodOptions {
//   Ser: number;
//   OptionName: string;
//   Checked: boolean;
//   Val: number;
//   Txt: string;  
// }
// @Component({
//   selector: 'app-menusetup',
//   templateUrl: './menusetup.component.html',
//   styleUrls: ['./menusetup.component.css']
// })
// export class MenusetupComponent implements OnInit {
//   isScrBg: boolean;
//   imgUrl: string;
//   arrWkTimeTable: any[] = [];
//   lat: number = -35.28346;
//   lng: number = 149.12807;
//   zoom: number = 14;
//   panelOpenState: boolean;
//   OrgId: number;
//   OrgType: number;
//   OrgName: string;
//   OrgSlogan: string;
//   OrgAddress: string;
//   OrgEmail: string;
//   OrgContact: string;
//   OrgChainId: number;
//   FullName: string;

//   // ==== Menu ====================================
//   MenuSer: number = 0;
//   MenuId: number;
//   MenuName: string;
//   MenuDesc: string;
//   MenuSubmit: string = "Submit";
//   MenuImgId: number = 0;
//   ChangeMenuImg: boolean = false;
//   arrMenu: any[] = [];
//   arrMenuParam: any[] = [];
//   SelectedImageMenu: string = "Image Name";
//   // ==== Kitchen Spacial =================================
//   SelectedMenuKS: string;
//   MenuSerKS: number = 0;
//   RefMenuIdKS: number;
//   SplMenuName: string;
//   SplMenuDesc: string;
//   SplMenuCost: number;
//   SplMenuPrice: number;
//   IsOfferExistKS: number = 0;
//   AmtOfferKS: number = 0;
//   MenuImgIdKS: number = 0;
//   OpenOfferPanel: boolean = false;
//   ChangeMenuImgKS: boolean = false;
//   ManageMenuKS: string = "Manage Submenu";
//   MenuSubmitKS: string = "Submit";
//   arrKitchenSpl: any[] = [];
//   arrFilteredKS: any[] = [];
//   SelectedImageKS: string = "Image Name";
//   // ======= Itemlist =============================
//   // Ser,MenuId,ItemId,ItemName,ItemDesc,ItemOriginId,UnitCost,Price,IsOfferExist,AmtOffer,CategoryId,isVege,IsGF,isHalal,isAllergic,IsDiscontinued,OrgId
//   SvcCatX: string;
//   SvcCatY: string;
//   SvcCatZ: string;
//   IsCatDisabled: boolean = false;
//   // 
//   SelectedMenuItem: string;
//   ManageItem: string = "Manage Item";
//   ItemSer: number = 0;
//   RefMenuIdItem: number = 0;
//   ItemId: number = 0;
//   ItemName: string;
//   ItemDesc: string;
//   ItemOriginId: number;
//   UnitCost: number;
//   ItemPrice: number;
//   IsOfferExist: number = 0;
//   OffrExist: boolean = false;
//   AmtOffer: number;  
//   CategoryId: number = 0;  
//   IsGF: number = 0;
//   IsVege: number = 0;
//   IsHalal: number = 0;
//   IsAllergic: number = 0;  
//   IsDiscontinued: number = 0;
//   ItemImgId: string;
//   // -------- Upload Image ----------------
//   BaseImgUrl: string;
//   UploadSequence: number = 0;
//   FileContents: string;
//   FileTypeId: number;
//   elm = null;
//   SelectedImageItem: string = "Image Name";
//   AltImg: string;
//   ChangeItemImg: boolean = false;
//   // --------------------------------------
//   checkedAll = true;
//   checked1 = false;  
//   val_check1: string = "No";
//   ItemSubmit: string = "Submit";
//   arrItems: any[] = [];
//   arrFilteredItemList: any[] = [];
  
//   // OptionName: string;
//   // checked: boolean;
//   // value: number;
//   // ViewValue: string;
  
  
//   // ==============================================
//   constructor(
//     private authService: AuthService,
//     private backendService: BackendService,
//     private lookupService: LookupService,
//     private http: Http
//   ) { }

//   update_checkbox_option(Ser, val) {
//     // console.log(Ser + " , " + val);
//     let index = this.arrFoodOptions.findIndex((p) => p.Ser == Ser);   
//     this.arrFoodOptions[index].Val = val == 0 ? 1 : 0;
//     this.arrFoodOptions[index].Txt = val == 0 ? "Yes" : "No";
//     if (Ser == 1) {
//       this.IsOfferExist = this.arrFoodOptions[index].Val;
//       this.OffrExist = val == 0 ? true : false; 
//       // console.log("IsOfferExist : ", this.IsOfferExist);      
//     }else if (Ser == 2) {
//       this.IsGF = this.arrFoodOptions[index].Val;
//       // console.log("IsGF : ", this.IsGF);
//     }else if (Ser == 3) {
//       this.IsHalal = this.arrFoodOptions[index].Val;
//       // console.log("isHalal : ", this.IsHalal);
//     }else if (Ser == 4) {
//       this.IsVege = this.arrFoodOptions[index].Val;
//       // console.log("isVege : ", this.IsVege);
//     }else if (Ser == 5) {
//       this.IsAllergic = this.arrFoodOptions[index].Val;
//       // console.log("isAllergic : ", this.IsAllergic);
//     }else if (Ser == 6) {
//       this.IsDiscontinued = this.arrFoodOptions[index].Val;
//       // console.log("IsDiscontinued : ", this.IsDiscontinued);
//     }    
//   }
//   form_reset(val){
//     if (val == 1) {
//       this.MenuSer = 0;
//       this.MenuName = "";
//       this.MenuDesc = "";
//       this.MenuSubmit = "Submit";  
//       this.ChangeMenuImg = false;
//     }
//     else if (val == 2) {
//       this.MenuSerKS = 0;
//       this.RefMenuIdKS = 0;
//       this.SplMenuName = "";
//       this.SplMenuDesc = "";
//       this.SplMenuCost = null;
//       this.SplMenuPrice = null;
//       this.IsOfferExistKS = 0;
//       this.AmtOfferKS = null;
//       this.OpenOfferPanel = false;
//       this.MenuSubmitKS = "Submit";  
//     }
  
//   }
//   // 
//   change_img(img_id) {
//     this.ChangeMenuImg = true;
//     console.log("Change Image Id :", img_id);
//     this.MenuImgId = img_id;
//   }

//   edit_menu(data, edit_img) {
//     if (edit_img == 0) {
//       this.MenuSer = data.Ser;
//       this.MenuName = data.MenuName;
//       this.MenuDesc = data.MenuDesc;
//       this.MenuSubmit = "Edit";
      
//       // this.view_kitchen_spl(data.MenuId);
//     } else {
//       this.MenuSer = data.Ser;
//       this.MenuName = data.MenuName;
//       this.MenuDesc = data.MenuDesc;
//       this.MenuSubmit = "Edit";      
//       this.ChangeMenuImg = true;      
//       this.MenuImgId = data.ImgId;
//       console.log("Change Image Id :", this.MenuImgId);
//       // this.view_kitchen_spl(data.MenuId);
//     }    
//   }
//   // 
//   edit_menu_ks(data, edit_img) {
//     if (edit_img == 0) {
//       this.MenuSerKS = data.Ser;
//       this.RefMenuIdKS = data.MenuId;
//       this.RefMenuIdKS = data.SplMenuId;
//       this.SplMenuName = data.SplMenuName;
//       this.SplMenuDesc = data.SplMenuDesc;
//       this.SplMenuCost = data.UnitCost;
//       this.SplMenuPrice = data.Price;
//       this.IsOfferExistKS = data.IsOfferExist;
//       this.AmtOfferKS = data.AmtOffer;
//       this.MenuSubmitKS = "Edit";
//     } else {
//       console.log("I am here");
//       this.MenuSerKS = data.Ser;
//       this.RefMenuIdKS = data.MenuId;
//       this.RefMenuIdKS = data.SplMenuId;
//       this.SplMenuName = data.SplMenuName;
//       this.SplMenuDesc = data.SplMenuDesc;
//       this.SplMenuCost = data.UnitCost;
//       this.SplMenuPrice = data.Price;
//       this.IsOfferExistKS = data.IsOfferExist;
//       this.AmtOfferKS = data.AmtOffer;     
//       this.ChangeMenuImgKS = true;      
//       this.MenuImgIdKS = data.ImgId;
//       this.MenuSubmitKS = "Edit";
//       console.log("Change Image Id :", this.MenuImgIdKS);
//       // this.view_kitchen_spl(data.MenuId);
//     }    
//   }
//   // 
//   edit_itemlist(data, edit_img) {
//     this.ItemSer = data.Ser;
//     this.RefMenuIdItem = data.MenuId;
//     this.ItemId = data.ItemId;
//     this.ItemName = data.ItemName;
//     this.ItemDesc = data.ItemDesc;
//     this.ItemOriginId = data.ItemOriginId;
//     this.UnitCost = data.UnitCost;
//     this.ItemPrice = data.Price;
//     this.CategoryId = data.CategoryId;
//     this.IsOfferExist = data.IsOfferExist;
//     this.update_checkbox(1, data.IsOfferExist);
//     this.AmtOffer = data.AmtOffer;
//     this.IsGF = data.IsGF;
//     this.update_checkbox(2, data.IsGF);
//     this.IsHalal = data.IsHalal;
//     this.update_checkbox(3, data.IsHalal);
//     this.IsVege = data.IsVege;
//     this.update_checkbox(4, data.IsVege);
//     this.IsAllergic = data.IsAllergic;
//     this.update_checkbox(5, data.IsAllergic);
//     this.IsDiscontinued = data.IsDiscontinued;
//     this.update_checkbox(6, data.IsDiscontinued);
//     this.ItemSubmit = "Edit";  //ChangeItemImg
//     this.ItemImgId = data.ImgId;
//     if (edit_img == 1) {
//       this.ChangeItemImg = true;
//       console.log("Hei.. I am here...");
//     } else {
//       this.ChangeItemImg = false;
//     }
    
//   }

//   // Ser,MenuId,MenuDesc,ImgIdOrgId
//   create_update_menu(form_data) {
//     let data = {
//       Ser: form_data.MenuSer ? form_data.MenuSer : 0,
//       MenuId: parseInt(form_data.MenuId),
//       MenuDesc: form_data.MenuDesc,
//       MenuImgId: form_data.MenuImgId,
//       OrgId: this.OrgId,
//       queryId: "4",
//     };
//     this.backendService.SubmitData(data).subscribe((resp) => {
      
//       if(resp) {
//         if (resp.CrudCode == "201") {
//           this.MenuSubmit = "Submit";
//           let resp_data = {
//             Ser: resp.Ser,
//             MenuId: data.MenuId,
//             ImgId: this.OrgId + resp.ImgId,
//             MenuDesc: data.MenuDesc,
//             OrgId: data.OrgId,
//           };
//           this.arrMenu.push(resp_data);
//           let ImageId = "0-0-" + this.OrgId + resp.ImgId;
//           this.UploadSequence == 1 ? this.upload_image(ImageId) : null;
//           this.form_reset(1);
//         } else if (resp.CrudCode == "202") {
//           let index = this.arrMenu.findIndex((p) => p.Ser == resp.Ser);
//           this.arrMenu[index].MenuId = data.MenuId;
//           this.arrMenu[index].MenuDesc = data.MenuDesc;
//           if (this.ChangeMenuImg == true) {
//             let ImageId = "0-0-" + this.OrgId + this.MenuImgId;
//             this.UploadSequence == 1 ? this.upload_image(ImageId) : null;
//           }
//           this.form_reset(1);
//         }
//       }
//     })
//   }
//   // 
//   select_item_by_menu(MenuId, MenuName) {
//     this.RefMenuIdItem = MenuId;
//     for (let k = 0; k < this.arrMenu.length; k++) {
//       this.arrMenu[k].MenuId == MenuId ? this.arrMenu[k].myClass = "active" : this.arrMenu[k].myClass = "not-active";
//     }
//     console.log("MenuId, Item :", MenuId);
//     if (MenuId == 4) {
//       this.SvcCatX = "Beer";
//       this.SvcCatY = "Spirit";
//       this.SvcCatZ = "Wine";
//       this.IsCatDisabled = false;
//     }
//     else if (MenuId == 2 || MenuId == 3) {
//       this.SvcCatX = "Entree";
//       this.SvcCatY = "Main";
//       this.SvcCatZ = "Dessert";
//       this.IsCatDisabled = false;
//     } else {
//       this.SvcCatX = "";
//       this.SvcCatY = "";
//       this.SvcCatZ = "";
//       this.IsCatDisabled = true;
//     }
//     if (MenuId == 0) {
//       this.arrFilteredItemList = this.arrItems;
//     }
//     else {
//       this.arrFilteredItemList = this.arrItems.filter((m) => m.MenuId == MenuId);
//     }
//     this.SelectedMenuItem = MenuName;
//   }
//   // 
//   select_kitchen_spl(MenuId, MenuName) {
//     for (let k = 0; k < this.arrMenu.length; k++) {
//       this.arrMenu[k].MenuId == MenuId ? this.arrMenu[k].myClass = "active" : this.arrMenu[k].myClass = "not-active";
//     }
//     this.SelectedMenuKS = MenuName;
//     this.RefMenuIdKS = MenuId;
//     this.arrFilteredKS = [];
//     if (MenuId == 0) {
//       this.arrFilteredKS = this.arrKitchenSpl;
//     }
//     else {
//       this.arrFilteredKS = this.arrKitchenSpl.filter((m) => m.MenuId == MenuId);
//     }
//   }
//   toggle_offer_kitchen_spacial(val) {    
//     this.IsOfferExistKS = val;
//     this.OpenOfferPanel = val == 0 ? false : true;
//   }

//   create_update_menu_ks(fData) {
//     let data = {
//       Ser: fData.MenuSerKS ? fData.MenuSerKS : 0,
//       MenuId: fData.RefMenuIdKS,
//       SplMenuName: fData.SplMenuName,
//       SplMenuDesc: fData.SplMenuDesc,
//       SplUnitCost: fData.SplMenuCost,
//       SplPrice: fData.SplMenuPrice,
//       IsOfferExist: this.IsOfferExistKS,
//       AmtOffer: this.IsOfferExistKS == 0 || isNaN(fData.AmtOfferKS) ? 0 : parseFloat(fData.AmtOfferKS),
//       OrgId: this.OrgId,
//       queryId: "5",
//     };
//     this.backendService.SubmitData(data).subscribe((resp) => {
//       if (resp) {
//         if (resp.CrudCode == "201") {
//           this.MenuSubmitKS = "Submit";         
//           let ImageId = "1-0-" + this.OrgId + resp.ImgId;          
//           this.UploadSequence == 2 ? this.upload_image(ImageId) : null;
//           this.fetch_kitchen_spl_list(this.OrgId, data.MenuId)          
//         } else if (resp.CrudCode == "202") {
//           let index = this.arrKitchenSpl.findIndex((p) => p.Ser == resp.Ser);
//           this.arrKitchenSpl[index].SplMenuDesc = data.SplMenuDesc;
//           this.arrKitchenSpl[index].SplMenuName = data.SplMenuName;
//           this.arrKitchenSpl[index].UnitCost = data.SplUnitCost;
//           this.arrKitchenSpl[index].Price = data.SplPrice;
//           this.arrKitchenSpl[index].IsOfferExist = data.IsOfferExist;
//           this.arrKitchenSpl[index].AmtOffer = data.AmtOffer;
//           if (this.ChangeMenuImgKS == true) {
//             let ImageId = "1-0-" + this.OrgId + this.MenuImgIdKS;
//             this.UploadSequence == 2 ? this.upload_image(ImageId) : null;
//           }
//           this.MenuSubmitKS = "Submit";
//         }
//       } else {
//         console.log("Submenu - Error | Bad Request...");
//       }
//     });
//   }
//   // 
//   create_update_items(fData) {       
//     let data = {
//       Ser: fData.ItemSer ? fData.ItemSer : 0,
//       MenuId: fData.RefMenuIdItem, // ??
//       ItemId: fData.ItemId ? fData.ItemId : 0,
//       ItemName: fData.ItemName,
//       ItemDesc: fData.ItemDesc,
//       ItemOriginId: fData.ItemOriginId,
//       UnitCost: fData.UnitCost,
//       ItemPrice: fData.ItemPrice,
//       CategoryId: this.CategoryId,
//       IsOfferExist: this.IsOfferExist,
//       AmtOffer: this.IsOfferExist == 0 ? 0 : parseFloat(fData.AmtOffer),
//       IsGF: this.IsGF,
//       IsHalal: this.IsHalal,
//       IsVege: this.IsVege,
//       IsAllergic: this.IsAllergic,
//       IsDiscontinued: this.IsDiscontinued,
//       OrgId: this.OrgId,
//       queryId: "6",
//     };      
//     this.backendService.SubmitData(data).subscribe((resp) => {
//       if (resp) {
//         if (resp.CrudCode == "201") {
//           this.ItemSubmit = "SUbmit";
//           let resp_data = {
//             Ser: resp.Ser,
//             MenuId: data.MenuId,
//             ItemId: resp.ItemId,
//             ItemName: data.ItemName,
//             ItemDesc: data.ItemDesc,
//             ItemOriginId: data.ItemOriginId,
//             UnitCost: data.UnitCost,
//             Price: data.ItemPrice,
//             CategoryId: this.CategoryId,
//             IsOfferExist: data.IsOfferExist,
//             AmtOffer: data.AmtOffer,
//             IsGF: this.IsGF,
//             IsHalal: this.IsHalal,
//             IsVege: this.IsVege,
//             IsAllergic: this.IsAllergic,
//             IsDiscontinued: this.IsDiscontinued,
//             OrgId: this.OrgId,            
//           };
//           this.arrItems.push(resp_data);                   
//           let ImageId = "2-0-" + this.OrgId + resp.ImgId;          
//           this.UploadSequence == 3 ? this.upload_image(ImageId) : null;
//           this.fetch_itemlist(this.OrgId, data.MenuId);
//         } else if (resp.CrudCode == "202") {
//           this.fetch_itemlist(this.OrgId, data.MenuId);
//           let index = this.arrItems.findIndex((p) => p.Ser == resp.Ser);
//           this.arrItems[index].MenuId = data.MenuId;
//           this.arrItems[index].ItemId = resp.ItemId;
//           this.arrItems[index].ItemName = data.ItemName;
//           this.arrItems[index].ItemDesc = data.ItemDesc;
//           this.arrItems[index].ItemOriginId = data.ItemOriginId;
//           this.arrItems[index].UnitCost = data.UnitCost;
//           this.arrItems[index].Price = data.ItemPrice;
//           this.arrItems[index].CategoryId = data.CategoryId;
//           this.arrItems[index].IsOfferExist = data.IsOfferExist;
//           this.arrItems[index].AmtOffer = data.AmtOffer;
//           this.arrItems[index].IsGF = data.IsGF;
//           this.arrItems[index].IsHalal = data.IsHalal;
//           this.arrItems[index].IsVege = data.IsVege;
//           this.arrItems[index].IsAllergic = data.IsAllergic;
//           this.arrItems[index].IsDiscontinued = data.IsDiscontinued;
//           if (this.ChangeItemImg == true) {
//             console.log("I have also come here...");
//             let ImageId = "2-0-" + this.OrgId + this.ItemImgId;
//             this.UploadSequence == 3 ? this.upload_image(ImageId) : null;
//           }
//           this.fetch_itemlist(this.OrgId, data.MenuId);  
//         }
//       } else {
//         console.log("Submenu - Error | Bad Request...");
//       }
//     });
//   }
//   // 
//   fetch_menu_param(OrgId, ParentId) {
//     let data = {
//       OrgId: OrgId,
//       ParentId: ParentId,
//       queryId: "9",
//     };
//     this.backendService.SubmitData(data).subscribe((resp) => {
//       if (resp) {
//         this.arrMenuParam = resp;   
//         console.log("Menu Param ", this.arrMenuParam);
//       } else {
//         console.log("Error | Bad Request...");
//       }
//     });
//   }
//   // 
//   fetch_menu(OrgId) {
//     let data = {
//       OrgId: OrgId,
//       queryId: "1",
//     };
//     this.backendService.SubmitData(data).subscribe((resp) => {
//       if (resp) {
//         this.arrMenu = [];
//         console.log("Img 1000", this.arrMenu);
//         for (let index = 0; index < resp.length; index++){
//           let data = {
//             Ser: resp[index].Ser,
//             MenuId: resp[index].MenuId,
//             MenuName: resp[index].MenuName,
//             MenuDesc: resp[index].MenuDesc,
//             ImgId: resp[index].ImgId,
//             OrgId: resp[index].OrgId,
//             myClass: "not-active",
//           }
//           this.arrMenu.push(data);
//         }
//       } else {
//         console.log("Error | Bad Request...");
//       }
//     });
//   }
//   // 
//   fetch_kitchen_spl_list(OrgId, FilteredMenuId) {
//     let data = {
//       OrgId: OrgId,
//       queryId: "2",
//     };
//     this.backendService.SubmitData(data).subscribe((resp) => {
//       if (resp) {
//         this.arrKitchenSpl = resp;
//         this.arrFilteredKS = [];
//         if (FilteredMenuId == 0) {
//           this.arrFilteredKS = this.arrKitchenSpl;
//         }
//         else {
//           this.arrFilteredKS = this.arrKitchenSpl.filter((m) => m.MenuId == FilteredMenuId);
//         }
         
//         this.MenuSerKS = 0;
//         this.MenuSubmitKS = "Submit";   
//         this.ChangeMenuImg = false; 
//         console.log("arr Kitchen Spl List: ", this.arrKitchenSpl);
//       } else {
//         console.log("Error | Bad Request...");
//       }
//     });
//   }
//   // 
//   fetch_itemlist(OrgId, FilteredMenuId) {
//     let data = {
//       OrgId: OrgId,
//       queryId: "8",
//     };
//     this.backendService.SubmitData(data).subscribe((resp) => {
//       console.log("ITEM LIST : ", resp);
//       if (resp) {
//         this.arrItems = resp;
//         this.arrFilteredItemList = [];
//         if (FilteredMenuId == 0) {
//           this.arrFilteredItemList = this.arrItems;
//         } else {
//           this.arrFilteredItemList = this.arrItems.filter((m) => m.MenuId == FilteredMenuId);
//         }
//         this.MenuSerKS = 0;
//         this.MenuSubmitKS = "Submit";   
//         this.ChangeMenuImg = false; 
//         console.log("arr Kitchen Spl List: ", this.arrKitchenSpl);
//       } else {
//         console.log("Error | Bad Request...");
//       }
//     });    
//   }

//   view_items(MenuId) {
//     this.arrFilteredItemList = [];
//     this.arrFilteredItemList = this.arrItems.filter((m) => m.MenuId == MenuId);    
//   }

//   edit_kitchen_spl(data) {
//     this.ManageItem = "Manage " + data.SplMenuName;
//     this.MenuSerKS = data.Ser;
//     this.RefMenuIdKS = data.MenuId;
//     this.RefMenuIdKS = data.SplMenuId;
//     this.SplMenuName = data.SplMenuName;
//     this.SplMenuDesc = data.SplMenuDesc;
//     this.SplMenuCost = data.UnitCost;
//     this.SplMenuPrice = data.Price;
//     this.IsOfferExistKS = data.IsOfferExist;
//     this.AmtOfferKS = data.AmtOffer;
//     this.MenuSubmitKS = "Edit";
//   }
 
//   update_checkbox(Ser, val) {
//     let index = this.arrFoodOptions.findIndex((p) => p.Ser == Ser);   
//     if (Ser == 1) {
//       if (val == 1) {
//         this.OffrExist = true;
//         this.arrFoodOptions[index].Val = 1;
//         this.arrFoodOptions[index].Checked = true;
//         this.arrFoodOptions[index].Txt = "Yes";
//       } else {
//         this.OffrExist = false;
//         this.arrFoodOptions[index].Val = 0;
//         this.arrFoodOptions[index].Checked = false;
//         this.arrFoodOptions[index].Txt = "No";
//       }
//     } else {
//       if (val == 1) {
//         // this.OffrExist = true;
//         this.arrFoodOptions[index].Val = 1;
//         this.arrFoodOptions[index].Checked = true;
//         this.arrFoodOptions[index].Txt = "Yes";
//       } else {
//         // this.OffrExist = false;
//         this.arrFoodOptions[index].Val = 0;
//         this.arrFoodOptions[index].Checked = false;
//         this.arrFoodOptions[index].Txt = "No";
//       }
//     }
//   }
//   set_category_by_menu(val) {
//     this.CategoryId = val;
//     console.log("Category Service:", val);
//   }
//   // ======================================================
//   upload_image(ImgId) {
//     let formData = new FormData();
//     let Url = this.backendService.getImgUrl(1);    
//     let imgRefInfo = ImgId + this.FileContents;
//     formData.append("file", this.elm.files[0], imgRefInfo);
//     console.log("File Name : ", this.elm.files[0]);
//     this.http.post(Url + "image_upload_script.php", formData).subscribe((res) => {
//       console.log(res);
//     });
//   }  
//   // =======================================================
//   onFileSelected(event, sequence) {
//     this.UploadSequence = sequence;
//     this.elm = event.target;
//     if (this.elm.files.length > 0) {
//       if (this.elm.files[0].type === "image/jpeg") {
//         this.FileContents = ".jpg";
//         sequence == 1 ? this.SelectedImageMenu = this.elm.files[0].name
//           : sequence == 2 ? this.SelectedImageKS = this.elm.files[0].name
//             : sequence == 3 ? this.SelectedImageItem = this.elm.files[0].name
//               : null;
//         // this.SelectedImage = this.elm.files[0].name;
//         this.FileTypeId = 1;
//       } else if (this.elm.files[0].type === "image/png") {
//         this.FileContents = ".png";
//         sequence == 1 ? this.SelectedImageMenu = this.elm.files[0].name
//           : sequence == 2 ? this.SelectedImageKS = this.elm.files[0].name
//             : sequence == 3 ? this.SelectedImageItem = this.elm.files[0].name
//               : null;
//         this.FileTypeId = 2;
//       }       
//     }
//     console.log("File Type :", this.FileContents);
//   }
//   // =======================================================   
//   ngOnInit() {
//     this.OrgId = this.authService.fetch_signin_info(1);
//     this.OrgName = this.authService.fetch_signin_info(3);
//     this.imgUrl = this.backendService.getImgUrl(2);
//     this.AltImg = this.imgUrl + "alt.png";
//     this.fetch_menu(this.OrgId);
//     this.fetch_kitchen_spl_list(this.OrgId, 0);  
//     this.fetch_itemlist(this.OrgId, 0);
//     this.fetch_menu_param(this.OrgId, 0);

//   }
//   arrFoodOptions: arrFoodOptions[] = [
//     { Ser: 1, OptionName: "Offer Exist", Checked: false, Val: 0 , Txt:"No"},
//     { Ser: 2, OptionName: "Gluton Exist", Checked: false, Val: 0, Txt:"No" },
//     { Ser: 3, OptionName: "Halal Option", Checked: false, Val: 0, Txt:"No" },
//     { Ser: 4, OptionName: "Vege Option", Checked: false, Val: 0, Txt:"No" },
//     { Ser: 5, OptionName: "Allergic", Checked: false, Val: 0, Txt:"No" },
//     { Ser: 6, OptionName: "Discontinued", Checked: false, Val: 0, Txt: "No" },    
//   ];  

 
// }