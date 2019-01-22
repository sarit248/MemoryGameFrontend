import { Component, OnInit } from '@angular/core';
import { UserFeedback } from 'src/app/models/userFeedback';
import { UsersFeedbackService } from 'src/app/services/users-feedback.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit {
  public userFeedbacks: UserFeedback[];

  constructor(private userFeedbackService: UsersFeedbackService, private userService: UserService) { }

  ngOnInit() {
    this.userFeedbackService.GetAllFeedbacks().subscribe(feedbacks => this.userFeedbacks = feedbacks);
  }
}


