import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class BackendService {
  // private baseUrl = "assets/backendDEWS/scripts/";
  // private baseUrl = "http://localhost:8080/backendRESTAURANT/scripts/";
  // ===========================================================================
  private imgUrl = "http://localhost:8080/backendRESTAURANT/images/";
  private baseUrl = "http://localhost:8080/backendRESTAURANT/scripts/";
  private baseUrl_reservation = "http://localhost:8080/backendBOL/scripts/";
  // ===========================================================================
  // private baseUrl = "https://app-dev.online/backendRESTAURANT/scripts/";
  // private imgUrl = "https://app-dev.online/backendRESTAURANT/images/";
  // private baseUrl_reservation = "https://app-dev.online/backendBOL/scripts/";
  // 
  constructor(private http: Http) { }  
  // Submit_reservation_data

  Submit_reservation_data(data) {
    console.log("Submitted Form Data : ", data);
    return this.http
      .post(this.baseUrl_reservation + "backend_service.php", JSON.stringify(data))
      .map(response => {
        if (response.json() && response.json() != "401") {
          // console.log("Resp : ", response.json());
          return response.json();
        } else return false;
      });
  }

  SubmitData(data) {
    console.log("Submitted Form Data : ", data);
    return this.http
      .post(this.baseUrl + "backend_service.php", JSON.stringify(data))
      .map(response => {
        if (response.json() && response.json() != "401") {
          // console.log("Resp : ", response.json());
          return response.json();
        } else return false;
      });
  }
  getImgUrl(reqId) {
    let url = reqId == 1 ? this.baseUrl : reqId == 2 ? this.imgUrl : null;
    return url;
  }
}
