
import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Hero } from '../hero/hero';
import { Parcours } from '../parcours/parcours';
import { Projects } from '../projects/projects';
import { Experience } from '../experience/experience';
import { Distinction } from '../distinction/distinction';
import { Contact } from '../contact/contact';
import { Skills } from '../skills/skills';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    TranslatePipe,
    Hero,
    Parcours,
    Projects,
    Experience,
    Distinction,
    Contact,
    Skills
],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
  private translate = inject(TranslateService);

  isEnglish = false;

  toggleLanguage(): void {
    this.isEnglish = !this.isEnglish;
    this.translate.use(this.isEnglish ? 'en' : 'fr');
  }
  get cvUrl(): string {
  return this.isEnglish
    ? '/CV/Resume-Emna Masmoudi.pdf'
    : '/CV/Emna_Masmoudi.pdf';
}
}
