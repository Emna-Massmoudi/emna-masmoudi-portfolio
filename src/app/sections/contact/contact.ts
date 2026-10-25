import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  readonly email = 'emna.masmoudii@iit.ens.tn';

  readonly phone = '+216 22 342 111';
  readonly phoneHref = 'tel:+21622342111';

  // ⚠ vérifie que ce lien correspond bien à ton profil
  readonly linkedin = 'https://www.linkedin.com/in/emna-masmoudi-18b1aa264/?isSelfProfile=true';

  // ⚠ remplace par ton vrai lien GitHub
  readonly github = 'https://github.com/Emna-Massmoudi';

  readonly year = new Date().getFullYear();
}