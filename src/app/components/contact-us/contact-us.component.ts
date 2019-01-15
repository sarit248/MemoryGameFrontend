import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Router } from '@angular/router';
import { Message } from '../../models/message';
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
    }
    this.contact.dateAdded = new Date();
    this.messageService.AddMessage(this.contact).subscribe(
      data => {
        if (data) {
          swal('Message', 'Thanks for messaging us, we will be in touch soon', 'success');
        }
      });
  }
}



