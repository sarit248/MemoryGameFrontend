import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({

  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user: User = new User();

  // registerForm: FormGroup;
  // submitted = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

    // this.registerForm = this.formBuilder.group({
    //   fullName: ['', '', Validators.required],
    //   lastName: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6)]],
    // });
  }

  // convenience getter for easy access to form fields
  // get f() { return this.registerForm.controls; }



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

