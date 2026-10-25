import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-edulearn',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './edulearn.html',
  styleUrl: './edulearn.css'
})
export class Edulearn {}