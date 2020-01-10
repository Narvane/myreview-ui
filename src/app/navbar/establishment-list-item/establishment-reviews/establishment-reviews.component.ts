import { UserService } from './../../../service/user.service';
import { ReviewService } from './../../../service/review.service';
import { EstablishmentService } from './../../../service/establishment.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-establishment-reviews',
  templateUrl: './establishment-reviews.component.html',
  styleUrls: ['./establishment-reviews.component.css']
})
export class EstablishmentReviewsComponent implements OnInit {
  public establishmentId;
  establishment;
  reviews = [];
  user;

  stars;
  comment;


  constructor(private establishmentService: EstablishmentService, private route: ActivatedRoute, private reviewService: ReviewService, private userService: UserService, private modalService: NgbModal) { 
    this.route.params.subscribe(params => this.establishmentId = params['id'])
  }

  ngOnInit() {
    this.establishmentService.getEstablishment(this.establishmentId)
    .subscribe(response => this.establishment = <any> response)

    this.reviewService.getReviewsByEstablishments(this.establishmentId)
    .subscribe(response => this.reviews = <any> response)

  }
  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  postReview(){
    
  }
}
