import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private location: Location
  ) { }
  contact:Contact;
  ngOnInit() {
    this.getContactAsync();
  }
  getContactAsync():void {
    const id= +this.route.snapshot.paramMap.get('id');
    this.contactService.getContactAsync(id).subscribe(contact=>this.contact=contact);
  }
}
