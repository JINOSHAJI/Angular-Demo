import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class ContactService {

  constructor(private messageService:MessageService) { }

  getContacts() :Contact[]{
    return CONTACTS;
  }

  getContactsAsync() :Observable<Contact[]>{
    this.messageService.add('Fetched Contacts');
    return of(CONTACTS);
  }
  getContactAsync(id:number) : Observable<Contact>{
    this.messageService.add(`Fetched Contact id:${id}`);
    return of(CONTACTS.find(contact=>contact.id==id));
  }

}
