import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
// import { BackendService } from "../services/backend.service";
// import { LayoutService } from "../services/layout.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;
  category: number;
  loggedUnit: number;
  constructor(
    private router: Router,
    private authService: AuthService) { }
  //
  sigin(data) {
    this.authService.login(data).subscribe((result) => {
      if (result) {
        this.invalidLogin = false;
        let mySplitResult = result.split(".");
        // let SecStr = mySplitResult[0];
        // let decodedSecString = atob(SecStr);
        // let sStr = JSON.parse(decodedSecString);
        let loginData = mySplitResult[1];
        let decodedString = atob(loginData);
        let data = JSON.parse(decodedString);
        let IsAllowed = data.SecStr == 'gd$k2!' ? true : false;
        console.log(IsAllowed);
        if (IsAllowed) {
          // localStorage.setItem("token", data);
          localStorage.setItem("token", JSON.stringify(data));
          this.router.navigate(["/content-setup"]);
        }
        // this.router.navigate(["/menu-details"], {
        // queryParams: { data },
        // });      
      } else this.invalidLogin = true;
    });
  }
  ngOnInit() {
    
  }
}

// : category == 2 || category == 4
// ? this.router.navigate(["/adcp"])
// : category == 3
// ? this.router.navigate(["/encon"])
// : category == 5
// ? this.router.navigate(["/adoc"])
// : category == 6
// ? this.router.navigate(["/tts"])
