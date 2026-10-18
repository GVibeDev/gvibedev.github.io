import fs from 'node:fs';

const target = 'src/layouts/ArenaRubraDigitalLayout.astro';
const SIDECOURT_URL = 'https://sidecourt.space/work/SC48NVH';

if (!fs.existsSync(target)) {
  throw new Error(`SideCourt patch: ${target} not found. Run from the GVibeDev website repository root.`);
}

let source = fs.readFileSync(target, 'utf8').replace(/\r\n/g, '\n');

if (source.includes(SIDECOURT_URL) || source.includes('sidecourt-playtest__note')) {
  console.log('SideCourt playtest block already present; no changes needed.');
  process.exit(0);
}

const frontmatterAnchor = `const tabletopStrengths = copy.tabletopStrengths;
---`;

const frontmatterReplacement = `const tabletopStrengths = copy.tabletopStrengths;

const sidecourtPlaytest = locale === 'it'
  ? {
      heading: 'Playtest su SideCourt',
      body: 'Arena Rubra è anche su SideCourt. Sto usando il Drop pubblicato lì per raccogliere impressioni di primo gioco da persone che non conoscono già il gioco.',
      cta: 'Arena Rubra su SideCourt →',
    }
  : {
      heading: 'Playtesting on SideCourt',
      body: 'Arena Rubra is also on SideCourt. I’m using the Drop there to collect first-play impressions from people who don’t already know the game.',
      cta: 'Arena Rubra on SideCourt →',
    };

const sidecourtUrl = '${SIDECOURT_URL}';
---`;

if (!source.includes(frontmatterAnchor)) {
  throw new Error('SideCourt patch: frontmatter anchor not found. Repository layout has changed; stop and review instead of applying blindly.');
}

source = source.replace(frontmatterAnchor, frontmatterReplacement);

const bodyAnchor = `    </section>

    <section class="digital-arena section-block">`;

const bodyReplacement = `    </section>

    <section class="sidecourt-playtest" aria-labelledby="sidecourt-playtest-title">
      <Container>
        <div class="sidecourt-playtest__note">
          <div class="sidecourt-playtest__copy">
            <h2 id="sidecourt-playtest-title">{sidecourtPlaytest.heading}</h2>
            <p>{sidecourtPlaytest.body}</p>
          </div>
          <a
            class="sidecourt-playtest__link"
            href={sidecourtUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {sidecourtPlaytest.cta}
          </a>
        </div>
      </Container>
    </section>

    <section class="digital-arena section-block">`;

if (!source.includes(bodyAnchor)) {
  throw new Error('SideCourt patch: hero/digital-arena insertion point not found. Repository layout has changed; stop and review.');
}

source = source.replace(bodyAnchor, bodyReplacement);

const cssAnchor = `  .digital-arena { border-bottom: 1px solid var(--digital-line); }`;

const cssReplacement = `  .sidecourt-playtest {
    padding-block: clamp(1rem, 2vw, 1.4rem);
    border-bottom: 1px solid var(--digital-line);
    background: var(--color-bg);
  }

  .sidecourt-playtest__note {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem 1.5rem;
    padding: .9rem 0 .9rem 1rem;
    border-left: 2px solid color-mix(in srgb, var(--digital-blue) 62%, var(--digital-line));
  }

  .sidecourt-playtest__copy {
    flex: 1 1 30rem;
    display: grid;
    gap: .35rem;
    min-width: 0;
  }

  .sidecourt-playtest__copy h2 {
    margin: 0;
    color: var(--color-text);
    font-size: clamp(1rem, .96rem + .22vw, 1.18rem);
    line-height: 1.25;
    letter-spacing: -.015em;
  }

  .sidecourt-playtest__copy p {
    max-width: 62rem;
    margin: 0;
    color: var(--color-text-muted);
    font-size: .9rem;
    line-height: 1.62;
  }

  .sidecourt-playtest__link {
    display: inline-flex;
    min-height: 44px;
    flex: 0 0 auto;
    align-items: center;
    color: var(--digital-blue);
    font-family: var(--font-mono);
    font-size: .72rem;
    font-weight: 800;
    letter-spacing: .045em;
    text-decoration: none;
    text-transform: uppercase;
  }

  .sidecourt-playtest__link:hover,
  .sidecourt-playtest__link:focus-visible {
    color: var(--color-text);
  }

  .digital-arena { border-bottom: 1px solid var(--digital-line); }`;

if (!source.includes(cssAnchor)) {
  throw new Error('SideCourt patch: CSS insertion point not found. Repository layout has changed; stop and review.');
}

source = source.replace(cssAnchor, cssReplacement);

fs.writeFileSync(target, source, 'utf8');

console.log('SideCourt playtest integration applied.');
console.log(`Modified: ${target}`);
console.log(`URL: ${SIDECOURT_URL}`);
