import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  constructor(private router: Router) {}

  openProject(project: string): void {
  this.router.navigate(['/', project]);
}
}