# Escape "Verzekerd na je 18e" (content spec, ID voorstel: ESC-VERZEKERD)

Regels geldig voor: kalenderjaar 2027 (the story plays from April to October 2027); gecontroleerd op 7 november 2026; validUntil: 31 december 2027. The only real amounts are the verplicht eigen risico 2027 (€ 400, Stcrt. 2026, 34372) and the steps of the vrijwillig eigen risico (€ 100 to € 500, Zvw art. 20, no end date). Every other amount (premiums, discounts, prices, insured amounts, the € 50 eigen risico on the Kamerpolis) is fictional and says so.

Release gate (persona gate T1): on the day of publication re-check Stcrt. 2026, 34372 against any later regulation (SRU search of officielebekendmakingen.nl) and re-read the Rijksoverheid eigen risico page. Then update `checked`, `CHECKED_ON` in `tests/spec-compare.js` and the second audience line (`teacher.audience`) to that date. Next scheduled check: 2 January 2027. Publication itself (state after Revision 2): `site/verzekerd/` holds the lesson page and the docentblad `docent.pdf` (2 A4 pages, Route 18 style, made with the scratchpad generator `dp/build.py verzekerd`). `build.js` lists `verzekerd` in `HIDE`, so the landing page shows no card yet and the page is reachable by URL only. To publish, remove `verzekerd` from `HIDE` and rebuild; the lessons-e2e test "site index links the lessons" fails until then by design (all other 24 tests pass). The docentblad repeats the € 400 line and the check dates, so re-render it after the release-gate check.

Doelgroep en moment: havo 4 en 5, vwo 5 en 6. Room 3 practises economie domein G (havo CE syllabus 2027: G1.1, G1.4, G2.2, G2.3; vwo concept syllabus CE 2027, versie 2 juli 2025: G4.1, G4.2, G4.4, G4.5, read on 7 November 2026 in Revision 2); rooms 1, 2 and 4 are about what you arrange when you turn 18 (mentoruur), not CE stof. Window: school year 2026-2027 (the story and the amounts are 2027); suggested hook: Week van het geld, 15 tot 19 maart 2027 (vo-skill "Vooruitkijker"). Lesduur 45 minuten, escape 26 minuten, stop op minuut 32 (same pattern as Route 18; see the lesson plan).

Format as ESC-KAMER and Route 18: four rooms, 3 questions per room, one retry with a nudge that points to a line, a hint that costs 30 seconds, one digit per room, one lock of four digits, then the end check, the end screen and the plan. Pupil text is Dutch B1, sentences at most 20 words, no em or en dashes. Rules come only from the source table at the end. All pages and law texts read on 7 November 2026.

Rule boxes (`room.rules`): every rule a pupil needs on the first try is in the room's rule box, the situation text or the room's documents (G4 fix 3). Each digit clue shows the facts it needs (G4 fix 1), names its lock position (G4 fix 2) and does not contain or repeat a room answer (persona gate P8). Lessons from the Route 18 checks, applied from the start: no absolute rule where the law has an exception (the exception is in the rule box or ruled out in the situation); one defensible answer per question (each situ states the fact that would otherwise open a second answer); hints point to a place or a method, never to the option; policy conditions are written as conditions, not as consequences; every real rule has a source row; fictional policy terms never contradict the law (see the note under room 4). Option shapes (persona gate): in every question and check item the right option is not the longest, not the only one with its first word, not the only one with two reasons, and not the sum of the other options.

Why this lesson (research `research/next_topics.md`, topic A, 22 of 25 points): exam fit for room 3 (economie G1.1 verwacht schadebedrag, G1.4 eigen risico tegen premiekorting, G2.2 verplichte verzekering, G2.3 eigen risico tegen moral hazard; syllabus read today); geldlessen.nl lists no vo lesson on insurance; contract logic changes slowly. Missing elsewhere: reading a policy to decide "covered or not". Overlap avoided on purpose:
- Lesson 1 (`d34/src/escaperun.js`, room "De brief en je DigiD"): the insurer letter at 18, verzekeringnemer, premium from the month after the birthday, switching within a month, zorgtoeslag and DigiD. None of these is asked here. The basisverzekering appears once, as one of six items in V1.1.
- Eerste-maand practice drill OEF-RISICO (`d34/src/drills2.js`): huisarts without eigen risico, the remaining eigen risico, when you pay (amounts 2026). Room 3 here asks what the insurer pays above the 2027 cap, then adds what the drill lacks: the vrijwillig eigen risico against premiekorting and the verwacht schadebedrag.
- The research proposal's "landlord door on purpose" case is replaced by kicking a friend's bike on purpose: damage to a rented home is often treated separately in real policies, so it would open a second answer.

Lead: "Wat moet je verzekeren, wat kies je zelf en wat betaalt je polis? Reken met eigen risico en meld schade goed."

The lead is used on the start screen and the site card (spec-compare reads it from the spec).

Fiction line (shown once at the start):
"Verzonnen zijn de mensen, Zeestad, de verzekeraars, de polissen en hun bedragen. De wet is echt, en bij elke uitleg staat de bron."

Neutrality line (start screen under the fiction line, and on the teacher screen):
"Deze les raadt geen verzekering en geen verzekeraar aan. Wat je verzekert, kies je zelf."

Fictional on purpose: the city Zeestad (as in ESC-MAAND, ESC-KAMER, ESC-ROUTE); the people Noor (18), her brother Sem (20) and her friend Daan; Zorgverzekeraar Wadlicht (Revision 2: replaces "Kompas", which lesson 1 and OEF-RISICO in d34 still use; see the name check below); Zeelicht Verzekeringen (gezinspakket of Noor's parents and Noor's own Kamerpolis); Telefoonwinkel Zeestad; the addresses Duinweg 8 (parents) and Kadeweg 21 (Noor's room from September); all policy texts, insured amounts, premiums, the premium discount of € 20, the care prices, the 7-day reporting term and the € 50 eigen risico of the Kamerpolis. Name check, 7 November 2026 (Revision 2, check B item 5): "Kompas" is rejected. The AFM Register Financieel dienstverleners (full CSV export, 17,742 rows) lists "Kompas Verzekeringen" as a trade name of Nationale Assuradeuren Compagnie (NAC), 's-Gravenhage, and KvK has 1,131 results for "Kompas". The new name "Wadlicht" has 0 hits in the AFM register, 0 results in the KvK Handelsregister search, and no insurer or company in a web search (one hit, a literary text on dbnl.org). Rejected on the way: "Golfslag" (KvK has a huisartsenpraktijk De Golfslag), "Zilvermeeuw" (too close to the real Zilveren Kruis), "Zeekraal", "Kustlicht" and "Meeuwenduin" (KvK hits). "Zeelicht" stays: 0 hits in the AFM register; KvK lists 6 results (Zeelicht Producties, ZeeLicht Maritiem, Stichting Zeelicht), none an insurer or intermediary; no insurer in a web search (fact check A agrees). "Telefoonwinkel Zeestad" was not searched: Zeestad itself is fictional, so the name points nowhere. "Duinhelm" was rejected: a Belgian company of that name exists. "Belbaai" was searched and rejected as too close to real phone-shop names starting with "Bel". The `.example` address of the phone shop is a reserved test domain. Rijksoverheid, de RDW and de politie are named only as the real places where a rule applies; no page of theirs is imitated.

Story time: Noor turned 18 on zaterdag 3 oktober 2026. She has her own basisverzekering at Wadlicht for the whole of 2027, so the full verplicht eigen risico of 2027 applies (the pro rata rule of Zvw art. 22 plays no role; teacher detail). Room 1: woensdag 14 april 2027 (scooter since March, still living at home on the Duinweg). Room 2: zaterdag 12 juni 2027 (still at home). Room 3: maandag 6 september 2027 (on her room on the Kadeweg since woensdag 1 september 2027). Room 4: vrijdag 1 oktober 2027, reporting deadline vrijdag 8 oktober 2027. Care dates in room 3 (no weekday shown): di 9 februari, za 3 april, di 22 juni, za 17 juli 2027. Digit clue 4 uses a separate case (1 augustus, plus 7 days: 8 augustus). All weekdays checked with a calendar script; 3 April 2027 is not a public holiday (Easter 2027 is 28 March).

Code: **2348** (room digits 2, 3, 4, 8; not 1725, 2824, 2073, 3521, 4379 or 3231). Unchanged in Revision 1. Teacher screen: show it only inside the closed Antwoordblad, never on the projected part.

## Leerdoelen

1. De leerling kan zeggen welke verzekeringen de wet verplicht: de basisverzekering voor zorg, en een WA-verzekering voor een scooter, brommer, motor of auto op je naam. De rest kies je zelf.
2. De leerling kan in voorwaarden opzoeken wie verzekerd is en wat niet verzekerd is, en zo zeggen of schade gedekt is. Ook als je op kamers gaat.
3. De leerling kan uitrekenen wat de verzekeraar betaalt boven het verplicht eigen risico van 2027, een vrijwillig eigen risico afwegen tegen premiekorting, en een verwacht schadebedrag berekenen.
4. De leerling weet hoe je schade meldt: op tijd, met bewijs en eerlijk.

---

## Kamer 1. Moet of mag? (woensdag 14 april 2027)

**Intro:** "Noor is sinds oktober 18. Ze woont nog thuis in Zeestad, op de Duinweg 8. Sinds maart heeft ze een scooter op haar naam. Daar rijdt ze elke dag mee naar school. In september gaat ze op kamers. Haar moeder legt zes soorten verzekeringen op tafel."

### Document 1a: soorten verzekeringen (type: table with head, id: tafel)
Title: "Soorten verzekeringen". From: "Thuis bij Noor (verzonnen voorbeeld)".
Head: "Verzekering" | "Waarvoor is die?"
- t1 "Aanvullende zorgverzekering" | "Zorg die de basisverzekering niet betaalt"
- t2 "Aansprakelijkheidsverzekering" | "Schade die je per ongeluk bij een ander maakt"
- t3 "Inboedelverzekering" | "Schade aan de spullen in je huis"
- t4 "Telefoonverzekering" | "Schade aan je telefoon"
- t5 "Basisverzekering zorg" | "Zorg uit het basispakket, zoals de huisarts en het ziekenhuis"
- t6 "WA-verzekering scooter" | "Schade die je met je scooter bij anderen maakt"

Design note: "zes soorten" (not "alle verzekeringen"): the table shows kinds of insurance, not policies Noor has (her basisverzekering is at Wadlicht, and in room 3 she has no phone insurance yet; gate P7). The column says what each insurance is for, never whether it is compulsory; that comes only from the rule box. The descriptions follow the sources (Rijksoverheid: basispakket "Denk aan de huisarts, het ziekenhuis"; aanvullend "kosten die de basisverzekering niet vergoedt"; WA "dekt de kosten van de ander" (Wijzer in geldzaken); AVP "vergoedt de schade die je per ongeluk veroorzaakt bij een ander" (Wijzer); inboedel "De spullen in je huis" (Wijzer)).

### Document 1b: voorwaarden gezinspakket (type: contract, id: wie)
Title: "Voorwaarden Gezinspakket (stukje)". Parties: "Zeelicht Verzekeringen (verzonnen). Verzekeringnemer: de moeder van Noor."
- a1 "Aansprakelijkheid: wie is verzekerd?" | "Jij en je partner. Je kinderen die bij je wonen. Je kinderen die niet meer bij je wonen, als ze voltijd studeren. Ze mogen dan niet getrouwd zijn en geen geregistreerd partner hebben."
- a2 "Inboedel: welke spullen zijn verzekerd?" | "De spullen in je woning op het adres op het polisblad: Duinweg 8, Zeestad. Ook de spullen van je kinderen die daar wonen."

Design note: real family policies differ per insurer on uitwonende kinderen (two commercial pages read today name studying, unmarried, registered in the Netherlands and sometimes an age limit; see source row commAvp). The fictional clause uses the two most common conditions and no age limit, so V1.3 option b ("jonger dan 27") is ruled out by the text. a1 is written as conditions ("als ze voltijd studeren"), not as consequences.

**Moeilijke woorden (plain):** "Polis: het papier waarop staat wat je verzekering betaalt. WA: wettelijke aansprakelijkheid. Basispakket: de zorg die de overheid in de basisverzekering stopt. Voorwaarden: de regels van een verzekering. Verzekeringnemer: de persoon die de verzekering heeft afgesloten. Aansprakelijk: je moet de schade van een ander betalen, meestal omdat het jouw schuld is. Inboedel: de spullen in je huis. Voltijd studeren: een studie die de hele week duurt, zoals de meeste studies. Geregistreerd partner: iemand met wie je officieel een partnerschap hebt vastgelegd, bijna zoals een huwelijk. Gemoedsbezwaren: je wilt door je geloof of levensovertuiging niet verzekerd zijn."

Split over the documents (the engine shows the box of each document; spec-compare joins them): doc tafel has "Polis" to "Basispakket", doc wie has "Voorwaarden" to the end (including "Gemoedsbezwaren", which r2 uses), so V1.2 and V1.3 (docs: wie) show the words they need.

**Rule box (`rules`, title "Regels"):**
- r1 "Woon of werk je in Nederland? Dan moet je een basisverzekering voor zorg hebben. Dat geldt op elke leeftijd."
- r2 "Er zijn bijna geen uitzonderingen op regel 1. Bijvoorbeeld militairen in werkelijke dienst, en mensen met een ontheffing van de SVB wegens gemoedsbezwaren."
- r3 "Een aanvullende zorgverzekering is niet verplicht."
- r4 "Staat er een scooter, brommer, motor of auto op je naam? Dan moet je een WA-verzekering hebben."
- r5 "Gebruik je je voertuig lang niet? Dan kun je het laten schorsen bij de RDW. Zolang hoeft er geen WA-verzekering te zijn."
- r6 "De wet verplicht je meestal niet tot een aansprakelijkheids-, inboedel-, reis- of telefoonverzekering. Voor Noor zijn die niet verplicht."

Note on r2, r5, r6: r2 names the two exceptions in Zvw art. 2 lid 2 (militaire ambtenaar in werkelijke dienst; ontheffing under art. 64 Wfsv). Revision 2 (check B item 1, ERROR): the first versions said "mensen die uit geloof geen verzekering willen", which is too broad: wanting is not enough, you need an ontheffing from the SVB (CAK: "Bij de Sociale Verzekeringsbank (SVB) vraagt u een ontheffing van de verzekeringsplicht aan."; "Doet u dat niet? Dan is die persoon niet gemoedsbezwaard."). The gloss "Gemoedsbezwaren" explains the word; "bijna geen" also covers the groups Rijksoverheid names without a right to a Dutch basisverzekering (GSZV, international organisations; teacher detail). r5 is the RDW exception on Rijksoverheid and in WAM art. 2 lid 3; the intro says Noor rides every day, so it cannot apply. r6 says "meestal" because special cases (for example a hunting licence) were not checked, and its second sentence makes the single answer of V1.1 explicit (gate, vwo pupil point 7). r6 rests on Wijzer in geldzaken (secondary, see Onzeker) and on the absence of such a duty in the laws read. "Op elke leeftijd" in r1: Rijksoverheid "Een zorgverzekering is verplicht voor alle leeftijden." (Wijzer in geldzaken wrongly says "voor iedereen die 18 jaar of ouder is"; not used, see Onzeker.)

### Vraag 1.1 (id: verplicht, kind: multi, docs: tafel)
- Prompt: "Welke verzekeringen moet Noor volgens de wet hebben?"
- Legend: "Tik alle verplichte verzekeringen aan."
- Items (written right answers last; shown in a fixed shuffle):
  - a "Aanvullende zorgverzekering"
  - b "Aansprakelijkheidsverzekering"
  - c "Inboedelverzekering"
  - d "Telefoonverzekering"
  - e "Basisverzekering zorg"
  - f "WA-verzekering scooter"
- Correct: e, f
- Retry pointer: rules r1 and r4.
- Nudge: "Lees regel 1 en regel 4. Wat weet je uit de intro over Noor?"
- Hint (30 s): "Waar woont Noor? En wat staat er op haar naam?"
- Explanation: "Noor woont in Nederland. Dus moet ze een basisverzekering hebben. Ze heeft ook een scooter op haar naam. Daarvoor moet ze een WA-verzekering hebben. De andere verzekeringen kiest ze zelf."
- Sources: roVerplicht, zvw2, cakGemoed, roMis, roWA, wam, wig
- Note: the intro closes every exception: she lives in Zeestad and goes to school (not a soldier, no SVB ontheffing), the scooter is on her name ("op haar naam", WAM art. 2 lid 1 "degene op wiens naam dit in het kentekenregister is ingeschreven") and she rides it daily (no RDW schorsing). Telefoonverzekering and inboedel are optional by r6.

### Vraag 1.2 (id: kamers, kind: pick, docs: wie)
- Situ: "Vanaf 1 september woont Noor op een kamer op de Kadeweg 21. Ze studeert dan voltijd. Ze is niet getrouwd en heeft geen geregistreerd partner."
- Prompt: "Welke verzekering van haar ouders geldt dan nog voor haar?"
- Options:
  - a "De inboedelverzekering, maar de aansprakelijkheidsverzekering niet"
  - b "De aansprakelijkheidsverzekering en de inboedelverzekering"
  - c "Geen enkele verzekering van haar ouders"
  - d "De aansprakelijkheidsverzekering, maar de inboedelverzekering niet"
- Correct: d
- Retry pointer: doc wie, lines a1 and a2.
- Nudge: "Lees bij aansprakelijkheid wie er verzekerd is. Lees bij inboedel welk adres telt."
- Hint: "Op welk adres staan Noors spullen vanaf september?"
- Explanation: "Noor studeert voltijd en is niet getrouwd. Dus blijft ze verzekerd voor aansprakelijkheid. De inboedel geldt alleen voor de Duinweg 8. Haar spullen op de Kadeweg zijn niet verzekerd via haar ouders."
- Sources: none. None line: "Dit staat in de voorwaarden van deze verzonnen polis. Bij echte polissen verschilt het. Lees thuis wat er staat bij 'Wie is verzekerd'."
- Note: options avoid "beide", "allebei" and "geen van" (README option order), so the fixed shuffle is allowed. Options a and d have the same shape, so shape does not give the answer. The story then gives Noor her own inboedelverzekering (room 4 intro); the explanation does not say she must, because r6 says it is her choice. Gate W7 (add "Bij echte polissen kan een kamer ook meeverzekerd zijn") is not applied: no source read today says so; the none line "Bij echte polissen verschilt het" already covers it.

### Vraag 1.3 (id: sem, kind: pick, docs: wie)
- Situ: "Sem, de broer van Noor, is 20. Hij woont alleen en werkt voltijd. Hij studeert niet."
- Prompt: "Is Sem nog verzekerd via de aansprakelijkheidsverzekering van zijn ouders?"
- Options:
  - a "Ja, want hij is hun kind"
  - b "Ja, want hij is jonger dan 27"
  - c "Nee, want hij is ouder dan 18"
  - d "Nee, want hij studeert niet"
- Correct: d
- Retry pointer: doc wie, line a1.
- Nudge: "Lees bij aansprakelijkheid wie er verzekerd is. Past Sem daarbij?"
- Hint: "Zoek de regel over kinderen die niet thuis wonen. Welke voorwaarde staat erbij?"
- Explanation: "Kinderen die niet thuis wonen, zijn alleen verzekerd als ze voltijd studeren. Sem werkt. Wil hij verzekerd zijn? Dan sluit hij zelf een aansprakelijkheidsverzekering af. Dat is niet verplicht."
- Sources: wig
- Note: four options of the same shape (two "Ja", two "Nee", one reason each; gate P4). Option c has the right "Nee" but a reason that a1 does not give (Noor is over 18 too and stays covered). Option b is wrong because a1 names no age; real policies sometimes do (commAvp, teacher only).

### Cijfer kamer 1
- Clue: "Het 1e cijfer van het slot: op tafel liggen 6 soorten verzekeringen. Noor woont in Nederland en heeft een scooter op haar naam. Hoeveel daarvan moet ze volgens de regels hebben?"
- Digit: **2** (basisverzekering by r1, WA by r4; `clueDocs: ['tafel', 'rules']`, so the table and the rule box are on the digit screen; the clue no longer names the two insurances, gate P8).
- Clue retry: "Lees regel 1 en regel 4. Tel de verzekeringen die bij Noor passen."
- Remember: "Verplicht zijn de basisverzekering voor zorg en, als je een voertuig op je naam gebruikt, de WA. De rest kies je zelf."

---

## Kamer 2. Valt het onder de polis? (zaterdag 12 juni 2027)

**Intro:** "Het is juni. Noor woont nog thuis. Ze is verzekerd via de aansprakelijkheidsverzekering van haar ouders. Deze week ging er van alles mis."

### Document 2: voorwaarden aansprakelijkheid (type: contract, id: avp)
Title: "Voorwaarden aansprakelijkheid, Gezinspakket". Parties: "Zeelicht Verzekeringen (verzonnen)".
- n1 "Artikel 1. Wat is verzekerd?" | "Ben je aansprakelijk voor schade aan een ander? Dan betalen wij die schade. Het gaat om schade aan mensen en aan spullen van een ander."
- n2 "Artikel 2. Wie is verzekerd?" | "Jij en je partner. Je kinderen die bij je wonen. Je kinderen die niet meer bij je wonen, als ze voltijd studeren. Ze mogen dan niet getrouwd zijn en geen geregistreerd partner hebben."
- n3 "Artikel 3a. Niet verzekerd" | "Schade aan je eigen spullen."
- n4 "Artikel 3b. Niet verzekerd" | "Schade die je met opzet maakt."
- n5 "Artikel 3c. Niet verzekerd" | "Schade aan spullen die je leent, huurt of bewaart voor een ander."
- n6 "Artikel 3d. Niet verzekerd" | "Schade die je maakt met een motorvoertuig, zoals een scooter of auto."
- n7 "Artikel 4. Hoeveel betalen wij?" | "Tot € 1.250.000 per gebeurtenis. Je hebt geen eigen risico."

Design note: line ids are n1 to n7 (artikel 3a to 3d are n3 to n6), so a retry can point to one exclusion. The insured amount in n7 is fictional and of a common order; no question uses it, but it shows a polisblad-like line. Artikel 2 is word for word clause a1 of room 1: it is the same policy (gate P9, NICE, not shortened for that reason).

**Moeilijke woorden (plain):** "Uitsluiting: schade die niet verzekerd is. Opzet: je doet het expres. Per gebeurtenis: per keer dat er iets gebeurt. Motorvoertuig: een voertuig met een motor, zoals een scooter of auto. Casco: een verzekering voor schade aan je eigen voertuig. Eigen risico: het bedrag dat je zelf betaalt als je schade hebt."

**Rule box (`rules`, title "Regels"):**
- r1 "Een aansprakelijkheidsverzekering betaalt schade die jij bij een ander maakt. Alleen als jij aansprakelijk bent."
- r2 "Lees ook altijd wat niet verzekerd is. Staat de schade daar? Dan betaalt de verzekering niet."
- r3 "Maak je met een scooter of auto schade bij een ander? Dan betaalt meestal de WA-verzekering van dat voertuig."
- r4 "De WA-verzekering betaalt niet voor je eigen voertuig. Wil je dat verzekeren? Dan kies je ook casco."

Note on r1, r3 and r4: r3 says "meestal" because Rijksoverheid says the WA covers damage "in de meeste gevallen" and WAM art. 3 lid 1 names exceptions (for example a stolen vehicle); V2.3 is an ordinary case, so its answer stays single. r1 follows the AVP description of Wijzer in geldzaken ("vergoedt de schade die je per ongeluk veroorzaakt bij een ander") and the legal basis of liability (BW 6:162: "Hij die jegens een ander een onrechtmatige daad pleegt, welke hem kan worden toegerekend, is verplicht de schade ... te vergoeden"). r4: WAM art. 3 lid 1 (the WA covers "de burgerrechtelijke aansprakelijkheid") and art. 4 lid 1 (need not cover "schade toegebracht aan de bestuurder"); Wijzer: "Je kunt je WA-verzekering uitbreiden met een casco-dekking. Dan is ook jouw schade verzekerd." r2 is a reading rule about the document, sourced on Wijzer ("kijk daarna goed naar de voorwaarden").

### Vraag 2.1 (id: betaalt, kind: multi, docs: avp)
- Situ: "In alle vier de gevallen is het Noors schuld. Ze leende niets."
- Prompt: "Voor welke schade betaalt de aansprakelijkheidsverzekering?"
- Legend: "Tik alles aan wat de verzekering betaalt."
- Items (right answers last):
  - a "Noor laat haar telefoon vallen. Het scherm van die telefoon breekt."
  - b "Noor schopt uit boosheid tegen de fiets van Daan. Ze doet het expres."
  - c "Noor stoot bij Daan thuis zijn laptop van tafel. Ze lette niet op."
  - d "Noor fietst tegen een geparkeerde auto. De auto krijgt een deuk."
- Correct: c, d
- Retry pointer: doc avp, lines n1, n3, n4.
- Nudge: "Lees artikel 1. Ga dan bij elk geval na: staat het ook in artikel 3?"
- Hint: "Leg elk geval naast artikel 3a, 3b, 3c en 3d. Past het ergens bij?"
- Explanation: "De laptop en de auto zijn van een ander. Noor is aansprakelijk, dus betaalt de verzekering. Haar telefoon valt onder artikel 3a. De fiets schopte ze expres: artikel 3b. In de wet staat ook een regel over opzet. Die schade hoeft een verzekeraar niet te vergoeden, tenzij de polis iets anders zegt."
- Sources: bw6162, bw7952, wig
- Note: the situ closes the two doors to a second answer: fault (an AVP pays only on liability; "Het is Noors schuld") and lending (artikel 3c; "Ze leende niets"). Item d is a normal bicycle, not an e-bike, so artikel 3d (motorvoertuig) cannot be argued. Item a no longer says "eigen" (gate W1); "haar telefoon" still makes the owner clear. Item b keeps "Ze doet het expres": without it, whether kicking in anger is opzet in the sense of artikel 3b would be arguable, which would open a second answer (gate W1 applied only to a, for that reason). BW 7:952 ("De verzekeraar vergoedt geen schade aan de verzekerde die de schade met opzet of door roekeloosheid heeft veroorzaakt") is not in the list of BW 7:963, so a policy may deviate; hence "tenzij de polis iets anders zegt". The law sentence is worded as "een regel over opzet" (fact check A, RISK 5), because 7:952 speaks of "schade aan de verzekerde".

### Vraag 2.2 (id: geleend, kind: pick, docs: avp)
- Situ: "Daan leent Noor zijn spelcomputer. Bij Noor thuis valt die van de kast. Hij is kapot. Het is Noors schuld."
- Prompt: "Betaalt de aansprakelijkheidsverzekering de schade?"
- Options:
  - a "Ja, artikel 1: het is schade aan spullen van een ander"
  - b "Ja, want het gebeurde per ongeluk"
  - c "Nee, artikel 3a: het zijn Noors eigen spullen"
  - d "Nee, artikel 3c: Noor had de spelcomputer geleend"
- Correct: d
- Retry pointer: rule r2.
- Nudge: "Lees regel 2. Zoek dan in artikel 3 een woord dat bij dit geval past."
- Hint: "Lees de vier stukken van artikel 3. Welk stuk past bij dit geval?"
- Explanation: "De spelcomputer is van Daan, maar Noor had hem geleend. Geleende spullen staan in artikel 3c. Dus betaalt deze verzekering niet. Bij echte polissen kan dat anders zijn. Lees dat na in je eigen polis."
- Sources: none. None line: "Dit staat in de voorwaarden van deze verzonnen polis. Elke polis heeft eigen uitsluitingen."
- Note: this is the trap the lesson is built around: artikel 1 says "yes", the exclusion says "no", and the exclusion wins (r2). The retry points to r2, not to the exclusion, which would give the answer away. The gate's "Bij sommige echte polissen is geleend wel gedekt" (T6) is applied as "kan dat anders zijn": no source read today says how many real policies cover borrowed things.

### Vraag 2.3 (id: scooter, kind: pick, docs: avp)
- Situ: "Noor rijdt met haar scooter tegen een geparkeerde auto. Het is haar schuld."
- Prompt: "Welke verzekering betaalt de schade aan de auto?"
- Options:
  - a "De aansprakelijkheidsverzekering van haar ouders"
  - b "De inboedelverzekering van haar ouders"
  - c "Geen verzekering: Noor betaalt alles zelf"
  - d "De WA-verzekering van haar scooter"
- Correct: d
- Retry pointer: doc avp line n6 and rule r3.
- Nudge: "Waarmee rijdt Noor? Zoek dat woord in artikel 3 en in de regels."
- Hint: "Zoek in de regels wie schade met een scooter betaalt."
- Explanation: "Schade met een scooter staat in artikel 3d. Die schade betaalt de WA-verzekering van de scooter. De schade aan haar eigen scooter betaalt Noor zelf. Of een cascoverzekering, als ze die heeft."
- Sources: roWA, wam, wig
- Note: room 1 established that the scooter has a WA-verzekering (V1.1). The hint no longer asks for the room 1 answer (gate P11). The last two sentences answer the obvious pupil question "en haar eigen scooter?" (r4).

### Cijfer kamer 2
- Clue: "Het 2e cijfer van het slot: in welk artikel van de voorwaarden staat wat niet verzekerd is?"
- Digit: **3** (artikel 3a to 3d; `clueDocs: ['avp']`).
- Clue retry: "Zoek de stukken die met 'Niet verzekerd' beginnen. Welk artikelnummer staat ervoor?"
- Remember: "Lees altijd twee dingen: wat is verzekerd, en wat is niet verzekerd. Een aansprakelijkheidsverzekering is voor schade bij een ander."

---

## Kamer 3. Eigen risico rekenen (maandag 6 september 2027)

**Intro:** "Noor woont nu op haar kamer aan de Kadeweg. Ze kijkt in Mijn Wadlicht naar haar zorgkosten van 2027. Ze heeft alleen het verplicht eigen risico. Ook koopt ze een nieuwe telefoon."

### Document 3a: zorgkosten (type: table with head, id: zorg)
Title: "Mijn Wadlicht: je zorgkosten in 2027 tot nu toe". From: "Zorgverzekeraar Wadlicht (verzonnen)".
Head: "Datum" | "Zorg" | "Kosten"
- z1 "9 februari" | "Huisarts: consult" | "€ 13"
- z2 "3 april" | "Spoedeisende hulp in het ziekenhuis: gebroken pols" | "€ 260"
- z3 "22 juni" | "Ziekenhuis: afspraak bij de huidspecialist" | "€ 210"
- z4 "17 juli" | "Huisartsenpost: oorontsteking" | "€ 95"
Note: "Alle zorg was nodig. Noor had een verwijzing als dat moest. Alles komt uit de basisverzekering. De kosten zijn het hele bedrag per keer. Wadlicht haalt geen andere zorg uit je eigen risico."

Design note: no column says which cost falls under the eigen risico; the pupil decides with r3 and r4. Revision 2 (check B item 2): the note now also states as story facts that Noor had a referral where one was needed and that each amount is the whole cost of that treatment; it states no rule about referrals. The note closes two doors: r5 (an insurer may exempt more care, Bzv art. 2.17 lid 2) and the spoedeisende hulp "zonder noodzaak of verwijzing", which Rijksoverheid says you pay fully yourself (fact check A, RISK 3). A broken wrist is clearly urgent, and "gebroken pols" replaces "enkel verstuikt", which also reads as "only sprained" (gate T3, P2). "Huidspecialist" replaces "huidarts", which differs from "huisarts" by one letter (gate P3). Prices are fictional; no answer depends on z1 or z4. The gate's € 40 for a huisarts consult (W6) is not used: the NZa tariff page returned 403 today, so neither € 13 nor € 40 could be checked, and the coordinator asked not to add an unverified number (see Onzeker). No lab test is listed: Rijksoverheid says lab costs after a huisarts visit "kunnen" fall under the eigen risico, which would open a second answer.

### Document 3b: aanbod telefoonverzekering (type: listing, id: tel)
Site: "telefoonwinkel-zeestad.example (verzonnen)". Title: "Telefoonverzekering bij je nieuwe telefoon". Price: "€ 100 per jaar".
- f1 "Wat is verzekerd?" | "Schade aan je telefoon, zoals een kapot scherm"
- f2 "Diefstal" | "niet verzekerd"
- f3 "Eigen risico" | "geen"

**Moeilijke woorden (plain):** "Eigen risico: het deel van je zorgkosten dat je zelf betaalt. Premie: wat je verzekering kost. Spoedeisende hulp: de afdeling van het ziekenhuis voor spoed. Huisartsenpost: de huisarts 's avonds, 's nachts en in het weekend. Huidspecialist: een arts in het ziekenhuis voor je huid. Verwacht schadebedrag: de kans op schade keer het bedrag van de schade."

Split over the documents: doc zorg has "Eigen risico" to "Huidspecialist", doc tel has "Verwacht schadebedrag", so the retry pointer of V3.3 marks a gloss on its own document.

**Rule box (`rules`, title "Regels"):**
- r1 "Ben je 18 of ouder? Dan betaal je de eerste zorgkosten uit de basisverzekering zelf. Dat heet het verplicht eigen risico."
- r2 "In 2027 is het verplicht eigen risico € 400 per jaar."
- r3 "Voor een bezoek aan de huisarts of de huisartsenpost betaal je geen eigen risico. Ook niet voor de verloskundige en de kraamzorg."
- r4 "Voor zorg in het ziekenhuis betaal je meestal wel eigen risico. Bijvoorbeeld bij de spoedeisende hulp of een specialist."
- r5 "Je verzekeraar kan nog meer zorg uit het eigen risico halen. Dat staat dan in je polis."
- r6 "Je kunt een vrijwillig eigen risico kiezen: € 100, € 200, € 300, € 400 of € 500 extra. Dan krijg je korting op je premie."

Note on r2: the amount comes from the Regeling of 25 September 2026 (Stcrt. 2026, 34372, art. 1 "wordt vastgesteld op € 400", art. 2 "treedt in werking met ingang van 1 januari 2027"), based on Zvw art. 19 lid 2 and 3; fact check A confirmed no later regulation up to 7 November 2026. The Rijksoverheid Q&A page on eigen risico (modified 4 November 2026) still says "Het verplichte eigen risico voor 2026 en in 2027 is € 385" and gives the example "€ 885". The Staatscourant regulation is the legal source and wins; the second audience line and the teacher Q&A say so (release gate above). r3 says "een bezoek aan" because Rijksoverheid separates the visit from lab tests the huisarts orders ("Een bezoek aan de huisarts valt niet onder het verplicht eigen risico. Wel kunnen onderzoeken die een huisarts doet gevolgen hebben"); r3 is the short list from Bzv art. 2.17 lid 1 and Rijksoverheid ("huisartsenzorg (waaronder de huisartsenpost)"). r4: Rijksoverheid "Een behandeling bij de spoedeisende hulp valt voor iedereen vanaf 18 jaar onder het verplicht eigen risico." and "Bijvoorbeeld voor een behandeling in het ziekenhuis". r4 says "meestal" because Bzv art. 2.17 lid 1 also exempts some care that can take place in a hospital (verloskundige zorg, advice the huisarts asks for); both hospital rows of doc zorg are named examples in r4 (spoedeisende hulp, specialist).

### Vraag 3.1 (id: wadlicht, kind: number, docs: zorg)
- Prompt: "Hoeveel betaalt Wadlicht van de twee ziekenhuisrekeningen?"
- Correct: **€ 70** (7000 cents)
- Retry pointer: rules r2, r3, r4.
- Nudge: "Welke rijen vallen onder regel 4? Tel die op. Hoeveel daarvan betaalt Noor zelf volgens regel 2?"
- Hint: "Eerst: hoeveel kosten de rijen onder regel 4 samen?"
- Explanation: "Voor de huisarts en de huisartsenpost betaalt Noor geen eigen risico. Het ziekenhuis kost € 260 + € 210 = € 470. Daarvan betaalt Noor zelf € 400, haar verplicht eigen risico. De rest, € 70, betaalt Wadlicht."
- Sources: stcrt34372, roPrins, zvw19, bzv217, roER, roMis
- Note: Revision 1 (gate T2): the old question asked what Noor pays (€ 400), which a pupil could copy from r2. Now the cap must be applied to a sum. One defensible answer: € 470 minus € 400. Typical wrong tries are distinct: 470 (cap forgotten), 400 (Noor's share), 83 or 178 (huisarts rows counted under the eigen risico). "De twee ziekenhuisrekeningen" names which bills are asked, not why the huisarts rows do not count; the explanation says that. The doc note rules out r5 and the SEH without need, the intro says "alleen het verplicht eigen risico", and Noor was 18 for the whole year (story time). If the 2027 amount were ever changed, V3.1, V3.2, C3 and B3 change; the digit does not (see "Voor een nieuw jaar").

### Vraag 3.2 (id: vrijwillig, kind: pick, docs: zorg)
- Situ: "Stel: Noor had voor 2027 € 500 vrijwillig eigen risico gekozen. Dan kreeg ze € 20 korting per maand. Er komt in 2027 geen zorg meer bij."
- Prompt: "Wat verandert er in 2027 aan wat Noor in totaal betaalt, vergeleken met nu? Tel eigen risico en premie mee."
- Options:
  - a "€ 70 hoger"
  - b "€ 240 lager"
  - c "€ 310 lager"
  - d "€ 170 lager"
- Correct: d
- Retry pointer: rule r6 and situ "Dan kreeg ze € 20 korting per maand."
- Nudge: "Reken twee dingen uit: hoeveel meer eigen risico, en hoeveel korting in 12 maanden."
- Hint: "Hoeveel eigen risico heeft Noor met € 500 extra in totaal? Hoeveel daarvan betaalt ze dan zelf?"
- Explanation: "Met € 500 vrijwillig had Noor € 470 eigen risico betaald. Dat is € 70 meer dan nu. Maar ze kreeg 12 × € 20 = € 240 korting. Samen betaalt ze € 170 minder. Met een grote ziekenhuisrekening was het anders. Dan betaal je tot € 900. Dat kost € 500 min € 240 = € 260 meer."
- Sources: zvw20, roER, sylG1, sylVwo
- Note: Revision 1 (gate P5): the prompt asks for the change in what she pays ("hoger", "lager"), not a "gain" with options in "kosten"; options are four bare amounts of the same shape, with no "samen" in only one of them. a and b are the two single halves, c is the sign error (240 + 70). Economie G1.4 ("een afweging ... in relatie tot de hoogte van een eigen risico (in euro's) en/of premiekorting"). The € 20 discount is fictional; Zvw art. 20 lid 2 and 4 let the insurer set it in its modelovereenkomst. The explanation ends with the other side of the trade-off (G1.2). The question looks back with known costs; the decision in advance (break-even) is the extra question for fast pairs in the `discuss` of room 3 (gate T4, W2), because the engine has no optional question outside the lock (README; Route 18 Engine fit 8) and `src/` may not be changed now.

### Vraag 3.3 (id: verwacht, kind: number, docs: tel)
- Situ: "Stel: de kans dat Noors telefoon in een jaar kapotgaat, is 1 op 10. Een reparatie kost dan € 250."
- Prompt: "Wat is het verwachte schadebedrag per jaar, zonder verzekering?"
- Correct: **€ 25** (2500 cents)
- Retry pointer: plain box "de kans op schade keer het bedrag van de schade".
- Nudge: "Lees bij Moeilijke woorden wat een verwacht schadebedrag is."
- Hint: "1 op 10 is hetzelfde als 10 procent."
- Explanation: "10 procent van € 250 is € 25 per jaar. De premie is € 100: meer dan de verwachte schade. Bij echte verzekeringen kan dat verschil anders zijn. Met een verzekering betaal je voor zekerheid. Of je dat wilt, hangt af van hoe erg jij risico vindt. En of je € 250 zelf kunt betalen."
- Sources: sylG1, wig
- Note: economie G1.1 ("risico als verwacht schadebedrag (in euro's)") and G1.2 (risico-aversie, kosten en opbrengsten, eigen middelen). The 1-in-10 chance is an assumption marked "Stel". The ratio 4 is kept because digit 3 rests on it. Against gate T5 ("the 4:1 premium is loaded"), the explanation now says that real insurances can differ; the gate's "Een verzekeraar vraagt altijd meer premie dan de verwachte schade" is not used, because "altijd" is an absolute that no source read today states. f2 and f3 keep the sum to one step.

### Cijfer kamer 3
- Clue: "Het 3e cijfer van het slot: de telefoonverzekering kost € 100 per jaar. Het verwachte schadebedrag is € 25 per jaar. Hoeveel keer zo hoog is de premie?"
- Digit: **4** (100 / 25; all facts are in the clue; `clueDocs: ['tel']`). Does not depend on the real € 400.
- Clue retry: "Deel de premie door het verwachte schadebedrag."
- Remember: "Voor een bezoek aan de huisarts betaal je geen eigen risico, voor het ziekenhuis meestal wel. Een hoger eigen risico geeft korting, maar je loopt meer risico."

---

## Kamer 4. Schade melden (vrijdag 1 oktober 2027)

**Intro:** "Noor heeft sinds 1 september een eigen inboedelverzekering voor haar kamer. Op vrijdag 1 oktober komt ze terug op haar kamer aan de Kadeweg. Haar kamerdeur is opengebroken. Haar laptop is weg."

### Document 4a: polisblad Kamerpolis (type: table, id: blad)
Title: "Polisblad Kamerpolis". From: "Zeelicht Verzekeringen (verzonnen)".
- b1 "Verzekerd adres" | "Kadeweg 21, Zeestad"
- b2 "Ingangsdatum" | "1 september 2027"
- b3 "Eigen risico" | "€ 50 per schade"

### Document 4b: voorwaarden Kamerpolis (type: contract, id: kvw)
Title: "Voorwaarden Kamerpolis (stukje)". Parties: "Zeelicht Verzekeringen (verzonnen)".
- k1 "Artikel 1. Wat is verzekerd?" | "Je spullen op het verzekerde adres op het polisblad."
- k2 "Artikel 2. Diefstal" | "Wij betalen bij diefstal als de dief is binnengekomen door braak. Bijvoorbeeld: je deur of raam is opengebroken."
- k3 "Artikel 3. Schade melden" | "Meld schade zo snel als je kunt. Doe het uiterlijk 7 dagen na de dag waarop je de schade ontdekt."
- k4 "Artikel 4. Wat stuur je mee bij diefstal?" | "Een kopie van je aangifte bij de politie. Foto's van de braakschade. De aankoopbon. Heb je die niet meer? Stuur dan een bankafschrift van de aankoop."

### Document 4c: schadeformulier (type: table, id: formulier)
Title: "Schadeformulier, ingevuld door Noor". From: "Zeelicht Verzekeringen (verzonnen)".
- s1 "Ontdekt op" | "vrijdag 1 oktober 2027"
- s2 "Wat is er gebeurd?" | "Mijn kamerdeur was opengebroken. Mijn laptop is weg."
- s3 "Wat is weg?" | "Laptop, gekocht in augustus 2027 voor € 650"
- s4 "Aangifte bij de politie" | "nog niet gedaan"
- s5 "Foto's van de braakschade" | "ja, 3 foto's van de deur"
- s6 "Aankoopbon" | "kwijt. Ik betaalde met mijn bankpas."

Design note on the fictional terms: BW 7:941 lid 1 sets no number of days ("zo spoedig als redelijkerwijs mogelijk is"), so a policy may name a term; k3 keeps the legal "zo snel als je kunt" first and the 7 days second. "Uiterlijk 7 dagen na de dag waarop" makes the count unambiguous (1 + 7 = 8 oktober). No fictional clause says "te laat = geen geld" or "liegen = nooit geld": BW 7:941 lid 4 and 5 are semi-dwingend (BW 7:943 lid 2), so such a clause would clash with the law. The consequences are in the rule box only, worded as the law has them. The intro now says "terug op haar kamer aan de Kadeweg" (gate P6), so the theft is at the verzekerde adres of b1.

**Moeilijke woorden (plain):** "Ingangsdatum: de dag waarop je verzekering begint. Braak: iemand breekt een deur of raam open om binnen te komen. Aangifte: je meldt bij de politie dat er iets strafbaars is gebeurd. Bankafschrift: een overzicht van je bank waarop de betaling staat. Uiterlijk: niet later dan. Misleiden: iemand expres iets laten geloven dat niet waar is."

Split over the documents: doc blad has "Ingangsdatum", doc kvw has "Braak" to "Uiterlijk", doc formulier has "Misleiden". "Redelijkerwijs" is now explained inside r1 (gate P1), where the pupil meets it.

**Rule box (`rules`, title "Regels"):**
- r1 "In de wet staat: meld schade zo snel als je redelijkerwijs kunt. Dat is zo snel als iemand dat van jou mag verwachten. Je polis kan een termijn noemen."
- r2 "Geef je verzekeraar ook de informatie en papieren die hij nodig heeft."
- r3 "Meld je te laat, of stuur je iets niet? Dan kan de verzekeraar minder betalen als hij daardoor schade heeft. Soms krijg je dan niets."
- r4 "Lieg je om de verzekeraar te misleiden? Dan kun je je recht op geld voor die schade verliezen."

Note on r3 and r4: r3 is BW 7:941 lid 3 ("kan de verzekeraar de uitkering verminderen met de schade die hij daardoor lijdt"), lid 4 (loss of the whole right only if the policy says so and the insurer "daardoor in een redelijk belang is geschaad") and lid 5 (also lost if the duty was not met "met het opzet de verzekeraar te misleiden"), so "Soms krijg je dan niets", not "dan krijg je niets". r4 is lid 5 ("Het recht op uitkering vervalt indien ... met het opzet de verzekeraar te misleiden, behoudens voor zover deze misleiding het verval van het recht op uitkering niet rechtvaardigt"), so "kun ... verliezen". Both are conditions, not automatic consequences.

### Vraag 4.1 (id: termijn, kind: pick, docs: kvw)
- Prompt: "Uiterlijk wanneer meldt Noor de schade, volgens haar polis?"
- Options:
  - a "Vrijdag 1 oktober 2027, de dag zelf"
  - b "Donderdag 7 oktober 2027"
  - c "Maandag 1 november 2027"
  - d "Vrijdag 8 oktober 2027"
- Correct: d
- Retry pointer: doc kvw, line k3.
- Nudge: "Lees artikel 3. Vanaf welke dag tel je de 7 dagen?"
- Hint: "Op 1 oktober ontdekt Noor de schade. Tel vanaf die dag 7 dagen verder."
- Explanation: "Artikel 3 zegt: uiterlijk 7 dagen na de dag waarop je de schade ontdekt. Dat is vrijdag 8 oktober. Dit is de termijn van deze polis. Ben je te laat? Dan verlies je niet vanzelf je geld. Wacht toch niet tot de laatste dag. De wet zegt: zo snel als je redelijkerwijs kunt."
- Sources: bw7941
- Note: Revision 2 (check B item 3): the explanation now says that the 7 days are this policy's term and that missing it does not by itself cost the payment (BW 7:941 lid 3 and 4, semi-dwingend by 7:943 lid 2; r3 has the details). Option b is the off-by-one error ("binnen 7 dagen" read as 7 days including 1 October); the clause says "na de dag", which rules it out. Option a is a misreading of "zo snel als je kunt" as a deadline. 1 October 2027 falls after the ingangsdatum (b2) and the theft was at the verzekerde adres (b1), so no question about cover arises.

### Vraag 4.2 (id: bewijs, kind: multi, docs: kvw, formulier)
- Prompt: "Wat moet Noor nog doen voordat ze het formulier opstuurt?"
- Legend: "Tik alles aan wat nog moet."
- Items (right answers last):
  - a "Foto's maken van de opengebroken deur"
  - b "Een brief van haar ouders meesturen"
  - c "Aangifte doen bij de politie en een kopie meesturen"
  - d "Een bankafschrift van de aankoop meesturen"
- Correct: c, d
- Retry pointer: doc kvw line k4 and doc formulier lines s4, s5, s6.
- Nudge: "Leg artikel 4 naast het formulier. Wat vraagt artikel 4 dat Noor nog niet heeft?"
- Hint: "Ga artikel 4 punt voor punt langs."
- Explanation: "Artikel 4 vraagt om drie dingen. De foto's heeft Noor al. De aangifte moet ze nog doen. De bon is kwijt, dus stuurt ze een bankafschrift. Een brief van haar ouders is niet nodig."
- Sources: bw7941
- Note: the list itself is the fictional k4; the duty to send information is BW 7:941 lid 2. The bankafschrift item rewards reading to the end of k4 ("Heb je die niet meer?"). Real insurers often ask for an aangifte at theft; this is not stated as a rule, only as the fictional policy's demand.

### Vraag 4.3 (id: eerlijk, kind: pick, docs: formulier)
- Situ: "Een vriend zegt: 'Schrijf op dat je laptop € 1.200 kostte. Dan krijg je meer.' Hij kostte € 650."
- Prompt: "Mag Noor dat doen?"
- Options:
  - a "Ja, want een verzekeraar betaalt toch nooit alles"
  - b "Ja, als Noor het later aan de verzekeraar vertelt"
  - c "Nee, maar als het uitkomt, krijgt ze alles vergoed"
  - d "Nee, want dan kan ze haar recht op geld verliezen"
- Correct: d
- Retry pointer: rule r4.
- Nudge: "Lees regel 4. Waarom wil de vriend een hoger bedrag opschrijven?"
- Hint: "Wat betekent misleiden bij Moeilijke woorden?"
- Explanation: "Een hoger bedrag opschrijven om meer geld te krijgen, is misleiden. Dan kan je hele recht op geld voor die schade vervallen. Hoeveel je dan nog krijgt, hangt af van hoe erg de leugen is. Vul dus altijd de echte prijs in. Bij een eerlijke melding haalt Zeelicht er € 50 eigen risico af."
- Sources: bw7941, bw7943
- Note: Revision 1 (gate P12, T7, W5): four options of nearly equal length (48 to 51 characters), two "Ja" and two "Nee". Option c ("krijgt ze alles vergoed") states a sure outcome the law does not give, and no longer names € 650, which ignored the € 50 eigen risico of b3. d keeps "kan" (lid 5 "behoudens voor zover ... niet rechtvaardigt"); the explanation's third sentence says the same in B1. The last sentence uses b3 and says only what the fictional polisblad says.

### Cijfer kamer 4
- Clue: "Het 4e cijfer van het slot: stel, je ontdekt schade op 1 augustus. Je moet melden uiterlijk 7 dagen na de dag van ontdekken. Welke dag in augustus is dat?"
- Digit: **8** (1 + 7; all facts are in the clue; `clueDocs: ['kvw']`). Revision 1 (gate P8): a new case, so the clue does not repeat the answer of V4.1; the digit stays 8.
- Clue retry: "Tel 7 dagen op bij 1 augustus."
- Remember: "Meld schade snel, stuur het bewijs mee en vul alles eerlijk in."

---

## Plan: Mijn verzekeringscheck

The plan is personal: each pupil makes their own, on paper and, if they want, on the end screen. The screen version uses the existing engine plan (`when`, `then`, `within`, own text). It stays on the screen only: never logged, never sent, never stored. The paper slip stays with the pupil; the teacher does not collect it. Many havo 4 and vwo 5 pupils are not 18 yet, and most havo 5 and vwo 6 pupils are, so every line works before and after 18.

Engine data:
- `plan.intro`: "Kies één ding dat je gaat checken. Zet er een moment bij."
- `plan.when`: ["ik vandaag thuis ben", "het weekend is", "ik 18 word"]
- `plan.then`: ["vraag ik of ik via de aansprakelijkheidsverzekering van thuis verzekerd ben", "lees ik op een polis van thuis wat er bij 'Wie is verzekerd' staat", "zoek ik op hoe hoog het verplicht eigen risico is"]
- `plan.within`: ["een dag", "een week", "twee weken"]
- Own text field (existing): pupils may type their own "dan".

Paper slip `slip` "Mijn verzekeringscheck" (optional, one per pupil, two per A4; printed from the teacher screen with the existing "Print plan-strookjes"; `screen` not set, so the end screen shows a read-only reminder). Slip intro (`slip.intro`): "Dit is van jou. Je hoeft het aan niemand te laten zien." Six fields:
"Mijn verzekeringscheck
1. Ik woon nu: thuis / op kamers / anders (omcirkel)
2. Ik ben 18, of ik word 18 in de maand: ...
3. Ben ik verzekerd via de aansprakelijkheidsverzekering van thuis? ja / nee / weet ik niet (omcirkel). Zo check ik dat: ...
4. Ga ik op kamers? Dan check ik of mijn spullen daar verzekerd zijn: ja / nee / nog niet nodig (omcirkel)
5. Staat er straks een scooter, brommer, motor of auto op mijn naam? Dan regel ik een WA-verzekering: ja / nee (omcirkel)
6. Eén vraag die ik stel aan iemand thuis of aan mijn mentor: ...
Regels: Rijksoverheid.nl (zorgverzekering, WA-verzekering). Bij je eigen polis: lees 'Wie is verzekerd' en 'Wat is niet verzekerd'."

Field 2 (gate P13) works for pupils who are 18 already ("Ik ben 18") and asks only a month, not a full date. Fields 3 and 4 of the first version are merged into field 3 (gate P14). The slip asks no policy number, insurer name, health or money detail. "Thuis" and "iemand thuis" are neutral on purpose (care point 1). Data: field 1 label "Ik woon nu:", hint "thuis / op kamers / anders (omcirkel)", lines 0; field 2 lines 1; field 3 label up to "thuis?", hint the rest, lines 1; fields 4 and 5 label up to the colon, hint the choices, lines 0; field 6 lines 2.

---

## Start- en eindcheck: twee parallelle vormen, A en B (elk 4 vragen, één per kamer, enkele keuze, score 0 tot 4)

No feedback during the check. Each question works without the room's documents and rule box. Question n of form A and question n of form B test the same rule at the same difficulty with a different case. Counterbalance as in ESC-KAMER. No check item repeats a room question: room 1 asks a scooter, the checks a brommer and a pupil without a vehicle; room 2 asks Noor's phone, Daan's laptop and a borrowed console, the checks an own laptop and a friend's phone; room 3 asks € 500 vrijwillig, the checks € 300 and € 100; room 4 asks a laptop price, the checks a bike bag and a fake theft. In each form no letter is right more than twice in a row (A: a, c, b, b; B: b, b, a, c).

### Vorm A

| # | Kamer | Vraag | Opties | Goed | Regel en bron |
|---|---|---|---|---|---|
| C1 | 1 Moet of mag | "Je bent 19. Je hebt een brommer op je naam en rijdt er elke dag mee. Welke verzekering moet je voor de brommer hebben?" | a Een WA-verzekering; b Een cascoverzekering; c Geen: dat kies je zelf | a | WA verplicht (roWA, wam) |
| C2 | 2 Polis | "Je hebt een aansprakelijkheidsverzekering. Je laat je eigen laptop vallen. Betaalt die verzekering de schade?" | a Ja, want het was per ongeluk; b Nee, want alleen schade aan mensen telt; c Nee, want het zijn je eigen spullen | c | AVP: schade bij een ander (wig, bw6162) |
| C3 | 3 Eigen risico | "Je bent 20. Het verplicht eigen risico is in 2027 € 400. Je kiest € 300 vrijwillig extra. Hoeveel eigen risico heb je dan in totaal?" | a € 100; b € 700; c € 300 | b | € 400 + vrijwillig (stcrt34372, zvw20, roER) |
| C4 | 4 Melden | "Je fiets is gestolen. Je meldt dat er ook een dure fietstas aan hing. Dat is niet waar. Wat zegt de wet?" | a Een kleine leugen mag, want de fiets is echt gestolen; b Dat is misleiden. Je kunt je recht op geld verliezen; c De verzekeraar moet de fiets dan toch altijd betalen | b | misleiden (bw7941 lid 5) |

### Vorm B

| # | Kamer | Vraag | Opties | Goed | Regel en bron |
|---|---|---|---|---|---|
| B1 | 1 Moet of mag | "Je bent 18, woont in Nederland en zit op school. Je hebt geen scooter, brommer, motor of auto. Welke verzekering moet je hebben?" | a Een aansprakelijkheidsverzekering; b Een basisverzekering voor zorg; c Een inboedelverzekering | b | basis verplicht (roVerplicht, zvw2) |
| B2 | 2 Polis | "Je stoot per ongeluk de telefoon van een vriendin van tafel. Je bent aansprakelijk. Je had de telefoon niet geleend. Betaalt je aansprakelijkheidsverzekering?" | a Nee, want je had moeten opletten; b Ja, want de telefoon is van een ander; c Ja, maar alleen als je vriendin het niet zelf kan betalen | b | AVP: schade bij een ander (wig, bw6162) |
| B3 | 3 Eigen risico | "Je bent 22. Het verplicht eigen risico is in 2027 € 400. Je kiest € 100 vrijwillig extra. Hoeveel eigen risico heb je dan in totaal?" | a € 500; b € 100; c € 300 | a | € 400 + vrijwillig (stcrt34372, zvw20, roER) |
| B4 | 4 Melden | "Je telefoon is kapot gevallen. Alleen diefstal is verzekerd. Daarom meld je dat hij gestolen is. Wat zegt de wet?" | a Een kleine leugen mag, want de telefoon is echt kapot; b De verzekeraar moet de telefoon dan toch betalen; c Dat is misleiden. Je kunt je recht op geld verliezen | c | misleiden (bw7941 lid 5) |

Parallel checks: C1 and B1 ask which insurance the law demands, one with and one without a vehicle; B1 says "woont in Nederland en zit op school" so the r2 exceptions cannot apply, C1 "rijdt er elke dag mee" so the RDW schorsing cannot. C2 and B2 test whose property is damaged; B2 says "Je bent aansprakelijk" and "niet geleend" so fault and lending cannot muddle it. In C2 the right "Nee" stands next to another "Nee", in B2 the right "Ja" next to another "Ja" (gate X3). C3 and B3 now state the 2027 amount, so the item tests the word "extra" (gate X1); the distractors are the vrijwillig amount alone and the difference (400 minus the extra), so the right answer is never the sum of the other two options. C4 and B4 test misleading with a different lie; their options are of equal length (gate X2), and the right option is worded differently from V4.3 ("Nee, want dan kan ze ...") so a pair cannot match it from memory of the room. Gate X4 (gloss "WA" inside C1) is not applied: B1 has no counterpart term, so the forms would stop being parallel; room 1 explains WA, which is what the end check measures.

Score: 1 point per right answer, 0 to 4, before and after, shown per pair on the end screen.

---

## Lesplan voor de docent (45 minuten)

Teacher screen, first line (`teacher.audience`): "Voor havo 4 en 5 en vwo 5 en 6. Kamer 3 oefent economie (domein G, Risico en verzekeren). De andere kamers gaan over wat je regelt als je 18 wordt."
Second line (`teacher.audience`, persona gate T1, M1, M2): "Gecontroleerd op 7 november 2026, volgende controle op 2 januari 2027. Het verplicht eigen risico voor 2027 is € 400 (Staatscourant, 30 september 2026). Staat op Rijksoverheid.nl nog € 385? Dan is die pagina niet bijgewerkt. Het verhaal speelt in 2027: gebruik de les in schooljaar 2026-2027."

| Lesminuut | Duur | Onderdeel | Wat je doet |
|---|---|---|---|
| 0 tot 4 | 4 | Uitleg en inloggen | Zet de link en de klascode al op het bord voordat de les begint. Zeg: de verhalen, de polissen en de bedragen zijn verzonnen. De wet is echt. Bij een echte polis kan het anders staan. Deze les raadt geen verzekering aan. Leerlingen werken met z'n tweeën op één scherm. Deel de papiertjes "Mijn verzekeringscheck" uit als je ze gebruikt. |
| 4 tot 6 | 2 | Startcheck | Elk tweetal beantwoordt vier vragen (vorm A of B) voordat de klok start. Geef geen hints. |
| 6 tot 32 | 26 | Escape | Start de klastimer. Tweetallen spelen vier kamers en schrijven elk cijfer op. Klaar voor de tijd? Geef de extra rekenvraag van kamer 3. Zeg niet wat slim is. |
| 32 | | Stop | Op minuut 32 stopt iedereen, ook wie nog niet klaar is. Lees de cijfers voor van je geprinte antwoordblad. Alle tweetallen doen daarna de eindcheck. |
| 32 tot 35 | 3 | Stop en eindcheck | De andere vorm: vier vragen over dezelfde regels. Daarna ziet elk tweetal wat het goed had, voor en na. |
| 35 tot 39 | 4 | Nabespreken | Vraag met handopsteken: wie had bij de startcheck 3 of 4 goed? En bij de eindcheck? Vraag welke kamer het lastigst was en begin daar. |
| 39 tot 44 | 5 | Mijn verzekeringscheck | Iedereen kiest zijn eigen plan of vult het papiertje in. Niemand hoeft iets voor te lezen. Stel daarna de slotvraag. |
| 44 tot 45 | 1 | Reserve | Voor inloggen dat uitloopt. De escape stopt altijd op minuut 32. |

Total 45 minutes: 4 + 2 + 26 + 3 + 4 + 5 + 1 = 45. `minutes: 26`.
Materials: een apparaat per tweetal (laptop, Chromebook of telefoon), pen en papier voor de cijfers, een digibord of beamer. Print het papiertje vóór de les als je het gebruikt: 1 per leerling. Voor kamer 3 mag een rekenmachine.

Why the Route 18 timing (stop at minute 32) is kept: the same 26-minute escape and 5-minute plan fit, and teachers who know one lesson know the other. The persona gate estimates about 20 minutes for an average havo 4 pair and 24 for a weaker pair (room texts are lighter than Route 18). Room 3 is third, not last, so slow pairs still meet the economie core before the stop. A pair stopped in room 4 misses the claim rules; the end check C4/B4 and the debrief cover them.

Tip voor de docent: Een fout antwoord wordt doorgestreept. Een tweetal kan dus gokken tot het goed is. Het telt dan alleen niet mee bij "In één keer goed". Vertel de klas dat goed lezen sneller gaat.

Care points ("Let op"):
1. "Niet iedereen woont bij ouders of heeft thuis verzekeringen. Niet elk gezin heeft een aansprakelijkheids- of inboedelverzekering. Dat is geen fout. Laat niemand vertellen hoe het thuis zit. Het papiertje is van de leerling: niet inleveren."
2. "Deze les raadt geen verzekering en geen verzekeraar aan. Zeg niet wat slim is. Of je je verzekert, hangt af van je geld en hoe erg je risico vindt."
3. "Vraag niet naar zorgkosten of ziektes van leerlingen. Kamer 3 gaat over Noor."
4. "Veel leerlingen zijn nog geen 18. Voor hen geldt nog geen eigen risico. Zeg erbij dat kamer 3 vooruitkijkt."
5. "Alleen voor de economiedocent: kamer 3 oefent het verwachte schadebedrag en de afweging tussen eigen risico en premiekorting. Het eigen risico is ook een middel tegen moral hazard. Kamer 1 past bij averechtse selectie: een verplichte verzekering gaat die tegen. Havo 2027: G1.1, G1.4, G2.2 en G2.3. Vwo 2027 (conceptsyllabus): G4.1, G4.2, G4.4 en G4.5. Bij vwo 6 is de winst in de check vaak klein. Kijk vooral naar vraag 3."
6. "Kamer 4 gaat over een inbraak. Heeft een leerling dat meegemaakt? Laat die leerling zelf kiezen of hij meedoet."

Note for developers: the stop at minute 32 uses the existing engine stop flow. The digits are never on the open lesson plan.

### Voor de docent, per kamer

Kern (`teacherNote`):
- Kamer 1: "Verplicht: de basisverzekering voor zorg en de WA voor een voertuig op je naam dat je gebruikt. De rest kies je zelf."
- Kamer 2: "Lees wat verzekerd is én wat niet. Een aansprakelijkheidsverzekering is voor schade bij een ander."
- Kamer 3: "Eigen risico 2027: € 400. Niet voor een huisartsbezoek, meestal wel voor het ziekenhuis. Hoger eigen risico: korting, maar meer risico."
- Kamer 4: "Meld schade snel, met bewijs, en eerlijk."

Dit wordt vaak gevraagd (`teacher.faq`):
- "Op Rijksoverheid.nl staat € 385 voor 2027. Wat klopt?" Antwoord: "De officiële regeling in de Staatscourant zegt € 400 voor 2027 (Stcrt. 2026, 34372). Die geldt. De Rijksoverheid-pagina was op 7 november 2026 nog niet aangepast. Ook het voorbeeld van € 885 op die pagina is van 2026. In 2027 is het hoogste eigen risico € 400 + € 500 = € 900. Ook het kabinet schreef op Prinsjesdag 2026: van € 385 naar € 400."
- "Ben ik nog via mijn ouders verzekerd als ik op kamers ga?" Antwoord: "Dat verschilt per polis. Kijk in de voorwaarden bij 'Wie is verzekerd'. Of vraag het de verzekeraar."
- "Ben je pas vanaf 18 zelf aansprakelijk?" Antwoord: "Nee. Vanaf 14 jaar kun je zelf aansprakelijk zijn. Tot je 16e kunnen ook je ouders aansprakelijk zijn."
- "Wat is het verschil tussen WA en een aansprakelijkheidsverzekering?" Antwoord: "WA is voor schade met je scooter of auto bij een ander. De aansprakelijkheidsverzekering is voor andere schade die je bij een ander maakt."
- "Moet ik als 17-jarige al een zorgverzekering hebben?" Antwoord: "Ja. Een basisverzekering is er voor elke leeftijd. Onder 18 regelt een ouder die. Vanaf 18 is het je eigen verzekering, en geldt het eigen risico."
- "Mijn ouders hebben geen aansprakelijkheidsverzekering. Wat nu?" Antwoord: "Die is niet verplicht. Maak je schade en ben je aansprakelijk, dan betaal je die zelf. Wil je dat verzekeren, dan kies je zelf een polis."
- "Kan ik het eigen risico in delen betalen?" Antwoord: "Ja, vraag je zorgverzekeraar om een betalingsregeling."
- "Is een telefoonverzekering slim?" Antwoord: "Dat kies je zelf. Vraag je eerst af of je de kosten zelf kunt betalen. Lees daarna goed de voorwaarden. Kijk ook of je telefoon al onder een andere polis valt."
- "Wat gebeurt er als je te laat meldt?" Antwoord: "De verzekeraar kan minder betalen als hij daardoor schade heeft. Niets krijgen kan in twee gevallen. De polis zegt het en de verzekeraar heeft echt nadeel. Of je meldt te laat om de verzekeraar te misleiden."
- "Moet een speedpedelec ook een WA-verzekering hebben?" Antwoord: "Ja. Rijksoverheid noemt de speedpedelec bij de voertuigen met een verplichte WA-verzekering."

Bronnen en uitzonderingen (`teacherDetail`, closed; each point from the source table):
- Kamer 1: Basisverzekering verplicht voor wie in Nederland woont of werkt (Rijksoverheid; Zvw art. 2 lid 1), op elke leeftijd; voor een minderjarige zorgt de ouder met gezag ervoor (Zvw art. 2 lid 3). Uitzonderingen: militaire ambtenaar in werkelijke dienst en wie van de SVB een ontheffing wegens gemoedsbezwaren heeft (Zvw art. 2 lid 2; Rijksoverheid). Zonder ontheffing van de SVB ben je niet gemoedsbezwaard; de ontheffing is persoonlijk en geldt per gezinslid; je betaalt dan een bijdragevervangende belasting en het CAK vergoedt zorgkosten uit je saldo (CAK). Rijksoverheid noemt ook mensen die via een Europese instelling (GSZV) of een internationale organisatie verzekerd zijn: zij hebben geen recht op een Nederlandse basisverzekering. Voor buitenlandse studenten hangt het af van waar ze vandaan komen en wat ze naast hun studie doen. Aanvullende verzekering niet verplicht (Rijksoverheid). WA-verzekering verplicht voor de bezitter en voor wie op het kenteken staat, als het motorrijtuig op de weg staat of rijdt, of op naam staat (WAM art. 2 lid 1); ook bij duurzaam gebruik zonder eigendom (Rijksoverheid; WAM art. 2 lid 2); niet zolang het voertuig bij de RDW geschorst is (WAM art. 2 lid 3). Rijksoverheid noemt auto, motor, scooter, brommer, speedpedelec en snorfiets. Aansprakelijkheid, inboedel en reis zijn niet verplicht (Wijzer in geldzaken, secundair). Bijzondere gevallen met een verplichte aansprakelijkheidsverzekering (bijvoorbeeld bij een jachtakte) zijn niet gecontroleerd. Uitwonende kinderen op de polis van de ouders: per verzekeraar anders; vaak genoemde voorwaarden zijn voltijd studeren, ongehuwd, ingeschreven in Nederland en soms een leeftijdsgrens (twee commerciële pagina's, alleen ter controle gelezen, niet genoemd in de les).
- Kamer 2: Een aansprakelijkheidsverzekering betaalt alleen als je aansprakelijk bent: bij een onrechtmatige daad die je kan worden toegerekend (BW 6:162). Is niemand iets te verwijten, dan hoeft niemand te betalen en betaalt ook de verzekering niet. Vanaf 14 jaar kun je zelf aansprakelijk zijn (BW 6:164); voor 14- en 15-jarigen zijn de ouders ook aansprakelijk, tenzij hun niets te verwijten is (BW 6:169 lid 2). Opzet: "De verzekeraar vergoedt geen schade aan de verzekerde die de schade met opzet of door roekeloosheid heeft veroorzaakt" (BW 7:952); dit is regelend recht, dus een polis kan het anders regelen. Schade met een motorrijtuig valt onder de WA (WAM art. 3 lid 1); schade aan de bestuurder zelf hoeft de WA niet te dekken (WAM art. 4 lid 1). Eigen schade: casco (Wijzer in geldzaken). Echte polissen dekken geleende of gehuurde spullen soms wel, soms tot een bedrag: dat is niet gecontroleerd en staat daarom niet in de les.
- Kamer 3: Antwoord op de extra rekenvraag: € 640. Zonder vrijwillig eigen risico betaal je hoogstens € 400. Met € 500 extra betaal je tot € 900, min € 240 korting. Bij € 640 zorgkosten is dat € 640 min € 240 = € 400: even duur. Bij meer zorgkosten is het vrijwillig eigen risico duurder, bij minder goedkoper. Verplicht eigen risico vanaf 18 jaar per kalenderjaar (Zvw art. 19 lid 1); voor 2027 vastgesteld op € 400 (Stcrt. 2026, 34372); in 2026 € 385. De extra verhoging met € 60 (wetsvoorstel 36 943) is een jaar uitgesteld (toelichting bij Stcrt. 2026, 34372). Buiten het verplicht eigen risico (Bzv art. 2.17 lid 1): verloskundige zorg en kraamzorg, de NIPT, huisartsenzorg (ook de huisartsenpost, Rijksoverheid), multidisciplinaire eerstelijnszorg met huisartsenzorg (ketenzorg), advies dat de huisarts vraagt, de gecombineerde leefstijlinterventie, zorg aan donoren na de periode van art. 2.5, vervoer bij donatie, wijkverpleging (art. 2.10). Onderzoek in een lab na een huisartsbezoek kan wel van je eigen risico af gaan (Rijksoverheid). De spoedeisende hulp valt vanaf 18 onder het eigen risico; zonder noodzaak of verwijzing betaal je de kosten zelf (Rijksoverheid). De verzekeraar kan zorgaanbieders, programma's, medicijnen en hulpmiddelen uitsluiten van het eigen risico (Bzv art. 2.17 lid 2). Rekeningen tellen mee als de verzekeraar ze vóór 31 december van het jaar erna ontvangt (Zvw art. 19 lid 4; Bzv art. 2.17 lid 3). Vrijwillig eigen risico € 100 tot € 500 in stappen van € 100, met premiekorting die de verzekeraar in zijn modelovereenkomst zet (Zvw art. 20). Begint of eindigt je verzekering niet op 1 januari, dan geldt een deel van het eigen risico naar het aantal dagen (Zvw art. 22). Je kunt bij je verzekeraar een betalingsregeling vragen om het eigen risico in termijnen te betalen (Rijksoverheid). Onder 18 geen eigen risico (Rijksoverheid). Waarom een eigen risico: de premie blijft lager en je wordt bewuster van de kosten (Rijksoverheid), in economietaal: een middel tegen moral hazard (syllabus G2.3).
- Kamer 4: Meldingsplicht: "zo spoedig als redelijkerwijs mogelijk is" (BW 7:941 lid 1); inlichtingen en bescheiden geven "binnen redelijke termijn" (lid 2). Niet nagekomen: de verzekeraar kan de uitkering verminderen met de schade die hij daardoor lijdt (lid 3); verval van het hele recht kan alleen worden bedongen als de verzekeraar "daardoor in een redelijk belang is geschaad" (lid 4). Misleiden met opzet: het recht vervalt, behalve voor zover de misleiding dat niet rechtvaardigt (lid 5). Dat geldt ook als je met dat opzet te laat meldt of iets niet stuurt (lid 5 verwijst naar lid 1 en 2). Van lid 1, 2, 4 en 5 mag een polis niet ten nadele van de verzekerde afwijken (BW 7:943 lid 2). Een vordering op de verzekeraar verjaart na drie jaar (BW 7:942 lid 1). Bij het afsluiten moet je eerlijk zijn over feiten die de verzekeraar wil weten (mededelingsplicht, BW 7:928); met een vragenlijst gaat het om de gestelde vragen (lid 6); de gevolgen staan in BW 7:930. De bereddingsplicht: doe wat redelijk is om schade te beperken (BW 7:957). Klachten over een verzekeraar: de pagina's van Kifid en de politie konden niet worden gelezen (zie Onzeker); daarom noemt de les geen klachtroute en geen aangifteprocedure.

## Antwoordblad

Answers are given as the text on screen, without letters.

| Kamer | Vraag | Goed antwoord |
|---|---|---|
| 1 | Verplicht voor Noor | Basisverzekering zorg; WA-verzekering scooter |
| 1 | Op kamers | De aansprakelijkheidsverzekering, maar de inboedelverzekering niet |
| 1 | Sem | Nee, want hij studeert niet |
| 1 | **Cijfer** | **2** (basisverzekering en WA) |
| 2 | Wat betaalt de verzekering | Noor stoot bij Daan thuis zijn laptop van tafel. Ze lette niet op.; Noor fietst tegen een geparkeerde auto. De auto krijgt een deuk. |
| 2 | Geleende spelcomputer | Nee, artikel 3c: Noor had de spelcomputer geleend |
| 2 | Scooter tegen auto | De WA-verzekering van haar scooter |
| 2 | **Cijfer** | **3** (artikel 3) |
| 3 | Wadlicht betaalt | € 70 (€ 470 min € 400) |
| 3 | Vrijwillig eigen risico | € 170 lager |
| 3 | Verwacht schadebedrag | € 25 |
| 3 | **Cijfer** | **4** (€ 100 / € 25) |
| 4 | Uiterlijk melden | Vrijdag 8 oktober 2027 |
| 4 | Wat moet nog | Aangifte doen bij de politie en een kopie meesturen; Een bankafschrift van de aankoop meesturen |
| 4 | Hoger bedrag opschrijven | Nee, want dan kan ze haar recht op geld verliezen |
| 4 | **Cijfer** | **8** (1 + 7 augustus) |
| | **Code** | **2348** |

Start- en eindcheck vorm A: A1 Een WA-verzekering; A2 Nee, want het zijn je eigen spullen; A3 € 700; A4 Dat is misleiden. Je kunt je recht op geld verliezen. Vorm B: B1 Een basisverzekering voor zorg; B2 Ja, want de telefoon is van een ander; B3 € 500; B4 Dat is misleiden. Je kunt je recht op geld verliezen.

(The line under the table names form A "A1 to A4", as the Route 18 answer sheet does, gate M8; the check item ids in the data stay C1 to C4, the convention spec-compare and the engine use for form A. The extra rekenvraag of room 3 is not a lock question; its answer is in the teacher detail of room 3.)

## Nabespreken

Drie gespreksvragen (kies er één of twee als de tijd kort is):
1. "Welke verzekering verraste je: omdat hij verplicht is, of juist niet?"
2. "Wat zou jij op een polis van thuis willen nakijken?"
3. "Wanneer zou jij een hoger eigen risico kiezen, en wanneer niet?"

Per kamer (`discuss`):
- Kamer 1: "Wat verandert er aan je verzekeringen als je op kamers gaat?"
- Kamer 2: "Je leent iets van een vriend en het gaat kapot. Wie betaalt, en hoe spreek je dat af?"
- Kamer 3: "Extra rekenvraag voor snelle tweetallen: Noor kiest € 500 vrijwillig eigen risico en krijgt € 240 korting per jaar. Bij welke zorgkosten is dat even duur als niet kiezen?"
- Kamer 4: "Waarom is eerlijk invullen ook in je eigen belang?"

Slotvraag: "Noem één verzekering die verplicht is en één die je zelf kiest. Wat check jij deze week?"

Note: question 3 asks for reasons, not for a right choice (G1.2: the choice depends on risk aversion and own means). The room 3 prompt is the break-even question of gate T4 (answer € 640, teacher detail); the old room 3 prompt about phone insurance moved out, since it was the one prompt that could slide into advice (gate M7).

---

## Engine fit

Supported now, no change needed (README, `lessons/route-18.js`): `table` with `head` (tafel, zorg), `table` rows (blad, formulier), `contract` (wie, avp, kvw), `listing` with `site`, `price` and `facts` (tel), `plain` per document, room `rules` with numbered lines, `multi`, `single` and `number` with `unit: '€'`, `situ`, `pointTo` with `doc`/`lines`, `rule`/`rules`, `situ` and `plain`, `legend`, `clueFull`, `clueDocs` (with `'rules'` in room 1), `clueRetry`, `where` (the date of the room heading), `teacherNote`, `teacherDetail`, `discuss`, `sources`/`sourceNone`, check forms A/B, the stop flow at minute 32, `teacher.plan` with `from`/`to`/`at`, `teacher.audience`, `teacher.faq`, `materials`, `tip`, `care`, `answers` with `format: 'text'`, the plan with `when`, `then`, `within` and own text, and `slip` (six fields).

No feature is a release blocker. Checks for the data file:
1. Fixed shuffles: V1.2, V1.3, V2.2, V2.3, V3.2, V4.1 and V4.3 (four options each). After the shuffle no letter of a right answer is in the same screen place more than twice in a row.
2. `pointTo: { plain }` for V3.3 must match the gloss on doc tel word for word.
3. No option, prompt, nudge, hint or explanation uses "beide", "allebei", "geen van", "bovenstaande", "optie c" or "antwoord c" (checked by script), so no question needs `keepOrder`.
4. `.example` address in `listing.site` is plain text. The euro sign and "×" in explanations are not dashes.

Not supported, noted for the engine team (persona gate M8, M9, T4; not built now because `src/` is being changed by another agent): an optional question outside the lock (V3.4 break-even; now the room 3 `discuss` prompt); a pointer text for "one right, one missing" on multi questions; a notice at timer 00:00; the paper set's split of questions and answers over separate print jobs and the "no hint on paper" line. The answer sheet's check key is made from the check data (README).

---

## Brontabel

Pages read on 7 November 2026 with curl (HTML converted to text) or WebFetch. Law texts were downloaded today as BWB XML from repository.officiele-overheidspublicaties.nl (the consolidated version that wetten.overheid.nl redirected to today) and quoted from that XML. Staatscourant texts were downloaded as XML from zoek.officielebekendmakingen.nl. "Valid until": when the rule is next expected to change; "check" means the next scheduled check.

| Key | Rule (as used) | Source 1 | Source 2 | Checked | Valid until |
|---|---|---|---|---|---|
| roVerplicht / zvw2 | Basisverzekering verplicht for anyone who lives or works in the Netherlands; aanvullend not compulsory; exceptions: militairen in werkelijke dienst, gemoedsbezwaarden; parents arrange it for minors. | [Rijksoverheid, Ben ik verplicht een zorgverzekering af te sluiten?](https://www.rijksoverheid.nl/themas/familie-zorg-en-gezondheid/zorgverzekering/vraag-en-antwoord/zorgverzekering/ben-ik-verplicht-een-zorgverzekering-af-te-sluiten) ("Een basisverzekering is verplicht, een aanvullende verzekering niet."; "Wie in Nederland woont of werkt, moet een basisverzekering afsluiten."; "Wilt u wegens uw geloof geen zorgverzekering? Dan hoeft u geen zorgverzekering af te sluiten."; modified 28 Jul 2026) | [Zvw, BWBR0018450, version from 1 Jan 2026](https://wetten.overheid.nl/BWBR0018450/2026-01-01), art. 2 lid 1 ("is verplicht zich krachtens een zorgverzekering te verzekeren"), lid 2 a and b (militaire ambtenaar in werkelijke dienst; ontheffing art. 64 Wfsv), lid 3 (ouder met gezag over een minderjarige). Same Rijksoverheid page, teacher detail: "Als u bij het GSZV verzekerd bent, heeft u geen recht op een Nederlandse basiszorgverzekering."; "Werkt u in Nederland bij een internationale organisatie en bent u bij deze organisatie verzekerd? Dan heeft u geen recht op een Nederlandse basisverzekering."; foreign students: "Hoe u zich in Nederland kunt verzekeren, hangt af van waar u vandaan komt. En wat u verder doet naast uw studie." (re-read 7 Nov 2026) | 7 Nov 2026 | No set date |
| cakGemoed | Gemoedsbezwaarden are exempt only with an ontheffing from the SVB; personal, per family member; then bijdragevervangende belasting and no zorgtoeslag. | [CAK, Regeling gemoedsbezwaarden](https://www.hetcak.nl/regelingen/gemoedsbezwaarden) ("Bij de Sociale Verzekeringsbank (SVB) vraagt u een ontheffing van de verzekeringsplicht aan."; "Daarna ontvangt u van de SVB de verklaring 'Ontheffing wegens gemoedsbezwaren'."; "De ontheffing is persoonlijk."; "Doet u dat niet? Dan is die persoon niet gemoedsbezwaard. Voor dat gezinslid moet u dan een zorgverzekering nemen."; read 7 Nov 2026, Revision 2) | Zvw art. 2 lid 2 b (ontheffing under art. 64 Wfsv); the SVB page (svb.nl/nl/gemoedsbezwaren) returned 403 | 7 Nov 2026 | No set date |
| roMis | A zorgverzekering is compulsory at every age; SEH falls under the eigen risico from 18; lab costs after a huisarts visit can count; huisartsenpost without eigen risico. | [Rijksoverheid, Misverstanden zorgverzekering](https://www.rijksoverheid.nl/themas/familie-zorg-en-gezondheid/zorgverzekering/vraag-en-antwoord/zorgverzekering/misverstanden-zorgverzekering) ("Een zorgverzekering is verplicht voor alle leeftijden."; "Een behandeling bij de spoedeisende hulp valt voor iedereen vanaf 18 jaar onder het verplicht eigen risico."; "Wel kunnen onderzoeken die een huisarts doet gevolgen hebben voor het eigen risico, bijvoorbeeld laboratoriumkosten bij bloedonderzoek."; "Voor een bezoek aan de huisartsenpost hoeft u geen eigen risico te betalen."; modified 3 Mar 2026) | roER, bzv217 | 7 Nov 2026 | No set date |
| roAanv | Aanvullende verzekering: your own choice. | [Rijksoverheid, Heb ik een aanvullende zorgverzekering nodig?](https://www.rijksoverheid.nl/themas/familie-zorg-en-gezondheid/zorgverzekering/vraag-en-antwoord/zorgverzekering/heb-ik-een-aanvullende-zorgverzekering-nodig) ("U bepaalt zelf of u een aanvullende verzekering nodig heeft."; modified 2 Jan 2026) | roVerplicht | 7 Nov 2026 | No set date |
| roWA / wam | WA-verzekering compulsory for the owner of an auto, motor, scooter, brommer, speedpedelec or snorfiets, or when the kenteken is on your name; also for durable use; not while geschorst at the RDW; the WA covers civil liability; need not cover damage to the driver. | [Rijksoverheid, WA-verzekering voertuig](https://www.rijksoverheid.nl/themas/verkeer-en-vervoer/voertuigen-op-de-weg/vraag-en-antwoord/auto/wa-verzekering-voertuig) ("Heeft u een auto, motor, scooter, brommer of snorfiets? Dan moet u volgens de Wet aansprakelijkheidsverzekering motorrijtuigen (Wam) een WA-verzekering afsluiten."; list "scooter, brommer, speedpedelec of snorfiets"; "U hoeft dan tijdelijk niet WA-verzekerd te zijn."; modified 7 Sep 2026) | [WAM, BWBR0002415, version from 24 Jul 2025](https://wetten.overheid.nl/BWBR0002415/2025-07-24): art. 2 lid 1 ("De bezitter van een motorrijtuig en degene op wiens naam dit in het kentekenregister is ingeschreven, zijn verplicht ... een verzekering te sluiten"), lid 2 c (duurzaam gebruik), lid 3 (buitengebruikstelling, schorsing); art. 3 lid 1 ("de burgerrechtelijke aansprakelijkheid"); art. 4 lid 1 ("De verzekering behoeft niet te dekken de aansprakelijkheid voor schade toegebracht aan de bestuurder") | 7 Nov 2026 | No set date |
| wig | Secondary, semi-official. Compulsory: zorgverzekering and WA; casco covers your own damage; AVP pays damage you cause by accident to another; inboedel covers your things at home; AVP, inboedel, reis not compulsory; first ask whether you can pay the cost yourself; read the voorwaarden. | [Wijzer in geldzaken, Alles over verzekeringen (PDF, created 6 Nov 2026)](https://www.wijzeringeldzaken.nl/verzekering/alles-over-verzekeringen/alles-over-verzekeringen.pdf) ("Deze verzekeringen zijn niet verplicht, maar het is wel slim om ze te hebben"; "De aansprakelijkheidsverzekering voor particulieren vergoedt de schade die je per ongeluk veroorzaakt bij een ander."; "De spullen in je huis verzeker je met een inboedelverzekering."; "Je kunt je WA-verzekering uitbreiden met een casco-dekking. Dan is ook jouw schade verzekerd."; "vraag je eerst af of je de kosten niet zelf kunt betalen. En kijk daarna goed naar de voorwaarden."). National platform for money education (its governance was not re-checked today); not on the brief's list of official sources, so treated as secondary. Its line "Een zorgverzekering is verplicht voor iedereen die 18 jaar of ouder is" is not used (conflicts with roMis). | none official for "AVP, inboedel, reis, telefoon niet verplicht": no such duty was found in the laws read (Zvw, WAM, BW 6 and 7) | 7 Nov 2026 | No set date |
| commAvp (teacher only) | Commercial pages. Real family policies cover uitwonende kinderen under conditions that differ (studying, unmarried, registered in NL, sometimes an age limit). | Promovendum, "thuiswonende en uitwonende kinderen meeverzekerd" (read by WebFetch: "tot 24 jaar meeverzekerd"; "ongehuwd is en geen geregistreerd partnerschap heeft"; full-time study elsewhere allowed) | NN, "Kind gaat uit huis" (read by WebFetch: "Dan blijven ze meestal meeverzekerd op jouw aansprakelijkheidsverzekering."; "Dit kun je controleren in je polisvoorwaarden.") | 7 Nov 2026 | Not a rule; never shown or named in the lesson; no insurer is recommended |
| bw6162 | Liability: an onrechtmatige daad that can be attributed obliges you to pay the damage; under 14 not attributed to the child; parents liable for 14 and 15-year-olds unless not blameworthy. | [BW Boek 6, BWBR0005289, version from 16 Jul 2026](https://wetten.overheid.nl/BWBR0005289/2026-07-16), art. 6:162 lid 1 ("Hij die jegens een ander een onrechtmatige daad pleegt, welke hem kan worden toegerekend, is verplicht de schade die de ander dientengevolge lijdt, te vergoeden."), lid 3 (schuld) | art. 6:164 ("Een gedraging van een kind dat de leeftijd van veertien jaren nog niet heeft bereikt, kan aan hem niet als een onrechtmatige daad worden toegerekend."); art. 6:169 lid 2 (14 to 16: ouder aansprakelijk "tenzij hem niet kan worden verweten") | 7 Nov 2026 | No set date |
| bw7952 | No compensation for damage the insured caused with intent (or recklessness); regelend recht. | [BW Boek 7, BWBR0005290, version from 8 Oct 2026](https://wetten.overheid.nl/BWBR0005290/2026-10-08), art. 7:952 ("De verzekeraar vergoedt geen schade aan de verzekerde die de schade met opzet of door roekeloosheid heeft veroorzaakt.") | art. 7:963 (lists the articles that are dwingend or semi-dwingend; 7:952 is not among them) | 7 Nov 2026 | No set date |
| stcrt34372 / zvw19 | Verplicht eigen risico from 18 per calendar year; € 400 from 1 January 2027 (was € 385 in 2026); the extra € 60 (bill 36 943) is postponed a year. | [Stcrt. 2026, 34372, Regeling VWS van 25 september 2026](https://zoek.officielebekendmakingen.nl/stcrt-2026-34372.html) (art. 1: "Het bedrag, bedoeld in artikel 19, eerste lid, van de Zorgverzekeringswet, wordt vastgesteld op € 400."; art. 2: "Deze regeling treedt in werking met ingang van 1 januari 2027."; toelichting: "(in 2026: € 385)", "het kabinet heeft de voorgenomen inwerkingtredingsdatum met een jaar uitgesteld"; published 30 Sep 2026) | Zvw art. 19 lid 1 ("Iedere verzekerde van achttien jaar of ouder heeft een verplicht eigen risico van € 385 per kalenderjaar."), lid 2 and 3 (indexation; "bij ministeriële regeling gewijzigd, waarna het in die regeling genoemde bedrag in de plaats treedt"), lid 4 | 7 Nov 2026 | 31 Dec 2027 (2028 amount still to be set; bill 36 943) |
| roPrins | Government announcement of the 2027 amount (Prinsjesdag). | [Rijksoverheid, Kabinet zet in op gezondheid en op zorg die klaar is voor de toekomst (15 Sep 2026)](https://www.rijksoverheid.nl/actueel/nieuws/2026/09/15/kabinet-zet-in-op-gezondheid-en-op-zorg-die-klaar-is-voor-de-toekomst) ("Het verplicht eigen risico gaat in 2027 met de inflatie mee en stijgt van € 385 naar € 400."; "Voor 2027 verwacht VWS een stijging van de zorgpremie met € 12,50 per maand."; modified 15 Sep 2026; read 7 Nov 2026, Revision 2) | stcrt34372 | 7 Nov 2026 | 31 Dec 2027; re-check 2 Jan 2027 |
| roER | Eigen risico from 18 for basispakket care; not for huisartsenzorg incl. huisartsenpost, verloskundige zorg, kraamzorg, ketenzorg, wijkverpleging and more; the insurer can exempt more; under 18 none; vrijwillig + € 100 to € 500 with a premium discount; betalingsregeling possible. **Says € 385 for 2027; not used for the amount.** | [Rijksoverheid, Wanneer betaal ik een eigen risico voor mijn zorg?](https://www.rijksoverheid.nl/themas/familie-zorg-en-gezondheid/zorgverzekering/vraag-en-antwoord/zorgverzekering/eigen-risico-zorgverzekering) ("huisartsenzorg (waaronder de huisartsenpost)"; "verloskundige zorg en kraamzorg"; "De zorgverzekeraar kan ook bepaalde zorgaanbieders, zorgprogramma's, medicijnen en hulpmiddelen uitsluiten van het eigen risico."; "U kunt het verplichte eigen risico vrijwillig verhogen met € 100, € 200, € 300, € 400 of € 500. De zorgverzekeraar geeft dan korting op de maandelijkse premie"; "Bijvoorbeeld voor een behandeling in het ziekenhuis."; but also "Het verplichte eigen risico voor 2026 en in 2027 is € 385." and "€ 885 (€ 500 + het verplichte eigen risico van € 385)"; modified 4 Nov 2026) | bzv217, zvw20 | 7 Nov 2026 | Re-check Dec 2026 (amount line) |
| bzv217 | Care outside the verplicht eigen risico; the insurer may exempt more; bills count if received by 31 December of the following year. | [Besluit zorgverzekering, BWBR0018492, version from 1 Jul 2026](https://wetten.overheid.nl/BWBR0018492/2026-07-01), art. 2.17 lid 1 ("a. verloskundige zorg en kraamzorg, ... c. huisartsenzorg, d. multidisciplinaire eerstelijnszorg waar huisartsenzorg deel van uitmaakt, e. advies van een zorgverlener indien de huisarts dit heeft gevraagd ..."), lid 2 (insurer may exempt for designated providers, programmes, medicines, aids), lid 3 ("De dag, bedoeld in artikel 19, vierde lid, van de wet, is 31 december.") | Stcrt. 2026, 34372, toelichting ("o.a. huisartsenzorg, wijkverpleging, verloskundige zorg en kraamzorg"); roER | 7 Nov 2026 | No set date |
| zvw20 / zvw22 | Vrijwillig eigen risico € 100, € 200, € 300, € 400 or € 500 per calendar year for 18+, against a premium discount set in the modelovereenkomst; pro rata when the insurance does not start on 1 January. | Zvw art. 20 lid 2 ("varianten van de zorgverzekering aanbieden met een vrijwillig eigen risico van € 100, € 200, € 300, € 400 of € 500 per kalenderjaar, waartegenover hij een korting op de grondslag van de premie verleent"), lid 4 | roER; Zvw art. 22 lid 1 (pro rata by days, teacher only) | 7 Nov 2026 | No set date |
| sylG1 | G1.1 risk as chance and as expected damage in euros; G1.2 the decision to insure depends on risk aversion, costs and benefits, own means; G1.4 trade-off with eigen risico and premiekorting; G2.3 eigen risico against moral hazard. | [Examenblad, Syllabus economie havo 2027, versie 2, juli 2025](https://www.examenblad.nl/2027/havo/documenten/syllabus-economie-havo) (PDF; "1.1 Het verschil tussen risico als een inschatting van mogelijke gebeurtenissen (kans) en risico als verwacht schadebedrag (in euro's)."; "1.4 Een afweging kunnen maken tussen al dan niet afsluiten van een verzekering in de relatie tot de hoogte van een eigen risico (in euro's) en/of premiekorting."; "2.2 Averechtse selectie en middelen om dit te beperken: verplichte solidariteit, het verplicht voorschrijven van een verzekering, het instellen van een collectieve verzekering."; "2.3 Moral hazard en middelen om dit te beperken: eigen risico, bonusmalussysteem, premiedifferentiatie.") | vwo syllabus not re-read today (research file cites vwo 2025) | 7 Nov 2026 | Exam year 2027; check the 2028 syllabus |
| sylVwo | vwo 2027 (concept syllabus): G4.1 risk aversion and insuring; G4.2 trade-off of costs and risk; G4.4 adverse selection, compulsory insurance; G4.5 moral hazard, eigen risico. | [Examenblad, Syllabus economie vwo 2027, concept, versie 2, juli 2025](https://www.examenblad.nl/2027/vwo/documenten/syllabus-economie-vwo-2027) (PDF, "CONCEPT SYLLABUS CENTRAAL EXAMEN 2027", "G4: Risico verzekeren"; "4.1 De betekenis van risicoaversie met betrekking tot het afsluiten van een verzekering."; "4.2 De afweging tussen kosten en risico bij verzekeren door beide transactiepartijen."; "4.4 Averechtse selectie en middelen om dit te beperken: het verplicht voorschrijven van een verzekering"; "4.5 Moral hazard en middelen om dit te beperken: bijvoorbeeld eigen risico, bonus- malussysteem."; read 7 Nov 2026, Revision 2) | sylG1 (havo); the vwo text is labelled "concept" | 7 Nov 2026 | Exam year 2027; check whether a final version replaces the concept |
| bw7941 / bw7943 | Report as soon as reasonably possible; give information and documents within a reasonable term; non-compliance: reduction by the insurer's damage; loss of the whole right only if stipulated and a reasonable interest is harmed; intent to mislead: right lapses unless not justified; lid 1, 2, 4, 5 semi-dwingend. | BW 7:941 lid 1 ("Dit geschiedt zo spoedig als redelijkerwijs mogelijk is."), lid 2 ("binnen redelijke termijn de verzekeraar alle inlichtingen en bescheiden te verschaffen"), lid 3 ("kan de verzekeraar de uitkering verminderen met de schade die hij daardoor lijdt"), lid 4 ("slechts bedingen voor het geval hij daardoor in een redelijk belang is geschaad"), lid 5 ("Het recht op uitkering vervalt indien ... met het opzet de verzekeraar te misleiden, behoudens voor zover deze misleiding het verval van het recht op uitkering niet rechtvaardigt.") | BW 7:943 lid 2 ("Van de artikelen ... 941 leden 1, 2, 4 en 5 en 942 kan niet ten nadele van de verzekeringnemer of de tot uitkering gerechtigde worden afgeweken.") | 7 Nov 2026 | No set date |
| bw7928 / bw7930 / bw7942 / bw7957 (teacher only) | Mededelingsplicht before closing; questionnaire limits it to the questions; consequences; 3-year limitation; duty to limit damage. | BW 7:928 lid 1 and 6; 7:930 lid 1 to 5 | BW 7:942 lid 1 ("verjaart door verloop van drie jaren"); 7:957 lid 1 | 7 Nov 2026 | No set date |
| ro18 | From 18 an own zorgverzekering; a parent may arrange it. | [Rijksoverheid, 18 jaar: regelzaken op een rij](https://www.rijksoverheid.nl/themas/familie-zorg-en-gezondheid/achttien-jaar-worden/18-jaar-regelzaken-op-een-rij) ("Iedereen vanaf 18 jaar moet (verplicht) een eigen zorgverzekering hebben. Je mag ook een ouder of verzorger vragen om een zorgverzekering voor jou af te sluiten.") | roVerplicht | 7 Nov 2026 | No set date |

## Onzeker

- **€ 400 against € 385 for 2027.** Revision 2: the Rijksoverheid news of 15 September 2026 (row roPrins) also says "stijgt van € 385 naar € 400", so only the eigen-risico Q&A page is behind. Stcrt. 2026, 34372 (published 30 September 2026, in force 1 January 2027) sets € 400. The Rijksoverheid Q&A page on eigen risico, modified 4 November 2026, still says "Het verplichte eigen risico voor 2026 en in 2027 is € 385". Several Kamer motions in September and October 2026 asked not to raise the eigen risico (kst-37020-36, kst-37020-IX-35, kst-37020-XVI-71); I found no later regulation that changes the € 400 (SRU search of officielebekendmakingen.nl for "eigen risico" and "verplicht eigen risico" since 1 September 2026). The lesson uses € 400 and the teacher Q&A explains the page. Re-check in December 2026 and on 2 January 2027 (Staatscourant and the Rijksoverheid page). Affected: r2 room 3, V3.1, V3.2 (explanation sums), C3, B3, remember and Kern room 3. The digits and the code are not affected.
- **Parents' policies after moving out.** No official source covers this: it is contract law per insurer. Only two commercial pages were read (row commAvp), to confirm that conditions exist and differ; the Consumentenbond page "inboedelverzekering studenten" (updated 25 August 2026) showed only headings to me. The lesson uses a fictional clause and tells pupils to read their own voorwaarden.
- **"Niet verplicht" for aansprakelijkheid, inboedel, reis and telefoon.** One source says so in words (Wijzer in geldzaken, semi-official, treated as secondary); the laws read contain no such duty. Special cases (for example the liability insurance for a jachtakte, or drones) were not checked; r6 says "meestal" and Noor's story does not touch them.
- **Wijzer in geldzaken error.** Its PDF says the zorgverzekering is compulsory "voor iedereen die 18 jaar of ouder is"; Zvw art. 2 and Rijksoverheid say every age. Not used.
- **Name checks (Revision 2).** The AFM register search page and its keyword filter return no filtered results in a headless browser (0 for "Achmea" in the general search), so the AFM check used the register's full CSV export ("Export als CSV", 17,742 rows, downloaded 7 November 2026). The KvK check used the kvk.nl search in a headless browser (validated: 181 results for "Achmea"). The DNB public register returned 403 and was not checked; DNB lists licensed insurers, and no insurer called Wadlicht or Zeelicht appeared in any other check. Lesson 1 and OEF-RISICO in d34 still say "Kompas" (the coordinator schedules that change).
- **Pages that could not be read.** politie.nl (aangifte) and kifid.nl (complaints) returned "permission request not answered" and were not retried. So the lesson states no aangifte procedure and no complaint route; the aangifte in room 4 is only the fictional policy's demand.
- **Law versions.** BW 6 (toestand 16 Jul 2026), BW 7 (8 Oct 2026), Zvw (1 Jan 2026), Besluit zorgverzekering (1 Jul 2026) and WAM (24 Jul 2025) were read today as the versions wetten.overheid.nl redirected to. The Zvw toestand still shows € 385 in art. 19 lid 1; under art. 19 lid 3 the regulation's amount takes its place from 1 January 2027.
- **Fictional prices.** € 13 huisarts, € 95 huisartsenpost, € 260 spoedeisende hulp, € 210 ziekenhuis, € 100 phone premium, € 20 discount, € 650 laptop, € 1.250.000 insured amount: not checked against NZa tariffs or market data. No answer depends on z1 or z4. The 2027 average nominal premium is € 2.029 per year (Stcrt. 2026, 36979, read today), so a € 20 monthly discount for € 500 vrijwillig is of a plausible size; it is not a fact the lesson states.
- **Single-source items.** The meldingsplicht and the misleading rule rest on the law text only (BW 7:941, 7:943); no official explainer page was read. The verwacht schadebedrag definition rests on the syllabus only. The AVP description rests on Wijzer (secondary) plus BW 6:162.
- **vwo syllabus.** Revision 2: the vwo 2027 syllabus was read (examenblad, labelled "concept", versie 2, juli 2025). Insurance is under G4 "Risico verzekeren" (4.1, 4.2, 4.4, 4.5), not G1; it has no separate item for the verwacht schadebedrag. Care point 5 names both. Check whether a final version replaces the concept.
- **Phone insurance and other cover.** Whether a phone is already covered elsewhere (for example inside an inboedel policy) differs per policy and was not checked; the lesson does not claim it.
- **Revision 1 items not applied or applied adjusted, with the reason.** Gate W6 (huisarts consult € 40): not applied; the NZa tariff page (puc.overheid.nl) returned 403, so neither € 13 nor € 40 is checked; € 13 stays, marked fictional, and no answer depends on it. Gate T5 ("altijd meer premie dan de verwachte schade"): not applied as worded, "altijd" is not in any source read. Gate T6 ("bij sommige echte polissen is geleend wel gedekt"): applied as "kan dat anders zijn", no source read gives the share. Gate W7, X4: not applied (see the notes under V1.2 and the check forms). Gate W1 for item b of V2.1: not applied, see the V2.1 note. Gate T4 and W2 (optional break-even question): the engine has no optional question outside the lock (README; Route 18 Engine fit 8) and `src/` may not be changed now, so it is the room 3 `discuss` prompt with the answer in the teacher detail. Gate M8 (paper set) and M9 (multi pointer, timer at 00:00): engine work, listed under Engine fit.

## Voor een nieuw jaar

For a class in 2028: move every story date one year and re-check the weekdays (1 October 2028 is a Sunday; keep "ontdekt op 1 oktober" so digit 4 stays 8). Replace € 400 by the 2028 amount from the new Staatscourant regulation; the € 60 increase of bill 36 943 was planned for 2028 (Stcrt. 2026, 34372, toelichting). Recompute V3.1 (€ 470 minus the new cap), V3.2 (difference between the hospital total and the new cap, the discount stays fictional), C3 and B3. Digits 1 (2), 2 (3), 3 (4, phone ratio) and 4 (8, the 1 augustus case) do not depend on the amount; the room 3 extra question (break-even € 640) does, recompute it, so the code can stay 2348. Re-read every source. Owner of the yearly update: the content team, in December (with the eerste-maand update).

---

## Changelog

Item numbers refer to the room questions (V1.1 and so on), rule lines (r1 and so on) and check items (C1 to C4, B1 to B4) of this spec.

Revision 2 (7 Nov), after ChatGPT check B on v0 (`qa/checkB/verzekerd.md`, PASS WITH FIXES, 1 ERROR, 5 RISK). I opened every source myself today. **Lock code unchanged: 2348. No answer key changed** (all 12 room answers, 4 digits and 8 check answers re-derived); one question id changed (V3.1 `kompas` to `wadlicht`).
- B1 (ERROR, room 1 r2 too broad on gemoedsbezwaarden): applied. CAK page read: the exemption needs an ontheffing from the SVB ("Doet u dat niet? Dan is die persoon niet gemoedsbezwaard."). r2 is now "Er zijn bijna geen uitzonderingen op regel 1. Bijvoorbeeld militairen in werkelijke dienst, en mensen met een ontheffing van de SVB wegens gemoedsbezwaren." with the gloss "Gemoedsbezwaren" on doc wie; teacher detail Kamer 1 and source row cakGemoed added. The SVB page itself returned 403. URL: https://www.hetcak.nl/regelingen/gemoedsbezwaarden
- B2 (RISK, room 3 assumes covered treatments): applied as story facts in the doc note ("Noor had een verwijzing als dat moest. ... De kosten zijn het hele bedrag per keer."). The checker's "huidarts" and its three long sentences are not used; the note states no rule about referrals, which no source read today gives.
- B3 (RISK, the 7-day term must not read as a legal deadline): applied in the V4.1 explanation ("Dit is de termijn van deze polis. Ben je te laat? Dan verlies je niet vanzelf je geld."), shorter than proposed; BW 7:941 lid 3 and 4 and 7:943 lid 2 as read in Revision 1.
- B4 (RISK, vwo has insurance under G4): applied after reading the vwo 2027 syllabus (concept, versie 2, juli 2025): G4.1, G4.2, G4.4, G4.5. Care point 5 and the Doelgroep paragraph name havo and vwo items; source row sylVwo; V3.2 cites it. URL: https://www.examenblad.nl/2027/vwo/documenten/syllabus-economie-vwo-2027
- B5 (RISK, a real "Kompas Verzekeringen" exists): applied. AFM register CSV: "Kompas Verzekeringen" is a trade name of Nationale Assuradeuren Compagnie (NAC), 's-Gravenhage. The fictional zorgverzekeraar is now "Wadlicht": 0 hits in the AFM register CSV, "Er zijn geen resultaten gevonden" in the KvK search, no company in a web search. Searches and rejected names are in the fiction paragraph. "Zeelicht" re-checked: no insurer or intermediary in AFM or KvK. Lesson 1 and OEF-RISICO in d34 were not edited (coordinator).
- B6 (RISK, cite the Prinsjesdag news): applied. Rijksoverheid news of 15 September 2026 read ("stijgt van € 385 naar € 400"); source row roPrins, V3.1 sources, Onzeker and the teacher FAQ.
- Re-checked after the changes: no pupil sentence over 20 words, no em or en dashes; spec-compare 0 mismatches for verzekerd.

Revision 1 (7 Nov), after fact check A (`content_new/factcheck_A_verzekerd.md`, PASS, 0 ERROR, 6 RISK) and the persona gate (`qa/gate_verzekerd_personas.md`, READY WITH FIXES, 1 conditional BLOCKER). Each source-based item was re-verified where I could open the source today. **Lock code unchanged: 2348.** Answer keys changed: V3.1 is now € 70 (was € 400), V1.3 is now "Nee, want hij studeert niet", V3.2 is "€ 170 lager", V4.3 "Nee, want dan kan ze haar recht op geld verliezen", C3 € 700 and B3 € 500 with new options, and C2, B2, C4, B4 have new option texts (keys A a, c, b, b; B b, b, a, c). All 12 room answers, 4 digits and 8 check answers re-derived.

Fact check A:
- A1 (RISK, FAQ "te laat melden" said "Alleen als de polis dat zegt"): applied. BW 7:941 lid 5 gives a second route (late report with intent to mislead); re-read today. FAQ now names both cases; r3 room 4 note and teacher detail Kamer 4 name lid 5 too.
- A2 (RISK, claim that the right answer is in a different place in each item): applied by new option orders and the sentence "In each form no letter is right more than twice in a row (A: a, c, b, b; B: b, b, a, c)".
- A3 (RISK, spoedeisende hulp without need or referral): applied. Doc zorg note adds "Alle zorg was nodig en komt uit de basisverzekering."; z2 is now "gebroken pols" (also gate T3, P2).
- A4 (RISK, teacher detail Kamer 1 read as a complete list): applied after re-reading the Rijksoverheid page today: GSZV, international organisations and the "hangt af" for foreign students added; source row roVerplicht quotes them.
- A5 (RISK, V2.1 law sentence beyond the literal 7:952): applied as "In de wet staat ook een regel over opzet. Die schade hoeft een verzekeraar niet te vergoeden, tenzij de polis iets anders zegt." (split into two sentences to stay under 20 words).
- A6 (RISK, the € 885 example on Rijksoverheid): applied in the FAQ and in source row roER.

Persona gate, top 10:
1. T1 (conditional BLOCKER): applied. Release gate paragraph at the top (re-check on the day of publication, update `checked`, `CHECKED_ON` and the audience line). Second audience line on the teacher screen: check date, next check 2 januari 2027, "€ 400 (Staatscourant, 30 september 2026)", the Rijksoverheid € 385 line. The FAQ (`teacher.faq`) is open on the teacher screen.
2. X1, X2, X3: applied. C3/B3 state the € 400 and ask for "extra"; distractors are no longer parts of a sum. C4/B4 options of equal length. C2/B2: the right first word is never the odd one out.
3. T2, T3: applied. V3.1 asks what Kompas pays of the two hospital bills (€ 70), new nudge and hint; z2 "gebroken pols". Answer sheet updated.
4. P5, T4: P5 applied (prompt, four bare amounts, sign-error distractor € 310, new hint). T4 applied adjusted: break-even question as the room 3 `discuss` prompt, answer € 640 in the teacher detail (re-computed: costs 640, without 400, with 640 minus 240 = 400).
5. M3, M1, T8: applied. Fiction line and the Uitleg row now say "De wet is echt"; the Uitleg row adds that polissen and amounts are made up. Audience line 1 names domain G and only room 3; no vwo exam claim. "Controleer in december" left the teacher screen (it is in the release gate).
6. P1, P2, P3: applied. New glosses polis, ingangsdatum, uiterlijk; "geregistreerd partner" no longer circular; "redelijkerwijs" explained inside r1 of room 4; huidspecialist.
7. P4, P12: applied (V1.3 four options of one shape; V4.3 options 48 to 51 characters, "alles vergoed").
8. P6, P7, P8: applied. Room 4 intro "terug op haar kamer aan de Kadeweg"; room 3 intro "op haar kamer aan de Kadeweg"; room 1 "zes soorten verzekeringen", doc title "Soorten verzekeringen". Digit clue 1 no longer names the two insurances (clue screen shows table and rule box). Digit clue 4 uses a new case (1 augustus), digit still 8.
9. P13, P14: applied (field 2 "Ik ben 18, of ik word 18 in de maand"; fields 3 and 4 merged; six fields).
10. M4, M5, M8: M4 applied (three FAQ answers, sourced on roER, zvw2, ro18, bw6162). M5 applied (care point 1 addition, care point 6 on the burglary). M8: answer-sheet line uses A1 to A4 as Route 18 does; the print split is engine work (Engine fit).

Persona gate, other items: T5 applied adjusted (see Onzeker), T6 applied adjusted, T7 applied (the € 50 in the V4.3 explanation, "alles vergoed" in option c), T9 applied (FAQ WA against aansprakelijkheid), M2 applied in audience line 2, M6 applied ("Alleen voor de economiedocent"), M7 applied ("Zeg niet wat slim is" in the Escape row; the phone prompt left `discuss`), M9 applied for digit retries (`clueRetry` per room); the multi pointer and timer notice are engine work. P10 applied (gloss "Eigen risico" in room 2), P11 applied (V2.3 hint), P15 applied (`plan.then[2]`). W1 applied for item a only, W5 applied, W8 applied in care point 5, vwo point 7 applied (r6 room 1 "Voor Noor zijn die niet verplicht."). Not applied: P9 (same policy, same text), W6, W7, X4 (reasons in Onzeker and the notes).
- Re-checked with scripts after all changes: no pupil sentence over 20 words, no em or en dashes, no order words in pupil text; spec-compare for verzekerd (see the data file `kamers-engine/lessons/verzekerd.js`).

7 november 2026, self-review after writing (re-read of the written file as a strict fact checker, a havo 4 pupil, an economie teacher and a mentor). **Lock code unchanged: 2348. No answer key changed** (all 12 room answers, 4 digits and the 8 check answers re-derived after the fixes).
- (fact checker) Room 2 artikel 2 left out the marriage condition that room 1 clause a1 has, although it is the same policy. Now word for word a1.
- (fact checker) Room 2 r3 said the WA "betaalt" damage to others, without exception. Rijksoverheid says "in de meeste gevallen" and WAM art. 3 lid 1 names exceptions (stolen vehicle). Now "Dan betaalt meestal de WA-verzekering". V2.3 is an ordinary case and keeps one answer.
- (fact checker) Room 3 r3 said "Voor de huisarts ... geen eigen risico". Rijksoverheid separates the visit from lab tests the huisarts orders. Now "Voor een bezoek aan de huisarts of de huisartsenpost".
- (fact checker) Room 3 r4 said all hospital care falls under the eigen risico. Bzv art. 2.17 lid 1 exempts some care that can happen in a hospital (verloskundige zorg, advice the huisarts asks for). Now "meestal wel", with "de spoedeisende hulp of een specialist" as examples, which match both hospital rows of doc zorg; the gloss "huidarts" now says "specialist". V3.1 stays € 400. Remember and Kern of room 3, and remember and Kern of room 1 ("als je een voertuig op je naam gebruikt", for the RDW exception), now match their rules.
- (fact checker) Teacher detail room 3 said you can "vaak" pay the eigen risico in instalments; the source says only that you can ask for a betalingsregeling. Reworded to the source.
- (fact checker) The source row for Wijzer in geldzaken called it a Ministry platform; that was not checked today. Reworded, still treated as secondary.
- (fact checker) The fiction paragraph claimed a web search found no "Telefoonwinkel Zeestad"; that search was not done. Corrected: only "Zeelicht", "Duinhelm" and "Belbaai" were searched; Zeestad itself is fictional.
- (havo 4 pupil) Gloss "Voltijd studeren: ... als je hoofdbezigheid" used a word above B1. Now "een studie die de hele week duurt, zoals de meeste studies". Gloss "Aangifte" said "misdrijf"; now "iets strafbaars".
- (economie teacher) Room 1 had no link to the syllabus. Care point 5 now adds G2.2 (a compulsory insurance counters averechtse selectie), and source row sylG1 quotes G2.2.
- (mentor) No change needed beyond the above: the plan table adds to 45, the FAQ covers the € 385 page, the slip and plan work for pupils under 18, and no field asks for health or money details. A start-screen lead was missing (spec-compare needs one): proposal added under the fiction line.
- Re-checked with scripts after all fixes: no pupil sentence over 20 words (longest 19), no em or en dashes in the file, no "beide", "allebei", "geen van" or "bovenstaande" in pupil text.

7 november 2026, first version:
- Built from the research brief (`research/next_topics.md`, topic A and section 3.1) and the Route 18 template. Rooms kept as briefed (moet of mag, valt het onder de polis, eigen risico rekenen, schade melden), with four changes: (1) the gezinspolis check (AVP and inboedel after moving out) is in room 1, with a working brother as the contrast case, because "does my parents' policy still cover me" belongs to "moet of mag na je 18e"; (2) the landlord-door case is replaced by kicking a friend's bike on purpose and a borrowed console, because damage to a rented home is often a separate clause in real policies; (3) the WA/scooter case from research topic K is folded into rooms 1 and 2; (4) room 3 adds the verwacht schadebedrag (G1.1) with a phone offer, because the eerste-maand drill OEF-RISICO already covers the plain eigen risico sum.
- Research said "verify" for the parents' AVP and inboedel after moving out: no official source exists; handled with a fictional clause and a "lees je eigen voorwaarden" none line (see Onzeker).
- New finding against the brief: Rijksoverheid's eigen risico page still says € 385 for 2027; the Staatscourant says € 400. The brief's € 400 is kept, with a teacher Q&A and a re-check date.
- Decisions taken while drafting, to avoid the known errors of earlier checks:
  - Zorg is compulsory at every age (Zvw art. 2; Rijksoverheid), not "from 18" as Wijzer in geldzaken says; r1 says "op elke leeftijd" and r2 names the Zvw art. 2 lid 2 exceptions.
  - "Not compulsory" is limited to four named insurances with "meestal" (r6), because special cases (hunting licence, drones) were not checked.
  - The WA duty follows WAM art. 2 (bezitter and kenteken holder), with the RDW schorsing as r5; the intro says Noor rides every day.
  - No fictional clause says "te laat = geen geld" or "liegen = nooit geld": BW 7:941 lid 4 and 5 are semi-dwingend (7:943), so such a clause would clash with the law. The consequences are in the rule box in the law's own terms ("kan", "soms").
  - V4.3 and C4/B4: options that state a sure outcome the law does not give ("krijgt ze gewoon € 650") are wrong; the right options keep "kan". A prompt "Wat kan er gebeuren?" was rejected for C4 because it would make a softer outcome defensible; it is "Wat zegt de wet?".
  - BW 7:952 is regelend (not in 7:963), so the V2.1 explanation says "tenzij de polis iets anders afspreekt".
  - No lab-test row in doc zorg (Rijksoverheid: lab costs "kunnen" count), and the doc note "Kompas haalt geen andere zorg uit je eigen risico" closes the insurer exemptions, so V3.1 has one answer.
  - Noor turned 18 on 3 October 2026, so 2027 is a full year and Zvw art. 22 (pro rata) plays no role.
  - The phone premium is per year (€ 100), with no theft cover and no eigen risico, so V3.3 is one step (kans keer schade).
  - V2.2 points to r2, not to artikel 3c, which would give the answer away.
  - Digit 3 is the phone ratio (€ 100 / € 25), not derived from € 400, so the code survives a new amount.
  - Option "Vrijdag 1 oktober 2028" was dropped: that date is a Sunday.
  - Room 3 (the economie core) is third, not last, so slow pairs reach it before the stop at minute 32.
  - All three explanations on choices (V3.2, V3.3) end with the other side of the trade-off and give no advice (G1.2).
- Digits and code derived: 2 (basisverzekering and WA), 3 (artikel 3), 4 (€ 100 / € 25), 8 (1 + 7 oktober). Code **2348**.
