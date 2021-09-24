import {Component, Input, OnInit} from "@angular/core";
import {Contact} from "../page/contact/contact.class";
import {ContactService} from "../page/contact/contact.service";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login-form',
  templateUrl: './login-form.template.html',
  styleUrls: ['./login-form.style.css']
})
export class LoginFormComponent implements OnInit {

  @Input() contact: Contact = new Contact; // propriété d'entrée du composant

  message: string = 'Vous êtes déconnecté. (admin/admin)';
  name: string = '';
  password: string = '';

  constructor(public loginService: LoginService, private router: Router) {}

  ngOnInit(): void { }

  // Informe l'utilisateur sur son authentfication.
  setMessage() {
    this.message = this.loginService.isLoggedIn ?
      'Vous êtes connecté.' : 'Identifiant ou mot de passe incorrect.';
  }

  login() {
    this.message = 'Tentative de connexion en cours ...';
    this.loginService.login(this.name, this.password).subscribe(() => {
      this.setMessage();
      if (this.loginService.isLoggedIn) {
        // Récupère l'URL de redirection depuis le service d'authentification
        // Si aucune redirection n'a été définis, redirige l'utilisateur vers la liste des pokemons.
        // let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/pokemon/all';
        // Redirige l'utilisateur

        let url = '/admin';
        this.router.navigate([url]);
      } else {
        this.password = '';
      }
    });
  }

  logout() {
    this.loginService.logout();
    this.setMessage();
  }
}
