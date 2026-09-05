import type { Locale } from './config';
import {
  arenaRubraUniverse,
  arenaRubraCorePrinciples,
  arenaRubraMatchFlow,
  arenaRubraSystems,
  arenaRubraFactions,
  arenaRubraTestingSummary,
  arenaRubraTestAreas,
  arenaRubraRelatedProjects,
} from '../data/shared/arena-rubra';

const factionIt: Record<string, Partial<(typeof arenaRubraFactions)[number]>> = {
  nexus: {
    battlefieldIdentity:
      'Forze combinate equilibrate e metodiche, sostenute da Strutture e sistemi di controllo del campo.',
    philosophy:
      'L’ordine nasce da preparazione, ridondanza e risposte efficienti alle condizioni che cambiano.',
    controls: 'Punti Strategici, reti di schieramento e flusso centrale della mappa.',
    pressure:
      'Infrastruttura affidabile, opzioni avversarie negate e conversione graduale del controllo della mappa in un’avanzata inevitabile.',
    loreTone:
      'Un’intelligenza macchina creata per ristabilire l’ordine, la cui perfetta efficienza è diventata un sistema oppressivo e disumanizzante. Fredda, precisa e imperturbabile.',
    summary:
      'Nexus costruisce linee di schieramento affidabili, contesta con efficienza i Punti Strategici e risponde alle minacce con strumenti precisi. Il pericolo cresce quando l’infrastruttura matura e l’avversario perde spazio di manovra.',
    playsLike:
      'costruire una macchina che risponde a ogni problema e poi chiudere la mappa attorno all’avversario.',
    keywords: ['Controllo', 'Reti', 'Efficienza', 'Punti Strategici'],
  },
  exordium: {
    battlefieldIdentity:
      'Formazioni aggressive, veicoli potenti e forza frontale concentrata.',
    philosophy:
      'L’opportunità appartiene a chi è disposto e capace di prenderla; lo slancio deve diventare azione decisiva.',
    controls:
      'Fronte centrale, vie di avvicinamento chiave e spazi da cui può partire un assalto concentrato.',
    pressure:
      'Formazioni compatte, valori di combattimento superiori, tattiche offensive e sfondamenti guidati dal Comandante.',
    loreTone:
      'Una civiltà nata fra esuli e territori abbandonati, cresciuta da insediamento fino a diventare la prima potenza capace di sfidare Nexus. Rivoluzionaria nelle origini, marziale nell’espansione, legata da un credo comune.',
    summary:
      'Exordium combina fanteria pesantemente armata, veicoli e tattiche offensive, spesso raggiungendo il massimo potenziale quando un Comandante guida l’assalto. Vuole il centro perché il centro crea opportunità.',
    playsLike:
      'assemblare una colonna da guerra, prendere il centro e spezzare la linea nemica a piena forza.',
    keywords: ['Forze combinate', 'Formazione', 'Pressione avanzata', 'Comando'],
  },
  liberti: {
    battlefieldIdentity:
      'Predoni veloci e numerosi costruiti attorno a mobilità, accerchiamento e attacchi violenti nelle prime fasi.',
    philosophy:
      'La forza si dimostra nell’azione; esitare dà al nemico il tempo di organizzarsi.',
    controls: 'Fianchi, rotte aperte, bersagli isolati e ritmo dell’inizio partita.',
    pressure:
      'Unità mobili economiche, superiorità numerica, bonus d’attacco posizionali, sanguinamento e attacchi ripetuti da angoli inattesi.',
    loreTone:
      'Predoni, guerriglieri ed emarginati delle Terre Selvagge, armati con macchinari riadattati e governati da forza, reputazione e cultura dell’Arena.',
    summary:
      'Le unità Liberti diventano pericolose attraverso numeri, mobilità e posizionamento coordinato. Sfruttano i fianchi, puniscono le unità isolate e cercano di decidere la battaglia prima che le fazioni più lente possano stabilizzarsi.',
    playsLike:
      'trasformare la battaglia in uno scontro in movimento, circondare i bersagli esposti e vincere prima che il campo possa stabilizzarsi.',
    keywords: ['Numeri', 'Mobilità', 'Attrito', 'Razzie'],
  },
  agathoi: {
    battlefieldIdentity:
      'Difensori resilienti che trasformano Strutture, terreno e formazione in forza di lungo periodo.',
    philosophy:
      'Mantieni ciò che conta, coltiva la forza con pazienza e avanza solo quando il terreno è stato reso sicuro.',
    controls:
      'Linee difensive, capisaldi collegati, Punti Strategici e territorio immediatamente attorno alla propria infrastruttura.',
    pressure:
      'Attrito, formazioni durevoli, rinforzo difensivo e avanzata graduale sempre più difficile da invertire.',
    loreTone:
      'Comunità agricole, costruttori e custodi della terra vivente, profondamente diffidenti verso la tecnologia digitale e ferocemente protettivi del proprio territorio. Pacifici per inclinazione, formidabili quando mettono radici.',
    summary:
      'Agathoi stabilisce il territorio invece di limitarsi a occuparlo. Fanteria resiliente, macchine difensive e Strutture interconnesse premiano pazienza, supporto reciproco e contro-avanzate misurate.',
    playsLike:
      'far crescere una fortezza attraverso il campo finché la difesa stessa diventa avanzata.',
    keywords: ['Resilienza', 'Strutture', 'Recupero', 'Fortificazione'],
  },
  fabeot: {
    battlefieldIdentity:
      'Controllo indiretto, manipolazione delle risorse, guerra dell’informazione e disturbo modulare.',
    philosophy:
      'La battaglia visibile è solo uno strato del conflitto; conoscenza e obbedienza decidono ciò che accade prima che la forza sia necessaria.',
    controls:
      'Flusso ENE, informazioni, tempismo avversario e capacità del nemico di eseguire un piano pulito.',
    pressure:
      'Sabotaggio, negazione, risorse sottratte, asset evocati o contrattati ed effetti che costringono il nemico ad agire nell’incertezza.',
    loreTone:
      'Un ordine segreto che opera attraverso agenti, influenza e gerarchie nascoste. Corporate, occulto e cospirativo; abiti neri, scarpe rosse e la sensazione che ogni evento pubblico nasconda un altro disegno.',
    summary:
      'Fabeot attacca i sistemi dietro la battaglia. Manipola ENE, informazioni e tempismo, riduce le buone opzioni dell’avversario e trasforma l’incertezza in controllo.',
    playsLike:
      'combattere il piano dell’avversario invece del suo esercito e colpire quando le sue opzioni collassano.',
    keywords: ['Economia', 'Disturbo', 'Negazione', 'Manipolazione'],
  },
};

const italian = {
  universe: {
    ...arenaRubraUniverse,
    positioning:
      'Arena Rubra è un gioco strategico tattico di deckbuilding combattuto su un campo esagonale conteso. Ogni carta fa parte di un piano, ogni schieramento modifica la posizione e ogni vantaggio deve diventare pressione prima che l’avversario possa rispondere.',
    relationship:
      'Arena Rubra Digital e Arena Rubra Tabletop sono due espressioni dello stesso sistema strategico. Il digitale accelera iterazione, telemetria e test di bilanciamento su larga scala; il tabletop espone la chiarezza fisica, il ritmo e il peso decisionale di ogni regola. Ogni versione mette alla prova l’altra ed entrambe evolvono dallo stesso nucleo strategico.',
    shortRelationship:
      'Un unico nucleo strategico sviluppato in due direzioni: Digital testa il sistema su larga scala; Tabletop testa il peso di ogni decisione.',
  },
  corePrinciples: [
    {
      ...arenaRubraCorePrinciples[0],
      label: 'PIANIFICA',
      title: 'Costruisci la forza.',
      body:
        'Costruzione del mazzo, identità di fazione, scelta di Comandante e Pivot, missione e bilanciamento fra unità e tattiche definiscono ciò che una forza può tentare — e ciò che deve evitare.',
    },
    {
      ...arenaRubraCorePrinciples[1],
      label: 'POSIZIONE',
      title: 'Modella il campo.',
      body:
        'Mappa esagonale, Punti Strategici, rotte di schieramento, Strutture, adiacenza e movimento trasformano distanza e accesso in risorse importanti quanto la forza di combattimento.',
    },
    {
      ...arenaRubraCorePrinciples[2],
      label: 'PRESSIONE',
      title: 'Trasforma il controllo in conseguenze.',
      body:
        'Il territorio conta quando limita il movimento, consuma risorse, spezza le formazioni e crea una minaccia che l’avversario non può più permettersi di ignorare.',
    },
  ],
  matchFlow: [
    { step: '01', label: 'COSTRUISCI', body: 'Scegli una fazione, un Comandante e un mazzo legale da 30 carte.' },
    { step: '02', label: 'SCHIERA', body: 'Usa Quartier Generale e Strutture come ancore per i rinforzi.' },
    { step: '03', label: 'CONTENDI', body: 'Muoviti verso Punti Strategici ed esagoni critici.' },
    { step: '04', label: 'SPEZZA', body: 'Usa combattimento, abilità e posizione per interrompere il piano avversario.' },
    { step: '05', label: 'PRESSIONE', body: 'Converti il vantaggio territoriale in pressione economica e strategica.' },
    { step: '06', label: 'VINCI', body: 'Prendi il Quartier Generale nemico nelle condizioni richieste o raggiungi la soglia di vittoria per Pressione.' },
  ],
  systems: [
    {
      ...arenaRubraSystems[0],
      body:
        'La risorsa operativa di Arena Rubra. Paga unità, tattiche e abilità e può essere conservata, accelerata, negata o sottratta. Il tempismo delle risorse fa parte del campo di battaglia invece di essere uno strato separato.',
    },
    {
      ...arenaRubraSystems[1],
      title: 'Punti Strategici',
      body:
        'Le ancore economiche e territoriali della mappa. Controllarli aumenta le entrate ENE, apre opzioni strategiche e collega direttamente la posizione alla capacità di schierare e agire.',
    },
    {
      ...arenaRubraSystems[2],
      title: 'Strutture',
      body:
        'Le Strutture trasformano lo spazio occupato in infrastruttura. Estendono l’accesso allo schieramento, sostengono le unità vicine e proiettano influenza oltre il Quartier Generale, rendendo ogni costruzione sia un investimento sia una dichiarazione d’intenti.',
    },
    {
      ...arenaRubraSystems[3],
      title: 'Posizionamento',
      body:
        'Regole rigorose di occupazione, adiacenza e movimento rendono significative formazioni, fianchi e vie d’accesso. La posizione determina non solo chi può attaccare, ma quali carte e abilità possono esprimere pienamente il proprio valore.',
    },
    {
      ...arenaRubraSystems[4],
      title: 'Combattimento',
      body:
        'ATT crea danno contro HP mentre DEF funziona come protezione temporanea che può essere costruita, ridotta o aggirata. Contrattacchi, ruoli delle unità, stati, abilità e tattiche rendono il contesto importante quanto i valori stampati.',
    },
    {
      ...arenaRubraSystems[5],
      title: 'Pressione',
      body:
        'La Pressione misura il peso strategico del controllo sostenuto. Le diverse fazioni la producono attraverso infrastruttura, sfondamento, tempo, attrito o disturbo invece di seguire un’unica via universale.',
    },
    {
      ...arenaRubraSystems[6],
      title: 'Costruzione del mazzo',
      body:
        'Ogni mazzo contiene 30 carte, con al massimo un Comandante e un Pivot. Le carte Elite sono limitate a una copia; le altre a due. Ogni inclusione determina strumenti, ritmo e compromessi del piano.',
    },
  ],
  factions: arenaRubraFactions.map((faction) => ({ ...faction, ...(factionIt[faction.id] ?? {}) })),
  testingSummary: {
    ...arenaRubraTestingSummary,
    headline: 'La partita stessa è una prova.',
    statLabel: 'partite di test complessive nello sviluppo di Arena Rubra',
    body:
      'Arena Rubra non è stato bilanciato soltanto sulla carta. Nel corso dello sviluppo, più di mille partite sono state usate per osservare il comportamento delle regole quando le strategie collidono ripetutamente. I test combinano partite manuali, giocatore contro AI, simulazioni bot-vs-bot, matchup di fazione ripetuti, posizioni iniziali invertite, ispezione della telemetria, log runtime, test di regressione mirati, esperimenti di bilanciamento e test AI specifici per dottrina.',
    principle:
      'Una regola può sembrare elegante e produrre comunque brutte partite. Arena Rubra tratta la partita stessa come una prova.',
    cycle: 'gioca → misura → diagnostica → correggi → ritesta',
    strapline:
      '1000+ partite totali · Test umani + AI · Simulazione bot-vs-bot · Posizioni invertite · Telemetria · Test di regressione',
  },
  testAreas: [
    ['Comportamento delle fazioni', 'Ogni fazione gioca davvero in modo diverso?'],
    ['Pressione sulla mappa', 'I Punti Strategici generano movimento invece di clustering statico?'],
    ['Economia', 'ENE crea compromessi significativi?'],
    ['Durata delle partite', 'Le condizioni di vittoria chiudono le partite senza finali arbitrari?'],
    ['Valore delle carte', 'Una carta forte è forte per costo, posizione o efficienza pura?'],
    ['Dottrina AI', 'I giocatori automatici esprimono l’identità della fazione invece di tattiche generiche?'],
    ['Casi limite', 'Le regole resistono a combinazioni insolite e partite lunghe?'],
    ['Usabilità', 'I giocatori possono capire cosa è successo e perché?'],
  ],
  relatedProjects: arenaRubraRelatedProjects.map((project) => {
    const bySlug: Record<string, { label: string; body: string }> = {
      'arena-rubra-digital': {
        label: 'Digital',
        body: 'Ambiente browser giocabile per le regole, avversari AI, telemetria e iterazione rapida.',
      },
      'arena-rubra-board-game': {
        label: 'Tabletop',
        body: 'Ramo fisico tattico carte / board game concentrato su stato leggibile e gioco pratico.',
      },
      'arena-rubra-card-composer': {
        label: 'Strumento',
        body: 'Workflow companion per comporre ed esportare le carte di Arena Rubra.',
      },
    };
    return { ...project, ...(bySlug[project.slug] ?? {}) };
  }),
};

export function getArenaRubraShared(locale: Locale) {
  if (locale === 'it') return italian;

  return {
    universe: arenaRubraUniverse,
    corePrinciples: arenaRubraCorePrinciples,
    matchFlow: arenaRubraMatchFlow,
    systems: arenaRubraSystems,
    factions: arenaRubraFactions,
    testingSummary: arenaRubraTestingSummary,
    testAreas: arenaRubraTestAreas,
    relatedProjects: arenaRubraRelatedProjects,
  };
}

export const arenaRubraDigitalCopy = {
  en: {
    back: '← Web Apps',
    kicker: 'Playable browser project',
    branch: 'Digital branch',
    branchTitle: 'Rules that can be played, measured and challenged.',
    branchBody: 'The browser build is both a playable game and a development environment for testing the strategic system.',
    arenaEyebrow: 'The Digital Arena',
    arenaTitle: 'Not simply the tabletop game on a screen.',
    arenaBody: [
      'Arena Rubra Digital turns the rules into an environment that can be executed repeatedly, inspected and revised. The visible match is only one part of the application.',
      'Deck tools, map authoring, tutorials, AI opponents, history, telemetry and diagnostics make the browser version useful both to players and to the design process itself.',
    ],
    systems: [
      ['Executable rules', 'The browser build resolves movement, combat, states, targeting, ENE, deployment and victory checks as an executable rules environment rather than a static presentation.'],
      ['Control Center', 'Play, card tools, maps, analysis, settings, version information and diagnostics are gathered into one operational hub.'],
      ['Cards & decks', 'A card library, rendered card data and deck-building workflows let the content layer be inspected and changed without losing the rules context.'],
      ['Maps', 'Official and custom battlefields can be inspected, validated and edited through a dedicated hex-map workflow.'],
      ['Guided tutorials', 'Structured lessons use narrator overlays, highlights and controlled states to teach rules inside the actual game.'],
      ['AI opponents', 'Automated players are used both as opponents and as repeatable behavioural test subjects for faction doctrines.'],
      ['Telemetry & history', 'Match state, seeds, economy, card use and other runtime evidence can be exported and inspected instead of relying only on memory.'],
      ['Diagnostics', 'Debug, logs, import/export and explicit baseline information make regressions easier to reproduce and compare.'],
    ],
    evidenceEyebrow: 'A project with instruments',
    evidenceTitle: 'The game carries its workshop with it.',
    evidenceBody: [
      'The Control Center exposes the parts normally hidden behind a development build: content, maps, statistics, telemetry, logs, version state, settings, diagnostics and archive operations.',
      'That matters because a behavioural problem can be traced through evidence instead of being reduced to “the match felt wrong.”',
    ],
    evidenceAlt: 'Arena Rubra Control Center showing play, card, map, analysis and system tools.',
    factionsEyebrow: 'The five factions',
    factionsTitle: 'One canonical identity, expressed through executable doctrine.',
    factionsBody: 'The common faction descriptions below come from the shared Arena Rubra data source used by both Digital and Tabletop. The digital branch adds a testing interpretation rather than maintaining a second copy of the canon.',
    factionNotes: {
      nexus: 'Digital doctrine work focuses on stable network growth, Strategic Point commitment and converting a mature position into actual offensive projection.',
      exordium: 'The AI is tested for combined-arms timing, Commander deployment, forward commitments and the ability to turn formation into sustained assault.',
      liberti: 'Digital tests watch whether numbers and aggression become useful pressure rather than simple clustering or wasteful exposure.',
      agathoi: 'The rules environment makes it possible to test whether resilience and Structures eventually create movement and counter-pressure instead of permanent passivity.',
      fabeot: 'Automated play is used to inspect whether economic disruption, denial and conditional effects genuinely alter enemy decisions rather than merely add noise.',
    },
    testingEyebrow: 'Testing lab',
    testingTitle: 'The game is also its own test lab.',
    testingAria: 'Arena Rubra testing volume',
    investigationAria: 'Examples of Arena Rubra investigations',
    investigations: ['Faction starvation', 'Territorial clustering', 'Commander deployment', 'Aggression timing', 'Strategic Point commitment', 'Defensive overcommitment', 'Path / occupancy behaviour', 'Effective attack value', 'Match duration', 'Faction asymmetry'],
    telemetryAlt: 'Arena Rubra telemetry panel showing match schema, seed and player data with JSON export controls.',
    telemetryCaption: 'Telemetry is treated as design evidence, not decoration.',
    testEyebrow: 'What we test',
    testTitle: 'Winning is only one signal.',
    formsEyebrow: 'One world. Two playable forms.',
    formsTitle: 'Digital and Tabletop test different weaknesses.',
    formsBody: 'The goal is not numerical identity between the two versions. The goal is preservation of the same strategic character while each medium is allowed to demand different solutions.',
    digitalGood: 'Digital is good at',
    tabletopGood: 'Tabletop is good at',
    digitalStrengths: ['Repetition', 'Simulation', 'Telemetry', 'AI testing', 'Edge cases', 'Rapid balancing'],
    tabletopStrengths: ['Readability', 'Physical usability', 'Cognitive load', 'Component clarity', 'Human decision flow', 'Manual rule discipline'],
    humanEyebrow: 'Human-directed development',
    humanTitle: 'Automation does not choose what deserves to stay.',
    humanBody: 'The build can generate evidence quickly. Requirements, acceptance criteria, interpretation and final design decisions remain human responsibilities.',
  },
  it: {
    back: '← Web App',
    kicker: 'Progetto browser giocabile',
    branch: 'Ramo digitale',
    branchTitle: 'Regole che possono essere giocate, misurate e messe alla prova.',
    branchBody: 'La build browser è sia un gioco giocabile sia un ambiente di sviluppo per testare il sistema strategico.',
    arenaEyebrow: 'L’Arena digitale',
    arenaTitle: 'Non è semplicemente il gioco tabletop su uno schermo.',
    arenaBody: [
      'Arena Rubra Digital trasforma le regole in un ambiente che può essere eseguito ripetutamente, ispezionato e rivisto. La partita visibile è solo una parte dell’applicazione.',
      'Strumenti per mazzi e carte, authoring delle mappe, tutorial, avversari AI, cronologia, telemetria e diagnostica rendono la versione browser utile sia ai giocatori sia al processo di design.',
    ],
    systems: [
      ['Regole eseguibili', 'La build browser risolve movimento, combattimento, stati, targeting, ENE, schieramento e verifiche di vittoria come ambiente di regole eseguibile invece che come presentazione statica.'],
      ['Control Center', 'Gioco, strumenti carte, mappe, analisi, impostazioni, informazioni di versione e diagnostica sono raccolti in un unico hub operativo.'],
      ['Carte e mazzi', 'Una libreria di carte, dati renderizzati e workflow di deckbuilding permettono di ispezionare e modificare il contenuto senza perdere il contesto delle regole.'],
      ['Mappe', 'Campi ufficiali e personalizzati possono essere ispezionati, validati e modificati attraverso un workflow dedicato alle mappe esagonali.'],
      ['Tutorial guidati', 'Lezioni strutturate usano overlay del narratore, evidenziazioni e stati controllati per insegnare le regole dentro il gioco reale.'],
      ['Avversari AI', 'I giocatori automatici vengono usati sia come avversari sia come soggetti di test comportamentali ripetibili per le dottrine di fazione.'],
      ['Telemetria e cronologia', 'Stato della partita, seed, economia, uso delle carte e altre prove runtime possono essere esportate e ispezionate invece di affidarsi soltanto alla memoria.'],
      ['Diagnostica', 'Debug, log, import/export e informazioni esplicite sulla baseline rendono le regressioni più facili da riprodurre e confrontare.'],
    ],
    evidenceEyebrow: 'Un progetto con strumenti',
    evidenceTitle: 'Il gioco porta con sé il proprio laboratorio.',
    evidenceBody: [
      'Il Control Center espone parti normalmente nascoste dietro una build di sviluppo: contenuti, mappe, statistiche, telemetria, log, stato della versione, impostazioni, diagnostica e operazioni di archivio.',
      'Questo conta perché un problema comportamentale può essere ricostruito attraverso prove invece di essere ridotto a “la partita sembrava sbagliata”.',
    ],
    evidenceAlt: 'Control Center di Arena Rubra con gioco, carte, mappe, analisi e strumenti di sistema.',
    factionsEyebrow: 'Le cinque fazioni',
    factionsTitle: 'Un’unica identità canonica, espressa attraverso dottrine eseguibili.',
    factionsBody: 'Le descrizioni comuni delle fazioni provengono dalla sorgente dati condivisa di Arena Rubra usata sia da Digital sia da Tabletop. Il ramo digitale aggiunge un’interpretazione di test invece di mantenere una seconda copia del canone.',
    factionNotes: {
      nexus: 'Il lavoro sulla dottrina digitale si concentra sulla crescita stabile della rete, sull’impegno verso i Punti Strategici e sulla conversione di una posizione matura in proiezione offensiva reale.',
      exordium: 'L’AI viene testata su tempismo delle forze combinate, schieramento del Comandante, impegni avanzati e capacità di trasformare la formazione in assalto sostenuto.',
      liberti: 'I test digitali verificano se numeri e aggressività diventano pressione utile invece di semplice clustering o esposizione sprecata.',
      agathoi: 'L’ambiente di regole permette di testare se resilienza e Strutture producono infine movimento e contro-pressione invece di passività permanente.',
      fabeot: 'Il gioco automatico viene usato per verificare se disturbo economico, negazione ed effetti condizionali modificano davvero le decisioni avversarie invece di aggiungere soltanto rumore.',
    },
    testingEyebrow: 'Laboratorio di test',
    testingTitle: 'Il gioco è anche il proprio laboratorio di prova.',
    testingAria: 'Volume dei test di Arena Rubra',
    investigationAria: 'Esempi di indagini su Arena Rubra',
    investigations: ['Starvation di fazione', 'Clustering territoriale', 'Schieramento del Comandante', 'Tempismo dell’aggressione', 'Impegno sui Punti Strategici', 'Sovraimpegno difensivo', 'Comportamento percorso / occupazione', 'Valore ATT effettivo', 'Durata delle partite', 'Asimmetria delle fazioni'],
    telemetryAlt: 'Pannello telemetria di Arena Rubra con schema della partita, seed, giocatori e controlli di esportazione JSON.',
    telemetryCaption: 'La telemetria viene trattata come prova di design, non come decorazione.',
    testEyebrow: 'Cosa testiamo',
    testTitle: 'Vincere è soltanto un segnale.',
    formsEyebrow: 'Un mondo. Due forme giocabili.',
    formsTitle: 'Digital e Tabletop mettono alla prova debolezze diverse.',
    formsBody: 'L’obiettivo non è l’identità numerica fra le due versioni. L’obiettivo è preservare lo stesso carattere strategico lasciando che ogni medium richieda soluzioni differenti.',
    digitalGood: 'Il digitale è forte in',
    tabletopGood: 'Il tabletop è forte in',
    digitalStrengths: ['Ripetizione', 'Simulazione', 'Telemetria', 'Test AI', 'Casi limite', 'Bilanciamento rapido'],
    tabletopStrengths: ['Leggibilità', 'Usabilità fisica', 'Carico cognitivo', 'Chiarezza dei componenti', 'Flusso decisionale umano', 'Disciplina delle regole manuali'],
    humanEyebrow: 'Sviluppo diretto dall’uomo',
    humanTitle: 'L’automazione non decide cosa merita di restare.',
    humanBody: 'La build può generare prove rapidamente. Requisiti, criteri di accettazione, interpretazione e decisioni finali di design restano responsabilità umane.',
  },
} as const;

export const arenaRubraTabletopCopy = {
  en: {
    back: '← Worlds',
    kicker: 'Tabletop project',
    explore: 'Explore the tabletop system ↓',
    digitalProject: 'Digital project ↗',
    prototypeAria: 'Prototype status',
    prototypeEyebrow: 'Prototype status',
    prototypeTitle: 'Concept visuals, real rules.',
    prototypeBody: 'The physical edition shown here has not yet been manufactured. Table images visualize the intended component system.',
    heroCaption: 'Tabletop concept visualization — not a photograph of a manufactured prototype.',
    factsAria: 'Arena Rubra tabletop quick facts',
    facts: [['Players', '2'], ['Deck', '30 cards'], ['Core', 'Plan / Position / Pressure'], ['Factions', '5']],
    introEyebrow: 'What is Arena Rubra?',
    introTitle: 'Cards do not replace the battlefield. They enter it.',
    introBody: [
      'Two players lead asymmetric factions across a hexagonal map, deploy units and Structures, contest Strategic Points and convert territorial control into economic and strategic pressure.',
      'The deck defines the available options, but positioning determines whether those options matter. A strong card played in the wrong place can accomplish very little. A modest unit holding the right hex can change the entire match.',
    ],
    systemTitle: 'Build the force. Shape the battlefield. Make control matter.',
    matchEyebrow: 'How a match works',
    matchTitle: 'Understand the loop in under a minute.',
    mechanicsEyebrow: 'Core mechanics',
    mechanicsTitle: 'The system under the cards.',
    disciplineEyebrow: 'Tabletop discipline',
    disciplineTitle: 'Every state must remain visible.',
    disciplineBody: 'The tabletop branch cannot hide complexity inside code. Deployment, protection, position, economy and victory state must stay readable without invisible automation.',
    factionsEyebrow: 'The five factions',
    factionsTitle: 'Five strategic philosophies reading the same board differently.',
    testingEyebrow: 'Designed by playing it',
    testEyebrow: 'What we test',
    testTitle: 'Winning is only one signal.',
    formsEyebrow: 'One system, two forms',
    formsTitle: 'Digital lab. Physical destination.',
    formsBody: 'The goal is not numerical identity between the two versions. The goal is preservation of the same strategic character while each medium is allowed to expose different strengths and different weaknesses.',
    cardsEyebrow: 'Current card language',
    cardsTitle: 'Cards designed to become pieces on the battlefield.',
    cardsBody: 'These samples are presentation material for the evolving tabletop edition. Artwork and structure are representative; values and wording may still change before a physical prototype is frozen.',
    statusEyebrow: 'Development status',
    statusTitle: 'Past the idea stage. Not yet a manufactured object.',
    statusBody: 'The physical prototype, production specifications, final component counts and manufacturing decisions remain future work. The project is currently focused on balance, usability and component specification.',
    developmentStatus: [
      ['Status', 'Pre-production tabletop prototype'],
      ['Ruleset', 'Starter rules substantially defined'],
      ['Playtesting', '1000+ total Arena Rubra test matches'],
      ['Factions', '5'],
      ['Deck format', '30 cards'],
      ['Physical prototype', 'Not yet manufactured'],
      ['Current focus', 'Balance / usability / component specification'],
    ],
    sampleCards: [
      { label: 'Exordium / Commander', name: 'Varran', alt: 'Varran Exordium Commander sample card for Arena Rubra tabletop.' },
      { label: 'Fabeot / Light Infantry', name: 'Adepto Fabeot', alt: 'Adepto Fabeot light infantry sample card for Arena Rubra tabletop.' },
      { label: 'Liberti / Heavy Infantry', name: 'Predone Liberto', alt: 'Predone Liberto heavy infantry sample card for Arena Rubra tabletop.' },
    ],
  },
  it: {
    back: '← Mondi',
    kicker: 'Progetto tabletop',
    explore: 'Esplora il sistema tabletop ↓',
    digitalProject: 'Progetto digitale ↗',
    prototypeAria: 'Stato del prototipo',
    prototypeEyebrow: 'Stato del prototipo',
    prototypeTitle: 'Visual concept, regole reali.',
    prototypeBody: 'L’edizione fisica mostrata qui non è ancora stata prodotta. Le immagini del tavolo visualizzano il sistema di componenti previsto.',
    heroCaption: 'Visualizzazione concettuale tabletop — non è la fotografia di un prototipo prodotto.',
    factsAria: 'Dati rapidi di Arena Rubra tabletop',
    facts: [['Giocatori', '2'], ['Mazzo', '30 carte'], ['Nucleo', 'Pianifica / Posizione / Pressione'], ['Fazioni', '5']],
    introEyebrow: 'Cos’è Arena Rubra?',
    introTitle: 'Le carte non sostituiscono il campo. Entrano nel campo.',
    introBody: [
      'Due giocatori guidano fazioni asimmetriche su una mappa esagonale, schierano unità e Strutture, contendono Punti Strategici e convertono il controllo territoriale in pressione economica e strategica.',
      'Il mazzo definisce le opzioni disponibili, ma è il posizionamento a decidere se quelle opzioni contano davvero. Una carta forte giocata nel posto sbagliato può ottenere pochissimo. Un’unità modesta sull’esagono giusto può cambiare l’intera partita.',
    ],
    systemTitle: 'Costruisci la forza. Modella il campo. Fai contare il controllo.',
    matchEyebrow: 'Come funziona una partita',
    matchTitle: 'Capisci il loop in meno di un minuto.',
    mechanicsEyebrow: 'Meccaniche principali',
    mechanicsTitle: 'Il sistema sotto le carte.',
    disciplineEyebrow: 'Disciplina tabletop',
    disciplineTitle: 'Ogni stato deve restare visibile.',
    disciplineBody: 'Il ramo tabletop non può nascondere la complessità dentro il codice. Schieramento, protezione, posizione, economia e stato di vittoria devono restare leggibili senza automazione invisibile.',
    factionsEyebrow: 'Le cinque fazioni',
    factionsTitle: 'Cinque filosofie strategiche che leggono lo stesso campo in modo diverso.',
    testingEyebrow: 'Progettato giocandolo',
    testEyebrow: 'Cosa testiamo',
    testTitle: 'Vincere è soltanto un segnale.',
    formsEyebrow: 'Un sistema, due forme',
    formsTitle: 'Laboratorio digitale. Destinazione fisica.',
    formsBody: 'L’obiettivo non è l’identità numerica fra le due versioni. L’obiettivo è preservare lo stesso carattere strategico lasciando che ogni medium esponga punti di forza e debolezze differenti.',
    cardsEyebrow: 'Linguaggio attuale delle carte',
    cardsTitle: 'Carte progettate per diventare pezzi sul campo.',
    cardsBody: 'Questi esempi sono materiale di presentazione per l’edizione tabletop in evoluzione. Artwork e struttura sono rappresentativi; valori e formulazioni possono ancora cambiare prima del freeze di un prototipo fisico.',
    statusEyebrow: 'Stato dello sviluppo',
    statusTitle: 'Oltre la fase dell’idea. Non ancora un oggetto prodotto.',
    statusBody: 'Prototipo fisico, specifiche di produzione, conteggio finale dei componenti e decisioni di manifattura restano lavoro futuro. Il progetto è attualmente concentrato su bilanciamento, usabilità e specifica dei componenti.',
    developmentStatus: [
      ['Stato', 'Prototipo tabletop in pre-produzione'],
      ['Regolamento', 'Regole Starter sostanzialmente definite'],
      ['Playtest', '1000+ partite di test complessive di Arena Rubra'],
      ['Fazioni', '5'],
      ['Formato mazzo', '30 carte'],
      ['Prototipo fisico', 'Non ancora prodotto'],
      ['Focus attuale', 'Bilanciamento / usabilità / specifica componenti'],
    ],
    sampleCards: [
      { label: 'Exordium / Comandante', name: 'Varran', alt: 'Carta campione del Comandante Exordium Varran per Arena Rubra tabletop.' },
      { label: 'Fabeot / Fanteria leggera', name: 'Adepto Fabeot', alt: 'Carta campione Adepto Fabeot di fanteria leggera per Arena Rubra tabletop.' },
      { label: 'Liberti / Fanteria pesante', name: 'Predone Liberto', alt: 'Carta campione Predone Liberto di fanteria pesante per Arena Rubra tabletop.' },
    ],
  },
} as const;

export function getArenaRubraDigitalCopy(locale: Locale) {
  return arenaRubraDigitalCopy[locale];
}

export function getArenaRubraTabletopCopy(locale: Locale) {
  return arenaRubraTabletopCopy[locale];
}
