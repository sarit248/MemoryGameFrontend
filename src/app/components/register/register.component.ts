import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({

  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public user: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() { }

  send() {
    if (!this.user.userName || !this.user.password || !this.user.fullName) {
      Swal('Registeraion', 'One of the areas is missing, try again', 'error');
      console.error('One of the necessary areas is missing');

    } else {
      this.userService.addUser(this.user).subscribe(u => {
        if (u) {
          Swal('Registeraion', 'Thanks for registering, please log-in', 'success');
          this.router.navigate(['/login']);
        }
      });
    }

  }
}

