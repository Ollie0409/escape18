# Je eerste bijbaan (ESC-BIJBAAN): content spec

Bedragen geldig voor: 1 juli 2026 tot en met 31 december 2026; gecontroleerd op 6 november 2026; validUntil: 31 december 2026

(The 2027 amounts in the kamer 2 teacher note apply from 1 January 2027; no end date was checked for them.)

Status: draft content, no code. Written 6 Nov 2026 after reading `d32/src/escaperun.js`, `d32/FACT_SOURCES.md`, `d32/READABILITY.md`, `d32/src/teacher.js` (plan, DISCUSS), `d32/src/plan18.js` (als-dan-plan) and `d32/RESEARCH_C04.md`. Every rule below was read on its official page on 6 Nov 2026 (source table at the end).

## Overview

| Field | Value |
|---|---|
| Id (proposal) | ESC-BIJBAAN |
| Title | Je eerste bijbaan |
| Pupils | havo/vwo, 16 tot 18 jaar, in tweetallen, één scherm |
| Escape time | ongeveer 30 minuten, lesson 45 minuten |
| Rooms | 4, in date order: contract (aug/sep 2026), uurloon (nov 2026), rooster (dec 2026), belasting (jan 2027) |
| Code | **3521** |
| Hint cost | 30 seconden per hint |
| Fits next to ESC-MAAND | ESC-MAAND has the December payslip vs roster (missing hours, 8% holiday pay) and the scam sms. This lesson has no payslip check of hours, no holiday pay sum and no scam message. It adds: contract, minimum youth wage by age, what to do when underpaid, working-time rules under 18, loonheffingskorting and the aangifte. |

**Fiction line (shown once at the start):** "Alles is verzonnen: de mensen, de bedrijven, de adressen, je uren, de berichten en de formulieren. De regels zijn echt, net als de tabel met het minimumloon. Bij elke uitleg staat de bron."

**Fictional cast (all invented):** Sam de Vries (the pupil, born 20 oktober 2009, so 16 at the start and 17 from 20 oktober 2026); Ilse Bakker, bedrijfsleider of Buurtsuper Zeezicht, Havenweg 12, Zeestad; Lunchroom Het Plein, Zeestad. Zeestad is the invented town ESC-MAAND already uses. The rooster app has no name.

**Content rules kept from ESC-MAAND:** pupil sentences of at most 15 words; explanations of at most 2 sentences and 28 words; each room explains its own hard words in a "Moeilijke woorden" line (a short lesson can start in any room); documents stay as written and get the word line under them; options are listed here with ids a, b, c, d and are shown in a fixed shuffled order by the engine, except where marked "keepOrder"; one retry per question with a nudge that points to a line; after the second wrong answer the right answer and the explanation show.

## Leerdoelen (learning aims)

Na deze les kun je:
1. in een contract zien of een proeftijd mag;
2. zeggen wanneer je moet komen als je baas je oproept, en wat je krijgt als hij afzegt;
3. het minimumloon voor jouw leeftijd opzoeken en uitrekenen hoeveel je te weinig kreeg;
4. zeggen wat je doet als je werkgever te weinig betaalt;
5. een rooster nakijken op de regels voor werken onder de 18: 's nachts, op een schooldag en je pauze;
6. de loonheffingskorting bij één werkgever tegelijk laten toepassen en zeggen hoe en tot wanneer je belasting terugvraagt.

---

## Kamer 1: Je contract

**Date:** vrijdag 28 augustus tot donderdag 17 september 2026. **Where:** Buurtsuper Zeezicht.

**Intro:** "Je bent 16. Je gaat werken bij Buurtsuper Zeezicht. Op vrijdag 28 augustus krijg je je contract."

### Document 1 `contract` (type: letter, sentences c1 to c9)

> **Buurtsuper Zeezicht**, Havenweg 12, Zeestad
>
> c1. Arbeidsovereenkomst voor oproepkrachten (nulurencontract)
> c2. Werknemer: Sam de Vries, geboren 20 oktober 2009
> c3. Functie: medewerker vakkenvullen
> c4. Duur: 6 maanden, van 1 september 2026 tot en met 28 februari 2027
> c5. Proeftijd: 1 maand
> c6. Uren: geen vaste uren. Wij roepen je op als we je nodig hebben.
> c7. Oproep: wij roepen je minstens 4 dagen van tevoren op, via de rooster-app.
> c8. Uurloon: het minimumloon voor jouw leeftijd.
> c9. Zeestad, 28 augustus 2026. Ilse Bakker, bedrijfsleider

**Moeilijke woorden:** "Proeftijd: een periode aan het begin. Jij en je werkgever mogen het contract dan direct stoppen. Nulurencontract: een contract zonder vast aantal uren. Oproepen: je baas vraagt je om te komen werken."

### Document 2 `app1` (type: chat)

> **Ilse Bakker (Buurtsuper Zeezicht)**, donderdag 10 september, 20:15
> "Hoi Sam! Kun je morgen van 16:00 tot 18:00 komen? Het is druk."

### Document 3 `app2` (type: chat, two messages)

> **Ilse Bakker (Buurtsuper Zeezicht)**, maandag 14 september, 09:10
> "Zaterdag 19 september zet ik je op het rooster van 13:00 tot 16:00. Top dat je kunt!"
>
> **Ilse Bakker (Buurtsuper Zeezicht)**, donderdag 17 september, 18:40
> "Sorry Sam, zaterdag gaat niet door. Ik heb genoeg mensen."

### Vraag 1.1 `proeftijd` (pick, docs: contract)

- **Prompt:** "Mag deze proeftijd in je contract staan?"
- **Options:** a "Ja, 1 maand proeftijd mag altijd" · b "Ja, want je bent jonger dan 18" · c "Nee, want je contract duurt 6 maanden of korter"
- **Correct:** c
- **Retry points to:** c4 "Duur: 6 maanden, van 1 september 2026 tot en met 28 februari 2027"
- **Nudge:** "Kijk hoe lang je contract duurt."
- **Hint (30 s):** "De grens ligt bij 6 maanden."
- **Explanation:** "Je contract duurt 6 maanden, dus je werkgever mag geen proeftijd afspreken. Bij een contract langer dan 6 maanden en korter dan 2 jaar: maximaal 1 maand."
  (2 sentences, 26 words.)
- **Rules:** proeftijd-kort, proeftijd-max

### Vraag 1.2 `telaat` (pick, docs: contract, app1) **[start/end check]**

- **Situation:** "Je contract zegt: oproepen minstens 4 dagen van tevoren. Donderdag om 20:15 vraagt Ilse of je morgen kunt komen."
- **Prompt:** "Moet je morgen komen?"
- **Options:** a "Ja, met een oproepcontract moet je altijd komen" · b "Ja, als je geen huiswerk hebt" · c "Nee, je mag nee zeggen: de oproep is te laat"
- **Correct:** c
- **Retry points to:** c7 "Oproep: wij roepen je minstens 4 dagen van tevoren op, via de rooster-app."
- **Nudge:** "Hoeveel dagen van tevoren moet Ilse je oproepen?"
- **Hint (30 s):** "Tel de dagen tussen het bericht en de dienst."
- **Explanation:** "Ilse roept je maar 1 dag van tevoren op. Je contract zegt minstens 4 dagen, dus je hoeft niet te komen."
- **Rules:** oproeptermijn

### Vraag 1.3 `afgezegd` (pick, docs: app2)

- **Prompt:** "Ilse zegt de dienst van zaterdag af. Voor hoeveel uur krijg je loon?"
- **Options:** a "0 uur: je hebt niet gewerkt" · b "1,5 uur: de helft" · c "3 uur: alle uren van de oproep"
- **Correct:** c
- **Retry points to:** app2, message of donderdag 17 september "Sorry Sam, zaterdag gaat niet door." (and the hours in the message of 14 september: "van 13:00 tot 16:00")
- **Nudge:** "Hoeveel dagen voor de dienst zegt Ilse af?"
- **Hint (30 s):** "Zegt je baas binnen 4 dagen af? Dan telt de oproep."
- **Explanation:** "Ilse zegt 2 dagen van tevoren af. Binnen 4 dagen afzeggen betekent: je krijgt loon over alle 3 uur van de oproep."
- **Rules:** afzeggen

### Cijfer kamer 1

- **Clue:** "Cijfer 1 is het aantal uur loon dat je krijgt voor de dienst die Ilse afzegde."
- **Digit:** **3** (the oproep was 13:00 tot 16:00 = 3 uur; cancelled on 17 September for 19 September, so within 4 days; pay over all hours called).
- **Remember:** "Lees je contract voordat je tekent. Duurt het 6 maanden of korter? Dan hoort er geen proeftijd in. Een oproep minder dan 4 dagen van tevoren? Dan mag je nee zeggen."

**Voor de docent (kamer 1):**
- In een cao kan de oproeptermijn korter zijn, tot minstens 1 dag (Rijksoverheid, Ondernemersplein). In deze kamer zegt het contract zelf 4 dagen, daarom is het antwoord eenduidig.
- Je mag een te late oproep ook aannemen. Zeg dat als leerlingen denken dat het "niet mag".
- Per 1 januari 2028 geldt de Wet meer zekerheid flexwerkers (aangenomen, Staatsblad 2026, 205 en 206). In plaats van het nulurencontract komt er dan een bandbreedtecontract. Jongeren, scholieren, studenten met bijbanen en AOW-gerechtigden mogen wel op een oproepcontract blijven werken. Dat staat alleen op Ondernemersplein en zit niet in de vragen. Kijk het na voor 2028.

---

## Kamer 2: Je uurloon

**Date:** dinsdag 20 oktober (je verjaardag) tot maandag 30 november 2026. **Where:** Buurtsuper Zeezicht.

**Intro:** "Op 20 oktober ben je 17 geworden. Het is maandag 30 november. Je kijkt naar je uren van november."

### Document 1 `uren` (type: rows)

> **Urenoverzicht november 2026, Buurtsuper Zeezicht**
>
> | Dienst | Uren |
> |---|---|
> | za 7 nov | 5 uur |
> | za 14 nov | 5 uur |
> | za 21 nov | 5 uur |
> | za 28 nov | 5 uur |
> | Totaal | 20 uur |
> | Uurloon in november 2026 | € 5,17 |
> | Brutoloon november 2026 | € 103,40 |

(Saturdays only, 5 hours worked plus pause, so nothing in this room clashes with the working-time rules of room 3.)

### Document 2 `app` (type: chat)

> **Ilse Bakker (Buurtsuper Zeezicht)**, maandag 30 november, 10:02
> "Hoi Sam, nog gefeliciteerd met je 17e! Je uurloon blijft € 5,17. Bij ons gaat het loon pas in januari omhoog."

### Document 3 `tabel` (type: list; real amounts, labelled as real)

> **Minimumloon per uur, vanaf 1 juli 2026**
> Bron: Rijksoverheid, bedragen minimumloon 2026. Deze tabel is echt.
>
> | Leeftijd | Bruto per uur |
> |---|---|
> | 15 jaar | € 4,50 |
> | 16 jaar | € 5,17 |
> | 17 jaar | € 5,92 |
> | 18 jaar | € 7,50 |
>
> Deze bedragen gelden tot en met 31 december 2026.

**Moeilijke woorden:** "Minimumloon: het laagste loon dat je werkgever je mag betalen. Het hangt af van je leeftijd. Brutoloon: je loon voordat er belasting af gaat."

### Vraag 2.1 `minimum` (pick, docs: tabel, app)

- **Prompt:** "Welk minimumloon per uur geldt in november voor jou?"
- **Options:** a "€ 5,17" · b "€ 5,81" · c "€ 7,50" · d "€ 5,92"
- **Correct:** d
- **Retry points to:** tabel row "17 jaar: € 5,92"
- **Nudge:** "Hoe oud ben je in november?"
- **Hint (30 s):** "Je bent op 20 oktober jarig geweest."
- **Explanation:** "In november 2026 ben je 17. Dan is je uurloon minstens € 5,92: dat bedrag geldt van 1 juli tot en met 31 december 2026."
- **Distractors, each with its valid period:** a € 5,17 = 16 jaar, 1 juli tot en met 31 december 2026; b € 5,81 = 17 jaar, 1 januari tot en met 30 juni 2026 (expired in November); c € 7,50 = 18 jaar, 1 juli tot en met 31 december 2026. Correct d € 5,92 = 17 jaar, 1 juli tot en met 31 december 2026.
- **Teacher point:** waiting until January is not allowed: in November Sam is 17, so the 17-year rate applies (rule wml-leeftijd).
- **Rules:** wml-2026-2, wml-leeftijd

### Vraag 2.2 `tekort` (number, euro, docs: uren, tabel)

- **Prompt:** "Hoeveel brutoloon kreeg je in november te weinig?"
- **Correct:** € 15,00 (1500 cents)
- **Derivation:** 20 × € 5,92 = € 118,40; 20 × € 5,17 = € 103,40; € 118,40 min € 103,40 = € 15,00.
- **Retry points to:** uren rows "Totaal: 20 uur" and "Uurloon: € 5,17"
- **Nudge:** "Reken eerst het verschil per uur uit. Doe dat keer je uren."
- **Hint (30 s):** "In november 2026: € 5,92 min € 5,17 is € 0,75 per uur."
- **Explanation:** "In november 2026 krijg je € 0,75 per uur te weinig. 20 × € 0,75 = € 15,00."
- **Rules:** wml-2026-2

### Vraag 2.3 `eerst` (pick, docs: app) **[start/end check]**

- **Situation:** "Je krijgt minder dan het minimumloon."
- **Prompt:** "Wat doe je eerst?"
- **Options:** a "Meteen naar de rechter" · b "Niets: het geld komt in januari vanzelf" · c "Een melding doen bij de Belastingdienst" · d "Je werkgever erop aanspreken"
- **Correct:** d
- **Retry points to:** app "Je uurloon blijft € 5,17."
- **Nudge:** "Wie moet het verschil betalen?"
- **Hint (30 s):** "Begin bij de persoon die je loon betaalt."
- **Explanation:** "Spreek eerst je werkgever aan. Die moet je loon verhogen en betalen wat je te weinig kreeg."
- **Rules:** onderbetaald-stappen

### Vraag 2.4 `melden` (pick, no document needed)

- **Situation:** "Je stuurt Ilse een bericht met de tabel. Zij wil toch niets veranderen."
- **Prompt:** "Wat kun je dan doen?"
- **Options:** a "Niets: het geld is weg" · b "Wachten tot je 18 bent" · c "Een melding doen bij de Belastingdienst" · d "Een melding doen bij de Nederlandse Arbeidsinspectie"
- **Correct:** d
- **Retry points to:** no document line (rule question). Shown "none" line: "Dit staat niet in de documenten. Het is een regel."
- **Nudge:** "Er is een dienst van de overheid die werkgevers controleert."
- **Hint (30 s):** "Het is niet de Belastingdienst."
- **Explanation:** "Doe dan een melding bij de Nederlandse Arbeidsinspectie. Te weinig loon kun je tot 5 jaar terug vragen."
- **Rules:** onderbetaald-stappen, onderbetaald-5jaar

### Cijfer kamer 2

- **Clue:** "Cijfer 2 is het laatste cijfer van het bedrag dat je in november te weinig kreeg. Kijk alleen naar de hele euro's."
- **Digit:** **5** (€ 15,00, whole euros 15, last digit 5).
- **Remember:** "Zoek het minimumloon voor jouw leeftijd op bij de Rijksoverheid. Krijg je minder? Spreek je werkgever aan. Helpt dat niet, meld het bij de Nederlandse Arbeidsinspectie. Let op: op 1 januari 2027 gaat het minimumjeugdloon voor 16 tot en met 20 jaar omhoog."

**Voor de docent (kamer 2):**
- Per 1 januari 2027 gaan de percentages van het minimumjeugdloon omhoog: 16 jaar van 34,5% naar 40%, 17 jaar van 39,5% naar 50%, 18 jaar van 50% naar 62,5%, 19 jaar van 60% naar 75%, 20 jaar van 80% naar 87,5% (Rijksoverheid nieuws 17 april 2026; de euro-bedragen 2027 hieronder passen precies bij deze percentages). De tabel in deze kamer klopt dus alleen tot en met 31 december 2026.
- Let op: het bestaande lerarenscherm (FACT_SOURCES.md, D31-f2) noemt alleen 18, 19 en 20 jaar. Volgens Rijksoverheid gaan ook 16 en 17 jaar omhoog.
- Per 1 januari 2027 (Rijksoverheid, bedragen minimumloon 2027, page date 6 november 2026): 15 jaar € 4,59; 16 jaar € 6,12; 17 jaar € 7,65; 18 jaar € 9,56; 19 jaar € 11,47; 20 jaar € 13,38; 21 jaar en ouder € 15,29. Zet deze tabel in kamer 2 zodra de les na 1 januari 2027 wordt gespeeld, of laat de les in november 2026 spelen en noem de nieuwe bedragen bij het nabespreken. Let op: vraag 2.1 en 2.2 gaan over november 2026. Zet de tabel van 2027 daarom naast de tabel van 2026, niet ervoor in de plaats; anders klopt antwoord d (€ 5,92) en cijfer 2 niet meer.
- Het lerarenscherm zegt "loon", de leerling ziet "brutoloon": het minimumloon is een brutobedrag per uur.

---

## Kamer 3: Je rooster

**Date:** donderdag 3 december 2026, rooster voor week 50 (7 tot en met 13 december). **Where:** Buurtsuper Zeezicht.

**Intro:** "Je bent 17. Het is donderdag 3 december. Ilse stuurt je rooster voor week 50. Vrijdag 11 december heb je een studiedag: geen les."

### Document 1 `app` (type: chat)

> **Ilse Bakker (Buurtsuper Zeezicht)**, donderdag 3 december, 16:45
> "Hier is je rooster voor week 50. Vrijdag blijf je tot sluitingstijd, het is druk voor de kerst!"

### Document 2 `rooster` (type: rows; also the options of 3.1, keepOrder)

> **Je rooster, week 50 (7 tot en met 13 december 2026)**
>
> | Dag | Tijd | Uren |
> |---|---|---|
> | di 8 dec | 16:00 tot 18:00 | 2 uur |
> | do 10 dec | 16:00 tot 18:00 | 2 uur |
> | vr 11 dec | 19:00 tot 23:30 | 4,5 uur |
> | za 12 dec | 12:00 tot 18:00 | 6 uur |

### Document 3 `school` (type: rows)

> **Je schoolweek, week 50**
>
> | Dag | Op school |
> |---|---|
> | ma 7 dec | 08:30 tot 15:30 (7 uur) |
> | di 8 dec | 08:30 tot 14:30 (6 uur) |
> | wo 9 dec | 08:30 tot 15:30 (7 uur) |
> | do 10 dec | 08:30 tot 14:30 (6 uur) |
> | vr 11 dec | studiedag, geen school |

School time is given as clock times, breaks included, because the whole time at school counts as arbeidstijd (Arbeidstijdenwet art. 4:4 lid 2: "de onderbrekingen inbegrepen").

Checked against all rules, so exactly one shift breaks a rule: di and do 6 + 2 = 8 uur (max 9); wo 7 + 2 = 9 uur if Sam takes the extra shift of 3.3; vr 4,5 uur, no school, but ends after 23:00 (the one break); za 6 uur with pause; rest from vr 23:30 to za 12:00 is 12,5 uur (and 13 uur if vr ends at 23:00), so the 12 hours of rest per 24 hours hold; school 26 (clock hours, breaks included) + work 14,5 = 40,5 uur in the week (max 45; 42,5 with the wo shift of 3.3); Sunday free, so no Sunday rule comes in.

**Moeilijke woorden:** "Dienst: de tijd dat je achter elkaar werkt. Pauze: een rustmoment tijdens je werk. Studiedag: een schooldag zonder les."

### Vraag 3.1 `dienst` (pick, keepOrder, docs: app, rooster)

- **Prompt:** "Welke dienst mag niet?"
- **Options (rooster order):** a "di 8 dec · 16:00 tot 18:00" · b "do 10 dec · 16:00 tot 18:00" · c "vr 11 dec · 19:00 tot 23:30" · d "za 12 dec · 12:00 tot 18:00"
- **Correct:** c
- **Retry points to:** rooster row "vr 11 dec: 19:00 tot 23:30"
- **Nudge:** "Kijk naar de eindtijd van elke dienst."
- **Hint (30 s):** "Onder de 18 werk je niet 's nachts."
- **Explanation:** "Onder de 18 mag je niet 's nachts werken. Je rust moet in elk geval van 23:00 tot 06:00 uur duren."
- **Rules:** nacht

### Vraag 3.2 `tot` (pick) **[start/end check]**

- **Situation:** "Je bent 17."
- **Prompt:** "Tot hoe laat mag je op een avond werken?"
- **Options:** a "Tot 22:00 uur" · b "Tot 00:00 uur" · c "Er is geen grens" · d "Tot 23:00 uur"
- **Correct:** d
- **Retry points to:** no document line (rule question). Shown "none" line: "Dit staat niet in de documenten. Het is een regel: je rust loopt in elk geval van 23:00 tot 06:00 uur."
- **Nudge:** "Je nachtrust begint op een vaste tijd."
- **Hint (30 s):** "Het is een uur voor middernacht."
- **Explanation:** "Tot 23:00 uur, want daarna begint je nachtrust. Vrijdag mag je dus tot 23:00 werken, niet tot 23:30."
- **Rules:** nacht

### Vraag 3.3 `schooldag` (pick, docs: school)

- **Situation:** "Ilse vraagt: kun je woensdag 9 december na school ook komen?"
- **Prompt:** "Hoeveel uur mag je die woensdag nog werken?"
- **Options:** a "1 uur" · b "3 uur" · c "4 uur" · d "2 uur"
- **Correct:** d
- **Retry points to:** school row "wo 9 dec: 08:30 tot 15:30 (7 uur)"
- **Nudge:** "Je schooltijd telt mee als werktijd, ook je pauzes op school."
- **Hint (30 s):** "Je werkt maximaal 9 uur per dienst."
- **Explanation:** "Schooltijd telt mee als werktijd, ook je pauzes op school. Je werkt maximaal 9 uur per dienst: 9 min 7 uur school is 2 uur."
  (2 sentences, 24 words; the checker's "is nog 2 uur" made the second sentence 16 words, so "nog" is dropped to keep the 15-word limit.)
- **Rules:** schooltijd, max-dienst

### Vraag 3.4 `pauze` (pick, docs: rooster)

- **Prompt:** "Op zaterdag werk je 6 uur. Hoeveel pauze krijg je minstens?"
- **Options:** a "Geen pauze" · b "15 minuten" · c "Een uur" · d "Een half uur"
- **Correct:** d
- **Retry points to:** rooster row "za 12 dec: 12:00 tot 18:00"
- **Nudge:** "Werk je langer dan 4,5 uur? Dan heb je recht op pauze."
- **Hint (30 s):** "Het is meer dan een kwartier."
- **Explanation:** "Werk je meer dan 4,5 uur, dan heb je recht op een half uur pauze. Soms mag dat in twee keer een kwartier."
- **Rules:** pauze

### Cijfer kamer 3

- **Clue:** "Cijfer 3 is het aantal uur dat je op woensdag 9 december na school nog mag werken."
- **Digit:** **2** (9 uur per dienst min 7 uur schooltijd, wo 08:30 tot 15:30 with breaks included). Unchanged by the fix.
- **Remember:** "Onder de 18 werk je niet na 23:00 uur. Je werkt maximaal 9 uur per dienst, en je schooltijd telt mee, pauzes ook. Werk je meer dan 4,5 uur, dan krijg je een half uur pauze."

**Voor de docent (kamer 3):**
- De regels gelden voor 16 en 17 jaar (Arbeidstijdenwet, "jeugdige werknemer"). Onder de 16 gelden strengere regels; die zitten niet in deze les.
- Ook geldt: maximaal 45 uur per week en gemiddeld 40 uur per week over 4 weken, school meegeteld. Niet gevraagd, wel goed om te noemen.
- Twee pauzes van een kwartier: de Rijksoverheid zegt dat dit in een collectieve regeling moet staan; de Arbeidstijdenwet (artikel 5:4 lid 1) zegt "zonodig" zonder die eis. Houd het voor leerlingen bij: minstens een half uur, soms in twee keer een kwartier.
- Zondag is weggelaten: daar gelden drie voorwaarden en 13 vrije zondagen per 52 weken. Te veel voor één vraag.

---

## Kamer 4: Belasting

**Date:** zaterdag 30 januari 2027. **Where:** thuis, met post van Buurtsuper Zeezicht en Lunchroom Het Plein.

**Intro:** "Het is zaterdag 30 januari 2027. Je jaaropgaaf over 2026 is binnen. Op 1 februari begin je ook bij Lunchroom Het Plein. Je blijft bij Buurtsuper Zeezicht werken."

### Document 1 `jaaropgaaf` (type: slip)

> **Jaaropgaaf 2026, Buurtsuper Zeezicht**
>
> | | |
> |---|---|
> | Naam | Sam de Vries |
> | Periode | 1 september tot en met 31 december 2026 |
> | Loon voor de loonheffing | € 480,00 |
> | Ingehouden loonheffing | € 24,00 |
> | Loonheffingskorting toegepast | ja |
>
> De bedragen zijn een voorbeeld, geen echte berekening.

### Document 2 `formulier` (type: form)

> **Lunchroom Het Plein: jouw gegevens voor de loonheffingen**
> Vereenvoudigd voorbeeld. Dit formulier is verzonnen en korter dan het echte formulier.
>
> | | |
> |---|---|
> | Naam | Sam de Vries |
> | Start | maandag 1 februari 2027 |
> | Wil je dat wij de loonheffingskorting toepassen? | [ ] ja [ ] nee |

**Moeilijke woorden:** "Jaaropgaaf: een overzicht van je loon en je belasting over een heel jaar. Loonheffing: belasting en premies. Je werkgever haalt die van je loon af. Ingehouden: van je loon afgehaald. Loonheffingskorting: korting op je loonheffing. Aangifte: je geeft je inkomen van een jaar door aan de Belastingdienst."

### Vraag 4.1 `korting` (pick, docs: jaaropgaaf, formulier) **[start/end check]**

- **Situation:** "Je hebt al loonheffingskorting bij je eerste bijbaan. Je begint een tweede bijbaan erbij."
- **Prompt:** "Wat kies je bij je nieuwe werkgever?"
- **Options:** a "Ja: dan krijg je bij allebei korting" · b "Allebei aankruisen: de Belastingdienst kiest wel" · c "Nee: de korting loopt al bij je eerste baan"
- **Correct:** c
- **Retry points to:** jaaropgaaf row "Loonheffingskorting toegepast: ja"
- **Nudge:** "Bij hoeveel werkgevers tegelijk mag je korting hebben?"
- **Hint (30 s):** "Kijk op je jaaropgaaf of je de korting al hebt."
- **Explanation:** "Laat de korting bij één werkgever tegelijk toepassen. Bij twee werkgevers krijg je te veel korting: dan moet je waarschijnlijk bijbetalen."
- **Rules:** korting-een

### Vraag 4.2 `rij` (pick, keepOrder, docs: jaaropgaaf)

- **Prompt:** "Waar zie je hoeveel belasting er in 2026 van je loon af ging?"
- **Options (jaaropgaaf order):** a "Loon voor de loonheffing" · b "Ingehouden loonheffing" · c "Loonheffingskorting toegepast"
- **Correct:** b
- **Retry points to:** jaaropgaaf row "Ingehouden loonheffing: € 24,00"
- **Nudge:** "Zoek het woord dat betekent: van je loon afgehaald."
- **Hint (30 s):** "Loonheffing is belasting en premies."
- **Explanation:** "Bij 'Ingehouden loonheffing' staat wat je werkgever van je loon af haalde. Dat bedrag heb je nodig voor je aangifte."
- **Sources:** none needed for the reading itself ("none" line: "Dit haal je uit de jaaropgaaf zelf."); the word meaning of loonheffing is the gloss ESC-MAAND already uses (content/SHARED_EXPLANATIONS.md). The second sentence restates rule terug-aangifte.

### Vraag 4.3 `terug` (pick, docs: jaaropgaaf)

- **Prompt:** "Hoe kun je die belasting misschien terugkrijgen?"
- **Options:** a "Je werkgever vragen om het terug te storten" · b "Niets doen: het komt vanzelf terug" · c "Na afloop van het jaar aangifte doen bij de Belastingdienst"
- **Correct:** c
- **Retry points to:** jaaropgaaf title "Jaaropgaaf 2026" (the year is over)
- **Nudge:** "Wie bepaalt of je belasting terugkrijgt?"
- **Hint (30 s):** "Je regelt het zelf bij de Belastingdienst."
- **Explanation:** "Je vraagt het terug met een aangifte, bijvoorbeeld in de app van de Belastingdienst. Of je iets terugkrijgt, en hoeveel, zie je pas daar."
- **Rules:** terug-aangifte

### Vraag 4.4 `jaar` (pick, docs: jaaropgaaf)

- **Prompt:** "Tot en met welk jaar kun je over 2026 nog aangifte doen?"
- **Options:** a "2027" · b "2028" · c "2036" · d "2031"
- **Correct:** d
- **Retry points to:** jaaropgaaf title "Jaaropgaaf 2026"
- **Nudge:** "Je kunt tot 5 jaar na afloop van een jaar aangifte doen."
- **Hint (30 s):** "2026 is voorbij op 31 december 2026. Tel daar 5 jaar bij op."
- **Explanation:** "Je kunt tot 5 jaar na afloop van een jaar aangifte doen. Over 2026 kan dat dus tot en met 2031."
- **Rules:** vijf-jaar

### Cijfer kamer 4

- **Clue:** "Cijfer 4 is het laatste cijfer van het laatste jaar waarin je over 2026 nog aangifte kunt doen."
- **Digit:** **1** (2031). The Belastingdienst's own example: "In 2026 kunt u dus nog aangifte doen over 2021", so 2026 + 5 = 2031.
- **Remember:** "Twee bijbanen tegelijk? Laat de loonheffingskorting bij één werkgever toepassen. Bewaar je jaaropgaaf. Belasting terugvragen doe je met een aangifte, tot 5 jaar terug."

**Voor de docent (kamer 4):**
- Werk je bij werkgevers ná elkaar (niet tegelijk), dan mag je de korting bij elke werkgever laten toepassen (Belastingdienst jongeren). Alleen tegelijk is het één.
- Beloof geen bedrag terug. Een vakbond noemt een gemiddelde; dat is geen belofte.
- Op het echte formulier staat ook de studenten- en scholierenregeling. Die zit niet in deze les.
- De 5 jaar geldt als je geen bericht van de Belastingdienst kreeg dat je aangifte moet doen (Belastingdienst, hoeveel jaar terug, page date 9 juni 2026). Kreeg je wel zo'n bericht, volg dan dat bericht; deze pagina zegt niet welke datum dan geldt. De uiterste datum voor 2026 is 31 december 2031 (het patroon van de tabel op die pagina: 2021 tot 31 december 2026, 2025 tot 31 december 2030).

---

## Het slot

- Code: **3521** (kamer 1: 3, kamer 2: 5, kamer 3: 2, kamer 4: 1). Each digit follows from the room's data, as in ESC-MAAND: change an hour, an amount or a date and the digit changes with it.
- Short lessons (two rooms) work as in ESC-MAAND: the code is the digits of those rooms, in date order. Suggested default pair: kamer 2 (uurloon) and kamer 3 (rooster).

## Startcheck en eindcheck: twee parallelle vormen, A en B (elk 4 vragen)

Each form has one question per room. Question n of form A and question n of form B test the same rule at the same difficulty (one step, no sum, no document needed), with a different situation and different numbers. Every pair gets one form before the clock starts and the other after the lock opens. Counterbalance: odd pairs A before and B after, even pairs B before and A after, so a form effect does not look like learning. No feedback during a check; the pair sees before and after on the win screen. Form A uses the room questions 1.2, 2.3, 3.2 and 4.1 as they are; form B is new text but no new rule (same rule ids, same sources). Option ids are fixed; the engine shuffles the order shown.

### Vorm A

| # | Room | Rule | Prompt (with situation) | Options | Correct |
|---|---|---|---|---|---|
| A1 | contract | oproeptermijn | "Je contract zegt: oproepen minstens 4 dagen van tevoren. Donderdag om 20:15 vraagt Ilse of je morgen kunt komen. Moet je morgen komen?" | a "Ja, met een oproepcontract moet je altijd komen" · b "Ja, als je geen huiswerk hebt" · c "Nee, je mag nee zeggen: de oproep is te laat" | c (1 dag van tevoren, minder dan 4) |
| A2 | uurloon | onderbetaald-stappen | "Je krijgt minder dan het minimumloon. Wat doe je eerst?" | a "Meteen naar de rechter" · b "Niets: het geld komt in januari vanzelf" · c "Een melding doen bij de Belastingdienst" · d "Je werkgever erop aanspreken" | d |
| A3 | rooster | nacht | "Je bent 17. Tot hoe laat mag je op een avond werken?" | a "Tot 22:00 uur" · b "Tot 00:00 uur" · c "Er is geen grens" · d "Tot 23:00 uur" | d |
| A4 | belasting | korting-een | "Je hebt al loonheffingskorting bij je eerste bijbaan. Je begint een tweede bijbaan erbij. Wat kies je bij je nieuwe werkgever?" | a "Ja: dan krijg je bij allebei korting" · b "Allebei aankruisen: de Belastingdienst kiest wel" · c "Nee: de korting loopt al bij je eerste baan" | c |

### Vorm B

| # | Room | Rule | Prompt (with situation) | Options | Correct |
|---|---|---|---|---|---|
| B1 | contract | oproeptermijn | "Je werkt bij een bloemenzaak. Je contract zegt: oproepen minstens 4 dagen van tevoren. Zondag om 12:00 vraagt je baas of je dinsdag komt. Moet je dinsdag komen?" | a "Ja, je baas bepaalt wanneer je werkt" · b "Ja, want het is meer dan 1 dag van tevoren" · c "Nee, je mag nee zeggen: de oproep is te laat" | c (2 dagen van tevoren, minder dan 4) |
| B2 | uurloon | onderbetaald-stappen | "Je bent 16. In oktober 2026 krijg je € 4,90 per uur. Het minimumloon voor 16 jaar is dan € 5,17 (geldt van 1 juli tot en met 31 december 2026). Wat doe je eerst?" | a "Wachten tot je 17 bent" · b "Een melding doen bij de Belastingdienst" · c "Je werkgever erop aanspreken" · d "Meteen naar de rechter" | c |
| B3 | rooster | nacht | "Je bent 16. Je baas vraagt of je zaterdag tot middernacht blijft. Tot hoe laat mag je werken?" | a "Tot 00:00 uur, als je zondag vrij bent" · b "Tot 23:00 uur" · c "Tot 22:00 uur" · d "Er is geen grens in het weekend" | b |
| B4 | belasting | korting-een | "Je werkt bij een bakker en krijgt daar al loonheffingskorting. Je gaat er tegelijk een bijbaan bij een uitzendbureau bij doen. Wat zeg je tegen het uitzendbureau?" | a "Ja, pas de korting ook toe" · b "Nee, pas de korting niet toe: ik heb hem al bij de bakker" · c "Maakt niet uit: de Belastingdienst regelt het" | b |

Parallel checks: A1 and B1 both have a call under 4 days (1 and 2 days), so a pupil who counts days must still apply the 4-day rule. A2 and B2 both ask for the first step, B2 with a real, date-stamped amount. A3 and B3 have the same answer (23:00) by necessity: the rule has one clock time; the situations differ (17 jaar, avond; 16 jaar, zaterdag tot middernacht). A4 and B4 differ in employer type (supermarkt and lunchroom; bakker and uitzendbureau, both employers).

After the factcheck A fixes (6 Nov 2026) the forms are still parallel: no fix touches a check question, option or answer. The only change near a check question is the retry pointer of room question 3.2, and checks show no retry or feedback, so A3 and B3 stay as they are. B2 uses € 5,17 for oktober 2026, which stays correct after 1 January 2027 because the date is in the question.

Plan step lengths stay: 2 minutes for 4 questions before, 1 minute for 4 after (the after-form is the same length; if the pilot shows 1 minute is too short, take the minute from Nabespreken, not from the escape).

## Lesplan (45 minuten)

| Min | Stap | Wat de docent doet |
|---|---|---|
| 3 | Uitleg | Laat het docentscherm zien. Leerlingen openen de link en werken met z'n tweeën op één scherm. Zeg: alles is verzonnen, behalve de regels en de tabel met het minimumloon. |
| 2 | Startcheck | Elk tweetal beantwoordt 4 vragen (vorm A of B) voordat de klok start en ziet nog niet wat goed is. Geef geen hints. |
| 30 | Escape | Start de klastimer. Tweetallen spelen vier kamers en schrijven elk cijfer op. Loop rond; wijs bij vragen naar de regel in het document, niet naar het antwoord. |
| 1 | Eindcheck | Na het slot de andere vorm: 4 vragen over dezelfde regels. Daarna ziet elk tweetal wat het goed had, voor en na. |
| 7 | Nabespreken | Tel met handopsteken per vraag de start- en eindcheck (één hand per tweetal) en welke kamer lastig was. Begin bij die kamer. Gebruik de drie gespreksvragen. Vraag naar ervaringen en twijfels, niet naar punten. |
| 2 | Afsluiten | Elke leerling maakt een eigen als-dan-plan en zegt het tegen de buur. Plan de herhaling over 3 tot 5 weken. |

Totaal: 3 + 2 + 30 + 1 + 7 + 2 = 45 minuten. The 30 minutes are not timed with pupils (see uncertainties).

## Antwoordblad (voor de docent)

| Kamer | Vraag | Antwoord | Waarom, in één regel |
|---|---|---|---|
| 1 Contract | 1.1 Proeftijd | c Nee | Contract van 6 maanden of korter: geen proeftijd. |
| | 1.2 Te late oproep | c Nee, je mag nee zeggen | 1 dag van tevoren, contract en wet zeggen 4 dagen. |
| | 1.3 Afgezegde dienst | c 3 uur | Binnen 4 dagen afgezegd: loon over de opgeroepen uren. |
| | **Cijfer 1** | **3** | 13:00 tot 16:00 |
| 2 Uurloon | 2.1 Minimumloon | d € 5,92 | 17 jaar; geldt 1 juli tot en met 31 december 2026. |
| | 2.2 Te weinig | € 15,00 | November 2026: 20 × (€ 5,92 min € 5,17) |
| | 2.3 Eerst | d Werkgever aanspreken | Eerste stap volgens Rijksoverheid. |
| | 2.4 Daarna | d Nederlandse Arbeidsinspectie | Melding als de werkgever weigert. |
| | **Cijfer 2** | **5** | € 15,00 |
| 3 Rooster | 3.1 Dienst die niet mag | c vr 11 dec | Eindigt na 23:00. |
| | 3.2 Tot hoe laat | d 23:00 uur | Rust minstens van 23:00 tot 06:00. |
| | 3.3 Woensdag | d 2 uur | 9 uur per dienst, 7 uur school (met pauzes) telt mee. |
| | 3.4 Pauze | d Een half uur | Meer dan 4,5 uur werken. |
| | **Cijfer 3** | **2** | 9 min 7 |
| 4 Belasting | 4.1 Korting | c Nee | Eén werkgever tegelijk. |
| | 4.2 Rij | b Ingehouden loonheffing | Lezen van de jaaropgaaf. |
| | 4.3 Terug | c Aangifte na afloop van het jaar | Via de Belastingdienst, geen bedrag beloofd. |
| | 4.4 Jaar | d 2031 | Tot 5 jaar na afloop van 2026. |
| | **Cijfer 4** | **1** | 2031 |
| | **Code** | **3521** | |

## Nabespreken

**Drie gespreksvragen:**
1. "Wie van jullie heeft een bijbaan, of zoekt er een? Las je je contract voordat je tekende? Wat snapte je er niet aan?"
2. "Stel: je baas betaalt te weinig, of zet je tot 23:30 op het rooster. Durf je dat te zeggen? Hoe zou je het zeggen, en wie kan je helpen?"
3. "Waarom zeggen jongeren vaak niets als er iets niet klopt bij hun bijbaan? Wat zou het makkelijker maken?"

**Slotvraag (één, voor de hele klas):** "Welke check doe jij deze week bij je eigen bijbaan: je contract, je uurloon, je rooster of je loonheffingskorting?"

**Als-dan-plan (per leerling, vaste keuzes, zinsvorm van Mijn 18-plan):** "Als ik ___, dan ___ binnen ___."
- Situaties: "mijn contract krijg" · "mijn uren en mijn uurloon zie" · "een dienst na 23:00 op mijn rooster zie" · "een tweede bijbaan begin" · "mijn jaaropgaaf krijg"
- Acties: "lees ik de proeftijd en de oproepregels na" · "zoek ik het minimumloon voor mijn leeftijd op bij de Rijksoverheid" · "spreek ik mijn leidinggevende aan" · "laat ik de loonheffingskorting bij maar één werkgever toepassen" · "doe ik aangifte bij de Belastingdienst"
- Termijnen: "een dag" · "een week" · "een maand"
- Lead: "Wat ga jij echt regelen na deze les? Maak er een als-dan-plan van. Ieder maakt een eigen plan."
- The term is the pupil's own promise, not a rule (as in plan18.js).

---

## Alle bedragen met hun geldigheid

| Bedrag | Waar | Echt of verzonnen | Geldt voor |
|---|---|---|---|
| € 4,50 / € 5,17 / € 5,92 / € 7,50 per uur (15 / 16 / 17 / 18 jaar) | tabel kamer 2, opties 2.1, vraag B2 | echt (Rijksoverheid, government.nl) | 1 juli 2026 tot en met 31 december 2026 |
| € 5,81 per uur (17 jaar) | optie 2.1 b (afleider) | echt | 1 januari 2026 tot en met 30 juni 2026 (verlopen) |
| € 5,17 per uur (Sams loon) | urenoverzicht en app kamer 2 | verzonnen loon; gelijk aan het echte bedrag voor 16 jaar | november 2026 |
| € 103,40 (betaald) en € 118,40 (juist) brutoloon | kamer 2 | berekend uit verzonnen uren | november 2026, op basis van de bedragen van 1 juli tot en met 31 december 2026 |
| € 0,75 per uur en € 15,00 te weinig | vraag 2.2, cijfer 2 | berekend | november 2026 |
| € 4,90 per uur | vraag B2 | verzonnen | oktober 2026 |
| € 480,00 loon en € 24,00 ingehouden loonheffing | jaaropgaaf kamer 4 | verzonnen voorbeeld, geen berekening | jaar 2026 (1 september tot en met 31 december 2026) |
| Percentages 2027 (40%, 50%, 62,5%, 75%, 87,5%) | alleen docentnoot kamer 2 | echt | vanaf 1 januari 2027 |
| € 4,59 / € 6,12 / € 7,65 / € 9,56 / € 11,47 / € 13,38 / € 15,29 per uur (15 / 16 / 17 / 18 / 19 / 20 / 21+ jaar) | alleen docentnoot kamer 2 | echt (Rijksoverheid, bedragen minimumloon 2027) | vanaf 1 januari 2027; einddatum niet gecontroleerd |

## Bronnen (source table)

All pages read on **6 Nov 2026**. "Page date" is the modified date the page itself gives (metadata), where it gives one. Next check: January 2027, as for ESC-MAAND.

| Rule id | Rule (as used in the lesson) | Source 1 | Source 2 | Checked | Valid until |
|---|---|---|---|---|---|
| proeftijd-kort | Contract van 6 maanden of korter: geen proeftijd. | [Rijksoverheid, hoelang duurt een proeftijd](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/arbeidsovereenkomst-en-cao/hoelang-duurt-een-proeftijd) (page date 12 Aug 2026): "Bij een tijdelijk contract van 6 maanden of korter mag uw werkgever geen proeftijd afspreken." | [Ondernemersplein, proeftijd afspreken met een werknemer](https://ondernemersplein.overheid.nl/wetten-en-regels/proeftijd-afspreken-met-een-werknemer/) (no page date): not allowed "Als de arbeidsovereenkomst 6 maanden of korter duurt." | 6 Nov 2026 | No end date known; re-check Jan 2027 |
| proeftijd-max | Langer contract: proeftijd nooit langer dan 2 maanden (1 maand bij meer dan 6 maanden en minder dan 2 jaar). | Rijksoverheid proeftijd (as above) | Ondernemersplein proeftijd: "De proeftijd is nooit langer dan 2 maanden." | 6 Nov 2026 | No end date known |
| proeftijd-wat | In de proeftijd mogen jij en je werkgever het contract direct stoppen (word explanation). | Rijksoverheid proeftijd: "kunnen u en uw werkgever de arbeidsovereenkomst direct opzeggen" | Ondernemersplein proeftijd: "direct en zonder reden opzeggen" | 6 Nov 2026 | No end date known |
| nuluren | Nulurencontract: oproepcontract zonder vast aantal uren (word explanation). | [Rijksoverheid, welke contracten zijn er voor oproepkrachten](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/arbeidsovereenkomst-en-cao/welke-contracten-zijn-er-voor-oproepkrachten) (page date 13 Oct 2026): names the nulurencontract as an oproepcontract | [Ondernemersplein, regels voor oproepkrachten](https://ondernemersplein.overheid.nl/wetten-en-regels/regels-voor-oproepkrachten/) (no page date): "no fixed number of hours ... zero-hours" | 6 Nov 2026 | Wet meer zekerheid flexwerkers per 1 Jan 2028 (bandbreedtecontract instead of nulurencontract); oproepcontract blijft toegestaan voor jongeren, scholieren en studenten met bijbanen ([Ondernemersplein, nulurencontracten niet meer toegestaan](https://ondernemersplein.overheid.nl/wetswijzigingen/nulurencontracten-niet-meer-toegestaan/), single source) |
| oproeptermijn | Oproep minstens 4 dagen van tevoren; later opgeroepen: je hoeft niet te komen. Cao kan het korter maken, tot minstens 1 dag (teacher note only). | Rijksoverheid oproepkrachten: "minstens 4 kalenderdagen van tevoren"; "bent u niet verplicht om te komen werken" | Ondernemersplein oproepkrachten: "minimaal 4 dagen van tevoren"; "niet verplicht te komen werken" | 6 Nov 2026 | Until the announced change of 1 Jan 2028; re-check |
| afzeggen | Afzeggen of veranderen binnen 4 dagen: loon over de opgeroepen uren. | Rijksoverheid oproepkrachten: "recht op loon over de uren waarop u was opgeroepen" | Ondernemersplein oproepkrachten: "recht op loon over de uren waarvoor u hem of haar had opgeroepen" | 6 Nov 2026 | Until 1 Jan 2028 change; re-check |
| wml-2026-2 | Minimumloon per uur, bruto: 15 jaar € 4,50; 16 jaar € 5,17; 17 jaar € 5,92; 18 jaar € 7,50. | [Rijksoverheid, bedragen minimumloon 2026](https://www.rijksoverheid.nl/onderwerpen/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2026) (page date 30 Oct 2026) | [Government.nl, minimum wage amounts](https://www.government.nl/topics/minimum-wage/minimum-wage-amounts) (page date 17 Jun 2026) | 6 Nov 2026 | **Valid 1 Jul 2026 to 31 Dec 2026.** Changes 1 Jan 2027. |
| wml-2026-1 | Distractor only: 17 jaar € 5,81 (16 jaar € 5,07, 18 jaar € 7,36). | Rijksoverheid bedragen 2026 | Government.nl amounts | 6 Nov 2026 | Valid 1 Jan 2026 to 30 Jun 2026 (expired) |
| wml-leeftijd | Het minimumloon hangt af van je leeftijd; je werkgever betaalt minstens het bedrag voor jouw leeftijd. | Rijksoverheid bedragen 2026 (table by age) | Government.nl amounts (table by age) | 6 Nov 2026 | Ongoing |
| wml-2027 | Teacher note and "remember" line only: per 1 Jan 2027 gaat het minimumjeugdloon omhoog voor 16 tot en met 20 jaar (16: 34,5% naar 40%; 17: 39,5% naar 50%; 18: 50% naar 62,5%; 19: 60% naar 75%; 20: 80% naar 87,5%; 15 blijft 30%). | [Rijksoverheid nieuws, hoger minimumjeugdloon vanaf 2027](https://www.rijksoverheid.nl/actueel/nieuws/2026/04/17/hoger-minimumjeugdloon-vanaf-2027) (17 Apr 2026): "Jongeren van 16 tot en met 20 jaar gaan vanaf 1 januari 2027 meer verdienen." | [Rijksoverheid, bedragen minimumloon 2027](https://www.rijksoverheid.nl/themas/werk/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2027) (page date 6 Nov 2026, 12:16 UTC): bruto per uur per 1 januari 2027: 21+ € 15,29; 20 € 13,38; 19 € 11,47; 18 € 9,56; 17 € 7,65; 16 € 6,12; 15 € 4,59. These amounts match the percentages exactly. | 6 Nov 2026 | From 1 Jan 2027. Not in any question. |
| onderbetaald-stappen | Te weinig loon: spreek eerst je werkgever aan; weigert hij, doe een melding bij de Nederlandse Arbeidsinspectie. | [Rijksoverheid, wat kan ik doen als ik minder loon krijg dan het wettelijk minimumloon](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/minimumloon/wat-kan-ik-doen-als-ik-minder-loon-krijg-dan-het-wettelijk-minimumloon) (page date 21 Jan 2026): "Spreek eerst uw werkgever hierop aan."; form "Melding Wet minimumloon/Onderbetaling" | [Government.nl, less than the minimum wage](https://www.government.nl/topics/minimum-wage/less-than-the-minimum-wage) (page date 5 Feb 2024): speak to the employer first; report to the Netherlands Labour Authority | 6 Nov 2026 | No end date known |
| onderbetaald-5jaar | Te weinig loon kun je tot 5 jaar terug vragen. | Rijksoverheid (as above): "U rekent 5 jaar vanaf de dag waarop u recht had op het loon of vakantiegeld." | Government.nl (as above): up to five years from the date the wages were due | 6 Nov 2026 | No end date known |
| nacht | 16 en 17 jaar: niet 's nachts werken; je rust valt in elk geval van 23:00 tot 06:00 uur; 12 uur rust per 24 uur. | [Rijksoverheid, hoeveel pauze 16 of 17 jaar](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/bijbaan-vakantiewerk-en-stage-door-jongeren/hoeveel-pauze-16-17-jaar) (page date 12 Dec 2025): rest at least "23.00 - 06.00 uur", "12 uur" per 24 hours; and [Rijksoverheid, hoeveel uur werken 16 of 17 jaar](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/bijbaan-vakantiewerk-en-stage-door-jongeren/hoeveel-uur-werken-16-17-jaar) (12 Dec 2025): "Je mag niet 's nachts werken" | [Nederlandse Arbeidsinspectie, BIM Arbeid door jeugdigen en kinderen](https://www.nlarbeidsinspectie.nl/binaries/nlarbeidsinspectie/documenten/richtlijnen/2017/04/06/bim-arbeidstijdenwet-arbeid-door-jeugdigen-en-kinderen/BIM-Arbeid-door-jeugdigen-en-kinderen.pdf) (approved 7 Mar 2017): rest includes "tussen 23.00 en 06.00 uur"; 12 hours per 24. Law: [Arbeidstijdenwet art. 5:3 lid 1](https://wetten.overheid.nl/BWBR0007671/2025-07-01) (wetten.overheid.nl, geldend van 1 juli 2025 tot heden): "ten minste 12 uren ... waarin zijn begrepen de uren tussen 23.00 uur en 06.00 uur" | 6 Nov 2026 | No end date known |
| max-dienst | 16 en 17 jaar: maximaal 9 uur per dienst (en 45 per week, gemiddeld 40 over 4 weken: teacher note). | Rijksoverheid hoeveel uur 16 of 17 jaar (table: 9 uur per dienst, 45 per week, 160 per 4 weken) | NLA BIM 2017 (9 per dienst, 45 per week, 160 per 4 weken). Law: Arbeidstijdenwet art. 5:7 lid 1 (wetten.overheid.nl, geldend van 1 juli 2025 tot heden): "9 uren per dienst; 45 uren per week" en "gemiddeld 40 uren per week" per 4 weken | 6 Nov 2026 | No end date known |
| schooltijd | Schooltijd telt mee als arbeidstijd, de pauzes op school inbegrepen. | Rijksoverheid hoeveel uur 16 of 17 jaar: "Schooltijd telt ook mee als arbeidstijd." | NLA BIM 2017: "schooltijd is arbeidstijd"; "tellen de onderbrekingen mee". Law: Arbeidstijdenwet art. 4:4 lid 2 (wetten.overheid.nl, geldend van 1 juli 2025 tot heden): de tijd waarop een jeugdige werknemer "onderwijs volgt of pleegt te volgen, de onderbrekingen inbegrepen, als arbeidstijd" | 6 Nov 2026 | No end date known |
| pauze | Meer dan 4,5 uur werken: een half uur pauze, zo nodig in twee keer 15 minuten (Arbeidstijdenwet 5:4 lid 1; Rijksoverheid noemt daarbij een collectieve regeling, the law does not for jeugdigen). | Rijksoverheid hoeveel pauze 16 of 17 jaar: "meer dan 4,5 uur werkt, heb je recht op een half uur pauze" | NLA BIM 2017: "ten minste 30 min, zo nodig opgesplitst in pauzes van elk 15 minuten". Law: Arbeidstijdenwet art. 5:4 lid 1 (wetten.overheid.nl, geldend van 1 juli 2025 tot heden): "ten minste 30 minuten, die zonodig kan worden gesplitst in pauzes van elk ten minste 15 minuten"; lid 3 (collectieve regeling) concerns lid 2, workers of 18 and older | 6 Nov 2026 | No end date known |
| korting-een | Loonheffingskorting bij één werkgever tegelijk; bij twee krijg je te veel korting en moet je waarschijnlijk bijbetalen. | [Belastingdienst, loonheffingskorting met een bijbaan](https://www.belastingdienst.nl/wps/wcm/connect/nl/jongeren/content/loonheffingskorting-met-een-bijbaan) (page date 17 Mar 2026): "Vraag dan bij 1 werkgever de loonheffingskorting aan."; "krijg je te veel korting" | [Belastingdienst, loonheffingskorting met meerdere inkomens](https://www.belastingdienst.nl/wps/wcm/connect/nl/werk-en-inkomen/content/loonheffingskorting-meerdere-inkomens) (page date 5 Aug 2026): "op maximaal 1 inkomen"; "moet u altijd bijbetalen" | 6 Nov 2026 | No end date known |
| terug-aangifte | Te veel betaalde belasting vraag je na afloop van het jaar terug met een aangifte (app of Mijn Belastingdienst); geen bedrag beloven. | [Belastingdienst, kan ik belasting terugvragen](https://www.belastingdienst.nl/wps/wcm/connect/nl/jongeren/content/kan-ik-belasting-terugvragen) (page date 8 Sep 2026): "na afloop van het jaar terugkrijgen via de aangifte" | [Belastingdienst, hoeveel jaar terug belastingaangifte doen](https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/hoe_werkt_inkomstenbelasting/aangifte_doen/hoeveel-jaar-terug-belastingaangifte-doen) (page date 9 Jun 2026): aangifte to get money back. Third, not official: [FNV, belastingaangifte bijbaan](https://www.fnv.nl/werk-inkomen/salaris-loon/jongeren-en-loon/belastingaangifte-bijbaan) (app; no amount promised, an average only) | 6 Nov 2026 | No end date known |
| vijf-jaar | Aangifte kan tot 5 jaar na afloop van een jaar: over 2026 tot en met 2031. Condition (teacher note only): this holds if you got no bericht that you must file. | Belastingdienst jongeren terugvragen: "tot 5 jaar na afloop van een jaar aangifte doen" | Belastingdienst hoeveel jaar terug: "Hebt u geen bericht gehad dat u aangifte moet doen voor de inkomstenbelasting? Dan kunt u dat tot 5 jaar terug doen."; "In 2026 kunt u dus nog aangifte doen over 2021." | 6 Nov 2026 | No end date known |

Word meanings without a rule: oproepen, dienst, pauze, studiedag, jaaropgaaf, ingehouden, aangifte, brutoloon and loonheffing (the last two as in content/SHARED_EXPLANATIONS.md and ESC-MAAND).

## Uncertainties and things left out

1. **2027 youth wage.** Percentages are on a Rijksoverheid news page (17 Apr 2026); the euro amounts are on the Rijksoverheid page "Bedragen minimumloon 2027" (page date 6 Nov 2026) and match those percentages. The Rijksoverheid percentages page still shows 2026 only. The existing teacher note in FACT_SOURCES.md (D31-f2) says only 18, 19 and 20 rise; Rijksoverheid says 16 to 20. That note needs a fix.
2. **Night and school time.** The second source for 23:00 to 06:00, 9 hours and "school counts" is the Arbeidsinspectie's inspection module of 2017; the Arbeidstijdenwet itself (art. 4:4, 5:3, 5:4, 5:7, wetten.overheid.nl, version geldend van 1 juli 2025 tot heden) confirms every rule. Question 3.3 combines two rules (9 hours per dienst, school counts); neither source gives that exact worked example.
3. **Left out, single source or unverified:** 3 hours of pay per call (only Ondernemersplein; the Rijksoverheid page does not say it), the 1 Jan 2028 change to on-call contracts, with oproepcontracts still allowed for scholieren and studenten met bijbanen (only Ondernemersplein; teacher note only), "melden mag anoniem" (only government.nl), the jaaropgaaf label "loonbelasting" (only Belastingdienst jongeren), the notice period (opzegtermijn, not checked), DigiD for the aangifte (single source in FACT_SOURCES.md).
4. **Birthday switch.** I did not confirm on which day a higher age rate starts. Room 2 avoids it: November is a whole month at 17.
5. **Small issues:** the Rijksoverheid table shows "€ 7,50<" for 18 jaar (stray character; government.nl gives € 7.50). Ondernemersplein pages show no date. The fictional jaaropgaaf amounts (€ 480,00 and € 24,00 withheld) are not a real calculation; real withholding at this income may well be € 0.
6. **Not measured:** readability (tools/readability.js reads only src/escaperun.js, so this text has no Flesch-Douma score yet) and timing (the 30 minutes are not timed with pupils).

## Changelog

**6 Nov 2026, fixes from `factcheck_A_eerste-bijbaan.md`** (each fix re-read on its source on 6 Nov 2026). Answer key unchanged: no digit changed, code stays **3521**.

| # | Report row answered | Class | Change |
|---|---|---|---|
| 1 | Kamer 3, document `school`, vraag 3.3, cijfer 3, remember line, Antwoordblad 3.3 | ERROR | Document `school` now gives clock times with breaks (column "Op school", wo 9 dec 08:30 tot 15:30 (7 uur)); retry pointer, nudge, explanation 3.3, digit note, remember line and Antwoordblad 3.3 say school time counts with breaks. Re-checked: Arbeidstijdenwet art. 4:4 lid 2 ("de onderbrekingen inbegrepen"). Digit 3 stays 2 (9 min 7). Week check updated (wo 9 uur with the 3.3 shift; week 42,5 uur max). Explanation uses "is 2 uur" instead of the checker's "is nog 2 uur" to keep 15 words per sentence. |
| 2 | Kamer 1, explanation 1.1 | RISK | Explanation now has the 1-month cap: "langer dan 6 maanden en korter dan 2 jaar: maximaal 1 maand". Re-checked on Rijksoverheid proeftijd ("maximaal 1 maand"); wording "korter dan 2 jaar" follows the source, where the checker had "tot 2 jaar". Two sentences, 26 words; uncertainty 6 note on 1.1 removed. |
| 3 | Kamer 1, Voor de docent bullet 3; source row `nuluren`; uncertainties 3 | RISK | Teacher note: Wet meer zekerheid flexwerkers per 1 Jan 2028, adopted (Staatsblad 2026, 205 and 206, from the page's links), bandbreedtecontract instead of nulurencontract, and jongeren, scholieren and studenten met bijbanen may keep working on an oproepcontract. Re-checked on Ondernemersplein ("mogen straks nog wel op een oproepcontract werken"). Source row and uncertainty 3 updated. |
| 4 | Kamer 3, Voor de docent bullet 3; source row `pauze` | RISK | Teacher note now gives both: Rijksoverheid (collectieve regeling) and Arbeidstijdenwet 5:4 lid 1 ("zonodig", no such condition); pupil text unchanged. Re-checked art. 5:4: lid 3 (collectieve regeling) concerns lid 2, workers of 18 and older. |
| 5 | Kamer 2, Voor de docent bullets 1 and 3; source row `wml-2027`; uncertainties 1 | RISK | Bullet 3 now has the official 2027 table (Rijksoverheid, bedragen minimumloon 2027, page date 6 Nov 2026 12:16 UTC; amounts re-read). "Noem ze niet" struck. AWVN replaced by the Rijksoverheid 2027 page as source 2; AWVN and SRA sentence struck from uncertainty 1. Added a caution not to replace the 2026 table, since 2.1 and 2.2 are about November 2026. Amounts table has a 2027 row. |
| 6 | Kamer 4, vraag 4.4, source row `vijf-jaar` | RISK | New teacher bullet kamer 4 and source row state the condition: 5 years if you got no bericht that you must file. Re-checked on Belastingdienst hoeveel jaar terug. The checker's "(uitstel kan)" and "de datum in die brief" are not on that page, so the note says only to follow the bericht. Pupil text unchanged. |
| 7 | Kamer 3, vraag 3.2, retry pointer | RISK | Retry 3.2 is now a "none" line: "Dit staat niet in de documenten. Het is een regel: je rust loopt in elk geval van 23:00 tot 06:00 uur." Re-checked on Arbeidstijdenwet art. 5:3 lid 1. Nudge and hint kept. |
| 8 | Source rows `nacht`, `max-dienst`, `schooltijd`, `pauze`; uncertainties 2 (OK-with-note) | note | Arbeidstijdenwet articles added as law source; "could not load" struck. The checker's URL with version 2026-01-01 returned 404 on 6 Nov 2026; the cited version is the one wetten.overheid.nl shows as "Geldend van 01-07-2025 t/m heden". |
| 9 | Whole lesson, dates (OK-with-note); task line | note | Line under the title: amounts valid 1 juli 2026 tot en met 31 december 2026, checked 6 November 2026, validUntil 31 december 2026. |
| 10 | Forms A and B (OK) | note | Parallel check paragraph extended: no fix changes a check question. |

Not applied (optional in the report, not verified here): the uncertainty 4 note on Wet minimumloon art. 7, the kamer 3 teacher bullet on "oproepdiensten", and the extra jaaropgaaf sentence.
