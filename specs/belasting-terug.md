# Escape "Geld terug van de Belastingdienst" (content spec, ID voorstel: ESC-BELASTING)

Regels geldig voor: de aangifte inkomstenbelasting over belastingjaar 2026, gedaan in 2027 (the story plays from 1 to 16 March 2027); gecontroleerd op 7 november 2026; validUntil: 31 december 2027. `staleText`: "Let op: sommige regels of data kunnen verouderd zijn." Real amounts in pupil text: only the aanslaggrens over 2026 (€ 58, Wet IB 2001 art. 9.4 lid 1 onder a, version from 1 January 2026), in one gloss. Every other amount (wages, loonheffing, account numbers) is fictional and labelled so. No question needs a real amount: all questions use rules, dates and the fictional documents.

Release gate (as in Verzekerd, persona gate T1): on the day of publication, and again on 1 March 2027, re-read four pages that this lesson leans on and that can change for the 2027 season: (1) bdVIA, "In de aangifte-app kunt u geen gegevens aanpassen of aanvullen" (V3.2 depends on it; page dated 2 March 2026, written for aangifte 2025); (2) bdHoren, "Als u voor 1 april aangifte hebt gedaan, krijgt u voor 1 juli bericht" (V4.3, r4 room 4); (3) bdGeld, "binnen 1 week na de datum op de aanslag" (digit 4, r5 room 4); (4) bdMoet for 2026 (aanslaggrens € 58; it now shows the 2025 page). Also confirm that the 2026 aangifte opens on 1 March 2027 (ro18 and opIB say "vanaf 1 maart" in general; no Belastingdienst page for the 2027 season exists yet). Then update `checked`, `CHECKED_ON` in `tests/spec-compare.js` and the second audience line. If (1) changes, V3.2 and its explanation change; the digit and the code do not.

Doelgroep en moment: havo 4 en 5, vwo 4 tot en met 6, vooral leerlingen met een bijbaan (from 16; minors with a bijbaan file their own aangifte, bdMinder). Mentoruur, LOB or economie as a practice hour; it is not CE stof (no syllabus item is claimed). Window: 1 March to 30 June 2027 (the aangifte over 2026 is open and the rule "vóór 1 april, bericht vóór 1 juli" is still useful). Hook: Week van het geld, 15 tot 19 maart 2027 (vo-skill "Geldgroeier"; dates from the research file, weekvanhetgeld.nl, secondary). Lesduur 45 minuten, escape 26 minuten, stop op minuut 32 (same timing as Verzekerd and Route 18).

Format as ESC-KAMER, Route 18 and Verzekerd: four rooms, 3 questions per room, one retry with a nudge that points to a line, a hint that costs 30 seconds, one digit per room, one lock of four digits, then the end check, the end screen and the plan. Pupil text is Dutch B1, sentences at most 20 words, no em or en dashes. Rules come only from the source table at the end. All pages and law texts read on 7 November 2026.

Rule boxes (`room.rules`): every rule a pupil needs on the first try is in the room's rule box, the situation text or the room's documents (G4 fix 3). Each digit clue shows the facts it needs (G4 fix 1), names its lock position (G4 fix 2) and uses a new case, so it does not repeat a room answer (persona gate P8). Known errors of earlier checks, avoided from the start:
- No absolute rule where the law or the page has an exception: "meestal" where Belastingdienst names exceptions (r5 room 4), "waarschijnlijk" where it says so (r5 room 2), "Vaak is dat 1 mei" (r2 room 1).
- One defensible answer per question: each situ states the fact that would otherwise open a second answer (V1.3 "ze krijgt geld terug"; V3.2 "je jaaropgaaf klopt"; V3.3 "die rekening is opgeheven").
- Hints point to a place or a method, never to the option; no retry pointer highlights the answer line itself (V3.1 points to the rule, not to row v2).
- Conditions are written as conditions: "Deed je vóór 1 april aangifte? Dan krijg je vóór 1 juli bericht." V4.3 has "Vóór 1 april 2027" as the trap option for pupils who read the condition as the consequence.
- Fictional numbers never clash with real rules: the Golfkoel withholding (€ 765 on € 2.140) is 35,75% of the wage, the real 2026 first-bracket rate without loonheffingskorting; Kwelderhof with korting withholds € 0 on € 405 a month (teacher detail room 2 has the check).
- Option shapes (persona gate): in every question and check item the right option is not the longest, not the only one with its first word, not the only one with two reasons, and not the sum of the other options (checked by script, see changelog).
- No real company names: all employers checked in the KvK Handelsregister (see the fiction paragraph).
- No order words ("beide", "allebei", "geen van", "bovenstaande") in options, prompts, nudges, hints, explanations or check items.

Why this lesson (research `research/next_topics.md`, topic C and section 3.3): the money left unclaimed is the largest measured behaviour gap among the topics (about 4 in 10 young people with a job reclaimed, per the research file, not re-read today; the Belastingdienst's own teacher guide says mbo students with a bijbaan leave "gemiddeld enkele honderden euro's per jaar liggen", bles). The season opens on 1 March and Week van het geld follows two weeks later. Overlap avoided on purpose:
- **Je eerste bijbaan, kamer 4** (`content_new/eerste-bijbaan.md`): teaches loonheffingskorting at one employer at a time (4.1), where the tax is on a jaaropgaaf (4.2), that you reclaim with an aangifte after the year (4.3), and the 5-year window counted forward ("tot en met 2031", 4.4). Its teacher note says: with a letter, follow the letter; without a letter you must still file above the aanslaggrens; sequential employers may each apply the korting. This lesson builds on that and repeats none of those questions. Room 1 asks what the letter changes (moet against mag, the date in the letter, the 1 May trap) and counts the 5 years backwards in the digit clue (2022). Room 2 reads two jaaropgaven together, explains why one withheld tax and the other not, and reads periods to find double korting; the sequential exception that eerste-bijbaan keeps in the teacher note becomes a pupil rule and check item. Rules r4 and r5 of room 1 state eerste-bijbaan r3 in nearly the same words ("brief" for "bericht", as bdMoet does), so the two lessons never disagree.
- **Eerste maand** (`d34`): signals of an sms scam (haste, a payment link) and DigiD Machtigen (drill in `d34/src/drills2.js`, a friend who asks for your password). Room 4 here does not ask either again. It asks the tax-specific rule (the Belastingdienst never mails a button or link to log in, also not about a refund), that a real name in the mail proves nothing, where you can be sure a message is real (Mijn Belastingdienst), and when the result and the money arrive.
- **"Laat geen geld liggen" (Belastingdienst, belastingles.nl; listed on geldlessen.nl)**: a free lesson of about 45 minutes with polls, a 5-minute video and an "oefentool" in which pupils fill in a simplified aangifte step by step for a case of a peer, plus a quiz and a pointer to the Belastingdienst's online simulator; it can also be given as a guest lesson. Its guide says it is aimed mainly at mbo students and "met name gericht op het proces van aangifte doen" (bles). This escape does something else: pairs put realistic documents side by side (two jaaropgaven, a pre-filled screen) and find one fault, decide moet or mag from a letter, and judge a refund mail. Teachers can use both, in either order; the teacher screen names it neutrally as further material (FAQ and teacherDetail room 3).

Lead: "Krijg je geld terug van je bijbaan? Weet of je moet of mag, lees je jaaropgaven, check je aangifte en log veilig in."

The lead is used on the start screen and the site card (spec-compare reads it from the spec).

Fiction line (shown once at the start):
"Verzonnen zijn de mensen, de werkgevers, de jaaropgaven, de schermen, de mail en de bedragen daarin. De regels zijn echt, en bij elke uitleg staat de bron."

Neutrality line (start screen under the fiction line, and on the teacher screen):
"Deze les belooft geen bedrag. Of je geld terugkrijgt, zie je pas in je eigen aangifte."

Fictional on purpose: the people Yara (18, born 12 mei 2008) and her friend Jesse (19); Supermarkt Kwelderhof (Yara's job all of 2026, Jesse's second job from September); IJssalon Golfkoel (Yara's summer job); Bezorgdienst Duinrit (Jesse's job all of 2026); every jaaropgaaf, the "oefenscherm" of the pre-filled aangifte, the nepmail and its address `teruggaaf@bd-teruggaaf.example` (reserved test domain), and the account endings 4821 and 7306 (no full IBAN is shown anywhere). Name check, 7 November 2026, KvK Handelsregister search in headless Chromium (the script of Verzekerd Revision 2, validated again today: 181 results for "Achmea"): "Kwelderhof", "Golfkoel" and "Duinrit" each "Er zijn geen resultaten gevonden"; a web search for "Kwelderhof" and "Golfkoel" found no shop, supermarket or ice-cream parlour. Rejected on the way: "Zeeschuim" (1 KvK result) and "Kadelicht" (KvK has "KadeLicht"). "Wierdekoerier" also had 0 results but is not used. The first names Yara and Jesse carry no surname. No town is named (Zeestad is not needed). The Belastingdienst, DigiD and MijnOverheid are named only as the real places where a rule applies. No letter, screen or page of theirs is imitated: the documents are plain text, labelled "vereenvoudigd" and "verzonnen", with no logo, house style or real reference number, and the nepmail is labelled as a nepmail.

Story time: belastingjaar 2026. Yara worked at Supermarkt Kwelderhof from 1 januari to 31 december 2026 (loonheffingskorting on) and at IJssalon Golfkoel from 1 juli to 31 augustus 2026 (loonheffingskorting off, correctly, because the jobs overlapped). She turned 18 on 12 mei 2026. She received no aangiftebrief. Jesse worked at Bezorgdienst Duinrit all of 2026 and at Supermarkt Kwelderhof from 1 september 2026, with the korting on at both; he received an aangiftebrief in February 2027 (the Belastingdienst's guide: "Meestal krijg je die brief in februari", bles). Room 1: maandag 1 maart 2027 (the day the aangifte opens, per ro18 and opIB). Room 2: woensdag 3 maart 2027. Room 3: zaterdag 6 maart 2027; Yara sends her aangifte that day. Room 4: dinsdag 16 maart 2027 (Week van het geld). Digit clue 4 uses a separate case (an aanslag dated vrijdag 14 mei). Other dates in the text: 1 april 2027 (Thursday), 1 mei 2027 (Saturday; the V1.2 explanation says so), 1 juli 2027 (Thursday), 31 december 2029 (Monday). All weekdays checked with a calendar script.

Code: **2797** (room digits 2, 7, 9, 7; not 1725, 2824, 2073, 3521, 4379, 3231 or 2348). Teacher screen: show it only inside the closed Antwoordblad, never on the projected part.

## Leerdoelen

1. De leerling kan zeggen wanneer je aangifte moet doen (een aangiftebrief, of bijbetalen boven de aanslaggrens) en wanneer je het mag (geen brief en geld terug, tot 5 jaar later). Met een brief geldt de datum in de brief.
2. De leerling kan op twee jaaropgaven het loon, de ingehouden loonheffing en de loonheffingskorting vinden, en zien in welke periode iemand twee keer korting kreeg.
3. De leerling kan de vooraf ingevulde aangifte naast de jaaropgaven leggen, een fout bedrag en een fout rekeningnummer vinden, en zeggen waar je die verbetert.
4. De leerling herkent een nepmail over een teruggaaf, weet waar berichten zeker echt zijn, en weet wanneer bericht en geld komen.

---

## Kamer 1. Moet of mag? (maandag 1 maart 2027)

**Intro:** "Het is maandag 1 maart 2027. Vanaf vandaag kun je aangifte doen over 2026. Yara is 18 en had in 2026 twee bijbanen. Ze appt met haar vriend Jesse. Hij is 19."

### Document 1: appjes (type: chat, id: app)
Name: "Jesse". Sub: "app". Messages:
- j1 them "Ik kreeg in februari een aangiftebrief van de Belastingdienst. Over 2026." 10:02
- j2 them "In de brief staat: je aangifte moet vóór 1 mei 2027 binnen zijn." 10:02
- j3 them "Maar ik krijg vast geld terug. Dan hoeft het toch niet?" 10:03
- y1 me "Ik kreeg geen brief. Ik keek in de app van de Belastingdienst." 10:05
- y2 me "Daar zag ik: ik krijg geld terug. Ik heb nog niets verstuurd." 10:05

Design note: the chat states the two facts that decide V1.1 and V1.3 (letter or no letter; Yara gets money back) and the date in Jesse's letter (V1.2). Jesse's "Dan hoeft het toch niet?" is the misconception the room is built around. The Belastingdienst advises to fill in the aangifte without sending it to see the result (bdMoet: "Vul de aangifte helemaal in, maar verstuur deze nog niet"); y1 and y2 show that, and r6 says it.

**Moeilijke woorden (plain):** "Aangifte: je geeft je inkomen van een jaar door aan de Belastingdienst. Aangiftebrief: een brief of bericht van de Belastingdienst dat je aangifte moet doen. Bijbetalen: je moet nog belasting betalen. Aanslaggrens: een klein bedrag. Moet je minder bijbetalen? Dan hoef je niets te betalen. Over 2026 is het € 58. Versturen: je aangifte naar de Belastingdienst sturen."

**Rule box (`rules`, title "Regels"):**
- r1 "Kreeg je een aangiftebrief van de Belastingdienst? Dan moet je aangifte doen. Ook als je geld terugkrijgt."
- r2 "Je aangifte moet dan binnen zijn vóór de datum in de brief. Vaak is dat 1 mei."
- r3 "Kreeg je geen brief? Moet je meer bijbetalen dan de aanslaggrens? Dan moet je ook aangifte doen."
- r4 "Kreeg je geen brief en krijg je geld terug? Dan mag je aangifte doen. Het hoeft niet."
- r5 "Kreeg je geen brief? Dan kun je tot 5 jaar na afloop van het jaar aangifte doen."
- r6 "Weet je niet of je moet bijbetalen? Vul je aangifte in en kijk naar de uitkomst. Verstuur pas daarna."

Note on the rules: r1 is AWR art. 8 lid 1 ("Ieder die is uitgenodigd tot het doen van aangifte, is gehouden aangifte te doen") and bdMoet ("Als u een aangiftebrief van ons hebt gehad, moet u aangifte doen."); "Ook als je geld terugkrijgt" follows because art. 8 has no exception for a refund. r2: AWR art. 9 lid 1 (the inspecteur sets the term, at least one month) and bdWanneer ("vóór de datum die in uw aangiftebrief staat. Vaak is dit 1 mei."); "Vaak" because the date is in the letter, not in the law. r3: bdMoet ("Dan moet u aangifte doen als u meer moet betalen dan de aanslaggrens") with Wet IB art. 9.4 lid 1 onder a (an aanslag only if the tax exceeds the voorheffingen "met meer dan € 58") and Uitvoeringsregeling AWR 1994 art. 2 (duty to request an invitation, see teacher detail). r4 and r5 use the wording of eerste-bijbaan r3, split in two; r5 rests on bdJaren and Uitvoeringsregeling IB 2001 art. 45 lid 1 ("binnen vijf jaren na afloop van het kalenderjaar"). r4 "geld terug" means a refund above the teruggaafgrens (more than € 18 over 2026, Wet IB art. 9.4 lid 5; bdMoet "€ 19 of meer"); this detail is in the teacher detail, not in the pupil text, because Yara's refund is far above it. The gloss "Aanslaggrens" says "minder", which matches the law ("meer dan € 58" gives an aanslag); bdMoet writes "€ 58 of meer" (see Onzeker). r6 is bdMoet. The special case "toeslagen en vermogen boven de grens" (bdMoet) is teacher detail only.

### Vraag 1.1 (id: jesse, kind: pick, docs: app)
- Prompt: "Moet Jesse aangifte doen over 2026?"
- Options:
  - a "Nee, want hij krijgt waarschijnlijk geld terug"
  - b "Nee, want hij heeft alleen bijbanen"
  - c "Ja, want hij is ouder dan 18"
  - d "Ja, want hij kreeg een aangiftebrief"
- Correct: d
- Retry pointer: rule r1.
- Nudge: "Lees regel 1. Zoek dan in de appjes wat Jesse kreeg."
- Hint (30 s): "Maakt het voor regel 1 uit of je geld terugkrijgt? Lees de regel tot het eind."
- Explanation: "Jesse kreeg een aangiftebrief. Dan moet hij aangifte doen, ook als hij geld terugkrijgt. Zijn leeftijd en zijn soort werk maken niet uit."
- Sources: awr8, bdMoet
- Note: two "Ja" and two "Nee", one reason each; the right option is not the longest (a is). Option c is wrong because no rule names an age (minors with a bijbaan also file, bdMinder).

### Vraag 1.2 (id: datum, kind: pick, docs: app)
- Prompt: "Uiterlijk wanneer moet de aangifte van Jesse binnen zijn?"
- Options:
  - a "Vóór 1 april 2027"
  - b "Vóór 1 juli 2027"
  - c "Vóór 31 december 2031"
  - d "Vóór 1 mei 2027"
- Correct: d
- Retry pointer: rule r2 (not line j2, which holds the answer date).
- Nudge: "Lees regel 2. Wat schreef Jesse over zijn brief?"
- Hint: "Regel 5 geldt niet voor Jesse. Waarom niet?"
- Explanation: "Met een aangiftebrief geldt de datum in de brief. Bij Jesse is dat vóór 1 mei 2027. Let op: 1 mei 2027 is een zaterdag. Wacht dus niet tot het laatste moment."
- Sources: bdWanneer, awr9, opIB
- Note: c is the 5-year date of eerste-bijbaan 4.4, which holds only without a letter (the trap that this room adds to that lesson). a is the "vóór 1 april" of room 4, b its "vóór 1 juli". Route 18 check B round 1 item 5: a Saturday deadline is stated as a fact and the pupil is told to file earlier; no extension is promised (see Onzeker). Same shape for all four options.

### Vraag 1.3 (id: yara, kind: pick, docs: app)
- Situ: "Yara kreeg geen aangiftebrief. In de app zag ze: ze krijgt geld terug."
- Prompt: "Wat geldt voor Yara?"
- Options:
  - a "Ze moet de aangifte vóór 1 mei 2027 versturen"
  - b "Ze moet eerst om een aangiftebrief vragen"
  - c "Ze mag de aangifte pas na een brief versturen"
  - d "Ze mag de aangifte versturen, ook na 1 mei"
- Correct: d
- Retry pointer: rules r4 and r5.
- Nudge: "Lees regel 4 en regel 5. Kreeg Yara een brief?"
- Hint: "Moet Yara bijbetalen, of krijgt ze geld terug?"
- Explanation: "Yara kreeg geen brief en krijgt geld terug. Dan mag ze aangifte doen, maar het hoeft niet. Dat kan tot 5 jaar na afloop van 2026. Wacht je langer, dan krijg je je geld ook later."
- Sources: bdMoet, bdJaren, urib45, awr9
- Note: the situ closes r3 (she gets money back, so she does not owe above the aanslaggrens). b is wrong: you may ask for an aangiftebrief (AWR art. 6 lid 2), but you need not, and the duty to ask (Uitvoeringsregeling AWR art. 2 lid 1) does not apply when no tax is due (lid 6); without a letter the aangifte itself counts as one on invitation (AWR art. 9 lid 4). Two "moet" and two "mag" options; d is not the longest (a and c are). The explanation does not name 2031 (eerste-bijbaan 4.4).

### Cijfer kamer 1
- Clue: "Het 1e cijfer van het slot: zonder aangiftebrief kun je tot 5 jaar na afloop van een jaar aangifte doen. Het is nu 2027. Wat is het oudste jaar waarover dat nog kan? Neem het laatste cijfer."
- Digit: **2** (2022; bdJaren: "2022: 31 december 2027"; `clueDocs: ['rules']`). The forward count (2026 to 2031) is eerste-bijbaan's digit; this clue counts backwards, so the two lessons do not share a clue.
- Clue retry: "Een jaar is pas voorbij op 31 december. Tel vanaf dat jaar 5 jaar verder. Kom je dan op 2027 uit?"
- Remember: "Aangiftebrief? Dan moet je aangifte doen, vóór de datum in de brief. Geen brief en geld terug? Dan mag het, tot 5 jaar later."

---

## Kamer 2. Twee jaaropgaven (woensdag 3 maart 2027)

**Intro:** "Yara legt haar twee jaaropgaven over 2026 naast elkaar. Ze werkte het hele jaar bij Supermarkt Kwelderhof. In juli en augustus werkte ze ook bij IJssalon Golfkoel. Jesse stuurt een foto van zijn jaaropgaven."

### Document 2a: jaaropgaaf Kwelderhof (type: table, id: kw)
Title: "Jaaropgaaf 2026". From: "Supermarkt Kwelderhof (verzonnen)".
- k1 "Naam" | "Yara"
- k2 "Periode" | "1 januari tot en met 31 december 2026"
- k3 "Fiscaal loon" | "€ 4.860"
- k4 "Ingehouden loonheffing" | "€ 0"
- k5 "Loonheffingskorting toegepast" | "ja"
Note: "Vereenvoudigd en verzonnen. Op een echte jaaropgaaf staan meer regels, soms met andere namen."

### Document 2b: jaaropgaaf Golfkoel (type: table, id: gk)
Title: "Jaaropgaaf 2026". From: "IJssalon Golfkoel (verzonnen)".
- g1 "Naam" | "Yara"
- g2 "Periode" | "1 juli tot en met 31 augustus 2026"
- g3 "Fiscaal loon" | "€ 2.140"
- g4 "Ingehouden loonheffing" | "€ 765"
- g5 "Loonheffingskorting toegepast" | "nee"
Note: same as 2a.

### Document 2c: jaaropgaven van Jesse (type: table with head, id: jesse)
Title: "Jaaropgaven van Jesse over 2026 (stukje)". From: "Foto van Jesse (verzonnen)".
Head: "Werkgever" | "Periode in 2026" | "Loonheffingskorting toegepast"
- d1 "Bezorgdienst Duinrit" | "1 januari tot en met 31 december" | "ja"
- d2 "Supermarkt Kwelderhof" | "1 september tot en met 31 december" | "ja"

Design note: the labels follow bdJaaropgaaf ("fiscaal loon"; tax "loonheffing"). The legal minimum content of a jaaropgaaf (Uitvoeringsregeling loonbelasting 2011 art. 7.4 lid 2) has no line "loonheffingskorting ja/nee"; many payslips and jaaropgaven show it, but not all, so the note says "Op een echte jaaropgaaf staan meer regels, soms met andere namen" and the teacher detail says where else you can see it. The arbeidskorting line (art. 7.4 lid 2 onder h) is left out to keep the slip light; no question needs it. Amounts are checked against the real 2026 rules in the teacher detail (they are fictional but plausible).

**Moeilijke woorden (plain):** "Jaaropgaaf: een overzicht van je loon en je belasting over een jaar, bij één werkgever. Fiscaal loon: het loon waarover je belasting betaalt. Loonheffing: belasting en premies, bijvoorbeeld voor de AOW. Je werkgever haalt die van je loon af. Ingehouden: van je loon afgehaald. Loonheffingskorting: korting op je loonheffing. Je kiest zelf bij welke werkgever. Toegepast: gebruikt. Periode: van welke dag tot welke dag."

Split over the documents: doc kw has "Jaaropgaaf" to "Ingehouden", doc gk has "Loonheffingskorting" and "Toegepast", doc jesse has "Periode", so V2.1 to V2.3 show the words they need (V2.1 and V2.2 show kw and gk; V2.3 shows jesse and gk for "Loonheffingskorting").

**Rule box (`rules`, title "Regels"):**
- r1 "Op een jaaropgaaf staat je loon van een jaar bij één werkgever. Had je twee werkgevers? Dan krijg je twee jaaropgaven."
- r2 "Bij 'Ingehouden loonheffing' staat hoeveel belasting en premies je werkgever van je loon haalde."
- r3 "Met loonheffingskorting houdt je werkgever minder loonheffing in."
- r4 "Werk je tegelijk bij twee werkgevers? Laat de korting dan maar bij één van hen toepassen."
- r5 "Kreeg je tegelijk bij twee werkgevers korting? Dan kreeg je te veel korting. Je moet dan waarschijnlijk bijbetalen."
- r6 "Werk je na elkaar bij twee werkgevers? Dan mag je bij elke werkgever korting laten toepassen."

Note on the rules: r1 and r2 are bdJaaropgaaf ("Op een jaaropgaaf staat wat je in dat jaar hebt verdiend bij 1 werkgever. Als je verschillende werkgevers hebt gehad in 1 jaar, krijg je meer jaaropgaven."; "de belasting en premies die zijn ingehouden op je loon. Dit wordt loonheffing ... genoemd.") and Uitvoeringsregeling LB 2011 art. 7.4. r3 is bdLhkBijbaan ("Die betaalt dan minder belasting, en jij krijgt daardoor meer loon."). r4 and r6: bdLhkBijbaan ("Vraag dan bij 1 werkgever de loonheffingskorting aan."; "Werk je in 1 jaar bij meerdere werkgevers na elkaar? Dan kun je bij iedere werkgever de loonheffingskorting aanvragen.") and Wet LB art. 23 lid 2 (only one employer "over loontijdvakken die geheel of gedeeltelijk samenvallen"). r5: bdLhkBijbaan ("krijg je te veel korting op je belasting. Je moet dan waarschijnlijk achteraf belasting aan ons betalen."); "waarschijnlijk" kept, because at a low total income double korting often costs nothing (factcheck A eerste-bijbaan, row korting-een). r4 and r5 extend eerste-bijbaan r1; r6 makes eerste-bijbaan's teacher note a pupil rule.

### Vraag 2.1 (id: totaal, kind: number, docs: kw, gk)
- Prompt: "Hoeveel loonheffing is er in 2026 in totaal van het loon van Yara ingehouden?"
- Correct: **€ 765** (76500 cents)
- Retry pointer: doc kw line k4 and doc gk line g4.
- Nudge: "Zoek op elke jaaropgaaf de regel 'Ingehouden loonheffing'. Tel die op."
- Hint: "Fiscaal loon is iets anders: dat is het loon zelf."
- Explanation: "Bij Kwelderhof is € 0 ingehouden en bij Golfkoel € 765. Samen is dat € 765. Dit bedrag heb je nodig om je aangifte te controleren."
- Sources: bdJaaropgaaf, bdTerug
- Note: one defensible answer (the rows are named in r2). Typical wrong tries are distinct: 7000 (the two wages), 2140 or 4860 (one wage). The pointer highlights the two rows to add, which is the method, not a number that is the answer by itself (one row is € 0). The last sentence prepares room 3 without giving its answer.

### Vraag 2.2 (id: waarom, kind: pick, docs: kw, gk)
- Prompt: "Waarom is bij Golfkoel wel loonheffing ingehouden, en bij Kwelderhof niet?"
- Options:
  - a "Golfkoel is een ijssalon en geen supermarkt"
  - b "Bij Golfkoel werkte ze alleen in de zomervakantie"
  - c "Bij Golfkoel was ze al 18 jaar oud"
  - d "Bij Golfkoel had ze geen loonheffingskorting"
- Correct: d
- Retry pointer: rule r3, doc kw line k5 and doc gk line g5.
- Nudge: "Lees regel 3. Vergelijk dan de laatste regel van de twee jaaropgaven."
- Hint: "Wat is op de twee jaaropgaven anders, behalve het loon en de periode?"
- Explanation: "Bij Kwelderhof stond de loonheffingskorting aan, bij Golfkoel niet. Zonder korting houdt een werkgever meer loonheffing in. Daarom kan Yara dat geld nu misschien terugkrijgen."
- Sources: bdLhkBijbaan, wlb23, bdTerug
- Note: no option says "ze verdiende bij Kwelderhof minder per maand": that is true (€ 405 against € 1.070) and a wage level does change withholding, so it would open a second answer. c is a true fact (she was 18 from 12 mei) but no rule links age to loonheffing; b names the period, which r3 does not. Yara chose "nee" at Golfkoel correctly (r4); the explanation does not call it a mistake. "misschien" because only the aangifte shows the refund (eerste-bijbaan teacher note: "Beloof geen bedrag").

### Vraag 2.3 (id: dubbel, kind: pick, docs: jesse, gk)
- Prompt: "In welke maanden van 2026 kreeg Jesse bij twee werkgevers tegelijk korting?"
- Options:
  - a "Januari tot en met augustus"
  - b "Geen enkele maand, hij werkte na elkaar"
  - c "Het hele jaar, van januari tot en met december"
  - d "September tot en met december"
- Correct: d
- Retry pointer: doc jesse lines d1 and d2.
- Nudge: "Lees bij elke werkgever de periode. Wanneer werkte Jesse bij de twee tegelijk?"
- Hint: "Vanaf welke datum werkte Jesse ook bij Kwelderhof?"
- Explanation: "Vanaf 1 september werkte Jesse bij twee werkgevers tegelijk. Bij elk van de twee stond de korting aan. Zo kreeg hij in vier maanden te veel korting. Hij moet daardoor waarschijnlijk bijbetalen."
- Sources: bdLhkBijbaan, bdLhkMeer, wlb23
- Note: b is the r6 case read wrongly (the periods overlap), a the months with one employer only, c the Duinrit period alone. Gk is in the docs only for the gloss "Loonheffingskorting". The explanation's last sentence links to room 1: Jesse got a letter and must file anyway (no causal claim that the letter came because of the korting; no source says so).

### Cijfer kamer 2
- Clue: "Het 2e cijfer van het slot: stel, iemand werkt het hele jaar bij werkgever A. Van 1 juni tot en met 31 december werkt hij ook bij werkgever B. Bij elk van de twee staat de korting aan. Hoeveel maanden kreeg hij te veel korting?"
- Digit: **7** (juni to december; all facts are in the clue; `clueDocs: ['rules']`). A new case, so the clue does not repeat V2.3.
- Clue retry: "Tel de maanden van juni tot en met december. Tel juni en december ook mee."
- Remember: "Op je jaaropgaaf zie je hoeveel loonheffing er is ingehouden. Werk je tegelijk bij twee werkgevers? Dan korting bij één."

---

## Kamer 3. Klopt je aangifte? (zaterdag 6 maart 2027)

**Intro:** "Yara begon in de app. Nu logt ze met haar DigiD in op Mijn Belastingdienst. Daar opent ze haar aangifte over 2026. Veel is al ingevuld. Ze legt haar jaaropgaven ernaast."

### Document 3a: oefenscherm (type: table with head, id: via)
Title: "Oefenscherm: vooraf ingevulde aangifte 2026". From: "Vereenvoudigd en verzonnen. Dit is geen scherm van de Belastingdienst."
Head: "Onderdeel" | "Vooraf ingevuld"
- v1 "Golfkoel, fiscaal loon" | "€ 2.140"
- v2 "Golfkoel, ingehouden loonheffing" | "€ 675"
- v3 "Kwelderhof, fiscaal loon" | "€ 4.860"
- v4 "Kwelderhof, ingehouden loonheffing" | "€ 0"
- v5 "Rekeningnummer (IBAN)" | "eindigt op 4821"

### Documents 3b and 3c: the two jaaropgaven of room 2 (ids kw, gk), word for word.

Design note: one amount is wrong (v2: € 675 against € 765 on the jaaropgaaf) and the account is wrong (V3.3 situ). The wrong row is not the last row (V3.1 keeps the screen order with `keepOrder`, so the right answer is option b, not last; README option order rule 1). Why the pre-filled data can differ: the Belastingdienst fills in what employers report and says the data can differ from "uw eigen jaaroverzicht" (bdVIA); the lesson gives no cause. The screen shows no "uitkomst" line, so no question rests on how the refund is calculated.

**Moeilijke woorden (plain):** "Vooraf ingevuld: de Belastingdienst heeft het al voor je ingevuld. Aanpassen: iets veranderen wat niet klopt. Aanvullen: iets toevoegen wat mist. Rekeningnummer (IBAN): het nummer van je bankrekening. Mijn Belastingdienst: je eigen pagina op de site van de Belastingdienst. Je logt in met je DigiD. Jeugdrekening: een bankrekening voor kinderen en tieners."

Split over the documents: doc via has the whole box (the jaaropgaven keep their room 2 box).

**Rule box (`rules`, title "Regels"):**
- r1 "Veel gegevens in je aangifte zijn al ingevuld. Controleer ze toch allemaal. Leg je jaaropgaven ernaast."
- r2 "Klopt een bedrag niet? Of mist er iets? Dan pas je het zelf aan of vul je het aan."
- r3 "In de app kun je vooraf ingevulde gegevens niet aanpassen. Dat kan alleen in je aangifte op Mijn Belastingdienst."
- r4 "Je geld komt op het rekeningnummer dat de Belastingdienst van je heeft. Klopt het niet? Verbeter het dan."
- r5 "Al verstuurd en toch een fout? Je kunt je aangifte nog tot 5 jaar na het jaar aanpassen."

Note on the rules: r1 is bdDirect ("Veel gegevens zijn al voor je ingevuld: je hoeft vaak alleen maar te controleren of ze kloppen.") and bdVIA. r2 and r3: bdVIA ("Dan kunt u deze gegevens zelf aanpassen of aanvullen."; "In de aangifte-app kunt u geen gegevens aanpassen of aanvullen. Dit kan alleen in de aangifte in Mijn Belastingdienst."); r3 is on the release gate. r4: bdGeld ("We hebben het geld overgemaakt op het rekeningnummer dat in Mijn Belastingdienst staat."; "Moet het een ander rekeningnummer zijn? Geef dat dan meteen door in Mijn Belastingdienst.") and bdVIA (example "IBAN (rekeningnummer) verbeteren"). The Belastingdienst line "Dat kunnen we niet meer terugdraaien" is teacher detail: with a closed account (V3.3) the money would not simply be lost, and no source says what then happens. r5: bdFout ("Uw aangifte wijzigen kan tot 5 jaar na het jaar waarover de aanslag gaat."); it answers the fear of making mistakes that bles names, and no question depends on it.

### Vraag 3.1 (id: fout, kind: pick, keepOrder, docs: via, kw, gk)
- Prompt: "Welk bedrag in het oefenscherm klopt niet met de jaaropgaven van Yara?"
- Options (screen order, keepOrder):
  - a "Golfkoel, fiscaal loon: € 2.140"
  - b "Golfkoel, ingehouden loonheffing: € 675"
  - c "Kwelderhof, fiscaal loon: € 4.860"
  - d "Kwelderhof, ingehouden loonheffing: € 0"
- Correct: b
- Retry pointer: rule r1.
- Nudge: "Vergelijk elk bedrag met dezelfde regel op de jaaropgaaf van die werkgever."
- Hint: "Kijk goed naar de cijfers zelf. Staan ze in dezelfde volgorde?"
- Explanation: "Op de jaaropgaaf van Golfkoel staat € 765 ingehouden loonheffing. In het oefenscherm staat € 675. De andere drie bedragen kloppen."
- Sources: bdVIA, bdDirect
- Note: the pointer goes to r1, not to row v2, which would give the answer (as V2.2 in Verzekerd). The hint names a method (digit order), not the row. b is not the longest (d is). keepOrder: options mirror the screen rows, like eerste-bijbaan 4.2.

### Vraag 3.2 (id: waar, kind: pick, docs: via)
- Situ: "Yara belt Golfkoel. Daar zeggen ze: je jaaropgaaf klopt."
- Prompt: "Waar verbetert Yara het bedrag?"
- Options:
  - a "In de app: ze tikt op het bedrag en past het aan"
  - b "Bij Golfkoel: die verandert het in haar aangifte"
  - c "Nergens: de Belastingdienst ziet de fout zelf"
  - d "In haar aangifte op Mijn Belastingdienst"
- Correct: d
- Retry pointer: rules r2 and r3.
- Nudge: "Lees regel 3. Waar kan het, en waar niet?"
- Hint: "Wie past vooraf ingevulde gegevens aan: Yara zelf of iemand anders?"
- Explanation: "In de app kun je vooraf ingevulde gegevens niet aanpassen. Yara verbetert het bedrag daarom zelf, in haar aangifte op Mijn Belastingdienst."
- Sources: bdVIA, bdFout
- Note: the situ closes the door "the jaaropgaaf is wrong, ask the employer" (then the employer's correction would be a defensible answer). c contradicts r2. The right option is the shortest. Depends on bdVIA for 2027 (release gate).

### Vraag 3.3 (id: iban, kind: pick, docs: via)
- Situ: "Yara heeft sinds januari 2027 een eigen betaalrekening. Die eindigt op 7306. Haar oude jeugdrekening eindigde op 4821. Die rekening is opgeheven."
- Prompt: "Wat doet Yara met het rekeningnummer in het oefenscherm?"
- Options:
  - a "Ze laat het staan: de Belastingdienst kent haar nieuwe nummer"
  - b "Ze laat het staan: het geld komt dan per post"
  - c "Ze verbetert het pas als haar geld niet komt"
  - d "Ze verbetert het voor ze de aangifte verstuurt"
- Correct: d
- Retry pointer: rule r4 and doc via line v5.
- Nudge: "Lees regel 4. Welk nummer staat in het oefenscherm?"
- Hint: "Bestaat de rekening die eindigt op 4821 nog?"
- Explanation: "Het geld komt op het nummer dat de Belastingdienst heeft. Dat is haar oude rekening, en die bestaat niet meer. Daarom verbetert Yara het meteen."
- Sources: bdGeld, bdVIA, bdInlog
- Note: "opgeheven" closes the second answer "the old account still works, so leave it". a is contradicted by row v5. c is worse than d under r4 ("Klopt het niet? Verbeter het dan"), and bdGeld says a missing or wrong account delays payment (a letter, then up to 3 weeks); that detail is teacher only. Two "laat" and two "verbetert" options; d is not the longest (a is).

### Cijfer kamer 3
- Clue: "Het 3e cijfer van het slot: stel, in een vooraf ingevulde aangifte staat € 1.150 loonheffing. Op de jaaropgaaf staat € 1.240. Hoeveel euro scheelt dat? Neem het eerste cijfer."
- Digit: **9** (1.240 min 1.150 = 90; all facts are in the clue; `clueDocs: ['rules']`). A new case, so the clue does not repeat V3.1.
- Clue retry: "Trek het kleine bedrag af van het grote bedrag."
- Remember: "Leg je jaaropgaven naast je aangifte. Klopt iets niet? Verbeter het op Mijn Belastingdienst. Check ook je rekeningnummer."

---

## Kamer 4. Veilig inloggen en je geld (dinsdag 16 maart 2027)

**Intro:** "Yara verbeterde haar aangifte en verstuurde hem op zaterdag 6 maart. Op dinsdag 16 maart krijgt ze een mail. Het lijkt een mail van de Belastingdienst."

### Document 4: nepmail (type: letter, kind: "Nepmail (verzonnen voorbeeld)", id: mail)
From: "Belastingdienst Teruggaaf <teruggaaf@bd-teruggaaf.example>". Place: "dinsdag 16 maart 2027, 09:14". Greeting: "Beste Yara,".
- m1 "Uw teruggaaf over 2026 staat klaar."
- m2 "Log binnen 24 uur in via de knop hieronder. Anders vervalt uw teruggaaf."
- m3 "[ Inloggen met DigiD ]"
- m4 "Houd uw bankpas bij de hand."
Sign: "Met vriendelijke groet, Belastingdienst". Note: "Dit is een verzonnen nepmail. Het adres bestaat niet."

Design note: the mail uses Yara's first name and the right year on purpose. The Belastingdienst's own examples say real names appear in fake messages ("Opvallend aan deze valse sms is dat de voor- en achternaam van de ontvanger er in staan", bdVoorbeelden). It names no amount, so "the amount is wrong" cannot be used as a sign and the question rests on the rule. m3 is plain text in brackets, not a link or a button (engine: `letter` lines are text). The sender address uses the reserved `.example` domain; no question asks about the address, so `.example` is not a give-away.

**Moeilijke woorden (plain):** "Nepmail: een mail van oplichters die echt lijkt. Ze willen je gegevens of je geld. Teruggaaf: geld dat je terugkrijgt van de Belastingdienst. Vervallen: niet meer geldig. Aanslag: het bericht met wat je terugkrijgt of moet betalen. Voorlopige aanslag: een eerste berekening. De definitieve aanslag komt later."

**Rule box (`rules`, title "Regels"):**
- r1 "De Belastingdienst stuurt je nooit een mail met een knop of link waarop je moet klikken. Ook niet over geld terug."
- r2 "De Belastingdienst vraagt je nooit per mail, sms, WhatsApp of telefoon om persoonlijke gegevens."
- r3 "Twijfel je? Klik niet. Log zelf in op Mijn Belastingdienst. Daar weet je zeker dat berichten echt zijn."
- r4 "Deed je vóór 1 april aangifte? Dan krijg je vóór 1 juli bericht. Later? Dan probeert de Belastingdienst het binnen 3 maanden."
- r5 "Krijg je geld terug? Dan staat het meestal binnen 1 week na de datum op de aanslag op je rekening."

Note on the rules: r1: bdVoorbeelden, on the fake refund mail ("De Belastingdienst communiceert nooit op deze manier over een belastingteruggaaf."; "Wij sturen u nooit een mail met een knop of link waarop u moet klikken."), and for DigiD digidVals ("DigiD stuurt u nooit berichten met een link of QR-code"). It is the Belastingdienst's own statement about its own mail; MijnOverheid does send an e-mail when there is post in the Berichtenbox (bdHoren), which is why r3 says "Log zelf in" and the FAQ covers that mail. r2: bdVals ("Ook vragen wij u nooit per WhatsApp, sms, mail of telefoon om persoonlijke gegevens door te geven"). r3: bdVals step 1 ("Log in op een van onze portalen, zoals Mijn Belastingdienst ... Dan weet u zeker dat u berichten leest die wij hebben verstuurd."; "Klik nooit op een link in het bericht dat u niet vertrouwt"). r4: bdHoren ("Als u voor 1 april aangifte hebt gedaan, krijgt u voor 1 juli bericht."; "Als u na 1 april aangifte doet, proberen wij u binnen 3 maanden een bericht te sturen."), written as a condition; "probeert" keeps the page's own hedge. r5: bdGeld ("binnen 1 week na de datum op de aanslag op uw rekening"); "meestal" because the same page names a missing account number (a letter, then up to 3 weeks) and offsetting a debt (within 6 weeks). The glosses on the voorlopige and definitieve aanslag rest on bdVA ("Soms sturen we na het aangifte doen ook een voorlopige aanslag. Uw definitieve aanslag komt daarna.") and bdHoren (definitive "uiterlijk binnen 3 jaar na afloop van een belastingjaar"; AWR art. 11 lid 3).

### Vraag 4.1 (id: echt, kind: pick, docs: mail)
- Prompt: "In de mail staan de naam van Yara en het jaar 2026. Is de mail dan echt?"
- Options:
  - a "Ja, want een oplichter weet haar naam niet"
  - b "Ja, want de mail gaat over haar eigen aangifte"
  - c "Nee, want de Belastingdienst mailt nooit in maart"
  - d "Nee, want de mail heeft een knop om in te loggen"
- Correct: d
- Retry pointer: rule r1.
- Nudge: "Lees regel 1. Zoek in de mail iets wat daarbij past."
- Hint: "Oplichters weten soms je naam. Waar kun je dan wel op letten?"
- Explanation: "De Belastingdienst stuurt nooit een mail met een knop om in te loggen. Je naam en het jaar zeggen niets: oplichters weten die soms ook. Klik dus niet."
- Sources: bdVoorbeelden, bdVals, digidVals
- Note: builds on Eerste maand (signals of a scam) with the new point that real-looking details prove nothing. c is a false claim (a reason that no rule gives); the right option is not the longest (c is). Two "Ja" and two "Nee".

### Vraag 4.2 (id: zelf, kind: pick, docs: mail)
- Prompt: "Yara wil weten of er echt een bericht voor haar klaarstaat. Wat doet ze?"
- Options:
  - a "Ze klikt op de knop, maar vult niets in"
  - b "Ze mailt terug en vraagt of de mail echt is"
  - c "Ze stuurt de mail naar Jesse om te vragen"
  - d "Ze logt zelf in op Mijn Belastingdienst"
- Correct: d
- Retry pointer: rule r3.
- Nudge: "Lees regel 3. Waar weet je zeker dat een bericht echt is?"
- Hint: "Gebruik niets uit de mail zelf."
- Explanation: "Op Mijn Belastingdienst weet je zeker dat berichten echt zijn. Typ zelf belastingdienst.nl in en log daar in. Gebruik niets uit de mail."
- Sources: bdVals, bdInlog
- Note: b and c are not forbidden by any rule, but they do not tell Yara whether a message is waiting; the prompt asks how she finds out for sure, which r3 answers. The right option is the shortest together with a. "Typ zelf belastingdienst.nl in" is the practical form of bdVals step 1; the app is not named, because the pages read do not say the aangifte app shows messages.

### Vraag 4.3 (id: bericht, kind: pick, docs: [])
- Situ: "Yara verstuurde haar aangifte op zaterdag 6 maart 2027."
- Prompt: "Uiterlijk wanneer krijgt ze bericht over haar aangifte?"
- Options:
  - a "Vóór 1 april 2027"
  - b "Vóór 1 mei 2027"
  - c "Vóór 31 december 2029"
  - d "Vóór 1 juli 2027"
- Correct: d
- Retry pointer: rule r4.
- Nudge: "Lees regel 4. Wanneer verstuurde Yara haar aangifte?"
- Hint: "In regel 4 is 1 april de voorwaarde. Wat krijg je als je daaraan voldoet?"
- Explanation: "Yara deed vóór 1 april aangifte. Dan krijgt ze vóór 1 juli bericht. Soms is dat eerst een voorlopige aanslag. De definitieve aanslag komt dan later, uiterlijk eind 2029."
- Sources: bdHoren, bdVA, awr11
- Note: a is the condition read as the consequence (known error type), b the deadline of room 1, c the end of the 3-year term for the definitive aanslag (AWR art. 11 lid 3; Yara had no uitstel, so no extension). The options mirror V1.2 on purpose: pupils must read which rule applies. Docs `[]`: the room's rule box is still shown (README).

### Cijfer kamer 4
- Clue: "Het 4e cijfer van het slot: stel, je krijgt geld terug. Op je aanslag staat de datum vrijdag 14 mei. Binnen hoeveel dagen staat het geld meestal op je rekening?"
- Digit: **7** (1 week; `clueDocs: ['rules']`). A new case; no room question asks it.
- Clue retry: "Lees regel 5. Hoeveel dagen heeft een week?"
- Remember: "Klik niet op een knop in een mail over belasting. Log zelf in. Vóór 1 april aangifte? Dan vóór 1 juli bericht."

---

## Plan: Mijn belastingcheck

The plan is personal: each pupil makes their own, on paper and, if they want, on the end screen (existing engine plan: `when`, `then`, `within`, own text). It stays on the screen only: never logged, never sent, never stored. The paper slip stays with the pupil. Many pupils have no bijbaan, and many are under 18, so every line works without a job and before 18.

Engine data:
- `plan.intro`: "Kies één ding dat je gaat checken. Zet er een moment bij."
- `plan.when`: ["het 1 maart is", "ik mijn jaaropgaaf krijg", "ik een mail over belasting krijg"]
- `plan.then`: ["kijk ik of ik een aangiftebrief kreeg", "leg ik mijn jaaropgaven naast mijn aangifte", "log ik zelf in op Mijn Belastingdienst"]
- `plan.within`: ["een dag", "een week", "twee weken"]
- Own text field (existing): pupils may type their own "dan".

Paper slip `slip` "Mijn belastingcheck" (optional, one per pupil, two per A4; printed from the teacher screen; `screen` not set, so the end screen shows a read-only reminder). Slip intro (`slip.intro`): "Dit is van jou. Je hoeft het aan niemand te laten zien." Six fields:
"Mijn belastingcheck
1. Ik heb een bijbaan: ja / nee / had ik vorig jaar (omcirkel)
2. Mijn jaaropgaven bewaar ik hier: ...
3. Kreeg ik een aangiftebrief? ja / nee / weet ik niet (omcirkel)
4. Ik heb een eigen DigiD: ja / nee / ik vraag hem aan (omcirkel)
5. In maart leg ik mijn jaaropgaven naast mijn aangifte: ja / nee / nog niet nodig (omcirkel)
6. Eén vraag die ik stel aan iemand thuis of aan mijn mentor: ...
Regels: belastingdienst.nl/jongeren. Twijfel je over een mail of sms? Klik niet en log zelf in."

The slip asks no amount, no BSN, no employer name and no account number. Field 4 fits pupils from 14 (digidAanvragen: from 14 a DigiD is "strikt persoonlijk"). Data: fields 1, 3, 4, 5 label up to the colon or question mark, hint the choices, lines 0; field 2 lines 1; field 6 lines 2. Footer: the "Regels:" line. "belastingdienst.nl/jongeren" is the address the Belastingdienst gives in its own teacher guide (bles).

---

## Start- en eindcheck: twee parallelle vormen, A en B (elk 4 vragen, één per kamer, enkele keuze, score 0 tot 4)

No feedback during the check. Each question works without the room's documents and rule box. Question n of form A and question n of form B test the same rule at the same difficulty with a different case. Counterbalance as in ESC-KAMER (random A or B first, engine v3). No check item repeats a room question: room 1 asks Jesse and Yara, the checks ask "je" with and without a letter; room 2 asks Jesse's months, the checks ask overlap and no overlap with a bakker and a kapper; room 3 asks a wrong amount and an account number, the checks ask a wrong amount and a missing employer; room 4 asks a mail with Yara's name, the checks ask an sms and a mail that "vervalt morgen". In each form no letter is right more than twice in a row (A: a, b, c, c; B: b, b, a, a).

### Vorm A

| # | Kamer | Vraag | Opties | Goed | Regel en bron |
|---|---|---|---|---|---|
| C1 | 1 Moet of mag | "Je hebt een bijbaan. Je kreeg geen aangiftebrief. Je vult je aangifte in en ziet: je krijgt geld terug. Wat geldt?" | a Je mag het doen, maar het hoeft niet; b Je moet het doen, uiterlijk vóór 1 mei; c Je mag het pas doen na een brief | a | geen brief, geld terug: mag (bdMoet, bdJaren) |
| C2 | 2 Jaaropgaven | "Je werkt het hele jaar bij een bakker. Van 1 oktober tot en met 31 december werk je ook bij een kapper. Bij elk van de twee stond de loonheffingskorting aan. Kreeg je te veel korting?" | a Nee, want korting mag bij elke werkgever; b Ja, want je werkte drie maanden tegelijk; c Ja, want je had twee werkgevers in één jaar | b | tegelijk: één werkgever (bdLhkBijbaan, wlb23) |
| C3 | 3 Aangifte checken | "In je vooraf ingevulde aangifte staat een ander bedrag dan op je jaaropgaaf. Je werkgever zegt: de jaaropgaaf klopt. Wat doe je?" | a Je laat het staan: de Belastingdienst weet het beter; b Je wacht tot je werkgever je aangifte verbetert; c Je past het bedrag zelf aan in je aangifte | c | zelf aanpassen (bdVIA) |
| C4 | 4 Veilig | "Je krijgt een sms: 'Uw teruggaaf staat klaar. Bevestig via deze link.' Wat doe je?" | a Je tikt op de link, want het gaat om jouw geld; b Je stuurt een sms terug om te vragen of het klopt; c Je logt zelf in op Mijn Belastingdienst | c | zelf inloggen (bdVals, bdVoorbeelden) |

### Vorm B

| # | Kamer | Vraag | Opties | Goed | Regel en bron |
|---|---|---|---|---|---|
| B1 | 1 Moet of mag | "Je kreeg in februari een aangiftebrief. Je denkt dat je geld terugkrijgt. Wat geldt?" | a Je mag kiezen of je het doet; b Je moet het doen, vóór de datum in de brief; c Je moet het alleen doen als je moet bijbetalen | b | brief: moet (awr8, bdMoet, bdWanneer) |
| B2 | 2 Jaaropgaven | "Van januari tot en met juni werk je bij een bakker. Van juli tot en met december werk je bij een kapper. Bij elk van de twee stond de loonheffingskorting aan. Kreeg je te veel korting?" | a Ja, want korting mag maar bij één werkgever per jaar; b Nee, want je werkte na elkaar, niet tegelijk; c Nee, want bij de bakker werkte je maar kort | b | na elkaar: bij elke werkgever (bdLhkBijbaan, wlb23) |
| B3 | 3 Aangifte checken | "In je vooraf ingevulde aangifte mist een werkgever. Je hebt de jaaropgaaf van die werkgever wel. Wat doe je?" | a Je vult de werkgever zelf aan in je aangifte; b Je laat het: de Belastingdienst vult het later aan; c Je stuurt de jaaropgaaf per post naar je werkgever | a | zelf aanvullen (bdVIA) |
| B4 | 4 Veilig | "Je krijgt een mail met een knop 'Inloggen met DigiD'. Er staat: 'Uw teruggaaf vervalt morgen.' Wat doe je?" | a Je logt zelf in op Mijn Belastingdienst; b Je klikt op de knop en kijkt of de site echt lijkt; c Je stuurt de mail door naar een vriend | a | zelf inloggen (bdVoorbeelden, bdVals) |

Parallel checks: C1 and B1 ask moet or mag, one without and one with a letter; C1 states "je krijgt geld terug" (closes r3), B1 says "in februari" (a letter for the aangifte over the past year). C2 and B2 test the overlap rule with and without overlap; in each the right first word ("Ja" in C2, "Nee" in B2) is shared with a wrong option that gives a reason no rule supports (C2 c: two employers in one year is not the reason; B2 c: working briefly is not the reason), as in Verzekerd V1.3 option c. In B1 the right "moet" is shared with option c. C3 and B3 test "zelf aanpassen of aanvullen" (bdVIA); C3 says "de jaaropgaaf klopt" so waiting for the employer is not defensible. C4 and B4 test "log zelf in" for an sms and a mail; B4 option b is worded differently from V4.2 option a, so a pair cannot match it from memory of the room. Option lengths: in each item the right option is not the longest (checked by script).

Score: 1 point per right answer, 0 to 4, before and after, shown per pair on the end screen.

---

## Lesplan voor de docent (45 minuten)

Teacher screen, first line (`teacher.audience`): "Voor havo 4 en 5 en vwo 4 tot en met 6, vooral voor wie een bijbaan heeft. Voor het mentoruur, LOB of economie. Het gaat over aangifte doen, niet over examenstof."
Second line (`teacher.audience`): "Gecontroleerd op 7 november 2026, volgende controle op 1 maart 2027. Het verhaal speelt in maart 2027 en gaat over belastingjaar 2026. Gebruik de les tussen 1 maart en 30 juni 2027. Bijvoorbeeld in de Week van het geld, van 15 tot 19 maart 2027."

| Lesminuut | Duur | Onderdeel | Wat je doet |
|---|---|---|---|
| 0 tot 4 | 4 | Uitleg en inloggen | Zet de link en de klascode al op het bord voordat de les begint. Zeg: de mensen, de werkgevers en de bedragen zijn verzonnen. De regels zijn echt. Niemand logt in de les echt in bij de Belastingdienst. Leerlingen werken met z'n tweeën op één scherm. Deel de papiertjes "Mijn belastingcheck" uit als je ze gebruikt. |
| 4 tot 6 | 2 | Startcheck | Elk tweetal beantwoordt vier vragen (vorm A of B) voordat de klok start. Geef geen hints. |
| 6 tot 32 | 26 | Escape | Start de klastimer. Tweetallen spelen vier kamers en schrijven elk cijfer op. Klaar voor de tijd? Laat het tweetal de gespreksvraag van kamer 2 bespreken. Noem geen bedrag dat iemand terugkrijgt. |
| 32 | | Stop | Op minuut 32 stopt iedereen, ook wie nog niet klaar is. Lees de cijfers voor van je geprinte antwoordblad. Alle tweetallen doen daarna de eindcheck. |
| 32 tot 35 | 3 | Stop en eindcheck | De andere vorm: vier vragen over dezelfde regels. Daarna ziet elk tweetal wat het goed had, voor en na. |
| 35 tot 39 | 4 | Nabespreken | Vraag met handopsteken: wie had bij de startcheck 3 of 4 goed? En bij de eindcheck? Vraag welke kamer het lastigst was en begin daar. |
| 39 tot 44 | 5 | Mijn belastingcheck | Iedereen kiest zijn eigen plan of vult het papiertje in. Niemand hoeft iets voor te lezen. Stel daarna de slotvraag. |
| 44 tot 45 | 1 | Reserve | Voor inloggen dat uitloopt. De escape stopt altijd op minuut 32. |

Total 45 minutes: 4 + 2 + 26 + 3 + 4 + 5 + 1 = 45. `minutes: 26`.
Materials: een apparaat per tweetal (laptop, Chromebook of telefoon), pen en papier voor de cijfers, een digibord of beamer. Print het papiertje vóór de les als je het gebruikt: 1 per leerling.

Why the Verzekerd timing (stop at minute 32): the same 26-minute escape and 5-minute plan fit, and teachers who know one lesson know the other. Estimated reading load is lighter than Verzekerd: 4 short documents in room 2 (three slips, one with a table), one screen and two slips in room 3, one short mail in room 4. Estimate (desk, not timed with pupils, plus or minus 30 percent): about 18 minutes for an average havo 4 pair, 23 for a weaker pair. Room 3 is the heaviest (three documents side by side). A pair stopped in room 4 misses the safety rules; the end check C4/B4 and the debrief cover them.

Tip voor de docent: Een fout antwoord wordt doorgestreept. Een tweetal kan dus gokken tot het goed is. Het telt dan alleen niet mee bij "In één keer goed". Vertel de klas dat goed lezen sneller gaat.

Care points ("Let op"):
1. "Niet iedereen heeft een bijbaan of krijgt geld terug. Laat niemand vertellen wat hij verdient of terugkreeg. Het papiertje is van de leerling: niet inleveren."
2. "Beloof geen bedrag. Of iemand geld terugkrijgt, zie je pas in de eigen aangifte."
3. "Laat in de les niemand echt inloggen. Vraag nooit naar DigiD-gegevens, ook niet als voorbeeld."
4. "Veel leerlingen zijn nog geen 18. Ook met 16 of 17 doe je zelf aangifte over je bijbaan. Je DigiD is vanaf 14 jaar alleen van jou."
5. "Kamer 4 gaat over een nepmail. Heeft een leerling geld verloren door oplichting? Laat die leerling zelf kiezen of hij meedoet."
6. "Alleen voor de economiedocent: de les oefent geen examenstof. Je kunt kamer 2 gebruiken bij een les over belastingen en heffingskortingen."

Note for developers: the stop at minute 32 uses the existing engine stop flow. The digits are never on the open lesson plan.

### Voor de docent, per kamer

Kern (`teacherNote`):
- Kamer 1: "Een aangiftebrief betekent: je moet, vóór de datum in de brief. Geen brief en geld terug: je mag, tot 5 jaar later."
- Kamer 2: "Op de jaaropgaaf staan loon en ingehouden loonheffing. Korting bij twee werkgevers tegelijk is te veel korting."
- Kamer 3: "Vooraf ingevuld is niet altijd goed. Vergelijk met de jaaropgaven en verbeter op Mijn Belastingdienst, ook je rekeningnummer."
- Kamer 4: "De Belastingdienst mailt nooit een knop om in te loggen. Vóór 1 april aangifte: vóór 1 juli bericht."

Dit wordt vaak gevraagd (`teacher.faq`):
- "Hoeveel krijg ik terug?" Antwoord: "Dat zie je pas in je eigen aangifte. Vul hem in en kijk naar de uitkomst. Je hoeft hem pas daarna te versturen."
- "Ik ben 16. Moet of mag ik al aangifte doen?" Antwoord: "Dezelfde regels gelden. Heb je een bijbaan, dan doe je zelf aangifte. Online doe je dat met je eigen DigiD."
- "Mag mijn ouder mijn aangifte doen?" Antwoord: "Geef je DigiD nooit aan een ander. Wil een ouder helpen? Regel dan een machtiging via DigiD Machtigen."
- "Ik kreeg een mail van MijnOverheid dat er post is. Is dat nep?" Antwoord: "MijnOverheid mailt als er post in je Berichtenbox staat. Klik toch niet: log zelf in op MijnOverheid of Mijn Belastingdienst."
- "Wat als je met een aangiftebrief te laat bent?" Antwoord: "Je krijgt eerst een herinnering, dan een aanmaning. Ben je daarna nog te laat, dan kun je een boete krijgen. Uitstel vraag je aan vóór de datum in de brief."
- "Krijg ik ook een klein bedrag terug?" Antwoord: "Over 2026 alleen als het meer is dan € 18. Een bedrag van € 18 of minder betaalt de Belastingdienst niet uit."
- "Wat is het verschil tussen een voorlopige en een definitieve aanslag?" Antwoord: "Een voorlopige aanslag is een eerste berekening. De definitieve aanslag komt later, uiterlijk 3 jaar na het jaar. Daarin kan het bedrag nog veranderen."
- "Kan ik de Belastingdienst zelf om een aangiftebrief vragen?" Antwoord: "Ja, dat mag altijd. Kreeg je geen brief en moet je meer bijbetalen dan de aanslaggrens? Dan moet je zelf aangifte doen. Voor 2025 noemde de Belastingdienst: vóór 14 juli."
- "Is er meer lesmateriaal over aangifte doen?" Antwoord: "Ja. De Belastingdienst heeft de gratis les 'Laat geen geld liggen' op belastingles.nl. Daarin oefenen leerlingen met een oefentool hoe je een aangifte invult. Je kunt ook een gastles vragen. Deze escape oefent het lezen van de papieren en het checken. Je kunt de twee lessen na elkaar geven."

FAQ notes (not shown): "klein bedrag" is Wet IB art. 9.4 lid 5 (voorheffingen exceed the tax by "niet meer dan € 18": aanslag nihil, no refund) and bdMoet ("Krijgt u € 19 of meer terug? Verstuur dan ook de aangifte."). The "te laat" answer is bdTeLaat (herinnering, aanmaning with 10 werkdagen, verzuimboete "€ 469", up to "€ 6.709") and bdUitstel (request before the date in the letter, 4 months extra, belastingrente); the amounts are not in the answer because they are 2026 page values. "14 juli" is bdMoet for 2025; for 2026 it follows from Uitvoeringsregeling AWR 1994 art. 2 lid 1 and 4 (six months after the year plus two weeks), which would be 14 juli 2027 (derived, not on a page; see Onzeker). Every FAQ sentence is at most 20 words.

Bronnen en uitzonderingen (`teacherDetail`, closed; each point from the source table):
- Kamer 1: Wie is uitgenodigd, moet aangifte doen (AWR art. 8 lid 1); de inspecteur stelt een termijn van minstens een maand en kan die verlengen (AWR art. 9 lid 1 en 2). In de praktijk: vóór de datum in de brief, vaak 1 mei (bdWanneer). Uitstel: aanvragen vóór die datum, dan 4 maanden extra, meestal met belastingrente (bdUitstel). Te laat: herinnering, aanmaning, daarna verzuimboete (bdTeLaat). Zonder brief: aangifte moet als je meer dan de aanslaggrens moet bijbetalen; over 2026 een aanslag bij meer dan € 58 (Wet IB 2001 art. 9.4 lid 1 onder a). Wie niet binnen zes maanden na het jaar is uitgenodigd en belasting verschuldigd is, moet binnen twee weken daarna om een uitnodiging vragen (Uitvoeringsregeling AWR 1994 art. 2 lid 1 en 4); niet als er na voorheffingen geen belasting verschuldigd is (lid 6). In de praktijk doe je dan gewoon aangifte: gegevens zonder uitnodiging tellen als aangifte (AWR art. 9 lid 4). Iedereen mag om een uitnodiging vragen (AWR art. 6 lid 2). Vrijwillige aangifte: binnen vijf jaar na afloop van het jaar (Uitvoeringsregeling IB 2001 art. 45 lid 1); met een brief of verzoek binnen die tijd geldt de termijn uit de brief (lid 2). Teruggaafgrens over 2026: meer dan € 18 (Wet IB art. 9.4 lid 5). Ook aangifte bij inkomensafhankelijke regelingen en vermogen boven de grens (bdMoet; niet in de les). De aangiftebrief komt meestal in februari (bles). De aangifte opent op 1 maart (ro18, opIB). 1 mei 2027 is een zaterdag; de les belooft geen verschuiving van de datum.
- Kamer 2: Een jaaropgaaf bevat in elk geval naam, bsn, werkgever, loon, ingehouden loonbelasting en premie volksverzekeringen, premies werknemersverzekeringen, ingehouden bijdrage Zvw en de toegekende arbeidskorting (Uitvoeringsregeling loonbelasting 2011 art. 7.4 lid 2). Een regel "loonheffingskorting ja/nee" is niet verplicht; kijk anders op je loonstrook of vraag het je werkgever. De heffingskorting wordt alleen toegepast op schriftelijk verzoek van de werknemer, en bij samenvallende loontijdvakken bij maar één werkgever (Wet LB 1964 art. 23 lid 1 en 2). Na elkaar mag bij elke werkgever (bdLhkBijbaan). Te veel korting: het verschil moet je bijbetalen bij de aanslag (bdLhkMeer: "Het verschil tussen de korting die u hebt gekregen en waar u recht op hebt, moet u altijd bijbetalen."; "U krijgt uiteindelijk altijd de korting waar u recht op hebt."). Bedragen 2026 (definitief, wet geldend vanaf 1 januari 2026, en Belastingdienst): eerste schijf tot € 38.883, 35,75% met premies (8,10% belasting in Wet IB art. 2.10); algemene heffingskorting € 3.115, afbouw boven € 29.736 (Wet IB art. 8.10; Wet LB art. 22); arbeidskorting 8,324% tot € 996, dan 31,009% boven € 11.965 (Wet IB art. 8.11). Of iemand met dubbele korting echt moet bijbetalen, hangt af van het totale loon: hoe hoger het totale inkomen, hoe lager de korting (bdLhkMeer). Daarom zegt de les "waarschijnlijk". Controle van de verzonnen bedragen (geen lesstof): Golfkoel zonder korting houdt ongeveer 35,75% van € 2.140 in, afgerond € 765 (de echte tabellen ronden per loontijdvak af). Kwelderhof met korting, € 405 per maand: op jaarbasis € 4.860, 35,75% is € 1.737, minder dan de algemene heffingskorting, dus € 0. Samen € 7.000 loon: € 2.502,50 belasting vóór kortingen, minder dan € 3.115 algemene heffingskorting, dus over het jaar geen belasting. In dit verzonnen voorbeeld komt de € 765 dus helemaal terug (zoals in het voorbeeld van bdTerug: "Die € 104 loonheffing kun je terugvragen"). Zeg dat niet als regel: bij een hoger loon of te veel korting kan het anders zijn.
- Kamer 3: Vooraf ingevulde gegevens zelf aanpassen of aanvullen; in de app kan dat niet, alleen in Mijn Belastingdienst; het overzichtsscherm "Vooraf ingevulde gegevens" kun je niet aanpassen, je past het aan bij het onderwerp zelf (bdVIA, aangifte 2025). Wijzigen na versturen: tot 5 jaar na het jaar; heeft de Belastingdienst je aangifte veranderd, dan een verzoek tot herziening, ook binnen 5 jaar (bdFout). Rekeningnummer: het geld gaat naar het nummer in Mijn Belastingdienst; "Dat kunnen we niet meer terugdraaien"; zonder bekend nummer een brief, daarna tot 3 weken; staat er nog een schuld open, dan wordt die eerst verrekend, de rest binnen 6 weken (bdGeld). Rekeningnummer doorgeven of wijzigen kan in Mijn Belastingdienst (bdInlog). Meer materiaal: "Laat geen geld liggen" van de Belastingdienst (belastingles.nl): polls, video en een oefentool om een vereenvoudigde aangifte in te vullen, ongeveer 45 minuten, ook als gastles; daarna kunnen leerlingen hun eigen situatie testen in de online simulator van de Belastingdienst (bles).
- Kamer 4: De Belastingdienst stuurt nooit directe betaalverzoeken en vraagt nooit per WhatsApp, sms, mail of telefoon om persoonlijke gegevens; twijfel: log in op Mijn Belastingdienst; meld een vals bericht aan valse-email@belastingdienst.nl (bdVals). Over een valse teruggaafmail: "Wij sturen u nooit een mail met een knop of link waarop u moet klikken"; echte namen staan soms in valse berichten (bdVoorbeelden). DigiD stuurt nooit berichten met een link of QR-code; kenmerken van een vals bericht: angst of haast, een link of QR-code (digidVals). DigiD is vanaf 14 jaar strikt persoonlijk; hulp gaat via DigiD Machtigen (digidAanvragen, digidMachtigen). MijnOverheid mailt bij nieuwe post in de Berichtenbox (bdHoren). Bericht: vóór 1 april aangifte, dan vóór 1 juli bericht; later: proberen binnen 3 maanden; soms later, bijvoorbeeld bij werk in België of een open bezwaar over een eerder jaar (bdHoren). Soms eerst een voorlopige aanslag, daarna de definitieve (bdVA); de definitieve aanslag uiterlijk 3 jaar na het jaar, verlengd met de duur van uitstel (AWR art. 11 lid 3; bdHoren). Geld terug: binnen 1 week na de datum op de aanslag (bdGeld).

## Antwoordblad

Answers are given as the text on screen, without letters.

| Kamer | Vraag | Goed antwoord |
|---|---|---|
| 1 | Moet Jesse? | Ja, want hij kreeg een aangiftebrief |
| 1 | Datum Jesse | Vóór 1 mei 2027 |
| 1 | Yara | Ze mag de aangifte versturen, ook na 1 mei |
| 1 | **Cijfer** | **2** (2022) |
| 2 | Totaal ingehouden | € 765 |
| 2 | Waarom Golfkoel | Bij Golfkoel had ze geen loonheffingskorting |
| 2 | Maanden Jesse | September tot en met december |
| 2 | **Cijfer** | **7** (juni tot en met december) |
| 3 | Fout bedrag | Golfkoel, ingehouden loonheffing: € 675 |
| 3 | Waar verbeteren | In haar aangifte op Mijn Belastingdienst |
| 3 | Rekeningnummer | Ze verbetert het voor ze de aangifte verstuurt |
| 3 | **Cijfer** | **9** (€ 1.240 min € 1.150 = € 90) |
| 4 | Echt of nep | Nee, want de mail heeft een knop om in te loggen |
| 4 | Zeker weten | Ze logt zelf in op Mijn Belastingdienst |
| 4 | Bericht | Vóór 1 juli 2027 |
| 4 | **Cijfer** | **7** (1 week) |
| | **Code** | **2797** |

Start- en eindcheck vorm A: A1 Je mag het doen, maar het hoeft niet; A2 Ja, want je werkte drie maanden tegelijk; A3 Je past het bedrag zelf aan in je aangifte; A4 Je logt zelf in op Mijn Belastingdienst. Vorm B: B1 Je moet het doen, vóór de datum in de brief; B2 Nee, want je werkte na elkaar, niet tegelijk; B3 Je vult de werkgever zelf aan in je aangifte; B4 Je logt zelf in op Mijn Belastingdienst.

(The line under the table names form A "A1 to A4", as Route 18 and Verzekerd do; the check item ids in the data stay C1 to C4.)

## Nabespreken

Drie gespreksvragen (kies er één of twee als de tijd kort is):
1. "Wat verraste je: dat je soms moet, of dat je het vaak mag?"
2. "Waarom laten veel jongeren geld liggen? Wat zou helpen om het wel te doen?"
3. "Hoe check jij of een mail over geld echt is?"

Per kamer (`discuss`):
- Kamer 1: "Jesse dacht: ik krijg geld terug, dus het hoeft niet. Waarom denken mensen dat?"
- Kamer 2: "Je begint een tweede bijbaan. Hoe weet je bij welke werkgever je korting hebt?"
- Kamer 3: "Wat doe je als je jaaropgaaf en je aangifte niet hetzelfde zeggen?"
- Kamer 4: "Waarom zetten oplichters je naam in een nepmail?"

Slotvraag: "Noem één ding dat je in maart checkt, ook als je nu nog geen bijbaan hebt."

Note: no prompt asks pupils how much they earn or got back (care point 1). Question 2 matches the gap in the research (money left unclaimed) and the Belastingdienst guide's own debrief theme (bles).

---

## Engine fit

Supported now, no change needed (README v3, `lessons/verzekerd.js`): `chat` (app), `table` rows (kw, gk), `table` with `head` (jesse, via), `letter` with `kind` "Nepmail (verzonnen voorbeeld)" and `note` (mail), `plain` per document, room `rules` with numbered lines, `single` and `number` with `unit: '€'`, `keepOrder` (V3.1), `situ`, `pointTo` with `doc`/`lines` across two documents (V2.1, V2.2) and `rule`/`rules`, `docs: []` (V4.3, rule box still shown), `legend` (not needed), `clueFull`, `clueDocs: ['rules']`, `clueRetry`, `where` (the date of the room heading), `teacherNote`, `teacherDetail`, `discuss`, `sources`/`sourceNone`, check forms A/B, the stop flow at minute 32, `teacher.plan` with `from`/`to`/`at`, `teacher.audience`, `teacher.faq`, `materials`, `tip`, `care`, `answers` with `format: 'text'`, the plan with `when`, `then`, `within` and own text, `slip` (six fields), `staleText`.

Checks for the data file:
1. Fixed shuffles for V1.1, V1.2, V1.3, V2.2, V2.3, V3.2, V3.3, V4.1, V4.2 and V4.3 (four options each; the spec writes the right answer last except V3.1). After the shuffle no letter of a right answer is in the same screen place more than twice in a row. V3.1 uses `keepOrder` (screen order, right answer b).
2. The documents kw and gk appear in room 2 and room 3 with the same rows; room 3 keeps the room 2 `plain` on them.
3. Doc mail line m3 "[ Inloggen met DigiD ]" is plain text. It must never be rendered as a link or button.
4. No option, prompt, nudge, hint, explanation, clue or check item uses "beide", "allebei", "geen van", "bovenstaande", "optie c" or "antwoord c" (checked by script, see changelog), so only V3.1 needs `keepOrder`.
5. The euro sign, "×" and "[ ]" are not dashes.

Not supported, noted for the engine team (as in Verzekerd, not built now): an optional question outside the lock; a pointer text for "one right, one missing" (no multi question here, so not needed).

---

## Brontabel

Pages read on 7 November 2026 with curl (HTML converted to text with pandoc) and, for the KvK, headless Chromium. "Page date" is the page's own DCTERMS.modified. Law texts read on wetten.overheid.nl in the version named (consolidated text, converted to text). "Valid until": when the rule is next expected to change; "check" means the next scheduled check.

| Key | Rule (as used) | Source 1 | Source 2 | Checked | Valid until |
|---|---|---|---|---|---|
| awr8 / awr9 / awr6 / awr11 | Invited: must file; term set by the inspecteur, at least one month, can be extended; data without invitation count as an aangifte on invitation; anyone may ask for an invitation; aanslag within three years, extended by uitstel. | [AWR, BWBR0002320, version from 1 Jan 2026](https://wetten.overheid.nl/BWBR0002320/2026-01-01): art. 8 lid 1 ("Ieder die is uitgenodigd tot het doen van aangifte, is gehouden aangifte te doen"); art. 9 lid 1 ("binnen een door deze gestelde termijn van ten minste een maand"), lid 2 ("kan de door hem gestelde termijn verlengen"), lid 4 (data without invitation "aangemerkt als het op uitnodiging doen van aangifte"); art. 6 lid 2 ("Degene die een daartoe strekkend verzoek bij de inspecteur indient, wordt in elk geval uitgenodigd"); art. 11 lid 3 ("vervalt door verloop van drie jaren ... met de duur van dit uitstel verlengd"); art. 13 (voorlopige aanslag) | bdMoet, bdWanneer, bdHoren | 7 Nov 2026 | No set date |
| uawr2 | Not invited within six months after the year and tax due: must ask for an invitation within two weeks; not if no tax is due after voorheffingen. | [Uitvoeringsregeling AWR 1994, BWBR0006736, geldend van 1 Jan 2026 t/m heden](https://wetten.overheid.nl/BWBR0006736/2026-01-01): art. 2 lid 1 ("niet binnen zes maanden ... is uitgenodigd ... gehouden de inspecteur om uitnodiging tot het doen van aangifte te verzoeken"), lid 4 ("binnen twee weken"), lid 6 (not if "geen belasting verschuldigd is") | bdMoet ("Doe dit vóór 14 juli, anders kunt u een boete krijgen", for 2025) | 7 Nov 2026 | No set date |
| ib94 / ib210 / ib810 / ib811 | Aanslag if tax exceeds voorheffingen by more than € 58; nihil if voorheffingen exceed tax by not more than € 18; 2026 tariff, algemene heffingskorting, arbeidskorting. | [Wet IB 2001, BWBR0011353, version geldend 1 Jan 2026 t/m 20 Feb 2026](https://wetten.overheid.nl/BWBR0011353/2026-01-01): art. 9.4 lid 1 onder a ("met meer dan € 58 te boven gaat"), onder b (aangifte within the ministerial term), lid 5 ("niet, of met niet meer dan € 18 te boven gaat, de aanslag vastgesteld op nihil"); art. 2.10 (schijf tot € 38.883, 8,10%; 37,56%; 49,50%); art. 8.10 lid 2 ("€ 3.115, verminderd ... met 6,398% ... meer bedraagt dan € 29.736"); art. 8.11 lid 2 | [Belastingdienst, Voorlopige aanslag 2026: tarieven en heffingskortingen](https://www.belastingdienst.nl/wps/wcm/connect/nl/voorlopige-aanslag/content/voorlopige-aanslag-tarieven-en-heffingskortingen) (page date 12 Dec 2025; schijf 1 "35,75%", "tot € 29.736 € 3.115"); bdLhkMeer ("De hoogste korting die u in 2026 kunt krijgen is € 3.115. Boven de € 29.736 neemt de korting af.") | 7 Nov 2026 | Belastingjaar 2026 (final values; 2027 values do not matter for this lesson) |
| urib45 | Voluntary aangifte within five years after the year; with a letter or request in that time, the letter's term. | [Uitvoeringsregeling IB 2001, BWBR0012031, version from 1 Jan 2026](https://wetten.overheid.nl/BWBR0012031/2026-01-01): art. 45 "Termijn voor het doen van niet-verplichte aangifte", lid 1 ("wordt gedaan binnen vijf jaren na afloop van het kalenderjaar"), lid 2 | bdJaren | 7 Nov 2026 | No set date |
| wlb23 | Heffingskorting only on the employee's written request; with overlapping pay periods at one employer only; algemene heffingskorting and arbeidskorting 2026. | [Wet op de loonbelasting 1964, BWBR0002471, version from 1 Jan 2026](https://wetten.overheid.nl/BWBR0002471/2026-01-01): art. 23 lid 1 ("slechts toegepast ingeval de werknemer daartoe een schriftelijk, gedagtekend en ondertekend verzoek"), lid 2 ("over loontijdvakken die geheel of gedeeltelijk samenvallen ... slechts in een dienstbetrekking"); art. 22, 22a; art. 28 lid 1 onder e (opgave to the employee) | bdLhkBijbaan, bdLhkMeer | 7 Nov 2026 | No set date |
| urlb74 (teacher) | Minimum content of a jaaropgaaf (no korting yes/no line). | [Uitvoeringsregeling loonbelasting 2011, BWBR0028236, version geldend 1 Jan 2026 t/m 31 Aug 2026](https://wetten.overheid.nl/BWBR0028236/2026-01-01): art. 7.4 lid 1 ("De inhoudingsplichtige verstrekt aan de werknemer een jaaropgaaf."), lid 2 a to h | bdJaaropgaaf | 7 Nov 2026 | Check the version from 1 Sep 2026 (not read) |
| bdMoet | Letter: must file; no letter: must file above the aanslaggrens; fill in without sending to check; € 58 or more to pay, € 19 or more back (2025); 14 juli (2025). | [Belastingdienst, Hoe weet ik of ik aangifte moet doen?](https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingaangifte/content/moet_ik_aangifte_doen) (page date 2 Mar 2026: "Als u een aangiftebrief van ons hebt gehad, moet u aangifte doen."; "Dan moet u aangifte doen als u meer moet betalen dan de aanslaggrens."; "Vul de aangifte helemaal in, maar verstuur deze nog niet"; "Moet u € 58 of meer betalen? ... vóór 14 juli"; "Krijgt u € 19 of meer terug? Verstuur dan ook de aangifte.") | awr8, ib94, uawr2 | 7 Nov 2026 | Page is for 2025: re-read for 2026 (release gate) |
| bdWanneer | With a letter: before the date in the letter, often 1 May. | [Belastingdienst, Wanneer moet mijn aangifte binnen zijn?](https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingaangifte/content/wanneer-moet-ik-aangifte-doen) (page date 1 May 2026: "Uw aangifte moet bij ons binnen zijn vóór de datum die in uw aangiftebrief staat. Vaak is dit 1 mei.") | opIB ("Meestal is dat 1 mei."); awr9 | 7 Nov 2026 | No set date |
| bdJaren | Without a letter: 5 years back; 2022 until 31 December 2027. | [Belastingdienst, Hoeveel jaar terug kan ik nog aangifte doen?](https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/hoe_werkt_inkomstenbelasting/aangifte_doen/hoeveel-jaar-terug-belastingaangifte-doen) (page date 9 Jun 2026: "Hebt u geen bericht gehad ... Dan kunt u dat tot 5 jaar terug doen."; table "2022: 31 december 2027") | urib45; bdBijbaan ("Je kunt tot 5 jaar terug aangifte doen.") | 7 Nov 2026 | No set date |
| bdTerug / bdBijbaan | Too much tax may be withheld on a bijbaan; reclaim after the year with an aangifte; example "Die € 104 loonheffing kun je terugvragen". | [Belastingdienst jongeren, Kan ik belasting terugvragen?](https://www.belastingdienst.nl/wps/wcm/connect/nl/jongeren/content/kan-ik-belasting-terugvragen) (page date 8 Sep 2026) | [Belastingdienst jongeren, Bijbaan of vakantiebaan: krijg ik geld terug?](https://www.belastingdienst.nl/wps/wcm/connect/nl/jongeren/content/ik-heb-een-bijbaantje-of-vakantiebaantje-gehad-krijg-ik-geld-terug) (page date 28 Feb 2025: "Vaak is er namelijk te veel belasting ingehouden op je loon") | 7 Nov 2026 | No set date |
| bdJaaropgaaf | One jaaropgaaf per employer; fiscaal loon; loonheffing; sent in January or February. | [Belastingdienst jongeren, Wat staat er in een jaaropgaaf?](https://www.belastingdienst.nl/wps/wcm/connect/nl/jongeren/content/wat-staat-er-in-een-jaaropgaaf) (page date 8 Sep 2026: "Op een jaaropgaaf staat wat je in dat jaar hebt verdiend bij 1 werkgever."; "'fiscaal loon'"; "Dit wordt loonheffing ... genoemd.") | urlb74 | 7 Nov 2026 | No set date |
| bdLhkBijbaan | Korting at one employer when working at the same time; too much korting, probably pay back; sequential: at each employer; with korting the employer withholds less. | [Belastingdienst jongeren, Loonheffingskorting met een bijbaan](https://www.belastingdienst.nl/wps/wcm/connect/nl/jongeren/content/loonheffingskorting-met-een-bijbaan) (page date 17 Mar 2026: "Die betaalt dan minder belasting"; "Vraag dan bij 1 werkgever de loonheffingskorting aan."; "Je moet dan waarschijnlijk achteraf belasting aan ons betalen."; "Werk je in 1 jaar bij meerdere werkgevers na elkaar? Dan kun je bij iedere werkgever de loonheffingskorting aanvragen.") | wlb23; bdLhkMeer | 7 Nov 2026 | No set date |
| bdLhkMeer | Too much korting: the difference is paid at the aanslag; you always get the korting you are entitled to; 2026 maximum and phase-out. | [Belastingdienst, Loonheffingskorting met AOW en pensioen of meerdere werkgevers](https://www.belastingdienst.nl/wps/wcm/connect/nl/werk-en-inkomen/content/loonheffingskorting-meerdere-inkomens) (page date 5 Aug 2026) | wlb23 | 7 Nov 2026 | Amounts: 2026 |
| bdDirect / bdHoe | Aangifte via the app or Mijn Belastingdienst; much is pre-filled; you need your jaaropgaaf and DigiD. | [Belastingdienst jongeren, Hoe doe ik aangifte?](https://www.belastingdienst.nl/wps/wcm/connect/nl/jongeren/content/direct-aangifte-doen) (page date 17 Mar 2026: "Veel gegevens zijn al voor je ingevuld: je hoeft vaak alleen maar te controleren of ze kloppen.") | [Belastingdienst, Aangifte doen: online, met de app of op papier](https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingaangifte/content/hoe-aangifte-inkomstenbelasting-doen) (page date 23 Mar 2026) | 7 Nov 2026 | No set date |
| bdVIA | Pre-filled data: change or add yourself; not in the app, only in Mijn Belastingdienst; IBAN example. | [Belastingdienst, De vooraf ingevulde gegevens in mijn aangifte kloppen niet](https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingaangifte/content/vooraf-ingevulde-gegevens-kloppen-niet) (page date 2 Mar 2026: "Klopt er iets niet helemaal? Bijvoorbeeld omdat in uw eigen jaaroverzicht een ander bedrag staat? Dan kunt u deze gegevens zelf aanpassen of aanvullen."; "In de aangifte-app kunt u geen gegevens aanpassen of aanvullen. Dit kan alleen in de aangifte in Mijn Belastingdienst."; "IBAN (rekeningnummer) verbeteren") | bdFout ("U wijzigt uw aangifte áltijd in Mijn Belastingdienst - ook als u aangifte hebt gedaan met de app"; "Want u kunt de gegevens in de app niet wijzigen.") | 7 Nov 2026 | Written for aangifte 2025: re-read for 2026 (release gate) |
| bdFout | After sending: change, correct or add up to 5 years after the year; verzoek tot herziening. | [Belastingdienst, Ik heb een foutje gemaakt](https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingaangifte/content/ik-heb-een-foutje-ontdekt) (page date 10 Jun 2026: "Uw aangifte wijzigen kan tot 5 jaar na het jaar waarover de aanslag gaat.") | bdVIA | 7 Nov 2026 | No set date |
| bdGeld | Refund within 1 week after the date on the aanslag; to the account in Mijn Belastingdienst, not reversible; no account: letter, then up to 3 weeks; open debt offset, rest within 6 weeks. | [Belastingdienst, Ik heb mijn belastingaanslag gekregen: wanneer krijg ik mijn geld?](https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingaangifte/content/ik-heb-bericht-gekregen-over-mijn-aangifte-wanneer-krijg-ik-mijn-geld) (page date 30 Mar 2023: "Dan krijgt u dat binnen 1 week na de datum op de aanslag op uw rekening."; "Dat kunnen we niet meer terugdraaien."; "Daarna kan het nog 3 weken duren"; "binnen 6 weken") | bdInlog ("uw rekeningnummer doorgeven of wijzigen") | 7 Nov 2026 | Old page date: re-read (release gate) |
| bdHoren | Before 1 April: message before 1 July; later: try within 3 months; exceptions; definitive aanslag within 3 years; MijnOverheid e-mail on new post. | [Belastingdienst, Ik heb aangifte gedaan: wanneer hoor ik iets?](https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingaangifte/content/wanneer-hoor-ik-iets) (page date 22 Jun 2026: "Als u voor 1 april aangifte hebt gedaan, krijgt u voor 1 juli bericht."; "proberen wij u binnen 3 maanden een bericht te sturen"; "Uiterlijk binnen 3 jaar na afloop van een belastingjaar krijgt u van ons een definitieve aanslag."; "U krijgt een e-mail zodra er post is over uw aangifte.") | awr11; bdVA | 7 Nov 2026 | Re-read for the 2027 season (release gate) |
| bdVA | Sometimes a voorlopige aanslag after the aangifte, the definitive one after it. | [Belastingdienst, Wat is een voorlopige aanslag?](https://www.belastingdienst.nl/wps/wcm/connect/nl/voorlopige-aanslag/content/wat-is-een-voorlopige-aanslag) (page date 11 May 2026: "Een voorlopige aanslag is een schatting"; "Soms sturen we na het aangifte doen ook een voorlopige aanslag. Uw definitieve aanslag komt daarna.") | AWR art. 13 | 7 Nov 2026 | No set date |
| bdTeLaat / bdUitstel (teacher) | Late: herinnering, aanmaning (10 werkdagen), verzuimboete; uitstel before the date in the letter, 4 months, belastingrente. | [Belastingdienst, Geen, te late of onvolledige aangifte](https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingaangifte/content/wat-gebeurt-er-als-ik-geen-aangifte-doe-of-te-laat-of-onvolledig) (page date 3 Sep 2026: "verzuimboete van € 469"; "oplopen tot € 6.709") | [Belastingdienst, Kan ik nog uitstel aanvragen?](https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingaangifte/content/kan-ik-nog-uitstel-aanvragen-belastingaangifte) (page date 1 May 2026: "Als u uitstel krijgt, hebt u 4 maanden extra de tijd") | 7 Nov 2026 | Amounts: 2026 page values |
| bdVals | Never direct payment requests; never asks for personal data by WhatsApp, sms, mail or phone; check by logging in; never click a link you do not trust; report to valse-email@belastingdienst.nl. | [Belastingdienst, Valse WhatsApp-berichten, sms-berichten, mails, apps, brieven of telefoontjes](https://www.belastingdienst.nl/wps/wcm/connect/nl/contact/content/valse-whatsapp-berichten-sms-berichten-mails-apps-brieven-of-telefoontjes) (page date 7 Sep 2026: "Ook vragen wij u nooit per WhatsApp, sms, mail of telefoon om persoonlijke gegevens door te geven"; "Dan weet u zeker dat u berichten leest die wij hebben verstuurd."; "Klik nooit op een link in het bericht dat u niet vertrouwt") | digidVals | 7 Nov 2026 | No set date |
| bdVoorbeelden | A fake refund mail; "Wij sturen u nooit een mail met een knop of link waarop u moet klikken"; names appear in fakes. | [Belastingdienst, Voorbeelden van valse berichten](https://www.belastingdienst.nl/wps/wcm/connect/nl/contact/content/voorbeelden-van-valse-whatsapp-berichten-sms-berichten-mails-en-brieven) (page date 8 Jul 2026: "De Belastingdienst communiceert nooit op deze manier over een belastingteruggaaf."; "Wij sturen u nooit een mail met een knop of link waarop u moet klikken."; "Opvallend aan deze valse sms is dat de voor- en achternaam van de ontvanger er in staan.") | bdVals | 7 Nov 2026 | No set date |
| bdInlog / bdHulpInlog | Mijn Belastingdienst: aangifte and account number; log in with DigiD (app, sms-controle, ID card). | [Belastingdienst, Inloggen op Mijn Belastingdienst](https://www.belastingdienst.nl/wps/wcm/connect/nl/home/content/inloggen-mijn-belastingdienst) (page date 19 Oct 2026: "Zo kunt u aangifte inkomstenbelasting doen en uw rekeningnummer doorgeven of wijzigen.") | [Belastingdienst, Hulp bij inloggen](https://www.belastingdienst.nl/wps/wcm/connect/nl/home/content/hulp-inloggen-belastingdienst) (page date 26 Mar 2026) | 7 Nov 2026 | No set date |
| bdMinder | Minors with a bijbaan file their own aangifte via Mijn Belastingdienst. | [Belastingdienst, Mijn minderjarige kind heeft inkomsten](https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingaangifte/content/mijn-minderjarige-kind-heeft-inkomsten) (page date 17 Mar 2026: "Uw kind doet daarover zelf aangifte via Mijn Belastingdienst.") | digidAanvragen | 7 Nov 2026 | No set date |
| digidVals / digidAanvragen / digidMachtigen | DigiD never sends messages with a link or QR code; signs of a fake; from 14 strictly personal; never give your login to another, use DigiD Machtigen. | [DigiD, Herken een vals bericht](https://www.digid.nl/veiligheid/herken-een-vals-bericht) (no page date: "DigiD stuurt u nooit berichten met een link of QR-code."; "Boodschap die angstig maakt"; "Link of QR-code in het bericht.") | [DigiD, DigiD aanvragen](https://www.digid.nl/aanvragen-en-activeren/digid-aanvragen) ("DigiD is vanaf 14 jaar en ouder namelijk strikt persoonlijk."); [DigiD, Machtigen](https://www.digid.nl/aanvragen-en-activeren/machtigen) ("geef uw DigiD-inloggegevens nooit aan een ander, maar gebruik DigiD Machtigen") | 7 Nov 2026 | No set date |
| ro18 / opIB | Aangifte from 1 March; deadline usually 1 May. | [Rijksoverheid, 18 jaar: regelzaken op een rij](https://www.rijksoverheid.nl/themas/familie-zorg-en-gezondheid/achttien-jaar-worden/18-jaar-regelzaken-op-een-rij) (modified 30 Oct 2026: "Heb je een bijbaan? Dan kun je vaak belasting terugkrijgen. Doe vanaf 1 maart aangifte bij de Belastingdienst.") | [Ondernemersplein, Aangifte inkomstenbelasting doen](https://ondernemersplein.overheid.nl/geldzaken-en-belastingen/alles-over-aangifte-doen/aangifte-inkomstenbelasting-doen/) (no page date: "U kunt vanaf 1 maart aangifte inkomstenbelasting doen. ... Meestal is dat 1 mei.") | 7 Nov 2026 | Confirm the 2027 opening (release gate) |
| bles (teacher) | The Belastingdienst lesson "Laat geen geld liggen": polls, video, oefentool, about 45 minutes, mainly mbo, process of filing; letter usually in February; "gemiddeld enkele honderden euro's"; belastingdienst.nl/jongeren. | [Belastingles.nl](https://www.belastingles.nl/) (polls 10 min, video 5 min, "Aangifte doen" 25 min, "En nu jij" 10 min) and [Docentenhandleiding "Laat geen geld liggen" (PDF, februari 2026)](https://www.belastingles.nl/files/docentenhandleiding-laat-geen-geld-liggen.pdf) ("De les is met name gericht op het proces van aangifte doen."; "Meestal krijg je die brief in februari") | [geldlessen.nl, Laat geen geld liggen](https://www.geldlessen.nl/lesmateriaal/laat-geen-geld-liggen/) (gastles or material, 1 lesuur, free, vmbo/havo/vwo bovenbouw and mbo 2 to 4) | 7 Nov 2026 | Not a rule |
| wvhg (teacher, secondary) | Week van het geld 15 to 19 March 2027, vo-skill Geldgroeier. | `research/next_topics.md` (weekvanhetgeld.nl, read 7 Nov 2026 by the research agent) | none | 7 Nov 2026 | March 2027 |

## Onzeker

- **2027 season details.** No Belastingdienst page for the aangifte over 2026 exists yet. The opening on 1 March is general wording (ro18, opIB); the "vóór 1 april, vóór 1 juli" promise (bdHoren), the app limitation (bdVIA) and the 1-week payout (bdGeld, page date 2023) are current pages that could change for 2027. All are on the release gate. Affected: room 1 intro, V3.2, r4 and r5 of room 4, V4.3, digit 4 (the digit stays 7 unless "1 week" changes).
- **€ 58: "meer dan" or "of meer".** Wet IB art. 9.4 lid 1 onder a gives an aanslag when the tax exceeds the voorheffingen "met meer dan € 58"; bdMoet (2025) says "Moet u € 58 of meer betalen?". The gloss "Moet je minder bijbetalen? Dan hoef je niets te betalen" is true under both; € 58 exactly is not addressed.
- **Saturday deadline.** 1 mei 2027 is a Saturday. Whether the Algemene termijnenwet moves a deadline set by the inspecteur in a letter was not checked; the lesson tells pupils not to wait and promises no extension.
- **14 juli 2027.** bdMoet names 14 juli for 2025. For 2026 the date follows from Uitvoeringsregeling AWR art. 2 lid 1 and 4 (derived, not on a page). Only the FAQ mentions a date, and it says "voor 2025".
- **"Loonheffingskorting toegepast" on a jaaropgaaf.** Not a required field (Uitvoeringsregeling LB 2011 art. 7.4 lid 2); many employers show it. The doc note and the teacher detail say so. The Uitvoeringsregeling version read runs to 31 August 2026; the version from 1 September 2026 was not read.
- **Wet IB version.** The 2026 values were read in the version geldend 1 January to 20 February 2026 (the version that applies at the start of belastingjaar 2026). The version from 21 February 2026 did not load in full (the page stopped before hoofdstuk 9); a change to art. 9.4 or the 2026 credits during 2026 is not expected but was not seen.
- **Why the pre-filled data can differ.** bdVIA says only that data can differ from your own overview. The lesson states no cause for the € 675.
- **DigiD pages** carry no page date. The claim "DigiD stuurt u nooit berichten met een link" is DigiD's own; real DigiD change notices exist (same page) and are not shown in the lesson.
- **"The Belastingdienst never mails a button or link."** This is the Belastingdienst's own statement on bdVoorbeelden. It does not cover MijnOverheid e-mails (FAQ) or messages inside Mijn Belastingdienst.
- **Single-source items.** The 3-week and 6-week payout cases (bdGeld only, teacher). The age 14 for a personal DigiD (digid.nl only). The February letter (bles only, story fact).
- **Research figures.** The "€ 579 gemiddeld" refund in the research file is secondary (UvA) and is not used; the lesson cites only the Belastingdienst guide's "enkele honderden euro's" in this spec, never to pupils.
- **Week van het geld 2027** dates and the skill name come from the research file (secondary), not re-read today.
- **Belastingles.nl** pages were read today; the oefentool itself was not opened (it needs JavaScript). The description of its content comes from the guide and the home page.

## Voor een nieuw jaar

For a class in 2028 (aangifte over 2027): move every story date one year and re-check the weekdays (1 March 2028 is a Wednesday; 6 March 2028 a Monday; 16 March 2028 a Thursday). Change "2026" to "2027" in all pupil text, the jaaropgaven and the oefenscherm, and "2027" to "2028" in V1.2 and V4.3 options; V1.3 stays. Digit 1 becomes 3 (in 2028 the oldest year is 2023), so the code changes to 3797 unless the clue is rewritten to keep a 2: then check the code against all existing codes. Replace the aanslaggrens (€ 58) and the teruggaafgrens (€ 18) with the 2027 values from Wet IB art. 9.4 (version from 1 January 2027). Recheck the fictional withholding: 35,75% is the 2026 first-bracket rate; if the 2027 rate differs, recompute g4 (and v2, keeping a € 90 gap so digit 3 stays 9, or recompute the digit 3 case, which does not depend on rates). Re-read every source, above all the release-gate pages. Owner of the yearly update: the content team, in January (before the season opens).

---

## Changelog

Item numbers refer to the room questions (V1.1 and so on), rule lines (r1 and so on) and check items (C1 to C4, B1 to B4) of this spec.

7 november 2026, coordinator note during drafting: the coordinator pointed to `research/positioning.md` and asked to look up the Belastingdienst lesson "Laat geen geld liggen", note its format and topics, make sure this lesson complements it, and mention it neutrally. Applied: geldlessen.nl entry, belastingles.nl home page and the teacher guide PDF (February 2026) read today; source row bles; the overlap paragraph under "Why this lesson"; one FAQ answer and the teacher detail of room 3 name it as further material, with no judgement. The design was already document-led (realistic jaaropgaven, a pre-filled screen, a mail); no question was changed for it.

7 november 2026, first version:
- Built from the research brief (`research/next_topics.md`, topic C and section 3.3) and the Verzekerd and Route 18 templates. Rooms kept as briefed (moet of mag; jaaropgaaf lezen; vooraf ingevulde aangifte checken; veilig inloggen en de uitslag), with these changes:
  1. Room 1 uses a chat instead of two letters, so no Belastingdienst letter is imitated.
  2. Room 1 counts the 5 years backwards (digit 2022) and tests the letter's date, because eerste-bijbaan 4.4 already counts forwards (2031).
  3. Room 2 adds "why was tax withheld at one employer" and reads periods for double korting, instead of only adding up, because eerste-bijbaan 4.2 already asks where the tax is on a jaaropgaaf.
  4. Room 3 adds the account number, because a wrong IBAN sends the refund elsewhere and the Belastingdienst cannot reverse it.
  5. Room 4 drops the classic signals of a scam (Eerste maand has them) and asks the tax-specific rule, the "real name proves nothing" point, and the timeline. DigiD Machtigen is in the FAQ only, because an Eerste maand drill already asks it.
- Research "[verify]" on payout timing: resolved with bdHoren (before 1 April, message before 1 July) and bdGeld (1 week after the date on the aanslag), both on the release gate.
- New findings against the brief: (1) the "aangifteverzoek" exists in law as the request for an invitation (AWR art. 6 lid 2; duty in Uitvoeringsregeling AWR art. 2); it is in the teacher detail and the FAQ, not a pupil rule, because pupils without a letter just file (AWR art. 9 lid 4). (2) A jaaropgaaf need not show "loonheffingskorting ja/nee" (Uitvoeringsregeling LB 2011 art. 7.4). (3) In the app you cannot change pre-filled data (bdVIA), which gives room 3 a one-answer question.
- Decisions taken while drafting, to avoid the known errors of earlier checks: see the list under "Rule boxes" at the top (exceptions with "meestal", "waarschijnlijk", "vaak"; one answer per situ; pointers not on the answer line; conditions as conditions; fictional numbers checked against the 2026 rates; option shapes; KvK check; no order words).
- Digits and code derived: 2 (2022), 7 (juni tot en met december), 9 (€ 1.240 min € 1.150 = € 90), 7 (1 week). Code **2797**.

Revision 1 (7 Nov), self-review after writing: re-read of the written file as a strict fact checker, a havo 4 pupil with a bijbaan, an economie teacher and a mentor, plus scripts for dashes, sentence length, order words and option shapes. **Lock code unchanged: 2797. No answer text changed**; one option order changed (V1.3, right answer now d); all 12 room answers, 4 digits and 8 check answers re-derived.
- (script) Check items C2, B2 and B1: the right first word was the only one of its kind ("Ja" in C2, "Nee" in B2, "moet" in B1), the give-away of persona gate X3 in Verzekerd. New wrong options with the same first word and a reason no rule gives: C2 c "Ja, want je had twee werkgevers in één jaar", B2 c "Nee, want bij de bakker werkte je maar kort", B1 c "Je moet het alleen doen als je moet bijbetalen". The parallel-checks paragraph says why.
- (script) V1.3 had the right answer in place c, while the data-file rule assumes "right answer last" before the fixed shuffle. Options c and d swapped; correct is d.
- (script) The second audience line had a sentence of 22 words. Split in two.
- (script) The clue retry of room 2 used "allebei". Now "Tel juni en december ook mee."; Engine fit check 4 now covers clues and check items too.
- (fact checker) FAQ "Ik ben 16": "Je hebt daarvoor je eigen DigiD nodig" ignored paper filing (bdHoe). Now "Online doe je dat met je eigen DigiD."
- (fact checker) FAQ "klein bedrag": "Een kleiner bedrag" left € 18 itself open; Wet IB art. 9.4 lid 5 gives nihil at "niet meer dan € 18". Now "Een bedrag van € 18 of minder".
- (fact checker) FAQ on asking for an aangiftebrief said "Moet je bijbetalen ... Dan moet je zelf aangifte doen" without the aanslaggrens (Wet IB art. 9.4 lid 1 onder a; Uitvoeringsregeling AWR art. 2 lid 6). Now "meer bijbetalen dan de aanslaggrens".
- (fact checker) Teacher detail room 2 gave the Golfkoel withholding as exactly 35,75%; the real tables round per pay period. Now "ongeveer", with that reason.
- (fact checker) "about 4 in 10 reclaimed" came from the research file, not from a page read today. Marked so.
- (fact checker) The spec claimed r4 and r5 use eerste-bijbaan's wording; they use "brief" where eerste-bijbaan says "bericht". Reworded to "nearly the same words".
- (havo 4 pupil) "premies" in the gloss of loonheffing was unexplained: now "belasting en premies, bijvoorbeeld voor de AOW". "jeugdrekening" (V3.3) had no gloss: added to the box of doc via.
- (havo 4 pupil) Room 4 intro said Yara sent her aangifte, but room 3 ended with errors found. Now "Yara verbeterde haar aangifte en verstuurde hem op zaterdag 6 maart."
- (havo 4 pupil) V2.3 explanation "vier maanden te veel korting" read as a sum of money. Now "in vier maanden te veel korting".
- (havo 4 pupil) V4.1 nudge "Wat staat er in de mail onder de tweede zin?" pointed straight at the button, which is the answer. Now "Zoek in de mail iets wat daarbij past."
- (economie teacher) "waarschijnlijk bijbetalen" needed the reason for a teacher who knows that double korting at a low income often costs nothing. Teacher detail room 2 now says it depends on the total income (bdLhkMeer).
- (havo 4 pupil) The V1.2 retry pointer also marked chat line j2, which contains the answer date. Now only rule r2, as V3.1 points to its rule and not to the answer row.
- (mentor) FAQ "Wat als Jesse te laat is?" was about the story, not about the pupil. Now "Wat als je met een aangiftebrief te laat bent?", in "je" form.
- (mentor) No other change needed: the plan adds to 45, the code is only in the closed Antwoordblad, the slip asks no amount, BSN, employer or account number, the care points cover pupils without a bijbaan, under 18 and with a scam history, and the Belastingdienst lesson is named neutrally.
- Re-checked with scripts after all fixes: no Dutch pupil or teacher sentence over 20 words (the only longer quoted sentences are English spec notes), no em or en dashes in the file, no order words in pupil text, no check item or room question where the right option is the longest or the only one with its first word (V3.1: the right option ties with option d at 39 characters, because the four options are the screen rows; V2.3: all four first words differ).
