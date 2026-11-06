# Je eerste bijbaan (ESC-BIJBAAN): content spec

Bedragen geldig voor: 1 juli 2026 tot en met 31 december 2026; gecontroleerd op 6 november 2026; validUntil: 31 december 2026

(The kamer 2 table expires on 1 January 2027. The 2027 amounts in the kamer 2 teacher note apply from 1 January 2027; the Rijksoverheid page, modified 6 Nov 2026, gives no end date. Re-check every source before 1 January 2027.)

Status: draft content, no code. Written 6 Nov 2026 after reading `d32/src/escaperun.js`, `d32/FACT_SOURCES.md`, `d32/READABILITY.md`, `d32/src/teacher.js` (plan, DISCUSS), `d32/src/plan18.js` (als-dan-plan) and `d32/RESEARCH_C04.md`. Revised the same day after factcheck A, fact check B, gate G3 to G8 and playtest G4 (changelog at the end). Every rule below was read on its official page on 6 Nov 2026 (source table at the end).

## Overview

| Field | Value |
|---|---|
| Id (proposal) | ESC-BIJBAAN |
| Title | Je eerste bijbaan |
| Lead | Je eerste bijbaan: je contract lezen, je uurloon nakijken, je rooster checken en je loonheffingskorting goed regelen. |
| Pupils | havo/vwo, 16 tot 18 jaar, in tweetallen, één scherm |
| Escape time | 27 minuten (minuut 6 tot 33); les 45 minuten met 3 minuten reserve |
| Rooms | 4, in date order: contract (aug/sep 2026), uurloon (nov 2026), rooster (dec 2026), belasting (jan 2027) |
| Questions | 14 (was 15; old 3.2 removed) |
| Code | **3521** |
| Hint cost | 30 seconden per hint |
| Fits next to ESC-MAAND | ESC-MAAND has the December payslip vs roster (missing hours, 8% holiday pay sum) and the scam sms. This lesson has no payslip check of hours, no holiday pay sum and no scam message; the wage table only says in one line that holiday pay comes on top. It adds: contract, minimum youth wage by age, what to do when underpaid, working-time rules under 18, loonheffingskorting and the aangifte. |

**Fiction line (shown once at the start):** "Alles is verzonnen: mensen, bedrijven, adressen, uren, berichten en formulieren. De regels zijn echt, net als de tabel met het minimumloon."

**Fictional cast (all invented):** Sam de Vries (the pupil, born 20 oktober 2009, so 16 at the start and 17 from 20 oktober 2026); Ilse Bakker, bedrijfsleider of Buurtsuper Zeezicht, Havenweg 12, Zeestad; Lunchroom Het Plein, Zeestad. Zeestad is the invented town ESC-MAAND already uses. The rooster app has no name.

**Content rules kept from ESC-MAAND:** pupil sentences of at most 15 words; explanations of at most 2 sentences and 28 words; each room explains its own hard words in a "Moeilijke woorden" line, shown with every question of that room (a short lesson can start in any room); documents stay as written and get the word line under them; options are listed here with ids a, b, c, d and are shown in a fixed shuffled order by the engine, except where marked "keepOrder"; one retry per question with a nudge that points to one line; after the second wrong answer the right answer and the explanation show.

**Content rules added in this revision (G3, G4):** every rule a pupil needs on the first try is in a document or in the room's `regel` card (type: rule card, lines r1, r2, ...); each retry pointer names exactly one line; no explanation answers a later question; each digit clue starts with "Het 1e (2e, 3e, 4e) cijfer van het slot" and can be worked out from the documents listed under "Shown with" on the digit screen; teacher-visible text (Voor de docent, lesplan, Antwoordblad, check key, gespreksvragen) is Dutch only, without file names, ids or source bookkeeping; the teacher key gives the full answer text, never a letter.

## Leerdoelen (learning aims)

De leerling kan:
1. in een contract zien of een proeftijd mag;
2. zeggen wanneer een oproep te laat is, en hoeveel loon er komt als de werkgever afzegt;
3. het minimumloon voor de eigen leeftijd opzoeken en uitrekenen hoeveel te weinig is betaald;
4. de stappen noemen als de werkgever te weinig betaalt;
5. een rooster nakijken op de regels voor werken onder de 18: 's nachts, rust, een schooldag en pauze;
6. de loonheffingskorting bij één werkgever tegelijk laten toepassen en zeggen hoe en tot wanneer belasting terugvragen kan.

---

## Kamer 1: Je contract

**Date:** vrijdag 28 augustus tot donderdag 17 september 2026. **Where:** Buurtsuper Zeezicht.

**Intro:** "Je bent 16. Op vrijdag 28 augustus krijg je je contract van Buurtsuper Zeezicht."

### Document 1 `contract` (type: letter, sentences c1 to c7)

> **Buurtsuper Zeezicht**, Havenweg 12, Zeestad, 28 augustus 2026
>
> c1. Arbeidsovereenkomst voor oproepkrachten (nulurencontract)
> c2. Werknemer: Sam de Vries, geboren 20 oktober 2009
> c3. Duur: 6 maanden, van 1 september 2026 tot en met 28 februari 2027
> c4. Proeftijd: 1 maand
> c5. Uren: geen vaste uren. Wij roepen je op als we je nodig hebben.
> c6. Oproep: minstens 4 dagen van tevoren, via de rooster-app.
> c7. Uurloon: het minimumloon voor jouw leeftijd.
>
> Ilse Bakker, bedrijfsleider

(Trimmed for reading load: the old lines "Functie: medewerker vakkenvullen" and the place-and-date signature line are gone; the date is in the header. Old c4 to c8 are now c3 to c7.)

### Document 2 `app1` (type: chat, title "Appje van donderdag 10 september")

> **Ilse Bakker (Buurtsuper Zeezicht)**, donderdag 10 september, 20:15
> "Hoi Sam! Kun je morgen van 16:00 tot 18:00 komen? Het is druk."

### Document 3 `app2` (type: chat, two messages, title "Appjes over zaterdag 19 september")

> **Ilse Bakker (Buurtsuper Zeezicht)**, maandag 14 september, 09:10
> "Zaterdag 19 september zet ik je op het rooster van 13:00 tot 16:00. Top dat je kunt!"
>
> **Ilse Bakker (Buurtsuper Zeezicht)**, donderdag 17 september, 18:40
> "Sorry Sam, zaterdag gaat niet door. Ik heb genoeg mensen."

### Document 4 `regel` (type: rule card, title "Regels")

> r1. Duurt je contract 6 maanden of korter? Dan mag er geen proeftijd in.
> r2. Roept je baas je minder dan 4 dagen van tevoren op? Dan hoef je niet te komen.
> r3. Zegt je baas binnen 4 dagen voor de dienst af? Dan krijg je loon over alle uren van de oproep.

**Moeilijke woorden:** "Proeftijd: een periode aan het begin. Jij en je werkgever mogen het contract dan direct stoppen. Nulurencontract: een contract zonder vaste uren. Oproepen: je baas vraagt je om te komen werken."

### Vraag 1.1 `proeftijd` (pick, docs: contract, regel)

- **Prompt:** "Mag deze proeftijd in je contract staan?"
- **Options:** a "Ja, 1 maand proeftijd mag altijd" · b "Ja, want je bent jonger dan 18" · c "Nee, want je contract duurt 6 maanden of korter"
- **Correct:** c
- **Retry points to:** contract c3 "Duur: 6 maanden, van 1 september 2026 tot en met 28 februari 2027"
- **Nudge:** "Kijk hoe lang je contract duurt."
- **Hint (30 s):** "Tel de maanden van 1 september tot en met 28 februari."
- **Explanation:** "Je contract duurt 6 maanden, dus een proeftijd mag niet. Bij een langer contract mag een korte proeftijd, meestal 1 of 2 maanden."
  (2 sentences, 22 words. "Meestal": a cao may allow a longer proeftijd for contracts over 6 months and under 2 years, BW 7:652 lid 7; for 6 months or shorter there is no exception, lid 6.)
- **Rules:** proeftijd-kort, proeftijd-max

### Vraag 1.2 `telaat` (pick, docs: contract, app1)

- **Situation:** "Donderdag 10 september om 20:15 vraagt Ilse of je morgen komt."
- **Prompt:** "Moet je morgen komen?"
- **Options:** a "Ja, met een oproepcontract moet je altijd komen" · b "Ja, als je geen huiswerk hebt" · c "Nee, je mag nee zeggen: de oproep is te laat"
- **Correct:** c
- **Retry points to:** contract c6 "Oproep: minstens 4 dagen van tevoren, via de rooster-app."
- **Nudge:** "Hoeveel dagen van tevoren moet Ilse je oproepen?"
- **Hint (30 s):** "Tel de dagen tussen het appje en de dienst."
- **Explanation:** "Ilse roept je maar 1 dag van tevoren op. Dat is minder dan 4 dagen, dus je hoeft niet te komen."
- **Rules:** oproeptermijn

### Vraag 1.3 `afgezegd` (pick, docs: app2, regel)

- **Prompt:** "Ilse zegt de dienst van zaterdag af. Voor hoeveel uur krijg je loon?"
- **Options:** a "0 uur: je hebt niet gewerkt" · b "1,5 uur: de helft" · c "3 uur: alle uren van de oproep"
- **Correct:** c
- **Retry points to:** regel r3 "Zegt je baas binnen 4 dagen voor de dienst af? Dan krijg je loon over alle uren van de oproep."
- **Nudge:** "Hoeveel dagen voor de dienst zegt Ilse af?"
- **Hint (30 s):** "Tel de uren van 13:00 tot 16:00."
- **Explanation:** "Ilse zegt 2 dagen van tevoren af. Dat is binnen 4 dagen, dus je krijgt loon over alle 3 uur."
- **Rules:** afzeggen

### Cijfer kamer 1

- **Clue:** "Het 1e cijfer van het slot: hoeveel uur loon krijg je voor zaterdag 19 september?"
- **Shown with:** app2, regel
- **Digit:** **3** (oproep 13:00 tot 16:00 = 3 uur; cancelled on 17 September for 19 September, so within 4 days; pay over all hours called. The 3-hour minimum per call gives the same number, so the digit is robust.)
- **Remember:** "Duurt je contract 6 maanden of korter? Dan hoort er geen proeftijd in. Een oproep minder dan 4 dagen van tevoren mag je weigeren."

**Voor de docent (kamer 1):**
- In een cao kan de oproeptermijn korter zijn, maar nooit korter dan 24 uur. Een te late oproep mag je ook gewoon aannemen.
- Bij een oproepcontract krijg je per oproep minstens 3 uur loon, ook als je korter werkt. Dat geldt ook voor de diensten van 2 uur in kamer 1 en kamer 3.
- Vanaf 1 januari 2028 verdwijnt het nulurencontract voor de meeste werknemers. Scholieren en studenten met een bijbaan mogen wel op een oproepcontract blijven werken.

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
> De bedragen zijn bruto en zonder vakantiegeld. Je krijgt daarnaast minstens 8% vakantiegeld.

### Document 4 `regel` (type: rule card, title "Regels")

> r1. Je werkgever betaalt minstens het minimumloon voor jouw leeftijd.
> r2. Krijg je te weinig? Spreek dan eerst je werkgever aan.
> r3. Lost je werkgever het niet op? Doe dan een melding bij de Nederlandse Arbeidsinspectie.
> r4. De Arbeidsinspectie controleert of werkgevers zich aan de arbeidswetten houden.

**Moeilijke woorden:** "Minimumloon: het laagste loon dat je werkgever je mag betalen. Brutoloon: je loon voordat er belasting af gaat. Vakantiegeld: extra loon bovenop je gewone loon."

### Vraag 2.1 `minimum` (pick, docs: tabel, app)

- **Prompt:** "Welk minimumloon per uur geldt in november voor jou?"
- **Options:** a "€ 5,17" · b "€ 5,81" · c "€ 7,50" · d "€ 5,92"
- **Correct:** d
- **Retry points to:** tabel row "17 jaar: € 5,92"
- **Nudge:** "Hoe oud ben je in november?"
- **Hint (30 s):** "Je bent op 20 oktober jarig geweest."
- **Explanation:** "In november 2026 ben je 17, dus je krijgt minstens € 5,92 per uur. Wachten tot januari mag niet."
- **Distractors, each with its valid period:** a € 5,17 = 16 jaar, 1 juli tot en met 31 december 2026; b € 5,81 = 17 jaar, 1 januari tot en met 30 juni 2026 (expired in November); c € 7,50 = 18 jaar, 1 juli tot en met 31 december 2026. Correct d € 5,92 = 17 jaar, 1 juli tot en met 31 december 2026.
- **Rules:** wml-2026-2, wml-leeftijd

### Vraag 2.2 `tekort` (number, euro, docs: uren, tabel)

- **Prompt:** "Hoeveel brutoloon kreeg je in november te weinig?"
- **Correct:** € 15,00 (1500 cents)
- **Derivation:** 20 × € 5,92 = € 118,40; 20 × € 5,17 = € 103,40; € 118,40 min € 103,40 = € 15,00.
- **Retry points to:** uren row "Uurloon in november 2026: € 5,17"
- **Nudge:** "Reken eerst het verschil per uur uit. Doe dat keer je uren."
- **Hint (30 s):** "In november 2026: € 5,92 min € 5,17 is € 0,75 per uur."
- **Explanation:** "In november 2026 krijg je € 0,75 per uur te weinig. 20 × € 0,75 = € 15,00."
- **Rules:** wml-2026-2

### Vraag 2.3 `eerst` (pick, docs: app, regel)

- **Situation:** "Je krijgt minder dan het minimumloon."
- **Prompt:** "Wat doe je eerst?"
- **Options:** a "Meteen naar de rechter" · b "Niets: het geld komt in januari vanzelf" · c "Een melding doen bij de Belastingdienst" · d "Je werkgever erop aanspreken"
- **Correct:** d
- **Retry points to:** regel r2 "Krijg je te weinig? Spreek dan eerst je werkgever aan."
- **Nudge:** "Wie moet het verschil betalen?"
- **Hint (30 s):** "Begin bij de persoon die je loon betaalt."
- **Explanation:** "Spreek eerst je werkgever aan. Die moet je loon verhogen en betalen wat je te weinig kreeg."
- **Rules:** onderbetaald-stappen

### Vraag 2.4 `melden` (pick, docs: regel)

- **Situation:** "Je stuurt Ilse een bericht met de tabel. Ze wil je loon toch niet verhogen."
- **Prompt:** "Wat kun je doen als je werkgever het verschil niet betaalt?"
- **Options:** a "Niets: het geld is weg" · b "Wachten tot je 18 bent" · c "Een melding doen bij de Belastingdienst" · d "Een melding doen bij de Nederlandse Arbeidsinspectie"
- **Correct:** d
- **Retry points to:** regel r3 "Lost je werkgever het niet op? Doe dan een melding bij de Nederlandse Arbeidsinspectie."
- **Nudge:** "Welke dienst controleert of werkgevers zich aan de arbeidswetten houden?"
- **Hint (30 s):** "De Belastingdienst gaat over belasting, niet over je loon."
- **Explanation:** "Doe dan een melding bij de Nederlandse Arbeidsinspectie. Te weinig loon kun je tot 5 jaar terugvragen."
- **Rules:** onderbetaald-stappen, onderbetaald-5jaar

### Cijfer kamer 2

- **Clue:** "Het 2e cijfer van het slot: kijk naar wat je in november te weinig kreeg. Neem het laatste cijfer van de hele euro's."
- **Shown with:** uren, tabel
- **Digit:** **5** (€ 15,00, whole euros 15, last digit 5).
- **Remember:** "Zoek het minimumloon voor jouw leeftijd op bij de Rijksoverheid. Krijg je te weinig? Spreek je werkgever aan. Helpt dat niet? Meld het dan bij de Nederlandse Arbeidsinspectie."

**Voor de docent (kamer 2):**
- Wachten tot januari mag niet: in november is Sam 17, dus geldt het bedrag voor 17 jaar.
- Op 1 januari 2027 gaat het minimumjeugdloon omhoog. Per uur: 15 jaar € 4,59; 16 jaar € 6,12; 17 jaar € 7,65; 18 jaar € 9,56; 19 jaar € 11,47; 20 jaar € 13,38; 21 jaar en ouder € 15,29 (Rijksoverheid, Bedragen minimumloon 2027, bijgewerkt op 6 november 2026). De link staat bij de bronnen.
- De vragen gaan over november 2026, dus de antwoorden blijven goed. Noem de nieuwe bedragen bij het nabespreken.

(Spec note, not shown: if the lesson is played after 1 January 2027, add the 2027 table next to the 2026 table, never instead of it; 2.1, 2.2 and digit 2 are about November 2026.)

---

## Kamer 3: Je rooster

**Date:** donderdag 3 december 2026, rooster voor week 50 (7 tot en met 13 december). **Where:** Buurtsuper Zeezicht.

**Intro:** "Je bent 17. Het is donderdag 3 december. Ilse stuurt je rooster voor week 50. Vrijdag 11 december is een studiedag: geen les."

### Document 1 `app` (type: chat)

> **Ilse Bakker (Buurtsuper Zeezicht)**, donderdag 3 december, 16:45
> "Hier is je rooster voor week 50. Vrijdag blijf je tot sluitingstijd, het is druk voor de kerst!"

### Document 2 `rooster` (type: rows; also the options of 3.1, keepOrder)

> **Je rooster, week 50 (7 tot en met 13 december 2026)**
>
> | Dag | Tijd | Uren op je werk |
> |---|---|---|
> | di 8 dec | 16:00 tot 18:00 | 2 uur |
> | do 10 dec | 16:00 tot 18:00 | 2 uur |
> | vr 11 dec | 19:00 tot 23:30 | 4,5 uur |
> | za 12 dec | 12:00 tot 18:00 | 6 uur |
>
> Je pauze valt binnen deze tijden.

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

### Document 4 `regel` (type: rule card, title "Regels als je jonger bent dan 18")

> r1. Je werkt nooit na 23:00 uur.
> r2. Elke 24 uur heb je minstens 12 uur achter elkaar vrij. Van 23:00 tot 06:00 uur ben je altijd vrij.
> r3. Je werkt maximaal 9 uur per dag. Schooltijd telt mee, ook je pauzes op school.
> r4. Werk je meer dan 4,5 uur? Dan krijg je minstens een half uur pauze.

("Per dag" in r3 is the pupil wording of the law's "per dienst": a dienst lies between two rests of at least 8 hours, art. 1:7, and with 12 hours of daily rest a school-and-work day is one dienst.)

**Check of the rooster against every rule shown in the lesson:** vr 11 dec is the only shift that clearly breaks one; a single week cannot show the 4-week average of 40 hours. The 24-hour period starts at the first moment of the day with work, and school counts as work (art. 5:3 lid 3, art. 4:4 lid 2). di and do: school 6 + work 2 = 8 uur (max 9); rest from 18:00 to 08:30 the next day is 14,5 uur and includes 23:00 to 06:00. wo with the 3.2 shift: 7 + 2 = 9 uur; rest from 17:30 to 08:30 is 15 uur. vr: no school; the shift ends after 23:00, so it breaks r1, and the rest from 23:30 to za 12:00 (12,5 uur) does not include 23:00 to 23:30 (art. 5:3 lid 1); ending at 23:00 would give 13 uur rest, fine. za: 6 uur on site with a 30-minute pause is 5,5 uur work, so r4 applies. Week: school 26 + work 14,5 = 40,5 uur (max 45; 42,5 with the wo shift). Sunday free, so no Sunday rule comes in.

**Moeilijke woorden:** "Dienst: de tijd dat je op je werk bent. Pauze: een rustmoment tijdens je werk. Studiedag: een schooldag zonder les."

### Vraag 3.1 `dienst` (pick, keepOrder, docs: app, rooster, regel)

- **Prompt:** "Welke dienst mag niet?"
- **Options (rooster order):** a "di 8 dec · 16:00 tot 18:00" · b "do 10 dec · 16:00 tot 18:00" · c "vr 11 dec · 19:00 tot 23:30" · d "za 12 dec · 12:00 tot 18:00"
- **Correct:** c
- **Retry points to:** rooster row "vr 11 dec: 19:00 tot 23:30"
- **Nudge:** "Kijk naar de eindtijd van elke dienst."
- **Hint (30 s):** "Vergelijk elke eindtijd met de eerste regel."
- **Explanation:** "Onder de 18 mag je niet na 23:00 uur werken. Je moet in elk geval van 23:00 tot 06:00 uur vrij zijn."
- **Rules:** nacht, rust-12

### Vraag 3.2 `schooldag` (pick, docs: school, regel)

- **Situation:** "Ilse vraagt: kun je woensdag 9 december na school ook komen?"
- **Prompt:** "Hoeveel uur mag je die woensdag nog werken?"
- **Options:** a "1 uur" · b "3 uur" · c "4 uur" · d "2 uur"
- **Correct:** d
- **Retry points to:** regel r3 "Je werkt maximaal 9 uur per dag. Schooltijd telt mee, ook je pauzes op school."
- **Nudge:** "Hoe lang ben je woensdag op school?"
- **Hint (30 s):** "Tel van 08:30 tot 15:30."
- **Explanation:** "Schooltijd telt mee als werktijd, ook je pauzes op school. Je werkt maximaal 9 uur per dag: 9 min 7 uur school is 2 uur."
- **Rules:** schooltijd, max-dienst

### Vraag 3.3 `pauze` (pick, docs: rooster, regel)

- **Prompt:** "Zaterdag ben je van 12:00 tot 18:00 op je werk. Hoeveel pauze krijg je minstens?"
- **Options:** a "Geen pauze" · b "15 minuten" · c "Een uur" · d "Een half uur"
- **Correct:** d
- **Retry points to:** regel r4 "Werk je meer dan 4,5 uur? Dan krijg je minstens een half uur pauze."
- **Nudge:** "Hoe lang werk je zaterdag?"
- **Hint (30 s):** "Het is meer dan een kwartier."
- **Explanation:** "Werk je meer dan 4,5 uur, dan krijg je minstens een half uur pauze. Soms mag dat in twee keer een kwartier."
- **Rules:** pauze

### Cijfer kamer 3

- **Clue:** "Het 3e cijfer van het slot: hoeveel uur mag je woensdag na school nog werken?"
- **Shown with:** school, regel
- **Digit:** **2** (9 uur per dag min 7 uur schooltijd, wo 08:30 tot 15:30 with breaks included; the 12-hour rest still holds, 17:30 to 08:30).
- **Remember:** "Onder de 18 werk je nooit na 23:00 uur. School en werk samen: maximaal 9 uur per dag. Werk je meer dan 4,5 uur? Dan krijg je een half uur pauze."

**Voor de docent (kamer 3):**
- De regels gelden voor 16 en 17 jaar. Onder de 16 gelden strengere regels; die zitten niet in deze les.
- 23:00 is de uiterste eindtijd, maar je hebt ook 12 uur rust achter elkaar nodig. Schooltijd telt als werktijd. Begint school de volgende dag om 08:30? Dan moet je werk om 20:30 klaar zijn.
- Ook geldt: maximaal 45 uur per week en gemiddeld 40 uur per week over 4 weken, school meegeteld.
- Pauze: minstens een half uur, zo nodig in twee keer een kwartier. De Rijksoverheid noemt daarbij een collectieve regeling; de Arbeidstijdenwet doet dat voor 16 en 17 jaar niet.

---

## Kamer 4: Belasting

**Date:** zaterdag 30 januari 2027. **Where:** thuis, met post van Buurtsuper Zeezicht en Lunchroom Het Plein.

**Intro:** "Het is zaterdag 30 januari 2027. Je jaaropgaaf over 2026 is binnen. Je werkt nog bij Buurtsuper Zeezicht, met loonheffingskorting. Op 1 februari begin je ook bij Lunchroom Het Plein."

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

### Document 3 `regel` (type: rule card, title "Regels")

> r1. Twee bijbanen tegelijk? Laat de loonheffingskorting bij één werkgever toepassen.
> r2. Te veel belasting betaald? Vraag het na afloop van het jaar terug met een aangifte.
> r3. Kreeg je geen brief dat je aangifte moet doen? Dan kun je tot 5 jaar na afloop van het jaar aangifte doen.

**Moeilijke woorden:** "Jaaropgaaf: een overzicht van je loon en je belasting over een heel jaar. Loonheffing: belasting en premies. Je werkgever haalt die van je loon af. Ingehouden: van je loon afgehaald. Loonheffingskorting: korting op je loonheffing. Aangifte: je geeft je inkomen van een jaar door aan de Belastingdienst."

### Vraag 4.1 `korting` (pick, docs: formulier, regel)

- **Situation:** "Je hebt al loonheffingskorting bij Buurtsuper Zeezicht. Je begint een tweede bijbaan erbij."
- **Prompt:** "Wat kies je bij Lunchroom Het Plein?"
- **Options:** a "Ja: dan krijg je bij allebei korting" · b "Allebei aankruisen: de Belastingdienst kiest wel" · c "Nee: de korting loopt al bij je eerste baan"
- **Correct:** c
- **Retry points to:** regel r1 "Twee bijbanen tegelijk? Laat de loonheffingskorting bij één werkgever toepassen."
- **Nudge:** "Bij hoeveel werkgevers tegelijk mag je korting hebben?"
- **Hint (30 s):** "Vanaf 1 februari werk je bij twee werkgevers tegelijk."
- **Explanation:** "Laat de korting bij één werkgever tegelijk toepassen. Bij twee werkgevers krijg je te veel korting: dan moet je waarschijnlijk bijbetalen."
- **Rules:** korting-een

### Vraag 4.2 `rij` (pick, keepOrder, docs: jaaropgaaf)

- **Prompt:** "Waar zie je hoeveel belasting er in 2026 van je loon af ging?"
- **Options (jaaropgaaf order):** a "Loon voor de loonheffing" · b "Ingehouden loonheffing" · c "Loonheffingskorting toegepast"
- **Correct:** b
- **Retry points to:** jaaropgaaf row "Ingehouden loonheffing: € 24,00"
- **Nudge:** "Zoek het woord dat betekent: van je loon afgehaald."
- **Hint (30 s):** "Loonheffing is belasting en premies."
- **Explanation:** "Bij 'Ingehouden loonheffing' staat wat je werkgever van je loon afhaalde. 'Loon voor de loonheffing' is het loon waarover je belasting betaalt."
- **Sources:** none needed for the reading itself ("none" line: "Dit haal je uit de jaaropgaaf zelf."); the word meaning of loonheffing is the gloss ESC-MAAND already uses. The old second sentence ("Dat bedrag heb je nodig voor je aangifte") is gone because it answered 4.3.

### Vraag 4.3 `terug` (pick, docs: jaaropgaaf, regel)

- **Prompt:** "Hoe kun je die belasting misschien terugkrijgen?"
- **Options:** a "Je werkgever vragen om het terug te storten" · b "Niets doen: het komt vanzelf terug" · c "Na afloop van het jaar aangifte doen bij de Belastingdienst"
- **Correct:** c
- **Retry points to:** regel r2 "Te veel belasting betaald? Vraag het na afloop van het jaar terug met een aangifte."
- **Nudge:** "Wie bepaalt of je belasting terugkrijgt?"
- **Hint (30 s):** "Je regelt het zelf bij de Belastingdienst."
- **Explanation:** "Je vraagt het terug met een aangifte, bijvoorbeeld in de app van de Belastingdienst. Of je iets terugkrijgt, en hoeveel, zie je pas daar."
- **Rules:** terug-aangifte

### Vraag 4.4 `jaar` (pick, docs: jaaropgaaf, regel)

- **Prompt:** "Tot en met welk jaar kun je over 2026 nog aangifte doen?"
- **Options:** a "2027" · b "2028" · c "2036" · d "2031"
- **Correct:** d
- **Retry points to:** regel r3 "Kreeg je geen brief dat je aangifte moet doen? Dan kun je tot 5 jaar na afloop van het jaar aangifte doen."
- **Nudge:** "Vanaf welk jaar tel je 5 jaar verder?"
- **Hint (30 s):** "2026 is voorbij op 31 december 2026. Tel er 5 jaar bij op."
- **Explanation:** "Je kunt tot 5 jaar na afloop van een jaar aangifte doen. Over 2026 kan dat dus tot en met 2031."
- **Rules:** vijf-jaar

### Cijfer kamer 4

- **Clue:** "Het 4e cijfer van het slot: tot en met welk jaar kan aangifte over 2026? Neem het laatste cijfer."
- **Shown with:** jaaropgaaf, regel
- **Digit:** **1** (2031). The Belastingdienst's own example: "In 2026 kunt u dus nog aangifte doen over 2021", so 2026 + 5 = 2031.
- **Remember:** "Twee bijbanen tegelijk? Laat de loonheffingskorting bij één werkgever toepassen. Bewaar je jaaropgaaf. Belasting terugvragen doe je met een aangifte."

**Voor de docent (kamer 4):**
- Werk je bij werkgevers na elkaar, niet tegelijk? Dan mag je de korting bij elke werkgever laten toepassen.
- Beloof geen bedrag terug. Of er iets terugkomt, zie je pas in de aangifte.
- De 5 jaar geldt als je geen bericht kreeg dat je aangifte moet doen (Belastingdienst). Kreeg je wel zo'n bericht, volg dan dat bericht. De uiterste datum voor 2026 is 31 december 2031.
- Op het echte formulier staat ook de studenten- en scholierenregeling. Die zit niet in deze les.

---

## Het slot

- Code: **3521** (kamer 1: 3, kamer 2: 5, kamer 3: 2, kamer 4: 1). Re-derived in this revision, unchanged. Each digit follows from the room's data, as in ESC-MAAND: change an hour, an amount or a date and the digit changes with it.
- Teacher screen: show the code only inside the closed Antwoordblad, not in the part the teacher projects (G3).
- Short lessons (two rooms) work as in ESC-MAAND: the code is the digits of those rooms, in date order. Suggested default pair: kamer 2 (uurloon) and kamer 3 (rooster).

## Startcheck en eindcheck: twee parallelle vormen, A en B (elk 4 vragen)

Each form has one question per room. Question n of form A and question n of form B test the same rule at the same difficulty (one step, no sum, no document needed), with a different situation and different numbers. No check question copies a room question (G3, G4): both forms are new text, no new rule (same rule ids, same sources). Every pair gets one form before the clock starts and the other after the lock opens. Counterbalance: odd pairs A before and B after, even pairs B before and A after. No feedback during a check; the pair sees before and after on the win screen. Option ids are fixed; the engine shuffles the order shown.

### Vorm A

| # | Room | Rule | Prompt (with situation) | Options | Correct (full text) |
|---|---|---|---|---|---|
| A1 | contract | oproeptermijn | "Je werkt bij een snackbar. Je contract zegt: oproepen minstens 4 dagen van tevoren. Woensdag om 18:00 vraagt je baas of je vrijdag komt. Moet je vrijdag komen?" | a "Ja, met een oproepcontract moet je altijd komen" · b "Ja, want het is meer dan 1 dag van tevoren" · c "Nee, je mag nee zeggen: de oproep is te laat" | c "Nee, je mag nee zeggen: de oproep is te laat" (2 dagen van tevoren) |
| A2 | uurloon | onderbetaald-stappen | "Je bent 18. In oktober 2026 krijg je € 7,00 per uur. Het minimumloon voor 18 jaar is dan € 7,50. Wat doe je eerst?" | a "Wachten tot je 19 bent" · b "Een melding doen bij de Belastingdienst" · c "Je werkgever erop aanspreken" · d "Meteen naar de rechter" | c "Je werkgever erop aanspreken" |
| A3 | rooster | nacht | "Je bent 17. Vrijdag heb je overdag geen school en geen werk. Je werkt vrijdagavond in een restaurant. Zaterdag heb je geen school en geen werk. Hoe laat moet je dienst uiterlijk klaar zijn?" | a "Om 22:00 uur" · b "Om 23:00 uur" · c "Om 00:00 uur" · d "Er is geen grens op vrijdag" | b "Om 23:00 uur" |
| A4 | belasting | korting-een | "Je werkt bij een kapper en krijgt daar al loonheffingskorting. Je neemt er een tweede bijbaan bij, bij een fietsenmaker. Wat zeg je tegen de fietsenmaker?" | a "Ja, pas de korting ook toe" · b "Nee, pas de korting niet toe: ik heb hem al bij de kapper" · c "Maakt niet uit: de Belastingdienst regelt het" | b "Nee, pas de korting niet toe: ik heb hem al bij de kapper" |

### Vorm B

| # | Room | Rule | Prompt (with situation) | Options | Correct (full text) |
|---|---|---|---|---|---|
| B1 | contract | oproeptermijn | "Je werkt bij een bloemenzaak. Je contract zegt: oproepen minstens 4 dagen van tevoren. Zondag om 12:00 vraagt je baas of je dinsdag komt. Moet je dinsdag komen?" | a "Ja, je baas bepaalt wanneer je werkt" · b "Ja, want het is meer dan 1 dag van tevoren" · c "Nee, je mag nee zeggen: de oproep is te laat" | c "Nee, je mag nee zeggen: de oproep is te laat" (2 dagen van tevoren) |
| B2 | uurloon | onderbetaald-stappen | "Je bent 16. In oktober 2026 krijg je € 4,90 per uur. Het minimumloon voor 16 jaar is dan € 5,17. Wat doe je eerst?" | a "Wachten tot je 17 bent" · b "Een melding doen bij de Belastingdienst" · c "Je werkgever erop aanspreken" · d "Meteen naar de rechter" | c "Je werkgever erop aanspreken" |
| B3 | rooster | nacht | "Je bent 16. Zaterdag heb je overdag geen school en geen werk. Je baas vraagt of je zaterdag tot middernacht blijft. Zondag heb je geen school en geen werk. Hoe laat moet je dienst uiterlijk klaar zijn?" | a "Om 00:00 uur, want zondag ben je vrij" · b "Om 23:00 uur" · c "Om 22:00 uur" · d "Er is geen grens in het weekend" | b "Om 23:00 uur" |
| B4 | belasting | korting-een | "Je werkt bij een bakker en krijgt daar al loonheffingskorting. Je neemt er een tweede bijbaan bij, via een uitzendbureau. Wat zeg je tegen het uitzendbureau?" | a "Ja, pas de korting ook toe" · b "Nee, pas de korting niet toe: ik heb hem al bij de bakker" · c "Maakt niet uit: de Belastingdienst regelt het" | b "Nee, pas de korting niet toe: ik heb hem al bij de bakker" |

Parallel checks: A1 and B1 both have a call 2 days ahead against a 4-day contract, with the same trap option b. A2 and B2 both give a wage below a real, date-stamped minimum (October 2026 stays true after 1 January 2027 because the date is in the question) and ask for the first step; same options apart from the age. A3 and B3 both ask for the latest end time with no school or work earlier that day and none the next day, so the 12-hour rest never binds and 23:00 is the one right answer (with school that morning, r2 of kamer 3 gives an earlier end, for example 20:30 after school from 08:30); the situations differ (17, vrijdag; 16, zaterdag tot middernacht). Rule checked on 6 Nov 2026: Rijksoverheid "Hoeveel pauze en rust" for 16 and 17 ("elke dag minimaal 12 uur rust", "in elk geval tussen 23.00 - 06.00 uur") and Rijksoverheid "Hoeveel uur werken 16, 17 jaar" ("Schooltijd telt ook mee als arbeidstijd"). A4 and B4 differ only in the employers. All amounts: 18 jaar € 7,50 and 16 jaar € 5,17 are the Rijksoverheid amounts for 1 juli to 31 december 2026.

**Antwoorden start- en eindcheck (voor de docent):**
- Vorm A: A1 "Nee, je mag nee zeggen: de oproep is te laat". A2 "Je werkgever erop aanspreken". A3 "Om 23:00 uur". A4 "Nee, pas de korting niet toe: ik heb hem al bij de kapper".
- Vorm B: B1 "Nee, je mag nee zeggen: de oproep is te laat". B2 "Je werkgever erop aanspreken". B3 "Om 23:00 uur". B4 "Nee, pas de korting niet toe: ik heb hem al bij de bakker".

## Lesplan (45 minuten)

| Minuut | Stap | Wat de docent doet |
|---|---|---|
| 0 tot 4 | Uitleg | Laat het docentenscherm zien. Leerlingen openen de link en werken met z'n tweeën op één scherm. Zeg: alles is verzonnen, behalve de regels en de tabel met het minimumloon. |
| 4 tot 6 | Startcheck | Elk tweetal beantwoordt 4 vragen voordat de klok start en ziet nog niet wat goed is. Geef geen hints. |
| 6 tot 33 | Escape | Start de klastimer op 27 minuten. Tweetallen spelen vier kamers en schrijven elk cijfer op. Loop rond; wijs bij vragen naar de regel in het document, niet naar het antwoord. Klaar voor de tijd? Laat het tweetal de gespreksvragen op het eindscherm bespreken. |
| 33 | Stop | Tik op Stop de escape. Iedereen stopt, ook wie nog niet klaar is. Lees de cijfers van het slot voor van je geprinte antwoordblad. Tweetallen die nog niet klaar zijn, openen het slot met die cijfers, of tikken onderaan op We stoppen en dan op Naar de eindcheck. Iedereen doet de eindcheck en het als-dan-plan. |
| 33 tot 35 | Eindcheck | Elk tweetal beantwoordt 4 vragen over dezelfde regels. Daarna ziet het wat het goed had, voor en na. |
| 35 tot 40 | Nabespreken | Vraag met handopsteken: wie had bij de startcheck 3 of 4 goed? En bij de eindcheck? Vraag welke kamer het lastigst was en begin daar. Kies een of twee gespreksvragen. Vraag naar ervaringen, niet naar punten. |
| 40 tot 42 | Afsluiten | Laat twee of drie leerlingen hun als-dan-plan hardop zeggen. Stel daarna de slotvraag. |
| 42 tot 45 | Reserve | Voor inloggen dat uitloopt, of een gesprek dat langer duurt. Loopt het inloggen uit? Houd minuut 33 als stopmoment aan. |

Totaal: 4 + 2 + 27 + 2 + 5 + 2 + 3 (reserve) = 45 minuten. Materials: a device per pair, pen and paper for the digits, a digital board or projector.

Tip voor de docent: een fout antwoord wordt doorgestreept. Een tweetal kan dus ook gokken tot het goed is. Het telt dan alleen niet mee bij "In één keer goed". Vertel de klas dat goed lezen sneller gaat. (G4 fix 12.)

(Spec notes, not shown: the minute-33 row uses the engine stop flow: the teacher taps "Stop de escape", pupils tap "We stoppen", type the read-out digits or tap "Naar de eindcheck". The digits are not on the open plan. Timing: playtest G4 estimated 24 minutes for a careful pair with 15 questions; this revision removes one question, two contract lines and three situation sentences, and the rule cards should cut first-try misses (7 to 8 of 15 in the playtest), so 27 minutes should fit most pairs. Not yet timed with real pupils.)

## Antwoordblad (voor de docent)

| Kamer | Vraag | Antwoord | Waarom, in één regel |
|---|---|---|---|
| 1 Contract | 1.1 Proeftijd | Nee, want je contract duurt 6 maanden of korter | Contract van 6 maanden of korter: geen proeftijd. |
| | 1.2 Te late oproep | Nee, je mag nee zeggen: de oproep is te laat | 1 dag van tevoren, het contract zegt 4 dagen. |
| | 1.3 Afgezegde dienst | 3 uur: alle uren van de oproep | Binnen 4 dagen afgezegd: loon over de opgeroepen uren. |
| | **Cijfer 1** | **3** | 13:00 tot 16:00 |
| 2 Uurloon | 2.1 Minimumloon | € 5,92 | 17 jaar; geldt 1 juli tot en met 31 december 2026. |
| | 2.2 Te weinig | € 15,00 | November 2026: 20 × (€ 5,92 min € 5,17) |
| | 2.3 Eerst | Je werkgever erop aanspreken | Eerste stap volgens de Rijksoverheid. |
| | 2.4 Daarna | Een melding doen bij de Nederlandse Arbeidsinspectie | Als de werkgever het niet oplost. |
| | **Cijfer 2** | **5** | € 15,00 |
| 3 Rooster | 3.1 Dienst die niet mag | vr 11 dec · 19:00 tot 23:30 | Eindigt na 23:00. |
| | 3.2 Woensdag | 2 uur | 9 uur per dag, 7 uur school (met pauzes) telt mee. |
| | 3.3 Pauze | Een half uur | Meer dan 4,5 uur werken. |
| | **Cijfer 3** | **2** | 9 min 7 |
| 4 Belasting | 4.1 Korting | Nee: de korting loopt al bij je eerste baan | Eén werkgever tegelijk. |
| | 4.2 Ingehouden loonheffing | Ingehouden loonheffing | Lezen van de jaaropgaaf. |
| | 4.3 Terug | Na afloop van het jaar aangifte doen bij de Belastingdienst | Geen bedrag beloven. |
| | 4.4 Jaar | 2031 | Tot 5 jaar na afloop van 2026. |
| | **Cijfer 4** | **1** | 2031 |
| | **Code** | **3521** | |

(Spec note: no letters in this sheet and no "sheetLetters" note; the check key is the block "Antwoorden start- en eindcheck" above.)

## Nabespreken

**Drie gespreksvragen:**
1. "Wie van jullie heeft een bijbaan, of zoekt er een? Las je je contract voordat je tekende? Wat snapte je er niet aan?"
2. "Stel: je baas betaalt te weinig, of zet je tot 23:30 op het rooster. Durf je dat te zeggen? Hoe zou je het zeggen, en wie kan je helpen?"
3. "Waarom zeggen jongeren vaak niets als er iets niet klopt bij hun bijbaan? Wat zou het makkelijker maken?"

**Slotvraag (één, voor de hele klas):** "Welke check doe jij deze week bij je eigen bijbaan: je contract, je uurloon, je rooster of je loonheffingskorting?"

**Als-dan-plan (per leerling, vaste keuzes):** "Als ___, dan ___. Dat doe ik binnen ___."
- Situaties: "ik mijn contract krijg" · "ik mijn uren en mijn uurloon zie" · "ik een dienst na 23:00 op mijn rooster zie" · "ik een tweede bijbaan begin" · "ik mijn jaaropgaaf krijg"
- Acties: "lees ik de proeftijd en de oproepregels na" · "zoek ik het minimumloon voor mijn leeftijd op bij de Rijksoverheid" · "spreek ik mijn werkgever aan" · "laat ik de loonheffingskorting bij maar één werkgever toepassen" · "doe ik aangifte bij de Belastingdienst"
- Termijnen: "een dag" · "een week" · "een maand"
- Lead: "Wat ga jij echt regelen na deze les? Maak er een als-dan-plan van. Ieder maakt een eigen plan."
- Example card: "Als ik mijn contract krijg, dan lees ik de proeftijd en de oproepregels na. Dat doe ik binnen een dag." The term is the pupil's own promise, not a rule (as in plan18.js). Needs the G3 engine change to the card sentence ("Dat doe ik binnen ...").

---

## Alle bedragen met hun geldigheid

| Bedrag | Waar | Echt of verzonnen | Geldt voor |
|---|---|---|---|
| € 4,50 / € 5,17 / € 5,92 / € 7,50 per uur (15 / 16 / 17 / 18 jaar) | tabel kamer 2, opties 2.1, vragen A2 (18 jaar) en B2 (16 jaar) | echt (Rijksoverheid, government.nl) | 1 juli 2026 tot en met 31 december 2026 |
| € 5,81 per uur (17 jaar) | optie 2.1 b (afleider) | echt | 1 januari 2026 tot en met 30 juni 2026 (verlopen) |
| € 5,17 per uur (Sams loon) | urenoverzicht en app kamer 2 | verzonnen loon; gelijk aan het echte bedrag voor 16 jaar | november 2026 |
| € 103,40 (betaald) en € 118,40 (juist) brutoloon | kamer 2 | berekend uit verzonnen uren | november 2026, op basis van de bedragen van 1 juli tot en met 31 december 2026 |
| € 0,75 per uur en € 15,00 te weinig | vraag 2.2, cijfer 2 | berekend | november 2026 |
| 8% vakantiegeld (minstens) | tabel kamer 2, één regel | echt (Wet minimumloon art. 15) | geen einddatum bekend |
| € 7,00 per uur | vraag A2 | verzonnen | oktober 2026 |
| € 4,90 per uur | vraag B2 | verzonnen | oktober 2026 |
| € 480,00 loon en € 24,00 ingehouden loonheffing | jaaropgaaf kamer 4 | verzonnen voorbeeld, geen berekening | jaar 2026 (1 september tot en met 31 december 2026) |
| € 4,59 / € 6,12 / € 7,65 / € 9,56 / € 11,47 / € 13,38 / € 15,29 per uur (15 / 16 / 17 / 18 / 19 / 20 / 21+ jaar) | alleen docentnoot kamer 2 | echt (Rijksoverheid, bedragen minimumloon 2027, page modified 6 Nov 2026 12:16 UTC) | vanaf 1 januari 2027; the page gives no end date |

(The 2027 percentages, 16: 40%, 17: 50%, 18: 62,5%, 19: 75%, 20: 87,5%, are no longer in the teacher note; they remain in source row `wml-2027`.)

## Bronnen (source table)

All pages read on **6 Nov 2026** (the fact check B rows re-read in this revision on the same day). "Page date" is the modified date the page itself gives (metadata), where it gives one. Next check: before 1 January 2027, when the kamer 2 table expires.

| Rule id | Rule (as used in the lesson) | Source 1 | Source 2 | Checked | Valid until |
|---|---|---|---|---|---|
| proeftijd-kort | Contract van 6 maanden of korter: geen proeftijd. | [Rijksoverheid, hoelang duurt een proeftijd](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/arbeidsovereenkomst-en-cao/hoelang-duurt-een-proeftijd) (page date 12 Aug 2026): "Bij een tijdelijk contract van 6 maanden of korter mag uw werkgever geen proeftijd afspreken." | Law: [BW 7:652 lid 6 onder a](https://wetten.overheid.nl/BWBR0005290/2026-01-01) (wetten.overheid.nl, version 1 Jan 2026): "Er kan geen proeftijd worden overeengekomen indien de arbeidsovereenkomst: a. is aangegaan voor ten hoogste zes maanden"; lid 7 gives no cao exception for lid 6. Also Ondernemersplein proeftijd. | 6 Nov 2026 | No end date known |
| proeftijd-max | Langer contract: korte proeftijd, meestal 1 of 2 maanden. | Rijksoverheid proeftijd: maximaal 1 maand bij meer dan 6 maanden en korter dan 2 jaar; maximaal 2 maanden bij vast of 2 jaar of langer; "Bij tijdelijke arbeidscontracten kunnen andere regels voor de proeftijd gelden. Dit kan alleen als dit in de cao staat." | BW 7:652 lid 3, lid 4 (a: een maand; b: twee maanden) and lid 7 (lid 4 onder a can be changed by cao "ten nadele van de werknemer") | 6 Nov 2026 | No end date known |
| proeftijd-wat | In de proeftijd mogen jij en je werkgever het contract direct stoppen (word explanation). | Rijksoverheid proeftijd: "kunnen u en uw werkgever de arbeidsovereenkomst direct opzeggen" | Ondernemersplein proeftijd: "direct en zonder reden opzeggen" | 6 Nov 2026 | No end date known |
| nuluren | Nulurencontract: oproepcontract zonder vast aantal uren (word explanation). | [Rijksoverheid, welke contracten zijn er voor oproepkrachten](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/arbeidsovereenkomst-en-cao/welke-contracten-zijn-er-voor-oproepkrachten) (page date 13 Oct 2026): names the nulurencontract as an oproepcontract | [Ondernemersplein, regels voor oproepkrachten](https://ondernemersplein.overheid.nl/wetten-en-regels/regels-voor-oproepkrachten/) (no page date) | 6 Nov 2026 | Wet meer zekerheid flexwerkers per 1 Jan 2028 (bandbreedtecontract instead of nulurencontract); oproepcontract stays allowed for scholieren and studenten met een bijbaan ([Ondernemersplein, nulurencontracten niet meer toegestaan](https://ondernemersplein.overheid.nl/wetswijzigingen/nulurencontracten-niet-meer-toegestaan/), single source; teacher note kamer 1) |
| oproeptermijn | Oproep minstens 4 dagen van tevoren; later opgeroepen: je hoeft niet te komen. Cao kan het korter maken, niet korter dan 24 uur (teacher note only). | Rijksoverheid oproepkrachten: "minstens 4 kalenderdagen van tevoren"; "bent u niet verplicht om te komen werken" | Law: BW 7:628a lid 2 (vier dagen) and lid 4 (cao: "mits de termijn niet korter is dan 24 uur") | 6 Nov 2026 | Until the 1 Jan 2028 change; re-check |
| afzeggen | Afzeggen of veranderen binnen 4 dagen: loon over de opgeroepen uren. | Rijksoverheid oproepkrachten: "recht op loon over de uren waarop u was opgeroepen" | Law: BW 7:628a lid 3: "recht op het loon waarop hij aanspraak zou hebben indien hij de arbeid overeenkomstig de oproep zou hebben verricht" | 6 Nov 2026 | Until the 1 Jan 2028 change; re-check |
| oproep-3uur | Teacher note only: per oproep minstens 3 uur loon, ook als je korter werkt. | Rijksoverheid oproepkrachten (page date 13 Oct 2026): "Iedere keer dat uw werkgever u oproept, heeft u recht op minimaal 3 uur loon. Ook als u maar 1 uur werkt." | Law: BW 7:628a lid 1: "voor iedere periode van minder dan drie uur waarin hij arbeid heeft verricht, recht op het loon ... indien hij drie uur arbeid zou hebben verricht" | 6 Nov 2026 | Until the 1 Jan 2028 change; re-check |
| wml-2026-2 | Minimumloon per uur, bruto: 15 jaar € 4,50; 16 jaar € 5,17; 17 jaar € 5,92; 18 jaar € 7,50. | [Rijksoverheid, bedragen minimumloon 2026](https://www.rijksoverheid.nl/onderwerpen/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2026) (page date 6 Nov 2026, 12:26 UTC; amounts re-read, unchanged; "In de tabellen staan brutobedragen") | [Government.nl, minimum wage amounts](https://www.government.nl/topics/minimum-wage/minimum-wage-amounts) (page date 17 Jun 2026) | 6 Nov 2026 | **Valid 1 Jul 2026 to 31 Dec 2026.** Changes 1 Jan 2027. |
| wml-2026-1 | Distractor only: 17 jaar € 5,81 (16 jaar € 5,07, 18 jaar € 7,36). | Rijksoverheid bedragen 2026 | Government.nl amounts | 6 Nov 2026 | Valid 1 Jan 2026 to 30 Jun 2026 (expired) |
| wml-leeftijd | Het minimumloon hangt af van je leeftijd; je werkgever betaalt minstens het bedrag voor jouw leeftijd. | Rijksoverheid bedragen 2026 (table by age) | Government.nl amounts (table by age) | 6 Nov 2026 | Ongoing |
| vakantiegeld | Tabel kamer 2: bedragen zonder vakantiegeld; daarnaast minstens 8% vakantiegeld. | Law: [Wet minimumloon art. 15 lid 1](https://wetten.overheid.nl/BWBR0002638/2026-07-01) (wetten.overheid.nl, version 1 Jul 2026): "recht op een vakantiebijslag ten minste tot een bedrag van 8% van zijn ten laste van de werkgever komende loon"; the minimumloon itself is art. 8 | Rijksoverheid bedragen 2026: the table gives the minimumloon as brutobedragen and lists no holiday pay | 6 Nov 2026 | No end date known |
| wml-2027 | Teacher note only: euro amounts per 1 Jan 2027 (15: € 4,59; 16: € 6,12; 17: € 7,65; 18: € 9,56; 19: € 11,47; 20: € 13,38; 21+: € 15,29). | [Rijksoverheid, bedragen minimumloon 2027](https://www.rijksoverheid.nl/themas/werk/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2027) (page date 6 Nov 2026, 12:16 UTC; re-read in this revision, same amounts) | [Rijksoverheid nieuws, hoger minimumjeugdloon vanaf 2027](https://www.rijksoverheid.nl/actueel/nieuws/2026/04/17/hoger-minimumjeugdloon-vanaf-2027) (17 Apr 2026): percentages 16: 40%, 17: 50%, 18: 62,5%, 19: 75%, 20: 87,5%; the euro amounts match them | 6 Nov 2026 | From 1 Jan 2027; no end date on the page. Not in any question. |
| onderbetaald-stappen | Te weinig loon: spreek eerst je werkgever aan; lost hij het niet op, doe een melding bij de Nederlandse Arbeidsinspectie. | [Rijksoverheid, wat kan ik doen als ik minder loon krijg dan het wettelijk minimumloon](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/minimumloon/wat-kan-ik-doen-als-ik-minder-loon-krijg-dan-het-wettelijk-minimumloon) (page date 21 Jan 2026): "Spreek eerst uw werkgever hierop aan."; "Komt u er met uw werkgever niet uit, dan kunt u terecht bij de Nederlandse Arbeidsinspectie." | [Government.nl, less than the minimum wage](https://www.government.nl/topics/minimum-wage/less-than-the-minimum-wage) (page date 5 Feb 2024) | 6 Nov 2026 | No end date known |
| onderbetaald-5jaar | Te weinig loon kun je tot 5 jaar terugvragen. | Rijksoverheid (as above): "U rekent 5 jaar vanaf de dag waarop u recht had op het loon of vakantiegeld." | Government.nl (as above) | 6 Nov 2026 | No end date known |
| nacht | 16 en 17 jaar: nooit na 23:00 uur werken; van 23:00 tot 06:00 uur altijd vrij. | [Rijksoverheid, hoeveel uur werken 16 of 17 jaar](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/bijbaan-vakantiewerk-en-stage-door-jongeren/hoeveel-uur-werken-16-17-jaar) (page date 12 Dec 2025): "Je mag niet 's nachts werken"; [Rijksoverheid, hoeveel pauze 16 of 17 jaar](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/bijbaan-vakantiewerk-en-stage-door-jongeren/hoeveel-pauze-16-17-jaar) (page date 12 Dec 2025): "In elk geval tussen 23.00 - 06.00 uur" | Law: [Arbeidstijdenwet art. 5:3 lid 1](https://wetten.overheid.nl/BWBR0007671/2025-07-01) (wetten.overheid.nl, geldend van 1 juli 2025 tot heden): "waarin zijn begrepen de uren tussen 23.00 uur en 06.00 uur"; also [NLA, BIM Arbeid door jeugdigen en kinderen](https://www.nlarbeidsinspectie.nl/binaries/nlarbeidsinspectie/documenten/richtlijnen/2017/04/06/bim-arbeidstijdenwet-arbeid-door-jeugdigen-en-kinderen/BIM-Arbeid-door-jeugdigen-en-kinderen.pdf) (7 Mar 2017) | 6 Nov 2026 | No end date known |
| rust-12 | 16 en 17 jaar: elke 24 uur minstens 12 uur achter elkaar vrij, met daarin 23:00 tot 06:00 uur. Teacher note: school de volgende dag om 08:30, dan werk om 20:30 klaar. | Rijksoverheid hoeveel pauze 16 of 17 jaar (table "Rusttijden jongeren van 16 en 17 jaar"): "Minimum dagelijkse rust 12 uur" | Law: Arbeidstijdenwet art. 5:3 lid 1 ("een onafgebroken rusttijd ... van ten minste 12 uren in elke aaneengesloten periode van 24 uren") and lid 3 (the period starts "op het eerste tijdstip van de dag, waarop de werknemer arbeid verricht"); art. 4:4 lid 2 (school is arbeidstijd). The 20:30 example is arithmetic from these articles (08:30 min 12 uur). | 6 Nov 2026 | No end date known |
| max-dienst | 16 en 17 jaar: maximaal 9 uur per dienst, pupil wording "per dag" (45 per week, gemiddeld 40 over 4 weken: teacher note). | Rijksoverheid hoeveel uur 16 of 17 jaar (table: 9 uur per dienst, 45 per week, 160 per 4 weken) | Law: Arbeidstijdenwet art. 5:7 lid 1 (wetten.overheid.nl, geldend van 1 juli 2025 tot heden); art. 1:7 ("dienst": between two rests of at least 8 uren) | 6 Nov 2026 | No end date known |
| schooltijd | Schooltijd telt mee als arbeidstijd, de pauzes op school inbegrepen. | Rijksoverheid hoeveel uur 16 of 17 jaar: "Schooltijd telt ook mee als arbeidstijd." | Law: Arbeidstijdenwet art. 4:4 lid 2: "de onderbrekingen inbegrepen, als arbeidstijd"; NLA BIM 2017 | 6 Nov 2026 | No end date known |
| pauze | Meer dan 4,5 uur werken: minstens een half uur pauze, zo nodig in twee keer 15 minuten. | Rijksoverheid hoeveel pauze 16 of 17 jaar: "meer dan 4,5 uur werkt, heb je recht op een half uur pauze" (names a collectieve regeling for the split) | Law: Arbeidstijdenwet art. 5:4 lid 1: "ten minste 30 minuten, die zonodig kan worden gesplitst in pauzes van elk ten minste 15 minuten" (no collectieve regeling for jeugdigen) | 6 Nov 2026 | No end date known |
| korting-een | Loonheffingskorting bij één werkgever tegelijk; bij twee krijg je te veel korting en moet je waarschijnlijk bijbetalen. | [Belastingdienst, loonheffingskorting met een bijbaan](https://www.belastingdienst.nl/wps/wcm/connect/nl/jongeren/content/loonheffingskorting-met-een-bijbaan) (page date 17 Mar 2026): "Vraag dan bij 1 werkgever de loonheffingskorting aan." | [Belastingdienst, loonheffingskorting met meerdere inkomens](https://www.belastingdienst.nl/wps/wcm/connect/nl/werk-en-inkomen/content/loonheffingskorting-meerdere-inkomens) (page date 5 Aug 2026): "op maximaal 1 inkomen" | 6 Nov 2026 | No end date known |
| terug-aangifte | Te veel betaalde belasting vraag je na afloop van het jaar terug met een aangifte (app of Mijn Belastingdienst); geen bedrag beloven. | [Belastingdienst, kan ik belasting terugvragen](https://www.belastingdienst.nl/wps/wcm/connect/nl/jongeren/content/kan-ik-belasting-terugvragen) (page date 8 Sep 2026): "na afloop van het jaar terugkrijgen via de aangifte" | [Belastingdienst, hoeveel jaar terug belastingaangifte doen](https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/hoe_werkt_inkomstenbelasting/aangifte_doen/hoeveel-jaar-terug-belastingaangifte-doen) (page date 9 Jun 2026) | 6 Nov 2026 | No end date known |
| vijf-jaar | Kreeg je geen brief dat je aangifte moet doen? Dan kan aangifte tot 5 jaar na afloop van een jaar: over 2026 tot en met 2031 (pupil rule card kamer 4). | Belastingdienst hoeveel jaar terug (page date 9 Jun 2026, re-read): "Hebt u geen bericht gehad dat u aangifte moet doen voor de inkomstenbelasting? Dan kunt u dat tot 5 jaar terug doen. In 2026 kunt u dus nog aangifte doen over 2021."; table: 2025 "31 december 2030" | Belastingdienst jongeren terugvragen: "Je kunt tot 5 jaar na afloop van een jaar aangifte doen" | 6 Nov 2026 | No end date known |

Word meanings without a rule: oproepen, dienst, pauze, studiedag, jaaropgaaf, ingehouden, aangifte, brutoloon, vakantiegeld and loonheffing (the last three as in content/SHARED_EXPLANATIONS.md and ESC-MAAND).

## Uncertainties and things left out

1. **2027 youth wage.** The euro amounts are on the Rijksoverheid page "Bedragen minimumloon 2027" (page date 6 Nov 2026) and match the percentages of the news item of 17 Apr 2026. The existing teacher text elsewhere in the project says only 18, 19 and 20 rise; Rijksoverheid says 16 to 20. That text is outside this spec and needs a fix there.
2. **Night, rest and school time.** Every rule is in the Arbeidstijdenwet (art. 1:7, 4:4, 5:3, 5:4, 5:7, version geldend van 1 juli 2025 tot heden). The pupil wording "9 uur per dag" simplifies "per dienst". Neither source gives the exact worked example of 3.2 or the 20:30 example; both are arithmetic from the articles.
3. **Left out, single source or unverified:** the 1 Jan 2028 change to on-call contracts (only Ondernemersplein; teacher note only), "melden mag anoniem" (only government.nl), the jaaropgaaf label "loonbelasting" (only Belastingdienst jongeren), the notice period (opzegtermijn, not checked), DigiD for the aangifte, and the date from which the 2026 aangifte can be filed (not on the two Belastingdienst pages read).
4. **Birthday switch.** No official page read says on which day a higher youth rate starts; Wet minimumloon art. 7 lid 1 ("heeft bereikt") concerns 21 and older, and the youth-wage decree was not found on wetten.overheid.nl. Room 2 avoids it: November is a whole month at 17.
5. **Small issues:** the Rijksoverheid table shows "€ 7,50<" for 18 jaar (stray character; government.nl gives € 7.50). Ondernemersplein pages show no date. The fictional jaaropgaaf amounts are not a real calculation; real withholding at this income may well be € 0.
6. **Not measured:** readability (no Flesch-Douma score yet) and timing (the 27 minutes are not timed with real pupils; see the lesplan spec note).

## Changelog

**6 Nov 2026, third revision: gate round 2 (`qa/gate_round2.md`).** Code stays **3521**; no answer, option or digit changed.
- Lesplan row Stop: named the real buttons ("Stop de escape" for the teacher; "We stoppen", then "Naar de eindcheck" for pupils, as the engine shows them). The teacher reads the digits from the printed answer sheet; no digits on the open plan.
- Check A3 and B3: the 23:00 answer only holds without school or work earlier that day (r2 of kamer 3: 12 hours rest, school counts). Rule verified on Rijksoverheid on 6 Nov 2026 ("Jongeren van 16 en 17 ... moeten elke dag minimaal 12 uur rust hebben", "in elk geval tussen 23.00 - 06.00 uur"; "Schooltijd telt ook mee als arbeidstijd"). A3 adds "Vrijdag heb je overdag geen school en geen werk."; B3 adds "Zaterdag heb je overdag geen school en geen werk." The two stay parallel; the parallel note is updated. wetten.overheid.nl (Arbeidstijdenwet art. 5:3) could not be opened this round; the spec's earlier reading of art. 5:3 stands.
- Lesplan row Afsluiten: removed "Over 3 tot 5 weken: laat de klas de eindcheck nog eens doen." (the site cannot open only the end check). Shared finding: the plan is asked for once, in the Stop row. Escape row no longer says "en elk een als-dan-plan maken"; Afsluiten now "Laat twee of drie leerlingen hun als-dan-plan hardop zeggen. Stel daarna de slotvraag."
- Materials and Tip voor de docent added under the plan, as in Op kamers (G4 fix 12, the strike-out tip, was missing here).
- Kamer 2 Remember: "Helpt dat niet? Meld het dan bij de Nederlandse Arbeidsinspectie."
- Kamer 2 teacher note: the raw URL is gone; the line ends "(Rijksoverheid, Bedragen minimumloon 2027, bijgewerkt op 6 november 2026). De link staat bij de bronnen."
- Kamer 3 rule card title: "Regels als je jonger bent dan 18".
- Lead added to the overview table: "Je eerste bijbaan: je contract lezen, je uurloon nakijken, je rooster checken en je loonheffingskorting goed regelen."
- Spec note under the plan: the stop flow now exists in the engine.

**6 Nov 2026, second revision: fact check B, gate G3 to G8, playtest G4.** Answer key re-derived: digit 1 = 3 (13:00 to 16:00, cancelled 2 days ahead), digit 2 = 5 (20 × € 0,75 = € 15,00), digit 3 = 2 (9 min 7; rest 17:30 to 08:30 is 15 uur), digit 4 = 1 (2026 + 5 = 2031). **Code stays 3521.** Question numbers changed: old 3.2 `tot` removed, old 3.3 `schooldag` is now 3.2, old 3.4 `pauze` is now 3.3; contract lines renumbered c1 to c7.

Fact check B: each finding re-checked on an official page on 6 Nov 2026. The report header says 11 RISK; it lists 10.

| # | Check B finding | Decision | Verification and change |
|---|---|---|---|
| B-1 | ERROR, explanation 1.1: 1 month as absolute maximum; a cao can differ | Applied | BW 7:652 lid 7: lid 4 onder a (1 month) can be changed by cao; Rijksoverheid: "Dit kan alleen als dit in de cao staat." Lid 6 (6 months or shorter: no proeftijd) has no cao exception, so answer c stands. Explanation 1.1 now says "meestal 1 of 2 maanden"; source row `proeftijd-max` rewritten. Check B's wording not used: it would add a third sentence. |
| B-2 | RISK: at least 3 hours pay per call | Applied in teacher note, not in pupil text | Confirmed by BW 7:628a lid 1 and the Rijksoverheid oproepkrachten page ("minimaal 3 uur loon. Ook als u maar 1 uur werkt"); uncertainty 3 ("only Ondernemersplein") was outdated. Teacher note kamer 1 covers the 2-hour shifts in `app1` and in the kamer 3 rooster; new source row `oproep-3uur`. Not in pupil text: no question needs it, and it would give a second route to the 1.3 answer "3 uur", so 1.3 would no longer show whether the pupil applies the cancel rule. Digit 1 unaffected. |
| B-3 | RISK: table is gross and excludes 8% holiday pay | Applied | Wet minimumloon art. 15 lid 1 (vakantiebijslag at least 8% of loon, separate from the minimumloon of art. 8); Rijksoverheid 2026 page: brutobedragen. Tabel kamer 2 has one line; gloss "Vakantiegeld" added; source row `vakantiegeld`. |
| B-4 | RISK: higher wage starts on the birthday itself | Rejected | Not found on an official page for youth wages (see uncertainty 4). No question depends on it: November is wholly at 17. |
| B-5 | RISK: 2027 euro amounts, re-verify | Verified, kept | Rijksoverheid "Bedragen minimumloon 2027" opened and read (page date 6 Nov 2026 12:16 UTC): same seven amounts. Kept in the teacher note with URL and date; 21+ amount added. |
| B-6 | ERROR, 3.2, remember line, check A3: 23:00 without the 12-hour rest | Applied, with a different fix | Arbeidstijdenwet art. 5:3 lid 1 and lid 3, art. 4:4 lid 2, Rijksoverheid rest table confirm: 12 uur rust per 24 uur, period from the first moment of work (school counts), so with school at 08:30 work must end by 20:30. Question 3.2 `tot` removed (G4 also found it answered by the 3.1 feedback); the 12-hour rule is now regel r2 in kamer 3, in rule ids of 3.1 and in a teacher note; A3 and B3 rewritten so there is no school or work the next day, which makes 23:00 the one right answer. Check B's pupil sentence ("12 uur ... voordat je weer naar school of werk gaat") not used as such: the law counts per 24-hour period, so the card uses the Rijksoverheid wording. |
| B-7 | RISK: Saturday 12:00 to 18:00 = 6 hours with no break shown | Applied | Rooster column now "Uren op je werk", with the line "Je pauze valt binnen deze tijden."; 3.3 prompt says "op je werk". 6 uur on site with 30 minutes pause is 5,5 uur work, still over 4,5, so answer and rule hold. |
| B-8 | RISK: "exactly one shift breaks the rules" | Applied | Internal check line now: the only shift that clearly breaks a rule shown in the lesson; a single week cannot show the 4-week average. |
| B-9 | RISK: add 45 h per week and 40 h average for pupils | Rejected for pupil text | Correct (art. 5:7 lid 1), but no question uses it and the playtest found the lesson long; it stays in the teacher note. |
| B-10 | RISK: jaaropgaaf 2026 as proof the korting still runs in February 2027 | Applied | Kamer 4 intro now says Sam still works at Buurtsuper Zeezicht with loonheffingskorting; 4.1 situation names Buurtsuper Zeezicht; 4.1 pointer is now regel r1, not the jaaropgaaf row. |
| B-11 | RISK: 4.3, 2026 return usually available from March | Rejected | Neither Belastingdienst page opened (jongeren terugvragen, hoeveel jaar terug) says when the aangifte opens. The lesson never says Sam files on 30 January; 4.3 says "na afloop van het jaar". Added to uncertainty 3. |
| B-12 | RISK: 4.4 holds only without an aangiftebrief | Applied | Belastingdienst hoeveel jaar terug (page date 9 Jun 2026): "Hebt u geen bericht gehad ... tot 5 jaar terug doen". Pupil regel r3 kamer 4 now carries the condition; the teacher note keeps "volg dan dat bericht". |

Gate G3 to G8 (teacher reviewer and Dutch editor):

| # | G3 item | Change |
|---|---|---|
| G-1 | Blocker: plan card "Als mijn contract krijg" | Situations now start with "ik"; card form "Als ___, dan ___. Dat doe ik binnen ___." (needs the engine card change). |
| G-2 | Blocker: developer and English text in teacher notes | Kamer 2 note replaced (no file name, no "page date", no build instruction); the build instruction is a spec note marked "not shown". Kamer 1: "Dat staat alleen op Ondernemersplein ... Kijk het na voor 2028" deleted. Kamer 4: "(Belastingdienst)" only; the table-pattern bracket deleted. Kamer 2 "Teacher point" folded into a Dutch note. Fiction line no longer says "Bij elke uitleg staat de bron", which pupils never see. |
| G-3 | All lessons: plan without buffer, fast pairs, hand count, code on projected screen | New plan: Uitleg 4, Startcheck 2, Escape 27, stop at minute 33, Eindcheck 2, Nabespreken 5, Afsluiten 2, Reserve 3. Escape row says what fast pairs do; minute 33 row says what happens to unfinished pairs; Nabespreken uses the G3 hand count; code only in the closed Antwoordblad. |
| G-4 | All lessons: check key in letters; form A copies room questions | Antwoordblad and check key give full answer text, no letters. Form A fully rewritten as parallel items; no check item copies a room question. |
| G-5 | Smaller eerste-bijbaan items | "terugvragen" as one word (2.4); B4 and B2 reworded as proposed; Afsluiten repeat line; dienst.explain wording "Je moet in elk geval van 23:00 tot 06:00 uur vrij zijn"; leerdoelen in third person ("De leerling kan"); "docentenscherm"; 4.2 key label "Ingehouden loonheffing"; plan action "spreek ik mijn werkgever aan". Escape length: see P-6. |

Playtest G4:

| # | G4 item | Change |
|---|---|---|
| P-1 | Rules not in any document | Each room has a `regel` card: proeftijd and 4 dagen (kamer 1), stappen en Arbeidsinspectie (kamer 2), 23:00, 12 uur rust, 9 uur per dag, pauze (kamer 3), korting, aangifte, 5 jaar (kamer 4). |
| P-2 | 2.4 pointer also fits the Belastingdienst | Prompt "Wat kun je doen als je werkgever het verschil niet betaalt?"; pointer is regel r3; nudge names "arbeidswetten"; hint rules out the Belastingdienst. |
| P-3 | 3.2 answered by the 3.1 feedback | 3.2 removed (see B-6). Also 4.2 explanation no longer answers 4.3. |
| P-4 | Pointers to more than one place | 1.3 (was two messages) and 2.2 (was two rows) now point to one line each. |
| P-5 | Digit clues: ordinal confusion and memory | All four clues start "Het ne cijfer van het slot" and list the documents shown on the digit screen. |
| P-6 | Lesson runs long (24 min careful pair) | One question fewer, contract two lines shorter, situation 1.2 and kamer 1 and 4 intros shorter, remember line kamer 2 shorter; rule cards should cut retries. Two chat blocks in kamer 1 now have distinct titles. Glosses show with every question of a room. |

**6 Nov 2026, fixes from `factcheck_A_eerste-bijbaan.md`** (each fix re-read on its source on 6 Nov 2026). Answer key unchanged: no digit changed, code stays **3521**. Question numbers below are those before the second revision.

| # | Report row answered | Class | Change |
|---|---|---|---|
| 1 | Kamer 3, document `school`, vraag 3.3, cijfer 3, remember line, Antwoordblad 3.3 | ERROR | Document `school` now gives clock times with breaks (column "Op school", wo 9 dec 08:30 tot 15:30 (7 uur)); retry pointer, nudge, explanation 3.3, digit note, remember line and Antwoordblad 3.3 say school time counts with breaks. Re-checked: Arbeidstijdenwet art. 4:4 lid 2 ("de onderbrekingen inbegrepen"). Digit 3 stays 2 (9 min 7). |
| 2 | Kamer 1, explanation 1.1 | RISK | Explanation got the 1-month cap (revised again in the second revision, B-1). |
| 3 | Kamer 1, Voor de docent bullet 3; source row `nuluren`; uncertainties 3 | RISK | Teacher note on the Wet meer zekerheid flexwerkers per 1 Jan 2028, with oproepcontract still allowed for scholieren and studenten met een bijbaan. |
| 4 | Kamer 3, Voor de docent bullet 3; source row `pauze` | RISK | Teacher note gives both Rijksoverheid (collectieve regeling) and Arbeidstijdenwet 5:4 lid 1; pupil text unchanged. |
| 5 | Kamer 2, Voor de docent; source row `wml-2027`; uncertainties 1 | RISK | Official 2027 table in the teacher note; AWVN replaced by the Rijksoverheid 2027 page. |
| 6 | Kamer 4, vraag 4.4, source row `vijf-jaar` | RISK | Teacher note and source row state the condition: 5 years if you got no bericht that you must file. |
| 7 | Kamer 3, vraag 3.2, retry pointer | RISK | Retry 3.2 became a "none" line (question removed in the second revision, B-6). |
| 8 | Source rows `nacht`, `max-dienst`, `schooltijd`, `pauze`; uncertainties 2 | note | Arbeidstijdenwet articles added as law source; the version 2026-01-01 URL returned an error page, so the cited version is "Geldend van 01-07-2025 t/m heden". |
| 9 | Whole lesson, dates | note | Line under the title: amounts valid 1 juli 2026 tot en met 31 december 2026, checked 6 November 2026, validUntil 31 december 2026. |
| 10 | Forms A and B | note | Parallel check paragraph extended (forms rewritten in the second revision). |

Not applied from factcheck A (optional, not verified): the kamer 3 teacher bullet on "oproepdiensten" and the extra jaaropgaaf sentence.
