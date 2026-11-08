# Escape "Studiefinanciering" (content spec, ID voorstel: ESC-DUO)

Bedragen geldig voor: kalenderjaar 2027 (DUO-bedragen hbo en wo, tabel "September tot en met december 2027"; basisbeurs, aanvullende beurs en lening zijn heel 2027 gelijk; collegegeldkrediet € 230,92 geldt van september tot en met december 2027, van januari tot en met augustus 2027 is het € 224,50); gecontroleerd op 6 november 2026; validUntil: 31 december 2027

Format as ESC-MAAND (src/escaperun.js): four rooms in date order, 3 questions per room, one retry with a nudge that points to a line, a hint that costs 30 seconds and points to where to look (never the answer), one digit per room, one lock of four digits, then a debrief. Pupil text is Dutch B1 (READABILITY.md). Rules come only from the source table at the end. All checks: 6 November 2026.

Fiction line (shown once at the start):
"Alles is verzonnen: de mensen, de school en de berichten. De regels en de bedragen van DUO zijn echt; bij elke uitleg staat de bron."

Fictional on purpose: Hogeschool Zeestad, the study Communicatie, mama, Mila, the school's folder. No document imitates a DUO letter or a Mijn DUO screen: DUO amounts are shown as a plain table labelled "echte bedragen van DUO", and rules come in the questions, explanations and the folder of the fictional school.

Story time: May 2027 to February 2028. The pupil starts hbo on 1 September 2027 (as ESC-MAAND room 4).

**Amounts are the published 2027 amounts** (coordinator decision, 6 November 2026: the story plays in 2027 and the pupils will study from 2027). Each amount was read on the DUO bedragen page on 6 November 2026 (page update 5 November 2026). Rooms 2 and 3 use the table "September tot en met december 2027", the months in which the pupil studies. Only the collegegeldkrediet differs between January to August 2027 (€ 224,50) and September to December 2027 (€ 230,92); the lesson shows only the September amount and labels the table with those months.

Code: **2073**

Lead: "Studiefinanciering aanvragen bij DUO, thuis of op kamers wonen, extra geld of lenen, en wat je later terugbetaalt."

Clues: the engine shows all documents of the room on the digit screen (`clueDocs` left out), so every clue can be read or worked out from a document on that screen. Each clue starts with "Het ne cijfer van het slot is" (G4 fix 2).

## Leerdoelen

1. De leerling weet dat je studiefinanciering en het studentenreisproduct bij DUO aanvraagt, en welke twee soorten reisproduct er zijn.
2. De leerling kan in een tabel de basisbeurs voor thuiswonend en uitwonend aflezen, het verschil uitrekenen en zeggen wanneer je voor DUO meestal uitwonend bent.
3. De leerling kan zeggen waar de aanvullende beurs vooral van afhangt en dat je een lening altijd terugbetaalt.
4. De leerling kan uitleggen wat een prestatiebeurs is (gift bij een diploma binnen 10 jaar) en dat je je reisproduct stopzet als je stopt met studeren.

---

## Kamer 1. Aanvragen (maandag 10 mei 2027)

**Intro:** "Je bent aangemeld voor Communicatie bij Hogeschool Zeestad. Je begint op 1 september 2027. Vandaag krijg je een mail en een folder."

### Document 1a: mail van Hogeschool Zeestad (type: letter, sentences)
From: "Hogeschool Zeestad, Studentenzaken", place "Zeestad, 10 mei 2027", greeting "Beste student,".
- s1 "Je aanmelding in Studielink voor Communicatie is binnen."
- s2 "Je start op woensdag 1 september 2027."
- s3 "Regel op tijd de betaling van je collegegeld. Volg daarvoor onze instructies."
- s4 "Wil je studiefinanciering of een ov-kaart voor studenten? Dat regelen wij niet."
- s5 "Met vriendelijke groet, Studentenzaken"

### Document 1b: folder van Hogeschool Zeestad, "Reizen naar Zeestad" (type: rows)
- f1 "Krijg je studiefinanciering? Dan reis je gratis of met korting met trein, tram en bus."
- f2 "Bij DUO kies je reisrecht voor door de week, of reisrecht voor het weekend."
- f3 "Na je aanvraag geef je de gegevens van je persoonlijke OV-chipkaart door op studentenreisproduct.nl. Daarna zet je het reisproduct bij een ophaalautomaat op je kaart."

**Moeilijke woorden (plain):** "Studiefinanciering: geld van de overheid voor je studie. Collegegeld: wat je de hogeschool betaalt om te studeren. Ophaalautomaat: een automaat, bijvoorbeeld op het station. Daar zet je een reisproduct op je OV-chipkaart, of je zet het stop."

### Vraag 1.1 (id: waar, kind: pick, docs: mail)
- Prompt: "Waar vraag je studiefinanciering aan?"
- Options:
  - a "In Studielink, bij je aanmelding"
  - b "Bij Hogeschool Zeestad"
  - c "Bij DUO, in Mijn DUO"
- Correct: c
- Retry pointer: s4 "Dat regelen wij niet."
- Nudge: "Lees zin 4. De hogeschool doet het niet. Wie dan wel?"
- Hint: "Lees zin 1 en zin 4 van de mail. Wat regel je in Studielink? Wat doet de hogeschool niet?"
- Explanation: "Studiefinanciering vraag je aan bij DUO. Je logt in op Mijn DUO met DigiD."
- Sources: duoAanvragen, nlwwAanvragen

### Vraag 1.2 (id: reizen, kind: pick, docs: mail)
- Prompt: "Wat vraag je ook bij DUO aan om goedkoop met de trein en bus te reizen?"
- Options:
  - a "Een korting bij de hogeschool"
  - b "Een gewone ov-kaart met saldo"
  - c "Het studentenreisproduct"
- Correct: c
- Retry pointer: s4 "of een ov-kaart voor studenten"
- Nudge: "Lees zin 4. Een ov-kaart voor studenten heeft bij DUO een eigen naam."
- Hint: "Lees de drie antwoorden. Welk antwoord is iets wat je bij DUO aanvraagt?"
- Explanation: "Bij DUO vraag je ook het studentenreisproduct aan. Daarmee reis je gratis of met korting. Na je aanvraag geef je op studentenreisproduct.nl de gegevens van je persoonlijke OV-chipkaart door. Daarna zet je het reisproduct bij een ophaalautomaat op je kaart."
- Sources: roReis, duoOv; OV-chipkaart and ophaalautomaat: duoReisAanvragen

### Vraag 1.3 (id: soorten, kind: multi, docs: folder)
- Prompt: "Welke soorten studentenreisproduct zijn er?"
- Legend: "Tik alle soorten aan."
- Items:
  - a "Een dagabonnement"
  - b "Een maandabonnement"
  - c "Een weekabonnement"
  - d "Een weekendabonnement"
- Correct: c, d
- Retry pointer: f2 "reisrecht voor door de week, of reisrecht voor het weekend"
- Nudge: "Lees regel 2 van de folder. Bij welke dagen hoort elk abonnement?"
- Hint: "Kijk in de folder. Welke regel gaat over wat je bij DUO kiest?"
- Explanation: "Je kiest een weekabonnement of een weekendabonnement. Daarmee reis je gratis of met korting."
- Sources: roReis, duoOv

### Cijfer kamer 1
- Clue: "Het 1e cijfer van het slot is het aantal soorten reisrecht dat je kunt kiezen. Kijk in regel 2 van de folder."
- Digit: **2** (week, weekend).
- Remember: "Studiefinanciering en je reisproduct vraag je aan bij DUO, in Mijn DUO. Regel op tijd een DigiD."

---

## Kamer 2. Thuis of uit? (maandag 7 juni 2027)

**Intro:** "Vanaf 1 september 2027 huur je een kamer in Zeestad. Je schrijft je daar dan ook in bij de gemeente. Hoeveel basisbeurs krijg je vanaf september?"

### Document 2: tabel (type: slip)
Title: "Basisbeurs hbo en universiteit, per maand, in 2027"
Subtitle: "Echte bedragen van DUO"
- Thuiswonend: € 134,45
- Uitwonend: € 335,10

**Moeilijke woorden (plain):** "Basisbeurs: geld van DUO voor studenten die recht hebben op studiefinanciering. Thuiswonend: je woont bij je ouders. Uitwonend: je woont niet bij je ouders."

### Vraag 2.1 (id: uitbedrag, kind: number, docs: tabel)
- Prompt: "Vanaf september ben je uitwonend. Hoeveel basisbeurs krijg je dan per maand?"
- Correct: **€ 335,10** (33510 cents)
- Retry pointer: row "Uitwonend: € 335,10"
- Nudge: "In de tabel staan twee bedragen. Welk bedrag hoort bij wonen op kamers?"
- Hint: "Lees bij Moeilijke woorden wat uitwonend betekent. Zoek dat woord in de tabel."
- Explanation: "Uitwonend krijg je in 2027 € 335,10 basisbeurs per maand."
- Sources: duoBedragen

### Vraag 2.2 (id: verschil, kind: number, docs: tabel)
- Prompt: "Hoeveel is dat per maand meer dan thuiswonend?"
- Correct: **€ 200,65** (20065 cents)
- Retry pointer: both rows of the table.
- Nudge: "Haal het bedrag voor thuiswonend van het bedrag voor uitwonend af."
- Hint: "Je hebt beide regels van de tabel nodig. Welke som hoort bij 'meer dan'?"
- Explanation: "€ 335,10 min € 134,45 = € 200,65. Uitwonend krijg je dus elke maand een stuk meer."
- Sources: duoBedragen

### Vraag 2.3 (id: wanneer, kind: pick, docs: none)
- Prompt: "Wanneer ben je voor DUO meestal uitwonend?"
- Options:
  - a "Als je een huurcontract hebt voor een kamer in een andere stad"
  - b "Als je meer dan de helft van de week op je eigen kamer slaapt"
  - c "Als je bij de gemeente op een ander adres staat en daar woont"
- Correct: c
- Retry pointer: intro "Je schrijft je daar dan ook in bij de gemeente."
- Nudge: "DUO kijkt naar je adres bij de gemeente. En naar nog iets."
- Hint: "Lees de intro van deze kamer nog eens. Wat doe je bij de gemeente?"
- Explanation: "Meestal ben je uitwonend als je bij de gemeente op een ander adres staat dan je ouders. En je woont daar ook echt. Er zijn een paar uitzonderingen. Bijvoorbeeld als de gemeente je niet wil inschrijven. DUO krijgt je adres van de gemeente."
- Sources: duoUitwonend, wsf15 (uitzonderingen: duoUitwonend)

### Cijfer kamer 2
- Clue: "Het 2e cijfer van het slot is het laatste cijfer van het bedrag dat je uitwonend meer krijgt. Reken met de tabel. Kijk alleen naar de hele euro's."
- Digit: **0** (€ 335,10 min € 134,45 = € 200,65; hele euro's 200).
- Remember: "Ga je op kamers? Schrijf je in bij je nieuwe gemeente en zet in Mijn DUO dat je uitwonend bent. Pas dan krijg je de basisbeurs voor uitwonenden."

---

## Kamer 3. Extra geld of lenen? (maandag 5 juli 2027)

**Intro:** "Je moeder stuurt je een appje over geld voor je studie."

### Document 3a: app van mama (type: chat)
From: "Mama", time 19:40.
- m1 "Papa en ik verdienen niet zo veel."
- m2 "Kun jij extra geld krijgen van DUO?"
- m3 "Of moet je dan lenen? Dat moet je toch terugbetalen?"

### Document 3b: tabel (type: slip)
Title: "Hbo en universiteit, per maand, september tot en met december 2027"
Subtitle: "Echte bedragen van DUO"
- Aanvullende beurs, hoogstens: € 507,10
- Gewone lening, hoogstens: € 325,44
- Collegegeldkrediet bij wettelijk collegegeld: € 230,92

Note: "Krijg je minder of geen aanvullende beurs? Dan kun je het verschil extra lenen. Dat komt bovenop de gewone lening."

**Moeilijke woorden (plain):** "Aanvullende beurs: extra geld van DUO als je ouders weinig kunnen bijdragen. Lening: geld dat je later terugbetaalt, met rente. Collegegeldkrediet: een lening om je collegegeld te betalen. Wettelijk collegegeld: het gewone collegegeld. Betaal je meer collegegeld? Dan kun je ook meer collegegeldkrediet krijgen."

### Vraag 3.1 (id: ouders, kind: pick, docs: chat)
- Prompt: "Waar hangt de aanvullende beurs vooral van af?"
- Options:
  - a "Van wat je zelf verdient met je bijbaan"
  - b "Van je cijfers op je eindexamen"
  - c "Van het inkomen van je ouders"
- Correct: c
- Retry pointer: m1 "Papa en ik verdienen niet zo veel."
- Nudge: "Lees het eerste appje van je moeder nog eens."
- Hint: "Lees bij Moeilijke woorden wat een aanvullende beurs is."
- Explanation: "De aanvullende beurs hangt vooral af van het inkomen van je ouders. Ook het aantal broers en zussen telt mee. DUO raadt aan om hem altijd aan te vragen."
- Sources: duoAanvullend, roHo ("altijd aanvragen": duoAanvullend and duoAanvragen; broers en zussen: duoAanvullendHoeveel)

### Vraag 3.2 (id: hoogstens, kind: number, docs: tabel)
- Prompt: "Hoeveel aanvullende beurs kun je vanaf september 2027 hoogstens krijgen per maand?"
- Correct: **€ 507,10** (50710 cents)
- Retry pointer: row "Aanvullende beurs, hoogstens: € 507,10"
- Nudge: "Zoek in de tabel de regel met het woord aanvullende."
- Hint: "Lees bij Moeilijke woorden welk woord bij extra geld van DUO hoort. Zoek dat woord in de tabel."
- Explanation: "Vanaf september 2027 is de aanvullende beurs hoogstens € 507,10 per maand. Hoeveel jij krijgt, hangt af van je ouders."
- Sources: duoBedragen

### Vraag 3.3 (id: lening, kind: pick, docs: chat)
- Prompt: "Wat moet je altijd terugbetalen, ook als je je diploma haalt?"
- Options:
  - a "De basisbeurs"
  - b "De aanvullende beurs"
  - c "De lening"
- Correct: c
- Retry pointer: m3 "Dat moet je toch terugbetalen?"
- Nudge: "Een beurs kan een gift worden. Wat nooit?"
- Hint: "Lees bij Moeilijke woorden welk geld je later terugbetaalt."
- Explanation: "Een lening en collegegeldkrediet betaal je altijd terug, met rente. Leen dus niet meer dan je nodig hebt."
- Sources: duoGift, roHo

### Cijfer kamer 3
- Clue: "Het 3e cijfer van het slot is het laatste cijfer van de hoogste aanvullende beurs in de tabel. Kijk alleen naar de hele euro's."
- Digit: **7** (€ 507,10; hele euro's 507).
- Remember: "Vraag de aanvullende beurs altijd aan. Lenen kan ook, maar dat betaal je altijd terug."

---

## Kamer 4. Gift of terugbetalen? (maandag 7 februari 2028)

**Intro:** "Je studeert nu een half jaar. Je vriendin Mila begon net als jij in september 2027. Het was haar eerste studie, na de middelbare school. Nu is ze gestopt. Ze stuurt je een appje."

### Document 4a: app van Mila (type: chat)
From: "Mila", time 21:05.
- a1 "Ik ben op 20 december gestopt met mijn studie."
- a2 "Op 21 december heb ik mijn studiefinanciering in Mijn DUO stopgezet."
- a3 "Mijn ov-kaart gebruik ik nog gewoon. Dat mag toch?"

### Document 4b: overzicht (type: rows)
Title: "Prestatiebeurs hbo en universiteit (regels van DUO)"
- p1 "Basisbeurs: diploma binnen 10 jaar? Dan wordt het een gift. Anders betaal je terug."
- p2 "Aanvullende beurs: de eerste 5 maanden zijn altijd een gift. De rest wordt een gift met een diploma binnen 10 jaar."
- p3 "Studentenreisproduct: diploma binnen 10 jaar? Dan wordt het een gift. Anders betaal je terug."
- p4 "Lening en collegegeldkrediet: altijd terugbetalen, met rente."
- p5 "Stop je in je 1e jaar? Stopt je studiefinanciering voor 1 februari? Dan betaal je de beurs en het reisproduct van dat jaar meestal niet terug. Er gelden voorwaarden."

**Moeilijke woorden (plain):** "Prestatiebeurs: geld dat eerst een lening is. Haal je op tijd je diploma, dan hoef je het niet terug te betalen. Gift: geld dat je niet terugbetaalt. Ov-schuld: geld dat je DUO moet betalen als je reist zonder recht op je reisproduct."

### Vraag 4.1 (id: gift, kind: pick, docs: overzicht)
- Prompt: "Je haalt je diploma binnen 10 jaar. Wat wordt dan een gift?"
- Options:
  - a "Alles, ook de lening"
  - b "Alleen het studentenreisproduct"
  - c "De basisbeurs, de aanvullende beurs en het studentenreisproduct"
- Correct: c
- Retry pointer: p1 to p3, and p4 "altijd terugbetalen"
- Nudge: "Kijk welke regels het woord gift hebben. Welke regel niet?"
- Hint: "Lees regel 1 tot en met 4 van het overzicht. Waar staat het woord gift?"
- Explanation: "Basisbeurs, aanvullende beurs en reisproduct worden een gift met een diploma binnen 10 jaar. De eerste 5 maanden aanvullende beurs zijn altijd een gift."
- Sources: duoGift, roHo, roReis

### Vraag 4.2 (id: mila, kind: pick, docs: app)
- Prompt: "Mila reist nog steeds met haar studentenreisproduct. Mag dat?"
- Options:
  - a "Ja, tot het eind van het studiejaar"
  - b "Ja, zolang haar ov-kaart werkt"
  - c "Nee. Ze moest het in januari al stopzetten. Nu krijgt ze een ov-schuld"
- Correct: c
- Retry pointer: a1 "Ik ben op 20 december gestopt" and a3 "Mijn ov-kaart gebruik ik nog gewoon."
- Nudge: "Het reisproduct hoort bij je studiefinanciering. Mila heeft die stopgezet."
- Hint: "Lees bij Moeilijke woorden wat een ov-schuld is."
- Explanation: "Mila stopte op 20 december. Vanaf 1 januari mocht ze niet meer reizen met haar reisproduct. Ze moest het uiterlijk 10 januari stopzetten bij een ophaalautomaat, bijvoorbeeld op het station. Ze reist toch nog. Daarom krijgt ze een ov-schuld. Haar beurs en reisproduct van dit jaar hoeft ze misschien niet terug te betalen. Kijk naar regel 5 van het overzicht."
- Sources: duoStop, duoOvschuld (both DUO; see "Onzeker"); regel 5: duoEerstejaars

### Vraag 4.3 (id: termijn, kind: pick, docs: overzicht)
- Prompt: "Sem doet een hbo-studie van 4 jaar. Hij haalt zijn diploma pas na 11 jaar. Hij had geen bijzondere reden voor die vertraging, zoals een ziekte. Wat geldt dan voor zijn basisbeurs?"
- Options:
  - a "Het wordt een gift, want hij heeft een diploma"
  - b "Het wordt een gift, want zijn studie duurt 4 jaar"
  - c "Hij betaalt het terug, met rente, want het duurde langer dan 10 jaar"
- Correct: c
- Retry pointer: p1 "diploma binnen 10 jaar? Dan wordt het een gift. Anders betaal je terug."
- Nudge: "Lees regel 1 van het overzicht. Haalde Sem zijn diploma op tijd?"
- Hint: "Vergelijk de 11 jaar van Sem met het getal in regel 1 van het overzicht."
- Explanation: "Een diploma telt alleen binnen 10 jaar. Sem deed er 11 jaar over. Dan betaalt hij zijn basisbeurs terug, met rente. Loop je vertraging op door een ziekte of beperking? Dan kan DUO soms een uitzondering maken."
- Sources: duoGift, roHo, roReis, duoHoelang
- Note: application case (G4 fix 7). The overview gives the rule; the pupil has to compare 11 with 10. Distractor b uses the study length 4, as before. Round 2: the prompt rules out special circumstances (Wsf 2000 art. 5.16 lets the term grow), and the explanation names the exception in DUO's words.

### Cijfer kamer 4
- Clue: "Het 4e cijfer van het slot is het aantal regels in het overzicht met het woord gift."
- Digit: **3** (p1 basisbeurs, p2 aanvullende beurs, p3 reisproduct; p4 and p5 do not contain "gift").
- Remember: "Je beurs is eerst een lening. Haal binnen 10 jaar je diploma, dan wordt hij een gift. Stop je? Zet je reisproduct op tijd stop."

---

## Start- en eindcheck: twee parallelle vormen, A en B (elk 4 vragen, één per kamer, enkele keuze, score 0 tot 4)

Before the clock: no feedback. Each question works without a document. Question n of form A and question n of form B test the same rule at the same difficulty, each with its own situation. Neither form repeats a room question word for word (G3 "all lessons" row on start and end check). No form uses an amount, so the forms do not change when the amounts change. Use: a pair gets one form before the clock starts and the other after the lock opens; counterbalance as in ESC-BIJBAAN (odd pairs A before and B after, even pairs B before and A after). If only one form is used: after the lock, reverse order, options turned one place.

### Vorm A

| # | Kamer | Vraag | Opties | Goed antwoord | Regel en bron |
|---|---|---|---|---|---|
| C1 | 1 Aanvragen | "Je broer gaat na de zomer naar het hbo. Hij wil studiefinanciering. Waar vraagt hij die aan?" | Bij de hogeschool, bij zijn inschrijving; In Studielink, bij zijn aanmelding; Bij DUO, in Mijn DUO | Bij DUO, in Mijn DUO | Studiefinanciering vraag je aan bij DUO (duoAanvragen, nlwwAanvragen) |
| C2 | 2 Thuis of uit? | "Sara heeft een huurcontract voor een kamer. Bij de gemeente staat ze nog op het adres van haar ouders. Is ze voor DUO meestal uitwonend?" | Ja, want ze heeft een huurcontract; Ja, als ze meer dan de helft van de week op haar kamer slaapt; Nee, want ze staat nog op het adres van haar ouders ingeschreven | Nee, want ze staat nog op het adres van haar ouders ingeschreven | Uitwonend: ingeschreven op een ander adres dan je ouders, en daar wonen (duoUitwonend, wsf15) |
| C3 | 3 Extra geld of lenen? | "Je leent elke maand geld bij DUO. Na vier jaar haal je je diploma. Wat geldt dan voor die lening?" | Het wordt een gift, net als de basisbeurs; Je betaalt alleen de helft terug; Je betaalt het terug, met rente | Je betaalt het terug, met rente | Een lening betaal je altijd terug, met rente (duoGift, roHo) |
| C4 | 4 Gift of terugbetalen? | "Noor doet een studie van 3 jaar aan de universiteit. Ze haalt haar diploma na 9 jaar. Wordt haar basisbeurs een gift?" | Nee, want ze deed er langer over dan 3 jaar; Nee, want ze deed er langer over dan 7 jaar; Ja, want ze haalde haar diploma binnen 10 jaar | Ja, want ze haalde haar diploma binnen 10 jaar | Prestatiebeurs wordt een gift met een diploma binnen 10 jaar (duoGift, roHo, roReis) |

### Vorm B

| # | Kamer | Vraag | Opties | Goed antwoord | Regel en bron |
|---|---|---|---|---|---|
| B1 | 1 Aanvragen | "Je zus begint volgend jaar aan de universiteit. Ze wil goedkoop met de trein naar college. Waar vraagt ze het studentenreisproduct aan?" | Bij de universiteit, bij haar inschrijving; In Studielink, bij haar aanmelding; Bij DUO, in Mijn DUO | Bij DUO, in Mijn DUO | Het studentenreisproduct vraag je aan bij DUO (roReis, duoOv, duoReisAanvragen) |
| B2 | 2 Thuis of uit? | "Je vriendin Lisa slaapt vier nachten per week op kamers. Bij de gemeente staat ze nog op het adres van haar ouders. Is ze voor DUO meestal uitwonend?" | Ja, want ze slaapt meer dan de helft van de week op kamers; Ja, als ze een huurcontract heeft; Nee, want ze staat nog op het adres van haar ouders ingeschreven | Nee, want ze staat nog op het adres van haar ouders ingeschreven | Uitwonend: ingeschreven op een ander adres dan je ouders, en daar wonen (duoUitwonend, wsf15) |
| B3 | 3 Extra geld of lenen? | "Je leent elke maand collegegeldkrediet. Je haalt je diploma op tijd. Wat geldt dan voor dat collegegeldkrediet?" | Het wordt een gift, net als de basisbeurs; Je betaalt alleen de helft terug; Je betaalt het terug, met rente | Je betaalt het terug, met rente | Collegegeldkrediet betaal je altijd terug, met rente (duoGift, roHo) |
| B4 | 4 Gift of terugbetalen? | "Tom doet een studie van 4 jaar. Hij doet er langer over en haalt zijn diploma na 8 jaar. Wordt zijn basisbeurs een gift?" | Nee, want hij deed er langer over dan 4 jaar; Nee, want hij deed er langer over dan 7 jaar; Ja, want hij haalde zijn diploma binnen 10 jaar | Ja, want hij haalde zijn diploma binnen 10 jaar | Prestatiebeurs wordt een gift met een diploma binnen 10 jaar (duoGift, roHo, roReis) |

Parallel checks: C1 and B1 ask "waar aanvragen" for studiefinanciering and for the reisproduct, with the same distractors (the school, Studielink). C2 and B2 apply the uitwonend rule to a person still registered at the parents' address, with the same two distractors (huurcontract, more than half the week), each in swapped roles. C3 and B3 apply "altijd terugbetalen" to a lening and to collegegeldkrediet. C4 and B4 apply the 10-year rule to a positive case with the study length and 7 years (7 years of studiefinanciering for a study of 4 years or shorter, duoBedragen "leenfase") as distractors. Room question 4.3 is a negative case (11 years), so no check item repeats a room question. Options are listed with the right answer last; on screen they appear in the fixed shuffle, so position is never a pattern.

Score: 1 point per right answer, 0 to 4, before and after.

---

## Lesplan voor de docent (45 minuten)

| Min | Onderdeel | Wat je doet |
|---|---|---|
| 0 tot 5 | Uitleg en inloggen | Laat het docentenscherm zien. Leerlingen openen de link en werken met z'n tweeën op één scherm. |
| 5 tot 7 | Startcheck | Elk tweetal beantwoordt vier vragen (vorm A of B) voordat de klok start. Geef geen hints. |
| 7 tot 33 | Escape | Start de klastimer. Tweetallen spelen vier kamers en schrijven elk cijfer op. Klaar voor de tijd? Laat het tweetal de gespreksvragen op het eindscherm bespreken. |
| 33 | Stop | Zeg: stop. Lees de cijfers van het slot voor van je geprinte antwoordblad. Tweetallen die nog bezig zijn, stoppen ook. Iedereen gaat door met de eindcheck en het als-dan-plan. |
| 33 tot 35 | Eindcheck | De andere vorm: vier vragen over dezelfde regels. Daarna ziet elk tweetal wat het goed had, voor en na. |
| 35 tot 39 | Nabespreken | Vraag met handopsteken: wie had bij de startcheck 3 of 4 goed? En bij de eindcheck? Vraag welke kamer het lastigst was en begin daar. Gebruik de gespreksvragen. Vraag naar ervaringen, niet naar bedragen thuis. |
| 39 tot 41 | Afsluiten | Laat twee of drie leerlingen hun als-dan-plan hardop zeggen. Stel daarna de slotvraag. |
| 41 tot 45 | Reserve | 4 minuten speling. Gebruik ze als inloggen of nabespreken langer duurt. |

Total 45 minutes, of which 4 minutes buffer. Materials: a device per pair, pen and paper for the digits, a digital board or projector. Care point: room 3 is about parents' income. Do not ask pupils about their own family's money in class. The code of the slot is in the Antwoordblad; do not project it before minute 33. A wrong option is struck out, and after a mistake a pair gets a tip and one more try, after which the pair sees the right answer; the end screen shows how many were right the first time.

Build note (engine, not this spec): pairs that are still in a room at minute 33 cannot reach the end check on the pupil screen yet (G3 "all lessons", `src/engine.js`). Until the engine has a skip to the end check, those pairs do the end check on paper from the Antwoordblad.

Voor de docent, per kamer:
- Kamer 1: Studiefinanciering en reisproduct vraag je aan in Mijn DUO, met DigiD. DUO raadt aan om dat "het liefst minstens 8 weken" voor de start te doen. Voor 1 september 2027 is dat 7 juli 2027. Dat is een advies, geen harde termijn. Studiefinanciering kan voor het lopende studiejaar met terugwerkende kracht, het reisproduct niet. Nog niet geslaagd? Vraag toch aan voor de opleiding die je wilt doen. Voor hbo en universiteit is er geen minimumleeftijd. Voor mbo moet je 18 zijn voor een beurs of lening. Het reisproduct koppel je aan een persoonlijke OV-chipkaart, op studentenreisproduct.nl. Je krijgt daarvoor eerst een welkomstmail van studentenreisproduct.nl. Daarna zet je het reisproduct bij een ophaalautomaat op de kaart.
- Kamer 2: Uitwonend = ingeschreven op een ander adres dan je ouders en daar wonen. Er zijn uitzonderingen, bijvoorbeeld als de gemeente weigert in te schrijven. De woonsituatie zet je zelf in Mijn DUO; DUO kijkt naar de 1e van de maand. DUO controleert de woonsituatie. De basisbeurs is heel 2027 € 335,10 uitwonend en € 134,45 thuiswonend per maand.
- Kamer 3: Aanvullende beurs hangt af van het inkomen van de ouders en het aantal broers en zussen. Eén keer aanvragen; DUO rekent elk jaar opnieuw. Minder of geen aanvullende beurs? Dan kun je het verschil extra lenen. Betaal je instellingscollegegeld? Dan is het collegegeldkrediet van september tot en met december 2027 hoogstens € 1.154,60 per maand. Lening en collegegeldkrediet betaal je altijd terug, met rente vanaf het moment dat je leent. Rente 2027: 2,70% voor de meeste studenten (SF35), 3,28% voor een kleinere groep (SF15). In 2026 was het 2,33% en 2,29%.
- Kamer 4: Prestatiebeurs: gift met diploma binnen 10 jaar; de eerste 5 maanden aanvullende beurs zijn altijd een gift. De diplomatermijn van tien jaar begint bij de eerste maand waarin je studiefinanciering voor hbo of universiteit ontvangt. Ook een studentenreisproduct telt als studiefinanciering. Door bijzondere omstandigheden, zoals ziekte of een beperking, kan de termijn langer worden. Eerstejaarsregeling: krijg je voor het eerst prestatiebeurs voor hbo of universiteit, kom je van de middelbare school en stopt je studiefinanciering voor 1 februari? Dan betaal je basisbeurs, aanvullende beurs en reisproduct van dat jaar niet terug. Voorwaarde is ook dat je in hetzelfde studiejaar niet opnieuw studiefinanciering voor hbo of universiteit krijgt. Dit kan één keer. Mila stopte op 20 december 2027; haar studiefinanciering stopt per 1 januari 2028. Mila voldoet aan de eerstejaarsregeling, mits ze in hetzelfde studiejaar niet opnieuw studiefinanciering voor hbo of universiteit krijgt. Een eventuele gewone lening moet ze wel terugbetalen. Reisproduct: vanaf de 1e van de maand na het uitschrijven niet meer reizen, uiterlijk de 10e stopzetten. Ov-schuld in 2026: € 96,09 per halve maand in de 1e maand, daarna € 192,21 per halve maand. De bedragen voor 2028 zijn nog niet bekend.

## Antwoordblad

| Kamer | Vraag | Goed antwoord |
|---|---|---|
| 1 | Waar aanvragen | Bij DUO, in Mijn DUO |
| 1 | Goedkoop reizen | Het studentenreisproduct |
| 1 | Soorten reisproduct | Een weekabonnement; een weekendabonnement |
| 1 | **Cijfer** | **2** |
| 2 | Basisbeurs uitwonend 2027 | € 335,10 |
| 2 | Verschil met thuiswonend | € 200,65 |
| 2 | Wanneer uitwonend | Ander adres dan je ouders bij de gemeente, en daar echt wonen |
| 2 | **Cijfer** | **0** |
| 3 | Aanvullende beurs hangt af van | Het inkomen van je ouders |
| 3 | Hoogste aanvullende beurs vanaf september 2027 | € 507,10 |
| 3 | Altijd terugbetalen | De lening |
| 3 | **Cijfer** | **7** |
| 4 | Gift met diploma | De basisbeurs, de aanvullende beurs en het studentenreisproduct |
| 4 | Mila en haar ov | Nee. Ze moest het in januari al stopzetten. Nu krijgt ze een ov-schuld |
| 4 | Sem, diploma na 11 jaar | Hij betaalt het terug, met rente, want het duurde langer dan 10 jaar |
| 4 | **Cijfer** | **3** |
| | **Code** | **2073** |

Antwoorden start- en eindcheck (voor `teacher.answers.after`; volledige tekst, zonder letters):
"Start- en eindcheck vorm A: C1 Bij DUO, in Mijn DUO. C2 Nee, want ze staat nog op het adres van haar ouders ingeschreven. C3 Je betaalt het terug, met rente. C4 Ja, want ze haalde haar diploma binnen 10 jaar. Vorm B: B1 Bij DUO, in Mijn DUO. B2 Nee, want ze staat nog op het adres van haar ouders ingeschreven. B3 Je betaalt het terug, met rente. B4 Ja, want hij haalde zijn diploma binnen 10 jaar."

## Nabespreken

Drie gespreksvragen:
1. "Ga je na deze school studeren? Blijf je thuis wonen of ga je op kamers? Wat weegt voor jou het zwaarst?"
2. "Lenen voor je studie: wanneer vind jij dat slim, en wanneer niet? Waar zou je het geld voor gebruiken?"
3. "Wie kan jou helpen met DUO en Mijn DUO? Wat wil je zelf leren regelen?"

Slotvraag: "Noem twee dingen die je bij DUO regelt voordat je gaat studeren, en één ding dat je doet als je stopt."

Als-dan-plan (prompt):
"Maak je eigen als-dan-plan en zeg het tegen je buur. Kies een situatie en een actie.
Als ik ... (me heb aangemeld voor een opleiding / op kamers ga / stop met mijn studie),
dan ... (vraag ik in Mijn DUO studiefinanciering, de aanvullende beurs en mijn reisproduct aan / schrijf ik me in bij mijn nieuwe gemeente en zet ik mijn woonsituatie in Mijn DUO / zet ik mijn reisproduct stop bij een ophaalautomaat op het station).
Zet een herinnering in je telefoon."

---

## Brontabel

| Key | Rule or amount (as used) | Source 1 | Source 2 | Checked | Valid until |
|---|---|---|---|---|---|
| duoAanvragen / roReis / nlwwAanvragen | Studiefinanciering and the studentenreisproduct are applied for at DUO; 8 weeks advice; terugwerkende kracht (not for the reisproduct). | [DUO, aanvragen studiefinanciering](https://duo.nl/particulier/studiefinanciering/aanvragen.jsp) ("Log in op Mijn DUO om studiefinanciering aan te vragen"; "Het liefst minstens 8 weken voordat u er recht op hebt"; updated 5 Nov 2026) | [Rijksoverheid, recht op een reisproduct voor studenten](https://www.rijksoverheid.nl/themas/onderwijs/studiefinanciering/vraag-en-antwoord/studiefinanciering/recht-reisproduct-studenten) ("U kunt een studentenreisproduct aanvragen via de Dienst Uitvoering Onderwijs (DUO)") and [Netherlands Worldwide (Ministerie van Buitenlandse Zaken), how to apply for student finance](https://netherlandsworldwide.nl/student-finance-abroad/how-apply) ("You can apply for student finance ... at Mijn DUO"; "Log in to Mijn DUO using your DigiD") | DUO and Rijksoverheid 6 Nov 2026 (this revision); Netherlands Worldwide 6 Nov 2026 (check A, not re-opened) | No set date; check Jan 2027 |
| duoReisAanvragen | The reisproduct needs a persoonlijke OV-chipkaart; after the application you link the card on studentenreisproduct.nl (koppelen), then put the reisproduct on the card at an ophaalautomaat. | [DUO, aanvragen studentenreisproduct](https://duo.nl/particulier/ov-en-reizen/aanvragen.jsp) (the old address /particulier/aanvragen-studentenreisproduct.jsp redirects here; re-read 7 Nov 2026: "Geef de gegevens van uw persoonlijke OV-chipkaart door aan studentenreisproduct.nl. Dit heet koppelen"; welcome mail "van studentenreisproduct.nl"; "u hebt een persoonlijke OV-chipkaart nodig"; "Ga naar een ophaalautomaat en zet het studentenreisproduct op uw OV-chipkaart"; updated 5 Nov 2026) | none (DUO only; see Onzeker) | 6 Nov 2026 | No set date; check Jan 2027 (DUO announces a move to OVpay) |
| roReis / duoOv | The studentenreisproduct is a week or a weekend subscription; free or discounted travel. | [Rijksoverheid, recht op een reisproduct voor studenten](https://www.rijksoverheid.nl/themas/onderwijs/studiefinanciering/vraag-en-antwoord/studiefinanciering/recht-reisproduct-studenten) ("een weekabonnement of weekendabonnement") | [DUO, ov](https://duo.nl/particulier/studiefinanciering/ov.jsp) ("kiest u voor een week- of een weekendabonnement"; updated 5 Nov 2026) | 6 Nov 2026 | No set date; check Jan 2027 |
| duoVoorwaarden | Basisbeurs only for students who meet the conditions; no minimum age for hbo and wo; mbo 18 for beurs and lening. | [DUO, voorwaarden](https://duo.nl/particulier/studiefinanciering/voorwaarden.jsp) ("Voor hbo en universiteit geldt geen minimumleeftijd"; updated 5 Nov 2026) | [Rijksoverheid, studiefinanciering hbo en universiteit](https://www.rijksoverheid.nl/themas/onderwijs/studiefinanciering/studiefinanciering-hbo-universiteit) ("moeten voldoen aan een aantal voorwaarden voor studiefinanciering"; age rule not on this page) | 6 Nov 2026 | No set date; check Jan 2027 |
| duoBedragen | Hbo/wo 2027 per month: basisbeurs € 134,45 thuis, € 335,10 uit; aanvullende beurs at most € 507,10; gewone rentedragende lening at most € 325,44; collegegeldkrediet (wettelijk collegegeld) € 224,50 Jan to Aug 2027 and € 230,92 Sep to Dec 2027; instellingscollegegeld at most € 1.154,60 Sep to Dec 2027; less or no aanvullende beurs: extra lenen; 7 years of studiefinanciering for a study of 4 years or shorter. | [DUO, bedragen studiefinanciering](https://duo.nl/particulier/studiefinanciering/bedragen.jsp) (same page as /particulier/bedragen-studiefinanciering-en-tegemoetkoming.jsp; tables "Januari tot en met augustus 2027" and "September tot en met december 2027"; "Krijgt u geen of minder aanvullende beurs? Dan kunt u het ontbrekende bedrag extra lenen"; updated 5 Nov 2026) | none for 2027: the [DUO handout](https://www.duo.nl/zakelijk/images/handout-bedragen-studiefinanciering-ho.pdf) still shows "Bedragen 2026" (opened 6 Nov 2026) | 6 Nov 2026 | 31 Dec 2027 (all amounts used; collegegeldkrediet € 230,92 is for Sep to Dec 2027) |
| duoUitwonend / wsf15 | Uitwonend: registered at the municipality at an address that is not the parents' address, and living there; exceptions exist. | [DUO, uitwonend](https://duo.nl/particulier/studiefinanciering/uitwonend.jsp) ("Er zijn uitzonderingen mogelijk"; "De gemeente weigert u in te schrijven") | [Wet studiefinanciering 2000, art. 1.5 lid 1](https://wetten.overheid.nl/jci1.3:c:BWBR0011453&hoofdstuk=1&artikel=1.5) (version from 1 Aug 2026) | DUO 6 Nov 2026 (this revision); wetten.overheid.nl 6 Nov 2026 by check A, not reachable in this revision | No set date; check Jan 2027 |
| duoAanvullend / roHo / duoAanvullendHoeveel | The aanvullende beurs depends on the parents' income (and the number of brothers and sisters); DUO advises always applying. | [DUO, aanvullende beurs](https://duo.nl/particulier/studiefinanciering/aanvullende-beurs.jsp) ("hangt af van het inkomen van uw ouders"; updated 5 Nov 2026) and [DUO, aanvullende beurs studiefinanciering](https://duo.nl/particulier/aanvullende-beurs-studiefinanciering/index.jsp) ("het inkomen van uw ouders en het aantal broers en zussen") | [Rijksoverheid, studiefinanciering hbo en universiteit](https://www.rijksoverheid.nl/themas/onderwijs/studiefinanciering/studiefinanciering-hbo-universiteit) ("Er wordt daarbij gekeken naar het inkomen van de ouders"; modified 10 Aug 2026) | 6 Nov 2026 | No set date; check Jan 2027 |
| duoGift / roHo | A lening and collegegeldkrediet are always paid back, with interest. | [DUO, gift of terugbetalen](https://duo.nl/particulier/studiefinanciering/gift-of-terugbetalen.jsp) ("Een rentedragende lening of collegegeldkrediet moet u altijd terugbetalen"; updated 5 Nov 2026) | Rijksoverheid, studiefinanciering hbo en universiteit (as above: "DUO berekent rente over de lening"; "Na het afstuderen moet de student de lening terugbetalen") | 6 Nov 2026 | No set date |
| duoRente | Interest 2027: 2,70% (SF35), 3,28% (SF15); 2026: 2,33% and 2,29%. Teacher note only. | [DUO, rente voor studenten](https://duo.nl/particulier/rente/rente-voor-studenten.jsp) ("Het percentage daarvoor is 2,70% in 2027") | none (DUO only) | 6 Nov 2026 | 31 Dec 2027 |
| duoGift / roHo / roReis | Prestatiebeurs: basisbeurs, aanvullende beurs and reisproduct become a gift with a diploma within 10 years; otherwise repaid with interest; the first 5 months of aanvullende beurs are always a gift. The 10 years start in the first month of studiefinanciering for hbo or wo; a reisproduct alone also counts; special circumstances can extend the term (teacher note; 4.3 rules them out). | DUO, gift of terugbetalen (as above: "Pas als u binnen 10 jaar uw diploma haalt"; "inclusief deze opgebouwde rente") and DUO, aanvullende beurs ("de eerste 5 maanden voor hbo of universiteit hoeft u nooit terug te betalen") | Rijksoverheid, studiefinanciering hbo en universiteit ("de eerste 5 maanden aanvullende beurs zijn altijd een gift"; "binnen 10 jaar afstuderen") and Rijksoverheid reisproduct ("Behaalt u binnen 10 jaar uw diploma, dan is het reisproduct een gift"); law: [Wet studiefinanciering 2000](https://wetten.overheid.nl/BWBR0011453/2026-08-01) (version from 1 Aug 2026, read on 7 Nov 2026 as the official BWB XML of BWBR0011453): art. 5.5 "Deze periode vangt aan op de eerste dag van de maand waarover voor het eerst studiefinanciering is toegekend voor het volgen van hoger onderwijs"; art. 5.1: the prestatiebeurs includes "een reisvoorziening"; art. 5.16: the term is extended by the length of temporary special circumstances, or by 5 years on request for structural ones | 6 Nov 2026 (start, reisproduct and extension: 7 Nov 2026) | No set date; check Jan 2027 |
| duoHoelang | The 10-year diplomatermijn starts in the first month you get money or a reisproduct; the reisproduct is part of studiefinanciering; with delay through illness or a disability DUO can sometimes make an exception. | [DUO, hoelang recht op het studentenreisproduct](https://duo.nl/particulier/ov-en-reizen/hoelang-recht.jsp) ("Het reisproduct hoort bij studiefinanciering"; "De 10 jaar gaan in vanaf de 1e maand dat u geld of reisproduct krijgt"; "Soms kan dan een uitzondering worden gemaakt op de regels voor studiefinanciering en het studentenreisproduct"; updated 13 Oct 2026) | Wet studiefinanciering 2000, art. 5.1, 5.5 and 5.16 (as in the row above) | 7 Nov 2026 | No set date; check Jan 2027 |
| duoEerstejaars | Eerstejaarsregeling: first prestatiebeurs for hbo/wo, from secondary school, studiefinanciering stopped before 1 February: beurs and reisproduct of that year not repaid; condition: no new studiefinanciering for hbo/wo over the same study year (DUO: "niet opnieuw prestatiebeurs"); once; lening always repaid. | [DUO, stoppen in uw 1e jaar](https://duo.nl/particulier/opleiding-stoppen-of-wijzigen/stoppen-in-je-eerste-jaar.jsp) ("U hoeft uw prestatiebeurs (basisbeurs, aanvullende beurs en studentenreisproduct) niet terug te betalen als uw studiefinanciering stopt voor 1 februari") and [DUO, studiefinanciering stopzetten](https://duo.nl/particulier/studiefinanciering-stopzetten.jsp) ("Zet uw studiefinanciering uiterlijk stop op de 1e dag van de maand"; example "uitschrijft per 15 juni ... vanaf 1 juli geen recht") | [Wet studiefinanciering 2000, art. 5.10](https://wetten.overheid.nl/BWBR0011453/2026-08-01) (read on 7 Nov 2026 as the official BWB XML: "en hij niet over datzelfde studiejaar opnieuw studiefinanciering voor het volgen van hoger onderwijs krijgt toegekend") | 6 Nov 2026 | No set date; check Jan 2027 |
| duoStop / duoOvschuld | No right any more: from the 1st of the month after uitschrijving (later than the 1st) no travel; stop at an ophaalautomaat by the 10th; travelling after that gives an ov-schuld. | [DUO, studentenreisproduct stopzetten](https://duo.nl/particulier/studentenreisproduct-stopzetten.jsp) ("U mag vanaf de eerste van deze maand al niet meer reizen"; "uiterlijk op de 10e dag van deze maand stopzetten"; "Wordt u later uitgeschreven? Dan hebt u vanaf de volgende maand geen recht meer") | [DUO, wat is een ov-schuld](https://duo.nl/particulier/ov-schuld-terugbetalen/index.jsp) ("Gebruikt u het reisproduct toch? Dan krijgt u een ov-schuld"; amounts 2026: € 96,09 and € 192,21 per halve maand) | 6 Nov 2026 | Rule: no set date. Ov-schuld amounts (teacher only) valid for 2026; 2027 and 2028 amounts not published |

## Onzeker

- **2027 amounts rest on one DUO page** (bedragen studiefinanciering, update 5 Nov 2026). The DUO handout still shows 2026. The coordinator decided to use the 2027 amounts. At the January 2027 check, look for a 2027 handout or a second source and update this table.
- The ov-schuld rule (4.2) and the reisproduct steps (1.2 explanation, folder f3) rest on DUO pages only, one organisation. The eerstejaarsregeling (overview p5, 4.2 explanation, teacher note) now also has Wsf 2000 art. 5.10 (round 2). Rijksoverheid only links to DUO's stop page. None of these is the right answer of a question except 4.2. If two organisations are required for 4.2, swap 4.2 for a second prestatiebeurs question.
- Eerstejaarsregeling for Mila: the DUO page says studiefinanciering must stop "voor 1 februari". Mila's dates were moved to 20 and 21 December 2027, so her studiefinanciering stops per 1 January 2028 and the case is clear. With the old date (20 January) it stops per 1 February, which DUO's wording does not settle.
- DigiD for Mijn DUO: two sources, the DUO aanvragen page and Netherlands Worldwide. DigiD is in an explanation and the remember line, not asked.
- The Rijksoverheid checklist studeren does not name DUO. It is no longer a source.
- Not researched in time and left out: the parents' income year DUO uses (peiljaar), repayment rules for the current cohort (term, draagkracht), ov-schuld amounts for 2027 and 2028.
- Mbo amounts differ (DUO lists them separately); this lesson is for hbo and wo only.

---

## Changelog

Item numbers: A = rows of `factcheck_A_studiefinanciering.md` in table order (A1 to A22). B = rows of `qa/checkB/studiefinanciering.md` in table order (B1 = "RISK (decision)", B18 = "ERROR (metadata)"). G3-S = rows of the Studiefinanciering table in `qa/gate_G3_G8.md` (S1 = `teacher.answers.after`, S8 = answer sheet "Wanneer uitwonend"); G3-L = rows of its "All three lessons" table (L1 = pupil flow, L13 = start and end check vs room questions). G4-F = the numbered "Fixes" list in `qa/gate_G4_playtest.md`; G4-R1 to R4 = its studiefinanciering room rows. R2-1 to R2-4 = the numbered findings of `qa/checkB/round2/studiefinanciering.md`.

Round 2 (ChatGPT, 7 Nov):
- R2-1 (RISK, folder f3, explanation 1.2, teacher note Kamer 1; follows B4): applied adjusted. DUO "Aanvragen, studentenreisproduct" read on 7 Nov 2026 (https://duo.nl/particulier/ov-en-reizen/aanvragen.jsp, update 5 Nov 2026): "Geef de gegevens van uw persoonlijke OV-chipkaart door aan studentenreisproduct.nl. Dit heet koppelen", then "Ga naar een ophaalautomaat". f3 is now "Na je aanvraag geef je de gegevens van je persoonlijke OV-chipkaart door op studentenreisproduct.nl. Daarna zet je het reisproduct bij een ophaalautomaat op je kaart." Explanation 1.2 says the same; the teacher note adds the welcome mail. Own wording instead of "koppel je je": "koppelen" is not explained to pupils. The duoReisAanvragen link now points to this page (the old address redirects to it). No answer or digit uses f3.
- R2-2 (RISK, teacher note Kamer 4, Mila): applied adjusted. DUO "Stoppen in uw 1e jaar" (re-read 7 Nov 2026) lists "U krijgt in hetzelfde studiejaar niet opnieuw prestatiebeurs voor een opleiding aan hbo of universiteit" among the conditions, and "Een rentedragende lening moet u altijd terugbetalen". The law is wider: Wsf 2000 art. 5.10 (BWB XML of BWBR0011453, version from 1 Aug 2026; https://wetten.overheid.nl/BWBR0011453/2026-08-01) says "niet over datzelfde studiejaar opnieuw studiefinanciering voor het volgen van hoger onderwijs". So the note now says "studiefinanciering", not "prestatiebeurs": "Mila voldoet aan de eerstejaarsregeling, mits ze in hetzelfde studiejaar niet opnieuw studiefinanciering voor hbo of universiteit krijgt. Een eventuele gewone lening moet ze wel terugbetalen." The old "als ze dit studiejaar niet opnieuw begint" is gone. duoEerstejaars row now has Wsf art. 5.10 as second source; Onzeker updated.
- R2-3 (RISK, V4.3 Sem): applied adjusted. Wsf 2000 art. 5.16 (same XML): the term is extended by the length of temporary special circumstances, or by 5 years on request for structural ones (functiebeperking, chronische ziekte). DUO "Hoelang recht, studentenreisproduct" (https://duo.nl/particulier/ov-en-reizen/hoelang-recht.jsp, update 13 Oct 2026) and "Gift of terugbetalen": "Soms kan dan een uitzondering worden gemaakt". Prompt now adds "Hij had geen bijzondere reden voor die vertraging, zoals een ziekte." (the checker's "diplomatermijn verlengt" is too hard for B1). Explanation adds "Loop je vertraging op door een ziekte of beperking? Dan kan DUO soms een uitzondering maken." New source duoHoelang. Answer still c.
- R2-4 (RISK, teacher note Kamer 4 and Onzeker; reopens B15): applied. DUO hoelang-recht: "De 10 jaar gaan in vanaf de 1e maand dat u geld of reisproduct krijgt" and "Het reisproduct hoort bij studiefinanciering". Wsf 2000 art. 5.5: the term starts on "de eerste dag van de maand waarover voor het eerst studiefinanciering is toegekend voor het volgen van hoger onderwijs"; art. 5.1: the prestatiebeurs includes "een reisvoorziening". The DUO gift-of-lening page named by the checker (https://duo.nl/particulier/diploma-behaald/gift-of-lening.jsp) does not state the start for hbo; hoelang-recht does. Teacher note Kamer 4 adds the checker's two sentences and one on extension. B15 rejection withdrawn; the Onzeker bullet on the start of the term is deleted; prestatiebeurs row in the Brontabel updated.
- Digits, answers, options, check forms and code unchanged: **2073**.

6 november 2026 (third revision, gate round 2, `qa/gate_round2.md`):
- Lesplan row Stop: the digits "2, 0, 7, 3" are no longer on the open, projected plan (they contradicted the care point). New text: "Lees de cijfers van het slot voor van je geprinte antwoordblad."
- Lesplan rows Escape and Afsluiten (shared finding): the plan is asked for once, in the Stop row. Escape row no longer says "en elk een als-dan-plan maken"; Afsluiten now "Laat twee of drie leerlingen hun als-dan-plan hardop zeggen. Stel daarna de slotvraag."
- Voor de docent, Kamer 1: "DUO raadt aan dat ..." now "DUO raadt aan om dat ... te doen" (a full Dutch sentence).
- Lead added under the code (G3-S6): "thuis of uit wonen" now "thuis of op kamers wonen"; the landing card uses the same text.
- Vraag 1.2 hint: "Welk antwoord is iets wat je bij DUO aanvraagt?" (no option mentions a shop).
- Als-dan-plan: "toegelaten ben tot een opleiding" now "me heb aangemeld voor een opleiding", in line with the teacher note (apply 8 weeks ahead, also before you are admitted).
- Vraag 2.3 option c shortened to "Als je bij de gemeente op een ander adres staat en daar woont", so the right answer is no longer the longest option (G4-F8). Answer still c.
- Materials: "a digital board or projector" (Dutch: "een digibord of beamer"). Care point 2, Dutch wording: "vóór minuut 33".
- Digits and code unchanged: **2073**. No check item changed.

6 november 2026 (revision 2):
- B1 (coordinator decision): switched to the published 2027 amounts, each verified on the DUO bedragen page: basisbeurs € 134,45 / € 335,10; aanvullende beurs € 507,10; lening € 325,44; collegegeldkrediet € 230,92 (Sep to Dec 2027; € 224,50 Jan to Aug 2027). Tables 2 and 3b, prompts, explanations, answer sheet and source table updated. 2.1 = € 335,10; 2.2 = € 200,65; 3.2 = € 507,10. Digits 2, 0, 7, 3; code **2073** (was 2413). Header validUntil 31 december 2027. Also resolves G3-S5, G4-R2, G4-R3 and G4-F6 (year mix).
- B2 (ERROR): basisbeurs gloss now "voor studenten die recht hebben op studiefinanciering" (DUO voorwaarden).
- B3 (RISK): mail s3 now "Regel op tijd de betaling van je collegegeld. Volg daarvoor onze instructies." No general date exists in the sources.
- B4 (RISK): verified on DUO aanvragen studentenreisproduct. Added to explanation 1.2, folder f3 and the teacher note; new source row duoReisAanvragen.
- B5 (RISK): verified on DUO voorwaarden. Applied as teacher note Kamer 1, not as pupil text (keeps room 1 short).
- B6 (RISK): verified. Room 2 intro and prompt 2.1 now speak about September 2027.
- B7 (RISK): verified (DUO uitwonend "Er zijn uitzonderingen mogelijk"). Prompt 2.3, C2 and B2 say "meestal"; explanation 2.3 names an exception.
- B8 (ERROR): verified. Table 3b says "Gewone lening, hoogstens" with a note on extra lenen.
- B9 (RISK): verified. Table row "Collegegeldkrediet bij wettelijk collegegeld"; gloss and teacher note on instellingscollegegeld (€ 1.154,60).
- B10 (RISK): verified on DUO aanvullende beurs studiefinanciering. Prompt 3.1 says "vooral"; explanation adds brothers and sisters.
- B11 (ERROR): verified. Overview p2 now says the first 5 months are always a gift.
- B12 (ERROR): verified on DUO stoppen in uw 1e jaar. Added overview p5, a sentence in explanation 4.2 and the teacher note. Mila's dates moved to 20 and 21 December 2027 so the case is unambiguous; answer 4.2 is still c.
- B13 (RISK): verified on DUO stopzetten (1st of the month, stop by the 10th). Explanation 4.2 now gives these terms for Mila's dates.
- B14 (RISK): rejected: question 4.3 was replaced by an application case (G4-F7), and the checks keep the source wording "binnen 10 jaar". The proposed wording is long and adds "normaal gesproken".
- B15 (RISK): rejected: the start of the diploma term is not stated on any DUO or Rijksoverheid page opened, and wetten.overheid.nl was not reachable. Not added (see Onzeker).
- B16 (RISK): verified. Teacher note Kamer 1 now says the 8 weeks are advice, not a deadline.
- B17 (RISK): verified on DUO rente. Teacher note Kamer 3 gives 2027 (2,70% SF35, 3,28% SF15) and 2026 (2,33%, 2,29%); new source row duoRente.
- B18 (ERROR, metadata): verified. DUO aanvullende beurs page now shows "Laatste update was op 05 november 2026". Source table updated (A13 had recorded 23 Oct 2026).
- G3-S1 (blocker): check key now lists the full Dutch answer text per form, with no letters; check tables have a "Goed antwoord" column in text.
- G3-S2: "ophaalautomaat" explained in room 1 and 4 glosses and explanation 4.2 ("bijvoorbeeld op het station"); plan option updated. Also G4-R4 and G4-F10.
- G3-S3: hints rewritten so they point to where to look: 1.1, 1.2, 1.3, 2.1, 2.2, 2.3, 3.1, 3.2, 3.3, 4.1, 4.2, 4.3. The reviewer's proposed hints for reizen and lening were not used as they are, because they still name or nearly name the answer.
- G3-S4: prompt 2.1 rewritten ("Vanaf september ben je uitwonend"); no tense mix.
- G3-S5: no longer needed; table 3b now shows September to December 2027.
- G3-S6 (`lead`): not in this spec; not applied.
- G3-S7: source brackets removed from the teacher notes; sources stay in the source table.
- G3-S8: answer sheet row now "Ander adres dan je ouders bij de gemeente, en daar echt wonen".
- G3-L2, L3, L4 and coordinator rule 3: lesson plan rebuilt: Escape 7 to 33, stop at minute 33 with the digits read out, everyone does the end check and plan, 4 minutes buffer, fast pairs use the debrief prompts; Nabespreken uses the reviewer's wording.
- G3-L5: plan notes that the code is in the Antwoordblad and must not be projected before minute 33. Moving it on the teacher screen is an engine change.
- G3-L1, L6, L7, L8, L9, L10: engine or teacher screen code, outside this spec. L1 noted as a build note in the lesson plan; L6 is covered by the full-text check key.
- G3-L11: plan now ends "Zet een herinnering in je telefoon."
- G3-L13: forms A and B rewritten as parallel cases; no check item repeats a room question. Also G4-F7 (second half) and G4-F8.
- G4-F1 and G4-F2: every clue now starts "Het ne cijfer van het slot is" and can be read or worked out from a document on the digit screen. Room 1 counts in folder line f2; room 4 counts overview lines with "gift".
- G4-F3 and G4-R1: added Document 1b (school folder) so 1.3 has a line to read; folder text uses only rules from the source table.
- G4-F7: room question 4.3 is now an application case (Sem, 11 years).
- G4-F10: "DUO raadt aan om hem altijd aan te vragen"; glosses for "ov-schuld" and "ophaalautomaat".
- G4-F12: lesson plan notes that pairs can find an answer by trying.
- G4-F11: duration label is in the engine or lesson file, not in this spec; not applied.
- Re-derivation: 335,10 min 134,45 = 200,65 (digit 0); 507,10 (digit 7); folder f2 gives 2 kinds (digit 2); overview p1 to p3 contain "gift" (digit 3). Code **2073**. Calendar: 10 May, 7 June, 5 July 2027, 20 December 2027 and 7 February 2028 are Mondays; 1 September 2027 is a Wednesday; 8 weeks before 1 September 2027 is 7 July 2027.

6 november 2026 (revision 1):
- A2 (ERROR, source table): the Rijksoverheid checklist studeren does not contain the quoted sentence or the word DUO. Source 2 of the row is replaced by Rijksoverheid, recht op een reisproduct voor studenten, and Netherlands Worldwide (Ministerie van Buitenlandse Zaken); the checklist is dropped as a source.
- A7 (RISK, 2027 amount): table note and explanation 2.1 gave the 2027 amount next to 2026. Superseded by B1 in revision 2.
- A10 (RISK, Remember line Kamer 2): now also says to set "uitwonend" in Mijn DUO.
- A13 and A22 (OK-with-note): DUO aanvullende beurs page date corrected to 23 Oct 2026. Superseded by B18 in revision 2.
- Start- en eindcheck: added Vorm B. Rewritten in revision 2 (G3-L13).
- Added the "Bedragen geldig voor" line. validUntil 31 december 2026 (A21). Changed to 31 december 2027 in revision 2.
