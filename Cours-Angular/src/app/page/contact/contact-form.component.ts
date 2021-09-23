import {Component, DoCheck} from "@angular/core";
import {Input, OnInit} from "@angular/core";
import {Contact} from "./contact.class";
import {ContactService} from "./contact.service";

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.template.html',
  styleUrls: ['./contact-form.style.css']
})
export class ContactFormComponent implements OnInit {

  @Input() contact: Contact = new Contact; // propriété d'entrée du composant

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  // La méthode appelée lorsque le formulaire est soumis.
  onSubmit(): void {
    console.log("Submit form !");
    console.log(this.contact);

    this.contactService.addContact(this.contact).subscribe(
      response => {
        console.log(response)
      }
    );

    this.contactService.getContacts().subscribe(
      contacts => console.log(contacts)
    );
  }
}
