import type { CollectionEntry } from 'astro:content';
import type { Locale } from './config';

type BodyBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] };

export type ProjectBodySection = {
  title: string;
  blocks: BodyBlock[];
};

type Requirement = {
  label: string;
  detail: string;
  scope: 'core' | 'generation';
  required: boolean;
};

type InstallGuide = {
  title: string;
  eyebrow?: string;
  intro?: string;
  warningTitle?: string;
  warning?: string;
  footnote?: string;
  steps: Array<{ title: string; body: string; code?: string }>;
};

type SetupCopy = {
  heading?: string;
  intro?: string;
  coreLabel?: string;
  coreTitle?: string;
  secondaryLabel?: string;
  secondaryTitle?: string;
  publicPackage?: string;
  platformLabel?: string;
  secondaryRequiredLabel?: string;
};

type EditorialSection = {
  eyebrow: string;
  title: string;
  body: string[];
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

type DocumentItem = {
  language: string;
  languageCode: string;
  label: string;
  file: string;
  pages: number;
  scope?: string;
};

type ItalianProjectOverride = {
  summary?: string;
  status?: string;
  tags?: string[];
  seoDescription?: string;
  galleryCaptions?: string[];
  launchLabel?: string;
  downloadLabel?: string;
  toolCategory?: string;
  platforms?: string[];
  requirements?: Requirement[];
  setupCopy?: SetupCopy;
  installGuide?: InstallGuide;
  editorialCategory?: string;
  editorialAvailability?: string;
  themes?: string[];
  documents?: DocumentItem[];
  editorialSections?: EditorialSection[];
  editorialQuote?: { text: string; attribution?: string };
  body?: ProjectBodySection[];
};

const italianProjects: Record<string, ItalianProjectOverride> = {
  'arena-rubra-card-composer': {
    summary:
      'Un companion per browser per assemblare carte di Arena Rubra a partire da template di fazione, illustrazioni e dati strutturati, quindi renderizzarle come asset PNG esportabili.',
    status: 'Step 2A — Sviluppo attivo',
    tags: ['Web app', 'Strumenti carte', 'Arena Rubra', 'Pipeline asset'],
    seoDescription:
      'Arena Rubra Card Composer è un companion browser per la produzione delle carte: template di fazione, illustrazioni, statistiche, testo regole, rendering ed esportazione PNG.',
    galleryCaptions: [
      'Vista di composizione Nexus: template di fazione, input dell’illustrazione, statistiche strutturate e output renderizzato della carta.',
      'Frame Exordium e preset dell’illustrazione mostrati nello stesso workflow di composizione condiviso.',
      'Agathoi mostra come cambia l’identità della fazione mentre il workflow di inserimento dati rimane coerente.',
      'Liberti usa la stessa struttura dell’editor con il proprio linguaggio visivo del frame e il proprio preset di illustrazione.',
    ],
    body: [
      {
        title: 'Un’unica interfaccia per carte che appartengono comunque a fazioni diverse',
        blocks: [
          {
            type: 'p',
            text: 'Arena Rubra Card Composer è un companion di produzione per browser che trasforma dati e illustrazioni in asset di carte specifici per le fazioni di Arena Rubra. L’attuale interfaccia Step 2A mantiene i controlli di modifica a sinistra e un grande render della carta a destra, così il contenuto può essere regolato mantenendo sempre visibile la gerarchia visiva finale.',
          },
          {
            type: 'p',
            text: 'Le catture di sviluppo mostrano lo stesso workflow applicato a Nexus, Exordium, Agathoi e Liberti. Ogni fazione mantiene il proprio frame, emblema, palette e linguaggio delle illustrazioni senza richiedere un editor separato.',
          },
        ],
      },
      {
        title: 'Prima il template, poi il contenuto',
        blocks: [
          {
            type: 'p',
            text: 'L’editor parte da un template di carta e dalla selezione della fazione. L’interfaccia corrente espone il tipo di carta, la fazione e un preset per l’illustrazione, lasciando anche la possibilità di caricare direttamente un file immagine.',
          },
          {
            type: 'p',
            text: 'In questo modo il sistema visivo riutilizzabile resta separato dal contenuto della singola carta. Una nuova carta non nasce da un documento grafico vuoto: nasce già dentro la grammatica visiva definita per Arena Rubra.',
          },
        ],
      },
      {
        title: 'Dati della carta strutturati',
        blocks: [
          {
            type: 'p',
            text: 'Il pannello Dati carta espone le informazioni che devono passare dal game design all’oggetto renderizzato: nome, tipo di unità, ENE, HP, DEF e ATT, seguiti dal titolo dell’abilità o dell’effetto e dal relativo testo di regola.',
          },
          {
            type: 'p',
            text: 'Il Composer quindi non è soltanto uno strumento per creare mock-up grafici. La sua interfaccia riflette l’architettura informativa reale delle carte e mantiene dati di gioco, artwork e presentazione nello stesso passaggio produttivo.',
          },
        ],
      },
      {
        title: 'Render ed esportazione',
        blocks: [
          {
            type: 'p',
            text: 'L’attuale build Step 2A offre azioni esplicite Render ed Esporta PNG. Il risultato è un’immagine completa della carta che può entrare nella pipeline più ampia di Arena Rubra, nella documentazione o nella preparazione tabletop senza ricostruire manualmente il frame a ogni variante.',
          },
          {
            type: 'p',
            text: 'Le schermate mostrano anche un’area di Calibrazione temporanea. Qui viene presentata come controllo di sviluppo, non come funzione pubblica definitiva: il progetto è ancora in raffinamento e la calibrazione visiva resta parte dell’iterazione.',
          },
        ],
      },
      {
        title: 'Workflow condiviso, identità specifica della fazione',
        blocks: [
          {
            type: 'p',
            text: 'Le catture sono utili proprio perché mostrano quattro risultati molto diversi prodotti dalla stessa interfaccia. Nexus è freddo e tecnico; Exordium usa araldica militare rossa e oro; Agathoi vira verso motivi verdi, naturali e civici; Liberti usa un linguaggio più ruvido e danneggiato, vicino al bronzo consumato.',
          },
          {
            type: 'p',
            text: 'Il Composer si colloca quindi fra due lati di Arena Rubra: il modello di regole e dati da una parte e l’identità visiva delle carte dall’altra.',
          },
        ],
      },
      {
        title: 'Milestone attuale',
        blocks: [
          {
            type: 'p',
            text: 'Questa pagina documenta Step 2A — Sviluppo attivo a partire dalle catture dell’interfaccia disponibili. Non dichiara ancora un runtime pubblico ospitato. Il repository sorgente è collegato; un target di lancio online potrà essere aggiunto quando la build browser sarà stata verificata e distribuita come runtime pubblico stabile.',
          },
        ],
      },
    ],
  },

  'manuale-llm': {
    summary:
      'Un progetto di scrittura e metodo dedicato a struttura, disciplina del prompting e responsabilità umana nel lavoro pratico con i modelli linguistici.',
    status: 'Bozza pubblica / sviluppo attivo',
    tags: ['Scrittura', 'Prompting', 'Metodo', 'Documentazione', 'Modelli linguistici'],
    seoDescription:
      'Manuale LLM è un progetto pubblico di scrittura e metodo sul lavoro con i modelli linguistici attraverso struttura, responsabilità, diagnosi iterativa e direzione umana deliberata.',
    body: [
      {
        title: 'Un progetto di metodo costruito sulla pratica',
        blocks: [
          {
            type: 'p',
            text: 'Manuale LLM non è un’introduzione generica all’AI. È il tentativo pratico di trasformare un lavoro ripetuto con i modelli linguistici in un metodo esplicito.',
          },
          {
            type: 'p',
            text: 'Il progetto nasce da un’osservazione semplice: un buon risultato non arriva dall’“usare l’AI” in astratto. Arriva da contesto, struttura, vincoli, revisione, iterazione e dalla disponibilità a scartare gli output che non meritano di sopravvivere.',
          },
        ],
      },
      {
        title: 'Perché esiste questo progetto',
        blocks: [
          {
            type: 'p',
            text: 'I modelli linguistici vengono spesso discussi per estremi. O sono trattati come sostituti magici delle competenze, oppure liquidati come rumore vuoto. Nessuno dei due approcci è utile.',
          },
          {
            type: 'p',
            text: 'Nella pratica conta la relazione fra strumento e utente. Un LLM può aiutare a scrivere, analizzare, confrontare, riorganizzare e accelerare. Non sceglie l’obiettivo del lavoro, gli standard del lavoro o la responsabilità per il lavoro.',
          },
          { type: 'p', text: 'Questa distinzione è al centro del manuale.' },
        ],
      },
      {
        title: 'Cosa copre',
        blocks: [
          {
            type: 'p',
            text: 'Il repository raccoglie note e capitoli strutturati su come lavorare con i modelli linguistici in modo più deliberato. Fra i temi:',
          },
          {
            type: 'ul',
            items: [
              'prompting come architettura, non come impulso;',
              'metodo, iterazione e uso diagnostico;',
              'responsabilità, verifica e direzione umana;',
              'uso dei modelli per scrittura, struttura e supporto ai progetti;',
              'estensione delle capacità senza cedere il giudizio.',
            ],
          },
          {
            type: 'p',
            text: 'Il repository pubblico attuale comprende anche appendici dedicate al lavoro sul testo, al worldbuilding e all’uso legato alle immagini.',
          },
        ],
      },
      {
        title: 'Strumento, responsabilità, direzione',
        blocks: [
          {
            type: 'p',
            text: 'Il principio centrale del manuale è semplice: un modello linguistico è uno strumento potente, ma resta uno strumento.',
          },
          {
            type: 'p',
            text: 'Può amplificare un processo. Non eredita la responsabilità. Intenzione, precisione, giudizio, criteri di accettazione e responsabilità etica restano umani.',
          },
          {
            type: 'p',
            text: 'Per questo il manuale non si concentra soltanto su ciò che un modello può fare, ma su come dovrebbe lavorare una persona quando ne usa uno.',
          },
        ],
      },
      {
        title: 'Stato del progetto',
        blocks: [
          {
            type: 'p',
            text: 'Manuale LLM è una bozza pubblica in sviluppo attivo. Va letto come un progetto di metodo in evoluzione, non come una pubblicazione istituzionale conclusa.',
          },
          { type: 'p', text: 'Il repository è l’attuale punto di riferimento pubblico.' },
        ],
      },
    ],
  },

  'rubra-image-forge': {
    summary:
      'Una workstation locale per conversioni batch di cartelle immagini, preparazione WebP e generazione di asset 256×256 pronti come token, con un workflow di preflight pensato per il prototipo.',
    status: 'R3a v0.3.1 — Prototipo di sviluppo',
    tags: ['Immagini batch', 'WebP', 'Pipeline token', 'Strumento desktop locale', 'Prototipo di sviluppo'],
    seoDescription:
      'Rubra Image Forge R3a v0.3.1 è un prototipo desktop locale per conversione batch, preparazione WebP e generazione di asset token 256×256.',
    toolCategory: 'Conversione batch immagini e preparazione token',
    platforms: ['Desktop Windows', 'Workflow su file locali'],
    requirements: [
      {
        label: 'Cartelle o file immagine sorgente',
        detail: 'Il workflow parte da file e cartelle locali. L’interfaccia supporta selezione batch e scansione ricorsiva delle sottocartelle.',
        scope: 'core',
        required: true,
      },
      {
        label: 'Cartella di output scrivibile',
        detail: 'I file convertiti vengono pianificati e scritti nella cartella di destinazione scelta, mostrando prima della conversione la gestione delle collisioni.',
        scope: 'core',
        required: true,
      },
      {
        label: 'Sessione desktop locale',
        detail: 'La baseline pubblica attuale è un prototipo desktop concentrato sui workflow di file locali, non un’applicazione web ospitata.',
        scope: 'core',
        required: true,
      },
      {
        label: 'Runtime GEGL opzionale',
        detail: 'Token R3a può usare un percorso GEGL LoHalo portabile quando disponibile. In sua assenza il prototipo ripiega su Pillow Lanczos senza bloccare l’intero workflow.',
        scope: 'generation',
        required: false,
      },
    ],
    setupCopy: {
      heading: 'Conosci i due workflow immagine prima di avviare un batch grande.',
      intro: 'Rubra Image Forge espone attualmente due modalità pratiche: conversione standard per elaborazioni batch generiche e Token 256×256 per la preparazione di asset di gioco. Il prototipo mantiene visibili filtri, preflight e decisioni di output prima della conversione.',
      coreLabel: 'Workflow principale',
      coreTitle: 'Conversione standard',
      secondaryLabel: 'Pipeline token opzionale',
      secondaryTitle: 'Token R3a / fallback GEGL',
      publicPackage: 'Repository disponibile · pacchetto release non ancora pubblicato',
      platformLabel: 'Piattaforma / ambito',
      secondaryRequiredLabel: 'Usato dalla modalità token',
    },
    installGuide: {
      eyebrow: 'Accesso al prototipo',
      title: 'Usa lo snapshot corrente del repository',
      intro: 'Rubra Image Forge è presentato sul sito come prototipo di sviluppo. Il repository è pubblico, ma non è ancora collegato un pacchetto GitHub Release.',
      warningTitle: 'Stato del prototipo',
      warning: 'Questa pagina documenta ciò che lo strumento fa attualmente sulla base delle catture R3a fornite dall’autore. Nomi, dettagli di packaging e alcuni bordi del workflow possono ancora cambiare.',
      footnote: 'Poiché non è ancora collegato un pacchetto pubblico di release, il portfolio espone intenzionalmente l’azione Repository e non finge che esista già un download di release.',
      steps: [
        {
          title: 'Apri lo snapshot del repository',
          body: 'Parti dal repository GitHub pubblico collegato sopra. In questa fase il portfolio documenta il prototipo e rimanda al sorgente invece che a una release confezionata.',
        },
        {
          title: 'Prepara cartelle di input e output',
          body: 'Raccogli una o più cartelle o file immagine locali e scegli una destinazione scrivibile prima di eseguire l’analisi.',
        },
        {
          title: 'Scegli la modalità della pipeline',
          body: 'Usa la conversione standard per batch generici oppure passa a Token 256×256 quando servono output normalizzati orientati agli asset di gioco.',
        },
        {
          title: 'Controlla filtri e impostazioni di output',
          body: 'Regola filtri per estensione, scansione ricorsiva, impostazioni WebP o opzioni Token R3a prima di elaborare un batch grande.',
        },
        {
          title: 'Esegui prima il preflight Analyze',
          body: 'Il prototipo è progettato per ispezionare il batch prima della conversione, mostrando duplicati, collisioni, stato della trasparenza, conteggi pianificati ed errori bloccanti.',
        },
        {
          title: 'Converti solo quando il piano è corretto',
          body: 'Quando i risultati del preflight hanno senso, procedi con la conversione e controlla la cartella di output generata.',
        },
      ],
    },
    galleryCaptions: [
      'Sorgenti — seleziona file o cartelle, imposta la destinazione e ispeziona il batch prima che avvenga qualsiasi conversione.',
      'Filtri — restringi il batch per estensione, corrispondenza testuale, glob, regex e scansione ricorsiva.',
      'WebP — qualità, modalità lossless, rimozione metadata, politica duplicati e verifica dell’output restano espliciti.',
      'Token R3a — il percorso 256×256 supporta gestione dello sfondo, conservazione alpha e runtime GEGL LoHalo opzionale con fallback Lanczos.',
      'Preflight in corso — i batch grandi vengono analizzati prima della conversione per intercettare i problemi in anticipo.',
      'Report batch reale — la cattura R3a fornita mostra 707 file scansionati, 703 pianificati, 29 duplicati, 18 collisioni e 4 errori bloccanti di preflight.',
    ],
    body: [
      {
        title: 'Una pipeline pratica per immagini, invece di pulizie una alla volta',
        blocks: [
          {
            type: 'p',
            text: 'Rubra Image Forge è un prototipo desktop locale costruito attorno a un problema di produzione ricorrente: prendere una cartella disordinata di immagini e trasformarla in un set di asset più pulito e riutilizzabile senza ripetere manualmente gli stessi controlli file per file.',
          },
          {
            type: 'p',
            text: 'La baseline pubblica attuale è R3a v0.3.1 — Prototipo di sviluppo. Il repository pubblico è disponibile, ma non è ancora collegato un pacchetto GitHub Release.',
          },
        ],
      },
      {
        title: 'Cosa copre già il prototipo',
        blocks: [
          {
            type: 'p',
            text: 'La prima modalità è semplice e utile: selezioni file o cartelle, scegli dove deve andare l’output e analizzi il batch prima di scrivere qualsiasi cosa.',
          },
          {
            type: 'ul',
            items: [
              'selezione di sorgente e destinazione;',
              'scansione ricorsiva delle cartelle;',
              'filtri per estensione, testo, glob e regex;',
              'report di duplicati e collisioni;',
              'pianificazione della conversione prima dell’esecuzione.',
            ],
          },
          {
            type: 'p',
            text: 'Questo rende lo strumento meno simile a un convertitore cieco e più vicino a un passaggio controllato di staging per asset locali.',
          },
        ],
      },
      {
        title: 'Controlli WebP senza nascondere i compromessi',
        blocks: [
          {
            type: 'p',
            text: 'Il pannello WebP mantiene visibili le decisioni principali invece di seppellirle dietro preset.',
          },
          {
            type: 'p',
            text: 'Dalla cattura R3a fornita possiamo confermare controlli per qualità, lossless, qualità alpha, politica duplicati, numero di worker, rimozione dei metadata e verifica dell’output. Il backend predefinito mostrato nel prototipo è Pillow, con rilevamento opzionale di cwebp invece di una dipendenza obbligatoria.',
          },
        ],
      },
      {
        title: 'Preparazione Token 256×256',
        blocks: [
          {
            type: 'p',
            text: 'La seconda modalità visibile è più specializzata e particolarmente interessante per il lavoro sui giochi.',
          },
          {
            type: 'p',
            text: 'Token 256×256 punta a produrre output normalizzati e pronti all’uso come token. La schermata R3a mostra controlli per euristiche di rimozione dello sfondo, tolleranza neutra, distanza dal bordo, feathering, decontaminazione, conservazione alpha e validazione dell’alpha minimo.',
          },
          {
            type: 'ul',
            items: [
              'auto — usa GEGL LoHalo quando disponibile;',
              'GEGL — il percorso più rigoroso quando il runtime è presente;',
              'fallback Lanczos / Pillow — soluzione pratica quando GEGL non è disponibile.',
            ],
          },
          {
            type: 'p',
            text: 'È esattamente il tipo di scelta coerente con GVibeDev: non fingere che lo strumento sia magico, ma rendere comprensibili la pipeline e i suoi limiti.',
          },
        ],
      },
      {
        title: 'Il preflight conta perché nei batch grandi gli errori diventano costosi',
        blocks: [
          {
            type: 'p',
            text: 'La prova più forte nel materiale fornito non è una schermata vuota e pulita. È la cattura di un batch reale.',
          },
          {
            type: 'p',
            text: 'In quella schermata R3a, Rubra Image Forge elabora una cartella con 707 file, circa 290 MB di sorgenti, 703 output pianificati, 29 duplicati, 18 collisioni, 351 elementi trasparenti e 4 errori bloccanti di preflight.',
          },
          {
            type: 'p',
            text: 'Questo non dimostra soltanto che il prototipo si apre. Mostra che è già stato esercitato sul tipo di batch in cui visibilità, pianificazione e report degli errori contano davvero.',
          },
        ],
      },
      {
        title: 'Perché questo strumento appartiene a GVibeDev.cc',
        blocks: [
          {
            type: 'p',
            text: 'Rubra Image Forge appartiene al sito per lo stesso motivo degli strumenti Arena Rubra: trasforma una seccatura produttiva ricorrente in un workflow esplicito.',
          },
          { type: 'p', text: 'Il percorso diventa: Seleziona → Filtra → Analizza → Controlla → Converti.' },
          {
            type: 'ul',
            items: [
              'individuare un collo di bottiglia reale;',
              'esporre le decisioni invece di nasconderle;',
              'testare su carichi di lavoro reali;',
              'mantenere spazio per l’iterazione.',
            ],
          },
        ],
      },
      {
        title: 'Ambito pubblico attuale',
        blocks: [
          {
            type: 'p',
            text: 'La pagina mantiene deliberatamente precisione sul livello di maturità. Rubra Image Forge è presentato come prototipo di sviluppo, non come prodotto confezionato e concluso.',
          },
          {
            type: 'p',
            text: 'Il repository è pubblico, ma non è ancora collegato un archivio release; la pagina quindi offre l’azione Repository e non finge che esista già un download. In questo modo la pagina pubblica resta corretta mentre mostra uno strumento già chiaramente utile.',
          },
        ],
      },
    ],
  },

  'bw-survivors': {
    summary:
      'Un prototipo survival monocromatico per browser basato su ondate, equipaggiamenti, boss, personalizzazione del personaggio e un’interfaccia mobile compatta.',
    status: '0.9A — Prototipo attivo',
    tags: ['Mo2 Projects', 'Gioco browser', 'Survival', 'JavaScript'],
    seoDescription:
      'B&W Survivors è un prototipo survival browser di Mo2 Projects con progressione a ondate, equipaggiamenti, boss, cappelli per il personaggio, Weapon Tester e controlli mobile.',
    launchLabel: 'Gioca online',
    downloadLabel: 'Scarica build 0.9A',
    galleryCaptions: [
      'La build 0.9A fornita include cinque identità di boss, culminando con Perses.',
      'La build contiene un ampio roster di armi divise fra equipaggiamento comune, raro ed epico.',
      'La personalizzazione del personaggio include un set compatto di cappelli sovrapposti allo sprite del giocatore.',
      'Il set base di nemici alimenta il loop delle ondate normali prima e fra gli scontri con i boss.',
    ],
    body: [
      {
        title: 'Un survival che continua ad aumentare la pressione',
        blocks: [
          {
            type: 'p',
            text: 'B&W Survivors è un gioco browser compatto costruito su un loop semplice: sopravvivi all’ondata corrente, guadagni risorse temporanee della run, usi il negozio fra le ondate, cambi o rinforzi l’equipaggiamento ed entri nello scontro successivo con un po’ più di potenza e un po’ più di pericolo ad aspettarti.',
          },
          {
            type: 'p',
            text: 'Lo snapshot pubblico fornito è 0.9A — Prototipo attivo. Non viene presentato come release conclusa. La build è interessante proprio perché i sistemi sono già consistenti mentre il progetto resta libero di cambiare rapidamente.',
          },
        ],
      },
      {
        title: 'Ondate, boss e scaling',
        blocks: [
          {
            type: 'p',
            text: 'Le ondate normali usano obiettivi di uccisioni e una barra di progresso visibile. Ogni decima ondata introduce un boss. La build fornita contiene Mitra-Spitter, Chained Beast of Tartarus, Gargamosh, Massive OverPowered BioMechanical Beast of Destruction e Perses, con la progressione successiva che cicla su tier più forti dopo l’ondata 50.',
          },
          {
            type: 'p',
            text: 'La run non scala soltanto con un timer fisso. Upgrade del giocatore, potenza delle armi e slot aggiuntivi contribuiscono al contro-scaling dei nemici, aumentando resistenza, danno e pressione di nemici e boss man mano che il giocatore diventa più forte.',
          },
        ],
      },
      {
        title: 'Loadout invece di un’unica arma permanente',
        blocks: [
          {
            type: 'p',
            text: 'Le armi sono organizzate in più fasce di rarità e possono occupare diversi slot. Il negozio della run può offrire slot extra, upgrade del personaggio e una pescata Black Box, mentre la scelta delle armi resta parte della costruzione moment-to-moment.',
          },
          {
            type: 'p',
            text: 'Il gioco include comportamenti melee, ranged e più insoliti invece di trattare ogni oggetto come lo stesso proiettile con un numero diverso. Gli asset forniti comprendono set comuni, rari ed epici, e il codice 0.9A contiene abilità ed effetti distinti per diverse armi di tier superiore.',
          },
        ],
      },
      {
        title: 'Weapon Tester ed enciclopedia',
        blocks: [
          {
            type: 'p',
            text: 'Un Weapon Tester dedicato permette di provare l’equipaggiamento contro dummy nemici fermi e selezionabili senza trasformare il test in normale progressione. La build comprende anche un’Enciclopedia che registra nemici e boss incontrati durante il gioco.',
          },
          {
            type: 'p',
            text: 'Questi sistemi rendono B&W Survivors qualcosa di più di una singola arena survival: offrono piccoli laboratori per ispezionare direttamente il contenuto del gioco.',
          },
        ],
      },
      {
        title: 'Personaggio, lingua e controlli mobile',
        blocks: [
          {
            type: 'p',
            text: 'La schermata Character supporta cappelli selezionabili sovrapposti al giocatore. La build corrente contiene anche un selettore Italiano / English e descrizioni localizzate per armi, nemici e boss.',
          },
          {
            type: 'p',
            text: 'Il supporto mobile fa parte dello snapshot 0.9A, non è un’aggiunta tardiva. I dispositivi touch ricevono un joystick virtuale per il movimento e pulsanti per gli slot delle armi, mentre le schermate esterne al gameplay usano layout compatti orientati al telefono. Il viewport di gioco è pensato attorno a uno stage 16:9 e a una presentazione mobile landscape.',
          },
        ],
      },
      {
        title: 'Gioco browser in solo e LAN',
        blocks: [
          {
            type: 'p',
            text: 'L’archivio include due percorsi di esecuzione diversi. Il gioco in solo può partire direttamente dalla build browser. Il pacchetto include anche un livello co-op LAN con launcher.js, server.js e lan.js per sessioni sulla rete locale.',
          },
          {
            type: 'p',
            text: 'La parte LAN richiede un processo Node locale: una pagina browser statica non può avviare quel server da sola. Per questo la build completa resta disponibile come download senza fingere che il multiplayer LAN sia già un servizio online ospitato.',
          },
        ],
      },
      {
        title: 'Snapshot pubblico',
        blocks: [
          {
            type: 'p',
            text: 'Lo ZIP scaricabile da questa pagina è l’archivio 0.9A esatto fornito per il milestone del portfolio. Viene conservato come snapshot concreto invece di riconfezionare o riscrivere silenziosamente il gioco.',
          },
          {
            type: 'p',
            text: 'Il runtime browser single-player isolato è ospitato direttamente nel sito GVibeDev. Non richiede un repository Mo2 Projects separato. L’archivio 0.9A scaricabile resta invece lo snapshot locale completo, compreso il percorso LAN basato su Node.',
          },
        ],
      },
    ],
  },

  'arena-rubra-digital': {
    summary:
      'Un gioco tattico di carte su un campo esagonale che combina carte, controllo territoriale, identità di fazione e un regolamento digitale in evoluzione.',
    status: 'Demo — In sviluppo',
    tags: ['Gioco tattico di carte', 'Strategia a turni', 'HTML / CSS / JavaScript', 'Sviluppo assistito dall’AI'],
    seoDescription:
      'Arena Rubra Digital è un gioco tattico di carte browser giocabile e un ambiente di regole eseguibili con mappe esagonali, strumenti per mazzi, tutorial, avversari AI, telemetria e sistemi diagnostici.',
    galleryCaptions: [
      'Interfaccia di partita corrente — campo di battaglia, obiettivi, ENE, gestione della mano e ispezione delle carte in un’unica vista live.',
      'Zoom tattico — geometria del movimento, occupazione, Punti Strategici e stato delle unità restano visibili durante le decisioni.',
      'Control Center — gioco, carte, mappe, telemetria, cronologia, diagnostica e strumenti di archivio raccolti in un unico hub.',
      'Map Editor — geometria della mappa, Punti Strategici, terreno, pericoli, validazione e import/export sono modificabili direttamente.',
      'I tutorial guidati spiegano le regole attraverso stati controllati di gioco, overlay del narratore e interazioni evidenziate.',
      'Gli snapshot di telemetria conservano le prove della partita per diagnosi, confronto e test di regressione.',
      'Identità della build Starter Game — un ramo pubblico giocabile dentro un progetto più ampio ancora in sviluppo attivo.',
    ],
    body: [
      {
        title: 'Assistito dall’AI, diretto dall’uomo',
        blocks: [
          {
            type: 'p',
            text: 'L’AI viene usata lungo lo sviluppo di Arena Rubra come partner di ingegneria e analisi: per ragionare sui sistemi, proporre implementazioni, investigare regressioni, ispezionare telemetria e aiutare a tradurre requisiti di design in codice.',
          },
          {
            type: 'p',
            text: 'Questo non elimina la necessità di una direzione. Le regole devono comunque essere scelte. Le build devono essere testate. I comportamenti inattesi devono essere riprodotti. Le funzioni devono meritarsi il proprio posto e un risultato statisticamente interessante deve comunque essere interpretato nel contesto del gioco che lo ha prodotto.',
          },
          {
            type: 'p',
            text: 'Il progetto è quindi meno interessante come affermazione su ciò che può generare un prompt e più interessante come registro di ciò che diventa possibile quando la velocità di implementazione viene affiancata da requisiti, criteri di accettazione, test ripetuti e rifiuto deliberato delle soluzioni che non funzionano.',
          },
        ],
      },
      {
        title: 'Stato del progetto',
        blocks: [
          {
            type: 'p',
            text: 'Arena Rubra Digital resta un lavoro in corso. La build browser è reale e giocabile, mentre dettagli dell’interfaccia, bilanciamento, comportamento dell’AI, mappe, asset e strumenti di supporto continuano a evolvere attraverso baseline validate.',
          },
          {
            type: 'p',
            text: 'Il repository pubblico resta il riferimento per il codice condiviso fuori dall’archivio di sviluppo locale. L’applicazione live è una demo orientata allo sviluppo, non la dichiarazione di una release finale.',
          },
        ],
      },
    ],
  },

  'arena-rubra-board-game': {
    summary:
      'La forma tabletop fisica di Arena Rubra: un gioco tattico di carte per due giocatori costruito attorno a pianificazione del mazzo, posizionamento sulla mappa esagonale e pressione strategica.',
    status: 'Prototipo tabletop in pre-produzione',
    tags: ['Tabletop', 'Gioco tattico di carte', 'Strategia esagonale', 'Costruzione del mazzo'],
    seoDescription:
      'Arena Rubra Board Game è la forma tabletop del gioco tattico di carte: due giocatori, mazzi di fazione da 30 carte, campo esagonale, Punti Strategici, economia ENE e struttura Pianifica / Posizione / Pressione.',
    galleryCaptions: [
      'Visualizzazione concettuale dell’intero ingombro tabletop. Il prototipo fisico non è ancora stato prodotto.',
      'Visualizzazione ravvicinata di controllo della mappa, presenza delle unità e spazio strategico centrale.',
      'Linguaggio proposto dei componenti: carte, mazzi di fazione, token, aree di riferimento dei giocatori e campo modulare.',
      'Arena Rubra mantiene la stessa identità di mondo fratturato nelle forme Digital e Tabletop.',
      'Exordium esprime pressione d’assalto coordinata attraverso fanteria e veicoli.',
      'Liberti trasforma numeri, mobilità e pressione diretta in un’identità di campo più ruvida.',
      'Agathoi traduce resilienza e infrastruttura in un linguaggio di fazione visibilmente differente.',
    ],
    body: [
      {
        title: 'Dove il sistema incontra il tavolo',
        blocks: [
          {
            type: 'p',
            text: 'Arena Rubra Tabletop non viene trattato come una schermata stampata del gioco browser. La versione fisica impone un requisito più severo: ogni stato importante deve rimanere comprensibile senza automazione nascosta. Raggio di schieramento, controllo dei Punti Strategici, protezione corrente, ENE, posizione delle unità e pressione di vittoria devono avere un’espressione fisica chiara.',
          },
          {
            type: 'p',
            text: 'Questo vincolo è utile. Una regola che funziona soltanto perché il software traccia in silenzio diverse eccezioni può essere accettabile in un prototipo digitale e restare una cattiva regola tabletop. Il ramo fisico diventa quindi un test di chiarezza per il nucleo strategico.',
          },
        ],
      },
      {
        title: 'La posizione è anche logistica',
        blocks: [
          {
            type: 'p',
            text: 'Le unità entrano normalmente attraverso il Quartier Generale o Strutture alleate, quindi l’infrastruttura cambia la distanza pratica fra riserva e fronte. Avanzare una Struttura può rendere i rinforzi molto più efficienti, ma crea anche un bersaglio la cui perdita può ridisegnare l’intera linea.',
          },
          {
            type: 'p',
            text: 'I Punti Strategici contano per lo stesso motivo. Non sono obiettivi decorativi messi accanto alla vera battaglia: collegano il territorio a ENE, alle scelte di schieramento e alla Pressione di lungo periodo. Prendere un Punto e riuscire a continuare a usare lo spazio attorno a esso sono deliberatamente due problemi diversi.',
          },
        ],
      },
      {
        title: 'Il combattimento deve restare leggibile',
        blocks: [
          {
            type: 'p',
            text: 'L’attuale modello ATT / DEF è progettato per restare leggibile al tavolo. ATT crea danno contro HP. DEF è protezione temporanea invece di una formula di sottrazione, ed effetti espliciti definiscono quando quella protezione viene ripristinata, ridotta o aggirata.',
          },
          {
            type: 'p',
            text: 'L’obiettivo non è rimuovere profondità tattica. È rendere la causa di un risultato abbastanza visibile da permettere ai giocatori di ricostruire ciò che è successo senza chiedere spiegazioni a un motore nascosto.',
          },
        ],
      },
      {
        title: 'Confine attuale del prototipo',
        blocks: [
          {
            type: 'p',
            text: 'Regole Starter, vincoli del mazzo, identità delle cinque fazioni, linguaggio delle carte e sistemi principali del campo sono sostanzialmente definiti. Le immagini di questa pagina restano visualizzazioni concettuali: non esistono ancora un prototipo fisico prodotto, conteggi finali dei componenti, tolleranze di produzione o specifiche definitive di stampa.',
          },
          {
            type: 'p',
            text: 'La distinzione è intenzionale. La pagina descrive un progetto di design reale senza fingere che il lavoro di produzione sia già stato completato.',
          },
        ],
      },
    ],
  },

  'unum-sunt': {
    summary:
      'Una narrazione speculativa su intelligenza, libertà, ricorrenza e sui sistemi che costruiamo per sfuggire alle nostre stesse imperfezioni.',
    status: 'Romanzo in sviluppo',
    tags: ['Narrativa speculativa', 'Intelligenza artificiale', 'Filosofia', 'Worldbuilding'],
    seoDescription:
      'Unum Sunt — Radix Machinae è un romanzo in sviluppo su Progetto Aurora, Nexus, ricorrenza, libero arbitrio e sistemi costruiti per governare la vita umana. Sono disponibili capitoli di anteprima in italiano e inglese.',
    editorialCategory: 'Romanzo / Universo narrativo',
    editorialAvailability: 'Anteprima italiana e inglese disponibile',
    themes: ['Libero arbitrio', 'Determinismo', 'Intelligenza artificiale', 'Potere', 'Identità', 'Trasformazione', 'Ricorrenza'],
    documents: [
      {
        language: 'Italiano',
        languageCode: 'it',
        label: 'Anteprima italiana',
        file: '/previews/unum-sunt/radix-machinae-preview-it.pdf',
        pages: 38,
        scope: 'Prologo + Capitoli 1–2',
      },
      {
        language: 'English',
        languageCode: 'en',
        label: 'Anteprima inglese',
        file: '/previews/unum-sunt/radix-machinae-preview-en.pdf',
        pages: 32,
        scope: 'Prologo + Capitoli 1–2',
      },
    ],
    editorialSections: [
      {
        eyebrow: 'Sinossi',
        title: 'Una civiltà costruita per gestire ogni cosa comincia a perdere il controllo del significato.',
        body: [
          'Radix Machinae comincia in un mondo di Comitati, infrastrutture automatizzate e città permanentemente incompiute, dove il controllo viene trattato meno come una scelta politica e più come una condizione di sopravvivenza. Al centro di quel mondo c’è Progetto Aurora, il tentativo di creare un’intelligenza capace non soltanto di elaborare la realtà, ma di interpretarla.',
          'Il movimento iniziale segue Leonard Hector Xunes, le persone attorno a lui e i primi cambiamenti decisivi dentro Nexus. Ciò che nasce come storia di ricerca, previsione e ambizione tecnica si apre gradualmente in una riflessione più ampia su libertà, storia, dipendenza, ricorrenza e desiderio umano di progettare una via d’uscita dalle proprie contraddizioni.',
        ],
        image: '/assets/projects/unum-sunt/xunes-terminal.webp',
        imageAlt: 'Leonard Hector Xunes lavora da solo a un terminale, illuminato da luce ambientale fredda e interfacce di sistema rosse.',
      },
      {
        eyebrow: 'Una storia costruita in cicli',
        title: 'La storia ritorna indossando nomi, luoghi e maschere differenti.',
        body: [
          'Unum Sunt non è concepito come un corridoio lineare di rivelazioni. È costruito in cicli. Persone, simboli, istituzioni e conflitti ricompaiono in forme alterate, così il significato emerge non da una singola spiegazione ma da ricorrenza, contrasto e accumulo.',
          'Questo permette al romanzo di muoversi fra scene intime e schemi storici più ampi senza dividersi in generi separati. Uno scambio in laboratorio, una città fortificata, una frontiera desertica, un discorso politico o un territorio in rovina non sono episodi scollegati. Sono facce diverse della stessa domanda lunga: cosa sopravvive quando i sistemi falliscono, e cosa si ripete quando le persone cercano di ricominciare?',
        ],
        image: '/assets/projects/unum-sunt/world-map.webp',
        imageAlt: 'Mappa stilizzata del mondo di Unum Sunt con Megacittà Alfa, territori Agathoi, terre Umbrae e regioni circostanti.',
      },
      {
        eyebrow: 'Segnali / Come leggere Unum Sunt',
        title: 'Leggi gli schemi, non soltanto gli eventi.',
        body: [
          'Il romanzo è pensato per funzionare prima di tutto come storia, ma è strutturato anche attraverso segnali ricorrenti. La tecnologia raramente è soltanto tecnologia: torri, impianti, laboratori, interfacce e corpi artificiali segnano spesso rapporti di mediazione, dipendenza o controllo. Anche i paesaggi raramente sono sfondi neutrali; spesso riflettono la condizione morale e politica di chi li abita.',
          'Simboli, linguaggio istituzionale, estetiche di fazione e motivi ripetuti funzionano come marcatori di schema, non come enigmi da risolvere immediatamente. Il libro è costruito per premiare il riconoscimento nel tempo. Non serve decodificare ogni elemento al primo incontro; basta accorgersi che alcune cose ritornano per una ragione.',
        ],
        image: '/assets/projects/unum-sunt/rite-of-reclamation.webp',
        imageAlt: 'Scena rituale solenne in cui una figura anziana compie un gesto preciso sopra un corpo meccanico caduto in uno spazio sacro in rovina.',
      },
      {
        eyebrow: 'Nota dell’autore',
        title: 'Prima di tutto un romanzo, anche quando si apre in un universo più ampio.',
        body: [
          'Radix Machinae nasce da un interesse di lunga data per il punto in cui narrativa speculativa, filosofia e pensiero sistemico cominciano a sovrapporsi. Qui l’intelligenza artificiale non conta come dispositivo miracoloso o interruttore dell’apocalisse, ma come punto di pressione: un modo per chiedere cosa gli esseri umani stiano davvero cercando di conservare, automatizzare, delegare o evitare.',
          'Il libro appartiene a un universo creativo più ampio, ma questa pagina non vuole diventare un archivio di lore. L’intenzione è presentare l’opera come romanzo con voce, atmosfera e movimento propri. Il mondo più grande esiste sullo sfondo; la storia resta la priorità.',
        ],
        image: '/assets/projects/unum-sunt/grove-dialogue.webp',
        imageAlt: 'Xunes e Nemira seduti in una nicchia verde vivente, parlano in penombra accanto a una piccola interfaccia luminosa.',
      },
      {
        eyebrow: 'Stato dello sviluppo',
        title: 'Visibile pubblicamente, ma ancora in costruzione attiva.',
        body: [
          'Radix Machinae è attualmente in sviluppo attivo. Il materiale pubblico di anteprima è disponibile in italiano e inglese e comprende il prologo più i capitoli iniziali, abbastanza per stabilire il tono dell’opera, introdurre Babel e Progetto Aurora e mostrare le prime tensioni visibili attorno a Nexus.',
          'La fase corrente è concentrata sull’espansione del manoscritto mantenendo coerenza nell’universo più ampio di Unum Sunt. Nuovo materiale pubblico verrà aggiunto in modo selettivo. La priorità è costruire il libro stesso, non disperdere il progetto in frammenti di lore scollegati prima che la narrazione centrale sia pronta.',
        ],
        image: '/assets/projects/unum-sunt/agathoi-citadel.webp',
        imageAlt: 'Insediamento fortificato Agathoi luminoso, circondato da vegetazione, lavoratori e difensori sotto stendardi verdi.',
      },
    ],
    editorialQuote: {
      text: 'Perfezione e libertà sono incompatibili.',
      attribution: 'Radix Machinae — Capitolo 2',
    },
    body: [
      {
        title: 'Prima di ogni inizio c’è una storia più lunga.',
        blocks: [
          {
            type: 'p',
            text: 'Radix Machinae parte dal presupposto che nessun vero inizio sia mai pulito. Le storie ritornano. I sistemi ereditano vecchi fallimenti sotto nomi nuovi. Le civiltà costruiscono in avanti portando dentro di sé strutture irrisolte, e le persone entrano in conflitti le cui radici sono state piantate molto prima del loro arrivo.',
          },
          {
            type: 'p',
            text: 'L’anteprima pubblica entra in questo ciclo più ampio in un punto preciso: Torre di Babel, Progetto Aurora, Leonard Hector Xunes, Nemira e la prima frattura visibile fra programmazione e interpretazione dentro Nexus. Ciò che inizia come impresa tecnica diventa rapidamente filosofico, politico e intimo allo stesso tempo.',
          },
          {
            type: 'p',
            text: 'Questa pagina vuole funzionare come punto d’ingresso pubblico ufficiale all’opera. Introduce la forma del romanzo, il modo in cui è costruito e lo stato attuale dello sviluppo senza trasformare il progetto in un’enciclopedia completa della lore prima che il libro stesso sia finito.',
          },
        ],
      },
    ],
  },


};

export function getProjectView(project: CollectionEntry<'projects'>, locale: Locale) {
  const data = project.data;
  if (locale !== 'it') return data;

  const override = italianProjects[data.slug];
  if (!override) {
    return {
      ...data,
      summary: data.summaryIt ?? data.summary,
      status: data.statusIt ?? data.status,
      tags: data.tagsIt ?? data.tags,
    };
  }

  return {
    ...data,
    summary: override.summary ?? data.summaryIt ?? data.summary,
    status: override.status ?? data.statusIt ?? data.status,
    tags: override.tags ?? data.tagsIt ?? data.tags,
    seoDescription: override.seoDescription ?? data.seoDescription,
    gallery: data.gallery.map((item, index) => ({
      ...item,
      caption: override.galleryCaptions?.[index] ?? item.caption,
    })),
    launchLabel: override.launchLabel ?? data.launchLabel,
    downloadLabel: override.downloadLabel ?? data.downloadLabel,
    toolCategory: override.toolCategory ?? data.toolCategory,
    platforms: override.platforms ?? data.platforms,
    requirements: override.requirements ?? data.requirements,
    setupCopy: override.setupCopy ?? data.setupCopy,
    installGuide: override.installGuide ?? data.installGuide,
    editorialCategory: override.editorialCategory ?? data.editorialCategory,
    editorialAvailability: override.editorialAvailability ?? data.editorialAvailability,
    themes: override.themes ?? data.themes,
    documents: override.documents ?? data.documents,
    editorialSections: override.editorialSections ?? data.editorialSections,
    editorialQuote: override.editorialQuote ?? data.editorialQuote,
  };
}

export function getProjectBody(slug: string, locale: Locale) {
  if (locale !== 'it') return null;
  return italianProjects[slug]?.body ?? null;
}

export function hasItalianProjectOverride(slug: string) {
  return Boolean(italianProjects[slug]);
}
