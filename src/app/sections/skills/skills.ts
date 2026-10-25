import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  readonly featured = {
    key: 'AI',
    skills: [
      { name: 'Deep Learning', symbol: 'DL' },
      { name: 'OCR', symbol: 'OCR' },
      { name: 'RAG', symbol: 'RAG' },
      { name: 'LLM', symbol: 'LLM' },
      { name: 'Data Preprocessing', symbol: 'DP' }
    ]
  };

  readonly categories = [
    {
      key: 'CODE',
      skills: [
        { name: 'Python', symbol: 'Py' },
        { name: 'Java', symbol: 'Jv' },
        { name: 'PHP', symbol: 'PHP' },
        { name: 'JavaScript', symbol: 'JS' }
      ]
    },
    {
      key: 'FRAMEWORKS',
      skills: [
        { name: 'Angular', symbol: 'Ng' },
        { name: 'React.js', symbol: 'Re' },
        { name: 'Flutter', symbol: 'Fl' },
        { name: 'Spring Boot', symbol: 'SB' },
        { name: '.NET', symbol: '.NET' },
        { name: 'Laravel', symbol: 'Lv' }
      ]
    },
    {
      key: 'DATABASES',
      skills: [
        { name: 'MySQL', symbol: 'My' },
        { name: 'SQL Server', symbol: 'SQL' },
        { name: 'SQLite', symbol: 'SQ' },
        { name: 'Neo4j', symbol: 'N4j' }
      ]
    },
    {
      key: 'TOOLS',
      wide: true,
      skills: [
        { name: 'Git/GitHub', symbol: 'Git' },
        { name: 'Docker', symbol: 'DK' },
        { name: 'Linux', symbol: 'Lx' },
        { name: 'Postman', symbol: 'Pm' },
        { name: 'Swagger', symbol: 'Sw' },
        { name: 'VS Code', symbol: 'VS' },
        { name: 'IntelliJ IDEA', symbol: 'IJ' },
        { name: 'Eclipse', symbol: 'Ec' },
        { name: 'Android Studio', symbol: 'AS' },
        { name: 'Power BI', symbol: 'BI' },
        { name: 'Odoo', symbol: 'Od' }
      ]
    },
    {
      key: 'METHODS',
      skills: [
        { name: 'Agile Scrum', symbol: 'AG' }
      ]
    }
  ];

  readonly domainCount = this.categories.length + 1;

  readonly skillCount =
    this.featured.skills.length +
    this.categories.reduce((total, category) => total + category.skills.length, 0);
}