import { Component } from "@angular/core";
import {Input, OnInit} from "@angular/core";
import {Contact} from "./contact.class";

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.template.html',
  styleUrls: ['./contact-form.style.css']
})
export class ContactFormComponent implements OnInit {

  @Input() contact: Contact = new Contact; // propriété d'entrée du composant

  constructor() {
  }

  ngOnInit() {
    // si on doit charger des données pour le formulaire
  }

  // La méthode appelée lorsque le formulaire est soumis.
  onSubmit(): void {
    console.log("Submit form !");
    console.log(this.contact);
  }
}
