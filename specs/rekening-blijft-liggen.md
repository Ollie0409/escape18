# Escape "De rekening die blijft liggen" (content spec, ID voorstel: ESC-REKENING)

Rev 2. Regels geldig voor: consumer debts in 2027 (the story plays from 6 February to 3 May 2027); gecontroleerd op 7 november 2026; validUntil: 31 augustus 2027. validUntil is the end of the school year, earlier than in the other lessons, because the new consumer-credit law for buy now, pay later (BNPL) can enter into force in this period and must then be re-read (release gate). Real amounts in pupil text: only rules of law and BKR (€ 40 minimum incassokosten, 15% up to € 2.500, the € 250 BKR threshold). Every other amount (€ 96, € 480, € 136, € 79) is fictional.

Release gate: on the day of publication, on 20 November 2026 and again after the Implementatiewet herziene richtlijn consumentenkrediet (36.924) is published in the Staatsblad, re-read: (1) ek36924 (status, Staatsblad, date of entry into force); (2) afmBnpl ("Dit verandert vanaf 20 november 2026"); (3) the BKR pages bkrFaq, bkrTel, bkrAfbet, bkrRood and the CKI reglement (a new reglement after the law can change the € 250 threshold, the 2 and 3 months or BNPL registration; V3.1, V3.2, digit 3); (4) wigBnpl (its "niet aangesloten bij BKR" line will change). If the law is in force, add the 18+ rule, the credit check and BKR registration for BNPL only to the teacher FAQ first, and to pupil text only after a new spec revision. Then update `checked`, `CHECKED_ON` in `tests/spec-compare.js` and the second audience line.

Doelgroep en moment: havo 5 en vwo 6 (pupils around 18); also usable in mbo niveau 3 en 4 (B1 text, no school-type specific content). Mentoruur, LOB or economie. Curriculum anchor: economie havo CE syllabus 2027, domein E1 "Gezinnen ruilen over de tijd", E1.1 (inkomsten, uitgaven en schulden) and E1.4 ("lenen legt beslag op consumptie nu"): BNPL and a phone on afbetaling are lenen (sylE1). Nibud competenties as listed in the basisvisie financiële educatie: "Problematische schulden voorkomen: de jongere is in staat problematische schulden te voorkomen door in te grijpen bij ontstaan van betalingsachterstanden" and "Actief administratie voeren ... betalingsverplichtingen worden gedaan"; basisvisie goals havo/vwo: "risico's verbonden aan het niet betalen van rekeningen (rol incassobureau)" and "weet dat er hulpdiensten te raadplegen zijn" (basisvisie). Nibud theme: "verantwoord besteden" (SLO context 19, per research file). Week van het geld vo-skill: Budgetbewaker. Incasso and BKR are not CE stof; no exam item is claimed. Lesduur 45 minuten, escape 26 minuten, stop op minuut 32 (same timing as Verzekerd and Geld terug).

Format as ESC-KAMER, Verzekerd and Geld terug: four rooms, 3 questions per room, one retry with a nudge, a hint that costs 30 seconds, one digit per room, one lock of four digits, then the end check, the end screen and the plan. Pupil text is Dutch B1, Escape 18 tone, no em or en dashes. Readability rules for this lesson (stricter than the older lessons): sentences of 15 words or fewer, options of 10 words or fewer, explanations of at most 2 sentences and 28 words. Rules come only from the source table at the end. All pages and law texts read on 7 November 2026.

Word count (script, 7 Nov 2026; words with a letter or digit): 1,618 words of pupil text in the four rooms (rev 2) (titles, intros, documents with their labels, rule boxes, hard words, situations, prompts, options, nudges, hints, explanations, clues, digit nudges, remember lines). About 2,090 with the lead, fiction and neutrality lines, both check forms, the debrief, the plan and the slip. The rooms are in the 1,600 to 1,900 range; the total with the checks is above it.

Rule boxes (`room.rules`): every rule a pupil needs on the first try is in the room's rule box, the situation or the room's documents. Each digit clue shows the facts it needs, names its lock position and uses a new case. Known errors of earlier checks, avoided from the start:
- No absolute rule where the source has an exception: "vaak" (r1 room 1), "Tot € 2.500" (r4 room 2), "Bij een schuld aan een bedrijf" (r2 room 4, because of the dwangbevel and other titels; teacher detail).
- One defensible answer per question: each situ states the fact that would otherwise open a second answer (V2.2 the day of receipt; V3.2 "ook daarna niet"; V4.2 "Wel € 30 per maand").
- Hints point to a place or a method, never to the option; no retry pointer highlights the line that holds the answer (V1.2 points to the counting rule a2, not to b1; all others point to rules).
- Option shapes (checked by script): in every question and check item the right option is not the longest (V2.2 ties with one wrong option at 16 characters; another is longer), not the only one with its first word, and has at most 10 words.
- No order words ("beide", "allebei", "geen van", "bovenstaande", "optie c") anywhere, so no question needs `keepOrder`.
- No unverified fact in a scored question: the pending BNPL rules (18+, credit check, BKR registration) are in no question, check item, rule or explanation.

Sensitivity: some pupils' families have debts. The lesson uses one fictional case (Sami) and asks nobody about their own money; care points 1 and 2, the FAQ and the lesson plan tell the teacher not to ask for personal stories and where to point a pupil who tells one. The slip asks no amount and no debt.

Why this lesson (research `research/next_topics.md`, topic B and section 3.2): the highest demand of any topic (Nibud 2025: 13% of pupils use BNPL, 38% of users once forgot to pay on time and paid more; nibud25). Existing free lessons cover the temptation of BNPL; the gap is the paper trail after a missed payment, read from realistic letters. Changes against the research room plan: room 1 asks who you pay and the deadline instead of the age rule (pending law); room 2 identifies the 14-dagenbrief by content instead of putting four letters in order (the engine has no ordering question); room 3 uses a phone on afbetaling instead of rood staan, because a toestelkrediet is the BKR registration most 18-year-olds meet (bkrTel) and rood staan stays as the 3-month trap; room 4 adds the deurwaarder and the impossible threat of an incassobureau.

Lead: "Een rekening laten liggen? Lees de brieven, vind de deadline en weet je volgende stap."

The lead is used on the start screen and the site card (spec-compare reads it from the spec).

Fiction line (shown once at the start):
"Sami, de bedrijven, de brieven en de bedragen zijn verzonnen. De regels zijn echt."

Neutrality line (start screen under the fiction line, and on the teacher screen):
"Deze les zegt niet of achteraf betalen slecht is. Ze laat zien wat je kunt doen."

Fictional on purpose: the person Sami (18; no surname, no town); webshop Stoepzicht; betaaldienst Laterlijn; telefoonaanbieder Belbaken; Incassobureau Grijsveld; the advert "Al je schulden weg in 1 dag!" (no brand); all mails, letters, terms and amounts; the addresses bestelling@stoepzicht.example and service@laterlijn.example (reserved test domain). Name check, 7 November 2026, web search only: "Laterlijn" gave no company (only dictionary pages for "lijn"); "Stoepzicht" with webshop, sneakers or kleding gave no shop; "Grijsveld" with incasso or incassobureau gave no firm; "Belbaken" with telefoon, mobiel or abonnement gave no provider (only KPN's product "BelBasis", a different word). Rejected on the way: "Pauzepay" ("PausePay" is a real payment product) and "Strandhoek" (not needed). The KvK Handelsregister was not searched this time [verify]. Real bodies named only where a rule applies: BKR, the gemeente, Geldfit, the Juridisch Loket, the rechter. No letter, page or screen of a real organisation is imitated; the documents are plain text, labelled "verzonnen".

Story time: zaterdag 6 februari 2027 (order); maandag 8 februari (shipped, room 1; last payment day maandag 22 februari); dinsdag 23 februari (reminder; V1.3 situ "Het is 23 februari"); maandag 8 maart (14-dagenbrief received; last day without costs maandag 22 maart); donderdag 1 april (unpaid phone instalment); dinsdag 20 april (Belbaken warning); vrijdag 23 april (room 3); maandag 3 mei (Grijsveld letter, room 4). Clue dates: vrijdag 5 maart to vrijdag 19 maart 2027. Check dates: maandag 10 mei to maandag 24 mei 2027; dinsdag 1 juni to donderdag 1 juli 2027. All weekdays checked with a calendar script.

Code: **9623** (room digits 9, 6, 2, 3; not 2073, 2348, 2797, 2824, 3231, 3521, 4029, 4379 or 5423). Teacher screen: show it only inside the closed Antwoordblad, never on the projected part.

## Leerdoelen

1. De leerling kan in de voorwaarden van achteraf betalen lezen aan wie en tot wanneer je betaalt, en wat er gebeurt als je te laat bent.
2. De leerling kan een gewone herinnering onderscheiden van een 14-dagenbrief, de laatste dag zonder incassokosten bepalen en de hoogte van de incassokosten controleren.
3. De leerling weet wat BKR bijhoudt, wanneer een achterstand gemeld mag worden en dat de aanbieder beslist over een lening.
4. De leerling weet dat alleen een deurwaarder met een vonnis beslag kan leggen, vraagt om een betalingsregeling en weet waar gratis hulp is.

---

## Kamer 1. Later betalen (maandag 8 februari 2027)

**Intro:** "Het is maandag 8 februari 2027. Sami (18) bestelde zaterdag sneakers bij webshop Stoepzicht. Hij betaalt achteraf met Laterlijn."

### Document 1a: bestel (type: letter, kind: "Mail (verzonnen)", id: bestel)
From: "Stoepzicht <bestelling@stoepzicht.example>". Place: "maandag 8 februari 2027". Greeting: "Hoi Sami,".
- b1 "Je bestelling is vandaag verzonden."
- b2 "Sneakers: € 96."
- b3 "Je betaalt achteraf via Laterlijn."
Sign: "Team Stoepzicht".

### Document 1b: voorw (type: contract, id: voorw)
Title: "Voorwaarden Laterlijn (stukje)". Parties: "Laterlijn (verzonnen) en jij".
- a1 "Wie betaal je?" | "Laterlijn betaalt de webshop. Jij betaalt aan Laterlijn."
- a2 "Wanneer?" | "Binnen 14 dagen. Dag 1 is de dag na verzending."
- a3 "Te laat?" | "Eerst krijg je een gratis herinnering per mail."
- a4 "Nog niet betaald?" | "Dan volgt een 14-dagenbrief. Daarna kunnen er incassokosten bij komen."
Note: "Korter gemaakt en verzonnen."

Design note: the mail gives the shipping date (8 februari) and the terms give the counting rule ("Dag 1 is de dag na verzending"), so V1.2 needs both documents. The 14 days and the free reminder are fictional terms (afmBnpl: "Hiermee kun je de betaling uitstellen tot 14 of 30 dagen na de levering"). Article a1 states who is paid, because AFM and Wijzer warn that reminders come from the BNPL provider, not the webshop ("denk niet te snel: 'die ken ik niet'"). No question asks about age, a credit check or BKR for BNPL: the new rules are not in force (see Onzeker).

**Moeilijke woorden (plain):** "Verzending: de webshop stuurt je pakket op. Herinnering: een bericht dat je nog moet betalen. Incassokosten: extra kosten om een schuld op te halen."

Split over the documents: doc bestel has "Verzending", doc voorw has "Herinnering" and "Incassokosten".

**Rule box (`rules`, title "Regels"):**
- r1 "Bij achteraf betalen betaal je vaak aan een betaaldienst, niet aan de webshop."
- r2 "Herinneringen komen dan van die betaaldienst, vaak per mail of app."
- r3 "De voorwaarden zeggen tot wanneer je betaalt. En wat er gebeurt als je te laat bent."

Note on the rules: r1 and r2 rest on afmBnpl ("Betalingsherinneringen worden vaak niet verstuurd door de webshop, maar door de aanbieder van achteraf betalen"; "Betalingsherinneringen worden vaak per e-mail verstuurd") and wigBnpl ("Betalingsherinneringen worden meestal niet door de webshop verstuurd, maar door de BNPL-aanbieder"; "Kijk voordat je de aankoop doet naar de voorwaarden"). r1 says "vaak" because some webshops send their own invoice. r3 is wigBnpl ("Kijk bij de aankoop gelijk wanneer je moet betalen en wanneer de betaaltermijn verstrijkt").

### Vraag 1.1 (id: wie, kind: pick, docs: bestel, voorw)
- Prompt: "Aan wie betaalt Sami de € 96?"
- Options:
  - a "Aan Stoepzicht"
  - b "Aan zijn bank"
  - c "Aan BKR"
  - d "Aan Laterlijn"
- Correct: d
- Retry pointer: rule r1.
- Nudge: "Lees regel 1. Wie betaalt de webshop?"
- Hint (30 s): "Lees het eerste artikel van de voorwaarden."
- Explanation: "Laterlijn betaalt de webshop. Sami betaalt aan Laterlijn."
- Sources: afmBnpl, wigBnpl
- Note: one defensible answer (a1). "Aan Stoepzicht" is the misconception AFM names. The right option is not the longest ("Aan Stoepzicht" is) and shares "Aan" with all options.

### Vraag 1.2 (id: datum, kind: pick, docs: bestel, voorw)
- Prompt: "Wat is de laatste dag om te betalen?"
- Options:
  - a "Zaterdag 20 februari"
  - b "Zondag 21 februari"
  - c "Maandag 8 maart"
  - d "Maandag 22 februari"
- Correct: d
- Retry pointer: doc voorw line a2.
- Nudge: "Lees 'Wanneer?'. Wanneer werd het pakket verzonden?"
- Hint (30 s): "Dag 1 is dinsdag 9 februari. Tel door tot dag 14."
- Explanation: "Dag 1 is 9 februari, de dag na verzending. Dag 14 is maandag 22 februari."
- Sources: afmBnpl, wigBnpl
- Note: a is 14 days from the order date (6 februari), b counts the shipping day as day 1, c is 28 days. The pointer goes to the counting rule a2, not to a line that holds the answer. Weekdays checked with a calendar script.

### Vraag 1.3 (id: eerst, kind: pick, docs: voorw)
- Situ: "Het is 23 februari. Sami heeft nog niet betaald."
- Prompt: "Wat krijgt hij volgens de voorwaarden eerst?"
- Options:
  - a "Een brief van een deurwaarder"
  - b "Een rekening met incassokosten"
  - c "Een melding bij BKR"
  - d "Een gratis herinnering"
- Correct: d
- Retry pointer: rule r3.
- Nudge: "Lees regel 3 en dan 'Te laat?'."
- Hint (30 s): "Wat komt vóór de 14-dagenbrief?"
- Explanation: "Eerst komt een gratis herinnering. Incassokosten kunnen pas na een 14-dagenbrief."
- Sources: afmBnpl, bw696
- Note: the order is in a3 and a4 of the terms; b is the step after the 14-dagenbrief, c and a are later steps of other rooms. All four options start with "Een"; the right one is not the longest.

### Cijfer kamer 1
- Clue: "Het 1e cijfer: een pakket wordt verzonden op vrijdag 5 maart. Je hebt 14 dagen, vanaf de dag na verzending. Wat is de laatste dag? Neem het laatste cijfer."
- Digit: **9** (19 maart 2027: dag 1 is zaterdag 6 maart, dag 14 is vrijdag 19 maart; all facts are in the clue; `clueDocs: ['rules']`). A new case with other dates than V1.2.
- Clue retry: "Dag 1 is 6 maart. Tel door tot dag 14."
- Clue wrong (`clueWrong`): "8": "Dag 1 is de dag na 5 maart."
- Remember: "Achteraf betalen? Je betaalt de betaaldienst. Zet de laatste dag in je agenda."

---

## Kamer 2. Herinnering of 14-dagenbrief? (maandag 8 maart 2027)

**Intro:** "Het is maandag 8 maart 2027. Sami heeft nog niet betaald. Hij heeft twee mails van Laterlijn."

### Document 2a: herin (type: letter, kind: "Mail (verzonnen)", id: herin)
From: "Laterlijn <service@laterlijn.example>". Place: "dinsdag 23 februari 2027". Greeting: "Hoi Sami,".
- h1 "Onderwerp: herinnering"
- h2 "Je moet nog € 96 betalen."
- h3 "Betaal zo snel mogelijk. Er zijn geen extra kosten."
Sign: "Laterlijn".

### Document 2b: brief14 (type: letter, kind: "Mail (verzonnen)", id: brief14)
From: "Laterlijn <service@laterlijn.example>". Place: "maandag 8 maart 2027". Greeting: "Beste Sami,".
- v1 "Onderwerp: laatste herinnering"
- v2 "Je moet nog € 96 betalen."
- v3 "Betaal binnen 14 dagen. Dag 1 is de dag nadat je deze mail kreeg."
- v4 "Te laat? Dan komt er € 40 incassokosten bij."
- v5 "En gaat je schuld naar Incassobureau Grijsveld."
Sign: "Laterlijn".

Design note: the 14-dagenbrief is titled "laatste herinnering" on purpose: the law does not prescribe a name (BW 6:96 lid 6 speaks of an "aanmaning"), so pupils must recognise it by its content (14 days from the day after receipt; the amount of the costs). The reminder of 23 februari names no term and no costs. 22 maart 2027 is a Monday, so no weekend question arises (Algemene termijnenwet not needed). The 14-dagenbrief is an e-mail; the term runs from the day after receipt, and an e-mail is received the day it arrives (rsAanb, "bij u is bezorgd/ door u is ontvangen").

**Moeilijke woorden (plain):** "Incassobureau: een bedrijf dat schulden ophaalt voor een ander. Minimaal: niet minder dan."

All on doc brief14 (doc herin carries no box).

**Rule box (`rules`, title "Regels"):**
- r1 "Pas na een 14-dagenbrief mogen er incassokosten bij. De naam van de brief maakt niet uit."
- r2 "Die brief geeft je 14 dagen. Dag 1 is de dag nadat je de brief kreeg."
- r3 "De brief noemt de incassokosten als je niet op tijd betaalt."
- r4 "Tot € 2.500 schuld zijn incassokosten 15%, minimaal € 40."

Note on the rules: r1 to r3 are BW 6:96 lid 6 ("eerst verschuldigd worden nadat de schuldenaar ... onder vermelding van de gevolgen van het uitblijven van betaling, waaronder de vergoeding ... vruchteloos is aangemaand tot betaling binnen een termijn van veertien dagen, aanvangende de dag na aanmaning"). "Dag 1 is de dag nadat je de brief kreeg" follows the Rechtspraak recommendation (rsAanb: "binnen 14 dagen vanaf de dag nadat deze brief bij u is bezorgd/ door u is ontvangen"). "De naam van de brief maakt niet uit": the law names no title. r4 is the Besluit art. 2 lid 1 and 2 ("15% ... over de eerste € 2500"; "ten minste € 40") and roIncasso ("Er geldt een minimumbedrag van € 40"). "Tot € 2.500" keeps r4 true for larger debts.

### Vraag 2.1 (id: welke, kind: pick, docs: herin, brief14)
- Prompt: "Welke mail is de 14-dagenbrief?"
- Options:
  - a "De mail van 23 februari"
  - b "Er is nog geen 14-dagenbrief"
  - c "De mail van 8 maart"
- Correct: c
- Retry pointer: rules r2 and r3.
- Nudge: "Lees regel 2 en 3. Welke mail geeft 14 dagen en noemt kosten?"
- Hint (30 s): "Een herinnering noemt geen incassokosten."
- Explanation: "De mail van 8 maart geeft 14 dagen en noemt de kosten. De naam maakt niet uit."
- Sources: bw696, roIncasso
- Note: three options; c is right. "Er is nog geen 14-dagenbrief" is the trap for pupils who look for the word "14-dagenbrief" in the subject. The right option is not the longest and shares "De" with a.

### Vraag 2.2 (id: termijn, kind: pick, docs: brief14)
- Situ: "Sami kreeg de mail op maandag 8 maart."
- Prompt: "Tot en met wanneer kan hij betalen zonder incassokosten?"
- Options:
  - a "Zondag 21 maart"
  - b "Maandag 15 maart"
  - c "Donderdag 8 april"
  - d "Maandag 22 maart"
- Correct: d
- Retry pointer: rule r2.
- Nudge: "Lees regel 2. Wanneer kreeg Sami de mail?"
- Hint (30 s): "Dag 1 is dinsdag 9 maart. Tel door tot dag 14."
- Explanation: "Dag 1 is 9 maart. Dag 14 is dan maandag 22 maart."
- Sources: bw696, rsAanb
- Note: a counts 8 maart as day 1, b is 7 days, c is one month later. The situ states the day of receipt, which is the start of the count (BW 6:96 lid 6, "aanvangende de dag na aanmaning"; rsAanb). The right option ties with b at 16 characters; c is the longest.

### Vraag 2.3 (id: kosten, kind: pick, docs: brief14)
- Prompt: "Klopt de € 40 incassokosten?"
- Options:
  - a "Nee, 15% van € 96 is € 14,40"
  - b "Nee, er mogen geen kosten bij"
  - c "Ja, want Sami is al 18"
  - d "Ja, € 40 is het minimum"
- Correct: d
- Retry pointer: rule r4.
- Nudge: "Lees regel 4. Wat is 15% van € 96?"
- Hint (30 s): "Vergelijk € 14,40 met het minimum."
- Explanation: "15% van € 96 is € 14,40. Dat is minder dan het minimum, dus € 40 mag."
- Sources: besluit, roIncasso
- Note: € 14,40 is 15% of € 96; the Besluit sets a minimum of € 40 (art. 2 lid 2), so € 40 is allowed. a is the calculation without the minimum, b the misconception that no costs are allowed. Two "Ja" and two "Nee" options; the right one is the shortest.

### Cijfer kamer 2
- Clue: "Het 2e cijfer: iemand heeft € 400 schuld en betaalt na de 14-dagenbrief niet. Hoeveel euro incassokosten mogen er hoogstens bij? Neem het eerste cijfer."
- Digit: **6** (15% van € 400 = € 60; above the minimum of € 40; `clueDocs: ['rules']`). A new amount; V2.3 is the case below the minimum.
- Clue retry: "Reken 15% van € 400 uit."
- Clue wrong (`clueWrong`): "4": "€ 40 is het minimum. 15% van € 400 is meer."
- Remember: "Pas na een 14-dagenbrief komen er incassokosten bij. Betaal binnen die 14 dagen."

---

## Kamer 3. Wat is BKR? (vrijdag 23 april 2027)

**Intro:** "Het is vrijdag 23 april 2027. Sami heeft ook een telefoon op afbetaling. Hij betaalde de termijn van 1 april niet. Nu krijgt hij een brief."

### Document 3a: abo (type: table, id: abo)
Title: "Jouw abonnement (stukje)". From: "Belbaken (verzonnen)".
- t1 "Abonnement" | "€ 15 per maand"
- t2 "Toestel" | "€ 480, in 24 maanden"
- t3 "Toestelkrediet" | "€ 20 per maand"
Note: "Korter gemaakt en verzonnen."

### Document 3b: waarsch (type: letter, kind: "Brief (verzonnen)", id: waarsch)
From: "Belbaken (verzonnen)". Place: "dinsdag 20 april 2027". Greeting: "Beste Sami,".
- w1 "Je hebt de termijn van 1 april niet betaald."
- w2 "Je toestelkrediet staat bij BKR."
- w3 "Betaal je niet? Dan melden we een achterstand bij BKR."
- w4 "Kun je niet betalen? Bel ons voor een betalingsregeling."
Sign: "Belbaken".

Design note: the phone contract shows the device price (€ 480) and the monthly instalment; the letter is the advance warning that the CKI reglement requires (art. 39 lid 2: "van te voren schriftelijk waarschuwen"). The toestelkrediet is an aflopend krediet, so the 2-month rule applies (art. 12 lid 1 onder b); rood staan is doorlopend, 3 months (art. 12 lid 1 onder c; bkrRood). r4 is the trap for V3.2. No question asks whether BNPL is registered (see Onzeker).

**Moeilijke woorden (plain):** "Afbetaling: in delen betalen. Toestelkrediet: de lening voor je telefoon. BKR: een organisatie die leningen van mensen bijhoudt. Achterstand: een bedrag dat je te laat betaalt. Termijn: één deel dat je betaalt."

Split over the documents: doc abo has "Afbetaling" and "Toestelkrediet", doc waarsch has "BKR" to the end.

**Rule box (`rules`, title "Regels"):**
- r1 "Een lening van meer dan € 250 voor langer dan een maand staat bij BKR."
- r2 "Ook een telefoon op afbetaling is een lening."
- r3 "Betaal je een termijn niet? Dan mag de aanbieder dat na 2 maanden melden."
- r4 "Bij rood staan is dat na 3 maanden."
- r5 "Na het aflossen blijven je gegevens nog 5 jaar staan."
- r6 "BKR beslist niet of je een lening krijgt. De aanbieder beslist."

Note on the rules: r1 is bkrFaq ("een krediet van meer dan € 250 dat langer dan één maand loopt"); the reglement counts the bruto kredietbedrag (cki art. 15 lid 1, art. 16 lid 4), which equals the device price in every case of the lesson (teacher detail). r2 is bkrTel ("Die wordt alleen bij ons geregistreerd als het toestel meer dan € 250 kost") and bkrAfbet. r3 is cki art. 12 lid 1 onder a and b (a duty: "meldt de zakelijke klant dit"; "een termijn van twee (2) maanden na de vervaldatum"; not earlier); "mag ... na 2 maanden" in r3 is true as a floor and keeps V3.2 and bkrAfbet ("Heeft u een betalingsachterstand van 2 maanden? Dan staat dat ook geregistreerd."). r4 is cki art. 12 lid 1 onder c and bkrRood ("Dan komt dit na 3 maanden bij uw registratie te staan"). r5 is bkrFaq ("Uw gegevens blijven daarna nog 5 jaar zichtbaar") and cki art. 14 lid 1. r6 is bkrFaq ("Uw kredietaanbieder beoordeelt uw kredietaanvraag. Dit doen wij niet.").

### Vraag 3.1 (id: waarom, kind: pick, docs: abo, waarsch)
- Prompt: "Waarom staat het toestelkrediet van Sami bij BKR?"
- Options:
  - a "Omdat hij zijn sneakers niet betaalde"
  - b "Omdat iedereen van 18 bij BKR staat"
  - c "Omdat zijn abonnement € 15 per maand kost"
  - d "Omdat het toestel meer dan € 250 kost"
- Correct: d
- Retry pointer: rules r1 and r2.
- Nudge: "Lees regel 1 en 2. Wat kost het toestel?"
- Hint (30 s): "Kijk in het abonnement."
- Explanation: "Sami betaalt het toestel van € 480 in delen. Dat is een lening van meer dan € 250."
- Sources: bkrTel, bkrFaq
- Note: a is wrong because the question asks about the toestelkrediet, and BNPL is not registered at BKR on the sources read today (teacher only). The right option is not the longest (c is). Rules r1 and r2 together give the answer.

### Vraag 3.2 (id: wanneer, kind: pick, docs: waarsch)
- Situ: "Sami betaalt de termijn van 1 april ook daarna niet."
- Prompt: "Wanneer mag Belbaken dat op zijn vroegst melden bij BKR?"
- Options:
  - a "In mei"
  - b "In juli"
  - c "Over 5 jaar"
  - d "In juni"
- Correct: d
- Retry pointer: rule r3.
- Nudge: "Lees regel 3. Tel 2 maanden vanaf 1 april."
- Hint (30 s): "Regel 4 gaat over rood staan."
- Explanation: "Bij een lening als deze geldt 2 maanden. Na 1 april is dat juni."
- Sources: cki, bkrAfbet
- Note: a is one month, b is the 3-month rule for rood staan (r4), c the 5-year retention (r5). "Op zijn vroegst" because the reglement allows a report from 2 months after the due date, not earlier (cki art. 12 lid 1 onder b).

### Vraag 3.3 (id: beslist, kind: pick, docs: none)
- Situ: "Later wil Sami een lening voor een scooter. Bij BKR staat dan een achterstand."
- Prompt: "Wie beslist of hij die lening krijgt?"
- Options:
  - a "BKR, want daar staat de achterstand"
  - b "Niemand: met een achterstand kan het nooit"
  - c "De gemeente"
  - d "De aanbieder van de lening"
- Correct: d
- Retry pointer: rule r6.
- Nudge: "Lees regel 6."
- Hint (30 s): "BKR houdt alleen gegevens bij."
- Explanation: "BKR beslist niet. De aanbieder bekijkt je gegevens en beslist zelf."
- Sources: bkrFaq, bkrAfbet
- Note: docs none, so only the rule box shows (README). b is false: BKR writes that arrears do not mean you cannot get credit (bkrAfbet). c names a body that does not decide on loans.

### Cijfer kamer 3
- Clue: "Het 3e cijfer: iemand lost een lening helemaal af in 2027. Tot welk jaar blijft die dan bij BKR staan? Neem het laatste cijfer."
- Digit: **2** (2032: 5 jaar na aflossing in 2027; bkrFaq "Uw gegevens blijven daarna nog 5 jaar zichtbaar"; `clueDocs: ['rules']`). No room question asks the 5 years.
- Clue retry: "Lees regel 5. Tel 5 jaar bij 2027 op."
- Clue wrong (`clueWrong`): "7": "Tel er nog 5 jaar bij."
- Remember: "Een lening van meer dan € 250 staat bij BKR. Een achterstand van 2 maanden ook."

---

## Kamer 4. Incasso, deurwaarder en hulp (maandag 3 mei 2027)

**Intro:** "Het is maandag 3 mei 2027. Sami heeft Laterlijn nog steeds niet betaald. Nu krijgt hij een brief van een incassobureau."

### Document 4a: incasso (type: letter, kind: "Brief (verzonnen)", id: incasso)
From: "Incassobureau Grijsveld (verzonnen)". Place: "maandag 3 mei 2027". Greeting: "Beste Sami,".
- i1 "Wij innen je schuld voor Laterlijn."
- i2 "Totaal: € 96 plus € 40 incassokosten is € 136."
- i3 "Betaal binnen 5 dagen. Anders leggen wij morgen beslag op je loon."
Sign: "Incassobureau Grijsveld".

### Document 4b: advert (type: listing, id: advert)
Site: "advertentie in een app (verzonnen)". Title: "Al je schulden weg in 1 dag!". Price: "€ 79 per maand".
- s1 "Wij regelen alles. Geen wachttijd."
Note: "Verzonnen voorbeeld van een advertentie."

Design note: the letter of Grijsveld threatens wage garnishment "morgen". That is impossible: only a gerechtsdeurwaarder can levy beslag, and for a debt to a company he needs a vonnis (roDeurw; acmIncasso: "Een incassobureau mag niet dreigen met dingen die zij eigenlijk helemaal niet kunnen doen"). The advert has no brand name, so it imitates no real firm. The € 136 is consistent with room 2 (€ 96 plus € 40). r6 (dagvaarding) is for the next step after a deurwaarder letter; no question depends on it.

**Moeilijke woorden (plain):** "Innen: geld ophalen. Beslag: geld of spullen afnemen voor een schuld. Vonnis: de beslissing van een rechter. Betalingsregeling: een schuld in delen betalen. Anoniem: zonder je naam te geven."

Split over the documents: doc incasso has "Innen" to "Betalingsregeling", doc advert has "Anoniem".

**Rule box (`rules`, title "Regels"):**
- r1 "Alleen een deurwaarder kan beslag leggen. Een incassobureau kan dat niet."
- r2 "Bij een schuld aan een bedrijf heeft de deurwaarder eerst een vonnis nodig."
- r3 "Kun je niet alles in één keer betalen? Vraag meteen een betalingsregeling."
- r4 "Gratis hulp: je gemeente en Geldfit (anoniem bellen, chatten of appen)."
- r5 "De gemeente spreekt je binnen 4 weken. Dreigt huisuitzetting of afsluiting van energie of water? Dan binnen 3 werkdagen."
- r6 "Krijg je een dagvaarding, een oproep om naar de rechter te komen? Reageer altijd. Anders beslist de rechter zonder jou."

Note on the rules: r1 and r2 are roDeurw ("Een schuldeiser of een incassobureau kan dat niet."; "kan alleen beslag leggen op uw goederen als hij een dwangbevel of een vonnis van de rechter heeft"); r2 says "bij een schuld aan een bedrijf" because a dwangbevel is only for public bodies (Awb art. 4:114 and 4:115, read by fact check A); other titels (a notariële akte) and conservatoir beslag are in the teacher detail only (Rv art. 430). r3 is roHoeKom and roGdw. r4 is roHoeKom ("Voor gratis advies en hulp bij het oplossen van uw schulden gaat u naar uw gemeente"; Geldfit "gratis en anoniem") and roGeldstress ("via WhatsApp, de chat op geldfit.nl of door te bellen naar 0800-8115"). r5 is Wgs art. 4 lid 1 and 2 ("binnen vier weken"; "binnen drie werkdagen"; "gedwongen woningontruiming, beëindiging van de levering van gas, elektriciteit, stadsverwarming of water"); the zorgverzekering case is left out of the pupil rule for length and is in the teacher detail. r6 is rsDagv ("Reageert u niet? Ook dan oordeelt de rechter over de eis."); the dagvaarding is served by the gerechtsdeurwaarder for the schuldeiser, not sent by the rechter (roDeurw: "U krijgt via de gerechtsdeurwaarder een oproep om voor de kantonrechter te verschijnen. Dit heet een dagvaarding."), so r6 names no sender.

### Vraag 4.1 (id: beslag, kind: pick, docs: incasso)
- Prompt: "Kan Grijsveld morgen beslag leggen op het loon van Sami?"
- Options:
  - a "Ja, want hij kreeg een 14-dagenbrief"
  - b "Ja, want de schuld is € 136"
  - c "Nee, want Sami is pas 18"
  - d "Nee, dat kan alleen een deurwaarder"
- Correct: d
- Retry pointer: rule r1.
- Nudge: "Lees regel 1. Wie kan beslag leggen?"
- Hint (30 s): "Is Grijsveld een deurwaarder?"
- Explanation: "Een incassobureau kan geen beslag leggen. Een deurwaarder kan dat pas na een vonnis."
- Sources: roDeurw, acmIncasso
- Note: c and a give reasons no rule gives; b names a fact that does not matter. The right option is not the longest (a is) and shares "Nee" with c.

### Vraag 4.2 (id: regeling, kind: pick, docs: incasso)
- Situ: "Sami kan € 136 niet in één keer betalen. Wel € 30 per maand."
- Prompt: "Wat doet hij het best eerst?"
- Options:
  - a "Hij wacht tot de deurwaarder komt"
  - b "Hij gooit de brief meteen weg"
  - c "Hij neemt snel een nieuwe lening om te betalen"
  - d "Hij vraagt om een betalingsregeling"
- Correct: d
- Retry pointer: rule r3.
- Nudge: "Lees regel 3."
- Hint (30 s): "In delen betalen heeft een naam."
- Explanation: "Met een betalingsregeling betaalt Sami in delen, bijvoorbeeld € 30 per maand. Wachten kan extra kosten geven."
- Sources: roHoeKom, roGdw, roDeurw
- Note: the situ states that Sami can pay € 30 a month, which makes a betalingsregeling the defensible first step (roHoeKom: "Dan kunt u een betalingsregeling voorstellen aan uw schuldeisers"; roGdw). b ignores a real debt; a waits for costs; c adds a loan. The right option is not the longest (c is).

### Vraag 4.3 (id: gratis, kind: pick, docs: advert)
- Prompt: "Waar krijgt Sami gratis hulp?"
- Options:
  - a "Bij de advertentie"
  - b "Bij Incassobureau Grijsveld"
  - c "Bij BKR"
  - d "Bij de gemeente of Geldfit"
- Correct: d
- Retry pointer: rule r4.
- Nudge: "Lees regel 4."
- Hint (30 s): "Kijk naar de prijs in de advertentie."
- Explanation: "De gemeente en Geldfit helpen gratis. De advertentie kost € 79 per maand."
- Sources: roHoeKom, roGeldstress
- Note: the advert shows a price; gemeente and Geldfit are free (roHoeKom, roGeldstress). BKR does not give debt help. The right option is not the longest (b is).

### Cijfer kamer 4
- Clue: "Het 4e cijfer: iemand moet over een week zijn huis uit. Hij vraagt de gemeente om hulp. Binnen hoeveel werkdagen is er een gesprek?"
- Digit: **3** (3 werkdagen bij dreigende huisuitzetting; Wgs art. 4 lid 2; `clueDocs: ['rules']`). No room question asks the term.
- Clue retry: "Lees regel 5. Dit is spoed."
- Clue wrong (`clueWrong`): "4": "4 weken is de gewone wachttijd. Dit is spoed."
- Remember: "Alleen een deurwaarder met een vonnis kan beslag leggen. Vraag een betalingsregeling en gratis hulp."

---

## Plan: Mijn rekeningencheck

The plan is personal: each pupil makes their own, on paper and, if they want, on the end screen (existing engine plan: `when`, `then`, `within`, own text). It stays on the screen only: never logged, never sent, never stored. Every line works for a pupil who never uses BNPL and has no debts.

Engine data:
- `plan.intro`: "Kies één ding. Zet er een moment bij."
- `plan.when`: ["ik achteraf betaal", "ik een herinnering krijg", "ik niet kan betalen"]
- `plan.then`: ["zet ik de laatste dag in mijn agenda", "zoek ik de datum en kosten in de brief", "vraag ik een betalingsregeling of app ik Geldfit"]
- `plan.within`: ["een dag", "een week", "twee weken"]
- Own text field (existing): pupils may type their own "dan".

Paper slip `slip` "Mijn rekeningencheck" (optional, one per pupil, two per A4; printed from the teacher screen; `screen` not set, so the end screen shows a read-only reminder). Slip intro (`slip.intro`): "Dit is van jou. Je hoeft het aan niemand te laten zien." Six fields:
"Mijn rekeningencheck
1. Ik betaal weleens achteraf: ja / nee / weet ik niet (omcirkel)
2. Hier houd ik mijn betaaldagen bij: ...
3. Ik lees mijn mail elke week: ja / nee / soms (omcirkel)
4. Ik zet betaaldagen in mijn agenda: ja / nee / vanaf nu (omcirkel)
5. Ik weet hoe ik Geldfit bereik: ja / nee (omcirkel)
6. Eén vraag aan iemand die ik vertrouw: ...
Gratis hulp: je gemeente en Geldfit (geldfit.nl, 0800-8115)."

The slip asks no amount, no debt, no lender and no account number (sensitivity). Data: fields 1, 3, 4, 5 label up to the colon, hint the choices, lines 0; field 2 lines 1; field 6 lines 2. Footer: the "Gratis hulp" line (roGeldstress, roHoeKom).

---

## Start- en eindcheck: twee parallelle vormen, A en B (elk 4 vragen, één per kamer, enkele keuze, score 0 tot 4)

No feedback during the check. Each question works without the room's documents and rule box. Question n of form A and question n of form B test the same rule at the same difficulty with a different case. Counterbalance as in ESC-KAMER (random A or B first, engine v3). No check item repeats a room question. In each form no letter is right more than twice in a row (A: b, c, b, c; B: a, c, a, b).

### Vorm A

| # | Kamer | Vraag | Opties | Goed | Regel en bron |
|---|---|---|---|---|---|
| C1 | 1 Later betalen | "Je pakket komt maandag 10 mei. Je betaalt achteraf: binnen 14 dagen, vanaf de dag erna. Tot en met wanneer kun je betalen?" | a Tot en met 17 mei; b Tot en met 24 mei; c Tot en met 10 juni | b | tellen vanaf de dag na levering (afmBnpl, rsAanb) |
| C2 | 2 Brieven | "Je schuld is € 600. Na de 14-dagenbrief betaal je niet. Hoeveel incassokosten mogen er hoogstens bij?" | a € 40, het minimum; b € 60, dat is 10%; c € 90 | c | 15%, minimaal € 40 (besluit, roIncasso) |
| C3 | 3 BKR | "Je koopt een telefoon van € 180 op afbetaling. Komt die lening bij BKR?" | a Ja, elke telefoon op afbetaling komt bij BKR; b Nee, het toestel kost € 250 of minder; c Nee, alleen leningen van banken | b | toestel meer dan € 250 (bkrTel) |
| C4 | 4 Hulp | "Een incassobureau belt: 'Betaal vandaag, anders halen we morgen geld van je rekening.' Kan dat?" | a Ja, een incassobureau mag beslag leggen op je rekening; b Nee, alleen de politie mag dat; c Nee, alleen een deurwaarder na een vonnis | c | beslag alleen door een deurwaarder met een vonnis (roDeurw) |

### Vorm B

| # | Kamer | Vraag | Opties | Goed | Regel en bron |
|---|---|---|---|---|---|
| B1 | 1 Later betalen | "Je pakket komt dinsdag 1 juni. Je betaalt achteraf: binnen 30 dagen, vanaf de dag erna. Tot en met wanneer kun je betalen?" | a Tot en met 1 juli; b Tot en met 30 juni; c Tot en met 15 juni | a | tellen vanaf de dag na levering (afmBnpl, rsAanb) |
| B2 | 2 Brieven | "Je schuld is € 200. Na de 14-dagenbrief betaal je niet. Hoeveel incassokosten mogen er hoogstens bij?" | a € 30, dat is 15%; b € 20, dat is 10%; c € 40 | c | 15%, minimaal € 40 (besluit, roIncasso) |
| B3 | 3 BKR | "Je koopt een laptop van € 600 op afbetaling, in 12 maanden. Komt die lening bij BKR?" | a Ja, het is een lening van meer dan € 250; b Nee, alleen een telefoon op afbetaling telt; c Ja, maar alleen als je te laat betaalt | a | lening van meer dan € 250 (bkrFaq, bkrAfbet) |
| B4 | 4 Hulp | "Je schuld is bij een webshop. Er was geen rechtszaak. Een deurwaarder schrijft: 'Morgen beslag op je loon.' Mag dat?" | a Ja, een deurwaarder mag altijd beslag leggen; b Nee, eerst moet de rechter een vonnis geven; c Nee, een deurwaarder mag nooit beslag leggen | b | vonnis nodig (roDeurw) |

Parallel checks: C1 and B1 count a term from the day after delivery (14 and 30 days); C2 and B2 compute incassokosten above and below the € 40 minimum; C3 and B3 apply the € 250 BKR threshold with a no and a yes; C4 and B4 apply "beslag only by a deurwaarder with a vonnis" to an incassobureau and to a deurwaarder without a court case. In C1, a is 7 days and c one month later; in B1, b counts the delivery day as day 1 and c is 14 days instead of 30. Options start with "Tot en met", so no weekday gives the answer away. In C2 and B2 the wrong options carry the calculation that leads to them; the right option is the shortest. Option shapes checked by script.

Score: 1 point per right answer, 0 to 4, before and after, shown per pair on the end screen.

---

## Lesplan voor de docent (45 minuten)

Teacher screen, first line (`teacher.audience`): "Voor havo 5 en vwo 6, ook bruikbaar in mbo niveau 3 en 4. Voor het mentoruur, LOB of economie. Het gaat over brieven lezen na een gemiste betaling."
Second line (`teacher.audience`): "Gecontroleerd op 7 november 2026. Het verhaal speelt van februari tot mei 2027. De nieuwe wet voor achteraf betalen was op 7 november 2026 nog niet in werking. De les vraagt daar niets over."

| Lesminuut | Duur | Onderdeel | Wat je doet |
|---|---|---|---|
| 0 tot 4 | 4 | Uitleg en inloggen | Zet de link en de klascode al op het bord voordat de les begint. Zeg: de mensen, de bedrijven en de bedragen zijn verzonnen. De regels zijn echt. Leerlingen werken met z'n tweeën op één scherm. Vraag niemand naar eigen schulden. Deel de papiertjes "Mijn rekeningencheck" uit als je ze gebruikt. |
| 4 tot 6 | 2 | Startcheck | Elk tweetal beantwoordt vier vragen (vorm A of B) voordat de klok start. Geef geen hints. |
| 6 tot 32 | 26 | Escape | Start de klastimer. Tweetallen spelen vier kamers en schrijven elk cijfer op. Klaar voor de tijd? Geef de extra vraag van kamer 2. Loopt een tweetal achter? Wijs naar de regel, niet naar het antwoord. |
| 32 | | Stop | Op minuut 32 stopt iedereen, ook wie nog niet klaar is. Lees de cijfers voor van je geprinte antwoordblad. Alle tweetallen doen daarna de eindcheck. |
| 32 tot 35 | 3 | Stop en eindcheck | De andere vorm: vier vragen over dezelfde regels. Daarna ziet elk tweetal wat het goed had, voor en na. |
| 35 tot 39 | 4 | Nabespreken | Vraag met handopsteken: wie had bij de startcheck 3 of 4 goed? En bij de eindcheck? Vraag welke kamer het lastigst was en begin daar. Vraag niet naar eigen ervaringen. |
| 39 tot 44 | 5 | Mijn rekeningencheck | Iedereen kiest zijn eigen plan of vult het papiertje in. Niemand hoeft iets voor te lezen. Stel daarna de slotvraag. |
| 44 tot 45 | 1 | Reserve | Voor inloggen dat uitloopt. De escape stopt altijd op minuut 32. |

Total 45 minutes: 4 + 2 + 26 + 3 + 4 + 5 + 1 = 45. `minutes: 26`.
Materials: een apparaat per tweetal (laptop, Chromebook of telefoon), pen en papier voor de cijfers, een digibord of beamer. 1 papiertje "Mijn rekeningencheck" per leerling (vooraf geprint, als je het gebruikt).

Timing estimate (desk, not timed with pupils, plus or minus 30 percent): about 18 minutes for an average havo 5 pair, 23 for a weaker pair, 12 for a strong vwo 6 pair. Rooms 1 and 2 need counting days; room 4 has the most rules. The extra question for fast pairs is the `discuss` prompt of room 2 (answer in the teacherNote).

Tip voor de docent: Na twee foute antwoorden laat de les het goede antwoord zien. Een tweetal kan dus doorklikken zonder te lezen. Dat telt niet mee bij "In één keer goed". Zeg: goed lezen gaat sneller.

Care points ("Let op"):
1. "Sommige leerlingen hebben thuis schulden of geldzorgen. Vraag niet naar eigen ervaringen of naar het geld van hun ouders. Praat alleen over het verhaal van Sami."
2. "Vertelt een leerling toch iets over schulden? Luister kort en praat na de les apart verder. Wijs op de mentor, de zorgcoördinator of Geldfit."
3. "De bedrijven, brieven en bedragen zijn verzonnen. Noem geen echte webshop of betaaldienst als slecht voorbeeld."
4. "De nieuwe wet voor achteraf betalen was op 7 november 2026 nog niet in werking. Zeg niet dat de nieuwe regels al gelden."
5. "Kamer 1 en 2 vragen om dagen tellen. Laat tweetallen een kalender gebruiken als dat helpt."
6. "Alleen voor de economiedocent: achteraf betalen is lenen. Je consumeert nu en betaalt later (E1). Incasso en BKR zijn geen examenstof."

Note for developers: the stop at minute 32 uses the existing engine stop flow. The digits are never on the open lesson plan.

### Voor de docent, per kamer

Kern (`teacherNote`):
- Kamer 1: "Vraag niet wie zelf achteraf betaalt. Vraag wel: waar zie je de laatste betaaldag?"
- Kamer 2: "Extra vraag: bij een schuld van € 3.000 is het 15% van € 2.500 plus 10% van € 500. Dat is € 425."
- Kamer 3: "Zeg erbij: BKR beslist niet over leningen, de aanbieder wel. Voor veel leerlingen is nieuw dat een telefoon op afbetaling een lening is."
- Kamer 4: "Noem de gratis hulp: de gemeente, Geldfit (0800-8115) en het Juridisch Loket (0800 80 20). Vraag niemand naar eigen schulden."

Dit wordt vaak gevraagd (`teacher.faq`):
- "Mag je onder de 18 achteraf betalen?" Antwoord: "Volgens het Nibud mag het nu al niet onder de 18. Een nieuwe wet maakt dat strenger. Die wet was op 7 november 2026 nog niet in werking."
- "Komt achteraf betalen bij BKR?" Antwoord: "Tot nu toe niet, volgens Wijzer in geldzaken. De nieuwe wet brengt een BKR-check en registratie. Die wet was op 7 november 2026 nog niet in werking."
- "Mag een bedrijf herinneringskosten rekenen?" Antwoord: "Volgens de Rijksoverheid mogen er naast incassokosten geen herinneringskosten bij. Sommige betaaldiensten rekenen toch kosten bij een herinnering. Twijfel je? Vraag het Juridisch Loket."
- "Wat als de 14-dagenbrief niet klopt?" Antwoord: "Krijg je minder dan 14 dagen, of staan de kosten er niet in? Dan hoef je die incassokosten niet te betalen. Het bedrijf kan wel een nieuwe, goede brief sturen. De schuld zelf blijft."
- "Mag er btw over de incassokosten?" Antwoord: "Alleen als de schuldeiser zelf geen btw kan terugvragen. De les rekent zonder btw."
- "Wat is een dagvaarding?" Antwoord: "Een oproep om naar de rechter te komen. Reageer altijd. Reageer je niet, dan beslist de rechter toch."
- "Wat mag een deurwaarder niet meenemen?" Antwoord: "Je bed, eten en drinken en de kleren die je draagt."
- "Hoe weet ik of een incassobureau echt is?" Antwoord: "Een incassobureau moet in een openbaar register van de overheid staan. Het moet ook kunnen laten zien dat de rekening klopt."
- "Een leerling vertelt over schulden thuis. Wat nu?" Antwoord: "Luister, maar vraag niet door in de klas. Praat na de les apart. Wijs op de mentor, de zorgcoördinator of Geldfit."
- "Waar vind ik gratis juridisch advies?" Antwoord: "Bij het Juridisch Loket, 0800 80 20. Het advies is gratis bij een laag inkomen."

FAQ notes (not shown): under 18: nibud25 ("Het mag niet als je jonger bent dan 18"), ek36924 and roBnpl for the pending ban. BKR: wigBnpl ("De aanbieders zijn bijvoorbeeld niet aangesloten bij Bureau Krediet Registratie (BKR)"; page text predates the bill) and roBnpl ("Zij moeten kredieten voortaan registreren bij het BKR"). Btw: besluit art. 2 lid 3 and roIncasso ("Dit mag alleen als de schuldeiser zelf niet btw-plichtig is."); digit 2, C2 and B2 work without btw (rule r4), the answer sheet says so. 14-dagenbrief niet goed: hr2016 ("dan dient hij (zo nodig alsnog) een aan de wettelijke eisen beantwoordende veertiendagenbrief aan de schuldenaar te verzenden"). Second source for the BKR line: ah1015 ("krediet onder voorwaarden te registreren bij Bureau Krediet Registratie (BKR)"; "mag BNPL niet worden verstrekt aan minderjarigen"). Herinneringskosten: roIncasso ("mogen niet naast de incassokosten ook nog aanmaningskosten, herinneringskosten of administratiekosten in rekening brengen") against afmBnpl ("Als je niet op tijd betaalt kunnen er herinneringskosten in rekening gebracht worden"); see Onzeker. 14-dagenbrief niet goed: BW 6:96 lid 6 (the costs are only owed after a proper aanmaning) and hr2016. Dagvaarding: rsDagv. Deurwaarder: roDeurw. Register: wki3 (art. 3 lid 3 and 5, art. 4 lid 1). Juridisch Loket: roJL ("0800 80 20 (gratis)"; "personen met een laag inkomen en weinig vermogen").

Bronnen en uitzonderingen (`teacherDetail`, shown closed as "Bronnen bij deze kamer"; plain Dutch with short labels and source titles, no internal keys):
- Kamer 1: Achteraf betalen: je betaalt binnen 14 of 30 dagen na levering, of in 3 termijnen. Herinneringen komen vaak van de betaaldienst, niet van de webshop, en vaak alleen per mail (AFM, Achteraf betalen: Buy Now, Pay Later; Wijzer in geldzaken, Verstandig omgaan met buy now, pay later). De termijn en de gratis herinnering in deze les staan in verzonnen voorwaarden. Echte aanbieders kunnen andere termijnen hebben, en de AFM schrijft dat sommige herinneringskosten rekenen. Leeftijd: volgens het Nibud mag achteraf betalen nu al niet onder de 18. Een nieuwe wet met een verbod onder de 18, een kredietcheck en BKR-registratie is op 6 oktober 2026 door de Tweede Kamer aangenomen. Op 7 november 2026 had de Eerste Kamer nog niet gestemd en was de wet niet in werking (Eerste Kamer, wetsvoorstel 36.924). De AFM noemt 20 november 2026 als begin van haar toezicht. Daarom vraagt de les hier niets over.
- Kamer 2: 14-dagenbrief: bij een consument mogen incassokosten pas na een aanmaning met een termijn van 14 dagen, die begint op de dag na de aanmaning. De brief moet de gevolgen noemen, ook de hoogte van de kosten (Burgerlijk Wetboek Boek 6, art. 96 lid 6). De Rechtspraak beveelt aan: 14 dagen vanaf de dag nadat de brief is ontvangen, met een verwijzing naar de Hoge Raad (2016) (Rechtspraak, Aanbeveling over de 14-dagenbrief). Hoogte: 15% over de eerste € 2.500, dan 10%, 5%, 1% en 0,5%, minimaal € 40 en hoogstens € 6.775 (Besluit vergoeding voor buitengerechtelijke incassokosten art. 2). Naast incassokosten mogen geen herinneringskosten of administratiekosten bij, wel rente; btw alleen als de schuldeiser niet btw-plichtig is (Rijksoverheid, Hoeveel betaal ik voor incassokosten?). Klopt de brief niet, bijvoorbeeld minder dan 14 dagen of geen bedrag, dan zijn de incassokosten niet verschuldigd. De schuld zelf blijft.
- Kamer 3: BKR: een krediet van meer dan € 250 dat langer dan een maand loopt, staat bij BKR. Na aflossing blijven de gegevens nog 5 jaar zichtbaar. BKR beoordeelt geen aanvraag; dat doet de aanbieder, en een achterstand betekent niet dat je nooit meer krediet krijgt (BKR, Uw kredietregistratie bij BKR; Kopen op afbetaling). Telefoon: alleen een toestel van meer dan € 250 geeft een registratie (BKR, Telefoonabonnement). Het gaat om het geleende bedrag (het bruto kredietbedrag); na een aanbetaling kan dat onder € 250 blijven (BKR, Algemeen Reglement CKI, art. 15 en 16). Achterstand: bij een aflopend krediet, zoals een toestelkrediet, moet de aanbieder de achterstand melden 2 maanden na de vervaldatum; eerder mag niet; bij een doorlopend krediet, zoals rood staan of een creditcard, na 3 maanden. De aanbieder moet je vooraf schriftelijk waarschuwen. Een ingehaalde achterstand meldt hij binnen 21 dagen als hersteld (BKR, Algemeen Reglement CKI, art. 12, 14 en 39; Rood staan). Achteraf betalen: volgens Wijzer in geldzaken zijn aanbieders van achteraf betalen niet aangesloten bij BKR. Dat kan veranderen met de nieuwe wet (zie kamer 1).
- Kamer 4: Beslag: alleen een gerechtsdeurwaarder kan beslag leggen, met een vonnis van de rechter of een dwangbevel (dat laatste alleen bij bepaalde schulden aan de overheid). Een schuldeiser of incassobureau kan dat niet. Een andere titel kan ook, bijvoorbeeld een notariële akte. Vóór een vonnis kan de rechter soms toestemming geven voor een voorlopig (conservatoir) beslag. Op bed, eten en drinken en de kleren die je draagt mag geen beslag (Rijksoverheid, Wanneer krijg ik te maken met een gerechtsdeurwaarder?). Een incassobureau mag niet dreigen met iets wat het niet kan, en moet kunnen laten zien dat de rekening klopt (ACM, ACM waarschuwt opnieuw voor agressieve incassobureaus). Een incassobureau moet in een openbaar register van de minister staan; zonder registratie is incasso verboden (Wet kwaliteit incassodienstverlening art. 3 en 4). Een deurwaarder kan vóór een rechtszaak een betalingsregeling afspreken; zijn kosten betaalt meestal de schuldenaar (Rijksoverheid, Gerechtsdeurwaarder). Dagvaarding: reageer altijd, anders beslist de rechter zonder jou (Rechtspraak, Dagvaarding gekregen). Hulp: Geldfit is gratis en anoniem, via WhatsApp, chat of 0800-8115 (Rijksoverheid, Campagne helpt jongeren met geldzorgen). De gemeente geeft gratis schuldhulp (Rijksoverheid, Hoe kom ik van beginnende geldzorgen of schulden af?). Eerste gesprek binnen 4 weken, bij dreigende ontruiming of afsluiting binnen 3 werkdagen (Wet gemeentelijke schuldhulpverlening art. 4). Het Juridisch Loket geeft gratis advies bij een laag inkomen, 0800 80 20 (Rijksoverheid, Juridisch Loket).

## Antwoordblad

Answers are given as the text on screen, without letters.

| Kamer | Vraag | Goed antwoord |
|---|---|---|
| 1 | Aan wie betalen | Aan Laterlijn |
| 1 | Laatste betaaldag | Maandag 22 februari |
| 1 | Wat komt eerst | Een gratis herinnering |
| 1 | **Cijfer** | **9** (19 maart) |
| 2 | Welke mail | De mail van 8 maart |
| 2 | Betalen zonder kosten | Maandag 22 maart |
| 2 | Klopt de € 40 | Ja, € 40 is het minimum |
| 2 | **Cijfer** | **6** (15% van € 400 = € 60, zonder btw) |
| 3 | Waarom bij BKR | Omdat het toestel meer dan € 250 kost |
| 3 | Melden bij BKR | In juni |
| 3 | Wie beslist | De aanbieder van de lening |
| 3 | **Cijfer** | **2** (2032) |
| 4 | Beslag op loon | Nee, dat kan alleen een deurwaarder |
| 4 | Eerste stap | Hij vraagt om een betalingsregeling |
| 4 | Gratis hulp | Bij de gemeente of Geldfit |
| 4 | **Cijfer** | **3** (3 werkdagen) |
| | **Code** | **9623** |

Start- en eindcheck vorm A: A1 Tot en met 24 mei; A2 € 90; A3 Nee, het toestel kost € 250 of minder; A4 Nee, alleen een deurwaarder na een vonnis. Vorm B: B1 Tot en met 1 juli; B2 € 40; B3 Ja, het is een lening van meer dan € 250; B4 Nee, eerst moet de rechter een vonnis geven. Extra vraag kamer 2: € 425.

(The line under the table names form A "A1 to A4", as Route 18, Verzekerd and Geld terug do; the check item ids in the data stay C1 to C4, the convention spec-compare and the engine use for form A.)

## Nabespreken

Drie gespreksvragen (kies er één of twee als de tijd kort is):
1. "Welke brief vond je het lastigst? Waarom?"
2. "Waarom wachten mensen soms lang met hulp vragen?"
3. "Wat doe je als je een rekening niet op tijd kunt betalen?"

Per kamer (`discuss`):
- Kamer 1: "Waarom voelt achteraf betalen soms niet als lenen? Extra voor snelle tweetallen: wat verandert er als de 14 dagen pas na levering beginnen?"
- Kamer 2: "Waarom moet een bedrijf eerst een 14-dagenbrief sturen? Extra voor snelle tweetallen: hoeveel incassokosten horen bij een schuld van € 3.000?"
- Kamer 3: "Wat merk je later van een achterstand bij BKR? En wat kun je doen als je een waarschuwingsbrief krijgt?"
- Kamer 4: "Hoe herken je betrouwbare hulp bij geldzorgen? En waarom helpt het om vroeg hulp te vragen?"

Slotvraag: "Noem één ding dat je doet als je een herinnering of een 14-dagenbrief krijgt."

Note: no prompt asks pupils whether they or their family have debts or use BNPL (care points 1 and 2). Question 2 is about people in general.

---

## Engine fit

Supported now, no change needed (README v3, `lessons/belasting-terug.js`): `letter` with `kind` and `note` (bestel, herin, brief14, waarsch, incasso), `contract` with `parties` (voorw), `table` rows (abo), `listing` with `site`, `price` and `lines` (advert), `plain` per document, room `rules` with numbered lines, `single` questions, `situ`, `pointTo` with `doc`/`line` (V1.2) and `rule`/`rules`, `docs: []` (V3.3, rule box still shown), `clueFull`, `clueDocs: ['rules']`, `clueRetry`, `clueWrong`, `where`, `teacherNote`, `teacherDetail`, `discuss`, `sources`, check forms A/B, the stop flow at minute 32, `teacher.plan` with `from`/`to`/`at`, `teacher.audience`, `teacher.faq`, `materials`, `tip`, `care`, `answers` with `format: 'text'`, the plan with `when`, `then`, `within` and own text, `slip` (six fields).

Checks for the data file (`lessons/rekening-blijft-liggen.js`):
1. Fixed shuffles for all 12 room questions (the spec writes the right answer last). Screen positions of the right answers: 2, 3, 1, 2, 3, 2, 1, 2, 3, 1, 3, 2; no position more than twice in a row.
2. No option, prompt, nudge, hint, explanation, clue or check item uses an order word, so no question needs `keepOrder`.
3. Mail addresses use the reserved `.example` domain; nothing is rendered as a link.
4. No `staleText`: the default banner after validUntil ("sommige bedragen kunnen verouderd zijn") fits, because the lesson shows amounts.
5. The slug is in `HIDE` in `build.js` (unlisted until review).

Not supported, noted for the engine team (not built now): an ordering question (put letters in date order), which the research brief proposed for room 2; it is replaced by "which mail is the 14-dagenbrief" and the deadline question.

---

## Brontabel

Pages read on 7 November 2026 with curl (HTML converted to text with pandoc, PDFs with pdftotext) or the web-fetch tool. Law texts read on wetten.overheid.nl in the version named (consolidated text). "Valid until": when the rule is next expected to change; "check" means the next scheduled check. juridischloket.nl and nibud.nl returned 403 to the reading tools today; their facts are taken from Rijksoverheid pages and the Nibud report hosted by Wijzer in geldzaken (Onzeker).

| Key | Rule (as used) | Source 1 | Source 2 | Checked | Valid until |
|---|---|---|---|---|---|
| afmBnpl | BNPL: pay 14 or 30 days after delivery or in 3 terms; reminders come from the BNPL provider, often by e-mail; incassokosten at least € 40; AFM supervision of BNPL "vanaf 20 november 2026". | [AFM, Achteraf betalen: Buy Now, Pay Later](https://www.afm.nl/nl-nl/consumenten/themas/lenen/achteraf-betalen): "Hiermee kun je de betaling uitstellen tot 14 of 30 dagen na de levering of in 3 termijnen betalen."; "Betalingsherinneringen worden vaak niet verstuurd door de webshop, maar door de aanbieder van achteraf betalen."; "Incassokosten bedragen minimaal €40."; "De AFM kan nu nog geen toezicht houden op aanbieders van achteraf betalen. Dit verandert vanaf 20 november 2026" | wigBnpl | 7 Nov 2026 | Re-check after 20 Nov 2026 |
| wigBnpl | Same BNPL basics; reminders from the BNPL provider; put the due date in your agenda; BNPL providers not connected to BKR (page predates the bill). | [Wijzer in geldzaken, Verstandig omgaan met buy now, pay later](https://www.wijzeringeldzaken.nl/lenen/buy-now-pay-later/): "binnen 14 of 30 dagen na de levering moet betalen"; "Betalingsherinneringen worden meestal niet door de webshop verstuurd, maar door de BNPL-aanbieder."; "Zet dit in je agenda."; "De aanbieders zijn bijvoorbeeld niet aangesloten bij Bureau Krediet Registratie (BKR)." | afmBnpl | 7 Nov 2026 | Re-check (page text is older than the bill) |
| bw696 | Consumer: incassokosten only after an aanmaning with 14 days from the day after the aanmaning, naming the consequences and the amount; one aanmaning for several claims. | [BW Boek 6, BWBR0005289, geldend van 16 juli 2026](https://wetten.overheid.nl/BWBR0005289/2026-07-16): art. 96 lid 6 ("eerst verschuldigd worden nadat de schuldenaar ... onder vermelding van de gevolgen van het uitblijven van betaling, waaronder de vergoeding die in overeenstemming met de nadere regels wordt gevorderd, vruchteloos is aangemaand tot betaling binnen een termijn van veertien dagen, aanvangende de dag na aanmaning"); lid 5 (AMvB, no deviation to the detriment of a consumer); lid 7 | roIncasso, rsAanb | 7 Nov 2026 | No set date |
| rsAanb | The 14 days run from the day after the letter is delivered or received. | [Rechtspraak, Aanbeveling over de 14-dagenbrief](https://www.rechtspraak.nl/voor-advocaten-en-juristen/reglementen-procedures-en-formulieren/civiel/tarieven-kosten-vergoedingen/aanbeveling-14-dagenbrief) (19 January 2017): "Betaling dient te geschieden binnen 14 dagen vanaf de dag nadat deze brief bij u is bezorgd/ door u is ontvangen"; refers to HR 25 November 2016, ECLI:NL:HR:2016:2704 (read by fact check A, row hr2016) | bw696 | 7 Nov 2026 | No set date |
| hr2016 (teacher only) | The term runs from the day after receipt; a defective brief triggers no costs, but the creditor may "zo nodig alsnog" send a compliant one. | [Hoge Raad 25 November 2016, ECLI:NL:HR:2016:2704](https://data.rechtspraak.nl/uitspraken/content?id=ECLI:NL:HR:2016:2704): "veertien dagen, aanvangende de dag na ontvangst van de aanmaning"; "Wil de schuldeiser recht hebben op betaling van incassokosten, dan dient hij (zo nodig alsnog) een aan de wettelijke eisen beantwoordende veertiendagenbrief aan de schuldenaar te verzenden." (quoted from fact check A) | rsAanb | 7 Nov 2026 | No set date |
| ah1015 (teacher only) | Government answer: with the new law BNPL credit is registered at BKR under conditions and not given to minors. | [Aanhangsel Handelingen TK 2025/2026, nr. 1015](https://zoek.officielebekendmakingen.nl/ah-tk-20252026-1015.pdf): "krediet onder voorwaarden te registreren bij Bureau Krediet Registratie (BKR)"; "mag BNPL niet worden verstrekt aan minderjarigen" (quoted from fact check A) | ek36924 | 7 Nov 2026 | Superseded once the law is in force |
| besluit | Scale: 15% of the first € 2.500, 10% of the next € 2.500, 5% of the next € 5.000, 1% of the next € 190.000, 0,5% above, maximum € 6.775; at least € 40; btw only if the creditor cannot reclaim it. | [Besluit vergoeding voor buitengerechtelijke incassokosten, BWBR0031432, geldend van 1 oktober 2024](https://wetten.overheid.nl/BWBR0031432/2024-10-01): art. 2 lid 1 ("15% van het bedrag van de hoofdsom van de vordering over de eerste € 2500"; "0,5% over het meerdere van de hoofdsom met een maximum van € 6775"), lid 2 ("bedraagt ten minste € 40"), lid 3 (btw) | roIncasso | 7 Nov 2026 | No set date |
| roIncasso | Same scale and minimum; no reminder or administration costs next to incassokosten; interest allowed; btw only if the creditor is not btw-plichtig. | [Rijksoverheid, Hoeveel betaal ik voor incassokosten?](https://www.rijksoverheid.nl/onderwerpen/schulden/vraag-en-antwoord/hoogte-incassokosten): "Er geldt een minimumbedrag van € 40 voor incassokosten."; "Dus zij mogen niet naast de incassokosten ook nog aanmaningskosten, herinneringskosten of administratiekosten in rekening brengen." | besluit | 7 Nov 2026 | No set date |
| bkrFaq | Positive registration: credit of more than € 250 running longer than one month; data stay 5 years after repayment; BKR does not assess applications. | [BKR, Uw kredietregistratie bij BKR](https://www.mijnkredietregistratie.nl/nl/veelgestelde-vragen/uw-kredietregistratie-bij-bkr): "Als kredietaanbieders een krediet van meer dan € 250 dat langer dan één maand loopt meteen op het moment van verstrekken aan ons doorgeven, is dat een positieve registratie."; "Uw gegevens blijven daarna nog 5 jaar zichtbaar."; "Uw kredietaanbieder beoordeelt uw kredietaanvraag. Dit doen wij niet." | cki | 7 Nov 2026 | Re-check after the consumer-credit law |
| bkrTel | A phone on afbetaling is a loan; registered only if the device costs more than € 250. | [BKR, Telefoonabonnement](https://www.mijnkredietregistratie.nl/nl/veelgestelde-vragen/telefoonabonnement): "U heeft dan een lening voor uw telefoon. Die wordt alleen bij ons geregistreerd als het toestel meer dan € 250 kost." | bkrAfbet | 7 Nov 2026 | Re-check after the consumer-credit law |
| bkrAfbet | Buying on afbetaling above € 250 is registered from the start; arrears of 2 months are registered; arrears do not mean no credit. | [BKR, Kredietregistratie bij kopen op afbetaling](https://www.mijnkredietregistratie.nl/nl/mijn-situatie/kopen-op-afbetaling): "Vanaf het moment dat u een consumptief krediet heeft, is dit bij ons bekend."; "Heeft u een betalingsachterstand van 2 maanden? Dan staat dat ook geregistreerd."; "dat betekent niet dat u geen krediet kunt krijgen" | cki | 7 Nov 2026 | Re-check after the consumer-credit law |
| bkrRood | Rood staan above € 250 is registered; arrears after 3 months. | [BKR, Kredietregistratie bij rood staan](https://www.mijnkredietregistratie.nl/nl/mijn-situatie/rood-staan): "Loopt u achter met terugbetalen? Dan komt dit na 3 maanden bij uw registratie te staan." | cki | 7 Nov 2026 | Re-check after the consumer-credit law |
| cki | The aanbieder must report arrears 2 months after the due date (aflopend krediet) or 3 months (doorlopend), not earlier; threshold is the bruto kredietbedrag of more than € 250 with a term over one month; recovery reported within 21 days; data of ended agreements removed 5 years after the end date; advance written warning. | [BKR, Algemeen Reglement CKI, 1 juli 2024](https://www.bkr.nl/media/4dyezfiz/algemeen-reglement-cki-juli-2024.pdf) (the version linked from bkr.nl today): art. 12 lid 1 onder a ("meldt de zakelijke klant dit"; "Een melding mag pas plaatsvinden als een termijnbedrag ... niet is voldaan"), onder b ("Bij een aflopend krediet ... geldt een termijn van twee (2) maanden na de vervaldatum"), onder c ("Bij een doorlopende kredietovereenkomst geldt een termijn van drie (3) maanden na de vervaldatum"), lid 2 ("binnen eenentwintig (21) dagen"); art. 14 lid 1 ("vijf (5) jaar na de werkelijke einddatum van de overeenkomst"); art. 15 lid 1 ("een looptijd van langer dan één (1) maand"); art. 16 lid 4 ("bruto kredietbedrag van meer dan € 250,-"); art. 39 lid 2 ("van te voren schriftelijk waarschuwen dat het niet betalen leidt tot het melden van een achterstand") | bkrAfbet, bkrRood | 7 Nov 2026 | Re-check after the consumer-credit law |
| roDeurw | Only a gerechtsdeurwaarder can levy beslag, with a dwangbevel or a vonnis; a creditor or incassobureau cannot; no beslag on bed, food and drink, the clothes you wear. | [Rijksoverheid, Wanneer krijg ik te maken met een gerechtsdeurwaarder?](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/schulden/wanneer-gerechtsdeurwaarder): "Een gerechtsdeurwaarder kan beslag leggen op uw goederen. Een schuldeiser of een incassobureau kan dat niet."; "Een gerechtsdeurwaarder kan alleen beslag leggen op uw goederen als hij een dwangbevel of een vonnis van de rechter heeft."; "Dit zijn bijvoorbeeld uw bed, eten en drinken, en de kleren die u draagt." | roGdw | 7 Nov 2026 | No set date |
| roGdw | A deurwaarder may try a betalingsregeling before a court case; costs of ambtshandelingen are set by law and mostly paid by the debtor. | [Rijksoverheid, Gerechtsdeurwaarder](https://www.rijksoverheid.nl/themas/recht-veiligheid-en-defensie/hulp-bij-juridisch-probleem/gerechtsdeurwaarder): "Voordat de schuldeiser een gerechtelijke procedure start, kan de gerechtsdeurwaarder met u een betalingsregeling proberen af te spreken."; "De kosten voor zogenaamde ambtshandelingen zijn wettelijk vastgelegd en moeten meestal door de schuldenaar worden betaald." | roDeurw | 7 Nov 2026 | No set date |
| acmIncasso | An incassobureau may not threaten with what it cannot do; it must be able to show the bill is right. | [ACM ConsuWijzer, ACM waarschuwt opnieuw voor agressieve incassobureaus](https://consument.acm.nl/nieuws/acm-waarschuwt-opnieuw-voor-agressieve-incassobureaus) (15 April 2020): "Een incassobureau mag niet dreigen met dingen die zij eigenlijk helemaal niet kunnen doen."; "Een incassobureau moet kunnen laten zien dat de rekening klopt." | roDeurw | 7 Nov 2026 | No set date |
| wki3 (teacher only) | Public register of incassobureaus kept by the minister; collecting without registration is forbidden. | [Wet kwaliteit incassodienstverlening, BWBR0046685, geldend van 1 oktober 2026](https://wetten.overheid.nl/BWBR0046685/2026-10-01): art. 3 lid 3 ("Het register wordt gehouden door Onze Minister"), lid 5 (published on a website); art. 4 lid 1 ("Het is verboden zonder registratie ... buitengerechtelijke incassowerkzaamheden te verrichten") | acmIncasso | 7 Nov 2026 | No set date |
| rsDagv | A dagvaarding starts a court case; if you do not respond, the judge still decides. | [Rechtspraak, Dagvaarding gekregen](https://www.rechtspraak.nl/Naar-de-rechter/dagvaarding-gekregen): "Heeft u een dagvaarding gekregen, dan is er een rechtszaak tegen u gestart."; "Reageert u niet? Ook dan oordeelt de rechter over de eis." | roDeurw | 7 Nov 2026 | No set date |
| roHoeKom | Free help from the gemeente; Geldfit free and anonymous, 0800-8115; propose a betalingsregeling to creditors; avoid unreliable providers. | [Rijksoverheid, Hoe kom ik van beginnende geldzorgen of schulden af?](https://www.rijksoverheid.nl/themas/recht-veiligheid-en-defensie/schulden/vraag-en-antwoord/schulden/hoe-kom-ik-van-mijn-schulden-af): "U kunt daar, gratis en anoniem, met al uw vragen terecht. Kijk op www.geldfit.nl of bel naar 0800-8115."; "Voor gratis advies en hulp bij het oplossen van uw schulden gaat u naar uw gemeente."; "Dan kunt u een betalingsregeling voorstellen aan uw schuldeisers."; "Zo voorkomt u dat u bij ondeskundige of onbetrouwbare aanbieders terechtkomt." | roGeldstress | 7 Nov 2026 | No set date |
| roGeldstress | Geldfit: free and anonymous via WhatsApp, chat or 0800-8115; campaign Geldstress for 18 to 27. | [Rijksoverheid, Campagne helpt jongeren met geldzorgen (14 oktober 2026)](https://www.rijksoverheid.nl/actueel/nieuws/2026/10/14/campagne-helpt-jongeren-met-geldzorgen): "Contact opnemen kan gratis en anoniem, via WhatsApp, de chat op geldfit.nl of door te bellen naar 0800-8115." | roHoeKom | 7 Nov 2026 | No set date |
| wgs4 | First conversation within 4 weeks; within 3 working days if eviction, cut-off of gas, electricity, district heating or water, or termination of the health insurance threatens. | [Wet gemeentelijke schuldhulpverlening, BWBR0031331, geldend van 1 juli 2026](https://wetten.overheid.nl/BWBR0031331/2026-07-01): art. 4 lid 1 ("vindt plaats binnen vier weken"), lid 2 ("binnen drie werkdagen ... gedwongen woningontruiming, beëindiging van de levering van gas, elektriciteit, stadsverwarming of water of opzegging dan wel ontbinding van de zorgverzekering") | roHoeKom | 7 Nov 2026 | No set date |
| roJL (teacher only) | Juridisch Loket: free advice for people with a low income and little capital; 0800 80 20 (free). | [Rijksoverheid, Juridisch Loket (contactgids)](https://www.rijksoverheid.nl/service/contact/contactgids/j/juridisch-loket): "0800 80 20 (gratis)"; "Het Juridisch Loket geeft gratis juridisch advies aan personen met een laag inkomen en weinig vermogen." | juridischloket.nl (read by fact check A: "Bel gratis 0800 - 8020 ... laag inkomen en weinig spaargeld") | 7 Nov 2026 | No set date |
| ek36924 (teacher only) | Status of the BNPL rules: bill adopted by the Tweede Kamer on 6 October 2026; Eerste Kamer committee report 3 November 2026, awaiting the government's reply; no Staatsblad; entry into force by royal decree, date not set. The amended bill bans credit with deferred payment to minors and requires age verification (new Wft art. 4:34b). | [Eerste Kamer, Implementatiewet herziene richtlijn consumentenkrediet (36.924)](https://www.eerstekamer.nl/wetsvoorstel/36924_implementatiewet_herziene): "Het voorstel (EK, A) is op 6 oktober 2026 aangenomen door de Tweede Kamer."; "heeft op 3 november 2026 het verslag (EK, B) uitgebracht en wacht op de nota naar aanleiding van het verslag"; inwerkingtreding "Op een bij koninklijk besluit te bepalen tijdstip"; [gewijzigd voorstel (EK, A)](https://www.eerstekamer.nl/eu/behandeling/20261006/gewijzigd_voorstel_van_wet_2/document3/f=/vn1lmfe0iuo0.pdf) art. 4:34b lid 1 ("verleent enkel een krediet ... aan een minderjarige consument indien de overeenkomst inzake krediet niet voorziet in uitstel van betaling") | roBnpl, afmBnpl | 7 Nov 2026 | Re-check weekly until in force |
| roBnpl (teacher only) | Government plan: CCD II measures "uiterlijk vanaf 20 november 2026"; BNPL banned under 18; credit check ("BKR-check"); AFM licence; foreign providers must register at BKR. Proposal then sent to the Raad van State. | [Rijksoverheid, Nieuwe regels voor buy now, pay later (31 oktober 2025)](https://www.rijksoverheid.nl/actueel/nieuws/2025/10/31/nieuwe-regels-voor-buy-now-pay-later): "De maatregelen uit de CCDII moeten uiterlijk vanaf 20 november 2026 ingaan."; "Bovendien worden BNPL-diensten verboden voor jongeren onder de 18 jaar."; "Zij moeten kredieten voortaan registreren bij het BKR." | ek36924 | 7 Nov 2026 | Superseded by the bill; re-check |
| nibud25 (teacher only) | 13% of pupils use BNPL; 38% of users once forgot to pay on time; BNPL not allowed under 18 (provider practice). | [Nibud, Betaalgedrag van scholieren 2025](https://wijzeringeldzaken.nl/platform-wijzeringeldzaken/publicaties/rapport-betaalgedrag-scholieren-nibud-2025.pdf): "Het is zorgelijk om te zien dat 13 procent van de scholieren gebruik kan maken van achteraf betalen (BNPL)."; "Het mag niet als je jonger bent dan 18"; "is 38 procent wel eens vergeten op tijd te betalen" | research file | 7 Nov 2026 | No set date |
| sylE1 (teacher only) | Economie havo CE 2027, E1.1 and E1.4. | [Examenblad, Syllabus economie havo 2027, versie 2, juli 2025](https://www.examenblad.nl/2027/havo/documenten/syllabus-economie-havo): E1 "Gezinnen ruilen over de tijd"; 1.1 "De samenhang tussen inkomsten / uitgaven (per periode) en vermogen / schulden"; 1.4 "Dat sparen beslag legt op consumptie in de toekomst en lenen beslag legt op consumptie nu." | research file | 7 Nov 2026 | Exam year 2027 |
| basisvisie (teacher only) | Nibud competence "problematische schulden voorkomen"; goals on the role of the incassobureau and knowing where help is. | [Wijzer in geldzaken, Basisvisie financiële educatie, leerplankader (2009)](https://www.wijzeringeldzaken.nl/platform-wijzeringeldzaken/publicaties/Leerplankader_basisvisie_Financi%C3%ABle_educatie_in_het_onderwijs.pdf): "De jongere is in staat problematische schulden te voorkomen door in te grijpen bij ontstaan van betalingsachterstanden"; "De leerling begrijpt dat er risico's zijn verbonden aan het niet betalen van rekeningen (rol incassobureau)"; "De leerling weet dat er hulpdiensten te raadplegen zijn bij financiële problemen" | research file | 7 Nov 2026 | No set date |

## Onzeker

- **BNPL rules (CCD II), status on 7 November 2026: not final, not in force.** The Implementatiewet herziene richtlijn consumentenkrediet (36.924) was adopted by the Tweede Kamer on 6 October 2026. The Eerste Kamer committee issued its report on 3 November 2026 and awaits the government's reply; there is no plenary vote, no Staatsblad and no date of entry into force (royal decree). The EU directive 2023/2225 asks for application from 20 November 2026 (roBnpl: "uiterlijk vanaf 20 november 2026"), and the AFM page already says "vanaf 20 november 2026" for its supervision, but the Dutch law can only apply once adopted and in force. The amended bill bans credit with deferred payment to minors and requires age verification (Wft art. 4:34b new); the credit check and BKR registration come from the directive and the government plan (roBnpl). Consequence for this lesson: no pupil question, rule or explanation mentions the 18+ ban, the credit check or BKR registration of BNPL; the teacher sees the status in the audience line, the FAQ, care point 4 and the teacher detail of room 1. Release gate.
- **Is BNPL registered at BKR now?** wigBnpl ("niet aangesloten bij Bureau Krediet Registratie (BKR)") and ah1015 (registration comes with the new law) agree: not yet. Whether a single "pay in 3" product above € 250 is already reported by a licensed lender stays open [verify]; it touches no pupil text.
- **Herinneringskosten.** Rijksoverheid says no reminder costs next to incassokosten; AFM and Wijzer say BNPL providers charge reminder costs ("gemiddeld €15", wigBnpl). Whether reminder costs before a 14-dagenbrief are lawful was not settled from primary sources today [verify]. The lesson's fictional terms make the reminder free; the FAQ shows both sides.
- **Nibud pages** returned 403 to the reading tools; Nibud facts come from the Nibud report on wijzeringeldzaken.nl (nibud25). The current Nibud leerdoelen for 16 to 18 were not retrieved; the competences quoted come from the 2009 basisvisie [verify current Nibud leerdoelen].
- **Name check** by web search only; the KvK Handelsregister was not searched [verify before publication, as in Verzekerd].
- **BKR rules after the new law.** The CKI reglement (1 July 2024) and the € 250 threshold can change when the law enters into force; a Tweede Kamer motion (Van Dijk c.s.) asks to review the € 250 registration limit (listed on ek36924). V3.1, V3.2, C3, B3 and digit 3 depend on BKR rules (release gate).
- **Research overlap.** The Farent "schuldenescape" named in the research file was not found [verify]; geldlessen.nl was not re-read for new BNPL or debt lessons today.
- **Btw on incassokosten.** Besluit art. 2 lid 3 allows btw on top when the creditor cannot reclaim it; a BNPL provider may be btw-exempt, so a real maximum on € 400 can be € 72,60. The lesson computes without btw (rule r4); answer sheet and FAQ say so.
- **Single-source items.** The 21-day recovery report (cki only, teacher).
- **Closed in rev 2 (fact check A):** HR 2016:2704 (read; confirms the rule and adds the repair letter, now in the FAQ); dwangbevel only for public bodies (Awb 4:114, 4:115); Juridisch Loket (juridischloket.nl read); Geldfit WhatsApp (geldfit.nl, second source); BNPL at BKR (ah1015); syllabus and basisvisie quotes.

## Voor een nieuw jaar

For a class in 2028: move every story date one year and re-check the weekdays (in 2028 8 maart is a Wednesday, so the 14-dagenbrief deadline changes weekday; keep the 14th day off a weekend or explain the Algemene termijnenwet). Re-check the € 40 minimum and the scale (Besluit art. 2; unchanged since 2012), the BKR threshold and terms (CKI reglement), the Wgs terms and Geldfit's number. If the BNPL law is in force, write a Revision with the 18+ rule and BKR registration in room 1 or 3 and re-derive the digits. The digits depend on: the clue dates (digit 1), the 15% rate (digit 2), the 5-year retention (digit 3) and the 3 working days (digit 4). Owner: the content team.

---

## Changelog

Item numbers refer to the room questions (V1.1 and so on), rule lines (r1 and so on) and check items (C1 to C4, B1 to B4) of this spec.

Rev 2 (7 November 2026), after fact check A (`content_new/factcheck_A_rekening-blijft-liggen.md`, FAIL, 1 ERROR, 12 RISK, no answer key affected). **Lock code unchanged: 9623; all 12 room answers, 4 digits and 8 check answers unchanged.** Spec and data changed together; `node build.js lessons/rekening-blijft-liggen.js` and `node tests/spec-compare.js rekening-blijft-liggen` (0 mismatches); no e2e.
- ERROR (r6 room 4, "dagvaarding van de rechter"): applied. r6 now "Krijg je een dagvaarding, een oproep om naar de rechter te komen? Reageer altijd. Anders beslist de rechter zonder jou." The rule note says the deurwaarder serves it for the schuldeiser.
- RISK V1.3 (22 februari is still on time): situ now "Het is 23 februari. Sami heeft nog niet betaald."
- RISK room 1 intro (room day before the shipping mail): intro now "Het is maandag 8 februari 2027. Sami (18) bestelde zaterdag sneakers ..."; `where` maandag 8 februari 2027. V1.2 option a (14 days from the order) stays a trap.
- RISK btw (digit 2, C2, B2): answer sheet digit 2 "(15% van € 400 = € 60, zonder btw)"; new FAQ "Mag er btw over de incassokosten?"; Onzeker item. No pupil change.
- RISK BKR report is a duty: teacher detail room 3 "moet de aanbieder de achterstand melden 2 maanden na de vervaldatum; eerder mag niet"; rule note updated; r3 and V3.2 unchanged.
- RISK vonnis nuance: teacher detail room 4 adds the notariële akte and conservatoir beslag. No pupil change.
- RISK FAQ 14-dagenbrief: adds "Het bedrijf kan wel een nieuwe, goede brief sturen." (hr2016, new source row).
- RISK answer sheet wording: five answers now copied word for word from the screens (room 1 "Een gratis herinnering"; room 4 "Hij vraagt om een betalingsregeling", "Bij de gemeente of Geldfit"; A3, A4).
- RISK code list: header now lists 2073, 2348, 2797, 2824, 3231, 3521, 4029, 4379, 5423.
- RISK bruto kredietbedrag: teacher detail room 3 adds it (cki art. 15 and 16).
- Not text changes: KvK check (stays [verify]), release gate (unchanged; ah1015 added to the FAQ notes and Brontabel), wigBnpl row (unchanged).

Rev 1 (7 November 2026), first version.
- Built from the research brief (`research/next_topics.md`, topic B and section 3.2) and the Geld terug and Verzekerd templates. Rooms as briefed (achteraf betalen; herinnering, aanmaning en 14-dagenbrief; BKR; hulp), with the changes listed under "Why this lesson".
- BNPL law status checked on the Eerste Kamer page and in the amended bill (see Onzeker); kept out of all scored text.
- WIK and incassokosten verified in BW 6:96 (version of 16 July 2026) and the Besluit vergoeding voor buitengerechtelijke incassokosten (version of 1 October 2024); the 14-day start from the Rechtspraak recommendation. BKR rules verified in BKR's consumer pages and the CKI reglement of 1 July 2024 (the research "[verify] thresholds" item closed: € 250, one month, 2 and 3 months, 5 years).
- Digits and code derived: 9 (19 maart), 6 (€ 60), 2 (2032), 3 (3 werkdagen). Code **9623**, not one of the nine existing codes.
- Self-review with scripts (`check.js` in the content team's scratchpad): no pupil sentence over 15 words, no option over 10 words, every explanation at most 2 sentences and 28 words, no dash, no order word, the right option never the longest and never the only one with its first word (rooms and checks). First draft had 2,500 pupil words in all; cut to 1,613 in the rooms and about 2,070 in all (word count at the top). Cuts: shorter document lines, one rule fewer in room 4 (the ACM threat rule moved to the teacher detail), shorter check prompts, a shorter slip. Kept on purpose: the dagvaarding rule (room 4 r6) and the Belbaken line on a betalingsregeling (w4), so each letter points to a next step.
- Sensitivity: care points 1 and 2, FAQ row "Een leerling vertelt over schulden thuis", the lesson plan rows "Uitleg en inloggen" and "Nabespreken" ("Vraag niet naar eigen ervaringen"), teacherNote rooms 1 and 4.
- Data file written: `kamers-engine/lessons/rekening-blijft-liggen.js` (slug `rekening-blijft-liggen`), this spec generated together with it; slug added to `HIDE` in `build.js`, and to `FORMAT`, `CHECKED_ON` and `STOP_AT` in `tests/spec-compare.js` (not to its default list, as for belasting-terug). No e2e suite run (shared test-out folders).
