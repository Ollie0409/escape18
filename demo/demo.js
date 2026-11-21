/* Escape 18: "Probeer zelf een kamer" demo. Vanilla JS, no libraries, no network, no storage.
   Room 1 of the live lesson "verzekerd", copied verbatim from the lesson JSON (build verzekerd-20261119-c4be931).
   Only room 1's digit is included; the full lock code is not. Never edit DATA by hand: test-demo.js checks it against the live lesson file. */
(function () {
  'use strict';
  var DATA = {
 "build": "verzekerd-20261119-c4be931",
 "slug": "verzekerd",
 "title": "Verzekerd na je 18e",
 "fictional": "Verzonnen zijn de mensen, Zeestad, de verzekeraars, de polissen en hun bedragen. De wet is echt, en bij elke uitleg staat de bron.",
 "checked": "2026-11-07",
 "rooms": 4,
 "room": {
  "id": "moet",
  "title": "Moet of mag?",
  "where": "woensdag 14 april 2027",
  "intro": "Noor is sinds oktober 18. Ze woont nog thuis in Zeestad, op de Duinweg 8. Sinds maart heeft ze een scooter op haar naam. Daar rijdt ze elke dag mee naar school. In september gaat ze op kamers. Haar moeder legt zes soorten verzekeringen op tafel. Sommige moet je hebben, andere kies je zelf.",
  "docs": {
   "tafel": {
    "type": "table",
    "title": "Soorten verzekeringen",
    "from": "Thuis bij Noor (verzonnen voorbeeld)",
    "head": [
     "Verzekering",
     "Waarvoor is die?"
    ],
    "rows": [
     [
      "t1",
      "Aanvullende zorgverzekering",
      "Zorg die de basisverzekering niet betaalt"
     ],
     [
      "t2",
      "Aansprakelijkheidsverzekering",
      "Schade die je per ongeluk bij een ander maakt"
     ],
     [
      "t3",
      "Inboedelverzekering",
      "Schade aan de spullen in je huis"
     ],
     [
      "t4",
      "Telefoonverzekering",
      "Schade aan je telefoon"
     ],
     [
      "t5",
      "Basisverzekering zorg",
      "Zorg uit het basispakket, zoals de huisarts en het ziekenhuis"
     ],
     [
      "t6",
      "WA-verzekering scooter",
      "Schade die je met je scooter bij anderen maakt"
     ]
    ],
    "plain": "Polis: het papier waarop staat wat je verzekering betaalt. WA: wettelijke aansprakelijkheid. Verplicht: de wet zegt dat je het moet hebben. Vrijwillig: je kiest het zelf. Inboedel: de spullen in je huis."
   }
  },
  "rules": {
   "title": "Regels",
   "lines": [
    [
     "r1",
     "Altijd verplicht: woon of werk je in Nederland? Dan moet je een basisverzekering voor zorg hebben, op elke leeftijd."
    ],
    [
     "r2",
     "Verplicht in één situatie: staat er een scooter, brommer, motor of auto op je naam? Dan moet je een WA-verzekering hebben."
    ],
    [
     "r3",
     "Vrijwillig: aanvullende zorg, aansprakelijkheid, inboedel, reis en telefoon. Die verzekeringen kies je meestal zelf."
    ],
    [
     "r4",
     "Uitzonderingen op regel 1 en regel 2 zijn zeldzaam. Voor de mensen in deze les gelden ze niet."
    ]
   ]
  },
  "digit": "2",
  "clue": "Het 1e cijfer van het slot: op tafel liggen 6 soorten verzekeringen. Noor woont in Nederland en heeft een scooter op haar naam. Hoeveel daarvan moet ze volgens de regels hebben?",
  "clueRetry": "Lees regel 1 en regel 2. Tel de verzekeringen die bij Noor passen.",
  "remember": "Altijd verplicht: de basisverzekering voor zorg. Verplicht met een voertuig op je naam: de WA. De rest kies je zelf.",
  "questions": [
   {
    "id": "verplicht",
    "short": "Verplicht voor Noor",
    "type": "multi",
    "docs": [
     "tafel"
    ],
    "prompt": "Welke verzekeringen moet Noor volgens de wet hebben?",
    "legend": "Tik alle verplichte verzekeringen aan.",
    "options": [
     [
      "b",
      "Aansprakelijkheidsverzekering"
     ],
     [
      "e",
      "Basisverzekering zorg"
     ],
     [
      "d",
      "Telefoonverzekering"
     ],
     [
      "a",
      "Aanvullende zorgverzekering"
     ],
     [
      "f",
      "WA-verzekering scooter"
     ],
     [
      "c",
      "Inboedelverzekering"
     ]
    ],
    "correct": [
     "e",
     "f"
    ],
    "pointTo": {
     "rules": [
      "r1",
      "r2"
     ]
    },
    "retry": "Lees regel 1 en regel 2. Wat weet je uit de intro over Noor?",
    "hint": "Waar woont Noor? En wat staat er op haar naam?",
    "explain": "Noor woont in Nederland. Dus moet ze een basisverzekering hebben. Ze heeft ook een scooter op haar naam. Daarvoor moet ze een WA-verzekering hebben. Een uitzondering heeft ze niet. De andere verzekeringen kiest ze zelf.",
    "sources": [
     {
      "name": "Rijksoverheid, Ben ik verplicht een zorgverzekering af te sluiten?",
      "url": "https://www.rijksoverheid.nl/themas/familie-zorg-en-gezondheid/zorgverzekering/vraag-en-antwoord/zorgverzekering/ben-ik-verplicht-een-zorgverzekering-af-te-sluiten"
     },
     {
      "name": "Zorgverzekeringswet art. 2, versie van 1 januari 2026",
      "url": "https://wetten.overheid.nl/BWBR0018450/2026-01-01"
     },
     {
      "name": "CAK, Regeling gemoedsbezwaarden",
      "url": "https://www.hetcak.nl/regelingen/gemoedsbezwaarden"
     },
     {
      "name": "Rijksoverheid, Misverstanden zorgverzekering",
      "url": "https://www.rijksoverheid.nl/themas/familie-zorg-en-gezondheid/zorgverzekering/vraag-en-antwoord/zorgverzekering/misverstanden-zorgverzekering"
     },
     {
      "name": "Rijksoverheid, WA-verzekering voertuig",
      "url": "https://www.rijksoverheid.nl/themas/verkeer-en-vervoer/voertuigen-op-de-weg/vraag-en-antwoord/auto/wa-verzekering-voertuig"
     },
     {
      "name": "Wet aansprakelijkheidsverzekering motorrijtuigen art. 2 tot 4 en 18 tot 19, versie van 24 juli 2025",
      "url": "https://wetten.overheid.nl/BWBR0002415/2025-07-24"
     },
     {
      "name": "Stcrt. 2025, 40148: vrijstelling en bijdragen gemoedsbezwaarden 2026",
      "url": "https://zoek.officielebekendmakingen.nl/stcrt-2025-40148.html"
     },
     {
      "name": "Wijzer in geldzaken, Alles over verzekeringen (achtergrond)",
      "url": "https://www.wijzeringeldzaken.nl/verzekering/alles-over-verzekeringen/alles-over-verzekeringen.pdf"
     }
    ]
   },
   {
    "id": "wa",
    "short": "WA voor Sem",
    "type": "single",
    "docs": [
     "tafel"
    ],
    "prompt": "Moet Sem een WA-verzekering hebben?",
    "situ": "Sem, de broer van Noor, is 20. Hij heeft geen scooter, brommer, motor of auto.",
    "options": [
     [
      "c",
      "Nee, want die kies je altijd zelf"
     ],
     [
      "a",
      "Ja, want iedereen vanaf 18 moet die hebben"
     ],
     [
      "d",
      "Nee, want hij heeft geen voertuig"
     ],
     [
      "b",
      "Ja, want die hoort bij de basisverzekering"
     ]
    ],
    "correct": "d",
    "pointTo": {
     "rule": "r2"
    },
    "retry": "Lees regel 2. Wanneer moet je een WA-verzekering hebben?",
    "hint": "Wat staat er op Sems naam?",
    "explain": "Een WA-verzekering moet je hebben als er een scooter, brommer, motor of auto op je naam staat. Sem heeft geen voertuig. Dus hoeft hij geen WA-verzekering. Koopt hij later een scooter? Dan moet het wel.",
    "sources": [
     {
      "name": "Rijksoverheid, WA-verzekering voertuig",
      "url": "https://www.rijksoverheid.nl/themas/verkeer-en-vervoer/voertuigen-op-de-weg/vraag-en-antwoord/auto/wa-verzekering-voertuig"
     },
     {
      "name": "Wet aansprakelijkheidsverzekering motorrijtuigen art. 2 tot 4 en 18 tot 19, versie van 24 juli 2025",
      "url": "https://wetten.overheid.nl/BWBR0002415/2025-07-24"
     }
    ]
   },
   {
    "id": "inboedel",
    "short": "Spullen op kamers",
    "type": "single",
    "docs": [
     "tafel"
    ],
    "prompt": "Welke verzekering is dat, en moet Noor die hebben?",
    "situ": "In september gaat Noor op kamers. Ze wil dat haar spullen daar verzekerd zijn.",
    "options": [
     [
      "b",
      "Een aansprakelijkheidsverzekering, en die kiest ze zelf"
     ],
     [
      "d",
      "Een inboedelverzekering, en die kiest ze zelf"
     ],
     [
      "c",
      "De basisverzekering zorg, en die is verplicht"
     ],
     [
      "a",
      "Een inboedelverzekering, en die is verplicht op kamers"
     ]
    ],
    "correct": "d",
    "pointTo": [
     {
      "doc": "tafel",
      "line": "t3"
     },
     {
      "rule": "r3"
     }
    ],
    "retry": "Zoek in de tabel welke verzekering over je spullen gaat. Lees dan regel 3.",
    "hint": "Staat die verzekering bij wat je moet hebben, of bij wat je kiest?",
    "explain": "Een inboedelverzekering is voor de spullen in je huis. Die is niet verplicht: Noor kiest hem zelf. Gaat ze op kamers? Dan checkt ze of haar spullen daar verzekerd zijn.",
    "sources": [
     {
      "name": "Wijzer in geldzaken, Alles over verzekeringen (achtergrond)",
      "url": "https://www.wijzeringeldzaken.nl/verzekering/alles-over-verzekeringen/alles-over-verzekeringen.pdf"
     }
    ]
   }
  ]
 }
};
  var LIVE = 'https://ollie0409.github.io/escape18/';
  var T = {
    notGood: 'Nog niet goed.', good: 'Goed!', goodNow: 'Goed, nu wel!', rightAns: 'Het goede antwoord', hint: 'Hint:', hintBtn: 'Hint',
    showSpot: 'Toon waar het staat', check: 'Controleer', multiErr: 'Kies eerst een of meer antwoorden.', tried: 'Al geprobeerd: ',
    nextQ: 'Volgende vraag', toDigit: 'Naar het cijfer van deze kamer', srcLabel: 'Bron:', digitOnly: 'Typ alleen het cijfer.',
    found: 'Gevonden!', thisDigit: 'Dit is het cijfer', rightDigit: 'Het goede cijfer is', remember: 'Dit neem je mee', yourDigit: 'Jullie cijfer',
    rulesH: 'Regels', answers: 'Antwoorden', answersMulti: 'Antwoorden, kies er meer'
  };
  var reduce = function () { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; };
  var esc = function (x) { return String(x == null ? '' : x).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var fmtDate = function (iso) {
    var m = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
    var p = iso.split('-'); return Number(p[2]) + ' ' + m[Number(p[1]) - 1] + ' ' + p[0];
  };
  var n = 0;

  function mount(root) {
    if (!DATA || root.getAttribute('data-e18-ready')) return;
    root.setAttribute('data-e18-ready', '1');
    var R = DATA.room, Q = R.questions, uid = 'e18d' + (++n) + '-';
    var lessonHref = root.getAttribute('data-lesson-href') || LIVE + DATA.slug + '/';
    var teacherHref = root.getAttribute('data-teacher-href') || LIVE + 'docenten/';
    var headingTag = /^h[2-4]$/.test(root.getAttribute('data-heading') || '') ? root.getAttribute('data-heading') : 'h2';
    var sub = headingTag === 'h2' ? 'h3' : headingTag === 'h3' ? 'h4' : 'h5';
    var S = { qi: 0, q: null, clue: null, done: false };
    var newQ = function () { return { state: 'open', tries: 0, tried: [], picked: [], hint: false, right: false, err: false }; };
    S.q = newQ();
    var id = function (x) { return uid + x; };
    var lineId = function (doc, line) { return id(doc + '-' + line); };

    // ----- static part: intro sheet, document, rules -----
    var D = R.docs.tafel;
    var table = '<table class="e18d-table"><caption class="e18d-sr">' + esc(D.title) + '</caption><thead><tr>' +
      D.head.map(function (h) { return '<th scope="col">' + esc(h) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      D.rows.map(function (row) { return '<tr class="e18d-ln" id="' + lineId('tafel', row[0]) + '" tabindex="-1"><th scope="row">' + esc(row[1]) + '</th><td>' + esc(row[2]) + '</td></tr>'; }).join('') +
      '</tbody></table>';
    var rules = '<ol class="e18d-rules">' + R.rules.lines.map(function (l, i) {
      return '<li class="e18d-ln" id="' + lineId('rule', l[0]) + '" tabindex="-1"><span class="e18d-rule-n">Regel ' + (i + 1) + '</span> ' + esc(l[1]) + '</li>';
    }).join('') + '</ol>';

    root.classList.add('e18d');
    if (!root.hasAttribute('aria-labelledby')) root.setAttribute('aria-labelledby', id('h'));
    root.innerHTML =
      '<div class="e18d-head">' +
        '<p class="e18d-kenmerk">Probeer zelf · Kamer 1 van ' + DATA.rooms + ' · ' + esc(DATA.title) + '</p>' +
        '<' + headingTag + ' class="e18d-h" id="' + id('h') + '">Probeer zelf een kamer</' + headingTag + '>' +
        '<p class="e18d-lead">Dit is kamer 1 uit de les <b>' + esc(DATA.title) + '</b>, met dezelfde vragen als in de klas. Lees de brief, de tabel en de regels. Beantwoord dan de vragen.</p>' +
        '<div class="e18d-tiles" role="img" aria-label="Het slot heeft ' + DATA.rooms + ' cijfers. Elke kamer geeft er één." id="' + id('tiles') + '">' +
          Array.apply(null, Array(DATA.rooms)).map(function (_, i) { return '<span class="e18d-tile' + (i === 0 ? ' e18d-tile-now' : '') + '" aria-hidden="true">?</span>'; }).join('') +
          '<span class="e18d-tiles-cap" aria-hidden="true">Het slot. Elke kamer geeft één cijfer.</span>' +
        '</div>' +
      '</div>' +
      '<div class="e18d-stage">' +
          '<article class="e18d-sheet" aria-labelledby="' + id('rt') + '">' +
            '<dl class="e18d-meta"><div><dt>Kamer</dt><dd>1</dd></div><div><dt>Datum</dt><dd>' + esc(R.where) + '</dd></div><div><dt>Betreft</dt><dd id="' + id('rt') + '">' + esc(R.title) + '</dd></div></dl>' +
            '<p class="e18d-intro">' + esc(R.intro) + '</p>' +
          '</article>' +
        '<div class="e18d-play" id="' + id('play') + '"></div>' +
        '<div class="e18d-docs" id="' + id('docs') + '">' +
          '<section class="e18d-doc" aria-labelledby="' + id('dt') + '">' +
            '<p class="e18d-label" id="' + id('dt') + '" tabindex="-1">' + esc(D.title) + '</p>' +
            '<div class="e18d-tablewrap">' + table + '</div>' +
            '<p class="e18d-from">' + esc(D.from) + '</p>' +
            '<p class="e18d-plain">' + esc(D.plain) + '</p>' +
          '</section>' +
          '<section class="e18d-doc e18d-rulebox" aria-labelledby="' + id('rh') + '">' +
            '<p class="e18d-label" id="' + id('rh') + '">' + esc(R.rules.title || T.rulesH) + '</p>' + rules +
          '</section>' +
        '</div>' +
      '</div>' +
      '<p class="e18d-foot"><span>' + esc(DATA.fictional) + '</span> <span class="e18d-mono">Les gecontroleerd op ' + esc(fmtDate(DATA.checked)) + '.</span></p>';

    var play = root.querySelector('#' + id('play'));

    // ----- pointers ("Toon waar het staat") -----
    function points(p) {
      var out = [];
      [].concat(p || []).forEach(function (x) {
        if (x.rules) x.rules.forEach(function (r) { out.push(lineId('rule', r)); });
        if (x.rule) out.push(lineId('rule', x.rule));
        if (x.doc && x.line) out.push(lineId(x.doc, x.line));
      });
      return out;
    }
    function mark(ids) {
      root.querySelectorAll('.e18d-point').forEach(function (el) { el.classList.remove('e18d-point'); el.removeAttribute('aria-describedby'); });
      ids.forEach(function (x) { var el = document.getElementById(x); if (el) { el.classList.add('e18d-point'); el.setAttribute('aria-describedby', id('here')); } });
    }
    function go(el) {
      if (!el) return;
      el.scrollIntoView({ behavior: reduce() ? 'auto' : 'smooth', block: 'center' });
      el.focus({ preventScroll: true });
    }

    // ----- question view -----
    var isRight = function (q, v) {
      if (q.type === 'multi') { var a = v.slice().sort().join(','), b = q.correct.slice().sort().join(','); return a === b; }
      return v === q.correct;
    };
    var optText = function (q, v) { var o = q.options.filter(function (x) { return x[0] === v; })[0]; return o ? o[1] : v; };
    var ansText = function (q, v) { return [].concat(v).map(function (x) { return optText(q, x); }).join(' en '); };
    var srcLine = function (q) {
      return q.sources && q.sources.length ? '<p class="e18d-src"><b>' + T.srcLabel + '</b> ' + q.sources.map(function (s) {
        return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + esc(s.name) + '</a>';
      }).join('; ') + '</p>' : '';
    };

    function viewQ() {
      var q = Q[S.qi], st = S.q, last = S.qi === Q.length - 1;
      var h = '<p class="e18d-kenmerk">Vraag ' + (S.qi + 1) + ' van ' + Q.length + ' · ' + esc(q.short) + '</p>';
      if (q.situ) h += '<p class="e18d-situ">' + esc(q.situ) + '</p>';
      h += '<' + sub + ' class="e18d-prompt" id="' + id('qp') + '" tabindex="-1">' + esc(q.prompt) + '</' + sub + '>';
      var done = st.state === 'done';
      if (q.type === 'multi') {
        h += '<form class="e18d-form" id="' + id('mf') + '" novalidate><fieldset class="e18d-fs"><legend class="e18d-legend">' + esc(q.legend || T.answersMulti) + '</legend>' +
          q.options.map(function (o) {
            var on = st.picked.indexOf(o[0]) > -1;
            return '<label class="e18d-opt e18d-check"><input type="checkbox" name="m" value="' + esc(o[0]) + '"' + (on ? ' checked' : '') + (done ? ' disabled' : '') + '><span>' + esc(o[1]) + '</span></label>';
          }).join('') + '</fieldset>' +
          (done ? '' : '<div class="e18d-row"><button class="e18d-btn" type="submit">' + T.check + '</button></div>') + '</form>';
      } else {
        h += '<div class="e18d-cards" role="group" aria-label="' + T.answers + '">' + q.options.map(function (o) {
          var tried = st.tried.indexOf(o[0]) > -1, chosen = done && st.last === o[0];
          return '<button type="button" class="e18d-opt e18d-card' + (tried ? ' e18d-tried' : '') + (chosen ? (st.right ? ' e18d-ok' : ' e18d-no') : '') + '" data-v="' + esc(o[0]) + '"' + (tried || done ? ' disabled' : '') + '>' +
            (tried ? '<span class="e18d-sr">' + T.tried + '</span>' : '') + esc(o[1]) + '</button>';
        }).join('') + '</div>';
      }
      if (!done) h += '<div class="e18d-row e18d-jump"><button type="button" class="e18d-btn e18d-ghost e18d-small" data-act="docs">Bekijk de tabel en de regels</button></div>';
      if (!done) h += st.hint ? '<p class="e18d-hint"><b>' + T.hint + '</b> ' + esc(q.hint) + '</p>' : '<div class="e18d-row"><button type="button" class="e18d-btn e18d-ghost" data-act="hint">' + T.hintBtn + '</button></div>';
      // Feedback: one live region, content replaced on every answer.
      var fb = '';
      if (done) {
        fb = '<div class="e18d-fb ' + (st.right ? 'e18d-fb-ok' : 'e18d-fb-no') + '"><p class="e18d-verdict">' + (st.right ? (st.tries === 1 ? T.good : T.goodNow) : T.rightAns + ':') + '</p>' +
          (st.right ? '' : '<p class="e18d-right"><b>' + esc(ansText(q, q.correct)) + '</b></p>') +
          '<p>' + esc(q.explain) + '</p>' + srcLine(q) + '</div>';
      } else if (st.err) {
        fb = '<div class="e18d-nudge"><p><b>' + T.multiErr + '</b></p></div>';
      } else if (st.state === 'retry') {
        fb = '<div class="e18d-nudge"><p><b>' + T.notGood + '</b> ' + esc(q.retry) + '</p></div>';
      }
      h += '<div class="e18d-live" role="status" aria-live="polite" aria-atomic="true" id="' + id('live') + '">' + fb + '</div>';
      if (!done && st.state === 'retry' && points(q.pointTo).length) h += '<div class="e18d-row"><button type="button" class="e18d-btn e18d-ghost e18d-small" data-act="spot">' + T.showSpot + '</button></div>';
      if (done) h += '<div class="e18d-row"><button type="button" class="e18d-btn" data-act="next">' + (last ? T.toDigit : T.nextQ) + '</button></div>';
      return h;
    }

    // ----- clue view -----
    function viewClue() {
      var c = S.clue, done = c.state === 'done';
      var h = '<p class="e18d-kenmerk">Het cijfer van kamer 1</p>' +
        '<' + sub + ' class="e18d-prompt" id="' + id('qp') + '" tabindex="-1">Vind het cijfer</' + sub + '>' +
        '<p class="e18d-clue">' + esc(R.clue) + '</p>';
      if (!done) h += '<form class="e18d-form" id="' + id('cf') + '" novalidate><label class="e18d-legend" for="' + id('digit') + '">' + T.yourDigit + '</label>' +
        '<div class="e18d-numrow"><input class="e18d-input" id="' + id('digit') + '" inputmode="numeric" autocomplete="off" maxlength="12" value="' + esc(c.raw || '') + '"' +
        (c.long ? ' aria-invalid="true"' : '') + ' aria-describedby="' + id('live') + '"><button class="e18d-btn" type="submit">' + T.check + '</button></div></form>';
      var fb = '';
      if (done) fb = '<div class="e18d-fb ' + (c.right ? 'e18d-fb-ok' : 'e18d-fb-no') + '"><p class="e18d-verdict">' + (c.right ? T.found + ' ' + T.thisDigit + ': ' + esc(R.digit) : T.rightDigit + ' ' + esc(R.digit) + '.') + '</p>' +
        '<p><b>' + T.remember + ':</b> ' + esc(R.remember) + '</p></div>';
      else if (c.long) fb = '<div class="e18d-nudge"><p><b>' + T.digitOnly + '</b></p></div>';
      else if (c.state === 'retry') fb = '<div class="e18d-nudge"><p><b>' + T.notGood + '</b> ' + esc(R.clueRetry) + '</p></div>';
      h += '<div class="e18d-live" role="status" aria-live="polite" aria-atomic="true" id="' + id('live') + '">' + fb + '</div>';
      if (done) h += '<div class="e18d-end" id="' + id('end') + '"><p class="e18d-end-t" id="' + id('endt') + '" tabindex="-1">Kamer 1 klaar. In de klas spelen leerlingen ' + DATA.rooms + ' kamers in 45 minuten.</p>' +
        '<div class="e18d-row"><a class="e18d-btn e18d-sun" href="' + esc(lessonHref) + '">Open de hele les ' + esc(DATA.title) + '</a>' +
        '<a class="e18d-btn e18d-ghost e18d-on-night" href="' + esc(teacherHref) + '">Zo geef je de les: voor docenten</a></div>' +
        '<button type="button" class="e18d-link" data-act="again">Speel kamer 1 opnieuw</button></div>';
      return h;
    }

    function render(focus) {
      var q = Q[S.qi];
      // Pointers only while a question waits for a second try (as in the lesson).
      mark(S.clue ? [] : (S.q.state === 'retry' ? points(q.pointTo) : []));
      // Keep the live region node so the update is announced; swap the rest.
      play.innerHTML = S.clue ? viewClue() : viewQ();
      if (focus) {
        var el = typeof focus === 'string' ? play.querySelector(focus) : focus;
        if (el) el.focus({ preventScroll: false });
      }
    }
    // A live region announces only changes after it exists: render empty first, then fill.
    function announce(focus) {
      var html = S.clue ? viewClue() : viewQ();
      var tmp = document.createElement('div'); tmp.innerHTML = html;
      var live = tmp.querySelector('.e18d-live'), msg = live ? live.innerHTML : '';
      if (live) live.innerHTML = '';
      mark(S.clue ? [] : (S.q.state === 'retry' ? points(Q[S.qi].pointTo) : []));
      play.innerHTML = tmp.innerHTML;
      var target = typeof focus === 'string' ? play.querySelector(focus) : null;
      if (target) target.focus();
      setTimeout(function () { var l = play.querySelector('.e18d-live'); if (l) l.innerHTML = msg; }, 150);
    }

    function answer(v) {
      var q = Q[S.qi], st = S.q;
      if (st.state === 'done') return;
      st.tries++; st.last = v;
      if (isRight(q, v)) { st.state = 'done'; st.right = true; }
      else if (st.tries === 1) { st.state = 'retry'; if (q.type === 'single') st.tried.push(v); }
      else { st.state = 'done'; st.right = false; }
      if (st.state === 'done') announce('[data-act="next"]');
      else announce(q.type === 'single' ? '.e18d-card:not([disabled])' : 'button[type="submit"]');
    }

    play.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b || !play.contains(b)) return;
      var act = b.getAttribute('data-act');
      if (b.hasAttribute('data-v')) return answer(b.getAttribute('data-v'));
      if (act === 'hint') { S.q.hint = true; render('.e18d-hint'); var hn = play.querySelector('.e18d-hint'); if (hn) { hn.setAttribute('tabindex', '-1'); hn.focus(); } return; }
      if (act === 'docs') { go(document.getElementById(id('dt'))); return; }
      if (act === 'spot') { var ids = points(Q[S.qi].pointTo); go(document.getElementById(ids[0])); return; }
      if (act === 'next') {
        if (S.qi < Q.length - 1) { S.qi++; S.q = newQ(); }
        else S.clue = { state: 'open', tries: 0, raw: '', long: false };
        render('#' + id('qp'));
        var p = play.querySelector('#' + id('qp')); if (p && p.getBoundingClientRect().top < 0) p.scrollIntoView({ behavior: reduce() ? 'auto' : 'smooth', block: 'start' });
        return;
      }
      if (act === 'again') {
        S.qi = 0; S.q = newQ(); S.clue = null;
        var t = root.querySelector('.e18d-tile'); t.textContent = '?'; t.classList.remove('e18d-tile-done');
        root.querySelector('#' + id('tiles')).setAttribute('aria-label', 'Het slot heeft ' + DATA.rooms + ' cijfers. Elke kamer geeft er één.');
        render('#' + id('qp')); return;
      }
    });
    play.addEventListener('change', function (e) {
      if (e.target.name === 'm') {
        S.q.picked = Array.prototype.map.call(play.querySelectorAll('input[name="m"]:checked'), function (x) { return x.value; });
        if (S.q.err && S.q.picked.length) { S.q.err = false; var l = play.querySelector('.e18d-live'); if (l && S.q.state !== 'retry') l.innerHTML = ''; }
      }
    });
    play.addEventListener('submit', function (e) {
      e.preventDefault();
      if (e.target.id === id('mf')) {
        S.q.picked = Array.prototype.map.call(play.querySelectorAll('input[name="m"]:checked'), function (x) { return x.value; });
        if (!S.q.picked.length) { S.q.err = true; announce('button[type="submit"]'); S.q.err = false; return; }
        return answer(S.q.picked.slice());
      }
      if (e.target.id === id('cf')) {
        var c = S.clue, v = (play.querySelector('#' + id('digit')).value || '').trim();
        c.raw = v;
        c.long = !/^\d+$/.test(v) || v.length > String(R.digit).length;
        if (c.long) { announce('#' + id('digit')); return; }
        c.tries++;
        if (v === R.digit) { c.state = 'done'; c.right = true; }
        else if (c.tries === 1) { c.state = 'retry'; c.raw = ''; }
        else { c.state = 'done'; c.right = false; }
        if (c.state === 'done') {
          var t = root.querySelector('.e18d-tile'); t.textContent = R.digit; t.classList.add('e18d-tile-done');
          root.querySelector('#' + id('tiles')).setAttribute('aria-label', 'Het slot heeft ' + DATA.rooms + ' cijfers. Het eerste cijfer is ' + R.digit + '.');
          announce('#' + id('endt'));
        } else announce('#' + id('digit'));
      }
    });
    render(null);
  }

  function init() { Array.prototype.forEach.call(document.querySelectorAll('[data-e18-demo]'), mount); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  window.E18Demo = { mount: mount };
})();
