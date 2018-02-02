import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  title='Contact list';
  contacts: Contact[];
  selectedContact:Contact;
  onSelectContact(contact:Contact){
    this.selectedContact=contact;
  }
  constructor(private contactService:ContactService) { }

  ngOnInit() {
    this.getContactsAsync();
  }
  
  getContacts():void {
    this.contacts=this.contactService.getContacts();
  }
  getContactsAsync():void {
    
    this.contactService.getContactsAsync().subscribe(contact=>this.contacts=contact);
  }
 
}
