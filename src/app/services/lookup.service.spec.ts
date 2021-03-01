import { TestBed } from '@angular/core/testing';

import { LookupService } from './lookup.service';

describe('LookupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LookupService = TestBed.get(LookupService);
    expect(service).toBeTruthy();
  });
});



//  "1001", TypeId: "1", MenuDesc: "This is well prepared menu-1"

//    arrMenuContent: arrMenuContent[] = [
//     {Ser: "1", value: "11", viewValue: "0", contentName: "NA", parentId: "0"},
//     {Ser: "2", value: "21", viewValue: "0", contentName: "NA", parentId: "0"},
//     {Ser: "3", value: "31", viewValue: "1", contentName: "COURSE ONE", parentId: "3"},
//     {Ser: "4", value: "32", viewValue: "2", contentName: "COURSE TWO", parentId: "3" },
//     {Ser: "5", value: "33", viewValue: "3", contentName: "COURSE THREE", parentId: "3"},
//     {Ser: "6", value: "41", viewValue: "1", contentName: "COURSE ONE", parentId: "4"},
//     {Ser: "7", value: "42", viewValue: "2", contentName: "COURSE TWO", parentId: "4" },
//     {Ser: "8", value: "43", viewValue: "3", contentName: "COURSE THREE", parentId: "4"},
//     {Ser: "9", value: "51", viewValue: "1", contentName: "COURSE ONE", parentId: "5"},
//     {Ser: "10", value: "52", viewValue: "2", contentName: "COURSE TWO", parentId: "5"},
//     {Ser: "11", value: "53", viewValue: "3", contentName: "COURSE THREE", parentId: "5"},
//     {Ser: "12", value: "54", viewValue: "4", contentName: "COURSE FOUR", parentId: "5"},
    
//     {Ser: "13", value: "61", viewValue: "0", contentName: "NA", parentId: "0" },
//     {Ser: "14", value: "71", viewValue: "1", contentName: "COCKTAILS", parentId: "7"},
//     {Ser: "15", value: "72", viewValue: "2", contentName: "MOCKTAILS", parentId: "7"},
//     {Ser: "16", value: "73", viewValue: "3", contentName: "BEERS & CIDER", parentId: "7"},
//     {Ser: "17", value: "74", viewValue: "4", contentName: "FLIGHT EXPERIENCES", parentId: "7"},
//     {Ser: "18", value: "75", viewValue: "5", contentName: "SPIRITS", parentId: "7"},
//     {Ser: "19", value: "76", viewValue: "6", contentName: "HOT BEVERAGES", parentId: "7"},
//     {Ser: "20", value: "77", viewValue: "7", contentName: "COLD BEVERAGES", parentId: "7"},
     
//     {Ser: "18", value: "81", viewValue: "0", contentName: "NA", parentId: "0"},    
//    ];

  
//   arrFoodList: arrFoodList[] = [
//     { Ser: "1", menuId: "2", foodCatId: "21", foodName: "Coffee", foodDesc: "Prepared with bast care only for our guest" , price: "10" },
//     { Ser: "2", menuId: "2", foodCatId: "22", foodName: "Tea", foodDesc: "Prepared with bast care only for our guest", price: "20" },
//     { Ser: "3", menuId: "2", foodCatId: "23", foodName: "Bread Slice", foodDesc: "Prepared with bast care only for our guest" , price: "30" },
//     { Ser: "4", menuId: "2", foodCatId: "24", foodName: "Egg Omlet", foodDesc: "Prepared with bast care only for our guest", price: "40" },
//     { Ser: "5", menuId: "3", foodCatId: "31", foodName: "Food Item 1", foodDesc: "Prepared with bast care only for our guest" , price: "50" },
//     { Ser: "6", menuId: "3", foodCatId: "31", foodName: "Food Item 2", foodDesc: "Prepared with bast care only for our guest", price: "63" },
//     { Ser: "7", menuId: "3", foodCatId: "33", foodName: "Food Item 3", foodDesc: "Prepared with bast care only for our guest" , price: "70" },
//     { Ser: "8", menuId: "3", foodCatId: "32", foodName: "Food Item 4", foodDesc: "Prepared with bast care only for our guest" , price: "87" },
//     { Ser: "9", menuId: "3", foodCatId: "33", foodName: "Food Item 5", foodDesc: "Prepared with bast care only for our guest" , price: "90" },
//     { Ser: "10", menuId: "4", foodCatId: "41", foodName: "Food Item 5", foodDesc: "Prepared with bast care only for our guest" , price: "80" },
//     { Ser: "11", menuId: "4", foodCatId: "42", foodName: "Food Item 6", foodDesc: "Prepared with bast care only for our guest" , price: "70" },
//     { Ser: "12", menuId: "4", foodCatId: "42", foodName: "Food Item 7", foodDesc: "Prepared with bast care only for our guest" , price: "67" },
//     { Ser: "13", menuId: "5", foodCatId: "51", foodName: "Food Item 8", foodDesc: "Prepared with bast care only for our guest" , price: "50" },
//     { Ser: "14", menuId: "5", foodCatId: "51", foodName: "Food Item 9", foodDesc: "Prepared with bast care only for our guest" , price: "42" },
//     { Ser: "15", menuId: "5", foodCatId: "52", foodName: "Food Item 10", foodDesc: "Prepared with bast care only for our guest" , price: "31" },
//     { Ser: "16", menuId: "6", foodCatId: "61", foodName: "Fastfood 1", foodDesc: "Prepared with bast care only for our guest" , price: "27" },
//     { Ser: "17", menuId: "6", foodCatId: "62", foodName: "Fastfood 2", foodDesc: "Prepared with bast care only for our guest" , price: "10" },
//     { Ser: "18", menuId: "6", foodCatId: "62", foodName: "Fastfood 3", foodDesc: "Prepared with bast care only for our guest" , price: "24" },
//     { Ser: "19", menuId: "6", foodCatId: "63", foodName: "Fastfood 4", foodDesc: "Prepared with bast care only for our guest" , price: "39" },
//     { Ser: "20", menuId: "6", foodCatId: "63", foodName: "Fastfood 5", foodDesc: "Prepared with bast care only for our guest" , price: "40" },
//     { Ser: "21", menuId: "7", foodCatId: "71", foodName: "Wine & spirit 1", foodDesc: "Drinks with bast care only for our guest" , price: "50" },
//     { Ser: "22", menuId: "7", foodCatId: "71", foodName: "Wine & spirit 2", foodDesc: "Drinks with bast care only for our guest" , price: "60" },
//     { Ser: "23", menuId: "7", foodCatId: "72", foodName: "Wine & spirit 3", foodDesc: "Drinks with bast care only for our guest" , price: "70" },
//     { Ser: "24", menuId: "7", foodCatId: "72", foodName: "Wine & spirit 4", foodDesc: "Drinks with bast care only for our guest" , price: "80" },
//     { Ser: "25", menuId: "7", foodCatId: "72", foodName: "Wine & spirit 5", foodDesc: "Drinks with bast care only for our guest" , price: "90" },
//     { Ser: "26", menuId: "7", foodCatId: "73", foodName: "Wine & spirit 6", foodDesc: "Drinks with bast care only for our guest" , price: "22" },
//     { Ser: "27", menuId: "7", foodCatId: "73", foodName: "Wine & spirit 7", foodDesc: "Drinks with bast care only for our guest" , price: "24" },
//     { Ser: "28", menuId: "7", foodCatId: "73", foodName: "Wine & spirit 8", foodDesc: "Drinks with bast care only for our guest" , price: "26" },
//     { Ser: "29", menuId: "7", foodCatId: "74", foodName: "Wine & spirit 9", foodDesc: "Drinks with bast care only for our guest" , price: "35" },
//     { Ser: "30", menuId: "7", foodCatId: "74", foodName: "Wine & spirit 10", foodDesc: "Drinks with bast care only for our guest", price: "44" },    
//     { Ser: "31", menuId: "7", foodCatId: "74", foodName: "Wine & spirit 11", foodDesc: "Drinks with bast care only for our guest" , price: "50" },
//     { Ser: "32", menuId: "7", foodCatId: "75", foodName: "Wine & spirit 12", foodDesc: "Drinks with bast care only for our guest" , price: "60" },
//     { Ser: "33", menuId: "7", foodCatId: "75", foodName: "Wine & spirit 13", foodDesc: "Drinks with bast care only for our guest" , price: "70" },
//     { Ser: "34", menuId: "7", foodCatId: "75", foodName: "Wine & spirit 14", foodDesc: "Drinks with bast care only for our guest" , price: "80" },
//     { Ser: "35", menuId: "7", foodCatId: "75", foodName: "Wine & spirit 15", foodDesc: "Drinks with bast care only for our guest" , price: "90" },
//     { Ser: "36", menuId: "7", foodCatId: "75", foodName: "Wine & spirit 16", foodDesc: "Drinks with bast care only for our guest" , price: "22" },
//     { Ser: "37", menuId: "7", foodCatId: "76", foodName: "Wine & spirit 17", foodDesc: "Drinks with bast care only for our guest" , price: "24" },
//     { Ser: "38", menuId: "7", foodCatId: "76", foodName: "Wine & spirit 18", foodDesc: "Drinks with bast care only for our guest" , price: "26" },
//     { Ser: "39", menuId: "7", foodCatId: "77", foodName: "Wine & spirit 19", foodDesc: "Drinks with bast care only for our guest" , price: "35" },
//     { Ser: "40", menuId: "7", foodCatId: "77", foodName: "Wine & spirit 20", foodDesc: "Drinks with bast care only for our guest", price: "44" },
//     { Ser: "41", menuId: "8", foodCatId: "81", foodName: "Icecream 1", foodDesc: "Icecream with bast care only for our guest", price: "8" },
//     { Ser: "42", menuId: "8", foodCatId: "81", foodName: "Icecream 2", foodDesc: "Icecream with bast care only for our guest", price: "4" },
//     { Ser: "41", menuId: "8", foodCatId: "81", foodName: "Icecream 3", foodDesc: "Icecream with bast care only for our guest", price: "12" },
//     { Ser: "42", menuId: "8", foodCatId: "81", foodName: "Icecream 4", foodDesc: "Icecream with bast care only for our guest" , price: "16" },

//   ];


