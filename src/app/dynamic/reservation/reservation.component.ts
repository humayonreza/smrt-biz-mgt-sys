// import { Component, OnInit } from '@angular/core';
// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-reservation',
//   templateUrl: './reservation.component.html',
//   styleUrls: ['./reservation.component.css']
// })
// export class ReservationComponent implements OnInit {
//   url: string = "https://app-dev.online/quickreserve/";
//   urlSafe: SafeResourceUrl;
//   constructor(
//     public sanitizer: DomSanitizer, public router : Router
//   ) { }

//   open_page(page_id) {
//     page_id == 1 ? this.router.navigate(["/reservation"]) 
//       : page_id == 2 ? this.router.navigate(["/menu"])
//       : page_id == 3 ? this.router.navigate(["/takeaway"])
//       : null;   
//   }
//   ngOnInit() {
//     this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
//   }
// }


// 
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from "../modal/modal.component";
import { BackendService } from "src/app/services/backend.service";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  constructor(
    private router: Router,
    private backendService: BackendService,
    public dialog: MatDialog
  ) {}
  // =================================================================================
  ClientName: string = "Moments";
  FullName: string;
  Email: string;
  ContactNo: string;
  BookingDate: string;
  BookingTime: string;
  TotalGuest: string;
  ArrBookingSlot: any[] = [];
  ArrSelectedBookingSlot: any[] = [];
  ClientId: number;
  SessionId: number;
  BookingSlot: string;
  str: string;
  SplNote: string;
  isLinear = false;
  EventName: string;
  viewSlots: boolean = false;
  onErr: boolean = false;
  isReserveFull: boolean = false;
  isSubmit: boolean = false;
  panelOpenState: boolean;
  class_lunch: number;
  class_dinner: number;
  SelectedBookingSlot: string = "Select Time";
  MessageOnUnsuccess: string;
  
  Capacity: number = 10;
  // =================================================================================
  open_page(page_id) {
    page_id == 1 ? this.router.navigate(["/reservation"]) 
      : page_id == 2 ? this.router.navigate(["/menu"])
      : page_id == 3 ? this.router.navigate(["/takeaway"])
      : null;   
  }
  // openDialog(): void {
  //   let data = {
  //     OrgName: this.ClientName,
  //     EventName: this.EventName,
  //     BookingDate: this.BookingDate,
  //     BookingTime: this.BookingTime,
  //     TotalGuest: parseInt(this.TotalGuest),
  //     FullName: this.FullName,
  //     ContactNo: this.ContactNo,
  //     Email: this.Email,
  //   };
  //   const dialogRef = this.dialog.open(ModalComponent, {
  //     width: "400px",
  //     height: "450px",
  //     data: data, //1,
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       console.log(result);
  //       return result;
  //     }
  //   });
  // }

  getReservationState(slot_time, total_booked) {
    let index = this.ArrSelectedBookingSlot.findIndex(
      (p) => p.SlotTime == slot_time
    );
    this.ArrSelectedBookingSlot[index].ReservationState =
      this.Capacity - total_booked;
    this.ArrSelectedBookingSlot[index].check = 1;
  }

  get_ReservationState_By_Date_Session(sess_id) {
    for (let i = 0; i < this.ArrSelectedBookingSlot.length; i++) {
      this.ArrSelectedBookingSlot[i].check = 0;
    }
    let data = {
      clientId: this.ClientId,
      bookingDate: this.BookingDate,
      sessionId: sess_id,
      queryId: "3",
    };
    this.backendService.Submit_reservation_data(data).subscribe((result) => {
      console.log("Received Summary : ", result);
      if (!result) {
        for (let i = 0; i < this.ArrSelectedBookingSlot.length; i++) {
          this.ArrSelectedBookingSlot[i].ReservationState = this.Capacity;
        }
      } else {
        for (let i = 0; i < result.length; i++) {
          this.getReservationState(result[i].SlotTime, result[i].Total_Booked);
        }
        for (let i = 0; i < this.ArrSelectedBookingSlot.length; i++) {
          this.ArrSelectedBookingSlot[i].check == 0
            ? (this.ArrSelectedBookingSlot[i].ReservationState = this.Capacity)
            : null;
        }
      }
      console.log("Booking Status : ", this.ArrSelectedBookingSlot);
    });
  }
  // getdate() {
  //   this.BookingDate = "04/23/2020";
  // }
  selectSession(val) {
    if (!this.BookingDate || !this.TotalGuest) {
      this.onErr = true;
      this.viewSlots = false;
    } else {
      this.onErr = false;
      this.SessionId = parseInt(val);
      this.ArrSelectedBookingSlot = [];
      this.SelectedBookingSlot = "";
      val == 3
        ? (this.viewSlots = false)
        : val == 1
        ? ((this.class_lunch = 1),
          (this.class_dinner = 0),
          (this.EventName = "Lunch"),
          (this.viewSlots = true),
          (this.ArrSelectedBookingSlot = this.ArrBookingSlot.filter(
            (m) => m.SessionId == val
          )))
        : ((this.class_lunch = 0),
          (this.class_dinner = 1),
          (this.EventName = "Dinner"),
          (this.viewSlots = true),
          (this.ArrSelectedBookingSlot = this.ArrBookingSlot.filter(
            (m) => m.SessionId == val
          )));
      this.get_ReservationState_By_Date_Session(val);
    }
  }

  setBookingTime(SlotTime) {
    this.BookingTime = SlotTime;
    let index = this.ArrSelectedBookingSlot.findIndex(
      (p) => p.SlotTime == SlotTime
    );
    if (this.ArrSelectedBookingSlot[index].ReservationState <= 0) {
      this.isReserveFull = true;
      this.isSubmit = false;
      this.MessageOnUnsuccess = "Reservation is Full. Check Another Slot";
    } else {
      let newReservationState =
        this.Capacity -
        parseInt(this.ArrSelectedBookingSlot[index].ReservationState) +
        parseInt(this.TotalGuest);
      console.log("newReservationState : ", newReservationState);
      if (newReservationState > this.Capacity) {
        // let AvailableReservation =;
        this.MessageOnUnsuccess =
          "Maximum Available Capacity for the Slot , " +
          this.ArrSelectedBookingSlot[index].ReservationState +
          ". Unable to Process.";
        this.isReserveFull = true;
        this.isSubmit = false;
      } else {
        this.isReserveFull = false;
        this.isSubmit = true;
        this.BookingSlot = SlotTime;
        this.SelectedBookingSlot = "Time : " + this.BookingSlot + " pm";
        for (let i = 0; i < this.ArrSelectedBookingSlot.length; i++) {
          this.ArrSelectedBookingSlot[i].SlotTime == SlotTime
            ? (this.ArrSelectedBookingSlot[i].BtnColor = "IsActiveColor")
            : (this.ArrSelectedBookingSlot[i].BtnColor = "IsNotActiveColor");
        }
      }
    }
  }

  // 
  // openDialog(TypeId, QueryId, QueryTxt): void {
    
  //   const dialogRef = this.dialog.open(ModalComponent, {
  //     width: '500px',
  //     data: { PageId: 1, TypeId : TypeId, QueryId: QueryId , QueryTxt : QueryTxt },
  //     // backdropClass: 'backdropBackground',      
  //   });

  //   // dialogRef.afterClosed().subscribe(result => {
  //   //   console.log('The dialog was closed');
  //   // });
  // }
  // 
  processBookingRequest(info, qId) {
    let modalData = {
      OrgName: this.ClientName,
      EventName: this.EventName,
      BookingDate: this.BookingDate,
      BookingTime: this.BookingTime,
      TotalGuest: parseInt(this.TotalGuest),
      FullName: info.FullName,
      ContactNo: info.ContactNo,
      Email: info.Email,
    };
    const dialogRef = this.dialog.open(ModalComponent, {
      width: "450px",
      height: "500px",
      // data: modalData, //1,
      data: { PageId: 4, TypeId : 1, QueryId: qId, QueryTxt : modalData },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == 2001) {
        console.log(result);
        this.submitBookingInfo(info);
      } else {
        this.resetBookingForm();
      }
    });
  }

  submitBookingInfo(info) {
    let data = {
      clientId: this.ClientId,
      sessionId: this.SessionId,
      bookingDate: info.BookingDate,
      totalGuest: parseInt(info.TotalGuest),
      splNote: info.SplNote ? info.SplNote : "NA",
      slotTime: info.BookingSlot,
      fullName: info.FullName,
      contactNo: info.ContactNo,
      email: info.Email,
      queryId: "2",
    };
    console.log("Processed Data : ", info);
    this.backendService.Submit_reservation_data(data).subscribe((result) => {
      console.log("Submit Response : ", result);
      if (result) {
        this.resetBookingForm();
        this.processBookingRequest("", 2);
      } else {
        console.log("No Data...");
      }
    });
  }

  resetBookingForm() {
    this.BookingDate = "";
    this.TotalGuest = "";
    this.SplNote = "";
    this.viewSlots = false;
    this.class_lunch = 0;
    this.class_dinner = 0;
    this.SelectedBookingSlot = "";
  }

  get_registered_client_details(id) {
    let data = {
      clientId: id,
      queryId: "1",
    };

    this.backendService.Submit_reservation_data(data).subscribe((result) => {
      for (let i = 0; i < result.length; i++) {
        let data = {
          Ser: result[i].Ser,
          ClientId: result[i].ClientId,
          SessionId: result[i].SessionId,
          SlotTime: result[i].SlotTime,
          ReservationState: this.Capacity,
          check: 0,
          BtnColor: "default",
        };
        this.ArrBookingSlot.push(data);
      }
      console.log("Response : ", this.ArrBookingSlot);
    });
  }

  ngOnInit() {
    let encodedString = localStorage.getItem("data");
    let decodedString = atob(encodedString);
    let str = decodedString.split("#");
    console.log(decodedString); // Outputs: "Hello World!"
    this.ClientName = str[0];
    this.ClientId = 1001;//parseInt(str[1]);
    console.log(this.ClientId + " " + this.ClientName);
    this.get_registered_client_details(this.ClientId);
  }
}

