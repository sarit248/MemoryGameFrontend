import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersFeedbackService } from '../../services/users-feedback.service';
import { UserFeedback } from '../../models/userFeedback';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import swal from 'sweetalert2';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  public feedback: UserFeedback = new UserFeedback();
  public feedbackUser: User = new User();

  constructor(private usersFeedbackService: UsersFeedbackService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('userID')) {
      const userID = Number(sessionStorage.getItem('userID'));

      this.userService.getOneUser(userID).subscribe(user => {
        this.feedbackUser = user;
      });
    } else {
      swal('Login', 'Please login', 'error');
      this.router.navigate(['/login']);
    }
  }


  send() {
    if (!this.feedback.feedbackText) {
      console.error('One of the necessary areas is missing');
      swal('Feedback', 'The feedback area is empty, please fill it in', 'error');
    } else {
      this.feedback.feedbackDate = new Date();
      this.feedback.userID = this.feedbackUser.userID;
      this.usersFeedbackService.AddFeedback(this.feedback).subscribe(
        data => {
          if (data) {
            swal('Feedback', 'Thanks for your feedback', 'success');
          }
        });
    }
  }
}





