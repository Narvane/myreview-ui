//import { Review } from './../../../../models/review';
import { ReviewService } from './../../../../service/review.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule  } from '@angular/forms';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  public reviewForm;
  constructor(private formBuilder: FormBuilder, private reviewService: ReviewService) { 
    this.reviewForm = this.formBuilder.group({
      stars: '',
      comment: ''
    });
  }

  ngOnInit() {
  }
/* 
  postReview(){
    let review = new Review();
    review.user = '1';
    review.stars = this.reviewForm.stars;
    review.comment = this.reviewForm.comment;
    this.reviewService.postReview(review);
  } */
}
