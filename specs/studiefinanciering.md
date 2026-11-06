# Escape "Studiefinanciering" (content spec, ID voorstel: ESC-DUO)

Bedragen geldig voor: kalenderjaar 2026 (DUO-bedragen hbo en wo; collegegeldkrediet € 224,50: september tot en met december 2026); gecontroleerd op 6 november 2026; validUntil: 31 december 2026

Format as ESC-MAAND (src/escaperun.js): four rooms in date order, 3 questions per room, one retry with a nudge that points to a line, a hint that costs 30 seconds, one digit per room, one lock of four digits, then a debrief. Pupil text is Dutch B1 (READABILITY.md). Rules come only from the source table at the end. All checks: 6 November 2026.

Fiction line (shown once at the start):
"Alles is verzonnen: de mensen, de school en de berichten. De regels en de bedragen van DUO zijn echt; bij elke uitleg staat de bron."

Fictional on purpose: Hogeschool Zeestad, the study Communicatie, mama, Mila. No document imitates a DUO letter or a Mijn DUO screen: DUO amounts are shown as a plain table labelled "echte bedragen van DUO, 2026", and rules come in the questions and explanations.

Story time: May 2027 to February 2028. The pupil starts hbo on 1 September 2027 (as ESC-MAAND room 4).

**Amounts are the 2026 amounts on purpose** (confirmed by two DUO documents). DUO has already published higher amounts for 2027 (one source, see the source table). Every amount question says "in 2026". Switch the tables to 2027 at the January 2027 check once a second source confirms them; the digits are built so they then need a re-derivation (see "Onzeker").

Code: **2413**

## Leerdoelen

1. De leerling weet dat je studiefinanciering en het studentenreisproduct bij DUO aanvraagt, en welke twee soorten reisproduct er zijn.
2. De leerling kan in een tabel de basisbeurs voor thuiswonend en uitwonend aflezen, het verschil uitrekenen en zeggen wanneer je voor DUO uitwonend bent.
3. De leerling kan zeggen waar de aanvullende beurs van afhangt en dat je een lening altijd terugbetaalt.
4. De leerling kan uitleggen wat een prestatiebeurs is (gift bij een diploma binnen 10 jaar) en dat je je reisproduct stopzet als je stopt met studeren.

---

## Kamer 1. Aanvragen (maandag 10 mei 2027)

**Intro:** "Je bent aangemeld voor Communicatie bij Hogeschool Zeestad. Je begint op 1 september 2027. Vandaag krijg je een mail."

### Document 1: mail van Hogeschool Zeestad (type: letter, sentences)
From: "Hogeschool Zeestad, Studentenzaken", place "Zeestad, 10 mei 2027", greeting "Beste student,".
- s1 "Je aanmelding in Studielink voor Communicatie is binnen."
- s2 "Je start op woensdag 1 september 2027."
- s3 "Betaal je collegegeld voor 31 augustus."
- s4 "Wil je studiefinanciering of een ov-kaart voor studenten? Dat regelen wij niet."
- s5 "Met vriendelijke groet, Studentenzaken"

**Moeilijke woorden (plain):** "Studiefinanciering: geld van de overheid voor je studie. Collegegeld: wat je de hogeschool betaalt om te studeren."

### Vraag 1.1 (id: waar, kind: pick, docs: mail)
- Prompt: "Waar vraag je studiefinanciering aan?"
- Options:
  - a "In Studielink, bij je aanmelding"
  - b "Bij Hogeschool Zeestad"
  - c "Bij DUO, in Mijn DUO"
- Correct: c
- Retry pointer: s4 "Dat regelen wij niet."
- Nudge: "Lees zin 4. De hogeschool doet het niet. Wie dan wel?"
- Hint: "Het is een dienst van de overheid, met drie letters."
- Explanation: "Studiefinanciering vraag je aan bij DUO. Je logt in op Mijn DUO met DigiD."
- Sources: duoAanvragen, nlwwAanvragen (DigiD for Mijn DUO: both, see "Onzeker")

### Vraag 1.2 (id: reizen, kind: pick, docs: mail)
- Prompt: "Wat vraag je ook bij DUO aan om goedkoop met de trein en bus te reizen?"
- Options:
  - a "Een korting bij de hogeschool"
  - b "Een gewone ov-kaart met saldo"
  - c "Het studentenreisproduct"
- Correct: c
- Retry pointer: s4 "of een ov-kaart voor studenten"
- Nudge: "Het hoort bij je studiefinanciering. Het heeft een eigen naam."
- Hint: "Het woord begint met studenten."
- Explanation: "Bij DUO vraag je ook het studentenreisproduct aan. Daarmee reis je gratis of met korting in het ov."
- Sources: roReis, duoOv

### Vraag 1.3 (id: soorten, kind: multi, docs: none)
- Prompt: "Welke soorten studentenreisproduct zijn er?"
- Legend: "Tik alle soorten aan."
- Items:
  - a "Een dagabonnement"
  - b "Een maandabonnement"
  - c "Een weekabonnement"
  - d "Een weekendabonnement"
- Correct: c, d
- Retry pointer: (no document line) prompt "soorten"
- Nudge: "Je kiest tussen reizen door de week en reizen in het weekend."
- Hint: "Het zijn er twee."
- Explanation: "Je kiest een weekabonnement of een weekendabonnement. Daarmee reis je vrij of met korting."
- Sources: roReis, duoOv

### Cijfer kamer 1
- Clue: "Cijfer 1 is het aantal soorten studentenreisproduct."
- Digit: **2** (week, weekend).
- Remember: "Studiefinanciering en je reisproduct vraag je aan bij DUO, in Mijn DUO. Regel op tijd een DigiD."

---

## Kamer 2. Thuis of uit? (maandag 7 juni 2027)

**Intro:** "Je hebt een kamer in Zeestad vanaf 1 september. Je staat daar dan ook ingeschreven bij de gemeente. Hoeveel basisbeurs krijg je?"

### Document 2: tabel (type: slip)
Title: "Basisbeurs hbo en universiteit, per maand"
Subtitle: "Echte bedragen van DUO, 2026"
- Thuiswonend: € 130,21
- Uitwonend: € 324,52

Note: "Voor 2027 zijn de bedragen iets hoger (uitwonend € 335,10). Reken hier met de bedragen van 2026."

**Moeilijke woorden (plain):** "Basisbeurs: geld van DUO voor elke student. Thuiswonend: je woont bij je ouders. Uitwonend: je woont niet bij je ouders."

### Vraag 2.1 (id: uitbedrag, kind: number, docs: tabel)
- Prompt: "Je woont uit. Hoeveel basisbeurs krijg je per maand, in 2026?"
- Correct: **€ 324,52** (32452 cents)
- Retry pointer: row "Uitwonend: € 324,52"
- Nudge: "Je woont op kamers. Welke regel van de tabel hoort bij jou?"
- Hint: "Het is de onderste regel."
- Explanation: "Uitwonend kreeg je in 2026 € 324,52 basisbeurs per maand. In 2027 is het € 335,10."
- Sources: duoBedragen, duoHandout (2027 amount € 335,10: duoBedragen only, table "Januari tot en met augustus 2027", page updated 5 Nov 2026, read 6 Nov 2026). The correct answer stays € 324,52 (2026).

### Vraag 2.2 (id: verschil, kind: number, docs: tabel)
- Prompt: "Hoeveel is dat per maand meer dan thuiswonend?"
- Correct: **€ 194,31** (19431 cents)
- Retry pointer: both rows of the table.
- Nudge: "Haal het bedrag voor thuiswonend van het bedrag voor uitwonend af."
- Hint: "Reken € 324,52 min € 130,21."
- Explanation: "€ 324,52 min € 130,21 = € 194,31. Uitwonend krijg je dus elke maand een stuk meer."
- Sources: duoBedragen, duoHandout

### Vraag 2.3 (id: wanneer, kind: pick, docs: none)
- Prompt: "Wanneer ben je voor DUO uitwonend?"
- Options:
  - a "Als je een huurcontract hebt"
  - b "Als je meer dan de helft van de week op kamers slaapt"
  - c "Als je op een ander adres staat ingeschreven dan je ouders, en daar ook echt woont"
- Correct: c
- Retry pointer: intro "Je staat daar dan ook ingeschreven bij de gemeente."
- Nudge: "DUO kijkt naar je adres bij de gemeente. En naar nog iets."
- Hint: "Twee dingen moeten kloppen."
- Explanation: "Je bent uitwonend als je bij de gemeente op een ander adres staat dan je ouders, en daar ook echt woont. DUO krijgt dat adres van de gemeente."
- Sources: duoUitwonend, wsf15

### Cijfer kamer 2
- Clue: "Cijfer 2 is het laatste cijfer van het bedrag dat je uitwonend meer krijgt. Kijk alleen naar de hele euro's."
- Digit: **4** (€ 194,31).
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
Title: "Hbo en universiteit, per maand, september tot en met december 2026"
Subtitle: "Echte bedragen van DUO"
- Aanvullende beurs, hoogstens: € 491,08
- Lening, hoogstens: € 315,17
- Collegegeldkrediet: € 224,50

**Moeilijke woorden (plain):** "Aanvullende beurs: extra geld van DUO als je ouders weinig kunnen bijdragen. Lening: geld dat je later terugbetaalt, met rente. Collegegeldkrediet: een lening om je collegegeld te betalen."

### Vraag 3.1 (id: ouders, kind: pick, docs: chat)
- Prompt: "Waar hangt de aanvullende beurs van af?"
- Options:
  - a "Van wat je zelf verdient met je bijbaan"
  - b "Van je cijfers op je eindexamen"
  - c "Van het inkomen van je ouders"
- Correct: c
- Retry pointer: m1 "Papa en ik verdienen niet zo veel."
- Nudge: "Lees het eerste appje van je moeder nog eens."
- Hint: "Het gaat om wat je ouders kunnen bijdragen."
- Explanation: "De aanvullende beurs hangt af van het inkomen van je ouders. DUO raadt aan hem altijd aan te vragen."
- Sources: duoAanvullend, roHo ("altijd aanvragen": duoAanvullend and duoAanvragen)

### Vraag 3.2 (id: hoogstens, kind: number, docs: tabel)
- Prompt: "Hoeveel aanvullende beurs kon je in 2026 hoogstens krijgen per maand?"
- Correct: **€ 491,08** (49108 cents)
- Retry pointer: row "Aanvullende beurs, hoogstens: € 491,08"
- Nudge: "Zoek de regel met het woord aanvullende."
- Hint: "Het is de bovenste regel."
- Explanation: "In 2026 was de aanvullende beurs hoogstens € 491,08 per maand. Hoeveel jij krijgt, hangt af van je ouders."
- Sources: duoBedragen, duoHandout

### Vraag 3.3 (id: lening, kind: pick, docs: chat)
- Prompt: "Wat moet je altijd terugbetalen, ook als je je diploma haalt?"
- Options:
  - a "De basisbeurs"
  - b "De aanvullende beurs"
  - c "De lening"
- Correct: c
- Retry pointer: m3 "Dat moet je toch terugbetalen?"
- Nudge: "Een beurs kan een gift worden. Wat nooit?"
- Hint: "Het woord zegt het al: je leent het."
- Explanation: "Een lening en collegegeldkrediet betaal je altijd terug, met rente. Leen dus niet meer dan je nodig hebt."
- Sources: duoGift, roHo

### Cijfer kamer 3
- Clue: "Cijfer 3 is het laatste cijfer van de hoogste aanvullende beurs. Kijk alleen naar de hele euro's."
- Digit: **1** (€ 491,08).
- Remember: "Vraag de aanvullende beurs altijd aan. Lenen kan ook, maar dat betaal je altijd terug."

---

## Kamer 4. Gift of terugbetalen? (maandag 7 februari 2028)

**Intro:** "Je studeert nu een half jaar. Je vriendin Mila is gestopt met haar studie. Ze stuurt je een appje."

### Document 4a: app van Mila (type: chat)
From: "Mila", time 21:05.
- a1 "Ik ben op 20 januari gestopt met mijn studie."
- a2 "Mijn studiefinanciering heb ik in Mijn DUO stopgezet."
- a3 "Mijn ov-kaart gebruik ik nog gewoon. Dat mag toch?"

### Document 4b: overzicht (type: rows)
Title: "Prestatiebeurs hbo en universiteit (regels van DUO)"
- p1 "Basisbeurs: diploma binnen 10 jaar, dan gift. Anders terugbetalen."
- p2 "Aanvullende beurs: diploma binnen 10 jaar, dan gift. Anders terugbetalen."
- p3 "Studentenreisproduct: diploma binnen 10 jaar, dan gift. Anders terugbetalen."
- p4 "Lening en collegegeldkrediet: altijd terugbetalen."

**Moeilijke woorden (plain):** "Prestatiebeurs: geld dat eerst een lening is. Haal je op tijd je diploma, dan hoef je het niet terug te betalen. Gift: geld dat je niet terugbetaalt."

### Vraag 4.1 (id: gift, kind: pick, docs: overzicht)
- Prompt: "Je haalt je diploma binnen 10 jaar. Wat wordt dan een gift?"
- Options:
  - a "Alles, ook de lening"
  - b "Alleen het studentenreisproduct"
  - c "De basisbeurs, de aanvullende beurs en het studentenreisproduct"
- Correct: c
- Retry pointer: p1 to p3, and p4 "altijd terugbetalen"
- Nudge: "Kijk welke regels eindigen op gift. Welke regel niet?"
- Hint: "Het zijn er drie."
- Explanation: "Basisbeurs, aanvullende beurs en reisproduct worden een gift met een diploma binnen 10 jaar. De eerste 5 maanden aanvullende beurs zijn altijd een gift."
- Sources: duoGift, roHo, roReis

### Vraag 4.2 (id: mila, kind: pick, docs: app)
- Prompt: "Mag Mila haar studentenreisproduct nog gebruiken?"
- Options:
  - a "Ja, tot het eind van het studiejaar"
  - b "Ja, zolang haar ov-kaart werkt"
  - c "Nee. Ze moet het stopzetten, anders krijgt ze een ov-schuld"
- Correct: c
- Retry pointer: a1 "Ik ben op 20 januari gestopt" and a3 "Mijn ov-kaart gebruik ik nog gewoon."
- Nudge: "Het reisproduct hoort bij je studiefinanciering. Mila heeft die stopgezet."
- Hint: "Reizen zonder recht kost geld."
- Explanation: "Heb je geen recht meer, dan zet je je reisproduct stop bij een ophaalautomaat. Reis je er toch mee? Dan krijg je een ov-schuld."
- Sources: duoStop, duoOvschuld (both DUO; see "Onzeker")

### Vraag 4.3 (id: termijn, kind: pick, docs: overzicht)
- Prompt: "Binnen hoeveel jaar moet je je diploma halen, zodat je prestatiebeurs een gift wordt?"
- Options:
  - a "4 jaar"
  - b "7 jaar"
  - c "10 jaar"
- Correct: c
- Retry pointer: p1 "diploma binnen 10 jaar"
- Nudge: "Het staat in elke regel van het overzicht."
- Hint: "Het is meer dan 7."
- Explanation: "Haal je binnen 10 jaar je diploma, dan wordt je prestatiebeurs een gift. Lukt dat niet, dan betaal je alles terug, met rente."
- Sources: duoGift, roHo, roReis
- Note: 7 is a plausible distractor because DUO gives 7 years of studiefinanciering for a study of 4 years or shorter (duoBedragen "leenfase"); 4 is the study length.

### Cijfer kamer 4
- Clue: "Cijfer 4 is het aantal delen van je studiefinanciering dat een gift kan worden."
- Digit: **3** (basisbeurs, aanvullende beurs, reisproduct).
- Remember: "Je beurs is eerst een lening. Haal binnen 10 jaar je diploma, dan wordt hij een gift. Stop je? Zet je reisproduct stop."

---

## Start- en eindcheck: twee parallelle vormen, A en B (elk 4 vragen, één per kamer, enkele keuze, score 0 tot 4)

Before the clock: no feedback. Each question works without a document. Question n of form A and question n of form B test the same rule at the same difficulty, with a different situation (and different numbers where form A has numbers). Form B adds no new rule or amount: it uses only rules already in the source table (same sources as the room). Use: a pair gets one form before the clock starts and the other after the lock opens; counterbalance as in ESC-BIJBAAN (odd pairs A before and B after, even pairs B before and A after). If only one form is used: after the lock, reverse order, options turned one place.

### Vorm A

The four questions of form A are room questions (as ESC-MAAND F1: same question objects, options and answers).

| # | Kamer | Vraag (room question) | Opties | Goed |
|---|---|---|---|---|
| C1 | 1 Aanvragen | 1.1 "Waar vraag je studiefinanciering aan?" | a In Studielink, bij je aanmelding; b Bij Hogeschool Zeestad; c Bij DUO, in Mijn DUO | c |
| C2 | 2 Thuis of uit? | 2.3 "Wanneer ben je voor DUO uitwonend?" | a Als je een huurcontract hebt; b Als je meer dan de helft van de week op kamers slaapt; c Als je op een ander adres staat ingeschreven dan je ouders, en daar ook echt woont | c |
| C3 | 3 Extra geld of lenen? | 3.3 "Wat moet je altijd terugbetalen, ook als je je diploma haalt?" | a De basisbeurs; b De aanvullende beurs; c De lening | c |
| C4 | 4 Gift of terugbetalen? | 4.3 "Binnen hoeveel jaar moet je je diploma halen, zodat je prestatiebeurs een gift wordt?" | a 4 jaar; b 7 jaar; c 10 jaar | c |

### Vorm B

| # | Kamer (test) | Vraag | Opties | Goed | Regel en bron |
|---|---|---|---|---|---|
| B1 | 1 Aanvragen | "Je zus begint volgend jaar aan de universiteit. Ze wil goedkoop met de trein naar college. Waar vraagt ze het studentenreisproduct aan?" | a Bij de universiteit; b In Studielink, bij haar aanmelding; c Bij DUO | c | Het studentenreisproduct vraag je aan bij DUO (roReis, duoOv; zie V1.2) |
| B2 | 2 Thuis of uit? | "Je vriendin Lisa slaapt vier nachten per week op kamers. Bij de gemeente staat ze nog op het adres van haar ouders. Is ze voor DUO uitwonend?" | a Ja, want ze slaapt meer dan de helft van de week op kamers; b Ja, als ze een huurcontract heeft; c Nee, want ze staat nog op het adres van haar ouders ingeschreven | c | Uitwonend: ingeschreven op een ander adres dan je ouders, en daar echt wonen (duoUitwonend, wsf15) |
| B3 | 3 Extra geld of lenen? | "Je leent elke maand collegegeldkrediet. Je haalt je diploma op tijd. Wat geldt dan voor dat collegegeldkrediet?" | a Het wordt een gift, net als de basisbeurs; b Je betaalt alleen de helft terug; c Je betaalt het terug, met rente | c | Een lening of collegegeldkrediet betaal je altijd terug, met rente (duoGift, roHo) |
| B4 | 4 Gift of terugbetalen? | "Tom doet een studie van 4 jaar. Hij doet er langer over en haalt zijn diploma na 8 jaar. Wordt zijn basisbeurs een gift?" | a Nee, want hij deed er langer over dan 4 jaar; b Nee, want hij deed er langer over dan 7 jaar; c Ja, want hij haalde zijn diploma binnen 10 jaar | c | Prestatiebeurs wordt een gift met een diploma binnen 10 jaar (duoGift, roHo, roReis) |

Parallel checks: B1 asks the same "waar aanvragen" rule as C1, now for the reisproduct, with the same kind of distractors (Studielink, the school). B2 applies the uitwonend rule to a case, with C2's distractors (more than half the week, huurcontract). B3 asks the same "altijd terugbetalen" rule as C3, now for collegegeldkrediet. B4 uses the same numbers 4, 7 and 10 as C4 as distractors (study length; 7 years of studiefinanciering for a study of 4 years, see V4.3 note) with a new number in the situation (8 years). No 2026 or 2027 amount is used, so form B does not change at the January check.

The options are written with the right answer last; on screen they appear in the room's fixed shuffle, so "c" is never a pattern pupils can use. Score: 1 point per right answer, 0 to 4, before and after.

---

## Lesplan voor de docent (45 minuten)

| Min | Onderdeel | Wat je doet |
|---|---|---|
| 3 | Uitleg | Laat het docentenscherm zien. Leerlingen openen de link en werken met z'n tweeën op één scherm. |
| 2 | Startcheck | Elk tweetal beantwoordt vier vragen (vorm A of B) voordat de klok start. Geef geen hints. |
| 30 | Escape | Start de klastimer. Tweetallen spelen vier kamers en schrijven elk cijfer op. |
| 1 | Eindcheck | Na het slot de andere vorm: vier vragen over dezelfde regels. Daarna ziet elk tweetal wat het goed had, voor en na. |
| 7 | Nabespreken | Tel met handopsteken de start- en eindcheck en welke kamer lastig was. Begin bij die kamer. Gebruik de drie gespreksvragen. Vraag naar ervaringen, niet naar bedragen thuis. |
| 2 | Afsluiten | Elke leerling maakt één als-dan-plan en zegt het tegen de buur. |

Total 45 minutes. Materials: a device per pair, pen and paper for the digits, a projector. Care point: room 3 is about parents' income. Do not ask pupils about their own family's money in class.

Voor de docent, per kamer:
- Kamer 1: Studiefinanciering en reisproduct vraag je aan in Mijn DUO, met DigiD. DUO raadt aan het "het liefst minstens 8 weken" voor de start te doen; voor 1 september 2027 is dat uiterlijk 7 juli 2027 (DUO alleen). Nog niet geslaagd? Toch aanvragen voor de opleiding die je wilt doen (DUO alleen). Studiefinanciering kan voor het lopende studiejaar met terugwerkende kracht, het reisproduct niet (DUO alleen).
- Kamer 2: Uitwonend = ingeschreven op een ander adres dan je ouders en daar wonen. De woonsituatie zet je zelf in Mijn DUO; DUO kijkt naar de 1e van de maand (DUO). DUO controleert de woonsituatie. Bedrag 2027: vanaf 1 januari 2027 is de basisbeurs € 335,10 uitwonend en € 134,45 thuiswonend per maand (DUO, bedragen studiefinanciering, tabel "Januari tot en met augustus 2027", pagina bijgewerkt 5 november 2026, gelezen 6 november 2026; één bron). De vragen en antwoorden blijven op 2026 (€ 324,52 en € 194,31).
- Kamer 3: Aanvullende beurs hangt af van het inkomen van de ouders; één keer aanvragen, DUO rekent het elk jaar opnieuw uit. Lening en collegegeldkrediet altijd terug, met rente vanaf het moment dat je leent. Rente 2026: 2,33% (DUO-handout alleen).
- Kamer 4: Prestatiebeurs: gift met diploma binnen 10 jaar; eerste 5 maanden aanvullende beurs altijd gift. Gestopt in je 1e jaar studiefinanciering? Dan hoef je beurs en reisproduct over dat jaar "mogelijk" niet terug te betalen (DUO). Ov-schuld 2026: € 96,09 per halve maand in de 1e maand, daarna € 192,21 per halve maand (DUO).

## Antwoordblad

| Kamer | Vraag | Goed antwoord |
|---|---|---|
| 1 | Waar aanvragen | Bij DUO, in Mijn DUO |
| 1 | Goedkoop reizen | Het studentenreisproduct |
| 1 | Soorten reisproduct | Weekabonnement; weekendabonnement |
| 1 | **Cijfer** | **2** |
| 2 | Basisbeurs uitwonend 2026 | € 324,52 |
| 2 | Verschil met thuiswonend | € 194,31 |
| 2 | Wanneer uitwonend | Ander adres dan je ouders in de BRP, en daar echt wonen |
| 2 | **Cijfer** | **4** |
| 3 | Aanvullende beurs hangt af van | Het inkomen van je ouders |
| 3 | Hoogste aanvullende beurs 2026 | € 491,08 |
| 3 | Altijd terugbetalen | De lening |
| 3 | **Cijfer** | **1** |
| 4 | Gift met diploma | Basisbeurs, aanvullende beurs en studentenreisproduct |
| 4 | Mila en haar ov | Nee: stopzetten, anders een ov-schuld |
| 4 | Termijn diploma | 10 jaar |
| 4 | **Cijfer** | **3** |
| | **Code** | **2413** |

Start/eindcheck vorm A: C1 c, C2 c, C3 c, C4 c. Vorm B: B1 c, B2 c, B3 c, B4 c (all shown shuffled).

## Nabespreken

Drie gespreksvragen:
1. "Ga je na deze school studeren? Blijf je thuis wonen of ga je op kamers? Wat weegt voor jou het zwaarst?"
2. "Lenen voor je studie: wanneer vind jij dat slim, en wanneer niet? Waar zou je het geld voor gebruiken?"
3. "Wie kan jou helpen met DUO en Mijn DUO? Wat wil je zelf leren regelen?"

Slotvraag: "Noem twee dingen die je bij DUO regelt voordat je gaat studeren, en één ding dat je doet als je stopt."

Als-dan-plan (prompt):
"Maak je eigen als-dan-plan en zeg het tegen je buur. Kies een situatie en een actie.
Als ik ... (toegelaten ben tot een opleiding / op kamers ga / stop met mijn studie),
dan ... (vraag ik in Mijn DUO studiefinanciering, de aanvullende beurs en mijn reisproduct aan / schrijf ik me in bij mijn nieuwe gemeente en zet ik mijn woonsituatie in Mijn DUO / zet ik mijn reisproduct stop bij een ophaalautomaat).
Zet één datum in je telefoon."

---

## Brontabel

| Key | Rule or amount (as used) | Source 1 | Source 2 | Checked | Valid until |
|---|---|---|---|---|---|
| duoAanvragen / roReis / nlwwAanvragen | Studiefinanciering and the studentenreisproduct are applied for at DUO. | [DUO, aanvragen studiefinanciering](https://duo.nl/particulier/studiefinanciering/aanvragen.jsp) ("Log in op Mijn DUO om studiefinanciering aan te vragen") | [Rijksoverheid, recht op een reisproduct voor studenten](https://www.rijksoverheid.nl/themas/onderwijs/studiefinanciering/vraag-en-antwoord/studiefinanciering/recht-reisproduct-studenten) ("U kunt een studentenreisproduct aanvragen via de Dienst Uitvoering Onderwijs (DUO)") en [Netherlands Worldwide (Ministerie van Buitenlandse Zaken), how to apply for student finance](https://netherlandsworldwide.nl/student-finance-abroad/how-apply) ("You can apply for student finance ... at Mijn DUO"; "Log in to Mijn DUO using your DigiD") | 6 Nov 2026 | No set date; check Jan 2027 |
| roReis / duoOv | The studentenreisproduct is a week or a weekend subscription; free or discounted travel. | [Rijksoverheid, recht op een reisproduct voor studenten](https://www.rijksoverheid.nl/themas/onderwijs/studiefinanciering/vraag-en-antwoord/studiefinanciering/recht-reisproduct-studenten) ("een weekabonnement of weekendabonnement"; modified 10 Aug 2026) | [DUO, ov](https://duo.nl/particulier/studiefinanciering/ov.jsp) ("kiest u voor een week- of een weekendabonnement"; updated 5 Nov 2026) | 6 Nov 2026 | No set date; check Jan 2027 |
| duoBedragen / duoHandout | Hbo/wo 2026 per month: basisbeurs € 130,21 thuis, € 324,52 uit; aanvullende beurs at most € 491,08; lening at most € 315,17; collegegeldkrediet € 224,50 (Sep to Dec 2026). | [DUO, bedragen studiefinanciering](https://duo.nl/particulier/bedragen-studiefinanciering-en-tegemoetkoming.jsp) (table "September tot en met december 2026") | [DUO, handout bedragen studiefinanciering hoger onderwijs 2026](https://www.duo.nl/zakelijk/images/handout-bedragen-studiefinanciering-ho.pdf) (jan to aug and sep to dec 2026, same basisbeurs and aanvullende beurs) | 6 Nov 2026 | 31 Dec 2026. From 1 Jan 2027: basisbeurs € 134,45 / € 335,10, aanvullende beurs € 507,10, lening € 325,44 (DUO bedragen page only); collegegeldkrediet € 230,92 from Sep 2027 |
| duoUitwonend / wsf15 | Uitwonend: you live at the address where you are registered in the BRP, and it is not your parents' address. | [DUO, uitwonend](https://duo.nl/particulier/studiefinanciering/uitwonend.jsp) | [Wet studiefinanciering 2000, art. 1.5 lid 1](https://wetten.overheid.nl/jci1.3:c:BWBR0011453&hoofdstuk=1&artikel=1.5) (version from 1 Aug 2026) | 6 Nov 2026 | No set date; check Jan 2027 |
| duoAanvullend / roHo | The aanvullende beurs depends on the parents' income. | [DUO, aanvullende beurs](https://duo.nl/particulier/studiefinanciering/aanvullende-beurs.jsp) (updated 23 Oct 2026) | [Rijksoverheid, studiefinanciering hbo en universiteit](https://www.rijksoverheid.nl/themas/onderwijs/studiefinanciering/studiefinanciering-hbo-universiteit) ("Er wordt daarbij gekeken naar het inkomen van de ouders"; modified 10 Aug 2026) | 6 Nov 2026 | No set date; check Jan 2027 |
| duoGift / roHo | A lening (and collegegeldkrediet) is always paid back, with interest. | [DUO, gift of terugbetalen](https://duo.nl/particulier/studiefinanciering/gift-of-terugbetalen.jsp) ("Een rentedragende lening of collegegeldkrediet moet u altijd terugbetalen") | Rijksoverheid, studiefinanciering hbo en universiteit (as above: "DUO berekent rente over de lening"; "Na het afstuderen moet de student de lening terugbetalen") | 6 Nov 2026 | No set date; interest rate changes yearly (1 Jan) |
| duoGift / roHo / roReis | Prestatiebeurs: basisbeurs, aanvullende beurs and reisproduct become a gift with a diploma within 10 years; the first 5 months of aanvullende beurs are always a gift. | DUO, gift of terugbetalen (as above) and DUO, aanvullende beurs ("de eerste 5 maanden voor hbo of universiteit hoeft u nooit terug te betalen") | Rijksoverheid, studiefinanciering hbo en universiteit ("de eerste 5 maanden aanvullende beurs zijn altijd een gift"; "binnen 10 jaar afstuderen") and Rijksoverheid reisproduct ("Behaalt u binnen 10 jaar uw diploma, dan is het reisproduct een gift") | 6 Nov 2026 | No set date; check Jan 2027 |
| duoStop / duoOvschuld | No right any more (for example you stopped studying): stop the reisproduct at an ophaalautomaat; travelling with it after that gives an ov-schuld. | [DUO, studentenreisproduct stopzetten](https://duo.nl/particulier/studentenreisproduct-stopzetten.jsp) ("U mag er vanaf de 1e dag van de maand al niet meer mee reizen") | [DUO, wat is een ov-schuld](https://duo.nl/particulier/ov-schuld-terugbetalen/index.jsp) ("bijvoorbeeld omdat u bent gestopt met uw studie, moet u het stopzetten. Gebruikt u het reisproduct toch? Dan krijgt u een ov-schuld") | 6 Nov 2026 | Rule: no set date. Ov-schuld amounts (teacher only) valid for 2026 |

## Onzeker

- **"Minstens drie maanden van tevoren aanvragen" is not what DUO says now.** The DUO page (read 6 Nov 2026) says "Het liefst minstens 8 weken voordat u er recht op hebt", and studiefinanciering can be applied for with terugwerkende kracht within the current study year (not the reisproduct). Only DUO says this, so it is a teacher note, not a question.
- DigiD for Mijn DUO: two sources now, the DUO aanvragen page and Netherlands Worldwide (Ministerie van Buitenlandse Zaken: "Log in to Mijn DUO using your DigiD"), both read 6 Nov 2026. The Netherlands Worldwide page sits under "student finance abroad". DigiD is in an explanation and the remember line, not asked.
- The Rijksoverheid checklist studeren (modified 4 Nov 2026) does not name DUO; it only lists studiefinanciering and the studentenreisproduct as rights. It is no longer a source.
- The ov-schuld rule (4.2) rests on two DUO pages, one organisation. Rijksoverheid only links to DUO's stop page. If two organisations are required, swap 4.2 for a second prestatiebeurs question.
- 2027 amounts (from 1 Jan 2027 and for Sep to Dec 2027) are published on one DUO page only. When the rooms move to 2027 amounts, digits change: room 2 becomes € 335,10 min € 134,45 = € 200,65 (last whole-euro digit 0) and room 3 becomes € 507,10 (digit 7), so the code would become 2073. Re-derive then.
- Not researched in time and left out: the parents' income year DUO uses (peiljaar), repayment rules for the current cohort (term, draagkracht), the 1 February rule for stopping in the first year (DUO says only "mogelijk"), the interest rate for 2027.
- Mbo amounts differ (DUO lists them separately); this lesson is for hbo and wo only.

---

## Changelog

Item numbers refer to the rows of `factcheck_A_studiefinanciering.md` in table order (A1 = first row, "Kamer 1, V1.1 and C1"; A22 = last row, "Source table, dates"). The report gives no numbers of its own.

6 november 2026:
- A2 (ERROR, source table): the Rijksoverheid checklist studeren does not contain the quoted sentence or the word DUO. Source 2 of the row is replaced by Rijksoverheid, recht op een reisproduct voor studenten, and Netherlands Worldwide (Ministerie van Buitenlandse Zaken), with the checker's quotes; the checklist is dropped as a source. Row key renamed from "duoAanvragen / roCheck" to "duoAanvragen / roReis / nlwwAanvragen"; source lines of V1.1 (duoAanvragen, nlwwAanvragen) and V1.2 (roReis, duoOv) updated to match. Onzeker bullet on DigiD updated: it now has two sources.
- A7 (RISK, 2027 amount): table note under Document 2 now gives the 2027 amount ("uitwonend € 335,10") and explanation 2.1 ends with "In 2027 is het € 335,10.", both in the checker's wording. Source and date of the 2027 amount (DUO bedragen studiefinanciering, table "Januari tot en met augustus 2027", page updated 5 Nov 2026, read 6 Nov 2026, one source) added to the V2.1 source line and to the teacher note Kamer 2, with thuiswonend € 134,45. The questions and pupil answers stay on 2026 (€ 324,52; € 194,31).
- A10 (RISK, Remember line Kamer 2): now also says to set "uitwonend" in Mijn DUO, in the checker's wording.
- A13 and A22 (OK-with-note, source table fix): DUO aanvullende beurs page date corrected from "updated 5 Nov 2026" to "updated 23 Oct 2026".
- Start- en eindcheck: the existing four questions are now "Vorm A" (unchanged). Added "Vorm B" (B1 to B4), one per room, same rule and difficulty, new situation, only rules from the source table and no amounts. Lesson plan rows Startcheck and Eindcheck and the Antwoordblad line updated to the two forms.
- Added the "Bedragen geldig voor" line under the title. validUntil 31 december 2026 because all DUO amounts in the lesson change on 1 January 2027 (A21).
- Answers, digits and code re-checked after these fixes: no fix changes an amount or an answer. Digits stay 2 (week, weekend), 4 (€ 324,52 min € 130,21 = € 194,31), 1 (€ 491,08), 3; code stays **2413**. With the 2027 amounts the code would become 2073 (€ 335,10 min € 134,45 = € 200,65; € 507,10), as in Onzeker; that switch is not made now.

