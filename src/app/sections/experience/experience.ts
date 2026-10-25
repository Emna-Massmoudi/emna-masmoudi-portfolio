import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild,
  computed,
  inject,
  signal
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * Catalogue des technologies.
 * La clé sert de clé de traduction : EXPERIENCE.TECH.<CLÉ>.ROLE / .TEXT
 */
interface Tech {
  name: string;
  /** texte court affiché dans le carré de la fenêtre */
  symbol: string;
}

const TECH: Record<string, Tech> = {
  PYTHON:     { name: 'Python',      symbol: 'Py'   },
  FASTAPI:    { name: 'FastAPI',     symbol: 'API'  },
  DOTNET:     { name: '.NET',        symbol: '.NET' },
  SQLSERVER:  { name: 'SQL Server',  symbol: 'SQL'  },
  LLM:        { name: 'LLM',         symbol: 'LLM'  },
  OLLAMA:     { name: 'Ollama',      symbol: 'Ol'   },
  NEO4J:      { name: 'Neo4j',       symbol: 'N4j'  },
  RAG:        { name: 'RAG',         symbol: 'RAG'  },
  REACT:      { name: 'React',       symbol: 'Re'   },
  NODEJS:     { name: 'Node.js',     symbol: 'JS'   },
  AI:         { name: 'IA',          symbol: 'IA'   },
  LARAVEL:    { name: 'Laravel',     symbol: 'Lv'   },
  PHP:        { name: 'PHP',         symbol: 'PHP'  },
  MYSQL:      { name: 'MySQL',       symbol: 'My'   },
  ANGULAR:    { name: 'Angular',     symbol: 'Ng'   },
  SPRINGBOOT: { name: 'Spring Boot', symbol: 'SB'   }
};

interface ExperienceItem {
  /** sert aussi de clé de traduction : EXPERIENCE.ITEMS.<id>.* */
  id: string;
  /** année affichée sur la ligne du temps */
  year: string;
  initials: string;
  /** logo de l'organisme (dossier public/Logos). Sans logo : les initiales s'affichent. */
  logo?: string;
  /** entreprise ou nom du projet (non traduit) */
  title: string;
  location: string;
  /** numéros des missions : [1, 2, 3] → MISSION1, MISSION2, MISSION3 */
  missions: number[];
  /** clés du catalogue TECH */
  techs: string[];
  /** lien de démo (optionnel) : le bouton n'apparaît que s'il est rempli */
  demoUrl?: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience implements OnDestroy {
  private readonly document = inject(DOCUMENT);

  /** nombre d'expériences affichées par page */
  private readonly pageSize = 3;

  readonly tech = TECH;

  /** de la plus récente à la plus ancienne (comme le CV) */
  readonly experiences: ExperienceItem[] = [
    {
      id: 'edi2026',
      year: '2026',
      initials: 'EDI',
      logo: '/Logos/Logo%20EDI%20Solutions%20.jpg',
      title: 'EDI Solutions TN',
      location: 'Sfax',
      missions: [1, 2, 3, 4],
      techs: ['PYTHON', 'FASTAPI', 'DOTNET', 'SQLSERVER', 'LLM', 'OLLAMA']
      // demoUrl: 'https://...'   ← décommente et mets ton lien pour afficher le bouton
    },
    {
      id: 'placement2026',
      year: '2026',
      initials: 'SPO',
      logo: '/Logos/IIT.png',
      title: 'Service Placement Optimizer',
      location: 'Sfax',
      missions: [1, 2, 3, 4],
      techs: ['PYTHON', 'FASTAPI', 'NEO4J', 'RAG', 'LLM', 'OLLAMA']
    },
    {
      id: 'edi2025',
      year: '2025',
      initials: 'EDI',
      logo: '/Logos/Logo%20EDI%20Solutions%20.jpg',
      title: 'EDI Solutions TN',
      location: 'Sfax',
      missions: [1, 2, 3, 4],
      techs: ['REACT', 'NODEJS', 'SQLSERVER', 'AI']
    },
    {
      id: 'digital2024',
      year: '2024',
      initials: '21C',
      logo: '/Logos/21C%27Digital.jpg',
      title: "21C'Digital",
      location: 'Sfax',
      missions: [1, 2, 3, 4],
      techs: ['LARAVEL', 'PHP', 'MYSQL']
    },
    {
      id: 'iway2022',
      year: '2022',
      initials: 'IW',
      logo: '/Logos/Logo i-Way Intelligence Way.png',
      title: 'I_Way',
      location: 'Sfax',
      missions: [1, 2, 3, 4],
      techs: ['ANGULAR', 'SPRINGBOOT']
    }
  ];

  /* ---------- Pagination (catalogue) ---------- */
  readonly totalPages = Math.ceil(this.experiences.length / this.pageSize);
  readonly page = signal(0);
  
  readonly pages = Array.from({ length: this.totalPages }, (_, i) => i);

goTo(index: number): void {
  this.page.set(Math.max(0, Math.min(index, this.totalPages - 1)));
}

  readonly visibleExperiences = computed(() => {
    const start = this.page() * this.pageSize;
    return this.experiences.slice(start, start + this.pageSize);
  });

  next(): void {
    this.page.update(p => Math.min(p + 1, this.totalPages - 1));
  }

  prev(): void {
    this.page.update(p => Math.max(p - 1, 0));
  }

  /* ---------- Fenêtre de détails ---------- */
  readonly selected = signal<ExperienceItem | null>(null);

  @ViewChild('closeBtn') private closeBtn?: ElementRef<HTMLButtonElement>;
  private lastTrigger: HTMLElement | null = null;

  open(exp: ExperienceItem, event?: Event): void {
    this.lastTrigger = (event?.currentTarget as HTMLElement | null) ?? null;
    this.selected.set(exp);
    this.document.body.style.overflow = 'hidden';
    setTimeout(() => this.closeBtn?.nativeElement.focus());
  }

  close(): void {
    if (!this.selected()) {
      return;
    }
    this.selected.set(null);
    this.document.body.style.overflow = '';
    this.lastTrigger?.focus();
    this.lastTrigger = null;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }

  ngOnDestroy(): void {
    this.document.body.style.overflow = '';
  }
}