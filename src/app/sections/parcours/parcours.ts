import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-parcours',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './parcours.html',
  styleUrl: './parcours.css',
})
export class Parcours {}