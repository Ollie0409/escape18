/* Simulated teams for the demo. Each bot plays a lesson from the catalog rooms
   and emits engine events that pass protocol.cleanEvent. Bots are fake data. */
(function (root) {
  'use strict';
  var ALNUM = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  function rid(n) { var s = ''; for (var i = 0; i < n; i++) s += ALNUM[Math.floor(Math.random() * ALNUM.length)]; return s; }
  function rnd(a, b) { return a + Math.random() * (b - a); }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }

  // Build the full event timeline of one bot: [{at: seconds from start, ev}]
  function buildPlan(lesson, code, team, opts) {
    var rooms = lesson.rooms || [];
    var max = lesson.checkMax || 4;
    var pace = opts.pace;          // multiplier of "seconds per question"
    var stuck = !!opts.stuck;
    var base = { product: lesson.product || ('escape18-' + lesson.slug), version: 'demo', 'class': code, session: team };
    var t = rnd(0, 6), out = [];
    function add(type, data) { out.push({ at: t, ev: { type: type, product: base.product, version: base.version, 'class': base['class'], session: base.session, data: data } }); }
    var preScore = Math.max(0, Math.min(max, Math.round(rnd(0.5, max - 1.5))));
    add('start', { variant: 'A', lang: 'nl' });
    t += rnd(2, 5);
    add('check', { phase: 'start', form: 'A', score: preScore, max: max });
    var hintsTotal = 0, rightTotal = 0, qTotal = 0;
    for (var ri = 0; ri < rooms.length; ri++) {
      var room = rooms[ri], qs = room.questions || [];
      var roomStart = t;
      for (var qi = 0; qi < qs.length; qi++) {
        var first = Math.random() < 0.65, hint = Math.random() < 0.2;
        var tries = first ? 1 : (Math.random() < 0.6 ? 2 : 3);
        t += rnd(8, 22) * pace * (tries === 1 ? 1 : 1.5);
        add('answer', { room: room.id, q: qs[qi], first: first, tries: tries, hint: hint, sec: Math.round(rnd(8, 40) * pace) });
        qTotal++; if (first) rightTotal++; if (hint) hintsTotal++;
      }
      if (stuck && ri === 1) return { events: out, stuckAt: t }; // never leaves room 2
      t += rnd(2, 6) * pace;
      add('room', { room: room.id, sec: Math.round(t - roomStart) });
    }
    t += rnd(3, 8) * pace;
    add('lock', { opened: true, sec: Math.round(rnd(10, 30) * pace) });
    t += rnd(3, 6);
    var post = Math.min(max, preScore + Math.round(rnd(0.5, 2.5)));
    add('check', { phase: 'end', form: 'A', score: post, max: max });
    t += rnd(1, 3);
    add('end', { sec: Math.round(t) });
    t += rnd(2, 6);
    add('pupil_feedback', { fun: 3 + Math.floor(Math.random() * 3), learned: 3 + Math.floor(Math.random() * 3) });
    return { events: out };
  }

  // Start n bots. api = { connect(code, teamId, handlers) -> conn with .send(frame) }
  // Returns controller {stop(), setSpeed(x)}.
  function startBots(opts) {
    var lesson = opts.lesson, code = opts.code, n = opts.count, speed = opts.speed || 1;
    var bots = [], timers = [], stopped = false;
    var stuckIdx = n > 2 ? 2 : n - 1; // one bot stays stuck in room 2
    for (var i = 0; i < n; i++) {
      (function (i) {
        var team = rid(10);
        var plan = buildPlan(lesson, code, team, { pace: rnd(0.6, 1.6), stuck: i === stuckIdx && (lesson.rooms || []).length > 1 });
        var bot = { team: team, plan: plan.events, idx: 0, seq: 0, conn: null, started: 0 };
        bots.push(bot);
        bot.joinAt = i * 1500 / speed + 300;
        timers.push(setTimeout(function () { join(bot); }, bot.joinAt));
      })(i);
    }
    function join(bot) {
      if (stopped) return;
      bot.conn = opts.connect(code, bot.team);
      if (!bot.conn) return;
      // The transport client sends hello by itself on connect.
      bot.started = Date.now();
      loop(bot);
    }
    function loop(bot) {
      if (stopped) return;
      var step = bot.plan[bot.idx];
      if (!step) return;
      var due = bot.started + (step.at * 1000) / speed;
      var wait = Math.max(0, due - Date.now());
      bot.timer = setTimeout(function () {
        if (stopped) return;
        bot.seq++;
        bot.conn.send({ t: 'events', seq: bot.seq, batch: [step.ev] });
        bot.idx++;
        loop(bot);
      }, wait);
    }
    return {
      stop: function () { stopped = true; timers.forEach(clearTimeout); bots.forEach(function (b) { clearTimeout(b.timer); }); bots.forEach(function (b) { try { b.conn && b.conn.close && b.conn.close(); } catch (e) {} }); },
      setSpeed: function (x) {
        // Rebase every bot so the remaining timeline runs at the new speed.
        var now = Date.now();
        bots.forEach(function (b) {
          if (!b.started) return;
          var elapsedPlan = ((now - b.started) * speed) / 1000;
          b.started = now - (elapsedPlan * 1000) / x;
        });
        speed = x;
        bots.forEach(function (b) { if (b.started && b.conn) { clearTimeout(b.timer); loop(b); } });
      },
      bots: bots
    };
  }
  root.E18DemoBots = { startBots: startBots, buildPlan: buildPlan };
})(typeof window !== 'undefined' ? window : globalThis);
