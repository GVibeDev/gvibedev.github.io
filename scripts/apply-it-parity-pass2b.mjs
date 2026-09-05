import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function read(rel) {
  return fs.readFileSync(path.join(root, rel), 'utf8').replace(/\r\n/g, '\n');
}

function write(rel, text) {
  fs.writeFileSync(path.join(root, rel), text, 'utf8');
}

function replaceExact(text, from, to, label) {
  if (!text.includes(from)) {
    throw new Error(`Pass 2B patch failed: expected source fragment not found (${label}).`);
  }
  return text.replace(from, to);
}

function replaceRegex(text, pattern, to, label) {
  if (!pattern.test(text)) {
    throw new Error(`Pass 2B patch failed: expected source pattern not found (${label}).`);
  }
  return text.replace(pattern, to);
}

function patchDigital() {
  const rel = 'src/layouts/ArenaRubraDigitalLayout.astro';
  let text = read(rel);

  if (text.includes('getArenaRubraDigitalCopy')) {
    console.log(`${rel}: already locale-aware, skipping.`);
    return;
  }

  text = replaceExact(
    text,
`import {
  arenaRubraUniverse,
  arenaRubraTestingSummary,
  arenaRubraTestAreas,
} from '../data/shared/arena-rubra';`,
`import { getNavigationPath, type Locale } from '../i18n/config';
import { getProjectView } from '../i18n/projects-it';
import { getArenaRubraShared, getArenaRubraDigitalCopy } from '../i18n/arena-rubra';`,
    'digital imports',
  );

  text = replaceRegex(
    text,
    /interface Props \{ project: CollectionEntry<'projects'>; \}\nconst \{ project \} = Astro\.props;\nconst \{ data \} = project;\n\nconst digitalSystems = \[[\s\S]*?const tabletopStrengths = \[[^\n]*\];/,
`interface Props {
  project: CollectionEntry<'projects'>;
  locale?: Locale;
}

const { project, locale = 'en' } = Astro.props;
const data = getProjectView(project, locale);
const arena = getArenaRubraShared(locale);
const copy = getArenaRubraDigitalCopy(locale);

const arenaRubraUniverse = arena.universe;
const arenaRubraTestingSummary = arena.testingSummary;
const arenaRubraTestAreas = arena.testAreas;
const digitalSystems = copy.systems;
const digitalFactionNotes = copy.factionNotes;
const investigationExamples = copy.investigations;
const digitalStrengths = copy.digitalStrengths;
const tabletopStrengths = copy.tabletopStrengths;`,
    'digital frontmatter copy block',
  );

  const replacements = [
    [
      `<BaseLayout title={data.title} description={data.seoDescription ?? data.summary} image={data.socialImage ?? data.cover}>`,
      `<BaseLayout title={data.title} description={data.seoDescription ?? data.summary} image={data.socialImage ?? data.cover} locale={locale}>`,
      'digital BaseLayout locale',
    ],
    [
      `<a class="digital-back" href="/web-apps/">← Web Apps</a>`,
      `<a class="digital-back" href={getNavigationPath('/web-apps/', locale)}>{copy.back}</a>`,
      'digital back link',
    ],
    [`<span>Playable browser project</span>`, `<span>{copy.kicker}</span>`, 'digital kicker'],
    [`<ProjectActions links={data.links} />`, `<ProjectActions links={data.links} locale={locale} />`, 'digital actions'],
    [`<span>Digital branch</span>`, `<span>{copy.branch}</span>`, 'digital branch eyebrow'],
    [`<strong>Rules that can be played, measured and challenged.</strong>`, `<strong>{copy.branchTitle}</strong>`, 'digital branch title'],
    [`<p>The browser build is both a playable game and a development environment for testing the strategic system.</p>`, `<p>{copy.branchBody}</p>`, 'digital branch body'],
    [`<span class="eyebrow">The Digital Arena</span>`, `<span class="eyebrow">{copy.arenaEyebrow}</span>`, 'digital arena eyebrow'],
    [`<h2>Not simply the tabletop game on a screen.</h2>`, `<h2>{copy.arenaTitle}</h2>`, 'digital arena title'],
    [`<p>Arena Rubra Digital turns the rules into an environment that can be executed repeatedly, inspected and revised. The visible match is only one part of the application.</p>`, `<p>{copy.arenaBody[0]}</p>`, 'digital arena body 1'],
    [`<p>Deck tools, map authoring, tutorials, AI opponents, history, telemetry and diagnostics make the browser version useful both to players and to the design process itself.</p>`, `<p>{copy.arenaBody[1]}</p>`, 'digital arena body 2'],
    [`alt="Arena Rubra Control Center showing play, card, map, analysis and system tools."`, `alt={copy.evidenceAlt}`, 'digital evidence alt'],
    [`<span class="eyebrow">A project with instruments</span>`, `<span class="eyebrow">{copy.evidenceEyebrow}</span>`, 'digital evidence eyebrow'],
    [`<h2>The game carries its workshop with it.</h2>`, `<h2>{copy.evidenceTitle}</h2>`, 'digital evidence title'],
    [`<p>The Control Center exposes the parts normally hidden behind a development build: content, maps, statistics, telemetry, logs, version state, settings, diagnostics and archive operations.</p>`, `<p>{copy.evidenceBody[0]}</p>`, 'digital evidence body 1'],
    [`<p>That matters because a behavioural problem can be traced through evidence instead of being reduced to “the match felt wrong.”</p>`, `<p>{copy.evidenceBody[1]}</p>`, 'digital evidence body 2'],
    [`<span>The five factions</span>`, `<span>{copy.factionsEyebrow}</span>`, 'digital factions eyebrow'],
    [`<h2>One canonical identity, expressed through executable doctrine.</h2>`, `<h2>{copy.factionsTitle}</h2>`, 'digital factions title'],
    [`<p>The common faction descriptions below come from the shared Arena Rubra data source used by both Digital and Tabletop. The digital branch adds a testing interpretation rather than maintaining a second copy of the canon.</p>`, `<p>{copy.factionsBody}</p>`, 'digital factions body'],
    [`<ArenaRubraFactionGrid />`, `<ArenaRubraFactionGrid locale={locale} />`, 'digital faction grid locale'],
    [`<span class="eyebrow">Testing lab</span>`, `<span class="eyebrow">{copy.testingEyebrow}</span>`, 'digital testing eyebrow'],
    [`<h2>The game is also its own test lab.</h2>`, `<h2>{copy.testingTitle}</h2>`, 'digital testing title'],
    [`aria-label="Arena Rubra testing volume"`, `aria-label={copy.testingAria}`, 'digital testing aria'],
    [`aria-label="Examples of Arena Rubra investigations"`, `aria-label={copy.investigationAria}`, 'digital investigations aria'],
    [`alt="Arena Rubra telemetry panel showing match schema, seed and player data with JSON export controls."`, `alt={copy.telemetryAlt}`, 'digital telemetry alt'],
    [`<figcaption>Telemetry is treated as design evidence, not decoration.</figcaption>`, `<figcaption>{copy.telemetryCaption}</figcaption>`, 'digital telemetry caption'],
    [`<span>What we test</span>`, `<span>{copy.testEyebrow}</span>`, 'digital test eyebrow'],
    [`<h2>Winning is only one signal.</h2>`, `<h2>{copy.testTitle}</h2>`, 'digital test title'],
    [`<span class="eyebrow">One world. Two playable forms.</span>`, `<span class="eyebrow">{copy.formsEyebrow}</span>`, 'digital forms eyebrow'],
    [`<h2>Digital and Tabletop test different weaknesses.</h2>`, `<h2>{copy.formsTitle}</h2>`, 'digital forms title'],
    [`<p>The goal is not numerical identity between the two versions. The goal is preservation of the same strategic character while each medium is allowed to demand different solutions.</p>`, `<p>{copy.formsBody}</p>`, 'digital forms body'],
    [`<span>Digital is good at</span>`, `<span>{copy.digitalGood}</span>`, 'digital strengths label'],
    [`<span>Tabletop is good at</span>`, `<span>{copy.tabletopGood}</span>`, 'tabletop strengths label'],
    [`<ArenaRubraEcosystemLinks currentSlug="arena-rubra-digital" />`, `<ArenaRubraEcosystemLinks currentSlug="arena-rubra-digital" locale={locale} />`, 'digital ecosystem locale'],
    [`<ProjectGallery items={data.gallery} />`, `<ProjectGallery items={data.gallery} locale={locale} />`, 'digital gallery locale'],
    [`<span>Human-directed development</span>`, `<span>{copy.humanEyebrow}</span>`, 'digital human eyebrow'],
    [`<strong>Automation does not choose what deserves to stay.</strong>`, `<strong>{copy.humanTitle}</strong>`, 'digital human title'],
    [`<p>The build can generate evidence quickly. Requirements, acceptance criteria, interpretation and final design decisions remain human responsibilities.</p>`, `<p>{copy.humanBody}</p>`, 'digital human body'],
  ];

  for (const [from, to, label] of replacements) {
    text = replaceExact(text, from, to, label);
  }

  write(rel, text);
  console.log(`${rel}: localized EN/IT shared layout.`);
}

function patchTabletop() {
  const rel = 'src/layouts/BoardGameProjectLayout.astro';
  let text = read(rel);

  if (text.includes('getArenaRubraTabletopCopy')) {
    console.log(`${rel}: already locale-aware, skipping.`);
    return;
  }

  text = replaceExact(
    text,
`import {
  arenaRubraUniverse,
  arenaRubraCorePrinciples,
  arenaRubraMatchFlow,
  arenaRubraSystems,
  arenaRubraTestingSummary,
  arenaRubraTestAreas,
} from '../data/shared/arena-rubra';`,
`import { getNavigationPath, type Locale } from '../i18n/config';
import { getProjectView } from '../i18n/projects-it';
import { getArenaRubraShared, getArenaRubraTabletopCopy } from '../i18n/arena-rubra';`,
    'tabletop imports',
  );

  text = replaceRegex(
    text,
    /interface Props \{\n  project: CollectionEntry<'projects'>;\n\}\n\nconst \{ project \} = Astro\.props;\nconst \{ data \} = project;\n\nconst facts = \[[\s\S]*?const developmentStatus = \[[\s\S]*?\n\];/,
`interface Props {
  project: CollectionEntry<'projects'>;
  locale?: Locale;
}

const { project, locale = 'en' } = Astro.props;
const data = getProjectView(project, locale);
const arena = getArenaRubraShared(locale);
const copy = getArenaRubraTabletopCopy(locale);

const arenaRubraUniverse = arena.universe;
const arenaRubraCorePrinciples = arena.corePrinciples;
const arenaRubraMatchFlow = arena.matchFlow;
const arenaRubraSystems = arena.systems;
const arenaRubraTestingSummary = arena.testingSummary;
const arenaRubraTestAreas = arena.testAreas;

const facts = copy.facts;
const sampleCardAssets = [
  { src: '/assets/projects/arena-rubra-board-game/cards/varran.webp' },
  { src: '/assets/projects/arena-rubra-board-game/cards/adepto-fabeot.webp' },
  { src: '/assets/projects/arena-rubra-board-game/cards/predone-liberto.webp' },
];
const sampleCards = sampleCardAssets.map((asset, index) => ({
  ...asset,
  ...copy.sampleCards[index],
}));
const developmentStatus = copy.developmentStatus;`,
    'tabletop frontmatter copy block',
  );

  const replacements = [
    [
      `  image={data.socialImage ?? data.cover}\n>`,
      `  image={data.socialImage ?? data.cover}\n  locale={locale}\n>`,
      'tabletop BaseLayout locale',
    ],
    [
      `<a class="tabletop-back" href="/worlds/">← Worlds</a>`,
      `<a class="tabletop-back" href={getNavigationPath('/worlds/', locale)}>{copy.back}</a>`,
      'tabletop back link',
    ],
    [`<span>Tabletop project</span>`, `<span>{copy.kicker}</span>`, 'tabletop kicker'],
    [`<a class="tabletop-action tabletop-action--primary" href="#what-is-arena-rubra">Explore the tabletop system ↓</a>`, `<a class="tabletop-action tabletop-action--primary" href="#what-is-arena-rubra">{copy.explore}</a>`, 'tabletop explore action'],
    [`<a class="tabletop-action" href="/projects/arena-rubra-digital/">Digital project ↗</a>`, `<a class="tabletop-action" href={getNavigationPath('/projects/arena-rubra-digital/', locale)}>{copy.digitalProject}</a>`, 'tabletop digital action'],
    [`aria-label="Prototype status"`, `aria-label={copy.prototypeAria}`, 'tabletop prototype aria'],
    [`<span>Prototype status</span>`, `<span>{copy.prototypeEyebrow}</span>`, 'tabletop prototype eyebrow'],
    [`<strong>Concept visuals, real rules.</strong>`, `<strong>{copy.prototypeTitle}</strong>`, 'tabletop prototype title'],
    [`<p>The physical edition shown here has not yet been manufactured. Table images visualize the intended component system.</p>`, `<p>{copy.prototypeBody}</p>`, 'tabletop prototype body'],
    [`<figcaption>Tabletop concept visualization — not a photograph of a manufactured prototype.</figcaption>`, `<figcaption>{copy.heroCaption}</figcaption>`, 'tabletop hero caption'],
    [`aria-label="Arena Rubra tabletop quick facts"`, `aria-label={copy.factsAria}`, 'tabletop facts aria'],
    [`<span class="eyebrow">What is Arena Rubra?</span>`, `<span class="eyebrow">{copy.introEyebrow}</span>`, 'tabletop intro eyebrow'],
    [`<h2>Cards do not replace the battlefield. They enter it.</h2>`, `<h2>{copy.introTitle}</h2>`, 'tabletop intro title'],
    [`<p>Two players lead asymmetric factions across a hexagonal map, deploy units and Structures, contest Strategic Points and convert territorial control into economic and strategic pressure.</p>`, `<p>{copy.introBody[0]}</p>`, 'tabletop intro body 1'],
    [`<p>The deck defines the available options, but positioning determines whether those options matter. A strong card played in the wrong place can accomplish very little. A modest unit holding the right hex can change the entire match.</p>`, `<p>{copy.introBody[1]}</p>`, 'tabletop intro body 2'],
    [`<h2>Build the force. Shape the battlefield. Make control matter.</h2>`, `<h2>{copy.systemTitle}</h2>`, 'tabletop system title'],
    [`<span>How a match works</span>`, `<span>{copy.matchEyebrow}</span>`, 'tabletop match eyebrow'],
    [`<h2>Understand the loop in under a minute.</h2>`, `<h2>{copy.matchTitle}</h2>`, 'tabletop match title'],
    [`<span>Core mechanics</span>`, `<span>{copy.mechanicsEyebrow}</span>`, 'tabletop mechanics eyebrow'],
    [`<h2>The system under the cards.</h2>`, `<h2>{copy.mechanicsTitle}</h2>`, 'tabletop mechanics title'],
    [`<span>Tabletop discipline</span>`, `<span>{copy.disciplineEyebrow}</span>`, 'tabletop discipline eyebrow'],
    [`<strong>Every state must remain visible.</strong>`, `<strong>{copy.disciplineTitle}</strong>`, 'tabletop discipline title'],
    [`<p>The tabletop branch cannot hide complexity inside code. Deployment, protection, position, economy and victory state must stay readable without invisible automation.</p>`, `<p>{copy.disciplineBody}</p>`, 'tabletop discipline body'],
    [`<span>The five factions</span>`, `<span>{copy.factionsEyebrow}</span>`, 'tabletop factions eyebrow'],
    [`<h2>Five strategic philosophies reading the same board differently.</h2>`, `<h2>{copy.factionsTitle}</h2>`, 'tabletop factions title'],
    [`<ArenaRubraFactionGrid />`, `<ArenaRubraFactionGrid locale={locale} />`, 'tabletop faction grid locale'],
    [`<span class="eyebrow">Designed by playing it</span>`, `<span class="eyebrow">{copy.testingEyebrow}</span>`, 'tabletop testing eyebrow'],
    [`<span>What we test</span>`, `<span>{copy.testEyebrow}</span>`, 'tabletop test eyebrow'],
    [`<h2>Winning is only one signal.</h2>`, `<h2>{copy.testTitle}</h2>`, 'tabletop test title'],
    [`<span class="eyebrow">One system, two forms</span>`, `<span class="eyebrow">{copy.formsEyebrow}</span>`, 'tabletop forms eyebrow'],
    [`<h2>Digital lab. Physical destination.</h2>`, `<h2>{copy.formsTitle}</h2>`, 'tabletop forms title'],
    [`<p>The goal is not numerical identity between the two versions. The goal is preservation of the same strategic character while each medium is allowed to expose different strengths and different weaknesses.</p>`, `<p>{copy.formsBody}</p>`, 'tabletop forms body'],
    [`<ArenaRubraEcosystemLinks currentSlug="arena-rubra-board-game" />`, `<ArenaRubraEcosystemLinks currentSlug="arena-rubra-board-game" locale={locale} />`, 'tabletop ecosystem locale'],
    [`<ProjectGallery items={data.gallery} />`, `<ProjectGallery items={data.gallery} locale={locale} />`, 'tabletop gallery locale'],
    [`<span>Current card language</span>`, `<span>{copy.cardsEyebrow}</span>`, 'tabletop cards eyebrow'],
    [`<h2>Cards designed to become pieces on the battlefield.</h2>`, `<h2>{copy.cardsTitle}</h2>`, 'tabletop cards title'],
    [`<p>These samples are presentation material for the evolving tabletop edition. Artwork and structure are representative; values and wording may still change before a physical prototype is frozen.</p>`, `<p>{copy.cardsBody}</p>`, 'tabletop cards body'],
    [`<span class="eyebrow">Development status</span>`, `<span class="eyebrow">{copy.statusEyebrow}</span>`, 'tabletop status eyebrow'],
    [`<h2>Past the idea stage. Not yet a manufactured object.</h2>`, `<h2>{copy.statusTitle}</h2>`, 'tabletop status title'],
    [`<p>The physical prototype, production specifications, final component counts and manufacturing decisions remain future work. The project is currently focused on balance, usability and component specification.</p>`, `<p>{copy.statusBody}</p>`, 'tabletop status body'],
  ];

  for (const [from, to, label] of replacements) {
    text = replaceExact(text, from, to, label);
  }

  write(rel, text);
  console.log(`${rel}: localized EN/IT shared layout.`);
}


function patchToolInstallGuide() {
  const rel = 'src/components/tool/ToolInstallGuide.astro';
  let text = read(rel);

  if (text.includes('const ui = locale ===')) {
    console.log(`${rel}: already locale-aware, skipping.`);
    return;
  }

  text = replaceExact(
    text,
`interface Props {
  platforms: string[];
  category?: string;
  requirements: Requirement[];
  setupCopy?: SetupCopy;
  guide?: {
    title: string;
    eyebrow?: string;
    intro?: string;
    warningTitle?: string;
    warning?: string;
    footnote?: string;
    steps: InstallStep[];
  };
}`,
`interface Props {
  platforms: string[];
  category?: string;
  requirements: Requirement[];
  setupCopy?: SetupCopy;
  guide?: {
    title: string;
    eyebrow?: string;
    intro?: string;
    warningTitle?: string;
    warning?: string;
    footnote?: string;
    steps: InstallStep[];
  };
  locale?: 'en' | 'it';
}`,
    'ToolInstallGuide Props locale',
  );

  text = replaceExact(
    text,
`const { platforms, category, requirements, setupCopy, guide } = Astro.props;
const coreRequirements = requirements.filter((item) => item.scope === 'core');
const secondaryRequirements = requirements.filter((item) => item.scope === 'generation');

const setupHeading = setupCopy?.heading ?? 'Know what the tool needs before you install it.';
const setupIntro =
  setupCopy?.intro ??
  'Sprite Studio can be used as a production workflow, while local AI generation adds a separate WanGP runtime stack. The two layers are documented independently so the Python environment is not hidden behind a generic “install” button.';
const coreLabel = setupCopy?.coreLabel ?? 'Core';
const coreTitle = setupCopy?.coreTitle ?? 'Sprite Studio';
const secondaryLabel = setupCopy?.secondaryLabel ?? 'Local generation';
const secondaryTitle = setupCopy?.secondaryTitle ?? 'WanGP bridge';
const publicPackage = setupCopy?.publicPackage ?? 'Not published yet';
const platformLabel = setupCopy?.platformLabel ?? 'Platform';
const secondaryRequiredLabel = setupCopy?.secondaryRequiredLabel ?? 'Required for generation';
const guideEyebrow = guide?.eyebrow ?? 'Validated development setup';
const warningTitle = guide?.warningTitle ?? 'Python version matters.';`,
`const { platforms, category, requirements, setupCopy, guide, locale = 'en' } = Astro.props;
const coreRequirements = requirements.filter((item) => item.scope === 'core');
const secondaryRequirements = requirements.filter((item) => item.scope === 'generation');

const ui = locale === 'it'
  ? {
      setup: 'Setup / dipendenze',
      category: 'Categoria',
      publicPackage: 'Pacchetto pubblico',
      required: 'Obbligatorio',
      optional: 'Opzionale',
      setupHeading: 'Conosci ciò che serve allo strumento prima di installarlo.',
      setupIntro: 'Le dipendenze e i livelli opzionali vengono documentati separatamente, così il setup non viene nascosto dietro un pulsante generico.',
      core: 'Principale',
      localGeneration: 'Generazione locale',
      notPublished: 'Non ancora pubblicato',
      platform: 'Piattaforma',
      requiredForGeneration: 'Richiesto per la generazione',
      validatedSetup: 'Setup di sviluppo validato',
      warningTitle: 'La versione di Python conta.',
      footnote: 'Questa configurazione documenta un ambiente noto e validato per lo sviluppo GVibeDev; non implica che lo strumento possa funzionare soltanto con queste versioni esatte.',
    }
  : {
      setup: 'Setup / dependencies',
      category: 'Category',
      publicPackage: 'Public package',
      required: 'Required',
      optional: 'Optional',
      setupHeading: 'Know what the tool needs before you install it.',
      setupIntro: 'Sprite Studio can be used as a production workflow, while local AI generation adds a separate WanGP runtime stack. The two layers are documented independently so the Python environment is not hidden behind a generic “install” button.',
      core: 'Core',
      localGeneration: 'Local generation',
      notPublished: 'Not published yet',
      platform: 'Platform',
      requiredForGeneration: 'Required for generation',
      validatedSetup: 'Validated development setup',
      warningTitle: 'Python version matters.',
      footnote: 'This is the configuration validated for the GVibeDev development machine. It documents a known-good environment, not a claim that WanGP can only run with these exact versions. The final Sprite Studio installer/start command will be added when the first public repository and release are published.',
    };

const setupHeading = setupCopy?.heading ?? ui.setupHeading;
const setupIntro = setupCopy?.intro ?? ui.setupIntro;
const coreLabel = setupCopy?.coreLabel ?? ui.core;
const coreTitle = setupCopy?.coreTitle ?? 'Sprite Studio';
const secondaryLabel = setupCopy?.secondaryLabel ?? ui.localGeneration;
const secondaryTitle = setupCopy?.secondaryTitle ?? 'WanGP bridge';
const publicPackage = setupCopy?.publicPackage ?? ui.notPublished;
const platformLabel = setupCopy?.platformLabel ?? ui.platform;
const secondaryRequiredLabel = setupCopy?.secondaryRequiredLabel ?? ui.requiredForGeneration;
const guideEyebrow = guide?.eyebrow ?? ui.validatedSetup;
const warningTitle = guide?.warningTitle ?? ui.warningTitle;`,
    'ToolInstallGuide localized defaults',
  );

  const replacements = [
    [`<span>Setup / dependencies</span>`, `<span>{ui.setup}</span>`, 'ToolInstallGuide setup label'],
    [`<span>Category</span>`, `<span>{ui.category}</span>`, 'ToolInstallGuide category label'],
    [`<span>Public package</span>`, `<span>{ui.publicPackage}</span>`, 'ToolInstallGuide public package label'],
    [`<span>{item.required ? 'Required' : 'Optional'}</span>`, `<span>{item.required ? ui.required : ui.optional}</span>`, 'ToolInstallGuide core required label'],
    [`<span>{item.required ? secondaryRequiredLabel : 'Optional'}</span>`, `<span>{item.required ? secondaryRequiredLabel : ui.optional}</span>`, 'ToolInstallGuide secondary optional label'],
    [
      `{guide.footnote ??
          'This is the configuration validated for the GVibeDev development machine. It documents a known-good environment, not a claim that WanGP can only run with these exact versions. The final Sprite Studio installer/start command will be added when the first public repository and release are published.'}`,
      `{guide.footnote ?? ui.footnote}`,
      'ToolInstallGuide footnote fallback',
    ],
  ];

  for (const [from, to, label] of replacements) {
    text = replaceExact(text, from, to, label);
  }

  write(rel, text);
  console.log(`${rel}: localized EN/IT shared component.`);
}

patchToolInstallGuide();
patchDigital();
patchTabletop();

console.log('Italian Parity Pass 2B shared-layout transformation complete.');
