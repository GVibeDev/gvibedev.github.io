export const arenaRubraUniverse = {
  title: 'Arena Rubra',
  positioning:
    'Arena Rubra is a tactical deckbuilding strategy game fought across a contested hex battlefield. Every card is part of a plan, every deployment changes the position, and every advantage must become pressure before the opponent can answer.',
  relationship:
    'Arena Rubra Digital and Arena Rubra Tabletop are two expressions of the same strategy system. Digital play accelerates iteration, telemetry and large-scale balance testing; tabletop play exposes the physical clarity, pacing and decision weight of every rule. Each version tests the other, and both evolve from the same strategic core.',
  shortRelationship:
    'One strategic core, developed in two directions: Digital tests the system at scale; Tabletop tests the weight of every decision.',
};

export const arenaRubraCorePrinciples = [
  {
    id: 'plan',
    label: 'PLAN',
    title: 'Build the force.',
    body:
      'Deck construction, faction identity, Commander and Pivot selection, mission choice and the balance between units and tactics define what a force can attempt — and what it must avoid.',
  },
  {
    id: 'position',
    label: 'POSITION',
    title: 'Shape the battlefield.',
    body:
      'The hex map, Strategic Points, deployment routes, Structures, adjacency and movement turn distance and access into resources as important as raw combat strength.',
  },
  {
    id: 'pressure',
    label: 'PRESSURE',
    title: 'Turn control into consequence.',
    body:
      'Territory matters when it constrains movement, exhausts resources, breaks formations and creates a threat the opponent can no longer afford to ignore.',
  },
];

export const arenaRubraMatchFlow = [
  { step: '01', label: 'BUILD', body: 'Choose a faction, Commander and legal 30-card deck.' },
  { step: '02', label: 'DEPLOY', body: 'Use Headquarters and Structures as reinforcement anchors.' },
  { step: '03', label: 'CONTEST', body: 'Move toward Strategic Points and critical hexes.' },
  { step: '04', label: 'BREAK', body: 'Use combat, abilities and positioning to disrupt the enemy plan.' },
  { step: '05', label: 'PRESSURE', body: 'Convert territorial advantage into economic and strategic pressure.' },
  { step: '06', label: 'WIN', body: 'Take the enemy Headquarters under the required conditions or reach the Pressure victory threshold.' },
];

export const arenaRubraSystems = [
  {
    id: 'ene',
    title: 'ENE',
    body:
      'Arena Rubra’s operational resource. It pays for units, tactics and abilities, and can be conserved, accelerated, denied or stolen. Resource timing is part of the battlefield rather than a layer separate from it.',
  },
  {
    id: 'strategic-points',
    title: 'Strategic Points',
    body:
      'The economic and territorial anchors of the map. Controlling them increases ENE income, opens strategic options and connects positioning directly to the ability to deploy and act.',
  },
  {
    id: 'structures',
    title: 'Structures',
    body:
      'Structures turn occupied space into infrastructure. They extend deployment access, support nearby units and project influence beyond the Headquarters, making every build both an investment and a declaration of intent.',
  },
  {
    id: 'positioning',
    title: 'Positioning',
    body:
      'Strict occupancy, adjacency and movement rules make formations, flanks and access routes meaningful. Position determines not only who can attack, but which cards and abilities can realise their full value.',
  },
  {
    id: 'combat',
    title: 'Combat',
    body:
      'ATT creates damage against HP while DEF functions as temporary protection that can be built, reduced or bypassed. Counterattacks, unit roles, states, abilities and tactics make context as important as printed values.',
  },
  {
    id: 'pressure',
    title: 'Pressure',
    body:
      'Pressure measures the strategic weight of sustained control. Different factions create it through infrastructure, breakthrough, tempo, attrition or disruption rather than through one universal route.',
  },
  {
    id: 'deck-construction',
    title: 'Deck Construction',
    body:
      'Each deck contains 30 cards, including at most one Commander and one Pivot. Elite cards are limited to one copy; other cards to two. Every inclusion determines the tools, tempo and compromises of the plan.',
  },
];

export const arenaRubraFactions = [
  {
    id: 'nexus',
    name: 'Nexus',
    battlefieldIdentity:
      'Balanced, methodical combined arms supported by structures and battlefield systems.',
    philosophy:
      'Order comes from preparation, redundancy and efficient responses to changing conditions.',
    controls: 'Strategic Points, deployment networks and the central flow of the map.',
    pressure:
      'Reliable infrastructure, denied enemy options and the gradual conversion of map control into an inevitable advance.',
    loreTone:
      'A machine intelligence created to restore order, whose perfect efficiency became an oppressive and dehumanising system. Cold, precise and imperturbable.',
    summary:
      'Nexus creates dependable deployment lines, contests Strategic Points efficiently and answers threats with precise tools. Its danger increases as infrastructure matures and the opponent loses room to manoeuvre.',
    playsLike:
      'building a machine that answers every problem, then closing the map around the opponent.',
    keywords: ['Control', 'Networks', 'Efficiency', 'Strategic Points'],
    image: '/assets/projects/arena-rubra/shared/factions/nexus.webp',
    imageAlt: 'Nexus armored battlefield vehicle operating beneath automated aerial systems in a dense forest.',
    texture: '/assets/projects/arena-rubra/shared/textures/nexus.webp',
    accent: '#3f79b8',
  },
  {
    id: 'exordium',
    name: 'Exordium',
    battlefieldIdentity:
      'Aggressive formations, powerful vehicles and concentrated frontal force.',
    philosophy:
      'Opportunity belongs to those willing and able to seize it; momentum must be converted into decisive action.',
    controls:
      'The central front, key approach lanes and the spaces from which a massed assault can be launched.',
    pressure:
      'Compact formations, superior combat values, offensive tactics and commander-led breakthroughs.',
    loreTone:
      'A civilisation born among exiles and abandoned territories, rising from a settlement into the first power capable of challenging Nexus. Revolutionary in origin, martial in expansion, bound by a shared creed.',
    summary:
      'Exordium combines heavily armed infantry, vehicles and offensive tactics, often reaching full potential when a Commander leads the assault. It wants the centre because the centre creates opportunity.',
    playsLike:
      'assembling a war column, taking the centre and breaking the enemy line at full force.',
    keywords: ['Combined Arms', 'Formation', 'Forward Pressure', 'Command'],
    image: '/assets/projects/arena-rubra/shared/factions/exordium.webp',
    imageAlt: 'Crimson-armored Exordium troops advancing through a ruined battlefield under sustained fire.',
    texture: '/assets/projects/arena-rubra/shared/textures/exordium.webp',
    accent: '#b6483c',
  },
  {
    id: 'liberti',
    name: 'Liberti',
    battlefieldIdentity:
      'Fast, numerous raiders built around mobility, encirclement and violent early attacks.',
    philosophy:
      'Strength is proven in action; hesitation gives the enemy time to organise.',
    controls: 'Flanks, open routes, isolated targets and the tempo of the early game.',
    pressure:
      'Cheap mobile units, numerical superiority, positional attack bonuses, bleeding and repeated attacks from unexpected angles.',
    loreTone:
      'Raiders, guerrillas and outcasts of the Wild Lands, armed with repurposed machinery and governed by strength, reputation and the culture of the Arena.',
    summary:
      'Liberti units become dangerous through numbers, mobility and coordinated positioning. They exploit flanks, punish isolated units and try to decide the battle before slower factions can stabilise.',
    playsLike:
      'starting a running fight, surrounding exposed targets and winning before the battlefield can stabilise.',
    keywords: ['Numbers', 'Mobility', 'Attrition', 'Raiding'],
    image: '/assets/projects/arena-rubra/shared/factions/liberti.webp',
    imageAlt: 'A Liberti raider in scavenged armor moving through a dry battlefield settlement.',
    texture: '/assets/projects/arena-rubra/shared/textures/liberti.webp',
    accent: '#c28a36',
  },
  {
    id: 'agathoi',
    name: 'Agathoi',
    battlefieldIdentity:
      'Resilient defenders who turn structures, terrain and formation into long-term strength.',
    philosophy:
      'Hold what matters, cultivate strength patiently and advance only when the ground has been made secure.',
    controls:
      'Defensive lines, connected strongpoints, Strategic Points and the territory immediately around their infrastructure.',
    pressure:
      'Attrition, durable formations, defensive reinforcement and a gradual advance that becomes increasingly difficult to reverse.',
    loreTone:
      'Agrarian communities, builders and guardians of living land, deeply suspicious of digital technology and fiercely protective of their territory. Peaceful by inclination, formidable when rooted.',
    summary:
      'Agathoi establish territory rather than merely occupying it. Resilient infantry, defensive machinery and interlocking Structures reward patience, mutual support and measured counter-advance.',
    playsLike:
      'growing a fortress across the battlefield until defence itself becomes an advance.',
    keywords: ['Resilience', 'Structures', 'Recovery', 'Fortification'],
    image: '/assets/projects/arena-rubra/shared/factions/agathoi.webp',
    imageAlt: 'An Agathoi leader in a green cloak standing among living architecture and cultivated structures.',
    texture: '/assets/projects/arena-rubra/shared/textures/agathoi.webp',
    accent: '#6f8e53',
  },
  {
    id: 'fabeot',
    name: 'Fabeot',
    battlefieldIdentity:
      'Indirect control, resource manipulation, information warfare and modular disruption.',
    philosophy:
      'The visible battle is only one layer of the conflict; knowledge and obedience decide what happens before force is required.',
    controls:
      'ENE flow, information, enemy timing and the opponent’s ability to execute a clean plan.',
    pressure:
      'Sabotage, denial, stolen resources, summoned or contracted assets and effects that force the enemy to act under uncertainty.',
    loreTone:
      'A secret order operating through agents, influence and hidden hierarchies. Corporate, occult and conspiratorial; black attire, red shoes and the sense that every public event conceals another design.',
    summary:
      'Fabeot attacks the systems behind the battle. It manipulates ENE, information and timing, reduces the enemy’s good choices and turns uncertainty into control.',
    playsLike:
      'fighting the opponent’s plan rather than their army, then striking when their options collapse.',
    keywords: ['Economy', 'Disruption', 'Denial', 'Manipulation'],
    image: '/assets/projects/arena-rubra/shared/factions/fabeot.webp',
    imageAlt: 'A Fabeot agent in a black suit and dark glasses carrying a sealed document and briefcase.',
    texture: '/assets/projects/arena-rubra/shared/textures/fabeot.webp',
    accent: '#7d5a89',
  },
];

export const arenaRubraTestingSummary = {
  headline: 'Designed by playing it.',
  stat: 'Hundreds+',
  statLabel: 'full test matches',
  body:
    'Arena Rubra has been developed through hundreds of full matches across multiple builds, with the broader development test volume approaching the four-figure range. Bot-vs-bot simulation, human-vs-AI play, telemetry and regression testing are used together to observe what the rules actually produce when strategies collide repeatedly.',
  principle:
    'A rule can sound elegant and still produce bad games. Arena Rubra treats the match itself as evidence.',
  cycle: 'play → measure → diagnose → patch → retest',
  strapline:
    'Hundreds of full test matches · Large 100-match balance batches · 5 asymmetric factions · Human + AI testing · Deterministic telemetry · Thousands of regression checks',
};

export const arenaRubraTestAreas = [
  ['Faction behaviour', 'Does each faction actually play differently?'],
  ['Map pressure', 'Do Strategic Points create movement rather than static clustering?'],
  ['Economy', 'Does ENE produce meaningful trade-offs?'],
  ['Match length', 'Do victory conditions resolve games without arbitrary endings?'],
  ['Card value', 'Is a strong card strong because of cost, position or raw efficiency?'],
  ['AI doctrine', 'Can automated players express faction identity rather than generic tactics?'],
  ['Edge cases', 'Can the rules survive unusual combinations and long matches?'],
  ['Usability', 'Can players understand what happened and why?'],
];

export const arenaRubraRelatedProjects = [
  {
    slug: 'arena-rubra-digital',
    title: 'Arena Rubra Digital',
    label: 'Digital',
    href: '/projects/arena-rubra-digital/',
    body: 'Playable browser rules environment, AI opponents, telemetry and rapid iteration.',
  },
  {
    slug: 'arena-rubra-board-game',
    title: 'Arena Rubra Tabletop',
    label: 'Tabletop',
    href: '/projects/arena-rubra-board-game/',
    body: 'Physical tactical card / board-game branch focused on readable state and practical play.',
  },
  {
    slug: 'arena-rubra-card-composer',
    title: 'Arena Rubra Card Composer',
    label: 'Tool',
    href: '/projects/arena-rubra-card-composer/',
    body: 'Companion workflow for composing and exporting Arena Rubra cards.',
  },
];
