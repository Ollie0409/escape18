# Escape "Je eerste stem" (content spec, ID voorstel: ESC-STEM)

Rev 1. Regels geldig voor: de verkiezingen voor de Provinciale Staten en de waterschappen van woensdag 17 maart 2027 (the story plays from 1 februari to 17 maart 2027); gecontroleerd op 8 november 2026; validUntil: 31 maart 2027. validUntil is the election day plus two weeks: after the election the dates in every room are history, and the next Provinciale Staten election (2031) needs a new revision. No amounts in pupil text, so the lesson sets `staleText` "Let op: sommige data kunnen verouderd zijn." (README). Every date in pupil text is official: kiesraad.nl and rijksoverheid.nl name woensdag 17 maart 2027 (sources ksPS, ksWs, roVerk; the Kiesraad calendar ksKal lists it as "DAG VAN STEMMING"). All other dates follow from the Kieswet and the Kiesraad calendar.

Official election date (verified 8 November 2026): **woensdag 17 maart 2027**, Provinciale Staten and algemene besturen van de waterschappen, on the same day (Kiesraad, Provinciale Statenverkiezingen: "De volgende verkiezingen voor de Provinciale Staten zijn op 17 maart 2027"; Kiesraad, Waterschapsverkiezingen: "De volgende waterschapsverkiezingen zijn op 17 maart 2027"; Rijksoverheid, Verkiezingen: "Op woensdag 17 maart 2027 zijn de verkiezingen voor de Provinciale Staten en de waterschappen"). Dag van kandidaatstelling maandag 1 februari 2027 (Kieswet art. F 1 lid 1; ksKal); stemming on the 44th day after it (Kieswet art. J 1 lid 1). ProDemos adds that the kiescolleges (Caribisch Nederland, niet-ingezetenen) and the eilandsraden are elected the same day (pdOverzicht); those are not in the lesson.

Release gate: on the day of publication, on maandag 1 februari 2027 (kandidaatstelling) and on maandag 1 maart 2027, re-read: (1) roNws2 and roProef: which gemeenten use the new, smaller ballot on 17 maart 2027 (r4 room 4, care point 4, FAQ); (2) ksHulp and the Kieswet art. J 28: whether the bill "Hulp in het stemhokje" is in force (FAQ only; the Kieswet version of 1 January 2027 read today has no change to J 28); (3) roMacht: it still says "De deadline hiervoor is inmiddels verstreken" for the form route, a leftover of an earlier election (Onzeker); (4) ksKal, roKwijt, roNodig and roWaar for the deadlines vrijdag 12 maart and dinsdag 16 maart 12.00 uur (V2.2, r3 and r4 room 2, r5 room 3); (5) kwL and ksVolmacht: the minister is reviewing the volmacht system (roNws1); a change before March 2027 would hit room 3 and C3, B3, digit 3. Then update `checked`, `CHECKED_ON` in `tests/spec-compare.js` and the second audience line.

Doelgroep en moment: havo 5 en vwo 6 (pupils around 18, many of whom vote for the first time on 17 maart 2027); also usable in mbo niveau 3 en 4 (B1 text, no school-type specific content; the teacher screen says "leerling" by default, `teacher.noun` is not set because the main audience is havo/vwo). Lesvenster: from 1 februari 2027 (kandidaatstelling) to 16 maart 2027; best in the weeks of 1 or 8 maart, when the stempassen arrive and the deadlines of 12 and 16 maart are still ahead. Earlier is fine too: the story dates are fixed. Maatschappijleer, burgerschap (mbo) or mentoruur/LOB. Curriculum anchor: maatschappijleer havo, examenprogramma (examenblad 2027 page, which opens the 2007 programme), Domein C "Parlementaire democratie", subdomein C1 "de structuur van de representatieve democratie in Nederland uitleggen op gemeentelijk, provinciaal en landelijk niveau" and "voorbeelden van politieke rechten die inwoners van Nederland hebben, herleiden tot artikelen in de Grondwet" (mlHavo; schoolexamen, not CE); mbo: Examen- en kwalificatiebesluit beroepsopleidingen WEB, bijlage 1, 2.1 "De politiek-juridische dimensie": "de participatie in formele zin (stemmen bij officiële verkiezingen)" and "de kenmerken en het functioneren van een parlementaire democratie" (ekb, version 1 August 2026); LOB/mentoruur: practical life skills around turning 18 (no formal anchor claimed). No exam item is claimed. Lesduur 45 minuten, escape 26 minuten, stop op minuut 32 (same timing as Verzekerd, Geld terug and De rekening die blijft liggen).

Format as ESC-KAMER and De rekening die blijft liggen: four rooms, 3 questions per room, one retry with a nudge, a hint that costs 30 seconds, one digit per room, one lock of four digits, then the end check, the end screen and the plan. Pupil text is Dutch B1, Escape 18 tone, no em or en dashes. Readability rules (as in De rekening die blijft liggen): sentences of 15 words or fewer, options of 10 words or fewer, explanations of at most 2 sentences and 28 words. Rules come only from the source table at the end. All pages and law texts read on 8 November 2026.

Word count (script, 8 Nov 2026; words with a letter or digit, same counter as De rekening die blijft liggen, which it reads as 1,669): 1,711 words of pupil text in the four rooms (titles, intros, documents with their labels, rule boxes, hard words, situations, prompts, options, nudges, hints, explanations, clues, digit nudges, remember lines); about 2,200 with the lead, the fiction line, both check forms, the debrief, the plan and the slip. The first draft had 2,019 room words; cuts are listed in the changelog. The rooms sit just above 1,700; room 3 (volmacht and kiezerspas) carries the most rules.

Neutrality (hard rule of this lesson): no party name, no candidate, no opinion on any voting choice, no plan of any body judged good or bad, and no line that encourages or discourages voting. "Stemmen is niet verplicht" (r4 room 1) and the neutrality line say so. The stemhulp chat says "een partij" and never which; the folder lists tasks only. Real public bodies named where a rule applies: de gemeente, de Kiesraad, ProDemos, de Provinciale Staten, het waterschap, de Eerste Kamer. ProDemos's StemWijzer is named only in the teacher detail and the source table, never in pupil text, and no other stemhulp is named.

Rule boxes (`room.rules`): every rule a pupil needs on the first try is in the room's rule box, the situation or the room's documents. Each digit clue shows the facts it needs, names its lock position and uses a new case. Known errors of earlier lessons, avoided from the start:
- No absolute rule where the source has an exception: "Op het gewone stembiljet" (r1 room 4), because 11 gemeenten are invited to pilot a new ballot on 17 maart 2027 (r4 room 4); "Met je stempas voor de Provinciale Staten" (r5 room 2), because a waterschap stempas may not work in every stembureau.
- One defensible answer per question: each situ states the fact that would otherwise open a second answer (V1.1 nationality and residence; V1.2 residence; V2.2 the day, zaterdag 13 maart; V4.1 "het gewone stembiljet"; V3.3 the prompt names the Provinciale Staten).
- Hints point to a place or a method, never to the option; no retry pointer highlights a line that holds the answer (V1.3 points to the 14-day line g3, not to a date).
- Option shapes (checked by script): in every question and check item the right option is not the longest, not the only one with its first word, and has at most 10 words. Screen positions of the right answers 2, 4, 1, 3, 1, 4, 2, 3, 4, 1, 3, 2: each position three times, never the same position twice in a row.
- No order words ("beide", "allebei", "geen van", "bovenstaande", "optie c") in any pupil text, so no question needs `keepOrder`.
- No unverified fact in a scored question: the pilot ballot gemeenten, the help-in-the-stemhokje bill and the Eerste Kamer date are in no question, check item or explanation.

Sensitivity: not every pupil may vote (age, nationality), and voting choices are private. The lesson asks nobody whether they may vote, will vote or how they vote; care points 1 to 3, the FAQ and the lesson plan tell the teacher the same. The slip asks no choice and is the pupil's own.

Why this lesson: many pupils in havo 5 and vwo 6 turn 18 before 17 maart 2027 and get their first stempas. The practical steps (age on the day, stempas, ID up to 5 years expired, volmacht, kiezerspas, filling in the ballot) are concrete, checkable and the same for every pupil; the political content is left to the pupil. Existing free materials of ProDemos (Stemplein, Scholierenverkiezingen, the Stembegeleider; pdVerk) focus on the election itself; this escape trains reading the rules and deadlines with fictional documents. Teachers can use both.

Lead: "Voor het eerst stemmen? Weet wie mag stemmen, wat je meeneemt en hoe je het biljet invult."

The lead is used on the start screen and the site card (spec-compare reads it from the spec).

Fiction line (shown once at the start):
"Lina, Milan, Sanne, Joris, Ans en de documenten zijn verzonnen. De regels en de data zijn echt. De les zegt niet op wie je stemt en ook niet of je gaat stemmen."

Neutrality line (teacher screen; its first sentence also closes the fiction line, so it is on the start screen):
"De les zegt niet op wie je stemt en ook niet of je gaat stemmen. Ze laat zien hoe stemmen werkt."

Fictional on purpose: the people Lina (18), Milan, Sanne (19, Belgian), Joris (20, Lina's brother) and buurvrouw Ans (first names only, no surnames, no town, no school); the groepsapps, the letter of "De gemeente (verzonnen voorbeeld)", the stempas and identiteitskaart extracts, the back of the stempas and the folder. No real gemeente, province or waterschap is named in pupil text, so no real letter or document is imitated; each document is plain text labelled "verzonnen". Common Dutch first names without surnames identify nobody; no name check was needed (no companies).

Story time: maandag 1 februari 2027 (room 1; dag van kandidaatstelling); woensdag 3 maart (last day the stempassen arrive, V1.3); donderdag 4 maart (room 2); maandag 8 maart (room 3); vrijdag 12 maart (written deadline for a new stempas, a schriftelijke volmacht and a kiezerspas); zaterdag 13 maart (V2.2 situ); dinsdag 16 maart 12.00 uur (balie deadline); woensdag 17 maart 2027 (room 4, election day). Check dates: geboren 16 en 18 maart 2009 (C1, B1); geldig tot 10 januari 2024 en 1 februari 2022 (C2, B2). All weekdays from the Kiesraad calendar (ksKal).

Code: **2331** (room digits 2, 3, 3, 1; not 1725, 2073, 2348, 2797, 2824, 3231, 3521, 4029, 4379, 5423 or 9623). Teacher screen: show it only inside the closed Antwoordblad, never on the projected part.

## Leerdoelen

1. De leerling weet wie mag stemmen voor de Provinciale Staten en het waterschap, en dat je leeftijd op de dag van de stemming telt.
2. De leerling weet wanneer de stempas komt, welk identiteitsbewijs geldt en wat je doet als je stempas kwijt is.
3. De leerling kan uitleggen hoe stemmen bij volmacht en met een kiezerspas werkt, met de regels en deadlines.
4. De leerling kan een stembiljet geldig invullen, weet in neutrale woorden waarover de Provinciale Staten en het waterschap gaan en weet dat een stemhulp alleen een suggestie geeft.

---

## Kamer 1. Mag ik al stemmen? (maandag 1 februari 2027)

**Intro:** "Het is maandag 1 februari 2027. Lina (18) leest de klassenapp over de verkiezingen."

### Document 1a: klas (type: chat, kind: "Klassenapp (verzonnen)", id: klas)
Name: "Klas 6B (verzonnen)". Sub: "groepsapp".
- m1 (them, 16:02) "Milan: Mogen wij op 17 maart al stemmen?"
- m2 (me, 16:03) "Ik word 18 op 17 maart!"
- m3 (them, 16:04) "Milan: Ik word pas 18 op 20 maart."
- m4 (them, 16:05) "Sanne: Ik ben 19. Ik heb alleen de Belgische nationaliteit."

### Document 1b: brief (type: letter, kind: "Brief (verzonnen)", id: brief)
From: "De gemeente (verzonnen voorbeeld)". Place: "maandag 1 februari 2027". Greeting: "Beste inwoner,".
- g1 "Op woensdag 17 maart 2027 kiest u de Provinciale Staten en het waterschap."
- g2 "U krijgt twee stempassen, één per verkiezing."
- g3 "Die komen uiterlijk 14 dagen voor de verkiezingen bij u thuis."
Sign: "Team Verkiezingen".

Design note: the chat gives the three birthdays and Sanne's nationality; the letter gives the 14-day rule for the stempas, so V1.3 needs counting, not reading. The letter is plain text labelled "verzonnen voorbeeld", from no named gemeente, and imitates no real letter. r4 ("Stemmen is niet verplicht", roWie) is there for neutrality: the lesson explains, it does not push. Residence on the dag van kandidaatstelling (1 februari 2027) is not a pupil rule; each situ states it, and the teacher detail has the rule.

**Moeilijke woorden (plain):** "Nationaliteit: van welk land je burger bent. Provinciale Staten: het parlement van de provincie. Waterschap: het bestuur voor dijken en water. Stempas: je uitnodiging om te stemmen. Uiterlijk: niet later dan."

Split over the documents: doc klas has "Nationaliteit", doc brief has "Provinciale Staten" to "Uiterlijk".

**Rule box (`rules`, title "Regels"):**
- r1 "Je mag stemmen als je op de dag van de stemming 18 of ouder bent."
- r2 "Voor de Provinciale Staten moet je ook Nederlander zijn."
- r3 "Voor het waterschap mag ook een EU-burger stemmen, of iemand met een geldige verblijfsvergunning."
- r4 "Stemmen is niet verplicht."

Note on the rules: r1 is Kieswet art. B 2 and B 2a ("op de dag van de stemming de leeftijd van achttien jaar hebben bereikt") and ksStemmen ("18 jaar of ouder zijn op de verkiezingsdag"). r2 is B 2 ("mits zij Nederlander zijn"). r3 is roWie ("U heeft de Nederlandse nationaliteit of die van een andere EU-lidstaat, of u heeft een geldige verblijfsvergunning") and gmRdam ("een EU-nationaliteit of een geldige verblijfsvergunning"); the law (B 2a with B 3 lid 2 onder a) says lawful residence on named grounds of the Vreemdelingenwet, so the pupil wording follows the Rijksoverheid and no question tests the non-EU case. r4 is roWie ("Stemmen is niet verplicht.").

### Vraag 1.1 (id: lina, kind: pick, docs: klas)
- Situ: "Lina en Milan zijn Nederlander. Ze wonen in dezelfde provincie."
- Prompt: "Wie van hen mag op 17 maart stemmen?"
- Options:
  - a "Alleen Milan"
  - b "Lina en Milan"
  - c "Niemand: ze zijn te jong"
  - d "Alleen Lina"
- Correct: d
- Retry pointer: rule r1.
- Nudge: "Lees regel 1. Hoe oud is ieder op 17 maart?"
- Hint (30 s): "Wie is op 17 maart al 18?"
- Explanation: "Lina wordt 18 op 17 maart, de dag van de stemming. Milan is dan nog 17."
- Sources: ksStemmen, roWie, kwB
- Note: one defensible answer: r1 and the birthdays in the chat (Lina 17 maart, Milan 20 maart 2009 implied by "pas 18 op 20 maart"). The situ states nationality and residence, so no other rule can open a second answer. "Alleen Milan" reverses the rule; "Niemand" is the misconception that you must be 18 before the day. The right option is not the longest (c is) and shares "Alleen" with a.

### Vraag 1.2 (id: sanne, kind: pick, docs: klas)
- Situ: "Sanne woont al jaren in de provincie en in het waterschap."
- Prompt: "Voor welke verkiezing mag Sanne stemmen?"
- Options:
  - a "Alleen voor de Provinciale Staten"
  - b "Voor de Provinciale Staten en het waterschap"
  - c "Nergens, want ze is geen Nederlander"
  - d "Alleen voor het waterschap"
- Correct: d
- Retry pointer: rules r2 and r3.
- Nudge: "Lees regel 2 en 3. Wat geldt voor iemand uit België?"
- Hint (30 s): "België is een EU-land."
- Explanation: "Voor de Provinciale Staten moet je Nederlander zijn. Voor het waterschap mag een EU-burger ook stemmen."
- Sources: roWie, kwB, gmRdam
- Note: Sanne is Belgian (EU), 19, and lives in the province and the waterschap (situ), so only the waterschap rule applies (Kieswet B 2 against B 2a; roWie; gmRdam). c is the misconception that only Dutch nationals vote anywhere. Right option shares "Alleen" with a; b is the longest.

### Vraag 1.3 (id: thuis, kind: pick, docs: brief)
- Prompt: "Wanneer heeft Lina haar stempassen uiterlijk thuis?"
- Options:
  - a "Maandag 1 februari"
  - b "Woensdag 17 maart"
  - c "Woensdag 10 maart"
  - d "Woensdag 3 maart"
- Correct: d
- Retry pointer: doc brief line g3.
- Nudge: "Lees de laatste zin van de brief."
- Hint (30 s): "Tel 14 dagen terug vanaf 17 maart."
- Explanation: "14 dagen voor woensdag 17 maart is woensdag 3 maart."
- Sources: kwJ, roNodig, ksKal
- Note: J 7 lid 2: "Ten minste veertien dagen voor de dag van de stemming". 14 days before woensdag 17 maart is woensdag 3 maart; roNodig and ksKal say "uiterlijk 3 maart 2027". The pointer goes to the counting line g3, not to a line with the date. a is the dag van kandidaatstelling, c one week, b the election day. All options are weekday plus date; the right one is not the longest (c and b are).

### Cijfer kamer 1
- Clue: "Het 1e cijfer: drie Nederlanders zijn geboren op 2, 17 en 18 maart 2009. Een vierde is geboren in 2010. Hoeveel van de vier mogen op 17 maart 2027 stemmen?"
- Digit: **2** (born 2 and 17 maart 2009 are 18 on 17 maart 2027; 18 maart 2009 is 17 that day; 2010 is too young; Kieswet B 2 and roWie "geboren vóór 18 maart 2009"; all facts in the clue; `clueDocs: ['rules']`).
- Clue retry: "Lees regel 1. Wie is op 17 maart 2027 al 18?"
- Clue wrong (`clueWrong`): "3": "Wie op 18 maart is geboren, is op 17 maart nog 17."
- Remember: "Je leeftijd op de dag van de stemming telt. Mag je stemmen? Dan komt je stempas vanzelf."

---

## Kamer 2. Stempas en ID (donderdag 4 maart 2027)

**Intro:** "Het is donderdag 4 maart 2027. Lina heeft haar twee stempassen. Ze zoekt haar identiteitskaart."

### Document 2a: stempas (type: table, id: stempas)
Title: "Stempas Provinciale Staten (stukje)". From: "Gemeente (verzonnen voorbeeld)".
- s2 "Stembureaus open" | "7.30 tot 21.00 uur"
- s3 "Neem mee" | "Deze stempas en je identiteitsbewijs"
- s4 "Kwijt?" | "Vraag op tijd een nieuwe aan bij je gemeente."
Note: "Verzonnen. Een echte stempas ziet er anders uit."

### Document 2b: id (type: table, id: id)
Title: "Identiteitskaart van Lina (stukje)". From: "Verzonnen voorbeeld".
- k1 "Naam" | "Lina"
- k2 "Geldig tot" | "9 juli 2024"
Note: "Verzonnen."

Design note: the stempas table is a fictional extract (no layout, no logo, labelled). The opening hours 7.30 to 21.00 are real (Kieswet J 1 lid 2; roWaar "De meeste stembureaus zijn op 17 maart 2027 open van 7.30 uur tot 21.00 uur") and in no question, because some stembureaus have other hours. V2.2 plays on zaterdag 13 maart, the day after the written deadline, so only the balie route is left. V2.3 is limited to the Provinciale Staten (see its note).

**Moeilijke woorden (plain):** "Stembureau: de plek waar je stemt. Balie: het loket van de gemeente. Verlopen: niet meer geldig."

Split over the documents: doc stempas has "Stembureau" to "Balie", doc id has "Verlopen".

**Rule box (`rules`, title "Regels"):**
- r1 "Neem je stempas en je paspoort, identiteitskaart of rijbewijs mee."
- r2 "Je identiteitsbewijs mag op de dag van de stemming maximaal 5 jaar verlopen zijn."
- r3 "Stempas kwijt? Vraag een nieuwe aan. Een formulier moet uiterlijk vrijdag 12 maart bij de gemeente zijn."
- r4 "Aan de balie kan het tot dinsdag 16 maart, 12.00 uur."
- r5 "Met je stempas voor de Provinciale Staten stem je in een stembureau in je gemeente."

Note on the rules: r1 is ksId and roNodig ("Dit kan uw paspoort, identiteitskaart of rijbewijs uit Nederland zijn"; EU, EER and Swiss documents are in the teacher detail). r2 is ksId ("Het identiteitsbewijs mag maximaal 5 jaar verlopen zijn op de verkiezingsdag") and roNodig ("Staat daar 18 maart 2022 of een datum daarna?"); the Kieswet article for the 5 years was not found in the law text read today (Onzeker), the rule itself is in two official sources. r3 and r4 are Kieswet art. J 8 lid 3 ("Het schriftelijk verzoek dient op de vijfde dag voor de dag van de stemming te zijn ontvangen. Het mondeling verzoek wordt uiterlijk op de dag voor de stemming om twaalf uur gedaan.") with the dates of ksKal and roKwijt ("tot dinsdag 16 maart 2027 12.00 uur"; "uiterlijk op 12 maart 2027 ontvangen"). r5 is J 5 lid 1 and ksStempas ("in elk stembureau binnen de gemeente").

### Vraag 2.1 (id: idkaart, kind: pick, docs: id)
- Prompt: "Mag Lina op 17 maart stemmen met deze identiteitskaart?"
- Options:
  - a "Nee, de kaart is verlopen"
  - b "Nee, ze heeft een paspoort nodig"
  - c "Ja, maar alleen met haar rijbewijs erbij"
  - d "Ja, hij is minder dan 5 jaar verlopen"
- Correct: d
- Retry pointer: rule r2.
- Nudge: "Lees regel 2. Hoe lang is de kaart al verlopen?"
- Hint (30 s): "Tel de jaren van juli 2024 tot maart 2027."
- Explanation: "De kaart is sinds juli 2024 verlopen. Dat is minder dan 5 jaar, dus het mag."
- Sources: ksId, roNodig
- Note: Geldig tot 9 juli 2024 is 2 years and 8 months before 17 maart 2027, so it is less than 5 years expired (ksId; roNodig: "Staat daar 18 maart 2022 of een datum daarna? Dan mag u het identiteitsbewijs nog gebruiken"). a and b are the misconceptions; c adds a condition no rule names and is the longest.

### Vraag 2.2 (id: kwijt, kind: pick, docs: stempas)
- Situ: "Het is zaterdag 13 maart. Lina is haar stempas kwijt."
- Prompt: "Wat kan ze nu nog doen?"
- Options:
  - a "Ze stuurt nu een formulier op"
  - b "Ze stemt op 17 maart met alleen haar ID-kaart"
  - c "Ze kan niets meer doen"
  - d "Ze gaat tot dinsdag 12.00 uur naar de balie"
- Correct: d
- Retry pointer: rules r3 and r4.
- Nudge: "Lees regel 3 en 4. Welke datum is al voorbij?"
- Hint (30 s): "Zet 12, 13 en 16 maart op een rij."
- Explanation: "Een formulier moest uiterlijk vrijdag 12 maart binnen zijn. Aan de balie kan het nog tot dinsdag 12.00 uur."
- Sources: kwJ, roKwijt, ksKal
- Note: Zaterdag 13 maart: the written route closed on vrijdag 12 maart (J 8 lid 3, "op de vijfde dag voor de dag van de stemming"; ksKal), the balie stays open until dinsdag 16 maart 12.00 uur (roKwijt). b is wrong: without a stempas, kiezerspas or volmachtbewijs nobody is admitted (J 24 lid 1 onder b). The right option is not the longest (b is).

### Vraag 2.3 (id: waar, kind: pick, docs: stempas)
- Prompt: "Waar kan Lina met deze stempas stemmen?"
- Options:
  - a "Alleen bij het stembureau naast haar huis"
  - b "In elk stembureau in Nederland"
  - c "In elk stembureau in haar provincie"
  - d "In een stembureau in haar gemeente"
- Correct: d
- Retry pointer: rule r5.
- Nudge: "Lees regel 5."
- Hint (30 s): "Een stempas werkt niet overal."
- Explanation: "Met deze stempas stemt Lina in een stembureau in haar gemeente. Elders heb je een kiezerspas nodig."
- Sources: ksStempas, kwJ
- Note: J 5 lid 1 and ksStempas ("Met een stempas kan de kiezer in elk stembureau binnen de gemeente stemmen"). The question is about the stempas for the Provinciale Staten, because a waterschap stempas may not work in every stembureau of a gemeente with several waterschappen (roWaar). c is the kiezerspas rule of room 3. Right option shares "In" with b and c; a is the longest.

### Cijfer kamer 2
- Clue: "Het 2e cijfer: vier ID-kaarten zijn geldig tot 1 mei 2021, 2023, 2026 en 2029. Met hoeveel mag je op 17 maart 2027 stemmen?"
- Digit: **3** (valid until 1 mei 2023, 2026 and 2029 are fine; 1 mei 2021 is more than 5 years before 17 maart 2027; roNodig "18 maart 2022 of een datum daarna"; `clueDocs: ['rules']`).
- Clue retry: "Lees regel 2. Tel per kaart de jaren."
- Clue wrong (`clueWrong`): "4": "Eén kaart is meer dan 5 jaar verlopen."
- Remember: "Neem je stempas en je ID mee. Je ID mag maximaal 5 jaar verlopen zijn."

---

## Kamer 3. Iemand anders laten stemmen (maandag 8 maart 2027)

**Intro:** "Het is maandag 8 maart 2027. Lina is op 17 maart op werkweek. Haar broer Joris (20) studeert elders."

### Document 3a: achter (type: contract, id: achter)
Title: "Achterkant van de stempas (stukje)". Parties: "Verzonnen voorbeeld".
- v1 "Volmacht" | "Ik geef de kiezer hieronder toestemming om voor mij te stemmen."
- v2 "Wie tekent?" | "Jij en de gemachtigde."
Note: "Verzonnen en korter gemaakt."

### Document 3b: app (type: chat, kind: "Appgroep (verzonnen)", id: app)
Name: "Lina, Joris en buurvrouw Ans (verzonnen)". Sub: "groepsapp".
- f1 (me, 19:10) "Ans, wil jij op 17 maart voor mij stemmen?"
- f2 (them, 19:12) "Ans: Ja hoor. Ik woon ook in jouw gemeente."
- f3 (them, 19:15) "Joris: Ik wil stemmen in mijn studentenstad. Dat is een andere gemeente in onze provincie."

Design note: the back of the stempas is a fictional two-line extract. Lina asks Ans herself (f1), which keeps V3.1 apart from the ronselen case of V3.2. Joris studies in another gemeente in the same province, so a kiezerspas is the one answer for the Provinciale Staten. The schriftelijke volmacht (form, deadline vrijdag 12 maart 2027, cannot be withdrawn) is in the teacher detail and the FAQ, not in a pupil rule, to keep reading short.

**Moeilijke woorden (plain):** "Volmacht: toestemming om voor een ander te stemmen. Gemachtigde: de kiezer die voor jou stemt. Kopie: een afdruk of duidelijke foto. Kiezerspas: een pas om in een andere gemeente te stemmen."

Split over the documents: doc achter has "Volmacht" to "Kopie", doc app has "Kiezerspas".

**Rule box (`rules`, title "Regels"):**
- r1 "Kun je niet zelf stemmen? Machtig dan op de achterkant van je stempas een kiezer uit je gemeente."
- r2 "De gemachtigde neemt een kopie van jouw ID mee. Hij stemt tegelijk voor zichzelf en voor maximaal 2 anderen."
- r3 "Alleen jij mag iemand vragen om voor je te stemmen. Een ander mag daar niet om vragen."
- r4 "Stem je in een andere gemeente in je provincie? Dan heb je een kiezerspas nodig."
- r5 "Een kiezerspas vraag je aan met een formulier tot vrijdag 12 maart. Aan de balie tot dinsdag 16 maart, 12.00 uur."

Note on the rules: r1 is Kieswet art. L 1 and L 14 lid 1 ("indien de gemachtigde stemt in de gemeente van de volmachtgever") and roMacht ("in dezelfde gemeente woont als u"); both sign (L 14 lid 3, doc achter). r2 is L 17 lid 2 (kopie of the ID), L 3 ("uitsluitend tegelijk met zijn eigen stem") and L 4 ("niet meer dan twee aanwijzingen als gemachtigde"); roMacht allows a clear photo on a phone. r3 is roMacht ("Andere mensen mogen dus niet aan u vragen of zij voor u mogen stemmen") and ksVolmacht (ronselen, Kieswet Z 4). r4 is K 1 lid 1 and ksKiezerspas ("Met een kiezerspas kan een kiezer binnen de gehele provincie stemmen"). r5 is K 3 lid 3 with the dates of ksKal and roNodig.

### Vraag 3.1 (id: ans, kind: pick, docs: achter, app)
- Prompt: "Mag Ans met Lina's stempas voor Lina stemmen?"
- Options:
  - a "Nee, want Ans is geen familie"
  - b "Nee, dat kan alleen met een formulier"
  - c "Ja, maar dan mag Ans zelf niet stemmen"
  - d "Ja, Ans woont in dezelfde gemeente"
- Correct: d
- Retry pointer: rule r1.
- Nudge: "Lees regel 1. Waar woont Ans?"
- Hint (30 s): "Kijk in de appgroep."
- Explanation: "Ans woont in Lina's gemeente. Dus kan Lina haar machtigen op de achterkant van de stempas."
- Sources: kwL, roMacht, ksVolmacht
- Note: Onderhandse volmacht: the gemachtigde votes in the gemeente of the volmachtgever (L 14 lid 1; roMacht "in dezelfde gemeente woont als u"); Ans says she lives in Lina's gemeente; Lina asks herself (f1), so it is not ronselen. b is false because the stempas route exists; c contradicts L 3 (Ans votes at the same time for herself). Right option shares "Ja" with c; c is the longest.

### Vraag 3.2 (id: ronselen, kind: pick, docs: none)
- Situ: "Een onbekende vraagt Joris: 'Geef mij je stempas, dan stem ik voor je.'"
- Prompt: "Mag die persoon dat vragen?"
- Options:
  - a "Ja, als Joris de achterkant tekent"
  - b "Ja, als die persoon in zijn gemeente woont"
  - c "Nee, alleen een stembureaulid mag dat"
  - d "Nee, alleen Joris mag iemand vragen"
- Correct: d
- Retry pointer: rule r3.
- Nudge: "Lees regel 3."
- Hint (30 s): "Wie moet de vraag stellen?"
- Explanation: "Alleen de kiezer zelf mag iemand vragen. Om een volmacht vragen heet ronselen en is strafbaar."
- Sources: roMacht, ksVolmacht
- Note: Ronselen: roMacht ("Andere mensen mogen dus niet aan u vragen of zij voor u mogen stemmen ... dat is strafbaar"), ksVolmacht ("Het initiatief tot het geven van een volmacht moet bij de kiezer liggen"). a and b name conditions that do not make the request lawful; c names a person who has no such power. Right option shares "Nee" with c; b is the longest. `docs: none`, so only the rule box shows.

### Vraag 3.3 (id: kiezerspas, kind: pick, docs: app)
- Prompt: "Wat heeft Joris nodig om daar te stemmen voor de Provinciale Staten?"
- Options:
  - a "Alleen zijn eigen stempas"
  - b "Een volmacht van zijn ouders"
  - c "Een nieuwe stempas uit die stad"
  - d "Een kiezerspas"
- Correct: d
- Retry pointer: rule r4.
- Nudge: "Lees regel 4. Waar ligt zijn studentenstad?"
- Hint (30 s): "Lees wat Joris schrijft."
- Explanation: "Joris stemt in een andere gemeente in zijn provincie. Daarvoor heeft hij een kiezerspas nodig."
- Sources: ksKiezerspas, roNodig, kwK
- Note: K 1 lid 1 and ksKiezerspas ("Met een kiezerspas kan een kiezer binnen de gehele provincie stemmen"); Joris writes that his studentenstad is another gemeente in the same provincie. a is the stempas misconception, b mixes up volmacht, c does not exist. The prompt names the Provinciale Staten, because a waterschap kiezerspas only works inside the waterschap. Right option is the shortest and shares "Een" with b and c.

### Cijfer kamer 3
- Clue: "Het 3e cijfer: Ans stemt voor zichzelf en heeft 2 volmachten. Hoeveel stembiljetten voor de Provinciale Staten krijgt ze?"
- Digit: **3** (her own ballot plus two volmacht ballots for one election; roMacht "U krijgt dus maximaal 3 stembiljetten mee in het stemhokje"; L 3 and L 4; `clueDocs: ['rules']`).
- Clue retry: "Lees regel 2. Tel haar eigen stem ook mee."
- Clue wrong (`clueWrong`): "2": "Ans stemt ook voor zichzelf."
- Remember: "Kun je zelf niet stemmen? Machtig zelf een kiezer uit je gemeente. Elders stemmen? Vraag een kiezerspas."

---

## Kamer 4. In het stemhokje (woensdag 17 maart 2027)

**Intro:** "Het is woensdag 17 maart 2027. Sanne gaat stemmen voor het waterschap. Eerst leest ze een folder."

### Document 4a: folder (type: contract, id: folder)
Title: "Waarover stem je? (folder, verzonnen)". Parties: "Verzonnen voorbeeld".
- p1 "Provinciale Staten" | "Ze beslissen mee over natuur, provinciale wegen en de bus in de regio. Ze kiezen ook de Eerste Kamer."
- p2 "Waterschap" | "Het zorgt voor dijken, genoeg en schoon water en het zuiveren van afvalwater."

### Document 4b: chat (type: chat, kind: "Chat (verzonnen)", id: chat)
Name: "Sanne (verzonnen)". Sub: "chat".
- c1 (them, 08:40) "Ik deed een stemhulp. Er kwam een partij bovenaan."
- c2 (me, 08:41) "Moet je nu op die partij stemmen?"

Design note: Q4.1 has `docs: none`, so only the rule box shows. The folder names no party and no plan; it lists tasks in the words of Rijksoverheid and the sample gemeente page. The chat shows only that a stemhulp gave "a party", never which one. r4 covers the pilot ballot in a few gemeenten (roNws2) without naming them in pupil text, because participation was not confirmed (Onzeker).

**Moeilijke woorden (plain):** "Afvalwater: vies water uit huizen en bedrijven. Blanco: je kiest niemand. Ongeldig: je stem telt niet mee. Stemhulp: een website met stellingen over politiek. Suggestie: een idee, geen opdracht."

Split over the documents: doc folder has "Afvalwater" to "Ongeldig", doc chat has "Stemhulp" to "Suggestie".

**Rule box (`rules`, title "Regels"):**
- r1 "Maak op het gewone stembiljet één vakje rood. Gebruik het rode potlood of de rode pen."
- r2 "Ongeldig: een andere kleur, meer dan één vakje rood, of je naam op het biljet."
- r3 "Laat je het biljet leeg? Dan stem je blanco. Vergis je je? Vraag dan één keer een nieuw biljet."
- r4 "Sommige gemeenten testen een nieuw stembiljet. Volg daar de uitleg van de gemeente."
- r5 "Een stemhulp vergelijkt jouw antwoorden met partijen. De uitkomst is een suggestie. Jij kiest zelf."
- r6 "Neutrale uitleg vind je bij je gemeente, de Kiesraad en ProDemos."

Note on the rules: r1 is Kieswet art. J 26 lid 1 ("door een wit stipje, geplaatst vóór de kandidaat van zijn keuze, rood te maken"), Kiesbesluit art. J 5 lid 2 ("een lessenaar met rood schrijfmateriaal") and roHoe ("Kleur het vakje rood"); "het gewone stembiljet" because of r4. r2 is N 7 lid 3 and ksVb ("Is er een andere kleur gebruikt? Dan is de stem ongeldig."; more than one box; "Als er een naam op het stembiljet staat, is de stem in principe ongeldig"). r3 is N 7 lid 1 (blanco) and J 27 lid 1 ("eenmaal een nieuw biljet"). r4 is roNws2 and roProef; which gemeenten take part on 17 maart 2027 is not confirmed (Onzeker), so no gemeente is named. r5 is pdVerk ("kunnen vervolgens zien met welke politieke partij ze de meeste standpunten gemeen hebben"); "suggestie" and "Jij kiest zelf" follow from the personal, secret vote (roHoe "U stemt in uw eentje in het geheim"; J 26 "de kandidaat van zijn keuze"). r6 names the neutral sources of this lesson: the gemeente (gmRdam as the sample page), the Kiesraad (ksPS) and ProDemos (pdVerk).

### Vraag 4.1 (id: biljet, kind: pick, docs: none)
- Situ: "Sanne krijgt het gewone stembiljet en een rood potlood."
- Prompt: "Welk ingevuld biljet is geldig?"
- Options:
  - a "Twee vakjes rood"
  - b "Eén vakje blauw"
  - c "Eén vakje rood en haar naam erop"
  - d "Eén vakje rood"
- Correct: d
- Retry pointer: rules r1 and r2.
- Nudge: "Lees regel 1 en 2. Wat maakt een stem ongeldig?"
- Hint (30 s): "Streep eerst de ongeldige biljetten weg."
- Explanation: "Eén vakje rood is geldig. Een andere kleur, twee vakjes of een naam maken de stem ongeldig."
- Sources: kwN7, ksVb, roHoe
- Note: Kieswet N 7 and ksVb: "Het stembiljet mag in Nederland alleen met de kleur rood worden ingevuld"; more than one box is ongeldig; a name on the ballot is "in principe ongeldig". The situ says "het gewone stembiljet", so the pilot ballot (two boxes) cannot open a second answer. Right option is the shortest and shares "Eén" with b and c.

### Vraag 4.2 (id: dijk, kind: pick, docs: folder)
- Situ: "In het nieuws: 'Nieuwe bus naar het ziekenhuis' en 'Dijk wordt hoger'."
- Prompt: "Over welk bericht beslist het waterschap?"
- Options:
  - a "Over de nieuwe bus"
  - b "Over de bus en de dijk"
  - c "Over de hogere dijk"
- Correct: c
- Retry pointer: doc folder lines p1 and p2.
- Nudge: "Lees de folder."
- Hint (30 s): "Wie zorgt voor de bus?"
- Explanation: "Het waterschap zorgt voor de dijken. Over de bus in de regio beslist de provincie mee."
- Sources: roWs, roPS, ksWs
- Note: roWs ("beheren van dijken en sluizen"), roPS and gmRdam (provincie: "Openbaar vervoer: zorgen voor bus- en streekvervoer"; Rotterdam: "openbaar vervoer, natuur, provinciale wegen"). Three options, no order word. The pointer marks the two folder lines that pupils compare (p1 and p2). The right option is not the longest (b is). Neutral wording: what each body decides, no view on any plan.

### Vraag 4.3 (id: stemhulp, kind: pick, docs: chat)
- Prompt: "Wat betekent de uitkomst van de stemhulp voor Sanne?"
- Options:
  - a "Ze moet nu op die partij stemmen"
  - b "Haar stem is al uitgebracht"
  - c "De gemeente krijgt haar antwoorden te zien"
  - d "Ze kiest zelf: het is een suggestie"
- Correct: d
- Retry pointer: rule r5.
- Nudge: "Lees regel 5."
- Hint (30 s): "Wie beslist er in het stemhokje?"
- Explanation: "Een stemhulp geeft een suggestie. Sanne kiest zelf, en niemand ziet wat ze stemt."
- Sources: pdVerk, roHoe
- Note: pdVerk: "Gebruikers van StemWijzer reageren hierop en kunnen vervolgens zien met welke politieke partij ze de meeste standpunten gemeen hebben." The vote is secret and the voter chooses alone (roHoe: "U stemt in uw eentje in het geheim"). c is false (pdSW: no personal data needed, no profiling). No party is named anywhere. Right option shares "Ze" with a; c is the longest.

### Cijfer kamer 4
- Clue: "Het 4e cijfer: Sanne vergist zich en krijgt een nieuw biljet. Ze vergist zich weer. Hoeveel nieuwe biljetten kan ze in totaal krijgen?"
- Digit: **1** (J 27 lid 1: "Deze verstrekt hem op zijn verzoek eenmaal een nieuw biljet"; ksBlanco; `clueDocs: ['rules']`).
- Clue retry: "Lees regel 3."
- Clue wrong (`clueWrong`): "2": "Een nieuw biljet krijg je maar één keer."
- Remember: "Maak op het gewone biljet één vakje rood. Een stemhulp geeft een suggestie. Jij kiest zelf."

---

## Plan: Mijn stemcheck

The plan is personal: each pupil makes their own, on paper and, if they want, on the end screen (existing engine plan: `when`, `then`, `within`, own text). It stays on the screen only: never logged, never sent, never stored. Every line works for a pupil who may not vote yet and says nothing about whether or how to vote.

Engine data:
- `plan.intro`: "Kies één ding. Zet er een moment bij."
- `plan.when`: ["ik 18 word", "mijn stempas thuiskomt", "ik op de dag zelf weg ben"]
- `plan.then`: ["kijk ik tot wanneer mijn ID geldig is", "leg ik mijn stempas op een vaste plek", "lees ik hoe een volmacht werkt"]
- `plan.within`: ["een dag", "een week", "twee weken"]
- Own text field (existing): pupils may type their own "dan".

Paper slip `slip` "Mijn stemcheck" (optional, one per pupil, two per A4; printed from the teacher screen; `screen` not set, so the end screen shows a read-only reminder). Slip intro (`slip.intro`): "Dit is van jou. Je hoeft het aan niemand te laten zien." Six fields:
"Mijn stemcheck
1. Op 17 maart 2027 ben ik 18 of ouder: ja / nee (omcirkel)
2. Mijn identiteitsbewijs is geldig tot: ...
3. Hier leg ik mijn stempas neer, als ik er een krijg: ...
4. Ik weet hoe een volmacht werkt: ja / nee / een beetje (omcirkel)
5. Eén vraag die ik nog heb over stemmen: ...
6. Hier zoek ik het antwoord: gemeente / Kiesraad / ProDemos (omcirkel)
Neutrale uitleg: je gemeente, kiesraad.nl en prodemos.nl."

The slip asks no voting choice, no intention to vote and no nationality (sensitivity). Data: fields 1, 4, 6 label up to the colon, hint the choices, lines 0; fields 2 and 3 lines 1; field 5 lines 2. Footer: the neutral sources (ksPS, pdVerk). Field 3 says "als ik er een krijg", so it fits pupils without a stempas.

---

## Start- en eindcheck: twee parallelle vormen, A en B (elk 4 vragen, één per kamer, enkele keuze, score 0 tot 4)

No feedback during the check. Each question works without the room's documents and rule box. Question n of form A and question n of form B test the same rule at the same difficulty with a different case and the other outcome. Counterbalance as in ESC-KAMER (random A or B first, engine v3). No check item repeats a room question. In each form no letter is right more than twice in a row (A: b, c, a, b; B: a, c, b, c).

### Vorm A

| # | Kamer | Vraag | Opties | Goed | Regel en bron |
|---|---|---|---|---|---|
| C1 | 1 Mag ik stemmen | "Je bent Nederlander en wordt 18 op 16 maart 2027. Mag je op 17 maart stemmen voor de Provinciale Staten?" | a Nee, je moet op 1 februari al 18 zijn; b Ja, op 17 maart ben je al 18; c Ja, maar alleen voor het waterschap | b | leeftijd op de dag van de stemming (kwB, roWie) |
| C2 | 2 Stempas en ID | "Op je paspoort staat 'geldig tot 10 januari 2024'. Mag je ermee stemmen op 17 maart 2027?" | a Nee, een verlopen paspoort telt niet; b Ja, maar alleen samen met je rijbewijs; c Ja, het is minder dan 5 jaar verlopen | c | 5 jaar verlopen (ksId, roNodig) |
| C3 | 3 Volmacht | "Je buurman stemt al voor 1 ander. Jullie wonen in dezelfde gemeente. Mag hij ook voor jou stemmen?" | a Ja, het maximum is 2 anderen; b Nee, hij mag maar voor 1 ander stemmen; c Ja, voor zoveel mensen als hij wil | a | maximaal 2 volmachten (kwL, roMacht) |
| C4 | 4 Stemhokje | "Je maakt op het gewone stembiljet twee vakjes rood. Wat gebeurt er met je stem?" | a De eerste keuze telt; b De stem is ongeldig; c De stem telt als blanco | b | meer dan één vakje is ongeldig (kwN7, ksVb) |

### Vorm B

| # | Kamer | Vraag | Opties | Goed | Regel en bron |
|---|---|---|---|---|---|
| B1 | 1 Mag ik stemmen | "Je bent Nederlander en wordt 18 op 18 maart 2027. Mag je op 17 maart stemmen voor de Provinciale Staten?" | a Nee, op 17 maart ben je nog 17; b Ja, je bent dan bijna 18; c Nee, je moet al 18 zijn op 1 februari | a | leeftijd op de dag van de stemming (kwB, roWie) |
| B2 | 2 Stempas en ID | "Op je identiteitskaart staat 'geldig tot 1 februari 2022'. Mag je ermee stemmen op 17 maart 2027?" | a Nee, verlopen kaarten tellen nooit; b Ja, het is minder dan 5 jaar verlopen; c Nee, het is meer dan 5 jaar verlopen | c | 5 jaar verlopen (ksId, roNodig) |
| B3 | 3 Volmacht | "Je buurvrouw stemt al voor 2 anderen. Jullie wonen in dezelfde gemeente. Mag ze ook voor jou stemmen?" | a Ja, als jij de stempas tekent; b Nee, het maximum is 2 anderen; c Nee, alleen familie mag voor je stemmen | b | maximaal 2 volmachten (kwL, roMacht) |
| B4 | 4 Stemhokje | "Je maakt op het gewone stembiljet één vakje blauw. Wat gebeurt er met je stem?" | a De stem telt gewoon; b De stem telt als blanco; c De stem is ongeldig | c | alleen rood telt (kwN7, ksVb) |

Parallel checks: C1 and B1 apply the age rule with a birthday one day before and one day after 17 maart (yes and no); C2 and B2 apply the 5-year rule to an ID that expired 3 years and 2 months before and one that expired 5 years and 6 weeks before (yes and no); C3 and B3 apply the maximum of 2 volmachten to someone with 1 and with 2 (yes and no; both state "dezelfde gemeente"); C4 and B4 apply the validity rule to two boxes and to a blue box (both ongeldig). In B1, c gives the right "Nee" with a false reason (1 februari is the date for residence, not age); in B2, a gives "Nee" with a false reason (expired IDs do count up to 5 years); this keeps the right option from being the only one with its first word. Option shapes checked by script.

Score: 1 point per right answer, 0 to 4, before and after, shown per pair on the end screen.

---

## Lesplan voor de docent (45 minuten)

Teacher screen, first line (`teacher.audience`): "Voor havo 5 en vwo 6, ook bruikbaar in mbo niveau 3 en 4. Voor maatschappijleer, burgerschap of het mentoruur. Het gaat over hoe stemmen praktisch werkt."
Second line (`teacher.audience`): "Gecontroleerd op 8 november 2026, voor de verkiezingen van woensdag 17 maart 2027. Geef de les vóór die dag. Kijk vóór gebruik op kiesraad.nl of de data nog kloppen."

| Lesminuut | Duur | Onderdeel | Wat je doet |
|---|---|---|---|
| 0 tot 4 | 4 | Uitleg en inloggen | Zet de link en de klascode al op het bord voordat de les begint. Zeg: de mensen en de documenten zijn verzonnen. De regels en de data zijn echt. De les zegt niet op wie je stemt. Leerlingen werken met z'n tweeën op één scherm. Deel de papiertjes "Mijn stemcheck" uit als je ze gebruikt. |
| 4 tot 6 | 2 | Startcheck | Elk tweetal beantwoordt vier vragen (vorm A of B) voordat de klok start. Geef geen hints. |
| 6 tot 32 | 26 | Escape | Start de klastimer. Tweetallen spelen vier kamers en schrijven elk cijfer op. Klaar voor de tijd? Geef de extra vraag van de kamer. Loopt een tweetal achter? Wijs naar de regel, niet naar het antwoord. |
| 32 | | Stop | Op minuut 32 stopt iedereen, ook wie nog niet klaar is. Lees de cijfers voor van je geprinte antwoordblad. Noem voor iedereen waar neutrale uitleg staat: de gemeente, kiesraad.nl en prodemos.nl. Alle tweetallen doen daarna de eindcheck. |
| 32 tot 35 | 3 | Stop en eindcheck | De andere vorm: vier vragen over dezelfde regels. Daarna ziet elk tweetal wat het goed had, voor en na. |
| 35 tot 39 | 4 | Nabespreken | Vraag met handopsteken: wie had bij de startcheck 3 of 4 goed? En bij de eindcheck? Vraag welke kamer het lastigst was en begin daar. Vraag niet wie mag of gaat stemmen. |
| 39 tot 44 | 5 | Mijn stemcheck | Iedereen kiest zijn eigen plan of vult het papiertje in. Niemand hoeft iets voor te lezen. Stel daarna de slotvraag. |
| 44 tot 45 | 1 | Reserve | Voor inloggen dat uitloopt. De escape stopt altijd op minuut 32. |

Total 45 minutes: 4 + 2 + 26 + 3 + 4 + 5 + 1 = 45. `minutes: 26`.
Materials: een apparaat per tweetal (laptop, Chromebook of telefoon), pen en papier voor de cijfers, een digibord of beamer, een kalender van maart 2027 op het bord of op papier (voor kamer 1 en 2). 1 papiertje "Mijn stemcheck" per leerling (vooraf geprint, als je het gebruikt).

Header line: `teacher.level` "havo, vwo en mbo"; `teacher.groupExample` "havo 5"; `teacher.timers` [20, 22, 30] (the lesson's 26 minutes is added by the engine); `teacher.noun` not set (default "leerling", main audience havo/vwo). Topic wish (`wishes`): ["zorgverzekering", "belasting", "studiefinanciering", "wonen", "werk", "budget"]; there is no topic id for politics in `src/log.js` WISHES, and adding one is engine work (not done).

Timing estimate (desk estimate, not timed with pupils; the rekening playtest found desk estimates about 20 percent low): about 22 minutes for an average havo 5 pair, 29 for a weaker pair, 14 for a strong vwo 6 pair. Rooms 1 and 2 need counting days; room 3 has the most rules. A weaker pair may be stopped in room 4; the Stop row makes the teacher name the neutral sources for everyone. The extra question for fast pairs is the second part of each room's `discuss` prompt (answer in the teacherNote).

Tip voor de docent: Na twee foute antwoorden laat de les het goede antwoord zien. Een tweetal kan dus doorklikken zonder te lezen. Dat telt niet mee bij "In één keer goed". Zeg: goed lezen gaat sneller.

Care points ("Let op"):
1. "Blijf neutraal. Geef geen stemadvies en zeg niet op wie je zelf stemt. Noem geen partijen of kandidaten, ook niet als voorbeeld."
2. "De les moedigt stemmen niet aan en raadt het ook niet af. Stemmen is niet verplicht. Zeg het ook zo."
3. "Niet elke leerling mag stemmen: sommigen zijn nog geen 18 of geen Nederlander. Vraag niet wie mag stemmen of wie gaat stemmen."
4. "In een paar gemeenten is er misschien een proef met een nieuw stembiljet. Kijk vóór de les op de site van je gemeente."
5. "Kamer 1 en 2 vragen om dagen tellen. Laat tweetallen een kalender van maart 2027 gebruiken."
6. "De les is gemaakt voor de verkiezingen van 17 maart 2027. Gebruik hem na 31 maart 2027 niet zonder nieuwe controle."

Neutrality care point: care points 1 to 3 together; point 1 is the one printed first on the teacher sheet.

Note for developers: the stop at minute 32 uses the existing engine stop flow. The digits are never on the open lesson plan.

### Voor de docent, per kamer

Kern (`teacherNote`):
- Kamer 1: "Vraag niet wie mag stemmen of wie gaat stemmen. Goed antwoord op de gespreksvraag: zo is voor iedereen duidelijk wie mag stemmen. Extra: voor het waterschap hoef je geen Nederlander te zijn."
- Kamer 2: "Laat een kalender van maart 2027 zien. Goed antwoord op de gespreksvraag: zo weet het stembureau dat jij het bent. Extra: met een verklaring van vermissing en een pasje met je foto kun je toch stemmen."
- Kamer 3: "Zeg erbij dat ronselen strafbaar is. Goed antwoord op de gespreksvraag: zo stemt niemand onder druk voor een ander. Extra: Lina kan haar stempas terugvragen zolang Ans nog niet heeft gestemd."
- Kamer 4: "Noem geen partij en geef geen voorbeeld van een uitkomst. Goed antwoord op de gespreksvraag: zo kan niemand je dwingen of zien wat je stemt. Extra: blanco is een lege keuze, ongeldig is fout ingevuld."

Dit wordt vaak gevraagd (`teacher.faq`):
- "Mag ik als docent een stemadvies geven?" Antwoord: "Nee. Blijf neutraal. Geef geen stemadvies en zeg niet op wie je stemt, ook niet als leerlingen erom vragen. Wijs op neutrale uitleg van de gemeente, de Kiesraad en ProDemos."
- "Een leerling is nog geen 18 of geen Nederlander. Wat nu?" Antwoord: "De les werkt voor iedereen: de regels gelden ook bij latere verkiezingen. Wie geen Nederlander is, mag soms wel voor het waterschap stemmen. Vraag niet naar iemands nationaliteit."
- "Wat is het nieuwe stembiljet?" Antwoord: "Op 2 november 2026 schreef de Rijksoverheid dat 11 gemeenten zijn uitgenodigd om op 17 maart 2027 een nieuw, kleiner stembiljet te gebruiken. Daar kleur je een partij en een kandidaatnummer. Kijk op de site van je gemeente of dat bij jou zo is."
- "Mag je in het stemhokje een foto maken?" Antwoord: "Een foto van je eigen stembiljet mag. Fotografeer geen andere kiezers. Niemand mag je dwingen te laten zien wat je stemt."
- "Mag iemand helpen in het stemhokje?" Antwoord: "Nu alleen bij een lichamelijke beperking. Er is een wetsvoorstel voor hulp van een stembureaulid aan iedereen die erom vraagt. Op 8 november 2026 was dat nog geen wet. Kijk op kiesraad.nl of het intussen geldt."
- "Mijn ID is gestolen of kwijt. Kan ik stemmen?" Antwoord: "Ja, met een verklaring van vermissing van de gemeente en een pasje met je foto, zoals een ov-chipkaart met foto."
- "Moet mijn werkgever me laten stemmen?" Antwoord: "Ja, als stemmen niet buiten je werktijd kan. Je mag dan tot 2 uur weg om te stemmen."
- "Kan Lina haar volmacht nog intrekken?" Antwoord: "Bij een volmacht op de stempas wel: ze vraagt haar stempas terug voordat Ans stemt. Een volmacht met een formulier kan niet meer worden ingetrokken."
- "Wat is het verschil tussen blanco en ongeldig?" Antwoord: "Blanco: je laat het biljet leeg en kiest niemand. Ongeldig: het biljet is fout ingevuld. Blanco en ongeldige stemmen tellen mee voor de opkomst, niet voor de zetels."
- "Wat zijn goede antwoorden bij het nabespreken?" Antwoord: "Vraag 1: elk antwoord met een reden is goed. Vraag 2: zo kan niemand zien of bepalen wat je stemt. Vraag 3: de gemeente, kiesraad.nl en prodemos.nl."

FAQ notes (not shown): stemadvies: lesson policy (neutrality rule of this spec), no legal source claimed. Not 18 or not Dutch: kwB (B 2, B 2a, B 3), roWie. Nieuw stembiljet: roNws2 ("zijn dezelfde 11 gemeenten uitgenodigd om tijdens de Provinciale Staten- en waterschapsverkiezingen op 17 maart 2027 opnieuw met het nieuwe stembiljet te stemmen"), roProef, roNws1. Foto: Rijksoverheid, Wat mag er wel en niet in het stemhokje? ("Als u dat zelf wilt, mag u een selfie ('stemfie') maken"; read today, row roHoe). Hulp: Kieswet J 28 ("wegens zijn lichamelijke gesteldheid") and ksHulp ("Donderdag 2 juli 2026 heeft de Tweede Kamer het wetsvoorstel aangenomen ... zal naar verwachting per 1 januari 2027 in werking treden"); the Kieswet version of 1 January 2027 on wetten.overheid.nl (read today) changes only N 14 to N 21 and Z 21, not J 28, so the bill is not yet law [verify before use]. ID kwijt: Kieswet J 24 lid 2, roNodig ("Met een verklaring van vermissing kunt u toch stemmen ... Bijvoorbeeld een persoonlijke OV-chipkaart"). Werkgever: Kieswet J 10 ("niet meer dan twee uur"). Intrekken: Kieswet L 5. Blanco and ongeldig: ksBlanco ("Blanco stemmen en ongeldige stemmen worden wel meegenomen bij het bepalen van de opkomst").

Bronnen en uitzonderingen (`teacherDetail`, shown closed as "Bronnen bij deze kamer"; plain Dutch with short labels and source titles, no internal keys):
- Kamer 1: Kiesrecht Provinciale Staten: Nederlander, op de dag van de stemming 18 jaar of ouder, op de dag van de kandidaatstelling ingezetene van de provincie, niet uitgesloten van het kiesrecht (Kieswet art. B 2; Kiesraad, Stemmen). Kiesrecht waterschap: op de dag van de kandidaatstelling ingezetene van het waterschap en op de dag van de stemming 18; geen Nederlander nodig, maar wie geen EU-burger is, moet rechtmatig in Nederland verblijven (Kieswet art. B 2a en B 3 lid 2 onder a). De Rijksoverheid zegt: Nederlandse of EU-nationaliteit, of een geldige verblijfsvergunning, en geboren vóór 18 maart 2009 (Rijksoverheid, Wie mag stemmen bij de verkiezingen voor de Provinciale Staten en de waterschappen?). Dag van de kandidaatstelling: maandag 1 februari 2027; wie dan in de provincie staat ingeschreven, krijgt daar de stempas (Kiesraad, Verkiezingskalender). De gemeente registreert kiezers vanzelf via de BRP (Kiesraad, Kiesgerechtigdheid). Stempas: ten minste 14 dagen voor de stemming, dus uiterlijk woensdag 3 maart 2027; er zijn twee stempassen, één per verkiezing (Kieswet art. J 7; Rijksoverheid, Wat heb ik nodig om te stemmen). Stemmen is niet verplicht (Rijksoverheid, Wie mag stemmen). Op 17 maart 2027 zijn er ook verkiezingen voor de kiescolleges en de eilandsraden (ProDemos, Overzicht van verkiezingen); die zitten niet in de les.
- Kamer 2: Identiteitsbewijs: paspoort, identiteitskaart of rijbewijs uit Nederland; ook bepaalde documenten uit de EU, de EER en Zwitserland. Het mag op de verkiezingsdag maximaal 5 jaar verlopen zijn: geldig tot 18 maart 2022 of later (Kiesraad, Identificatie; Rijksoverheid, Wat heb ik nodig om te stemmen). Kwijt of gestolen: een schriftelijke bevestiging van de vermissing met een document op je naam met foto (Kieswet art. J 24 lid 2). Nieuwe stempas: schriftelijk, ontvangen op de vijfde dag voor de stemming (vrijdag 12 maart 2027), of mondeling tot de dag voor de stemming 12.00 uur (dinsdag 16 maart 2027), met een kopie van je ID (Kieswet art. J 8; Kiesraad, Verkiezingskalender; Rijksoverheid, Stempas kwijt of niet ontvangen). De oude stempas wordt dan ongeldig (Kieswet art. J 7a). Waar: met de stempas in een stemlokaal naar keuze in de gemeente en in het gebied van de verkiezing (Kieswet art. J 5; Kiesraad, Stempas). Voor het waterschap kan dat in een gemeente met meer waterschappen niet in elk stembureau (Rijksoverheid, Waar kan ik stemmen op 17 maart 2027?); daarom gaat vraag 3 over de stempas voor de Provinciale Staten. Stembureaus: 7.30 tot 21.00 uur (Kieswet art. J 1 lid 2).
- Kamer 3: Volmacht: wie verwacht niet zelf te kunnen stemmen, kan een andere kiezer machtigen; de kiezer wijst zelf de gemachtigde aan en zegt op wie of blanco (Kieswet art. L 1 en L 2). Onderhandse volmacht op de stempas: de gemachtigde stemt in de gemeente van de volmachtgever; beiden tekenen; de gemachtigde laat een kopie van het ID van de volmachtgever zien, ook op een telefoon (Kieswet art. L 14 en L 17; Kiesraad, Volmacht; Rijksoverheid, Hoe kan ik iemand anders vragen om voor mij te stemmen?). Tegelijk met de eigen stem, en per verkiezing hoogstens twee volmachten (Kieswet art. L 3 en L 4). Schriftelijke volmacht met een formulier: ontvangen op de vijfde dag voor de stemming, dus vrijdag 12 maart 2027; de gemachtigde moet kiezer zijn in het gebied van de verkiezing; niet in te trekken; een onderhandse volmacht wel, tot er gestemd is (Kieswet art. L 5, L 7 en L 8; Kiesraad, Verkiezingskalender). Ronselen is strafbaar; het initiatief ligt bij de kiezer (Kiesraad, Volmacht). Kiezerspas: stemmen in een stembureau naar keuze binnen het gebied van de verkiezing, voor de Provinciale Staten in de hele provincie; schriftelijk tot vrijdag 12 maart, mondeling tot dinsdag 16 maart 12.00 uur; kwijt is kwijt (Kieswet art. K 1, K 3 en K 4; Kiesraad, Kiezerspas). Voor het waterschap geldt een eigen kiezerspas, alleen binnen het waterschap (Rijksoverheid, Waar kan ik stemmen op 17 maart 2027?). De minister laat het volmachtstelsel onderzoeken; dat verandert nog niets voor maart 2027 (Rijksoverheid, nieuws 2 juli 2026).
- Kamer 4: Stembiljet: de kiezer maakt een wit stipje vóór de kandidaat van zijn keuze rood (Kieswet art. J 26); in het stemhokje ligt rood schrijfmateriaal (Kiesbesluit art. J 5 lid 2). Blanco: geen vakje rood en niets geschreven; ongeldig: geen ondubbelzinnige keuze door het rood maken van een stipje, of een bijvoeging waardoor de kiezer te herkennen is (Kieswet art. N 7). Alleen rood telt; twee of meer vakjes is ongeldig; een naam op het biljet is in principe ongeldig; een rood kruisje of vinkje in één vakje is geldig (Kiesraad, Voorbeelden blanco, geldige en ongeldige stemmen). Eén keer een nieuw biljet bij een vergissing (Kieswet art. J 27). Blanco en ongeldige stemmen tellen mee voor de opkomst, niet voor de zetels (Kiesraad, Blanco/ongeldig). Nieuw stembiljet: dezelfde 11 gemeenten als in 2026 zijn uitgenodigd om op 17 maart 2027 met het nieuwe, kleinere biljet te stemmen; daar kleur je een partij en een kandidaatnummer (Rijksoverheid, nieuws 2 november 2026; Rijksoverheid, Ontwikkelen nieuw stembiljet). Provinciale Staten: beslissen mee over ruimte, natuur, streekvervoer en provinciale wegen, en kiezen de Eerste Kamer (Rijksoverheid, Waar stem ik voor bij de Provinciale Statenverkiezingen?; Kiesraad, Provinciale Statenverkiezingen). Waterschap: dijken en sluizen, zuiveren van afvalwater, genoeg en schoon water (Rijksoverheid, Waar stem ik voor bij de waterschapsverkiezingen?; Waterschapswet art. 1). Stemhulp: gebruikers zien met welke partij ze de meeste standpunten gemeen hebben (ProDemos, Verkiezingen). Stemgeheim: je stemt alleen en in het geheim (Rijksoverheid, Stemmen bij verkiezingen: hoe werkt dat?).

## Antwoordblad

Answers are given as the text on screen, without letters.

| Kamer | Vraag | Goed antwoord |
|---|---|---|
| 1 | Wie mag stemmen | Alleen Lina |
| 1 | Welke verkiezing | Alleen voor het waterschap |
| 1 | Stempassen thuis | Woensdag 3 maart |
| 1 | **Cijfer** | **2** (2 en 17 maart 2009) |
| 2 | Verlopen ID | Ja, de kaart is minder dan 5 jaar verlopen |
| 2 | Stempas kwijt | Ze gaat tot dinsdag 12.00 uur naar de balie |
| 2 | Waar stemmen | In een stembureau in haar gemeente |
| 2 | **Cijfer** | **3** (2023, 2026 en 2029) |
| 3 | Volmacht aan Ans | Ja, want Ans woont in dezelfde gemeente |
| 3 | Om een stempas vragen | Nee, alleen Joris mag iemand vragen |
| 3 | Stemmen in een andere gemeente | Een kiezerspas |
| 3 | **Cijfer** | **3** (eigen stem plus 2 volmachten) |
| 4 | Geldig biljet | Eén vakje rood |
| 4 | Waarover beslist het waterschap | Over de hogere dijk |
| 4 | Uitkomst stemhulp | Ze kiest zelf: het is een suggestie |
| 4 | **Cijfer** | **1** (één keer een nieuw biljet) |
|  | **Code** | **2331** |

Start- en eindcheck vorm A: A1 Ja, op 17 maart ben je al 18; A2 Ja, het is minder dan 5 jaar verlopen; A3 Ja, het maximum is 2 anderen; A4 De stem is ongeldig. Vorm B: B1 Nee, op 17 maart ben je nog 17; B2 Nee, het is meer dan 5 jaar verlopen; B3 Nee, het maximum is 2 anderen; B4 De stem is ongeldig.

(The line under the table names form A "A1 to A4", as the other lessons do; the check item ids in the data stay C1 to C4, the convention spec-compare and the engine use for form A.)

## Nabespreken

Drie gespreksvragen (kies er één of twee als de tijd kort is):
1. "Welke regel verbaasde je het meest? Waarom?"
2. "Waarom stem je in Nederland alleen, in een hokje?"
3. "Waar vind je neutrale uitleg als je twijfelt over een regel?"

Per kamer (`discuss`):
- Kamer 1: "Waarom telt je leeftijd op de dag van de stemming? Extra voor snelle tweetallen: welk verschil zie je tussen de Provinciale Staten en het waterschap?"
- Kamer 2: "Waarom moet je je ID laten zien in het stembureau? Extra voor snelle tweetallen: wat doe je als je ID gestolen is?"
- Kamer 3: "Waarom mag een ander niet om jouw stempas vragen? Extra voor snelle tweetallen: kan Lina haar volmacht nog intrekken?"
- Kamer 4: "Waarom stem je alleen, in een hokje? Extra voor snelle tweetallen: wat is het verschil tussen blanco en ongeldig?"

Slotvraag: "Noem één ding dat Lina moet regelen als ze op 17 maart niet zelf kan stemmen."

Note: no prompt asks pupils whether they may vote, will vote or how they would vote (care points 1 to 3). The Slotvraag is about Lina. Sample answers for the debrief are in the FAQ, for the room prompts in the teacherNote.

---

## Engine fit

Supported now, no change needed (README v3, `lessons/rekening-blijft-liggen.js`): `letter` with `kind` and `note` (brief), `table` rows (stempas, id), `contract` with `parties` (achter, folder), `chat` with several senders as text prefixes (klas, app, chat), `plain` per document, room `rules` with numbered lines, `single` questions, `situ`, `pointTo` with `doc`/`line` (V1.3), `doc`/`lines` (V4.2) and `rule`/`rules`, `docs: []` (V3.2, V4.1, rule box still shown), `clueFull`, `clueDocs: ['rules']`, `clueRetry`, `clueWrong`, `where`, `teacherNote`, `teacherDetail`, `discuss`, `sources`, check forms A/B, the stop flow at minute 32, `teacher.plan` with `from`/`to`/`at`, `teacher.audience`, `teacher.faq`, `materials`, `tip`, `care`, `answers` with `format: 'text'`, `teacher.level`, `teacher.groupExample`, `teacher.timers`, `wishes`, `staleText`, the plan with `when`, `then`, `within` and own text, `slip` (six fields).

Checks for the data file (`lessons/je-eerste-stem.js`):
1. Fixed shuffles for all 12 room questions (the spec writes the right answer last). Screen positions of the right answers: 2, 4, 1, 3, 1, 4, 2, 3, 4, 1, 3, 2.
2. No option, prompt, nudge, hint, explanation, clue or check item uses an order word, so no question needs `keepOrder`.
3. Nothing is rendered as a link; no e-mail address, no real gemeente.
4. `staleText` "Let op: sommige data kunnen verouderd zijn." (no amounts in the lesson).
5. The slug is in `HIDE` in `build.js` (unlisted until review) and registered in `tests/spec-compare.js` (`FORMAT` A, `CHECKED_ON` 2026-11-08, `STOP_AT` 32), not in its default list.

Not supported, noted for the engine team (not built now): a topic id for politics or elections in `src/log.js` WISHES and `backend-v2/Code.gs`.

---

## Brontabel

Pages read on 8 November 2026 with curl (HTML converted to text with pandoc or a script, PDFs with pdftotext). Law texts read on wetten.overheid.nl in the version named (consolidated text); the Kieswet also in its version of 1 January 2027 to see the coming changes (only N 14 to N 21 and Z 21 change; nothing this lesson uses). nieuwstembiljet.nl returned 403; its facts come from the Rijksoverheid pages. "Valid until": when the rule is next expected to change; "Until 17 Mar 2027" means the page is written for this election.

| Key | Rule (as used) | Source 1 | Source 2 | Checked | Valid until |
|---|---|---|---|---|---|
| ksPS | Date of the Provinciale Statenverkiezing; PS elect the Eerste Kamer two to three months later. | [Kiesraad, Provinciale Statenverkiezingen](https://www.kiesraad.nl/verkiezingen/provinciale-staten): "De volgende verkiezingen voor de Provinciale Staten zijn op 17 maart 2027."; "Leden van de Provinciale Staten kiezen, samen met de leden van de kiescolleges, de Eerste Kamer." | roVerk | 8 Nov 2026 | Until 17 Mar 2027 |
| ksWs | Date of the waterschapsverkiezing; tasks of the waterschap. | [Kiesraad, Waterschapsverkiezingen](https://www.kiesraad.nl/verkiezingen/waterschappen): "De volgende waterschapsverkiezingen zijn op 17 maart 2027."; "Zo zorgen zij voor het beheer van dijken en sluizen, de juiste waterstand en voor zuivering van afvalwater." | roWs | 8 Nov 2026 | Until 17 Mar 2027 |
| ksKal | Calendar: kandidaatstelling maandag 1 februari 2027; stempassen "uiterlijk woensdag 3 maart 2027"; written requests (vervangende stempas, schriftelijke volmacht, kiezerspas) "uiterlijk vrijdag 12 maart 2027"; oral requests "uiterlijk dinsdag 16 maart 2027, 12:00 uur"; "woensdag 17 maart 2027 DAG VAN STEMMING". | [Kiesraad, Verkiezingskalender Provinciale Staten- en waterschapsverkiezingen 2027 (28 mei 2026)](https://www.kiesraad.nl/documenten/2026/05/28/verkiezingskalender-provinciale-staten--en-waterschapsverkiezingen-2027) | kwJ, kwK, kwL | 8 Nov 2026 | Until 17 Mar 2027 |
| ksStemmen | Kiesrecht PS: Dutch, 18 on election day, not excluded, living in the province on kandidaatstelling day; stempas at least 14 days before. | [Kiesraad, Stemmen](https://www.kiesraad.nl/verkiezingen/provinciale-staten/stemmen): "moeten kiezers de Nederlandse nationaliteit hebben, 18 jaar of ouder zijn op de verkiezingsdag en niet uitgesloten zijn van het kiesrecht"; "Kiezers ontvangen uiterlijk 14 dagen voor de verkiezingen op hun huisadres een uitnodiging om te stemmen: een stempas." | kwB | 8 Nov 2026 | No set date |
| ksKies (teacher only) | Registration as a voter is automatic (BRP). | [Kiesraad, Kiesgerechtigdheid](https://www.kiesraad.nl/verkiezingen/provinciale-staten/stemmen/kiesgerechtigdheid): "Dit gebeurt automatisch bij mensen die 18 jaar worden en bij nieuwe inwoners." | kwB | 8 Nov 2026 | No set date |
| ksStempas | Stempas works in every stembureau in the gemeente; vervangende stempas: written 5 days before, oral until 12.00 the day before. | [Kiesraad, Stempas](https://www.kiesraad.nl/verkiezingen/provinciale-staten/stemmen/stempas): "Met een stempas kan de kiezer in elk stembureau binnen de gemeente stemmen."; "Een schriftelijke aanvraag moet uiterlijk 5 dagen voor de stemming ontvangen zijn. Een mondelinge aanvraag kan tot één dag voor de stemming om 12.00 uur worden ingediend." | kwJ | 8 Nov 2026 | No set date |
| ksId | ID may be up to 5 years expired on election day; accepted documents. | [Kiesraad, Identificatie](https://www.kiesraad.nl/verkiezingen/provinciale-staten/stemmen/identificatie): "Het identiteitsbewijs mag maximaal 5 jaar verlopen zijn op de verkiezingsdag." | roNodig | 8 Nov 2026 | No set date |
| ksKiezerspas | Kiezerspas: vote anywhere in the province; written 5 days before, oral until 12.00 the day before; lost is lost. | [Kiesraad, Kiezerspas](https://www.kiesraad.nl/verkiezingen/provinciale-staten/stemmen/kiezerspas): "Met een kiezerspas kan een kiezer binnen de gehele provincie stemmen."; "krijgt geen nieuwe pas als de kiezerspas zoekraakt" | kwK | 8 Nov 2026 | No set date |
| ksVolmacht | Volmacht: same gemeente for the stempas route; at the same time as the own vote; maximum two; copy of ID (also on a phone); initiative with the voter; ronselen forbidden. | [Kiesraad, Volmacht](https://www.kiesraad.nl/verkiezingen/provinciale-staten/stemmen/volmacht): "Een onderhandse volmacht kan alleen worden gegeven aan een kiezer die in dezelfde gemeente woont."; "De gemachtigde persoon mag maximaal twee volmachten aannemen."; "Het initiatief tot het geven van een volmacht moet bij de kiezer liggen, en niet bij de gemachtigde." | kwL, roMacht | 8 Nov 2026 | Re-check (volmacht system under review) |
| ksBlanco (teacher only) | Blanco: no box; one new ballot after a mistake; blanco and ongeldig count for turnout. | [Kiesraad, Blanco/ongeldig](https://www.kiesraad.nl/verkiezingen/provinciale-staten/stemmen/blanco-ongeldig): "Deze maakt dit stembiljet onbruikbaar en geeft hem eenmaal een nieuw biljet."; "Blanco stemmen en ongeldige stemmen worden wel meegenomen bij het bepalen van de opkomst" | kwN7 | 8 Nov 2026 | No set date |
| ksVb | Only red counts; more than one box is ongeldig; a name on the ballot is in principle ongeldig; a red cross or tick in one box is geldig. | [Kiesraad, Voorbeelden blanco, geldige en ongeldige stemmen (Wanneer is een stem geldig?)](https://www.kiesraad.nl/site/binaries/site-content/collections/documents/2016/03/staatscourant-e.d/voorbeelden-blanco-geldige-en-ongeldige-stemmen/wanneer-is-een-stem-geldig.pdf): "Het stembiljet mag in Nederland alleen met de kleur rood worden ingevuld. Is er een andere kleur gebruikt? Dan is de stem ongeldig."; "Als er meer dan één stemvakje helemaal of voor een deel rood zijn gemaakt, is de stem ongeldig."; "Als er een naam op het stembiljet staat, is de stem in principe ongeldig." | kwN7 | 8 Nov 2026 | No set date (the new ballot from 2029 will change it) |
| ksHulp (teacher only) | Help in the stemhokje only for a physical disability; bill for help on request adopted by the Tweede Kamer on 2 July 2026, Eerste Kamer pending. | [Kiesraad, Hulp bij stemmen](https://www.kiesraad.nl/verkiezingen/provinciale-staten/stemmen/hulp-bij-stemmen): "Volgens de Kieswet is het verlenen van hulp bij stemmen alleen toegestaan op grond van een lichamelijke beperking."; "Het moet nog worden behandeld door de Eerste Kamer, maar zal naar verwachting per 1 januari 2027 in werking treden." | kwJ (J 28) | 8 Nov 2026 | Re-check (bill) |
| roVerk | Official date on rijksoverheid.nl. | [Rijksoverheid, Verkiezingen](https://www.rijksoverheid.nl/onderwerpen/verkiezingen): "Op woensdag 17 maart 2027 zijn de verkiezingen voor de Provinciale Staten en de waterschappen." | ksPS | 8 Nov 2026 | Until 17 Mar 2027 |
| roWie | Conditions for both elections; born before 18 maart 2009; voting is not compulsory. | [Rijksoverheid, Wie mag stemmen bij de verkiezingen voor de Provinciale Staten en de waterschappen?](https://www.rijksoverheid.nl/themas/overheid-en-democratie/verkiezingen/vraag-en-antwoord/verkiezingen/wie-mag-stemmen): "U bent 18 jaar of ouder op 17 maart 2027. U bent dus geboren vóór 18 maart 2009."; "U heeft de Nederlandse nationaliteit of die van een andere EU-lidstaat, of u heeft een geldige verblijfsvergunning."; "Stemmen is niet verplicht." | kwB | 8 Nov 2026 | Until 17 Mar 2027 |
| roNodig | Two stempassen, by 3 maart 2027; ID up to 5 years expired ("18 maart 2022 of een datum daarna"); kiezerspas per election, form by 12 maart, balie until 16 maart 12.00; lost ID: verklaring van vermissing plus a pass with photo. | [Rijksoverheid, Wat heb ik nodig om te stemmen voor de verkiezingen van de Provinciale Staten en de waterschappen?](https://www.rijksoverheid.nl/themas/overheid-en-democratie/verkiezingen/vraag-en-antwoord/verkiezingen/wat-heb-ik-nodig-om-te-stemmen): "U ontvangt uw stempas uiterlijk 3 maart 2027 thuis in de brievenbus."; "Staat daar 18 maart 2022 of een datum daarna? Dan mag u het identiteitsbewijs nog gebruiken om te stemmen."; "Aan de balie een kiezerspas aanvragen kan tot dinsdag 16 maart 2027 12.00 uur." | ksId, ksKal | 8 Nov 2026 | Until 17 Mar 2027 |
| roKwijt | New stempas: balie until dinsdag 16 maart 2027 12.00 uur; form received by 12 maart 2027. | [Rijksoverheid, Stempas kwijt of niet ontvangen. Wat nu?](https://www.rijksoverheid.nl/themas/overheid-en-democratie/verkiezingen/vraag-en-antwoord/verkiezingen/stempas-kwijt-of-niet-ontvangen): "Aan de balie een nieuwe stempas aanvragen kan tot dinsdag 16 maart 2027 12.00 uur."; "Het ingevulde formulier moet uiterlijk op 12 maart 2027 ontvangen zijn door uw gemeente." | kwJ (J 8) | 8 Nov 2026 | Until 17 Mar 2027 |
| roWaar (teacher only) | Stembureaus 7.30 to 21.00; a waterschap stempas may not work in every stembureau; kiezerspas only within the own province and waterschap. | [Rijksoverheid, Waar kan ik stemmen op 17 maart 2027?](https://www.rijksoverheid.nl/themas/overheid-en-democratie/verkiezingen/vraag-en-antwoord/verkiezingen/waar-kan-ik-stemmen): "De meeste stembureaus zijn op 17 maart 2027 open van 7.30 uur tot 21.00 uur."; "misschien kunt u niet in alle stembureaus in uw gemeente terecht. Dit hangt af van het waterschap waarin u woont."; "alleen in uw eigen provincie en waterschap" | kwJ (J 1, J 5) | 8 Nov 2026 | Until 17 Mar 2027 |
| roMacht | Machtigen via the stempas: same gemeente, at the same time, copy or photo of ID; maximum 2, so at most 3 ballots; ronselen is strafbaar. | [Rijksoverheid, Hoe kan ik iemand anders vragen om voor mij te stemmen?](https://www.rijksoverheid.nl/themas/overheid-en-democratie/verkiezingen/vraag-en-antwoord/verkiezingen/iemand-machtigen-om-te-stemmen-bij-verkiezingen): "in dezelfde gemeente woont als u"; "Een duidelijke foto van uw identiteitsbewijs vanaf een telefoon of tablet mag ook."; "U krijgt dus maximaal 3 stembiljetten mee in het stemhokje"; "Andere mensen mogen dus niet aan u vragen of zij voor u mogen stemmen." | ksVolmacht, kwL | 8 Nov 2026 | Re-check (the page still says the form deadline has passed) |
| roHoe | One box red; blanco; one new ballot after a mistake; vote alone and in secret; pilot ballot gemeenten listed. | [Rijksoverheid, Stemmen bij verkiezingen: hoe werkt dat?](https://www.rijksoverheid.nl/themas/overheid-en-democratie/verkiezingen/vraag-en-antwoord/verkiezingen/stemmen-bij-verkiezingen-hoe-werkt-dat): "Kleur het vakje rood bij de naam van de kandidaat op wie u wilt stemmen."; "u mag maximaal één vakje rood kleuren, anders is uw stem niet geldig."; "U stemt in uw eentje in het geheim."; Wat mag er wel en niet in het stemhokje?: "mag u een selfie ('stemfie') maken" | kwJ, kwN7 | 8 Nov 2026 | Until 17 Mar 2027 |
| roPS | Tasks of the Provinciale Staten and the provincie, in neutral terms; PS elect the Eerste Kamer. | [Rijksoverheid, Waar stem ik voor bij de Provinciale Statenverkiezingen?](https://www.rijksoverheid.nl/themas/overheid-en-democratie/verkiezingen/vraag-en-antwoord/verkiezingen/provinciale-statenverkiezingen): "Openbaar vervoer: zorgen voor bus- en streekvervoer in de hele provincie"; "Natuur en milieu"; "Infrastructuur: aanleggen en onderhouden van provinciale wegen"; "Ze kiezen de leden van de Eerste Kamer." | ksPS, gmRdam | 8 Nov 2026 | No set date |
| roWs | Tasks of the waterschap, in neutral terms. | [Rijksoverheid, Waar stem ik voor bij de waterschapsverkiezingen?](https://www.rijksoverheid.nl/themas/overheid-en-democratie/verkiezingen/vraag-en-antwoord/verkiezingen/waterschapsverkiezingen): "beheren van dijken en sluizen om Nederland te beschermen tegen overstromingen"; "zuiveren van afvalwater"; "zorgen voor voldoende water"; "zorgen dat het water in sloten, rivieren en beken schoon en gezond is" | wsw, ksWs | 8 Nov 2026 | No set date |
| roProef (teacher only) | The new ballot: one box for the party, one for the candidate number. | [Rijksoverheid, Ontwikkelen nieuw stembiljet](https://www.rijksoverheid.nl/themas/overheid-en-democratie/verkiezingen/proef-met-nieuw-stembiljet): "De kiezer stemt door 2 vakjes rood te maken: 1 partij, 1 kandidaat van die partij" | roNws2 | 8 Nov 2026 | Re-check before 17 Mar 2027 |
| roNws2 (teacher only) | The same 11 gemeenten are invited to use the new ballot on 17 maart 2027; national use planned from 2029. | [Rijksoverheid, Wetsvoorstel nieuw stembiljet in consultatie (2 november 2026)](https://www.rijksoverheid.nl/actueel/nieuws/2026/11/02/wetsvoorstel-nieuw-stembiljet-in-consultatie): "zijn dezelfde 11 gemeenten uitgenodigd om tijdens de Provinciale Staten- en waterschapsverkiezingen op 17 maart 2027 opnieuw met het nieuwe stembiljet te stemmen" | roProef, roHoe | 8 Nov 2026 | Re-check which gemeenten take part |
| roNws1 (teacher only) | The minister has the volmacht system researched after signs of ronselen. | [Rijksoverheid, Landelijke invoering klein en eenvoudig stembiljet (2 juli 2026)](https://www.rijksoverheid.nl/actueel/nieuws/2026/07/02/landelijke-invoering-klein-en-eenvoudig-stembiljet): "Om het ronselen van volmachten in de toekomst te voorkomen, laat de minister onderzoek doen naar het volmachtstelsel." | ksVolmacht | 8 Nov 2026 | No set date |
| kwB | Kiesrecht PS (B 2) and waterschap (B 2a, with B 3 lid 2 onder a). | [Kieswet, BWBR0004627, geldend van 1 oktober 2026](https://wetten.overheid.nl/BWBR0004627/2026-10-01): art. B 2 ("door degenen die op de dag van de kandidaatstelling ingezetenen zijn van de provincie, mits zij Nederlander zijn en op de dag van de stemming de leeftijd van achttien jaar hebben bereikt"); art. B 2a lid 1 ("ingezetenen zijn van het waterschap en op de dag van de stemming de leeftijd van achttien jaar hebben bereikt") and lid 2 | ksStemmen, roWie | 8 Nov 2026 | No set date |
| kwJ | Day and hours (J 1), where (J 5), stempas 14 days before (J 7), invalid stempas (J 7a), new stempas (J 8), employer (J 10), admission and lost ID (J 24), red dot (J 26), one new ballot (J 27), help (J 28). | [Kieswet, geldend van 1 oktober 2026](https://wetten.overheid.nl/BWBR0004627/2026-10-01): J 1 lid 1 ("op de vierenveertigste dag na de kandidaatstelling"), lid 2 ("vangt aan om zeven uur dertig en duurt tot eenentwintig uur"); J 7 lid 2 ("Ten minste veertien dagen voor de dag van de stemming ontvangt elke kiezer ... een stempas"); J 8 lid 3; J 10 ("niet meer dan twee uur"); J 24 lid 1 onder b and lid 2; J 26 lid 1 ("stemt aldaar door een wit stipje, geplaatst vóór de kandidaat van zijn keuze, rood te maken"); J 27 lid 1 ("eenmaal een nieuw biljet") | ksKal, roKwijt | 8 Nov 2026 | No set date |
| kwK | Kiezerspas: vote within the area of the election (K 1); request with a copy of ID, written by the fifth day, oral by 12.00 the day before (K 3); only with this pass, lost is lost (K 4). | [Kieswet, geldend van 1 oktober 2026](https://wetten.overheid.nl/BWBR0004627/2026-10-01): K 1 lid 1 ("binnen het gebied van het orgaan waarvoor de verkiezing wordt gehouden, aan de stemming deel te nemen in een stembureau van zijn keuze"); K 3 lid 3; K 4 lid 2 and 3 | ksKiezerspas | 8 Nov 2026 | No set date |
| kwL | Volmacht (L 1 to L 17): the voter chooses the gemachtigde (L 2); at the same time as the own vote (L 3); at most two (L 4); written volmacht cannot be withdrawn, stempas volmacht can (L 5); form by the fifth day (L 7); gemachtigde registered in the area (L 8); stempas route in the gemeente of the volmachtgever (L 14); copy of ID (L 17). | [Kieswet, geldend van 1 oktober 2026](https://wetten.overheid.nl/BWBR0004627/2026-10-01): L 3 ("De gemachtigde kan een volmachtstem uitsluitend tegelijk met zijn eigen stem voor die verkiezing uitbrengen."); L 4 ("Een kiezer mag per verkiezing niet meer dan twee aanwijzingen als gemachtigde aannemen."); L 14 lid 1 ("indien de gemachtigde stemt in de gemeente van de volmachtgever") | ksVolmacht, roMacht | 8 Nov 2026 | Re-check (volmacht system under review) |
| kwN7 | Blanco and ongeldig. | [Kieswet, geldend van 1 oktober 2026](https://wetten.overheid.nl/BWBR0004627/2026-10-01): N 7 lid 1 ("Blanco is de stem uitgebracht op een stembiljet dat door de kiezer is ingeleverd zonder dat hij geheel of gedeeltelijk een wit stipje in een stemvak rood heeft gemaakt"), lid 3 ("op ondubbelzinnige wijze ... of waarbij op het stembiljet bijvoegingen zijn geplaatst waardoor de kiezer kan worden geïdentificeerd") | ksVb | 8 Nov 2026 | No set date |
| kb (teacher only) | Red writing material in every stemhokje. | [Kiesbesluit, BWBR0004632, geldend van 1 augustus 2025](https://wetten.overheid.nl/BWBR0004632/2025-08-01): art. J 5 lid 2 ("In elk stemhokje bevindt zich een lessenaar met rood schrijfmateriaal.") | kwJ (J 26) | 8 Nov 2026 | No set date |
| wsw (teacher only) | Waterschap tasks in the law. | [Waterschapswet, BWBR0005108, geldend van 1 januari 2026](https://wetten.overheid.nl/BWBR0005108/2026-01-01): art. 1 lid 2 ("het beheer van watersystemen, de zuivering van stedelijk afvalwater") | roWs | 8 Nov 2026 | No set date |
| pdVerk | A stemhulp shows which party shares most of your standpoints; ProDemos materials for elections. | [ProDemos, Verkiezingen: informatie en activiteiten](https://prodemos.nl/thema/verkiezingen/): "Gebruikers van StemWijzer reageren hierop en kunnen vervolgens zien met welke politieke partij ze de meeste standpunten gemeen hebben."; "De eerstvolgende verkiezingen vinden plaats op 17 maart 2027." | pdSW | 8 Nov 2026 | No set date |
| pdOverzicht (teacher only) | Election calendar: 17 maart 2027 PS, waterschappen, kiescolleges and eilandsraden; 24 mei 2027 Eerste Kamer. | [ProDemos, Overzicht van verkiezingen in Nederland](https://prodemos.nl/kennis/informatie-over-politiek/verkiezingen/verkiezingen-waarvoor/): "17 maart 2027: Provinciale Staten, waterschappen, kiescolleges en eilandsraden"; "24 mei 2027: Eerste Kamer" | ksPS (Eerste Kamer date not on kiesraad.nl today) | 8 Nov 2026 | Until 24 May 2027 |
| pdSW (teacher only) | StemWijzer for PS 2027: statements checked against party programmes; no personal data, no profiling. | [ProDemos, StemWijzer (Provinciale Statenverkiezingen 2027)](https://prodemos.nl/projecten/provincies/ps27/stemwijzer/): "Gebruikers hoeven geen persoonlijke gegevens te delen om de uitslag te bekijken."; "StemWijzer doet niet aan profilering" | pdVerk | 8 Nov 2026 | No set date |
| gmRdam | Sample gemeente page: conditions for both elections and the tasks, in neutral terms. | [Gemeente Rotterdam, Verkiezingen](https://www.rotterdam.nl/verkiezingen): "De Provinciale Staten nemen beslissingen over onderwerpen zoals openbaar vervoer, natuur, provinciale wegen en de inrichting van de provincie."; "Het waterschap zorgt voor veilige dijken, de juiste waterstand, schoon oppervlaktewater en de zuivering van afvalwater."; "U hebt de Nederlandse nationaliteit, een EU-nationaliteit of een geldige verblijfsvergunning" | roWie, roPS | 8 Nov 2026 | Until 17 Mar 2027 |
| mlHavo (teacher only) | Curriculum anchor maatschappijleer havo, Domein C. | [Examenblad, Examenprogramma maatschappijleer havo (geldig voor 2027)](https://www.examenblad.nl/2027/havo/documenten/examenprogramma-maatschappijleer-havo) (opens the 2007 programme pdf): "Domein C Parlementaire democratie"; "de structuur van de representatieve democratie in Nederland uitleggen op gemeentelijk, provinciaal en landelijk niveau" | research | 8 Nov 2026 | Exam year 2027 |
| ekb (teacher only) | Curriculum anchor mbo burgerschap, politiek-juridische dimensie. | [Examen- en kwalificatiebesluit beroepsopleidingen WEB, bijlage 1, versie van 1 augustus 2026](https://wetten.overheid.nl/BWBR0027963/2026-08-01): "2.1. De politiek-juridische dimensie"; "de participatie in formele zin (stemmen bij officiële verkiezingen)" | research | 8 Nov 2026 | Re-check before 1 Aug 2027 |

## Onzeker

- **Pilot with the new ballot on 17 maart 2027 [verify].** roNws2 (2 November 2026) says the same 11 gemeenten are "uitgenodigd" to use the new ballot again; roHoe lists the 11 gemeenten of 2026 without a date. Whether all of them take part was not confirmed today. Consequence: r1 room 4, V4.1, C4 and B4 say "het gewone stembiljet"; r4 room 4 tells pupils to follow their gemeente; no gemeente is named in pupil text. Release gate.
- **Article for the 5-year ID rule [verify].** Kiesraad (ksId) and Rijksoverheid (roNodig) both state it, with the date "18 maart 2022 of een datum daarna". The article was not found in the Kieswet (version 1 October 2026) or the Kiesbesluit read today; J 24 refers to the Wet op de identificatieplicht. The rule is used in V2.1, digit 2, C2 and B2 on the strength of the two official sources.
- **roMacht says "De deadline hiervoor is inmiddels verstreken"** for the schriftelijke volmacht, a leftover of an earlier election: Kieswet L 7 and the Kiesraad calendar give vrijdag 12 maart 2027. The schriftelijke volmacht is in no pupil rule or question (teacher detail and FAQ only). Re-check.
- **Help in the stemhokje [verify].** The Tweede Kamer adopted the bill on 2 July 2026 (ksHulp); the Kieswet version of 1 January 2027 on wetten.overheid.nl has no change to J 28. FAQ only.
- **Eerste Kamer date 24 mei 2027 [verify].** ProDemos only (pdOverzicht); kiesraad.nl says "twee á drie maanden na de Provinciale Statenverkiezingen". Not in pupil text; the FAQ does not name the date.
- **Volmacht system under review** (roNws1): no change in the law for 2027 found (Kieswet 1 January 2027 version). Release gate.
- **Residence date.** Rijksoverheid (roWie) writes "U staat ingeschreven op een adres in Nederland, op 1 februari 2027"; the Kieswet (B 2) says ingezetene of the province on the dag van kandidaatstelling; Rotterdam (gmRdam) says "ingeschreven in een gemeente in de provincie Zuid-Holland". The lesson states residence in each situ and has no residence question.
- **Waterschap kiesrecht for non-EU nationals.** The law (B 2a lid 2 with B 3 lid 2 onder a) names lawful residence on specific Vreemdelingenwet grounds; Rijksoverheid writes "geldige verblijfsvergunning". r3 room 1 uses the Rijksoverheid wording; no question tests the non-EU case.
- **Kandidatenlijst delivery.** ksStemmen says "Uiterlijk 4 dagen voor de verkiezingsdag", ksKal "uiterlijk vrijdag 12 maart 2027" (5 days). Not used.
- **Maatschappijleer programme.** The examenblad 2027 link opens the 2007 programme; a new programme was drafted (SLO) but is not on examenblad for 2027 [verify before the 2027-2028 school year]. Teacher only.
- **nieuwstembiljet.nl** returned 403 to the reading tools; its facts come from Rijksoverheid pages.

## Voor een nieuw jaar

This lesson is tied to one election. For the next Provinciale Staten and waterschap election (March 2031) or any other election: write a new revision with new story dates (kandidaatstelling, stempas date, the fifth day and the day before), re-read the Kieswet chapters B, J, K, L and N and the Kiesraad calendar, and expect the new ballot (planned nationally from the European election of 2029, roNws1, roNws2): then r1 and r2 room 4, V4.1, C4, B4 and digit 4 change (two boxes: party and candidate number). The digits depend on: the birthdays in clue 1 (digit 1), the 5-year ID rule and the clue years (digit 2), the maximum of 2 volmachten (digit 3) and the one new ballot (digit 4). Owner: the content team.

---

## Changelog

Item numbers refer to the room questions (V1.1 and so on), rule lines (r1 and so on) and check items (C1 to C4, B1 to B4) of this spec.

Rev 1 (8 November 2026), first version.
- Built from the brief of 8 November 2026 and the De rekening die blijft liggen and Geld terug templates. Rooms: wie mag stemmen and the stempas; stempas en ID; volmacht and kiezerspas; the ballot, what the Provinciale Staten and the waterschap decide, the stemhulp and neutral sources.
- Election date verified on kiesraad.nl and rijksoverheid.nl: woensdag 17 maart 2027 (ksPS, ksWs, roVerk, ksKal). All deadlines from the Kiesraad calendar and the Kieswet (version 1 October 2026), cross-read with Rijksoverheid pages written for this election.
- Found on the way: 11 gemeenten are invited to pilot the new ballot on 17 maart 2027 (roNws2); hence "het gewone stembiljet" in r1 room 4, V4.1, C4, B4 and the new rule r4 room 4.
- Digits and code derived: 2 (two of four birthdays), 3 (three of four IDs), 3 (own ballot plus two volmachten), 1 (one new ballot). Code **2331**, not one of the eleven existing codes.
- Self-review with scripts (`check.js` and `wc.js` in the content team's scratchpad): no pupil sentence over 15 words, no option over 10 words, every explanation at most 2 sentences and 28 words, no dash, no order word, the right option never the longest and never the only one with its first word (rooms and checks), right answers spread over positions 1 to 4 (three each). First draft had 2,019 words in the rooms; cut to 1,711. Cuts: shorter chat and letter lines, one letter line fewer, no "Nationaliteit" row on the ID card, no "Verkiezing" row on the stempas, the volmacht definition moved from the rule box to the hard words, the two kiezerspas rules merged into one deadline rule, the "Twee biljetten" line of the folder and the third chat line dropped, four `clueWrong` lines fewer.
- Neutrality: no party, no candidate, no stemhulp outcome named; r4 room 1 "Stemmen is niet verplicht"; care points 1 to 3; FAQ "Mag ik als docent een stemadvies geven?"; the slip and the plan ask nothing about voting intention or choice.
- Data file written: `kamers-engine/lessons/je-eerste-stem.js` (slug `je-eerste-stem`), this spec generated together with it; slug added to `HIDE` in `build.js`, and to `FORMAT`, `CHECKED_ON` and `STOP_AT` in `tests/spec-compare.js` (one line, not in its default list). No e2e suite run.
