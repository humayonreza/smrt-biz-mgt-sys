import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  // private baseUrl = "assets/backendDEWS/scripts/";
  // private baseUrl = "http://localhost:8080/backendRESTAURANT/scripts/";
  // ===========================================================================
  // private imgUrl = "http://localhost:8080/backendRESTAURANT/images/";
  private baseUrl = "http://localhost:8080/backendRESTAURANT/scripts/";
  // ===========================================================================
  // private baseUrl = "https://app-dev.online/backendRESTAURANT/scripts/";
  // private imgUrl = "https://app-dev.online/backendRESTAURANT/images/";

  arrSigninInfo: any[] = [];

  constructor(private http: Http, private router: Router) { }

  login(credentials) {
    console.log("Login Resp : ", credentials);
    return this.http
      .post(this.baseUrl + "auth.php", JSON.stringify(credentials))
      .map(response => {
        let result = response.json();
        if (result && result != "401") {
          // let mySplitResult = result.split(".");
          // let loginData = mySplitResult[1];
          // localStorage.setItem("token", loginData);
          console.log("Login Resp : ", result);
          return result;
        }
        return false;
      });
  }

  isLoggedIn() {
    let token = localStorage.getItem("token");
    if (!token) {
      return false;
    } else {
      return true;
    }
  }

  fetch_signin_info(qureyId) {
    let token = localStorage.getItem("token");
    if (!token) {
      return null;
    } else {
      let decodedString = atob(token);
      let data = JSON.parse(decodedString);
      let str = qureyId == 1 ? data.OrgId
        : qureyId == 2 ? data.OrgType
          : qureyId == 3 ? data.OrgName
            : qureyId == 4 ? data.OrgSlogan
              : qureyId == 5 ? data.OrgAddress
                : qureyId == 6 ? data.OrgEmail
                  : qureyId == 7 ? data.OrgContact
                    : qureyId == 8 ? data.OrgChainId
                      : qureyId == 9 ? data.FullName
                        : null;
      return str;
    }
  }

  // FullName: "Steave Wonder"
  // OrgAddress: "233 Flemington Road"
  // OrgChainId: "101"
  // OrgContact: "0450819211"
  // OrgEmail: "moments@gmail.com"
  // OrgId: "1001"
  // OrgName: "Moments"
  // OrgType: "1"
  // PasswordCreateDate: "2020-10-08"
  // SecStr: "gd$k2!"
  // Ser: "1"
  // Slogan: "always for you"
  // TechCantactName: "Humayon Reza"
  // TechContact: "0324433192"
  // UserType: "1"
  
  logout(data) {
    return this.http
      .post(this.baseUrl + "backend_service.php", JSON.stringify(data))
      .map(response => {
        let result = response.json();
        console.log("Login Resp : ", result);
        if (result && result != "401") {
          localStorage.removeItem("token");
          this.router.navigate(["/"]);
          return result;
        }
        return "401";
      });
  }
}
