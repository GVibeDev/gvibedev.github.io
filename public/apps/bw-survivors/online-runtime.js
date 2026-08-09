"use strict";

// V0.8a public web runtime boundary.
// The downloadable 0.9A archive still contains LAN support.
// GitHub Pages is static hosting, so this runtime exposes the browser/single-player path only.
(function applyOnlineRuntimeMode() {
  const subtitleCopy = {
    it: 'Avvia una run, prova le armi e sblocca equipaggiamento. Questa build online è solo single-player.',
    en: 'Start a run, test weapons and unlock gear. This online build is single-player only.'
  };
  const noteCopy = {
    it: 'ONLINE BUILD · SOLO — La build scaricabile 0.9A mantiene anche la modalità LAN locale.',
    en: 'ONLINE BUILD · SOLO — The downloadable 0.9A build also keeps local LAN mode.'
  };

  function currentLang() {
    const select = document.getElementById('languageSelect');
    return select && select.value === 'en' ? 'en' : 'it';
  }

  function apply() {
    const lang = currentLang();
    const lanButton = document.querySelector('[data-open="lan"]');
    if (lanButton) lanButton.remove();

    const lanScreen = document.getElementById('screen-lan');
    if (lanScreen) lanScreen.remove();

    const subtitle = document.querySelector('#screen-menu [data-i18n="menu.subtitle"]');
    if (subtitle) subtitle.textContent = subtitleCopy[lang];

    const hero = document.querySelector('#screen-menu .hero');
    if (hero) {
      let note = document.getElementById('onlineRuntimeNote');
      if (!note) {
        note = document.createElement('p');
        note.id = 'onlineRuntimeNote';
        note.className = 'online-runtime-note';
        const grid = hero.querySelector('.menu-grid');
        if (grid) hero.insertBefore(note, grid);
        else hero.appendChild(note);
      }
      note.textContent = noteCopy[lang];
    }

    document.documentElement.dataset.onlineRuntime = 'solo';
  }

  apply();
  document.getElementById('languageSelect')?.addEventListener('change', () => {
    window.setTimeout(apply, 0);
  });
})();
