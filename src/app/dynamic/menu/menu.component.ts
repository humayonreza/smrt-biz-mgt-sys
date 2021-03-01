import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { LookupService } from 'src/app/services/lookup.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  panelOpenState: boolean;
  IsDisplayCheckout: boolean = false;
  IsDisplayMenu: boolean = true;
  TakeawayStr: string = "TAKEAWAY";
  MenuStr: string = "MENU";
  IsSmartSM: boolean = false;
  TakeawaySum: number;
  TakeawayItemNo: number
  arrMenu: any[] = [];
  arrKitchenSpl: any[] = [];
  arrItemDetails: any[] = [];
  ArrKitchenSplFiltered: any[] = [];
  arrFeatured: any[] = [];
  arrItems: any[] = [];
  arrFilteredItemList: any[] = [];
  arrFilteredItemListDrink: any[] = [];
  arrCategoryRadioCon: any[] = [];
  arrFoodOption: any[] = [];
  arrTakeawayCart: any[] = [];
  IsFoodOption: boolean= true;
  imgUrl: string;
  OrgId: number = 1001;
  // PanelChooseMenu: boolean = true;
  IsDrinkListVisible: boolean = false;
  MenuNameFeatured: string;
  htTopDiv: number;
  MenuId: string;
  CatName1: string;
  CatName2: string;
  CatName3: string;
  CatPanel: boolean = false;
  ListTitleMenu: string = "SPACIAL MENU LIST"
  SelectedMenuDetails: string;
  CatNameDrinks1: string = "Alcoholic";
  CatNameDrinks2: string = "Non Alcoholic";
  ResetCategory: boolean = true;
  MenuFeaturedTxt: string;
  FoodOptionClass: string;
  DrinkOptionClass: string;
  IsVegVegan: boolean = false;
  IsVegVeganTxt: string = "No";
  IsDrinkList: boolean = false;
  constructor(
    public lookupService : LookupService,
    public backendService: BackendService,
    private router: Router,
  ) { }

  menu_details(MenuId, MenuName) {
    // let StartDate = new DatePipe("en-US").transform(
    //   cData.StartDate,
    //   "yyyy-MM-dd"
    // );
    // let EndDate = new DatePipe("en-US").transform(cData.EndDate, "yyyy-MM-dd");
    this.router.navigate(["/menu-details"], {
      queryParams: { menu: MenuName , id: MenuId },
    });

    // });
  }
  
  

  get_list_by_menu(data) {
    for (let k = 0; k < this.arrMenu.length; k++) {
      this.arrMenu[k].MenuId == data.MenuId ? this.arrMenu[k].myClass = "active-menu" : this.arrMenu[k].myClass = "not-active-menu";
    }
    this.set_food_option_btn(0);
    this.MenuId = data.MenuId;
    this.IsDrinkList = data.MenuId == "4" ? true : false;
    
    let param_MenuId = data.MenuId == 2 || data.MenuId == 3 ? 2
      : data.MenuId == 1 || data.MenuId == 5 ? null
        : data.MenuId == 4 ? 4
          : null;
    this.arrCategoryRadioCon = this.lookupService.getArr_RadioBtnCon_Category(param_MenuId);
    this.arrFilteredItemList = [];
    this.arrFilteredItemList = this.arrItems.filter(m => m.MenuId == data.MenuId);
    this.ListTitleMenu = data.MenuId == 1 ? "BREAKFAST MENU LIST"
      : data.MenuId == 2 ? "LUNCH MENU LIST"
        : data.MenuId == 3 ? "DINNER MENU LIST"
          : data.MenuId == 4 ? "DRINK LIST"
            : data.MenuId == 5 ? "FASTFOOD MENU LIST"
              : "SPACIAL MENU LIST"
    this.SelectedMenuDetails = this.arrFilteredItemList.length + " x Menu Items";
    this.arrFoodOption = this.lookupService.getArr_FoodOption();
  }

  set_food_option_btn(OptionId){
    for (let i = 0; i < this.arrFoodOption.length; i++)
    {
      if (this.arrFoodOption[i].value == parseInt(OptionId)) {
        this.arrFoodOption[i].BtnClass = "active-btn";
      } else {
        this.arrFoodOption[i].BtnClass = "not-active-btn";
      }
    }
  }

  menu_option(OptionId) {
    this.set_food_option_btn(OptionId);
    if (OptionId == 1) {
      this.IsDrinkList = OptionId == 2 ? true : false;
      let MenuId = this.MenuId;
      let data = this.arrItems;
      this.arrFilteredItemList = data.filter((m) => m.MenuId == MenuId);
      this.SelectedMenuDetails = this.arrFilteredItemList.length + " x Menu Items";
      this.arrCategoryRadioCon = this.lookupService.getArr_RadioBtnCon_Category(MenuId);
    }
    else if (OptionId == 2) {
      this.IsDrinkList = OptionId == 2 ? true : false;
      let MenuId = 4;
      let data = this.arrItems;
      this.arrFilteredItemList = data.filter((m) => m.MenuId == MenuId);
      this.SelectedMenuDetails = this.arrFilteredItemList.length + " x Menu Items";
      this.arrCategoryRadioCon = this.lookupService.getArr_RadioBtnCon_Category(MenuId);
    }
    else if (OptionId == 3) {
      this.IsDrinkList = OptionId == 2 ? true : false;
      let MenuId = this.MenuId;
      let data = this.arrItems;
      this.arrFilteredItemList = data.filter((m) => m.MenuId == MenuId && m.IsVegetarian == 1);
      this.SelectedMenuDetails = this.arrFilteredItemList.length + " x Menu Items";
      this.arrCategoryRadioCon = this.lookupService.getArr_RadioBtnCon_Category(1);
    }
  }

  get_list_by_menuId_categoryId(CategoryId) {
    if (this.IsDrinkList) {
      let MenuId = 4;
      let data = this.arrItems;
      this.arrFilteredItemList = CategoryId == 0 ? data.filter((m) => m.MenuId == MenuId && m.IsFeatured == 1) : data.filter((m) => m.MenuId == MenuId && m.CategoryId == CategoryId);
      this.SelectedMenuDetails = this.arrFilteredItemList.length + " x Menu Items";
    }
    else {
      let MenuId = this.MenuId;
      let data = this.arrItems;
      this.arrFilteredItemList = CategoryId == 0 ? data.filter((m) => m.MenuId == MenuId && m.IsFeatured == 1) : data.filter((m) => m.MenuId == MenuId && m.CategoryId == CategoryId);
      this.SelectedMenuDetails = this.arrFilteredItemList.length + " x Menu Items";
    }
  }

  get_list_by_preference() {
    let MenuId = this.MenuId;
    let data = this.arrItems;
    this.arrFilteredItemList = data.filter((m) => m.MenuId == MenuId && m.IsVegetarian == 1)
  }

  fetchArrMenu(OrgId) {
    let data = {
      OrgId: OrgId,
      queryId: "1",
    }     
    this.lookupService.BackendService(data).subscribe((resp) => {
      if (resp) {
        this.arrMenu = [];
        for (let index = 0; index < resp.length; index++) {
          let data = {
            Ser: resp[index].Ser,
            MenuId: resp[index].MenuId,
            MenuName: resp[index].MenuName,
            MenuDesc: resp[index].MenuDesc,
            ImgId: resp[index].ImgId,
            OrgId: resp[index].OrgId,
            myClass: "not-active-menu",
          }
          this.arrMenu.push(data);
        }
        this.arrMenu.sort((a, b) => (a.MenuId > b.MenuId ? 1 : -1));
      }
    }); 
  }


  fetch_itemlist(OrgId) {
    let data = {
      OrgId: OrgId,
      queryId: "8",
    };
    this.backendService.SubmitData(data).subscribe((resp) => {
      if (resp) {
        for (let i=0; i < resp.length; i++)
        {
          let d = {
            Ser: resp.Ser,
            MenuId: resp[i].MenuId,
            ItemId: resp[i].ItemId,
            ItemName: resp[i].ItemName,
            ItemDesc: resp[i].ItemDesc,
            ItemOriginId: resp[i].ItemOriginId,
            UnitCost: parseFloat(resp[i].UnitCost),
            Price: parseFloat(resp[i].Price), // num3.toFixed(2)
            CategoryId: resp[i].CategoryId,
            CatTxt: this.return_category_name(resp[i].CategoryId, resp[i].MenuId),
            IsOfferExist: resp[i].IsOfferExist,
            OfferTxt: resp[i].IsOfferExist == 1 ? "Y" : "N",
            AmtOffer: parseFloat(resp[i].AmtOffer),
            SellingPrice : parseFloat(resp[i].SellingPrice),
            IsVegetarian: resp[i].IsVegetarian,
            VegTxt: resp[i].IsVegetarian == 1 ? "Y" : "N",
            IsAllergic: resp[i].IsAllergic,
            AllergicTxt: resp[i].IsAllergic == 1 ? "Allergic Content : " : "",
            IsGlutonFree: resp[i].IsGlutonFree,
            GFTxt: resp[i].IsGlutonFree == 1 ? "" : " (Gluton)",
            IsEggFree: resp[i].IsEggFree,
            EggTxt: resp[i].IsEggFree == 1 ? "" : " (Egg)",
            IsLactoseFree: resp[i].IsLactoseFree,
            LactoseTxt: resp[i].IsLactoseFree == 1 ? "" : " (Lactose)",
            IsSugarFree: resp[i].IsSugarFree,
            SugarTxt: resp[i].IsSugarFree == 1 ? "" : " (Suger)",
            IsSeafoodFree: resp[i].IsSeafoodFree,
            SeafoodTxt: resp[i].IsSeafoodFree == 1 ? "" : "(Seafood)",
            IsNutFree: resp[i].IsNutFree,
            NutTxt: resp[i].IsNutFree == 1 ? "" : " (Nuts)",
            ImgId: resp[i].ImgId,
            IsFeatured: resp[i].IsFeatured,
            FeaturedTxt: resp[i].IsFeatured == 1 ? "Y" : "N",
            IsDiscontinued: resp[i].IsDiscontinued,
            DisconTxt: resp[i].IsDiscontinued == 1 ? "Y" : "N",
            IsSelected: 0,
            NumberOrdered: 0,
            AddRemoveTxt: "Add Item",
            OrgId: resp[i].OrgId,
            // ClassId: 0
          }
          this.arrItems.push(d);
        }  

        console.log("arrItems : ", this.arrItems);
        this.arrItems.sort((a, b) => (a.SellingPrice > b.SellingPrice ? 1 : -1));      
        this.arrFeatured = [];
        this.arrFilteredItemList = this.arrItems.filter((m) => m.IsFeatured == 1);
        this.arrFilteredItemList.sort((a, b) => (a.MenuId > b.MenuId ? 1 : -1));
        this.SelectedMenuDetails = this.arrFilteredItemList.length + " x Menu Items";
      } else {
        console.log("Error | Bad Request...");
      }
    });    
  }
  init_process_takeaway(ItemId,ItemName,SellingPrice) {
    console.log("Item Id : ", ItemId);
    let index = this.arrItems.findIndex((p) => p.ItemId == ItemId);
    if (this.arrItems[index].IsSelected == 0) {
      this.arrItems[index].IsSelected = 1;
      this.arrItems[index].AddRemoveTxt = "Romove";
      this.arrItems[index].NumberOrdered = 1;
      this.update_takeaway_cart(ItemId, ItemName, SellingPrice, 0);
      this.TakeawayStr = this.arrTakeawayCart.length == 0 ? "TAKEAWAY" : "CHECK OUT";
      this.MenuStr = this.arrTakeawayCart.length == 0 ? "MENU" : "ITEM LIST";
    } else {
      this.arrItems[index].IsSelected = 0;
      this.arrItems[index].NumberOrdered = 0;
      this.arrItems[index].AddRemoveTxt = "Add Item";
      let rmvIndex = this.arrTakeawayCart.findIndex((p) => p.ItemId == ItemId);
      this.arrTakeawayCart.splice(rmvIndex, 1);
      this.TakeawayStr = this.arrTakeawayCart.length == 0 ? "TAKEAWAY" : "CHECK OUT";
      this.MenuStr = this.arrTakeawayCart.length == 0 ? "MENU" : "ITEM LIST";
      this.TakeawayItemNo = this.arrTakeawayCart.length;
      this.TakeawaySum = this.arrTakeawayCart.length == 0 ? 0 : parseFloat(this.return_takeaway_sum());
    }
  }
  update_takeaway_cart(ItemId,ItemName,SellingPrice, inc) {
    let k = this.arrTakeawayCart.findIndex((p) => p.ItemId == ItemId);
    console.log("K Value : ", k);
      if (k== -1) {
        let data = {
          ItemId: ItemId,
          ItemName: ItemName,
          NumberOrdered: 1,
          SellPrice: SellingPrice,
          TPrice: SellingPrice
        }
        this.arrTakeawayCart.push(data);
        console.log("Cart List : ", this.arrTakeawayCart);
        this.TakeawaySum = parseFloat(this.return_takeaway_sum());
        this.TakeawayItemNo = this.arrTakeawayCart.length;
      }
      else {
        this.arrTakeawayCart[k].NumberOrdered = parseInt(this.arrTakeawayCart[k].NumberOrdered)  + inc;
        this.arrTakeawayCart[k].TPrice = this.arrTakeawayCart[k].NumberOrdered * SellingPrice;
        console.log("Cart List : ", this.arrTakeawayCart);
        this.TakeawaySum = parseFloat(this.return_takeaway_sum());
      }
  }

  update_checkout(ItemId, inc) {
    let index = this.arrTakeawayCart.findIndex((p) => p.ItemId == ItemId);
    let m = this.arrItems.findIndex((p) => p.ItemId == ItemId);
    let SellPrice = this.arrItems[m].SellingPrice;
    if (inc == 1) {
      this.arrTakeawayCart[index].NumberOrdered = parseInt(this.arrTakeawayCart[index].NumberOrdered) + 1;
      this.arrItems[m].NumberOrdered = parseInt(this.arrItems[m].NumberOrdered)  + 1;
      this.arrTakeawayCart[index].TPrice = this.arrTakeawayCart[index].TPrice + SellPrice;
      console.log("Cart List : ", this.arrTakeawayCart);
      this.TakeawaySum = parseFloat(this.return_takeaway_sum());
    } else {
      this.arrTakeawayCart[index].NumberOrdered = parseInt(this.arrTakeawayCart[index].NumberOrdered) - 1;
      this.arrItems[m].NumberOrdered = parseInt(this.arrItems[m].NumberOrdered) - 1;
      this.arrTakeawayCart[index].TPrice = this.arrTakeawayCart[index].TPrice - SellPrice;
      this.arrItems[m].NumberOrdered = this.arrTakeawayCart[index].NumberOrdered;
      console.log("Cart List : ", this.arrTakeawayCart);
      this.TakeawaySum = parseFloat(this.return_takeaway_sum());
      this.arrTakeawayCart[index].NumberOrdered == 0 ? this.arrTakeawayCart.splice(index, 1) : null;
      this.TakeawayItemNo = this.arrTakeawayCart.length;
      if (this.arrItems[m].NumberOrdered == 0) {
        this.arrItems[m].IsSelected = 0;
        this.arrItems[m].NumberOrdered = 0;
        this.arrItems[m].AddRemoveTxt = "Add Item";
      }
    }
  }

  update_cart_item(ItemId, ItemName,SellingPrice, funcId) {
    console.log("Item Id Counter: ", ItemId);
    let index = this.arrItems.findIndex((p) => p.ItemId == ItemId);
    if (this.arrItems[index].IsSelected == 1) {
      if (funcId == 1) {
        this.arrItems[index].NumberOrdered = this.arrItems[index].NumberOrdered + 1;
        this.update_takeaway_cart(ItemId, ItemName, SellingPrice, 1);
      } else {
        this.arrItems[index].NumberOrdered = this.arrItems[index].NumberOrdered == 0 ? 0 : parseInt(this.arrItems[index].NumberOrdered) - 1;
        this.update_takeaway_cart(ItemId, ItemName, SellingPrice, -1);
        this.TakeawayStr = this.arrItems[index].NumberOrdered == 0 && this.TakeawaySum == 0? "TAKEAWAY" : "CHECKOUT";
        this.MenuStr = this.arrItems[index].NumberOrdered == 0 && this.TakeawaySum == 0 ? "MENU" : "ITEM LIST";
        if (this.arrItems[index].NumberOrdered == 0) {
          let k=this.arrTakeawayCart.findIndex((p)=>p.ItemId==this.arrItems[index].ItemId);
          this.arrTakeawayCart.splice(k, 1);
          this.TakeawayItemNo = this.arrTakeawayCart.length;
          this.arrItems[index].IsSelected = 0;
          this.arrItems[index].NumberOrdered = 0;
          this.arrItems[index].AddRemoveTxt = "Add Item";
        }
      }
    }
    else {
      console.log("Select an item");
    }
  }
  // 
  return_takeaway_sum() {
    console.log("Selling Value : ", this.arrTakeawayCart);
    let TotalPrice = 0;
    for (let i = 0; i < this.arrTakeawayCart.length; i++){
      TotalPrice += this.arrTakeawayCart[i].TPrice;
    }
    return TotalPrice.toFixed(2);
  }
  // 
  return_category_name(CategoryId, MenuId) {
    if (MenuId == 4) {
      let Cat = CategoryId == 1 ? "Beer" : CategoryId == 2 ? "Spirit" : CategoryId == 3 ? "Wine" : null;
      return Cat;
    } else {
      let Cat = CategoryId == 1 ? "Starter" : CategoryId == 2 ? "Main" : CategoryId == 3 ? "Dessert" : null;
      return Cat;
    }
  }

  fetch_drinklist_by_category(CategoryId) {
    let MenuId = 4;
    let data = this.arrItems;
    if (CategoryId == 0) {
      this.arrFilteredItemList=data.filter((x) => x.MenuId==MenuId);
    }
    else {
      this.arrFilteredItemList=data.filter((x) => x.MenuId==MenuId && x.CategoryId==CategoryId);
      console.log("ITEM ARR : ", this.arrFilteredItemList);
    }
  }
  
  return2MenuCheckout(val) {
    if (val == 1) {
      this.IsDisplayCheckout = true;
      this.IsDisplayMenu = false;
    } else {
      this.IsDisplayCheckout = false;
      this.IsDisplayMenu = true;
    }
  }
  
  fetch_itemlist_by_category(CategoryId) {
    console.log("MENU ID : ", this.MenuId);
    let data = this.arrItems;
    if (CategoryId == 0) {
      this.arrFilteredItemList=data.filter((m) => m.MenuId==this.MenuId);
    }
    else {
      this.arrFilteredItemList=data.filter((m) => m.MenuId==this.MenuId && m.CategoryId==CategoryId);
      console.log("ITEM ARR : ", this.arrFilteredItemList);
    }
    
  }
  open_page(page_id) {
    page_id == 1 ? this.router.navigate(["/reservation"]) 
      : page_id == 2 ? this.router.navigate(["/menu"])
      : page_id == 3 ? this.router.navigate(["/takeaway"])
      : null;   
  }
  
  ngOnInit() {
    this.IsSmartSM = screen.width < 361 ? true : false;
    console.log("IsSmartSM : ", this.IsSmartSM);
    this.htTopDiv = screen.width < 500 ? screen.height - 60 : screen.height - 95;
    this.imgUrl = this.backendService.getImgUrl(2);
    this.fetchArrMenu(this.OrgId);
    this.fetch_itemlist(this.OrgId); 
    let arrOrgInfo = JSON.parse(localStorage.getItem("OrgInfo"));
    
  }
}
