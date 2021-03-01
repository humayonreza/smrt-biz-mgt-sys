import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { BackendService } from "src/app/services/backend.service";
import { LookupService } from "src/app/services/lookup.service";

@Component({
  selector: "app-contsetup",
  templateUrl: "./contsetup.component.html",
  styleUrls: ["./contsetup.component.css"],
})
export class ContsetupComponent implements OnInit {
  OrgId: string;
  IsBS: boolean = false;
  IsSvc: boolean = false;
  SubmitMainContent: string = "Submit";
  SubmitSubCat: string = "Submit";
  ContentHead: string = "Content Title";
  ObjTypeId: string;
  LookupSvcValue: number;
  LookupSvcObjTypeId: number;
  ParentId: string;
  label1: string;
  label2: string;
  label3: string;
  label4: string;
  label5: string;
  labelSubSvc: string;
  LookupSer: number = 0;
  TxtMain: string;
  TxtSm: String;
  LookupSvcSer: number = 0;
  TxtMainSvc: string;
  RefCatId: number = 0;

  IsVisIns2: boolean = false;
  IsVisBtnGp1: boolean = true;
  IsVisBtnGp2: boolean = false;
  IsSubCat: boolean = false;
  arrContentOption: any[] = [];
  arrServiceName: any[] = [];
  arrSlider: any[] = [];
  arrImgServices: any[] = [];
  arrReview: any[] = [];
  arrBannerImg: any[] = [];
  arrSliderImg: any[] = [];
  arrServiceInfo: any[] = [];
  arrServiceHead: any[] = [];
  arrOrg: any[] = [];
  arrContentHead: any[] = [];
  arrServiceDetails: any[] = [];
  elm = null;
  UploadSequence: number = 0;
  FileContents: string;
  FileTypeId: number;
  SelectedImageObj: string;
  SelectedImageService: string;
  constructor(
    private lookupService: LookupService,
    private backendService: BackendService,
    private http: Http
  ) {}

  // Ser,OrgId,ObjTypeId,ParentId,TxtMain,TxtSm,ImgId,Val,FlagId
  create_update_sub_content(formData) {
    console.log(formData);
    let data = {
      Ser: formData.LookupSvcSer,
      OrgId: this.OrgId,
      ObjTypeId: formData.LookupSvcObjTypeId,
      ParentId: formData.LookupSvcValue,
      TxtMain: formData.TxtMainSvc,
      TxtSm: formData.TxtSm ? formData.TxtSm : "NA",
      queryId: 12,
    };
    this.submit2backend(data);
  }
  //
  create_update_content(formData) {
    let data = {
      Ser: formData.LookupSer,
      OrgId: this.OrgId,
      ObjTypeId: this.ObjTypeId,
      ParentId: 0,
      TxtMain: formData.TxtMain,
      TxtSm: formData.TxtSm ? formData.TxtSm : "NA",
      queryId: 12,
    };
    this.submit2backend(data);
  }
  //
  submit2backend(data) {
    console.log(data);
    this.lookupService.BackendService(data).subscribe((resp) => {
      if (resp) {
        console.log(resp);
        this.fetch_setup_info(resp.ObjTypeId);
        let ImageId = resp.ObjTypeId + "-" + resp.ImgId;
        this.UploadSequence == 1 || this.UploadSequence == 2
          ? this.upload_image(ImageId)
          : null;
      }
    });
  }
  //
  upload_image(ImgId) {
    this.UploadSequence = 0;
    let formData = new FormData();
    let Url = this.backendService.getImgUrl(1);
    let imgRefInfo = ImgId + this.FileContents;
    formData.append("file", this.elm.files[0], imgRefInfo);
    console.log("File Name : ", this.elm.files[0]);
    this.http
      .post(Url + "image_upload_script_setup.php", formData)
      .subscribe((res) => {
        console.log(res);
      });
  }
  //
  onFileSelected(event, sequence) {
    this.UploadSequence = sequence;
    this.elm = event.target;
    if (this.elm.files.length > 0) {
      if (this.elm.files[0].type === "image/jpeg") {
        this.FileContents = ".jpg";
        sequence == 1
          ? (this.SelectedImageObj = this.elm.files[0].name)
          : sequence == 2
          ? (this.SelectedImageService = this.elm.files[0].name)
          : null;
        this.FileTypeId = 1;
      } else if (this.elm.files[0].type === "image/png") {
        this.FileContents = ".png";
        sequence == 1
          ? (this.SelectedImageObj = this.elm.files[0].name)
          : sequence == 2
          ? (this.SelectedImageService = this.elm.files[0].name)
          : null;
      }
    }
    console.log("File Type :", this.FileContents);
  }
  //
  init(OrgId) {
    let data = {
      OrgId: OrgId,
      queryId: "11",
    };
    this.lookupService.FetchOrgMiscInfo(data).subscribe((resp) => {
      if (resp) {
        console.log("Misc Data : ", resp);
        this.arrContentOption = this.lookupService.get_arrContentOption();
      }
    });
  }
  //
  update_content(Ser, TxtMain, TxtSm, Val, ObjTypeId) {
    console.log("Input : ", Ser + " " + TxtMain + " " + TxtSm + " " + Val);
    this.TxtMain = TxtMain;
    this.TxtSm = TxtSm;
    if (ObjTypeId == "6") {
      this.labelSubSvc = "Add Title to Service";
      this.IsSubCat = true;
      this.TxtMainSvc = "";
      this.LookupSvcObjTypeId = ObjTypeId;
      this.LookupSvcValue = Val;
    } else {
      this.IsSubCat = false;
    }
  }
  //
  fetch_setup_info(ObjTypeId) {
    this.ObjTypeId = ObjTypeId;
    let data = {
      OrgId: this.OrgId,
      ObjTypeId: ObjTypeId,
      queryId: 13,
    };
    console.log("ObjType : ", data.ObjTypeId);
    this.lookupService.BackendService(data).subscribe((resp) => {
      if (resp) {
        console.log("Resp Length : ", resp.length);
        this.arrContentHead = [];
        this.arrServiceDetails = [];
        this.IsSubCat = false;
        for (let i = 0; i < resp.length; i++) {
          if (data.ObjTypeId == 6) {
            this.IsBS = true;
            this.IsVisIns2 = false;
            this.label1 = "Add Service Name";
            let k = i + 1;
            let data = {
              Ser: resp[i].Ser,
              TxtMain: resp[i].TxtMain,
              Value: resp[i].Val,
              TxtSm: resp[i].TxtSm,
              ObjTypeId: resp[i].ObjTypeId,
              Title: "Service-" + k,
            };
            resp != "401" && resp[i].ParentId == 0
              ? this.arrContentHead.push(data)
              : null;
          } else if (data.ObjTypeId == 7) {
            this.IsBS = true;
            this.IsVisIns2 = false;
            this.label1 = "Add Banner Caption";
            let k = i + 1;
            let data = {
              Ser: resp[i].Ser,
              TxtMain: resp[i].TxtMain,
              Value: resp[i].Val,
              TxtSm: resp[i].TxtSm,
              ObjTypeId: resp[i].ObjTypeId,
              Title: "Banner-" + k,
            };
            resp != "401" ? this.arrContentHead.push(data) : null;
          } else if (data.ObjTypeId == 8) {
            this.IsBS = true;
            this.IsVisIns2 = false;
            this.label1 = "Add Slider Caption";
            let k = i + 1;
            let data = {
              Ser: resp[i].Ser,
              TxtMain: resp[i].TxtMain,
              Value: resp[i].Val,
              TxtSm: resp[i].TxtSm,
              ObjTypeId: resp[i].ObjTypeId,
              Title: "Slider-" + k,
            };
            resp != "401" ? this.arrContentHead.push(data) : null;
          } else if (data.ObjTypeId == 9) {
            this.IsBS = true;

            this.label1 = "Feedback";
            this.label2 = "Client Details";
            this.IsVisIns2 = true;
            let k = i + 1;
            let data = {
              Ser: resp[i].Ser,
              TxtMain: resp[i].TxtMain,
              Value: resp[i].Val,
              TxtSm: resp[i].TxtSm,
              ObjTypeId: resp[i].ObjTypeId,
              Title: "Review-" + k,
            };
            resp != "401" ? this.arrContentHead.push(data) : null;
          } else if (data.ObjTypeId == 10) {
            let k = i + 1;
            let data = {
              Ser: resp[i].Ser,
              TxtMain: resp[i].TxtMain,
              Value: resp[i].Val,
              TxtSm: resp[i].TxtSm,
              ObjTypeId: resp[i].ObjTypeId,
              Title: "Review-" + k,
            };
            resp != "401" ? this.arrServiceDetails.push(data) : null;
          }
        }
      }
    });
  }
  //
  ngOnInit() {
    let token = JSON.parse(localStorage.getItem("token"));
    this.OrgId = token.OrgId;
    this.init(token.OrgId);
  }
}
