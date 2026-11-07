# Escape "Route 18" (content spec, ID voorstel: ESC-ROUTE)

Regels geldig voor: aanmelden voor studiejaar 2027-2028 (de havo 5- en vwo 6-leerlingen van 2026-2027) en het eerste jaar 2027-2028; gecontroleerd op 7 november 2026; validUntil: 31 juli 2027 (the story's "now" is school year 2026-2027; for a class of 2027-2028 every story date moves one year, see "Voor een nieuw schooljaar"). The lesson names no amount of money, so no amount has to be kept up to date.

Format as ESC-KAMER (op-kamers.md): four rooms, 3 questions per room, one retry with a nudge that points to a line, a hint that costs 30 seconds, one digit per room, one lock of four digits, then the end check, the end screen and the plan. Pupil text is Dutch B1, sentences at most 20 words, no em or en dashes. Rules come only from the source table at the end. All pages read on 7 November 2026.

Rule boxes (`room.rules`): every rule a pupil needs on the first try is in the room's rule box or in the situation text, so careful readers are not punished (G4 fix 3). Each digit clue shows the facts it needs, so the digit can be worked out from the digit screen alone (G4 fix 1). Each clue names the lock position as "Het 1e cijfer van het slot" and so on (G4 fix 2). Exceptions that would give a question a second defensible answer are either named in the rule box or ruled out in the situation (lessons from check B: absolute rules, BSA and DUO exceptions, unstated age).

Why this lesson (research `research/studiekeuze_tools.md`): information and interest tests are free and saturated; information is split between Studiekeuze123 (hbo and wo) and KiesMBO (mbo); pupils rate real experiences highest; only intensive, connected activity is linked to less switching; pupils plan a median of 2 meeloopdagen. So Route 18 is not a test and not a database. It teaches the rules that trip pupils up, puts mbo, hbo and universiteit side by side, and ends with one dated action that each pupil writes down for themselves.

Fiction line (shown once at the start):
"Alles is verzonnen: de mensen, scholen, opleidingen, banen en data van open dagen. De regels zijn echt; bij elke uitleg staat de bron."

Neutrality line (shown under the route map in room 1, and on the teacher screen):
"De kaart zet mbo, hbo en universiteit naast elkaar. De volgorde zegt niets over goed of beter."

Fictional on purpose: the city Zeestad (as in ESC-MAAND and ESC-KAMER); the schools Golfbreker College (mbo), Hogeschool De Duinen (hbo) and Universiteit van Zeestad (wo); every programme, job example, place count and open-day date; the pupils Lina and Ravi; the oom and the mentor. A web search on 7 November 2026 found no real school with these names. The names are not close to a real school name on purpose ("Hogeschool Zeestad" was rejected as too close to Hogeschool Zeeland). Studielink, Studiekeuze123, KiesMBO, DUO and Rijksoverheid are named as the real places where a rule applies or is published; no page of theirs is imitated.

Story time: Lina (havo 5) and Ravi (vwo 6) are both 17 in November 2026. Lina turns 18 in March 2027 (room 2 intro), so she is 18 on 10 May 2027 (V2.3) and the mbo rules for pupils who are still kwalificatieplichtig play no role. Rooms 1, 2 and 4 are in school year 2026-2027 ("nu"). Room 3 is a look ahead to their first year, 2027-2028, and is labelled "Vooruitblik". Room 4 goes back to "nu" (1 February 2027), so the lesson ends with an action pupils can still take this school year. All weekdays checked with a calendar: wo 25 nov 2026, di 12 jan 2027, vr 15 jan 2027, ma 1 feb 2027, di 2 maart 2027, di 9 maart 2027, wo 10 maart 2027, za 13 maart 2027, za 20 maart 2027, ma 10 mei 2027, ma 13 dec 2027, wo 15 dec 2027, wo 15 maart 2028.

Code: **4379** (room digits 4, 3, 7, 9; not 1725, 2824, 2073 or 3521). Teacher screen: show it only inside the closed Antwoordblad, never on the projected part (G3 all lessons, row 5; gate round 2).

## Leerdoelen

1. De leerling kan zeggen met welk diploma je naar het mbo, het hbo of de universiteit kunt, en dat je via mbo 4 of een hbo-propedeuse verder kunt.
2. De leerling kent de uiterste aanmelddata: 15 januari (numerus fixus), 1 april (mbo) en 1 mei (andere bachelors), en weet wat er gebeurt als je te laat bent.
3. De leerling kan uitleggen wat een bindend studieadvies is, en waarom stoppen voor 1 februari in het eerste jaar uitmaakt voor je studiefinanciering.
4. De leerling kiest één activiteit om een opleiding te beleven (open dag, meeloopdag of proefstuderen) en zet er een datum bij.

---

## Kamer 1. De routekaart (woensdag 25 november 2026)

**Intro:** "Lina zit in havo 5 en Ravi in vwo 6. Ze zijn allebei 17. Lina wil later apps bouwen. Ravi wil iets met sport en gezondheid. Bij de decaan pakken ze de routekaart van Zeestad."

### Document 1: routekaart (type: table with head, id: kaart)
Title: "Routekaart Zeestad: 6 opleidingen". From: "Decanaat (verzonnen voorbeeld)".
Head: "Opleiding" | "Soort" | "Waar" | "Extra eisen" | "Numerus fixus" | "Werk later, bijvoorbeeld"
- k1 "Software developer" | "mbo 4" | "Golfbreker College" | "geen" | "nee" | "app-bouwer"
- k2 "Sport en bewegen" | "mbo 4" | "Golfbreker College" | "geen" | "nee" | "sportleider"
- k3 "HBO-ICT" | "hbo-bachelor" | "Hogeschool De Duinen" | "geen" | "nee" | "app-bouwer"
- k4 "Fysiotherapie" | "hbo-bachelor" | "Hogeschool De Duinen" | "geen" | "ja" | "fysiotherapeut"
- k5 "Informatica" | "universiteit (wo-bachelor)" | "Universiteit van Zeestad" | "geen" | "nee" | "app-bouwer of onderzoeker"
- k6 "Bewegingswetenschappen" | "universiteit (wo-bachelor)" | "Universiteit van Zeestad" | "geen" | "nee" | "onderzoeker of adviseur"

Note under it: "De kaart zet mbo, hbo en universiteit naast elkaar. De volgorde zegt niets over goed of beter. De scholen, opleidingen en banen zijn verzonnen voorbeelden."

Design note: the same job (app-bouwer) is reachable from mbo 4, hbo and wo, so the map shows routes as equal options, not as a ladder. Rows are ordered mbo, hbo, wo only because the rule box lists them in that order. "Extra eisen: geen" on every row rules out profile and subject requirements (Rijksoverheid: "Sommige opleidingen hebben naast diploma-eisen nog extra toelatingseisen"), so V1.1 has one answer. The numerus fixus has its own column so pupils do not read it as an entry requirement; it limits places, not which diploma you need, and it matters in room 2. The table has six columns; the engine scrolls a wide table inside its own box on a phone.

**Moeilijke woorden (plain):** "Bachelor: een opleiding aan het hbo of de universiteit. Wo: de universiteit. Propedeuse: het eerste jaar van een hbo-bachelor, als je alles hebt gehaald. Dat zijn 60 studiepunten. Numerus fixus: de opleiding heeft maar een vast aantal plekken."

**Rule box (`rules`, title "Regels"):**
- r1 "Met een havodiploma kun je naar het mbo en naar het hbo."
- r2 "Met een vwo-diploma kun je naar het mbo, het hbo en de universiteit."
- r3 "Met een mbo 4-diploma kun je naar het hbo."
- r4 "Met een hbo-propedeuse kun je naar de universiteit. Bij de meeste opleidingen moet je dan eerst nog extra vakken halen."
- r5 "Let op: sommige opleidingen hebben extra eisen, zoals een profiel. Die staan op de kaart."
- r6 "Heb je niet het juiste diploma en ben je 21 of ouder? Dan kun je soms een toelatingsonderzoek doen."

### Vraag 1.1 (id: havo, kind: multi, docs: kaart)
- Situ: "Lina haalt dit schooljaar haar havodiploma."
- Prompt: "Voor welke opleidingen op de kaart heeft Lina dan het juiste diploma?"
- Legend: "Tik alle opleidingen aan."
- Items (written right answers last; shown in a fixed shuffle):
  - a "Informatica (universiteit)"
  - b "Bewegingswetenschappen (universiteit)"
  - c "Software developer (mbo 4)"
  - d "Sport en bewegen (mbo 4)"
  - e "HBO-ICT (hbo)"
  - f "Fysiotherapie (hbo)"
- Correct: c, d, e, f
- Retry pointer: rule r1 (`pointTo: { rule: 'r1' }`; the engine cannot mark a column, and marking rows k1 to k4 would give the answer away).
- Nudge: "Lees regel 1. Naar welke twee soorten opleidingen kun je met havo?"
- Hint (30 s): "Kijk in de kolom Soort. Welke opleidingen zijn mbo of hbo?"
- Explanation: "Met een havodiploma kun je naar het mbo en het hbo. Voor de universiteit heb je een vwo-diploma of een hbo-propedeuse nodig."
- Sources: roDiplomas, roMboNiveaus, kmHavoVwo, skToelatingseisen
- Note: Lina is 17 (intro, rule r6) and every k-row has "Extra eisen: geen", so the toelatingsonderzoek (21+) and profile requirements cannot give a second answer. Fysiotherapie (f) is right: a numerus fixus limits places, it does not change which diploma you need (roFixus: "kan de opleiding studenten toelaten op basis van selectie of door te loten"). Havo to mbo 4: Rijksoverheid lists "het bewijs van de eerste 3 leerjaren havo of vwo" as entry for the mbo 4 middenkaderopleiding; KiesMBO: "Ook als je een havo diploma hebt ... kan je studeren aan het mbo".

### Vraag 1.2 (id: vwo, kind: pick, docs: kaart)
- Situ: "Ravi twijfelt tussen Fysiotherapie en Bewegingswetenschappen. Zijn oom zegt: 'Met vwo moet je naar de universiteit.'"
- Prompt: "Heeft de oom van Ravi gelijk?"
- Options:
  - a "Ja, met een vwo-diploma mag je niet naar het hbo"
  - b "Alleen als Ravi eerst een jaar gaat werken"
  - c "Nee, met een vwo-diploma kun je naar het mbo, het hbo en de universiteit"
- Correct: c
- Retry pointer: rule r2.
- Nudge: "Lees regel 2. Hoeveel soorten opleidingen noemt die regel?"
- Hint: "Vwo sluit geen route uit."
- Explanation: "Met een vwo-diploma kun je naar het mbo, het hbo en de universiteit. Ravi kiest dus zelf wat bij hem past."
- Sources: roDiplomas, skRoutes, roMboNiveaus
- Note: Studiekeuze123 ("Mogelijke leerroutes"): from vwo "kun je kiezen voor een hbo-opleiding of een mbo-opleiding". No option ranks the routes.

### Vraag 1.3 (id: propedeuse, kind: pick, docs: kaart)
- Situ: "Lina kiest HBO-ICT. Na een jaar haalt ze haar propedeuse. Daarna wil ze Informatica doen aan de universiteit."
- Prompt: "Kan dat?"
- Options:
  - a "Nee, met een havodiploma kom je nooit op de universiteit"
  - b "Ja, maar pas als ze 21 jaar is"
  - c "Ja, met haar propedeuse kan dat. Vaak moet ze eerst nog extra vakken halen."
- Correct: c
- Retry pointer: rule r4.
- Nudge: "Lees regel 4. Wat heeft Lina na een jaar HBO-ICT?"
- Hint: "Een propedeuse opent een nieuwe route."
- Explanation: "Met een hbo-propedeuse kun je naar de universiteit. Bij de meeste opleidingen moet je eerst extra vakken op vwo-niveau halen. Je kunt ook eerst je hbo-bachelor afmaken."
- Sources: roDiplomas, roToelating, skPropedeuse
- Note: option c carries the exception ("Vaak ... extra vakken") so the right answer is not an absolute rule (Studiekeuze123: "bij de meeste wo-opleidingen aanvullende vakken op vwo-niveau halen"; Rijksoverheid: "kunnen ... toegelaten worden"). Option b is wrong: the 21+ toelatingsonderzoek (r6) is for people without the right diploma; with a propedeuse Lina has one. The last sentence of the explanation (bachelor first, then a wo master with a schakelprogramma) is from skRoutes and is not asked.

### Cijfer kamer 1
- Clue: "Het 1e cijfer van het slot: met een havodiploma kun je naar het mbo en het hbo. De kaart heeft 2 mbo-opleidingen, 2 hbo-opleidingen en 2 universiteitsopleidingen. Voor hoeveel opleidingen heeft Lina het juiste diploma?"
- Digit: **4** (2 mbo + 2 hbo; same set as the right items of V1.1; all facts are in the clue).
- Remember: "Havo, vwo en mbo 4 openen elk meer dan één route. Een omweg via mbo 4 of een propedeuse kan ook."

---

## Kamer 2. De deadlines (dinsdag 12 januari 2027)

**Intro:** "Het is januari. Lina wordt in maart 18. Ravi en Lina appen over hun aanmelding."

### Document 2: app van Ravi en Lina (type: chat, id: app)
Name: "Ravi en Lina", sub "app".
- v1 them (Ravi), 16:40 "Ik meld me vandaag aan voor Fysiotherapie bij De Duinen."
- v2 them (Ravi) "Daar is een numerus fixus. Er zijn maar 120 plekken."
- v3 them (Ravi) "Voor de zekerheid meld ik me ook aan voor Bewegingswetenschappen. Daar is geen numerus fixus."
- v4 me (Lina) "Ik twijfel nog tussen Software developer en HBO-ICT."
- v5 me (Lina) "Die hebben geen numerus fixus en geen selectie."

Note: "De opleidingen en het aantal plekken zijn verzonnen."

**Moeilijke woorden (plain):** "Studielink: de website waar je je aanmeldt voor een bachelor aan het hbo of de universiteit. Recht op toelating: de opleiding moet je toelaten als je aan de eisen voldoet. Selectie: de opleiding kiest wie er mag beginnen. Uiterlijk: op zijn laatst."

**Rule box (`rules`, title "Regels"):**
- r1 "Bachelor met een numerus fixus: meld je aan via Studielink, tot en met 15 januari."
- r2 "Andere bachelor: meld je aan via Studielink, uiterlijk 1 mei. Heeft de opleiding selectie, zoals bij kunst of sport? Dan is de datum soms eerder."
- r3 "Mbo-opleiding: meld je uiterlijk 1 april aan, op de website van de mbo-school."
- r4 "Meld je je later aan? Dan heb je geen recht meer op toelating. De opleiding kan je weigeren."

### Vraag 2.1 (id: fixus, kind: pick, docs: app)
- Prompt: "Uiterlijk wanneer moet Ravi zich aanmelden voor Fysiotherapie?"
- Options:
  - a "Uiterlijk 1 april 2027"
  - b "Uiterlijk 1 mei 2027"
  - c "Voor 1 september 2027, als de lessen beginnen"
  - d "Tot en met 15 januari 2027"
- Correct: d
- Retry pointer: app v2 "Daar is een numerus fixus." and rule r1.
- Nudge: "Lees bericht 2 van Ravi. Welke regel past bij die opleiding?"
- Hint: "Een numerus fixus heeft de vroegste datum."
- Explanation: "Voor een opleiding met een numerus fixus meld je je aan tot en met 15 januari. Je mag je per studiejaar voor hoogstens 2 fixusopleidingen aanmelden."
- Sources: roFixus, roDeadline, skAanmelden
- Note: the second explanation sentence is in roFixus and skAanmelden; the exception (geneeskunde, tandheelkunde, fysiotherapie, verloskunde, mondzorgkunde: only one institution) is in the teacher note. It does not change Ravi's answer: he applies to one fixus programme.

### Vraag 2.2 (id: lina, kind: pick, docs: app)
- Prompt: "Lina twijfelt nog. Tot wanneer kan ze zich aanmelden met recht op toelating?"
- Options:
  - a "Software developer en HBO-ICT: uiterlijk 1 mei"
  - b "Software developer en HBO-ICT: tot en met 15 januari"
  - c "Software developer uiterlijk 1 mei, HBO-ICT uiterlijk 1 april"
  - d "Software developer uiterlijk 1 april, HBO-ICT uiterlijk 1 mei"
- Correct: d
- Retry pointer: app v4, v5 and rules r2, r3.
- Nudge: "Software developer is mbo, HBO-ICT is hbo. Lees regel 2 en regel 3."
- Hint: "Het mbo heeft een eerdere datum dan het hbo."
- Explanation: "Voor het mbo meld je je uiterlijk 1 april aan, bij de school zelf. Voor HBO-ICT is dat uiterlijk 1 mei, via Studielink."
- Sources: roMboAanmelden, kmAanmelden, stb2016362, roAanmelden, skAanmelden
- Note: v5 rules out a numerus fixus and selection for both, so r2's "soms eerder" cannot apply. No option uses "beide" or "allebei" (README option-order rule), so the fixed shuffle is allowed. The mbo date is "uiterlijk 1 april" in the law (Stb. 2016, 362: "Uiterlijk op 1 april voorafgaand aan een studiejaar") and on two pages; one Rijksoverheid page says "vóór 1 april" (see Onzeker). No question depends on registering on 1 April itself.

### Vraag 2.3 (id: laat, kind: pick, docs: none)
- Situ: "Stel: Lina vergeet het. Ze meldt zich pas op maandag 10 mei 2027 aan voor HBO-ICT. Het is haar eerste aanmelding."
- Prompt: "Wat klopt?"
- Options:
  - a "Ze kan nergens meer beginnen dit jaar"
  - b "Het maakt niet uit: met een havodiploma word je altijd toegelaten"
  - c "Ze moet een jaar wachten voordat ze zich weer mag aanmelden"
  - d "Ze heeft geen recht meer op toelating. De opleiding kan haar weigeren."
- Correct: d
- Retry pointer: rule r4.
- Nudge: "10 mei is na 1 mei. Lees regel 4."
- Hint: "Te laat betekent niet altijd nee. Wie beslist dan?"
- Explanation: "Na 1 mei kun je je nog aanmelden. Maar je hebt geen recht meer op toelating, en de opleiding kan je weigeren. Je hebt dan ook geen recht meer op een studiekeuzecheck."
- Sources: roAanmelden, roDeadline, skAanmelden, roSkc
- Note: "eerste aanmelding" is in the situ because the rules differ for a pupil who registered on time for another programme and switches after 1 May (roDeadline: switching allowed; the new programme may require a check). 10 May is used, not 1 or 2 May, because 1 May 2027 is a Saturday (see Onzeker). Lina is 18 on 10 May (room 2 intro). Option c is wrong: the programme decides, it can still admit her.

### Cijfer kamer 2
- Clue: "Het 2e cijfer van het slot: Ravi meldt zich vandaag aan, op 12 januari. Voor Fysiotherapie kan dat tot en met 15 januari. Hoeveel dagen na 12 januari is 15 januari?"
- Digit: **3** (15 min 12; the dates are in the clue).
- Remember: "15 januari voor een numerus fixus, 1 april voor het mbo, 1 mei voor andere bachelors. Zet ze nu in je agenda."

---

## Kamer 3. Het eerste jaar (Vooruitblik: maandag 13 december 2027)

`where`: "Vooruitblik: december 2027"

**Intro:** "Stel je voor: het is december 2027. Lina zit sinds september in jaar 1 van HBO-ICT. Ravi doet Bewegingswetenschappen. Ze kwamen van de havo en het vwo. Ze krijgen voor het eerst studiefinanciering: een basisbeurs. Ze hebben geen lening. Ook het mbo heeft regels voor het eerste jaar. Deze kamer gaat over hbo en universiteit."

### Document 3a: studievoortgang Lina (type: table, id: voortgang)
Title: "Hogeschool De Duinen, HBO-ICT: jouw voortgang". From: "Studievolgsysteem (verzonnen)".
- s1 "Studiepunten gehaald" | "12 van 30"
- s2 "Bsa-norm in jaar 1 (uit de OER)" | "45 van 60 studiepunten"
- s3 "Advies aan het einde van jaar 1" | "bindend"

### Document 3b: app van Lina en Ravi (type: chat, id: app3)
- w1 me (Lina), 19:05 "Ik vind ICT toch niet leuk. Ik stop."
- w2 me (Lina) "De hogeschool schrijft me uit per 15 december. Mijn studiefinanciering stopt op 1 januari."
- w3 me (Lina) "In september 2028 begin ik aan een nieuwe opleiding."
- w4 them (Ravi) "Ik twijfel ook. Maar ik wacht nog tot maart."

Note: "Alles in deze berichten is verzonnen."

**Moeilijke woorden (plain):** "Studiepunt: je krijgt studiepunten als je een vak haalt. Een jaar heeft 60 studiepunten. Bsa: bindend studieadvies. Je hoort aan het einde van jaar 1 of je mag doorgaan. OER: de onderwijs- en examenregeling. Daarin staan de regels van je opleiding. Basisbeurs: geld van DUO voor studenten. Uitschrijven: je staat niet meer ingeschreven bij je opleiding. Studiejaar: begint op 1 september."

**Rule box (`rules`, title "Regels"):**
- r1 "De regels voor het bsa staan in de OER van je opleiding. Daar staat ook hoeveel studiepunten je moet halen."
- r2 "Krijg je een negatief bsa? Dan mag je je wel aanmelden voor een andere opleiding."
- r3 "Stopt je studiefinanciering in je eerste jaar voor 1 februari? Dan hoef je je basisbeurs van dat jaar niet terug te betalen. Een lening wel."
- r4 "Regel 3 geldt alleen als je van de havo of het vwo kwam. Je kreeg voor het eerst studiefinanciering voor hbo of universiteit. En je krijgt in hetzelfde studiejaar niet opnieuw studiefinanciering voor hbo of universiteit."
- r5 "Elke maand studiefinanciering voor hbo of universiteit telt mee. Die maand krijg je later niet nog een keer."

Note on r3 and r4: r3 is the rule, r4 lists DUO's conditions as conditions (not as a consequence), each sentence at most 20 words. The aanvullende beurs and the reisproduct are also covered (DUO); that is in the teacher note, because the story has neither. The DUO page words the last condition as "niet opnieuw prestatiebeurs"; ESC-DUO read Wsf 2000 art. 5.10 on 7 Nov 2026 as "niet over datzelfde studiejaar opnieuw studiefinanciering", the wider wording, which r4 uses (see Onzeker). r5 is scoped to hbo and universiteit because mbo months do not count for hbo (DUO "Hoelang recht").

### Vraag 3.1 (id: bsa, kind: multi, docs: voortgang)
- Prompt: "Lina leest de regels over het bsa. Wat klopt?"
- Legend: "Tik alles aan wat klopt."
- Items (right answers last):
  - a "Elke opleiding in Nederland heeft dezelfde bsa-norm"
  - b "Met een negatief bsa mag je nergens meer studeren"
  - c "De regels voor Lina's bsa staan in de OER van haar opleiding"
  - d "Met een negatief bsa mag je je aanmelden voor een andere opleiding"
- Correct: c, d
- Retry pointer: rules r1, r2 and voortgang s2 "(uit de OER)".
- Nudge: "Lees regel 1 en 2. Waar staan de regels, en wat mag je na een negatief bsa?"
- Hint: "Het zijn er twee. Kijk ook naar regel s2 in Lina's overzicht."
- Explanation: "De regels en de norm staan in de OER van je opleiding. Ze verschillen per opleiding. Met een negatief bsa moet je meestal stoppen met die opleiding. Je mag je wel aanmelden voor een andere opleiding."
- Sources: roBsa, skBsa, roDeadline
- Note: no item says "met een negatief bsa moet je stoppen", because Rijksoverheid says "Afhankelijk van het beleid bij uw instelling moet u dan stoppen" and Studiekeuze123 "De kans is groot". The explanation says "meestal". Item a is wrong by roBsa ("De universiteit of hogeschool bepaalt zelf of dit advies bindend is"; rules in the OER) and skBsa (the minimum is shown per programme). Item d: skBsa "Je mag je dan wel inschrijven voor een andere opleiding"; roDeadline: the other programme may require a studiekeuzecheck. Persoonlijke omstandigheden (roBsa: "De opleiding moet rekening houden met persoonlijke omstandigheden") are in the teacher note.

### Vraag 3.2 (id: lina1feb, kind: pick, docs: app3)
- Situ: "Lina's studiefinanciering stopt op 1 januari 2028. In september 2028 begint ze aan iets nieuws. Dat is een nieuw studiejaar."
- Prompt: "Moet Lina haar basisbeurs van september tot en met december 2027 terugbetalen?"
- Options:
  - a "Ja, want ze heeft geen diploma gehaald"
  - b "Ja, maar alleen de helft"
  - c "Nee, want haar studiefinanciering stopt voor 1 februari"
- Correct: c
- Retry pointer: app3 w2 "Mijn studiefinanciering stopt op 1 januari." and rules r3, r4.
- Nudge: "Wanneer stopt Lina's studiefinanciering? Lees regel 3 en 4."
- Hint: "Vergelijk 1 januari met 1 februari."
- Explanation: "Lina's studiefinanciering stopt voor 1 februari, en ze voldoet aan regel 4. Dan hoeft ze haar basisbeurs van dit jaar niet terug te betalen. Een lening moet je altijd terugbetalen, maar Lina heeft er geen."
- Sources: duoEerstejaars, skFeb
- Note: every condition of the DUO eerstejaarsregeling is in the room: from havo (intro), first studiefinanciering for hbo or wo (intro), stops before 1 February (w2, situ), no new studiefinanciering for hbo or wo in the same study year (w3, situ: starts in September 2028). "1 keer" (DUO) is met because it is her first studiefinanciering for hbo or wo. The stop date is a story fact, not derived (DUO "stopzetten": deregistered per 15 June gives no right from 1 July; the same pattern gives 15 December to 1 January). Option a states the general rule for a prestatiebeurs without a diploma; it is wrong only because of this regulation, which the rule box names.

### Vraag 3.3 (id: ravi, kind: pick, docs: app3)
- Situ: "Ravi stopt toch. De universiteit schrijft hem uit per 15 maart 2028. Zijn studiefinanciering stopt op 1 april 2028."
- Prompt: "Geldt de regel over stoppen voor 1 februari voor Ravi?"
- Options:
  - a "Ja, want hij zit nog in zijn eerste jaar"
  - b "Ja, want hij heeft geen lening"
  - c "Nee, want zijn studiefinanciering stopt na 1 februari"
- Correct: c
- Retry pointer: situ "Zijn studiefinanciering stopt op 1 april 2028." and rule r3.
- Nudge: "Lees regel 3. Stopt Ravi's studiefinanciering voor of na 1 februari?"
- Hint: "1 april komt na 1 februari."
- Explanation: "Ravi's studiefinanciering stopt na 1 februari. De regel geldt dus niet. Dan geldt de gewone regel: zijn basisbeurs wordt een gift als hij op tijd een diploma haalt. Meestal is dat binnen 10 jaar. En hij heeft al 7 maanden gebruikt."
- Sources: duoEerstejaars, skFeb, duoGift, duoHoelang
- Note: the gift sentences are from duoGift ("Behaalt u een diploma binnen de diplomatermijn, dan wordt de prestatiebeurs omgezet in een gift"; table "Geen diploma binnen 10 jaar": terugbetalen). "Meestal" because DUO can extend the term (ESC-DUO, Wsf art. 5.16, not re-read here). It is not asked. "7 maanden" leads to the digit and follows r5.

### Cijfer kamer 3
- Clue: "Het 3e cijfer van het slot: Ravi kreeg studiefinanciering van september 2027 tot en met maart 2028. Hoeveel maanden zijn dat?"
- Digit: **7** (september, oktober, november, december, januari, februari, maart; the months are in the clue).
- Remember: "Twijfel je in jaar 1? Praat er vroeg over. Stoppen voor 1 februari scheelt geld, en elke maand telt mee."

---

## Kamer 4. Je volgende stap (Terug naar nu: maandag 1 februari 2027)

`where`: "Terug naar nu: februari 2027"

**Intro:** "Terug naar nu. Lina twijfelt nog tussen Software developer en HBO-ICT. Haar mentor zegt: 'Ga het zelf beleven. Kies één dag en zet die in je agenda.'"

### Document 4a: opleidingspagina mbo (type: listing, id: mbo)
Site: "golfbreker-college.example (verzonnen)". Title: "Software developer (mbo 4), Golfbreker College".
- f1 "Meeloopdag" | "dinsdag 9 maart 2027, 9.00 tot 14.00 uur"
- f2 "Open dag" | "zaterdag 6 februari 2027"
- f3 "Aanmelden voor de meeloopdag" | "uiterlijk 1 week van tevoren"

### Document 4b: opleidingspagina hbo (type: listing, id: hbo)
Site: "hogeschool-deduinen.example (verzonnen)". Title: "HBO-ICT, Hogeschool De Duinen".
- g1 "Meeloopdag" | "woensdag 10 maart 2027"
- g2 "Proefstuderen" | "zaterdag 20 maart 2027"
- g3 "Aanmelden" | "uiterlijk 1 week van tevoren"

### Document 4c: opleidingspagina universiteit (type: listing, id: wo)
Site: "uni-zeestad.example (verzonnen)". Title: "Informatica, Universiteit van Zeestad".
- u1 "Open dag" | "zaterdag 13 maart 2027"
- u2 "Aanmelden" | "niet nodig"

### Document 4d: agenda Lina (type: table with head, id: agenda)
Title: "Agenda Lina, maart 2027". Head: "Dag" | "Wat"
- a1 "di 9 maart" | "gewone lesdag, geen toets"
- a2 "wo 10 maart" | "toets wiskunde: ik moet er zijn"
- a3 "za 13 maart" | "vrij"
- a4 "za 20 maart" | "vrij"

Note under the pages: "De scholen, sites en data zijn verzonnen. Echte data vind je op de site van de school."

Design note: the `.example` addresses are reserved test domains, so the fake address bars cannot point to a real site. The right answer of V4.2 is the mbo meeloopdag, so the lesson does not steer the havo pupil towards hbo.

**Moeilijke woorden (plain):** "Open dag: je krijgt informatie over opleidingen. Je praat met studenten en docenten en proeft de sfeer. Meeloopdag: je loopt een dag mee met een student. Je volgt dezelfde lessen. Proefstuderen: je volgt lessen die de school voor bezoekers heeft gemaakt."

No rule box: the three definitions are glosses, and dates come from the documents.

### Vraag 4.1 (id: soort, kind: pick, docs: mbo, hbo, wo)
- Prompt: "Lina wil een gewone lesdag meemaken, samen met een student. Wat past daar het best bij?"
- Options:
  - a "Een open dag"
  - b "Proefstuderen"
  - c "Nog een interessetest doen"
  - d "Een meeloopdag"
- Correct: d
- Retry pointer: plain box "Meeloopdag: je loopt een dag mee met een student."
- Nudge: "Lees de moeilijke woorden. Bij welke activiteit ben je samen met een student?"
- Hint: "Mee + lopen."
- Explanation: "Bij een meeloopdag loop je mee met een student en volg je dezelfde lessen. Bij proefstuderen volg je lessen voor bezoekers. Een open dag geeft je informatie en sfeer."
- Sources: skActiviteiten
- Note: pointer to the plain box needs an engine feature or falls back to `pointNone` (see Engine). Option c is there because pupils often reach for another test; the research says experience helps more, but the explanation states only the definitions, not the research claim.

### Vraag 4.2 (id: dag, kind: pick, docs: mbo, hbo, wo, agenda)
- Situ: "Lina wil meelopen. Op een dag met een toets kan ze niet weg."
- Prompt: "Op welke dag gaat Lina meelopen?"
- Options:
  - a "Woensdag 10 maart, HBO-ICT"
  - b "Zaterdag 13 maart, Informatica"
  - c "Zaterdag 20 maart, HBO-ICT"
  - d "Dinsdag 9 maart, Software developer"
- Correct: d
- Retry pointer: mbo f1 and agenda a1, a2.
- Nudge: "Zoek eerst de meeloopdagen. Kijk dan in Lina's agenda."
- Hint: "Er zijn twee meeloopdagen. Op één ervan heeft Lina een toets."
- Explanation: "Op 10 maart heeft Lina een toets. Op 13 en 20 maart is er geen meeloopdag, maar een open dag en proefstuderen. Dus gaat ze op 9 maart meelopen."
- Sources: none. None line: "Dit haal je uit de pagina's en de agenda. Er is geen regel voor nodig."

### Vraag 4.3 (id: aanmelden, kind: pick, docs: mbo)
- Prompt: "De meeloopdag is op dinsdag 9 maart. Uiterlijk wanneer meldt Lina zich aan?"
- Options:
  - a "Maandag 1 maart"
  - b "Dinsdag 9 maart, op de dag zelf"
  - c "Dinsdag 16 maart"
  - d "Dinsdag 2 maart"
- Correct: d
- Retry pointer: mbo f3 "uiterlijk 1 week van tevoren".
- Nudge: "Lees wat er bij Aanmelden staat. Tel een week terug vanaf 9 maart."
- Hint: "Een week terug is weer een dinsdag."
- Explanation: "Je meldt je uiterlijk 1 week van tevoren aan. Dat is dinsdag 2 maart. Zet die datum ook in je agenda, en vertel het je mentor."
- Sources: none. None line: "Dit staat op de pagina van de school. Elke school heeft eigen regels."
- Note: "uiterlijk 1 week van tevoren" is fictional page text, not a real rule; the none line says each school has its own rules.

### Cijfer kamer 4
- Clue: "Het 4e cijfer van het slot: Lina gaat meelopen bij Software developer. Op welke dag in maart is die meeloopdag?"
- Digit: **9** (mbo f1 "dinsdag 9 maart 2027"; the page is on the digit screen; `clueDocs: ['mbo']`).
- Remember: "Kiezen doe je door te kijken en te doen. Zoek één meeloopdag, open dag of proefstudeerdag, en zet de datum in je agenda."

---

## Plan: Mijn volgende stap

The plan is the goal of the lesson, so it is personal: each pupil makes their own, on paper (handout) and, if they want, on the end screen. The screen version uses the existing engine plan (`when`, `then`, `within`, own text). It stays on the screen only: never logged, never sent, never stored (engine `planNote`). The paper slip stays with the pupil; the teacher does not collect it.

Engine data:
- `plan.intro`: "Maak je eigen plan. Kies één ding dat je gaat doen, en zet er een datum bij. Zeg je plan tegen je buur."
- `plan.when`: ["ik vandaag thuis ben", "ik deze week mijn mentor of decaan zie", "het weekend is"]
- `plan.then`: ["zoek ik één meeloopdag of proefstudeerdag op en zet ik de datum in mijn agenda", "zoek ik één open dag op en zet ik de datum in mijn agenda", "zet ik 15 januari, 1 april en 1 mei in mijn agenda"]
- `plan.within`: ["een dag", "een week", "twee weken"]
- Own text field (existing): pupils may type their own "dan", for example "ga ik op 9 maart meelopen bij ...".

Paper handout "Mijn volgende stap" (one per pupil, four per A4; nothing on it is collected):
"Mijn volgende stap
Ik ga naar: een open dag / een meeloopdag / proefstuderen (omcirkel)
Bij welke school en opleiding: ...
Datum: ...
Aanmelden voor: ...
Waar ik het opzoek: de site van de school, of de open dagen op Studiekeuze123 (hbo en universiteit) of KiesMBO (mbo)
Drie vragen die ik daar stel:
1. ...
2. ...
3. ...
Wie vertel ik het: mijn mentor / mijn decaan / thuis"

The handout gives no example questions on purpose: pupils write their own. The teacher may suggest "Wat doe je op een gewone dinsdag?" and "Wat vinden studenten het moeilijkst?" (from the research: realistic, including less appealing, information; HAN 2021). These are prompts, not facts.

---

## Start- en eindcheck: twee parallelle vormen, A en B (elk 4 vragen, één per kamer, enkele keuze, score 0 tot 4)

No feedback during the check. Each question works without the room's documents and rule box, so it is one step harder than the room. Question n of form A and question n of form B test the same rule at the same difficulty with a different case. Form B adds no new rule. Counterbalance as in ESC-KAMER (engine: each pair randomly gets A or B first). No check item repeats a room question: room 1 asks about havo and the propedeuse, the checks about vwo and mbo 4; room 2 asks about one fixus and one mbo/hbo case, the checks ask single dates; room 3 has stops on 1 January and 1 April, the checks on 1 December and 1 November; room 4 asks for a meeloopdag, the checks for an open dag and proefstuderen. The order in the data file is the order on screen; the right answer is in a different place in each item.

### Vorm A

| # | Kamer | Vraag | Opties | Goed | Regel en bron |
|---|---|---|---|---|---|
| C1 | 1 Routes | "Je bent 17 en haalt dit jaar je vwo-diploma. Waar kun je daarna heen?" | a Alleen naar de universiteit; b Naar het mbo, het hbo of de universiteit; c Alleen naar het hbo of de universiteit | b | vwo: mbo, hbo, wo (roDiplomas, skRoutes, roMboNiveaus) |
| C2 | 2 Deadlines | "Je wilt naar een hbo-bachelor met een numerus fixus. Tot en met wanneer meld je je aan?" | a 1 april; b 1 mei; c 15 januari | c | fixus: tot en met 15 januari (roFixus, roDeadline, skAanmelden) |
| C3 | 3 Eerste jaar | "Je kwam van de havo. Je krijgt voor het eerst studiefinanciering voor het hbo, alleen een basisbeurs. Je stopt. Je studiefinanciering stopt op 1 december. Je begint pas volgend studiejaar opnieuw. Moet je je basisbeurs van dit jaar terugbetalen?" | a Nee, want je studiefinanciering stopt voor 1 februari; b Ja, want je hebt geen diploma; c Ja, maar alleen de helft | a | eerstejaarsregeling (duoEerstejaars, skFeb) |
| C4 | 4 Volgende stap | "Je wilt op één dag informatie over veel opleidingen van een school. Je wilt ook de sfeer proeven. Wat past het best?" | a Een meeloopdag; b Een open dag; c Proefstuderen | b | open dag (skActiviteiten) |

### Vorm B

| # | Kamer | Vraag | Opties | Goed | Regel en bron |
|---|---|---|---|---|---|
| B1 | 1 Routes | "Je bent 18 en hebt een mbo 4-diploma. Waar kun je verder leren?" | a Alleen in het mbo; b Direct op de universiteit; c In het mbo of op het hbo | c | mbo 4: hbo (roDiplomas, skMboHbo); verder in het mbo (kmVerder) |
| B2 | 2 Deadlines | "Je bent 18 en wilt naar een mbo-opleiding zonder numerus fixus. Uiterlijk wanneer meld je je aan voor recht op toelating?" | a 1 april; b 15 januari; c 1 mei | a | mbo: uiterlijk 1 april (roMboAanmelden, kmAanmelden, stb2016362) |
| B3 | 3 Eerste jaar | "Je kwam van het vwo. Je krijgt voor het eerst studiefinanciering voor de universiteit, alleen een basisbeurs. Je stopt. Je studiefinanciering stopt op 1 november. Je begint pas volgend studiejaar opnieuw. Moet je je basisbeurs van dit jaar terugbetalen?" | a Ja, want je hebt geen diploma; b Ja, maar alleen de helft; c Nee, want je studiefinanciering stopt voor 1 februari | c | eerstejaarsregeling (duoEerstejaars, skFeb) |
| B4 | 4 Volgende stap | "Je wilt lessen volgen die een school voor bezoekers heeft gemaakt. Wat past het best?" | a Een open dag; b Een meeloopdag; c Proefstuderen | c | proefstuderen (skActiviteiten) |

Parallel checks: C1 and B1 ask which routes a diploma opens, with two "too narrow" or "too wide" distractors each. C1 says "Je bent 17" and B1 "Je bent 18" so the 21+ toelatingsonderzoek cannot make b of B1 or a of C1 defensible. C2 and B2 use the same three dates. B2 says "Je bent 18" and "zonder numerus fixus" so neither kwalificatieplicht (Stb. 2016, 362: the refusal ground applies where the Leerplichtwet no longer applies) nor a numerus fixus muddles it. C3 and B3 are the same case with a different stop month and level (hbo, wo), each naming every condition; "Je begint pas volgend studiejaar opnieuw" covers DUO's "niet opnieuw ... in hetzelfde studiejaar". C4 and B4 each ask one definition, with the other two activities as distractors. B1 option c "In het mbo": KiesMBO ("Dat kan op een ander niveau in het mbo of op het hbo").

Score: 1 point per right answer, 0 to 4, before and after, shown per pair on the end screen.

---

## Lesplan voor de docent (45 minuten)

| Lesminuut | Duur | Onderdeel | Wat je doet |
|---|---|---|---|
| 0 tot 2 | 2 | Uitleg | Zet de link en de klascode al op het bord voordat de les begint. Leerlingen werken met z'n tweeën op één scherm. Deel de papiertjes "Mijn volgende stap" uit, één per leerling. |
| 2 tot 3 | 1 | Startcheck | Elk tweetal beantwoordt vier vragen (vorm A of B) voordat de klok start. Geef geen hints. |
| 3 tot 33 | 30 | Escape | Start de klastimer. Tweetallen spelen vier kamers en schrijven elk cijfer op. Klaar voor de tijd? Laat ze alvast hun papiertje invullen. |
| 33 | | Stop | Op minuut 33 stopt iedereen, ook wie nog niet klaar is. Lees de cijfers voor van je geprinte antwoordblad. Alle tweetallen doen daarna de eindcheck. |
| 33 tot 35 | 2 | Eindcheck | De andere vorm: vier vragen over dezelfde regels. Daarna ziet elk tweetal wat het goed had, voor en na. |
| 35 tot 39 | 4 | Nabespreken | Vraag met handopsteken: wie had bij de startcheck 3 of 4 goed? En bij de eindcheck? Begin bij de kamer die het lastigst was. Vraag naar ervaringen, niet naar punten. |
| 39 tot 42 | 3 | Mijn volgende stap | Iedereen vult zijn eigen papiertje in, met een datum. Laat twee of drie leerlingen hun stap hardop zeggen. Stel daarna de slotvraag. |
| 42 tot 45 | 3 | Buffer | Reserve voor een late start, traag inloggen of een langer gesprek. De escape stopt altijd op minuut 33. |

Total 45 minutes: 2 + 1 + 30 + 2 + 4 + 3 + 3 = 45, of which 3 minutes buffer. Materials: een apparaat per tweetal, pen en papier voor de cijfers, één papiertje "Mijn volgende stap" per leerling, een digibord of beamer.

Tip voor de docent: een fout antwoord wordt doorgestreept. Een tweetal kan dus gokken tot het goed is. Het telt dan alleen niet mee bij "In één keer goed". Vertel de klas dat goed lezen sneller gaat.

Care points ("Let op"):
1. "Laat de leerlingen hun plan niet inleveren. Het papiertje is van hen."
2. "Zeg niet welke route beter is. Vraag wat bij de leerling past: hoe wil je leren, en wat wil je later doen?"
3. "Kamer 3 is een vooruitblik naar het eerste jaar. Zeg dat erbij: het gaat om volgend schooljaar."

Note for developers: the stop at minute 33 uses the existing engine stop flow (teacher "Stop de escape", pupil "We stoppen", type the read-out digits or skip, then end check and plan). The digits are never on the open lesson plan. Playtest estimate for a careful pair, from text volume against op-kamers (about 19 minutes): 20 to 25 minutes, because rooms 1 and 3 have longer rule boxes and room 4 has four short documents. Treat as plus or minus 30 percent; the 3-minute buffer and the hard stop cover a slow class.

Voor de docent, per kamer (teacher points, each from the source table):
- Kamer 1: Havo geeft toegang tot mbo en hbo; vwo tot mbo, hbo en universiteit; mbo 4 tot hbo; een hbo-propedeuse tot de universiteit, vaak met extra vakken (Studiekeuze123). Sommige opleidingen vragen een profiel of extra eisen; bij de pabo gelden strengere eisen voor havo- en mbo-studenten. Ben je 21 of ouder zonder de juiste vooropleiding, dan kan soms een toelatingsonderzoek; bij kunstopleidingen soms jonger. Met een associate degree kun je doorstromen naar een verwante hbo-bachelor, die dan nog twee jaar duurt (Studiekeuze123, één bron, niet gevraagd). Na de hbo-bachelor kun je met een schakelprogramma naar een wo-master.
- Kamer 2: Fixus: tot en met 15 januari, hoogstens 2 fixusopleidingen per studiejaar. Voor geneeskunde, tandheelkunde, fysiotherapie, verloskunde en mondzorgkunde kies je maar 1 instelling (Rijksoverheid). Hoogstens 4 aanmeldingen tegelijk in Studielink (Studiekeuze123). Andere bachelors en associate degrees: uiterlijk 1 mei; selectieopleidingen soms eerder. Wie zich uiterlijk 1 mei aanmeldt, heeft recht op een studiekeuzecheck; een opleiding kan die verplicht maken en je weigeren als je niet meedoet; het advies is niet bindend. Bij een fixus gelden 1 mei en de studiekeuzecheck niet. Mbo: uiterlijk 1 april, op de site van de school, met DigiD. Extra eisen van een mbo-opleiding staan uiterlijk 1 februari op de site van de school. Ook het mbo kent opleidingen met een vast aantal plekken. De weigergrond "te laat aangemeld" geldt in het mbo alleen voor wie niet meer onder de Leerplichtwet valt (Stb. 2016, 362). Valt een leerling daar nog wel onder? Vraag het de mbo-school. Vraag je DigiD op tijd aan: dat kan 5 werkdagen duren.
- Kamer 3: Bsa: de hogeschool of universiteit bepaalt zelf of het advies bindend is; de regels staan in de OER; de opleiding moet rekening houden met persoonlijke omstandigheden; bezwaar staat in het studentenstatuut. Eerstejaarsregeling (DUO): van havo of vwo, voor het eerst studiefinanciering voor hbo of universiteit, studiefinanciering stopt voor 1 februari, in hetzelfde studiejaar geen nieuwe; dan hoef je basisbeurs, aanvullende beurs en reisproduct van dat jaar niet terug te betalen. Een lening betaal je altijd terug. De regeling kan 1 keer voor mbo en 1 keer voor hbo of universiteit. De maanden tellen wel mee als gebruikte maanden. Voor een studie van 4 jaar krijg je 4 jaar basisbeurs. Ga je van het mbo naar het hbo, dan begint je recht opnieuw (DUO). Zet je studiefinanciering uiterlijk stop op de 1e van de maand; geld dat je door te laat stoppen krijgt, betaal je terug (DUO). Meestal krijg je een deel van je collegegeld terug (Studiekeuze123, één bron, niet gevraagd). Ook het mbo heeft een eerstejaarsregeling (DUO: 1 keer voor mbo, 1 keer voor hbo of universiteit) en voor het mbo regelt WEB art. 8.1.7a het studieadvies (alleen het opschrift gezien, de inhoud niet gelezen; niet vertellen als vaste regel). Meer over de prestatiebeurs en de diplomatermijn van 10 jaar: escape Studiefinanciering.
- Kamer 4: Neutrale informatie zonder reclame: Studiekeuze123 is een onafhankelijke stichting, volledig betaald door het ministerie van OCW. Er staan alle erkende hbo- en wo-opleidingen op, met een kalender van open dagen, meeloopdagen en proefstuderen (filter "Type activiteit"). KiesMBO is gemaakt door SBB in opdracht van OCW, voor het mbo, met open dagen per provincie. Meeloopdagen staan niet apart op die KiesMBO-pagina (7 november 2026); kijk daarvoor op de site van de mbo-school. De regels zelf staan op Rijksoverheid.nl en, voor geld, op DUO.nl. Testen van een hogeschool of universiteit tonen vaak vooral hun eigen opleidingen. Een interessetest is een begin van een gesprek, geen uitslag (beide uit het onderzoeksdossier, zie Onzeker). Deze les raadt geen betaalde methode of test aan.

## Antwoordblad

Answers are given as the text on screen, without letters (G3, all lessons, row 6).

| Kamer | Vraag | Goed antwoord |
|---|---|---|
| 1 | Juiste diploma met havo | Software developer (mbo 4); Sport en bewegen (mbo 4); HBO-ICT (hbo); Fysiotherapie (hbo) |
| 1 | Oom van Ravi | Nee, met een vwo-diploma kun je naar het mbo, het hbo en de universiteit |
| 1 | Propedeuse | Ja, met haar propedeuse kan dat. Vaak moet ze eerst nog extra vakken halen. |
| 1 | **Cijfer** | **4** (2 mbo + 2 hbo) |
| 2 | Fysiotherapie | Tot en met 15 januari 2027 |
| 2 | Lina | Software developer uiterlijk 1 april, HBO-ICT uiterlijk 1 mei |
| 2 | Te laat | Ze heeft geen recht meer op toelating. De opleiding kan haar weigeren. |
| 2 | **Cijfer** | **3** (15 min 12) |
| 3 | Bsa | De regels voor Lina's bsa staan in de OER van haar opleiding; Met een negatief bsa mag je je aanmelden voor een andere opleiding |
| 3 | Lina stopt | Nee, want haar studiefinanciering stopt voor 1 februari |
| 3 | Ravi stopt | Nee, want zijn studiefinanciering stopt na 1 februari |
| 3 | **Cijfer** | **7** (september tot en met maart) |
| 4 | Soort dag | Een meeloopdag |
| 4 | Welke dag | Dinsdag 9 maart, Software developer |
| 4 | Aanmelden | Dinsdag 2 maart |
| 4 | **Cijfer** | **9** (9 maart) |
| | **Code** | **4379** |

Start- en eindcheck vorm A: C1 Naar het mbo, het hbo of de universiteit; C2 15 januari; C3 Nee, want je studiefinanciering stopt voor 1 februari; C4 Een open dag. Vorm B: B1 In het mbo of op het hbo; B2 1 april; B3 Nee, want je studiefinanciering stopt voor 1 februari; B4 Proefstuderen.

## Nabespreken

Drie gespreksvragen (kies er één of twee als de tijd kort is):
1. "Welke route op de kaart had je niet verwacht? Waarom niet?"
2. "Waarom twijfelen studenten in hun eerste jaar? Wat kun je nu al doen om dat te voorkomen?"
3. "Wat weet je nog niet over de opleiding die je leuk vindt? Hoe kom je daarachter?"

Per kamer (`discuss`):
- Kamer 1: "Ken je iemand die via een omweg bij zijn werk kwam? Hoe ging dat?"
- Kamer 2: "Welke datum geldt voor jou? Staat die al in je agenda?"
- Kamer 3: "Met wie zou jij praten als je in je eerste jaar twijfelt?"
- Kamer 4: "Wat wil je op een meeloopdag zien dat je niet op een website ziet?"

Slotvraag: "Noem één datum die je dit schooljaar niet mag missen. En noem één dag waarop je een opleiding gaat beleven."

Note: question 1 and the care point keep the talk neutral: no route is called better, and the teacher asks about fit, not level.

---

## Engine fit

Supported now, no change needed: `table` with `head` (route map, agenda), `table` rows (voortgang), `chat` (rooms 2, 3), `listing` with `facts` (room 4 pages), room `rules` with numbered lines, `multi` and `single`, `situ`, `pointTo` with `doc`/`lines`, `rule`/`rules` and `situ`, `clueFull`, `clueDocs`, `where`, `teacherNote`, `discuss`, `sources`/`sourceNone`, check forms A/B, the stop flow at minute 33, `teacher.plan` with `from`/`to`/`at`, `materials`, `tip`, `care`, `answers` with `format: 'text'`, and the plan with `when`, `then`, `within` and own text (never logged).

Features this lesson would need or benefit from:
1. **Pointer to a gloss (needed for V4.1, or use the fallback).** `pointTo` cannot mark a line of a document's `plain` box. Either add `pointTo: { plain: 'part' }` (text copied word for word, like `situ`), or use the fallback: `pointNone: "Lees bij Moeilijke woorden wat een meeloopdag is."` and no highlight. The fallback works today.
2. **Plan date field (nice to have).** An optional `plan.date: true` that adds "Op welke datum?" (a text or date input) and ends the card with "Datum: ...". Same privacy as the own-text field: on screen only, never logged, never sent. Without it, pupils type the date in the own "dan" text, and the paper slip carries the date.
3. **Printable handout (nice to have).** `teacher.handout: { title, lines }` printed four to an A4 from the teacher screen, for the "Mijn volgende stap" slip. Without it, the slip is a separate PDF in the lesson folder.
4. **Plan per pupil.** The engine makes one plan per screen, and two pupils share a screen. This lesson therefore puts the personal plan on paper and keeps the screen plan optional. No engine change needed; `plan.intro` says "Maak je eigen plan".
5. **Diagram document (optional, later).** A route map with arrows (`type: 'routes'`, nodes and edges) would show doorstroom more clearly than a table. The table works today.
6. `.example` addresses in `listing.site`: plain text, no change needed. The validator's dash check passes (no em or en dashes in this spec's pupil text).

---

## Brontabel

All pages read on 7 November 2026 with a web fetch (text extracted by the fetch tool; quotes are as returned). "Valid until": the date the rule is next expected to change; "check" means the next scheduled check (January 2027) unless a known date is given. Validity for study year 2027-2028: no page announced a change of these rules for 2027-2028 on 7 November 2026.

| Key | Rule (as used) | Source 1 | Source 2 | Checked | Valid until |
|---|---|---|---|---|---|
| roDiplomas / roToelating | Havo, vwo or mbo 4 diploma: hbo. Universiteit: vwo diploma or hbo-propedeuse. Some programmes have extra requirements (profile); toelatingsonderzoek from 21, sometimes younger for arts. | [Rijksoverheid, Met welke diploma's kan ik naar de universiteit of hogeschool?](https://www.rijksoverheid.nl/themas/onderwijs/hoger-onderwijs/studiekeuze-en-toelating/vraag-en-antwoord/hoger-onderwijs/met-welke-diploma-s-kan-ik-naar-de-universiteit-of-hogeschool) ("Met een havodiploma, een vwo-diploma of een mbo 4-diploma kunt u een opleiding gaan volgen aan een hogeschool"; "Voor toelating tot een universiteit heeft u een vwo-diploma of een propedeuse (eerste jaar) van een hbo-opleiding nodig"; "Voor het toelatingsonderzoek moet u 21 jaar of ouder zijn"; modified 6 Oct 2026) | [Rijksoverheid, Studiekeuze en toelating](https://www.rijksoverheid.nl/onderwerpen/hoger-onderwijs/studiekeuze-en-toelating) ("Studenten kunnen met een hbo-propedeuse (60 studiepunten) toegelaten worden tot een bacheloropleiding aan de universiteit"; "Voor de pabo ... gelden toelatingseisen"; modified 26 Aug 2026) | 7 Nov 2026 | No set date; check Jan 2027 |
| skToelatingseisen / skMboHbo / skPropedeuse / skRoutes | Havo or mbo 4 for hbo, vwo for wo; extra requirements possible; mbo 4 to hbo; pabo stricter for mbo and havo; propedeuse to wo, most wo programmes need extra vwo-level subjects; vwo to hbo or mbo; Ad to related bachelor of two more years; hbo bachelor to wo master via schakelprogramma. | [Studiekeuze123, Toelatingseisen](https://www.studiekeuze123.nl/studiekeuzewoordenboek/toelatingseisen) ("minimaal een havo- of mbo-4-diploma ... voor het hbo en een vwo-diploma voor de universiteit"); [Studiekeuze123, Hoe zit het met de toelatingseisen?](https://www.studiekeuze123.nl/wegwijzer/van-mbo-naar-hbo/toelatingseisen-en-kosten/hoe-zit-het-met-de-toelatingseisen) ("Als je een mbo-diploma op niveau 4 hebt behaald, kun je doorstromen naar een hbo-opleiding") | [Studiekeuze123, Doorstromen met een propedeuse](https://www.studiekeuze123.nl/wat-ga-jij-kiezen/artikel/doorstromen-met-een-propedeuse) ("Daarom moet je bij de meeste wo-opleidingen aanvullende vakken op vwo-niveau halen"); [Studiekeuze123, Mogelijke leerroutes](https://www.studiekeuze123.nl/mogelijke-leerroutes) ("Dan kun je kiezen voor een hbo-opleiding of een mbo-opleiding"; "doorstromen naar een aanverwante hbo-bachelor, die dan nog maar twee jaar duurt"). No page date shown (footer 2026). | 7 Nov 2026 | No set date; check Jan 2027 |
| roMboNiveaus / kmHavoVwo / kmVerder | Mbo 4 middenkaderopleiding (3 or 4 years) is open with, among others, proof of the first 3 years of havo or vwo; with a havo diploma you can study at mbo; with an overgangsbewijs to havo 4 or vwo 4 usually mbo 4; after mbo study further in mbo or hbo. | [Rijksoverheid, Uit welke mbo-opleidingen kan ik kiezen?](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/middelbaar-beroepsonderwijs/uit-welke-mbo-opleidingen-kan-ik-kiezen) (niveau 4 entry: "het bewijs van de eerste 3 leerjaren havo of vwo"; "Met het diploma kun je ook verder studeren op het hbo"; modified 7 Oct 2026) | [KiesMBO, Doorstromen van havo of vwo naar mbo](https://www.kiesmbo.nl/over-het-mbo/doorstromen-van-havo-of-vwo-naar-mbo) ("Als je een overgangsbewijs hebt naar havo-4/vwo-4 of hoger, dan kun je meestal doorstromen naar een mbo-4 opleiding"; metadata 07/07/2025); [KiesMBO, Over het mbo](https://kiesmbo.nl/over-het-mbo) ("Ook als je een havo diploma hebt ... kan je studeren aan het mbo"); [KiesMBO, Aan het werk of verder studeren](https://www.kiesmbo.nl/over-het-mbo/aan-het-werk-of-verder-studeren) ("Dat kan op een ander niveau in het mbo of op het hbo") | 7 Nov 2026 | No set date; check Jan 2027 |
| roAanmelden / roDeadline / skAanmelden | Bachelor and Ad: register via Studielink by 1 May; selection programmes sometimes earlier; later: no right to admission, may be refused, no right to a studiekeuzecheck; registered by 1 May and switching after: allowed, new programme may require a check; after a negative bsa: right to admission elsewhere, check may be required; at most 4 registrations at once, at most 2 fixus; 2027 dates: 15 Jan, 1 May, 1 Sep. | [Rijksoverheid, Hoe meld ik me aan voor een opleiding aan de hogeschool (hbo) of universiteit?](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/hoger-onderwijs/aanmelden-opleiding-hogeschool-hbo-universiteit) ("uiterlijk 1 mei"; "Dat doe je via Studielink"; "Voor sommige opleidingen moet je je eerder aanmelden. Bijvoorbeeld als er selectie-eisen zijn"; "Maar je hebt dan geen recht meer op toelating. De opleiding kan je weigeren."; modified 30 Oct 2026); [Rijksoverheid, Wanneer moet ik me aanmelden voor een opleiding aan de universiteit of hogeschool?](https://www.rijksoverheid.nl/onderwerpen/hoger-onderwijs/vraag-en-antwoord/deadline-aanmelden-opleiding-hogeschool-of-universiteit) ("De deadline van 1 mei en de studiekeuzecheck gelden dan niet"; "Dan mag u na 1 mei nog wisselen van opleiding tot het einde van het nieuwe studiejaar"; modified 6 Oct 2026; same text as the [productbeschrijving](https://www.rijksoverheid.nl/wetten-en-regelingen/productbeschrijvingen/aanmelden-voor-opleiding-aan-universiteit-of-hogeschool)) | [Studiekeuze123, Aanmelden studie](https://www.studiekeuze123.nl/aanmelden-studie) ("Meld je uiterlijk 1 mei aan voor een opleiding met vrije instroom"; "Meld je uiterlijk 15 januari aan voor een opleiding met een numerus fixus"; "Je mag je per studiejaar voor maximaal 4 opleidingen tegelijkertijd aanmelden"; timeline 15 januari 2027, 1 mei 2027, 1 september 2027) | 7 Nov 2026 | Dates for 2027-2028 intake: 15 Jan 2027 and 1 May 2027; check Jan 2027 |
| roFixus | Fixus: register through 15 January; at most 2 fixus programmes per study year; for geneeskunde, tandheelkunde, fysiotherapie, verloskunde and mondzorgkunde only 1 institution; selection or lottery. | [Rijksoverheid, Hoe meld ik me aan voor een fixusopleiding?](https://www.rijksoverheid.nl/themas/onderwijs/hoger-onderwijs/studiekeuze-en-toelating/vraag-en-antwoord/hoger-onderwijs/hoe-werkt-de-toelating-bij-een-opleiding-met-een-numerus-fixus) ("De uiterste aanmelddatum is tot en met 15 januari"; "Per studiejaar mag u zich voor maximaal 2 fixusopleidingen aanmelden"; "Hier mag u maar voor 1 onderwijsinstelling kiezen"; modified 6 Oct 2026) | Studiekeuze123, Aanmelden studie (as above) | 7 Nov 2026 | 15 Jan 2027 for 2027-2028; check Jan 2027 |
| roSkc / skSkc | Registered by 1 May: right to a studiekeuzecheck; institution may make it compulsory and refuse you if you skip it; advice not binding. | [Rijksoverheid, Welke regels gelden voor de studiekeuzecheck?](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/hoger-onderwijs/regels-studiekeuzecheck) ("Je hebt recht op een studiekeuzecheck als je je op uiterlijk 1 mei aanmeldt"; "Opleidingen kunnen namelijk weigeren je in te schrijven als je niet mee hebt gedaan aan een studiekeuzecheck"; modified 6 Oct 2026); roAanmelden ("Het advies dat je krijgt is niet bindend") | [Studiekeuze123, Studiekeuzecheck](https://www.studiekeuze123.nl/studiekeuzewoordenboek/studiekeuzecheck) ("Dan heb je in de meeste gevallen recht op de studiekeuzecheck"; "De hogeschool of universiteit kan je ook verplichten om mee te doen") | 7 Nov 2026 | No set date; minister announced an evaluation (Kamerbrief 31288-1188, research file); check Jan 2027 |
| roMboAanmelden / roMboToelating / kmAanmelden / stb2016362 / webToc | Mbo: register by 1 April on the school's website (DigiD); then right to admission if you meet the entry requirements and take part in the intake; later: no right, may be refused; extra requirements published by 1 February; some programmes have a fixed number of places. Law: "Uiterlijk op 1 april"; the refusal ground for late registration applies only where the Leerplichtwet no longer applies. | [Rijksoverheid, Hoe meld ik mij aan voor een mbo-opleiding?](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/middelbaar-beroepsonderwijs/aanmelden-mbo) ("Meld je uiterlijk 1 april aan via de website van de mbo-school"; "Maar je hebt dan geen recht meer op toelating"; "Dan staan deze uiterlijk op 1 februari op de website van de mbo-school"; modified 30 Oct 2026); [Rijksoverheid, Wat zijn de toelatingseisen voor het mbo?](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/middelbaar-beroepsonderwijs/wat-zijn-de-toelatingseisen-voor-het-mbo) (modified 7 Oct 2026) | [KiesMBO, Aanmelden en toelatingsrecht](https://www.kiesmbo.nl/over-het-mbo/aanmelden-en-toelatingsrecht) ("Meld je uiterlijk 1 april aan voor de start van het nieuwe schooljaar"; "Wanneer je je na 1 april aanmeldt, dan kan de mbo-school je weigeren"; metadata 05/12/2026); law: [Wet van 5 oktober 2016, Stb. 2016, 362](https://zoek.officielebekendmakingen.nl/stb-2016-362.html) (inserts art. 8.0.1 WEB: "Uiterlijk op 1 april voorafgaand aan een studiejaar meldt degene die zich als deelnemer wenst te laten inschrijven ... zich aan"; art. 8.1.1c lid 3 onder c); current law: [WEB, BWBR0007625](https://wetten.overheid.nl/BWBR0007625/) (version "geldend van 01-08-2026 t/m heden": table of contents "Artikel 8.0.1 Aanmelding uiterlijk op 1 april"; article body not loaded) | 7 Nov 2026 | 1 Apr 2027 for 2027-2028; check Jan 2027 |
| roVoMbo (discrepancy only) | One Rijksoverheid page says "vóór 1 april". Not used in pupil text. | [Rijksoverheid, Wat moet ik weten als ik van het vmbo naar het mbo ga?](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/voortgezet-onderwijs/van-vo-naar-mbo) ("Zorg dat je je vóór 1 april aanmeldt"; modified 4 Aug 2026) | none | 7 Nov 2026 | Check Jan 2027 |
| roBsa / skBsa | Bsa: decision on progress, usually year 1; the institution decides whether it is binding; all rules in the OER; depending on policy you must stop; personal circumstances count; objection via the studentenstatuut; after a negative bsa you may register for another programme. | [Rijksoverheid, Wat is het bindend studieadvies aan de hogeschool (hbo) of universiteit?](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/hoger-onderwijs/wat-is-het-bindend-studieadvies-bsa-in-het-hoger-onderwijs-ho) ("De universiteit of hogeschool bepaalt zelf of dit advies bindend is"; "Alle regels die gelden bij een bsa staan in de onderwijs- en examenregeling (OER) van uw opleiding"; "Afhankelijk van het beleid bij uw instelling moet u dan stoppen met uw opleiding"; "De opleiding moet rekening houden met persoonlijke omstandigheden"; modified 6 Oct 2026) | [Studiekeuze123, Bindend studieadvies (BSA)](https://www.studiekeuze123.nl/studiekeuzewoordenboek/bindend-studieadvies-bsa) ("een bepaald aantal studiepunten (ECTS) moet halen"; "De kans is groot dat je dan moet stoppen met de opleiding"; "Je mag je dan wel inschrijven voor een andere opleiding") | 7 Nov 2026 | No set date; a motion of 16 Apr 2026 (kst-31288-1245) asks the government to discuss the bsa with institutions, no bill; check Jan 2027 |
| duoEerstejaars / skFeb | From vo, first prestatiebeurs for hbo/wo, studiefinanciering stops before 1 February, no new prestatiebeurs for hbo/wo in the same study year: basisbeurs, aanvullende beurs and reisproduct of that year not repaid; lening always repaid; once for mbo and once for hbo/wo; the months count as used. | [DUO, Stoppen in uw 1e jaar](https://duo.nl/particulier/opleiding-stoppen-of-wijzigen/stoppen-in-je-eerste-jaar.jsp) ("U hoeft uw prestatiebeurs (basisbeurs, aanvullende beurs en studentenreisproduct) niet terug te betalen als uw studiefinanciering stopt voor 1 februari"; "Een rentedragende lening moet u altijd terugbetalen"; "U kunt 1 keer gebruikmaken van de eerstejaarsregeling voor mbo en 1 keer voor hbo of universiteit"; "De maanden die u in het 1e jaar hebt gekregen, tellen wel mee als verbruikte maanden prestatiebeurs"; no date shown) | [Studiekeuze123, Stoppen? Voor 1 februari](https://www.studiekeuze123.nl/wat-ga-jij-kiezen/studie-kiezen/stoppen-voor-1-februari) ("hoeven de ontvangen basisbeurs, aanvullende beurs en het studentenreisproduct namelijk meestal niet terug te betalen"; "Een eventuele lening moet je wel altijd terugbetalen"; "De maanden dat je studiefinanciering hebt gekregen, tellen mee"; "Meestal kun je een deel van het collegegeld terugkrijgen") | 7 Nov 2026 | No set date; check Jan 2027 |
| duoStop / duoHoelang / duoWissel / duoGift | Stop studiefinanciering at the latest on the 1st of the month (deregistered per 15 June: no right from 1 July); 4-year study: 7 years of studiefinanciering, basisbeurs the first 4; mbo to hbo: right starts again; switching: right does not always restart; prestatiebeurs becomes a gift with a diploma within the diplomatermijn. | [DUO, Studiefinanciering stopzetten](https://duo.nl/particulier/studiefinanciering-stopzetten.jsp) ("Zet uw studiefinanciering uiterlijk stop op de 1e dag van de maand"; "U hebt dan vanaf 1 juli geen recht meer op studiefinanciering"); [DUO, Hoelang recht](https://duo.nl/particulier/studiefinanciering/hoelang-recht.jsp) ("U krijgt alleen de eerste 4 jaar de basisbeurs"; "De maanden die u voor het mbo hebt gehad, tellen niet mee voor het hbo"; last update 5 Nov 2026) | [DUO, Nieuwe opleiding](https://duo.nl/particulier/opleiding-stoppen-of-wijzigen/van-opleiding-veranderen.jsp) ("Uw recht op studiefinanciering begint niet altijd opnieuw als u van opleiding wisselt"); [DUO, Omzetting prestatiebeurs](https://duo.nl/particulier/diploma-behaald/gift-of-lening.jsp) ("Behaalt u een diploma binnen de diplomatermijn, dan wordt de prestatiebeurs omgezet in een gift"); all one organisation, none is the right answer of a question | 7 Nov 2026 | No set date; check Jan 2027 |
| skActiviteiten / skKalender | Open dag: information on several programmes, talk to students and teachers, atmosphere. Meeloopdag: a day with a current student, same lectures. Proefstuderen: lessons the institution puts together. Calendar of open days, meeloopdagen and proefstuderen for hbo and wo. | [Studiekeuze123, Open dag, meeloopdag en proefstuderen](https://www.studiekeuze123.nl/wat-ga-jij-kiezen/artikel/open-dag-meeloopdag-en-proefstuderen) ("Wil je leerling een echte studentendag meemaken? Dan is meelopen perfect."; proefstuderen: the institution "stelt een lesprogramma samen") | [Studiekeuze123, Open dagen](https://www.studiekeuze123.nl/open-dagen) (filter "Type activiteit": Meeloopdag, Proefstuderen, Open dag / avond; "open dagen bij hogescholen en universiteiten in Nederland") | 7 Nov 2026 | No set date (definitions) |
| skOver / kmOver / kmOpenDagen (teacher only) | Studiekeuze123: independent foundation (LCSK), fully funded by OCW, all accredited hbo and wo programmes. KiesMBO: developed by SBB, commissioned by OCW; open days per province. | [Studiekeuze123, Over Studiekeuze123](https://studiekeuze123.nl/over-studiekeuze123) ("Studiekeuze123.nl wordt volledig gefinancierd door het ministerie van OCW"; "een onafhankelijke website") | [KiesMBO, Over KiesMBO.nl](https://www.kiesmbo.nl/over-kiesmbonl) ("ontwikkeld door de Samenwerkingsorganisatie Beroepsonderwijs Bedrijfsleven (SBB)", "in opdracht van het Ministerie van Onderwijs, Cultuur en Wetenschap"; metadata 04/05/2024); [KiesMBO, Open dagen](https://kiesmbo.nl/open-dagen) ("Zoek per provincie"; the words meeloopdag and proefstuderen do not appear) | 7 Nov 2026 | No set date |

## Onzeker

- **Blocked or partial pages.** The current law texts could not be read in full: wetten.overheid.nl returned only the table of contents for the WEB (BWBR0007625, version from 1 Aug 2026) and the WHW (BWBR0005682, version from 1 Aug 2026), and the BWB XML on repository.officiele-overheidspublicaties.nl was blocked (permission request not answered). So WEB art. 8.0.1 and 8.1.1c rest on Stb. 2016, 362 (the act that inserted them) plus the current table-of-contents title "Aanmelding uiterlijk op 1 april". WHW art. 7.24 and 7.28 (diplomas, propedeuse) were not read; the routes rest on Rijksoverheid and Studiekeuze123. The Wsf 2000 (eerstejaarsregeling, art. 5.10) was not re-read by me; ESC-DUO read it on 7 Nov 2026. internetconsultatie.nl was blocked by robots.txt. Studielink.nl was not read; its deadlines come from Rijksoverheid and Studiekeuze123.
- **"Uiterlijk 1 april" against "vóór 1 april".** The law (Stb. 2016, 362), the Rijksoverheid mbo page and KiesMBO say "uiterlijk (op) 1 april"; the Rijksoverheid vmbo page says "vóór 1 april". No question depends on registering on 1 April itself. Tell pupils to register well before.
- **1 May 2027 is a Saturday.** Studiekeuze123's timeline still gives "1 mei 2027". Whether the Algemene termijnenwet moves a fixed date like this to Monday 3 May was not checked. V2.3 uses 10 May so the answer does not depend on it; the teacher should say "uiterlijk 1 mei, en liever veel eerder".
- **Kwalificatieplicht and the mbo deadline.** Stb. 2016, 362 lets a school refuse a late registration only where the Leerplichtwet no longer applies. Who is still kwalificatieplichtig (age, startkwalificatie) was not read on an official page. The lesson avoids the case: Lina is 18 on 10 May, and B2 says "Je bent 18". The teacher note says to ask the school.
- **Single-source items.** The definitions of open dag, meeloopdag and proefstuderen (V4.1, C4, B4) come from one organisation (LCSK/Studiekeuze123); no Rijksoverheid page defines them. The 2-year Ad route, collegegeld restitutie and the stop-date mechanics are single-source and are teacher-only or story facts. The DUO pages on switching and the gift are one organisation and are never a right answer.
- **Eerstejaarsregeling wording.** DUO: "U krijgt in hetzelfde studiejaar niet opnieuw prestatiebeurs"; Wsf 2000 art. 5.10 (read by ESC-DUO, not by me): "niet over datzelfde studiejaar opnieuw studiefinanciering". Rule r4 uses "studiefinanciering". In the story and checks nobody gets anything in the same study year, so the answers do not depend on the difference.
- **Room 3 is hbo and universiteit only.** Both characters chose hbo or wo in the story. The intro says so, and the teacher note names the mbo eerstejaarsregeling. A decaan who wants mbo first-year content in the room can swap V3.1 for an mbo case once the mbo studieadvies rules (WEB art. 8.1.7a) are read.
- **Bsa.** No page gives a national bsa norm or a bar period after a negative bsa; the lesson names neither. A motion of 16 April 2026 asks for talks with institutions; no bill was found. If a law caps the bsa later, item a of V3.1 ("Elke opleiding ... dezelfde bsa-norm") stays wrong, but the teacher note must be updated.
- **Studiekeuzecheck.** The minister promised an external evaluation (Kamerbrief 31288-1188, research file); whether rules change for 2027-2028 is not known. Check in January 2027.
- **Page dates.** DUO and Studiekeuze123 pages show no date (except DUO "Hoelang recht": 5 Nov 2026). KiesMBO dates are metadata in an ambiguous format (05/12/2026 is probably 12 May 2026).
- **Interest tests.** The lesson does not judge any test. The teacher line "Testen van een hogeschool of universiteit tonen vaak vooral hun eigen opleidingen" rests on the research file (Leiden, Radboud, UT pages, read 6 Nov 2026), not on a page read today.

## Voor een nieuw schooljaar

For a class of 2027-2028 (entering 2028-2029): move every story date one year (rooms 1, 2, 4: 2027-2028; room 3: December 2028 and March 2029), re-check the weekdays, and re-read every source. The digits do not depend on the year (4: count of programmes; 3: 15 min 12; 7: September to March; 9: the meeloopdag date, if it stays on the 9th), so the code can stay 4379 if the meeloopdag stays on 9 March and the deadline gap stays 12 to 15 January. In 2028, 15 January is a Saturday; keep the rule "tot en met 15 januari" and keep Ravi's day on the 12th.

---

## Changelog

Item numbers refer to the room questions (V1.1 and so on), rule lines (r1 and so on) and check items (C1 to C4, B1 to B4) of this spec.

7 november 2026, first version:
- Built from the research brief (`research/studiekeuze_tools.md`, idea 2 "Route 18" and idea 3 "Van spel naar afspraak") and the ESC-KAMER template. Concept kept as briefed (two pupils, four rooms, one digit each), with three changes: the friend is a vwo pupil, so vwo to hbo and mbo can be shown; room 3 is an explicit look ahead ("Vooruitblik") because the first-year rules only bite in 2027-2028; room 4 returns to "nu" so the lesson ends with an action pupils can still take.
- Avoided from earlier check rounds: every right answer that rests on a rule with exceptions names the exception (V1.3 "Vaak ... extra vakken", V3.3 "Meestal binnen 10 jaar") or the situation rules it out (age 17 or 18 for the 21+ toelatingsonderzoek and kwalificatieplicht, "Extra eisen: geen", "eerste aanmelding", "nieuw studiejaar", "geen lening"). Dates avoid 1 April and 1 May themselves (see Onzeker). The bsa item that would need "meestal" is not offered. No option uses "beide" or "allebei".
- Digits and code derived: 4 (2 mbo + 2 hbo programmes), 3 (15 min 12), 7 (September 2027 to March 2028), 9 (9 March 2027). Code **4379**.

7 november 2026, self-review before hand-off (re-read as a strict fact checker, a havo 4 pupil and a decaan):
- (a) Route map: the numerus fixus was in the column "Extra eisen" while V1.1 counts Fysiotherapie as open to Lina. That contradicted the answer. The map now has "Extra eisen: geen" on every row and a separate column "Numerus fixus". Digit 1 unchanged (4).
- (a) Rule r5 room 1 ("Ben je 21 of ouder, dan kan soms een toelatingsonderzoek") left out that this is for people without the right diploma, and was not a full sentence. Split into r5 (extra eisen) and r6 ("Heb je niet het juiste diploma en ben je 21 of ouder? Dan kun je soms een toelatingsonderzoek doen."). Notes of V1.1 and V1.3 point to r6.
- (a) Rule r4 room 3 said "Je krijgt dan wel in hetzelfde studiejaar geen nieuwe studiefinanciering", which reads as a consequence. DUO lists it as a condition. r3 now states the rule and adds "Een lening wel"; r4 lists the three conditions ("Regel 3 geldt alleen als ..."). V3.2 explanation adds "en ze voldoet aan regel 4". Answers unchanged.
- (a) Rule r5 room 3 ("Elke maand studiefinanciering ... telt mee") was absolute, while DUO says mbo months do not count for hbo. Scoped to "voor hbo of universiteit".
- (a) V3.1 explanation said "Elke hogeschool of universiteit bepaalt die zelf" about the norm; the sources say the institution decides whether the advice is binding and that the rules are in the OER, and Studiekeuze123 shows the minimum per programme. Now "Ze verschillen per opleiding."
- (a) V3.3 explanation said the basisbeurs becomes a gift "alleen ... binnen 10 jaar". DUO can extend the term (ESC-DUO round 2). Now "als hij op tijd een diploma haalt. Meestal is dat binnen 10 jaar."
- (a) Teacher note Kamer 2 said kwalificatieplichtige pupils "kunnen niet ... worden geweigerd". Stb. 2016, 362 only limits the refusal ground to those outside the Leerplichtwet; reworded to that, with "Vraag het de mbo-school".
- (a) Teacher note Kamer 4 said mbo meeloopdagen are "vooral op de site van de school", which no page says. Now: the KiesMBO page does not list them separately (observed 7 Nov 2026); look on the school's site. The two research-file claims about tests are marked as such.
- (a) Teacher note Kamer 3: "te laat stoppen betekent terugbetalen" narrowed to DUO's statement (money received by stopping late is repaid). Added the mbo eerstejaarsregeling (DUO) and WEB art. 8.1.7a, marked as not read.
- (b) Map column "wo-bachelor" now "universiteit (wo-bachelor)", matching the item texts of V1.1.
- (b) All pupil sentences re-counted with a script after the fixes: none over 20 words; no em or en dashes.
- (c) Room 3 covered only hbo and universiteit without saying so. Intro now ends "Ook het mbo heeft regels voor het eerste jaar. Deze kamer gaat over hbo en universiteit."; Onzeker names the gap.
- (c) Checked for ranking words in pupil text ("hoger", "beter", "laag"): only in the neutrality line ("zegt niets over goed of beter", also under the map) and care point 2; "hoger" appears only in quoted source text. V1.1 retry pointer narrowed to rule r1 (pointing at rows k1 to k4 would give the answer away). V4.2's right answer is the mbo meeloopdag. No commercial tool is named.
- Digits, answers and code re-derived after all fixes: unchanged. Code **4379**.
