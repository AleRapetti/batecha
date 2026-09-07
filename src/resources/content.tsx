import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";
import settings from "./site-settings.json";

const person: Person = {
  firstName: settings.firstName,
  lastName: settings.lastName,
  name: settings.name,
  role: settings.role,
  avatar: settings.avatar,
  email: settings.email,
  location: settings.location as Person["location"],
  languages: settings.languages,
  locale: settings.locale,
};

const timeZone = settings.timeZone as Person["location"];

export function updatePersonSettings(nextSettings: typeof settings) {
  Object.assign(person, nextSettings);
  home.title = "BorgoTech | Software e digitalizzazione territoriale";
  about.title = "Chi siamo / La visione";
  about.description = "Tecnologia solida per borghi, agriturismi e strutture ricettive locali.";
  blog.description = `Approfondimenti di ${person.name} su tecnologia e territorio`;
  work.title = `Progetti | ${person.name}`;
  work.description = `Piattaforme digitali e soluzioni software sviluppate da ${person.name}`;
  gallery.title = `Progetti | ${person.name}`;
  gallery.description = `Una selezione di progetti di ${person.name}`;
}

const newsletter: Newsletter = {
  display: false,
  title: <>Resta aggiornato</>,
  description: <>Approfondimenti su tecnologia, territorio e innovazione locale.</>,
};

const socialLinks: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system",
    enabled: false,
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
    enabled: false,
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    enabled: false,
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    enabled: false,
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

// Profile links stay centralized here: switch enabled to true when each profile is ready.
const social: Social = socialLinks.filter((item) => item.enabled !== false);

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "BorgoTech | Software e digitalizzazione territoriale",
  description: "Piattaforme gestionali, siti web ad alte prestazioni e digitalizzazione territoriale.",
  headline: <>Tecnologia solida per territori autentici</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">BorgoTech</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Progetto pilota
        </Text>
      </Row>
    ),
    href: "/work/ecosistema-digitale-campaegli",
  },
  subline: (
    <>
      Progettiamo architetture web, piattaforme gestionali e interfacce digitali su misura per connettere l'eccellenza dei borghi italiani e delle realtà ricettive con il turismo contemporaneo.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: "Chi siamo / La visione",
  description: "Tecnologia solida per borghi, agriturismi e strutture ricettive locali.",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "La nostra storia",
    description: (
      <>
        Prima ancora che un team di sviluppo, siamo tre amici che condividono un percorso lungo quindici anni. Ci siamo conosciuti tra i boschi e le alture dei Monti Simbruini, in un piccolo borgo che consideriamo casa e dove abbiamo radicato la nostra visione. Da oltre due anni uniamo le nostre competenze tecniche su progetti software complessi, guidati dall'obiettivo comune di restituire valore concreto alle economie locali attraverso strumenti tecnologici solidi, moderni e indipendenti.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Competenze & Aree di Intervento",
    experiences: [
      {
        company: "Hospitality & Ricettività Locale",
        timeframe: "Core Capability",
        role: "Piattaforme di Gestione & Booking Diretto",
        achievements: [
          <>
            Sviluppo di portali e gestionali personalizzati per agriturismi e strutture ricettive, pensati per disintermediare dalle grandi OTA, ridurre i costi di commissione e centralizzare le prenotazioni dirette.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/campa-01.jpg",
            alt: "Piattaforma di gestione e booking diretto",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Territorio & Comunità",
        timeframe: "Infrastruttura Pilota",
        role: "Ecosistemi Web per i Borghi",
        achievements: [
          <>
            Digitalizzazione dell'offerta territoriale con portali integrati per la valorizzazione del patrimonio locale, servizi al cittadino, itinerari e aggregazione delle attività economiche del borgo (progetto pilota a Campaegli).
          </>,
        ],
        images: [],
      },
      {
        company: "Architettura & Sviluppo Full-Stack",
        timeframe: "Engineering Team",
        role: "Ingegneria Software & Integrazione Dati",
        achievements: [
          <>
            Soluzioni robuste basate sui più moderni framework web. Integrazione API, database ad alte performance, design responsivo accessibile e conformità alle normative sulla privacy e accessibilità.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Metodo",
    institutions: [
      {
        name: "Tecnologia indipendente",
        description: <>Costruiamo strumenti proprietari e sostenibili, pensati per generare valore nel lungo periodo.</>,
      },
      {
        name: "Conoscenza del territorio",
        description: <>Partiamo dalle esigenze reali delle comunità locali e delle attività che le fanno vivere.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Stack tecnologico",
    skills: [
      {
        title: "Piattaforme web",
        description: (
          <>Architetture moderne, performanti e accessibili per prodotti digitali che devono durare.</>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/image-01.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/image-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Dati e integrazioni",
        description: (
          <>API, database e integrazioni affidabili per collegare persone, servizi e informazioni.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/image-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, timeZone, social, newsletter, home, about, blog, work, gallery };
