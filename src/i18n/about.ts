import type { Locale } from './config';

export type AboutSection = {
  title: string;
  paragraphs: string[];
};

export type AboutCopy = {
  title: string;
  description: string;
  intro: string[];
  sections: AboutSection[];
  projectsLabel: string;
  contactLabel: string;
};

const aboutCopy: Record<Locale, AboutCopy> = {
  en: {
    title: 'About GVibeDev',
    description:
      'GVibeDev is a small independent studio focused on games, practical tools, experimentation and AI-assisted development.',
    intro: [
      'I’ve been taking computers and video games apart since I was a child. We installed things, tweaked them, broke them, sometimes fixed them, and usually learned more than we expected to.',
      'Software development wasn’t my profession for most of my life. Computers remained tools, hobbies and, occasionally, part of my work, but not specifically for programming or development.',
      'Much later, language models gave me a second chance, increasing enormously what I could build on my own.',
      'It was enough to get started.',
    ],
    sections: [
      {
        title: 'AI-assisted development',
        paragraphs: [
          'AI plays a major role in my work.',
          'I make no secret of it, and I don’t see much reason to.',
          'Language models write code, analyse problems, explain technologies I’m unfamiliar with and help me work through areas where my knowledge is incomplete. They also produce incorrect solutions, strange hypotheses and, from time to time, the odd bit of nonsense.',
          'Nothing out of the ordinary.',
          'The useful part is speed. I can test an idea instead of spending weeks wondering whether I’ll eventually manage to test it.',
          'The rest still needs work.',
          'Requirements have to hold up. Code has to survive real use. Interfaces have to be functional. Bugs have to be found, including the ones that, once fixed, quietly migrate somewhere else.',
          'Quite often, a working build does not become a release.',
        ],
      },
      {
        title: 'Why GVibeDev exists',
        paragraphs: [
          'GVibeDev is simply the place I set up to make things.',
          'Mostly games, game-related tools and utilities born from practical problems I run into. Sometimes I work on something else because there is an interesting possibility worth exploring.',
          'There is no grand philosophy behind the selection.',
          'If I need a tool and the available ones are not accessible or do not perform exactly the function I need, building another one becomes a way to understand the problem better and improve my workflow.',
          'If I have a game system I want to explore, I build it.',
          'Sometimes an experiment goes nowhere, and when that happens I have to admit it.',
          'I am not particularly interested in turning every prototype into a product, but I do care about turning projects with real potential into something tangible.',
          'Some projects will remain experiments. Some will be free. Some will be commercial. Some will probably end up in another forgotten folder.',
          'That’s fine.',
        ],
      },
      {
        title: 'What matters to me',
        paragraphs: [
          'I approach software first and foremost as a user.',
          'This makes me rather intolerant of things that work technically but are unpleasant to use.',
          'I prefer tools with a clear purpose, interfaces that do not create extra work, and features that exist because they are genuinely needed.',
          'The same goes for games.',
          'Systems, rules, visual identity, interaction and atmosphere interest me much more than simply adding large amounts of content.',
          'Arena Rubra fits naturally into this context. Other GVibeDev projects are much more utilitarian and exist because I wanted to solve specific problems.',
          'I rarely have trouble finding a reason to create something.',
          'GVibeDev is currently a small independent studio, heavily focused on experimentation and AI-assisted development.',
          'Projects, tests, discarded bad ideas — promptly, if all goes well — and, every now and then, something worth nurturing.',
          'That’s more or less the whole story.',
        ],
      },
    ],
    projectsLabel: 'Explore projects',
    contactLabel: 'Contact',
  },

  it: {
    title: 'Chi è GVibeDev',
    description:
      'GVibeDev è un piccolo studio indipendente dedicato a giochi, strumenti pratici, sperimentazione e sviluppo assistito dall’intelligenza artificiale.',
    intro: [
      'Smonto computer e videogiochi da quando ero bambino. Installavamo cose, le modificavamo, le rompevamo, qualche volta riuscivamo anche a sistemarle e, alla fine, imparavamo quasi sempre più del previsto.',
      'Per gran parte della mia vita lo sviluppo software non è stato il mio mestiere. I computer sono rimasti strumenti, passioni e, occasionalmente, anche strumenti di lavoro, ma non nello specifico per la programmazione o lo sviluppo.',
      'Molto più tardi, i modelli linguistici mi hanno dato una seconda possibilità, aumentando enormemente ciò che potevo realizzare da solo.',
      'È bastato per cominciare.',
    ],
    sections: [
      {
        title: 'Sviluppo assistito dall’AI',
        paragraphs: [
          'L’intelligenza artificiale ha un ruolo importante nel mio lavoro.',
          'Non ne faccio mistero e non vedo particolari ragioni per farlo.',
          'I modelli linguistici scrivono codice, analizzano problemi, spiegano tecnologie che non conosco e mi aiutano a muovermi in aree dove le mie competenze sono incomplete. Producono anche soluzioni sbagliate, ipotesi strane e, ogni tanto, qualche discreta sciocchezza.',
          'Normale amministrazione.',
          'La parte utile è la velocità. Posso testare un’idea invece di passare settimane a chiedermi se, prima o poi, riuscirò a testarla.',
          'Il resto richiede comunque lavoro.',
          'I requisiti devono reggere. Il codice deve sopravvivere all’uso reale. Le interfacce devono essere funzionali. I bug vanno trovati, compresi quelli che, una volta corretti, decidono con grande discrezione di trasferirsi da qualche altra parte.',
          'Molto spesso una build funzionante non diventa una release.',
        ],
      },
      {
        title: 'Perché esiste GVibeDev',
        paragraphs: [
          'GVibeDev è semplicemente il posto che ho creato per fare cose.',
          'Soprattutto giochi, strumenti legati ai videogiochi e utility nate da problemi pratici che incontro durante il lavoro. Ogni tanto mi occupo di altro, se c’è una possibilità interessante che vale la pena esplorare.',
          'Non c’è una grande filosofia dietro la selezione.',
          'Se mi serve uno strumento e quelli disponibili non sono accessibili o non fanno esattamente ciò che mi serve, costruirne un altro diventa un modo per capire meglio il problema e migliorare il mio flusso di lavoro.',
          'Se ho un sistema di gioco che voglio esplorare, lo costruisco.',
          'A volte un esperimento non porta da nessuna parte, e quando succede bisogna ammetterlo.',
          'Non mi interessa particolarmente trasformare ogni prototipo in un prodotto, ma per me è importante che un progetto con un potenziale reale arrivi a qualcosa di concreto.',
          'Alcuni progetti resteranno esperimenti. Alcuni saranno gratuiti. Alcuni saranno commerciali. Altri probabilmente finiranno nell’ennesima cartella dimenticata.',
          'Va bene così.',
        ],
      },
      {
        title: 'Cosa conta per me',
        paragraphs: [
          'Mi avvicino al software prima di tutto da utente.',
          'Questo mi rende piuttosto intollerante verso le cose che funzionano tecnicamente ma sono sgradevoli da usare.',
          'Preferisco strumenti con uno scopo chiaro, interfacce che non creino lavoro aggiuntivo e funzioni che esistano perché servono davvero.',
          'Lo stesso vale per i giochi.',
          'Sistemi, regole, identità visiva, interazione e atmosfera mi interessano molto più della semplice aggiunta di grandi quantità di contenuti.',
          'Arena Rubra rientra naturalmente in questo contesto. Altri progetti GVibeDev sono molto più pratici e sono nati perché volevo risolvere problemi specifici.',
          'Di solito non faccio fatica a trovare un motivo per creare qualcosa.',
          'GVibeDev è attualmente un piccolo studio indipendente, fortemente orientato alla sperimentazione e allo sviluppo assistito dall’intelligenza artificiale.',
          'Progetti, test, cattive idee scartate — rapidamente, se va tutto bene — e, ogni tanto, qualcosa che vale la pena far crescere.',
          'Più o meno, è tutta qui.',
        ],
      },
    ],
    projectsLabel: 'Esplora i progetti',
    contactLabel: 'Contatti',
  },
};

export function getAboutCopy(locale: Locale) {
  return aboutCopy[locale];
}
