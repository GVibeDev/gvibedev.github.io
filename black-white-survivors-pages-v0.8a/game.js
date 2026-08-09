'use strict';

const ASSET = 'gameassets/';
const PLAYER_SPRITE = ASSET + 'player/player.png';
const HATS = [
  { id: 'none', name: 'No Hat', path: '', y: 0 },
  { id: 'hat', name: 'Hat', path: ASSET + 'hats/hat.png', y: -14 },
  { id: 'crown', name: 'Crown', path: ASSET + 'hats/crown.png', y: -18 },
  { id: 'monster', name: 'Monster', path: ASSET + 'hats/monster.png', y: -21 },
  { id: 'number1', name: '#1', path: ASSET + 'hats/number1.png', y: -26 },
  { id: 'soldier', name: 'Soldier', path: ASSET + 'hats/soldier.png', y: -7 },
  { id: 'wizard', name: 'Wizard', path: ASSET + 'hats/wizard.png', y: -27 }
];
const SAVE_KEY = 'bws_06b_save';
const LEGACY_SAVE_KEYS = ['bws_06_save', 'bws_lanb_05b_manafix_save', 'bws_lanb_05b_save'];

const LANGUAGE_KEY = 'bws_language';
let currentLanguage = 'it';

const I18N = {
  it: {
    'label.language': 'LINGUA',
    'label.coins': 'COINS',
    'menu.title': 'MENU',
    'menu.subtitle': 'Avvia una run, prova le armi, sblocca equipaggiamento o gioca in LAN.',
    'button.loadout': 'LOADOUT',
    'button.character': 'CHARACTER',
    'button.playSolo': 'PLAY SOLO',
    'button.lan': 'LAN CO-OP',
    'button.blackBox': 'BLACK BOX',
    'button.encyclopedia': 'ENCYCLOPEDIA',
    'button.weaponTester': 'WEAPON TESTER',
    'button.devBossRush': 'DEV: BOSS RUSH',
    'button.back': 'BACK',
    'button.startRun': 'START RUN',
    'loadout.title': 'LOADOUT',
    'loadout.desc': 'Scegli due armi. La primaria dà attributi al personaggio; la secondaria è solo da combattimento.',
    'loadout.primary': 'PRIMARY WEAPON',
    'loadout.secondary': 'SECONDARY WEAPON',
    'character.title': 'CHARACTER',
    'character.desc': 'Scegli il cappello del survivor.',
    'character.preview': 'PREVIEW',
    'character.hats': 'HATS',
    'lan.title': 'LAN CO-OP',
    'lan.desc': "L'host apre un server locale. Il guest entra con IP e porta dell'host. Per accendere il server dalla pagina, avvia <b>node launcher.js</b> oppure <b>START_LANB.bat</b>.",
    'lan.hostServer': 'HOST SERVER',
    'lan.hostPort': 'Porta host',
    'lan.startServer': 'START SERVER',
    'lan.stopServer': 'STOP SERVER',
    'lan.serverIdle': 'Server non acceso da questa pagina.',
    'lan.joinConnection': 'JOIN / CONNECTION',
    'lan.notConnected': 'Non connesso.',
    'lan.playerName': 'Nome player',
    'lan.hostIp': 'IP host',
    'lan.port': 'Porta',
    'lan.connect': 'CONNECT',
    'lan.disconnect': 'DISCONNECT',
    'lan.guestHint': "Guest: inserisci un IP tipo <b>192.168.1.34</b> e la porta scelta dall'host.",
    'lan.loadout': 'LAN LOADOUT',
    'lan.primary': 'Primary',
    'lan.secondary': 'Secondary',
    'lan.ready': 'READY',
    'lan.startHost': 'START HOST',
    'lan.maxPlayers': 'Il server accetta massimo 4 player. Il primo connesso diventa host.',
    'lan.lobby': 'LOBBY',
    'lan.emptyLobby': 'Vuota.',
    'blackbox.title': 'BLACK BOX',
    'blackbox.desc': 'Costo: <b>100 coins</b> per pull. Guadagni coins sopravvivendo alle wave.',
    'blackbox.pullOne': 'PULL x1',
    'blackbox.pullTen': 'PULL x10',
    'blackbox.resetSave': 'RESET SAVE',
    'ency.title': 'ENCYCLOPEDIA',
    'ency.desc': 'Armi, nemici e boss restano nascosti finché non li scopri.',
    'ency.weapons': 'WEAPONS',
    'ency.enemies': 'ENEMIES',
    'ency.bosses': 'BOSSES',
    'tester.title': 'WEAPON TESTER',
    'tester.desc': 'Prova qualsiasi arma contro un dummy selezionato. Il tester non sblocca armi e non dà coins.',
    'tester.testWeapon': 'TEST WEAPON',
    'tester.dummyEnemy': 'DUMMY ENEMY',
    'tester.startTest': 'START TEST',
    'tester.dummyRules': 'DUMMY RULES',
    'tester.rules1': 'Il dummy usa sprite, dimensione e HP del nemico scelto, ma resta fermo e non attacca. Se muore o esce dall’arena, torna al punto iniziale.',
    'tester.rules2': '<b>Comandi:</b> WASD / Frecce per muoverti, <b>1</b> per usare l’arma testata.',
    'hud.run': 'RUN',
    'hud.time': 'TIME',
    'hud.kills': 'KILLS',
    'hud.runCoins': 'RUN COINS',
    'hud.runPoints': 'RUN POINTS',
    'hud.wave': 'WAVE',
    'hud.active': 'ACTIVE',
    'hud.primary': 'PRIMARY',
    'hud.secondary': 'SECONDARY',
    'hud.slots': 'SLOTS',
    'hud.testerLive': 'TESTER LIVE',
    'hud.weapon': 'Weapon',
    'hud.dummy': 'Dummy',
    'hud.testerLiveHint': 'Puoi cambiare arma e dummy senza uscire dal test.',
    'hud.help': 'WASD / Frecce = movimento. Auto aim e auto shoot attivi. 1/2/3/4 = slot arma.',
    'hud.quitRun': 'QUIT RUN',
    'banner.waveCleared': 'Wave Completata!',
    'shop.waveCleared': 'WAVE CLEARED',
    'shop.changeWeapons': 'CHANGE WEAPONS',
    'shop.applyWeapons': 'APPLY WEAPONS',
    'shop.changeWeaponsHint': 'Cambiare armi è gratis. Gli slot extra costano punti.',
    'shop.buyUpgrades': 'BUY UPGRADES',
    'shop.extraSlotOffer': 'EXTRA SLOT OFFER',
    'shop.continue': 'CONTINUE TO NEXT WAVE',
    'modal.runEnd': 'RUN END',
    'rarity.Comune': 'Comune',
    'rarity.Raro': 'Raro',
    'rarity.Epico': 'Epico',
    'rarity.Leggendario': 'Leggendario',
    'ui.locked': 'LOCKED',
    'ui.attack': 'Attacco',
    'ui.ability': 'Ability',
    'ui.killerRule': 'Killer rule',
    'ui.killerRuleText': 'Autodanno 12% del danno causato. Carica Frenzy facendo danno.',
    'ui.primaryStats': 'Attributi se primaria',
    'ui.noStats': 'Nessun attributo',
    'ui.secondaryNote': 'Nota: come secondaria NON dà attributi al personaggio.',
    'ui.weaponUnknown': 'Arma non scoperta.',
    'ui.enemyUnknown': 'Nemico non scoperto.',
    'ui.bossUnknown': 'Boss non scoperto.',
    'ui.currentHat': 'Cappello attuale: {name}',
    'ui.noHat': 'Nessuno',
    'ui.testerNote': 'Tester: non sblocca questa arma e non dà coins.',
    'ui.dummyBehavior': 'Comportamento',
    'ui.dummyBehaviorText': 'Fermo, non attacca, non spara.',
    'ui.dummyReset': 'Reset',
    'ui.dummyResetText': 'Se muore o esce dall’arena torna al punto iniziale.',
    'gacha.empty': 'Nessun pull ancora.',
    'gacha.insufficient': 'Coins insufficienti.',
    'gacha.result': 'Result',
    'gacha.duplicate': 'DUPLICATE +{shards} shards',
    'gacha.newUnlock': 'NEW UNLOCK',
    'dev.startWave': 'Start from Wave {wave} // {name}',
    'shop.bossPrep': 'Boss Rush Prep{boss}',
    'shop.bossCleared': 'Boss Wave Completata!',
    'shop.waveClearedTitle': 'Wave Completata!',
    'shop.prepGranted': 'Prep points granted: +{points}',
    'shop.bossRushReward': 'Boss Rush reward shop',
    'shop.waveClearedLine': 'Wave {wave} cleared',
    'shop.last': 'Last',
    'shop.playerStats': 'PLAYER STATS',
    'shop.damage': 'DAMAGE',
    'shop.attackSpeed': 'ATTACK SPEED',
    'shop.active': 'ACTIVE',
    'shop.slot': 'Slot {slot}',
    'shop.costPoints': 'Cost: {cost} points',
    'shop.buy': 'BUY',
    'shop.extraSlot': 'Extra Slot {slot}',
    'shop.comesWith': 'Includes: {name}',
    'shop.buySlot': 'BUY SLOT',
    'shop.noSlot': 'Nessuna offerta extra slot questa wave.',
    'shop.blackBoxCost': 'Costo: {cost} run coins // un pull per shop',
    'modal.victory': 'VICTORY',
    'modal.runOver': 'RUN OVER',
    'modal.summary': '{text} Kills: {kills}. Coins earned: {coins}.',
    'death.retry': 'Retry from Wave {wave}?',
    'death.message': 'Sei morto. Riprova dalla prossima run.',
    'quit.message': 'Run interrotta.',
    'upgrade.initialPrep': 'Initial Boss Rush prep +{points} points',
    'upgrade.nextPrep': 'Next Boss Rush prep +{points} points'
  },
  en: {
    'label.language': 'LANGUAGE',
    'label.coins': 'COINS',
    'menu.title': 'MENU',
    'menu.subtitle': 'Start a run, test weapons, unlock gear, or play LAN co-op.',
    'button.loadout': 'LOADOUT',
    'button.character': 'CHARACTER',
    'button.playSolo': 'PLAY SOLO',
    'button.lan': 'LAN CO-OP',
    'button.blackBox': 'BLACK BOX',
    'button.encyclopedia': 'ENCYCLOPEDIA',
    'button.weaponTester': 'WEAPON TESTER',
    'button.devBossRush': 'DEV: BOSS RUSH',
    'button.back': 'BACK',
    'button.startRun': 'START RUN',
    'loadout.title': 'LOADOUT',
    'loadout.desc': 'Choose two weapons. The primary weapon gives character stats; the secondary is combat-only.',
    'loadout.primary': 'PRIMARY WEAPON',
    'loadout.secondary': 'SECONDARY WEAPON',
    'character.title': 'CHARACTER',
    'character.desc': 'Choose your survivor hat.',
    'character.preview': 'PREVIEW',
    'character.hats': 'HATS',
    'lan.title': 'LAN CO-OP',
    'lan.desc': 'The host opens a local server. Guests join with the host IP and port. To start the server from this page, launch <b>node launcher.js</b> or <b>START_LANB.bat</b>.',
    'lan.hostServer': 'HOST SERVER',
    'lan.hostPort': 'Host port',
    'lan.startServer': 'START SERVER',
    'lan.stopServer': 'STOP SERVER',
    'lan.serverIdle': 'Server not started from this page.',
    'lan.joinConnection': 'JOIN / CONNECTION',
    'lan.notConnected': 'Not connected.',
    'lan.playerName': 'Player name',
    'lan.hostIp': 'Host IP',
    'lan.port': 'Port',
    'lan.connect': 'CONNECT',
    'lan.disconnect': 'DISCONNECT',
    'lan.guestHint': 'Guest: enter an IP like <b>192.168.1.34</b> and the host port.',
    'lan.loadout': 'LAN LOADOUT',
    'lan.primary': 'Primary',
    'lan.secondary': 'Secondary',
    'lan.ready': 'READY',
    'lan.startHost': 'START HOST',
    'lan.maxPlayers': 'The server supports up to 4 players. The first connected player is host.',
    'lan.lobby': 'LOBBY',
    'lan.emptyLobby': 'Empty.',
    'blackbox.title': 'BLACK BOX',
    'blackbox.desc': 'Cost: <b>100 coins</b> per pull. Earn coins by surviving waves.',
    'blackbox.pullOne': 'PULL x1',
    'blackbox.pullTen': 'PULL x10',
    'blackbox.resetSave': 'RESET SAVE',
    'ency.title': 'ENCYCLOPEDIA',
    'ency.desc': 'Weapons, enemies, and bosses stay hidden until discovered.',
    'ency.weapons': 'WEAPONS',
    'ency.enemies': 'ENEMIES',
    'ency.bosses': 'BOSSES',
    'tester.title': 'WEAPON TESTER',
    'tester.desc': 'Try any weapon against a selected dummy. The tester gives no unlocks or coins.',
    'tester.testWeapon': 'TEST WEAPON',
    'tester.dummyEnemy': 'DUMMY ENEMY',
    'tester.startTest': 'START TEST',
    'tester.dummyRules': 'DUMMY RULES',
    'tester.rules1': 'The dummy uses the selected enemy sprite, size, and HP, but does not move or attack. If defeated or pushed out, it resets.',
    'tester.rules2': '<b>Controls:</b> WASD / Arrow keys to move, <b>1</b> to use the test weapon.',
    'hud.run': 'RUN',
    'hud.time': 'TIME',
    'hud.kills': 'KILLS',
    'hud.runCoins': 'RUN COINS',
    'hud.runPoints': 'RUN POINTS',
    'hud.wave': 'WAVE',
    'hud.active': 'ACTIVE',
    'hud.primary': 'PRIMARY',
    'hud.secondary': 'SECONDARY',
    'hud.slots': 'SLOTS',
    'hud.testerLive': 'TESTER LIVE',
    'hud.weapon': 'Weapon',
    'hud.dummy': 'Dummy',
    'hud.testerLiveHint': 'Change weapon or dummy without leaving the test.',
    'hud.help': 'WASD / Arrow keys = move. Auto aim and auto shoot are active. 1/2/3/4 = weapon slots.',
    'hud.quitRun': 'QUIT RUN',
    'banner.waveCleared': 'Wave Cleared!',
    'shop.waveCleared': 'WAVE CLEARED',
    'shop.changeWeapons': 'CHANGE WEAPONS',
    'shop.applyWeapons': 'APPLY WEAPONS',
    'shop.changeWeaponsHint': 'Changing weapons is free. Extra slots cost points.',
    'shop.buyUpgrades': 'BUY UPGRADES',
    'shop.extraSlotOffer': 'EXTRA SLOT OFFER',
    'shop.continue': 'CONTINUE TO NEXT WAVE',
    'modal.runEnd': 'RUN END',
    'rarity.Comune': 'Common',
    'rarity.Raro': 'Rare',
    'rarity.Epico': 'Epic',
    'rarity.Leggendario': 'Legendary',
    'ui.locked': 'LOCKED',
    'ui.attack': 'Attack',
    'ui.ability': 'Ability',
    'ui.killerRule': 'Killer rule',
    'ui.killerRuleText': 'Self-damage: 12% of damage dealt. Charge Frenzy by dealing damage.',
    'ui.primaryStats': 'Primary stats',
    'ui.noStats': 'No stats',
    'ui.secondaryNote': 'Note: secondary weapons do NOT give character stats.',
    'ui.weaponUnknown': 'Weapon not discovered.',
    'ui.enemyUnknown': 'Enemy not discovered.',
    'ui.bossUnknown': 'Boss not discovered.',
    'ui.currentHat': 'Current hat: {name}',
    'ui.noHat': 'No Hat',
    'ui.testerNote': 'Tester: no unlocks or coins.',
    'ui.dummyBehavior': 'Behavior',
    'ui.dummyBehaviorText': 'Stationary. Does not attack or shoot.',
    'ui.dummyReset': 'Reset',
    'ui.dummyResetText': 'If defeated or pushed out, it returns to the start point.',
    'gacha.empty': 'No pulls yet.',
    'gacha.insufficient': 'Not enough coins.',
    'gacha.result': 'Result',
    'gacha.duplicate': 'DUPLICATE +{shards} shards',
    'gacha.newUnlock': 'NEW UNLOCK',
    'dev.startWave': 'Start from Wave {wave} // {name}',
    'shop.bossPrep': 'Boss Rush Prep{boss}',
    'shop.bossCleared': 'Boss Wave Cleared!',
    'shop.waveClearedTitle': 'Wave Cleared!',
    'shop.prepGranted': 'Prep points granted: +{points}',
    'shop.bossRushReward': 'Boss Rush reward shop',
    'shop.waveClearedLine': 'Wave {wave} cleared',
    'shop.last': 'Last',
    'shop.playerStats': 'PLAYER STATS',
    'shop.damage': 'DAMAGE',
    'shop.attackSpeed': 'ATTACK SPEED',
    'shop.active': 'ACTIVE',
    'shop.slot': 'Slot {slot}',
    'shop.costPoints': 'Cost: {cost} points',
    'shop.buy': 'BUY',
    'shop.extraSlot': 'Extra Slot {slot}',
    'shop.comesWith': 'Includes: {name}',
    'shop.buySlot': 'BUY SLOT',
    'shop.noSlot': 'No extra slot offer this wave.',
    'shop.blackBoxCost': 'Cost: {cost} run coins // one pull per shop',
    'modal.victory': 'VICTORY',
    'modal.runOver': 'RUN OVER',
    'modal.summary': '{text} Kills: {kills}. Coins earned: {coins}.',
    'death.retry': 'Retry from Wave {wave}?',
    'death.message': 'You died. Try again in the next run.',
    'quit.message': 'Run ended.',
    'upgrade.initialPrep': 'Initial Boss Rush prep +{points} points',
    'upgrade.nextPrep': 'Next Boss Rush prep +{points} points'
  }
};

function readInitialLanguage() {
  try {
    const stored = localStorage.getItem(LANGUAGE_KEY);
    if (stored === 'it' || stored === 'en') return stored;
  } catch (_) {}
  const nav = (typeof navigator !== 'undefined' && navigator.language) ? navigator.language.toLowerCase() : 'it';
  return nav.startsWith('en') ? 'en' : 'it';
}

currentLanguage = readInitialLanguage();

function t(key, vars = {}) {
  const table = I18N[currentLanguage] || I18N.it;
  let text = table[key] ?? I18N.it[key] ?? key;
  for (const [name, value] of Object.entries(vars)) {
    text = text.replaceAll(`{${name}}`, String(value));
  }
  return text;
}

function labelRarity(rarity) {
  return t('rarity.' + rarity);
}

function localizedField(obj, field) {
  if (!obj) return '';
  const langField = field + (currentLanguage === 'en' ? 'En' : '');
  return obj[langField] || obj[field] || '';
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll('[data-i18n]').forEach(node => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(node => {
    node.innerHTML = t(node.dataset.i18nHtml);
  });
  const select = el('languageSelect');
  if (select) select.value = currentLanguage;
}

function refreshDynamicLanguage() {
  applyStaticTranslations();
  renderAllMeta?.();
  renderLoadout?.();
  renderCharacterMenu?.();
  renderEncyclopedia?.();
  updateDevUi?.();
  if (el('screen-gacha')?.classList.contains('active')) renderGacha([]);
  if (el('screen-tester')?.classList.contains('active')) renderTester();
  if (game?.shopOpen) renderWaveShop();
  if (game) updateHud();
}

function setLanguage(lang) {
  currentLanguage = lang === 'en' ? 'en' : 'it';
  try { localStorage.setItem(LANGUAGE_KEY, currentLanguage); } catch (_) {}
  refreshDynamicLanguage();
}

function bindLanguageSelector() {
  const select = el('languageSelect');
  if (!select) return;
  select.value = currentLanguage;
  select.addEventListener('change', () => setLanguage(select.value));
}


const WEAPONS = [
  {
    id: 'knife', name: 'Knife', rarity: 'Comune', className: 'Slasher', type: 'Normal',
    path: ASSET + 'weapons/common/knife.png', behavior: 'slash', damage: 30, cooldown: 0.34, range: 68, cone: 100,
    manaCost: 0, stats: { speedPct: 8 }, desc: 'Colpo corto e rapido. Ottima per muoversi aggressivi tra i nemici.', descEn: "Short, fast strike. Great for aggressive movement through packed enemies."
  },
  {
    id: 'shortsword', name: 'Short Sword', rarity: 'Comune', className: 'Slasher', type: 'Normal',
    path: ASSET + 'weapons/common/shortsword.png', behavior: 'slash', damage: 46, cooldown: 0.50, range: 92, cone: 110,
    manaCost: 0, stats: { attackPct: 6 }, desc: 'Arma iniziale bilanciata, stabile e facile da controllare.', descEn: "Balanced starter weapon: steady, reliable, and easy to control."
  },
  {
    id: 'axe', name: 'Axe', rarity: 'Comune', className: 'Slasher', type: 'Normal',
    path: ASSET + 'weapons/common/axe.png', behavior: 'slash', damage: 76, cooldown: 0.96, range: 86, cone: 125, knock: 34,
    manaCost: 0, stats: { attackPct: 12, speedPct: -5 }, desc: 'Lenta e pesante, con forte knockback. Ideale per aprire spazio.', descEn: "Slow and heavy, with strong knockback. Built to open space."
  },
  {
    id: 'pistol', name: 'Pistol', rarity: 'Comune', className: 'Shooter', type: 'Normal',
    path: ASSET + 'weapons/common/pistol.png', behavior: 'projectile', damage: 18, cooldown: 0.54, bulletSpeed: 430, pierce: 1,
    manaCost: 0, stats: { cooldownPct: 5 }, desc: 'Arma precisa e regolare, buona per iniziare una run a distanza.', descEn: "Clean, consistent ranged weapon. A safe start for distance runs."
  },
  {
    id: 'bow', name: 'Bow', rarity: 'Comune', className: 'Shooter', type: 'Normal',
    path: ASSET + 'weapons/common/bow.png', behavior: 'projectile', damage: 36, cooldown: 0.98, bulletSpeed: 340, pierce: 2,
    manaCost: 0, stats: { pickupPct: 10 }, desc: 'Arco lento ma potente, capace di perforare più bersagli.', descEn: "Slow but powerful bow. Its arrows pierce through multiple targets."
  },
  {
    id: 'pebblegun', name: 'Pebble Gun', rarity: 'Comune', className: 'Shooter', type: 'Normal',
    path: ASSET + 'weapons/common/pebblegun.png', behavior: 'projectile', damage: 5, cooldown: 0.13, bulletSpeed: 455, pierce: 1,
    manaCost: 0, stats: { bulletSpeedPct: 8 }, desc: 'Fuoco rapidissimo a basso danno, efficace contro bersagli fragili.', descEn: "Very fast low-damage fire. Excellent against fragile targets."
  },
  {
    id: 'longsword', name: 'Long Sword', rarity: 'Comune', className: 'Slasher', type: 'Normal',
    path: ASSET + 'weapons/common/longsword.png', behavior: 'slash', damage: 58, cooldown: 0.70, range: 118, cone: 105,
    manaCost: 0, stats: { attackPct: 8, speedPct: -3 }, desc: 'Taglio ampio e controllabile, utile per tenere la distanza.', descEn: "Wide, controllable slash. Good for keeping enemies at a safe range."
  },
  {
    id: 'twinknives', name: 'Twin Knives', rarity: 'Comune', className: 'Slasher', type: 'Normal',
    path: ASSET + 'weapons/common/twinknives.png', behavior: 'twinCombo', damage: 26, cooldown: 0.24, range: 78, cone: 90,
    manaCost: 0, stats: { speedPct: 12, defensePct: -5 }, desc: 'Due coltelli separati che colpiscono in sequenza rapida.', descEn: "Two separated knives strike one after the other in quick rhythm."
  },
  {
    id: 'spear', name: 'Spear', rarity: 'Raro', className: 'Slasher', type: 'Normal',
    path: ASSET + 'weapons/rare/spear.png', behavior: 'line', damage: 62, cooldown: 0.76, range: 168, width: 31, knock: 18,
    manaCost: 0, stats: { attackPct: 8, pickupPct: 5 }, desc: 'Affondo lungo e preciso. Premia il controllo della distanza.', descEn: "Long, precise thrust. Rewards spacing and clean positioning."
  },
  {
    id: 'revolver', name: 'Revolver', rarity: 'Raro', className: 'Shooter', type: 'Normal',
    path: ASSET + 'weapons/rare/revolver.png', behavior: 'projectile', damage: 45, cooldown: 1.25, bulletSpeed: 540, pierce: 1,
    manaCost: 0, stats: { attackPct: 15, cooldownPct: -4 }, desc: 'Colpo pesante a cadenza lenta. Alta precisione, basso volume di fuoco.', descEn: "Heavy single shot with a slow rhythm. High precision, low fire volume."
  },
  {
    id: 'crossbow', name: 'Crossbow', rarity: 'Raro', className: 'Shooter', type: 'Normal',
    path: ASSET + 'weapons/rare/crossbow.png', behavior: 'projectile', damage: 25, cooldown: 1.05, bulletSpeed: 430, pierce: 4,
    manaCost: 0, stats: { attackPct: 8 }, desc: 'Dardi perforanti con ritmo lento. Ottima contro file di nemici.', descEn: "Piercing bolts with a steady pace. Strong against enemy lines."
  },
  {
    id: 'burstrifle', name: 'Burst Rifle', rarity: 'Raro', className: 'Shooter', type: 'Normal',
    path: ASSET + 'weapons/rare/burstrifle.png', behavior: 'burst', damage: 9, cooldown: 1.08, bulletSpeed: 500, pierce: 1, shots: 3,
    manaCost: 0, stats: { attackPct: 6, bulletSpeedPct: 8 }, desc: 'Raffica a tre colpi con breve pausa tra una scarica e l’altra.', descEn: "Three-shot burst with a short pause between volleys."
  },
  {
    id: 'runesword', name: 'Rune Sword', rarity: 'Raro', className: 'Slasher', type: 'Speller',
    path: ASSET + 'weapons/rare/runesword.png', behavior: 'slash', damage: 70, cooldown: 0.92, range: 120, cone: 112,
    manaCost: 8, ability: 'Rune Echo: dopo lo swing parte un secondo taglio runico più largo e più debole.', abilityEn: "Rune Echo: after the swing, launches a wider, weaker runic slash.", stats: { maxMana: 20, defensePct: -5 }, desc: 'Spada runica che crea un secondo taglio dopo l’impatto principale.', descEn: "Runic blade that creates a second slash after the main hit."
  },
  {
    id: 'ghostscythe', name: 'Ghost Scythe', rarity: 'Raro', className: 'Slasher', type: 'Speller',
    path: ASSET + 'weapons/rare/ghostscythe.png', behavior: 'orbitSlash', damage: 34, cooldown: 0.72, range: 98, cone: 115, orbitDamage: 42, orbitCooldown: 3.20, orbitRange: 108,
    manaCost: 5, orbitManaCost: 12, stats: { maxMana: 15, speedPct: 6, maxHp: -8 }, desc: 'Falce spettrale con attacco orbitale periodico per liberare lo spazio vicino.', descEn: "Spectral scythe with periodic orbit attacks to clear nearby space."
  },
  {
    id: 'manabolt', name: 'Mana Bolt', rarity: 'Raro', className: 'Shooter', type: 'Speller',
    path: ASSET + 'weapons/rare/manabolt.png', behavior: 'projectile', damage: 30, cooldown: 0.82, bulletSpeed: 390, pierce: 2,
    manaCost: 7, chainRange: 150, chainMult: 0.55, ability: 'Arc Jump: quando colpisce, rimbalza su un nemico vicino con danno ridotto.', abilityEn: "Arc Jump: on hit, jumps to a nearby enemy with reduced damage.", stats: { maxMana: 25 }, desc: 'Proiettile magico che rimbalza tra nemici vicini con danno ridotto.', descEn: "Magic projectile that jumps between nearby enemies with reduced damage."
  },
  {
    id: 'whiteorb', name: 'White Orb', rarity: 'Raro', className: 'Shooter', type: 'Speller',
    path: ASSET + 'weapons/rare/whiteorb.png', behavior: 'orb', damage: 22, cooldown: 1.45, bulletSpeed: 205, pierce: 8,
    manaCost: 15, pulseRadius: 62, pulseMult: 0.35, ability: 'Orb Pulse: ogni impatto crea una piccola onda che danneggia i nemici vicini.', abilityEn: "Orb Pulse: each impact creates a small wave that damages nearby enemies.", stats: { maxMana: 20, manaGainPct: 20 }, desc: 'Globo lento multi-hit. Ogni impatto genera un impulso ad area.', descEn: "Slow multi-hit orb. Each impact creates a small area pulse."
  },
  {
    id: 'warhalberd', name: 'War Halberd', rarity: 'Epico', className: 'Slasher', type: 'Normal',
    path: ASSET + 'weapons/epic/warhalberd.png', behavior: 'slash', damage: 82, cooldown: 1.08, range: 142, cone: 145, knock: 44,
    manaCost: 0, stats: { attackPct: 22, cooldownPct: -10 }, desc: 'Arma pesante con arco ampio e alto danno. Richiede buon posizionamento.', descEn: "Heavy weapon with a wide arc and high damage. Needs good positioning."
  },
  {
    id: 'ricochetgun', name: 'Ricochet Gun', rarity: 'Epico', className: 'Shooter', type: 'Normal',
    path: ASSET + 'weapons/epic/ricochetgun.png', behavior: 'ricochet', damage: 28, cooldown: 0.82, bulletSpeed: 500, pierce: 1, ricochetRange: 230, ricochetMult: 0.80,
    manaCost: 0, stats: { attackPct: 10, bulletSpeedPct: 10 }, desc: 'Proiettili a rimbalzo, molto efficaci contro gruppi compatti.', descEn: "Bouncing bullets that work especially well against compact enemy groups."
  },
  {
    id: 'voidkatana', name: 'Void Katana', rarity: 'Epico', className: 'Slasher', type: 'Speller',
    path: ASSET + 'weapons/epic/voidkatana.png', behavior: 'slash', damage: 88, cooldown: 1.04, range: 150, cone: 82, knock: 16,
    manaCost: 14, ability: 'Void Rift: dopo il taglio apre una fenditura lunga che attraversa i nemici.', abilityEn: "Void Rift: after the slash, opens a long rift that cuts through enemies.", stats: { maxMana: 35, attackPct: 12, defensePct: -10 }, desc: 'Taglio lungo che consuma mana e attraversa più bersagli.', descEn: "Long mana-powered cut that passes through several enemies."
  },
  {
    id: 'runelaser', name: 'Rune Laser', rarity: 'Epico', className: 'Shooter', type: 'Speller',
    path: ASSET + 'weapons/epic/runebeam.png', behavior: 'beam', damage: 64, cooldown: 1.18, range: 520, width: 18,
    manaCost: 18, ability: 'Rune Burn: il raggio perfora in linea e poi pulsa sul bersaglio principale.', abilityEn: "Rune Burn: the beam pierces in a line, then pulses on the main target.", stats: { maxMana: 40, maxHp: -8 }, desc: 'Raggio preciso verso il nemico più vicino, con forte controllo della linea.', descEn: "Precise beam aimed at the nearest enemy, with strong line control."
  },
  {
    id: 'meatsaw', name: 'Meat Saw', rarity: 'Epico', className: 'Slasher', type: 'Killer',
    path: ASSET + 'weapons/epic/meatsaw.png', behavior: 'saw', damage: 7, cooldown: 0.12, range: 94, knock: 8,
    manaCost: 0, frenzyThreshold: 520, frenzyDuration: 4.0, ability: 'Frenzy // Meat Storm: dopo abbastanza danno crea una tempesta di lame attorno al player.', abilityEn: "Frenzy // Meat Storm: after enough damage, creates a blade storm around the player.", stats: { attackPct: 35, speedPct: -12, defensePct: -5 }, desc: 'Motosega da distanza ravvicinata. Infligge autodanno pari al 12% del danno causato.', descEn: "Close-range saw. Deals self-damage equal to 12% of the damage caused."
  },
  {
    id: 'bloodrifle', name: 'Blood Rifle', rarity: 'Epico', className: 'Shooter', type: 'Killer',
    path: ASSET + 'weapons/epic/bloodrifle.png', behavior: 'projectile', damage: 72, cooldown: 1.15, bulletSpeed: 620, pierce: 2,
    manaCost: 0, frenzyThreshold: 620, frenzyDuration: 4.2, ability: 'Frenzy // Blood Barrage: dopo abbastanza danno scatena una raffica di colpi perforanti.', abilityEn: "Frenzy // Blood Barrage: after enough damage, unleashes a burst of piercing shots.", stats: { attackPct: 40, maxHp: -10 }, desc: 'Fucile ad alto danno con autodanno del 12%. Forte, ma rischioso.', descEn: "High-damage rifle with 12% self-damage. Powerful, but risky."
  }
];

const ENEMY_TYPES = [
  { id: 'crawler', name: 'Crawler', path: ASSET + 'enemies/crawler.png', hp: 35, speed: 45, damage: 5, radius: 16, coin: 3, weight: 50, startsAt: 0, desc: 'Nemico base lento e resistente quanto basta per fare pressione.', descEn: "Slow baseline enemy with enough health to keep pressure on the player." },
  { id: 'runner', name: 'Runner', path: ASSET + 'enemies/runner.png', hp: 28, speed: 105, damage: 4, radius: 13, coin: 4, weight: 26, startsAt: 12, desc: 'Nemico veloce e fragile, pericoloso se ignorato.', descEn: "Fast and fragile enemy. Dangerous when ignored or allowed to surround you." },
  { id: 'brute', name: 'Brute', path: ASSET + 'enemies/brute.png', hp: 150, speed: 32, damage: 13, radius: 25, coin: 12, weight: 12, startsAt: 28, desc: 'Tank lento con molta vita e alto danno da contatto.', descEn: "Slow tank with high health and heavy contact damage." },
  { id: 'spitter', name: 'Spitter', path: ASSET + 'enemies/spitter.png', hp: 70, speed: 38, damage: 5, radius: 15, coin: 8, weight: 12, startsAt: 40, ranged: true, desc: 'Ranged statico/strano.', descEn: "Ranged enemy that holds position and fires from a distance." }
];


const POST_PERSES_MUTATIONS = [
  { id: 'hp', label: 'HP', color: '#42ff79', hpMult: 1.85 },
  { id: 'attack', label: 'ATTACK', color: '#ff3f3f', damageMult: 1.60 },
  { id: 'attackSpeed', label: 'ATTACK SPEED', color: '#bd5cff', attackSpeedMult: 1.70 },
  { id: 'speed', label: 'SPEED', color: '#ffd84f', speedMult: 1.55 },
  { id: 'defense', label: 'DEFENSE', color: '#4aa3ff', damageTakenMult: 0.58 }
];

function isPostPersesEnemyWave(wave = game?.wave || 1) {
  return Number(wave || 0) >= 51;
}

function pickPostPersesMutation() {
  return POST_PERSES_MUTATIONS[Math.floor(Math.random() * POST_PERSES_MUTATIONS.length)] || POST_PERSES_MUTATIONS[0];
}

function applyPostPersesMutation(enemy, wave = game?.wave || 1) {
  if (!enemy || enemy.boss || enemy.bossClone || enemy.dummy || !isPostPersesEnemyWave(wave)) return enemy;
  const mutation = pickPostPersesMutation();
  enemy.mutation = mutation.id;
  enemy.mutationLabel = mutation.label;
  enemy.tintColor = mutation.color;

  if (mutation.hpMult) {
    enemy.maxHp = Math.max(1, Math.round((enemy.maxHp || enemy.hp || 1) * mutation.hpMult));
    enemy.hp = enemy.maxHp;
  }
  if (mutation.damageMult) enemy.damage = (enemy.damage || 1) * mutation.damageMult;
  if (mutation.speedMult) enemy.speed = (enemy.speed || 1) * mutation.speedMult;
  if (mutation.attackSpeedMult) {
    enemy.attackSpeedMult = mutation.attackSpeedMult;
    enemy.shootCd = Math.max(0.22, (enemy.shootCd || 1) / mutation.attackSpeedMult);
    enemy.shootInterval = Math.max(0.55, 2.2 / mutation.attackSpeedMult);
    enemy.attackInterval = Math.max(0.34, 0.75 / mutation.attackSpeedMult);
  }
  if (mutation.damageTakenMult) enemy.damageTakenMult = mutation.damageTakenMult;
  return enemy;
}

const BOSS_TYPES = [
  {
    id: 'mitraspitter',
    name: 'Mitra-Spitter',
    path: ASSET + 'bosses/mitraspitter.png',
    wave: 10,
    hp: 900,
    radius: 42,
    size: 150,
    speed: 36,
    damage: 9,
    coin: 70,
    points: 35,
    behavior: 'mitra',
    desc: 'Spitter boss che spara a mitra. Primo controllo serio di movimento.', descEn: "Spitter boss with rapid-fire volleys. The first real movement check."
  },
  {
    id: 'chainedbeast',
    name: 'Chained Beast of Tartarus',
    path: ASSET + 'bosses/chainedbeast.png',
    wave: 20,
    hp: 2150,
    radius: 64,
    size: 215,
    speed: 34,
    damage: 34,
    coin: 110,
    points: 62,
    behavior: 'chained',
    desc: 'Boss tank lento e pesante. Devastante se riesce ad avvicinarsi.', descEn: "Slow, heavy tank boss. Devastating if it gets close."
  },
  {
    id: 'gargamosh',
    name: 'Gargamosh, Sorcerer of Perses',
    path: ASSET + 'bosses/gargamosh.png',
    wave: 30,
    hp: 1150,
    radius: 38,
    size: 145,
    speed: 42,
    damage: 13,
    coin: 150,
    points: 65,
    behavior: 'gargamosh',
    desc: 'Boss magico con teleport, cloni, cure, evocazioni e colpi pesanti.', descEn: "Caster boss with teleports, clones, healing, summons, and heavy attacks."
  },
  {
    id: 'biomechanicalbeast',
    name: 'Massive OverPowered BioMechanical Beast of Destruction',
    path: ASSET + 'bosses/biomechanicalbeast.png',
    wave: 40,
    hp: 2600,
    radius: 70,
    size: 238,
    speed: 62,
    damage: 16,
    coin: 210,
    points: 95,
    behavior: 'biomech',
    desc: 'Boss biomeccanico con laser rapidi, pattern bullet hell e pressione costante.', descEn: "Biomechanical boss with rapid lasers, bullet-hell patterns, and constant pressure."
  },
  {
    id: 'perses',
    name: 'Perses',
    subtitle: 'Eldritch Horror',
    path: ASSET + 'bosses/perses.png',
    wave: 50,
    hp: 6800,
    radius: 138,
    size: 640,
    speed: 0,
    damage: 28,
    coin: 500,
    points: 220,
    behavior: 'perses',
    bossOnly: true,
    desc: 'Boss finale eldritch: colosso quasi immobile, laser giganti e pattern simultanei.', descEn: "Final eldritch boss: a nearly immobile colossus with giant lasers and overlapping patterns."
  }
];

const images = {};
let save = null;
let game = null;
let devPanelUnlocked = false;
let sessionDevMode = false;
let devTypeBuffer = '';
let lastTime = 0;
let animationId = null;

const el = (id) => document.getElementById(id);
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const normAngle = (a) => Math.atan2(Math.sin(a), Math.cos(a));
function isDevMode() { return !!(sessionDevMode && devPanelUnlocked); }
function combatUpdatesAllowed() { return !!game && (game.mode === 'tester' || game.wavePhase === 'combat'); }
function rarityClass(rarity) {
  const r = String(rarity || '').toLowerCase();
  if (r.includes('leggend')) return 'rarity-leggendario';
  if (r.includes('epic') || r.includes('epico')) return 'rarity-epico';
  if (r.includes('rare') || r.includes('raro')) return 'rarity-raro';
  return 'rarity-comune';
}

function loadSave() {
  const keys = [SAVE_KEY, ...(typeof LEGACY_SAVE_KEYS !== 'undefined' ? LEGACY_SAVE_KEYS : [])];
  for (const key of keys) {
    const raw = localStorage.getItem(key);
    if (raw) {
      try {
        const data = normalizeSave(JSON.parse(raw));
        if (key !== SAVE_KEY) localStorage.setItem(SAVE_KEY, JSON.stringify(data));
        return data;
      } catch (_) {}
    }
  }
  return normalizeSave({
    coins: 0,
    unlocked: ['pistol','shortsword'],
    shards: {},
    primary: 'pistol',
    secondary: 'shortsword',
    hat: 'none',
    discoveredEnemies: [],
    discoveredBosses: [],
    devMode: false
  });
}

function normalizeSave(data) {
  const defaults = {
    coins: 0,
    unlocked: ['pistol','shortsword'],
    shards: {},
    primary: 'pistol',
    secondary: 'shortsword',
    hat: 'none',
    discoveredEnemies: [],
    discoveredBosses: [],
    devMode: false
  };
  const out = { ...defaults, ...(data || {}) };
  if (!Array.isArray(out.unlocked)) out.unlocked = [...defaults.unlocked];
  if (!out.unlocked.includes('pistol')) out.unlocked.push('pistol');
  if (!out.unlocked.includes('shortsword')) out.unlocked.push('shortsword');
  if (!out.shards || typeof out.shards !== 'object') out.shards = {};
  if (!Array.isArray(out.discoveredEnemies)) out.discoveredEnemies = [];
  if (!HATS.some(h => h.id === out.hat)) out.hat = 'none';
  // Dev mode is session-only: never reactivate from save on boot.
  out.devMode = false;
  return out;
}

function saveGame() {
  const toSave = { ...save, devMode: false };
  localStorage.setItem(SAVE_KEY, JSON.stringify(toSave));
  renderAllMeta();
}

function hasWeapon(id) { return isDevMode() || save.unlocked.includes(id); }
function getWeapon(id) { return WEAPONS.find(w => w.id === id) || WEAPONS[0]; }
function getHat(id) { return HATS.find(h => h.id === id) || HATS[0]; }
function getHatY(id) {
  const h = getHat(id);
  return h.path ? (h.y || 0) : 0;
}

function initImages() {
  const all = [PLAYER_SPRITE, ...HATS.filter(h => h.path).map(h => h.path), ...WEAPONS.map(w => w.path), ...ENEMY_TYPES.map(e => e.path), ...BOSS_TYPES.map(b => b.path)];
  for (const src of all) {
    const img = new Image();
    img.src = src;
    images[src] = img;
  }
}


function clearInputState() {
  if (!game) return;
  game.keys = {};
  if (game.player) {
    game.player.vx = 0;
    game.player.vy = 0;
  }
  if (game.mouse) game.mouse.down = false;
  resetMobileStickVisual();
}

function clearMovementKeys() {
  if (!game || !game.keys) return;
  for (const key of ['w','a','s','d','arrowup','arrowdown','arrowleft','arrowright']) delete game.keys[key];
  if (game.player) {
    game.player.vx = 0;
    game.player.vy = 0;
  }
  resetMobileStickVisual();
}

function isGameScreenActive() {
  const screen = el('screen-game');
  return !!(screen && screen.classList.contains('active'));
}


function updateMobileViewportMetrics() {
  const root = document.documentElement;
  if (!root) return;
  const viewport = window.visualViewport;
  const vw = Math.max(1, Math.round(viewport?.width || window.innerWidth || root.clientWidth || 1280));
  const vh = Math.max(1, Math.round(viewport?.height || window.innerHeight || root.clientHeight || 720));
  root.style.setProperty('--mobile-vw', `${vw}px`);
  root.style.setProperty('--mobile-vh', `${vh}px`);
}


function ensureTouchMoveState() {
  if (!game) return null;
  if (!game.touchMove) game.touchMove = { active: false, x: 0, y: 0, pointerId: null };
  return game.touchMove;
}

function resetMobileStickVisual() {
  if (game?.touchMove) {
    game.touchMove.active = false;
    game.touchMove.x = 0;
    game.touchMove.y = 0;
    game.touchMove.pointerId = null;
  }
  const knob = el('mobileStickKnob');
  if (knob) knob.style.transform = 'translate(0px, 0px)';
}

function setMobileStickFromEvent(evt) {
  const stick = el('mobileStick');
  const knob = el('mobileStickKnob');
  const move = ensureTouchMoveState();
  if (!stick || !knob || !move || !evt) return;

  const rect = stick.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  let dx = evt.clientX - cx;
  let dy = evt.clientY - cy;
  const max = Math.max(18, rect.width * 0.38);
  const len = Math.hypot(dx, dy);

  if (len > max) {
    dx = dx / len * max;
    dy = dy / len * max;
  }

  move.active = true;
  move.x = clamp(dx / max, -1, 1);
  move.y = clamp(dy / max, -1, 1);
  knob.style.transform = `translate(${dx}px, ${dy}px)`;
}

function updateMobileWeaponButtons() {
  document.querySelectorAll?.('[data-mobile-weapon]').forEach(btn => {
    const idx = Number(btn.dataset.mobileWeapon);
    btn.classList.toggle('mobile-active', !!game && idx === (game.activeWeaponIndex || 0));
    btn.disabled = !!game && !game.weapons[idx];
  });
}

function setupMobileControls() {
  const stick = el('mobileStick');
  if (!stick) return;

  stick.addEventListener('pointerdown', evt => {
    if (!game || !isGameScreenActive() || game.shopOpen) return;
    evt.preventDefault();
    const move = ensureTouchMoveState();
    move.pointerId = evt.pointerId;
    stick.setPointerCapture?.(evt.pointerId);
    setMobileStickFromEvent(evt);
  });

  stick.addEventListener('pointermove', evt => {
    const move = game?.touchMove;
    if (!move || move.pointerId !== evt.pointerId) return;
    evt.preventDefault();
    setMobileStickFromEvent(evt);
  });

  const stopStick = evt => {
    const move = game?.touchMove;
    if (move && (move.pointerId === null || move.pointerId === evt.pointerId)) {
      evt?.preventDefault?.();
      resetMobileStickVisual();
    }
  };

  stick.addEventListener('pointerup', stopStick);
  stick.addEventListener('pointercancel', stopStick);
  stick.addEventListener('lostpointercapture', stopStick);

  document.querySelectorAll?.('[data-mobile-weapon]').forEach(btn => {
    btn.addEventListener('pointerdown', evt => {
      evt.preventDefault();
      evt.stopPropagation();
      if (!game || !isGameScreenActive()) return;
      const index = Number(btn.dataset.mobileWeapon);
      setActiveWeapon(index);
      updateMobileWeaponButtons();
    });
  });
}

function showScreen(name) {
  updateMobileViewportMetrics();
  if (name !== 'game') clearInputState();
  if (document.body) {
    document.body.classList.toggle('game-input-lock', name === 'game');
    document.body.dataset.screen = name;
  }
  if (name === 'game') {
    setTimeout(updateMobileViewportMetrics, 40);
    setTimeout(updateMobileViewportMetrics, 180);
  }
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  el('screen-' + name).classList.add('active');
  if (name === 'loadout') renderLoadout();
  if (name === 'encyclopedia') renderEncyclopedia();
  if (name === 'gacha') renderGacha([]);
  if (name === 'tester') renderTester();
  else if (game?.mode !== 'tester') forceHideTesterLiveControls();
  if (name === 'character') renderCharacterMenu();
}

function formatStats(stats = {}) {
  const parts = [];
  if (stats.attackPct) parts.push(`${stats.attackPct > 0 ? '+' : ''}${stats.attackPct}% ATT`);
  if (stats.speedPct) parts.push(`${stats.speedPct > 0 ? '+' : ''}${stats.speedPct}% SPEED`);
  if (stats.defensePct) parts.push(`${stats.defensePct > 0 ? '+' : ''}${stats.defensePct}% DEF`);
  if (stats.cooldownPct) parts.push(`${stats.cooldownPct > 0 ? '+' : ''}${stats.cooldownPct}% COOLDOWN`);
  if (stats.bulletSpeedPct) parts.push(`${stats.bulletSpeedPct > 0 ? '+' : ''}${stats.bulletSpeedPct}% BULLET SPEED`);
  if (stats.pickupPct) parts.push(`${stats.pickupPct > 0 ? '+' : ''}${stats.pickupPct}% PICKUP`);
  if (stats.maxMana) parts.push(`${stats.maxMana > 0 ? '+' : ''}${stats.maxMana} MAX MANA`);
  if (stats.manaGainPct) parts.push(`${stats.manaGainPct > 0 ? '+' : ''}${stats.manaGainPct}% MANA FROM KILLS`);
  if (stats.maxHp) parts.push(`${stats.maxHp > 0 ? '+' : ''}${stats.maxHp} MAX HP`);
  return parts.length ? parts.join(' / ') : t('ui.noStats');
}

function weaponHTML(w, locked = false) {
  return `
    <div class="icon-row">
      <div class="sprite-box ${rarityClass(w.rarity)}"><img src="${w.path}" alt="${w.name}"></div>
      <div>
        <h3>${w.name}</h3>
        <div class="tag-row"><span class="tag ${rarityClass(w.rarity)}">${labelRarity(w.rarity)}</span><span class="tag">${w.className}</span><span class="tag">${w.type}</span>${locked ? `<span class="tag">${t('ui.locked')}</span>` : ''}</div>
      </div>
    </div>
    <p>${localizedField(w, 'desc')}</p>
    <p><b>${t('ui.attack')}:</b> ${w.behavior}${w.manaCost ? ` / mana ${w.manaCost}` : ''}</p>
    ${w.ability ? `<p><b>${t('ui.ability')}:</b> ${localizedField(w, 'ability')}</p>` : ''}
    ${w.type === 'Killer' ? `<p><b>${t('ui.killerRule')}:</b> ${t('ui.killerRuleText')}</p>` : ''}
    <p><b>${t('ui.primaryStats')}:</b> ${formatStats(w.stats)}</p>
  `;
}

function enemyHTML(e) {
  return `
    <div class="icon-row">
      <div class="sprite-box"><img src="${e.path}" alt="${e.name}"></div>
      <div>
        <h3>${e.name}</h3>
        <div class="tag-row"><span class="tag">HP ${e.hp}</span><span class="tag">SPD ${e.speed}</span>${e.ranged ? '<span class="tag">RANGED</span>' : '<span class="tag">MELEE</span>'}</div>
      </div>
    </div>
    <p>${localizedField(e, 'desc')}</p>
  `;
}


function bossHTML(b) {
  return `
    <div class="icon-row">
      <div class="sprite-box"><img src="${b.path}" alt="${b.name}"></div>
      <div>
        <h3>${b.name}</h3>
        <div class="tag-row"><span class="tag">WAVE ${b.wave}</span><span class="tag">HP ${b.hp}</span><span class="tag">${b.behavior}</span>${b.bossOnly ? '<span class="tag">SOLO</span>' : ''}</div>
      </div>
    </div>
    <p>${localizedField(b, 'desc')}</p>
  `;
}

function renderAllMeta() {
  el('coinText').textContent = isDevMode() ? '∞' : save.coins;
  updateDevUi();
}

function renderLoadout() {
  const unlocked = WEAPONS.filter(w => hasWeapon(w.id));
  const options = unlocked.map(w => `<option value="${w.id}">${w.name} // ${labelRarity(w.rarity)} // ${w.type}</option>`).join('');
  el('primarySelect').innerHTML = options;
  el('secondarySelect').innerHTML = options;
  if (!hasWeapon(save.primary)) save.primary = hasWeapon('pistol') ? 'pistol' : (unlocked[0]?.id || 'pistol');
  if (!hasWeapon(save.secondary)) save.secondary = hasWeapon('shortsword') ? 'shortsword' : (unlocked.find(w => w.id !== save.primary)?.id || save.primary);
  el('primarySelect').value = save.primary;
  el('secondarySelect').value = save.secondary;
  updateLoadoutCards();
}

function updateLoadoutCards() {
  const p = getWeapon(el('primarySelect').value);
  const s = getWeapon(el('secondarySelect').value);
  el('primaryCard').innerHTML = weaponHTML(p);
  el('secondaryCard').innerHTML = weaponHTML(s) + `<p><b>${t('ui.secondaryNote')}</b></p>`;
}

function unknownCard(kind) {
  const message = kind === 'weapon' ? t('ui.weaponUnknown') : (kind === 'enemy' ? t('ui.enemyUnknown') : t('ui.bossUnknown'));
  return `<article class="unknown-card"><div class="unknown-mark">?</div><p>${message}</p></article>`;
}

function renderEncyclopedia() {
  el('encyclopediaWeapons').innerHTML = WEAPONS.map(w => {
    const discovered = isDevMode() || hasWeapon(w.id);
    return discovered
      ? `<article class="weapon-card rarity-border ${rarityClass(w.rarity)}">${weaponHTML(w)}</article>`
      : unknownCard('weapon');
  }).join('');

  el('encyclopediaEnemies').innerHTML = ENEMY_TYPES.map(e => {
    const discovered = isDevMode() || save.discoveredEnemies.includes(e.id);
    return discovered
      ? `<article class="enemy-card">${enemyHTML(e)}</article>`
      : unknownCard('enemy');
  }).join('');

  const bossBox = el('encyclopediaBosses');
  if (bossBox) {
    bossBox.innerHTML = BOSS_TYPES.map(b => {
      const discovered = isDevMode() || (save.discoveredBosses || []).includes(b.id);
      return discovered
        ? `<article class="enemy-card">${bossHTML(b)}</article>`
        : unknownCard('boss');
    }).join('');
  }
}


function renderCharacterMenu() {
  const grid = el('hatGrid');
  const preview = el('characterPreview');
  const label = el('characterHatName');
  if (!grid || !preview || !label) return;

  const current = getHat(save.hat);
  const previewPlayerCenterY = 114;
  const previewScale = 3;
  const hatGameY = getHatY(current.id);
  const hatPreviewTop = previewPlayerCenterY + hatGameY * previewScale - 48;

  preview.innerHTML = `<img class="player-sprite" src="${PLAYER_SPRITE}" alt="Player">${current.path ? `<img class="hat-sprite" style="top:${hatPreviewTop}px;" src="${current.path}" alt="${current.name}">` : ''}`;
  label.textContent = t('ui.currentHat', { name: current.path ? current.name : t('ui.noHat') });

  grid.innerHTML = HATS.map(h => `
    <button class="hat-card ${save.hat === h.id ? 'selected' : ''}" data-hat="${h.id}">
      ${h.path ? `<img src="${h.path}" alt="${h.name}">` : `<div class="hat-empty">${t('ui.noHat')}</div>`}
      <span>${h.name}</span>
    </button>
  `).join('');

  grid.querySelectorAll('[data-hat]').forEach(btn => btn.addEventListener('click', () => {
    save.hat = btn.dataset.hat || 'none';
    saveGame();
    renderCharacterMenu();
    if (typeof lanSendProfile === 'function') {
      try { lanSendProfile(); } catch (_) {}
    }
  }));
}


function fillSelect(select, items, value, labelFn) {
  if (!select) return;
  const old = value || select.value;
  select.innerHTML = items.map(item => `<option value="${item.id}">${labelFn(item)}</option>`).join('');
  if (items.some(item => item.id === old)) select.value = old;
}

function fillTesterSelects() {
  const weaponValue = game?.mode === 'tester'
    ? (game.weapons?.[0]?.id || 'pistol')
    : (el('testerWeaponSelect')?.value || 'pistol');
  const enemyValue = game?.mode === 'tester'
    ? (game.testerEnemyId || 'brute')
    : (el('testerEnemySelect')?.value || 'brute');

  fillSelect(el('testerWeaponSelect'), WEAPONS, weaponValue, w => `${w.name} // ${labelRarity(w.rarity)} // ${w.type}`);
  fillSelect(el('liveTesterWeaponSelect'), WEAPONS, weaponValue, w => `${w.name} // ${labelRarity(w.rarity)} // ${w.type}`);

  fillSelect(el('testerEnemySelect'), ENEMY_TYPES, enemyValue, e => `${e.name} // HP ${e.hp}`);
  fillSelect(el('liveTesterEnemySelect'), ENEMY_TYPES, enemyValue, e => `${e.name} // HP ${e.hp}`);
}


function forceHideTesterLiveControls() {
  const box = el('testerLiveControls');
  if (box) box.classList.add('hidden');
}

function syncTesterLiveControls() {
  const box = el('testerLiveControls');
  if (!box) return;
  const active = !!(game && game.mode === 'tester' && game.running);
  box.classList.toggle('hidden', !active);
  if (!active) return;

  const liveWeapon = el('liveTesterWeaponSelect');
  const liveEnemy = el('liveTesterEnemySelect');
  const currentWeapon = game.weapons?.[0]?.id || 'pistol';
  const currentEnemy = game.testerEnemyId || 'brute';

  if (!liveWeapon?.options.length || !liveEnemy?.options.length) {
    fillTesterSelects();
    return;
  }

  if (liveWeapon.value !== currentWeapon) liveWeapon.value = currentWeapon;
  if (liveEnemy.value !== currentEnemy) liveEnemy.value = currentEnemy;
}

function renderTester() {
  fillTesterSelects();
  updateTesterCard();
}

function updateTesterCard() {
  const weaponSelect = el('testerWeaponSelect');
  const enemySelect = el('testerEnemySelect');
  const weaponCard = el('testerWeaponCard');
  const enemyCard = el('testerEnemyCard');

  if (weaponSelect && weaponCard) {
    weaponCard.innerHTML = weaponHTML(getWeapon(weaponSelect.value), false) + `<p><b>${t('ui.testerNote')}</b></p>`;
  }

  if (enemySelect && enemyCard) {
    const enemy = ENEMY_TYPES.find(e => e.id === enemySelect.value) || ENEMY_TYPES[0];
    enemyCard.innerHTML = `
      <article class="weapon-info">
        <h4>${enemy.name} Dummy</h4>
        <p><b>HP:</b> ${enemy.hp}</p>
        <p><b>${t('ui.dummyBehavior')}:</b> ${t('ui.dummyBehaviorText')}</p>
        <p><b>${t('ui.dummyReset')}:</b> ${t('ui.dummyResetText')}</p>
        <p>${localizedField(enemy, 'desc')}</p>
      </article>
    `;
  }
}

function startWeaponTest() {
  const selectedWeapon = el('testerWeaponSelect')?.value || 'pistol';
  const selectedEnemy = el('testerEnemySelect')?.value || 'brute';
  showScreen('game');
  createTesterGame(getWeapon(selectedWeapon), selectedEnemy);
}

function applyTesterWeapon(weaponId) {
  if (!game || game.mode !== 'tester') return;
  const weapon = getWeapon(weaponId || 'pistol');
  game.weapons = [makeRuntimeWeapon(weapon, true)];
  game.activeWeaponIndex = 0;
  game.projectiles = [];
  game.effects = [];
  game.enemyBullets = [];
  game.delayedActions = [];
  game.pickups = [];
  el('hudPrimary').textContent = weapon.name;
  el('hudSecondary').textContent = '-';
  el('hudActive').textContent = '1 ' + weapon.name + ' // TEST';
  fillTesterSelects();
}

function applyTesterEnemy(enemyId) {
  if (!game || game.mode !== 'tester') return;
  game.testerEnemyId = enemyId || 'brute';
  game.projectiles = [];
  game.effects = [];
  game.enemyBullets = [];
  game.delayedActions = [];
  game.pickups = [];
  resetTesterDummy(game.enemies.find(e => e.dummy), 'manual');
  fillTesterSelects();
}

function testerDummyStart() {
  return { x: 690, y: 270 };
}

function makeDummyEnemy(enemyId = 'brute') {
  const type = ENEMY_TYPES.find(e => e.id === enemyId) || ENEMY_TYPES.find(e => e.id === 'brute') || ENEMY_TYPES[0];
  const start = testerDummyStart();
  return {
    ...type,
    uid: enemyUid++,
    dummyTypeId: type.id,
    name: type.name + ' Dummy',
    x: start.x,
    y: start.y,
    r: type.radius,
    hp: type.hp,
    maxHp: type.hp,
    speed: 0,
    damage: 0,
    coin: 0,
    weight: 0,
    ranged: false,
    dummy: true,
    respawnDelay: 0,
    shootCd: 999,
    hitCd: 999,
    flash: 0,
    dead: false
  };
}

function resetTesterDummy(dummy, reason = 'reset') {
  if (!game || game.mode !== 'tester') return;
  const typeId = dummy?.dummyTypeId || game.testerEnemyId || 'brute';
  const fresh = makeDummyEnemy(typeId);
  if (dummy) Object.assign(dummy, fresh);
  else game.enemies = [fresh];

  const start = testerDummyStart();
  game.effects.push({
    type: reason === 'dead' ? 'pulse' : 'hit',
    x: start.x,
    y: start.y,
    radius: 52,
    life: 0.24,
    maxLife: 0.24
  });
}

function updateTesterDummy(dt = 0) {
  if (!game || game.mode !== 'tester') return;

  let dummy = game.enemies.find(e => e.dummy);
  if (!dummy) {
    resetTesterDummy(null, 'missing');
    return;
  }

  if (dummy.dead || dummy.hp <= 0) {
    dummy.dead = true;
    dummy.hp = 0;
    dummy.respawnDelay = Math.max(0, (dummy.respawnDelay || 0) - dt);
    if (dummy.respawnDelay <= 0) resetTesterDummy(dummy, 'dead');
    return;
  }

  const margin = 70;
  if (
    dummy.x < -margin ||
    dummy.x > game.canvas.width + margin ||
    dummy.y < -margin ||
    dummy.y > game.canvas.height + margin
  ) {
    resetTesterDummy(dummy, 'out');
  }
}

function renderGacha(results) {
  if (!results || results.length === 0) {
    el('gachaResults').innerHTML = `<p>${t('gacha.empty')}</p>`;
    return;
  }
  el('gachaResults').innerHTML = results.map(r => `
    <article class="result-card rarity-border ${rarityClass(r.weapon.rarity)}">
      ${weaponHTML(r.weapon, false)}
      <p><b>${t('gacha.result')}:</b> ${r.duplicate ? t('gacha.duplicate', { shards: r.shards }) : t('gacha.newUnlock')}</p>
    </article>
  `).join('');
}

function updateDevUi() {
  const controls = el('bossRushControls');
  const select = el('bossRushStartSelect');
  if (controls) controls.classList.toggle('hidden', !isDevMode());

  if (select) {
    const old = select.value;
    select.innerHTML = BOSS_TYPES.map(b => `<option value="${b.wave}">${t('dev.startWave', { wave: b.wave, name: b.name })}</option>`).join('');
    if ([...select.options].some(opt => opt.value === old)) select.value = old;
  }
}

function activateDevMode() {
  // Session-only dev mode: nothing is injected into the save file.
  devPanelUnlocked = true;
  sessionDevMode = true;
  devTypeBuffer = '';
  save.devMode = false;
  renderAllMeta();
  renderLoadout();
  renderCharacterMenu();
  renderEncyclopedia();
  renderGacha([]);
}

function requestDevAccess() {
  // Dev mode is activated by typing hellofriend on the title/menu screen.
}


function isTitleScreenActive() {
  const menu = el('screen-menu');
  return !!(menu && menu.classList.contains('active'));
}

function handleDevTyping(e) {
  if (isDevMode()) return false;
  if (!isTitleScreenActive()) return false;
  if (!e || e.ctrlKey || e.altKey || e.metaKey) return false;
  if (e.key === 'Tab') {
    e.preventDefault();
    devTypeBuffer = '';
    return true;
  }
  if (!/^[a-zA-Z]$/.test(e.key)) return false;
  devTypeBuffer = (devTypeBuffer + e.key.toLowerCase()).slice(-24);
  if (devTypeBuffer.endsWith('hellofriend')) {
    activateDevMode();
    return true;
  }
  return false;
}

function discoverBoss(id) {
  if (!save.discoveredBosses) save.discoveredBosses = [];
  if (!save.discoveredBosses.includes(id)) {
    save.discoveredBosses.push(id);
    saveGame();
  }
}

function discoverEnemy(id) {
  if (!save.discoveredEnemies.includes(id)) {
    save.discoveredEnemies.push(id);
    saveGame();
  }
}

function weightedPick(items, weightFn) {
  const total = items.reduce((sum, item) => sum + weightFn(item), 0);
  let roll = Math.random() * total;
  for (const item of items) {
    roll -= weightFn(item);
    if (roll <= 0) return item;
  }
  return items[items.length - 1];
}

function pullWeapon() {
  const rarityRoll = Math.random();
  const rarity = rarityRoll < 0.45 ? 'Comune' : (rarityRoll < 0.88 ? 'Raro' : 'Epico');
  const pool = WEAPONS.filter(w => w.rarity === rarity);
  const weapon = pool[Math.floor(Math.random() * pool.length)];
  const duplicate = hasWeapon(weapon.id);
  const shards = weapon.rarity === 'Epico' ? 35 : (weapon.rarity === 'Raro' ? 20 : 10);
  if (duplicate) {
    save.shards[weapon.id] = (save.shards[weapon.id] || 0) + shards;
  } else {
    save.unlocked.push(weapon.id);
  }
  return { weapon, duplicate, shards: duplicate ? shards : 0 };
}

function doPull(count) {
  const cost = isDevMode() ? 0 : 100 * count;
  if (!isDevMode() && save.coins < cost) {
    renderGacha([{ weapon: getWeapon('knife'), duplicate: true, shards: 0 }]);
    el('gachaResults').innerHTML = `<p>${t('gacha.insufficient')}</p>`;
    return;
  }
  if (!isDevMode()) save.coins -= cost;
  const results = [];
  for (let i = 0; i < count; i++) results.push(pullWeapon());
  saveGame();
  renderGacha(results);
}

function startRun() {
  save.primary = el('primarySelect')?.value || save.primary;
  save.secondary = el('secondarySelect')?.value || save.secondary;
  saveGame();
  showScreen('game');
  createGame();
}

function startBossRush() {
  if (!isDevMode()) return;
  save.primary = el('primarySelect')?.value || save.primary;
  save.secondary = el('secondarySelect')?.value || save.secondary;
  const selectedWave = Number(el('bossRushStartSelect')?.value || 10);
  const startWaveNum = isBossWave(selectedWave) ? selectedWave : 10;
  saveGame();
  showScreen('game');
  createGame({ bossRush: true, bossRushStartWave: startWaveNum });
}

function buildPlayerStats(primary) {
  const s = primary.stats || {};
  const maxHp = Math.max(30, 100 + (s.maxHp || 0));
  const maxMana = Math.max(0, 60 + (s.maxMana || 0));
  return {
    maxHp,
    hp: maxHp,
    maxMana,
    mana: maxMana,
    manaKillGain: 14 * (1 + (s.manaGainPct || 0) / 100),
    manaRegen: 2.0 * (1 + (s.manaGainPct || 0) / 160),
    hpKillGain: 6,
    speed: 150 * (1 + (s.speedPct || 0) / 100),
    attackMult: 1 + (s.attackPct || 0) / 100,
    defenseMult: clamp(1 - (s.defensePct || 0) / 100, 0.25, 1.5),
    cooldownMult: clamp(1 - (s.cooldownPct || 0) / 100, 0.25, 2),
    bulletSpeedMult: 1 + (s.bulletSpeedPct || 0) / 100,
    pickupRange: 42 * (1 + (s.pickupPct || 0) / 100)
  };
}

function createGame(options = {}) {
  if (animationId) cancelAnimationFrame(animationId);
  const canvas = el('gameCanvas');
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  const primary = getWeapon(save.primary);
  const secondary = getWeapon(save.secondary);
  const stats = buildPlayerStats(primary);
  game = {
    canvas, ctx,
    mode: options.bossRush ? 'bossrush' : 'run',
    bossRush: !!options.bossRush,
    running: true,
    ended: false,
    t: 0,
    spawnTimer: 0,
    spawnInterval: 1.05,
    winTime: Infinity,
    keys: {},
    mouse: { x: canvas.width / 2 + 120, y: canvas.height / 2, down: false, hasPosition: false },
    touchMove: { active: false, x: 0, y: 0, pointerId: null },
    player: { x: canvas.width / 2, y: canvas.height / 2, vx: 0, vy: 0, r: 14, lastAngle: -Math.PI / 2, aimAngle: 0, displayAngle: 0, walkBob: 0, invuln: 0, hurtFlash: 0, hat: save.hat || 'none', ...stats },
    weapons: [makeRuntimeWeapon(primary, true), makeRuntimeWeapon(secondary, false)],
    activeWeaponIndex: 0,
    maxWeaponSlots: 4,
    switchFlash: 0,
    enemies: [],
    projectiles: [],
    enemyBullets: [],
    effects: [],
    delayedActions: [],
    pickups: [],
    kills: 0,
    runCoins: 0,
    runPoints: 0,
    wave: 1,
    waveKills: 0,
    waveGoal: 0,
    waveSpawned: 0,
    waveEnemyCap: 0,
    wavePhase: 'combat',
    waveMessage: '',
    waveMessageTimer: 0,
    boss: null,
    bossTier: 0,
    shopOpen: false,
    shopOffers: [],
    slotOffer: null,
    shopPullUsed: false,
    shopPullResult: null,
    bossRushPrepping: false,
    bossRushPrepBonus: 0,
    counterPower: 0,
    runUpgrades: { damagePct: 0, attackSpeedPct: 0, speedFlat: 0, knockPct: 0, maxHpBonus: 0, maxManaBonus: 0 }
  };
  el('hudPrimary').textContent = primary.name;
  el('hudSecondary').textContent = secondary.name;
  el('hudActive').textContent = '1 ' + primary.name;
  forceHideTesterLiveControls();
  if (options.bossRush) startBossRushPrep(options.bossRushStartWave || 10, true);
  else startWave(1);
  lastTime = performance.now();
  animationId = requestAnimationFrame(loop);
}

function createTesterGame(testWeapon, dummyEnemyId = 'brute') {
  if (animationId) cancelAnimationFrame(animationId);
  const canvas = el('gameCanvas');
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  const stats = buildPlayerStats(testWeapon);
  stats.maxHp = 999;
  stats.hp = 999;
  stats.maxMana = Math.max(stats.maxMana, 999);
  stats.mana = stats.maxMana;
  game = {
    canvas, ctx,
    mode: 'tester',
    testerEnemyId: dummyEnemyId,
    wavePhase: 'combat',
    shopOpen: false,
    running: true,
    ended: false,
    t: 0,
    spawnTimer: 999,
    spawnInterval: 999,
    winTime: Infinity,
    keys: {},
    mouse: { x: 460, y: canvas.height / 2, down: false, hasPosition: false },
    touchMove: { active: false, x: 0, y: 0, pointerId: null },
    player: { x: 300, y: canvas.height / 2, vx: 0, vy: 0, r: 12, lastAngle: 0, aimAngle: 0, displayAngle: 0, walkBob: 0, invuln: 0, hurtFlash: 0, hat: save.hat || 'none', ...stats },
    weapons: [makeRuntimeWeapon(testWeapon, true)],
    activeWeaponIndex: 0,
    switchFlash: 0,
    enemies: [makeDummyEnemy(dummyEnemyId)],
    projectiles: [],
    enemyBullets: [],
    effects: [],
    delayedActions: [],
    pickups: [],
    kills: 0,
    runCoins: 0
  };
  el('hudPrimary').textContent = testWeapon.name;
  el('hudSecondary').textContent = '-';
  el('hudActive').textContent = '1 ' + testWeapon.name + ' // TEST';
  syncTesterLiveControls();
  lastTime = performance.now();
  animationId = requestAnimationFrame(loop);
}


function isBossWave(wave = game.wave) {
  return wave > 0 && wave % 10 === 0;
}

function bossBaseForWave(wave = game.wave) {
  if (!isBossWave(wave)) return null;
  const index = ((wave / 10) - 1) % BOSS_TYPES.length;
  return BOSS_TYPES[index];
}

function bossTierForWave(wave = game.wave) {
  if (!isBossWave(wave)) return 0;
  return Math.max(0, Math.floor((wave - 10) / 50));
}


function weaponPowerValue(w) {
  if (!w) return 0;
  const rarity = String(w.rarity || '').toLowerCase();
  const rarityScore = rarity.includes('leggend') ? 38 : rarity.includes('epic') || rarity.includes('epico') ? 26 : rarity.includes('rare') || rarity.includes('raro') ? 14 : 6;
  const typeScore = w.type === 'Killer' || w.type === 'Speller' ? 8 : 0;
  return rarityScore + typeScore;
}

function playerPowerScore() {
  if (!game || !game.player) return 0;
  ensureRunUpgrades?.();
  const p = game.player;
  const u = game.runUpgrades || {};
  const upgradeScore =
    (u.damagePct || 0) +
    (u.attackSpeedPct || 0) +
    (u.speedFlat || 0) * 0.75 +
    (u.knockPct || 0) * 0.25 +
    Math.max(0, p.maxHp - 100) * 0.36 +
    Math.max(0, p.maxMana - 60) * 0.24;
  const slotScore = Math.max(0, (game.weapons?.length || 2) - 2) * 34;
  const weaponScore = (game.weapons || []).reduce((sum, w) => sum + weaponPowerValue(w), 0) * 0.38;
  return Math.max(0, upgradeScore + slotScore + weaponScore);
}

function counterLevel() {
  return Math.floor(playerPowerScore() / 55);
}

function enemyCounterHpMult() {
  const score = playerPowerScore();
  return clamp(1 + score * 0.006, 1, 3.15);
}

function enemyCounterDamageMult() {
  const score = playerPowerScore();
  return clamp(1 + score * 0.0035, 1, 2.15);
}

function bossCounterHpMult() {
  const score = playerPowerScore();
  return clamp(1 + score * 0.014, 1, 5.20);
}

function bossCounterDamageMult() {
  const score = playerPowerScore();
  return clamp(1 + score * 0.0045, 1, 2.65);
}

function spawnPressureLevel() {
  return clamp(Math.floor(playerPowerScore() / 90), 0, 8);
}

function waveGoalFor(wave) {
  if (isBossWave(wave)) return 1;
  const pressure = spawnPressureLevel();
  return Math.round(5 + wave * 1.45 + Math.floor(wave / 5) + pressure * 3);
}

function waveCapFor(wave) {
  const pressure = spawnPressureLevel();
  if (isBossWave(wave)) return 5 + Math.min(6, pressure);
  return clamp(8 + Math.floor(wave / 2) + pressure * 2, 8, 64);
}

function enemyPoolForWave(wave) {
  const pool = [{ id: 'crawler', weight: 65 }];
  if (wave >= 2) pool.push({ id: 'runner', weight: 30 + Math.min(20, wave) });
  if (wave >= 4) pool.push({ id: 'brute', weight: 12 + Math.floor(wave / 3) });
  if (wave >= 5) pool.push({ id: 'spitter', weight: 12 + Math.floor(wave / 4) });
  return pool.map(p => ({ ...ENEMY_TYPES.find(e => e.id === p.id), weight: p.weight })).filter(Boolean);
}


function startBossRushPrep(wave, first = false) {
  if (!game) return;
  const boss = bossBaseForWave(wave);
  const tier = bossTierForWave(wave);
  const bonus = first ? 150 : 70 + tier * 25;

  game.wave = wave;
  game.waveKills = 0;
  game.waveGoal = 1;
  game.waveSpawned = 0;
  game.waveEnemyCap = 0;
  game.spawnTimer = 999;
  game.wavePhase = 'shop';
  game.shopOpen = true;
  game.pendingShop = false;
  game.bossRushPrepping = true;
  game.bossRushPrepBonus = bonus;
  game.boss = null;
  game.enemies = [];
  game.projectiles = [];
  game.enemyBullets = [];
  game.delayedActions = [];
  game.shopPullUsed = false;
  game.shopPullResult = null;
  game.runPoints += bonus;
  game.lastUpgradeText = first ? t('upgrade.initialPrep', { points: bonus }) : t('upgrade.nextPrep', { points: bonus });
  game.waveMessage = boss ? `PREPARE: ${boss.name}` : 'BOSS RUSH PREP';
  game.waveMessageTimer = 2.0;
  openWaveShop();
}

function startWave(wave) {
  if (!game || game.mode === 'tester') return;
  clearInputState();
  game.wave = wave;
  game.waveKills = 0;
  game.waveGoal = waveGoalFor(wave);
  game.waveSpawned = 0;
  game.waveEnemyCap = waveCapFor(wave);
  game.spawnTimer = 0.12;
  game.wavePhase = 'combat';
  game.shopOpen = false;
  game.bossRushPrepping = false;
  game.bossRushPrepBonus = 0;
  game.boss = null;
  game.bossTier = bossTierForWave(wave);
  game.enemies = [];
  game.projectiles = [];
  game.enemyBullets = [];
  game.delayedActions = [];
  game.effects.push({ type: 'pulse', x: game.canvas.width / 2, y: game.canvas.height / 2, radius: 70, life: 0.45, maxLife: 0.45 });
  const boss = bossBaseForWave(wave);
  if (boss) {
    game.waveMessage = wave === 50 ? 'NO MORE WAVES. ONLY PERSES.' : 'BOSS WAVE ' + wave + ': ' + boss.name;
    spawnBossForWave(wave);
  } else {
    game.waveMessage = 'WAVE ' + wave + ' START';
  }
  game.waveMessageTimer = 2.2;
  closeWaveShop();
  updateHud();
}

function aliveNonBossEnemies() {
  return game.enemies.filter(e => !e.dead && !e.boss && !e.bossClone && !e.dummy).length;
}

function aliveCombatEnemies() {
  return game.enemies.filter(e => !e.dead && !e.dummy).length;
}

function updateWaveSystem(dt) {
  if (!game || game.mode === 'tester' || game.shopOpen || game.wavePhase !== 'combat') return;
  game.waveMessageTimer = Math.max(0, (game.waveMessageTimer || 0) - dt);

  if (isBossWave(game.wave)) {
    const boss = game.boss && !game.boss.dead ? game.boss : game.enemies.find(e => e.boss && !e.dead);
    if (!boss) return;

    const base = bossBaseForWave(game.wave);
    // Normal boss waves have light pressure; Perses proves the point by fighting alone.
    if (!base?.bossOnly) {
      game.spawnTimer -= dt;
      const pressure = spawnPressureLevel();
      const cap = (game.wave >= 40 ? 4 : 3) + Math.min(5, pressure);
      if (game.spawnTimer <= 0 && aliveNonBossEnemies() < cap) {
        game.spawnTimer = clamp(4.8 - game.wave * 0.025 - pressure * 0.22, 1.25, 4.8);
        const burst = pressure >= 5 ? 2 : 1;
        for (let i = 0; i < burst && aliveNonBossEnemies() < cap; i++) spawnOneEnemy(true);
      }
    }
    return;
  }

  game.spawnTimer -= dt;
  const currentAlive = aliveNonBossEnemies();
  if (game.spawnTimer <= 0 && game.waveSpawned < game.waveGoal && currentAlive < game.waveEnemyCap) {
    const pressure = spawnPressureLevel();
    const burst = (game.wave >= 18 ? 3 : (game.wave >= 7 ? 2 : 1)) + Math.min(3, Math.floor(pressure / 2));
    for (let i = 0; i < burst; i++) {
      if (game.waveSpawned >= game.waveGoal || aliveNonBossEnemies() >= game.waveEnemyCap) break;
      spawnOneEnemy(false);
    }
    game.spawnTimer = clamp(0.72 - game.wave * 0.014 - pressure * 0.045, 0.10, 0.72);
  }

  if (game.waveSpawned >= game.waveGoal && game.waveKills >= game.waveGoal && aliveNonBossEnemies() === 0) {
    finishWave();
  }
}


function showClearBanner(text) {
  const banner = el('clearBanner');
  const label = el('clearBannerText');
  if (label) label.textContent = text;
  if (banner) banner.classList.remove('hidden');
}

function hideClearBanner() {
  const banner = el('clearBanner');
  if (banner) banner.classList.add('hidden');
}

function finishWave() {
  if (!game || game.mode === 'tester' || game.shopOpen || game.wavePhase === 'clear') return;
  clearInputState();
  const wasBoss = isBossWave(game.wave);
  game.wavePhase = 'clear';
  game.shopOpen = false;
  game.pendingShop = true;
  game.clearBannerTimer = 1.25;

  // CHAINEDFIX: fully clear combat leftovers when a boss dies.
  // Chained Beast creates heavy radial pressure; leaving old entities around during the
  // transition could make the browser feel stuck right as the shop should appear.
  game.projectiles = [];
  game.enemyBullets = [];
  game.delayedActions = [];
  game.pickups = [];
  game.boss = null;
  game.enemies = wasBoss ? [] : game.enemies.filter(e => e.boss && !e.dead);
  if (wasBoss) {
    // Gargamosh can leave many clone/summon/heal visual effects.
    // Clear them on boss death so the shop transition cannot stall.
    game.effects = [];
  }

  if (game.bossRush && wasBoss) {
    const bonus = 50 + bossTierForWave(game.wave) * 20;
    game.runPoints += bonus;
    game.lastUpgradeText = t('upgrade.nextPrep', { points: bonus });
  }
  game.waveMessage = wasBoss ? 'BOSS WAVE COMPLETATA!' : 'WAVE COMPLETATA!';
  game.waveMessageTimer = 1.25;
  showClearBanner(wasBoss ? t('shop.bossCleared') : t('shop.waveClearedTitle'));
}

function bossScaleForTier(base, tier) {
  return 1 + tier * 0.58;
}

function spawnBossForWave(wave) {
  const base = bossBaseForWave(wave);
  if (!base) return null;
  const tier = bossTierForWave(wave);
  const hpScale = bossScaleForTier(base, tier) * (1 + Math.max(0, wave - base.wave) * 0.018) * bossCounterHpMult();
  const hp = Math.round(base.hp * hpScale);
  const boss = {
    ...base,
    uid: enemyUid++,
    id: base.id,
    bossId: base.id,
    boss: true,
    tier,
    x: game.canvas.width / 2 + (base.id === 'perses' ? 0 : 140),
    y: base.id === 'perses' ? 155 : game.canvas.height / 2,
    r: base.radius + tier * 4,
    hp,
    maxHp: hp,
    size: base.size + tier * 10,
    speed: base.speed * (1 + tier * 0.08),
    damage: base.damage * (1 + tier * 0.14) * bossCounterDamageMult(),
    coin: Math.round(base.coin * (1 + tier * 0.5)),
    points: Math.round(base.points * (1 + tier * 0.45)),
    shootCd: 1.0,
    specialCd: 2.5,
    teleportCd: 4.0,
    summonCd: 6.0,
    healCd: 6.0,
    flash: 0,
    hitCd: 0,
    dead: false
  };
  discoverBoss(base.id);
  game.boss = boss;
  game.enemies.push(boss);
  return boss;
}

function bossShoot(e, angle, speed = 250, damage = e.damage, radius = 6, life = 5) {
  game.enemyBullets.push({
    x: e.x + Math.cos(angle) * (e.r + 6),
    y: e.y + Math.sin(angle) * (e.r + 6),
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    r: radius,
    damage,
    life,
    bossBullet: true
  });
}

function bossRadial(e, count, speed, damage, offset = 0) {
  for (let i = 0; i < count; i++) {
    bossShoot(e, offset + i * Math.PI * 2 / count, speed, damage, 6, 5.5);
  }
}


function bossLaserRay(e, angle, damage = e.damage, width = 26, range = 1500) {
  const sx = e.x;
  const sy = e.y;
  const ex = sx + Math.cos(angle) * range;
  const ey = sy + Math.sin(angle) * range;
  const p = game.player;
  game.effects.push({ type: 'biomechRay', x: sx, y: sy, angle, range, width, life: 0.32, maxLife: 0.32 });

  if (pointLineDistance(p.x, p.y, sx, sy, ex, ey) <= width / 2 + p.r) {
    damagePlayer(damage);
  }
}

function bossLaserSweep(e, rays = 5, spread = 0.8, damage = e.damage * 0.85) {
  const p = game.player;
  const base = Math.atan2(p.y - e.y, p.x - e.x);
  for (let i = 0; i < rays; i++) {
    const t = rays <= 1 ? 0 : (i / (rays - 1) - 0.5);
    const angle = base + t * spread;
    scheduleAction(i * 0.08, () => {
      if (!e.dead) bossLaserRay(e, angle, damage, 24, 1500);
    });
  }
}


function bossLaserFrom(e, x, y, angle, damage = e.damage, width = 40, range = 1600, type = 'persesRay') {
  const ex = x + Math.cos(angle) * range;
  const ey = y + Math.sin(angle) * range;
  const p = game.player;
  game.effects.push({ type, x, y, angle, range, width, life: 0.38, maxLife: 0.38 });

  if (pointLineDistance(p.x, p.y, x, y, ex, ey) <= width / 2 + p.r) {
    damagePlayer(damage);
  }
}

function persesVoidRain(e, count, damage, speed = 330) {
  for (let i = 0; i < count; i++) {
    const x = Math.random() * game.canvas.width;
    const drift = (Math.random() - 0.5) * 85;
    game.enemyBullets.push({
      x,
      y: -30 - Math.random() * 220,
      vx: drift,
      vy: speed + Math.random() * 120,
      r: 8 + Math.random() * 3,
      damage,
      life: 5.5,
      bossBullet: true
    });
  }
}

function persesBulletCrown(e, count, speed, damage, offset = 0) {
  const origins = [
    { x: e.x - 150, y: e.y + 30 },
    { x: e.x, y: e.y + 80 },
    { x: e.x + 150, y: e.y + 30 }
  ];

  for (const o of origins) {
    for (let i = 0; i < count; i++) {
      const angle = offset + (Math.PI * 2 * i / count);
      game.enemyBullets.push({
        x: o.x,
        y: o.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: 6,
        damage,
        life: 5.4,
        bossBullet: true
      });
    }
  }
}

function persesGiantLaserPattern(e, phase) {
  const p = game.player;
  const dmg = e.damage * (phase >= 3 ? 0.95 : phase >= 2 ? 0.78 : 0.65);
  const wide = phase >= 3 ? 86 : phase >= 2 ? 72 : 58;

  // Main eye laser from the giant body.
  bossLaserFrom(e, e.x, e.y + 120, Math.atan2(p.y - (e.y + 120), p.x - e.x), dmg, wide, 1700, 'persesRay');

  // Arena domination: vertical pillars. These are intentionally huge but not instant-kill.
  const cols = phase >= 3 ? 4 : 3;
  for (let i = 0; i < cols; i++) {
    const x = (game.canvas.width / (cols + 1)) * (i + 1) + Math.sin(game.t * 1.7 + i) * 38;
    scheduleAction(0.10 + i * 0.07, () => {
      if (!e.dead && game.wavePhase === 'combat') bossLaserFrom(e, x, -40, Math.PI / 2, dmg * 0.72, Math.max(42, wide * 0.72), 980, 'persesRay');
    });
  }

  // Final phase cross-beam.
  if (phase >= 3) {
    scheduleAction(0.34, () => {
      if (!e.dead && game.wavePhase === 'combat') {
        bossLaserFrom(e, -60, game.canvas.height * 0.42, 0, dmg * 0.80, 62, 1600, 'persesRay');
        bossLaserFrom(e, game.canvas.width + 60, game.canvas.height * 0.66, Math.PI, dmg * 0.80, 62, 1600, 'persesRay');
      }
    });
  }
}

function bossBurstAtPlayer(e, count = 5, spread = 0.28, speed = 300, damage = e.damage) {
  const p = game.player;
  const base = Math.atan2(p.y - e.y, p.x - e.x);
  for (let i = 0; i < count; i++) {
    const t = count <= 1 ? 0 : (i / (count - 1) - 0.5);
    bossShoot(e, base + t * spread, speed, damage, 5, 5);
  }
}

function moveBossTowardPlayer(e, dt, keepDistance = 0) {
  const p = game.player;
  const dx = p.x - e.x, dy = p.y - e.y;
  const d = Math.hypot(dx, dy) || 1;
  let dir = 1;
  if (keepDistance && d < keepDistance) dir = -0.8;
  else if (keepDistance && d < keepDistance + 45) dir = 0;
  e.x = clamp(e.x + (dx / d) * e.speed * dir * dt, e.r, game.canvas.width - e.r);
  e.y = clamp(e.y + (dy / d) * e.speed * dir * dt, e.r, game.canvas.height - e.r);
}

function updateBoss(e, dt) {
  if (!e || e.dead) return;
  const p = game.player;
  e.flash = Math.max(0, (e.flash || 0) - dt);
  e.hitCd = Math.max(0, (e.hitCd || 0) - dt);
  e.shootCd = Math.max(0, (e.shootCd || 0) - dt);
  e.specialCd = Math.max(0, (e.specialCd || 0) - dt);
  e.teleportCd = Math.max(0, (e.teleportCd || 0) - dt);
  e.summonCd = Math.max(0, (e.summonCd || 0) - dt);
  e.healCd = Math.max(0, (e.healCd || 0) - dt);

  if (e.behavior === 'mitra') {
    moveBossTowardPlayer(e, dt, 280);
    if (e.shootCd <= 0) {
      bossBurstAtPlayer(e, 7 + e.tier, 0.18, 360 + e.tier * 35, e.damage);
      e.shootCd = Math.max(0.45, 0.82 - e.tier * 0.08);
    }
    if (e.specialCd <= 0) {
      bossBurstAtPlayer(e, 9, 0.75, 300, e.damage * 0.8);
      e.specialCd = 4.2;
    }
  } else if (e.behavior === 'chained') {
    moveBossTowardPlayer(e, dt, 0);
    const d = Math.hypot(p.x - e.x, p.y - e.y);

    // Stronger Tartarus kit: chain pull if you kite too far, heavy slam if you stay close.
    if (e.specialCd <= 0) {
      const a = Math.atan2(p.y - e.y, p.x - e.x);
      game.effects.push({ type: 'pulse', x: e.x, y: e.y, radius: 165, life: 0.34, maxLife: 0.34 });

      if (d < 165) {
        damagePlayer(e.damage * 1.15);
        p.x = clamp(p.x + Math.cos(a) * 78, 18, game.canvas.width - 18);
        p.y = clamp(p.y + Math.sin(a) * 78, 18, game.canvas.height - 18);
      } else if (d < 360) {
        p.x = clamp(p.x - Math.cos(a) * 95, 18, game.canvas.width - 18);
        p.y = clamp(p.y - Math.sin(a) * 95, 18, game.canvas.height - 18);
        damagePlayer(e.damage * 0.45);
        game.effects.push({ type: 'hit', x: p.x, y: p.y, life: 0.16, maxLife: 0.16 });
      }

      e.specialCd = Math.max(1.35, 2.55 - e.tier * 0.16);
    }

    if (e.shootCd <= 0) {
      bossRadial(e, 14 + Math.min(4, e.tier * 2), 230 + e.tier * 18, Math.max(8, e.damage * 0.55), Math.random() * Math.PI);
      e.shootCd = Math.max(2.8, 3.6 - e.tier * 0.18);
    }
  } else if (e.behavior === 'gargamosh') {
    moveBossTowardPlayer(e, dt, 250);
    if (e.teleportCd <= 0) {
      e.x = 120 + Math.random() * (game.canvas.width - 240);
      e.y = 100 + Math.random() * (game.canvas.height - 200);
      game.effects.push({ type: 'pulse', x: e.x, y: e.y, radius: 70, life: 0.35, maxLife: 0.35 });
      e.teleportCd = Math.max(3.2, 5.2 - e.tier * 0.25);
    }
    if (e.shootCd <= 0) {
      bossBurstAtPlayer(e, 3 + Math.min(3, e.tier), 0.35, 290, e.damage);
      e.shootCd = 1.25;
    }
    if (e.specialCd <= 0) {
      if (aliveGargamoshClones(e).length < gargamoshCloneCap(e)) spawnGargamoshClone(e);
      e.specialCd = 7.0;
    }
    if (e.summonCd <= 0 && aliveNonBossEnemies() < 5) {
      for (let i = 0; i < 2; i++) spawnOneEnemy(true);
      e.summonCd = 8.0;
    }
    if (e.healCd <= 0) {
      for (const other of game.enemies) {
        if (other === e || other.boss || other.dead) continue;
        if (Math.hypot(other.x - e.x, other.y - e.y) < 260) {
          other.hp = clamp(other.hp + 18, 0, other.maxHp);
          game.effects.push({ type: 'healReward', x: other.x, y: other.y, life: 0.3, maxLife: 0.3 });
        }
      }
      e.healCd = 6.5;
    }
  } else if (e.behavior === 'biomech') {
    const hpPct = e.hp / e.maxHp;

    // Pre-final exam: faster movement, laser rays and actual bullet-hell rings.
    moveBossTowardPlayer(e, dt, hpPct < 0.45 ? 260 : 230);

    if (e.shootCd <= 0) {
      bossBurstAtPlayer(e, hpPct < 0.45 ? 9 : 7, hpPct < 0.45 ? 0.95 : 0.62, 360 + e.tier * 28, e.damage * 0.50);
      bossRadial(e, hpPct < 0.45 ? 18 : 14, hpPct < 0.45 ? 300 : 260, e.damage * 0.30, Math.random() * Math.PI);
      e.shootCd = hpPct < 0.45 ? 0.58 : 0.82;
    }

    if (e.specialCd <= 0) {
      bossLaserSweep(e, hpPct < 0.45 ? 7 : 5, hpPct < 0.45 ? 1.25 : 0.85, e.damage * 0.48);
      bossRadial(e, hpPct < 0.45 ? 28 : 22, hpPct < 0.45 ? 245 : 220, e.damage * 0.32, Math.random() * Math.PI);
      game.effects.push({ type: 'pulse', x: e.x, y: e.y, radius: hpPct < 0.45 ? 190 : 150, life: 0.35, maxLife: 0.35 });
      e.specialCd = hpPct < 0.45 ? 2.25 : 3.1;
    }

    if (e.summonCd <= 0) {
      // Alternating spiral ring: teaches the player to read patterns before Perses.
      const count = hpPct < 0.45 ? 24 : 18;
      const offset = game.t * 1.7;
      for (let i = 0; i < count; i++) {
        const angle = offset + (Math.PI * 2 * i / count);
        bossShoot(e, angle, hpPct < 0.45 ? 285 : 245, e.damage * 0.24, 5, 5.4);
      }
      e.summonCd = hpPct < 0.45 ? 1.65 : 2.15;
    }
  } else if (e.behavior === 'perses') {
    // PERSESOP: no chase, no normal boss behavior.
    // Perses is an enormous eldritch turret that owns the arena from above.
    const hpPct = e.hp / e.maxHp;
    const phase = hpPct < 0.33 ? 3 : hpPct < 0.66 ? 2 : 1;

    e.x = game.canvas.width / 2 + Math.sin(game.t * 0.33) * 26;
    e.y = 145 + Math.sin(game.t * 0.48) * 10;
    e.r = Math.max(e.r || 138, 138);

    if (e.shootCd <= 0) {
      // Continuous simultaneous bullet hell: crown rings + aimed fan.
      persesBulletCrown(e, phase >= 3 ? 18 : phase >= 2 ? 15 : 12, phase >= 3 ? 250 : 220, e.damage * (phase >= 3 ? 0.38 : 0.30), game.t * (phase >= 3 ? 2.1 : 1.45));
      bossBurstAtPlayer(e, phase >= 3 ? 13 : phase >= 2 ? 10 : 8, phase >= 3 ? 1.35 : 1.05, phase >= 3 ? 390 : 340, e.damage * (phase >= 3 ? 0.55 : 0.45));
      e.shootCd = phase >= 3 ? 0.42 : phase >= 2 ? 0.58 : 0.76;
    }

    if (e.specialCd <= 0) {
      // Giant lasers should define Perses.
      persesGiantLaserPattern(e, phase);
      game.effects.push({ type: 'pulse', x: e.x, y: e.y + 95, radius: phase >= 3 ? 280 : phase >= 2 ? 230 : 190, life: 0.45, maxLife: 0.45 });
      e.specialCd = phase >= 3 ? 1.65 : phase >= 2 ? 2.15 : 2.75;
    }

    if (e.teleportCd <= 0) {
      // Void rain is always happening in the background.
      persesVoidRain(e, phase >= 3 ? 18 : phase >= 2 ? 13 : 9, e.damage * (phase >= 3 ? 0.38 : 0.30), phase >= 3 ? 390 : 330);
      e.teleportCd = phase >= 3 ? 1.15 : phase >= 2 ? 1.55 : 2.05;
    }

    if (e.summonCd <= 0) {
      // Extra spiral layer so BioMechanical truly feels like only a preparation.
      const count = phase >= 3 ? 34 : phase >= 2 ? 26 : 20;
      const offset = -game.t * (phase >= 3 ? 2.6 : 1.7);
      for (let i = 0; i < count; i++) {
        const angle = offset + (Math.PI * 2 * i / count);
        bossShoot(e, angle, phase >= 3 ? 310 : 260, e.damage * 0.26, 5, 5.6);
      }
      e.summonCd = phase >= 3 ? 0.95 : phase >= 2 ? 1.35 : 1.85;
    }
  }

  if (!e.bossOnly && Math.hypot(p.x - e.x, p.y - e.y) <= e.r + p.r && e.hitCd <= 0) {
    damagePlayer(Math.max(1, e.damage * p.defenseMult));
    e.hitCd = 0.9;
  }
}


function gargamoshCloneCap(source) {
  // Hard cap: Gargamosh may keep at most 3 living clones.
  // This avoids infinite clone clutter while keeping the boss identity.
  return 3;
}

function aliveGargamoshClones(source = null) {
  return game.enemies.filter(e => e && !e.dead && e.bossClone && e.id === 'gargamoshclone');
}

function spawnGargamoshClone(source) {
  // GARGAMOSHFIX: delayed clone callbacks may still fire after Gargamosh dies.
  // If the boss/phase is gone, do nothing instead of touching a dead/null source.
  if (!combatUpdatesAllowed() || !source || source.dead) return null;
  if (aliveGargamoshClones(source).length >= gargamoshCloneCap(source)) return null;
  const hp = Math.round(source.maxHp * 0.18);
  const clone = {
    ...source,
    uid: enemyUid++,
    id: 'gargamoshclone',
    name: 'Gargamosh Clone',
    boss: false,
    bossClone: true,
    x: clamp(source.x + (Math.random() - 0.5) * 240, 60, game.canvas.width - 60),
    y: clamp(source.y + (Math.random() - 0.5) * 180, 60, game.canvas.height - 60),
    r: Math.max(22, source.r * 0.55),
    hp,
    maxHp: hp,
    size: Math.max(70, source.size * 0.55),
    damage: source.damage * 0.45,
    speed: source.speed * 0.75,
    coin: 0,
    points: 0,
    shootCd: 0.9,
    specialCd: 999,
    teleportCd: 999,
    summonCd: 999,
    healCd: 999,
    dead: false
  };
  game.enemies.push(clone);
  game.effects.push({ type: 'pulse', x: clone.x, y: clone.y, radius: 42, life: 0.25, maxLife: 0.25 });
  return clone;
}

function updateBossClone(e, dt) {
  if (!combatUpdatesAllowed() || !e || e.dead) return;
  e.flash = Math.max(0, (e.flash || 0) - dt);
  e.shootCd = Math.max(0, (e.shootCd || 0) - dt);
  moveBossTowardPlayer(e, dt, 230);
  if (e.shootCd <= 0) {
    bossBurstAtPlayer(e, 1, 0, 240, e.damage);
    e.shootCd = 1.7;
  }
}

function ensureRunUpgrades() {
  if (!game.runUpgrades) game.runUpgrades = {};
  game.runUpgrades.damagePct = game.runUpgrades.damagePct || 0;
  game.runUpgrades.attackSpeedPct = game.runUpgrades.attackSpeedPct || 0;
  game.runUpgrades.speedFlat = game.runUpgrades.speedFlat || 0;
  game.runUpgrades.knockPct = game.runUpgrades.knockPct || 0;
  game.runUpgrades.maxHpBonus = game.runUpgrades.maxHpBonus || 0;
  game.runUpgrades.maxManaBonus = game.runUpgrades.maxManaBonus || 0;
}

function applyRunUpgrade(kind) {
  if (!game || !game.player) return;
  ensureRunUpgrades();
  const p = game.player;

  if (kind === 'damage') {
    game.runUpgrades.damagePct += 20;
    p.attackMult *= 1.20;
    game.lastUpgradeText = `Damage +20% // total +${game.runUpgrades.damagePct}%`;
  } else if (kind === 'speed') {
    game.runUpgrades.speedFlat += 25;
    p.speed += 25;
    game.lastUpgradeText = `Speed +25 // total +${game.runUpgrades.speedFlat}`;
  } else if (kind === 'cooldown') {
    game.runUpgrades.attackSpeedPct += 18;
    p.cooldownMult = Math.max(0.22, p.cooldownMult * 0.82);
    for (const w of game.weapons) w.timer = Math.max(0, (w.timer || 0) * 0.82);
    game.lastUpgradeText = `Attack Speed +18% // total +${game.runUpgrades.attackSpeedPct}%`;
  } else if (kind === 'hp') {
    game.runUpgrades.maxHpBonus += 25;
    p.maxHp += 25;
    p.hp = clamp(p.hp + 25, 0, p.maxHp);
    game.lastUpgradeText = '+25 Max HP';
  } else if (kind === 'mana') {
    game.runUpgrades.maxManaBonus += 25;
    p.maxMana += 25;
    p.mana = clamp(p.mana + 25, 0, p.maxMana);
    game.lastUpgradeText = '+25 Max Mana';
  } else if (kind === 'heal') {
    p.hp = clamp(p.hp + 60, 0, p.maxHp);
    game.lastUpgradeText = 'Heal +60 HP';
  } else if (kind === 'maxhp60') {
    game.runUpgrades.maxHpBonus += 60;
    p.maxHp += 60;
    p.hp = clamp(p.hp + 60, 0, p.maxHp);
    game.lastUpgradeText = '+60 Max HP';
  } else if (kind === 'maxmana60') {
    game.runUpgrades.maxManaBonus += 60;
    p.maxMana += 60;
    p.mana = clamp(p.mana + 60, 0, p.maxMana);
    game.lastUpgradeText = '+60 Max Mana';
  } else if (kind === 'knock') {
    game.runUpgrades.knockPct += 25;
    game.lastUpgradeText = `Knockback +25% // total +${game.runUpgrades.knockPct}%`;
  }

  game.effects.push({ type: 'pulse', x: p.x, y: p.y, radius: 52, life: 0.25, maxLife: 0.25 });
}

function shopUpgradeOptions() {
  const options = [
    { id: 'hp', name: '+25 Max HP', cost: 16, apply: () => applyRunUpgrade('hp') },
    { id: 'mana', name: '+25 Max Mana', cost: 14, apply: () => applyRunUpgrade('mana') },
    { id: 'damage', name: '+20% Damage', cost: 22, apply: () => applyRunUpgrade('damage') },
    { id: 'speed', name: '+25 Speed', cost: 18, apply: () => applyRunUpgrade('speed') },
    { id: 'cooldown', name: '+18% Attack Speed', cost: 24, apply: () => applyRunUpgrade('cooldown') },
    { id: 'heal', name: 'Heal 60 HP', cost: 10, apply: () => applyRunUpgrade('heal') },
    { id: 'knock', name: '+25% Knockback', cost: 12, apply: () => applyRunUpgrade('knock') }
  ];

  // Rare big-stat offers. No HP/Mana full refill buttons.
  if (Math.random() < 0.34 || isBossWave(game?.wave || 1)) options.push({ id: 'maxhp60', name: '+60 Max HP', cost: 34, apply: () => applyRunUpgrade('maxhp60') });
  if (Math.random() < 0.34 || isBossWave(game?.wave || 1)) options.push({ id: 'maxmana60', name: '+60 Max Mana', cost: 32, apply: () => applyRunUpgrade('maxmana60') });

  return options;
}

function randomShopOffers() {
  const base = shopUpgradeOptions();
  const offers = [];
  while (offers.length < 4 && base.length) {
    const idx = Math.floor(Math.random() * base.length);
    offers.push(base.splice(idx, 1)[0]);
  }
  return offers;
}

function openWaveShop() {
  if (!game) return;
  clearInputState();
  hideClearBanner();
  game.shopOpen = true;
  game.wavePhase = 'shop';
  game.pendingShop = false;
  game.shopOffers = randomShopOffers();
  game.shopPullUsed = false;
  game.shopPullResult = null;
  const nextSlot = game.weapons.length + 1;
  const lucky = game.weapons.length < game.maxWeaponSlots && (game.bossRush || Math.random() < 0.35 || isBossWave(game.wave));
  game.slotOffer = lucky ? {
    slot: nextSlot,
    cost: nextSlot === 3 ? 60 : 120,
    weaponId: randomUnlockedWeapon().id
  } : null;

  try {
    renderWaveShop();
  } catch (err) {
    console.error('Wave shop render failed:', err);
    const title = el('waveShopTitle');
    const stats = el('waveShopStats');
    if (title) title.textContent = isBossWave(game.wave) ? t('shop.bossCleared') : t('shop.waveClearedTitle');
    if (stats) stats.textContent = `Run Points: ${game.runPoints} // Run Coins: ${game.runCoins}`;
  }

  const box = el('waveShop');
  if (box) box.classList.remove('hidden');
}

function closeWaveShop() {
  hideClearBanner();
  const box = el('waveShop');
  if (box) box.classList.add('hidden');
}

function randomUnlockedWeapon() {
  const unlocked = WEAPONS.filter(w => hasWeapon(w.id));
  return unlocked[Math.floor(Math.random() * unlocked.length)] || getWeapon('pistol');
}


function playerShopStatsHTML() {
  if (!game?.player) return '';
  const p = game.player;
  const dmgPct = Math.round((p.attackMult - 1) * 100);
  const atkSpeedPct = Math.round((1 / Math.max(0.01, p.cooldownMult) - 1) * 100);
  const slots = `${game.weapons.length}/${game.maxWeaponSlots || 4}`;
  const active = game.weapons[game.activeWeaponIndex || 0]?.name || '-';
  return `
    <div class="shop-player-stats">
      <b>${t('shop.playerStats')}</b>
      <span>HP ${Math.ceil(p.hp)} / ${p.maxHp}</span>
      <span>MANA ${Math.floor(p.mana)} / ${p.maxMana}</span>
      <span>SPEED ${Math.round(p.speed)}</span>
      <span>${t('shop.damage')} ${dmgPct >= 0 ? '+' : ''}${dmgPct}%</span>
      <span>${t('shop.attackSpeed')} ${atkSpeedPct >= 0 ? '+' : ''}${atkSpeedPct}%</span>
      <span>${t('hud.slots')} ${slots}</span>
      <span>${t('shop.active')} ${active}</span>
    </div>
  `;
}

function renderWaveShop() {
  if (!game) return;
  const title = el('waveShopTitle');
  const stats = el('waveShopStats');
  const loadout = el('shopLoadout');
  const upgrades = el('shopUpgrades');
  const slot = el('shopSlotOffer');
  const blackBox = el('shopBlackBox');
  if (!title || !stats || !loadout || !upgrades || !slot) return;

  const prepBoss = bossBaseForWave(game.wave);
  title.textContent = game.bossRushPrepping
    ? t('shop.bossPrep', { boss: prepBoss ? ': ' + prepBoss.name : '' })
    : (isBossWave(game.wave) ? t('shop.bossCleared') : t('shop.waveClearedTitle'));
  ensureRunUpgrades();
  const power = Math.round(playerPowerScore());
  const upgradeText = `DMG +${game.runUpgrades.damagePct}% // ATK SPD +${game.runUpgrades.attackSpeedPct}% // SPEED +${game.runUpgrades.speedFlat} // POWER ${power} // COUNTER ${counterLevel()}`;
  const modeText = game.bossRush
    ? (game.bossRushPrepping ? t('shop.prepGranted', { points: game.bossRushPrepBonus }) : t('shop.bossRushReward'))
    : t('shop.waveClearedLine', { wave: game.wave });
  stats.innerHTML = `
    <span>${modeText} // Run Points: ${game.runPoints} // Run Coins: ${game.runCoins} // ${upgradeText}${game.lastUpgradeText ? ' // ' + t('shop.last') + ': ' + game.lastUpgradeText : ''}</span>
    ${playerShopStatsHTML()}
  `;

  const unlocked = WEAPONS.filter(w => hasWeapon(w.id));
  loadout.innerHTML = game.weapons.map((w, i) => `
    <div class="shop-loadout-row">
      <b>${t('shop.slot', { slot: i + 1 })}</b>
      <select class="shop-weapon-select" data-slot="${i}">
        ${unlocked.map(opt => `<option value="${opt.id}" ${opt.id === w.id ? 'selected' : ''}>${opt.name} // ${labelRarity(opt.rarity)}</option>`).join('')}
      </select>
    </div>
  `).join('');

  upgrades.innerHTML = game.shopOffers.map((offer, i) => `
    <div class="shop-row">
      <b>${offer.name}</b>
      <span>${t('shop.costPoints', { cost: offer.cost })}</span>
      <button data-buy-upgrade="${i}" ${game.runPoints < offer.cost ? 'disabled' : ''}>${t('shop.buy')}</button>
    </div>
  `).join('');

  if (game.slotOffer) {
    const w = getWeapon(game.slotOffer.weaponId);
    slot.innerHTML = `
      <div class="shop-row">
        <b>${t('shop.extraSlot', { slot: game.slotOffer.slot })}</b>
        <span>${t('shop.costPoints', { cost: game.slotOffer.cost })}</span>
        <span>${t('shop.comesWith', { name: w.name })}</span>
        <button data-buy-slot="1" ${game.runPoints < game.slotOffer.cost ? 'disabled' : ''}>${t('shop.buySlot')}</button>
      </div>
    `;
  } else {
    slot.innerHTML = `<p class="small-text">${t('shop.noSlot')}</p>`;
  }

  if (blackBox) {
    const cost = 100;
    const canBuy = isDevMode() || game.runCoins >= cost;
    const result = game.shopPullResult;
    blackBox.innerHTML = `
      <div class="shop-row">
        <b>Black Box x1</b>
        <span>${t('shop.blackBoxCost', { cost })}</span>
        <button data-shop-blackbox="1" ${game.shopPullUsed || !canBuy ? 'disabled' : ''}>PULL x1</button>
      </div>
      ${result ? `<div class="shop-blackbox-result rarity-border ${rarityClass(result.weapon.rarity)}"><b>${result.weapon.name}</b> // ${labelRarity(result.weapon.rarity)} // ${result.duplicate ? t('gacha.duplicate', { shards: result.shards }) : t('gacha.newUnlock')}</div>` : ''}
    `;
  }
}

function applyShopLoadout() {
  if (!game || !game.shopOpen) return;
  document.querySelectorAll('.shop-weapon-select').forEach(sel => {
    const slot = Number(sel.dataset.slot);
    const weapon = getWeapon(sel.value);
    if (game.weapons[slot] && weapon) {
      const old = game.weapons[slot];
      game.weapons[slot] = makeRuntimeWeapon(weapon, slot === 0);
      game.weapons[slot].timer = old.timer || 0;
    }
  });
  if (game.activeWeaponIndex >= game.weapons.length) game.activeWeaponIndex = 0;
  updateHud();
  renderWaveShop();
}

function buyShopUpgrade(index) {
  if (!game || !game.shopOpen) return;
  const offer = game.shopOffers[index];
  if (!offer || game.runPoints < offer.cost) return;
  game.runPoints -= offer.cost;
  offer.apply();
  game.shopOffers.splice(index, 1);
  updateHud();
  renderWaveShop();
}

function buyShopSlot() {
  if (!game || !game.shopOpen || !game.slotOffer) return;
  const offer = game.slotOffer;
  if (game.weapons.length >= game.maxWeaponSlots || game.runPoints < offer.cost) return;
  game.runPoints -= offer.cost;
  const weapon = getWeapon(offer.weaponId);
  game.weapons.push(makeRuntimeWeapon(weapon, false));
  game.slotOffer = null;
  updateHud();
  renderWaveShop();
}


function buyShopBlackBox() {
  if (!game || !game.shopOpen || game.shopPullUsed) return;
  const cost = 100;
  if (!isDevMode() && game.runCoins < cost) return;
  if (!isDevMode()) game.runCoins -= cost;
  const result = pullWeapon();
  game.shopPullUsed = true;
  game.shopPullResult = result;
  saveGame();
  updateHud();
  renderWaveShop();
}

function continueAfterShop() {
  if (!game || !game.shopOpen) return;
  applyShopLoadout();
  const waveToStart = game.bossRushPrepping ? game.wave : (game.bossRush ? game.wave + 10 : game.wave + 1);
  closeWaveShop();
  game.shopOpen = false;
  game.wavePhase = 'combat';
  startWave(waveToStart);
}


function enemyCoinReward(e) {
  if (!e || e.bossClone) return 0;
  const base = e.coin || 0;
  if (e.boss) return Math.max(10, Math.round(base * 0.42));
  return Math.max(1, Math.round(base * 0.45));
}

function enemyPointReward(e) {
  if (e.boss) return e.points || 40;
  if (e.bossClone) return 0;
  if (e.id === 'brute') return 4;
  if (e.id === 'spitter') return 3;
  if (e.id === 'runner') return 2;
  return 1;
}


function makeRuntimeWeapon(w, isPrimary) {
  return {
    ...w,
    timer: 0,
    isPrimary,
    swingTimer: 0,
    swingMax: 0,
    swingDir: 1,
    swingAngle: 0,
    thrustTimer: 0,
    thrustMax: 0,
    recoilTimer: 0,
    recoilMax: 0,
    orbitTimer: 0,
    frenzyTimer: 0,
    frenzyCharge: 0,
    frenzyThreshold: w.frenzyThreshold || 600
  };
}

function loop(now) {
  if (!game || !game.running) return;
  const dt = Math.min(0.033, (now - lastTime) / 1000);
  lastTime = now;
  update(dt);
  draw();
  animationId = requestAnimationFrame(loop);
}



function retryCurrentWave() {
  if (!game || game.mode === 'tester') return false;
  const retryWave = game.wave || 1;
  const ok = (typeof confirm === 'function')
    ? confirm(t('death.retry', { wave: retryWave }))
    : true;
  if (!ok) return false;

  game.player.hp = game.player.maxHp;
  game.player.mana = game.player.maxMana;
  game.ended = false;
  game.running = true;
  game.enemies = [];
  game.projectiles = [];
  game.enemyBullets = [];
  game.delayedActions = [];
  game.effects = [];
  game.pickups = [];
  game.boss = null;
  game.shopOpen = false;
  game.wavePhase = 'combat';
  game.lastUpgradeText = t('death.retry', { wave: retryWave }).replace('?', '');

  if (game.bossRush && isBossWave(retryWave)) startBossRushPrep(retryWave, false);
  else startWave(retryWave);
  return true;
}

function handlePlayerDeath() {
  if (retryCurrentWave()) return;
  endRun(false, t('death.message'));
}

function updatePlayerResourceRegen(dt) {
  const p = game?.player;
  if (!p || p.hp <= 0 || !p.maxMana) return;
  const regen = p.manaRegen || 2.0;
  p.mana = clamp(p.mana + regen * dt, 0, p.maxMana);
}

function update(dt) {
  const g = game;
  if (!g) return;

  if (g.wavePhase === 'clear') {
    g.waveMessageTimer = Math.max(0, (g.waveMessageTimer || 0) - dt);
    g.clearBannerTimer = Math.max(0, (g.clearBannerTimer || 0) - dt);
    if (g.clearBannerTimer <= 0 && g.pendingShop) openWaveShop();

    // CHAINEDFIX failsafe: never remain forever in clear state.
    if (g.wavePhase === 'clear' && !g.pendingShop && !g.shopOpen) openWaveShop();

    updateHud();
    return;
  }

  if (g.shopOpen) {
    g.waveMessageTimer = Math.max(0, (g.waveMessageTimer || 0) - dt);
    updateHud();
    return;
  }

  g.t += dt;
  g.switchFlash = Math.max(0, (g.switchFlash || 0) - dt);
  if ((typeof document.hasFocus === 'function' && !document.hasFocus()) || !isGameScreenActive()) clearMovementKeys();
  updatePlayer(dt);
  updatePlayerResourceRegen(dt);
  updateWeapons(dt);
  updateProjectiles(dt);
  updateEnemies(dt);
  updateEnemyBullets(dt);
  updateDelayedActions(dt);
  updateEffects(dt);
  updatePickups(dt);
  if (g.mode === 'tester') updateTesterDummy(dt);
  else spawnEnemies(dt);
  updateHud();
  if (g.player.hp <= 0) handlePlayerDeath();
}


function canvasPointFromEvent(evt) {
  if (!game || !game.canvas || !evt) return null;
  const rect = game.canvas.getBoundingClientRect ? game.canvas.getBoundingClientRect() : { left: 0, top: 0, width: game.canvas.width, height: game.canvas.height };
  const sx = game.canvas.width / (rect.width || game.canvas.width || 1);
  const sy = game.canvas.height / (rect.height || game.canvas.height || 1);
  return {
    x: clamp((evt.clientX - rect.left) * sx, 0, game.canvas.width),
    y: clamp((evt.clientY - rect.top) * sy, 0, game.canvas.height)
  };
}

function setManualAimFromEvent(evt) {
  if (!game) return;
  const pt = canvasPointFromEvent(evt);
  if (!pt) return;
  if (!game.mouse) game.mouse = { x: pt.x, y: pt.y, down: false, hasPosition: true };
  game.mouse.x = pt.x;
  game.mouse.y = pt.y;
  game.mouse.hasPosition = true;
}

function isFireHeld() {
  return !!(game && !game.shopOpen && (game.mouse?.down || game.keys[' '] || game.keys['enter']));
}

function updatePlayer(dt) {
  const p = game.player;
  let dx = 0, dy = 0;
  if (game.keys['w'] || game.keys['arrowup']) dy -= 1;
  if (game.keys['s'] || game.keys['arrowdown']) dy += 1;
  if (game.keys['a'] || game.keys['arrowleft']) dx -= 1;
  if (game.keys['d'] || game.keys['arrowright']) dx += 1;

  // Mobile joystick has priority over keyboard, but does not write into game.keys.
  if (game.touchMove?.active) {
    dx = game.touchMove.x || 0;
    dy = game.touchMove.y || 0;
  }

  const len = Math.hypot(dx, dy) || 1;
  if (dx || dy) { dx /= len; dy /= len; p.lastAngle = Math.atan2(dy, dx); }

  // Movimento più smooth: accelerazione/decelerazione invece di scatto secco.
  const targetVx = dx * p.speed;
  const targetVy = dy * p.speed;
  const accel = (dx || dy) ? 15 : 18;
  p.vx += (targetVx - p.vx) * Math.min(1, accel * dt);
  p.vy += (targetVy - p.vy) * Math.min(1, accel * dt);
  p.x = clamp(p.x + p.vx * dt, 18, game.canvas.width - 18);
  p.y = clamp(p.y + p.vy * dt, 18, game.canvas.height - 18);
  p.walkBob += Math.hypot(p.vx, p.vy) * dt * 0.08;

  const target = priorityEnemy(900);
  p.aimAngle = target ? Math.atan2(target.y - p.y, target.x - p.x) : p.lastAngle;
  p.displayAngle += normAngle(p.aimAngle - p.displayAngle) * Math.min(1, 18 * dt);

  p.invuln = Math.max(0, (p.invuln || 0) - dt);
  p.hurtFlash = Math.max(0, (p.hurtFlash || 0) - dt);
}

function updateWeapons(dt) {
  const active = game.weapons[game.activeWeaponIndex || 0];
  for (const w of game.weapons) {
    w.swingTimer = Math.max(0, (w.swingTimer || 0) - dt);
    w.thrustTimer = Math.max(0, (w.thrustTimer || 0) - dt);
    w.recoilTimer = Math.max(0, (w.recoilTimer || 0) - dt);
    w.orbitTimer = Math.max(0, (w.orbitTimer || 0) - dt);
    w.frenzyTimer = Math.max(0, (w.frenzyTimer || 0) - dt);
    // L'arma non attiva non spara, ma il suo cooldown si ricarica piano.
    if (w !== active) w.timer = Math.max(0, w.timer - dt * 0.55);
  }
  if (!active) return;
  active.timer -= dt;

  if (active.timer <= 0) {
    if (!hasTargetForWeapon(active)) {
      active.timer = 0.06;
      return;
    }
    if (active.behavior === 'orbitSlash') {
      fireGhostScytheSmart(active);
      return;
    }
    if (active.manaCost && game.player.mana < active.manaCost) {
      active.timer = 0.12;
      return;
    }
    if (active.manaCost) game.player.mana -= active.manaCost;
    fireWeapon(active);
    active.timer = weaponCooldown(active);
  }
}

function nearestEnemy(maxDist = Infinity) {
  let best = null, bestD = maxDist;
  for (const e of game.enemies) {
    if (!e || e.dead || e.hp <= 0) continue;
    const d = Math.hypot(e.x - game.player.x, e.y - game.player.y);
    if (d < bestD) { best = e; bestD = d; }
  }
  return best;
}

function priorityEnemy(maxDist = Infinity, closeThreatDist = 135) {
  if (!game || !game.player) return null;

  const boss = game.boss && !game.boss.dead && game.boss.hp > 0 ? game.boss : game.enemies.find(e => e.boss && !e.dead && e.hp > 0);
  const inBossStage = !!boss && isBossWave(game.wave);

  if (inBossStage) {
    const closeThreat = game.enemies
      .filter(e => e && !e.dead && e.hp > 0 && !e.boss && Math.hypot(e.x - game.player.x, e.y - game.player.y) <= closeThreatDist)
      .sort((a, b) => Math.hypot(a.x - game.player.x, a.y - game.player.y) - Math.hypot(b.x - game.player.x, b.y - game.player.y))[0];

    if (closeThreat) return closeThreat;

    const bossDist = Math.hypot(boss.x - game.player.x, boss.y - game.player.y);
    if (bossDist <= maxDist) return boss;
  }

  return nearestEnemy(maxDist);
}

function hasTargetForWeapon(w) {
  if (!w || !game.enemies.length) return false;

  if (w.className === 'Slasher') {
    // Le melee non devono fare swing nel vuoto: attaccano solo quando un nemico è davvero vicino.
    const meleeReach = (w.range || 75) + 26;
    return !!priorityEnemy(meleeReach);
  }

  // Le ranged possono sparare appena hanno qualcosa in arena a distanza sensata.
  return !!priorityEnemy(900);
}

function fireGhostScytheSmart(w) {
  const target = priorityEnemy((w.orbitRange || w.range || 108) + 30);
  if (!target) { w.timer = 0.08; return; }
  w.orbitTimer = Math.max(0, w.orbitTimer || 0);
  const angle = Math.atan2(target.y - game.player.y, target.x - game.player.x);

  // Big clean-up attack: full circle, only every few seconds.
  if (w.orbitTimer <= 0 && game.player.mana >= (w.orbitManaCost || 12)) {
    game.player.mana -= (w.orbitManaCost || 12);
    startWeaponAnimation({ ...w, behavior: 'orbit' }, angle);
    fireOrbitScythe(w, angle);
    w.orbitTimer = (w.orbitCooldown || 3.2) * game.player.cooldownMult;
    w.timer = weaponCooldown(w);
    return;
  }

  // Normal swing while waiting for the orbit.
  if (w.manaCost && game.player.mana < w.manaCost) { w.timer = 0.12; return; }
  if (w.manaCost) game.player.mana -= w.manaCost;
  startWeaponAnimation(w, angle);
  fireSlash(w, angle);
  w.timer = weaponCooldown(w);
}

function fireWeapon(w) {
  const target = priorityEnemy(700);
  const angle = target ? Math.atan2(target.y - game.player.y, target.x - game.player.x) : game.player.displayAngle;
  startWeaponAnimation(w, angle);
  if (w.behavior === 'projectile') fireProjectile(w, angle);
  else if (w.behavior === 'burst') {
    fireProjectile(w, angle - 0.07);
    scheduleAction(0.08, () => fireProjectile(w, angle));
    scheduleAction(0.16, () => fireProjectile(w, angle + 0.07));
  }
  else if (w.behavior === 'orb') fireOrb(w, angle);
  else if (w.behavior === 'ricochet') fireProjectile(w, angle);
  else if (w.behavior === 'beam') fireBeam(w, angle);
  else if (w.behavior === 'saw') fireSaw(w, angle);
  else if (w.behavior === 'slash') fireSlash(w, angle);
  else if (w.behavior === 'doubleSlash') fireDoubleSlash(w, angle);
  else if (w.behavior === 'twinCombo') fireTwinKnife(w, angle);
  else if (w.behavior === 'orbit') fireOrbitScythe(w, angle);
  else if (w.behavior === 'orbitSlash') fireSlash(w, angle);
  else if (w.behavior === 'line') fireLine(w, angle);
}

function weaponCooldown(w) {
  const frenzyMult = (w && w.frenzyTimer > 0) ? 0.55 : 1;
  return Math.max(0.08, (w.cooldown || 0.70) * game.player.cooldownMult * frenzyMult);
}

function scaledDamage(w) {
  const frenzyMult = (w && w.frenzyTimer > 0) ? 1.45 : 1;
  return Math.max(1, Math.round(w.damage * game.player.attackMult * frenzyMult));
}

function runtimeWeaponById(id) {
  return game?.weapons?.find(w => w.id === id) || getWeapon(id);
}

function startWeaponAnimation(w, angle) {
  if (!w) return;
  if (w.className === 'Slasher') {
    w.swingDir = (w.swingDir || 1) * -1;
    w.swingAngle = angle;
    if (w.behavior === 'orbit') {
      w.swingTimer = 0.72;
      w.swingMax = 0.72;
    } else if (w.behavior === 'orbitSlash') {
      w.swingTimer = 0.26;
      w.swingMax = 0.26;
    } else if (w.behavior === 'line') {
      w.thrustTimer = 0.18;
      w.thrustMax = 0.18;
      w.swingTimer = 0.14;
      w.swingMax = 0.14;
    } else {
      w.swingTimer = 0.26;
      w.swingMax = 0.26;
    }
  } else {
    w.recoilTimer = 0.12;
    w.recoilMax = 0.12;
  }
}

function fireProjectile(w, angle) {
  const speed = (w.bulletSpeed || 400) * game.player.bulletSpeedMult;
  game.projectiles.push({
    x: game.player.x + Math.cos(angle) * 18,
    y: game.player.y + Math.sin(angle) * 18,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    r: w.type === 'Speller' ? 7 : 5,
    damage: scaledDamage(w),
    pierce: w.pierce || 1,
    life: 2.4,
    path: w.path,
    weaponId: w.id,
    angle,
    hit: new Set()
  });
}

function fireOrb(w, angle) {
  const speed = (w.bulletSpeed || 220) * game.player.bulletSpeedMult;
  game.projectiles.push({
    x: game.player.x + Math.cos(angle) * 20,
    y: game.player.y + Math.sin(angle) * 20,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    r: 20,
    damage: scaledDamage(w),
    pierce: w.pierce || 8,
    life: 3.2,
    path: w.path,
    weaponId: w.id,
    angle,
    hit: new Set(),
    orb: true
  });
}

function fireSlash(w, angle) {
  const range = w.range || 75;
  const cone = (w.cone || 90) * Math.PI / 180;
  const dmg = scaledDamage(w);
  for (const e of game.enemies) {
    const ex = e.x - game.player.x, ey = e.y - game.player.y;
    const d = Math.hypot(ex, ey);
    if (d <= range + e.r) {
      const a = Math.atan2(ey, ex);
      if (Math.abs(normAngle(a - angle)) <= cone / 2) damageEnemy(e, dmg, game.player.x, game.player.y, w.knock || 18, w);
    }
  }
  game.effects.push({ type: w._echo ? 'runeEcho' : 'slash', x: game.player.x, y: game.player.y, angle, range, life: w._echo ? 0.30 : 0.24, maxLife: w._echo ? 0.30 : 0.24, path: w.path });
  if (w.id === 'runesword' && !w._echo) scheduleAction(0.15, () => fireRuneEcho(w, angle));
  if (w.id === 'voidkatana' && !w._echo) scheduleAction(0.11, () => fireVoidRift(w, angle));
}

function fireRuneEcho(w, angle) {
  if (!game || !game.running) return;
  const echo = { ...w, _echo: true, damage: Math.max(1, Math.round(w.damage * 0.45)), range: (w.range || 120) + 28, cone: (w.cone || 112) + 18, knock: 8 };
  fireSlash(echo, angle);
}

function fireDoubleSlash(w, angle) {
  const enemies = [...game.enemies]
    .map(e => ({ e, d: Math.hypot(e.x - game.player.x, e.y - game.player.y) }))
    .filter(o => o.d <= (w.range || 75) + o.e.r)
    .sort((a, b) => a.d - b.d)
    .slice(0, 2);
  for (const o of enemies) damageEnemy(o.e, scaledDamage(w), game.player.x, game.player.y, 14, w);
  game.effects.push({ type: 'double', x: game.player.x, y: game.player.y, angle, range: w.range || 75, life: 0.24, maxLife: 0.24, path: w.path });
}

function fireTwinKnife(w, angle) {
  w.twinSide = w.twinSide === 1 ? -1 : 1;
  w.activeTwinSide = w.twinSide;
  w.swingDir = w.twinSide;
  const range = w.range || 78;
  const cone = (w.cone || 90) * Math.PI / 180;
  const sideOffset = w.twinSide * 0.34;
  const hitAngle = angle + sideOffset;
  const dmg = scaledDamage(w);
  let hitSomething = false;
  for (const e of game.enemies) {
    const ex = e.x - game.player.x, ey = e.y - game.player.y;
    const d = Math.hypot(ex, ey);
    if (d <= range + e.r) {
      const a = Math.atan2(ey, ex);
      if (Math.abs(normAngle(a - hitAngle)) <= cone / 2) {
        damageEnemy(e, dmg, game.player.x, game.player.y, 11, w);
        hitSomething = true;
      }
    }
  }
  game.effects.push({ type: 'twin', x: game.player.x, y: game.player.y, angle: hitAngle, range, side: w.twinSide, life: 0.16, maxLife: 0.16, path: w.path });
  // Se il primo TA ha preso qualcuno, prepara il secondo TA dopo un attimo, senza rifare tutto il cooldown.
  if (hitSomething) {
    const secondSide = -w.twinSide;
    scheduleAction(0.12, () => {
      if (!game || !game.running) return;
      w.activeTwinSide = secondSide;
      w.swingDir = secondSide;
      const secondAngle = game.player.displayAngle + secondSide * 0.34;
      for (const e of game.enemies) {
        const ex = e.x - game.player.x, ey = e.y - game.player.y;
        const d = Math.hypot(ex, ey);
        if (d <= range + e.r) {
          const a = Math.atan2(ey, ex);
          if (Math.abs(normAngle(a - secondAngle)) <= cone / 2) damageEnemy(e, dmg, game.player.x, game.player.y, 11, w);
        }
      }
      game.effects.push({ type: 'twin', x: game.player.x, y: game.player.y, angle: secondAngle, range, side: secondSide, life: 0.16, maxLife: 0.16, path: w.path });
      w.swingTimer = 0.16;
      w.swingMax = 0.16;
    });
  }
}

function fireOrbitScythe(w, angle) {
  game.effects.push({
    type: 'orbitScythe',
    weaponId: w.id,
    path: w.path,
    startAngle: angle,
    range: w.orbitRange || w.range || 108,
    damage: Math.max(1, Math.round((w.orbitDamage || w.damage) * game.player.attackMult)),
    hit: new Set(),
    life: 0.78,
    maxLife: 0.78
  });
}


function fireBeam(w, angle) {
  const length = w.range || 520;
  const width = w.width || 16;
  const sx = game.player.x;
  const sy = game.player.y;
  const ex = sx + Math.cos(angle) * length;
  const ey = sy + Math.sin(angle) * length;
  let primaryHit = null;
  let bestDist = Infinity;
  for (const e of game.enemies) {
    if (e.dead) continue;
    const lineDist = pointLineDistance(e.x, e.y, sx, sy, ex, ey);
    if (lineDist <= width + e.r) {
      const along = Math.hypot(e.x - sx, e.y - sy);
      if (along < bestDist) { bestDist = along; primaryHit = e; }
      damageEnemy(e, scaledDamage(w), sx, sy, 6, w);
    }
  }
  if (primaryHit) {
    scheduleAction(0.08, () => runeLaserPulse(primaryHit.x, primaryHit.y, Math.round(scaledDamage(w) * 0.35), w));
  }
  game.effects.push({ type: 'beam', x: sx, y: sy, angle, range: length, width, life: 0.18, maxLife: 0.18, path: w.path, weaponId: w.id });
}

function runeLaserPulse(x, y, dmg, w) {
  const radius = 54;
  for (const e of game.enemies) {
    if (e.dead) continue;
    if (Math.hypot(e.x - x, e.y - y) <= radius + e.r) damageEnemy(e, dmg, x, y, 6, w);
  }
  game.effects.push({ type: 'pulse', x, y, radius, life: 0.20, maxLife: 0.20 });
}

function fireSaw(w, angle) {
  const radius = w.range || 88;
  const dmg = scaledDamage(w);
  for (const e of game.enemies) {
    if (e.dead) continue;
    if (Math.hypot(e.x - game.player.x, e.y - game.player.y) <= radius + e.r) {
      damageEnemy(e, dmg, game.player.x, game.player.y, w.knock || 30, w);
    }
  }
  game.effects.push({ type: 'saw', x: game.player.x, y: game.player.y, radius, angle, life: 0.24, maxLife: 0.24, path: w.path, weaponId: w.id });
}

function fireVoidRift(w, angle) {
  const length = (w.range || 150) + 70;
  const width = 24;
  const sx = game.player.x;
  const sy = game.player.y;
  const ex = sx + Math.cos(angle) * length;
  const ey = sy + Math.sin(angle) * length;
  const dmg = Math.max(1, Math.round(scaledDamage(w) * 0.55));
  for (const e of game.enemies) {
    if (!e.dead && pointLineDistance(e.x, e.y, sx, sy, ex, ey) <= width + e.r) {
      damageEnemy(e, dmg, sx, sy, 10, w);
    }
  }
  game.effects.push({ type: 'voidRift', x: sx, y: sy, angle, range: length, width, life: 0.30, maxLife: 0.30, weaponId: w.id });
}

function ricochetBounce(sourceEnemy, baseDamage, hitSet, sourceWeapon = null) {
  let best = null, bestD = (sourceWeapon && sourceWeapon.ricochetRange) || 230;
  for (const e of game.enemies) {
    if (e.dead || hitSet.has(e.uid) || e === sourceEnemy) continue;
    const d = Math.hypot(e.x - sourceEnemy.x, e.y - sourceEnemy.y);
    if (d < bestD) { best = e; bestD = d; }
  }
  if (!best) return;
  hitSet.add(best.uid);
  const dmg = Math.max(1, Math.round(baseDamage * ((sourceWeapon && sourceWeapon.ricochetMult) || 0.8)));
  damageEnemy(best, dmg, sourceEnemy.x, sourceEnemy.y, 9, sourceWeapon);
  game.effects.push({ type: 'ricochet', x1: sourceEnemy.x, y1: sourceEnemy.y, x2: best.x, y2: best.y, life: 0.16, maxLife: 0.16 });
}

function scheduleAction(delay, fn) {
  game.delayedActions.push({ delay, fn });
}

function updateDelayedActions(dt) {
  if (!combatUpdatesAllowed()) {
    game.delayedActions = [];
    return;
  }
  for (let i = game.delayedActions.length - 1; i >= 0; i--) {
    const a = game.delayedActions[i];
    a.delay -= dt;
    if (a.delay <= 0) {
      game.delayedActions.splice(i, 1);
      try { a.fn(); } catch (err) { console.warn('Delayed action skipped:', err); }
    }
  }
}

function fireLine(w, angle) {
  const length = w.range || 140;
  const width = w.width || 24;
  const sx = game.player.x;
  const sy = game.player.y;
  const ex = sx + Math.cos(angle) * length;
  const ey = sy + Math.sin(angle) * length;
  for (const e of game.enemies) {
    if (pointLineDistance(e.x, e.y, sx, sy, ex, ey) <= width + e.r) damageEnemy(e, scaledDamage(w), sx, sy, w.knock || 16, w);
  }
  game.effects.push({ type: 'line', x: sx, y: sy, angle, range: length, width, life: 0.24, maxLife: 0.24, path: w.path });
}

function pointLineDistance(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1, dy = y2 - y1;
  const l2 = dx*dx + dy*dy;
  if (!l2) return Math.hypot(px - x1, py - y1);
  let t = ((px - x1) * dx + (py - y1) * dy) / l2;
  t = clamp(t, 0, 1);
  const x = x1 + t * dx, y = y1 + t * dy;
  return Math.hypot(px - x, py - y);
}

function updateProjectiles(dt) {
  if (!combatUpdatesAllowed()) return;

  for (let i = game.projectiles.length - 1; i >= 0; i--) {
    const p = game.projectiles[i];
    if (!p) continue;

    p.life -= dt;
    p.x += p.vx * dt;
    p.y += p.vy * dt;

    for (const e of [...game.enemies]) {
      if (!combatUpdatesAllowed()) return;
      if (!e || e.dead || p.hit.has(e.uid)) continue;

      if (Math.hypot(e.x - p.x, e.y - p.y) <= e.r + p.r) {
        const sourceWeapon = runtimeWeaponById(p.weaponId);
        damageEnemy(e, p.damage, p.x - p.vx * 0.03, p.y - p.vy * 0.03, p.orb ? 8 : 5, sourceWeapon);

        if (!combatUpdatesAllowed()) return;

        p.hit.add(e.uid);
        if (p.weaponId === 'manabolt') manaBoltChain(e, p.damage, p.hit, sourceWeapon);
        if (!combatUpdatesAllowed()) return;
        if (p.weaponId === 'whiteorb') whiteOrbPulse(e.x, e.y, p.damage, p.hit, sourceWeapon);
        if (!combatUpdatesAllowed()) return;
        if (p.weaponId === 'ricochetgun') ricochetBounce(e, p.damage, p.hit, sourceWeapon);

        p.pierce--;
        if (p.pierce <= 0) break;
      }
    }

    if (!combatUpdatesAllowed()) return;

    if (p.life <= 0 || p.pierce <= 0 || p.x < -60 || p.x > game.canvas.width + 60 || p.y < -60 || p.y > game.canvas.height + 60) {
      const idx = game.projectiles.indexOf(p);
      if (idx >= 0) game.projectiles.splice(idx, 1);
    }
  }
}


function manaBoltChain(sourceEnemy, baseDamage, hitSet, sourceWeapon = null) {
  let best = null, bestD = 150;
  for (const e of game.enemies) {
    if (e.dead || hitSet.has(e.uid) || e === sourceEnemy) continue;
    const d = Math.hypot(e.x - sourceEnemy.x, e.y - sourceEnemy.y);
    if (d < bestD) { best = e; bestD = d; }
  }
  if (!best) return;
  hitSet.add(best.uid);
  const dmg = Math.max(1, Math.round(baseDamage * 0.55));
  damageEnemy(best, dmg, sourceEnemy.x, sourceEnemy.y, 10, sourceWeapon);
  game.effects.push({ type: 'zap', x1: sourceEnemy.x, y1: sourceEnemy.y, x2: best.x, y2: best.y, life: 0.16, maxLife: 0.16 });
}

function whiteOrbPulse(x, y, baseDamage, hitSet, sourceWeapon = null) {
  const radius = 62;
  const dmg = Math.max(1, Math.round(baseDamage * 0.35));
  for (const e of game.enemies) {
    if (e.dead || hitSet.has(e.uid)) continue;
    if (Math.hypot(e.x - x, e.y - y) <= radius + e.r) {
      hitSet.add(e.uid);
      damageEnemy(e, dmg, x, y, 8, sourceWeapon);
    }
  }
  game.effects.push({ type: 'pulse', x, y, radius, life: 0.22, maxLife: 0.22 });
}


function handleKillRewards(e) {
  if (!game || game.mode === 'tester') return;
  const p = game.player;
  if (!p || p.hp <= 0) return;

  // 0.6 mana rule: no passive mana regeneration.
  // Mana only comes back from kills, with 75% chance.
  if (p.maxMana > 0 && Math.random() < 0.75) {
    const amount = Math.max(8, Math.round(p.manaKillGain || 14));
    const before = p.mana;
    p.mana = clamp(p.mana + amount, 0, p.maxMana);
    if (p.mana > before) game.effects.push({ type: 'manaReward', x: e.x, y: e.y - 10, life: 0.35, maxLife: 0.35 });
  }

  // Killer sustain: only the SELECTED active Killer weapon gives HP on kills.
  const active = game.weapons?.[game.activeWeaponIndex || 0];
  if (active?.type === 'Killer') {
    const amount = Math.max(6, Math.round((p.hpKillGain || 6) * 1.45));
    const before = p.hp;
    p.hp = clamp(p.hp + amount, 0, p.maxHp);
    if (p.hp > before) game.effects.push({ type: 'healReward', x: e.x, y: e.y + 10, life: 0.35, maxLife: 0.35 });
  }
}

function damageEnemy(e, amount, sourceX = game.player.x, sourceY = game.player.y, knock = 0, sourceWeapon = null) {
  if (!e || e.dead) return;
  const finalAmount = e.damageTakenMult ? Math.max(1, amount * e.damageTakenMult) : amount;
  e.hp -= finalAmount;
  e.flash = 0.10;
  handleWeaponDamage(sourceWeapon, finalAmount);
  if (knock > 0) {
    const knockMult = 1 + ((game?.runUpgrades?.knockPct || 0) / 100);
    knock *= knockMult;
    const dx = e.x - sourceX, dy = e.y - sourceY;
    const d = Math.hypot(dx, dy) || 1;
    e.x += (dx / d) * knock;
    e.y += (dy / d) * knock;
  }
  game.effects.push({ type: 'hit', x: e.x, y: e.y, life: 0.12, maxLife: 0.12 });
  if (e.hp <= 0) {
    if (game.mode === 'tester' && e.dummy) {
      e.hp = 0;
      e.dead = true;
      e.respawnDelay = 0.35;
      game.effects.push({ type: 'pulse', x: e.x, y: e.y, radius: 58, life: 0.25, maxLife: 0.25 });
      return;
    }

    e.dead = true;

    if (e.boss) {
      game.kills++;
      const coinReward = enemyCoinReward(e);
      game.runCoins += coinReward;
      game.runPoints += enemyPointReward(e);
      game.effects.push({ type: 'pulse', x: e.x, y: e.y, radius: Math.max(100, e.r * 2), life: 0.55, maxLife: 0.55 });
      game.boss = null;
      finishWave();
      return;
    }

    if (!e.bossClone && game.mode !== 'tester') {
      game.waveKills = Math.min(game.waveGoal || 9999, (game.waveKills || 0) + 1);
      game.runPoints += enemyPointReward(e);
    }

    game.kills++;
    const coinReward = enemyCoinReward(e);
    game.runCoins += coinReward;
    handleKillRewards(e);
    game.effects.push({ type: 'coinpop', x: e.x, y: e.y, value: coinReward, life: 0.45, maxLife: 0.45 });
  }
}

function handleWeaponDamage(w, amount) {
  if (!w || w.type !== 'Killer' || game.mode === 'tester') return;
  const p = game.player;
  if (!p || p.hp <= 0) return;

  const selfDamage = Math.max(1, Math.round(amount * 0.12));
  p.hp -= selfDamage;
  p.hurtFlash = 0.14;
  game.effects.push({ type: 'playerHit', x: p.x, y: p.y, life: 0.12, maxLife: 0.12 });

  if ((w.frenzyTimer || 0) > 0) return;
  w.frenzyCharge = (w.frenzyCharge || 0) + amount;
  if (w.frenzyCharge >= (w.frenzyThreshold || 600)) startKillerFrenzy(w);
}

function startKillerFrenzy(w) {
  if (!w || w.type !== 'Killer') return;
  w.frenzyCharge = 0;
  w.frenzyTimer = w.frenzyDuration || 4.0;
  game.effects.push({ type: 'frenzyStart', x: game.player.x, y: game.player.y, radius: 72, life: 0.40, maxLife: 0.40, weaponId: w.id });

  if (w.id === 'meatsaw') {
    game.effects.push({
      type: 'frenzySaw',
      weaponId: w.id,
      path: w.path,
      range: 112,
      damage: Math.max(1, Math.round((w.damage || 7) * game.player.attackMult * 2.2)),
      hitCooldown: {},
      life: 3.0,
      maxLife: 3.0
    });
  }

  if (w.id === 'bloodrifle') {
    for (let i = 0; i < 9; i++) {
      scheduleAction(i * 0.07, () => {
        if (!game || !game.running || !combatUpdatesAllowed()) return;
        const target = priorityEnemy(850);
        const angle = target ? Math.atan2(target.y - game.player.y, target.x - game.player.x) : game.player.displayAngle;
        const shot = { ...w, damage: Math.max(1, Math.round(w.damage * 0.70)), pierce: 3, bulletSpeed: 720 };
        fireProjectile(shot, angle + (Math.random() - 0.5) * 0.18);
      });
    }
  }
}

function updateEnemies(dt) {
  const p = game.player;
  for (let i = game.enemies.length - 1; i >= 0; i--) {
    const e = game.enemies[i];
    if (e.dead) { if (game.mode === 'tester' && e.dummy) continue; game.enemies.splice(i, 1); continue; }
    e.flash = Math.max(0, (e.flash || 0) - dt);
    e.hitCd = Math.max(0, (e.hitCd || 0) - dt);
    if (e.dummy) continue;
    if (e.boss) { updateBoss(e, dt); continue; }
    if (e.bossClone) { updateBossClone(e, dt); continue; }
    const dx = p.x - e.x, dy = p.y - e.y;
    const d = Math.hypot(dx, dy) || 1;
    let moveX = dx / d, moveY = dy / d;
    if (e.ranged) {
      e.shootCd -= dt;
      if (d < 185) { moveX *= -1; moveY *= -1; }
      if (d > 230) { /* normal toward */ }
      if (d >= 185 && d <= 230) { moveX = 0; moveY = 0; }
      if (e.shootCd <= 0) {
        enemyShoot(e, Math.atan2(dy, dx));
        e.shootCd = e.shootInterval || 2.2;
      }
    }
    e.x += moveX * e.speed * dt;
    e.y += moveY * e.speed * dt;
    if (d <= e.r + p.r && e.hitCd <= 0) {
      damagePlayer(Math.max(1, e.damage * p.defenseMult));
      e.hitCd = e.attackInterval || 0.75;
    }
  }
}

function damagePlayer(amount) {
  const p = game.player;
  if (p.invuln > 0) return;
  p.hp -= amount;
  p.invuln = 0.45;
  p.hurtFlash = 0.18;
  game.effects.push({ type: 'playerHit', x: p.x, y: p.y, life: 0.18, maxLife: 0.18 });
}

function enemyShoot(e, angle) {
  game.enemyBullets.push({
    x: e.x + Math.cos(angle) * 14,
    y: e.y + Math.sin(angle) * 14,
    vx: Math.cos(angle) * 160,
    vy: Math.sin(angle) * 160,
    r: 5,
    damage: e.damage,
    life: 4
  });
}

function updateEnemyBullets(dt) {
  const p = game.player;
  // Safety cap: keep bullet hell intense but never allow runaway bullet arrays.
  if (game.enemyBullets.length > 520) game.enemyBullets.splice(0, game.enemyBullets.length - 520);
  for (let i = game.enemyBullets.length - 1; i >= 0; i--) {
    const b = game.enemyBullets[i];
    b.life -= dt;
    b.x += b.vx * dt;
    b.y += b.vy * dt;
    if (Math.hypot(b.x - p.x, b.y - p.y) <= b.r + p.r) {
      damagePlayer(Math.max(1, b.damage * p.defenseMult));
      game.enemyBullets.splice(i, 1);
      continue;
    }
    if (b.life <= 0 || b.x < -30 || b.y < -30 || b.x > game.canvas.width + 30 || b.y > game.canvas.height + 30) game.enemyBullets.splice(i, 1);
  }
}

function updateEffects(dt) {
  // Safety cap: long fights can create many small effects.
  if (!combatUpdatesAllowed()) return;
  if (game.effects.length > 180) game.effects.splice(0, game.effects.length - 180);

  for (let i = game.effects.length - 1; i >= 0; i--) {
    const fx = game.effects[i];
    if (!fx) continue;

    if (fx.type === 'orbitScythe') updateOrbitScythe(fx);
    if (fx.type === 'frenzySaw') updateFrenzySaw(fx, dt);

    // BIOMECHFIX: orbit/frenzy effects can kill a boss.
    // finishWave clears game.effects; never read game.effects[i] after that.
    if (!combatUpdatesAllowed()) return;
    if (!game.effects.includes(fx)) continue;

    fx.life -= dt;
    if (fx.life <= 0) {
      const idx = game.effects.indexOf(fx);
      if (idx >= 0) game.effects.splice(idx, 1);
    }
  }
}

function updateOrbitScythe(fx) {
  if (!combatUpdatesAllowed()) return;
  const p = game.player;
  const progress = 1 - fx.life / fx.maxLife;
  const angle = fx.startAngle + progress * Math.PI * 2;
  const sx = p.x + Math.cos(angle) * fx.range;
  const sy = p.y + Math.sin(angle) * fx.range;

  for (const e of [...game.enemies]) {
    if (!combatUpdatesAllowed()) return;
    if (!e || e.dead || fx.hit.has(e.uid)) continue;
    if (Math.hypot(e.x - sx, e.y - sy) <= e.r + 34) {
      fx.hit.add(e.uid);
      damageEnemy(e, fx.damage, p.x, p.y, 20, runtimeWeaponById(fx.weaponId));
      if (!combatUpdatesAllowed()) return;
    }
  }
}

function updateFrenzySaw(fx, dt) {
  if (!combatUpdatesAllowed()) return;
  const p = game.player;
  if (!p || p.hp <= 0) return;
  for (const id of Object.keys(fx.hitCooldown || {})) {
    fx.hitCooldown[id] -= dt;
    if (fx.hitCooldown[id] <= 0) delete fx.hitCooldown[id];
  }
  for (const e of [...game.enemies]) {
    if (!combatUpdatesAllowed()) return;
    if (!e || e.dead || fx.hitCooldown[e.uid]) continue;
    if (Math.hypot(e.x - p.x, e.y - p.y) <= (fx.range || 110) + e.r) {
      fx.hitCooldown[e.uid] = 0.28;
      damageEnemy(e, fx.damage, p.x, p.y, 24, runtimeWeaponById(fx.weaponId));
      if (!combatUpdatesAllowed()) return;
    }
  }
}

function updatePickups(dt) {
  const p = game.player;
  for (let i = game.pickups.length - 1; i >= 0; i--) {
    const c = game.pickups[i];
    c.life -= dt;
    const d = Math.hypot(c.x - p.x, c.y - p.y);
    if (d < p.pickupRange) {
      const speed = 260;
      c.x += (p.x - c.x) / (d || 1) * speed * dt;
      c.y += (p.y - c.y) / (d || 1) * speed * dt;
    }
    if (d <= p.r + c.r) {
      game.runCoins += c.value;
      game.pickups.splice(i, 1);
      continue;
    }
    if (c.life <= 0) game.pickups.splice(i, 1);
  }
}

let enemyUid = 1;

function spawnEnemies(dt) {
  updateWaveSystem(dt);
}

function spawnOneEnemy(lightBossWave = false) {
  const available = enemyPoolForWave(game?.wave || 1);
  const type = weightedPick(available, e => e.weight) || ENEMY_TYPES[0];
  const side = Math.floor(Math.random() * 4);
  let x, y;
  if (side === 0) { x = Math.random() * game.canvas.width; y = -45; }
  else if (side === 1) { x = game.canvas.width + 45; y = Math.random() * game.canvas.height; }
  else if (side === 2) { x = Math.random() * game.canvas.width; y = game.canvas.height + 45; }
  else { x = -45; y = Math.random() * game.canvas.height; }
  discoverEnemy(type.id);

  const wave = game?.wave || 1;
  const scaledHp = Math.round(type.hp * (1 + Math.max(0, wave - 1) * 0.045) * (lightBossWave ? 0.75 : 1) * enemyCounterHpMult());
  const enemy = {
    ...type,
    uid: enemyUid++,
    x, y,
    r: type.radius,
    hp: scaledHp,
    maxHp: scaledHp,
    shootCd: Math.max(0.55, (1.2 + Math.random() * 1.4) / (1 + spawnPressureLevel() * 0.06)),
    damage: (type.damage || 1) * enemyCounterDamageMult(),
    speed: (type.speed || 1) * (1 + Math.min(0.28, spawnPressureLevel() * 0.035)),
    hitCd: 0,
    flash: 0,
    dead: false
  };
  applyPostPersesMutation(enemy, wave);
  game.enemies.push(enemy);
  if (!lightBossWave && !isBossWave(wave)) game.waveSpawned++;
  return enemy;
}

function updateHud() {
  const p = game.player;
  el('hudHp').textContent = Math.ceil(p.hp) + ' / ' + p.maxHp;
  el('hudMana').textContent = Math.floor(p.mana) + ' / ' + p.maxMana;
  el('hudTime').textContent = formatTime(game.t);
  el('hudKills').textContent = game.kills;
  el('hudRunCoins').textContent = game.runCoins;
  if (el('hudRunPoints')) el('hudRunPoints').textContent = game.runPoints || 0;
  if (el('hudWave')) el('hudWave').textContent = game.mode === 'tester' ? 'TEST' : (game.wave || 1);
  if (el('hudPrimary')) el('hudPrimary').textContent = game.weapons[0]?.name || '-';
  if (el('hudSecondary')) el('hudSecondary').textContent = game.weapons[1]?.name || '-';
  const active = game.weapons[game.activeWeaponIndex || 0];
  el('hudActive').textContent = ((game.activeWeaponIndex || 0) + 1) + ' ' + (active ? active.name : '-');
  if (el('hudSlots')) el('hudSlots').textContent = `${game.weapons.length} / ${game.maxWeaponSlots || 4}`;
  el('hpBar').style.width = clamp(p.hp / p.maxHp * 100, 0, 100) + '%';
  el('manaBar').style.width = p.maxMana ? clamp(p.mana / p.maxMana * 100, 0, 100) + '%' : '0%';
  if (game.mode === 'tester') syncTesterLiveControls();
  else forceHideTesterLiveControls();
  updateMobileWeaponButtons();
}

function formatTime(seconds) {
  const s = Math.floor(seconds % 60).toString().padStart(2, '0');
  const m = Math.floor(seconds / 60);
  return `${m}:${s}`;
}

function draw() {
  const { ctx, canvas } = game;
  ctx.imageSmoothingEnabled = false;
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawArenaDots(ctx, canvas);
  for (const c of game.pickups) drawPickup(ctx, c);
  for (const p of game.projectiles) drawProjectile(ctx, p);
  for (const b of game.enemyBullets) drawEnemyBullet(ctx, b);
  for (const e of game.enemies) drawEnemy(ctx, e);
  drawEquippedWeapons(ctx, 'back');
  drawPlayer(ctx, game.player);
  drawEquippedWeapons(ctx, 'front');
  for (const fx of game.effects) drawEffect(ctx, fx);
  if (game.mode !== 'tester') drawWaveUi(ctx);
}



function drawManualCrosshair(ctx) {
  if (!game?.mouse?.hasPosition || game.shopOpen) return;
  const x = Math.round(game.mouse.x);
  const y = Math.round(game.mouse.y);
  ctx.save();
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = game.mouse.down ? 3 : 2;
  ctx.beginPath();
  ctx.moveTo(x - 10, y);
  ctx.lineTo(x - 3, y);
  ctx.moveTo(x + 3, y);
  ctx.lineTo(x + 10, y);
  ctx.moveTo(x, y - 10);
  ctx.lineTo(x, y - 3);
  ctx.moveTo(x, y + 3);
  ctx.lineTo(x, y + 10);
  ctx.stroke();
  ctx.restore();
}

function drawWaveUi(ctx) {
  const w = game.canvas.width;
  ctx.save();
  ctx.imageSmoothingEnabled = false;
  ctx.fillStyle = '#000000';
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 3;
  ctx.fillRect(18, 14, w - 36, 64);
  ctx.strokeRect(18, 14, w - 36, 64);

  let label = `WAVE ${game.wave}`;
  let progress = 0;
  if (isBossWave(game.wave)) {
    const boss = game.boss || game.enemies.find(e => e.boss && !e.dead);
    if (boss) {
      label = `${boss.name}${boss.tier ? ' +' + boss.tier : ''}`;
      if (boss.subtitle) label += ` // ${boss.subtitle}`;
      progress = clamp(boss.hp / boss.maxHp, 0, 1);
    }
  } else {
    progress = clamp((game.waveKills || 0) / Math.max(1, game.waveGoal || 1), 0, 1);
    label += ` // ${game.waveKills || 0}/${game.waveGoal || 0}`;
  }

  ctx.fillStyle = '#FFFFFF';
  ctx.font = '22px monospace';
  ctx.fillText(label, 32, 42);

  ctx.strokeRect(32, 52, w - 64, 14);
  ctx.fillRect(32, 52, (w - 64) * progress, 14);

  if (game.waveMessageTimer > 0 && game.waveMessage) {
    ctx.font = '34px monospace';
    const text = game.waveMessage;
    const tw = ctx.measureText(text).width;
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(text, Math.max(24, (w - tw) / 2), 124);
  }
  ctx.restore();
}

function drawArenaDots(ctx, canvas) {
  ctx.fillStyle = '#FFFFFF';
  for (let x = 24; x < canvas.width; x += 96) {
    for (let y = 24; y < canvas.height; y += 96) {
      ctx.fillRect(x, y, 2, 2);
    }
  }
}

const tintedSpriteCache = {};

function hexToRgb(hex) {
  const clean = String(hex || '').replace('#', '');
  if (clean.length !== 6) return { r: 255, g: 255, b: 255 };
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16)
  };
}

function tintedSprite(path, color) {
  if (!color) return images[path];
  const key = `${path}|${color}`;
  if (tintedSpriteCache[key]) return tintedSpriteCache[key];
  const img = images[path];
  if (!img || !img.complete || !img.width || !img.height) return img;

  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth || img.width;
  canvas.height = img.naturalHeight || img.height;
  const c = canvas.getContext('2d');
  c.drawImage(img, 0, 0);

  try {
    const data = c.getImageData(0, 0, canvas.width, canvas.height);
    const rgb = hexToRgb(color);
    for (let i = 0; i < data.data.length; i += 4) {
      const a = data.data[i + 3];
      if (a <= 0) continue;
      const r = data.data[i];
      const g = data.data[i + 1];
      const b = data.data[i + 2];
      const brightness = (r + g + b) / 3;
      // Enemy sprites are black/white. Keep black outlines, recolor the white body.
      if (brightness >= 120) {
        const shade = clamp(brightness / 255, 0.45, 1);
        data.data[i] = Math.round(rgb.r * shade);
        data.data[i + 1] = Math.round(rgb.g * shade);
        data.data[i + 2] = Math.round(rgb.b * shade);
      }
    }
    c.putImageData(data, 0, 0);
  } catch (err) {
    return img;
  }

  tintedSpriteCache[key] = canvas;
  return canvas;
}

function drawSprite(ctx, path, x, y, size, angle = 0, flip = false, tintColor = null) {
  const img = tintColor ? tintedSprite(path, tintColor) : images[path];
  if (!img) return;
  const iw = img.naturalWidth || img.width;
  const ih = img.naturalHeight || img.height;
  if (!iw || !ih) return;
  ctx.save();
  ctx.translate(Math.round(x), Math.round(y));
  ctx.rotate(angle);
  ctx.scale(flip ? -1 : 1, 1);
  const w = size;
  const h = size * (ih / iw);
  ctx.drawImage(img, -w / 2, -h / 2, w, h);
  ctx.restore();
}

function drawEnemy(ctx, e) {
  if (e.flash > 0) {
    ctx.fillStyle = e.tintColor || '#FFFFFF';
    ctx.fillRect(e.x - e.r, e.y - e.r, e.r * 2, e.r * 2);
  }
  const size = e.boss ? (e.size || 160) : e.bossClone ? (e.size || 76) : e.id === 'dummy' ? 76 : e.id === 'brute' ? 72 : e.id === 'crawler' ? 64 : e.id === 'spitter' ? 58 : 50;
  drawSprite(ctx, e.path, e.x, e.y, size, 0, false, e.tintColor);

  if (e.tintColor && !e.dead && !e.boss && !e.bossClone) {
    ctx.save();
    ctx.globalAlpha = 0.72;
    ctx.strokeStyle = e.tintColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(e.x, e.y, e.r + 4, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
}

function weaponVisualSize(w, active) {
  // 0.9A MOBILEFIT:
  // - unselected weapon behind the player stays normal size, not mini
  // - selected weapon still gets a small active boost
  // - revolver was too tiny, now it has proper visual weight
  const sizes = {
    knife: 44,
    shortsword: 52,
    axe: 54,
    longsword: 62,
    twinknives: 40,
    spear: 66,
    runesword: 58,
    ghostscythe: 68,
    pistol: 34,
    revolver: 50,
    pebblegun: 36,
    bow: 44,
    crossbow: 46,
    burstrifle: 52,
    manabolt: 38,
    whiteorb: 42,
    warhalberd: 76,
    ricochetgun: 52,
    voidkatana: 72,
    runelaser: 46,
    meatsaw: 56,
    bloodrifle: 50
  };
  let size = sizes[w.id] || (w.className === 'Slasher' ? 54 : 40);
  if (active) size += w.className === 'Slasher' ? 8 : 5;
  return size;
}

function weaponGripDistance(w, active) {
  // 0.9A MOBILEFIT:
  // - selected weapon is still away from the player pivot, but a little closer
  // - unselected weapon stays directly behind the player, fixed 45 degrees
  if (!active) return 0;
  if (w.id === 'meatsaw') return 68;
  if (w.id === 'runelaser') return 64;
  if (w.id === 'bloodrifle') return 62;
  if (w.className === 'Slasher') return 56;
  if (['burstrifle', 'crossbow', 'bow', 'ricochetgun'].includes(w.id)) return 54;
  return 50;
}

function drawEquippedWeapons(ctx, layer = 'all') {
  const p = game.player;
  const baseAngle = p.displayAngle;
  const sideAngle = baseAngle + Math.PI / 2;

  for (let i = 0; i < game.weapons.length; i++) {
    const w = game.weapons[i];
    const active = i === game.activeWeaponIndex;
    if (layer === 'back' && active) continue;
    if (layer === 'front' && !active) continue;
    let angle = active ? baseAngle : Math.PI / 4;
    let forward = active ? weaponGripDistance(w, active) : 0;
    let side = 0;

    // Visual layer pass:
    // - unselected weapon stays exactly behind the player, centered, fixed at 45 degrees
    // - selected weapon rotates with aim and sits far from the player pivot
    if (active) forward += 12;

    if (active && w.className === 'Slasher' && w.swingTimer > 0 && w.swingMax > 0) {
      const progress = 1 - (w.swingTimer / w.swingMax);
      const eased = 1 - Math.pow(1 - progress, 3);
      const startArc = -1.15 * (w.swingDir || 1);
      const endArc = 1.05 * (w.swingDir || 1);
      angle = (w.swingAngle || baseAngle) + startArc + (endArc - startArc) * eased;
      forward += 8 + Math.sin(progress * Math.PI) * 14;
      side += Math.cos(progress * Math.PI) * 8 * (w.swingDir || 1);
    }

    if (active && w.thrustTimer > 0 && w.thrustMax > 0) {
      const progress = 1 - (w.thrustTimer / w.thrustMax);
      forward += Math.sin(progress * Math.PI) * 30;
    }

    if (active && w.className === 'Shooter' && w.recoilTimer > 0 && w.recoilMax > 0) {
      const recoil = w.recoilTimer / w.recoilMax;
      forward -= recoil * 10;
    }

    const bob = active ? Math.sin(p.walkBob + i * Math.PI) * 2 : 0;
    const x = active ? p.x + Math.cos(baseAngle) * forward + Math.cos(sideAngle) * side : p.x;
    const y = active ? p.y + Math.sin(baseAngle) * forward + Math.sin(sideAngle) * side + bob : p.y;
    const size = weaponVisualSize(w, active);
    const rot = active ? angle + (w.className === 'Slasher' ? Math.PI / 4 : 0) : Math.PI / 4;

    if (w.id === 'twinknives' && active) {
      const activeSide = w.activeTwinSide || 1;
      const pulse = w.swingTimer > 0 ? Math.sin((1 - w.swingTimer / (w.swingMax || 0.16)) * Math.PI) * 16 : 0;
      const leftX = x + Math.cos(sideAngle) * 14 + Math.cos(baseAngle) * (activeSide === 1 ? pulse : 0);
      const leftY = y + Math.sin(sideAngle) * 14 + Math.sin(baseAngle) * (activeSide === 1 ? pulse : 0);
      const rightX = x - Math.cos(sideAngle) * 14 + Math.cos(baseAngle) * (activeSide === -1 ? pulse : 0);
      const rightY = y - Math.sin(sideAngle) * 14 + Math.sin(baseAngle) * (activeSide === -1 ? pulse : 0);
      drawSprite(ctx, w.path, leftX, leftY, size, rot + 0.55, false);
      drawSprite(ctx, w.path, rightX, rightY, size, rot - 0.55, true);
    } else {
      drawSprite(ctx, w.path, x, y, size, rot, false);
    }

    if (active && w.className === 'Slasher' && w.swingTimer > 0) {
      ctx.save();
      ctx.translate(Math.round(p.x), Math.round(p.y));
      ctx.rotate(baseAngle);
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, Math.max(38, (w.range || 70) * 0.72), -0.8, 0.8);
      ctx.stroke();
      ctx.restore();
    }

    if (active && game.switchFlash > 0) {
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(Math.round(x), Math.round(y), size * 0.65, 0, Math.PI * 2);
      ctx.stroke();
    }
  }
}

function drawPlayer(ctx, p) {
  ctx.save();
  if (p.hurtFlash > 0 && Math.floor(p.hurtFlash * 40) % 2 === 0) {
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 3;
    ctx.strokeRect(Math.round(p.x - 23), Math.round(p.y - 23), 46, 46);
  }
  drawSprite(ctx, PLAYER_SPRITE, p.x, p.y, 40);
  const hat = getHat(p.hat);
  if (hat.path) drawSprite(ctx, hat.path, p.x, p.y + getHatY(hat.id) * 1.25, 40);
  ctx.restore();
}

function projectileVisualSize(p) {
  const id = p.weaponId;
  if (id === 'burstrifle' || id === 'crossbow' || id === 'bow') return 28;
  if (id === 'revolver') return 24;
  if (id === 'pistol' || id === 'pebblegun') return 20;
  if (id === 'manabolt') return 26;
  if (id === 'runelaser') return 30;
  if (id === 'ricochetgun' || id === 'bloodrifle') return 30;
  return 24;
}

function drawProjectile(ctx, p) {
  if (p.orb) {
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.stroke();
    drawSprite(ctx, p.path, p.x, p.y, projectileVisualSize(p) + 8, p.angle);
    return;
  }
  drawSprite(ctx, p.path, p.x, p.y, projectileVisualSize(p), p.angle);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(Math.round(p.x - 2), Math.round(p.y - 2), 4, 4);
}

function drawEnemyBullet(ctx, b) {
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2); ctx.stroke();
}

function drawPickup(ctx, c) {
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(Math.round(c.x - 4), Math.round(c.y - 4), 8, 8);
  ctx.fillStyle = '#000000';
  ctx.fillRect(Math.round(c.x - 2), Math.round(c.y - 2), 4, 4);
}

function drawEffect(ctx, fx) {
  const alpha = clamp(fx.life / fx.maxLife, 0, 1);
  ctx.save();
  // No gray colors: effects blink on/off instead of fading.
  if (alpha < 0.45 && fx.type !== 'orbitScythe' && fx.type !== 'frenzySaw') { ctx.restore(); return; }
  ctx.strokeStyle = '#FFFFFF';
  ctx.fillStyle = '#FFFFFF';
  ctx.lineWidth = 3;
  if (fx.type === 'hit') {
    ctx.strokeRect(Math.round(fx.x - 8), Math.round(fx.y - 8), 16, 16);
  } else if (fx.type === 'coinpop') {
    ctx.fillRect(Math.round(fx.x - 5), Math.round(fx.y - 5 - (1 - alpha) * 12), 10, 10);
  } else if (fx.type === 'manaReward') {
    ctx.beginPath();
    ctx.arc(Math.round(fx.x), Math.round(fx.y - (1 - alpha) * 10), 8, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillRect(Math.round(fx.x - 2), Math.round(fx.y - 2 - (1 - alpha) * 10), 4, 4);
  } else if (fx.type === 'healReward') {
    const y = Math.round(fx.y - (1 - alpha) * 10);
    ctx.fillRect(Math.round(fx.x - 8), y - 2, 16, 4);
    ctx.fillRect(Math.round(fx.x - 2), y - 8, 4, 16);
  } else if (fx.type === 'runeEcho') {
    ctx.translate(fx.x, fx.y);
    ctx.rotate(fx.angle);
    ctx.strokeRect(Math.round(fx.range * 0.20), -10, Math.round(fx.range * 0.68), 20);
    ctx.beginPath();
    ctx.arc(0, 0, fx.range, -0.45, 0.45);
    ctx.stroke();
  } else if (fx.type === 'zap') {
    ctx.beginPath();
    ctx.moveTo(Math.round(fx.x1), Math.round(fx.y1));
    ctx.lineTo(Math.round((fx.x1 + fx.x2) / 2 + 8), Math.round((fx.y1 + fx.y2) / 2 - 8));
    ctx.lineTo(Math.round(fx.x2), Math.round(fx.y2));
    ctx.stroke();
  } else if (fx.type === 'pulse') {
    ctx.beginPath();
    ctx.arc(Math.round(fx.x), Math.round(fx.y), fx.radius || 48, 0, Math.PI * 2);
    ctx.stroke();
  } else if (fx.type === 'slash') {
    ctx.translate(fx.x, fx.y);
    ctx.rotate(fx.angle);
    ctx.beginPath();
    ctx.arc(0, 0, fx.range, -0.65, 0.65);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, fx.range * 0.72, -0.85, 0.85);
    ctx.stroke();
  } else if (fx.type === 'double') {
    ctx.beginPath(); ctx.arc(fx.x, fx.y, fx.range, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.arc(fx.x, fx.y, fx.range * 0.65, 0, Math.PI * 2); ctx.stroke();
  } else if (fx.type === 'twin') {
    ctx.translate(fx.x, fx.y);
    ctx.rotate(fx.angle);
    ctx.beginPath();
    ctx.arc(0, 0, fx.range, -0.34, 0.34);
    ctx.stroke();
    drawSprite(ctx, fx.path, fx.range * 0.72, fx.side * 10, 38, Math.PI / 4, fx.side < 0);
  } else if (fx.type === 'orbitScythe') {
    const p = game.player;
    const progress = 1 - fx.life / fx.maxLife;
    const angle = fx.startAngle + progress * Math.PI * 2;
    const sx = p.x + Math.cos(angle) * fx.range;
    const sy = p.y + Math.sin(angle) * fx.range;
    ctx.beginPath();
    ctx.arc(Math.round(p.x), Math.round(p.y), fx.range, 0, Math.PI * 2);
    ctx.stroke();
    drawSprite(ctx, fx.path, sx, sy, 72, angle + Math.PI / 4);
    } else if (fx.type === 'beam' || fx.type === 'biomechRay' || fx.type === 'persesRay') {
    ctx.translate(fx.x, fx.y);
    ctx.rotate(fx.angle);
    if (fx.type === 'biomechRay' || fx.type === 'persesRay') {
      ctx.lineWidth = fx.type === 'persesRay' ? 8 : 5;
      ctx.strokeRect(0, -Math.max(3, fx.width / 2), fx.range, Math.max(6, fx.width));
      ctx.strokeRect(0, -Math.max(1, fx.width / 5), fx.range, Math.max(3, fx.width / 2.5));
      if (fx.type === 'persesRay') ctx.strokeRect(0, -Math.max(2, fx.width / 8), fx.range, Math.max(4, fx.width / 3.5));
    } else {
      ctx.strokeRect(0, -Math.max(2, fx.width / 2), fx.range, Math.max(4, fx.width));
    }
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(fx.range, 0);
    ctx.stroke();
  } else if (fx.type === 'voidRift') {
    ctx.translate(fx.x, fx.y);
    ctx.rotate(fx.angle);
    ctx.strokeRect(0, -fx.width / 2, fx.range, fx.width);
    ctx.beginPath();
    ctx.moveTo(0, -fx.width);
    ctx.lineTo(fx.range, fx.width);
    ctx.stroke();
  } else if (fx.type === 'ricochet') {
    ctx.beginPath();
    ctx.moveTo(Math.round(fx.x1), Math.round(fx.y1));
    ctx.lineTo(Math.round((fx.x1 + fx.x2) / 2), Math.round((fx.y1 + fx.y2) / 2 - 12));
    ctx.lineTo(Math.round(fx.x2), Math.round(fx.y2));
    ctx.stroke();
  } else if (fx.type === 'saw') {
    ctx.beginPath();
    ctx.arc(Math.round(fx.x), Math.round(fx.y), fx.radius || 80, 0, Math.PI * 2);
    ctx.stroke();
    drawSprite(ctx, fx.path, fx.x + Math.cos(fx.angle) * (fx.radius || 80) * 0.55, fx.y + Math.sin(fx.angle) * (fx.radius || 80) * 0.55, 64, fx.angle + Math.PI / 4);
  } else if (fx.type === 'frenzyStart') {
    ctx.beginPath();
    ctx.arc(Math.round(fx.x), Math.round(fx.y), fx.radius || 72, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeRect(Math.round(fx.x - 28), Math.round(fx.y - 28), 56, 56);
  } else if (fx.type === 'frenzySaw') {
    const p = game.player;
    const progress = 1 - fx.life / fx.maxLife;
    const angle = progress * Math.PI * 10;
    ctx.beginPath();
    ctx.arc(Math.round(p.x), Math.round(p.y), fx.range || 110, 0, Math.PI * 2);
    ctx.stroke();
    drawSprite(ctx, fx.path, p.x + Math.cos(angle) * (fx.range || 110), p.y + Math.sin(angle) * (fx.range || 110), 74, angle + Math.PI / 4);
  } else if (fx.type === 'playerHit') {
    ctx.beginPath(); ctx.arc(fx.x, fx.y, 22, 0, Math.PI * 2); ctx.stroke();
  } else if (fx.type === 'line') {
    ctx.translate(fx.x, fx.y);
    ctx.rotate(fx.angle);
    ctx.strokeRect(0, -fx.width / 2, fx.range, fx.width);
    drawSprite(ctx, fx.path, fx.range * 0.55, 0, 42, 0);
  }
  ctx.restore();
}

function endRun(victory, text) {
  if (!game || game.ended) return;
  game.ended = true;
  game.running = false;
  closeWaveShop();
  if (animationId) cancelAnimationFrame(animationId);
  const reward = Math.max(0, Math.floor(game.runCoins));
  if (!isDevMode()) save.coins += reward;
  saveGame();
  el('modalTitle').textContent = victory ? t('modal.victory') : t('modal.runOver');
  el('modalText').textContent = t('modal.summary', { text, kills: game.kills, coins: reward });
  el('modal').classList.remove('hidden');
}

function setActiveWeapon(index) {
  if (!game || !game.weapons[index]) return;
  game.activeWeaponIndex = index;
  game.switchFlash = 0.18;
  updateHud();
  updateMobileWeaponButtons();
}

function bindEvents() {
  document.querySelectorAll('[data-open]').forEach(btn => {
    btn.addEventListener('click', () => showScreen(btn.dataset.open));
  });
  el('quickPlayBtn').addEventListener('click', () => { renderLoadout(); startRun(); });
  el('bossRushBtn')?.addEventListener('click', startBossRush);
  el('playFromLoadoutBtn').addEventListener('click', startRun);
  el('testerWeaponSelect')?.addEventListener('change', () => {
    updateTesterCard();
    if (game?.mode === 'tester') applyTesterWeapon(el('testerWeaponSelect').value);
  });
  el('testerEnemySelect')?.addEventListener('change', () => {
    updateTesterCard();
    if (game?.mode === 'tester') applyTesterEnemy(el('testerEnemySelect').value);
  });
  el('liveTesterWeaponSelect')?.addEventListener('change', () => applyTesterWeapon(el('liveTesterWeaponSelect').value));
  el('liveTesterEnemySelect')?.addEventListener('change', () => applyTesterEnemy(el('liveTesterEnemySelect').value));
  el('testerStartBtn')?.addEventListener('click', startWeaponTest);
  el('primarySelect').addEventListener('change', () => { save.primary = el('primarySelect').value; updateLoadoutCards(); saveGame(); });
  el('secondarySelect').addEventListener('change', () => { save.secondary = el('secondarySelect').value; updateLoadoutCards(); saveGame(); });
  el('pullOneBtn').addEventListener('click', () => doPull(1));
  el('pullTenBtn').addEventListener('click', () => doPull(10));
  el('resetSaveBtn').addEventListener('click', () => { [SAVE_KEY, ...(typeof LEGACY_SAVE_KEYS !== 'undefined' ? LEGACY_SAVE_KEYS : [])].forEach(k => localStorage.removeItem(k)); devPanelUnlocked = false; sessionDevMode = false; save = loadSave(); saveGame(); forceHideTesterLiveControls(); renderGacha([]); renderLoadout(); renderCharacterMenu(); renderEncyclopedia(); });
  el('endRunBtn').addEventListener('click', () => endRun(false, t('quit.message')));
  el('modalOkBtn').addEventListener('click', () => { el('modal').classList.add('hidden'); showScreen('menu'); });
  el('shopApplyLoadoutBtn')?.addEventListener('click', applyShopLoadout);
  el('shopContinueBtn')?.addEventListener('click', continueAfterShop);
  el('shopUpgrades')?.addEventListener('click', e => {
    const btn = e.target.closest('[data-buy-upgrade]');
    if (btn) buyShopUpgrade(Number(btn.dataset.buyUpgrade));
  });
  el('shopSlotOffer')?.addEventListener('click', e => {
    const btn = e.target.closest('[data-buy-slot]');
    if (btn) buyShopSlot();
  });
  el('shopBlackBox')?.addEventListener('click', e => {
    const btn = e.target.closest('[data-shop-blackbox]');
    if (btn) buyShopBlackBox();
  });

  const canvas = el('gameCanvas');
  canvas?.addEventListener('pointermove', e => {
    if (!game) return;
    setManualAimFromEvent(e);
  });
  canvas?.addEventListener('pointerdown', e => {
    if (!game) return;
    setManualAimFromEvent(e);
    game.mouse.down = true;
    canvas.setPointerCapture?.(e.pointerId);
    e.preventDefault();
  });
  window.addEventListener('pointerup', e => {
    if (game?.mouse) game.mouse.down = false;
  });
  canvas?.addEventListener('contextmenu', e => e.preventDefault());

  window.addEventListener('blur', clearInputState);
  document.addEventListener?.('visibilitychange', () => {
    if (document.hidden) clearInputState();
  });

  window.addEventListener('keydown', e => {
    if (handleDevTyping(e)) return;
    if (!game) return;
    const key = e.key.toLowerCase();
    if (!isGameScreenActive()) return;
    game.keys[key] = true;
    if (key === 'tab') {
      e.preventDefault();
      return;
    }
    if (key === '1') setActiveWeapon(0);
    if (key === '2') setActiveWeapon(1);
    if (key === '3') setActiveWeapon(2);
    if (key === '4') setActiveWeapon(3);
    if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight',' '].includes(e.key)) e.preventDefault();
  });
  window.addEventListener('keyup', e => {
    if (!game) return;
    game.keys[e.key.toLowerCase()] = false;
  });

  updateMobileViewportMetrics();
  window.addEventListener('resize', updateMobileViewportMetrics);
  window.addEventListener('orientationchange', () => setTimeout(updateMobileViewportMetrics, 120));
  window.visualViewport?.addEventListener?.('resize', updateMobileViewportMetrics);

  setupMobileControls();
}

function boot() {
  devPanelUnlocked = false;
  sessionDevMode = false;
  save = loadSave();
  initImages();
  bindEvents();
  bindLanguageSelector();
  applyStaticTranslations();
  renderAllMeta();
  renderLoadout();
  renderCharacterMenu();
  renderEncyclopedia();
  updateDevUi();
}

boot();
