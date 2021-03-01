import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public router: Router) { }
  open_page(page_id) {
    page_id == 1 ? this.router.navigate(["/reservation"]) 
      : page_id == 2 ? this.router.navigate(["/menu"])
      : page_id == 3 ? this.router.navigate(["/takeaway"])
      : null;   
  }
  ngOnInit() {
  }

}
