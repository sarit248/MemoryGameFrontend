import { Component, OnInit } from '@angular/core';
// import { MessageService } from 'src/app/services/message.service';
import { MessageService } from '../../services/message.service';

import { Router } from '@angular/router';
// import { Message } from 'src/app/models/message';
import { Message } from '../../models/message';

import { Form } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  public contact: Message = new Message();

  constructor(private messageService: MessageService, private router: Router) { }

  ngOnInit() { }

  send() {
    if (!this.contact.phone || !this.contact.message) {
      swal('Message', 'One of the areas is missing, try again', 'error');
      console.error('One of the necessary areas is missing');
      // return;
    }
    this.contact.dateAdded = new Date();
    this.messageService.AddMessage(this.contact).subscribe(
      data => {
        if (data) {
          swal('Message', 'Thanks for messaging us, we will be in touch soon', 'success');
        }
      });
    // this.form.reset();
  }
}



// onSubmit() {
//   if (this.myform.valid) {
//     console.log("Form Submitted!");
//     this.myform.reset();
//   }
// }
