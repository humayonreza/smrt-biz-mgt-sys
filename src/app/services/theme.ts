
// <div class="row col-sm-12 top-bar text-center">
//     Covid Notification
// </div>
// <div class="row col-sm-12 div-navbar text-center">
//     <app-navbar></app-navbar>
// </div>
// <div class="col-sm-12 div-main text-center" style="margin-top: 20px;">
//     <div class="col-sm-12 banner">
//         <div class="col-sm-8 div-slider">
//             <div id="myCarousel" class="carousel slide" data-ride="carousel">
//                 <ol class="carousel-indicators">
//                     <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
//                     <li data-target="#myCarousel" data-slide-to="1"></li>
//                     <li data-target="#myCarousel" data-slide-to="2"></li>
//                 </ol>            
//                 <div class="carousel-inner">
//                     <div class="item active">
//                         <img class="img-slider" src="{{ imgUrl + 'slider/home/bg/001.jpg' }}" alt="Los Angeles" style="width:100%;">
//                     </div>
            
//                     <div class="item">
//                         <img class="img-slider" src="{{ imgUrl + 'slider/home/bg/002.jpg' }}" alt="Chicago" style="width:100%;">
//                     </div>
            
//                     <div class="item">
//                         <img class="img-slider" src="{{ imgUrl + 'slider/home/bg/003.jpg' }}" alt="New york" style="width:100%;">
//                     </div>
//                 </div>
            
//                 <a class="left carousel-control" href="#myCarousel" data-slide="prev">
//                     <span class="glyphicon glyphicon-chevron-left"></span>
//                     <span class="sr-only">Previous</span>
//                 </a>
//                 <a class="right carousel-control" href="#myCarousel" data-slide="next">
//                     <span class="glyphicon glyphicon-chevron-right"></span>
//                     <span class="sr-only">Next</span>
//                 </a>
//             </div>
//         </div>
//         <div class="col-sm-4 div-sidebar" style="color:#836818;background-image: linear-gradient(to top, #eee , #aaa); margin-top: 3px;">
//             <h1>Our Story</h1>
//             <div class="txt-bg">
//                 Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum,
//                 altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et.
//                 Inciderint efficiantur his ad. Eum no molestiae voluptatibus
//             </div>
//         </div>
//     </div>
//     <div class="col-sm-12 banner">
//         <h1>Our Service</h1>
//         <div class="div-services">
//             <div class="row text-center slideanim">
//                 <div class="col-sm-3 frameA">
//                     <div class="thumbnail">
//                         <img class="img-frameA" id="RefElmX" src="{{ imgUrl + 'banner/home/bg/001.jpg' }}" alt="Los Angeles" width="100%"
//                         height="auto"> 
//                         <h4>Casual Walk-in</h4>           
//                     </div>
//                 </div>
//                 <div class="col-sm-3 frameA">
//                     <div class="thumbnail">
//                         <img class="img-frameA" src="{{ imgUrl + 'banner/home/bg/002.jpg' }}" alt="Los Angeles" width="100%" height="auto"> 
//                         <h4>Corporate Timeout</h4>
//                     </div>
//                 </div>
//                 <div class="col-sm-3 frameA">
//                     <div class="thumbnail">
//                         <img class="img-frameA" src="{{ imgUrl + 'banner/home/bg/003.jpg' }}" alt="Los Angeles" width="100%" height="auto"> 
//                         <h4>Events & Party</h4>
//                     </div>
//                 </div>
//                 <div class="col-sm-3 frameA">
//                     <div class="thumbnail">
//                         <img class="img-frameA" src="{{ imgUrl + 'banner/home/bg/003.jpg' }}" alt="Los Angeles" width="100%" height="auto"> 
//                         <h4>Takeway Service</h4>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
    
//     <div class="col-sm-12">
//         <div class="col-sm-4 frameA text-left" style="height: 400px;">
//             <div class="col-sm-12 txt-xl text-center">Contact Us</div>
//             <div class="col-sm-12 txt-sm">
//                 <span class="glyphicon glyphicon-map-marker" style="margin-right:10px;"></span>
//                 24 Sunset Street Sydney, Au
//             </div>
//             <div class="col-sm-12 txt-sm">
//                 <span class="glyphicon glyphicon-phone-alt" style="margin-right:10px;"></span>
//                 02 - 0234 0456
//             </div>
//             <div class="col-sm-12 txt-sm">
//                 <span class="glyphicon glyphicon-envelope" style="margin-right:10px;"></span>
//                 moments@gmail.com
//             </div>
//             <form #c="ngForm" (ngSubmit)="send_msg(c.value)" autocomplete="off">
//                 <div class="col-sm-12" style="margin-top: 5px;">
//                     <input type="text" id="ClientName" name="ClientName" [(ngModel)]="ClientName" class="form-control" placeholder="Your Name" required />
//                     <span class="glyphicon glyphicon-user form-control-feedback" style="margin-right: 20px;"></span>
//                 </div>
//                 <div class="col-sm-12" style="margin-top: 5px;">
//                     <input type="text" id="ClientEmail" name="ClientEmail" [(ngModel)]="ClientEmail" class="form-control" placeholder="Your Email"  required />
//                     <span class="glyphicon glyphicon-envelope form-control-feedback" style="margin-right: 20px;"></span>
//                 </div>
//                 <div class="col-sm-12" style="margin-top: 5px;">
//                     <textarea rows="3" type="text" id="ClientMsg" name="ClientMsg" [(ngModel)]="ClientMsg" class="form-control" placeholder="Your Message" required></textarea>
//                     <span class="glyphicon glyphicon-edit form-control-feedback" style="margin-right: 20px;"></span>
//                 </div>
//                 <div class="col-sm-12" style="margin-top: 10px;">
//                     <button type="submit" class="btn btn-default">
//                         Send
//                         <span class="glyphicon glyphicon-send" style="margin-left: 10px;"></span>
//                     </button>
//                 </div>
//             </form>
//         </div>
//         <div class="col-sm-4 frameA" style="height: 400px;">
//             <div class="col-sm-12 txt-xl text-center">Location</div>
//             <div class="col-sm-12">
//                 <mat-tab-group>
//                     <mat-tab label="Map">
//                         <div class="row tab-panel">
//                             <div class="col-sm-12 text-center div-map">
//                                 <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
//                                     <agm-marker [latitude]="lat" [longitude]="lng">
//                                         <agm-info-window>
//                                             <div>
//                                                 <h4>Moments</h4>
//                                             </div>
//                                             <div>{{ address }}</div>
//                                         </agm-info-window>
//                                     </agm-marker>
//                                 </agm-map>
//                             </div>
//                         </div>
//                     </mat-tab>
//                     <mat-tab label="Parking">
//                         <div class="col-sm-12 txt-bg text-left">Parking Option</div>
//                         <div class="col-sm-12 txt-sm text-left">
//                             <i class='fas fa-car' style='font-size:20px'></i>&nbsp;&nbsp; Westfield Carpark
//                         </div>
//                         <div class="col-sm-12 txt-sm text-left">
//                             <i class='fas fa-car' style='font-size:20px'></i>&nbsp;&nbsp; Car Park, Woolworths
//                         </div>
//                         <div class="row col-sm-12" style="margin-top: 10px;">
//                             <img src="{{ imgUrl + 'banner/home/bg/003.jpg' }}" alt="Los Angeles" width="100%" height="250">
//                         </div>
//                     </mat-tab>
//                 </mat-tab-group>
//             </div>
//         </div>
//         <div class="col-sm-4 frameA txt-sm" style="height: 400px;">
//             <div class="col-sm-12 txt-xl text-center">Operating Hour</div>
//             <table width="100%" class="table table-hover table-bordered table-condensed">
//                 <thead>
//                     <tr>
//                         <th class="text-left">Day</th>
//                         <th class="text-left">Lunch</th>
//                         <th class="text-left">Dinner</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr *ngFor="let data of arrWkTimeTable">
//                         <td class="text-left">{{ data.viewValue }}</td>
//                         <td class="text-left">{{ data.Lunch }}</td>
//                         <td class="text-left">{{ data.Dinner }}</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     </div>
//     <div class="col-sm-12">
//         <div class="div-footer">Footer</div>
//     </div>
// </div>
