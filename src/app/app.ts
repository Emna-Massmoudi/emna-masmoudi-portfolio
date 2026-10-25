import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Parcours } from './sections/parcours/parcours';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { RouterOutlet } from '@angular/router';
import { Experience } from './sections/experience/experience';
import { Distinction } from './sections/distinction/distinction';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private translate = inject(TranslateService);

  isEnglish = false;

  toggleLanguage(): void {
    this.isEnglish = !this.isEnglish;

    this.translate.use(this.isEnglish ? 'en' : 'fr');
  }
}