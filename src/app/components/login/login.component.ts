import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: User = new User();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  send() {
    if (!this.user.userName || !this.user.password) {
      Swal('Login', 'One of the areas is missing, try again', 'error');
    } else {
      this.userService.getUser(this.user).subscribe(user => {
        if (user) {
          sessionStorage.setItem('userID', user.userID.toString());
          this.router.navigate(['/home']);
        } else {
          Swal('Login', 'Incorrect user-name or password, please fill in and try again', 'error');
        }
      });
    }
  }


}
