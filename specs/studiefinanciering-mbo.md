# Studiefinanciering in het mbo (ESC-DUO-MBO): content spec

Bedragen geldig voor: januari tot en met juli 2027 (DUO-tabel mbo "Januari tot en met juli 2027"; basisbeurs en lening zijn ook van augustus tot en met december 2027 gelijk) en lesgeld schooljaar 2026-2027 (€ 1.511, tot en met 31 juli 2027); gecontroleerd op 7 november 2026; validUntil: 31 juli 2027

Status: **Revision 2** (7 Nov 2026), after fact check A (`content_new/factcheck_A_studiefinanciering-mbo.md`: PASS, 0 ERROR, 5 RISK); all five RISK items are applied, see the changelog at the end. Revision 1 (7 Nov 2026) was the first version, written as the mbo niveau 3-4 variant of `content_new/studiefinanciering.md` (havo/vwo, ESC-DUO, code 2073), after reading that spec, `content_new/eerste-bijbaan-mbo.md` (the mbo model: level, the noun "student", teacher level, noun, groupExample and timers, shorter text), `kamers-engine/README.md`, `kamers-engine/lessons/eerste-bijbaan-mbo.js`, `kamers-engine/tests/spec-compare.js` and the audience section of `research/next_topics.md`. Every rule and amount was read on **7 November 2026** on duo.nl, rijksoverheid.nl and in the law text (source table at the end). Nothing is from memory. wetten.overheid.nl gave no reply through the proxy (empty reply, as for the other mbo lesson), so the law texts were read as the official BWB XML from repository.officiele-overheidspublicaties.nl, version named per row; the source links point to wetten.overheid.nl for the same version. Not yet done: check B, persona gate, playtest. Data file: `kamers-engine/lessons/studiefinanciering-mbo.js` (product `escape18-studiefinanciering-mbo`, variant `mbo`); `tests/spec-compare.js` compares the two.

## Why this variant, and the design choices it forces

From `research/next_topics.md`, audience section: 466,800 mbo students in 2025/26 (niveau 4: 270,240; niveau 3: 95,730), most turn 18 during mbo, and "Studiefinanciering needs mbo rules [verify mbo vs ho rules at duo.nl]". This spec does that check. The mbo rules differ from hbo and wo in almost every room of the havo lesson, so this is a new lesson on the same topic, not a reworded copy:

1. **The age of 18 is the hinge.** In hbo and wo there is no minimum age; in the mbo a bol student gets only the studentenreisproduct before 18 and studiefinanciering from the quarter after the 18th birthday (Wsf 2000 art. 2.3). Kamer 1 is built on that, with a bbl friend who gets nothing.
2. **Most mbo students live at home** (research/next_topics.md). Kamer 2 uses the thuiswonend amount; uitwonend is in the FAQ. Lesgeld (bol, from the schooljaar that starts on or after the 18th birthday) replaces the collegegeldkrediet of the havo lesson.
3. **Prestatiebeurs differs by level.** Niveau 1 and 2: always a gift. Niveau 3 and 4: a gift with a diploma within 10 years, except the first 12 months of aanvullende beurs (hbo: 5 months). Kamer 3.
4. **Stop and switch are mbo rules.** The mbo studiejaar starts on 1 augustus, the eerstejaarsregeling has its own conditions, and any niveau 3 or 4 diploma converts all niveau 3 and 4 prestatiebeurs. Kamer 4.
5. **Low teacher prep, A2/B1 reading, short rooms** as in the mbo model: at most two documents per room plus the rule box, pupil sentences of at most 15 words, options of at most 10 words, explanations of at most 2 sentences and 28 words, every room glosses its own hard words. The escape is 26 minutes (minuut 6 tot 32), the stop at minuut 32; the 30-minute variant is in the FAQ.

## Overview

| Field | Value |
|---|---|
| Id (proposal) | ESC-DUO-MBO |
| Slug | studiefinanciering-mbo |
| Title | Studiefinanciering in het mbo |
| Lead | Bijna 18 in het mbo: wanneer begint je studiefinanciering, en wat krijg je? Over lesgeld, gift of lening, en stoppen of switchen. |
| Pupils | mbo niveau 3 en 4 in de bol (niveau 2 met wat hulp), 16 tot ongeveer 20 jaar, in tweetallen, één scherm |
| Escape time | 26 minuten (minuut 6 tot 32); les 45 minuten met 2 minuten reserve; 30-minutenvariant in de FAQ |
| Rooms | 4, in date order: bijna 18 (januari 2027), je eerste geld (april 2027), gift of lening (juni 2027), stoppen of switchen (augustus 2027) |
| Questions | 12 (3 per room) |
| Lock | **4029** (not 1725, 2073, 2348, 2797, 2824, 3022, 3231, 3521, 4379, 5114, 5423; does not start with 6) |
| Hint cost | 30 seconden per hint |
| Variant | `mbo` (logged in `start` and `teacher_start`) |

**Fiction line (shown once at the start):** "Alles is verzonnen: mensen, school en berichten. De regels en de bedragen van DUO zijn echt."

**Fictional cast (all invented):** the pupil ("je"; no name on screen), born 20 februari 2009, bol niveau 4 at ROC Zeestad since 1 augustus 2025, lives with the parents; Fenna, a friend in the bbl at a garage, 18 on 2 maart 2027; Mama; Milan, a friend on mbo niveau 2; Ruben, who started niveau 4 at 18 after havo and stopped after 2 years; Kim, a neighbour of 18 who starts niveau 3 on 1 augustus 2027 after havo and stops after two weeks. Zeestad is the invented town of the other lessons; "ROC Zeestad" was checked in the KvK register for `eerste-bijbaan-mbo` on 7 Nov 2026 ("Er zijn geen resultaten gevonden"); not re-run here. No real mbo school is named. No personal pronoun is used for a named character in pupil text; "Je vriendin Fenna" and "een vriend van je" (Milan) are the only gendered words.

**Content rules (as the mbo model):** pupil sentences of at most 15 words; options of at most 10 words; explanations at most 2 sentences and 28 words; at most two documents per room plus the rule box; each room glosses its own hard words in a "Moeilijke woorden" line; options listed with ids a, b, c, d, the right answer last, and shown in a fixed shuffled order written in the data file; the right option is never the longest (by characters or by words) and never the only one with its first word, and it is the only shortest option in at most 4 of the 18 pick items (Revision 2: now 3, namely 3.2, A4 and B1); one retry with a nudge that points to exactly one place; after the second wrong answer the right answer and the explanation show; every rule a pupil needs is on screen; each digit clue starts "Het 1e (2e, 3e, 4e) cijfer van het slot"; teacher-visible text is Dutch only; the teacher key gives full answer text, never a letter; no em or en dashes. Checked by script on 7 Nov 2026 (see Review).

**Word count (script, 7 Nov 2026):** 1,662 words of pupil text in the four rooms (intros, documents, rule boxes, hard words, questions, options, nudges, hints, explanations, clues, remember lines); 2,133 with the check forms, the debrief and the plan. The rooms are in the 1,500 to 1,800 range; the total with the checks is not.

## Leerdoelen (learning aims)

De student kan (mbo says "student"; pupil text uses "je"):
1. zeggen wat een bol-student voor de 18e van DUO kan krijgen, en in welk kwartaal de studiefinanciering begint;
2. zeggen dat je in de bbl geen studiefinanciering krijgt;
3. in een tabel van DUO de basisbeurs voor thuiswonend aflezen en zeggen waar de aanvullende beurs van afhangt;
4. zeggen vanaf welk schooljaar je lesgeld betaalt;
5. uitleggen wanneer de prestatiebeurs op niveau 3 en 4 een gift wordt, dat niveau 1 en 2 altijd een gift is en dat je een lening altijd terugbetaalt;
6. zeggen wat je regelt als je stopt, en wat er met je beurs gebeurt als je stopt in je 1e jaar of switcht.

## Past bij (curriculum fit)

- **Burgerschap en loopbaan**: wat regel je bij DUO als je 18 wordt, en wat betekent stoppen of switchen voor je geld. The teacher screen says only "Past bij burgerschap en loopbaan"; the kwalificatie-eisen were not re-read for this spec, so no phrase from them is quoted on screen.
- **Timing**: the year in which most students turn 18; before 1 augustus 2027 (lesgeld changes).

---

## Kamer 1: Bijna 18

**Date:** dinsdag 12 januari 2027 (on screen: "januari 2027"). **Where:** thuis, met een bericht van Fenna.

**Intro:** "Het is januari 2027. Je bent 17 en doet een bol-opleiding. Je vriendin Fenna doet bbl."

### Document 1 `gegevens` (type: table without header, title "Jouw gegevens")

> | | |
> |---|---|
> | Geboren | 20 februari 2009 |
> | Opleiding | bol, niveau 4 |
> | School | ROC Zeestad |
> | Woont | bij je ouders |
>
> Note: "Verzonnen gegevens."

(No name: the pupil is "je". Born 20 februari 2009, so 18 on 20 februari 2027, in the 1e kwartaal. Not the 1st day of a quarter, so Wsf 2000 art. 2.3 lid 1 onder b 2° does not apply.)

### Document 2 `app` (type: chat, title "Berichten van Fenna")

> **Fenna**, dinsdag 12 januari, 16:20
> f1. "Ik doe bbl bij een garage. Ik werk 4 dagen per week."
> f2. "Op 2 maart word ik 18."
> f3. "Krijg ik dan ook geld van DUO?"

(Sender name "Fenna". Fenna is 18 on 2 maart 2027; bbl, so the age makes no difference.)

### Document 3 `regel` (type: rule card, title "Regels")

> r1. Doe je bol? Dan kun je voor je 18e al het studentenreisproduct krijgen.
> r2. Een beurs of lening van DUO krijg je pas vanaf 18.
> r3. Je studiefinanciering begint in het kwartaal na je 18e verjaardag.
> r4. Doe je bbl? Dan krijg je geen studiefinanciering van DUO.

(r3 is DUO's own wording: "Uw studiefinanciering gaat in vanaf het kwartaal ... na uw 18e verjaardag." The exception for a birthday on the 1st day of a quarter (Wsf 2000 art. 2.3 lid 1 onder b 2°) is not on screen; the situation rules it out (20 februari). Teacher detail names it.)

**Moeilijke woorden:** "Bol: je gaat vooral naar school en loopt stage. Bbl: 3 of 4 dagen werken, de andere dagen school. Kwartaal: 3 maanden. Het 1e kwartaal is januari tot en met maart. Het 2e is april tot en met juni. Studiefinanciering: een beurs of lening van DUO voor je opleiding. Studentenreisproduct: gratis of met korting reizen met bus, tram en trein."

(`gegevens` gets the first five sentences, `app` the last two.)

### Vraag 1.1 `nu` (pick, docs: gegevens, regel)

- **Prompt:** "Je bent nu 17. Wat kun je nu al krijgen van DUO?"
- **Options:** a "Een basisbeurs en het reisproduct" · b "Alleen een lening" · c "Niets: dat kan pas vanaf 18" · d "Alleen het studentenreisproduct"
- **Correct:** d
- **Lengths:** 33, 17, 27, 31 characters; 5, 3, 6, 3 words (the right one is never the longest); first words "Een", "Alleen", "Niets", "Alleen".
- **Retry points to:** rule r1 "Doe je bol? Dan kun je voor je 18e al het studentenreisproduct krijgen."
- **Nudge:** "Welke regel gaat over de tijd voor je 18e?"
- **Hint (30 s):** "Kijk in je gegevens welke opleiding je doet."
- **Explanation:** "Met bol kun je voor je 18e al het studentenreisproduct krijgen. Een beurs komt pas later."
- **Rules:** reis-onder-18, sf-18
- **Defensibility:** Under 18 a bol student can get only the reisvoorziening (Wsf 2000 art. 2.3 lid 1 onder a; DUO voorwaarden "U kunt wel een studentenreisproduct krijgen als u nog geen 18 bent"). A beurs or lening needs 18 (art. 2.3 lid 1 onder b). "Niets" is wrong because the reisproduct exists before 18.

### Vraag 1.2 `start` (pick, docs: gegevens, regel)

- **Situation:** "Je vraagt je studiefinanciering op tijd aan in Mijn DUO."
- **Prompt:** "Vanaf welke datum kun jij studiefinanciering krijgen?"
- **Options:** a "20 februari 2027" · b "1 maart 2027" · c "1 juli 2027" · d "1 april 2027"
- **Correct:** d
- **Lengths:** 16, 12, 11, 12 characters; 3, 3, 3, 3 words (the right one is never the longest); first words "20", "1", "1", "1".
- **Retry points to:** rule r3 "Je studiefinanciering begint in het kwartaal na je 18e verjaardag." and gegevens row g1 "Geboren: 20 februari 2009"
- **Nudge:** "In welk kwartaal word je 18? Welk kwartaal komt daarna?"
- **Hint (30 s):** "Lees bij Moeilijke woorden wat een kwartaal is."
- **Explanation:** "Je wordt 18 in het 1e kwartaal. Het kwartaal daarna begint op 1 april 2027."
- **Rules:** sf-kwartaal
- **Defensibility:** 18 on 20 februari 2027, in the quarter januari tot en met maart; Wsf 2000 art. 2.3 lid 1 onder b 1°: "de eerste dag van de maand volgend op het kwartaal waarin hij de leeftijd van 18 jaren heeft bereikt", so 1 april 2027. The situation rules out a late application; DUO voorwaarden: "U moet op de 1e van de maand ingeschreven staan", which the gegevens (bol, ROC Zeestad) assume. 20 februari is the birthday, 1 maart the month after it, 1 juli one quarter too late.

### Vraag 1.3 `bbl` (pick, docs: app, regel)

- **Prompt:** "Fenna wordt op 2 maart 18. Krijgt Fenna dan studiefinanciering?"
- **Options:** a "Ja: vanaf het kwartaal na de verjaardag" · b "Ja: wel een lening" · c "Nee: pas na het diploma" · d "Nee: niet in de bbl"
- **Correct:** d
- **Lengths:** 39, 18, 23, 19 characters; 7, 4, 5, 5 words (the right one is never the longest); first words "Ja", "Ja", "Nee", "Nee".
- **Retry points to:** rule r4 "Doe je bbl? Dan krijg je geen studiefinanciering van DUO."
- **Nudge:** "Welke opleiding doet Fenna?"
- **Hint (30 s):** "Lees het eerste bericht van Fenna."
- **Explanation:** "In de bbl krijg je geen studiefinanciering, ook niet vanaf 18."
- **Rules:** bbl-geen
- **Defensibility:** DUO voorwaarden: "Voor deeltijd, bbl of ovo ... krijgt u geen studiefinanciering"; Wsf 2000 art. 1.1 "beroepsonderwijs: opleiding als bedoeld in artikel 7.2.7, derde lid, WEB", and WEB art. 7.2.7 lid 3 is the beroepsopleidende leerweg (bol), lid 4 the bbl (BWBR0007625, version 1 Aug 2026). "Ja: wel een lening" is wrong: the lening is part of studiefinanciering; the levenlanglerenkrediet is for bol and ho (Rijksoverheid).

### Cijfer kamer 1

- **Clue:** "Het 1e cijfer van het slot: in welke maand begint jouw studiefinanciering? Typ het nummer van de maand."
- **Shown with:** gegevens, regel
- **Digit:** **4** (1 april 2027 is in april, month 4. The birthday month gives 2, the month after it 3, 1 juli gives 7.)
- **Wrong digit (`clueWrong`):** "2" → "In februari word je 18. Neem de 1e maand van het kwartaal daarna." · "3" → "Maart hoort nog bij het kwartaal van je verjaardag."
- **Remember:** "Voor je 18e: alleen het reisproduct. Vanaf het kwartaal na je 18e: studiefinanciering. In de bbl krijg je geen studiefinanciering."

---

## Kamer 2: Je eerste geld

**Date:** woensdag 7 april 2027 (on screen: "april 2027"). **Where:** thuis.

**Intro:** "Op 20 februari ben je 18 geworden. Het is april 2027. Je woont bij je ouders."

### Document 1 `tabel` (type: table with header, title "Studiefinanciering mbo, januari tot en met juli 2027"; real amounts, labelled real)

> **Studiefinanciering mbo, januari tot en met juli 2027**
> Bron: DUO. Deze bedragen zijn echt.
>
> | Per maand | Thuiswonend | Uitwonend |
> |---|---|---|
> | Basisbeurs | € 110,76 | € 361,44 |
> | Lening, hoogstens | € 241,27 | € 241,27 |
>
> Note: "De aanvullende beurs staat niet in de tabel. Die is voor iedereen anders."

(The amounts are the DUO table "Januari tot en met juli 2027", mbo, read 7 Nov 2026. The basisbeurs and lening are the same in "Augustus tot en met december 2027". The row "Aanvullende beurs" is left out on purpose: its maximum depends on whether you pay lesgeld (DUO: "Hoeft u nog geen lesgeld te betalen aan DUO? Dan is de aanvullende beurs € 125,92 lager"), which this pupil does not until 1 augustus 2027. The teacher detail gives both maxima.)

### Document 2 `app` (type: chat, title "Berichten van mama")

> **Mama**, woensdag 7 april, 19:40
> m1. "Papa en ik verdienen niet zo veel."
> m2. "Krijg jij dan meer geld van DUO?"

(Sender name "Mama". No amount, no income figure: the room does not ask about the family's own money.)

### Document 3 `regel` (type: rule card, title "Regels")

> r1. De aanvullende beurs hangt af van het inkomen van je ouders.
> r2. Ben je op 1 augustus 18 of ouder? En doe je bol? Dan betaal je dat schooljaar lesgeld.
> r3. Het lesgeld voor schooljaar 2026-2027 is € 1.511.

(r2 is Les- en cursusgeldwet art. 3 lid 1 in plain words: "op de eerste dag van het desbetreffende studiejaar de leeftijd van 18 jaren heeft bereikt"; studiejaar 1 augustus to 31 juli (art. 1). r3 is the DUO and Rijksoverheid amount for 2026-2027.)

**Moeilijke woorden:** "Thuiswonend: je woont bij je ouders. Uitwonend: je woont niet bij je ouders. Basisbeurs: geld van DUO voor iedere student met studiefinanciering. Aanvullende beurs: extra geld van DUO als je ouders weinig kunnen bijdragen. Lesgeld: geld dat je voor je opleiding aan DUO betaalt."

(`tabel` gets the first three sentences, `app` the last two.)

### Vraag 2.1 `basis` (number, euro, docs: tabel)

- **Prompt:** "Hoeveel basisbeurs krijg jij per maand?"
- **Correct:** € 110,76 (11076 cents)
- **Retry points to:** tabel row b1 "Basisbeurs: € 110,76 € 361,44"
- **Nudge:** "Woon je bij je ouders of niet? Kies die kolom."
- **Hint (30 s):** "Lees in de intro waar je woont."
- **Explanation:** "Je woont thuis. Dan is je basisbeurs € 110,76 per maand."
- **Rules:** bedragen-2027
- **Defensibility:** The intro says "Je woont bij je ouders", so thuiswonend. Uitwonend (€ 361,44) needs a registration at another address (DUO uitwonend).

### Vraag 2.2 `extra` (pick, docs: app, regel)

- **Prompt:** "Je ouders verdienen weinig. Welk deel van je studiefinanciering kan dan hoger zijn?"
- **Options:** a "De basisbeurs" · b "De lening van DUO" · c "Het studentenreisproduct" · d "De aanvullende beurs"
- **Correct:** d
- **Lengths:** 13, 17, 24, 20 characters; 2, 4, 2, 3 words (the right one is never the longest); first words "De", "De", "Het", "De".
- **Retry points to:** rule r1 "De aanvullende beurs hangt af van het inkomen van je ouders."
- **Nudge:** "Welke regel gaat over je ouders?"
- **Hint (30 s):** "Lees het eerste bericht van mama."
- **Explanation:** "De aanvullende beurs hangt af van het inkomen van je ouders. Vraag hem altijd aan in Mijn DUO."
- **Rules:** aanvullend-ouders
- **Defensibility:** Basisbeurs and lening maxima are the same for everyone with the same living situation; the reisproduct is a fixed product. Only the aanvullende beurs depends on the parents' income (DUO aanvullende beurs; Rijksoverheid studiefinanciering mbo). "De lening van DUO" is wrong: extra borrowing exists only when the aanvullende beurs is lower, so when the parents earn more (DUO bedragen: "Krijgt u geen of minder aanvullende beurs? Dan kunt u het ontbrekende bedrag extra lenen").

### Vraag 2.3 `lesgeld` (pick, docs: regel)

- **Situation:** "Je werd op 20 februari 2027 18. Je bol-opleiding loopt door tot 2029."
- **Prompt:** "Voor welk schooljaar betaal je voor het eerst lesgeld?"
- **Options:** a "Schooljaar 2026-2027" · b "Nooit, want je doet mbo" · c "Schooljaar 2028-2029" · d "Schooljaar 2027-2028"
- **Correct:** d
- **Lengths:** 20, 23, 20, 20 characters; 2, 5, 2, 2 words (the right one is never the longest); first words "Schooljaar", "Nooit", "Schooljaar", "Schooljaar".
- **Retry points to:** rule r2 "Ben je op 1 augustus 18 of ouder? En doe je bol? Dan betaal je dat schooljaar lesgeld."
- **Nudge:** "Hoe oud was je op 1 augustus 2026?"
- **Hint (30 s):** "Een schooljaar in het mbo begint op 1 augustus."
- **Explanation:** "Op 1 augustus 2026 was je 17. Op 1 augustus 2027 ben je 18: dan betaal je lesgeld."
- **Rules:** lesgeld-18, lesgeld-bedrag
- **Defensibility:** On 1 augustus 2026 the pupil was 17, so no lesgeld for 2026-2027; on 1 augustus 2027 18, still in bol (the situation says until 2029), so lesgeld from 2027-2028. "Nooit, want je doet mbo" is wrong: lesgeld is for voltijd mbo (bol).

### Cijfer kamer 2

- **Clue:** "Het 2e cijfer van het slot: hoeveel hele euro's basisbeurs krijg je per maand? Neem het laatste cijfer."
- **Shown with:** tabel
- **Digit:** **0** (€ 110,76: hele euro's 110, last digit 0. Uitwonend gives 1.)
- **Wrong digit (`clueWrong`):** "1" → "Kijk welke kolom bij jou hoort. Neem dan het laatste cijfer van de hele euro's."
- **Remember:** "Thuis wonen: € 110,76 basisbeurs per maand in 2027. Vraag de aanvullende beurs altijd aan. Ben je op 1 augustus 18? Dan betaal je dat schooljaar lesgeld."

---

## Kamer 3: Gift of lening?

**Date:** maandag 14 juni 2027 (on screen: "juni 2027"). **Where:** in de klas, met een bericht van Ruben.

**Intro:** "Het is juni 2027. In de klas praat je over geld van DUO. Moet je het later terugbetalen?"

### Document 1 `tabel` (type: table with header, title "Mbo niveau 3 en 4: gift of terugbetalen?"; real rules, labelled real)

> **Mbo niveau 3 en 4: gift of terugbetalen?**
> Bron: DUO. Deze regels zijn echt.
>
> | Onderdeel | Diploma binnen 10 jaar | Geen diploma binnen 10 jaar |
> |---|---|---|
> | Basisbeurs | Gift | Terugbetalen |
> | Aanvullende beurs | Gift | Terugbetalen, maar de eerste 12 maanden zijn een gift |
> | Reisproduct | Gift | Terugbetalen |
> | Lening | Terugbetalen | Terugbetalen |

(DUO "Gift en diploma mbo 3 en 4" in one table, with the exception for the first 12 months of aanvullende beurs (DUO: "de eerste 12 maanden die u krijgt voor mbo 3 en 4 ... hoeft u nooit terug te betalen"; Wsf 2000 art. 4.7 lid 1) in the cell where it applies.)

### Document 2 `app` (type: chat, title "Berichten van Ruben")

> **Ruben**, maandag 14 juni, 17:05
> u1. "Na de havo begon ik met mbo niveau 4. Ik was toen al 18."
> u2. "Ik kreeg 24 maanden aanvullende beurs. Toen ben ik gestopt."
> u3. "Een diploma haal ik niet meer. Moet ik nu alles terugbetalen?"

(Sender name "Ruben". Ruben came from havo and was 18 at the start, so he had no reisproduct before 18 and the first 12 months of studiefinanciering are the first 12 months of aanvullende beurs; both readings of Wsf 2000 art. 4.7 lid 1 give 12. Ruben stopped after 2 years, so the eerstejaarsregeling does not apply.)

### Document 3 `regel` (type: rule card, title "Regels")

> r1. Een lening betaal je altijd terug, met rente.
> r2. Stopt je studiefinanciering? Dan betaal je eerst minstens 2 jaar nog niets terug.
> r3. Daarna betaal je elke maand. Hoeveel hangt af van je inkomen.
> r4. Mbo niveau 1 of 2? Dan zijn je beurzen en je reisproduct altijd een gift.

(r1 DUO gift of terugbetalen and lenen; r2 and r3 DUO zo werkt terugbetalen (aanloopfase of 2 years from 1 January after the studiefinanciering stops, then monthly by draagkracht); r4 DUO gift of terugbetalen and Rijksoverheid.)

**Moeilijke woorden:** "Prestatiebeurs: een beurs die eerst een lening is. Haal je op tijd je diploma? Dan wordt het een gift. Gift: geld dat je niet terugbetaalt."

(All on `tabel`; Ruben's chat has no hard words.)

### Vraag 3.1 `diploma` (pick, docs: tabel, regel)

- **Prompt:** "Je haalt je diploma niveau 4 binnen 10 jaar. Wat betaal je dan terug?"
- **Options:** a "Alles, ook de basisbeurs" · b "Alleen het reisproduct" · c "Niets" · d "Alleen de lening"
- **Correct:** d
- **Lengths:** 24, 22, 5, 16 characters; 4, 3, 1, 3 words (the right one is never the longest); first words "Alles", "Alleen", "Niets", "Alleen".
- **Retry points to:** tabel row g4 "Lening: Terugbetalen Terugbetalen"
- **Nudge:** "Welke rij in de tabel heeft twee keer Terugbetalen?"
- **Hint (30 s):** "Kijk in de kolom Diploma binnen 10 jaar."
- **Explanation:** "Met een diploma op tijd worden je beurzen en je reisproduct een gift. Een lening betaal je altijd terug."
- **Rules:** gift-diploma, lening-terug
- **Defensibility:** DUO table "Mbo 3 en 4": with a diploma within 10 years basisbeurs, aanvullende beurs and reisproduct are a gift; the rentedragende lening is always repaid. "Niets" and "Alles, ook de basisbeurs" are false; "Alleen het reisproduct" turns the rule around.

### Vraag 3.2 `niveau2` (pick, docs: tabel, regel)

- **Situation:** "Milan, een vriend van je, doet mbo niveau 2."
- **Prompt:** "Wat geldt voor de basisbeurs van Milan?"
- **Options:** a "Die wordt een gift met een diploma" · b "Die betaalt Milan terug" · c "Die is alleen de eerste 12 maanden gift" · d "Die is altijd een gift"
- **Correct:** d
- **Lengths:** 34, 23, 39, 22 characters; 7, 4, 8, 5 words (the right one is never the longest); first words "Die", "Die", "Die", "Die".
- **Retry points to:** rule r4 "Mbo niveau 1 of 2? Dan zijn je beurzen en je reisproduct altijd een gift."
- **Nudge:** "Op welk niveau zit Milan? Welke regel hoort daarbij?"
- **Hint (30 s):** "De tabel is voor niveau 3 en 4. Kijk ook bij de regels."
- **Explanation:** "Op niveau 1 en 2 zijn de beurzen en het reisproduct altijd een gift. Een lening betaalt Milan wel terug."
- **Rules:** niveau12-gift
- **Defensibility:** DUO: "Voor mbo 1 en 2 is de basisbeurs, aanvullende beurs en het studentenreisproduct altijd een gift. U betaalt alleen terug wat u leent." Wsf 2000 art. 4.1 and 4.2 (gift or lening, no prestatiebeurs on niveau 1 and 2). The 12-month option is the niveau 3 and 4 aanvullende beurs rule, on the wrong level.

### Vraag 3.3 `ruben` (number, docs: tabel, app)

- **Prompt:** "Hoeveel maanden aanvullende beurs hoeft Ruben nooit terug te betalen?"
- **Correct:** 12 maanden (1200 cents)
- **Retry points to:** tabel row g2 "Aanvullende beurs: Gift Terugbetalen, maar de eerste 12 maanden zijn een gift"
- **Nudge:** "Lees de rij Aanvullende beurs in de kolom zonder diploma."
- **Hint (30 s):** "Lees het tweede bericht van Ruben."
- **Explanation:** "De eerste 12 maanden aanvullende beurs zijn altijd een gift. De andere 12 maanden betaalt Ruben terug."
- **Rules:** aanvullend-12
- **Defensibility:** Ruben says he will not get a diploma any more, so only the always-gift part counts: 12 months (DUO; Wsf 2000 art. 4.7 lid 1). With a later diploma within 10 years all 24 would become a gift; the chat rules that out. Unit "maanden".

### Cijfer kamer 3

- **Clue:** "Het 3e cijfer van het slot: hoeveel maanden aanvullende beurs zijn voor Ruben een gift? Neem het laatste cijfer."
- **Shown with:** tabel, app
- **Digit:** **2** (12, last digit. 24 gives 4; the hbo rule of 5 months gives 5.)
- **Wrong digit (`clueWrong`):** "1" → "Dat is het eerste cijfer van 12. Neem het laatste." · "4" → "Dat is het laatste cijfer van 24. Hoeveel maanden zijn een gift?"
- **Remember:** "Niveau 3 en 4: diploma binnen 10 jaar? Dan wordt je beurs een gift. Niveau 1 en 2: altijd een gift. Een lening betaal je altijd terug."

---

## Kamer 4: Stoppen of switchen

**Date:** maandag 16 augustus 2027 (on screen: "augustus 2027"). **Where:** thuis, met een bericht van Kim.

**Intro:** "Het is augustus 2027. Kim woont bij jou in de straat. Kim is 18 en kwam net van de havo."

### Document 1 `app` (type: chat, title "Berichten van Kim")

> **Kim**, maandag 16 augustus, 20:10
> k1. "Op 1 augustus begon ik met mbo niveau 3."
> k2. "Het is niks voor mij. School schreef me uit per 15 augustus."
> k3. "Mijn studiefinanciering heb ik al stopgezet in Mijn DUO."
> k4. "Moet ik de beurs van augustus nu terugbetalen?"

(Sender name "Kim". Kim: 18, straight from havo (voortgezet onderwijs), first prestatiebeurs ever from 1 augustus 2027, uitgeschreven per 15 augustus, studiefinanciering stopped in Mijn DUO (so from 1 september 2027). The situation of 4.2, "Kim begint dit schooljaar geen andere opleiding.", covers the last condition of Wsf 2000 art. 4.11: no new studiefinanciering for niveau 3 or 4 or for hoger onderwijs in the same studiejaar.)

### Document 2 `regel` (type: rule card, title "Regels")

> r1. Uitgeschreven na de 1e? Dan reis je de maand erna niet meer met je reisproduct.
> r2. Zet je reisproduct uiterlijk op de 10e van die maand stop, bij een ophaalautomaat.
> r3. Je 1e jaar met beurs, na het vo? Stopt je studiefinanciering voor 1 februari? Dan worden de beurs en het reisproduct van dat jaar een gift.
> r4. Diploma niveau 3 of 4 binnen 10 jaar? Dan wordt al je prestatiebeurs van niveau 3 en 4 een gift.

(r1 and r2: DUO studentenreisproduct stopzetten, "Wordt u later uitgeschreven? Dan hebt u vanaf de volgende maand geen recht meer" and "uiterlijk op de 10e dag van deze maand stopzetten". r3: DUO stoppen in uw 1e jaar and Wsf 2000 art. 4.11; the law condition "niet over datzelfde studiejaar opnieuw studiefinanciering voor het volgen van een opleiding niveau 3 of 4 dan wel voor hoger onderwijs" is covered by the situation of 4.2; the DUO page names only the niveau 3 or 4 part for the vo route. r4: DUO gift of terugbetalen, "Haalt u binnen de diplomatermijn een diploma niveau 3 of 4, dan worden alle jaren prestatiebeurs die u hebt gehad voor niveau 3 of 4 een gift"; Wsf 2000 art. 4.10 lid 1.)

**Moeilijke woorden:** "Uitschrijven: de school haalt je van de lijst van studenten. Ophaalautomaat: een automaat, bijvoorbeeld op het station. Daar zet je je reisproduct stop."

(All on `app`.)

### Vraag 4.1 `reizen` (pick, docs: app, regel)

- **Prompt:** "Vanaf welke dag mag Kim niet meer reizen met het reisproduct?"
- **Options:** a "15 augustus 2027" · b "10 september 2027" · c "1 februari 2028" · d "1 september 2027"
- **Correct:** d
- **Lengths:** 16, 17, 15, 16 characters; 3, 3, 3, 3 words (the right one is never the longest); first words "15", "10", "1", "1".
- **Retry points to:** rule r1 "Uitgeschreven na de 1e? Dan reis je de maand erna niet meer met je reisproduct." and app message k2 "Het is niks voor mij. School schreef me uit per 15 augustus."
- **Nudge:** "Kim is uitgeschreven per 15 augustus. Welke maand komt daarna?"
- **Hint (30 s):** "Lees het tweede bericht van Kim en regel 1."
- **Explanation:** "Kim is uitgeschreven na de 1e van de maand. Vanaf 1 september 2027 mag Kim niet meer reizen."
- **Rules:** ov-stop
- **Defensibility:** Uitgeschreven per 15 augustus, after the 1st: no right from 1 september 2027 (DUO example: "uitgeschreven per 30 juli ... met ingang van 1 augustus al niet meer reizen"). 10 september is the last day to stop it, not the first day without the right.

### Vraag 4.2 `eerstejaar` (pick, docs: app, regel)

- **Situation:** "Kim begint dit schooljaar geen andere opleiding."
- **Prompt:** "Moet Kim de beurs van augustus terugbetalen?"
- **Options:** a "Ja: Kim heeft geen diploma" · b "Ja: een beurs is altijd een lening" · c "Nee: augustus telt nooit mee" · d "Nee: Kim stopt voor 1 februari"
- **Correct:** d
- **Lengths:** 26, 34, 28, 30 characters; 5, 7, 5, 6 words (the right one is never the longest); first words "Ja", "Ja", "Nee", "Nee".
- **Retry points to:** rule r3 "Je 1e jaar met beurs, na het vo? Stopt je studiefinanciering voor 1 februari? Dan worden de beurs en het reisproduct van dat jaar een gift."
- **Nudge:** "Is dit het 1e jaar van Kim? Wanneer stopt de studiefinanciering?"
- **Hint (30 s):** "Lees het eerste en het derde bericht van Kim."
- **Explanation:** "Kim stopt in het 1e jaar, voor 1 februari. Dan worden de beurs en het reisproduct van dat jaar een gift."
- **Rules:** eerstejaars
- **Defensibility:** All conditions of DUO "Van voortgezet onderwijs naar vervolgopleiding" hold: from vo, first prestatiebeurs for a programme she is enrolled in for the first time, studiefinanciering stopped before 1 februari (from 1 september 2027), no other programme this studiejaar (situation), so neither new prestatiebeurs for niveau 3 or 4 (DUO) nor studiefinanciering for hbo or universiteit (Wsf 2000 art. 4.11; Revision 2, fact check A). Wsf 2000 art. 4.11: "wordt ... de over dat studiejaar toegekende prestatiebeurs beroepsonderwijs omgezet in een gift". Kim had no lening.

### Vraag 4.3 `switch` (pick, docs: regel)

- **Situation:** "Stel: je stopt met je opleiding niveau 4. Je begint aan een opleiding niveau 3."
- **Prompt:** "Je haalt dat diploma binnen 10 jaar. Wat geldt voor je beurs van niveau 4?"
- **Options:** a "Die betaal je terug" · b "Die wordt voor de helft een gift" · c "Die wordt pas met een hbo-diploma een gift" · d "Die wordt ook een gift"
- **Correct:** d
- **Lengths:** 19, 32, 42, 22 characters; 4, 7, 8, 5 words (the right one is never the longest); first words "Die", "Die", "Die", "Die".
- **Retry points to:** rule r4 "Diploma niveau 3 of 4 binnen 10 jaar? Dan wordt al je prestatiebeurs van niveau 3 en 4 een gift."
- **Nudge:** "Welke regel gaat over een diploma binnen 10 jaar?"
- **Hint (30 s):** "Lees regel 4 tot het einde."
- **Explanation:** "Een diploma niveau 3 binnen 10 jaar telt. Dan wordt al je prestatiebeurs van niveau 3 en 4 een gift."
- **Rules:** switch-gift
- **Defensibility:** DUO: "alle jaren prestatiebeurs die u hebt gehad voor niveau 3 of 4 een gift"; Wsf 2000 art. 4.10 lid 1 converts "de aan hem ingevolge artikel 4.7, eerste lid, toegekende prestatiebeurs", not only that of the programme of the diploma. "Binnen 10 jaar" is the diplomatermijn (art. 4.9). An hbo diploma also counts (art. 4.10 lid 4), so "pas met een hbo-diploma" is false.

### Cijfer kamer 4

- **Clue:** "Het 4e cijfer van het slot: in welke maand mag Kim niet meer reizen? Typ het nummer van de maand."
- **Shown with:** app, regel
- **Digit:** **9** (1 september 2027: month 9. August gives 8; the stop day 10 is two digits and gets its own nudge.)
- **Wrong digit (`clueWrong`):** "8" → "In augustus mocht Kim nog reizen. Neem de maand erna." · "10" → "De 10e is de laatste dag om het reisproduct stop te zetten. Typ de maand."
- **Remember:** "Stop je? Zet je studiefinanciering en je reisproduct op tijd stop. Een diploma niveau 3 of 4 binnen 10 jaar maakt je prestatiebeurs een gift."

---

## Het slot

- Code: **4029** (kamer 1: 4, kamer 2: 0, kamer 3: 2, kamer 4: 9). Each digit follows from the room's answers.
- Distinct from every code in `content_new` and `kamers-engine/lessons` on 7 Nov 2026 (1725, 2073, 2348, 2797, 2824, 3022, 3231, 3521, 4379, 5114, 5423); does not start with 6. Another agent picks a code today: compare before release.
- Teacher screen: the code only inside the closed Antwoordblad, never on the projected part.

## Startcheck en eindcheck: twee parallelle vormen, A en B (elk 4 vragen)

One question per room; question n of A and of B test the same rule at the same difficulty (one step, no document, no amount), with another date or level. No check question copies a room question. Every pair gets A then B or B then A at random (engine v3). No feedback during a check. The options are listed in the order shown on screen.

### Vorm A

| # | Room | Rule | Prompt (with situation) | Options (as shown) | Correct |
|---|---|---|---|---|---|
| A1 | bijna18 | sf-kwartaal | "Je doet bol en wordt op 10 mei 18. Vanaf wanneer kun je studiefinanciering krijgen?" | b "Vanaf 10 mei" · c "Vanaf 1 juli" · a "Vanaf 1 juni" · d "Vanaf 1 augustus" | c |
| A2 | geld | lesgeld-18 | "Je doet bol en wordt op 3 oktober 2026 18. Moet je lesgeld betalen voor schooljaar 2026-2027?" | a "Ja: je wordt dit schooljaar 18" · d "Nee: lesgeld is alleen voor bbl" · b "Ja: vanaf de maand na je 18e verjaardag" · c "Nee: op 1 augustus was je nog 17" | c |
| A3 | gift | gift-diploma, lening-terug | "Je doet mbo niveau 3. Je had een basisbeurs en een lening. Je haalt binnen 10 jaar je diploma. Wat betaal je terug?" | c "De basisbeurs en de lening" · a "Alleen de lening" · d "Niets" · b "Alleen de basisbeurs" | a |
| A4 | stoppen | ov-stop | "Je stopt met je opleiding. School schrijft je uit per 20 maart. Vanaf wanneer mag je niet meer reizen met je reisproduct?" | a "Vanaf 20 maart" · c "Vanaf 10 april" · b "Vanaf 1 april" · d "Vanaf 1 augustus" | b |

### Vorm B

| # | Room | Rule | Prompt (with situation) | Options (as shown) | Correct |
|---|---|---|---|---|---|
| B1 | bijna18 | sf-kwartaal | "Je doet bol en wordt op 5 november 18. Vanaf wanneer kun je studiefinanciering krijgen?" | c "Vanaf 1 januari" · a "Vanaf 5 november" · d "Vanaf 1 augustus" · b "Vanaf 1 december" | c |
| B2 | geld | lesgeld-18 | "Je doet bol en wordt op 15 juni 2027 18. Moet je lesgeld betalen voor schooljaar 2027-2028?" | c "Nee: lesgeld is alleen voor bbl" · a "Ja: op 1 augustus ben je dan 18" · d "Nee: in het mbo is lesgeld gratis" · b "Ja: maar alleen voor de maanden na juni" | a |
| B3 | gift | gift-diploma, lening-terug | "Je doet mbo niveau 4. Je had een reisproduct en een lening. Je haalt binnen 10 jaar je diploma. Wat betaal je terug?" | b "Alleen het reisproduct" · d "Niets" · a "Alleen de lening" · c "Het reisproduct en de lening" | a |
| B4 | stoppen | ov-stop | "Je stopt met je opleiding. School schrijft je uit per 12 november. Vanaf wanneer mag je niet meer reizen met je reisproduct?" | c "Vanaf 10 december" · b "Vanaf 1 december" · a "Vanaf 12 november" · d "Vanaf 1 januari" | b |

Lengths (characters, in the order shown): A1 12, 12, 12, 16 · A2 30, 31, 39, 32 · A3 26, 16, 5, 20 · A4 14, 14, 13, 16 · B1 15, 16, 16, 16 · B2 31, 31, 33, 39 · B3 22, 5, 16, 28 · B4 17, 16, 17, 15. The right option is never the only longest, and never the only one with its first word.

Parallel checks and defensibility: A1 (10 mei, 2e kwartaal) and B1 (5 november, 4e kwartaal): Wsf 2000 art. 2.3 lid 1 onder b 1°, neither birthday is the 1st day of a quarter. A2 (18 on 3 oktober 2026: 17 on 1 augustus 2026) and B2 (18 on 15 juni 2027: 18 on 1 augustus 2027): Les- en cursusgeldwet art. 3 lid 1; "lesgeld is alleen voor bbl" is false (bbl pays cursusgeld, bol lesgeld). A3 (niveau 3, basisbeurs) and B3 (niveau 4, reisproduct): DUO table mbo 3 en 4. A4 (20 maart) and B4 (12 november): uitgeschreven after the 1st, no right from the 1st of the next month; the 10th is the stop deadline.

**Antwoorden start- en eindcheck (voor de docent):**
- Vorm A: A1 "Vanaf 1 juli". A2 "Nee: op 1 augustus was je nog 17". A3 "Alleen de lening". A4 "Vanaf 1 april".
- Vorm B: B1 "Vanaf 1 januari". B2 "Ja: op 1 augustus ben je dan 18". B3 "Alleen de lening". B4 "Vanaf 1 december".

## Lesplan (45 minuten)

| Minuut | Stap | Wat de docent doet |
|---|---|---|
| 0 tot 3 | Uitleg | Kies op het docentenscherm Ja of Nee bij het delen van anonieme antwoorden. Tik op Start de les en open de Projectiemodus: daar staan de link, de klascode en de timer. Studenten openen de link en werken met z'n tweeën op één scherm. Zeg: alles is verzonnen, behalve de regels en de bedragen van DUO. |
| 3 tot 6 | Startcheck | Elk tweetal beantwoordt 4 vragen voordat de klok start en ziet nog niet wat goed is. Geef geen hints. |
| 6 tot 32 | Escape | Start de klastimer op 26 minuten. Tweetallen spelen vier kamers en schrijven elk cijfer op. Loop rond; wijs bij vragen naar de regel op het scherm, niet naar het antwoord. Heb je het antwoordblad open op je telefoon? Dan zie je zelf of een tweetal goed zit. Klaar voor de tijd? Laat het tweetal de gespreksvragen op het eindscherm bespreken, ook de vraag voor snelle tweetallen. |
| 32 | Stop | Tik op Stop de escape. Iedereen stopt, ook wie nog niet klaar is. Niet elk tweetal haalt alle vier de kamers; dat is niet erg. Lees de cijfers van het slot voor uit het antwoordblad op je eigen telefoon of laptop, niet op het bord. Tweetallen die nog niet klaar zijn, openen het slot met die cijfers, of tikken onderaan op We stoppen en dan op Naar de eindcheck. Iedereen doet de eindcheck en het als-dan-plan. |
| 32 tot 35 | Eindcheck | Elk tweetal beantwoordt 4 vragen over dezelfde regels. Daarna ziet het wat het goed had, voor en na. |
| 35 tot 41 | Nabespreken | Vraag met handopsteken: wie heeft al een studentenreisproduct, wie wordt dit jaar 18? Vraag welke kamer het lastigst was en begin daar. Kies een of twee gespreksvragen. Vraag naar ervaringen, niet naar het inkomen van ouders. |
| 41 tot 43 | Afsluiten | Laat twee of drie studenten hun als-dan-plan hardop zeggen. Stel daarna de slotvraag. |
| 43 tot 45 | Reserve | Voor inloggen dat uitloopt, of een gesprek dat langer duurt. Loopt het inloggen uit? Houd minuut 32 als stopmoment aan. |

Totaal: 3 + 3 + 26 + 3 + 6 + 2 + 2 (reserve) = 45 minuten. The stop is at minuut 32.

Materials: een laptop of telefoon per tweetal, een digibord of beamer, pen en papier voor de cijfers

(No printing needed. Without devices, the teacher screen prints "Kamers op papier (studenten)"; see the FAQ.)

Tip voor de docent: Je hoeft niets voor te bereiden of uit te leggen: alle regels staan op het scherm. Open deze pagina ook op je telefoon. Daar lees je de antwoorden, zodat ze niet op het bord komen.

Care points ("Let op"):
1. "Kamer 2 gaat over het inkomen van ouders. Vraag studenten in de klas niet naar het geld van hun eigen gezin."
2. "Twijfelt een student over stoppen? Zeg: praat er na de les over met je loopbaanbegeleider."
3. "Na twee foute antwoorden laat de les het goede antwoord zien. Een tweetal kan dus doorklikken zonder te lezen. Dat telt niet mee bij In één keer goed. Zeg: goed lezen gaat sneller."

(Spec notes, not shown: timing is an estimate, 1,662 room words for 12 questions; the mbo model ran 1,349 words in 22 minutes, so 26 minutes is scaled, not measured. Time it with two classes before release.)

## Antwoordblad (voor de docent)

| Kamer | Vraag | Antwoord | Waarom, in één regel |
|---|---|---|---|
| 1 Bijna 18 | 1.1 Nu al | Alleen het studentenreisproduct | Bol onder de 18: alleen het reisproduct. |
|  | 1.2 Start | 1 april 2027 | 18 in het 1e kwartaal; het kwartaal daarna begint op 1 april. |
|  | 1.3 Bbl | Nee: niet in de bbl | Bbl geeft geen studiefinanciering. |
|  | **Cijfer 1** | **4** | april |
| 2 Je eerste geld | 2.1 Basisbeurs | € 110,76 | Thuiswonend, januari tot en met juli 2027. |
|  | 2.2 Extra | De aanvullende beurs | Hangt af van het inkomen van de ouders. |
|  | 2.3 Lesgeld | Schooljaar 2027-2028 | Op 1 augustus 2026 nog 17, op 1 augustus 2027 18. |
|  | **Cijfer 2** | **0** | € 110 |
| 3 Gift of lening? | 3.1 Diploma | Alleen de lening | Een lening betaal je altijd terug. |
|  | 3.2 Niveau 2 | Die is altijd een gift | Niveau 1 en 2: beurzen en reisproduct altijd een gift. |
|  | 3.3 Ruben | 12 maanden | De eerste 12 maanden aanvullende beurs zijn altijd een gift. |
|  | **Cijfer 3** | **2** | 12 |
| 4 Stoppen of switchen | 4.1 Reizen | 1 september 2027 | Uitgeschreven na de 1e: de maand erna niet meer reizen. |
|  | 4.2 Eerste jaar | Nee: Kim stopt voor 1 februari | Eerstejaarsregeling. |
|  | 4.3 Switchen | Die wordt ook een gift | Diploma niveau 3 of 4 binnen 10 jaar: alle prestatiebeurs van niveau 3 en 4. |
|  | **Cijfer 4** | **9** | september |
|  | **Code** | **4029** |  |

## Nabespreken

**Vier gespreksvragen** (on the end screen; the fourth is for fast pairs):
1. "Wie wordt dit schooljaar 18? Wat moet je dan regelen bij DUO, en wanneer?"
2. "Je krijgt basisbeurs en je mag lenen. Hoeveel zou jij lenen, en waarvoor?"
3. "Je twijfelt over je opleiding. Wie op school kan je helpen, voordat je stopt?"
4. "Snel klaar? Je woont thuis en krijgt 4 jaar basisbeurs. Hoeveel is dat ongeveer? Wanneer wordt het een gift?"

(Prompt 4: teacher answer in the teacher detail of kamer 3, 48 × € 110,76 = € 5.316,48 with the 2027 amount, a gift with a diploma within 10 years.)

**Slotvraag:** "Wat regel jij als eerste bij DUO: je reisproduct, je studiefinanciering of je lesgeld?"

**Als-dan-plan (per student, vaste keuzes):** "Als ___, dan ___. Dat doe ik binnen ___."
- Situaties: "ik bijna 18 word" · "ik lesgeld moet betalen" · "ik twijfel over mijn opleiding" · "ik stop met mijn opleiding" · "ik wil lenen bij DUO"
- Acties: "vraag ik studiefinanciering en de aanvullende beurs aan in Mijn DUO" · "kies ik in Mijn DUO hoe ik het lesgeld betaal" · "praat ik eerst met mijn loopbaanbegeleider" · "zet ik mijn studiefinanciering en reisproduct op tijd stop" · "leen ik niet meer dan ik nodig heb"
- Termijnen: "een dag" · "een week" · "een maand"
- Lead: "Wat ga jij echt regelen na deze les? Maak er een als-dan-plan van. Ieder maakt een eigen plan."

Per kamer (`discuss`):
- Kamer 1: "Wie van jullie heeft al een studentenreisproduct? Wanneer word jij 18?"
- Kamer 2: "Woon je thuis of op jezelf? Wat zou jij met je basisbeurs doen?"
- Kamer 3: "Lenen bij DUO: wanneer vind jij dat slim, en wanneer niet?"
- Kamer 4: "Je twijfelt over je opleiding. Met wie praat je voordat je stopt?"

---

## Teacher screen (Dutch, as shown)

**Header line:** `teacher.level` "mbo niveau 3 en 4"; `teacher.noun` ["student", "studenten"]; `teacher.groupExample` "mbo 4 bol"; `teacher.timers` [16, 20, 22, 30, 40] (the lesson's 26 minutes is added by the engine).

**`teacher.audience`:**
1. "Voor mbo niveau 3 en 4 in de bol, 16 tot ongeveer 20 jaar. Niveau 2 kan ook, met wat hulp bij het lezen."
2. "Past bij burgerschap en loopbaan: wat regel je bij DUO als je 18 wordt? Ook goed in het jaar dat de meeste studenten 18 worden."
3. "Deze les gaat over studiefinanciering in het mbo: wanneer die begint, wat je krijgt, lesgeld, gift of lening, en stoppen of switchen. Hbo en universiteit zitten er niet in."
4. "Geef de les vóór 1 augustus 2027. Dan verandert het lesgeld. Gecontroleerd op 7 november 2026."
5. "45 minuten, of 30 minuten met een kortere escape. Je hoeft niets voor te bereiden. Ook een gastdocent, loopbaanbegeleider of decaan kan deze les geven."
6. "Niet elk tweetal haalt alle vier de kamers. Dat is niet erg: stop op minuut 32."

**`teacher.goal`:** the six leerdoelen above, in one line, "De student kan: 1. ... 6. ...".

Kern (`teacherNote`):
- Kamer 1: "Bol onder de 18: alleen het studentenreisproduct. Studiefinanciering begint in het kwartaal na de 18e verjaardag. Bbl: geen studiefinanciering."
- Kamer 2: "Thuiswonend in 2027: basisbeurs € 110,76 per maand. De aanvullende beurs hangt af van het inkomen van de ouders. Lesgeld betaal je als je op 1 augustus 18 bent en bol doet."
- Kamer 3: "Niveau 3 en 4: basisbeurs, aanvullende beurs en reisproduct worden een gift met een diploma binnen 10 jaar. De eerste 12 maanden aanvullende beurs zijn altijd een gift. Niveau 1 en 2: altijd een gift. Een lening betaal je altijd terug."
- Kamer 4: "Uitgeschreven na de 1e van de maand: de maand erna niet meer reizen, en het reisproduct uiterlijk de 10e stopzetten. Stoppen in het 1e jaar voor 1 februari: beurs en reisproduct van dat jaar worden een gift. Switchen: een diploma niveau 3 of 4 binnen 10 jaar maakt alle prestatiebeurs van niveau 3 en 4 een gift."

Bronnen en uitzonderingen (`teacherDetail`, closed; each point from the source table):
- Kamer 1: Precies volgens de wet: studiefinanciering gaat in op de 1e dag van de maand na het kwartaal waarin je 18 wordt. Word je 18 op de 1e dag van een kwartaal, bijvoorbeeld op 1 juli? Dan gaat het die dag al in. Je moet op de 1e van de maand ingeschreven staan. Vraag het liefst minstens 8 weken eerder aan in Mijn DUO, met DigiD. Voor het lopende schooljaar kan het nog met terugwerkende kracht, vanaf 1 augustus; het reisproduct niet. Het reisproduct krijg je vanaf de maand waarin je met de bol begint, ook onder de 18. Bbl, deeltijd en extraneus geven geen studiefinanciering. Je moet jonger zijn dan 30 als je studiefinanciering ingaat.
- Kamer 2: Bedragen mbo per maand, januari tot en met juli 2027: basisbeurs € 110,76 thuiswonend en € 361,44 uitwonend; lening hoogstens € 241,27; aanvullende beurs hoogstens € 452,81 thuiswonend en € 482,06 uitwonend. Betaal je nog geen lesgeld? Dan is de aanvullende beurs € 125,92 lager: hoogstens € 326,89 thuiswonend en € 356,14 uitwonend. Van augustus tot en met december 2027 blijven de basisbeurs en de lening gelijk. Lesgeld 2026-2027: € 1.511, in 1 keer of in 9 termijnen van € 167,89. Sta je op 1 oktober ingeschreven? Dan betaal je lesgeld voor het hele schooljaar. Lesgeld 2027-2028: € 1.554 volgens de Rijksoverheid; controleer dit in de zomer van 2027 op duo.nl. Bbl betaalt geen lesgeld, maar cursusgeld aan de school: in 2026-2027 € 762 voor niveau 3 en 4, als je op 1 augustus 18 bent. Uitwonend ben je als je bij de gemeente op een ander adres staat dan je ouders, en daar ook woont.
- Kamer 3: De 10 jaar beginnen in de 1e maand dat je geld of een reisproduct van DUO krijgt. Voor niveau 3 en 4 is ook het reisproduct van voor je 18e een prestatiebeurs, dus de 10 jaar kunnen al op je 16e beginnen. Een diploma niveau 3 of 4, ook via de bbl, of een hbo-diploma telt. Over de prestatiebeurs loopt rente; met een diploma op tijd vervalt ook die rente. Niveau 3 en 4: 4 jaar beurs, daarna nog 3 jaar alleen lenen; het reisproduct 7 jaar. Het reisproduct is in 2027 als prestatiebeurs € 112,15 per maand waard. Terugbetalen: na je studiefinanciering begint op 1 januari van het jaar erna een aanloopfase van 2 jaar. Wie voor het eerst studiefinanciering krijgt in of na schooljaar 2023-2024, betaalt terug in hoogstens 35 jaar, naar inkomen (SF35). Rente 2027: 2,70%. Bij een ziekte of beperking kan DUO soms een uitzondering maken. Antwoord op de vraag voor snelle tweetallen: 48 maanden × € 110,76 = € 5.316,48 met het bedrag van 2027; dat wordt een gift met een diploma binnen 10 jaar.
- Kamer 4: Stoppen: regel eerst je uitschrijving bij de school. Zet je studiefinanciering uiterlijk op de 1e van de maand stop in Mijn DUO, en je reisproduct bij een ophaalautomaat. Te laat stopzetten en toch reizen geeft een ov-schuld: op duo.nl op 7 november 2026 € 96,09 per halve maand in de 1e maand, daarna € 192,21 per halve maand. Eerstejaarsregeling mbo: je komt van het vo of van niveau 1 of 2, je krijgt voor het eerst prestatiebeurs, je studiefinanciering stopt voor 1 februari, en je krijgt dat schooljaar niet opnieuw prestatiebeurs voor niveau 3 of 4, en ook geen studiefinanciering voor hbo of universiteit. Een schooljaar in het mbo loopt van 1 augustus tot en met 31 juli. De regeling kan 1 keer voor mbo. Een lening betaal je wel terug. Het bericht dat de schuld vervalt, komt ongeveer een jaar later, in januari. Switchen: geef je nieuwe opleiding door vóór de uitschrijfdatum van de oude. Zit er hoogstens 4 maanden tussen? Dan krijg je meestal studiefinanciering door (overbrugging). Van mbo naar hbo: daar begint een nieuw reisproduct en een nieuwe diplomatermijn van 10 jaar.

Dit wordt vaak gevraagd (`teacher.faq`):
- "Ik heb maar 30 minuten. Kan dat?" Antwoord: "Ja. Zet de klastimer op 16 minuten. Minuut 0 tot 2 uitleg, 2 tot 5 startcheck, 5 tot 21 escape, 21 tot 24 eindcheck, 24 tot 30 slotvraag en als-dan-plan. Niet alle tweetallen komen dan bij kamer 4."
- "Ik heb 60 of 90 minuten." Antwoord: "Gebruik het lesplan van 45 minuten. Neem meer tijd voor het nabespreken. Laat studenten daarna hun eigen situatie opzoeken op duo.nl."
- "Mijn studenten doen bbl. Werkt de les dan?" Antwoord: "Deels. Kamer 1 laat zien dat de bbl geen studiefinanciering geeft. De rest gaat over de bol. In de bbl betaal je vanaf 18 cursusgeld aan de school, geen lesgeld."
- "Is de tegemoetkoming scholieren hetzelfde?" Antwoord: "Nee. Die is voor leerlingen van 18 of ouder in het voortgezet onderwijs, zoals vmbo, havo, vwo of vavo. Niet voor het mbo: daar krijg je studiefinanciering."
- "Een student woont op kamers. Wat dan?" Antwoord: "Dan is de student voor DUO meestal uitwonend: ingeschreven bij de gemeente op een ander adres dan de ouders, en daar ook wonen. De basisbeurs is dan € 361,44 per maand (januari tot en met juli 2027)."
- "Tot wanneer kloppen de bedragen?" Antwoord: "De basisbeurs en de lening in de tabel gelden heel 2027. Het lesgeld van € 1.511 geldt voor schooljaar 2026-2027. Voor 2027-2028 noemt de Rijksoverheid € 1.554; controleer dit in de zomer van 2027 op duo.nl. Geef de les dus vóór 1 augustus 2027."
- "Mag een student bijverdienen naast de studiefinanciering?" Antwoord: "Ja. Er is geen grens meer voor bijverdienen."
- "Is dit een examen?" Antwoord: "Nee. Het is oefenen met regels die je nodig hebt als je 18 wordt."
- "Een student wil stoppen of twijfelt. Wat doe ik?" Antwoord: "Verwijs naar de loopbaanbegeleider of de decaan. Laat de student de wijzigingshulp op duo.nl invullen. In het 1e jaar maakt stoppen voor 1 februari veel uit."
- "Een student vraagt iets wat niet in de les staat." Antwoord: "Zeg eerlijk dat je het niet zeker weet. Zoek het samen op duo.nl."
- "Er zijn geen laptops of telefoons." Antwoord: "Print Kamers op papier (studenten) op dit scherm. Lees de antwoorden van je eigen scherm."

(Sources for the FAQ: bbl and cursusgeld: rows bbl-geen and lesgeld-18; tegemoetkoming scholieren: row ts; uitwonend: row uitwonend; amounts: rows bedragen-2027 and lesgeld-bedrag; bijverdienen: row bijverdienen; stoppen: rows eerstejaars and wisselen. "Zoek het samen op" and the 60 or 90 minutes line are advice, not rules.)

**`teacher.closing`:** the slotvraag.

---
## What differs from the havo version (summary for reviewers)

| Topic | Havo/vwo (ESC-DUO, 2073) | Mbo (ESC-DUO-MBO, 4029) | Why |
|---|---|---|---|
| Audience, reading | havo 5 and vwo 6, B1 | mbo 3-4 bol, 16-20, A2/B1, max 2 docs per room | research/next_topics.md; mbo model |
| Kamer 1 | Aanvragen: DUO, reisproduct, week or weekend | Bijna 18: reisproduct before 18, studiefinanciering from the quarter after 18, bbl none | Wsf 2000 art. 2.3; no minimum age in ho |
| Kamer 2 | Thuis of uit: basisbeurs hbo, uitwonend rule | Je eerste geld: thuiswonend mbo basisbeurs, aanvullende beurs, lesgeld from 1 augustus at 18 | Most mbo students live at home; lesgeld instead of collegegeld |
| Kamer 3 | Aanvullende beurs, lening | Gift of lening: mbo 3-4 prestatiebeurs, niveau 1-2 gift, 12 months aanvullende beurs | Wsf 2000 art. 4.1 to 4.10 |
| Kamer 4 | Prestatiebeurs ho, Mila stops, ov-schuld | Stoppen of switchen: reisproduct stop date, mbo eerstejaarsregeling, switch converts all niveau 3-4 prestatiebeurs | Mbo studiejaar 1 augustus; Wsf 2000 art. 4.10, 4.11 |
| Escape | 26 minutes, stop 33 | 26 minutes, stop 32 | Same length; checks 3 minutes each as the mbo model |
| validUntil | 31 december 2027 | 31 juli 2027 | Lesgeld changes on 1 augustus 2027 |

---

## Alle bedragen met hun geldigheid

| Bedrag | Waar | Echt of verzonnen | Geldt voor | Source |
|---|---|---|---|---|
| € 110,76 basisbeurs thuiswonend, € 361,44 uitwonend, per maand | tabel kamer 2, 2.1, cijfer 2, docentdetail, FAQ | echt | januari tot en met juli 2027, en gelijk in augustus tot en met december 2027 | [DUO bedragen](https://duo.nl/particulier/studiefinanciering/bedragen.jsp), tables "Januari tot en met juli 2027" and "Augustus tot en met december 2027" (page update 5 Nov 2026) |
| € 241,27 rentedragende lening per maand, hoogstens | tabel kamer 2 | echt | heel 2027 | DUO bedragen (both 2027 tables) |
| € 452,81 / € 482,06 aanvullende beurs hoogstens (met lesgeld); € 326,89 / € 356,14 zonder lesgeld; verschil € 125,92 | docentdetail kamer 2 | echt | januari tot en met juli 2027 (augustus tot en met december 2027: € 456,39 / € 485,64, verschil € 129,50) | DUO bedragen: "Hoeft u nog geen lesgeld te betalen aan DUO? Dan is de aanvullende beurs € 125,92 lager. U kunt dan in totaal maximaal € 326,89 (thuiswonend) of € 356,14 (uitwonend) aanvullende beurs krijgen." |
| € 1.511 lesgeld 2026-2027; 9 termijnen van € 167,89 | regel r3 kamer 2, docentdetail, FAQ | echt | schooljaar 2026-2027 (tot en met 31 juli 2027) | [DUO lesgeld betalen](https://duo.nl/particulier/lesgeld/lesgeld-betalen.jsp): "Voor het schooljaar 2026-2027 is het lesgeld € 1.511,-."; "9 gedeeltes van € 167,89"; [Rijksoverheid hoogte lesgeld en cursusgeld mbo](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/middelbaar-beroepsonderwijs/hoogte-lesgeld-en-cursusgeld-mbo) (page date 26 Oct 2026): "Het lesgeld is € 1511 voor het studiejaar 2026/2027."; [Stcrt. 2025, 29035](https://zoek.officielebekendmakingen.nl/stcrt-2025-29035.html) (regeling of 18 augustus 2025, Regeling Les- en cursusgeldwet art. 11): "wordt '€ 1.458' vervangen door '€ 1.511'", "treedt in werking met ingang van 1 augustus 2026" (Revision 2, from fact check A) |
| € 1.554 lesgeld 2027-2028 | docentdetail kamer 2, FAQ (both say "volgens de Rijksoverheid" / "noemt de Rijksoverheid" and "controleer dit in de zomer van 2027 op duo.nl") | echt, **Rijksoverheid only** | schooljaar 2027-2028 | Rijksoverheid lesgeld (as above): "Het lesgeld is € 1554 voor studiejaar 2027/2028." DUO's lesgeld page shows only 2026-2027, and no Staatscourant regeling for 2027-2028 was found (fact check A, 7 Nov 2026). |
| € 762 cursusgeld bbl niveau 3 en 4 | docentdetail kamer 2 | echt | schooljaar 2026-2027 (2027-2028: € 784) | Rijksoverheid lesgeld (as above), table "Cursusgeld BBL-mbo"; [Stcrt. 2025, 29035](https://zoek.officielebekendmakingen.nl/stcrt-2025-29035.html), Regeling Les- en cursusgeldwet art. 12 onder b: "'€ 735' vervangen door '€ 762'" (2026-2027) |
| € 112,15 waarde reisproduct per maand | docentdetail kamer 3 | echt | 2027 (2026: € 110,95) | [DUO ov](https://duo.nl/particulier/studiefinanciering/ov.jsp): "Bedrag prestatiebeurs ov per maand ... 2027 € 112,15" (page update 5 Nov 2026) |
| 2,70% rente SF35 (2026: 2,33%) | docentdetail kamer 3 | echt | 2027 | [DUO rente](https://duo.nl/particulier/rente/rente-voor-studenten.jsp): "Het percentage daarvoor is 2,70% in 2027." |
| € 96,09 / € 192,21 ov-schuld per halve maand | docentdetail kamer 4 | echt | as shown on 7 Nov 2026; the page names no year | [DUO studentenreisproduct stopzetten](https://duo.nl/particulier/studentenreisproduct-stopzetten.jsp) |
| 48 × € 110,76 = € 5.316,48 | docentdetail kamer 3 (answer to debrief 4) | berekend | 2027 amount, held constant | DUO bedragen |

**validUntil: 31 juli 2027.** It is set by the lesgeld of € 1.511 (regel r3 kamer 2, schooljaar 2026-2027). The pupil table (basisbeurs, lening) holds for all of 2027. **To update for a run after 31 juli 2027:** regel r3 kamer 2 and the FAQ (lesgeld € 1.554 for 2027-2028, already published by Rijksoverheid; check DUO), the teacher detail of kamer 2 (lesgeld, termijnen, cursusgeld, aanvullende beurs maxima for augustus tot en met december 2027), and the story year of kamer 2 (the 2.3 answer "Schooljaar 2027-2028" is tied to the story dates, not to today, so it stays right). **For a run after 31 december 2027:** the kamer 2 table title and both amounts (and 2.1, cijfer 2: the digit is the last digit of the hele euro's, so it changes when the amount does), the reisproduct value and the rente in the kamer 3 detail, the ov-schuld amounts.

## Bronnen (source table)

All read on **7 November 2026** with curl (HTML converted to text). "Page date" is the DUO "Laatste update" line or the Rijksoverheid DCTERMS.modified, where shown. Law texts: wetten.overheid.nl returned an empty reply through the proxy, so each law was read as the official BWB XML of the named version from repository.officiele-overheidspublicaties.nl (the source of wetten.overheid.nl); the links point to the same version on wetten.overheid.nl.

| Rule id | Rule (as used in the lesson) | Source 1 | Source 2 | Valid until |
|---|---|---|---|---|
| reis-onder-18 | Bol onder de 18: alleen het studentenreisproduct (r1 kamer 1, 1.1). | [DUO voorwaarden](https://duo.nl/particulier/studiefinanciering/voorwaarden.jsp) (page update 5 Nov 2026): "Doet u mbo? Dan moet u minimaal 18 jaar zijn voor een beurs of rentedragende lening. U kunt wel een studentenreisproduct krijgen als u nog geen 18 bent."; [DUO ov](https://duo.nl/particulier/studiefinanciering/ov.jsp): "Ook mbo'ers jonger dan 18 kunnen het reisproduct krijgen." | [Rijksoverheid, recht op een reisproduct voor studenten](https://www.rijksoverheid.nl/themas/onderwijs/studiefinanciering/vraag-en-antwoord/studiefinanciering/recht-reisproduct-studenten) (page date 10 Aug 2026): "Als u nog geen 18 bent en een mbo-opleiding volgt, krijg u nog geen studiefinanciering. U kunt het reisproduct dan apart aanvragen."; law: [Wsf 2000](https://wetten.overheid.nl/BWBR0011453/2026-08-01) art. 2.3 lid 1 onder a: "een reisvoorziening met ingang van de eerste dag van de maand waarin hij beroepsonderwijs is gaan volgen" | No end date known |
| sf-18 / sf-kwartaal | Beurs of lening vanaf 18; studiefinanciering begint in het kwartaal na de 18e verjaardag (r2, r3 kamer 1, 1.2, A1, B1, cijfer 1). | DUO voorwaarden: "Uw studiefinanciering gaat in vanaf het kwartaal (januari tot en met maart, april tot en met juni, juli tot en met september, oktober tot en met december) na uw 18e verjaardag."; "U moet op de 1e van de maand ingeschreven staan." | Wsf 2000 (BWB XML BWBR0011453, version 1 Aug 2026) art. 2.3 lid 1 onder b: "1°. de eerste dag van de maand volgend op het kwartaal waarin hij de leeftijd van 18 jaren heeft bereikt; of 2°. de eerste dag van het kwartaal indien hij op die dag de leeftijd van 18 jaren heeft bereikt."; [Rijksoverheid, studiefinanciering mbo](https://www.rijksoverheid.nl/themas/onderwijs/studiefinanciering/studiefinanciering-mbo) (page date 10 Aug 2026): "Zo moeten zij minimaal 18 jaar en jonger dan 30 jaar zijn." | No end date known |
| bbl-geen | Bbl: geen studiefinanciering (r4 kamer 1, 1.3, FAQ). | DUO voorwaarden: "mbo: beroepsopleidende leerweg (bol)"; "Voor deeltijd, bbl of ovo (overig volwassenen onderwijs) krijgt u geen studiefinanciering." | Rijksoverheid studiefinanciering mbo: "Studenten die een beroepsopleidende leerweg (bol) in het mbo volgen hebben recht op studiefinanciering."; Wsf 2000 art. 1.1 "beroepsonderwijs: opleiding als bedoeld in artikel 7.2.7, derde lid, WEB"; [WEB](https://wetten.overheid.nl/BWBR0007625/2026-08-01) art. 7.2.7 lid 3 (BWB XML version 1 Aug 2026): "een beroepsopleiding in de beroepsopleidende leerweg" | No end date known |
| aanvragen | Teacher detail kamer 1: aanvragen in Mijn DUO, liefst 8 weken eerder; terugwerkende kracht vanaf 1 augustus, niet voor het reisproduct. | [DUO aanvragen](https://duo.nl/particulier/studiefinanciering/aanvragen.jsp) (page update 5 Nov 2026): "Het liefst minstens 8 weken voordat u er recht op hebt."; "Voor het lopende studiejaar (voor mbo vanaf 1 augustus, voor hbo en universiteit vanaf 1 september) kunt u nog studiefinanciering krijgen voor maanden die voorbij zijn ... Het studentenreisproduct kunt u niet meer aanvragen voor maanden die al voorbij zijn." | [DUO studentenreisproduct aanvragen](https://duo.nl/particulier/ov-en-reizen/aanvragen.jsp) (page update 5 Nov 2026): "Als u mbo doet, moet u 18 zijn voor studiefinanciering. Het reisproduct kunt u wél voor uw 18e krijgen. U vraagt dit aan in Mijn DUO." | No end date known |
| bedragen-2027 | Basisbeurs € 110,76 thuiswonend, € 361,44 uitwonend; lening hoogstens € 241,27 (tabel kamer 2, 2.1, cijfer 2). | [DUO bedragen](https://duo.nl/particulier/studiefinanciering/bedragen.jsp) (page update 5 Nov 2026), "Studiefinanciering mbo", "Januari tot en met juli 2027": Basisbeurs € 110,76 / € 361,44; Aanvullende beurs € 452,81 / € 482,06; Rentedragende lening € 241,27 / € 241,27 | No second source for 2027 found: Wsf 2000 art. 3.18 (version 1 Aug 2026) has the amounts "per 1 januari 2026" (basisbeurs € 107,26 / € 350,03, basislening € 233,65), the same as DUO's table "Augustus tot en met december 2026", which confirms DUO's 2026 table but not the 2027 one. See Uncertainties 1. | 31 Dec 2027 |
| aanvullend-ouders | De aanvullende beurs hangt af van het inkomen van je ouders; altijd aanvragen (r1 kamer 2, 2.2). | [DUO aanvullende beurs](https://duo.nl/particulier/studiefinanciering/aanvullende-beurs.jsp) (page update 5 Nov 2026): "We raden u aan om de aanvullende beurs altijd aan te vragen. Of u een aanvullende beurs krijgt hangt af van het inkomen van uw ouders." | Rijksoverheid studiefinanciering mbo: "De aanvullende beurs is bedoeld voor studenten met ouders die weinig of minder kunnen bijdragen ... Er wordt daarbij gekeken naar het inkomen van de ouders."; DUO aanvragen: "Loop geen geld mis. Vraag de aanvullende beurs altijd aan." | No end date known |
| lesgeld-18 | Lesgeld als je op 1 augustus 18 of ouder bent en bol doet; schooljaar 1 augustus tot en met 31 juli (r2 kamer 2, 2.3, A2, B2). Bbl: cursusgeld (teacher only). | [DUO lesgeld betalen](https://duo.nl/particulier/lesgeld/lesgeld-betalen.jsp) (no page date shown): "Bent u op 1 augustus 2026 18 jaar of ouder? En doet u voltijd mbo (bol) of vavo ...? Dan moet u lesgeld betalen voor het schooljaar 2026-2027."; "Staat u op 1 oktober 2026 ingeschreven bij een voltijd opleiding, dan betaalt u lesgeld voor het hele schooljaar." | Law: [Les- en cursusgeldwet](https://wetten.overheid.nl/BWBR0004188/2026-01-01) (BWB XML BWBR0004188, version 1 Jan 2026) art. 3 lid 1: "Lesgeld is verschuldigd ter zake van het door een onderwijsdeelnemer die op de eerste dag van het desbetreffende studiejaar de leeftijd van 18 jaren heeft bereikt, volgen van ... onderwijs"; art. 1: "studiejaar: het tijdvak van 1 augustus tot en met 31 juli daaropvolgend"; Rijksoverheid lesgeld: "U betaalt lesgeld als u: op 1 augustus 18 jaar of ouder bent; en een voltijd BOL mbo-opleiding volgt."; cursusgeld: "U betaalt cursusgeld als u: op 1 augustus 18 jaar of ouder bent; en een opleiding in de beroepsbegeleidende leerweg (bbl) volgt."; [Uitvoeringsbesluit Les- en cursusgeldwet 2000](https://wetten.overheid.nl/BWBR0011400/2026-01-01) art. 13 lid 1 (BWB XML version 1 Jan 2026; Revision 2): "Geen cursusgeld is verschuldigd indien de cursist bij aanvang van het studiejaar waarin de cursus plaatsvindt de leeftijd van 18 jaren nog niet heeft bereikt." | No end date known |
| lesgeld-bedrag | Lesgeld 2026-2027 € 1.511 (r3 kamer 2); cursusgeld bbl € 314 (niveau 1 en 2) and € 762 (niveau 3 en 4) (teacher); 2027-2028 € 1.554, Rijksoverheid only (teacher, marked so). | DUO lesgeld: "Voor het schooljaar 2026-2027 is het lesgeld € 1.511,-."; Rijksoverheid lesgeld (page date 26 Oct 2026): "Het lesgeld is € 1511 voor het studiejaar 2026/2027. Het lesgeld is € 1554 voor studiejaar 2027/2028." | Law: [Stcrt. 2025, 29035](https://zoek.officielebekendmakingen.nl/stcrt-2025-29035.html), Regeling Les- en cursusgeldwet art. 11 and 12 as amended by the regeling of 18 augustus 2025 (HO&S/1736998): lesgeld "'€ 1.511'", cursusgeld "'€ 314'" (onderdeel a) and "'€ 762'" (onderdeel b), in force 1 augustus 2026; its basis is Uitvoeringsbesluit Les- en cursusgeldwet 2000 art. 3a lid 2 ([BWBR0011400](https://wetten.overheid.nl/BWBR0011400/2026-01-01)). For 2027-2028 no regeling was found. | 31 Jul 2027 (2026-2027 amounts) |
| lesgeld-vergoeding | Teacher detail kamer 2: betaal je nog geen lesgeld, dan is de maximale aanvullende beurs € 125,92 lager. (Revision 2: the row no longer claims that the detail names "het schooljaar waarin je 18 wordt"; the law below is the background.) | DUO bedragen (quote in the amounts table above) | Wsf 2000 art. 3.2 lid 3 and lid 4: "De tegemoetkoming, bedoeld in het derde lid, wordt niet toegekend voor het studiejaar waarin de mbo-student de leeftijd van 18 jaren bereikt." | 2027 amounts: 31 Dec 2027 |
| uitwonend | FAQ and teacher detail: uitwonend = bij de gemeente op een ander adres dan je ouders en daar wonen. | [DUO uitwonend](https://duo.nl/particulier/studiefinanciering/uitwonend.jsp): "u bij de gemeente staat ingeschreven op een ander adres dan dat van uw ouders en u woont op het adres waar u staat ingeschreven." | Wsf 2000 art. 1.1 "uitwonende student: student die voldoet aan de verplichtingen, bedoeld in artikel 1.5" | No end date known |
| gift-diploma | Niveau 3 en 4: basisbeurs, aanvullende beurs en reisproduct worden een gift met een diploma binnen 10 jaar (tabel kamer 3, 3.1, A3, B3). | [DUO gift of terugbetalen](https://duo.nl/particulier/studiefinanciering/gift-of-terugbetalen.jsp) (page update 5 Nov 2026): table "Mbo 3 en 4": Basisbeurs, Aanvullende beurs, Reisproduct "Gift" / "Terugbetalen"; "Pas als u binnen 10 jaar uw diploma haalt, worden deze onderdelen van de studiefinanciering een gift." | Wsf 2000 art. 4.6a (prestatiebeurs: "a. een basisbeurs; b. een aanvullende beurs; c. een reisvoorziening"), art. 4.9 ("De diplomatermijn beroepsonderwijs is een periode van 10 jaren"), art. 4.10 lid 1; Rijksoverheid studiefinanciering mbo: "Studenten die binnen 10 jaar afstuderen, hoeven de prestatiebeurs dan niet terug te betalen." | No end date known |
| lening-terug | Een lening betaal je altijd terug, met rente (r1 kamer 3, 3.1, A3, B3). | DUO gift of terugbetalen: "Een rentedragende lening of collegegeldkrediet moet u altijd terugbetalen."; table: Rentedragende lening "Terugbetalen" / "Terugbetalen" | [DUO lenen](https://duo.nl/particulier/studiefinanciering/lenen.jsp) (page update 5 Nov 2026): "Die schuld moet u na uw opleiding terugbetalen, ook met rente."; Rijksoverheid studiefinanciering mbo: "DUO berekent rente over de lening ... Na het afstuderen moet de student de lening terugbetalen." | No end date known |
| terugbetalen | 2 jaar niets terugbetalen, daarna elke maand naar inkomen (r2, r3 kamer 3); SF35, 35 jaar, rente 2,70% in 2027 (teacher). | [DUO zo werkt terugbetalen](https://duo.nl/particulier/studieschuld-terugbetalen/zo-werkt-terugbetalen.jsp): "Als uw studiefinanciering stopt, dan begint op 1 januari van het jaar daarna de 'aanloopfase'. Dit is een periode van 2 jaar waarin u nog niet hoeft terug te betalen."; "Ook kijkt DUO meestal automatisch naar uw inkomen" | [DUO terugbetalingsregels](https://duo.nl/particulier/studieschuld-terugbetalen/terugbetalingsregels.jsp): "U valt onder SF35 als u voor het eerst studiefinanciering krijgt in of na studiejaar 2023-2024"; "Uw aflosfase is maximaal 35 jaar."; [DUO rente](https://duo.nl/particulier/rente/rente-voor-studenten.jsp): "Het percentage daarvoor is 2,70% in 2027." | Rente: 31 Dec 2027; rest no end date known |
| niveau12-gift | Niveau 1 en 2: beurzen en reisproduct altijd een gift (r4 kamer 3, 3.2). | DUO gift of terugbetalen: "Voor mbo 1 en 2 is de basisbeurs, aanvullende beurs en het studentenreisproduct altijd een gift. U betaalt alleen terug wat u leent." | Rijksoverheid studiefinanciering mbo: "Voor studenten aan een bol opleiding niveau 1 en 2 zijn de basisbeurs, aanvullende beurs en het reisproduct een gift."; Rijksoverheid reisproduct: "Doet u mbo niveau 1 of 2? Dan is het studentenreisproduct gratis (gift)."; Wsf 2000 art. 4.1, 4.2 | No end date known |
| aanvullend-12 | De eerste 12 maanden aanvullende beurs (niveau 3 en 4) zijn altijd een gift (tabel kamer 3, 3.3, cijfer 3). | DUO aanvullende beurs: "Hierop geldt een uitzondering: de eerste 12 maanden die u krijgt voor mbo 3 en 4 en de eerste 5 maanden voor hbo of universiteit hoeft u nooit terug te betalen."; DUO gift: "hebt u tijdens uw eerste 12 maanden studiefinanciering een aanvullende beurs gekregen? ... U mag ze houden, ook zonder diploma." | Wsf 2000 art. 4.7 lid 1: "met dien verstande dat de aanvullende beurs in de eerste 12 maanden waarvoor aanspraak op studiefinanciering bestaat wordt verstrekt in de vorm van een gift"; Rijksoverheid studiefinanciering mbo: "de eerste 12 maanden aanvullende beurs zijn altijd een gift." | No end date known |
| duur | Teacher detail kamer 3: niveau 3 en 4: 4 jaar beurs, daarna 3 jaar alleen lenen; reisproduct 7 jaar (84 maanden), ook de maanden voor je 18e. | [DUO hoelang recht](https://duo.nl/particulier/studiefinanciering/hoelang-recht.jsp) (page update 5 Nov 2026): "De basisbeurs en eventueel de aanvullende beurs krijgt u alleen de eerste 4 jaar. Daarna kunt u nog 3 jaar alleen lenen. Het studentenreisproduct krijgt u de volledige 7 jaar." | [DUO hoelang recht op het studentenreisproduct](https://duo.nl/particulier/ov-en-reizen/hoelang-recht.jsp) (page update 13 Oct 2026): "U krijgt maximaal 7 jaar (84 maanden) reisproduct. Ook maanden waarin u nog geen 18 was, maar wel het reisproduct had, tellen mee."; Wsf 2000 art. 4.7 lid 1 and lid 3 | No end date known |
| termijn-start | Teacher detail kamer 3: de 10 jaar beginnen in de 1e maand met geld of reisproduct; voor niveau 3 en 4 is ook het reisproduct onder de 18 een prestatiebeurs. | DUO hoelang recht op het studentenreisproduct: "De 10 jaar gaan in vanaf de 1e maand dat u geld of reisproduct krijgt." | Wsf 2000 art. 4.9: "Deze periode vangt aan op de eerste dag van de maand waarover voor het eerst prestatiebeurs beroepsonderwijs is toegekend."; art. 4.6b: "komt een mbo-student die jonger is dan 18 jaren in aanmerking voor een reisvoorziening in de vorm van een prestatiebeurs" | No end date known |
| welk-diploma | Teacher detail kamer 3: ook een diploma via de bbl of een hbo-diploma telt. | DUO gift: "Een diploma behaald in deeltijd of via de beroepsbegeleidende leerweg (BBL) geeft ook recht op omzetting van de prestatiebeurs."; list includes "hbo (ook associate degree)" | Wsf 2000 art. 4.10 lid 4: "Met een afsluitend examen van een opleiding niveau 3 of 4 wordt gelijkgesteld het afsluitend examen van een opleiding in het hoger onderwijs."; lid 6 (bbl) | No end date known |
| rente-pb | Teacher detail kamer 3: over de prestatiebeurs loopt rente; met een diploma op tijd vervalt die. | DUO gift: "Over de prestatiebeurs loopt rente, vanaf de eerste maand dat u de prestatiebeurs krijgt. Haalt u op tijd uw diploma, dan wordt ook deze rente een gift." | Wsf 2000 art. 1.1 "prestatiebeurs: rentedragende lening die onder voorwaarden kan worden omgezet in een gift, waarbij de rente teniet gaat" | No end date known |
| reiswaarde | Teacher detail kamer 3: reisproduct € 112,15 per maand in 2027. | DUO ov: "Bedrag prestatiebeurs ov per maand ... 2027 € 112,15; 2026 € 110,95" | Wsf 2000 art. 4.8 lid 1 (the value is a twelfth of what the carriers charge) | 31 Dec 2027 |
| ov-stop | Uitgeschreven na de 1e: vanaf de volgende maand niet meer reizen; uiterlijk de 10e stopzetten bij een ophaalautomaat (r1, r2 kamer 4, 4.1, A4, B4, cijfer 4). | [DUO studentenreisproduct stopzetten](https://duo.nl/particulier/studentenreisproduct-stopzetten.jsp) (no page date shown): "Wordt u per de 1e van de maand uitgeschreven? Dan hebt u vanaf diezelfde maand geen recht meer op het reisproduct. Wordt u later uitgeschreven? Dan hebt u vanaf de volgende maand geen recht meer."; "U mag vanaf de eerste van deze maand al niet meer reizen met uw reisproduct. En u moet uw studentenreisproduct uiterlijk op de 10e dag van deze maand stopzetten." | [DUO stoppen met uw opleiding](https://duo.nl/particulier/opleiding-stoppen-of-wijzigen/index.jsp): "Dan moet u hem zelf stopzetten bij een ophaalautomaat. Doe dit vóór of op de 10e dag van de 1e maand waarin u er geen recht meer op hebt." (both DUO; no Rijksoverheid page with the 10th found, see Uncertainties 2) | No end date known; DUO announces a move to OVpay |
| sf-stop | Teacher detail kamer 4: studiefinanciering uiterlijk op de 1e van de maand stopzetten in Mijn DUO; eerst uitschrijven bij de school. | [DUO studiefinanciering stopzetten](https://duo.nl/particulier/studiefinanciering-stopzetten.jsp): "Zet uw studiefinanciering uiterlijk stop op de 1e dag van de maand waarin u geen studiefinanciering meer wilt of mag ontvangen." | DUO stoppen met uw opleiding: "Regel eerst uw uitschrijving. Dit doet u bij uw opleiding (mbo)" | No end date known |
| ov-schuld | Teacher detail kamer 4: te laat stopzetten en reizen geeft een ov-schuld, € 96,09 en € 192,21 per halve maand. | DUO studentenreisproduct stopzetten: "In de 1e maand nadat uw recht op het studentenreisproduct is afgelopen, is de ov-schuld € 96,09 per halve maand. Gebruikt u het ná die 1e maand, dan is de schuld € 192,21 per halve maand." | DUO stoppen met uw opleiding (same amounts) | Amounts: re-check January 2027 |
| eerstejaars | Stop je in je 1e jaar met beurs, na het vo, en stopt je studiefinanciering voor 1 februari? Dan worden beurs en reisproduct van dat jaar een gift; niet als je dat schooljaar weer prestatiebeurs voor niveau 3 of 4, of studiefinanciering voor hbo of universiteit, krijgt (r3 kamer 4, 4.2 and its situation "Kim begint dit schooljaar geen andere opleiding.", teacher detail kamer 4). Difference between the sources (Revision 2, fact check A): for the vo route DUO names only "niet opnieuw prestatiebeurs voor een mbo-opleiding op niveau 3 of 4"; Wsf 2000 art. 4.11 also excludes "studiefinanciering ... voor hoger onderwijs" in the same studiejaar. The lesson follows the law. | [DUO stoppen in uw 1e jaar](https://duo.nl/particulier/opleiding-stoppen-of-wijzigen/stoppen-in-je-eerste-jaar.jsp) (no page date shown): "U hoeft uw prestatiebeurs (basisbeurs, aanvullende beurs en studentenreisproduct) niet terug te betalen als uw studiefinanciering stopt voor 1 februari."; "Van voortgezet onderwijs naar vervolgopleiding: U komt van het voortgezet onderwijs. U krijgt in een studiejaar voor het eerst prestatiebeurs voor een mbo-opleiding waarvoor u voor de eerste keer staat ingeschreven ... Uw studiefinanciering is vóór 1 februari gestopt. Als u stopt met mbo 3 of 4, krijgt u in hetzelfde studiejaar niet opnieuw prestatiebeurs voor een mbo-opleiding op niveau 3 of 4."; "Een studiejaar voor mbo loopt van 1 augustus tot en met 31 juli."; "U kunt 1 keer gebruikmaken van de eerstejaarsregeling voor mbo" | Wsf 2000 art. 4.11: "Indien een mbo-student in het eerste jaar van een opleiding voor het eerst prestatiebeurs beroepsonderwijs geniet, in dat studiejaar ophoudt studiefinanciering te genieten vóór 1 februari, en niet over datzelfde studiejaar opnieuw studiefinanciering voor het volgen van een opleiding niveau 3 of 4 dan wel voor hoger onderwijs krijgt toegekend, wordt ... de over dat studiejaar toegekende prestatiebeurs beroepsonderwijs omgezet in een gift."; art. 1.1 "studiejaar ... b. in het beroepsonderwijs: tijdvak dat aanvangt op 1 augustus"; DUO stoppen met uw opleiding: "Behalve als u stopt in het 1e jaar van uw opleiding. Dan kunt u misschien gebruikmaken van de eerstejaarsregeling." | No end date known |
| switch-gift | Diploma niveau 3 of 4 binnen 10 jaar: alle prestatiebeurs van niveau 3 en 4 wordt een gift, ook van een eerdere opleiding (r4 kamer 4, 4.3). | DUO gift: "Haalt u binnen de diplomatermijn een diploma niveau 3 of 4, dan worden alle jaren prestatiebeurs die u hebt gehad voor niveau 3 of 4 een gift." | Wsf 2000 art. 4.10 lid 1: "Indien een mbo-student binnen de diplomatermijn beroepsonderwijs het afsluitend examen van een opleiding niveau 3 of 4 met goed gevolg heeft afgelegd, wordt de aan hem ingevolge artikel 4.7, eerste lid, toegekende prestatiebeurs beroepsonderwijs omgezet in een gift."; lid 3 (the rest of the period is a gift for a new niveau 3 or 4 programme) | No end date known |
| wisselen | Teacher detail kamer 4: nieuwe opleiding doorgeven voor de uitschrijfdatum; overbrugging bij hoogstens 4 maanden; mbo naar hbo: nieuw reisproduct en nieuwe diplomatermijn. | [DUO nieuwe opleiding](https://duo.nl/particulier/opleiding-stoppen-of-wijzigen/van-opleiding-veranderen.jsp): "Geef uw nieuwe studie door vóór de uitschrijfdatum van uw oude opleiding."; "Wisselt u van opleiding en is de periode tussen uw oude en nieuwe opleiding maximaal 4 maanden? Dan kunt u in de tussenliggende maanden meestal studiefinanciering krijgen." | DUO hoelang recht op het studentenreisproduct: "Stapt u over van mbo naar hbo? Dan krijgt u helemaal opnieuw een reisproduct ... Ook begint uw diplomatermijn van 10 jaar opnieuw." | No end date known |
| ts | FAQ only: tegemoetkoming scholieren is voor 18+ in het vo, niet voor het mbo. | [DUO tegemoetkoming scholieren, voor wie](https://duo.nl/particulier/tegemoetkoming-scholieren/voor-wie.jsp): "Doet u voltijd vmbo, havo, vwo, vavo, praktijkonderwijs of vso en bent u 18 jaar of ouder? Dan kunt u tegemoetkoming scholieren krijgen." | DUO voorwaarden: "dan valt u de eerste 2 leerjaren van deze route onder het voortgezet onderwijs (vo-fase) en komt u misschien in aanmerking voor tegemoetkoming scholieren. Daarna valt u meestal onder het mbo" (doorlopende leerroute vmbo-mbo) | No end date known |
| bijverdienen | FAQ only: geen grens voor bijverdienen. | Rijksoverheid studiefinanciering mbo: "Studenten mogen onbeperkt bijverdienen. Er geldt geen bijverdiengrens meer." | (single source; DUO page "bijverdienen" not read) | No end date known |
| leeftijd-30 | Teacher detail kamer 1: jonger dan 30 als je studiefinanciering ingaat. | DUO voorwaarden: "U moet jonger zijn dan 30 als uw studiefinanciering ingaat." | Wsf 2000 art. 2.3 lid 3 | No end date known |

## [verify] items (none is in a scored question)

1. **[verify] Eerstejaarsregeling for a student who had the reisproduct before 18.** Under Wsf 2000 art. 4.6b the reisproduct of an under-18 niveau 3 or 4 student is already a prestatiebeurs, so the "1e jaar met prestatiebeurs" may be the year the student was 16, not the first year with a beurs. This is the reading of art. 4.6b with art. 4.11; neither DUO nor Rijksoverheid says it for this case. Not in the pupil text: Kim (4.2) came straight from havo at 18. The teacher detail of kamer 4 does not mention it; add it there once DUO confirms. Fact check A (7 Nov 2026): not resolved, keep open.
2. **[verify] Gift of the under-18 reisproduct.** DUO and Rijksoverheid say the mbo 3-4 reisproduct becomes a gift with a diploma within 10 years, without an age split; Wsf 2000 art. 4.10 lid 1 converts the prestatiebeurs "ingevolge artikel 4.7, eerste lid", and art. 4.6b begins "Onverminderd artikel 4.7, eerste en tweede lid". That the under-18 months are converted too is the plain reading but not stated in so many words. Teacher detail kamer 3 says only that the under-18 reisproduct is a prestatiebeurs and starts the 10 years (both sourced). Fact check A: resolved in part (DUO gift: "Ook als u in deze jaren het studentenreisproduct had, maar geen basisbeurs of aanvullende beurs."; art. 4.6b is "onverminderd artikel 4.7, eerste ... lid"); the teacher text is sufficient. Keep as a note.
3. **Resolved (Revision 2): the lesgeld regeling for 2026-2027.** Stcrt. 2025, 29035 sets € 1.511 (and cursusgeld € 314 and € 762) from 1 augustus 2026; three sources now. Row lesgeld-bedrag.
4. **Resolved (Revision 2): cursusgeld from 18.** Uitvoeringsbesluit Les- en cursusgeldwet 2000 art. 13 lid 1: no cursusgeld when the cursist is under 18 at the start of the studiejaar. The teacher text was right; row lesgeld-18.
5. **New in Revision 2: lesgeld 2027-2028 (€ 1.554).** Rijksoverheid only; no DUO page or Staatscourant regeling found. Teacher text only, marked "volgens de Rijksoverheid" with "controleer dit in de zomer van 2027 op duo.nl".

## Uncertainties and things left out

1. **2027 amounts on one organisation (verified, not [verify]).** Basisbeurs € 110,76 / € 361,44 and lening € 241,27 (kamer 2, 2.1, cijfer 2) were read on the DUO bedragen page (update 5 Nov 2026), the body that pays them. The Wsf 2000 consolidation still has the 1 January 2026 values (it confirms DUO's 2026 table), and the ministeriële regeling for 2027 was not found. At the January 2027 check, look for the 2027 regeling in the Staatscourant or a 2027 DUO handout. (Same situation as the havo lesson's 2027 amounts.)
2. **Not measured:** timing (26 minutes for 12 questions and 1,662 room words is scaled from the mbo model, not timed) and readability (no score; sentence and option lengths checked by script).
3. **Single-organisation rules in scored questions.** The reisproduct stop rule (4.1, A4, B4, cijfer 4) is on two DUO pages but on no Rijksoverheid page or law article found today (Wsf 2000 art. 3.7 leaves the details to paragraph 3.7 and lower rules, not read). DUO runs the product, so the rule is used; a reviewer who wants two organisations should read the Regeling studiefinanciering 2000 on the reisproduct.
4. **The 1st-of-quarter exception** (18 on 1 januari, 1 april, 1 juli or 1 oktober: studiefinanciering from that day, Wsf 2000 art. 2.3 lid 1 onder b 2°) is not on screen; no question or check item uses such a date. DUO's own sentence ("vanaf het kwartaal na uw 18e verjaardag") does not cover it either.
5. **Kamer 2 leaves out the aanvullende beurs maximum** because it depends on lesgeld in a way that is hard at A2/B1 (see the amounts table). The teacher detail has both maxima.
6. **ROC Zeestad** name check was done for the other mbo lesson on 7 Nov 2026 and not re-run; Zeestad C.V. and Zeestad Beheer exist in Den Helder (project-wide note in `eerste-bijbaan-mbo.md`, Uncertainties 8).
7. **Left out on purpose:** uitwonend as a question (most mbo students live at home; FAQ only); the toeslag eenoudergezin; the levenlanglerenkrediet; studiefinanciering abroad; the 48-month rule between mbo and hbo; the absence rule of Wsf 2000 art. 4.3 (niveau 1 and 2: 5 weeks absent without reason turns studiefinanciering into a lening); tegemoetkoming scholieren (FAQ only, as asked); the specialistenopleiding (2 extra years).
8. **Option "De lening van DUO" (2.2).** If parents earn more, a student may borrow the missing aanvullende beurs extra (DUO bedragen). With parents who earn little, that extra lening does not arise, so the option stays wrong; a reviewer may still prefer another distractor.

## Review (author's own check, 7 November 2026)

- **Script check of the data file** (`node` over every pupil string): no pupil sentence over 15 words, no option over 10 words, no explanation over 2 sentences or 28 words, no em or en dash; in all 12 room questions and 8 check items the right option is not the longest by characters or words and shares its first word with another option. First run found 6 problems, all fixed in the data and this spec: 2.2 right option longest by words (distractor "De lening" became "De lening van DUO"), A2 the same ("na je verjaardag" became "na je 18e verjaardag"), the lead (20 words, split in two sentences), the kwartaal gloss (18 words, cut), clue 3 (16 words, "hoeft Ruben nooit terug te betalen" became "zijn voor Ruben een gift") and explanation 4.3 (20 words in one sentence, split).
- **Defensibility pass:** each room question has one right answer under the rule on screen and the situation (see the Defensibility lines). Added after the pass: 2.3 situation "Je bol-opleiding loopt door tot 2029" (without it a student who finishes in July 2027 never pays lesgeld, and "Nooit" could be argued).
- **Lock:** 4029, digits from 1.2 (april), 2.1 (€ 110), 3.3 (12) and 4.1 (september).
- **Revision 2 script check:** same checks pass; the right option is the only shortest in 3 of the 18 pick items (3.2 by one character, A4, B1), down from 8 (1.3, 3.1, 3.2, 4.3, A3, B3, A4, B1). Words: 1,662 in the rooms, 2,133 in total.
- **Fact check A** (7 Nov 2026): PASS, 0 ERROR, 5 RISK, all applied in Revision 2.
- **Not done:** check B, persona gate, playtest, KvK re-check, timing.

## Changelog

- Revision 2 (7 Nov 2026), after fact check A (PASS, 0 ERROR, 5 RISK), spec and data edited together:
  1. Eerstejaarsregeling (RISK 1): situation 4.2 is now "Kim begint dit schooljaar geen andere opleiding." (was "Kim begint dit schooljaar niet opnieuw op niveau 3 of 4."); the teacher detail of kamer 4 adds "en ook geen studiefinanciering voor hbo of universiteit" (Wsf 2000 art. 4.11); source row eerstejaars names the difference between DUO and the law. The answer stays "Nee: Kim stopt voor 1 februari".
  2. Lesgeld 2027-2028 (RISK 2): teacher detail kamer 2 and FAQ now say € 1.554 "volgens de Rijksoverheid" / "noemt de Rijksoverheid" and "controleer dit in de zomer van 2027 op duo.nl"; amounts table marks it Rijksoverheid only.
  3. Source rows (RISK 3): lesgeld-bedrag cites Stcrt. 2025, 29035 (lesgeld € 1.511, cursusgeld € 314 and € 762); lesgeld-18 cites Uitvoeringsbesluit art. 13 lid 1; lesgeld-vergoeding no longer claims a sentence the detail does not have. Data: source `stcrtLesgeld` added (also on 2.3), `ublcw` renamed to art. 2, 3a en 13. [verify] 3 and 4 resolved.
  4. Gloss (RISK 4): kamer 1 "Studiefinanciering: een beurs of lening van DUO voor je opleiding." (was "geld van DUO voor je opleiding").
  5. Option lengths (RISK 5): 1.3 b "Ja: wel een lening" (was "Ja: maar alleen een lening"); 3.1 c "Niets" (was "Niets, ook de lening niet"); 3.2 b "Die betaalt Milan terug" (was "Die betaalt Milan altijd terug"); 4.3 a "Die betaal je terug" (was "Die betaal je terug, met rente"); A3 d and B3 d "Niets" (was "Niets: met een diploma is alles een gift"). The right option is now the only shortest in 3 of 18 pick items; the content rules say at most 4.
- Revision 1 (7 Nov 2026): first version.
