import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-sinistre-prediction',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './sinistre-prediction.html',
  styleUrl: './sinistre-prediction.css'
})
export class SinistrePrediction{}