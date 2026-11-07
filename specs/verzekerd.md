# Escape "Verzekerd na je 18e" (content spec, ID voorstel: ESC-VERZEKERD)

Regels geldig voor: kalenderjaar 2027 (the story plays from April to October 2027); gecontroleerd op 7 november 2026; validUntil: 31 december 2027. The only real amounts are the verplicht eigen risico 2027 (€ 400, Stcrt. 2026, 34372) and the steps of the vrijwillig eigen risico (€ 100 to € 500, Zvw art. 20, no end date). Every other amount (premiums, discounts, prices, insured amounts, the € 50 eigen risico on the Kamerpolis) is fictional and says so.

Doelgroep en moment: havo 4 en 5, vwo 5 en 6. Fits economie (CE domein G1 "Risico en verzekeren", syllabus havo 2027) and the mentoruur. No fixed window: any time in school year 2026-2027. Suggested hook: Week van het geld, 15 tot 19 maart 2027 (vo-skill "Vooruitkijker", research file section 5). Lesduur 45 minuten, escape 26 minuten, stop op minuut 32 (same pattern as Route 18; justified below under the lesson plan).

Format as ESC-KAMER and Route 18: four rooms, 3 questions per room, one retry with a nudge that points to a line, a hint that costs 30 seconds, one digit per room, one lock of four digits, then the end check, the end screen and the plan. Pupil text is Dutch B1, sentences at most 20 words, no em or en dashes. Rules come only from the source table at the end. All pages and law texts read on 7 November 2026.

Rule boxes (`room.rules`): every rule a pupil needs on the first try is in the room's rule box, the situation text or the room's documents (G4 fix 3). Each digit clue shows the facts it needs (G4 fix 1) and names its lock position ("Het 1e cijfer van het slot", G4 fix 2). Lessons from the Route 18 checks, applied from the start: no absolute rule where the law has an exception (the exception is in the rule box or ruled out in the situation: militairen and gemoedsbezwaarden in room 1, RDW schorsing in room 1, insurer exemptions in room 3, "kan" and "soms" for late reporting and misleading in room 4); one defensible answer per question (each situ states the fact that would otherwise open a second answer: "Het is Noors schuld", "Ze leende niets", "Kompas haalt geen andere zorg uit je eigen risico"); hints point to a place or a method, never to the option; policy conditions are written as conditions ("als ze voltijd studeren"), not as consequences; every real rule has a source row; fictional policy terms never contradict the law (see note under room 4).

Why this lesson (research `research/next_topics.md`, topic A, 22 of 25 points): strongest exam fit (economie G1.1 verwacht schadebedrag, G1.2 beslissing om te verzekeren, G1.4 eigen risico tegen premiekorting, G2.3 eigen risico tegen moral hazard; syllabus read today); geldlessen.nl lists no vo lesson on insurance; contract logic changes slowly. Missing elsewhere: reading a policy to decide "covered or not". Overlap avoided on purpose:
- Lesson 1 (`d34/src/escaperun.js`, room "De brief en je DigiD"): the insurer letter at 18, verzekeringnemer, premium from the month after the birthday, switching within a month, zorgtoeslag and DigiD. None of these is asked here. The basisverzekering appears once, as one of six items in V1.1.
- Eerste-maand practice drill OEF-RISICO (`d34/src/drills2.js`): huisarts without eigen risico, the remaining eigen risico, when you pay (amounts 2026). Room 3 here asks the 2027 cap with the spoedeisende hulp and the huisartsenpost, then adds what the drill lacks: the vrijwillig eigen risico against premiekorting and the verwacht schadebedrag.
- The research proposal's "landlord door on purpose" case is replaced by kicking a friend's bike on purpose: damage to a rented home is often treated separately in real policies, so it would open a second answer.

Fiction line (shown once at the start):
"Verzonnen zijn de mensen, Zeestad, de verzekeraars, de polissen en hun bedragen. De regels uit de wet zijn echt. Bij elke uitleg staat de bron."

Lead (start screen and site card; proposal, to be fixed in `LEADS` of `tests/spec-compare.js`):
"Wat moet je verzekeren, wat kies je zelf en wat betaalt je polis? Reken met eigen risico en meld schade goed."

Neutrality line (start screen under the fiction line, and on the teacher screen):
"Deze les raadt geen verzekering en geen verzekeraar aan. Wat je verzekert, kies je zelf."

Fictional on purpose: the city Zeestad (as in ESC-MAAND, ESC-KAMER, ESC-ROUTE); the people Noor (18), her brother Sem (20) and her friend Daan; Zorgverzekeraar Kompas (reused from lesson 1 and OEF-RISICO, so the Zeestad world stays the same); Zeelicht Verzekeringen (gezinspakket of Noor's parents and Noor's own Kamerpolis); Telefoonwinkel Zeestad; the addresses Duinweg 8 and Kadeweg 21; all policy texts, insured amounts, premiums, the premium discount of € 20, the care prices, the 7-day reporting term and the € 50 eigen risico of the Kamerpolis. A web search on 7 November 2026 found no insurer named "Zeelicht". "Telefoonwinkel Zeestad" was not searched: Zeestad itself is fictional, so the name points nowhere. "Duinhelm" was rejected: a Belgian company of that name exists. "Belbaai" was searched and rejected as too close to real phone-shop names starting with "Bel". The `.example` address of the phone shop is a reserved test domain. Rijksoverheid, de RDW and de politie are named only as the real places where a rule applies; no page of theirs is imitated.

Story time: Noor turned 18 on zaterdag 3 oktober 2026. She has her own basisverzekering at Kompas for the whole of 2027, so the full verplicht eigen risico of 2027 applies (the pro rata rule of Zvw art. 22 plays no role; teacher detail). Room 1: woensdag 14 april 2027 (scooter since March, still living at home). Room 2: zaterdag 12 juni 2027 (still at home). Room 3: maandag 6 september 2027 (op kamers since woensdag 1 september 2027). Room 4: vrijdag 1 oktober 2027, reporting deadline vrijdag 8 oktober 2027. Care dates in room 3 (no weekday shown): di 9 februari, za 3 april, di 22 juni, za 17 juli 2027. All weekdays checked with a calendar script; 3 April 2027 is not a public holiday (Easter 2027 is 28 March).

Code: **2348** (room digits 2, 3, 4, 8; not 1725, 2824, 2073, 3521, 4379 or 3231). Teacher screen: show it only inside the closed Antwoordblad, never on the projected part.

## Leerdoelen

1. De leerling kan zeggen welke verzekeringen de wet verplicht: de basisverzekering voor zorg, en een WA-verzekering voor een scooter, brommer, motor of auto op je naam. De rest kies je zelf.
2. De leerling kan in voorwaarden opzoeken wie verzekerd is en wat niet verzekerd is, en zo zeggen of schade gedekt is. Ook als je op kamers gaat.
3. De leerling kan het verplicht eigen risico voor zorg in 2027 uitrekenen, een vrijwillig eigen risico afwegen tegen premiekorting, en een verwacht schadebedrag berekenen.
4. De leerling weet hoe je schade meldt: op tijd, met bewijs en eerlijk.

---

## Kamer 1. Moet of mag? (woensdag 14 april 2027)

**Intro:** "Noor is sinds oktober 18. Ze woont nog thuis in Zeestad, op de Duinweg 8. Sinds maart heeft ze een scooter op haar naam. Daar rijdt ze elke dag mee naar school. In september gaat ze op kamers. Haar moeder legt alle verzekeringen op tafel."

### Document 1a: verzekeringen op tafel (type: table with head, id: tafel)
Title: "Verzekeringen op tafel". From: "Thuis bij Noor (verzonnen voorbeeld)".
Head: "Verzekering" | "Waarvoor is die?"
- t1 "Aanvullende zorgverzekering" | "Zorg die de basisverzekering niet betaalt"
- t2 "Aansprakelijkheidsverzekering" | "Schade die je per ongeluk bij een ander maakt"
- t3 "Inboedelverzekering" | "Schade aan de spullen in je huis"
- t4 "Telefoonverzekering" | "Schade aan je telefoon"
- t5 "Basisverzekering zorg" | "Zorg uit het basispakket, zoals de huisarts en het ziekenhuis"
- t6 "WA-verzekering scooter" | "Schade die je met je scooter bij anderen maakt"

Design note: the column says what each insurance is for, never whether it is compulsory; that comes only from the rule box. The descriptions follow the sources (Rijksoverheid: basispakket "Denk aan de huisarts, het ziekenhuis"; aanvullend "kosten die de basisverzekering niet vergoedt"; WA "dekt de kosten van de ander" (Wijzer in geldzaken); AVP "vergoedt de schade die je per ongeluk veroorzaakt bij een ander" (Wijzer); inboedel "De spullen in je huis" (Wijzer)). The telephone line describes the fictional offer of room 3.

### Document 1b: voorwaarden gezinspakket (type: contract, id: wie)
Title: "Voorwaarden Gezinspakket (stukje)". Parties: "Zeelicht Verzekeringen (verzonnen). Verzekeringnemer: de moeder van Noor."
- a1 "Aansprakelijkheid: wie is verzekerd?" | "Jij en je partner. Je kinderen die bij je wonen. Je kinderen die niet meer bij je wonen, als ze voltijd studeren. Ze mogen dan niet getrouwd zijn en geen geregistreerd partner hebben."
- a2 "Inboedel: welke spullen zijn verzekerd?" | "De spullen in je woning op het adres op het polisblad: Duinweg 8, Zeestad. Ook de spullen van je kinderen die daar wonen."

Design note: real family policies differ per insurer on uitwonende kinderen (two commercial pages read today name studying, unmarried, registered in the Netherlands and sometimes an age limit; see source row commAvp). The fictional clause uses the two most common conditions and no age limit, so V1.3 option b ("tot 27") is ruled out by the text. a1 is written as conditions ("als ze voltijd studeren"), not as consequences.

**Moeilijke woorden (plain, on doc wie):** "Voorwaarden: de regels van een verzekering. Verzekeringnemer: op diens naam staat de verzekering. Aansprakelijk: je moet de schade van een ander betalen, meestal omdat het jouw schuld is. Inboedel: de spullen in je huis. Voltijd studeren: een studie die de hele week duurt, zoals de meeste studies. Geregistreerd partner: een partner met wie je een geregistreerd partnerschap hebt."
**Moeilijke woorden (plain, on doc tafel):** "WA: wettelijke aansprakelijkheid. Basispakket: de zorg die de overheid in de basisverzekering stopt."

**Rule box (`rules`, title "Regels"):**
- r1 "Woon of werk je in Nederland? Dan moet je een basisverzekering voor zorg hebben. Dat geldt op elke leeftijd."
- r2 "Er zijn bijna geen uitzonderingen op regel 1. Wel voor militairen in dienst en voor mensen die uit geloof geen verzekering willen."
- r3 "Een aanvullende zorgverzekering is niet verplicht."
- r4 "Staat er een scooter, brommer, motor of auto op je naam? Dan moet je een WA-verzekering hebben."
- r5 "Gebruik je je voertuig lang niet? Dan kun je het laten schorsen bij de RDW. Zolang hoeft er geen WA-verzekering te zijn."
- r6 "De wet verplicht je meestal niet tot een aansprakelijkheids-, inboedel-, reis- of telefoonverzekering. Die kies je zelf."

Note on r2, r5, r6: r2 names the two exceptions in Zvw art. 2 lid 2 (militaire ambtenaar in werkelijke dienst; ontheffing as gemoedsbezwaarde) and on Rijksoverheid ("Wilt u wegens uw geloof geen zorgverzekering? Dan hoeft u geen zorgverzekering af te sluiten."). r5 is the RDW exception on Rijksoverheid and in WAM art. 2 lid 3; the intro says Noor rides every day, so it cannot apply. r6 says "meestal": special cases (for example a hunting licence) were not checked; nothing in Noor's story touches them. r6 rests on Wijzer in geldzaken (secondary, see Onzeker) and on the absence of such a duty in the laws read. "Op elke leeftijd" in r1: Rijksoverheid "Een zorgverzekering is verplicht voor alle leeftijden." (Wijzer in geldzaken wrongly says "voor iedereen die 18 jaar of ouder is"; not used, see Onzeker.)

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
- Retry pointer: rules r1 and r4 (`pointTo: { rules: ['r1', 'r4'] }`).
- Nudge: "Lees regel 1 en regel 4. Wat weet je uit de intro over Noor?"
- Hint (30 s): "Waar woont Noor? En wat staat er op haar naam?"
- Explanation: "Noor woont in Nederland. Dus moet ze een basisverzekering hebben. Ze heeft ook een scooter op haar naam. Daarvoor moet ze een WA-verzekering hebben. De andere verzekeringen kiest ze zelf."
- Sources: roVerplicht, zvw2, roMis, roWA, wam, wig
- Note: the intro closes every exception: she lives in Zeestad and goes to school (not a soldier, no word of a religious exemption), the scooter is on her name ("op haar naam", WAM art. 2 lid 1 "degene op wiens naam dit in het kentekenregister is ingeschreven") and she rides it daily (no RDW schorsing). Telefoonverzekering and inboedel are optional by r6.

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
- Note: options avoid "beide", "allebei" and "geen van" (README option order), so the fixed shuffle is allowed. The story then gives Noor her own inboedelverzekering (room 4 intro); the explanation does not say she must, because r6 says it is her choice.

### Vraag 1.3 (id: sem, kind: pick, docs: wie)
- Situ: "Sem, de broer van Noor, is 20. Hij woont alleen en werkt voltijd. Hij studeert niet."
- Prompt: "Is Sem nog verzekerd via de aansprakelijkheidsverzekering van zijn ouders?"
- Options:
  - a "Ja, want hij is hun kind"
  - b "Ja, tot hij 27 jaar is"
  - c "Nee, want hij woont niet thuis en studeert niet"
- Correct: c
- Retry pointer: doc wie, line a1.
- Nudge: "Lees de regel over kinderen die niet meer thuis wonen. Wanneer zijn die verzekerd?"
- Hint: "Wat doet Sem overdag: studeren of werken?"
- Explanation: "Kinderen die niet thuis wonen, zijn alleen verzekerd als ze voltijd studeren. Sem werkt. Wil hij verzekerd zijn? Dan sluit hij zelf een aansprakelijkheidsverzekering af. Dat is niet verplicht."
- Sources: wig. None line is not needed (the clause is fictional, the "niet verplicht" is r6).
- Note: option b is wrong because a1 names no age; real policies sometimes do (commAvp, teacher only). Sem's marriage is not stated and does not matter: he fails the study condition.

### Cijfer kamer 1
- Clue: "Het 1e cijfer van het slot: op tafel liggen 6 verzekeringen. Noor moet de basisverzekering en de WA-verzekering voor haar scooter hebben. Hoeveel verzekeringen zijn voor haar verplicht?"
- Digit: **2** (all facts are in the clue; same set as the right items of V1.1; `clueDocs: ['tafel']`).
- Remember: "Verplicht zijn de basisverzekering voor zorg en, als je een voertuig op je naam gebruikt, de WA. De rest kies je zelf."

---

## Kamer 2. Valt het onder de polis? (zaterdag 12 juni 2027)

**Intro:** "Het is juni. Noor woont nog thuis. Ze is verzekerd via de aansprakelijkheidsverzekering van haar ouders. Deze week ging er van alles mis."

### Document 2: voorwaarden aansprakelijkheid (type: contract, id: avp)
Title: "Voorwaarden aansprakelijkheid, Gezinspakket". Parties: "Zeelicht Verzekeringen (verzonnen)".
- n1 "Artikel 1. Wat is verzekerd?" | "Ben je aansprakelijk voor schade aan een ander? Dan betalen wij die schade. Het gaat om schade aan mensen en aan spullen van een ander."
- n2 "Artikel 2. Wie is verzekerd?" | "Jij en je partner. Je kinderen die bij je wonen. Je kinderen die niet meer bij je wonen, als ze voltijd studeren. Ze mogen dan niet getrouwd zijn en geen geregistreerd partner hebben."
- n3a "Artikel 3a. Niet verzekerd" | "Schade aan je eigen spullen."
- n3b "Artikel 3b. Niet verzekerd" | "Schade die je met opzet maakt."
- n3c "Artikel 3c. Niet verzekerd" | "Schade aan spullen die je leent, huurt of bewaart voor een ander."
- n3d "Artikel 3d. Niet verzekerd" | "Schade die je maakt met een motorvoertuig, zoals een scooter of auto."
- n4 "Artikel 4. Hoeveel betalen wij?" | "Tot € 1.250.000 per gebeurtenis. Je hebt geen eigen risico."

Design note: artikel 3 is split into 3a to 3d so a retry can point to one exclusion. The insured amount in n4 is fictional and of a common order; no question uses it, but it shows pupils a polisblad-like line (the brief's "polisblad"). Artikel 2 is word for word clause a1 of room 1: it is the same policy.

**Moeilijke woorden (plain, on doc avp):** "Uitsluiting: schade die niet verzekerd is. Opzet: je doet het expres. Per gebeurtenis: per keer dat er iets gebeurt. Motorvoertuig: een voertuig met een motor, zoals een scooter of auto. Casco: een verzekering voor schade aan je eigen voertuig."

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
  - a "Noor laat haar eigen telefoon vallen. Het scherm breekt."
  - b "Noor schopt uit boosheid tegen de fiets van Daan. Ze doet het expres."
  - c "Noor stoot bij Daan thuis zijn laptop van tafel. Ze lette niet op."
  - d "Noor fietst tegen een geparkeerde auto. De auto krijgt een deuk."
- Correct: c, d
- Retry pointer: doc avp, lines n1, n3a, n3b.
- Nudge: "Lees artikel 1. Ga dan bij elk geval na: staat het ook in artikel 3?"
- Hint: "Vraag bij elk geval: van wie zijn de spullen, en was het expres?"
- Explanation: "De laptop en de auto zijn van een ander. Noor is aansprakelijk, dus betaalt de verzekering. Haar eigen telefoon valt onder artikel 3a. De fiets schopte ze expres: artikel 3b. Ook de wet zegt: schade door opzet vergoedt een verzekeraar niet, tenzij de polis iets anders afspreekt."
- Sources: bw6162, bw7952, wig
- Note: the situ closes the two doors to a second answer: fault (an AVP pays only on liability; "Het is Noors schuld") and lending (artikel 3c; "Ze leende niets"). Item d is a normal bicycle, not an e-bike, so artikel 3d (motorvoertuig) cannot be argued. BW 7:952 ("De verzekeraar vergoedt geen schade aan de verzekerde die de schade met opzet of door roekeloosheid heeft veroorzaakt") is not in the list of BW 7:963, so a policy may deviate; hence "tenzij de polis iets anders afspreekt". The roekeloosheid part is teacher detail only.

### Vraag 2.2 (id: geleend, kind: pick, docs: avp)
- Situ: "Daan leent Noor zijn spelcomputer. Bij Noor thuis valt die van de kast. Hij is kapot. Het is Noors schuld."
- Prompt: "Betaalt de aansprakelijkheidsverzekering de schade?"
- Options:
  - a "Ja, artikel 1: het is schade aan spullen van een ander"
  - b "Ja, want het gebeurde per ongeluk"
  - c "Nee, artikel 3a: het zijn Noors eigen spullen"
  - d "Nee, artikel 3c: Noor had de spelcomputer geleend"
- Correct: d
- Retry pointer: rule r2 (pointing to n3c would give the answer away, as V1.1 of Route 18).
- Nudge: "Lees regel 2. Zoek dan in artikel 3 een woord dat bij dit geval past."
- Hint: "Van wie is de spelcomputer, en hoe kwam hij bij Noor?"
- Explanation: "De spelcomputer is van Daan, maar Noor had hem geleend. Geleende spullen staan in artikel 3c. Dus betaalt deze verzekering niet. Lees bij een echte polis altijd wat er over lenen staat."
- Sources: none. None line: "Dit staat in de voorwaarden van deze verzonnen polis. Elke polis heeft eigen uitsluitingen."
- Note: this is the trap the lesson is built around: artikel 1 says "yes", the exclusion says "no", and the exclusion wins (r2). Option a is the answer of a pupil who stops reading at artikel 1. Wrong options carry a reason, so length does not give the answer (gate P11).

### Vraag 2.3 (id: scooter, kind: pick, docs: avp)
- Situ: "Noor rijdt met haar scooter tegen een geparkeerde auto. Het is haar schuld."
- Prompt: "Welke verzekering betaalt de schade aan de auto?"
- Options:
  - a "De aansprakelijkheidsverzekering van haar ouders"
  - b "De inboedelverzekering van haar ouders"
  - c "Geen verzekering: Noor betaalt alles zelf"
  - d "De WA-verzekering van haar scooter"
- Correct: d
- Retry pointer: doc avp line n3d and rule r3.
- Nudge: "Waarmee rijdt Noor? Zoek dat woord in artikel 3 en in de regels."
- Hint: "Welke verzekering moest Noor in kamer 1 hebben voor haar scooter?"
- Explanation: "Schade met een scooter staat in artikel 3d. Die schade betaalt de WA-verzekering van de scooter. De schade aan haar eigen scooter betaalt Noor zelf. Of een cascoverzekering, als ze die heeft."
- Sources: roWA, wam, wig
- Note: room 1 established that the scooter has a WA-verzekering (V1.1). The last two sentences answer the obvious pupil question "en haar eigen scooter?" (r4).

### Cijfer kamer 2
- Clue: "Het 2e cijfer van het slot: in welk artikel van de voorwaarden staat wat niet verzekerd is?"
- Digit: **3** (artikel 3a to 3d; `clueDocs: ['avp']`).
- Remember: "Lees altijd twee dingen: wat is verzekerd, en wat is niet verzekerd. Een aansprakelijkheidsverzekering is voor schade bij een ander."

---

## Kamer 3. Eigen risico rekenen (maandag 6 september 2027)

**Intro:** "Noor woont nu op kamers. Ze kijkt in Mijn Kompas naar haar zorgkosten van 2027. Ze heeft alleen het verplicht eigen risico. Ook koopt ze een nieuwe telefoon."

### Document 3a: zorgkosten (type: table with head, id: zorg)
Title: "Mijn Kompas: je zorgkosten in 2027 tot nu toe". From: "Zorgverzekeraar Kompas (verzonnen)".
Head: "Datum" | "Zorg" | "Kosten"
- z1 "9 februari" | "Huisarts: consult" | "€ 13"
- z2 "3 april" | "Spoedeisende hulp in het ziekenhuis: enkel verstuikt" | "€ 260"
- z3 "22 juni" | "Ziekenhuis: afspraak bij de huidarts" | "€ 210"
- z4 "17 juli" | "Huisartsenpost: oorontsteking" | "€ 95"
Note: "Kompas haalt geen andere zorg uit je eigen risico."

Design note: no column says which cost falls under the eigen risico; the pupil decides with r3 and r4. The note closes r5 (an insurer may exempt more care, Bzv art. 2.17 lid 2), so the answer of V3.1 is single. Prices are fictional and not checked against NZa tariffs (see Onzeker); no answer depends on z1 or z4. No lab test is listed on purpose: Rijksoverheid says lab costs after a huisarts visit "kunnen" fall under the eigen risico, which would open a second answer.

### Document 3b: aanbod telefoonverzekering (type: listing, id: tel)
Site: "telefoonwinkel-zeestad.example (verzonnen)". Title: "Telefoonverzekering bij je nieuwe telefoon". Price: "€ 100 per jaar".
- f1 "Wat is verzekerd?" | "Schade aan je telefoon, zoals een kapot scherm"
- f2 "Diefstal" | "niet verzekerd"
- f3 "Eigen risico" | "geen"

**Moeilijke woorden (plain, on doc zorg):** "Eigen risico: het deel van je zorgkosten dat je zelf betaalt. Premie: wat je verzekering kost. Spoedeisende hulp: de afdeling van het ziekenhuis voor spoed. Huisartsenpost: de huisarts 's avonds, 's nachts en in het weekend. Huidarts: een specialist in het ziekenhuis voor je huid."
**Moeilijke woorden (plain, on doc tel):** "Verwacht schadebedrag: de kans op schade keer het bedrag van de schade."

**Rule box (`rules`, title "Regels"):**
- r1 "Ben je 18 of ouder? Dan betaal je de eerste zorgkosten uit de basisverzekering zelf. Dat heet het verplicht eigen risico."
- r2 "In 2027 is het verplicht eigen risico € 400 per jaar."
- r3 "Voor een bezoek aan de huisarts of de huisartsenpost betaal je geen eigen risico. Ook niet voor de verloskundige en de kraamzorg."
- r4 "Voor zorg in het ziekenhuis betaal je meestal wel eigen risico. Bijvoorbeeld bij de spoedeisende hulp of een specialist."
- r5 "Je verzekeraar kan nog meer zorg uit het eigen risico halen. Dat staat dan in je polis."
- r6 "Je kunt een vrijwillig eigen risico kiezen: € 100, € 200, € 300, € 400 of € 500 extra. Dan krijg je korting op je premie."

Note on r2: the amount comes from the Regeling of 25 September 2026 (Stcrt. 2026, 34372, art. 1 "wordt vastgesteld op € 400", art. 2 "treedt in werking met ingang van 1 januari 2027"), based on Zvw art. 19 lid 2 and 3. The Rijksoverheid Q&A page on eigen risico (modified 4 November 2026) still says "Het verplichte eigen risico voor 2026 en in 2027 is € 385". The Staatscourant regulation is the legal source and wins; the teacher Q&A says so, and Onzeker asks for a re-check in December 2026. r3 is the short list from Bzv art. 2.17 lid 1 (verloskundige zorg en kraamzorg, huisartsenzorg) and Rijksoverheid ("huisartsenzorg (waaronder de huisartsenpost)"); the longer list (ketenzorg, wijkverpleging and more) is teacher detail. r3 says "een bezoek aan" because Rijksoverheid separates the visit from lab tests the huisarts orders ("Een bezoek aan de huisarts valt niet onder het verplicht eigen risico. Wel kunnen onderzoeken die een huisarts doet gevolgen hebben"). r4: Rijksoverheid "Een behandeling bij de spoedeisende hulp valt voor iedereen vanaf 18 jaar onder het verplicht eigen risico." and its example "Bijvoorbeeld voor een behandeling in het ziekenhuis". r4 says "meestal" because Bzv art. 2.17 lid 1 also exempts some care that can take place in a hospital (verloskundige zorg, advice the huisarts asks for); both hospital rows of doc zorg are named examples in r4 (spoedeisende hulp, specialist), so V3.1 keeps one answer.

### Vraag 3.1 (id: zelf, kind: number, unit €, docs: zorg)
- Prompt: "Hoeveel eigen risico betaalt Noor over 2027 tot nu toe zelf?"
- Correct: 400 (tolerance 0)
- Retry pointer: rules r2, r3, r4.
- Nudge: "Welke rijen vallen onder regel 4? Tel die op. Kijk dan naar regel 2."
- Hint: "Welke twee rijen gaan over het ziekenhuis?"
- Explanation: "Voor de huisarts en de huisartsenpost betaalt Noor geen eigen risico. Het ziekenhuis kost € 260 + € 210 = € 470. Maar het verplicht eigen risico is in 2027 hoogstens € 400. De rest, € 70, betaalt Kompas."
- Sources: stcrt34372, zvw19, bzv217, roER, roMis
- Note: the most likely wrong first try is 470 (cap forgotten) or 578 (all rows). A careful reader is not punished: the doc note rules out r5, the intro says "alleen het verplicht eigen risico", and Noor was 18 for the whole year (story time). If the 2027 amount were ever changed, V3.1, V3.2, C3 and B3 change; the digit does not (see "Voor een nieuw jaar").

### Vraag 3.2 (id: vrijwillig, kind: pick, docs: zorg)
- Situ: "Stel: Noor had voor 2027 € 500 vrijwillig eigen risico gekozen. Dan kreeg ze € 20 korting per maand. Er komt in 2027 geen zorg meer bij."
- Prompt: "Wat had Noor dat in 2027 opgeleverd, vergeleken met nu?"
- Options:
  - a "€ 70 meer kosten, door het hogere eigen risico"
  - b "€ 240 minder kosten, door de korting"
  - c "€ 500 meer kosten, door het vrijwillig eigen risico"
  - d "€ 170 minder kosten, eigen risico en korting samen"
- Correct: d
- Retry pointer: rule r6 and situ "Dan kreeg ze € 20 korting per maand."
- Nudge: "Reken twee dingen uit: hoeveel meer eigen risico, en hoeveel korting in 12 maanden."
- Hint: "Met € 900 eigen risico betaalt Noor de ziekenhuiskosten helemaal zelf. Hoeveel is dat?"
- Explanation: "Met € 500 vrijwillig had Noor € 470 eigen risico betaald. Dat is € 70 meer dan nu. Maar ze kreeg 12 × € 20 = € 240 korting. Samen is dat € 170 minder. Met een grote ziekenhuisrekening was het anders. Dan betaal je tot € 900. Dat kost € 500 min € 240 = € 260 meer."
- Sources: zvw20, roER, sylG1
- Note: economie G1.4 ("een afweging ... in relatie tot de hoogte van een eigen risico (in euro's) en/of premiekorting"). Each wrong option is one half of the sum, each with its reason, so length and wording are alike. The € 20 discount is fictional; Zvw art. 20 lid 2 and 4 let the insurer set the discount in its modelovereenkomst. The explanation ends with the other side of the trade-off, so the lesson does not suggest that a high eigen risico is always better (G1.2: the choice depends on risk aversion and own means).

### Vraag 3.3 (id: verwacht, kind: number, unit €, docs: tel)
- Situ: "Stel: de kans dat Noors telefoon in een jaar kapotgaat, is 1 op 10. Een reparatie kost dan € 250."
- Prompt: "Wat is het verwachte schadebedrag per jaar, zonder verzekering?"
- Correct: 25 (tolerance 0)
- Retry pointer: plain of doc tel, part "de kans op schade keer het bedrag van de schade" (`pointTo: { plain: '...' }`, engine feature in README).
- Nudge: "Lees bij Moeilijke woorden wat een verwacht schadebedrag is."
- Hint: "1 op 10 is hetzelfde als 10 procent."
- Explanation: "10 procent van € 250 is € 25 per jaar. De premie is € 100 per jaar. Dat is meer dan de verwachte schade. Met een verzekering betaal je voor zekerheid. Of je dat wilt, hangt af van hoe erg jij risico vindt. En of je € 250 zelf kunt betalen."
- Sources: sylG1, wig
- Note: economie G1.1 ("risico als verwacht schadebedrag (in euro's)") and G1.2 (risico-aversie, kosten en opbrengsten, eigen middelen). The 1-in-10 chance is an assumption marked "Stel"; no claim about real breakage rates is made. f2 (no theft cover) and f3 (no eigen risico) keep the sum to one step. The explanation gives no advice to buy or not; Wijzer in geldzaken: "vraag je eerst af of je de kosten niet zelf kunt betalen".

### Cijfer kamer 3
- Clue: "Het 3e cijfer van het slot: de telefoonverzekering kost € 100 per jaar. Het verwachte schadebedrag is € 25 per jaar. Hoeveel keer zo hoog is de premie?"
- Digit: **4** (100 / 25; all facts are in the clue; `clueDocs: ['tel']`). Chosen so the digit does not depend on the real € 400.
- Remember: "Voor een bezoek aan de huisarts betaal je geen eigen risico, voor het ziekenhuis meestal wel. Een hoger eigen risico geeft korting, maar je loopt meer risico."

---

## Kamer 4. Schade melden (vrijdag 1 oktober 2027)

**Intro:** "Noor heeft sinds 1 september een eigen inboedelverzekering voor haar kamer. Op vrijdag 1 oktober komt ze thuis. Haar kamerdeur is opengebroken. Haar laptop is weg."

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

Design note on the fictional terms: BW 7:941 lid 1 sets no number of days ("zo spoedig als redelijkerwijs mogelijk is"), so a policy may name a term; k3 keeps the legal "zo snel als je kunt" first and the 7 days second. "Uiterlijk 7 dagen na de dag waarop" makes the count unambiguous (1 + 7 = 8 oktober). No fictional clause says "te laat = geen geld" or "liegen = nooit geld": BW 7:941 lid 4 and 5 are semi-dwingend (BW 7:943 lid 2), so such a clause would clash with the law. The consequences are in the rule box only, worded as the law has them.

**Moeilijke woorden (plain, on doc kvw):** "Braak: iemand breekt een deur of raam open om binnen te komen. Aangifte: je meldt bij de politie dat er iets strafbaars is gebeurd. Bankafschrift: een overzicht van je bank waarop de betaling staat."
**Moeilijke woorden (plain, on doc formulier):** "Misleiden: iemand expres iets laten geloven dat niet waar is. Redelijkerwijs: zoals je het van iemand mag verwachten."

**Rule box (`rules`, title "Regels"):**
- r1 "In de wet staat: meld schade zo snel als redelijkerwijs kan. Je polis kan daarvoor een termijn noemen."
- r2 "Geef je verzekeraar ook de informatie en papieren die hij nodig heeft."
- r3 "Meld je te laat, of stuur je iets niet? Dan kan de verzekeraar minder betalen als hij daardoor schade heeft. Soms krijg je dan niets."
- r4 "Lieg je om de verzekeraar te misleiden? Dan kun je je recht op geld voor die schade verliezen."

Note on r3 and r4: r3 is BW 7:941 lid 3 ("kan de verzekeraar de uitkering verminderen met de schade die hij daardoor lijdt") and lid 4 (loss of the whole right only if the policy says so and the insurer "daardoor in een redelijk belang is geschaad"), so "Soms krijg je dan niets", not "dan krijg je niets". r4 is lid 5 ("Het recht op uitkering vervalt indien ... met het opzet de verzekeraar te misleiden, behoudens voor zover deze misleiding het verval van het recht op uitkering niet rechtvaardigt"), so "kun ... verliezen". Both are conditions, not automatic consequences.

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
- Explanation: "Artikel 3 zegt: uiterlijk 7 dagen na de dag waarop je de schade ontdekt. Dat is vrijdag 8 oktober. Wacht niet tot de laatste dag. De wet zegt: zo snel als redelijkerwijs kan."
- Sources: bw7941
- Note: option b is the off-by-one error ("binnen 7 dagen" read as 7 days including 1 October); the clause says "na de dag", which rules it out. Option a is a misreading of "zo snel als je kunt" as a deadline. 1 October 2027 falls after the ingangsdatum (b2) and the theft was at the verzekerde adres (b1), so no question about cover arises.

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
- Sources: bw7941. None line for the list itself is not needed: the list is in the fictional k4, the duty to send information is BW 7:941 lid 2.
- Note: the bankafschrift item rewards reading to the end of k4 ("Heb je die niet meer?"). Real insurers often ask for an aangifte at theft; this is not stated as a rule, only as the fictional policy's demand.

### Vraag 4.3 (id: eerlijk, kind: pick, docs: formulier)
- Situ: "Een vriend zegt: 'Schrijf op dat je laptop € 1.200 kostte. Dan krijg je meer.' Hij kostte € 650."
- Prompt: "Mag Noor dat doen?"
- Options:
  - a "Ja, want een verzekeraar haalt er toch altijd iets af"
  - b "Ja, als Noor het later verbetert"
  - c "Nee, maar als het uitkomt, krijgt ze gewoon € 650"
  - d "Nee, want dan kan Noor haar recht op geld voor deze diefstal verliezen"
- Correct: d
- Retry pointer: rule r4.
- Nudge: "Lees regel 4. Waarom wil de vriend een hoger bedrag opschrijven?"
- Hint: "Wat betekent misleiden bij Moeilijke woorden?"
- Explanation: "Een hoger bedrag opschrijven om meer geld te krijgen, is misleiden. Dan kan je hele recht op geld voor die schade vervallen. Vul dus altijd de echte prijs in."
- Sources: bw7941, bw7943
- Note: option c states a sure outcome ("gewoon € 650") that the law does not give: the right lapses unless the misleading "het verval ... niet rechtvaardigt" (lid 5), so c is wrong as a statement while d keeps "kan". Two options start "Ja" and two "Nee", so the first word does not give the answer.

### Cijfer kamer 4
- Clue: "Het 4e cijfer van het slot: Noor ontdekt de diefstal op 1 oktober. Ze meldt uiterlijk 7 dagen na die dag. Welke dag in oktober is dat?"
- Digit: **8** (1 + 7; all facts are in the clue; `clueDocs: ['kvw']`).
- Remember: "Meld schade snel, stuur het bewijs mee en vul alles eerlijk in."

---

## Plan en papiertje: Mijn verzekeringscheck

The plan is personal: each pupil makes their own, on paper and, if they want, on the end screen. The screen version uses the existing engine plan (`when`, `then`, `within`, own text). It stays on the screen only: never logged, never sent, never stored. The paper slip stays with the pupil; the teacher does not collect it. Many havo 4 and vwo 5 pupils are not 18 yet, so every line works before 18 too.

Engine data:
- `plan.intro`: "Kies één ding dat je gaat checken. Zet er een moment bij."
- `plan.when`: ["ik vandaag thuis ben", "het weekend is", "ik 18 word"]
- `plan.then`: ["vraag ik of ik via de aansprakelijkheidsverzekering van thuis verzekerd ben", "lees ik op een polis van thuis wat er bij 'Wie is verzekerd' staat", "zoek ik op hoe hoog het verplicht eigen risico dan is"]
- `plan.within`: ["een dag", "een week", "twee weken"]
- Own text field (existing): pupils may type their own "dan".

Paper slip `slip` "Mijn verzekeringscheck" (optional, one per pupil, two per A4; printed from the teacher screen with the existing "Print plan-strookjes"; `screen: false`, so the end screen shows a read-only reminder). Seven fields:
- title: "Mijn verzekeringscheck"
- intro: "Dit is van jou. Je hoeft het aan niemand te laten zien."
- fields:
  1. "Ik woon nu: thuis / op kamers / anders (omcirkel)" (lines 0)
  2. "Ik word 18 in (maand en jaar):" (lines 1)
  3. "Ben ik verzekerd via de aansprakelijkheidsverzekering van thuis? ja / nee / weet ik niet (omcirkel)" (lines 0)
  4. "Zo check ik dat:" hint "(bijvoorbeeld: polis lezen bij 'Wie is verzekerd', of het thuis vragen)" (lines 1)
  5. "Ga ik op kamers? Dan check ik of mijn spullen daar verzekerd zijn:" hint "(ja / nee / nog niet nodig)" (lines 1)
  6. "Staat er straks een scooter, brommer, motor of auto op mijn naam? Dan regel ik een WA-verzekering." hint "(ja / nee)" (lines 0)
  7. "Eén vraag die ik stel aan iemand thuis of aan mijn mentor:" (lines 2)
- footer: "Regels: Rijksoverheid.nl (zorgverzekering, WA-verzekering). Bij je eigen polis: lees 'Wie is verzekerd' en 'Wat is niet verzekerd'."

The slip asks no policy number, insurer name, health or money detail. "Thuis" and "iemand thuis" are neutral on purpose (care point 1). The validator checks that seven fields fit one A4 half; field 3 and 6 are long labels with circled choices, so check `E18Slip.hintBelow` in the build.

---

## Start- en eindcheck: twee parallelle vormen, A en B (elk 4 vragen, één per kamer, enkele keuze, score 0 tot 4)

No feedback during the check. Each question works without the room's documents and rule box. Question n of form A and question n of form B test the same rule at the same difficulty with a different case. Counterbalance as in ESC-KAMER. No check item repeats a room question: room 1 asks a scooter, the checks a brommer and a pupil without a vehicle; room 2 asks Noor's phone, Daan's laptop and a borrowed console, the checks an own laptop and a friend's phone; room 3 asks € 500 vrijwillig, the checks € 300 and € 100; room 4 asks a laptop price, the checks a bike bag and a fake theft. The right answer is in a different place in each item.

### Vorm A

| # | Kamer | Vraag | Opties | Goed | Regel en bron |
|---|---|---|---|---|---|
| C1 | 1 Moet of mag | "Je bent 19. Je hebt een brommer op je naam en rijdt er elke dag mee. Welke verzekering moet je voor de brommer hebben?" | a Een WA-verzekering; b Een cascoverzekering; c Geen: dat kies je zelf | a | WA verplicht (roWA, wam) |
| C2 | 2 Polis | "Je hebt een aansprakelijkheidsverzekering. Je laat je eigen laptop vallen. Betaalt die verzekering de schade?" | a Ja, want het was per ongeluk; b Ja, als je het binnen een week meldt; c Nee, want het zijn je eigen spullen | c | AVP: schade bij een ander (wig, bw6162) |
| C3 | 3 Eigen risico | "Je bent 20. Voor 2027 kies je € 300 vrijwillig eigen risico. Hoeveel eigen risico heb je dan in 2027 in totaal?" | a € 300; b € 400; c € 700 | c | € 400 + vrijwillig (stcrt34372, zvw20, roER) |
| C4 | 4 Melden | "Je fiets is gestolen. Je meldt dat er ook een dure fietstas aan hing. Dat is niet waar. Wat zegt de wet?" | a Een kleine leugen mag, want de fiets is echt gestolen; b Je wilt de verzekeraar misleiden. Dan kun je je recht op geld voor deze schade verliezen.; c De verzekeraar moet de fiets dan toch altijd betalen | b | misleiden (bw7941 lid 5) |

### Vorm B

| # | Kamer | Vraag | Opties | Goed | Regel en bron |
|---|---|---|---|---|---|
| B1 | 1 Moet of mag | "Je bent 18, woont in Nederland en zit op school. Je hebt geen scooter, brommer, motor of auto. Welke verzekering moet je hebben?" | a Een aansprakelijkheidsverzekering; b Een basisverzekering voor zorg; c Een inboedelverzekering | b | basis verplicht (roVerplicht, zvw2) |
| B2 | 2 Polis | "Je stoot per ongeluk de telefoon van een vriendin van tafel. Je bent aansprakelijk. Je had de telefoon niet geleend. Betaalt je aansprakelijkheidsverzekering?" | a Nee, want het was per ongeluk; b Nee, alleen schade aan mensen is verzekerd; c Ja, want het is schade aan spullen van een ander | c | AVP: schade bij een ander (wig, bw6162) |
| B3 | 3 Eigen risico | "Je bent 22. Voor 2027 kies je € 100 vrijwillig eigen risico. Hoeveel eigen risico heb je dan in 2027 in totaal?" | a € 500; b € 100; c € 400 | a | € 400 + vrijwillig (stcrt34372, zvw20, roER) |
| B4 | 4 Melden | "Je telefoon is kapot gevallen. Alleen diefstal is verzekerd. Daarom meld je dat hij gestolen is. Wat zegt de wet?" | a Dat mag, want de telefoon is echt kapot; b De verzekeraar moet de telefoon dan toch betalen; c Je wilt de verzekeraar misleiden. Dan kun je je recht op geld voor deze schade verliezen. | c | misleiden (bw7941 lid 5) |

Parallel checks: C1 and B1 ask which insurance the law demands, one with and one without a vehicle; B1 says "woont in Nederland en zit op school" so the r2 exceptions cannot apply, C1 "rijdt er elke dag mee" so the RDW schorsing cannot. C2 and B2 test whose property is damaged, each with "per ongeluk" as the distractor; B2 says "Je bent aansprakelijk" and "niet geleend" so fault and lending cannot muddle it. C3 and B3 add a vrijwillig step to the 2027 € 400; the ages (20, 22) close the under-18 rule. C4 and B4 test misleading with a different lie; their right option is worded differently from V4.3 ("Nee, want dan kan Noor ...") so a pair cannot match it from memory of the room (gate X1). Right answers: A a, c, c, b; B b, c, a, c.

Score: 1 point per right answer, 0 to 4, before and after, shown per pair on the end screen.

---

## Lesplan voor de docent (45 minuten)

Teacher screen, `teacher.audience`:
1. "Voor havo 4 en 5 en vwo 5 en 6. Past bij economie (domein G1, Risico en verzekeren) en bij het mentoruur."
2. "Gecontroleerd op 7 november 2026. Het verhaal en de bedragen gaan over 2027. Controleer in december 2026 opnieuw."

| Lesminuut | Duur | Onderdeel | Wat je doet |
|---|---|---|---|
| 0 tot 4 | 4 | Uitleg en inloggen | Zet de link en de klascode al op het bord voordat de les begint. Zeg: de verhalen en verzekeraars zijn verzonnen, de regels zijn echt. Deze les raadt geen verzekering aan. Leerlingen werken met z'n tweeën op één scherm. Deel de papiertjes "Mijn verzekeringscheck" uit als je ze gebruikt. |
| 4 tot 6 | 2 | Startcheck | Elk tweetal beantwoordt vier vragen (vorm A of B) voordat de klok start. Geef geen hints. |
| 6 tot 32 | 26 | Escape | Start de klastimer. Tweetallen spelen vier kamers en schrijven elk cijfer op. Klaar voor de tijd? Bespreek samen de gespreksvraag van kamer 3 en vul alvast je papiertje in. |
| 32 | | Stop | Op minuut 32 stopt iedereen, ook wie nog niet klaar is. Lees de cijfers voor van je geprinte antwoordblad. Alle tweetallen doen daarna de eindcheck. |
| 32 tot 35 | 3 | Stop en eindcheck | De andere vorm: vier vragen over dezelfde regels. Daarna ziet elk tweetal wat het goed had, voor en na. |
| 35 tot 39 | 4 | Nabespreken | Vraag met handopsteken: wie had bij de startcheck 3 of 4 goed? En bij de eindcheck? Vraag welke kamer het lastigst was en begin daar. |
| 39 tot 44 | 5 | Mijn verzekeringscheck | Iedereen kiest zijn eigen plan of vult het papiertje in. Niemand hoeft iets voor te lezen. Stel daarna de slotvraag. |
| 44 tot 45 | 1 | Reserve | Voor inloggen dat uitloopt. De escape stopt altijd op minuut 32. |

Total 45 minutes: 4 + 2 + 26 + 3 + 4 + 5 + 1 = 45. `minutes: 26`. Materials: "Een apparaat per tweetal (laptop, Chromebook of telefoon), pen en papier voor de cijfers, een digibord of beamer. Wil je het papiertje gebruiken? Print het vóór de les: 1 per leerling. Voor kamer 3 mag een rekenmachine." (phones count as a calculator).

Why the Route 18 timing (stop at minute 32) is kept: the same 26-minute escape and 5-minute plan fit, and teachers who know one lesson know the other. Estimate for a careful pair, from text volume against Route 18 (20 to 25 minutes): rooms 1 and 2 are shorter reading, room 3 has three sums, room 4 has three short documents, so 20 to 26 minutes, plus or minus 30 percent. Room 3 is third, not last, so slow pairs still meet the economie core before the stop. A pair stopped in room 4 misses the claim rules; the end check C4/B4 and the debrief cover them.

Tip voor de docent: "Een fout antwoord wordt doorgestreept. Een tweetal kan dus gokken tot het goed is. Het telt dan alleen niet mee bij 'In één keer goed'. Vertel de klas dat goed lezen sneller gaat."

Care points ("Let op"):
1. "Niet iedereen woont bij ouders of heeft thuis verzekeringen. Laat niemand vertellen hoe het thuis zit. Het papiertje is van de leerling: niet inleveren."
2. "Deze les raadt geen verzekering en geen verzekeraar aan. Zeg niet wat slim is. Of je je verzekert, hangt af van je geld en hoe erg je risico vindt."
3. "Vraag niet naar zorgkosten of ziektes van leerlingen. Kamer 3 gaat over Noor."
4. "Veel leerlingen zijn nog geen 18. Voor hen geldt nog geen eigen risico. Zeg erbij dat kamer 3 vooruitkijkt."
5. "Voor economie: kamer 3 oefent G1.1 (verwacht schadebedrag) en G1.4 (eigen risico en premiekorting). Het eigen risico is ook een middel tegen moral hazard (G2.3). Kamer 1 past bij G2.2: een verplichte verzekering gaat averechtse selectie tegen."

Note for developers: the stop at minute 32 uses the existing engine stop flow. The digits are never on the open lesson plan.

### Voor de docent, per kamer

Kern (`teacherNote`):
- Kamer 1: "Verplicht: de basisverzekering voor zorg en de WA voor een voertuig op je naam dat je gebruikt. De rest kies je zelf."
- Kamer 2: "Lees wat verzekerd is én wat niet. Een aansprakelijkheidsverzekering is voor schade bij een ander."
- Kamer 3: "Eigen risico 2027: € 400. Niet voor een huisartsbezoek, meestal wel voor het ziekenhuis. Hoger eigen risico: korting, maar meer risico."
- Kamer 4: "Meld schade snel, met bewijs, en eerlijk."

Dit wordt vaak gevraagd (`teacher.faq`):
- "Op Rijksoverheid.nl staat € 385 voor 2027. Wat klopt?" Antwoord: "De officiële regeling in de Staatscourant zegt € 400 voor 2027 (Stcrt. 2026, 34372). Die geldt. De Rijksoverheid-pagina was op 7 november 2026 nog niet aangepast."
- "Ben ik nog via mijn ouders verzekerd als ik op kamers ga?" Antwoord: "Dat verschilt per polis. Kijk in de voorwaarden bij 'Wie is verzekerd'. Of vraag het de verzekeraar."
- "Ben je pas vanaf 18 zelf aansprakelijk?" Antwoord: "Nee. Vanaf 14 jaar kun je zelf aansprakelijk zijn. Tot je 16e kunnen ook je ouders aansprakelijk zijn."
- "Is een telefoonverzekering slim?" Antwoord: "Dat kies je zelf. Vraag je eerst af of je de kosten zelf kunt betalen. Lees daarna goed de voorwaarden."
- "Wat gebeurt er als je te laat meldt?" Antwoord: "De verzekeraar kan minder betalen als hij daardoor schade heeft. Alleen als de polis dat zegt en hij echt nadeel heeft, kan het niets worden."
- "Moet een speedpedelec ook een WA-verzekering hebben?" Antwoord: "Ja. Rijksoverheid noemt de speedpedelec bij de voertuigen met een verplichte WA-verzekering."

Bronnen en uitzonderingen (`teacherDetail`, closed; each point from the source table):
- Kamer 1: Basisverzekering verplicht voor wie in Nederland woont of werkt (Rijksoverheid; Zvw art. 2 lid 1), op elke leeftijd; voor een minderjarige zorgt de ouder met gezag ervoor (Zvw art. 2 lid 3). Uitzonderingen: militaire ambtenaar in werkelijke dienst en wie ontheven is als gemoedsbezwaarde (Zvw art. 2 lid 2; Rijksoverheid). Aanvullende verzekering niet verplicht (Rijksoverheid). WA-verzekering verplicht voor de bezitter en voor wie op het kenteken staat, als het motorrijtuig op de weg staat of rijdt, of op naam staat (WAM art. 2 lid 1); ook bij duurzaam gebruik zonder eigendom (Rijksoverheid; WAM art. 2 lid 2); niet zolang het voertuig bij de RDW geschorst is (WAM art. 2 lid 3). Rijksoverheid noemt auto, motor, scooter, brommer, speedpedelec en snorfiets. Aansprakelijkheid, inboedel en reis zijn niet verplicht (Wijzer in geldzaken, secundair). Bijzondere gevallen met een verplichte aansprakelijkheidsverzekering (bijvoorbeeld bij een jachtakte) zijn niet gecontroleerd. Uitwonende kinderen op de polis van de ouders: per verzekeraar anders; vaak genoemde voorwaarden zijn voltijd studeren, ongehuwd, ingeschreven in Nederland en soms een leeftijdsgrens (twee commerciële pagina's, alleen ter controle gelezen, niet genoemd in de les).
- Kamer 2: Een aansprakelijkheidsverzekering betaalt alleen als je aansprakelijk bent: bij een onrechtmatige daad die je kan worden toegerekend (BW 6:162). Is niemand iets te verwijten, dan hoeft niemand te betalen en betaalt ook de verzekering niet. Vanaf 14 jaar kun je zelf aansprakelijk zijn (BW 6:164); voor 14- en 15-jarigen zijn de ouders ook aansprakelijk, tenzij hun niets te verwijten is (BW 6:169 lid 2). Opzet: "De verzekeraar vergoedt geen schade aan de verzekerde die de schade met opzet of door roekeloosheid heeft veroorzaakt" (BW 7:952); dit is regelend recht, dus een polis kan het anders regelen. Schade met een motorrijtuig valt onder de WA (WAM art. 3 lid 1); schade aan de bestuurder zelf hoeft de WA niet te dekken (WAM art. 4 lid 1). Eigen schade: casco (Wijzer in geldzaken). Echte polissen dekken geleende of gehuurde spullen soms wel, soms tot een bedrag: dat is niet gecontroleerd en staat daarom niet in de les.
- Kamer 3: Verplicht eigen risico vanaf 18 jaar per kalenderjaar (Zvw art. 19 lid 1); voor 2027 vastgesteld op € 400 (Stcrt. 2026, 34372); in 2026 € 385. De extra verhoging met € 60 (wetsvoorstel 36 943) is een jaar uitgesteld (toelichting bij Stcrt. 2026, 34372). Buiten het verplicht eigen risico (Bzv art. 2.17 lid 1): verloskundige zorg en kraamzorg, de NIPT, huisartsenzorg (ook de huisartsenpost, Rijksoverheid), multidisciplinaire eerstelijnszorg met huisartsenzorg (ketenzorg), advies dat de huisarts vraagt, de gecombineerde leefstijlinterventie, zorg aan donoren na de periode van art. 2.5, vervoer bij donatie, wijkverpleging (art. 2.10). Onderzoek in een lab na een huisartsbezoek kan wel van je eigen risico af gaan (Rijksoverheid). De spoedeisende hulp valt vanaf 18 onder het eigen risico; zonder noodzaak of verwijzing betaal je de kosten zelf (Rijksoverheid). De verzekeraar kan zorgaanbieders, programma's, medicijnen en hulpmiddelen uitsluiten van het eigen risico (Bzv art. 2.17 lid 2). Rekeningen tellen mee als de verzekeraar ze vóór 31 december van het jaar erna ontvangt (Zvw art. 19 lid 4; Bzv art. 2.17 lid 3). Vrijwillig eigen risico € 100 tot € 500 in stappen van € 100, met premiekorting die de verzekeraar in zijn modelovereenkomst zet (Zvw art. 20). Begint of eindigt je verzekering niet op 1 januari, dan geldt een deel van het eigen risico naar het aantal dagen (Zvw art. 22). Je kunt bij je verzekeraar een betalingsregeling vragen om het eigen risico in termijnen te betalen (Rijksoverheid). Onder 18 geen eigen risico (Rijksoverheid). Waarom een eigen risico: de premie blijft lager en je wordt bewuster van de kosten (Rijksoverheid), in economietaal: een middel tegen moral hazard (syllabus G2.3).
- Kamer 4: Meldingsplicht: "zo spoedig als redelijkerwijs mogelijk is" (BW 7:941 lid 1); inlichtingen en bescheiden geven "binnen redelijke termijn" (lid 2). Niet nagekomen: de verzekeraar kan de uitkering verminderen met de schade die hij daardoor lijdt (lid 3); verval van het hele recht kan alleen worden bedongen als de verzekeraar "daardoor in een redelijk belang is geschaad" (lid 4). Misleiden met opzet: het recht vervalt, behalve voor zover de misleiding dat niet rechtvaardigt (lid 5). Van lid 1, 2, 4 en 5 mag een polis niet ten nadele van de verzekerde afwijken (BW 7:943 lid 2). Een vordering op de verzekeraar verjaart na drie jaar (BW 7:942 lid 1). Bij het afsluiten moet je eerlijk zijn over feiten die de verzekeraar wil weten (mededelingsplicht, BW 7:928); met een vragenlijst gaat het om de gestelde vragen (lid 6); de gevolgen staan in BW 7:930. De bereddingsplicht: doe wat redelijk is om schade te beperken (BW 7:957). Klachten over een verzekeraar: de pagina's van Kifid en de politie konden niet worden gelezen (zie Onzeker); daarom noemt de les geen klachtroute en geen aangifteprocedure.

## Antwoordblad

Answers are given as the text on screen, without letters.

| Kamer | Vraag | Goed antwoord |
|---|---|---|
| 1 | Verplicht voor Noor | Basisverzekering zorg; WA-verzekering scooter |
| 1 | Op kamers | De aansprakelijkheidsverzekering, maar de inboedelverzekering niet |
| 1 | Sem | Nee, want hij woont niet thuis en studeert niet |
| 1 | **Cijfer** | **2** (basisverzekering en WA) |
| 2 | Wat betaalt de verzekering | Noor stoot bij Daan thuis zijn laptop van tafel. Ze lette niet op.; Noor fietst tegen een geparkeerde auto. De auto krijgt een deuk. |
| 2 | Geleende spelcomputer | Nee, artikel 3c: Noor had de spelcomputer geleend |
| 2 | Scooter tegen auto | De WA-verzekering van haar scooter |
| 2 | **Cijfer** | **3** (artikel 3) |
| 3 | Eigen risico tot nu toe | € 400 |
| 3 | Vrijwillig eigen risico | € 170 minder kosten, eigen risico en korting samen |
| 3 | Verwacht schadebedrag | € 25 |
| 3 | **Cijfer** | **4** (€ 100 / € 25) |
| 4 | Uiterlijk melden | Vrijdag 8 oktober 2027 |
| 4 | Wat moet nog | Aangifte doen bij de politie en een kopie meesturen; Een bankafschrift van de aankoop meesturen |
| 4 | Hoger bedrag opschrijven | Nee, want dan kan Noor haar recht op geld voor deze diefstal verliezen |
| 4 | **Cijfer** | **8** (1 + 7 oktober) |
| | **Code** | **2348** |

Start- en eindcheck vorm A: C1 Een WA-verzekering; C2 Nee, want het zijn je eigen spullen; C3 € 700; C4 Je wilt de verzekeraar misleiden. Dan kun je je recht op geld voor deze schade verliezen. Vorm B: B1 Een basisverzekering voor zorg; B2 Ja, want het is schade aan spullen van een ander; B3 € 500; B4 Je wilt de verzekeraar misleiden. Dan kun je je recht op geld voor deze schade verliezen.

## Nabespreken

Drie gespreksvragen (kies er één of twee als de tijd kort is):
1. "Welke verzekering verraste je: omdat hij verplicht is, of juist niet?"
2. "Wat zou jij op een polis van thuis willen nakijken?"
3. "Wanneer zou jij een hoger eigen risico kiezen, en wanneer niet?"

Per kamer (`discuss`):
- Kamer 1: "Wat verandert er aan je verzekeringen als je op kamers gaat?"
- Kamer 2: "Je leent iets van een vriend en het gaat kapot. Wie betaalt, en hoe spreek je dat af?"
- Kamer 3: "Is € 100 per jaar voor een telefoonverzekering veel of weinig? Waar hangt dat van af?"
- Kamer 4: "Waarom is eerlijk invullen ook in je eigen belang?"

Slotvraag: "Noem één verzekering die verplicht is en één die je zelf kiest. Wat check jij deze week?"

Note: question 3 and the kamer 3 prompt ask for reasons, not for a right choice (G1.2: the choice depends on risk aversion and own means).

---

## Engine fit

Supported now, no change needed (README, `lessons/route-18.js`): `table` with `head` (tafel, zorg), `table` rows (blad, formulier), `contract` (wie, avp, kvw), `listing` with `site`, `price` and `facts` (tel), `plain` per document, room `rules` with numbered lines, `multi`, `single` and `number` with `unit: '€'`, `situ`, `pointTo` with `doc`/`lines`, `rule`/`rules`, `situ` and `plain`, `legend`, `clueFull`, `clueDocs`, `where`, `teacherNote`, `teacherDetail`, `discuss`, `sources`/`sourceNone`, check forms A/B, the stop flow at minute 32, `teacher.plan` with `from`/`to`/`at`, `teacher.audience`, `teacher.faq`, `materials`, `tip`, `care`, `answers` with `format: 'text'`, the plan with `when`, `then`, `within` and own text, and `slip` (seven fields; check the A4 fit in the validator).

No feature is a release blocker. Checks for the data file:
1. `where` lines: "Thuis aan de Duinweg (verzonnen)" (rooms 1 and 2), "Op kamers aan de Kadeweg (verzonnen)" (rooms 3 and 4).
2. Fixed shuffles: V1.2 and V2.2 (four options), V2.3, V3.2, V4.1 and V4.3 (four), V1.3 (three). After the shuffle, check that no letter is right more than twice in a row and that V4.3 does not show the two "Nee" options last.
3. `pointTo: { plain }` for V3.3 must match the gloss on doc tel word for word.
4. No option, prompt, nudge, hint or explanation uses "beide", "allebei", "geen van", "bovenstaande", "optie c" or "antwoord c" (checked by script, see Changelog), so no question needs `keepOrder`.
5. `.example` address in `listing.site` is plain text. The euro sign and "×" in explanations are not dashes.

---

## Brontabel

Pages read on 7 November 2026 with curl (HTML converted to text) or WebFetch. Law texts were downloaded today as BWB XML from repository.officiele-overheidspublicaties.nl (the consolidated version that wetten.overheid.nl redirected to today) and quoted from that XML. Staatscourant texts were downloaded as XML from zoek.officielebekendmakingen.nl. "Valid until": when the rule is next expected to change; "check" means the next scheduled check.

| Key | Rule (as used) | Source 1 | Source 2 | Checked | Valid until |
|---|---|---|---|---|---|
| roVerplicht / zvw2 | Basisverzekering verplicht for anyone who lives or works in the Netherlands; aanvullend not compulsory; exceptions: militairen in werkelijke dienst, gemoedsbezwaarden; parents arrange it for minors. | [Rijksoverheid, Ben ik verplicht een zorgverzekering af te sluiten?](https://www.rijksoverheid.nl/themas/familie-zorg-en-gezondheid/zorgverzekering/vraag-en-antwoord/zorgverzekering/ben-ik-verplicht-een-zorgverzekering-af-te-sluiten) ("Een basisverzekering is verplicht, een aanvullende verzekering niet."; "Wie in Nederland woont of werkt, moet een basisverzekering afsluiten."; "Wilt u wegens uw geloof geen zorgverzekering? Dan hoeft u geen zorgverzekering af te sluiten."; modified 28 Jul 2026) | [Zvw, BWBR0018450, version from 1 Jan 2026](https://wetten.overheid.nl/BWBR0018450/2026-01-01), art. 2 lid 1 ("is verplicht zich krachtens een zorgverzekering te verzekeren"), lid 2 a and b (militaire ambtenaar in werkelijke dienst; ontheffing art. 64 Wfsv), lid 3 (ouder met gezag over een minderjarige) | 7 Nov 2026 | No set date |
| roMis | A zorgverzekering is compulsory at every age; SEH falls under the eigen risico from 18; lab costs after a huisarts visit can count; huisartsenpost without eigen risico. | [Rijksoverheid, Misverstanden zorgverzekering](https://www.rijksoverheid.nl/themas/familie-zorg-en-gezondheid/zorgverzekering/vraag-en-antwoord/zorgverzekering/misverstanden-zorgverzekering) ("Een zorgverzekering is verplicht voor alle leeftijden."; "Een behandeling bij de spoedeisende hulp valt voor iedereen vanaf 18 jaar onder het verplicht eigen risico."; "Wel kunnen onderzoeken die een huisarts doet gevolgen hebben voor het eigen risico, bijvoorbeeld laboratoriumkosten bij bloedonderzoek."; "Voor een bezoek aan de huisartsenpost hoeft u geen eigen risico te betalen."; modified 3 Mar 2026) | roER, bzv217 | 7 Nov 2026 | No set date |
| roAanv (support for r3 room 1) | Aanvullende verzekering: your own choice. | [Rijksoverheid, Heb ik een aanvullende zorgverzekering nodig?](https://www.rijksoverheid.nl/themas/familie-zorg-en-gezondheid/zorgverzekering/vraag-en-antwoord/zorgverzekering/heb-ik-een-aanvullende-zorgverzekering-nodig) ("U bepaalt zelf of u een aanvullende verzekering nodig heeft."; modified 2 Jan 2026) | roVerplicht | 7 Nov 2026 | No set date |
| roWA / wam | WA-verzekering compulsory for the owner of an auto, motor, scooter, brommer, speedpedelec or snorfiets, or when the kenteken is on your name; also for durable use; not while geschorst at the RDW; the WA covers civil liability; need not cover damage to the driver. | [Rijksoverheid, WA-verzekering voertuig](https://www.rijksoverheid.nl/themas/verkeer-en-vervoer/voertuigen-op-de-weg/vraag-en-antwoord/auto/wa-verzekering-voertuig) ("Heeft u een auto, motor, scooter, brommer of snorfiets? Dan moet u volgens de Wet aansprakelijkheidsverzekering motorrijtuigen (Wam) een WA-verzekering afsluiten."; list "scooter, brommer, speedpedelec of snorfiets"; "U hoeft dan tijdelijk niet WA-verzekerd te zijn."; modified 7 Sep 2026) | [WAM, BWBR0002415, version from 24 Jul 2025](https://wetten.overheid.nl/BWBR0002415/2025-07-24): art. 2 lid 1 ("De bezitter van een motorrijtuig en degene op wiens naam dit in het kentekenregister is ingeschreven, zijn verplicht ... een verzekering te sluiten"), lid 2 c (duurzaam gebruik), lid 3 (buitengebruikstelling, schorsing); art. 3 lid 1 ("de burgerrechtelijke aansprakelijkheid"); art. 4 lid 1 ("De verzekering behoeft niet te dekken de aansprakelijkheid voor schade toegebracht aan de bestuurder") | 7 Nov 2026 | No set date |
| wig (secondary, semi-official) | Compulsory: zorgverzekering and WA; casco covers your own damage; AVP pays damage you cause by accident to another; inboedel covers your things at home; AVP, inboedel, reis not compulsory; first ask whether you can pay the cost yourself; read the voorwaarden. | [Wijzer in geldzaken, Alles over verzekeringen (PDF, created 6 Nov 2026)](https://www.wijzeringeldzaken.nl/verzekering/alles-over-verzekeringen/alles-over-verzekeringen.pdf) ("Deze verzekeringen zijn niet verplicht, maar het is wel slim om ze te hebben"; "De aansprakelijkheidsverzekering voor particulieren vergoedt de schade die je per ongeluk veroorzaakt bij een ander."; "De spullen in je huis verzeker je met een inboedelverzekering."; "Je kunt je WA-verzekering uitbreiden met een casco-dekking. Dan is ook jouw schade verzekerd."; "vraag je eerst af of je de kosten niet zelf kunt betalen. En kijk daarna goed naar de voorwaarden."). National platform for money education (its governance was not re-checked today); not on the brief's list of official sources, so treated as secondary. Its line "Een zorgverzekering is verplicht voor iedereen die 18 jaar of ouder is" is not used (conflicts with roMis). | none official for "AVP, inboedel, reis, telefoon niet verplicht": no such duty was found in the laws read (Zvw, WAM, BW 6 and 7) | 7 Nov 2026 | No set date |
| commAvp (commercial, teacher only) | Real family policies cover uitwonende kinderen under conditions that differ (studying, unmarried, registered in NL, sometimes an age limit). | Promovendum, "thuiswonende en uitwonende kinderen meeverzekerd" (read by WebFetch: "tot 24 jaar meeverzekerd"; "ongehuwd is en geen geregistreerd partnerschap heeft"; full-time study elsewhere allowed) | NN, "Kind gaat uit huis" (read by WebFetch: "Dan blijven ze meestal meeverzekerd op jouw aansprakelijkheidsverzekering."; "Dit kun je controleren in je polisvoorwaarden.") | 7 Nov 2026 | Not a rule; never shown or named in the lesson; no insurer is recommended |
| bw6162 | Liability: an onrechtmatige daad that can be attributed obliges you to pay the damage; under 14 not attributed to the child; parents liable for 14 and 15-year-olds unless not blameworthy. | [BW Boek 6, BWBR0005289, version from 16 Jul 2026](https://wetten.overheid.nl/BWBR0005289/2026-07-16), art. 6:162 lid 1 ("Hij die jegens een ander een onrechtmatige daad pleegt, welke hem kan worden toegerekend, is verplicht de schade die de ander dientengevolge lijdt, te vergoeden."), lid 3 (schuld) | art. 6:164 ("Een gedraging van een kind dat de leeftijd van veertien jaren nog niet heeft bereikt, kan aan hem niet als een onrechtmatige daad worden toegerekend."); art. 6:169 lid 2 (14 to 16: ouder aansprakelijk "tenzij hem niet kan worden verweten") | 7 Nov 2026 | No set date |
| bw7952 | No compensation for damage the insured caused with intent (or recklessness); regelend recht. | [BW Boek 7, BWBR0005290, version from 8 Oct 2026](https://wetten.overheid.nl/BWBR0005290/2026-10-08), art. 7:952 ("De verzekeraar vergoedt geen schade aan de verzekerde die de schade met opzet of door roekeloosheid heeft veroorzaakt.") | art. 7:963 (lists the articles that are dwingend or semi-dwingend; 7:952 is not among them) | 7 Nov 2026 | No set date |
| stcrt34372 / zvw19 | Verplicht eigen risico from 18 per calendar year; € 400 from 1 January 2027 (was € 385 in 2026); the extra € 60 (bill 36 943) is postponed a year. | [Stcrt. 2026, 34372, Regeling VWS van 25 september 2026](https://zoek.officielebekendmakingen.nl/stcrt-2026-34372.html) (art. 1: "Het bedrag, bedoeld in artikel 19, eerste lid, van de Zorgverzekeringswet, wordt vastgesteld op € 400."; art. 2: "Deze regeling treedt in werking met ingang van 1 januari 2027."; toelichting: "(in 2026: € 385)", "het kabinet heeft de voorgenomen inwerkingtredingsdatum met een jaar uitgesteld"; published 30 Sep 2026) | Zvw art. 19 lid 1 ("Iedere verzekerde van achttien jaar of ouder heeft een verplicht eigen risico van € 385 per kalenderjaar."), lid 2 and 3 (indexation; "bij ministeriële regeling gewijzigd, waarna het in die regeling genoemde bedrag in de plaats treedt"), lid 4 | 7 Nov 2026 | 31 Dec 2027 (2028 amount still to be set; bill 36 943) |
| roER | Eigen risico from 18 for basispakket care; not for huisartsenzorg incl. huisartsenpost, verloskundige zorg, kraamzorg, ketenzorg, wijkverpleging and more; the insurer can exempt more; under 18 none; vrijwillig + € 100 to € 500 with a premium discount; betalingsregeling possible. **Says € 385 for 2027; not used for the amount.** | [Rijksoverheid, Wanneer betaal ik een eigen risico voor mijn zorg?](https://www.rijksoverheid.nl/themas/familie-zorg-en-gezondheid/zorgverzekering/vraag-en-antwoord/zorgverzekering/eigen-risico-zorgverzekering) ("huisartsenzorg (waaronder de huisartsenpost)"; "verloskundige zorg en kraamzorg"; "De zorgverzekeraar kan ook bepaalde zorgaanbieders, zorgprogramma's, medicijnen en hulpmiddelen uitsluiten van het eigen risico."; "U kunt het verplichte eigen risico vrijwillig verhogen met € 100, € 200, € 300, € 400 of € 500. De zorgverzekeraar geeft dan korting op de maandelijkse premie"; "Bijvoorbeeld voor een behandeling in het ziekenhuis."; but also "Het verplichte eigen risico voor 2026 en in 2027 is € 385."; modified 4 Nov 2026) | bzv217, zvw20 | 7 Nov 2026 | Re-check Dec 2026 (amount line) |
| bzv217 | Care outside the verplicht eigen risico; the insurer may exempt more; bills count if received by 31 December of the following year. | [Besluit zorgverzekering, BWBR0018492, version from 1 Jul 2026](https://wetten.overheid.nl/BWBR0018492/2026-07-01), art. 2.17 lid 1 ("a. verloskundige zorg en kraamzorg, ... c. huisartsenzorg, d. multidisciplinaire eerstelijnszorg waar huisartsenzorg deel van uitmaakt, e. advies van een zorgverlener indien de huisarts dit heeft gevraagd ..."), lid 2 (insurer may exempt for designated providers, programmes, medicines, aids), lid 3 ("De dag, bedoeld in artikel 19, vierde lid, van de wet, is 31 december.") | Stcrt. 2026, 34372, toelichting ("o.a. huisartsenzorg, wijkverpleging, verloskundige zorg en kraamzorg"); roER | 7 Nov 2026 | No set date |
| zvw20 / zvw22 | Vrijwillig eigen risico € 100, € 200, € 300, € 400 or € 500 per calendar year for 18+, against a premium discount set in the modelovereenkomst; pro rata when the insurance does not start on 1 January. | Zvw art. 20 lid 2 ("varianten van de zorgverzekering aanbieden met een vrijwillig eigen risico van € 100, € 200, € 300, € 400 of € 500 per kalenderjaar, waartegenover hij een korting op de grondslag van de premie verleent"), lid 4 | roER; Zvw art. 22 lid 1 (pro rata by days, teacher only) | 7 Nov 2026 | No set date |
| sylG1 | G1.1 risk as chance and as expected damage in euros; G1.2 the decision to insure depends on risk aversion, costs and benefits, own means; G1.4 trade-off with eigen risico and premiekorting; G2.3 eigen risico against moral hazard. | [Examenblad, Syllabus economie havo 2027, versie 2, juli 2025](https://www.examenblad.nl/2027/havo/documenten/syllabus-economie-havo) (PDF; "1.1 Het verschil tussen risico als een inschatting van mogelijke gebeurtenissen (kans) en risico als verwacht schadebedrag (in euro's)."; "1.4 Een afweging kunnen maken tussen al dan niet afsluiten van een verzekering in de relatie tot de hoogte van een eigen risico (in euro's) en/of premiekorting."; "2.2 Averechtse selectie en middelen om dit te beperken: verplichte solidariteit, het verplicht voorschrijven van een verzekering, het instellen van een collectieve verzekering."; "2.3 Moral hazard en middelen om dit te beperken: eigen risico, bonusmalussysteem, premiedifferentiatie.") | vwo syllabus not re-read today (research file cites vwo 2025) | 7 Nov 2026 | Exam year 2027; check the 2028 syllabus |
| bw7941 / bw7943 | Report as soon as reasonably possible; give information and documents within a reasonable term; non-compliance: reduction by the insurer's damage; loss of the whole right only if stipulated and a reasonable interest is harmed; intent to mislead: right lapses unless not justified; lid 1, 2, 4, 5 semi-dwingend. | BW 7:941 lid 1 ("Dit geschiedt zo spoedig als redelijkerwijs mogelijk is."), lid 2 ("binnen redelijke termijn de verzekeraar alle inlichtingen en bescheiden te verschaffen"), lid 3 ("kan de verzekeraar de uitkering verminderen met de schade die hij daardoor lijdt"), lid 4 ("slechts bedingen voor het geval hij daardoor in een redelijk belang is geschaad"), lid 5 ("Het recht op uitkering vervalt indien ... met het opzet de verzekeraar te misleiden, behoudens voor zover deze misleiding het verval van het recht op uitkering niet rechtvaardigt.") | BW 7:943 lid 2 ("Van de artikelen ... 941 leden 1, 2, 4 en 5 en 942 kan niet ten nadele van de verzekeringnemer of de tot uitkering gerechtigde worden afgeweken.") | 7 Nov 2026 | No set date |
| bw7928 / bw7930 / bw7942 / bw7957 (teacher only) | Mededelingsplicht before closing; questionnaire limits it to the questions; consequences; 3-year limitation; duty to limit damage. | BW 7:928 lid 1 and 6; 7:930 lid 1 to 5 | BW 7:942 lid 1 ("verjaart door verloop van drie jaren"); 7:957 lid 1 | 7 Nov 2026 | No set date |
| ro18 (context) | From 18 an own zorgverzekering; a parent may arrange it. | [Rijksoverheid, 18 jaar: regelzaken op een rij](https://www.rijksoverheid.nl/themas/familie-zorg-en-gezondheid/achttien-jaar-worden/18-jaar-regelzaken-op-een-rij) ("Iedereen vanaf 18 jaar moet (verplicht) een eigen zorgverzekering hebben. Je mag ook een ouder of verzorger vragen om een zorgverzekering voor jou af te sluiten.") | roVerplicht | 7 Nov 2026 | No set date |

## Onzeker

- **€ 400 against € 385 for 2027.** Stcrt. 2026, 34372 (published 30 September 2026, in force 1 January 2027) sets € 400. The Rijksoverheid Q&A page on eigen risico, modified 4 November 2026, still says "Het verplichte eigen risico voor 2026 en in 2027 is € 385". Several Kamer motions in September and October 2026 asked not to raise the eigen risico (kst-37020-36, kst-37020-IX-35, kst-37020-XVI-71); I found no later regulation that changes the € 400 (SRU search of officielebekendmakingen.nl for "eigen risico" and "verplicht eigen risico" since 1 September 2026). The lesson uses € 400 and the teacher Q&A explains the page. Re-check in December 2026 and on 2 January 2027 (Staatscourant and the Rijksoverheid page). Affected: r2 room 3, V3.1, V3.2 (explanation sums), C3, B3, remember and Kern room 3. The digits and the code are not affected.
- **Parents' policies after moving out.** No official source covers this: it is contract law per insurer. Only two commercial pages were read (row commAvp), to confirm that conditions exist and differ; the Consumentenbond page "inboedelverzekering studenten" (updated 25 August 2026) showed only headings to me. The lesson uses a fictional clause and tells pupils to read their own voorwaarden.
- **"Niet verplicht" for aansprakelijkheid, inboedel, reis and telefoon.** One source says so in words (Wijzer in geldzaken, semi-official, treated as secondary); the laws read contain no such duty. Special cases (for example the liability insurance for a jachtakte, or drones) were not checked; r6 says "meestal" and Noor's story does not touch them.
- **Wijzer in geldzaken error.** Its PDF says the zorgverzekering is compulsory "voor iedereen die 18 jaar of ouder is"; Zvw art. 2 and Rijksoverheid say every age. Not used.
- **Pages that could not be read.** politie.nl (aangifte) and kifid.nl (complaints) returned "permission request not answered" and were not retried. So the lesson states no aangifte procedure and no complaint route; the aangifte in room 4 is only the fictional policy's demand.
- **Law versions.** BW 6 (toestand 16 Jul 2026), BW 7 (8 Oct 2026), Zvw (1 Jan 2026), Besluit zorgverzekering (1 Jul 2026) and WAM (24 Jul 2025) were read today as the versions wetten.overheid.nl redirected to. The Zvw toestand still shows € 385 in art. 19 lid 1; under art. 19 lid 3 the regulation's amount takes its place from 1 January 2027.
- **Fictional prices.** € 13 huisarts, € 95 huisartsenpost, € 260 spoedeisende hulp, € 210 ziekenhuis, € 100 phone premium, € 20 discount, € 650 laptop, € 1.250.000 insured amount: not checked against NZa tariffs or market data. No answer depends on z1 or z4. The 2027 average nominal premium is € 2.029 per year (Stcrt. 2026, 36979, read today), so a € 20 monthly discount for € 500 vrijwillig is of a plausible size; it is not a fact the lesson states.
- **Single-source items.** The meldingsplicht and the misleading rule rest on the law text only (BW 7:941, 7:943); no official explainer page was read. The verwacht schadebedrag definition rests on the syllabus only. The AVP description rests on Wijzer (secondary) plus BW 6:162.
- **vwo syllabus.** Only the havo 2027 syllabus was read today; the research file cites the vwo 2025 syllabus with the same G1 items. Check the vwo 2027 text before naming vwo in `teacher.audience` as exam-relevant.
- **Phone insurance and other cover.** Whether a phone is already covered elsewhere (for example inside an inboedel policy) differs per policy and was not checked; the lesson does not claim it.

## Voor een nieuw jaar

For a class in 2028: move every story date one year and re-check the weekdays (1 October 2028 is a Sunday; keep "ontdekt op 1 oktober" so digit 4 stays 8). Replace € 400 by the 2028 amount from the new Staatscourant regulation; the € 60 increase of bill 36 943 was planned for 2028 (Stcrt. 2026, 34372, toelichting). Recompute V3.1 (cap), V3.2 (difference between the hospital total and the new cap, the discount stays fictional), C3 and B3. Digits 1 (2), 2 (3), 3 (4, phone ratio) and 4 (8) do not depend on the amount, so the code can stay 2348. Re-read every source. Owner of the yearly update: the content team, in December (with the eerste-maand update).

---

## Changelog

Item numbers refer to the room questions (V1.1 and so on), rule lines (r1 and so on) and check items (C1 to C4, B1 to B4) of this spec.

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
