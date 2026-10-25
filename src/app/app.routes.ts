import { Routes } from '@angular/router';
import { Portfolio } from './sections/portfolio/portfolio';
import { Medscan } from './sections/projects/medscan/medscan';
import { Edulearn } from './sections/projects/edulearn/edulearn';
import { SinistrePrediction } from './sections/projects/sinistre-prediction/sinistre-prediction';
import { TechSalaryAnalytics } from './sections/projects/tech-salary-analytics/tech-salary-analytics';

export const routes: Routes = [
  {
    path: '',
    component: Portfolio
  },
  {
    path: 'medscan',
    component: Medscan
  },
  {
    path: 'edulearn',
    component: Edulearn
  },
  {
    path: 'sinistre-prediction',
    component: SinistrePrediction
  },  
  {
    path: 'tech-salary-analytics',
    component: TechSalaryAnalytics
  },
  {
    path: '**',
    redirectTo: ''
  }
];