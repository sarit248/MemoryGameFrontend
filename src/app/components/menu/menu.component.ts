import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public login = true;
  public navigations: Array<string>;


  constructor(private router: Router) { }

  ngOnInit() {
    this.navigations = [
      'Entrance',
      'Game',
      'Game-Results',
      'Feedback',
      'Feedbacks',
      'Contact-Us',
      'About',
    ];
  }

  logOut() {
    sessionStorage.removeItem('userID');
    this.router.navigate(['/entrance']);
  }

  // logIn() {
  //   this.router.navigate(['/login']);
  // }
}
