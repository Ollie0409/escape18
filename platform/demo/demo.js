/* Demo page: hosts the local relay, creates a class, loads teacher + pupil iframes, runs simulated teams. */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var TR = window.E18P_Transport, CAT = window.E18P_Catalog;
  var state = { catalog: null, bots: null, teacher: null };

  function setStatus(t) { $('status').textContent = t || ''; }

  function fitPhone() {
    var box = $('phoneBox'), ph = $('phone');
    if (!box || !ph) return;
    var s = Math.min(1, (box.clientWidth - 4) / 390);
    ph.style.transform = 'scale(' + s + ')';
    box.style.height = Math.round(760 * s) + 'px';
  }

  function fillLessons(cat) {
    var sel = $('lesson');
    cat.lessons.forEach(function (l) {
      var o = document.createElement('option');
      o.value = l.slug; o.textContent = l.title + ' (' + l.minutes + ' min)';
      sel.appendChild(o);
    });
    var has = cat.lessons.some(function (l) { return l.slug === 'verzekerd'; });
    sel.value = has ? 'verzekerd' : cat.lessons[0].slug;
  }

  function start() {
    var cat = state.catalog;
    if (!cat) return;
    if (state.bots) { state.bots.stop(); state.bots = null; }
    if (state.teacher) { try { state.teacher.close(); } catch (e) { /* ignore */ } state.teacher = null; }
    var slug = $('lesson').value;
    var lesson = cat.lessons.filter(function (l) { return l.slug === slug; })[0];
    var count = Math.max(0, Math.min(12, parseInt($('bots').value, 10) || 0));
    var speed = parseInt($('speed').value, 10) || 1;
    setStatus('Klas wordt gestart...');
    TR.createClass({ relay: '', lesson: slug, minutes: lesson.minutes, catalog: cat }).then(function (r) {
      var code = r.code, key = r.key;
      // Demo-owned teacher connection: puts the class in 'running' and starts the timer so bots and pupil can play at once.
      state.teacher = TR.connect({ relay: '', code: code, role: 'teacher', key: key });
      state.teacher.send({ t: 'state', state: 'running' });
      state.teacher.send({ t: 'timer', action: 'start' });
      $('stage').hidden = false;
      $('teacher').src = '../docent/index.html?attach=' + encodeURIComponent(code) + '&key=' + encodeURIComponent(key) + '&les=' + encodeURIComponent(slug);
      $('pupil').src = '../speel/index.html?klas=' + encodeURIComponent(code);
      fitPhone();
      state.bots = window.E18DemoBots.startBots({
        lesson: lesson, code: code, count: count, speed: speed,
        connect: function (c, team) { return TR.connect({ relay: '', code: c, role: 'pupil', team: team }); }
      });
      setStatus('Klas ' + code + ' draait. ' + count + ' gesimuleerde teams.');
    }, function (e) { setStatus('Starten mislukt: ' + (e && e.message || e)); });
  }

  $('ctl').addEventListener('submit', function (ev) { ev.preventDefault(); start(); });
  $('speed').addEventListener('change', function () { if (state.bots) state.bots.setSpeed(parseInt($('speed').value, 10) || 1); });
  window.addEventListener('resize', fitPhone);

  CAT.load().then(function (cat) { state.catalog = cat; fillLessons(cat); }, function () { setStatus('Lessenlijst niet geladen.'); });
})();
