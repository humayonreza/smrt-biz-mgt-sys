import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BackendService } from "src/app/services/backend.service";
import { LookupService } from "src/app/services/lookup.service";
import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from "src/app/dynamic/modal/modal.component";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  OrgId: number = 1001;

  isScrBg: boolean;
  imgUrl: string;
  baseImgUrl: string;
  htTopDiv: number;
  arrServiceName: any[] = [];
  arrSlider: any[] = [];
  arrImgServices: any[] = [];
  arrReview: any[] = [];
  arrBannerImg: any[] = [];
  arrSliderImg: any[] = [];
  arrServiceInfo: any[] = [];
  arrServiceHead: any[] = [];
  srcBanner: string;
  OrgStory: string;
  //
  constructor(
    public dialog: MatDialog,
    private router: Router,
    public backendService: BackendService,
    public lookupService: LookupService
  ) {}

  slideConfigBanner = {
    slidesToShow: screen.width < 500 ? 1 : 2,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: false,
  };

  slideConfigImg = {
    slidesToShow: screen.width < 500 ? 1 : 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
  };
  slideConfigServiceImg = {
    slidesToShow: 1, //screen.width < 500 ? 1 : 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
  };
  slideConfigReview = {
    slidesToShow: screen.width < 500 ? 1 : 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
  };

  // ========  Open Modal ====================
  openDialog(TypeId, QueryId, QueryTxt): void {
    console.log("VAL : ", QueryId);
    const dialogRef = this.dialog.open(ModalComponent, {
      width: "500px",
      data: { PageId: 1, TypeId: TypeId, QueryId: QueryId, QueryTxt: QueryTxt },
      // backdropClass: 'backdropBackground',
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }

  create_image_array(baseUrl) {
    let sliderImgPath =
      screen.width < 500
        ? baseUrl + "slider/smart/"
        : baseUrl + "slider/large/";
    this.arrSlider = this.lookupService.getImageInfo(
      "1",
      "slider",
      sliderImgPath
    );
    //
    let serviceImgPath = baseUrl + "services/";
    this.arrImgServices = this.lookupService.getImageInfo(
      "1",
      "service",
      serviceImgPath
    );
    //
    // this.arrReview = this.lookupService.getImageInfo("1", "review", "na");
    // console.log("arrReview : ", this.arrReview);
  }

  fetchServiceInfo() {
    this.arrServiceName = this.lookupService.getArrServiceName();
  }
  get_service_details(ServiceId) {
    console.log("Service Id : ", ServiceId);
  }

  open_page(page_id) {
    page_id == 1
      ? this.router.navigate(["/reservation"])
      : page_id == 2
      ? this.router.navigate(["/menu"])
      : page_id == 3
      ? this.router.navigate(["/takeaway"])
      : null;
  }
  // logoSrc: string;

  InitWebData(url) {
    let data = {
      url: url,
      queryId: "10",
    };
    this.lookupService.FetchOrgInfo(data).subscribe((resp) => {
      if (resp) {
        let arrOrgInfo = JSON.parse(localStorage.getItem("OrgInfo"));
        // this.OrgDesc = arrOrgInfo[0].OrgDesc;
        console.log("Org Data Local Storage : ", arrOrgInfo);
        this.FetchMiscData(arrOrgInfo[0].OrgId);
        this.FetchOrgInfo(arrOrgInfo[0].OrgId);
      }
    });
  }
  FetchOrgInfo(OrgId) {
    let data = {
      OrgId: OrgId,
      queryId: "16",
    };
    this.lookupService.BackendService(data).subscribe((resp) => {
      if (resp) {
        console.log("Org Info : ", resp);
        this.OrgStory = resp[0].OrgStory
          ? resp[0].OrgStory
          : "Insert your own story";
      }
    });
  }
  FetchMiscData(OrgId) {
    let data = {
      OrgId: OrgId,
      queryId: "11",
    };
    this.lookupService.FetchOrgMiscInfo(data).subscribe((resp) => {
      if (resp) {
        console.log("Misc Data : ", resp);
        this.getImgTxtSliderInfo(7);
        this.getImgTxtSliderInfo(8);
        this.getImgTxtSliderInfo(6);
        this.getImgTxtSliderInfo(9);
      }
    });
  }

  ImgFolder: string;
  getImgTxtSliderInfo(filterId) {
    let tempArr = this.lookupService.return_org_misc_info(filterId);
    if (filterId == 6) {
      this.ImgFolder = "services/";
    } else if (filterId == 7) {
      this.ImgFolder = "banner/";
    } else if (filterId == 8) {
      this.ImgFolder = "slider/";
    }

    if (tempArr.length == 0) {
      let data = {
        ImgPath: this.baseImgUrl + "altImg/alt.png",
        TxtMain: "No Content/Image is uploaded",
        TxtSm: "",
        Value: 0,
        ClassName: "Not-Active",
      };
      if (filterId == 6) {
        this.arrServiceHead.push(data);
      } else if (filterId == 7) {
        this.arrBannerImg.push(data);
      } else if (filterId == 8) {
        this.arrSliderImg.push(data);
      } else if (filterId == 9) {
        this.arrReview.push(data);
      }
    } else {
      for (let i = 0; i < tempArr.length; i++) {
        let data = {
          ImgPath: tempArr[i].ImgId
            ? this.baseImgUrl + this.ImgFolder + tempArr[i].ImgId + ".png"
            : this.baseImgUrl + "altImg/alt.png",
          TxtMain: tempArr[i].TxtMain,
          TxtSm: tempArr[i].TxtSm,
          Value: tempArr[i].Val,
          ClassName: tempArr[i].ClassId == 1 ? "Active" : "Not-Active",
        };
        if (filterId == 6 && tempArr[i].ParentId == 0) {
          this.arrServiceHead.push(data);
        } else if (filterId == 7) {
          this.arrBannerImg.push(data);
        } else if (filterId == 8) {
          this.arrSliderImg.push(data);
        } else if (filterId == 9) {
          this.arrReview.push(data);
        }
      }
    }

    console.log("Data 100: ", this.arrSliderImg);
  }

  ngOnInit() {
    let url = "https://app-dev.online/moments"; //window.location.href;
    let url2send = this.lookupService.init_webaddress(url);
    console.log(url2send);
    this.InitWebData(url2send);
    this.htTopDiv =
      screen.width < 500 ? screen.height - 60 : screen.height - 95;
    this.baseImgUrl = this.backendService.getImgUrl(2);
    // this.create_image_array(this.baseImgUrl);
    // this.fetchServiceInfo();
  }
}
