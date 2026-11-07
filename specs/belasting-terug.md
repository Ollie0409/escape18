# Escape "Geld terug van de Belastingdienst" (content spec, ID voorstel: ESC-BELASTING)

Regels geldig voor: de aangifte inkomstenbelasting over belastingjaar 2026, gedaan in 2027 (the story plays from 1 to 16 March 2027); gecontroleerd op 7 november 2026; validUntil: 31 december 2027. Real amounts in pupil text: only the aanslaggrens over 2026 (€ 58, Wet IB 2001 art. 9.4 lid 1 onder a, versions from 1 January and 21 February 2026), in one gloss. Every other amount (wages, loonheffing, account numbers) is fictional and labelled so. No question needs a real amount: all questions use rules, dates and the fictional documents. The engine's default banner after validUntil ("sommige bedragen kunnen verouderd zijn") is kept; no `staleText` (lessons-e2e checks the default text).

Release gate (as in Verzekerd, persona gate T1): on the day of publication, and again on 1 March 2027, re-read the pages that this lesson leans on and that can change for the 2027 season: (1) bdVIA and bdApp, "In de aangifte-app kunt u geen gegevens aanpassen of aanvullen" (V3.2 depends on it); (2) bdHoren, "Als u voor 1 april aangifte hebt gedaan, krijgt u voor 1 juli bericht" (V4.3, r4 room 4); (3) bdGeld, "binnen 1 week na de datum op de aanslag" (digit 4, r5 room 4; page date 2023; if the number of days changes, digit 4 and the code change); (4) bdRek, the route "Mijn gegevens", "Mijn rekeningnummer doorgeven" (V3.3, doc gegevens); (5) bdMoet for 2026 (it now shows the 2025 page; expect "€ 59 of meer" and "€ 19 of meer", see Onzeker). Also confirm that the 2026 aangifte opens on 1 March 2027 (ro18 and opIB say "vanaf 1 maart" in general; fallback intro: "Het is maandag 1 maart 2027. Deze maand kun je aangifte doen over 2026."). Then update `checked`, `CHECKED_ON` in `tests/spec-compare.js` and the date in the second audience line. If (1) changes, V3.2 and its explanation change; the digit and the code do not.

Doelgroep en moment: havo 4 en 5, vwo 4 tot en met 6, vooral leerlingen met een bijbaan (from 16; minors with a bijbaan file their own aangifte, bdMinder). Mentoruur, LOB or economie as a practice hour; it is not CE stof (no syllabus item is claimed). Window: 1 March to 30 June 2027 (the aangifte over 2026 is open and the rule "vóór 1 april, bericht vóór 1 juli" is still useful). Hook: Week van het geld, 15 tot en met 19 maart 2027, theme "Unlock je geldskills" (wvhg, read today). Lesduur 45 minuten, escape 26 minuten, stop op minuut 32 (same timing as Verzekerd and Route 18).

Format as ESC-KAMER, Route 18 and Verzekerd: four rooms, 3 questions per room, one retry with a nudge that points to a line, a hint that costs 30 seconds, one digit per room, one lock of four digits, then the end check, the end screen and the plan. Pupil text is Dutch B1, sentences at most 20 words, no em or en dashes. Rules come only from the source table at the end. All pages and law texts read on 7 November 2026.

Rule boxes (`room.rules`): every rule a pupil needs on the first try is in the room's rule box, the situation text or the room's documents (G4 fix 3). Each digit clue shows the facts it needs (G4 fix 1), names its lock position (G4 fix 2) and uses a new case with other numbers, so it does not repeat a room answer (persona gate P8). Known errors of earlier checks, avoided:
- No absolute rule where the law or the page has an exception: "meestal" where Belastingdienst names exceptions (r5 room 4), "waarschijnlijk" where it says so (r5 room 2), "Vaak is dat 1 mei" (r2 room 1), "Soms duurt het langer" (r4 room 4).
- One defensible answer per question: each situ states the fact that would otherwise open a second answer (V1.3 "ze krijgt geld terug"; V3.2 "je jaaropgaaf klopt"; V3.3 "De oude rekening bestaat niet meer"); no option is a weaker form of the right one (V4.3 asks for the date of regel 4, all other dates are earlier or about another rule).
- Hints point to a place or a method, never to the option; no retry pointer highlights the answer line itself (V2.2 and V3.1 point to their rule, not to the rows that hold the answer).
- Conditions are written as conditions: "Deed je vóór 1 april aangifte? Dan krijg je vóór 1 juli bericht." V4.3 has "1 april 2027" as the trap option for pupils who read the condition as the consequence.
- Fictional numbers never clash with real rules: the Golfkoel withholding (€ 765 on € 2.140) is about 35,75% of the wage, the real 2026 first-bracket rate without loonheffingskorting; Kwelderhof with korting withholds € 0 on € 405 a month (teacher detail room 2 has the check).
- Option shapes (persona gate): in every question and check item the right option is not the longest, not the only one with its first word or shape, not the only one with a word the others lack (such as "zelf"), and not the sum of the other options (checked by script, see changelog).
- No real company names: all employers checked in the KvK Handelsregister (see the fiction paragraph).
- No order words ("beide", "allebei", "geen van", "bovenstaande") in options, prompts, nudges, hints, explanations, clues or check items.

Why this lesson (research `research/next_topics.md`, topic C and section 3.3): the money left unclaimed is the largest measured behaviour gap among the topics (about 4 in 10 young people with a job reclaimed, per the research file, not re-read today; the Belastingdienst's own teacher guide says mbo students with a bijbaan leave "gemiddeld enkele honderden euro's per jaar liggen", bles). The season opens on 1 March and Week van het geld follows two weeks later. Overlap avoided on purpose:
- **Je eerste bijbaan, kamer 4** (`content_new/eerste-bijbaan.md`): teaches loonheffingskorting at one employer at a time (4.1), where the tax is on a jaaropgaaf (4.2), that you reclaim with an aangifte after the year (4.3), and the 5-year window counted forward ("tot en met 2031", 4.4). Its teacher note says: with a letter, follow the letter; without a letter you must still file above the aanslaggrens; sequential employers may each apply the korting. This lesson builds on that and repeats none of those questions. Room 1 asks what the letter changes (moet against mag, the date in the letter, the 1 May trap) and counts the 5 years backwards in the digit clue (2022). Room 2 reads two jaaropgaven together, explains why one withheld tax and the other not, and reads periods to find double korting; the sequential exception that eerste-bijbaan keeps in the teacher note becomes a pupil rule and check item. Rules r4 and r5 of room 1 state eerste-bijbaan r3 in nearly the same words ("brief" for "bericht", as bdMoet does, and r5 names the refund case), so the two lessons never disagree. The slip there is labelled "Loon voor de loonheffing", here "Fiscaal loon" (bdJaaropgaaf); the gloss here names both.
- **Eerste maand** (`d34`): signals of an sms scam (haste, a payment link) and DigiD Machtigen (drill in `d34/src/drills2.js`, a friend who asks for your password). Room 4 here does not ask either again. It asks the tax-specific rule (the Belastingdienst never mails a button or link to log in, also not about a refund), that a real name in the mail proves nothing, where you can be sure a message is real (Mijn Belastingdienst), and when the result arrives. A care point tells teachers which part is new for classes that played lesson 1.
- **"Laat geen geld liggen" (Belastingdienst, belastingles.nl; listed on geldlessen.nl)**: a free lesson of about 45 minutes with polls, a 5-minute video and an "oefentool" in which pupils fill in a simplified aangifte step by step for a case of a peer, plus a quiz and a pointer to the Belastingdienst's online simulator; it can also be given as a guest lesson. Its guide says it is aimed mainly at mbo students and "met name gericht op het proces van aangifte doen" (bles). This escape does something else: pairs put realistic documents side by side (two jaaropgaven, a pre-filled screen, the account screen) and find one fault, decide moet or mag from a letter, and judge a refund mail. Teachers can use both, in either order; the teacher screen names it neutrally as further material (FAQ and teacherDetail room 3).

Lead: "Krijg je geld terug van je bijbaan? Weet of je moet of mag, lees je jaaropgaven, check je aangifte en log veilig in."

The lead is used on the start screen and the site card (spec-compare reads it from the spec).

Fiction line (shown once at the start):
"Verzonnen zijn de mensen, de werkgevers, de jaaropgaven, de schermen, de mail en de bedragen daarin. De regels zijn echt, en bij elke uitleg staat de bron."

Neutrality line (start screen under the fiction line, and on the teacher screen):
"Deze les belooft geen bedrag. Of je geld terugkrijgt, zie je pas in je eigen aangifte."

Fictional on purpose: the people Yara (18, born 12 mei 2008) and her friend Jesse (19); Supermarkt Kwelderhof (Yara's job all of 2026, Jesse's second job from September); IJssalon Golfkoel (Yara's summer job); Bezorgdienst Duinrit (Jesse's job all of 2026); every jaaropgaaf, the two "oefenschermen" (the pre-filled aangifte and "Mijn gegevens"), the nepmail and its address `teruggaaf@bd-teruggaaf.example` (reserved test domain), and the account endings 4821 and 7306 (no full IBAN is shown anywhere). Name check, 7 November 2026, KvK Handelsregister search in headless Chromium (the script of Verzekerd Revision 2, validated again today: 181 results for "Achmea"): "Kwelderhof", "Golfkoel" and "Duinrit" each "Er zijn geen resultaten gevonden"; a web search for "Kwelderhof" and "Golfkoel" found no shop, supermarket or ice-cream parlour. Rejected on the way: "Zeeschuim" (1 KvK result) and "Kadelicht" (KvK has "KadeLicht"). "Wierdekoerier" also had 0 results but is not used. The first names Yara and Jesse carry no surname. No town is named. The Belastingdienst, DigiD and MijnOverheid are named only as the real places where a rule applies. No letter, screen or page of theirs is imitated: the documents are plain text, labelled "korter gemaakt en verzonnen", with no logo, house style or real reference number, and the nepmail is labelled as a nepmail. The screen labels "Mijn gegevens" and "Mijn rekeningnummer doorgeven" are the route names the Belastingdienst gives in its own instructions (bdRek), used so pupils recognise the real route.

Story time: belastingjaar 2026. Yara worked at Supermarkt Kwelderhof from 1 januari to 31 december 2026 (loonheffingskorting on) and at IJssalon Golfkoel from 1 juli to 31 augustus 2026 (loonheffingskorting off, correctly, because the jobs overlapped). She turned 18 on 12 mei 2026. She received no aangiftebrief. Jesse worked at Bezorgdienst Duinrit all of 2026 and at Supermarkt Kwelderhof from 1 september 2026, with the korting on at both; he received an aangiftebrief in February 2027 (the Belastingdienst's guide: "Meestal krijg je die brief in februari", bles). Room 1: maandag 1 maart 2027 (the day the aangifte opens, per ro18 and opIB). Room 2: woensdag 3 maart 2027. Room 3: zaterdag 6 maart 2027; Yara corrects and sends her aangifte that day. Room 4: dinsdag 16 maart 2027 (Week van het geld). Digit clue 4 uses a separate case (an aanslag dated vrijdag 14 mei). Other dates in the text: 1 april 2027 (Thursday), 30 april 2027 (Friday), 1 mei 2027 (Saturday), 6 juni 2027 (Sunday; V4.3 option, three months after 6 maart), 1 juli 2027 (Thursday), 14 juli 2027 (Wednesday; FAQ). All weekdays checked with a calendar script.

Code: **2797** (room digits 2, 7, 9, 7; not 1725, 2824, 2073, 3521, 4379, 3231 or 2348). Teacher screen: show it only inside the closed Antwoordblad, never on the projected part.

## Leerdoelen

1. De leerling kan zeggen wanneer je aangifte moet doen (een aangiftebrief, of bijbetalen boven de aanslaggrens) en wanneer je het mag (geen brief en geld terug, tot 5 jaar later). Met een brief geldt de datum in de brief.
2. De leerling kan op twee jaaropgaven het loon, de ingehouden loonheffing en de loonheffingskorting vinden, en zien in welke periode iemand twee keer korting kreeg.
3. De leerling kan de vooraf ingevulde aangifte naast de jaaropgaven leggen, een fout bedrag vinden en zeggen waar je dat verbetert. De leerling weet waar het rekeningnummer voor de teruggaaf staat.
4. De leerling herkent een nepmail over een teruggaaf, weet waar berichten zeker echt zijn, en weet wanneer bericht en geld komen.

---

## Kamer 1. Moet of mag? (maandag 1 maart 2027)

**Intro:** "Het is maandag 1 maart 2027. Vanaf vandaag kun je aangifte doen over 2026. Yara is 18 en had in 2026 twee bijbanen. Ze appt met haar vriend Jesse. Hij is 19."

### Document 1: appjes (type: chat, id: app)
Name: "Jesse". Sub: "app op de telefoon van Yara" (the engine shows the right-hand bubbles without a name; the sub line says whose phone it is, as Route 18 does). Messages:
- j1 them "Ik kreeg in februari een aangiftebrief van de Belastingdienst. Over 2026." 10:02
- j2 them "In de brief staat: je aangifte moet vóór 1 mei 2027 binnen zijn." 10:02
- j3 them "Maar ik krijg vast geld terug. Dan hoeft het toch niet?" 10:03
- y1 me "Ik kreeg geen brief. Ik keek in de app van de Belastingdienst." 10:05
- y2 me "Daar zag ik: ik krijg geld terug. Ik heb nog niets verstuurd." 10:05

Design note: the chat states the two facts that decide V1.1 and V1.3 (letter or no letter; Yara gets money back) and the date in Jesse's letter (V1.2). Jesse's "Dan hoeft het toch niet?" is the misconception the room is built around. The Belastingdienst advises to fill in the aangifte without sending it to see the result (bdMoet: "Vul de aangifte helemaal in, maar verstuur deze nog niet"); y1 and y2 show that, and r6 says it.

**Moeilijke woorden (plain):** "Aangifte: je geeft je inkomen van een jaar door aan de Belastingdienst. Aangiftebrief: een brief of bericht van de Belastingdienst dat je aangifte moet doen. Bijbetalen: je moet nog belasting betalen. Aanslaggrens: een klein bedrag. Over 2026 is dat € 58. Kreeg je geen brief en moet je niet meer bijbetalen dan dat? Dan hoef je geen aangifte te doen. Uitkomst: wat je moet bijbetalen of terugkrijgt."

**Rule box (`rules`, title "Regels"):**
- r1 "Kreeg je een aangiftebrief van de Belastingdienst? Dan moet je aangifte doen. Ook als je geld terugkrijgt."
- r2 "Je aangifte moet dan binnen zijn vóór de datum in de brief. Vaak is dat 1 mei."
- r3 "Kreeg je geen brief? Moet je meer bijbetalen dan de aanslaggrens? Dan moet je ook aangifte doen, zo snel mogelijk."
- r4 "Kreeg je geen brief en krijg je geld terug? Dan mag je aangifte doen. Het hoeft niet."
- r5 "Kreeg je geen brief en krijg je geld terug? Dan kun je tot 5 jaar na het einde van het jaar aangifte doen."
- r6 "Weet je niet of je moet bijbetalen? Vul je aangifte in en kijk naar de uitkomst. Verstuur pas daarna."

Note on the rules: r1 is AWR art. 8 lid 1 ("Ieder die is uitgenodigd tot het doen van aangifte, is gehouden aangifte te doen") and bdMoet ("Als u een aangiftebrief van ons hebt gehad, moet u aangifte doen."); "Ook als je geld terugkrijgt" follows because art. 8 has no exception for a refund. r2: AWR art. 9 lid 1 (the inspecteur sets the term, at least one month) and bdWanneer ("vóór de datum die in uw aangiftebrief staat. Vaak is dit 1 mei."). r3: bdMoet ("Dan moet u aangifte doen als u meer moet betalen dan de aanslaggrens"; "Doe dan zo snel mogelijk aangifte") with Wet IB art. 9.4 lid 1 onder a and Uitvoeringsregeling AWR 1994 art. 2. r4 and r5 state eerste-bijbaan r3 for the refund case (check B item 3: owing without a letter means filing earlier, which r3 says); r5 rests on bdJaren and Uitvoeringsregeling IB 2001 art. 45 lid 1 ("binnen vijf jaren na afloop van het kalenderjaar"). "Geld terug" means a refund above the teruggaafgrens (more than € 18 over 2026, Wet IB art. 9.4 lid 5); teacher detail only, because Yara's refund is far above it. The gloss "Aanslaggrens": Wet IB art. 9.4 lid 1 gives an aanslag when the tax exceeds the voorheffingen by more than € 58 (onder a) or when you file within the term (onder b); in case b, lid 5 sets that aanslag at nihil when the voorheffingen do not exceed the tax, or by not more than € 18. So who owes € 58 or less over 2026 normally pays nothing, also after filing (Revision 3, check B round 2 item 1; my Revision 2 reading was wrong). The gloss says that you need not file, which is what bdMoet says, and stays as it is; the teacher detail gives the payment side, with the exception for earlier voorlopige aanslagen (lid 6). r6 is bdMoet.

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
- Prompt: "Wanneer moet de aangifte van Jesse volgens zijn brief binnen zijn?"
- Options:
  - a "Vóór 1 april 2027"
  - b "Vóór 1 juli 2027"
  - c "Vóór 31 december 2031"
  - d "Vóór 1 mei 2027"
- Correct: d
- Retry pointer: rule r2.
- Nudge: "Lees regel 2. Waar staat de datum die voor Jesse geldt?"
- Hint: "Lees de appjes van Jesse nog eens. Wat staat er in zijn brief?"
- Explanation: "Met een aangiftebrief geldt de datum in de brief. Bij Jesse is dat vóór 1 mei 2027. Dat is niet later dan vrijdag 30 april, want 1 mei is een zaterdag. Wacht dus niet tot het laatste moment."
- Sources: bdWanneer, awr9, opIB
- Note: Revision 3 (G4 S6): the old hint "Regel 5 geldt niet voor Jesse" sent pupils to a rule without a date; the hint now sends them to the chat. Revision 2 (gate W7): the prompt asks for the date "volgens zijn brief", because uitstel can move it (FAQ). The pointer goes to r2 only, not to line j2, which holds the date. c is the 5-year date of eerste-bijbaan 4.4, which holds only without a letter. a and b are the dates of room 4. "Uiterlijk vrijdag 30 april" (check B item 4): "vóór 1 mei" ends on 30 april; the Algemene termijnenwet moves only a term "in een wet gesteld" (art. 1 lid 1), and this term is set by the inspecteur in the letter (AWR art. 9 lid 1), so no move to Monday 3 mei is promised (teacher detail).

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
- Hint: "Regel 4 zegt wat Yara mag. Regel 5 zegt tot wanneer. Welke optie past daarbij?"
- Explanation: "Yara kreeg geen brief en krijgt geld terug. Dan mag ze aangifte doen, maar het hoeft niet. Dat kan tot 5 jaar na het einde van 2026. Wacht je langer, dan krijg je je geld ook later."
- Sources: bdMoet, bdJaren, urib45, awr9
- Note: the situ closes r3 (she gets money back, so she does not owe above the aanslaggrens). b is wrong: you may ask for an aangiftebrief (AWR art. 6 lid 2), but you need not, and the duty to ask (Uitvoeringsregeling AWR art. 2 lid 1) does not apply when no tax is due (lid 6); without a letter the aangifte itself counts as one on invitation (AWR art. 9 lid 4). Two "moet" and two "mag" options; d is not the longest (a and c are). The explanation does not name 2031 (eerste-bijbaan 4.4).

### Cijfer kamer 1
- Clue: "Het 1e cijfer van het slot: kreeg je geen brief en krijg je geld terug? Dan kun je tot 5 jaar na het einde van een jaar aangifte doen. Het is nu 2027. Wat is het oudste jaar waarover dat nog kan? Neem het laatste cijfer."
- Digit: **2** (2022; bdJaren: "2022: 31 december 2027"; `clueDocs: ['rules']`). The forward count (2026 to 2031) is eerste-bijbaan's digit; this clue counts backwards, so the two lessons do not share a clue.
- Clue retry: "Je zoekt het oudste jaar dat nog kan. Dat jaar plus 5 jaar is 2027. Welk jaar is dat?"
- Clue wrong (`clueWrong`): "1": "Dat is 2031: 5 jaar na 2026. Je zoekt het oudste jaar dat in 2027 nog kan."
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
Note: "Korter gemaakt en verzonnen. Op een echte jaaropgaaf staan meer regels, soms met andere namen."

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
Head: "Werkgever" | "Periode in 2026" | "Korting toegepast"
- d1 "Bezorgdienst Duinrit" | "1 januari tot en met 31 december" | "ja"
- d2 "Supermarkt Kwelderhof" | "1 september tot en met 31 december" | "ja"

Design note: the labels follow bdJaaropgaaf ("fiscaal loon"; tax "loonheffing"). The legal minimum content of a jaaropgaaf (Uitvoeringsregeling loonbelasting 2011 art. 7.4 lid 2, the same in the versions from 1 January and 1 September 2026) has no line "loonheffingskorting ja/nee"; many payslips and jaaropgaven show it, but not all, so the note says "soms met andere namen" and the teacher detail says where else you can see it. Revision 2 (gate P5): Jesse's third column is "Korting toegepast", short enough that the three columns fit at 1366x768 (engine v3 wraps tables; check in the build).

**Moeilijke woorden (plain):** "Jaaropgaaf: een overzicht van je loon en je belasting over een jaar, bij één werkgever. Fiscaal loon: het loon waarover je belasting betaalt. Soms heet het 'loon voor de loonheffing'. Loonheffing: belasting en premies, bijvoorbeeld voor de AOW. Je werkgever haalt die van je loon af. Ingehouden: van je loon afgehaald. Loonheffingskorting: korting op je loonheffing. Je kiest zelf bij welke werkgever. Toegepast: gebruikt. Periode: van welke dag tot welke dag."

Split over the documents: doc kw has "Jaaropgaaf" to "Ingehouden", doc gk has "Loonheffingskorting" and "Toegepast", doc jesse has "Periode", so V2.1 to V2.3 show the words they need (V2.1 and V2.2 show kw and gk; V2.3 shows jesse and gk).

**Rule box (`rules`, title "Regels"):**
- r1 "Bij 'Ingehouden loonheffing' staat hoeveel belasting en premies je werkgever van je loon haalde."
- r2 "Met loonheffingskorting houdt je werkgever minder loonheffing in."
- r3 "Werk je tegelijk bij twee werkgevers? Laat de korting dan bij één van hen toepassen."
- r4 "Kreeg je tegelijk bij twee werkgevers korting? Dan kreeg je te veel korting. Je moet dan waarschijnlijk bijbetalen."
- r5 "Werk je na elkaar bij twee werkgevers? Dan mag je bij elke werkgever korting laten toepassen."

Note on the rules: Revision 3 (G4 S2): the old r1 ("Op een jaaropgaaf staat je loon van een jaar bij één werkgever ...") is gone, because the gloss "Jaaropgaaf" says the same; the rules are renumbered. r1 is bdJaaropgaaf ("de belasting en premies die zijn ingehouden op je loon. Dit wordt loonheffing ... genoemd.") and Uitvoeringsregeling LB 2011 art. 7.4. r2 is bdLhkBijbaan ("Die betaalt dan minder belasting, en jij krijgt daardoor meer loon."). r3 and r5: bdLhkBijbaan ("Vraag dan bij 1 werkgever de loonheffingskorting aan."; "Werk je in 1 jaar bij meerdere werkgevers na elkaar? Dan kun je bij iedere werkgever de loonheffingskorting aanvragen.") and Wet LB art. 23 lid 2 (only one employer "over loontijdvakken die geheel of gedeeltelijk samenvallen"). r4: bdLhkBijbaan ("krijg je te veel korting op je belasting. Je moet dan waarschijnlijk achteraf belasting aan ons betalen."); "waarschijnlijk" kept, because whether you pay back depends on the total income (bdLhkMeer).

### Vraag 2.1 (id: totaal, kind: number, docs: kw, gk)
- Prompt: "Hoeveel loonheffing is er in 2026 in totaal van het loon van Yara ingehouden?"
- Correct: **€ 765** (76500 cents)
- Retry pointer: doc kw line k4 and doc gk line g4.
- Nudge: "Zoek op elke jaaropgaaf de regel 'Ingehouden loonheffing'. Tel die op."
- Hint: "Fiscaal loon is iets anders: dat is het loon zelf."
- Explanation: "Bij Kwelderhof is € 0 ingehouden en bij Golfkoel € 765. Samen is dat € 765. Dit bedrag heb je nodig om je aangifte te controleren."
- Sources: bdJaaropgaaf, bdTerug
- Note: one defensible answer (the rows are named in r1). Typical wrong tries are distinct: 7000 (the two wages), 2140 or 4860 (one wage). Gate T2: the sum is easy on purpose (it reads the right row on two slips and feeds V3.1); the calculation for fast pairs is the percentage in the room 2 `discuss` (answer in the teacher detail).

### Vraag 2.2 (id: waarom, kind: pick, docs: kw, gk)
- Prompt: "Wat is volgens regel 2 de reden dat bij Golfkoel wel loonheffing is ingehouden?"
- Options:
  - a "Golfkoel is een ijssalon en geen supermarkt"
  - b "Bij Golfkoel werkte ze alleen in de zomervakantie"
  - c "Bij Golfkoel was ze al 18 jaar oud"
  - d "Bij Golfkoel had ze geen loonheffingskorting"
- Correct: d
- Retry pointer: rule r2.
- Nudge: "Lees regel 2. Zoek op elke jaaropgaaf het woord uit die regel."
- Hint: "Wat is op de twee jaaropgaven anders, behalve het loon en de periode?"
- Explanation: "Bij Kwelderhof stond de loonheffingskorting aan, bij Golfkoel niet. Zonder korting houdt een werkgever meer loonheffing in. Ook de hoogte van het loon telt mee, maar deze vraag gaat over de korting."
- Sources: bdLhkBijbaan, wlb23, bdTerug
- Note: Revision 3: rule numbers follow the shorter rule box; the nudge names the word to look for (G4 N3), not the row that holds the answer (gate P7). Revision 2 (gate W3, P7): the prompt asks for the reason "volgens regel 2", so the monthly wage (€ 405 against € 1.070), which also changes withholding, is not a competing answer; the explanation says so. The pointer is r2 only; the rows k5 and g5 hold the answer and are no longer marked. c is a true fact (she was 18 from 12 mei) but no rule links age to loonheffing; b names the period, which r2 does not.

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
- Hint: "Lees bij elke werkgever de eerste datum."
- Explanation: "Vanaf 1 september werkte Jesse bij twee werkgevers tegelijk. Bij elk van de twee stond de korting aan. Zo kreeg hij in vier maanden te veel korting. Hij moet daardoor waarschijnlijk bijbetalen."
- Sources: bdLhkBijbaan, bdLhkMeer, wlb23
- Note: b is the r5 case read wrongly (the periods overlap), a the months with one employer only, c the Duinrit period alone. Gk is in the docs only for the gloss "Loonheffingskorting". Revision 2 (gate checks table): the hint no longer names the date to look up.

### Cijfer kamer 2
- Clue: "Het 2e cijfer van het slot: stel, iemand werkt het hele jaar bij werkgever A. Van 1 juni tot en met 31 december werkt hij ook bij werkgever B. Bij elk van de twee staat de korting aan. Hoeveel maanden kreeg hij te veel korting?"
- Digit: **7** (juni to december; all facts are in the clue; `clueDocs: ['rules']`). A new case, so the clue does not repeat V2.3.
- Clue retry: "Tel de maanden van juni tot en met december. Tel juni en december ook mee."
- Clue wrong (`clueWrong`): "6": "Tel juni ook mee. Die maand hoort er ook bij."
- Remember: "Je werkgever geeft je elk jaar een jaaropgaaf. Daarop zie je de ingehouden loonheffing. Werk je tegelijk bij twee werkgevers? Dan korting bij één."

---

## Kamer 3. Klopt je aangifte? (zaterdag 6 maart 2027)

**Intro:** "Yara begon in de app. Nu logt ze met haar DigiD in op Mijn Belastingdienst. Ze opent haar aangifte over 2026 en kijkt ook bij 'Mijn gegevens'. Ze legt haar jaaropgaven ernaast."

### Document 3a: oefenscherm aangifte (type: table with head, id: via)
Title: "Mijn Belastingdienst > Aangifte 2026 > Loon (oefenscherm)". From: "Korter gemaakt en verzonnen. Dit is geen scherm van de Belastingdienst."
Head: "Onderdeel" | "Vooraf ingevuld"
- v1 "Golfkoel, fiscaal loon" | "€ 2.140"
- v2 "Golfkoel, ingehouden loonheffing" | "€ 675"
- v3 "Kwelderhof, fiscaal loon" | "€ 4.860"
- v4 "Kwelderhof, ingehouden loonheffing" | "€ 0"

### Document 3b: oefenscherm Mijn gegevens (type: table, id: gegevens)
Title: "Mijn Belastingdienst > Mijn gegevens (oefenscherm)". From: "Korter gemaakt en verzonnen. Dit is geen scherm van de Belastingdienst."
- n1 "Naam" | "Yara"
- n2 "Rekeningnummer voor je teruggaaf" | "eindigt op 4821"
- n3 "Wijzigen" | "[ Mijn rekeningnummer doorgeven ]"

### Documents 3c and 3d: the two jaaropgaven of room 2 (ids kw, gk), word for word, without a box of hard words (the box of room 3 sits on via and gegevens).

Design note: one amount is wrong (v2: € 675 against € 765 on the jaaropgaaf). Revision 2 (check B item 1, ERROR): the account number left the pre-filled screen. In the aangifte the Belastingdienst lists bank accounts under "Bank- en spaarrekeningen", in the part "Bankrekeningen en andere bezittingen" (bdVIA): that is a list of what you own, and an account that existed in 2026 can be right there even if it was closed in January 2027. The refund goes to the number "dat in Mijn Belastingdienst staat" (bdGeld), which you change at "Mijn gegevens", "Rekeningnummer", "Mijn rekeningnummer doorgeven" (bdRek). So the account now has its own screen (doc gegevens). Revision 3 (G4 S4): both practice screens show the menu path in the title ("Mijn Belastingdienst > ..."), and the action on doc gegevens is written as a button in brackets, like the button in the nepmail; input fields are not possible in a document (engine), and the line "Dit is geen scherm van de Belastingdienst" stays. The wrong row v2 is not the last row (V3.1 keeps the screen order with `keepOrder`, so the right answer is option b, not last). The lesson gives no cause for the wrong amount (bdVIA says only that data can differ from "uw eigen jaaroverzicht"; FAQ M3).

**Moeilijke woorden (plain):** "Vooraf ingevuld: de Belastingdienst heeft het al voor je ingevuld. Aanpassen: iets veranderen wat niet klopt. Aanvullen: iets toevoegen wat mist. Mijn Belastingdienst: je eigen pagina op de site van de Belastingdienst. Je logt in met je DigiD. Rekeningnummer: het nummer van je bankrekening. Betaalrekening: de rekening waarmee je betaalt. Jeugdrekening: een bankrekening voor kinderen en tieners. Doorgeven: laten weten."

Split over the documents: doc via has "Vooraf ingevuld" to "Je logt in met je DigiD.", doc gegevens has "Rekeningnummer" to the end.

**Rule box (`rules`, title "Regels"):**
- r1 "Veel gegevens in je aangifte zijn al ingevuld. Controleer ze toch allemaal. Leg je jaaropgaven ernaast."
- r2 "Klopt een bedrag niet? Of mist er iets? Dan pas je het zelf aan of vul je het aan."
- r3 "In de app kun je vooraf ingevulde gegevens niet aanpassen. Dat kan alleen in je aangifte op Mijn Belastingdienst."
- r4 "Je geld komt op het rekeningnummer bij 'Mijn gegevens' op Mijn Belastingdienst. Dat moet een betaalrekening op je eigen naam zijn. Klopt het niet? Geef het juiste nummer dan meteen door."
- r5 "Al verstuurd en toch een fout? Je kunt je aangifte nog tot 5 jaar na het jaar aanpassen."

Note on the rules: r1 is bdDirect ("Veel gegevens zijn al voor je ingevuld: je hoeft vaak alleen maar te controleren of ze kloppen.") and bdVIA. r2 and r3: bdVIA ("Dan kunt u deze gegevens zelf aanpassen of aanvullen."; "In de aangifte-app kunt u geen gegevens aanpassen of aanvullen. Dit kan alleen in de aangifte in Mijn Belastingdienst."), bdApp ("U kunt de gegevens in de app namelijk niet wijzigen of aanvullen.") and bdFout; r3 is on the release gate. r4: bdGeld ("We hebben het geld overgemaakt op het rekeningnummer dat in Mijn Belastingdienst staat."; "Geef dat dan meteen door in Mijn Belastingdienst.") and bdRek ("U komt meteen in het tabblad 'Mijn gegevens'."; "Kies onder 'Rekeningnummer' voor 'Mijn rekeningnummer doorgeven'."); "meteen" (gate W2) makes waiting wrong; its second sentence is bdRek ("Het rekeningnummer dat u doorgeeft, moet op uw naam staan. En het mag alleen het nummer van een betaalrekening zijn, niet van een spaarrekening."). Revision 3 (G4 S2): the old r5 is now part of r4, so the box has five lines. r5: bdFout ("Uw aangifte wijzigen kan tot 5 jaar na het jaar waarover de aanslag gaat."); it answers the fear of making mistakes that bles names, and no question depends on it.

### Vraag 3.1 (id: fout, kind: pick, docs: via, kw, gk) keepOrder
- Prompt: "Welk bedrag in het oefenscherm klopt niet met de jaaropgaven van Yara?"
- Options (screen order, keepOrder):
  - a "Golfkoel, fiscaal loon: € 2.140"
  - b "Golfkoel, ingehouden loonheffing: € 675"
  - c "Kwelderhof, fiscaal loon: € 4.860"
  - d "Kwelderhof, ingehouden loonheffing: € 0"
- Correct: b
- Retry pointer: rule r1.
- Nudge: "Vergelijk elk bedrag met dezelfde regel op de jaaropgaaf van die werkgever."
- Hint: "Lees de cijfers van elk bedrag één voor één. Let op de volgorde van de cijfers."
- Explanation: "Op de jaaropgaaf van Golfkoel staat € 765 ingehouden loonheffing. In het oefenscherm staat € 675. De andere drie bedragen kloppen."
- Sources: bdVIA, bdDirect
- Note: the pointer goes to r1, not to row v2, which would give the answer. Revision 2 (gate P3): the hint says "de volgorde van de cijfers", not "dezelfde volgorde", which read as the order of the rows. b ties with d at 39 characters because the options are the screen rows (keepOrder); no other option shape gives b away.

### Vraag 3.2 (id: waar, kind: pick, docs: via)
- Situ: "Yara belt Golfkoel. Daar zeggen ze: je jaaropgaaf klopt."
- Prompt: "Waar verbetert Yara het bedrag?"
- Options:
  - a "In de app: ze tikt op het bedrag en past het aan"
  - b "Bij Golfkoel: de ijssalon past haar aangifte aan"
  - c "Nergens: de Belastingdienst ziet de fout zelf"
  - d "Op Mijn Belastingdienst: ze past het daar aan"
- Correct: d
- Retry pointer: rules r2 and r3.
- Nudge: "Lees regel 3. Waar kan het, en waar niet?"
- Hint: "Wie past vooraf ingevulde gegevens aan: Yara zelf of iemand anders?"
- Explanation: "In de app kun je vooraf ingevulde gegevens niet aanpassen. Yara verbetert het bedrag daarom zelf, in haar aangifte op Mijn Belastingdienst."
- Sources: bdVIA, bdApp, bdFout
- Note: the situ closes the door "the jaaropgaaf is wrong, ask the employer". Revision 2 (gate P4): all four options have the shape "Plek: wat er gebeurt"; the right one is not the shortest any more. Revision 3 (G4 N15): option b now says who acts ("de ijssalon"), because "zij verandert het" was hard to parse. c contradicts r2.

### Vraag 3.3 (id: iban, kind: pick, docs: gegevens)
- Situ: "Yara heeft sinds januari 2027 een eigen betaalrekening. Die eindigt op 7306. Haar oude jeugdrekening eindigde op 4821. De oude rekening bestaat niet meer."
- Prompt: "Wat doet Yara met het rekeningnummer bij 'Mijn gegevens'?"
- Options:
  - a "Ze laat het staan: het nieuwe nummer is al bekend"
  - b "Ze laat het staan: het geld komt dan per post"
  - c "Ze geeft het nieuwe nummer pas door als het geld niet komt"
  - d "Ze geeft het nieuwe nummer meteen door"
- Correct: d
- Retry pointer: rule r4 and doc gegevens line n2.
- Nudge: "Lees regel 4. Welk nummer staat bij 'Mijn gegevens'?"
- Hint: "Bestaat de rekening die eindigt op 4821 nog?"
- Explanation: "Het geld komt op het nummer bij 'Mijn gegevens'. Dat is haar oude rekening, en die bestaat niet meer. Daarom geeft Yara haar nieuwe betaalrekening meteen door."
- Sources: bdGeld, bdRek, bdInlog
- Note: Revision 2 (check B item 1; gate P1, W2): the question is about the refund account on its own screen, no longer about an item of the aangifte. "De oude rekening bestaat niet meer" replaces the unglossed "opgeheven" and makes clear which account is meant. c contradicts "meteen" in r4. a is contradicted by row n2. The new account is a betaalrekening on her own name (the second sentence of r4 is met by the situ). Two "laat" and two "geeft" options; d is not the longest (c is).

### Cijfer kamer 3
- Clue: "Het 3e cijfer van het slot: stel, in een vooraf ingevulde aangifte staat € 1.150 loonheffing. Op de jaaropgaaf staat € 1.245. Hoeveel euro scheelt dat? Neem het eerste cijfer."
- Digit: **9** (1.245 min 1.150 = 95; all facts are in the clue; `clueDocs: ['rules']`). Revision 2 (gate P6): the gap is € 95, not the € 90 of V3.1, so a pair cannot guess the digit from the room. The digit and the code stay.
- Clue retry: "Trek het kleine bedrag af van het grote bedrag."
- Clue wrong (`clueWrong`): "5": "Het verschil van 95 klopt. Neem nu het eerste cijfer."
- Remember: "Leg je jaaropgaven naast je aangifte. Klopt iets niet? Verbeter het op Mijn Belastingdienst. Check ook je rekeningnummer bij 'Mijn gegevens'."

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

Design note: the mail uses Yara's first name and the right year on purpose. The Belastingdienst's own examples say real names appear in fake messages ("Opvallend aan deze valse sms is dat de voor- en achternaam van de ontvanger er in staan", bdVoorbeelden). It names no amount, so "the amount is wrong" cannot be used as a sign. m3 is plain text in brackets, not a link or a button (engine: `letter` lines are text). The sender address uses the reserved `.example` domain; no question asks about the address.

**Moeilijke woorden (plain):** "Nepmail: een mail van oplichters die echt lijkt. Ze willen je gegevens of je geld. Teruggaaf: geld dat je terugkrijgt van de Belastingdienst. Vervallen: niet meer geldig. Bericht: de aanslag of een brief met de uitkomst van je aangifte. Aanslag: het bericht met wat je terugkrijgt of moet betalen. Voorlopige aanslag: een eerste berekening. De definitieve aanslag komt later. Voorwaarde: iets wat eerst waar moet zijn. Uiterlijk: niet later dan."

**Rule box (`rules`, title "Regels"):**
- r1 "De Belastingdienst stuurt je nooit een mail met een knop of link waarop je moet klikken. Ook niet over geld terug."
- r2 "De Belastingdienst vraagt je nooit per mail, sms, WhatsApp of telefoon om persoonlijke gegevens."
- r3 "Twijfel je? Klik niet. Log zelf in op Mijn Belastingdienst. Daar weet je zeker dat berichten echt zijn."
- r4 "Deed je vóór 1 april aangifte? Dan krijg je vóór 1 juli bericht. Deed je het later? Dan probeert de Belastingdienst het binnen 3 maanden. Soms duurt het langer."
- r5 "Krijg je geld terug? Dan staat het meestal binnen 1 week na de datum op de aanslag op je rekening."

Note on the rules: r1: bdVoorbeelden, on the fake refund mail ("De Belastingdienst communiceert nooit op deze manier over een belastingteruggaaf."; "Wij sturen u nooit een mail met een knop of link waarop u moet klikken!"), and for DigiD digidVals ("DigiD stuurt u nooit berichten met een link of QR-code"). It is the Belastingdienst's own statement about its own mail; MijnOverheid does send an e-mail when there is post in the Berichtenbox (bdHoren), which is why r3 says "Log zelf in" and the FAQ covers that mail. r2: bdVals ("Ook vragen wij u nooit per WhatsApp, sms, mail of telefoon om persoonlijke gegevens door te geven"). r3: bdVals step 1 ("Log in op een van onze portalen, zoals Mijn Belastingdienst ... Dan weet u zeker dat u berichten leest die wij hebben verstuurd."; "Klik nooit op een link in het bericht dat u niet vertrouwt"). r4: bdHoren ("Als u voor 1 april aangifte hebt gedaan, krijgt u voor 1 juli bericht."; "Als u na 1 april aangifte doet, proberen wij u binnen 3 maanden een bericht te sturen."; "Soms krijgt u niet binnen 3 maanden bericht"; "We kunnen niet precies vertellen wanneer u iets hoort."), written as a condition. Revision 2 (gate W1): "Soms duurt het langer" closes r4, because the page names cases (work in België, an open bezwaar) where the message comes later. r5: bdGeld ("binnen 1 week na de datum op de aanslag op uw rekening"); "meestal" because the same page names a missing account number (a letter, then up to 3 weeks) and offsetting a debt (within 6 weeks). The glosses on the voorlopige and definitieve aanslag rest on bdVA ("Soms sturen we na het aangifte doen ook een voorlopige aanslag. Uw definitieve aanslag komt daarna.") and bdHoren.

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
- Note: builds on Eerste maand (signals of a scam) with the point that real-looking details prove nothing. c is a false claim (a reason that no rule gives); the right option is not the longest (c is). Two "Ja" and two "Nee".

### Vraag 4.2 (id: zelf, kind: pick, docs: mail)
- Prompt: "Yara wil weten of er echt een bericht voor haar klaarstaat. Wat doet ze?"
- Options:
  - a "Ze klikt op de knop in de mail"
  - b "Ze mailt terug naar de Belastingdienst"
  - c "Ze stuurt de mail door naar Jesse"
  - d "Ze logt in op Mijn Belastingdienst"
- Correct: d
- Retry pointer: rule r3.
- Nudge: "Lees regel 3. Waar weet je zeker dat een bericht echt is?"
- Hint: "Welke plek noemt regel 3?"
- Explanation: "Op Mijn Belastingdienst weet je zeker dat berichten echt zijn. Typ zelf belastingdienst.nl in en log daar in. Gebruik niets uit de mail."
- Sources: bdVals, bdInlog
- Note: Revision 2 (gate P4, W8): four options of one action each, of similar length; "Belastingdienst" is in b and d, so the name is no give-away. b and c are not forbidden by a rule, but they do not tell Yara for sure whether a message waits, which the prompt asks and r3 answers. The old hint "Gebruik niets uit de mail zelf" removed three options at once; the new hint points to the rule.

### Vraag 4.3 (id: bericht, kind: pick, docs: none)
- Situ: "Yara verstuurde haar aangifte op zaterdag 6 maart 2027."
- Prompt: "Vóór welke datum krijgt Yara volgens regel 4 bericht over haar aangifte?"
- Options:
  - a "1 april 2027"
  - b "1 mei 2027"
  - c "6 juni 2027"
  - d "1 juli 2027"
- Correct: d
- Retry pointer: rule r4.
- Nudge: "Lees regel 4. Wanneer verstuurde Yara haar aangifte?"
- Hint: "In regel 4 is 1 april de voorwaarde. Wat krijg je als je daaraan voldoet?"
- Explanation: "Yara deed vóór 1 april aangifte. Dan krijgt ze volgens regel 4 vóór 1 juli bericht. Soms is dat eerst een voorlopige aanslag. De definitieve aanslag komt dan later."
- Sources: bdHoren, bdVA
- Note: Revision 2 (gate W1, BLOCKER): the old prompt "Uiterlijk wanneer" with option "Vóór 31 december 2029" had a second defensible answer (the definitive aanslag, which the explanation itself named). Now the prompt asks for the date of regel 4, and no option is a later, weaker form of the right one: a is the condition read as the consequence, b the deadline of room 1, c the 3-month rule for late filers applied to 6 maart. The 3-year term of the definitive aanslag is teacher detail only. Docs `none`: the room's rule box is still shown (README).

### Cijfer kamer 4
- Clue: "Het 4e cijfer van het slot: stel, je krijgt geld terug. Op je aanslag staat de datum vrijdag 14 mei. Binnen hoeveel dagen staat het geld meestal op je rekening? Tel alle dagen mee, ook het weekend."
- Digit: **7** (1 week; `clueDocs: ['rules']`). A new case; no room question asks it. Revision 2 (gate P14): "Tel alle dagen mee" closes the reading "5 werkdagen".
- Clue retry: "Lees regel 5. Hoeveel dagen heeft een week?"
- Clue wrong (`clueWrong`): "5": "Werkdagen tel je hier niet. Tel alle dagen van een week."
- Remember: "Klik niet op een knop in een mail over belasting. Log zelf in. Vóór 1 april aangifte? Dan vóór 1 juli bericht."

---

## Plan: Mijn belastingcheck

The plan is personal: each pupil makes their own, on paper and, if they want, on the end screen (existing engine plan: `when`, `then`, `within`, own text). It stays on the screen only: never logged, never sent, never stored. The paper slip stays with the pupil. Many pupils have no bijbaan, and many are under 18, so every line works without a job and before 18.

Engine data:
- `plan.intro`: "Kies één ding dat je gaat checken. Zet er een moment bij."
- `plan.when`: ["het weer 1 maart is", "ik mijn jaaropgaaf krijg", "ik een mail over belasting krijg"]
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

The slip asks no amount, no BSN, no employer name and no account number. Field 4 fits pupils from 14 (digidAanvragen: from 14 a DigiD is "strikt persoonlijk"). Data: fields 1, 3, 4, 5 label up to the colon or question mark, hint the choices, lines 0; field 2 lines 1; field 6 lines 2. Footer: the "Regels:" line. "belastingdienst.nl/jongeren" is the address the Belastingdienst gives in its own teacher guide (bles) and it opens the jongeren page (fact check A). Revision 2 (gate P8): `plan.when` "het weer 1 maart is", because the lesson runs after 1 March.

---

## Start- en eindcheck: twee parallelle vormen, A en B (elk 4 vragen, één per kamer, enkele keuze, score 0 tot 4)

No feedback during the check. Each question works without the room's documents and rule box. Question n of form A and question n of form B test the same rule at the same difficulty with a different case. Counterbalance as in ESC-KAMER (random A or B first, engine v3). Revision 2 (gate W4, W5): no check item is a room question in second person: room 1 asks moet or mag, the checks ask whether a late aangifte is on time (in 2028 without a letter; in July with a letter and no uitstel); room 2 asks Jesse's months, the checks a two-month overlap and no overlap; room 3 asks a wrong withholding amount, the checks a wrong wage and a missing employer; room 4 asks a mail with Yara's name, the checks an sms and a mail that "vervalt morgen". The word "zelf" is in no check option; where the right option names "Mijn Belastingdienst", a wrong option names the Belastingdienst too. In each form no letter is right more than twice in a row (A: a, b, c, c; B: b, b, a, a).

### Vorm A

| # | Kamer | Vraag | Opties | Goed | Regel en bron |
|---|---|---|---|---|---|
| C1 | 1 Moet of mag | "Je kreeg over 2026 geen aangiftebrief. Je ziet dat je geld terugkrijgt. Je verstuurt je aangifte pas in 2028. Ben je op tijd?" | a Ja, dat kan tot 5 jaar na het einde van 2026; b Nee, zonder brief moest het vóór 1 mei 2027; c Ja, maar alleen als je eerst om een brief vraagt | a | geen brief, geld terug: 5 jaar (bdJaren, urib45) |
| C2 | 2 Jaaropgaven | "Van maart tot en met mei werk je bij een bakker. Van april tot en met juni werk je bij een kapper. Mag je in april en mei bij de bakker en de kapper tegelijk loonheffingskorting laten toepassen?" | a Ja, dat mag bij elke werkgever; b Nee, want je werkte twee maanden tegelijk; c Nee, want je had twee werkgevers in één jaar | b | tegelijk: één werkgever (bdLhkBijbaan, wlb23) |
| C3 | 3 Aangifte checken | "Op je jaaropgaaf staat € 3.200 fiscaal loon. In je vooraf ingevulde aangifte staat € 2.300. Je werkgever zegt: de jaaropgaaf is goed. Wat doe je?" | a Je laat het staan: de Belastingdienst weet het beter; b Je wacht tot je werkgever het op Mijn Belastingdienst verbetert; c Je past het bedrag aan op Mijn Belastingdienst | c | aanpassen (bdVIA) |
| C4 | 4 Veilig | "Je krijgt een sms: 'Uw teruggaaf staat klaar. Bevestig via deze link.' Wat doe je?" | a Je gaat via de link naar de site van de Belastingdienst; b Je vraagt per sms aan de Belastingdienst of het klopt; c Je gaat naar Mijn Belastingdienst en logt daar in | c | inloggen op Mijn Belastingdienst (bdVals, bdVoorbeelden) |

### Vorm B

| # | Kamer | Vraag | Opties | Goed | Regel en bron |
|---|---|---|---|---|---|
| B1 | 1 Moet of mag | "Je kreeg in februari een aangiftebrief over 2026. In de brief staat dat je aangifte vóór 1 mei 2027 binnen moet zijn. Je vroeg geen uitstel. Je krijgt geld terug. Je verstuurt je aangifte pas in juli. Ben je op tijd?" | a Ja, want je krijgt geld terug; b Nee, de datum in de brief was eerder; c Nee, want in juli kun je geen aangifte doen | b | brief: vóór de datum in de brief (awr8, bdWanneer) |
| B2 | 2 Jaaropgaven | "Van januari tot en met juni werk je bij een bakker. Van juli tot en met december werk je bij een kapper. Mag je eerst bij de bakker en daarna bij de kapper loonheffingskorting laten toepassen?" | a Nee, dat mag maar bij één werkgever per jaar; b Ja, want je werkte na elkaar, niet tegelijk; c Ja, maar alleen als je bij de bakker kort werkte | b | na elkaar: bij elke werkgever (bdLhkBijbaan, wlb23) |
| B3 | 3 Aangifte checken | "In je vooraf ingevulde aangifte mist een werkgever. Je hebt de jaaropgaaf van die werkgever wel. Wat doe je?" | a Je vult de werkgever aan op Mijn Belastingdienst; b Je laat het: de Belastingdienst vult het later aan; c Je vraagt je werkgever het op Mijn Belastingdienst te doen | a | aanvullen (bdVIA) |
| B4 | 4 Veilig | "Je krijgt een mail met een knop 'Inloggen met DigiD'. Er staat: 'Uw teruggaaf vervalt morgen.' Wat doe je?" | a Je gaat naar Mijn Belastingdienst en logt daar in; b Je gaat via de knop naar de site en kijkt of die echt lijkt; c Je mailt de afzender terug en vraagt of het klopt | a | inloggen op Mijn Belastingdienst (bdVoorbeelden, bdVals) |

Parallel checks: C1 and B1 ask whether a late aangifte is on time, one without and one with a letter; C1 states "je ziet dat je geld terugkrijgt" (closes r3), B1 states "Je vroeg geen uitstel" (closes the 4 extra months of bdUitstel). C1 c ("Ja, maar alleen als ...") and B1 c ("Nee, want in juli ...") share the right first word with a reason no rule gives. C2 and B2 test the overlap rule with and without overlap, with the same kind of question, which names the months that count (Revision 4: C2 "in april en mei ... tegelijk", B2 "eerst ... en daarna"; Revision 3, check B round 2 item 3: "Kreeg je te veel korting?" asked for a tax result that depends on the total income, not only on the periods); in each, the right first word is shared with a wrong option. B1 now states the date in the letter (check B round 2 item 2), so "de datum in de brief was eerder" follows from the item itself. C4 and B4: every option starts with "Je" plus a verb, and in each form a wrong option starts with "Je gaat" too (G4 N14). C3 and B3 test "zelf aanpassen of aanvullen" (bdVIA) with a wrong wage and a missing employer; C3 says "de jaaropgaaf is goed" so waiting for the employer is not defensible; B3 c is wrong because only the taxpayer changes the aangifte (r2 room 3). C4 and B4 test "log in on Mijn Belastingdienst" for an sms and a mail, worded differently from V4.2, and the wrong options name the Belastingdienst or a reply too. Option lengths: in each item the right option is not the longest (checked by script).

Score: 1 point per right answer, 0 to 4, before and after, shown per pair on the end screen.

---

## Lesplan voor de docent (45 minuten)

Teacher screen, first line (`teacher.audience`): "Voor havo 4 en 5 en vwo 4 tot en met 6, vooral voor wie een bijbaan heeft. Voor het mentoruur, LOB of economie. Het gaat over aangifte doen, niet over examenstof. Voor vwo 5 en 6 is de les licht: geef snelle tweetallen de extra vragen van kamer 2 en 3."
Second line (`teacher.audience`): "Gecontroleerd op 7 november 2026. Het verhaal speelt in maart 2027 en gaat over belastingjaar 2026. Gebruik de les tussen 1 maart en 30 juni 2027. Bijvoorbeeld in de Week van het geld, van 15 tot en met 19 maart 2027."

| Lesminuut | Duur | Onderdeel | Wat je doet |
|---|---|---|---|
| 0 tot 4 | 4 | Uitleg en inloggen | Zet de link en de klascode al op het bord voordat de les begint. Zeg: de mensen, de werkgevers en de bedragen zijn verzonnen. De regels zijn echt. Niemand logt in de les echt in bij de Belastingdienst. Leerlingen werken met z'n tweeën op één scherm. Deel de papiertjes "Mijn belastingcheck" uit als je ze gebruikt. |
| 4 tot 6 | 2 | Startcheck | Elk tweetal beantwoordt vier vragen (vorm A of B) voordat de klok start. Geef geen hints. |
| 6 tot 32 | 26 | Escape | Start de klastimer. Tweetallen spelen vier kamers en schrijven elk cijfer op. Klaar voor de tijd? Geef de extra vragen van kamer 2 en 3. Loopt een tweetal achter? Wijs naar de regel, niet naar het antwoord. Noem geen bedrag dat iemand terugkrijgt. |
| 32 | | Stop | Op minuut 32 stopt iedereen, ook wie nog niet klaar is. Lees de cijfers voor van je geprinte antwoordblad. Alle tweetallen doen daarna de eindcheck. |
| 32 tot 35 | 3 | Stop en eindcheck | De andere vorm: vier vragen over dezelfde regels. Daarna ziet elk tweetal wat het goed had, voor en na. |
| 35 tot 39 | 4 | Nabespreken | Vraag met handopsteken: wie had bij de startcheck 3 of 4 goed? En bij de eindcheck? Vraag welke kamer het lastigst was en begin daar. |
| 39 tot 44 | 5 | Mijn belastingcheck | Iedereen kiest zijn eigen plan of vult het papiertje in. Niemand hoeft iets voor te lezen. Stel daarna de slotvraag. |
| 44 tot 45 | 1 | Reserve | Voor inloggen dat uitloopt. De escape stopt altijd op minuut 32. |

Total 45 minutes: 4 + 2 + 26 + 3 + 4 + 5 + 1 = 45. `minutes: 26`.
Materials: een apparaat per tweetal (laptop, Chromebook of telefoon), pen en papier voor de cijfers, een digibord of beamer. 1 papiertje "Mijn belastingcheck" per leerling (vooraf geprint, als je het gebruikt).

Why the Verzekerd timing (stop at minute 32): the same 26-minute escape and 5-minute plan fit, and teachers who know one lesson know the other. Estimate (desk, not timed with pupils, plus or minus 30 percent; the persona gate agrees): about 19 minutes for an average havo 4 pair, 24 for a weaker pair, 12 to 13 for a strong vwo 6 pair. Room 3 is the heaviest (four documents side by side). The extra questions for fast pairs are the `discuss` prompts of rooms 2 and 3 (the engine has no optional question outside the lock; README, Verzekerd). A pair stopped in room 4 misses the safety rules; the end check C4/B4 and the debrief cover them.

Tip voor de docent: Na twee foute antwoorden laat de les het goede antwoord zien. Een tweetal kan dus doorklikken zonder te lezen. Dat telt niet mee bij "In één keer goed". Zeg: goed lezen gaat sneller.

Care points ("Let op"):
1. "Niet iedereen heeft een bijbaan of krijgt geld terug. Laat niemand vertellen wat hij verdient of terugkreeg. Het papiertje is van de leerling: niet inleveren."
2. "Beloof geen bedrag. Of iemand geld terugkrijgt, zie je pas in de eigen aangifte."
3. "Laat in de les niemand echt inloggen. Vraag nooit naar DigiD-gegevens, ook niet als voorbeeld."
4. "Veel leerlingen zijn nog geen 18. Ook met 16 of 17 doe je zelf aangifte over je bijbaan. Je DigiD is vanaf 14 jaar alleen van jou."
5. "Kamer 4 gaat over een nepmail. Heeft een leerling geld verloren door oplichting? Laat die leerling zelf kiezen of hij meedoet."
6. "Alleen voor de economiedocent: de les oefent geen examenstof. Je kunt kamer 2 gebruiken bij een les over belastingen en heffingskortingen."
7. "De bedragen € 675 en € 765 in kamer 3 lijken op elkaar. Heeft een leerling dyslexie of dyscalculie? Lees de bedragen dan hardop voor."
8. "Gaf je al 'Je eerste bijbaan' of 'Eerste maand'? Kamer 2 bouwt voort op de loonheffingskorting. In kamer 4 zijn regel 1 en regel 4 nieuw."

Note for developers: the stop at minute 32 uses the existing engine stop flow. The digits are never on the open lesson plan.

### Voor de docent, per kamer

Kern (`teacherNote`):
- Kamer 1: "Vraag wie al eens aangifte deed. Kreeg die een brief, of deed die het zelf?"
- Kamer 2: "Extra vraag: € 765 gedeeld door € 2.140 is ongeveer 36 procent. Vraag wie weet bij welke werkgever zijn korting aan staat."
- Kamer 3: "Extra vraag: laat Yara € 675 staan, dan krijgt ze in dit voorbeeld € 90 minder terug. Lees de bedragen zo nodig hardop voor."
- Kamer 4: "Vraag waar leerlingen zelf berichten van de Belastingdienst lezen. Nieuw voor wie Eerste maand speelde: regel 1 en regel 4."

Dit wordt vaak gevraagd (`teacher.faq`):
- "Hoeveel krijg ik terug?" Antwoord: "Dat zie je pas in je eigen aangifte. Vul hem in en kijk naar de uitkomst. Je hoeft hem pas daarna te versturen."
- "Wat is loonheffingskorting?" Antwoord: "Een korting op de loonheffing. Je werkgever houdt dan minder belasting in. Je vraagt de korting aan bij je werkgever."
- "Bij welke werkgever zet ik de korting aan?" Antwoord: "Dat kies je zelf. Werk je tegelijk bij twee werkgevers? Dan bij één van hen. Werk je na elkaar? Dan mag het bij elke werkgever."
- "Wat als ik de korting verkeerd heb ingesteld?" Antwoord: "Je krijgt uiteindelijk de korting waar je recht op hebt. Het verschil zie je in je aangifte."
- "Moet ik echt bijbetalen als ik twee keer korting kreeg?" Antwoord: "Waarschijnlijk wel, maar niet altijd. Het hangt af van je totale loon."
- "Ik heb mijn jaaropgaaf niet. Wat nu?" Antwoord: "Je werkgever moet je een jaaropgaaf geven, meestal in januari of februari. Kijk in je mail of de app van je werk. Anders vraag je erom."
- "Waarom staat er in de vooraf ingevulde aangifte een ander bedrag?" Antwoord: "Dat weet je niet altijd. De Belastingdienst zegt: controleer het en pas het zelf aan als het niet klopt."
- "Ik ben 16. Moet of mag ik al aangifte doen?" Antwoord: "Dezelfde regels gelden. Heb je een bijbaan, dan doe je zelf aangifte. Online doe je dat met je eigen DigiD."
- "Mag mijn ouder mijn aangifte doen?" Antwoord: "Geef je DigiD nooit aan een ander. Wil een ouder helpen? Regel dan een machtiging via DigiD Machtigen. Onder de 14 mag een ouder helpen met je DigiD."
- "Ik kreeg een mail van MijnOverheid dat er post is. Is dat nep?" Antwoord: "MijnOverheid mailt als er post in je Berichtenbox staat. Klik toch niet: log zelf in op MijnOverheid of Mijn Belastingdienst."
- "Waar meld ik een nepmail?" Antwoord: "Stuur de mail door naar valse-email@belastingdienst.nl. Verwijder hem daarna."
- "Wat als je met een aangiftebrief te laat bent?" Antwoord: "Je krijgt eerst een herinnering, dan een aanmaning. Ben je daarna nog te laat, dan kun je een boete krijgen. Uitstel vraag je aan vóór de datum in de brief."
- "Krijg ik ook een klein bedrag terug?" Antwoord: "Over 2026 krijg je normaal gesproken alleen geld terug als het meer is dan € 18. Kreeg je eerder een voorlopige aanslag? Dan kan het anders zijn."
- "Wat is het verschil tussen een voorlopige en een definitieve aanslag?" Antwoord: "Een voorlopige aanslag is een eerste berekening. De definitieve aanslag komt meestal uiterlijk 3 jaar na het jaar. Kreeg je uitstel voor je aangifte? Dan duurt die termijn langer. In de definitieve aanslag kan het bedrag nog veranderen."
- "Ik kreeg geen brief, maar ik moet bijbetalen. Wat nu?" Antwoord: "Moet je meer bijbetalen dan de aanslaggrens? Doe dan zo snel mogelijk aangifte. Volgens de regels moet dat vóór 14 juli 2027. Je mag de Belastingdienst ook om een aangiftebrief vragen."
- "Is er meer lesmateriaal over aangifte doen?" Antwoord: "Ja. De Belastingdienst heeft de gratis les 'Laat geen geld liggen' op belastingles.nl. Daarin oefenen leerlingen met een oefentool hoe je een aangifte invult. Je kunt ook een gastles vragen. Deze escape oefent het lezen van de papieren en het checken. Je kunt de twee lessen na elkaar geven."

FAQ notes (not shown): loonheffingskorting rows: bdLhkBijbaan, wlb23, bdLhkMeer ("U krijgt uiteindelijk altijd de korting waar u recht op hebt."; "Hoe hoger uw totale inkomen, hoe lager de loonheffingskorting."). Jaaropgaaf row: bdJaaropgaaf ("meestal in januari of februari") and urlb74 art. 7.4 lid 1. Pre-filled row: bdVIA. Nepmail row: bdVals ("valse-email@belastingdienst.nl"). Ouder row: digidMachtigen; "Onder de 14": digidAanvragen ("mag u als ouder of voogd uw kind helpen bij het aanvragen en gebruiken van DigiD"). Klein bedrag (check B item 2): Wet IB art. 9.4 lid 5 sets nihil when the voorheffingen exceed the tax by "niet meer dan € 18", in the cases of lid 1 onder b, c and d; lid 6 has its own rule for voorlopige teruggaven, hence "normaal gesproken" and the voorlopige aanslag sentence; bdMoet ("Krijgt u € 19 of meer terug?"). Definitieve aanslag (check B item 7): AWR art. 11 lid 3 (three years, extended by the uitstel) and bdHoren. "vóór 14 juli 2027" (check B item 5): Uitvoeringsregeling AWR 1994 art. 2 lid 1, 4 and 5 (not invited within six months after 31 December 2026, so by 30 juni 2027, then a request within two weeks: 14 juli 2027), written the way bdMoet writes it for 2025 ("vóór 14 juli"); derived, not yet on a page for 2026 (Onzeker). Te laat: bdTeLaat and bdUitstel. Every FAQ sentence is at most 20 words.

Bronnen en uitzonderingen (`teacherDetail`, shown closed as "Achtergrond en bronnen bij deze kamer"; each point from the source table; Revision 3, G4 S7: plain Dutch with short labels ("Wanneer moet je?", "Zonder brief", "Korting", "Rekeningnummer"), source titles instead of the internal keys, no notes for the content team; the answers to the extra questions moved to the room's teacherNote):
- Kamer 1: Wanneer moet je? Met een aangiftebrief moet je aangifte doen, vóór de datum in de brief, vaak 1 mei (Algemene wet inzake rijksbelastingen art. 8 en 9; Belastingdienst, Wanneer moet mijn aangifte binnen zijn?). Uitstel vraag je aan vóór die datum; je krijgt dan 4 maanden extra, meestal met belastingrente. Ben je te laat, dan volgen een herinnering, een aanmaning en soms een boete. 1 mei 2027 is een zaterdag. De datum in een brief schuift niet vanzelf door, dus reken op vrijdag 30 april (Algemene termijnenwet art. 1). Zonder brief: je moet aangifte doen als je meer dan € 58 moet bijbetalen (Wet inkomstenbelasting 2001 art. 9.4). Moet je over 2026 € 58 of minder bijbetalen? Dan hoef je dat normaal gesproken niet te betalen, ook niet na een vrijwillige aangifte. Bij eerdere voorlopige aanslagen kunnen andere regels gelden. Moet je bijbetalen en kreeg je geen brief, doe dan zo snel mogelijk aangifte; volgens de regels vóór 14 juli 2027 (Uitvoeringsregeling AWR 1994 art. 2). Krijg je zonder brief geld terug, dan mag je aangifte doen tot 5 jaar na het jaar (Uitvoeringsregeling inkomstenbelasting 2001 art. 45; Belastingdienst, Hoeveel jaar terug kan ik nog aangifte doen?). Een teruggaaf van € 18 of minder wordt normaal gesproken niet uitbetaald. Iedereen mag de Belastingdienst om een aangiftebrief vragen. De brief komt meestal in februari; de aangifte opent op 1 maart (Rijksoverheid, 18 jaar: regelzaken op een rij).
- Kamer 2: Korting: met loonheffingskorting houdt de werkgever minder loonheffing in. Werk je tegelijk bij twee werkgevers, dan mag de korting maar bij één; na elkaar mag hij bij elke werkgever (Wet op de loonbelasting 1964 art. 23; Belastingdienst, Loonheffingskorting met een bijbaan). Te veel korting betaal je bij de aanslag terug. Of dat echt gebeurt, hangt af van je totale loon (Belastingdienst, Loonheffingskorting met meerdere werkgevers); daarom zegt de les "waarschijnlijk". Jaaropgaaf: daarop staan in elk geval je loon en de ingehouden loonheffing. Een regel "loonheffingskorting ja/nee" is niet verplicht; kijk anders op je loonstrook (Uitvoeringsregeling loonbelasting 2011 art. 7.4). Fiscaal loon heet soms "loon voor de loonheffing", zoals in Je eerste bijbaan. De bedragen: ze zijn verzonnen, maar passen bij 2026. Zonder korting houdt een werkgever ongeveer 35,75% in: van € 2.140 is dat ongeveer € 765. Yara verdiende in 2026 samen € 7.000. De algemene heffingskorting van € 3.115 is hoger dan de belasting daarover, dus in dit voorbeeld komt de € 765 helemaal terug. Zeg dat niet als regel.
- Kamer 3: Aangifte checken: vergelijk de vooraf ingevulde aangifte met de jaaropgaven. Klopt iets niet, dan pas je het zelf aan of vul je het aan, op Mijn Belastingdienst; in de app kan dat niet (Belastingdienst, De vooraf ingevulde gegevens in mijn aangifte kloppen niet; Kan ik de aangifte-app gebruiken?). Een fout na het versturen kun je tot 5 jaar na het jaar herstellen (Belastingdienst, Ik heb een foutje gemaakt). Rekeningnummer: de bankrekeningen in de aangifte zijn een lijst van wat je bezit, niet het nummer voor je geld. Dat nummer staat bij Mijn gegevens en je wijzigt het met "Mijn rekeningnummer doorgeven". Het moet een betaalrekening op je eigen naam zijn. Je krijgt binnen 3 weken een bevestiging, en soms betaalt de Belastingdienst nog één keer op het oude nummer (Belastingdienst, Rekeningnummer doorgeven of wijzigen). Geld op een verkeerd nummer kan de Belastingdienst niet terugdraaien (Belastingdienst, Wanneer krijg ik mijn geld?). Meer materiaal: de gratis les "Laat geen geld liggen" van de Belastingdienst (belastingles.nl), met een oefentool om een aangifte in te vullen, ook als gastles.
- Kamer 4: Nepberichten: de Belastingdienst mailt geen knop of link om in te loggen. Hij vraagt nooit per mail, sms, WhatsApp of telefoon om persoonlijke gegevens. Twijfel je, log dan zelf in op Mijn Belastingdienst. Een nepbericht stuur je door naar valse-email@belastingdienst.nl (Belastingdienst, Valse berichten; Voorbeelden van valse berichten). Echte namen staan soms in nepberichten. DigiD stuurt nooit berichten met een link of QR-code, wel automatische berichten als je account verandert (DigiD, Herken een vals bericht). Vanaf 14 jaar is je DigiD alleen van jou; wil iemand helpen, gebruik dan DigiD Machtigen. MijnOverheid mailt als er post in je Berichtenbox staat. Bericht en geld: wie vóór 1 april aangifte doet, krijgt vóór 1 juli bericht; later probeert de Belastingdienst het binnen 3 maanden, soms duurt het langer (Belastingdienst, Ik heb aangifte gedaan: wanneer hoor ik iets?). Soms komt eerst een voorlopige aanslag. De definitieve aanslag komt uiterlijk 3 jaar na het jaar, voor 2026 dus eind 2029, en later bij uitstel (Algemene wet inzake rijksbelastingen art. 11). Geld terug staat meestal binnen 1 week na de datum op de aanslag op je rekening.

## Antwoordblad

Answers are given as the text on screen, without letters.

| Kamer | Vraag | Goed antwoord |
|---|---|---|
| 1 | Moet Jesse? | Ja, want hij kreeg een aangiftebrief |
| 1 | Datum Jesse | Vóór 1 mei 2027 |
| 1 | Yara | Ze mag de aangifte versturen, ook na 1 mei |
| 1 | **Cijfer** | **2** (2022) |
| 2 | Totaal ingehouden | € 765 |
| 2 | Reden volgens regel 2 | Bij Golfkoel had ze geen loonheffingskorting |
| 2 | Maanden Jesse | September tot en met december |
| 2 | **Cijfer** | **7** (juni tot en met december) |
| 3 | Fout bedrag | Golfkoel, ingehouden loonheffing: € 675 |
| 3 | Waar verbeteren | Op Mijn Belastingdienst: ze past het daar aan |
| 3 | Rekeningnummer | Ze geeft het nieuwe nummer meteen door |
| 3 | **Cijfer** | **9** (€ 1.245 min € 1.150 = € 95) |
| 4 | Echt of nep | Nee, want de mail heeft een knop om in te loggen |
| 4 | Zeker weten | Ze logt in op Mijn Belastingdienst |
| 4 | Bericht | 1 juli 2027 |
| 4 | **Cijfer** | **7** (1 week) |
| | **Code** | **2797** |

Start- en eindcheck vorm A: A1 Ja, dat kan tot 5 jaar na het einde van 2026; A2 Nee, want je werkte twee maanden tegelijk; A3 Je past het bedrag aan op Mijn Belastingdienst; A4 Je gaat naar Mijn Belastingdienst en logt daar in. Vorm B: B1 Nee, de datum in de brief was eerder; B2 Ja, want je werkte na elkaar, niet tegelijk; B3 Je vult de werkgever aan op Mijn Belastingdienst; B4 Je gaat naar Mijn Belastingdienst en logt daar in. Extra vragen: kamer 2 ongeveer 36 procent; kamer 3 € 90 minder terug.

(The line under the table names form A "A1 to A4", as Route 18 and Verzekerd do; the check item ids in the data stay C1 to C4, the convention spec-compare and the engine use for form A; the engine labels the key A1 to A4 on screen and on paper, v3 fix S6.)

## Nabespreken

Drie gespreksvragen (kies er één of twee als de tijd kort is):
1. "Wat verraste je: dat je soms moet, of dat je het vaak mag?"
2. "Waarom laten veel jongeren geld liggen? Wat zou helpen om het wel te doen?"
3. "Hoe check jij of een mail over geld echt is?"

Per kamer (`discuss`):
- Kamer 1: "Jesse dacht: ik krijg geld terug, dus het hoeft niet. Waarom denken mensen dat?"
- Kamer 2: "Je begint een tweede bijbaan. Wat zeg je tegen je nieuwe werkgever over de korting? Extra voor snelle tweetallen: hoeveel procent van het loon bij Golfkoel is ingehouden?"
- Kamer 3: "Wat doe je als je jaaropgaaf en je aangifte niet hetzelfde zeggen? Extra voor snelle tweetallen: wat merkt Yara als ze € 675 laat staan?"
- Kamer 4: "Waarom zetten oplichters je naam in een nepmail? En waar lees jij een bericht van de Belastingdienst?"

Slotvraag: "Noem één ding dat je in maart checkt, ook als je nu nog geen bijbaan hebt."

Note: no prompt asks pupils how much they earn or got back (care point 1). Question 2 matches the gap in the research (money left unclaimed) and the Belastingdienst guide's own debrief theme (bles). Revision 2 (gate M4, T2, W6, W8): the room 2 prompt now has an answer in rule r4; the extras for fast pairs (36 procent; € 90 minder) are in the teacher detail and on the answer sheet.

---

## Engine fit

Supported now, no change needed (README v3, `lessons/verzekerd.js`): `chat` with `sub` (app), `table` rows (kw, gk, gegevens), `table` with `head` (jesse, via), `letter` with `kind` "Nepmail (verzonnen voorbeeld)" and `note` (mail), `plain` per document, room `rules` with numbered lines, `single` and `number` with `unit: '€'`, `keepOrder` (V3.1), `situ`, `pointTo` with `doc`/`lines` across two documents (V2.1) and `rule`/`rules`, `docs: []` (V4.3, rule box still shown), `clueFull`, `clueDocs: ['rules']`, `clueRetry`, `where` (the date of the room heading), `teacherNote`, `teacherDetail`, `discuss`, `sources`/`sourceNone`, check forms A/B, the stop flow at minute 32, `teacher.plan` with `from`/`to`/`at`, `teacher.audience`, `teacher.faq`, `materials`, `tip`, `care`, `answers` with `format: 'text'`, the plan with `when`, `then`, `within` and own text, `slip` (six fields).

Checks for the data file (`lessons/belasting-terug.js`):
1. Fixed shuffles for V1.1, V1.2, V1.3, V2.2, V2.3, V3.2, V3.3, V4.1, V4.2 and V4.3 (four options each; the spec writes the right answer last except V3.1). After the shuffle no letter of a right answer is in the same screen place more than twice in a row. V3.1 uses `keepOrder` (screen order, right answer b).
2. The documents kw and gk appear in room 2 and room 3 with the same rows; in room 3 they carry no `plain` (the room 3 box is on via and gegevens).
3. Doc mail line m3 "[ Inloggen met DigiD ]" is plain text. It must never be rendered as a link or button.
4. No option, prompt, nudge, hint, explanation, clue or check item uses "beide", "allebei", "geen van", "bovenstaande", "optie c" or "antwoord c", so only V3.1 needs `keepOrder`.
5. The euro sign and "[ ]" are not dashes.
6. No `staleText` (see the header).

Not supported, noted for the engine team (not built now; `src/` is being changed by another agent): an optional question outside the lock (the extras are `discuss` prompts); a name label for the right-hand chat bubbles (the `sub` line names Yara's phone, gate P9); a short version of two or three rooms (gate T4; README "Short version: not built"). Paper print (gate M6): engine v3 already prints the pupil pages without answers and labels the check key A1 to A4 (README v3, Route 18 S5 and S6); the line "Op papier is er geen tip bij een fout antwoord" (Route 18 N11) is engine text.

---

## Brontabel

Pages read on 7 November 2026 with curl (HTML converted to text with pandoc) and, for the KvK, headless Chromium. "Page date" is the page's own DCTERMS.modified. Law texts read on wetten.overheid.nl in the version named (consolidated text, converted to text) and, in Revision 2, as consolidated XML from repository.officiele-overheidspublicaties.nl for the later versions. "Valid until": when the rule is next expected to change; "check" means the next scheduled check.

| Key | Rule (as used) | Source 1 | Source 2 | Checked | Valid until |
|---|---|---|---|---|---|
| awr8 / awr9 / awr6 / awr11 | Invited: must file; term set by the inspecteur, at least one month, can be extended; data without invitation count as an aangifte on invitation; anyone may ask for an invitation; aanslag within three years, extended by uitstel. | [AWR, BWBR0002320, version from 1 Jan 2026](https://wetten.overheid.nl/BWBR0002320/2026-01-01): art. 8 lid 1 ("Ieder die is uitgenodigd tot het doen van aangifte, is gehouden aangifte te doen"); art. 9 lid 1 ("binnen een door deze gestelde termijn van ten minste een maand"), lid 2 ("kan de door hem gestelde termijn verlengen"), lid 4 (data without invitation "aangemerkt als het op uitnodiging doen van aangifte"); art. 6 lid 2 ("Degene die een daartoe strekkend verzoek bij de inspecteur indient, wordt in elk geval uitgenodigd"); art. 11 lid 3 ("vervalt door verloop van drie jaren ... met de duur van dit uitstel verlengd"); art. 13 (voorlopige aanslag) | bdMoet, bdWanneer, bdHoren | 7 Nov 2026 | No set date |
| uawr2 | Not invited within six months after the year and tax due: must ask for an invitation within two weeks; not if no tax is due after voorheffingen. | [Uitvoeringsregeling AWR 1994, BWBR0006736, geldend van 1 Jan 2026 t/m heden](https://wetten.overheid.nl/BWBR0006736/2026-01-01): art. 2 lid 1 ("niet binnen zes maanden ... is uitgenodigd ... gehouden de inspecteur om uitnodiging tot het doen van aangifte te verzoeken"), lid 4 ("binnen twee weken"), lid 5, lid 6 (not if "geen belasting verschuldigd is") | bdMoet ("Doe dit vóór 14 juli, anders kunt u een boete krijgen", for 2025) | 7 Nov 2026 | No set date |
| atw (teacher only) | A term set "in een wet" that ends on a Saturday moves to the next working day; the date in an aangiftebrief is set by the inspecteur. | [Algemene termijnenwet, BWBR0002448](https://wetten.overheid.nl/BWBR0002448/2010-10-10): art. 1 lid 1 ("Een in een wet gestelde termijn die op een zaterdag, zondag of algemeen erkende feestdag eindigt, wordt verlengd tot en met de eerstvolgende dag ...") | awr9 (term "door deze gesteld") | 7 Nov 2026 | No set date |
| ib94 / ib210 / ib810 / ib811 | Aanslag if tax exceeds voorheffingen by more than € 58, or after an aangifte within the term; nihil if voorheffingen exceed tax by not more than € 18 (cases b, c, d); 2026 tariff, algemene heffingskorting, arbeidskorting. | [Wet IB 2001, BWBR0011353, version geldend 1 Jan 2026 t/m 20 Feb 2026](https://wetten.overheid.nl/BWBR0011353/2026-01-01): art. 9.4 lid 1 onder a ("met meer dan € 58 te boven gaat"), onder b (aangifte within the ministerial term), lid 5 ("niet, of met niet meer dan € 18 te boven gaat, de aanslag vastgesteld op nihil"), lid 6 (voorlopige teruggaven); art. 2.10 (schijf tot € 38.883, 8,10%; 37,56%; 49,50%); art. 8.10 lid 2 ("€ 3.115, verminderd ... met 6,398% ... meer bedraagt dan € 29.736"); art. 8.11 lid 2. Revision 2: the [version from 21 Feb 2026](https://repository.officiele-overheidspublicaties.nl/bwb/BWBR0011353/2026-02-21_0/xml/BWBR0011353_2026-02-21_0.xml) has the same "met meer dan € 58", "niet meer dan € 18" and "€ 3.115, verminderd" | [Belastingdienst, Voorlopige aanslag 2026: tarieven en heffingskortingen](https://www.belastingdienst.nl/wps/wcm/connect/nl/voorlopige-aanslag/content/voorlopige-aanslag-tarieven-en-heffingskortingen) (page date 12 Dec 2025; schijf 1 "35,75%", "tot € 29.736 € 3.115"); bdLhkMeer ("De hoogste korting die u in 2026 kunt krijgen is € 3.115. Boven de € 29.736 neemt de korting af.") | 7 Nov 2026 | Belastingjaar 2026 (final values; 2027 values do not matter for this lesson) |
| urib45 | Voluntary aangifte within five years after the year; with a letter or request in that time, the letter's term. | [Uitvoeringsregeling IB 2001, BWBR0012031, version from 1 Jan 2026](https://wetten.overheid.nl/BWBR0012031/2026-01-01): art. 45 "Termijn voor het doen van niet-verplichte aangifte", lid 1 ("wordt gedaan binnen vijf jaren na afloop van het kalenderjaar"), lid 2 | bdJaren | 7 Nov 2026 | No set date |
| wlb23 | Heffingskorting only on the employee's written request; with overlapping pay periods at one employer only; algemene heffingskorting and arbeidskorting 2026. | [Wet op de loonbelasting 1964, BWBR0002471, version from 1 Jan 2026](https://wetten.overheid.nl/BWBR0002471/2026-01-01): art. 23 lid 1 ("slechts toegepast ingeval de werknemer daartoe een schriftelijk, gedagtekend en ondertekend verzoek"), lid 2 ("over loontijdvakken die geheel of gedeeltelijk samenvallen ... slechts in een dienstbetrekking"); art. 22, 22a; art. 28 lid 1 onder e (opgave to the employee) | bdLhkBijbaan, bdLhkMeer | 7 Nov 2026 | No set date |
| urlb74 (teacher only) | Minimum content of a jaaropgaaf (no korting yes/no line). | [Uitvoeringsregeling loonbelasting 2011, BWBR0028236, version geldend 1 Jan 2026 t/m 31 Aug 2026](https://wetten.overheid.nl/BWBR0028236/2026-01-01): art. 7.4 lid 1 ("De inhoudingsplichtige verstrekt aan de werknemer een jaaropgaaf."), lid 2 a to h | Revision 2: the [version from 1 Sep 2026](https://repository.officiele-overheidspublicaties.nl/bwb/BWBR0028236/2026-09-01_0/xml/BWBR0028236_2026-09-01_0.xml), art. 7.4 word for word the same; bdJaaropgaaf | 7 Nov 2026 | No set date |
| bdMoet | Letter: must file; no letter: must file above the aanslaggrens, as soon as possible; fill in without sending to check; € 58 or more to pay, € 19 or more back (2025); 14 juli (2025). | [Belastingdienst, Hoe weet ik of ik aangifte moet doen?](https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingaangifte/content/moet_ik_aangifte_doen) (page date 2 Mar 2026: "Als u een aangiftebrief van ons hebt gehad, moet u aangifte doen."; "Dan moet u aangifte doen als u meer moet betalen dan de aanslaggrens."; "Vul de aangifte helemaal in, maar verstuur deze nog niet"; "Moet u € 58 of meer betalen? Doe dan zo snel mogelijk aangifte. Doe dit vóór 14 juli"; "Krijgt u € 19 of meer terug? Verstuur dan ook de aangifte.") | awr8, ib94, uawr2 | 7 Nov 2026 | Page is for 2025: re-read for 2026 (release gate) |
| bdWanneer | With a letter: before the date in the letter, often 1 May. | [Belastingdienst, Wanneer moet mijn aangifte binnen zijn?](https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingaangifte/content/wanneer-moet-ik-aangifte-doen) (page date 1 May 2026: "Uw aangifte moet bij ons binnen zijn vóór de datum die in uw aangiftebrief staat. Vaak is dit 1 mei.") | opIB ("Meestal is dat 1 mei."); awr9 | 7 Nov 2026 | No set date |
| bdJaren | Without a letter: 5 years back; 2022 until 31 December 2027. | [Belastingdienst, Hoeveel jaar terug kan ik nog aangifte doen?](https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/hoe_werkt_inkomstenbelasting/aangifte_doen/hoeveel-jaar-terug-belastingaangifte-doen) (page date 9 Jun 2026: "Hebt u geen bericht gehad ... Dan kunt u dat tot 5 jaar terug doen."; table "2022: 31 december 2027") | urib45; bdBijbaan ("Je kunt tot 5 jaar terug aangifte doen.") | 7 Nov 2026 | No set date |
| bdTerug / bdBijbaan | Too much tax may be withheld on a bijbaan; reclaim after the year with an aangifte; example "Die € 104 loonheffing kun je terugvragen". | [Belastingdienst jongeren, Kan ik belasting terugvragen?](https://www.belastingdienst.nl/wps/wcm/connect/nl/jongeren/content/kan-ik-belasting-terugvragen) (page date 8 Sep 2026) | [Belastingdienst jongeren, Bijbaan of vakantiebaan: krijg ik geld terug?](https://www.belastingdienst.nl/wps/wcm/connect/nl/jongeren/content/ik-heb-een-bijbaantje-of-vakantiebaantje-gehad-krijg-ik-geld-terug) (page date 28 Feb 2025: "Vaak is er namelijk te veel belasting ingehouden op je loon") | 7 Nov 2026 | No set date |
| bdJaaropgaaf | One jaaropgaaf per employer; fiscaal loon; loonheffing; sent in January or February. | [Belastingdienst jongeren, Wat staat er in een jaaropgaaf?](https://www.belastingdienst.nl/wps/wcm/connect/nl/jongeren/content/wat-staat-er-in-een-jaaropgaaf) (page date 8 Sep 2026: "Op een jaaropgaaf staat wat je in dat jaar hebt verdiend bij 1 werkgever."; "'fiscaal loon'"; "Dit wordt loonheffing ... genoemd."; "meestal in januari of februari") | urlb74 | 7 Nov 2026 | No set date |
| bdLhkBijbaan | Korting at one employer when working at the same time; too much korting, probably pay back; sequential: at each employer; with korting the employer withholds less. | [Belastingdienst jongeren, Loonheffingskorting met een bijbaan](https://www.belastingdienst.nl/wps/wcm/connect/nl/jongeren/content/loonheffingskorting-met-een-bijbaan) (page date 17 Mar 2026: "Die betaalt dan minder belasting"; "Vraag dan bij 1 werkgever de loonheffingskorting aan."; "Je moet dan waarschijnlijk achteraf belasting aan ons betalen."; "Werk je in 1 jaar bij meerdere werkgevers na elkaar? Dan kun je bij iedere werkgever de loonheffingskorting aanvragen.") | wlb23; bdLhkMeer | 7 Nov 2026 | No set date |
| bdLhkMeer | Too much korting: the difference is paid at the aanslag; you always get the korting you are entitled to; the higher the total income, the lower the korting; 2026 maximum and phase-out. | [Belastingdienst, Loonheffingskorting met AOW en pensioen of meerdere werkgevers](https://www.belastingdienst.nl/wps/wcm/connect/nl/werk-en-inkomen/content/loonheffingskorting-meerdere-inkomens) (page date 5 Aug 2026) | wlb23 | 7 Nov 2026 | Amounts: 2026 |
| bdDirect / bdHoe | Aangifte via the app or Mijn Belastingdienst; much is pre-filled; you need your jaaropgaaf and DigiD. | [Belastingdienst jongeren, Hoe doe ik aangifte?](https://www.belastingdienst.nl/wps/wcm/connect/nl/jongeren/content/direct-aangifte-doen) (page date 17 Mar 2026: "Veel gegevens zijn al voor je ingevuld: je hoeft vaak alleen maar te controleren of ze kloppen.") | [Belastingdienst, Aangifte doen: online, met de app of op papier](https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingaangifte/content/hoe-aangifte-inkomstenbelasting-doen) (page date 23 Mar 2026) | 7 Nov 2026 | No set date |
| bdVIA / bdApp | Pre-filled data: change or add yourself; not in the app, only in Mijn Belastingdienst; bank accounts are listed under "Bank- en spaarrekeningen" ("Bankrekeningen en andere bezittingen"). | [Belastingdienst, De vooraf ingevulde gegevens in mijn aangifte kloppen niet](https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingaangifte/content/vooraf-ingevulde-gegevens-kloppen-niet) (page date 2 Mar 2026: "Klopt er iets niet helemaal? Bijvoorbeeld omdat in uw eigen jaaroverzicht een ander bedrag staat? Dan kunt u deze gegevens zelf aanpassen of aanvullen."; "In de aangifte-app kunt u geen gegevens aanpassen of aanvullen. Dit kan alleen in de aangifte in Mijn Belastingdienst."; "U verbetert dit bij 'Bank- en spaarrekeningen'. U vindt dit onderwerp in het menu, onder 'Bankrekeningen en andere bezittingen'.") | [Belastingdienst, Kan ik de aangifte-app gebruiken?](https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingaangifte/content/kan-ik-de-app-aangifte-gebruiken) (page date 7 May 2026: "U kunt de gegevens in de app namelijk niet wijzigen of aanvullen."); bdFout | 7 Nov 2026 | Written for aangifte 2025: re-read for 2026 (release gate) |
| bdFout | After sending: change, correct or add up to 5 years after the year; verzoek tot herziening; changes always in Mijn Belastingdienst. | [Belastingdienst, Ik heb een foutje gemaakt](https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingaangifte/content/ik-heb-een-foutje-ontdekt) (page date 10 Jun 2026: "Uw aangifte wijzigen kan tot 5 jaar na het jaar waarover de aanslag gaat."; "Want u kunt de gegevens in de app niet wijzigen.") | bdVIA | 7 Nov 2026 | No set date |
| bdRek | The refund account for inkomstenbelasting: on your own name, a betaalrekening, not a spaarrekening; change it in Mijn Belastingdienst at "Mijn gegevens", "Rekeningnummer", "Mijn rekeningnummer doorgeven"; confirmation within 3 weeks; a payment may still go to the old number. | [Belastingdienst, Rekeningnummer doorgeven of wijzigen](https://www.belastingdienst.nl/wps/wcm/connect/nl/betalenenontvangen/content/rekeningnummer-doorgeven-zo-doet-u-dat) (page date 3 Sep 2026: "Het rekeningnummer dat u doorgeeft, moet op uw naam staan. En het mag alleen het nummer van een betaalrekening zijn, niet van een spaarrekening."; "U komt meteen in het tabblad 'Mijn gegevens'."; "Kies onder 'Rekeningnummer' voor 'Mijn rekeningnummer doorgeven'."; "Het kan zijn dat wij het bedrag nog een keer uitbetalen op uw oude rekeningnummer.") | bdGeld; bdInlog | 7 Nov 2026 | Re-read for the 2027 season (release gate) |
| bdGeld | Refund within 1 week after the date on the aanslag; to the account in Mijn Belastingdienst, change it there at once, not reversible; no account: letter, then up to 3 weeks; open debt offset, rest within 6 weeks. | [Belastingdienst, Ik heb mijn belastingaanslag gekregen: wanneer krijg ik mijn geld?](https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingaangifte/content/ik-heb-bericht-gekregen-over-mijn-aangifte-wanneer-krijg-ik-mijn-geld) (page date 30 Mar 2023: "Dan krijgt u dat binnen 1 week na de datum op de aanslag op uw rekening."; "We hebben het geld overgemaakt op het rekeningnummer dat in Mijn Belastingdienst staat. Dat kunnen we niet meer terugdraaien."; "Geef dat dan meteen door in Mijn Belastingdienst."; "Daarna kan het nog 3 weken duren"; "binnen 6 weken") | bdRek; bdInlog | 7 Nov 2026 | Old page date: re-read (release gate) |
| bdHoren | Before 1 April: message before 1 July; later: try within 3 months; sometimes later; definitive aanslag within 3 years; MijnOverheid e-mail on new post. | [Belastingdienst, Ik heb aangifte gedaan: wanneer hoor ik iets?](https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingaangifte/content/wanneer-hoor-ik-iets) (page date 22 Jun 2026: "Als u voor 1 april aangifte hebt gedaan, krijgt u voor 1 juli bericht."; "We kunnen niet precies vertellen wanneer u iets hoort."; "proberen wij u binnen 3 maanden een bericht te sturen"; "Soms krijgt u niet binnen 3 maanden bericht"; "Uiterlijk binnen 3 jaar na afloop van een belastingjaar krijgt u van ons een definitieve aanslag."; "U krijgt een e-mail zodra er post is over uw aangifte.") | awr11; bdVA | 7 Nov 2026 | Re-read for the 2027 season (release gate) |
| bdVA | Sometimes a voorlopige aanslag after the aangifte, the definitive one after it. | [Belastingdienst, Wat is een voorlopige aanslag?](https://www.belastingdienst.nl/wps/wcm/connect/nl/voorlopige-aanslag/content/wat-is-een-voorlopige-aanslag) (page date 11 May 2026: "Een voorlopige aanslag is een schatting"; "Soms sturen we na het aangifte doen ook een voorlopige aanslag. Uw definitieve aanslag komt daarna.") | AWR art. 13 | 7 Nov 2026 | No set date |
| bdTeLaat / bdUitstel (teacher only) | Late: herinnering, aanmaning (10 werkdagen), verzuimboete; uitstel before the date in the letter, 4 months, belastingrente. | [Belastingdienst, Geen, te late of onvolledige aangifte](https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingaangifte/content/wat-gebeurt-er-als-ik-geen-aangifte-doe-of-te-laat-of-onvolledig) (page date 3 Sep 2026: "verzuimboete van € 469"; "oplopen tot € 6.709") | [Belastingdienst, Kan ik nog uitstel aanvragen?](https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingaangifte/content/kan-ik-nog-uitstel-aanvragen-belastingaangifte) (page date 1 May 2026: "Als u uitstel krijgt, hebt u 4 maanden extra de tijd") | 7 Nov 2026 | Amounts: 2026 page values |
| bdVals | Never direct payment requests; never asks for personal data by WhatsApp, sms, mail or phone; check by logging in; never click a link you do not trust; report to valse-email@belastingdienst.nl. | [Belastingdienst, Valse WhatsApp-berichten, sms-berichten, mails, apps, brieven of telefoontjes](https://www.belastingdienst.nl/wps/wcm/connect/nl/contact/content/valse-whatsapp-berichten-sms-berichten-mails-apps-brieven-of-telefoontjes) (page date 7 Sep 2026: "Ook vragen wij u nooit per WhatsApp, sms, mail of telefoon om persoonlijke gegevens door te geven"; "Dan weet u zeker dat u berichten leest die wij hebben verstuurd."; "Klik nooit op een link in het bericht dat u niet vertrouwt"; "Mail het bericht naar ons via valse-email@belastingdienst.nl") | digidVals | 7 Nov 2026 | No set date |
| bdVoorbeelden | A fake refund mail; "Wij sturen u nooit een mail met een knop of link waarop u moet klikken"; names appear in fakes. | [Belastingdienst, Voorbeelden van valse berichten](https://www.belastingdienst.nl/wps/wcm/connect/nl/contact/content/voorbeelden-van-valse-whatsapp-berichten-sms-berichten-mails-en-brieven) (page date 8 Jul 2026: "De Belastingdienst communiceert nooit op deze manier over een belastingteruggaaf."; "Wij sturen u nooit een mail met een knop of link waarop u moet klikken."; "Opvallend aan deze valse sms is dat de voor- en achternaam van de ontvanger er in staan.") | bdVals | 7 Nov 2026 | No set date |
| bdInlog / bdHulpInlog | Mijn Belastingdienst: aangifte and account number; log in with DigiD (app, sms-controle, ID card). | [Belastingdienst, Inloggen op Mijn Belastingdienst](https://www.belastingdienst.nl/wps/wcm/connect/nl/home/content/inloggen-mijn-belastingdienst) (page date 19 Oct 2026: "Zo kunt u aangifte inkomstenbelasting doen en uw rekeningnummer doorgeven of wijzigen.") | [Belastingdienst, Hulp bij inloggen](https://www.belastingdienst.nl/wps/wcm/connect/nl/home/content/hulp-inloggen-belastingdienst) (page date 26 Mar 2026) | 7 Nov 2026 | No set date |
| bdMinder | Minors with a bijbaan file their own aangifte via Mijn Belastingdienst. | [Belastingdienst, Mijn minderjarige kind heeft inkomsten](https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingaangifte/content/mijn-minderjarige-kind-heeft-inkomsten) (page date 17 Mar 2026: "Uw kind doet daarover zelf aangifte via Mijn Belastingdienst.") | digidAanvragen | 7 Nov 2026 | No set date |
| digidVals / digidAanvragen / digidMachtigen | DigiD never sends messages with a link or QR code; automatic change notices exist; signs of a fake; from 14 strictly personal, under 14 a parent may help; never give your login to another, use DigiD Machtigen. | [DigiD, Herken een vals bericht](https://www.digid.nl/veiligheid/herken-een-vals-bericht) (no page date: "DigiD stuurt u nooit berichten met een link of QR-code."; "Boodschap die angstig maakt"; "Link of QR-code in het bericht."; "DigiD stuurt u een automatisch bericht als er iets in uw account wijzigt.") | [DigiD, DigiD aanvragen](https://www.digid.nl/aanvragen-en-activeren/digid-aanvragen) ("DigiD is vanaf 14 jaar en ouder namelijk strikt persoonlijk."; under 14: "mag u als ouder of voogd uw kind helpen bij het aanvragen en gebruiken van DigiD"); [DigiD, Machtigen](https://www.digid.nl/aanvragen-en-activeren/machtigen) ("geef uw DigiD-inloggegevens nooit aan een ander, maar gebruik DigiD Machtigen") | 7 Nov 2026 | No set date |
| ro18 / opIB | Aangifte from 1 March; deadline usually 1 May. | [Rijksoverheid, 18 jaar: regelzaken op een rij](https://www.rijksoverheid.nl/themas/familie-zorg-en-gezondheid/achttien-jaar-worden/18-jaar-regelzaken-op-een-rij) (modified 30 Oct 2026: "Heb je een bijbaan? Dan kun je vaak belasting terugkrijgen. Doe vanaf 1 maart aangifte bij de Belastingdienst.") | [Ondernemersplein, Aangifte inkomstenbelasting doen](https://ondernemersplein.overheid.nl/geldzaken-en-belastingen/alles-over-aangifte-doen/aangifte-inkomstenbelasting-doen/) (no page date: "U kunt vanaf 1 maart aangifte inkomstenbelasting doen. ... Meestal is dat 1 mei.") | 7 Nov 2026 | Confirm the 2027 opening (release gate) |
| bles (teacher only) | The Belastingdienst lesson "Laat geen geld liggen": polls, video, oefentool, about 45 minutes, mainly mbo, process of filing; letter usually in February; "gemiddeld enkele honderden euro's"; belastingdienst.nl/jongeren. | [Belastingles.nl](https://www.belastingles.nl/) (polls 10 min, video 5 min, "Aangifte doen" 25 min, "En nu jij" 10 min) and [Docentenhandleiding "Laat geen geld liggen" (PDF, februari 2026)](https://www.belastingles.nl/files/docentenhandleiding-laat-geen-geld-liggen.pdf) ("De les is met name gericht op het proces van aangifte doen."; "Meestal krijg je die brief in februari") | [geldlessen.nl, Laat geen geld liggen](https://www.geldlessen.nl/lesmateriaal/laat-geen-geld-liggen/) (gastles or material, 1 lesuur, free, vmbo/havo/vwo bovenbouw and mbo 2 to 4) | 7 Nov 2026 | Not a rule |
| wvhg (teacher only) | Week van het geld 15 tot en met 19 maart 2027, theme "Unlock je geldskills". | [Week van het geld](https://www.weekvanhetgeld.nl/) (read 7 Nov 2026, Revision 2: "Van 15 tot en met 19 maart 2027 is het tijd voor de 16e editie van de Week van het geld."; "Het thema is: Unlock je geldskills!") | `research/next_topics.md` | 7 Nov 2026 | March 2027 |

## Onzeker

- **2027 season details.** No Belastingdienst page for the aangifte over 2026 exists yet. The opening on 1 March is general wording (ro18, opIB); the "vóór 1 april, vóór 1 juli" promise (bdHoren), the app limitation (bdVIA, bdApp), the account route (bdRek) and the 1-week payout (bdGeld, page date 2023) are current pages that could change for 2027. All are on the release gate. Affected: room 1 intro, V3.2, V3.3, r4 and r5 of room 4, V4.3, digit 4 (the digit stays 7 unless "1 week" changes).
- **bdMoet for 2026.** The page now shows 2025 ("€ 58 of meer", "€ 19 of meer"). By the pattern of 2025 (law € 57, page "€ 58 of meer"; fact check A), the 2026 page will most likely say "€ 59 of meer". The lesson's gloss names the law amount (€ 58) and says only that you need not file; the teacher detail gives the law amount (€ 58) without the content-team note on the page wording, which stays here.
- **14 juli 2027.** For 2026 the date follows from Uitvoeringsregeling AWR art. 2 lid 1, 4 and 5 (derived, not on a page yet; fact check A computed the same). The FAQ writes "vóór 14 juli 2027", the way bdMoet writes it for 2025.
- **Teruggaafgrens with a voorlopige aanslag.** Wet IB art. 9.4 lid 5 covers the cases of lid 1 onder b, c and d; lid 6 has a rule for voorlopige teruggaven. The FAQ says "normaal gesproken" and that a voorlopige aanslag can change it; the exact effect was not worked out.
- **Why the pre-filled data can differ.** bdVIA says only that data can differ from your own overview. The lesson states no cause for the € 675; FAQ M3 says so.
- **DigiD pages** carry no page date.
- **"The Belastingdienst never mails a button or link."** This is the Belastingdienst's own statement on bdVoorbeelden. It does not cover MijnOverheid e-mails (FAQ) or messages inside Mijn Belastingdienst.
- **Single-source items.** The 3-week and 6-week payout cases (bdGeld only, teacher). The age 14 for a personal DigiD (digid.nl only). The February letter (bles only, story fact). The account route "Mijn gegevens" (bdRek only; bdGeld and bdInlog confirm that the number is changed in Mijn Belastingdienst).
- **belastingles.nl** was read by me on 7 November 2026 (home page and teacher guide PDF); fact check A could not open it from its environment. The oefentool itself was not opened (it needs JavaScript).
- **Research figures.** The "€ 579 gemiddeld" refund in the research file is secondary (UvA) and is not used.
- **Closed in Revision 2** (fact check A): the Wet IB version from 21 February 2026 (same values); the Uitvoeringsregeling LB from 1 September 2026 (art. 7.4 the same); the Saturday deadline (Algemene termijnenwet art. 1 lid 1 covers terms "in een wet gesteld", not the inspecteur's date in a letter); the € 58 wording (two years, see above); the Week van het geld dates (weekvanhetgeld.nl, read today).

## Voor een nieuw jaar

For a class in 2028 (aangifte over 2027): move every story date one year and re-check the weekdays (1 March 2028 is a Wednesday; 6 March 2028 a Monday; 16 March 2028 a Thursday). Change "2026" to "2027" in all pupil text, the jaaropgaven and the oefenschermen, and "2027" to "2028" in V1.2, V4.3 and check options; V1.3 stays. Digit 1 becomes 3 (in 2028 the oldest year is 2023), so the code changes to 3797 unless the clue is rewritten to keep a 2: then check the code against all existing codes. Replace the aanslaggrens (€ 58) and the teruggaafgrens (€ 18) with the 2027 values from Wet IB art. 9.4 (version from 1 January 2027), and "14 juli 2027" with 14 juli 2028. Recheck the fictional withholding: 35,75% is the 2026 first-bracket rate; if the 2027 rate differs, recompute g4 and v2 (the digit 3 case does not depend on rates). Re-read every source, above all the release-gate pages. Owner of the yearly update: the content team, in January (before the season opens).

---

## Changelog

Item numbers refer to the room questions (V1.1 and so on), rule lines (r1 and so on) and check items (C1 to C4, B1 to B4) of this spec.

Revision 4 (7 Nov), after ChatGPT check B round 3 (`qa/checkB/belasting-terug_round3.md`, FAIL, 1 ERROR, 47 points OK). **Lock code unchanged: 2797. No answer key changed** (C2 b, B2 b).
- 1 (ERROR, C2 had two defensible answers): applied. Wet LB 1964 art. 23 lid 2 forbids the korting at two employers only for overlapping pay periods, and "Mag je bij elke werkgever ...?" did not say "tegelijk". C2 now asks "Mag je in april en mei bij de bakker en de kapper tegelijk loonheffingskorting laten toepassen?"; answer b "Nee, want je werkte twee maanden tegelijk" stays.
- B2, to keep the forms parallel: the question now names the order, "Mag je eerst bij de bakker en daarna bij de kapper loonheffingskorting laten toepassen?"; answer b "Ja, want je werkte na elkaar, niet tegelijk" stays. Options unchanged in both items. `lessons/belasting-terug.js` regenerated; spec-compare 0 mismatches.

Revision 3 (7 Nov), after ChatGPT check B round 2 (`qa/checkB/belasting-terug_round2.md`, FAIL, 2 ERROR, 1 RISK) and the pupil playtest G4 (`qa/gate_belasting_G4.md`, READY WITH FIXES, content items only; the coordinator reports the engine items fixed). Wet IB 2001 art. 9.4 lid 1 and lid 5 re-read in the text of 1 January 2026 (and the XML of 21 February 2026, same wording). **Lock code unchanged: 2797.** Answer keys changed: check C2 is now "Nee, want je werkte twee maanden tegelijk" and B2 "Ja, want je werkte na elkaar, niet tegelijk" (new question); the letters stay A: a, b, c, c and B: b, b, a, a. All 12 room answers, 4 digits and 8 check answers re-derived. `lessons/belasting-terug.js` regenerated from this spec; `tests/spec-compare.js belasting-terug` 0 mismatches.

Check B round 2:
- 1 (ERROR, € 58 and the "€ 40" sentence; changelog B6): applied. Art. 9.4 lid 5 sets the aanslag of lid 1 onder b at nihil when the voorheffingen do not exceed the tax, or by not more than € 18. Teacher detail room 1 now reads "Moet je over 2026 € 58 of minder bijbetalen? Dan hoef je dat normaal gesproken niet te betalen, ook niet na een vrijwillige aangifte. Bij eerdere voorlopige aanslagen kunnen andere regels gelden." The rule note of room 1 and the Revision 2 entry B6 are corrected (my Revision 2 reading left out lid 5). The pupil gloss stays.
- 2 (ERROR, B1 without the date in the letter): applied. B1 adds "In de brief staat dat je aangifte vóór 1 mei 2027 binnen moet zijn." Answer b stays.
- 3 (RISK, B2 asked for a tax result): applied as proposed, and C2 got the same question so the forms stay parallel ("Mag je bij elke werkgever loonheffingskorting laten toepassen?"; C2 a "Ja, dat mag bij elke werkgever", b "Nee, want je werkte twee maanden tegelijk", c "Nee, want je had twee werkgevers in één jaar"). Option lengths checked: the right option is never the longest.

Playtest G4 (content):
- S1 (tip said pupils can guess until right): applied, the wording of the G4 fix.
- S2 (load, weak pair about 30 minutes): applied in part. Room 1 glosses "Uiterlijk" and "Na afloop van" removed (r5, V1.2 and V1.3 now say "na het einde van" and "niet later dan"); room 2 old r1 removed (the gloss "Jaaropgaaf" says it), rules renumbered, V2.2 now "volgens regel 2"; room 3 old r5 folded into r4. The escape row of the lesson plan adds "Loopt een tweetal achter? Wijs naar de regel, niet naar het antwoord." Not applied: "Laat kamer 4 vraag 3 vallen", because a pair cannot skip a question in the engine; the stop at minute 32 and end check C4/B4 cover room 4.
- S4 (practice screens look like plain tables): applied as far as a document allows: titles with the menu path ("Mijn Belastingdienst > Aangifte 2026 > Loon (oefenscherm)", "Mijn Belastingdienst > Mijn gegevens (oefenscherm)") and "[ Mijn rekeningnummer doorgeven ]" as a button in brackets. Input fields and an "Aanpassen" button are engine work.
- S6 (V1.2 hint sent pupils to regel 5): applied. Hint "Lees de appjes van Jesse nog eens. Wat staat er in zijn brief?"; nudge "Lees regel 2. Waar staat de datum die voor Jesse geldt?"
- S7 (teacher background with internal keys and team notes): applied. Each teacherDetail now uses short labels and source titles, without keys and without the note on the page wording (€ 59) and the bracket check; those stay in this spec (Onzeker, rule notes).
- N2 (room 1 digit retry): applied, "Je zoekt het oudste jaar dat nog kan. Dat jaar plus 5 jaar is 2027. Welk jaar is dat?", plus `clueWrong` for "1" (2031).
- N3 (V2.2 nudge vague): applied in a form that does not name the answer row (gate P7): "Lees regel 2. Zoek op elke jaaropgaaf het woord uit die regel."
- N4 (room 3 digit "5"): applied as `clueWrong` "5": "Het verschil van 95 klopt. Neem nu het eerste cijfer." Also `clueWrong` for room 2 ("6": forgot June) and room 4 ("5": werkdagen).
- N8 (teacherNote repeated the Kern): applied. teacherNote now holds a classroom tip per room and, for rooms 2 and 3, the answers to the extra questions (36 procent; € 90 minder), as the coordinator asked.
- N9 (14 juli unexplained): applied, "Volgens de regels moet dat vóór 14 juli 2027."
- N14 (A4/B4 right option the only "Je gaat"): applied, C4 a "Je gaat via de link naar de site van de Belastingdienst", B4 b "Je gaat via de knop naar de site en kijkt of die echt lijkt".
- N15 (V3.2 option b hard to parse): applied, "Bij Golfkoel: de ijssalon past haar aangifte aan".
- N16 (materials line "beamer, Print"): applied, the last item is now "1 papiertje "Mijn belastingcheck" per leerling (vooraf geprint, als je het gebruikt)", as in Verzekerd.
- Not applied (engine or build, not content): S3 (layout of rules and documents), S5 (euro sign wrap; a no-break space in the data would also have to be in every spec string), S8, N1, N5 (button shape), N6 (richttijd per room; `teacher.timers` sets the board timer presets only, and the default presets plus 26 fit), N7, N10 to N13. `teacher.timers` is not used.

Revision 2 (7 Nov), after fact check A (`content_new/factcheck_A_belasting-terug.md`, PASS, 0 ERROR, 9 RISK), ChatGPT check B (`qa/checkB/belasting-terug.md`, FAIL, 2 ERROR, 5 RISK) and the persona gate (`qa/gate_belasting_personas.md`, READY WITH FIXES, 1 BLOCKER). I re-opened every source I changed something on today: Wet IB 2001 XML of 21 February 2026, Uitvoeringsregeling LB 2011 XML of 1 September 2026, Algemene termijnenwet art. 1, weekvanhetgeld.nl, bdRek (new), bdApp (new), and the bdVIA, bdGeld, bdHoren, bdMoet, digid.nl quotes already in the table. **Lock code unchanged: 2797** (digit 3 stays 9 through the new clue case). Answer keys changed: V3.2 "Op Mijn Belastingdienst: ze past het daar aan"; V3.3 "Ze geeft het nieuwe nummer meteen door" (new question on a new screen); V4.2 "Ze logt in op Mijn Belastingdienst"; V4.3 "1 juli 2027"; all eight check items have new text (keys A: a, b, c, c; B: b, b, a, a, as before). All 12 room answers, 4 digits and 8 check answers re-derived.

Check B:
- B1 (ERROR, the IBAN in the pre-filled aangifte is an asset item, not the refund account): applied after reading bdVIA ("U verbetert dit bij 'Bank- en spaarrekeningen' ... onder 'Bankrekeningen en andere bezittingen'") and the new source bdRek ("Mijn gegevens", "Mijn rekeningnummer doorgeven", "moet op uw naam staan", "betaalrekening, niet ... spaarrekening"). Row v5 left doc via; new doc gegevens (oefenscherm "Mijn gegevens"); r4 and new r5 of room 3; V3.3 rebuilt (docs gegevens, new prompt, options, explanation, sources); intro, leerdoel 3, Kern, remember, teacher detail room 3; release gate item 4. URL: https://www.belastingdienst.nl/wps/wcm/connect/nl/betalenenontvangen/content/rekeningnummer-doorgeven-zo-doet-u-dat
- B2 (ERROR, FAQ "€ 18 of minder" absolute): applied. Wet IB art. 9.4 lid 5 (cases b, c, d) and lid 6 (voorlopige teruggaven) re-read; FAQ now "normaal gesproken" with the voorlopige aanslag sentence.
- B3 (RISK, r5 room 1 also seemed to cover owing): applied. r5 now "Kreeg je geen brief en krijg je geld terug? ..."; r3 adds "zo snel mogelijk" (bdMoet). Digit clue 1 has the same condition.
- B4 (RISK, Saturday deadline): applied in the V1.2 explanation ("uiterlijk vrijdag 30 april, want 1 mei is een zaterdag") and the teacher detail. The Besluit Fiscaal Bestuursrecht the checker names was not opened; the conclusion rests on Algemene termijnenwet art. 1 lid 1 (read today) and AWR art. 9 lid 1. The pupil text promises no move and says nothing about Monday.
- B5 (RISK, give 14 juli 2027): applied as a new FAQ row ("vóór 14 juli 2027", derived from Uitvoeringsregeling AWR art. 2, see Onzeker). Gate M9 asked to cut the 2025 date: the old sentence "Voor 2025 noemde de Belastingdienst" is gone.
- B6 (RISK, aanslaggrens gloss at exactly € 58): applied to the gloss ("Kreeg je geen brief en moet je niet meer bijbetalen dan dat? Dan hoef je geen aangifte te doen."). **Corrected in Revision 3:** my reason for not taking the checker's wording was wrong. I read Wet IB art. 9.4 lid 1 onder b (filing gives an aanslag) without lid 5, which sets that aanslag at nihil when the voorheffingen do not exceed the tax or by not more than € 18. So "€ 58 of minder hoef je niet bij te betalen" was right, also after filing. The Revision 2 teacher-detail sentence "wie € 40 moet bijbetalen en toch aangifte doet, betaalt dus wel" was wrong and is gone.
- B7 (RISK, definitive aanslag and uitstel): applied in the FAQ ("meestal uiterlijk 3 jaar", "Kreeg je uitstel ... duurt die termijn langer"; AWR art. 11 lid 3).

Fact check A:
- € 58 wording: applied (teacher detail room 1; Onzeker "bdMoet for 2026"). The proposed gloss "€ 58 of minder: niets betalen" was not used, see B6.
- 1 week (bdGeld 2023), 1 March opening, r4 (bdHoren): no text change except the gate W1 hedge; release gate keeps all three; fallback intro in the release gate.
- r1 room 4: no pupil change; teacher detail room 4 adds DigiD's automatic change notices.
- Week van het geld: dates confirmed on weekvanhetgeld.nl today; "Geldgroeier" dropped; row wvhg now primary.
- DigiD under 14: added to the FAQ (ouder row) and teacher detail room 4.
- eerste-bijbaan slip (€ 24 with korting): not changed here; it belongs in that file (reported to the coordinator).
- belastingles.nl: fact check A could not open it; I read it today (Onzeker).
- Onzeker items closed: Wet IB 21 February version, Uitvoeringsregeling LB 1 September version, Algemene termijnenwet, € 58 wording.

Persona gate:
- W1 (BLOCKER, V4.3 second defensible answer): applied. Prompt "Vóór welke datum krijgt Yara volgens regel 4 bericht over haar aangifte?"; options are bare dates, none a weaker form of the right one (c "6 juni 2027" replaces "31 december 2029"); r4 ends "Soms duurt het langer."; the explanation no longer names 2029. The gate's proposed option "Vóór 1 december 2027" was not used: it is implied by "vóór 1 juli" and would be a second defensible answer of its own.
- P6 (digit 3 gap 90 = V3.1 gap): applied, € 1.245, gap 95, digit 9.
- W4, W5 (checks are room questions in second person; "zelf" only in the right option): applied. C1 and B1 ask "Ben je op tijd?" for a late aangifte (2028 without letter; July with letter and no uitstel); C2 a two-month overlap; C3 a wrong wage; "zelf" is in no option; wrong options name the Belastingdienst too; C4/B4 differ from V4.2.
- W2, P1, P3: applied (r4 "meteen"; "De oude rekening bestaat niet meer"; V3.1 hint on the order of the digits).
- W3, P7 (V2.2 second reason; pointer on the answer rows): applied (prompt "volgens regel 3", pointer r3 only, new nudge, explanation names the wage level).
- M1, M2, M3, M8 (FAQ gaps): applied (four loonheffingskorting rows, jaaropgaaf, pre-filled difference, nepmail report).
- M4, M5: applied (room 2 `discuss` answerable from r4; each teacher detail opens with "Kort:").
- P2, P4: applied (glosses uitkomst, uiterlijk, na afloop van, voorwaarde, bericht; aanslaggrens no longer empty; "Versturen" removed; "vereenvoudigd" became "korter gemaakt"; V3.2 and V4.2 options of one shape).
- P5 (Jesse table width): applied as a shorter third header "Korting toegepast"; the 1366x768 check is in the build report.
- P8 (plan "weer 1 maart"), P10 ("dan maar"), P11 (V1.3 hint), P13 (care point 7), P14 (digit 4 "Tel alle dagen mee"), W7 (V1.2 "volgens zijn brief"), W8 (care point 8, room 4 `discuss`), T1 (no content-team line on the teacher screen; Week van het geld dates after reading), T2 and W6 (extras for fast pairs as `discuss` prompts with answers; audience line for vwo), T3 (gloss "loon voor de loonheffing"): applied.
- P9 (chat sender label): applied as `sub` "app op de telefoon van Yara"; a name label for "me" bubbles is engine work (Engine fit).
- Not applied, with the reason: T4 (three-room short path): the engine has no short version (README); M6, M7 (paper print and timer text): engine work, already in v3 per README; T5 (eerste-bijbaan slip): other file; the "Checks" table's V2.3 hint: applied (hint now "Lees bij elke werkgever de eerste datum."). The second `discuss` line for rooms 2 and 3 is one string with "Extra voor snelle tweetallen", because spec-compare and the engine take one prompt per room.
- `staleText` removed: lessons-e2e checks the default banner text, and the lesson does show amounts.
- Re-checked with scripts after all changes: no Dutch sentence over 20 words, no em or en dashes, no order words in pupil text, option shapes as listed under "Rule boxes".
- Data file written: `kamers-engine/lessons/belasting-terug.js` (slug `belasting-terug`, product `escape18-belasting-terug`), generated from this spec and checked against it. `tests/spec-compare.js belasting-terug`: 481 comparisons, 0 mismatches. Build to a scratch `--out`: one page, 484 kB. `tests/lessons-e2e.js belasting-terug`: 24 of 25 tests pass, including the full playthrough (lock 2797, both checks 4 of 4), pointers, tables at 360 px, 1366x768 and 1024x768 without sideways scroll (so Jesse's three columns fit, gate P5), paper print and logging. The one failure is "site index links the lessons": by design until the slug is published (the coordinator adds it to `HIDE`), as for Verzekerd. The slug was added to the lookup tables of both tests, not to their default lists.

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
