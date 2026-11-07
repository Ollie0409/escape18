# Je eerste baan (mbo) (ESC-BIJBAAN-MBO): content spec

Bedragen geldig voor: 1 januari 2027 tot de indexering van 1 juli 2027 (de les speelt van augustus 2026 tot april 2027; alleen kamer 2 heeft bedragen, en die gaan over januari 2027); gecontroleerd op 7 november 2026; validUntil: 30 juni 2027

Status: **Revision 2** (7 Nov 2026), after ChatGPT check B round 1 (`qa/checkB/eerste-bijbaan-mbo_round1.md`: FAIL, 3 ERROR, 7 RISK) and the pupil playtest (`qa/gate_bijbaan_mbo_G4.md`, content items), with the room text cut from about 1,780 to 1,349 data words. Revision 1 (7 Nov 2026) followed fact check A (`content_new/factcheck_A_eerste-bijbaan-mbo.md`: PASS, 0 ERROR, 7 RISK) and the five-persona gate (`qa/gate_bijbaan_mbo_personas.md`: READY WITH FIXES). Every review item is answered in the changelog at the end. Written first on 7 Nov 2026 as the mbo niveau 3-4 variant of `content_new/eerste-bijbaan.md` (havo/vwo, code 3521, including its 2027 update), after reading that spec in full, `kamers-engine/README.md` (v3), `kamers-engine/lessons/eerste-bijbaan.js` and the audience section of `research/next_topics.md`. Every rule below was read on its official page or in the official law text on **7 November 2026** (source table at the end). Nothing is from memory. wetten.overheid.nl was unreachable (proxy 502); law texts were read as the official BWB XML from repository.officiele-overheidspublicaties.nl (version named per row). Same engine, same quality bar: one defensible answer per question, hints that do not give the answer, no option-length or option-start give-aways, every rule sourced, fictional employers checked against the KvK Handelsregister. Data file: `kamers-engine/lessons/eerste-bijbaan-mbo.js` (product `escape18-eerste-bijbaan-mbo`, variant `mbo`); `tests/spec-compare.js` compares the two.

## Why this variant, and the design choices it forces

From `research/next_topics.md`, audience section: 466,800 mbo students in 2025/26 (niveau 4: 270,240; niveau 3: 95,730), most turn 18 during mbo; Week van het geld aims for 40% mbo participation; but 71% of mbo teachers say they need no extra material and 82% would rather bring in an expert (DUO for Wijzer in geldzaken, 2021). Design consequences:

1. **Very low teacher prep.** The teacher screen says what to tap and what to say; nothing has to be printed (the answer sheet can be read on the teacher's own phone); one short Kern line per room, the background folded away.
2. **Works for whoever stands in front of the class**: a guest expert, a loopbaanbegeleider, a bpv-begeleider or a burgerschap docent. No subject knowledge assumed; every rule is on screen.
3. **Mbo reality, not havo reality.** Bbl students have a leerbaan with an arbeidsovereenkomst, bol students do stages, and many have a bijbaan on an oproepcontract on top. Most live at home. The lesson follows one bbl student in zorg (the pupil, "je") with a bol friend in techniek and a 17-year-old colleague, and ends with a horeca bijbaan next to the bbl.
4. **Reading level A2/B1.** Pupil sentences at most 15 words; options at most 10 words; no separable verb split over a rule line or a prompt where a plain verb exists (gate T14); at most two documents per room plus the rule box; tables wherever the content is a comparison; every room glosses its own hard words.
5. **Short rooms.** The engine cannot make short versions (README "Short version: not built"), and it has no optional extra question. So all four rooms stay, each with three short questions (12 in total, havo 14), the escape is 22 minutes, the 30-minute variant is a teacher FAQ (timer set lower), and fast pairs get a fourth debrief prompt instead of a stretch question.

## Overview

| Field | Value |
|---|---|
| Id (proposal) | ESC-BIJBAAN-MBO |
| Slug | eerste-bijbaan-mbo |
| Title | Je eerste baan (mbo) |
| Lead | Leerbaan, stage of bijbaan: je loon nakijken, je rooster checken en een tweede baan goed regelen. |
| Pupils | mbo niveau 3 en 4 (niveau 2 met wat hulp), 16 tot ongeveer 20 jaar, in tweetallen, één scherm |
| Escape time | 22 minuten (minuut 6 tot 28); les 45 minuten met 3 minuten reserve; 30-minutenvariant in de FAQ |
| Rooms | 4, in date order: leren en werken (aug/sep 2026), loon (feb 2027), rooster (maart 2027), bijbaan erbij (april 2027) |
| Questions | 12 (3 per room) |
| Lock | **5423** (not 1725, 2073, 2348, 2797, 2824, 3022, 3231, 3521, 4379) |
| Hint cost | 30 seconden per hint |
| Variant | `mbo` (logged in `start` and `teacher_start`) |

**Fiction line (shown once at the start):** "Alles is verzonnen: mensen, bedrijven, adressen, uren, berichten en papieren. De regels zijn echt, net als de opleiding en de tabel met het minimumloon."

**Fictional cast (all invented):** Luca Bos (the pupil, "je"; born 12 december 2008, so 17 in room 1 and 18 from 12 december 2026), bbl Verzorgende IG niveau 3 (a real programme name: Noorderpoort "Verzorgende IG | BBL | Niveau 3"; Curio OER crebo 27144, both read 7 Nov 2026) at Zorgcentrum Zeestad, school ROC Zeestad; Marieke Dijkstra, teamleider at Zorgcentrum Zeestad; Amira, Luca's friend, bol in de techniek, stage at Installatiebedrijf Zeestad; Jesse (17), colleague at Zorgcentrum Zeestad, bbl in de zorg; Kevin, eigenaar Snackbar Zeestad. Zeestad is the invented town of ESC-MAAND, ESC-KAMER, ESC-ROUTE and ESC-VERZEKERD. No personal pronoun (hij, zij, ze) is used for a named character in pupil text; "je vriendin Amira" is the only gendered word. (Revision 1: the first version claimed this but had "Zij", "zij" and "Ze"; the three places now repeat the name.)

**Name check (7 November 2026, kvk.nl search in a headless browser, validated: "Achmea" gives 182 results):** "Zorgcentrum Zeestad", "ROC Zeestad", "Installatiebedrijf Zeestad", "Snackbar Zeestad" and "Cafetaria Zeestad" each give "Er zijn geen resultaten gevonden". "Zeestad" alone gives 4 results: Zeestad C.V. and Zeestad Beheer in Den Helder (herontwikkeling van plangebieden in Den Helder), no care home, school, installer or snackbar. The lesson uses Zeestad only as a town, as the other lessons do; see Uncertainties 8 (project-wide).

**Content rules kept from the havo spec:** pupil sentences of at most 15 words; explanations at most 2 sentences and 28 words; each room glosses its own hard words in a "Moeilijke woorden" line; options listed with ids a, b, c, d, the right answer last (README "Option order"), and shown in a fixed shuffled order written in the data file, except where marked keepOrder (3.1, rooster order); one retry with a nudge that points to exactly one line; after the second wrong answer the right answer and the explanation show; every rule a pupil needs on the first try is in a document or the rule box; no explanation answers a later question; each digit clue starts "Het 1e (2e, 3e, 4e) cijfer van het slot"; teacher-visible text is Dutch only, without file names, ids or source bookkeeping; the teacher key gives full answer text, never a letter.

**Content rules added for mbo (Revision 1 adds the last two):** at most two documents per room plus the rule box; no document line over 15 words; no option over 10 words, and within a question the right option is never the only long one, by words or by characters; a rule with an exception either states the exception on screen or the situation rules it out; dates in prompts where an amount or rule changes on 1 January 2027; **no odd-one-out start**: in a question with options that begin with Ja or Nee, the right option is never the only one with its first word (fact check A row 1, gate C1); **no split verbs in rule lines and prompts** where a plain verb exists (gate T1 to T6).

## Leerdoelen (learning aims)

De student kan (mbo says "student"; pupil text uses "je"):
1. zeggen wie loon krijgt bij een leerbaan (bbl) en bij een stage (bol), en wie stagekosten betaalt;
2. nagaan of een stagebedrijf een erkend leerbedrijf is;
3. het minimumloon voor de eigen leeftijd opzoeken, ook in de bbl, en uitrekenen hoeveel te weinig is betaald;
4. zeggen wat je doet als je werkgever te weinig betaalt;
5. een rooster nakijken op de regels voor 16 en 17 jaar, en zeggen wat vanaf 18 jaar verandert;
6. bij een oproepcontract zeggen wanneer een oproep te laat is en hoeveel uur loon je minstens krijgt;
7. bij twee banen tegelijk de loonheffingskorting bij één werkgever laten toepassen.

## Past bij (curriculum fit; basis for the teacher screen lines)

- **Burgerschap, economische dimensie.** Examen- en kwalificatiebesluit beroepsopleidingen WEB, bijlage 1 "Generieke kwalificatie-eisen loopbaan en burgerschap" (BWBR0027963, version from 1 August 2026, read 7 Nov 2026). The lesson trains: "De student kent de rechten en plichten van de beroepsbeoefenaar", and of the listed topics "de arbeidsverhoudingen in Nederland" and "de rol van de overheid op het gebied van arbeid" (minimumloon, Arbeidstijdenwet, Arbeidsinspectie, Belastingdienst). **It does not train** the consumer part ("inzicht in zijn eigen wensen in relatie met zijn financiële speelruimte") or "de belangrijkste principes van budgettering"; the teacher screen says so (gate D2).
- **Burgerschap, vitaal burgerschap** (same bijlage): "de juiste afstemming te vinden tussen werken, zorgen (voor jezelf en voor anderen), leren en ontspannen" (kamer 3, working-time rules, and its discussion prompt).
- **Loopbaan** (same bijlage): "werkexploratie: onderzoek naar werk en mobiliteit in de loopbaan" and "loopbaansturing: loopbaangerichte planning en beïnvloeding van het leer- en werkproces" (kamer 1: bbl or bol, erkend leerbedrijf; the als-dan-plan).
- **BPV-voorbereiding.** WEB art. 7.2.8 and 7.2.9 (praktijkovereenkomst, erkend leerbedrijf), Rijksoverheid "Moet ik stage lopen als ik een mbo-opleiding volg?".
- **Status note.** The 2023 expert group advice "Herijking kwalificatie-eisen burgerschapsonderwijs mbo" proposes new themes without the "economische dimensie" wording; it is not in the version of 1 August 2026, and Rijksoverheid says the burgerschapsexamen becomes compulsory from studiejaar 2027-2028. The teacher screen names the two phrases of the current bijlage with the version date, so a docent can write them in a studiewijzer and see when they were checked. It is practice, not an exam (FAQ). Re-check the bijlage before 1 August 2027.
- **Week van het geld** 15 tot en met 19 maart 2027 (weekvanhetgeld.nl home page, read 7 Nov 2026: "Van 15 tot en met 19 maart 2027"); the mbo geldskill Toekomstbouwer is named on the theme page https://www.weekvanhetgeld.nl/nieuws/thema-2027-unlock-je-geldskills/ (read 7 Nov 2026: "De Toekomstbouwer voor het mbo ... Denk aan wonen, verzekeringen, belastingaangifte en pensioen."). This lesson fits the week; it is not a mapping to a skill.

---

## Kamer 1: Leren en werken

**Date:** maandag 31 augustus tot maandag 7 september 2026 (on screen: "september 2026"). **Where:** Zorgcentrum Zeestad en Installatiebedrijf Zeestad.

**Intro:** "Je bent 17 en begint met de bbl bij Zorgcentrum Zeestad. Je vriendin Amira doet bol en loopt stage."

### Document 1 `pok` (type: letter, kind "Praktijkovereenkomst", lines p1 to p4 and p6)

> **ROC Zeestad**, 31 augustus 2026
>
> p1. Praktijkovereenkomst (pok) voor de bbl
> p2. Student: Luca Bos
> p3. Leerbedrijf: Zorgcentrum Zeestad, erkend leerbedrijf
> p4. Opleiding: Verzorgende IG, niveau 3
> p6. Je hebt ook een arbeidsovereenkomst met Zorgcentrum Zeestad.
>
> Note: "Vereenvoudigd voorbeeld."

(Rev 2: the period line p5 is cut, no question used it; p6 keeps its id.)

### Document 2 `app` (type: chat, title "Berichten van Amira")

> **Amira**, maandag 7 september, 19:05
> a1. "Ik loop stage bij Installatiebedrijf Zeestad. Ik heb een begeleider en leerdoelen."
> a2. "Ik heb geen arbeidsovereenkomst."
> a3. "Ik moest veiligheidsschoenen kopen voor de stage: € 50."
> a4. "Ik kreeg dat geld nergens terug."

(Sender name: "Amira"; the time shows on the first message only. Rev 2: a4 says that nobody else paid the costs back, so the rule card condition "betaalt niemand anders het?" is met (check B 4). Title "Berichten" instead of "Appjes" (G4 N6).)

### Document 3 `regel` (type: rule card, title "Regels")

> r1. Heb je een arbeidsovereenkomst? Dan krijg je minstens het minimumloon.
> r2. Stage zonder arbeidsovereenkomst? Dan is loon niet verplicht.
> r3. Moest je iets kopen voor je stage? En betaalt niemand anders het? Dan betaalt het bedrijf het.
> r4. Stage of leerbaan? Alleen bij een erkend leerbedrijf. Dat zie je op stagemarkt.nl.

(Rev 2, check B 4: r3 has the condition of the source, "Maak je kosten en krijg je die niet op een andere manier vergoed?" (Rijksoverheid), instead of the absolute "Je stage mag jou geen geld kosten".)

**Moeilijke woorden:** "Bbl: 3 of 4 dagen werken, de andere dagen school. Pok: afspraken over je stage of leerbaan. Arbeidsovereenkomst: contract om te werken voor loon. Erkend leerbedrijf: mag studenten opleiden."

(All on `pok`. Rev 2: the second box (Bol, Veiligheidsschoenen) is cut (G4 S1); the intro says what bol means in practice.)

### Vraag 1.1 `loon` (pick, docs: pok, app, regel)

- **Prompt:** "Jij en Amira leren bij een bedrijf. Wie heeft recht op loon?"
- **Options:** a "Jij en Amira: jullie werken bij een bedrijf" · b "Alleen Amira: Amira heeft een begeleider" · c "Niemand: jullie zijn nog student" · d "Alleen jij: je hebt een arbeidsovereenkomst"
- **Correct:** d
- **Lengths:** 43, 40, 32, 43 characters; starts "Jij en Amira", "Alleen", "Niemand", "Alleen".
- **Retry points to:** rule r1 "Heb je een arbeidsovereenkomst? Dan krijg je minstens het minimumloon."
- **Nudge:** "Wie van jullie heeft een arbeidsovereenkomst?"
- **Hint (30 s):** "Kijk onderaan je pok en in bericht 2."
- **Explanation:** "Jij hebt een arbeidsovereenkomst. Amira loopt stage: dan is loon niet verplicht."
- **Rules:** bbl-ao-loon, stage-geen-loon

### Vraag 1.2 `schoenen` (number, euro, docs: app, regel)

- **Prompt:** "Hoeveel euro moet het bedrijf aan Amira geven?"
- **Correct:** € 50 (5000 cents)
- **Retry points to:** rule r3 "Moest je iets kopen voor je stage? En betaalt niemand anders het? Dan betaalt het bedrijf het."
- **Nudge:** "Moest Amira iets kopen voor de stage?"
- **Hint (30 s):** "Lees bericht 3 en 4."
- **Explanation:** "Niemand anders betaalt de € 50. Dus het bedrijf betaalt."
- **Rules:** stage-kosten

### Vraag 1.3 `erkend` (pick, docs: pok, regel)

- **Situation:** "Amira wil stage lopen bij een ander bedrijf."
- **Prompt:** "Waar ziet Amira of dat bedrijf erkend is?"
- **Options:** a "Bij de Belastingdienst" · b "Op de website van de KvK" · c "In de app van het bedrijf" · d "Op stagemarkt.nl"
- **Correct:** d
- **Lengths:** 22, 24, 25, 16 characters (the right one is the shortest); two options are websites.
- **Retry points to:** rule r4 "Stage of leerbaan? Alleen bij een erkend leerbedrijf. Dat zie je op stagemarkt.nl."
- **Nudge:** "Welke regel gaat over een erkend leerbedrijf?"
- **Hint (30 s):** "Lees die regel tot het einde."
- **Explanation:** "Op stagemarkt.nl zie je welke bedrijven erkend zijn."
- **Rules:** erkend
- **Defensibility:** "Bij je school" is not an option (the school can also tell). The KvK registers companies, not the erkenning (SBB, WEB art. 5.2.3 via art. 7.2.8 lid 4). Rev 2 (G4 N3): the hint no longer repeats a struck option.

### Cijfer kamer 1

- **Clue:** "Het 1e cijfer van het slot: hoeveel euro krijgt Amira? Neem het eerste cijfer."
- **Shown with:** app, rules
- **Digit:** **5** (€ 50; "half" gives 2, "nothing" gives 0).
- **Remember:** "Arbeidsovereenkomst: loon. Stage: loon niet verplicht. Iets gekocht voor je stage? Vraag het geld terug."

---

## Kamer 2: Je loon

**Date:** maandag 1 februari 2027 (on screen: "februari 2027"). **Where:** thuis, met je loonoverzicht van Zorgcentrum Zeestad.

**Intro:** "Op 12 december 2026 ben je 18 geworden. Het is 1 februari 2027. Je kijkt naar je loon van januari."

### Document 1 `strook` (type: table without header, title "Loonoverzicht januari 2027")

> | | |
> |---|---|
> | Gewerkte uren | 100 uur |
> | Uurloon | € 6,82 |
> | Brutoloon | € 682,00 |
>
> Note: "Vereenvoudigd voorbeeld."

(100 uur in January: 3 diensten of 8 uur a week for about 4,3 weeks is 103 uur; 100 is rounded for an easy sum. € 6,82 was the bbl minimum for 18 from 1 July to 31 December 2026. Rev 2: name and birth date cut; the age is in the intro.)

### Document 2 `tabel` (type: table with header; real amounts, labelled real)

> **Minimumloon per uur, vanaf 1 januari 2027**
> Bron: Rijksoverheid. Deze tabel is echt.
>
> | Leeftijd | Bruto per uur |
> |---|---|
> | 16 jaar | € 6,12 |
> | 17 jaar | € 7,65 |
> | 18 jaar | € 9,56 |
> | 19 jaar | € 11,47 |
> | 20 jaar | € 13,38 |
> | 21 jaar en ouder | € 15,29 |
>
> Note: "Dit geldt ook in de bbl. Bruto, zonder vakantiegeld. Een cao kan meer geven."

### Document 3 `regel` (type: rule card, title "Regels")

> r1. Vanaf 1 januari 2027 krijg je in de bbl het gewone minimumloon.
> r2. Je werkgever betaalt minstens het minimumloon voor jouw leeftijd.
> r3. Krijg je te weinig? Praat eerst met je werkgever.
> r4. Helpt dat niet? Meld het bij de Nederlandse Arbeidsinspectie.

**Moeilijke woorden:** "Minimumloon: het laagste loon dat mag. Brutoloon: loon voordat de belasting eraf gaat. Cao: afspraken over loon in een sector. Arbeidsinspectie: let op de regels voor werk."

(All on `tabel`.)

### Vraag 2.1 `minimum` (pick, docs: strook, tabel, regel)

- **Prompt:** "Welk minimumloon per uur geldt in januari 2027 voor jou?"
- **Options:** a "€ 6,82" · b "€ 7,65" · c "€ 11,47" · d "€ 9,56"
- **Correct:** d
- **Distractors:** a € 6,82 = your uurloon (the old bbl rate for 18); b € 7,65 = 17 jaar; c € 11,47 = 19 jaar.
- **Retry points to:** tabel row "18 jaar: € 9,56"
- **Nudge:** "Hoe oud ben je in januari 2027?"
- **Hint (30 s):** "Zoek je leeftijd in de tabel."
- **Explanation:** "Je bent 18: minstens € 9,56. Een lager bbl-loon bestaat niet meer."
- **Rules:** wml-2027, bbl-2027, wml-leeftijd

### Vraag 2.2 `tekort` (number, euro, docs: strook, tabel, regel)

- **Prompt:** "Hoeveel euro kreeg je in januari minder dan het minimumloon? Reken zonder vakantiegeld."
- **Correct:** € 274,00 (27400 cents)
- **Derivation:** 100 × € 9,56 = € 956,00; € 956,00 min € 682,00 = € 274,00 (or 100 × € 2,74). Rev 2 (check B 5): the prompt compares with the legal minimum, not with "what you should get", because a cao can pay more.
- **Retry points to:** strook row "Uurloon: € 6,82"
- **Nudge:** "Wat is het verschil per uur?"
- **Hint (30 s):** "Doe dat verschil keer je uren."
- **Explanation:** "Je krijgt € 2,74 per uur te weinig. 100 × € 2,74 = € 274,00."
- **Rules:** wml-2027, bbl-2027

### Vraag 2.3 `melden` (pick, docs: regel)

- **Situation:** "Je vraagt om meer loon. Marieke, je teamleider, zegt: 'In de bbl krijg je minder.'"
- **Prompt:** "Wat kun je nu doen?"
- **Options:** a "Niets: in de bbl mag je baas minder betalen" · b "Een melding doen bij de Belastingdienst" · c "Wachten tot je bbl klaar is" · d "Een melding doen bij de Arbeidsinspectie"
- **Correct:** d
- **Lengths:** 43, 39, 27, 40 characters.
- **Retry points to:** rule r4 "Helpt dat niet? Meld het bij de Nederlandse Arbeidsinspectie."
- **Nudge:** "Je hebt het je werkgever al gevraagd. Wat nu?"
- **Hint (30 s):** "De Belastingdienst gaat over belasting, niet over je loon."
- **Explanation:** "Meld het bij de Arbeidsinspectie."
- **Rules:** onderbetaald-stappen, onderbetaald-5jaar

### Cijfer kamer 2

- **Clue:** "Het 2e cijfer van het slot: hoeveel euro was het verschil? Schrijf het zonder centen. Neem het laatste cijfer."
- **Shown with:** strook, tabel
- **Digit:** **4** (€ 274,00 without cents is 274, last digit 4). The 17-year rate gives € 83 (3); € 7,50 gives € 68 (8).
- **Wrong digit (`clueWrong`):** "274" → "Dat is het hele bedrag. Typ alleen het laatste cijfer." · "2" → "Dat is het eerste cijfer van 274. Neem het laatste."
- **Remember:** "Te weinig loon? Eerst je werkgever, dan de Arbeidsinspectie. Dat geldt ook in de bbl."

---

## Kamer 3: Je rooster

**Date:** donderdag 11 maart 2027, rooster voor week 11 (15 tot en met 21 maart) (on screen: "maart 2027"). **Where:** Zorgcentrum Zeestad.

**Intro:** "Je bent 18. Je collega Jesse is 17 en doet ook bbl. Jesse vraagt: klopt mijn rooster?"

### Document 1 `rooster` (type: table with header, title "Rooster van Jesse"; also the options of 3.1, keepOrder)

> | Dag | Tijd | Wat |
> |---|---|---|
> | ma 15 mrt | 07:30 tot 13:00 | dienst |
> | di 16 mrt | 08:30 tot 15:30 | school (7 uur) |
> | wo 17 mrt | 07:30 tot 13:00 | dienst |
> | do 18 mrt | 15:00 tot 20:00 | dienst |
> | vr 19 mrt | 23:00 tot 07:00 | nachtdienst |

### Document 2 `regels` (type: table with header, kind "Regels", from "Bron: Arbeidstijdenwet. Deze regels zijn echt.")

> | Regel | 16 en 17 jaar | 18 jaar en ouder |
> |---|---|---|
> | 's Nachts | In de zorg nooit tussen 23:00 en 06:00. | Je mag ook 's nachts werken. |
> | Per dienst | Maximaal 9 uur. Schooltijd telt mee. | Maximaal 12 uur. |
>
> Note: "Er zijn ook regels voor rust."

(This room has a table of rules instead of a rule card: the two age columns are the point of the room; pointers go to the rows `nacht` and `dag`. Rev 2:
- The Rust row and the note about 8 hours of rest are cut (check B 1: shortening the 11 hours to 8 needs a reason in the work, Arbeidstijdenwet art. 5:3 lid 2, "indien de aard van de arbeid of de bedrijfsomstandigheden dit met zich brengen"; and G4 S1: no question uses the row). The rest rules are in the teacher detail with their conditions.
- "Werken per dag" is now "Per dienst", the word of the law (check B 6; art. 5:7 lid 1 and lid 2 onder a, "per dienst"; art. 1:7 "dienst"). With school 08:30 to 15:30 and work right after, school and work are one dienst, so 9 min 7 stays right.
- "In de zorg nooit tussen 23:00 en 06:00" (check B 7): the one exception for 16 and 17, bakery trainees in bbl or bol by collectieve regeling (Arbeidstijdenbesluit art. 5.4:3, version from 1 Jan 2024), is not in the zorg; the teacher detail names it.)

**Check of Jesse's rooster against the rules (16 en 17 jaar):** ma and wo 07:30 to 13:00 (5,5 uur on site, under 9); di school 08:30 to 15:30 is 7 uur arbeidstijd (Arbeidstijdenwet art. 4:4 lid 2, breaks included); do 15:00 to 20:00 is 5 uur. Rest periods (not on screen, art. 5:3 lid 1, 12 uur): 19,5, 16, 26 and 27 uur, all fine. vr 23:00 to za 07:00 breaks the night rule (art. 5:3 lid 1); it is the only shift that does. Week at most 29,5 uur, under 45. Weekly rest of 36 uur satisfied either way (art. 5:5 lid 1). No Sunday work. With the 3.2 shift (di 15:30 to 17:30): 7 + 2 = 9 uur in one dienst; rest 17:30 to wo 07:30 is 14 uur and includes 23:00 to 06:00.

**Check of 3.3 for you (18 jaar en ouder):** the night 23:00 to 07:00 is 8 uur on site, under the 10 uur per night shift (art. 5:8 lid 1); it ends after 02:00, so 14 uur rest follows (art. 5:8 lid 4); the situation gives you no work on Friday daytime or Saturday, so the 11 uur before and the 14 uur after hold without any shortening.

**Moeilijke woorden:** "Dienst: de tijd dat je werkt. Onder de 18 telt school mee. Nachtdienst: je werkt meer dan 1 uur tussen 00:00 en 06:00."

(All on `regels`. Rev 2, check B 3: the nachtdienst gloss now has the legal test of art. 1:7 onder d, "een dienst waarin meer dan een uur arbeid wordt verricht tussen 00.00 uur en 06.00 uur".)

### Vraag 3.1 `nacht` (pick, keepOrder, docs: rooster, regels)

- **Prompt:** "Jesse is 17. Welke dienst van Jesse mag niet?"
- **Options (rooster order, school row left out):** a "ma 15 mrt · 07:30 tot 13:00" · b "wo 17 mrt · 07:30 tot 13:00" · c "do 18 mrt · 15:00 tot 20:00" · d "vr 19 mrt · 23:00 tot 07:00"
- **Correct:** d
- **Retry points to:** rooster row "vr 19 mrt: 23:00 tot 07:00"
- **Nudge:** "Kijk naar de tijden van elke dienst."
- **Hint (30 s):** "Kijk in de rij 's Nachts."
- **Explanation:** "Onder de 18 werk je in de zorg nooit tussen 23:00 en 06:00."
- **Rules:** nacht-1617

### Vraag 3.2 `schooldag` (pick, docs: rooster, regels)

- **Situation:** "Marieke vraagt: kan Jesse dinsdag na school nog komen?"
- **Prompt:** "Hoeveel uur mag Jesse dan nog werken?"
- **Options:** a "1 uur" · b "3 uur" · c "4 uur" · d "2 uur"
- **Correct:** d
- **Retry points to:** regels row "Per dienst: Maximaal 9 uur. Schooltijd telt mee."
- **Nudge:** "Hoeveel uur mag Jesse per dienst werken? Haal de schooluren eraf."
- **Hint (30 s):** "Kijk hoe lang Jesse op school is."
- **Explanation:** "School telt mee. Maximaal 9 uur per dienst: 9 min 7 is 2 uur."
- **Rules:** schooltijd, max-dienst-1617

(Rev 2, G4 S5: the nudge now names the step "9 min de schooluren" instead of asking for the 7 hours the rooster already shows.)

### Vraag 3.3 `nacht18` (pick, docs: regels)

- **Situation:** "Op vrijdag overdag en op zaterdag werk jij niet."
- **Prompt:** "Mag jij de nachtdienst van Jesse doen?"
- **Options:** a "Nee: in de bbl mag dat nooit" · b "Nee: dat mag pas vanaf 21 jaar" · c "Ja: maar alleen als je 2 jaar bbl doet" · d "Ja: vanaf 18 mag dat"
- **Correct:** d
- **Lengths:** 28, 30, 38, 20 characters (the right one is the shortest); two start with Nee and two with Ja (G4 S6).
- **Retry points to:** regels row "'s Nachts: Je mag ook 's nachts werken."
- **Nudge:** "Hoe oud ben jij?"
- **Hint (30 s):** "Kijk in de kolom 18 jaar en ouder."
- **Explanation:** "Vanaf 18 mag nachtwerk, met extra regels."
- **Rules:** nacht-18, rust-nacht-18
- **Defensibility:** taking a shift is voluntary; the question asks whether it is allowed. No law ties night work at 18 to a number of bbl years, so c is wrong. No Sunday is involved.

### Cijfer kamer 3

- **Clue:** "Het 3e cijfer van het slot: hoeveel uur mag Jesse dinsdag nog werken?"
- **Shown with:** rooster, regels
- **Digit:** **2** (9 uur per dienst min 7 uur school).
- **Remember:** "Onder de 18 in de zorg geen nachtwerk. Vanaf 18 wel."

---

## Kamer 4: Een bijbaan erbij

**Date:** donderdag 1 april tot zaterdag 10 april 2027 (on screen: "april 2027"). **Where:** Snackbar Zeestad.

**Intro:** "Je bent 18. Naast je bbl werk je vanaf 1 april bij Snackbar Zeestad. Je hebt daar een nulurencontract."

### Document 1 `app` (type: chat, title "Berichten van Kevin")

> **Kevin (Snackbar Zeestad)**, donderdag 1 april, 19:30
> k1. "Hoi Luca! Kun je morgen van 17:00 tot 21:00 komen?"
>
> **Kevin (Snackbar Zeestad)**, maandag 5 april, 10:15
> k2. "Zaterdag 10 april zet ik je op het rooster van 18:00 tot 20:00."

(Sender name on the chat: "Kevin (Snackbar Zeestad)".)

### Document 2 `formulier` (type: table without header, kind "Formulier", title "Snackbar Zeestad: gegevens voor de loonheffingen")

> | | |
> |---|---|
> | Start | donderdag 1 april 2027 |
> | Wil je loonheffingskorting bij ons? | [ ] ja [ ] nee |
>
> Note: "Verzonnen formulier."

### Document 3 `regel` (type: rule card, title "Regels")

> r1. Vraagt je baas je minder dan 4 dagen van tevoren? Dan mag je nee zeggen.
> r2. Werk je minder dan 3 uur na een oproep? Dan krijg je 3 uur loon.
> r3. Twee banen tegelijk? Kies één werkgever voor de loonheffingskorting.

(r1 says the legal term, BW 7:628a lid 2; the 4.1 situation rules out a shorter cao term. r2 cannot be changed by a cao: BW 7:628a lid 12 forbids any deviation to the worker's disadvantage, and the cao openings in lid 4 and lid 11 never reach lid 1.)

**Moeilijke woorden:** "Nulurencontract: een oproepcontract zonder vaste uren. Loonheffingskorting: je betaalt minder belasting over je loon."

(`app` gets the first sentence, `formulier` the second.)

### Vraag 4.1 `telaat` (pick, docs: app, regel)

- **Situation:** "Je contract zegt: je baas moet je minstens 4 dagen van tevoren vragen."
- **Prompt:** "Kevin vraagt het op donderdag. Moet je op vrijdag komen?"
- **Options:** a "Ja: ik heb een nulurencontract" · b "Ja: als het die avond druk is" · c "Nee: ik werk al bij het zorgcentrum" · d "Nee: het is te laat gevraagd"
- **Correct:** d
- **Lengths:** 30, 29, 35, 28 characters (the right one is the shortest); two Ja, two Nee (G4 S6). c is wrong: working elsewhere is no legal ground; the reason is the 4 days.
- **Retry points to:** rule r1 "Vraagt je baas je minder dan 4 dagen van tevoren? Dan mag je nee zeggen."
- **Nudge:** "Hoeveel dagen van tevoren vraagt Kevin het?"
- **Hint (30 s):** "Tel de dagen tussen het bericht en de dienst."
- **Explanation:** "1 dag van tevoren is te laat. Je mag nee zeggen."
- **Rules:** oproeptermijn

(Rev 2, G4 S8: the contract sentence says "je baas moet je ... vragen" instead of "oproepen", which A2 readers took for a verb. A cao may shorten the term, never below 24 hours (BW 7:628a lid 4); 19:30 for 17:00 the next day is 21,5 hours, so the answer holds either way.)

### Vraag 4.2 `drieuur` (pick, docs: app, regel)

- **Prompt:** "Zaterdag 10 april werk je van 18:00 tot 20:00. Voor hoeveel uur krijg je loon?"
- **Options:** a "2 uur" · b "4 uur" · c "3 uur"
- **Correct:** c
- **Retry points to:** rule r2 "Werk je minder dan 3 uur na een oproep? Dan krijg je 3 uur loon."
- **Nudge:** "Lees regel 2 nog eens."
- **Hint (30 s):** "Lees regel 2 tot het einde."
- **Explanation:** "Per oproep krijg je minstens 3 uur loon."
- **Rules:** oproep-3uur
- **Defensibility:** the call came 5 days 7 hours ahead and you worked exactly the hours called, so BW 7:628a lid 3 does not come in. Rev 2, G4 S5: the nudge no longer asks "Hoe lang werk je zaterdag?", which confirmed the wrong "2 uur".

### Vraag 4.3 `korting` (pick, docs: formulier, regel)

- **Situation:** "Bij het zorgcentrum heb je al loonheffingskorting."
- **Prompt:** "Wat kies je op het formulier van de snackbar?"
- **Options:** a "Ja: dan krijg je bij allebei korting" · b "Maakt niet uit: de Belastingdienst regelt het" · c "Nee: de korting loopt al bij het zorgcentrum"
- **Correct:** c
- **Lengths:** 36, 45, 44 characters; starts Ja, Maakt, Nee.
- **Retry points to:** rule r3 "Twee banen tegelijk? Kies één werkgever voor de loonheffingskorting."
- **Nudge:** "Bij hoeveel werkgevers tegelijk mag je korting hebben?"
- **Hint (30 s):** "Vanaf 1 april werk je bij twee werkgevers tegelijk."
- **Explanation:** "Kies één werkgever. Anders betaal je later waarschijnlijk bij."
- **Rules:** korting-een
- **Option order:** "allebei" in option a means both employers, not the options (`ORDER_FREE`); fixed shuffle.

### Cijfer kamer 4

- **Clue:** "Het 4e cijfer van het slot: hoeveel uur loon krijg je voor zaterdag?"
- **Shown with:** app, rules
- **Digit:** **3** (worked 18:00 to 20:00 = 2 uur, minimum 3 uur per call).
- **Remember:** "Te laat gevraagd? Je mag nee zeggen. Per oproep minstens 3 uur loon. Korting bij één werkgever."

---

## Het slot

- Code: **5423** (kamer 1: 5, kamer 2: 4, kamer 3: 2, kamer 4: 3). Each digit follows from the room's data. Unchanged in Revision 1.
- Distinct from every code in `content_new` (1725, 2073, 2348, 2797, 2824, 3022, 3231, 3521, 4379).
- Teacher screen: the code only inside the closed Antwoordblad, never on the projected part.

## Startcheck en eindcheck: twee parallelle vormen, A en B (elk 4 vragen)

One question per room; question n of A and of B test the same rule at the same difficulty (one step, no sum, no document), with a different sector and situation. No check question copies a room question. Every pair gets A then B or B then A at random (engine v3). No feedback during a check. The options are listed in the order shown on screen.

Revision 1 (fact check A row 1 and 2, gate C1 to C5) made items 2 and 4 "Wat klopt?" items with statements that all start alike. Revision 2 (G4 S6) gives items 1 and 3 four options, two Ja and two Nee, so the right one is never the only "Nee"; A4 and B4 say "je baas moet je ... vragen" instead of "oproepen" (G4 S8).

### Vorm A

| # | Room | Rule | Prompt (with situation) | Options (as shown) | Correct |
|---|---|---|---|---|---|
| A1 | leren | stage-geen-loon | "Je doet bol en loopt stage bij een garage. Je hebt een begeleider en leerdoelen. Je hebt geen arbeidsovereenkomst. Moet de garage je loon betalen?" | a "Ja: je werkt er elke dag mee" · d "Nee: een stagiair mag geen geld krijgen" · c "Ja: na 3 maanden stage wel" · b "Nee: loon is bij stage niet verplicht" | b |
| A2 | loon | bbl-2027 | "Je bent 19 en doet bbl bij een bouwbedrijf. Je hebt een arbeidsovereenkomst. Het is februari 2027. Wat klopt?" | c "Je krijgt pas het minimumloon na je diploma" · a "Je krijgt minstens het minimumloon voor 19 jaar" · d "Je krijgt alleen een vergoeding, zoals bij stage" · b "Je krijgt minder, want je doet een bbl-opleiding" | a |
| A3 | rooster | nacht-1617 | "Je bent 17 en doet bbl in een ziekenhuis. Je baas wil je laten werken van 23:00 tot 07:00. Mag dat?" | b "Nee: in de zorg mag dat pas vanaf 18" · a "Ja: in de zorg gelden andere regels" · d "Nee: nachtwerk mag pas vanaf je 21e" · c "Ja: als je de volgende dag helemaal vrij bent" | b |
| A4 | bijbaan | oproeptermijn | "Je hebt een nulurencontract bij een supermarkt. Je contract zegt: je baas moet je minstens 4 dagen van tevoren vragen. Maandag om 18:00 vraagt je baas of je woensdag komt. Wat klopt?" | a "Ik moet komen, want ik heb een nulurencontract" · c "Dat beslist mijn baas, niet ik" · b "Ik mag nee zeggen: de vraag komt te laat" | b |

### Vorm B

| # | Room | Rule | Prompt (with situation) | Options (as shown) | Correct |
|---|---|---|---|---|---|
| B1 | leren | stage-geen-loon | "Je doet bol en loopt stage in een kapsalon. Je hebt een begeleider en leerdoelen. Je hebt geen arbeidsovereenkomst. Moet de kapsalon je loon betalen?" | c "Ja: als je 18 bent wel" · b "Nee: bij stage is loon niet verplicht" · a "Ja: je helpt er elke dag klanten" · d "Nee: een stagiair mag geen geld krijgen" | b |
| B2 | loon | bbl-2027 | "Je bent 20 en doet bbl bij een garage. Je hebt een arbeidsovereenkomst. Het is maart 2027. Wat klopt?" | b "Je krijgt minder, want je doet een bbl-opleiding" · d "Je krijgt alleen een vergoeding, zoals bij stage" · a "Je krijgt minstens het minimumloon voor 20 jaar" · c "Je krijgt pas het minimumloon na je diploma" | a |
| B3 | rooster | nacht-1617 | "Je bent 16 en hebt een bijbaan in een hotel. Je baas vraagt of je van 22:00 tot 01:00 werkt. Mag dat?" | a "Ja: in een hotel gelden andere regels" · d "Nee: nachtwerk mag pas vanaf je 21e" · c "Ja: als je de volgende dag helemaal vrij bent" · b "Nee: in een hotel mag dat pas vanaf 18" | b |
| B4 | bijbaan | oproeptermijn | "Je hebt een nulurencontract bij een kledingwinkel. Je contract zegt: je baas moet je minstens 4 dagen van tevoren vragen. Zaterdag om 10:00 vraagt je baas of je maandag komt. Wat klopt?" | c "Dat beslist mijn baas, niet ik" · b "Ik mag nee zeggen: dit is te laat gevraagd" · a "Ik moet komen, want ik heb een nulurencontract" | b |

Answer pattern (Rev 2, G4 S6): items 1 and 3 have four options, two starting with Ja and two with Nee, so the right one is never the only "Nee"; items 2 and 4 are "Wat klopt?" statements. Place of the right option: 4, 2, 1, 3 (form A) and 2, 3, 4, 2 (form B).

Lengths (characters, in the order shown): A1 28, 39, 26, 37 · A2 43, 47, 48, 48 · A3 36, 35, 35, 45 · A4 46, 30, 40 · B1 22, 37, 32, 39 · B2 48, 48, 47, 43 · B3 37, 35, 45, 38 · B4 30, 42, 46. The right option is never the only longest.

Parallel checks and defensibility: A1 and B1 rule out "gewoon werk" (begeleider, leerdoelen) and an arbeidsovereenkomst. "Nee: een stagiair mag geen geld krijgen" is wrong: a stagevergoeding is allowed (Rijksoverheid: "Het mag wel"); its "Nee" alone does not make it right, because the whole statement is false. A2 and B2: in 2027 a bbl'er with an arbeidsovereenkomst gets at least the minimum for the own age; the three other statements are false in 2027. A3 (zorg) and B3 (hotel): both run past 23:00; "in de zorg / in een hotel mag dat pas vanaf 18" is right for 16 and 17 (the only exception in the Arbeidstijdenbesluit of 1 Jan 2024 is bakery trainees, art. 5.4:3); "Nee: nachtwerk mag pas vanaf je 21e" is false (from 18). A4 and B4: 2 days ahead against a 4-day contract term. B4 avoids Sunday.

**Antwoorden start- en eindcheck (voor de docent):**
- Vorm A: A1 "Nee: loon is bij stage niet verplicht". A2 "Je krijgt minstens het minimumloon voor 19 jaar". A3 "Nee: in de zorg mag dat pas vanaf 18". A4 "Ik mag nee zeggen: de vraag komt te laat".
- Vorm B: B1 "Nee: bij stage is loon niet verplicht". B2 "Je krijgt minstens het minimumloon voor 20 jaar". B3 "Nee: in een hotel mag dat pas vanaf 18". B4 "Ik mag nee zeggen: dit is te laat gevraagd".

## Lesplan (45 minuten)

| Minuut | Stap | Wat de docent doet |
|---|---|---|
| 0 tot 3 | Uitleg | Kies op het docentenscherm Ja of Nee bij het delen van anonieme antwoorden. Tik op Start de les en open de Projectiemodus: daar staan de link, de klascode en de timer. Studenten openen de link en werken met z'n tweeën op één scherm. Zeg: alles is verzonnen, behalve de regels en de tabel met het minimumloon. |
| 3 tot 6 | Startcheck | Elk tweetal beantwoordt 4 vragen voordat de klok start en ziet nog niet wat goed is. Geef geen hints. |
| 6 tot 28 | Escape | Start de klastimer op 22 minuten. Tweetallen spelen vier kamers en schrijven elk cijfer op. Loop rond; wijs bij vragen naar de regel op het scherm, niet naar het antwoord. Heb je het antwoordblad open op je telefoon? Dan zie je zelf of een tweetal goed zit. Klaar voor de tijd? Laat het tweetal de gespreksvragen op het eindscherm bespreken, ook de vraag voor snelle tweetallen. |
| 28 | Stop | Tik op Stop de escape. Iedereen stopt, ook wie nog niet klaar is. Niet elk tweetal haalt alle vier de kamers; dat is niet erg. Een tweetal dat langzaam leest, haalt kamer 4 vaak niet. Lees de cijfers van het slot voor uit het antwoordblad op je eigen telefoon of laptop, niet op het bord. Tweetallen die nog niet klaar zijn, openen het slot met die cijfers, of tikken onderaan op We stoppen en dan op Naar de eindcheck. Iedereen doet de eindcheck en het als-dan-plan. |
| 28 tot 31 | Eindcheck | Elk tweetal beantwoordt 4 vragen over dezelfde regels. Daarna ziet het wat het goed had, voor en na. |
| 31 tot 39 | Nabespreken | Vraag met handopsteken: wie doet bbl, wie loopt stage, wie heeft een bijbaan? Vraag welke kamer het lastigst was en begin daar. Kies een of twee gespreksvragen. Vraag naar ervaringen, niet naar punten. Ben je gast? Vertel twee minuten over je eerste baan of over iets uit je werk. |
| 39 tot 42 | Afsluiten | Laat twee of drie studenten hun als-dan-plan hardop zeggen. Stel daarna de slotvraag. |
| 42 tot 45 | Reserve | Voor inloggen dat uitloopt, of een gesprek dat langer duurt. Loopt het inloggen uit? Houd minuut 28 als stopmoment aan. |

Totaal: 3 + 3 + 22 + 3 + 8 + 3 + 3 (reserve) = 45 minuten. Revision 1 (gate C7): each check gets 3 minutes (A2 readers need about 45 seconds an item); the minute comes from the reserve and the debrief; the stop moves from minute 27 to minute 28.

Materials: een laptop of telefoon per tweetal, een digibord of beamer, pen en papier voor de cijfers

(No printing needed. Without devices, the teacher screen prints "Kamers op papier (leerlingen)"; see the FAQ.)

Tip voor de docent: Je hoeft niets voor te bereiden of uit te leggen: alle regels staan op het scherm. Open deze pagina ook op je telefoon. Daar lees je de antwoorden, zodat ze niet op het bord komen.

Care points ("Let op"):
1. "Vraag niet wie te weinig loon krijgt. Studenten vertellen dat zelf als ze willen."
2. "Vertelt een student dat het werk niet klopt? Zeg: kom na de les even langs."
3. "Na twee foute antwoorden laat de les het goede antwoord zien. Een tweetal kan dus doorklikken zonder te lezen. Dat telt niet mee bij In één keer goed. Zeg: goed lezen gaat sneller."

(Spec notes, not shown: timing is an estimate. The gate counts about 1,450 words in the rooms, about 20 minutes for a pair without hints, 27 to 30 for a slow pair; the stop flow covers it. Not yet timed with real mbo students: time it with two classes before release. The button names ("Start de les", "Projectiemodus", "Stop de escape", "We stoppen", "Naar de eindcheck", "Kamers op papier (leerlingen)") are the engine's `strings.js` wording, read 7 Nov 2026.)

## Antwoordblad (voor de docent)

| Kamer | Vraag | Antwoord | Waarom, in één regel |
|---|---|---|---|
| 1 Leren en werken | 1.1 Loon | Alleen jij: je hebt een arbeidsovereenkomst | Stage zonder arbeidsovereenkomst: loon niet verplicht. |
| | 1.2 Schoenen | € 50 | Je stage mag jou geen geld kosten. |
| | 1.3 Erkend | Op stagemarkt.nl | Daar zie je of een bedrijf erkend is. |
| | **Cijfer 1** | **5** | € 50 |
| 2 Je loon | 2.1 Minimumloon | € 9,56 | 18 jaar, januari 2027; ook in de bbl. |
| | 2.2 Te weinig | € 274,00 | 100 × (€ 9,56 min € 6,82) |
| | 2.3 Melden | Een melding doen bij de Arbeidsinspectie | Werkgever wil het niet veranderen. |
| | **Cijfer 2** | **4** | € 274 |
| 3 Je rooster | 3.1 Nachtdienst | vr 19 mrt · 23:00 tot 07:00 | Onder de 18 nooit tussen 23:00 en 06:00. |
| | 3.2 Dinsdag | 2 uur | 9 uur per dienst, 7 uur school telt mee. |
| | 3.3 Nachtdienst doen | Ja: vanaf 18 mag dat | Jij bent 18. |
| | **Cijfer 3** | **2** | 9 min 7 |
| 4 Bijbaan erbij | 4.1 Te laat | Nee: het is te laat gevraagd | 1 dag van tevoren, de regel zegt 4 dagen. |
| | 4.2 Drie uur | 3 uur | Per oproep minstens 3 uur loon. |
| | 4.3 Korting | Nee: de korting loopt al bij het zorgcentrum | Eén werkgever tegelijk. |
| | **Cijfer 4** | **3** | 3 uur |
| | **Code** | **5423** | |

## Nabespreken

**Vier gespreksvragen** (on the end screen; the fourth is for fast pairs, gate I1, because the engine has no optional extra question):
1. "Wie van jullie doet bbl, loopt stage of heeft een bijbaan? Welke papieren heb je getekend? Wat snapte je er niet aan?"
2. "Stel: je baas betaalt te weinig, of zet je 's nachts op het rooster. Durf je dat te zeggen? Wie op school of op je werk kan je helpen?"
3. "Woon je thuis of niet? Wat doe je met je loon? Spreek je daar iets over af?"
4. "Snel klaar? Je werkt op één dag 7 uur in de zorg en 3 uur in de snackbar. Tellen die uren samen voor de regels? Hoeveel uur is dat?"

(Prompt 4 asks no "mag dat?": whether 7 + 3 hours on one day is allowed depends on the times, because of the 11 hours of rest, so the lesson does not claim it. Teacher answer in the teacher detail of kamer 3: yes, both jobs count together, 10 uur.)

**Slotvraag:** "Welke check doe jij deze week: je loon, je rooster, je stagekosten of je loonheffingskorting?"

**Als-dan-plan (per student, vaste keuzes):** "Als ___, dan ___. Dat doe ik binnen ___."
- Situaties: "ik mijn loonstrook krijg" · "ik mijn rooster krijg" · "ik iets moet kopen voor mijn stage" · "ik een bijbaan erbij neem" · "ik een nieuwe stage zoek"
- Acties: "zoek ik het minimumloon voor mijn leeftijd op bij de Rijksoverheid" · "spreek ik mijn werkgever aan" · "vraag ik het bedrijf om het geld terug" · "laat ik de loonheffingskorting bij maar één werkgever toepassen" · "check ik op stagemarkt.nl of het bedrijf erkend is"
- Termijnen: "een dag" · "een week" · "een maand"
- Lead: "Wat ga jij echt regelen na deze les? Maak er een als-dan-plan van. Ieder maakt een eigen plan."

Per kamer (`discuss`):
- Kamer 1: "Wat moest jij al betalen voor je stage of leerbaan? Kreeg je dat geld terug?"
- Kamer 2: "Waarom denk je dat er een lager loon voor bbl'ers was? Vind je het goed dat het weg is?"
- Kamer 3: "Hoe zorg jij dat werk, school en rust samen passen?"
- Kamer 4: "Wat zeg je als je baas je te laat vraagt? Oefen de zin met je buur."

(The kamer 2 prompt makes no claim about the policy reasons; it is gate D8. The kamer 3 prompt is the vitaal burgerschap line.)

---

## Teacher screen (Dutch, as shown)

**`teacher.audience`** (Revision 1: lines 2 to 4 and 6 are new, gate D1, D2, D3, D6):
1. "Voor mbo niveau 3 en 4, 16 tot ongeveer 20 jaar. Niveau 2 kan ook, met wat hulp bij het lezen."
2. "Past bij burgerschap en loopbaan. De les sluit aan bij de rechten en plichten van de beroepsbeoefenaar en de arbeidsverhoudingen in Nederland. Bron: generieke kwalificatie-eisen loopbaan en burgerschap, versie 1 augustus 2026. Ook goed als voorbereiding op stage of leerbaan."
3. "Deze les gaat over je rechten als werknemer en stagiair. Budgetteren en netto loon zitten er niet in."
4. "Geef de les vóór 1 juli 2027. Het verhaal speelt in 2027, dus januari tot en met juni past het best, bijvoorbeeld in de Week van het geld (15 tot en met 19 maart 2027). Gecontroleerd op 7 november 2026."
5. "45 minuten, of 30 minuten met een kortere escape. Je hoeft niets voor te bereiden. Ook een gastdocent, loopbaanbegeleider of bpv-begeleider kan deze les geven."
6. "Niet elk tweetal haalt alle vier de kamers. Dat is niet erg: stop op minuut 28."

**`teacher.goal`:** the seven leerdoelen above, in one line, "De student kan: 1. ... 7. ...".

Kern (`teacherNote`):
- Kamer 1: "Leerbaan met arbeidsovereenkomst: loon. Stage: loon is niet verplicht. Moet de student iets kopen voor de stage en betaalt niemand anders het? Dan betaalt het bedrijf."
- Kamer 2: "Vanaf 1 januari 2027 geldt ook in de bbl het minimumloon voor je leeftijd. Een cao kan meer geven."
- Kamer 3: "Onder de 18: in de zorg geen werk tussen 23:00 en 06:00, en school telt mee voor de 9 uur per dienst. Vanaf 18 mag nachtwerk."
- Kamer 4: "Oproep minder dan 4 dagen van tevoren: je mag nee zeggen. Per oproep minstens 3 uur loon. Loonheffingskorting bij één werkgever."

Bronnen en uitzonderingen (`teacherDetail`, closed; each point from the source table):
- Kamer 1: Stagevergoeding is nu niet verplicht volgens de wet. Het kabinet wil dat veranderen: kijk op rijksoverheid.nl of het wetsvoorstel al in internetconsultatie is. In een deel van de cao's staat al een stagevergoeding. Doet een stagiair gewoon werk, zonder te leren? Dan kan die recht hebben op het minimumloon; de Nederlandse Arbeidsinspectie controleert dat. Kosten: veiligheidsschoenen zijn beschermingsmiddelen. Die moet het bedrijf gratis geven, ook aan een stagiair (Arbowet artikel 1, 3 en 44). Voor andere kosten, zoals reizen of een VOG, zegt de Rijksoverheid: krijg je ze niet op een andere manier vergoed, dan moet het bedrijf ze vergoeden. Dat staat ook in de modelafspraken voor de praktijkovereenkomst van de MBO Raad (Stagepact), maar niet in een wet. De praktijkovereenkomst teken je met je school en je leerbedrijf. Bij de bbl is in het Stagepact afgesproken dat er ook een arbeidscontract komt. Een leerbaan voor de bbl vind je op leerbanenmarkt.nl.
- Kamer 2: Tot en met 31 december 2026 was het minimumloon in de bbl lager voor 18, 19 en 20 jaar: van 1 juli tot en met 31 december 2026 minstens € 6,82 voor 18, € 7,87 voor 19 en € 9,22 voor 20. Vanaf 1 januari 2027 krijgen alle bbl'ers met een arbeidsovereenkomst minstens het minimumloon voor hun leeftijd: 16 jaar € 6,12; 17 jaar € 7,65; 18 jaar € 9,56; 19 jaar € 11,47; 20 jaar € 13,38; 21 jaar en ouder € 15,29 per uur. In de zorg, de techniek en de bouw krijgen bbl'ers vaak al meer dan het minimumloon. Je krijgt daarnaast minstens 8% vakantiegeld. Te weinig loon of vakantiegeld kun je tot 5 jaar terugvragen. Op 1 juli 2027 komen er nieuwe bedragen; die staan dan op rijksoverheid.nl onder minimumloon. De les noemt alleen januari 2027, dus de antwoorden blijven goed.
- Kamer 3: De regels voor 16 en 17 jaar gelden ook in de zorg. Er is één uitzondering voor het mbo: wie voor bakker leert, mag soms 's nachts werken als een collectieve regeling dat regelt. Onder de 18 telt schooltijd mee als arbeidstijd, ook de pauzes. Onder de 18 heb je elke 24 uur minstens 12 uur rust, met daarin 23:00 tot 06:00. Begint school de volgende dag om 08:30? Dan moet het werk om 20:30 klaar zijn. Vanaf 18 jaar: maximaal 12 uur per dienst en 60 uur per week. Elke 24 uur minstens 11 uur rust; 1 keer per week mag dat 8 uur zijn, alleen als het werk dat nodig maakt. Een nachtdienst duurt maximaal 10 uur. Af en toe mag het 12 uur zijn, maar niet vaak. Eindigt een nachtdienst na 02:00? Dan volgt minstens 14 uur rust. Ook die mag 1 keer per week 8 uur zijn, alleen als het werk dat nodig maakt. In de verpleging en verzorging kan een collectieve regeling voor 18 jaar en ouder de rust nog een keer per week tot 10 uur inkorten. Wie twee banen heeft, telt de uren van beide banen bij elkaar op, voor de werktijd en de rust. Antwoord op de vraag voor snelle tweetallen: ja, beide banen tellen mee; samen 10 uur.
- Kamer 4: In een cao kan de oproeptermijn korter zijn, maar nooit korter dan 24 uur. Een te late oproep mag je ook gewoon aannemen. De regel van minstens 3 uur loon per oproep kan een cao niet afschaffen. Vanaf 1 januari 2028 verdwijnt het nulurencontract voor de meeste werknemers. Een oproepcontract mag dan nog wel voor wie jonger is dan 18, voor scholieren en voor studenten, ook mbo-studenten, als ze gemiddeld niet meer dan 16 uur per week bij die werkgever werken. Werk je bij werkgevers na elkaar, niet tegelijk? Dan mag je de korting bij elke werkgever laten toepassen. Belasting terugvragen met een aangifte zit niet in deze les.

Dit wordt vaak gevraagd (`teacher.faq`; Revision 1 adds six, gate D4, G3, G4, G6, I2):
- "Ik heb maar 30 minuten. Kan dat?" Antwoord: "Ja. Zet de klastimer op 16 minuten. Minuut 0 tot 2 uitleg, 2 tot 5 startcheck, 5 tot 21 escape, 21 tot 24 eindcheck, 24 tot 30 slotvraag en als-dan-plan. Niet alle tweetallen komen dan bij kamer 4."
- "Ik heb 60 of 90 minuten." Antwoord: "Gebruik het lesplan van 45 minuten. Neem meer tijd voor het nabespreken en voor de vragen per kamer."
- "Mijn klas doet geen zorg." Antwoord: "De basisregels gelden in bijna alle sectoren. Sommige sectoren hebben uitzonderingen, zoals de bakkerij. Het verhaal speelt in de zorg. Een cao kan wel meer geven."
- "Mijn studenten doen allemaal bol. Werkt de les dan?" Antwoord: "Ja. Kamer 1 gaat over stage, kamer 4 over een bijbaan met een oproepcontract. Kamer 2 gaat over de bbl, maar de tabel en de som gelden ook voor een bijbaan."
- "Is dit een examen?" Antwoord: "Nee. Het is oefenen met regels die je nodig hebt op je werk."
- "In onze sector is het loon hoger dan het minimumloon. Klopt de les dan nog?" Antwoord: "Ja. Het minimumloon is de ondergrens. Een cao kan meer geven. Laat studenten hun eigen cao opzoeken."
- "Welke cao geldt voor mij?" Antwoord: "Dat staat in je contract of in de opgave van je werkgever. Vraag het anders aan je werkgever."
- "Tot wanneer kloppen de bedragen?" Antwoord: "De tabel geldt vanaf 1 januari 2027. Op 1 juli 2027 komen er nieuwe bedragen; die staan dan op rijksoverheid.nl. De vragen gaan over januari 2027, dus de antwoorden blijven goed."
- "Een student zegt: ik krijg te weinig. Wat doe ik?" Antwoord: "Laat de student het minimumloon voor de eigen leeftijd opzoeken. Is het te weinig? Eerst de werkgever aanspreken. Helpt dat niet? Een melding kan bij de Nederlandse Arbeidsinspectie. Je kunt na de les met de student meedenken."
- "Een student vraagt iets wat niet in de les staat." Antwoord: "Zeg eerlijk dat je het niet zeker weet. Zoek het samen op rijksoverheid.nl."
- "Er zijn geen laptops of telefoons." Antwoord: "Print Kamers op papier (studenten) op dit scherm. Lees de antwoorden van je eigen scherm."

(Sources for the FAQ: "Welke cao geldt" is BW 7:655 lid 1 onder l, the employer's written opgave names "de toepasselijke collectieve arbeidsovereenkomst" (BWBR0005290, version 1 Jan 2026, read 7 Nov 2026). The melding: row onderbetaald-stappen. "Je kunt na de les meedenken", "zoek het samen op" and the 60 or 90 minutes line are advice, not rules. "Een cao kan meer geven": row cao-meer.)

**`teacher.closing`:** the slotvraag.

---

## What differs from the havo version (summary for reviewers)

| Topic | Havo/vwo (ESC-BIJBAAN, 3521) | Mbo (ESC-BIJBAAN-MBO, 5423) | Why |
|---|---|---|---|
| Audience, reading | havo/vwo 16-18, B1/B2 | mbo 3-4, 16-20, A2/B1, max 2 docs per room, more tables | research/next_topics.md; mbo reading level |
| Kamer 1 | Contract: proeftijd, te late oproep, afzeggen | Leren en werken: bbl arbeidsovereenkomst vs bol stage, stagekosten terug, erkend leerbedrijf | Mbo students start with a leerbaan or stage, not a bijbaan; proeftijd dropped (a leerbaan lasts 1,5 years on average, Stb. 2026, 279 nota van toelichting 4b; for a contract of more than 6 months and under 2 years the 1-month cap can be changed by cao, BW 7:652 lid 7, so no clean question) |
| Kamer 2 | Uurloon nov 2026, birthday 17, 2026 table, € 15,00 | Loon jan 2027, age 18, 2027 table, bbl staffel abolished, € 274,00 | Stb. 2026, 279: from 1 Jan 2027 no lower bbl wage; a 2027 story fits the spring 2027 pilot |
| Kamer 3 | 17-year-old shop rooster, studiedag, pauze | Zorg rooster: 17-year-old colleague's night shift, bbl school day, and 18+ night work | Zorg shifts; most mbo students turn 18 during mbo; 16-17 vs 18+ in one table |
| Kamer 4 | Belasting: korting, jaaropgaaf, aangifte, 5 jaar | Bijbaan erbij (horeca): te late oproep, 3 uur minimum, korting | Two jobs (bbl + bijbaan) is the mbo case; the aangifte goes to the separate tax lesson |
| Questions | 14, escape 27 min | 12, escape 22 min, 30-min variant via timer; checks 3 min each | Short rooms; engine has no short version; A2 readers need longer for the checks |
| Checks | contract, uurloon, nacht, korting; three options with Ja/Nee | stage loon, bbl loon 2027, nacht, oproep; no odd-one-out start, two items as "Wat klopt?" | One per room, new sectors (techniek, bouw, zorg, horeca, retail); Revision 1 |
| Teacher | Docent; notes per room | Also guest, loopbaanbegeleider, bpv-begeleider; no printing; first taps in the plan; one Kern line per room with the background closed; when to give it; the kwalificatie-eis phrases; 11 FAQ | 71% need no material, 82% prefer guests |
| validUntil | 30 juni 2027 | 30 juni 2027 | 1 July 2027 indexation |

Reused as is or nearly: the 4-day oproep rule and its nudge and hint (havo 1.2), the 9-hour school-day question (havo 3.2), the loonheffingskorting question (havo 4.1), the underpayment steps and 5-year line, the plan and lesson-plan structure, the fiction line, the stop flow.

---

## Alle bedragen met hun geldigheid

| Bedrag | Waar | Echt of verzonnen | Geldt voor |
|---|---|---|---|
| € 6,12 / € 7,65 / € 9,56 / € 11,47 / € 13,38 / € 15,29 per uur (16 / 17 / 18 / 19 / 20 / 21+ jaar) | tabel kamer 2, opties 2.1, docentnoot | echt (Rijksoverheid 2027; Stcrt. 2026, 38817) | 1 januari 2027 tot de indexering van 1 juli 2027; ook voor bbl met arbeidsovereenkomst |
| € 6,82 per uur | loonoverzicht kamer 2, optie 2.1 a | verzonnen loon; gelijk aan het echte bbl-minimum voor 18 jaar | echt bedrag geldig 1 juli tot en met 31 december 2026 (verlopen in januari 2027) |
| € 7,87 (19) en € 9,22 (20) bbl 2026 | docentnoot kamer 2 | echt (Rijksoverheid bbl 2026) | 1 juli tot en met 31 december 2026 |
| € 682,00 betaald, € 956,00 juist, € 2,74 per uur, € 274,00 te weinig | kamer 2 | berekend uit verzonnen uren | januari 2027 |
| 8% vakantiegeld (minstens) | tabel kamer 2 | echt (Wet minimumloon art. 15 lid 1) | geen einddatum bekend |
| € 50 veiligheidsschoenen | kamer 1, cijfer 1 | verzonnen | 2026 |
| 7 + 3 = 10 uur | gespreksvraag 4, docentdetail kamer 3 | verzonnen uren | geen datum |

## Bronnen (source table)

All read on **7 November 2026**. "Page date" is the modified date in the page metadata, where given. Law texts are the BWB XML (repository.officiele-overheidspublicaties.nl), version named.

| Rule id | Rule (as used in the lesson) | Source 1 | Source 2 | Valid until |
|---|---|---|---|---|
| bbl-ao-loon | Bbl met arbeidsovereenkomst: loon, minstens het minimumloon (r1 kamer 1, 1.1). | [Rijksoverheid, moet ik stage lopen als ik een mbo-opleiding volg](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/middelbaar-beroepsonderwijs/moet-ik-stage-lopen-als-ik-een-mbo-opleiding-volg) (page date 7 Oct 2026): "Als jij een leerbaan hebt (een bbl-opleiding doet), dan heb je naast een vergoeding voor de kosten die je maakt ook recht op een arbeidscontract en salaris van tenminste het bbl-minimumloon." | [Stb. 2026, 279](https://zoek.officielebekendmakingen.nl/stb-2026-279.html), nota van toelichting 2b: "Bbl-studenten vallen onder het wettelijk minimum bbl (jeugd)loon, indien zij een arbeidsverhouding hebben met het leer-werkbedrijf." Besluit minimumjeugdloon art. 1 (BWBR0003599, version 1 Jan 2024). | No end date known |
| stage-geen-loon | Stage zonder arbeidsovereenkomst: loon niet verplicht; stagevergoeding mag (r2 kamer 1, 1.1, A1, B1). | [Rijksoverheid, heb ik recht op het minimumloon als ik stage loop](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/minimumloon/minimumloon-stage) (page date 19 Nov 2025): "Als u stage loopt, heeft u geen recht op het wettelijk minimumloon."; "Tijdens uw stage is de werkgever wettelijk niet verplicht om u een stagevergoeding te geven." | [Nederlandse Arbeidsinspectie, stagevergoeding](https://www.nlarbeidsinspectie.nl/onderwerpen/stagevergoeding): "Een stagiair heeft geen recht op het wettelijk minimumloon."; "Is het doel van de stage niet leren, maar alleen werken? Dan heeft de werknemer mogelijk recht op het wettelijk minimumloon." | Until a law on stagevergoeding; [Rijksoverheid nieuws 3 Jul 2026](https://www.rijksoverheid.nl/actueel/nieuws/2026/07/03/kabinet-wil-stagevergoeding-verplichten): "Het wetsvoorstel zal naar verwachting begin 2027 in internetconsultatie gaan." Re-check yearly. |
| stage-kosten | Je stage mag jou geen geld kosten; kosten die je moet maken betaalt het bedrijf terug (r3 kamer 1, 1.2, cijfer 1). | Rijksoverheid mbo-stage (as above): "De stage of leerbaan mag jou geen geld kosten. Maak je kosten en krijg je die niet op een andere manier vergoed? Bijvoorbeeld omdat je moet reizen naar je stageplek, een VOG ... nodig hebt of omdat je bedrijfskleding moet kopen voor je stage? Dan moet het bedrijf waar je stage loopt deze kosten vergoeden." | [MBO Raad m.m.v. SBB, Servicedocument praktijkovereenkomst 2025-2026](https://www.mboraad.nl/sites/default/files/2025-05/Servicedocument%20praktijkovereenkomst%202025-2026.pdf), model algemene voorwaarden 5.7: "Het leerbedrijf betaalt aan de student een onkostenvergoeding die ten minste alle kosten in euro's omvat die een student moet maken van het bedrijf of van de wet om stage te kunnen lopen bij het bedrijf. ... (Dit geldt zowel voor studenten bol als bbl)." Revision 1, for protective equipment such as the safety shoes of 1.2: [Arbeidsomstandighedenwet](https://wetten.overheid.nl/BWBR0010346/2026-07-01) (BWB XML BWBR0010346, version 1 Jul 2026, read 7 Nov 2026) art. 3 lid 1 onder b: "worden doeltreffende en passende persoonlijke beschermingsmiddelen aan de werknemer ter beschikking gesteld"; art. 44: "De kosten die zijn verbonden aan de naleving van de regels die bij of krachtens deze wet zijn gesteld, worden niet ten laste van de werknemers gebracht."; art. 1 lid 2: werkgever is also "degene die zonder werkgever of werknemer in de zin van het eerste lid te zijn, een ander onder zijn gezag arbeid doet verrichten". | Stagepact mbo 2023-2027; re-check when the Stagepact ends. The Arbowet part has no end date; the rest is not a statute (teacher detail). |
| erkend | Stage of leerbaan alleen bij een erkend leerbedrijf; check op stagemarkt.nl (r4 kamer 1, 1.3). | Rijksoverheid mbo-stage: "Je mag in het mbo alleen een stage of leerbaan hebben bij erkende leerbedrijven."; "Doe je een bol-opleiding, dan kun je zelf een stage vinden bij een erkend leerbedrijf op stagemarkt.nl"; bbl: "leerbanenmarkt.nl". | Law: WEB art. 7.2.8 lid 4 (BWBR0007625, version 1 Aug 2026): "De beroepspraktijkvorming vindt plaats bij een bedrijf of organisatie met een erkenning op grond van artikel 5.2.3."; [stagemarkt.nl](https://stagemarkt.nl/): "Of wil je checken of een bedrijf waar je stage wilt lopen, erkend is?" | No end date known |
| pok-partijen | Teacher note only: de pok teken je met je school en je leerbedrijf (gloss kamer 1). | WEB art. 7.2.9 lid 1: "De overeenkomst wordt gesloten door de instelling, de student en het bedrijf dat of de organisatie die de beroepspraktijkvorming verzorgt." | Rijksoverheid mbo-stage: "De onderwijsinstelling sluit een praktijkovereenkomst (pok) af met jou en het leerbedrijf." | No end date known |
| bbl-dagen | Gloss: bbl, 3 of 4 dagen per week bij een bedrijf, de andere dagen school. | Rijksoverheid mbo-stage: "dan werk je 3 of 4 dagen mee in een bedrijf via een leerbaan ... Op de overige werkdagen volg je vakken op school." | Stb. 2026, 279, nota van toelichting: "In de bbl werken studenten minimaal drie dagen per week bij een erkend leerbedrijf en gaan één dag per week naar school." | No end date known |
| stagepact-bbl | Teacher note only: bij de bbl is in het Stagepact afgesproken dat er een arbeidscontract komt. | MBO Raad servicedocument pok 2025-2026: "Voor de bbl is in het stagepact afgesproken dat er een arbeidscontract wordt afgesloten." | Rijksoverheid mbo-stage: "recht op een arbeidscontract" | Stagepact 2023-2027 |
| wml-2027 | Minimumloon per uur vanaf 1 januari 2027: 16 € 6,12; 17 € 7,65; 18 € 9,56; 19 € 11,47; 20 € 13,38; 21+ € 15,29 (tabel kamer 2, 2.1, 2.2). | [Rijksoverheid, bedragen minimumloon 2027](https://www.rijksoverheid.nl/themas/werk/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2027) (page date 6 Nov 2026, 12:16 UTC): table "brutobedragen per 1 januari 2027", same seven amounts. | [Stcrt. 2026, 38817](https://zoek.officielebekendmakingen.nl/stcrt-2026-38817.html) (Regeling van 29 oktober 2026): "18 jaar 62,5% € 9,56" and the other ages. | Until the 1 July 2027 indexation |
| bbl-2027 | Vanaf 1 januari 2027 geen lager minimumloon meer voor de bbl (r1 kamer 2, 2.1, A2, B2). | Stb. 2026, 279 (Besluit van 9 september 2026): Artikel I onder B "Artikel 3 vervalt." (art. 3 Besluit minimumjeugdloon was the lower bbl rate); Artikel III: "Dit besluit treedt in werking met ingang van 1 januari 2027." | Stcrt. 2026, 38817: "Voor werknemers die werkzaam zijn op basis van een arbeidsovereenkomst die is aangegaan in verband met een beroepsbegeleidende leerweg (bbl) gelden per 1 januari 2027 geen alternatieve staffels meer. Voor leerlingen in de bbl gelden voortaan bovenstaande bedragen."; [Rijksoverheid, bedragen minimumloon bbl-opleiding](https://www.rijksoverheid.nl/themas/werk/minimumloon/bedragen-minimumloon-bbl-opleiding) (page date 6 Nov 2026): "Vanaf 1 januari 2027 ontvangen alle bbl-studenten, werkend onder een arbeidsovereenkomst, het voor hun leeftijd geldende minimumloon." | Ongoing (the Wml art. 8 lid 4 basis for a bbl rate remains, Stb. 2026, 279 NvT 3b; re-check yearly) |
| bbl-2026 | Teacher note and distractor 2.1 a: bbl 1 juli tot en met 31 december 2026: 18 € 6,82; 19 € 7,87; 20 € 9,22 (15 to 17 and 21+ equal to the regular table). | [Rijksoverheid, bedragen minimumloon bbl-opleiding 2026](https://www.rijksoverheid.nl/themas/werk/minimumloon/bedragen-minimumloon-bbl-opleiding/bedragen-minimumloon-bbl-2026) (page date 22 May 2026): "Bedragen per 1 juli 2026 ... 18 jaar € 6,82". | Besluit minimumjeugdloon art. 3 (BWBR0003599, version 1 Jan 2024): the lower bbl percentages for 18, 19 and 20. | Expired 31 Dec 2026 (labelled so in the teacher note) |
| wml-leeftijd | Het minimumloon hangt af van je leeftijd; je werkgever betaalt minstens het bedrag voor jouw leeftijd (r2 kamer 2). | Rijksoverheid 2027 (table by age): "Voor werknemers van 15 tot en met 20 jaar gelden vaste minimumjeugdlonen per uur." | Besluit minimumjeugdloon art. 2 lid 1 as amended by Stb. 2026, 279 ("de 18-jarigen: 62,5") | Ongoing |
| vakantiegeld | Tabel kamer 2: zonder vakantiegeld; daarnaast minstens 8%. | Wet minimumloon en minimumvakantiebijslag art. 15 lid 1 (BWBR0002638, version 1 Jul 2026): "recht op een vakantiebijslag ten minste tot een bedrag van 8% van zijn ten laste van de werkgever komende loon" | Rijksoverheid 2027: "In de tabellen staan brutobedragen." | No end date known |
| onderbetaald-stappen | Te weinig loon: eerst je werkgever aanspreken; lost die het niet op, melden bij de Nederlandse Arbeidsinspectie (r3, r4 kamer 2, 2.3). | [Rijksoverheid, wat kan ik doen als ik minder loon krijg dan het wettelijk minimumloon](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/minimumloon/wat-kan-ik-doen-als-ik-minder-loon-krijg-dan-het-wettelijk-minimumloon) (page date 21 Jan 2026): "Spreek eerst uw werkgever hierop aan."; "Komt u er met uw werkgever niet uit, dan kunt u terecht bij de Nederlandse Arbeidsinspectie." | Same page: "Blijft uw werkgever weigeren om u het minimumloon te betalen? Dan kunt u dit melden bij de Nederlandse Arbeidsinspectie." (one page, two passages; the havo spec's second source, government.nl, was not re-read today) | No end date known |
| onderbetaald-5jaar | Te weinig loon of vakantiegeld kun je tot 5 jaar terugvragen (explanation 2.3, teacher note). | Rijksoverheid (as above): "Dan kunt u uw achterstallig loon nog 5 jaar opeisen bij uw werkgever. Dit geldt ook voor uw achterstallige vakantietoeslag." | (single source read today; BW 3:308 not re-read) | No end date known |
| nacht-1617 | 16 en 17 jaar: tussen 23:00 en 06:00 nooit werken (regels kamer 3, 3.1, A3, B3). | Law: Arbeidstijdenwet art. 5:3 lid 1 (BWBR0007671, version 1 Jul 2025): "een onafgebroken rusttijd ... van ten minste 12 uren in elke aaneengesloten periode van 24 uren, waarin zijn begrepen de uren tussen 23.00 uur en 06.00 uur." | [Rijksoverheid, hoeveel uur werken 16 of 17 jaar](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/bijbaan-vakantiewerk-en-stage-door-jongeren/hoeveel-uur-werken-16-17-jaar) (page date 12 Dec 2025): "Je mag niet 's nachts werken"; [Rijksoverheid, hoeveel pauze 16 of 17 jaar](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/bijbaan-vakantiewerk-en-stage-door-jongeren/hoeveel-pauze-16-17-jaar) (page date 12 Dec 2025): "In elk geval tussen 23.00 - 06.00 uur". Exception (teacher detail only): Arbeidstijdenbesluit art. 5.4:3 (BWBR0007687, version from 1 Jan 2024, the current one; re-read in Rev 2), bakery trainees in bbl or bol, "uitsluitend mogelijk bij collectieve regeling". Rev 2: the pupil text says "in de zorg" (check B 7); the Arbeidstijdenbesluit of 1 Jan 2024 names jeugdige werknemers only in art. 2.1:2, 4.1:2, 5.4:3 and 5.6:2, none of them zorg. | No end date known |
| rust-12 | 16 en 17 jaar: elke 24 uur minstens 12 uur achter elkaar vrij (regels kamer 3). | Arbeidstijdenwet art. 5:3 lid 1 and lid 3 | Rijksoverheid pauze 16 of 17: "Minimum dagelijkse rust 12 uur" | No end date known |
| max-dienst-1617 | 16 en 17 jaar: maximaal 9 uur per dienst (regels kamer 3 row "Per dienst", 3.2; Rev 2, check B 6, was "per dag"). | Arbeidstijdenwet art. 5:7 lid 1: "a. 9 uren per dienst; b. 45 uren per week"; art. 1:7 ("dienst": between two rests of at least 8 uren) | Rijksoverheid uur 16 of 17 (table: dienst 9 uur, week 45 uur) | No end date known |
| schooltijd | Onder de 18 telt schooltijd mee als arbeidstijd, pauzes op school inbegrepen (3.2). | Arbeidstijdenwet art. 4:4 lid 2: "geldt de tijd waarop een jeugdige werknemer onderwijs volgt of pleegt te volgen, de onderbrekingen inbegrepen, als arbeidstijd." | Rijksoverheid uur 16 of 17: "De tijd die je op school bent telt ook mee als arbeidstijd." | No end date known |
| nacht-18 | Vanaf 18 mag je ook 's nachts werken (regels kamer 3, 3.3). | Arbeidstijdenwet art. 5:8 lid 1 (night shifts of a werknemer, max 10 uren, no age bar from 18; the bar for jeugdigen is art. 5:3 lid 1) | [Rijksoverheid, hoe lang mag mijn nachtdienst duren](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/werktijden/hoe-lang-mag-nachtdienst-duren) (page date 27 Feb 2019): "Als u regelmatig in nachtdienst werkt, mag uw nachtdienst maximaal 10 uur duren." | No end date known |
| rust-nacht-18 | Teacher detail only (Rev 2: off the table): na een nachtdienst die na 02:00 eindigt minstens 14 uur rust; 1 keer per week 8 uur, alleen als het werk dat nodig maakt. | Arbeidstijdenwet art. 5:8 lid 4 (version 1 Jul 2025, current; re-read in Rev 2): "eenmaal in elke aaneengesloten periode van 7 maal 24 uren mag worden ingekort tot ten minste 8 uren, indien de aard van de arbeid of de bedrijfsomstandigheden dit met zich brengen" | Rijksoverheid nachtdienst: "Nachtdienst eindigt na 2.00 uur: Minimaal 14 uur rust. Hooguit 1 keer per week mag de rusttijd 8 uur duren." | No end date known |
| rust-11 | Teacher detail only (Rev 2, check B 1: off the table): 18 en ouder elke 24 uur minstens 11 uur rust; 1 keer per 7 dagen 8 uur, alleen als het werk dat nodig maakt. Zorg: ATB 5.19:2. | Arbeidstijdenwet art. 5:3 lid 2 (version 1 Jul 2025, current; re-read in Rev 2): "eenmaal ... mag worden ingekort tot ten minste 8 uren, indien de aard van de arbeid of de bedrijfsomstandigheden dit met zich brengen"; Arbeidstijdenbesluit art. 5.19:1 and 5.19:2 (version 1 Jan 2024): for "verpleging of verzorging, verricht door de werknemer van 18 jaar of ouder", rest of 11 uren "eenmaal ... ingekort tot ten minste 8 uren alsmede eenmaal ... tot ten minste 10 uren", "uitsluitend mogelijk bij collectieve regeling" (check B 8) | [Rijksoverheid, wettelijke regels werktijden en rusttijden](https://www.rijksoverheid.nl/themas/werk/werktijden/vraag-en-antwoord/werktijden/wettelijke-regels-werktijden-en-rusttijden) (page date 2 Jan 2026): "Na een werkdag mag u minimaal 11 aaneengesloten uren niet werken. De rustperiode van 11 uur mag eens in de 7 dagen ingekort worden tot minimaal 8 uur." | No end date known |
| max-12 | 18 en ouder: maximaal 12 uur per dienst (regels kamer 3). | Arbeidstijdenwet art. 5:7 lid 2 onder a | Rijksoverheid wettelijke regels: "U mag maximaal 12 uur per dienst werken en maximaal 60 uur per week." (the page adds "In uw cao kunnen afwijkende regels staan"; the table note says "Vanaf 18 jaar gelden extra regels voor nachtdiensten"; teacher note: "Voor sommige regels kan een cao iets anders zeggen") | No end date known |
| meer-banen | Teacher note only: twee banen, uren tellen samen voor de Arbeidstijdenwet. | [Rijksoverheid, wat staat er in de Arbeidstijdenwet over mijn werktijden](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/werktijden/wat-staat-er-in-de-arbeidstijdenwet-over-mijn-werktijden) (page date 3 Aug 2026): "Als u meerdere banen heeft, geldt de Arbeidstijdenwet op al uw werkzaamheden. Door de verschillende werktijden bij elkaar optellen, kunt u nagaan wat uw werktijden en rusttijden moeten zijn." | (single source; no Arbeidstijdenwet article found that says it in these words) | No end date known |
| oproeptermijn | Oproep minder dan 4 dagen van tevoren: je hoeft niet te komen; cao kan het korter maken, niet korter dan 24 uur (r1 kamer 4, 4.1, A4, B4). | Law: BW 7:628a lid 2 (BWBR0005290, version 1 Jan 2026): "niet ten minste vier dagen van tevoren"; lid 4: "mits de termijn niet korter is dan 24 uur" | [Rijksoverheid, welke contracten zijn er voor oproepkrachten](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/arbeidsovereenkomst-en-cao/welke-contracten-zijn-er-voor-oproepkrachten) (page date 13 Oct 2026): "Uw werkgever moet u minstens 4 kalenderdagen van tevoren oproepen voor werk. Als uw werkgever u minder dan 4 dagen van tevoren oproept, bent u niet verplicht om te komen werken."; "In een cao kan worden vastgelegd dat de oproeptermijn van 4 dagen wordt verkort tot (minimaal) 1 dag." | Until 1 Jan 2028 (Wet meer zekerheid flexwerkers renumbers and changes oproep rules; re-check) |
| oproep-3uur | Na een oproep korter dan 3 uur gewerkt: toch 3 uur loon (r2 kamer 4, 4.2, cijfer 4). | BW 7:628a lid 1: "voor iedere periode van minder dan drie uur waarin hij arbeid heeft verricht, recht op het loon waarop hij aanspraak zou hebben indien hij drie uur arbeid zou hebben verricht." | Rijksoverheid oproepkrachten: "Iedere keer dat uw werkgever u oproept, heeft u recht op minimaal 3 uur loon. Ook als u maar 1 uur werkt." Cao-proof (Revision 1, gate "4.2 and cao"): BW 7:628a lid 12: "Van dit artikel kan niet ten nadele van de werknemer worden afgeweken."; the only cao openings are lid 4 (the 4-day term, "niet korter ... dan 24 uur") and lid 11 (seasonal work: "lid 2, lid 3 en lid 5 niet van toepassing"), never lid 1. | Until 1 Jan 2028; re-check |
| afzeggen | Defensibility note 4.2 only: oproep binnen 4 dagen ingetrokken of gewijzigd: loon over de opgeroepen uren. | BW 7:628a lid 3: "binnen vier dagen voor de aanvang van het tijdstip van de arbeid de oproep ... ten dele dan wel volledig intrekt of de tijdstippen wijzigt" | Rijksoverheid oproepkrachten: "Als de werkgever de oproep binnen 4 dagen afzegt of de werktijden verandert, dan heeft u recht op loon over de uren waarop u was opgeroepen." | Until 1 Jan 2028 |
| flex-2028 | Teacher note kamer 4: vanaf 1 januari 2028 geen nulurencontract meer, behalve onder meer voor jonger dan 18, scholieren en studenten (ook mbo) die gemiddeld hoogstens 16 uur per week bij die werkgever werken. | [Stb. 2026, 205](https://zoek.officielebekendmakingen.nl/stb-2026-205.html) (Wet meer zekerheid flexwerkers, 8 juli 2026), new BW 7:628ac lid 1: "indien de gemiddelde omvang van de door de werknemer verrichte arbeid voor de werkgever ten hoogste zestien uur per week heeft bedragen en de werknemer: i. de leeftijd van achttien jaar nog niet heeft bereikt; ii. een scholier is ...; iii. een student is ..."; lid 3: student "ingeschreven aan ... een instelling als bedoeld in artikel 1.1.1. van de Wet educatie en beroepsonderwijs"; [Stb. 2026, 206](https://zoek.officielebekendmakingen.nl/stb-2026-206.html): "treedt in werking met ingang van 1 januari 2028" | [Ondernemersplein, nulurencontracten niet meer toegestaan](https://ondernemersplein.overheid.nl/wetswijzigingen/nulurencontracten-niet-meer-toegestaan/) (no page date): "Jongeren, scholieren, studenten met bijbanen en AOW-gerechtigden mogen straks nog wel op een oproepcontract werken." | From 1 Jan 2028 |
| korting-een | Twee banen tegelijk: loonheffingskorting bij één werkgever (r3 kamer 4, 4.3). | [Belastingdienst, loonheffingskorting met een bijbaan](https://www.belastingdienst.nl/wps/wcm/connect/nl/jongeren/content/loonheffingskorting-met-een-bijbaan) (page date 17 Mar 2026): "Werk je tegelijkertijd bij meer dan 1 werkgever? ... Vraag dan bij 1 werkgever de loonheffingskorting aan. ... Je moet dan waarschijnlijk achteraf belasting aan ons betalen." | [Belastingdienst, loonheffingskorting met meerdere inkomens](https://www.belastingdienst.nl/wps/wcm/connect/nl/werk-en-inkomen/content/loonheffingskorting-meerdere-inkomens) (page date 5 Aug 2026): "altijd geldt dat u de loonheffingskorting op maximaal 1 inkomen mag toepassen." | No end date known |
| na-elkaar | Teacher note kamer 4: werkgevers na elkaar, korting bij elke werkgever. | Belastingdienst bijbaan: "Werk je in 1 jaar bij meerdere werkgevers na elkaar? Dan kun je bij iedere werkgever de loonheffingskorting aanvragen." | (single source) | No end date known |
| cao-meer | Note under the 2027 table, FAQ, Kern kamer 2: een cao kan meer loon geven dan het minimumloon. | Rijksoverheid mbo-stage (as above), on the bbl: "salaris van tenminste het bbl-minimumloon. Een bedrijf mag jou ook meer bieden."; Rijksoverheid 2027: the table is the "Wettelijk minimumuurloon", "het brutominimumloon per uur" | Stb. 2026, 279, nota van toelichting 4b: "Voor werkgevers in met name sectoren als zorg, techniek en de bouw zal er niet veel veranderen aangezien bbl-studenten daar al vaak boven het minimumjeugdloon worden betaald." (not "veel cao's": the same note says retail has many jobs near the minimum) | No end date known |
| welke-cao | FAQ only: welke cao geldt, staat in je contract of in de opgave van je werkgever. | BW 7:655 lid 1 onder l (BWBR0005290, version 1 Jan 2026, read 7 Nov 2026): the employer's written opgave contains "de toepasselijke collectieve arbeidsovereenkomst" | lid 2: may be left out when it is in the written arbeidsovereenkomst (so: contract or opgave) | Until a change of BW 7:655 (the Wet meer zekerheid flexwerkers renumbers parts of lid 1 from 1 Jan 2028) |
| stagevergoeding-wet | Teacher detail kamer 1: kabinet wil stagevergoeding verplichten; check the status. | [Rijksoverheid nieuws 3 Jul 2026](https://www.rijksoverheid.nl/actueel/nieuws/2026/07/03/kabinet-wil-stagevergoeding-verplichten): "Het wetsvoorstel zal naar verwachting begin 2027 in internetconsultatie gaan." | Ondernemersplein "Ondernemers moeten stagevergoeding betalen" (fact check A, read 7 Nov 2026): "Ingangsdatum van dit wetsvoorstel: nog niet bekend." Revision 1 makes the teacher line date-proof ("kijk op rijksoverheid.nl of ..."). | Re-check before each school term |
| burgerschap-fit | Teacher screen: past bij burgerschap (werken en geld) en loopbaan. | Examen- en kwalificatiebesluit beroepsopleidingen WEB, art. 17a lid 3 and bijlage 1 (BWBR0027963, version 1 Aug 2026), quotes in "Past bij" | [Rijksoverheid nieuws 4 Apr 2024, examen burgerschapsonderwijs](https://www.rijksoverheid.nl/actueel/nieuws/2024/04/04/examen-burgerschapsonderwijs-verplicht-voor-mbo-studenten-in-2026): "Let op: het burgerschapsexamen is vanaf studiejaar 2027-2028 een verplicht onderdeel in het mbo." and "zelfstandig keuzes kunnen maken over je financiën"; expert group advice (open.overheid.nl, linked from that page) for the proposed new eisen | Re-check bijlage 1 before 1 Aug 2027 |

Word meanings without a rule: dienst, rust, pauze, oproep, brutoloon, vakantiegeld, loonheffingskorting (as in the havo spec and ESC-MAAND). Gloss "nachtdienst" follows Arbeidstijdenwet art. 1:7.

## Uncertainties and things left out

1. **Not measured:** timing (22 minutes for 12 questions is an estimate for mbo readers; the 30-minute variant is untested) and readability (no score; sentence length checked by script, see Review).
2. **Stage costs.** For the lesson's example, safety shoes the company requires, there is a statute (Revision 1, from fact check A, re-read 7 Nov 2026): Arbowet art. 3 lid 1 onder b (persoonlijke beschermingsmiddelen "aan de werknemer ter beschikking gesteld"), art. 44 (arbo costs "niet ten laste van de werknemers") and art. 1 lid 2 (whoever lets another work "onder zijn gezag" is werkgever, so a stagiair counts). For other costs (travel, VOG, bedrijfskleding) the basis stays Rijksoverheid ("moet ... vergoeden") and the Stagepact model clause, not a statute; the teacher detail says so. Whether a given pair of shoes is required protective equipment depends on the company's risks; the story says the company requires them.
3. **"Recht op een arbeidscontract" in the bbl.** Rijksoverheid says it is a right; the MBO Raad document says it was agreed in the Stagepact; Stb. 2026, 279 says the bbl minimum applies "indien zij een arbeidsverhouding hebben". The lesson never says every bbl student has one; Luca's pok says Luca has one, and the rule card is conditional ("Heb je een arbeidsovereenkomst?").
4. **stagemarkt.nl lookup** not tested with a real company name; the site says it can be used to check erkenning.
5. **1 July 2027 amounts** not published; validUntil 30 juni 2027. Before 1 July 2027 decide: keep the January 2027 story (answers stay true, as in the havo option A) and add the new table in the intro only, or move kamer 2 to a later month.
6. **Rijksoverheid vs law on 18+ hours.** Rijksoverheid adds "In uw cao kunnen afwijkende regels staan" to the 12-hour and 60-hour rules; Arbeidstijdenwet art. 5:7 lid 4 allows a cao deviation only from the 55-hour average, and the Arbeidstijdenbesluit has sector rules that apply via cao. No question uses the 12 hours; the table note and the teacher note say that for 18+ a cao can change some rules.
7. **Arbeidstijdenbesluit version (solved in Rev 2, check B 10).** The repository's `_latestItem` attribute still points to 14 November 2018, but its expression list has a version from 1 January 2024 with no end date; that version was read for Rev 2 (art. 2.1:2, 4.1:2, 5.4:3, 5.6:2, 5.19:1, 5.19:2: same text as cited). The Arbeidstijdenwet current version is 1 July 2025 (expression list), also re-read. Checked on wetten.overheid.nl on 7 Nov 2026 (late in Rev 2): the ATB page shows "Geldend van 01-01-2024 t/m heden" and the Atw page "Geldend van 01-07-2025 t/m heden"; the Atw page gives art. 1:7 lid 1 onder d verbatim ("nachtdienst: een dienst waarin meer dan een uur arbeid wordt verricht tussen 00.00 uur en 06.00 uur"), which is the room 3 gloss. The site served only the first 63,000 characters (up to hoofdstuk 4), so the hoofdstuk 5 article texts (Atw 5:3, 5:7, 5:8; ATB 5.4:3, 5.19:1, 5.19:2) were read in the official BWB XML of the same two versions from repository.officiele-overheidspublicaties.nl, the source of wetten.overheid.nl. Both pages say "Wijziging(en) zonder datum inwerkingtreding aanwezig": an amendment is pending without a start date; recheck before 30 juni 2027 (validUntil).
8. **"Zeestad" exists in the KvK** as Zeestad C.V. and Zeestad Beheer (Den Helder, urban redevelopment). This affects every lesson that uses Zeestad as a fictional town, not only this one. Risk judged low (no care home, school, installer or snackbar; the town is never placed); flagged for the coordinator.
9. **Single-source items, teacher text only:** two jobs count together for the Arbeidstijdenwet (Rijksoverheid only), werkgevers na elkaar (Belastingdienst only), 5 jaar terugvragen (Rijksoverheid only, today).
10. **Left out on purpose:** proeftijd (a leerbaan lasts 1,5 years on average, Stb. 2026, 279; for contracts of more than 6 months and under 2 years the 1-month cap can be changed by cao, BW 7:652 lid 7, so no clean question); pauze for 18+ (cao can change it, Arbeidstijdenwet art. 5:4 lid 3); the aangifte and terugvragen (the tax lesson); studiefinanciering and the studentenreisproduct (other rules, not checked); kostgeld (no rule; only a debrief question); minderjarigen and signing (BW 7:612 not re-read; MBO Raad: 16- and 17-year-olds may sign an arbeidsovereenkomst themselves).
11. **Burgerschap eisen in transition** (see "Past bij"): the teacher screen names two phrases of the current bijlage with its version date; whether they survive the herijking was not checked.
12. **Engine limits (Revision 1).** The label "Moeilijke woorden" (gate S2) is engine text in `src/strings.js`, which another agent is editing; not changed here, passed to the coordinator. No optional stretch question exists in the engine, so the fast-pair task is debrief prompt 4 (gate I1). Phone width (gate S4): checked by `tests/lessons-e2e.js` at 360 px (tables scroll inside their box, never the page); readability of the three-column `regels` table on a phone is not judged by that test.
13. **Not re-run in Revision 1:** the kvk.nl name check (names unchanged); the persona estimates of reading time.

---

## Review round 0 (author's own four readers, 7 November 2026, before Revision 1)

Kept as a record. Each reader went through the first version. Some wording quoted here was changed again in Revision 1 (see the changelog); the text above is the current one.

### Reader 1: fact checker

| # | Finding | Fix |
|---|---|---|
| F1 | 4.2 first draft had "Kevin stuurt je om 19:00 naar huis" (planned 17:00 to 21:00). Sending home early is a partial withdrawal within 4 days: BW 7:628a lid 3 gives pay for all 4 called hours, so "3 uur" would be wrong. | Changed to a 2-hour call (18:00 to 20:00) made 5 days ahead and worked in full; defensibility note added. |
| F2 | 3.3 first draft had the night shift on Saturday to Sunday. For 18+ Sunday work needs prior agreement (Rijksoverheid "U hoeft niet op zondag te werken"), a second issue in a yes/no question. | Night moved to Friday 19 to Saturday 20 March; Jesse's rooster and the 3.3 situation changed with it; checks re-done (rest before and after). |
| F3 | Regels table row "18 jaar en ouder: Elke 24 uur minstens 11 uur" had no exception, but art. 5:3 lid 2 allows 8 hours once per 7 days. | Table note: "Je rust mag dan 1 keer per week 8 uur zijn." (exception on screen). |
| F4 | 4.1 rule r1 has a cao exception (24 hours). | Situation 4.1 starts "Je contract zegt: oproepen minstens 4 dagen van tevoren." (as havo and as A4, B4); note shows the answer holds even with a 24-hour term. |
| F5 | 1.3 first draft offered "Bij je school" as a distractor: the school can tell you too, a second defensible answer. | Replaced by "In de app van het bedrijf". |
| F6 | 2.1: is € 6,82 really a believable employer figure? | Yes: Rijksoverheid bbl 2026, "18 jaar € 6,82" from 1 July 2026; labelled in the amounts table and teacher note as expired on 31 December 2026. |
| F7 | Check A2/B2 first draft did not mention the arbeidsovereenkomst; the 2027 rule is for bbl'ers "werkend onder een arbeidsovereenkomst". | Both prompts now say "Je hebt een arbeidsovereenkomst." |
| F8 | Teacher note kamer 4 (2028) first draft: "studenten mogen op een oproepcontract blijven". Stb. 2026, 205 adds a cap of on average 16 hours a week per employer. | Teacher note now names the 16-hour condition and that mbo students count as students (art. 7:628ac lid 3 refers to WEB art. 1.1.1 instellingen). |
| F9 | Hint 1.1 first draft: "Lees regel 1 van de pok" (a pok has no rule 1; confusing with the rule box). | Hint now: "Kijk in de laatste regel van je pok en in het tweede appje." (The struck draft line in 1.1 stays visible as a record; the data file uses only the second hint.) |
| F10 | All four rules quoted for kamer 3 are Arbeidstijdenwet version 1 Jul 2025; is that the version in force on 7 Nov 2026? | BWB repository `_latestItem` is 2025-07-01_0 (generated 20 Oct 2026), so yes. |
| F11 | Second pass: hint 3.3 draft "Voor bbl'ers en voor de zorg is er geen aparte nachtregel." The Arbeidstijdenbesluit does have rules for some 18+ zorg workers (for example verloskundigen and specialists), so the hint was not safe. | Hint now "Kijk in de kolom 18 jaar en ouder." For 16 and 17 the Arbeidstijdenbesluit has no zorg exception (its jeugdige articles are 2.1:2, 4.1:2, 5.4:3 and 5.6:2: volunteers, alternative sanctions, bakers, defence), so A3 option a stays a wrong answer. |
| F12 | Second pass: 4.1 draft situation "In jouw cao staat niets over oproepen" claims something about a real cao (horeca). | Replaced by the contract line. |

### Reader 2: mbo-3 student, bbl zorg (persona)

| # | Finding | Fix |
|---|---|---|
| S1 | "Ik werk in de zorg, wij krijgen meer dan het minimumloon. Dit voelt nep." | FAQ and teacher note: many zorg cao's pay more (Stb. 2026, 279, nota van toelichting 4b: in zorg, techniek and bouw "bbl-studenten daar al vaak boven het minimumjeugdloon worden betaald"); the minimumloon is the floor. The pupil text never claims that zorg pays the minimum: only this fictional employer does. |
| S2 | "Nachtdiensten heb ik echt, maar pas na mijn 18e. Goed dat dat erin zit." Wants to know how long a night may be. | Teacher note gives 10 uur (regular) and 14 uur rest; pupil table keeps one line ("extra regels voor nachtdiensten") to stay A2/B1. |
| S3 | "Wat is IG?" | Not glossed: it is part of the programme name and no question needs it. Spec note: the docent may say "individuele gezondheidszorg" if asked; not added to pupil text (would need a source and adds a word). |
| S4 | Reading load room 3: the regels table has long cells. | Each cell is one sentence of at most 9 words; "Maximaal 9 uur. Schooltijd telt mee." split in two sentences. |
| S5 | In the first draft check, every right answer was "Nee". | Fixed: see Reader 4, L3. |

### Reader 3: mbo docent burgerschap

| # | Finding | Fix |
|---|---|---|
| D1 | "Ik wil kunnen zeggen bij welke kwalificatie-eisen dit hoort, maar die veranderen." | "Past bij" quotes the current bijlage 1 (version 1 Aug 2026) and notes the proposed new eisen; teacher screen stays generic ("burgerschap (werken en geld)"). |
| D2 | Burgerschap is more than individual rights; wants a discussion angle on the bbl wage change. | Spec note for the debrief: an optional fourth prompt is not added (three is the engine pattern); the teacher note kamer 2 says why the bbl rate existed is not explained. Left for the docent; no claim about the policy reasons made in pupil text. |
| D3 | "Mijn studenten zijn 19 en 20. Waarom staat 21+ in de tabel?" | Kept: mbo ages run to 21+, and 2.1 distractor uses 19. |
| D4 | 82% want a guest: can a guest do it without knowing the rules? | Tip and audience line 3; every rule is on screen; the FAQ "Een student zegt: ik krijg te weinig" gives the steps. |

### Reader 4: loopbaanbegeleider / bpv-coordinator

| # | Finding | Fix |
|---|---|---|
| L1 | Wants leerbanenmarkt.nl for bbl next to stagemarkt.nl. | Explanation 1.3 second sentence names leerbanenmarkt.nl (shown after the answer, so no second right answer). |
| L2 | "Bij stagekosten zeggen wij: eerst naar je bpv-begeleider." | Not added as a rule (no source names a step order); FAQ line names the bpv-begeleider as someone who can help, as advice. |
| L3 | First draft check: all eight right answers were "Nee". A pair could learn "always Nee" in the start check and score the end check without reading. | Fixed without changing the rules tested: A2/B2 now quote a colleague who says the true rule ("Ook in de bbl krijg je het gewone minimumloon. Klopt dat?", right answer "Ja"), and A4/B4 ask "Mag je nee zeggen?" (right answer "Ja", Rijksoverheid: "bent u niet verplicht om te komen werken"). Per form: 2 "Nee", 2 "Ja", right answer in different positions. A "Moet je komen? Ja" item was rejected: the law says when you need not come, not that you must. |
| L4 | The plan has "vraag ik het bedrijf om het geld terug" but no "praat ik met mijn bpv-begeleider". | Not added (no rule); the debrief question 2 asks "Wie op school of op je werk kan je helpen?" |

### Script checks (7 November 2026)

- Pupil sentences (intros, document lines, rule lines, options, prompts, situations, nudges, hints, explanations, check prompts, glosses): every sentence at most 15 words; explanations at most 2 sentences and 28 words. Result in the changelog.
- No en or em dashes in the file.
- Digits re-derived: 5 (€ 50), 4 (100 × € 2,74 = € 274,00), 2 (9 min 7), 3 (2 uur gewerkt, minimum 3). Code **5423**.
- Weekdays: 31 Aug 2026 ma; 7 Sep 2026 ma; 12 Dec 2026 za; 1 Feb 2027 ma; 11 Mar 2027 do; 15 to 19 Mar 2027 ma to vr; 1 Apr 2027 do; 5 Apr 2027 ma; 10 Apr 2027 za.

## Changelog

**7 Nov 2026, first version.** New spec, mbo niveau 3-4 variant of ESC-BIJBAAN. Research read today (source table). Code **5423**. Rooms: Leren en werken, Je loon, Je rooster, Een bijbaan erbij; 12 questions; escape 22 minutes; 45-minute plan and a 30-minute timer variant.

**7 Nov 2026, Review round 1** (the four readers above). Applied: F1 (4.2 rewritten), F2 (night moved to Friday), F3 (8-hour exception on screen), F4 (cao line in 4.1), F5 (1.3 distractor), F7 (A2/B2 arbeidsovereenkomst), F8 (2028 note, 16 hours), F9 (hint 1.1 now "Kijk in de laatste regel van je pok en in het tweede appje."), S1 (source for the zorg cao point), S4, D1, D4, L1, L2 (as advice, FAQ only), L3 (check forms: A2/B2 and A4/B4 now have "Ja" as right answer; answer key updated). Also: 1.1 prompt "zijn allebei bij een bedrijf" became "leren allebei bij een bedrijf"; 1.3 shows the pok so its gloss is visible; source rows `oproeptermijn` and `afzeggen` now quote the Rijksoverheid page text read today. Open, not fixed: S3 (IG not glossed); D2 (no policy discussion prompt). No digit or code changed by the review: **5423**.

**7 Nov 2026, second pass (fact checker again, after round 1).** F11 (hint 3.3 replaced: the Arbeidstijdenbesluit has rules for some 18+ zorg workers), F12 (4.1 situation now the contract line, no claim about a real cao), 4.3 right answer moved to last place in the spec (README option-order convention; the data file shuffles), proeftijd reasoning now sourced (leerbaan 1,5 years on average, Stb. 2026, 279), leerdoelen say "De student kan". Script check after this pass: 0 pupil sentences over 15 words, 0 explanations over 2 sentences or 28 words, 0 options over 10 words, 0 en or em dashes. Code **5423** unchanged.

**7 Nov 2026, Revision 1** (fact check A and the five-persona gate, both of 7 Nov 2026; one pass). Every new fact was read on its source today: Arbowet art. 1 lid 2, 3 lid 1 onder b and 44 (BWB XML BWBR0010346, version 1 Jul 2026); BW 7:628a lid 4, 11 and 12 and BW 7:655 lid 1 onder l (BWBR0005290, version 1 Jan 2026); the engine button names in `src/strings.js`. **Code 5423 unchanged**; no right answer of a room question changed meaning; the check answers changed with the items.

Fact check A (PASS, 0 ERROR, 7 RISK):

| # | Finding | Decision | Change |
|---|---|---|---|
| A-1 | Odd-one-out Ja/Nee start in 3.3, 4.1 and all 8 check items | Applied | 3.3 b "Pas vanaf 21 jaar mag dat"; 4.1 b "Alleen als het die avond heel druk is"; A1/B1 and A3/B3 get an "Alleen als ..." option; A2/B2 and A4/B4 become "Wat klopt?" items with statements that start alike. New content rule "no odd-one-out start". |
| A-2 | A2/B2 "Nee: tot je 21e mag je baas minder betalen" has a true reading | Applied | The option is gone; A2/B2 are "Wat klopt?" items whose wrong statements are each false in 2027 ("pas na je diploma", "alleen een vergoeding", "minder, want bbl"). |
| A-3 | Arbowet basis for the safety shoes; "Het is geen wetsartikel" too weak | Applied | Teacher detail kamer 1 names Arbowet art. 1, 3 and 44 for the shoes and keeps "niet in een wet" for other costs; source row `stage-kosten` extended; Uncertainties 2 rewritten. Shoes kept (the gate's NICE I4 to swap them for a polo is not taken: the Arbowet makes the example stronger). |
| A-4 | 1.3 right answer the only web address | Applied | b "Op de website van de KvK". |
| A-5 | "Op 1 juli 2027 gaan de bedragen weer omhoog" not yet a fact | Applied | "Op 1 juli 2027 komen er nieuwe bedragen" (teacher detail, FAQ). |
| A-6 | "Een vaste nachtdienst duurt maximaal 10 uur" | Applied | "Een nachtdienst duurt maximaal 10 uur. Af en toe mag het 12 uur zijn, maar niet vaak." |
| A-7 | Table note mixes the 8-hour exception with night shifts | Applied | "Vanaf 18: 1 keer per week mag je rust 8 uur zijn, niet 11. Na een nachtdienst gelden extra regels."; 3.3 explanation "zoals over je rust na een nachtdienst". |
| A-note | Toekomstbouwer not on the home page | Applied | "Past bij" cites the theme page URL with its quote. |

Persona gate (READY WITH FIXES), top-10 and the named extras:

| # | Item | Decision | Change |
|---|---|---|---|
| 1 | C1, C2: rebalance checks | Applied | As A-1, A-2; "Mag je nee zeggen? Ja" is gone. C3: the right option is never the longest by characters (lengths line). C4: A2/B2 no longer echo the answer. C5: "Je baas wil je laten werken van 23:00 tot 07:00". C6: A1/B1, A3/B3 and A4/B4 right options differ in wording between forms. |
| 2 | T1 to T4, T6: A2-proof rule boxes | Applied | Room 2 r1, r3, r4; room 4 r1, r2, r3; room 1 r3 ("Dan krijg je dat geld van het bedrijf"), r4; gloss loonheffingskorting; 4.3 prompt "Wat kies je" (was "Wat kruis je aan"); T7, T8, T9 (cells with a verb, 3.3 "doen", "werk je niet"), T10, T11, T12 and T13 (glosses Veiligheidsschoenen, Cao, Nederlandse Arbeidsinspectie, oproepcontract) also applied. T5: "waarschijnlijk" kept, because the Belastingdienst says "waarschijnlijk"; "bijbetalen" kept in a 14-word sentence. New content rule "no split verbs". |
| 3 | N1: room 3 rest-rule note | Applied | As A-7. S5 (cut the Rust row) not taken: it lets a pair check Jesse's other shifts; gloss "Rust" fixed (school counts only under 18). |
| 4 | D3, D1, D5: when, kwalificatie-eis line, date-proof bill line | Applied | Audience lines 2 and 4; teacher detail kamer 1 "kijk op rijksoverheid.nl of het wetsvoorstel al in internetconsultatie is". D7: "die staan dan op rijksoverheid.nl". |
| 5 | G1, G2: first taps, Kern per room | Applied | Plan row Uitleg names "Ja of Nee", "Start de les", "Projectiemodus"; Kern (`teacherNote`) one line per room; the background in the closed block (`teacherDetail`); G3 (FAQ "ik krijg te weinig" ends with "Je kunt na de les met de student meedenken"), G4 (FAQ "iets wat niet in de les staat", "Welke cao geldt"), G5 (plan row Nabespreken: "Ben je gast? ..."), G6 (FAQ "geen laptops", Kamers op papier), G7 (plan row Escape), G8 (care point 2) applied. |
| 6 | S1, I3: cao line on screen | Applied, adjusted | Table note "Een cao kan meer loon geven dan het minimumloon." ("veel cao's" is not sourced for retail; see row `cao-meer`). |
| 7 | S3, S4: digit clue 2, 360 px | Applied / build check | Clue "Schrijf het bedrag zonder centen. Neem het laatste cijfer."; 360 px is covered by `tests/lessons-e2e.js` (Uncertainties 12). |
| 8 | I1: stretch for fast pairs | Applied as debrief prompt | The engine has no optional question; gespreksvraag 4 "Snel klaar? ..." without a "mag dat?" claim; answer in the teacher detail kamer 3. |
| 9 | C7, D6: 3 minutes per check, "not every pair reaches room 4" | Applied | Plan 0-3, 3-6, 6-28, stop 28, 28-31, 31-39, 39-42, 42-45; audience line 6 and the Stop row. 30-minute FAQ timer now 16 minutes. |
| 10 | D2, D4, G6: honest "Past bij", FAQ, paper | Applied | "Past bij" says what is not trained; audience line 3; FAQ for other sectors, exam, 60 or 90 minutes, bol, paper. D4's "16-jarige tekenen" left out, as the gate advises. |
| extra | Pronoun claim | Applied | Text fixed (intro room 1, 1.1 option b, 2.3 situation); claim restated. |
| extra | 2.2 vakantiegeld | Applied | Prompt adds "Reken zonder vakantiegeld." Hint now "Reken eerst € 9,56 min € 6,82." (no longer gives € 2,74). |
| extra | 4.2 and cao | Verified | A cao cannot change the 3-hour rule (BW 7:628a lid 12; lid 4 and 11 do not reach lid 1); rule card note and row `oproep-3uur`. No situation line needed. |
| extra | 1.2 hint weak | Applied | "Kijk in het laatste appje van Amira." |
| not taken | S2 label, S8 clue order, S9 frame, I2 (applied in FAQ), I5 (replaced by A-1 option), I6 (no source for "most hours"), D8 (applied as discuss prompt kamer 2), S6 (applied, debrief 3), S7 (explanation 1.3 keeps leerbanenmarkt.nl), T14 (applied as content rule) | | S2 is engine text (Uncertainties 12); S8 kept, the clue must stay derivable; S9 needs a class test. |

Format: the spec now uses the layout `tests/spec-compare.js` reads (rule cards as `regel` documents, "Moeilijke woorden:" lines, Kern, Bronnen en uitzonderingen and Per kamer blocks, Materials, Tip and Care points lines). Room 3 has no rule card on purpose (its rules are the `regels` table); `tests/spec-compare.js` lists that exception.

**7 Nov 2026, Revision 2** (ChatGPT check B round 1 and the pupil playtest G4, content items; one pass, spec and `kamers-engine/lessons/eerste-bijbaan-mbo.js` edited together). The law texts were checked against the current versions: Arbeidstijdenbesluit 1 Jan 2024 and Arbeidstijdenwet 1 Jul 2025. wetten.overheid.nl confirms both version dates and the nachtdienst definition (Atw 1:7 lid 1 onder d). The hoofdstuk 5 articles were read in the official BWB XML of the same versions, because the site served only up to hoofdstuk 4 (Uncertainties 7). **Code 5423 unchanged.** The meaning of every room answer is unchanged, except two choice answers that were reworded: 3.3 is now "Ja: vanaf 18 mag dat" and 4.1 is now "Nee: het is te laat gevraagd". The answer key was updated to match.

Check B round 1 (FAIL, 3 ERROR, 7 RISK):

| # | Finding | Decision | Change |
|---|---|---|---|
| B-1 | ERROR: the room 3 table row "1 keer per week 8 uur rust" leaves out werknoodzaak | Applied, by removing the row | The Rust row and the 8-hour note are off the pupil table. The table note now reads "Er zijn ook regels voor rust." The teacher detail kamer 3 says "1 keer per week mag dat 8 uur zijn, alleen als het werk dat nodig maakt" (Atw 5:3 lid 2). No question needed the row, and removing it also cuts words. |
| B-2 | ERROR: the teacher detail on rest after a nachtdienst leaves out the condition | Applied | "Eindigt een nachtdienst na 02:00? Dan volgt minstens 14 uur rust. Ook die mag 1 keer per week 8 uur zijn, alleen als het werk dat nodig maakt." (Atw 5:8 lid 4). |
| B-3 | ERROR: the nachtdienst gloss lacks the legal test | Applied | "Nachtdienst: je werkt meer dan 1 uur tussen 00:00 en 06:00." This is verbatim in meaning to Atw 1:7 lid 1 onder d, checked on wetten.overheid.nl. Jesse's 23:00 to 07:00 shift qualifies. |
| B-4 | RISK: r3 on stage costs is too absolute | Applied, in A2 words | r3 "Moest je iets kopen voor je stage? En betaalt niemand anders het? Dan betaalt het bedrijf het." Message a4 "Ik kreeg dat geld nergens terug." makes the condition answerable. 1.2 and its explanation follow, and the answer stays € 50. |
| B-5 | RISK: in 2.2, € 274 is only the shortfall against the legal minimum | Applied, in A2 words | "Hoeveel euro kreeg je in januari minder dan het minimumloon? Reken zonder vakantiegeld." The table note keeps "Een cao kan meer geven." The answer stays 274. |
| B-6 | RISK: the law sets maxima per dienst, not per dag | Applied | The row label is "Per dienst". The 3.2 nudge, the explanation and the Kern say "per dienst". 9 min 7 = 2 is unchanged. |
| B-7 | RISK: "nooit 's nachts" under 18 has a bakery exception (ATB 5.4:3) | Applied, adjusted | Cell "In de zorg nooit tussen 23:00 en 06:00." The 3.1 explanation and the remember line say "in de zorg". A3 says "in de zorg mag dat pas vanaf 18" and B3 says "in een hotel mag dat pas vanaf 18"; the hotel has no exception. The suggested "in dit zorgcentrum" was not used: the rule covers all of the zorg, not one employer. The bakery exception is in the teacher detail. |
| B-8 | RISK: zorg rest times: ATB 5.19:2 allows a collective arrangement | Applied | Teacher detail kamer 3: "In de verpleging en verzorging kan een collectieve regeling voor 18 jaar en ouder de rust nog een keer per week tot 10 uur inkorten." (ATB 5.19:1 and 5.19:2, version 1 Jan 2024). Row `rust-11`. |
| B-9 | RISK: the FAQ "Mijn klas doet geen zorg" is too broad | Applied | "De basisregels gelden in bijna alle sectoren. Sommige sectoren hebben uitzonderingen, zoals de bakkerij. Het verhaal speelt in de zorg. Een cao kan wel meer geven." |
| B-10 | RISK: the ATB version of 14 Nov 2018 is outdated | Applied | The ATB was re-read in the version of 1 Jan 2024: art. 2.1:2, 4.1:2, 5.4:3, 5.6:2, 5.19:1 and 5.19:2, with the same text as cited. Source rows and Uncertainties 7 were updated. The Atw was re-read in the version of 1 Jul 2025. |

Pupil playtest G4 (content items; the engine items S2, S3 and S4 were fixed by the coordinator):

| # | Item | Decision | Change |
|---|---|---|---|
| S1 | The room text is about 2,390 words and should be well under 2,000 | Applied | The data pupil words went from 1,778 to 1,349 (rooms 340, 343, 334, 332), counted by script over intro, documents, rules, questions, hints, explanations, clue and remember. On the page this is estimated at about 1,800 words, because G4 measured 2,390 on 1,778 data words. It was not re-measured, because e2e may not run now. The cuts: Luca's naam and geboren rows, the pok period line, the "echte pok is langer" notes, "Je woont nog thuis", the place lines on screen (now "september 2026" and so on), the room 3 Rust row, and shorter glossaries, intros, rules, explanations and remember lines. Sources shown with a right answer were cut to one or two per question with short names (N1). Every question can still be answered from what is on screen (see the per-question docs and retry lines). |
| S4 | The digit box: typing "274" in room 2 | Applied (content part) | `clueWrong`: "274" gives "Dat is het hele bedrag. Typ alleen het laatste cijfer."; "2" gives "Dat is het eerste cijfer van 274. Neem het laatste." The clue now says "hoeveel euro was het verschil? Schrijf het zonder centen. Neem het laatste cijfer." |
| S5 | Some nudges confirm a wrong answer or give the step away | Applied | 4.2 "Lees regel 2 nog eens."; 3.2 "Hoeveel uur mag Jesse per dienst werken? Haal de schooluren eraf." with the hint "Kijk hoe lang Jesse op school is."; 2.2 "Wat is het verschil per uur?" with the hint "Doe dat verschil keer je uren."; 1.2 "Moest Amira iets kopen voor de stage?" with the hint "Lees bericht 3 en 4."; 1.3 "Welke regel gaat over een erkend leerbedrijf?" |
| S6 | In 3.3, 4.1, A1, A3, B1 and B3 the right option is the longest and the only one with its Ja/Nee start | Applied | Every one of these items now has 4 options, two starting with Ja and two with Nee. The right option is the shortest or near it (see the lengths lines). 4.1 right "Nee: het is te laat gevraagd" no longer echoes rule 1. |
| S7 | The care point says a struck option invites guessing, but the engine shows the answer after 2 wrong tries | Applied | Care 3: "Na twee foute antwoorden laat de les het goede antwoord zien. Een tweetal kan dus doorklikken zonder te lezen. Dat telt niet mee bij In één keer goed. Zeg: goed lezen gaat sneller." |
| S8 | "oproepen minstens 4 dagen van tevoren" is read as a verb | Applied | "Je contract zegt: je baas moet je minstens 4 dagen van tevoren vragen." in 4.1, A4 and B4. |
| N1 | Long source lines on the answer screens | Applied | As S1: fewer sources per question, short names (for example "Rijksoverheid, stage in het mbo" and "Arbowet, artikel 3 en 44"). The full citations stay in the source table. |
| N3 | Hint 1.3 repeats the struck KvK option | Applied | The hint is now "Lees die regel tot het einde." |
| N5 | 4.3 "waarschijnlijk later bijbetalen" | Not taken | The Belastingdienst page says "waarschijnlijk", and "je moet later belasting betalen" would be an unsourced certainty. The explanation is shortened to "Kies één werkgever. Anders betaal je later waarschijnlijk bij." |
| N6 | The labels "Appjes van ..." and "Moeilijke woorden" sound childish | Partly applied | The chats are now "Berichten van Amira" and "Berichten van Kevin", and the hints say "bericht 2". "Moeilijke woorden" is engine text (`src/strings.js`), which is not mine to edit. |
| N2, N4, N7 to N13 | Reveal heading, retry labels, teacher layout, timer, lock, check page, print, Ja text | Not taken: engine items | They are not content. N12 (the double "Cijfer voor het slot: Het 1e cijfer van het slot") is an engine print label. The clue keeps its "Het 1e cijfer van het slot:" start, because the screen needs it. |

Other changes in this pass: the 1.3 explanation drops leerbanenmarkt.nl (now in the teacher detail kamer 1), and the 2.3 explanation drops "tot 5 jaar terugvragen" (in the teacher detail kamer 2 and the debrief). The room 1 intro now reads "begint met de bbl" without the opleiding name, and Verzorgende IG is in the teacher detail. The coordinator's edits are kept: teacher level, noun, groupExample, timers and the FAQ "Kamers op papier (studenten)". G4's idea to drop 4.3 was not taken: 4.3 is the only question on loonheffingskorting, a leerdoel. Script checks after this pass, on the pupil text: no sentences over 15 words, no options over 10 words, no explanations over 2 sentences or 28 words, and no en or em dashes. One teacher-screen sentence ("Past bij", 17 words) is over 15, which the rule allows because it is not pupil text. `tests/spec-compare.js`: 0 mismatches.
