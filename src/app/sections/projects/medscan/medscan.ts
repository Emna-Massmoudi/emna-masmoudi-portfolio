
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-medscan',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './medscan.html',
  styleUrl: './medscan.css'
})
export class Medscan {}
