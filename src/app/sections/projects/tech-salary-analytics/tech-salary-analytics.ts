
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-tech-salary-analytics',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    TranslatePipe
  ],
  templateUrl: './tech-salary-analytics.html',
  styleUrls: ['./tech-salary-analytics.css']
})
export class TechSalaryAnalytics {
}
