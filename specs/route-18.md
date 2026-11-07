# Escape "Route 18" (content spec, ID voorstel: ESC-ROUTE)

Regels geldig voor: aanmelden voor studiejaar 2027-2028 (de havo 5- en vwo 6-leerlingen van 2026-2027) en het eerste jaar 2027-2028; gecontroleerd op 7 november 2026; validUntil: 31 juli 2027 (the story's "now" is school year 2026-2027; for a class of 2027-2028 every story date moves one year, see "Voor een nieuw schooljaar"). The lesson names no amount of money, so no amount has to be kept up to date.

Doelgroep en moment: havo 5 en vwo 6 (2026-2027). Lesvenster: half november 2026 tot half januari 2027, vóór de aanmelddatum van 15 januari; best de week van 30 november of 7 december 2026, zodat leerlingen nog open dagen en meeloopdagen in februari en maart kunnen boeken. Havo 4 en vwo 5 kunnen meedoen; voor hen gelden de data van kamer 2 een jaar later. Lesduur 45 minuten, escape 26 minuten, stop op minuut 32.

Format as ESC-KAMER (op-kamers.md): four rooms, 3 questions per room, one retry with a nudge that points to a line, a hint that costs 30 seconds, one digit per room, one lock of four digits, then the end check, the end screen and the plan. Pupil text is Dutch B1, sentences at most 20 words, no em or en dashes. Rules come only from the source table at the end. All pages read on 7 November 2026.

Rule boxes (`room.rules`): every rule a pupil needs on the first try is in the room's rule box or in the situation text, so careful readers are not punished (G4 fix 3). Each digit clue shows the facts it needs, so the digit can be worked out from the digit screen alone (G4 fix 1). Each clue names the lock position as "Het 1e cijfer van het slot" and so on (G4 fix 2). Exceptions that would give a question a second defensible answer are either named in the rule box or ruled out in the situation (lessons from check B: absolute rules, BSA and DUO exceptions, unstated age).

Why this lesson (research `research/studiekeuze_tools.md`): information and interest tests are free and saturated; information is split between Studiekeuze123 (hbo and wo) and KiesMBO (mbo); pupils rate real experiences highest; only intensive, connected activity is linked to less switching; pupils plan a median of 2 meeloopdagen. So Route 18 is not a test and not a database. It teaches the rules that trip pupils up, puts mbo, hbo and universiteit side by side, and ends with one dated action that each pupil writes down for themselves.

Fiction line (shown once at the start):
"Verzonnen zijn de mensen, de stad, de scholen, het aantal plekken en de data. De soorten opleidingen bestaan echt. De regels zijn echt; bij elke uitleg staat de bron."

Neutrality line (shown under the route map in room 1, and on the teacher screen):
"De kaart zet mbo, hbo en universiteit naast elkaar. De volgorde zegt niets over goed of beter."

Fictional on purpose: the city Zeestad (as in ESC-MAAND and ESC-KAMER); the schools Golfbreker College (mbo), Hogeschool De Duinen (hbo) and Universiteit van Zeestad (wo); which programme each school offers, every place count and open-day date; the pupils Lina and Ravi; the oom and the mentor. A web search on 7 November 2026 found no real school with these names. The names are not close to a real school name on purpose ("Hogeschool Zeestad" was rejected as too close to Hogeschool Zeeland). The programme types and job examples are real on purpose (check B, Revision 2): Software developer is a real mbo 4 programme (ROC Da Vinci College, "Niveau 4", crebo 25998) and Bewegingswetenschappen a real wo bachelor (Studiekeuze123); HBO-ICT, Fysiotherapie and Informatica are common programme names. So the fiction line no longer calls the programmes made up. Studielink, Studiekeuze123, KiesMBO, DUO and Rijksoverheid are named as the real places where a rule applies or is published; no page of theirs is imitated.

Story time: Lina (havo 5) and Ravi (vwo 6) are both 17 in November 2026. Lina turns 18 in March 2027 (room 2 intro), so she is 18 on 10 May 2027 (V2.3) and the mbo rules for pupils who are still kwalificatieplichtig play no role. Rooms 1, 2 and 4 are in school year 2026-2027 ("nu"). Room 3 is a look ahead to their first year, 2027-2028, and is labelled "Vooruitblik"; in it Lina stops and Ravi doubts but stays (his stop in March is a what-if). Room 4 goes back to "nu" (1 February 2027), so the lesson ends with an action pupils can still take this school year. All weekdays checked with a calendar: wo 25 nov 2026, di 12 jan 2027, vr 15 jan 2027, ma 1 feb 2027, di 2 maart 2027, di 9 maart 2027, wo 10 maart 2027, do 11 maart 2027, za 13 maart 2027, za 20 maart 2027, ma 10 mei 2027, ma 13 dec 2027, wo 15 dec 2027, wo 15 maart 2028.

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
Head: "Opleiding" | "Soort" | "Waar" | "Numerus fixus" | "Werk later, bijvoorbeeld"
- k1 "Software developer" | "mbo 4" | "Golfbreker College" | "nee" | "app-bouwer"
- k2 "Sport en bewegen" | "mbo 4" | "Golfbreker College" | "nee" | "sportleider"
- k3 "HBO-ICT" | "hbo-bachelor" | "Hogeschool De Duinen" | "nee" | "app-bouwer"
- k4 "Fysiotherapie" | "hbo-bachelor" | "Hogeschool De Duinen" | "ja" | "fysiotherapeut"
- k5 "Informatica" | "universiteit (wo-bachelor)" | "Universiteit van Zeestad" | "nee" | "app-bouwer of onderzoeker"
- k6 "Bewegingswetenschappen" | "universiteit (wo-bachelor)" | "Universiteit van Zeestad" | "nee" | "onderzoeker of adviseur"

Note under it: "De kaart zet mbo, hbo en universiteit naast elkaar. De volgorde zegt niets over goed of beter. In het echt hebben sommige opleidingen extra eisen, zoals een profiel. Kijk altijd op de pagina van de opleiding."

Design note: the same job (app-bouwer) is reachable from mbo 4, hbo and wo, so the map shows routes as equal options, not as a ladder. Rows are ordered mbo, hbo, wo only because the rule box lists them in that order. The column "Extra eisen" (all "geen") is gone (gate P6: twelve empty cells); rule r5 now says no programme on this map has an extra eis, which keeps V1.1 to one answer, and the note says that real programmes can have them (gate V2; "sommige", as Rijksoverheid says, because no page gives a share). The numerus fixus has its own column so pupils do not read it as an entry requirement; it limits places, not which diploma you need, and it matters in room 2. The engine scrolls a wide table inside its own box on a phone.

**Moeilijke woorden (plain):** "Bachelor: een opleiding aan het hbo of de universiteit. Wo: de universiteit. Propedeuse: het eerste jaar van een hbo-bachelor, als je alles hebt gehaald. Dat zijn 60 studiepunten. Numerus fixus: de opleiding heeft maar een vast aantal plekken."

**Rule box (`rules`, title "Regels"):**
- r1 "Met een havodiploma kun je naar het mbo en naar het hbo."
- r2 "Met een vwo-diploma kun je naar het mbo, het hbo en de universiteit."
- r3 "Met een mbo 4-diploma kun je naar het hbo."
- r4 "Met een hbo-propedeuse kun je naar de universiteit. Bij de meeste opleidingen moet je dan eerst nog extra vakken halen."
- r5 "Let op: sommige opleidingen hebben extra eisen, zoals een profiel. Op deze kaart vraagt geen opleiding een extra eis bij een havo-, vwo- of mbo 4-diploma."
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
- Hint (30 s): "Kijk in de kolom Soort. Welke soorten staan in regel 1?"
- Explanation: "Met een havodiploma kun je naar het mbo en het hbo. Voor de universiteit heb je een vwo-diploma of een hbo-propedeuse nodig."
- Sources: roDiplomas, roMboNiveaus, kmHavoVwo, skToelatingseisen
- Note: Lina is 17 (intro, rule r6) and r5 says no programme on the map has an extra eis, so the toelatingsonderzoek (21+) and profile requirements cannot give a second answer. Fysiotherapie (f) is right: a numerus fixus limits places, it does not change which diploma you need (roFixus: "kan de opleiding studenten toelaten op basis van selectie of door te loten"). Havo to mbo 4: Rijksoverheid lists "het bewijs van de eerste 3 leerjaren havo of vwo" as entry for the mbo 4 middenkaderopleiding; KiesMBO: "Ook als je een havo diploma hebt ... kan je studeren aan het mbo". Revision 3 (check B round 2): r5 now says no programme on the map asks an extra eis "bij een havo-, vwo- of mbo 4-diploma". The old "geen enkele opleiding een extra eis" clashed with r4 and V1.3, where a propedeuse holder needs extra vakken (WHW 7.28 lid 1a).

### Vraag 1.2 (id: vwo, kind: pick, docs: kaart)
- Situ: "Ravi twijfelt tussen Fysiotherapie en Bewegingswetenschappen. Zijn oom zegt: 'Met vwo is hbo zonde. Je moet naar de universiteit.'"
- Prompt: "Heeft de oom van Ravi gelijk?"
- Options:
  - a "Ja, met een vwo-diploma kun je alleen naar de universiteit"
  - b "Ja, want het hbo is alleen voor havo en mbo"
  - c "Nee, met een vwo-diploma kun je naar het mbo, het hbo en de universiteit"
- Correct: c
- Retry pointer: rule r2.
- Nudge: "Lees regel 2. Hoeveel soorten opleidingen noemt die regel?"
- Hint: "Kijk naar regel 2. Welke woorden staan na 'vwo-diploma'?"
- Explanation: "Met een vwo-diploma kun je naar het mbo, het hbo en de universiteit. Ravi kiest dus zelf wat bij hem past."
- Sources: roDiplomas, skRoutes, roMboNiveaus
- Note: Studiekeuze123 ("Mogelijke leerroutes"): from vwo "kun je kiezen voor een hbo-opleiding of een mbo-opleiding". No option ranks the routes.

### Vraag 1.3 (id: propedeuse, kind: pick, docs: kaart)
- Situ: "Lina kiest HBO-ICT. Na een jaar haalt ze haar propedeuse. Daarna wil ze Informatica doen aan de universiteit."
- Prompt: "Kan dat?"
- Options:
  - a "Nee, met een havodiploma kom je nooit op de universiteit"
  - b "Ja, maar pas als ze 21 is en een toelatingsonderzoek doet"
  - c "Ja. Na haar propedeuse kan ze naar de universiteit, maar waarschijnlijk met extra vakken."
- Correct: c
- Retry pointer: rule r4.
- Nudge: "Lees regel 4. Wat heeft Lina na een jaar HBO-ICT?"
- Hint: "Wat heeft Lina na een jaar HBO-ICT? Zoek dat in regel 4."
- Explanation: "Met een hbo-propedeuse kun je naar de universiteit. Vaak moet je eerst extra vakken halen. Je kunt ook eerst je hbo-bachelor afmaken."
- Sources: roDiplomas, roToelating, skPropedeuse
- Note: option c carries the exception ("waarschijnlijk met extra vakken") and is worded differently from r4, so the pupil has to apply the rule, not match it (gate V1); the right answer is not an absolute rule (Studiekeuze123: "bij de meeste wo-opleidingen aanvullende vakken op vwo-niveau halen"; Rijksoverheid: "kunnen ... toegelaten worden"). Option b is wrong: the 21+ toelatingsonderzoek (r6) is for people without the right diploma; with a propedeuse Lina has one. The last sentence of the explanation (bachelor first, then a wo master with a schakelprogramma) is from skRoutes and is not asked.

### Cijfer kamer 1
- Clue: "Het 1e cijfer van het slot: met een havodiploma kun je naar het mbo en het hbo. De kaart heeft 2 mbo-opleidingen, 2 hbo-opleidingen en 2 universiteitsopleidingen. Voor hoeveel opleidingen heeft Lina het juiste diploma?"
- Digit: **4** (2 mbo + 2 hbo; same set as the right items of V1.1; all facts are in the clue).
- Clue retry: "Lina mag naar het mbo en het hbo. Tel die opleidingen op de kaart."
- Remember: "Havo, vwo en mbo 4 openen elk meer dan één route. Een omweg via mbo 4 of een propedeuse kan ook."

---

## Kamer 2. De deadlines (dinsdag 12 januari 2027)

**Intro:** "Het is januari. Lina wordt in maart 18. Ravi en Lina appen over hun aanmelding."

### Document 2: app van Ravi en Lina (type: chat, id: app)
Name: "Ravi", sub "app op de telefoon van Lina". (Lina's own messages show as "Jij" in the engine; Revision 3, playtest S8: the old name "Ravi en Lina" looked like a group, not a sender.)
- v1 them (Ravi), 16:40 "Ik meld me vandaag aan voor Fysiotherapie bij De Duinen."
- v2 them (Ravi) "Daar is een numerus fixus. Er zijn maar 120 plekken."
- v3 them (Ravi) "Voor de zekerheid meld ik me ook aan voor Bewegingswetenschappen. Daar is geen numerus fixus."
- v4 me (Lina) "Ik twijfel nog tussen Software developer en HBO-ICT."
- v5 me (Lina) "Die hebben geen numerus fixus en geen selectie."

**Moeilijke woorden (plain):** "Studielink: de website waar je je aanmeldt voor de meeste bachelors aan het hbo of de universiteit. Recht op toelating: de opleiding moet je toelaten als je aan de eisen voldoet. Selectie: de opleiding kiest wie er mag beginnen. Tot en met 1 mei: 1 mei telt nog mee. Studiekeuzecheck: een check of de opleiding bij je past. Bijvoorbeeld een gesprek of proefstuderen."

**Rule box (`rules`, title "Regels"):**
- r1 "Bachelor met een numerus fixus: meld je aan via Studielink, tot en met 15 januari."
- r2 "Andere bachelor via Studielink, met start in september: meld je aan tot en met 1 mei. Heeft de opleiding selectie, zoals bij kunst of sport? Dan is de datum soms eerder."
- r3 "Mbo-opleiding: meld je aan tot en met 1 april, op de website van de mbo-school."
- r4 "Is het je eerste aanmelding en ben je te laat? Dan heb je geen recht meer op toelating. De opleiding kan je weigeren."
- r5 "Ben je nog geen 18? Dan gelden bij het mbo soms uitzonderingen. Vraag het de mbo-school."

Note on r4 and r5 (Revision 2, check B): r4 was "Meld je je later aan? ..." for everyone. That was too absolute. For hbo and universiteit the law lets the programme refuse a first late registrant (WHW 7.31d, Stb. 2013, 298), and a pupil who registered on time and switches after 1 May keeps a right to admission elsewhere (Rijksoverheid "Aanmelding tot en met 1 mei betekent ook recht op toelating tot een andere studie"). So r4 is scoped to the first registration, as the V2.3 situ already was; "geen recht meer op toelating" stays, because both Rijksoverheid pages say it word for word. For the mbo the refusal ground for late registration applies only when "paragraaf 2a van de Leerplichtwet 1969 niet meer op hem van toepassing is" (WEB 8.1.1c lid 3 onder c, Stb. 2016, 362), so r5 names the exception for pupils under 18 with "soms" (kwalificatieplicht runs to 18 or a startkwalificatie). Lina is 18 from March (intro) and B2 says "Je bent 18", so no answer changes.

Note on r2 (Revision 3, check B round 2): "Andere bachelor" was too general. Studiekeuze123 (aanmelden-studie, read 7 Nov 2026): for instroom in februari "Hiervoor is geen landelijke aanmelddeadline"; private programmes "mogen ook andere aanmelddeadlines gebruiken"; Rijksoverheid: the Open Universiteit has no vooropleidingseisen. r2 now says "met start in september", and the V2.2 situ says both of Lina's programmes start in September, so r2 still applies to her. Private programmes, februari and the Open Universiteit are in the teacher detail. Revision 4 (check B round 3): "met start in september" still covered private programmes, which do not use Studielink (Studiekeuze123: "Voor particuliere opleidingen meld je je niet aan via Studielink.nl." "Ze mogen ook andere aanmelddeadlines gebruiken."). r2 is now "Andere bachelor via Studielink, met start in september: meld je aan tot en met 1 mei."; the V2.2 situ adds "Voor HBO-ICT meld je je aan via Studielink." so r2 still decides V2.2; the Studielink gloss says "de meeste bachelors".

Note on wording: all three dates now use "tot en met" (gate P2), in the rule box, the options of V2.1 and V2.2, C2 and B2. The sources say "uiterlijk (op) 1 mei", "uiterlijk (op) 1 april" and "tot en met 15 januari"; "uiterlijk op" a date and "tot en met" that date mean the same day is still on time. The gloss "Uiterlijk" is replaced by "Tot en met 1 mei". The gloss "Studiekeuzecheck" is new (gate P1, T6e): Rijksoverheid "De vorm kan een gesprek, proefstuderen of een digitale vragenlijst zijn".

### Vraag 2.1 (id: fixus, kind: pick, docs: app)
- Prompt: "Tot en met wanneer kan Ravi zich aanmelden voor Fysiotherapie?"
- Options:
  - a "Tot en met 1 april 2027"
  - b "Tot en met 1 mei 2027"
  - c "Tot en met 1 september 2027"
  - d "Tot en met 15 januari 2027"
- Correct: d
- Retry pointer: app v2 "Daar is een numerus fixus." and rule r1.
- Nudge: "Lees bericht 2 van Ravi. Welke regel past bij die opleiding?"
- Hint: "Zoek in het gesprek het woord numerus fixus. Welke regel hoort erbij?"
- Explanation: "Voor een opleiding met een numerus fixus meld je je aan tot en met 15 januari. Je mag je per studiejaar voor hoogstens 2 fixusopleidingen aanmelden."
- Sources: roFixus, roDeadline, skAanmelden
- Note: the second explanation sentence is in roFixus and skAanmelden; the exception (geneeskunde, tandheelkunde, fysiotherapie, verloskunde, mondzorgkunde: only one institution) is in the teacher note. It does not change Ravi's answer: he applies to one fixus programme.

### Vraag 2.2 (id: lina, kind: pick, docs: app)
- Situ: "Lina twijfelt nog. Software developer is een mbo-opleiding. HBO-ICT is een hbo-opleiding. Ze beginnen in september. Voor HBO-ICT meld je je aan via Studielink."
- Prompt: "Tot en met wanneer kan ze zich aanmelden met recht op toelating?"
- Options:
  - a "Software developer en HBO-ICT: tot en met 1 mei"
  - b "Software developer en HBO-ICT: tot en met 15 januari"
  - c "Software developer tot en met 1 mei, HBO-ICT tot en met 1 april"
  - d "Software developer tot en met 1 april, HBO-ICT tot en met 1 mei"
- Correct: d
- Retry pointer: situ "Software developer is een mbo-opleiding." and rules r2, r3.
- Nudge: "Welke regel hoort bij een mbo-opleiding, en welke bij een hbo-bachelor?"
- Hint: "Lees regel 2 en regel 3. Zoek in elke regel de datum."
- Explanation: "Voor het mbo meld je je aan tot en met 1 april, bij de school zelf. Voor HBO-ICT is dat tot en met 1 mei, via Studielink. Lina is op 1 april al 18, dus regel 5 speelt voor haar geen rol."
- Sources: roMboAanmelden, kmAanmelden, stb2016362, roAanmelden, skAanmelden
- Note: the situ now gives the type of each programme, so the first try does not depend on remembering the room 1 map (gate P3, G4 fix 3). v5 rules out a numerus fixus and selection for both, so r2's "soms eerder" cannot apply. No option uses "beide" or "allebei" (README option-order rule), so the fixed shuffle is allowed. The mbo date is "Uiterlijk op 1 april" in the current law (WEB art. 8.0.1 lid 1, read by check A; inserted by Stb. 2016, 362) and on two pages, so "tot en met 1 april" is right; one Rijksoverheid page says "vóór 1 april" (see Onzeker). No question depends on registering on 1 April itself.

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
- Explanation: "Bij een aantal opleidingen kun je je na 1 mei nog aanmelden. Maar je hebt geen recht meer op toelating. De opleiding kan je weigeren. Je hebt ook geen recht meer op een studiekeuzecheck. De opleiding kan je wel verplichten om er een te doen."
- Sources: roAanmelden, roDeadline, skAanmelden, roSkc, stb2013298
- Note: "eerste aanmelding" is in the situ because the rules differ for a pupil who registered on time for another programme and switches after 1 May (roDeadline: switching allowed; the new programme may require a check). 10 May is used, not 1 or 2 May, because 1 May 2027 is a Saturday (see Onzeker). Lina is 18 on 10 May (room 2 intro). Option c is wrong: the programme decides, it can still admit her. Last sentence of the explanation (Revision 2, check B): WHW 7.31d lets the institution oblige a first late registrant to take part in the studiekeuzeactiviteiten (Stb. 2013, 298: "de betrokkene verplicht is deel te nemen aan de studiekeuzeactiviteiten"); Rijksoverheid: "Wel kan de opleiding deelname aan de studiekeuzecheck verplicht stellen".

### Cijfer kamer 2
- Clue: "Het 2e cijfer van het slot: Ravi meldt zich vandaag aan, op 12 januari. Voor Fysiotherapie kan dat tot en met 15 januari. Hoeveel dagen na 12 januari is 15 januari?"
- Digit: **3** (15 min 12; the dates are in the clue).
- Clue retry: "Tel de dagen na 12 januari, tot en met 15 januari."
- Remember: "15 januari voor een numerus fixus, 1 april voor het mbo, 1 mei voor andere bachelors. Zet ze nu in je agenda. 1 mei 2027 is een zaterdag. Meld je voor de zekerheid uiterlijk vrijdag 30 april aan."

---

## Kamer 3. Het eerste jaar (Vooruitblik: maandag 13 december 2027)

`where`: "Vooruitblik: december 2027"

**Intro:** "Stel je voor: het is december 2027. Lina zit in jaar 1 van HBO-ICT. Ravi doet Bewegingswetenschappen. Ze kwamen van de havo en het vwo. Ze krijgen voor het eerst een basisbeurs, zonder lening."

### Document 3a: studievoortgang Lina (type: table, id: voortgang)
Title: "Hogeschool De Duinen, HBO-ICT: jouw voortgang". From: "Overzicht van de opleiding (verzonnen)".
- s1 "Studiepunten gehaald" | "12 van 30"
- s2 "Bsa-norm in jaar 1 (uit de OER)" | "45 van 60 studiepunten"

### Document 3b: app van Lina en Ravi (type: chat, id: app3)
Name: "Ravi", sub "app op de telefoon van Lina".
- w1 me (Lina), 19:05 "Ik vind ICT toch niet leuk. Ik stop."
- w2 me (Lina) "De hogeschool schrijft me uit per 15 december. Mijn studiefinanciering stopt op 1 januari."
- w3 me (Lina) "In september 2028 begin ik aan een nieuwe opleiding."
- w4 them (Ravi) "Ik twijfel ook. Maar ik ga eerst praten met mijn studieadviseur."

**Moeilijke woorden (plain):** "Studiepunt: je krijgt studiepunten als je een vak haalt. Een jaar heeft 60 studiepunten. Bsa: bindend studieadvies. Je hoort aan het einde van jaar 1 of je mag doorgaan. Negatief bsa: het advies is dat je moet stoppen met de opleiding. OER: de onderwijs- en examenregeling van je opleiding. Basisbeurs: geld van DUO voor studenten. Prestatiebeurs: je basisbeurs, aanvullende beurs en studentenreisproduct samen. Gift: geld dat je niet terug hoeft te betalen. Uitschrijven: je staat niet meer ingeschreven bij je opleiding."

**Rule box (`rules`, title "Regels"):**
- r1 "De regels voor het bsa staan in de OER van je opleiding. Daar staat ook hoeveel studiepunten je moet halen."
- r2 "Krijg je een negatief bsa? Dan mag je je wel aanmelden voor een andere opleiding."
- r3 "Stopt je studiefinanciering in je eerste jaar voor 1 februari? Dan hoef je je basisbeurs van dat jaar niet terug te betalen. Een lening wel."
- r4 "Regel 3 geldt als je voor het eerst een prestatiebeurs krijgt voor hbo of universiteit."
- r5 "Nog een voorwaarde voor regel 3: je krijgt in hetzelfde studiejaar niet opnieuw studiefinanciering voor hbo of universiteit."
- r6 "Heb je een mbo-diploma? Dan geldt een ruimere regel. Kijk op DUO.nl."

Note on r3 to r5: r3 is the rule; r4 and r5 are its two conditions, as in Wsf 2000 art. 5.10 ("voor het eerst prestatiebeurs hoger onderwijs geniet, ophoudt studiefinanciering te genieten vóór 1 februari, en hij niet over datzelfde studiejaar opnieuw studiefinanciering voor het volgen van hoger onderwijs krijgt toegekend"; text read by check A, quoted in factcheck_A_route-18.md). The earlier condition "alleen als je van de havo of het vwo kwam" was a wrong exclusion: DUO's own page, which I had read, lists routes from mbo too (check A, RISK 1). The mbo graduates' wider rule (Revision 1: "soms ruimere regels" in r5) is now its own line r7, see the Revision 2 note below. The intro still says both came from havo and vwo, so the mbo variant plays no role in any answer. The mbo line in the plain box (gate D2) is sourced on DUO "U kunt 1 keer gebruikmaken van de eerstejaarsregeling voor mbo en 1 keer voor hbo of universiteit", and "mbo-studiejaar 1 augustus" is why the studiejaar gloss now names hbo and universiteit (check A, RISK 5). The aanvullende beurs and the reisproduct are also covered (DUO); that is in the teacher detail, because the story has neither. r6 is scoped to hbo and universiteit because mbo months do not count for hbo (DUO "Hoelang recht").

Revision 2 (check B): r5 started "En als je ...", which reads as a fragment on its own rule card; it now names itself as a condition of rule 3 ("Nog een voorwaarde voor regel 3: ..."). The mbo sentence left r5 and became r7, now precise: Wsf 2000 art. 5.11a (inserted by Stb. 2023, 186, "Stoppen binnen twaalf maanden door mbo-gediplomeerden") converts the prestatiebeurs into a gift for a ho-student "die eerder een opleiding in het beroepsonderwijs heeft afgerond" if studiefinanciering stops "uiterlijk op 31 augustus" of the first study year and no new ho studiefinanciering follows "vóór 1 februari van het daaropvolgende studiejaar"; DUO: "Hebt u een mbo-diploma? Dan zijn dit de voorwaarden vanaf studiejaar 2023-2024" and "Dan geldt de regeling tot het einde van het 1e studiejaar in het hbo". Without an mbo diploma DUO lists the ordinary conditions (stop vóór 1 februari), so r7 says "mbo-diploma", not "van het mbo". r7 sends pupils to DUO for the restart conditions, which differ from r5. Both pupils came from havo and vwo (intro) and C3/B3 say havo and vwo, so r7 gives no second answer. r7 is placed last so the ids and numbers of r1 to r6 (pointers, nudges, tests) stay the same.

Revision 3 (playtest S3, check B round 2): room 3 was the heaviest room (364 words of rules, documents and hard words before question 1; now 296). Cut: the old r6 "Elke maand ... telt mee" (no question needs it; the fact is in the teacher detail and in the remember line "maar die maanden tellen wel mee"), the voortgang row s3 "Advies ... bindend" (not used), chat line w5, the glosses "Studiejaar" (V3.2 situ says "Dat is een nieuw studiejaar"; the dates are in the teacher detail) and "Mbo", and the long mbo rule, now one line r6 "Heb je een mbo-diploma? Dan geldt een ruimere regel. Kijk op DUO.nl." r4 now says "prestatiebeurs", the term of Wsf 2000 art. 5.10 ("voor het eerst prestatiebeurs hoger onderwijs geniet") and of DUO ("U krijgt ... voor het eerst prestatiebeurs"); new gloss "Prestatiebeurs: je basisbeurs, aanvullende beurs en studentenreisproduct samen." (DUO: "prestatiebeurs (basisbeurs, aanvullende beurs en studentenreisproduct)"). r5 keeps "studiefinanciering", as the law ("niet over datzelfde studiejaar opnieuw studiefinanciering"). Rule ids r1 to r5 are unchanged, so pointers and tests still match.

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
- Hint: "Het zijn er twee. Kijk ook in Lina's overzicht bij Bsa-norm."
- Explanation: "De regels en de norm staan in de OER van je opleiding. Ze verschillen per opleiding. Met een negatief bsa moet je meestal stoppen met die opleiding. Je mag je wel aanmelden voor een andere opleiding."
- Sources: roBsa, skBsa, roDeadline
- Note: no item says "met een negatief bsa moet je stoppen", because Rijksoverheid says "Afhankelijk van het beleid bij uw instelling moet u dan stoppen" and Studiekeuze123 "De kans is groot". The explanation says "meestal". Item a is wrong by roBsa ("De universiteit of hogeschool bepaalt zelf of dit advies bindend is"; rules in the OER) and skBsa (the minimum is shown per programme). Item d: skBsa "Je mag je dan wel inschrijven voor een andere opleiding"; roDeadline: the other programme may require a studiekeuzecheck. Persoonlijke omstandigheden (roBsa: "De opleiding moet rekening houden met persoonlijke omstandigheden") are in the teacher note.

### Vraag 3.2 (id: lina1feb, kind: pick, docs: app3)
- Situ: "Lina's studiefinanciering stopt op 1 januari 2028. In september 2028 begint ze aan iets nieuws. Dat is een nieuw studiejaar."
- Prompt: "Moet Lina haar basisbeurs van september tot en met december 2027 terugbetalen?"
- Options:
  - a "Ja, want ze heeft geen diploma gehaald en ze stopt in het eerste jaar"
  - b "Ja, maar alleen de helft, want ze heeft een half jaar gestudeerd"
  - c "Nee, want haar studiefinanciering stopt voor 1 februari"
- Correct: c
- Retry pointer: app3 w2 "Mijn studiefinanciering stopt op 1 januari." and rules r3, r4, r5.
- Nudge: "Wanneer stopt Lina's studiefinanciering? Lees regel 3, 4 en 5."
- Hint: "Vergelijk de datum in Lina's bericht met de datum in regel 3."
- Explanation: "Lina's studiefinanciering stopt voor 1 februari, en ze voldoet aan regel 4 en 5. Dan hoeft ze haar basisbeurs van dit jaar niet terug te betalen. Een lening moet je altijd terugbetalen, maar Lina heeft er geen."
- Sources: duoEerstejaars, skFeb, wsf510
- Note: every condition of Wsf 2000 art. 5.10 and the DUO page is in the room: first studiefinanciering for hbo or wo (intro), stops before 1 February (w2, situ), no new studiefinanciering for hbo or wo in the same study year (w3, situ: starts in September 2028). Coming from havo (intro) rules out DUO's separate mbo routes. Wrong options now carry a reason too, so length does not give the answer (gate P11). "1 keer" (DUO) is met because it is her first studiefinanciering for hbo or wo. The stop date is a story fact, not derived (DUO "stopzetten": deregistered per 15 June gives no right from 1 July; the same pattern gives 15 December to 1 January). Option a states the general rule for a prestatiebeurs without a diploma; it is wrong only because of this regulation, which the rule box names.

### Vraag 3.3 (id: ravi, kind: pick, docs: app3)
- Situ: "Ravi twijfelt, maar hij stopt niet. Hij vraagt zich af wat er zou gebeuren als hij in maart stopt. Zijn studiefinanciering zou dan stoppen op 1 april 2028."
- Prompt: "Zou de regel over stoppen voor 1 februari dan voor Ravi gelden?"
- Options:
  - a "Ja, want hij zit nog in zijn eerste jaar"
  - b "Ja, want hij heeft geen lening gehad"
  - c "Nee, want zijn studiefinanciering zou na 1 februari stoppen"
- Correct: c
- Retry pointer: situ "Zijn studiefinanciering zou dan stoppen op 1 april 2028." and rule r3.
- Nudge: "Lees regel 3. Stopt Ravi's studiefinanciering dan voor of na 1 februari?"
- Hint: "Kijk naar de datum waarop Ravi's studiefinanciering zou stoppen."
- Explanation: "Dan stopt Ravi's studiefinanciering na 1 februari. De regel geldt dus niet. Zijn basisbeurs wordt een gift als hij op tijd een diploma haalt. Meestal is dat binnen 10 jaar. Haalt hij geen diploma, dan betaalt hij de basisbeurs meestal terug."
- Sources: duoEerstejaars, skFeb, wsf510, duoGift, duoHoelang
- Note: Ravi no longer quits (gate D1): only one of the two pupils stops in room 3, and the question is a what-if. The stop date follows DUO's pattern (deregistered per 15 March, no right from 1 April) and is given as a story fact. The gift and repayment sentences are from duoGift ("Behaalt u een diploma binnen de diplomatermijn, dan wordt de prestatiebeurs omgezet in een gift"; table "Geen diploma binnen 10 jaar": terugbetalen) and Wsf 2000 art. 5.5 ("De diplomatermijn hoger onderwijs is een periode van 10 jaren", read by check A). "Meestal" because the term can be extended (ESC-DUO, Wsf art. 5.16, not re-read here). The last sentence answers the pupil question "en als hij geen diploma haalt?" (gate V5, T6d). It is not asked.

### Cijfer kamer 3
- Clue: "Het 3e cijfer van het slot: stel dat Ravi in maart stopt. Dan kreeg hij studiefinanciering van september 2027 tot en met maart 2028. Hoeveel maanden zijn dat?"
- Digit: **7** (september, oktober, november, december, januari, februari, maart; the months are in the clue; from Revision 3 the "each month counts" rule is in the teacher detail and the remember line).
- Clue retry: "Tel september en maart allebei mee."
- Remember: "Twijfel je in jaar 1? Praat er vroeg over. Stoppen voor 1 februari scheelt geld, maar die maanden tellen wel mee. Een lening betaal je altijd terug."

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
- u1 "Meeloopdag" | "donderdag 11 maart 2027"
- u2 "Open dag" | "zaterdag 13 maart 2027"
- u3 "Aanmelden" | "uiterlijk 1 week van tevoren"

### Document 4d: agenda Lina (type: table with head, id: agenda)
Title: "Agenda Lina, maart 2027". Head: "Dag" | "Wat"
- a1 "di 9 maart" | "gewone lesdag, geen toets"
- a2 "wo 10 maart" | "toets wiskunde: ik moet er zijn"
- a3 "do 11 maart" | "excursie met de klas: ik moet mee"
- a4 "za 13 maart" | "vrij"
- a5 "za 20 maart" | "vrij"

Note under the pages: "Echte data vind je op de site van de school."

Design note: the `.example` addresses are reserved test domains, so the fake address bars cannot point to a real site. Each of the three pages now has a meeloopdag (mbo 9 March, hbo 10 March, universiteit 11 March), so V4.2 is decided by Lina's agenda only, not by the level (gate D1). The site lines and the From line keep "(verzonnen)"; the extra fiction notes are gone (gate P8). 11 March 2027 is a Thursday (calendar).

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
- Hint: "Bij twee activiteiten staan studenten. Bij welke volg je samen met één student de lessen?"
- Explanation: "Bij een meeloopdag loop je mee met een student en volg je dezelfde lessen. Bij proefstuderen volg je lessen voor bezoekers. Een open dag geeft je informatie en sfeer."
- Sources: skActiviteiten
- Note: pointer to the plain box needs an engine feature or falls back to `pointNone` (see Engine). Option c is there because pupils often reach for another test; the research says experience helps more, but the explanation states only the definitions, not the research claim.

### Vraag 4.2 (id: dag, kind: pick, docs: mbo, hbo, wo, agenda)
- Situ: "Lina wil meelopen. Op een dag met een toets of een excursie kan ze niet weg."
- Prompt: "Op welke dag gaat Lina meelopen?"
- Options:
  - a "Woensdag 10 maart, HBO-ICT"
  - b "Donderdag 11 maart, Informatica"
  - c "Zaterdag 13 maart, Informatica"
  - d "Dinsdag 9 maart, Software developer"
- Correct: d
- Retry pointer: agenda a1, a2, a3.
- Nudge: "Zoek eerst de drie meeloopdagen. Kijk dan in Lina's agenda."
- Hint: "Kijk in de agenda naar 9, 10 en 11 maart."
- Explanation: "Er zijn drie meeloopdagen. Op 10 maart heeft Lina een toets en op 11 maart een excursie. Op 13 maart is er een open dag, geen meeloopdag. Dus gaat ze op 9 maart. Welke dag past, hangt van je agenda af."
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
- Hint: "Tel zeven dagen terug op de kalender."
- Explanation: "Je meldt je uiterlijk 1 week van tevoren aan. Dat is dinsdag 2 maart. Mis je les? Vraag dan ook toestemming aan je school. Zet die twee dingen in je agenda."
- Sources: none. None line: "Dit staat op de pagina van de school. Elke school heeft eigen regels."
- Note: "uiterlijk 1 week van tevoren" is fictional page text, not a real rule; the none line says each school has its own rules.

### Cijfer kamer 4
- Clue: "Het 4e cijfer van het slot: Lina gaat meelopen bij Software developer. Op welke dag in maart is die meeloopdag?"
- Digit: **9** (mbo f1 "dinsdag 9 maart 2027"; the page is on the digit screen; `clueDocs: ['mbo']`).
- Clue retry: "Kijk op de pagina van Golfbreker College bij Meeloopdag."
- Remember: "Kiezen doe je door te kijken en te doen. Zoek één meeloopdag, open dag of proefstudeerdag, en zet de datum in je agenda."

---

## Plan: Mijn volgende stap

The plan is the goal of the lesson, so it is personal: each pupil makes their own, on paper (handout) and, if they want, on the end screen. The screen version uses the existing engine plan (`when`, `then`, `within`, own text). It stays on the screen only: never logged, never sent, never stored (engine `planNote`). The paper slip stays with the pupil; the teacher does not collect it.

Engine data:
- `plan.intro`: "Maak je eigen plan. Kies één ding dat je gaat doen, en zet er een datum bij. Zeg je plan tegen je buur."
- `plan.when`: ["ik vandaag thuis ben", "ik deze week mijn mentor of decaan zie", "het weekend is"]
- `plan.then`: ["zoek ik één meeloopdag of proefstudeerdag op en zet ik de datum in mijn agenda", "zoek ik één open dag op en zet ik de datum in mijn agenda", "zet ik de aanmelddata die voor mij gelden in mijn agenda"]
- `plan.within`: ["een dag", "een week", "twee weken"]
- Own text field (existing): pupils may type their own "dan", for example "ga ik op 9 maart meelopen bij ...".
- End screen (new, gate T1): under the plan, show the six slip lines below as plain text, so pupils can copy them onto paper or into their phone notes. Nothing is stored or sent.

Paper slip "Mijn volgende stap" (one per pupil, two per A4 so one cut; printed from the teacher screen, see Engine fit 3; nothing on it is collected). Six fields:
"Mijn volgende stap
1. Ik ga naar een: open dag / meeloopdag / proefstuderen (omcirkel)
2. Bij: school en opleiding ...
3. Op: datum ... (Weet je de datum nog niet? Schrijf: ik zoek hem op uiterlijk op ...)
4. Ik meld me aan uiterlijk op: ...
5. Toestemming van school regel ik bij: mijn mentor / mijn decaan
6. Eén vraag die ik daar stel: ...
Data zoeken: op de site van de school, of bij open dagen op Studiekeuze123 (hbo en universiteit) of KiesMBO (mbo)."

The slip went from eight to six fields (gate P9): one question instead of three, a fallback date for pupils who do not know the day yet, and a line for school permission when you miss lessons (gate D5). The old "Wie vertel ik het" line is folded into field 5. The handout gives no example questions on purpose: pupils write their own. The teacher may suggest "Wat doe je op een gewone dinsdag?" and "Wat vinden studenten het moeilijkst?" (from the research: realistic, including less appealing, information; HAN 2021). These are prompts, not facts.

---

## Start- en eindcheck: twee parallelle vormen, A en B (elk 4 vragen, één per kamer, enkele keuze, score 0 tot 4)

No feedback during the check. Each question works without the room's documents and rule box, so it is one step harder than the room. Question n of form A and question n of form B test the same rule at the same difficulty with a different case. Form B adds no new rule. Counterbalance as in ESC-KAMER (engine: each pair randomly gets A or B first). No check item repeats a room question: room 1 asks about havo and the propedeuse, the checks about vwo and mbo 4; room 2 asks about one fixus and one mbo/hbo case, the checks ask single dates; room 3 has stops on 1 January and 1 April, the checks on 1 December and 1 November; room 4 asks for a meeloopdag, the checks for an open dag and proefstuderen. The order in the data file is the order on screen; the right answer is in a different place in each item.

### Vorm A

| # | Kamer | Vraag | Opties | Goed | Regel en bron |
|---|---|---|---|---|---|
| C1 | 1 Routes | "Je bent 17 en haalt dit jaar je vwo-diploma. Waar kun je daarna heen?" | a Alleen naar de universiteit, niet naar het hbo; b Naar het mbo, het hbo of de universiteit; c Alleen naar het hbo of de universiteit | b | vwo: mbo, hbo, wo (roDiplomas, skRoutes, roMboNiveaus) |
| C2 | 2 Deadlines | "Je wilt Geneeskunde studeren. Daar is een numerus fixus. Tot en met wanneer meld je je aan?" | a 1 april; b 1 mei; c 15 januari | c | fixus: tot en met 15 januari (roFixus, roDeadline, skAanmelden) |
| C3 | 3 Eerste jaar | "Je kwam van de havo. Je krijgt voor het eerst studiefinanciering voor het hbo, alleen een basisbeurs. Je stopt. Je studiefinanciering stopt op 1 december. Je begint pas volgend studiejaar opnieuw. Moet je je basisbeurs van dit jaar terugbetalen?" | a Nee, die hoef je niet terug te betalen; b Ja, want je hebt geen diploma gehaald; c Ja, maar alleen de helft van het bedrag | a | eerstejaarsregeling (duoEerstejaars, skFeb, wsf510) |
| C4 | 4 Volgende stap | "Je wilt op één dag informatie over veel opleidingen van een school. Je wilt ook de sfeer proeven. Wat past het best?" | a Een meeloopdag; b Een open dag; c Proefstuderen | b | open dag (skActiviteiten) |

### Vorm B

| # | Kamer | Vraag | Opties | Goed | Regel en bron |
|---|---|---|---|---|---|
| B1 | 1 Routes | "Je bent 18 en hebt een mbo 4-diploma. Waar kun je verder leren?" | a Alleen in het mbo, niet op het hbo; b Alleen op de universiteit, niet op het hbo; c Verder in het mbo of op het hbo | c | mbo 4: hbo (roDiplomas, skMboHbo); verder in het mbo (kmVerder) |
| B2 | 2 Deadlines | "Je bent 18 en wilt naar een mbo-opleiding zonder numerus fixus. Tot en met wanneer meld je je aan voor recht op toelating?" | a 1 april; b 15 januari; c 1 mei | a | mbo: tot en met 1 april (roMboAanmelden, kmAanmelden, web801) |
| B3 | 3 Eerste jaar | "Je kwam van het vwo. Je krijgt voor het eerst studiefinanciering voor de universiteit, alleen een basisbeurs. Je stopt. Je studiefinanciering stopt op 1 november. Je begint pas volgend studiejaar opnieuw. Moet je je basisbeurs van dit jaar terugbetalen?" | a Ja, want je hebt geen diploma gehaald; b Ja, maar alleen de helft van het bedrag; c Nee, die hoef je niet terug te betalen | c | eerstejaarsregeling (duoEerstejaars, skFeb, wsf510) |
| B4 | 4 Volgende stap | "Je wilt een paar lessen volgen die speciaal voor bezoekers zijn gemaakt. Wat past het best?" | a Een open dag; b Een meeloopdag; c Proefstuderen | c | proefstuderen (skActiviteiten) |

Parallel checks: C1 and B1 ask which routes a diploma opens, with two "too narrow" or "too wide" distractors each. C1 says "Je bent 17" and B1 "Je bent 18" so the 21+ toelatingsonderzoek cannot make b of B1 or a of C1 defensible. C2 and B2 use the same three dates. B2 says "Je bent 18" and "zonder numerus fixus" so neither kwalificatieplicht (WEB art. 8.1.1c lid 3 onder c: the refusal ground applies only where "paragraaf 2a van de Leerplichtwet 1969 niet meer op hem van toepassing is"; kwalificatieplicht runs to 18, Rijksoverheid leerplicht page, both read by check A) nor a numerus fixus muddles it. C3 and B3 are the same case with a different stop month and level (hbo, wo), each naming every condition; "Je begint pas volgend studiejaar opnieuw" covers "niet over datzelfde studiejaar opnieuw studiefinanciering" (Wsf 5.10). Their right option is worded differently from V3.2 ("Nee, die hoef je niet terug te betalen" against "Nee, want haar studiefinanciering stopt voor 1 februari"); from Revision 3 it no longer carries the reason and is not the longest option (playtest S9), so a pair cannot match it from memory of the room (gate X1). "Vóór februari" means the same as "voor 1 februari". C4 and B4 each ask one definition, with the other two activities as distractors. B1 option c "In het mbo": KiesMBO ("Dat kan op een ander niveau in het mbo of op het hbo").

Score: 1 point per right answer, 0 to 4, before and after, shown per pair on the end screen.

---

## Lesplan voor de docent (45 minuten)

Teacher screen, first line (`teacher.goal` or a new `teacher.audience` line, gate D3): "Voor havo 5 en vwo 6. Plan de les tussen half november en half januari, vóór de aanmelddatum van 15 januari. Havo 4 en vwo 5 kunnen ook meedoen: de data in kamer 2 gelden voor hen een jaar later."
Second line (gate D8): "Gecontroleerd op 7 november 2026. Geldt voor aanmelden voor 2027-2028. Controleer in januari 2027 opnieuw."
Scheduling advice for the decaan (from the gate): the week of 30 November or 7 December 2026, so pupils can still book open days and meeloopdagen for February and March. The engine cannot skip rooms, so the gate's "havo 4: rooms 1 and 4 only" is not offered (see Changelog).

| Lesminuut | Duur | Onderdeel | Wat je doet |
|---|---|---|---|
| 0 tot 4 | 4 | Uitleg en inloggen | Zet de link en de klascode al op het bord voordat de les begint. Zeg: de verhalen zijn verzonnen, de regels zijn echt. Leerlingen werken met z'n tweeën op één scherm. Deel de papiertjes "Mijn volgende stap" uit, één per leerling. |
| 4 tot 6 | 2 | Startcheck | Elk tweetal beantwoordt vier vragen (vorm A of B) voordat de klok start. Geef geen hints. |
| 6 tot 32 | 26 | Escape | Start de klastimer. Tweetallen spelen vier kamers en schrijven elk cijfer op. Klaar voor de tijd? Bespreek samen de gespreksvraag van kamer 4 en vul alvast je papiertje in. |
| 32 | | Stop | Op minuut 32 stopt iedereen, ook wie nog niet klaar is. Lees de cijfers voor van je geprinte antwoordblad. Alle tweetallen doen daarna de eindcheck. |
| 32 tot 35 | 3 | Stop en eindcheck | De andere vorm: vier vragen over dezelfde regels. Daarna ziet elk tweetal wat het goed had, voor en na. |
| 35 tot 39 | 4 | Nabespreken | Vraag met handopsteken: wie had bij de startcheck 3 of 4 goed? En bij de eindcheck? Vraag welke kamer het lastigst was en begin daar. Vraag naar ervaringen, niet naar punten. |
| 39 tot 44 | 5 | Mijn volgende stap | Iedereen vult zijn eigen papiertje in, met een datum. Laat twee of drie leerlingen hun stap hardop zeggen. Stel daarna de slotvraag. |
| 44 tot 45 | 1 | Reserve | Voor inloggen dat uitloopt. De escape stopt altijd op minuut 32. |

Total 45 minutes: 4 + 2 + 26 + 3 + 4 + 5 + 1 = 45 (gate T2). `minutes: 26` (board timer default). Materials: een apparaat per tweetal (laptop, Chromebook of telefoon), pen en papier voor de cijfers, een digibord of beamer. 1 papiertje "Mijn volgende stap" per leerling, vooraf geprint.

Tip voor de docent: een fout antwoord wordt doorgestreept. Een tweetal krijgt na een fout een tip en nog één kans; daarna ziet het tweetal het goede antwoord. Dat telt niet mee bij "In één keer goed". Vertel de klas dat goed lezen sneller gaat.

Care points ("Let op"):
1. "Laat de leerlingen hun plan niet inleveren. Het papiertje is van hen. Wil je het in het LOB-dossier? Vraag de leerling het zelf te laten zien of te fotograferen. Verplicht het niet."
2. "Zeg niet welke route beter is. Vraag wat bij de leerling past: hoe wil je leren, en wat wil je later doen? In kamer 3 stopt Lina. Zeg erbij dat twijfelen bij elke route kan."
3. "Kamer 3 is een vooruitblik naar het eerste jaar. Zeg dat erbij: het gaat om volgend schooljaar."
4. "Hoe past dit bij je LOB? Na een interessetest leer je hier de regels en data. Voor open dagen: de kalender van Studiekeuze123 (hbo en universiteit) en KiesMBO (mbo)."
5. "Voor vwo 6: heeft een leerling al gekozen? Dan schrijft hij op wat hij nog controleert. Bijvoorbeeld aanmelding, selectie, studiekeuzecheck of DigiD. Bij vwo 6 is de winst in de check vaak klein. Kijk vooral naar vraag 3."

Note for developers: the stop at minute 32 uses the existing engine stop flow (teacher "Stop de escape", pupil "We stoppen", type the read-out digits or skip, then end check and plan); the early-stop question fires before `minutes - 5` = 21 pupil minutes. The digits are never on the open lesson plan. Playtest estimate for a careful pair, from text volume against op-kamers (about 19 minutes): 20 to 25 minutes. Room 3 is now shorter and room 4 has one more row; treat as plus or minus 30 percent. With 26 minutes some slow pairs will not finish; the hard stop and the read-out digits cover them, and the plan, the goal of the lesson, keeps its 5 minutes.

### Voor de docent, per kamer

Per room the teacher screen shows a one-sentence Kern (`remember`-style, in `teacherNote`) and a closed block "Bronnen en uitzonderingen" (new field `teacherDetail`, see Engine fit 7) with the longer text (gate T4).

Kern (`teacherNote`):
- Kamer 1: "Vraag wie de route via mbo 4 of een propedeuse nog niet kende."
- Kamer 2: "Laat leerlingen nu de aanmelddatum die voor hen geldt in hun agenda zetten."
- Kamer 3: "Stopt je studiefinanciering in jaar 1 voor 1 februari? Dan hoef je je basisbeurs niet terug te betalen."
- Kamer 4: "Vraag wie al een open dag of meeloopdag heeft gepland, en wanneer."

Dit wordt vaak gevraagd (one block on the teacher screen, under the lesson plan; gate T6, V6):
- "1 mei 2027 is een zaterdag. Wat betekent dat?" Antwoord: "Ga uit van 1 mei. Meld je voor de zekerheid uiterlijk vrijdag 30 april aan. Reken niet op een latere dag."
- "Ik ben 17. Moet ik me voor 1 april aanmelden bij het mbo?" Antwoord: "Meld je altijd uiterlijk 1 april aan. Ben je nog kwalificatieplichtig, dan mag de school 'te laat' niet als reden gebruiken om je te weigeren. Vraag het de school."
- "Wat is het verschil tussen hbo en universiteit?" Antwoord: "Dat hangt van de opleiding af. Zoek de opleiding op Studiekeuze123 of KiesMBO en lees wat je daar doet."
- "En als Ravi geen diploma haalt?" Antwoord: "Haal je binnen de diplomatermijn geen diploma, dan betaal je de basisbeurs meestal terug."
- "Wat is een studiekeuzecheck?" Antwoord: "Een check of de opleiding bij je past, zoals een gesprek of proefstuderen. Meld je je uiterlijk 1 mei aan voor een opleiding zonder selectie? Dan heb je er recht op. Bij een numerus fixus of andere selectie geldt dat recht niet."
- "Mag ik op dinsdag uit school voor een meeloopdag?" Antwoord: "Vraag toestemming bij je school, via je mentor of decaan."

Bronnen en uitzonderingen (`teacherDetail`, closed; each point from the source table):
- Kamer 1: Havo geeft toegang tot mbo en hbo; vwo tot mbo, hbo en universiteit; mbo 4 tot hbo; een hbo-propedeuse tot de universiteit, vaak met extra vakken (Studiekeuze123; WHW 7.28 lid 1a: de universiteit kan extra kennis eisen). Sommige opleidingen vragen een profiel of extra eisen; bij de pabo gelden strengere eisen voor havo- en mbo-studenten. Ben je 21 of ouder zonder de juiste vooropleiding, dan kan soms een toelatingsonderzoek; bij kunstopleidingen soms jonger. Bij de meeste bachelors van de Open Universiteit kun je vanaf 18 jaar zonder diploma beginnen; voor de bachelor Lerarenopleiding gelden vooropleidingseisen (ou.nl; Rijksoverheid). Daarom zeggen de foute opties van check B1 "alleen". Met een associate degree kun je doorstromen naar een verwante hbo-bachelor, die dan nog twee jaar duurt (Studiekeuze123, één bron, niet gevraagd). Na de hbo-bachelor kun je met een schakelprogramma naar een wo-master.
- Kamer 2: Fixus: tot en met 15 januari, hoogstens 2 fixusopleidingen per studiejaar. Voor geneeskunde, tandheelkunde, fysiotherapie, verloskunde en mondzorgkunde kies je maar 1 instelling (Rijksoverheid). Hoogstens 4 aanmeldingen tegelijk (Studiekeuze123). Andere bachelors en associate degrees met start in september: tot en met 1 mei; selectieopleidingen soms eerder. Voor instroom in februari is er geen landelijke datum. Voor private opleidingen meld je je niet via Studielink aan; ze mogen andere data gebruiken en geven geen recht op een studiekeuzecheck (Studiekeuze123). Bij de Open Universiteit kun je bij de meeste bachelors vanaf 18 jaar zonder diploma beginnen; voor de bachelor Lerarenopleiding gelden vooropleidingseisen. Kijk voor het aanmelden bij de OU zelf (ou.nl). Na 1 mei: bij een aantal opleidingen kan het nog, zonder recht op toelating; de opleiding kan je weigeren of een studiekeuzecheck verplichten (WHW 7.31d). Wie zich uiterlijk 1 mei aanmeldt voor een opleiding die niet selecteert, heeft recht op een studiekeuzecheck (Rijksoverheid; WHW 7.31b, Stb. 2013, 298); een opleiding kan die verplicht maken en je weigeren als je niet meedoet; het advies is niet bindend. Bij een numerus fixus gelden 1 mei en de studiekeuzecheck niet; ook bij andere opleidingen met selectie is er geen recht op een studiekeuzecheck. 1 mei 2027 is een zaterdag: raad aan om je uiterlijk vrijdag 30 april aan te melden. Of de datum naar maandag 3 mei schuift, is niet gecontroleerd; reken er niet op. Mbo: tot en met 1 april (WEB 8.0.1 "Uiterlijk op 1 april"), op de site van de school, met DigiD. Extra eisen van een mbo-opleiding staan uiterlijk 1 februari op de site van de school. Ook het mbo kent opleidingen met een vast aantal plekken. De weigergrond "te laat aangemeld" geldt alleen voor wie niet meer kwalificatieplichtig is (WEB 8.1.1c lid 3). Kwalificatieplichtig ben je van 16 tot 18 zonder startkwalificatie (havo, vwo of mbo 2) (Rijksoverheid). Vraag je DigiD op tijd aan: dat kan 5 werkdagen duren.
- Kamer 3: Bsa: de hogeschool of universiteit bepaalt zelf of het advies bindend is; de regels staan in de OER; de opleiding moet rekening houden met persoonlijke omstandigheden; bezwaar staat in het studentenstatuut. Een negatief bsa kan ook gelden voor opleidingen aan dezelfde instelling met dezelfde propedeuse (WHW 7.8b lid 3). Eerstejaarsregeling (Wsf 2000 art. 5.10, DUO): voor het eerst prestatiebeurs (basisbeurs, aanvullende beurs en studentenreisproduct) voor hbo of universiteit, studiefinanciering stopt vóór 1 februari, in hetzelfde studiejaar geen nieuwe studiefinanciering voor hbo of universiteit; dan hoef je basisbeurs, aanvullende beurs en reisproduct van dat jaar niet terug te betalen. Met een mbo-diploma geldt sinds studiejaar 2023-2024 ook een ruimere regel (Wsf 2000 art. 5.11a, Stb. 2023, 186; DUO): begon je op 1 september, dan moet je studiefinanciering uiterlijk op 31 augustus van dat studiejaar zijn gestopt (begon je op 1 februari: uiterlijk 31 januari). Daarna krijg je een tijd geen nieuwe prestatiebeurs voor hbo of universiteit (DUO). Begon je op 1 september: stop je vóór 1 februari, dan tot de volgende 1 september; stop je van 1 februari tot en met 31 augustus, dan tot de volgende 1 februari. Begon je op 1 februari: stop je vóór 1 september, dan tot de volgende 1 februari; stop je van 1 september tot en met 31 januari, dan tot de volgende 1 september. Zonder mbo-diploma geldt de gewone regel. Een lening betaal je altijd terug. De regeling kan 1 keer voor mbo en 1 keer voor hbo of universiteit. De maanden tellen wel mee als gebruikte maanden: elke maand studiefinanciering voor hbo of universiteit krijg je later niet nog een keer (DUO). Studiejaar hbo en universiteit: 1 september tot en met 31 augustus (DUO). Voor een studie van 4 jaar krijg je 4 jaar basisbeurs. Ga je van het mbo naar het hbo, dan begint je recht opnieuw (DUO). Zet je studiefinanciering uiterlijk stop op de 1e van de maand; geld dat je door te laat stoppen krijgt, betaal je terug (DUO). Soms krijg je een deel van je collegegeld terug (Studiekeuze123, één bron, niet gevraagd). Het mbo-studiejaar begint op 1 augustus (DUO). Mbo-scholen geven in het eerste jaar een studieadvies (WEB 8.1.7a, gelezen door factcheck A; niet in de les). Meer over de prestatiebeurs en de diplomatermijn van 10 jaar: escape Studiefinanciering.
- Kamer 4: Neutrale informatie zonder reclame: Studiekeuze123 is een onafhankelijke stichting, volledig betaald door het ministerie van OCW. Er staan alle erkende hbo- en wo-opleidingen op, met een kalender van open dagen, meeloopdagen en proefstuderen (filter "Type activiteit"). KiesMBO is gemaakt door SBB in opdracht van OCW, voor het mbo, met open dagen per provincie. Meeloopdagen staan niet apart op die KiesMBO-pagina (7 november 2026); kijk daarvoor op de site van de mbo-school. De regels zelf staan op Rijksoverheid.nl en, voor geld, op DUO.nl. Kijk bij een test wie hem heeft gemaakt en wat ze ermee willen. Een interessetest is een begin van een gesprek, geen uitslag (onderzoeksdossier). Deze les raadt geen betaalde methode of test aan.

## Antwoordblad

Answers are given as the text on screen, without letters (G3, all lessons, row 6).

| Kamer | Vraag | Goed antwoord |
|---|---|---|
| 1 | Juiste diploma met havo | Software developer (mbo 4); Sport en bewegen (mbo 4); HBO-ICT (hbo); Fysiotherapie (hbo) |
| 1 | Oom van Ravi | Nee, met een vwo-diploma kun je naar het mbo, het hbo en de universiteit |
| 1 | Propedeuse | Ja. Na haar propedeuse kan ze naar de universiteit, maar waarschijnlijk met extra vakken. |
| 1 | **Cijfer** | **4** (2 mbo + 2 hbo) |
| 2 | Fysiotherapie | Tot en met 15 januari 2027 |
| 2 | Lina | Software developer tot en met 1 april, HBO-ICT tot en met 1 mei |
| 2 | Te laat | Ze heeft geen recht meer op toelating. De opleiding kan haar weigeren. |
| 2 | **Cijfer** | **3** (15 min 12) |
| 3 | Bsa | De regels voor Lina's bsa staan in de OER van haar opleiding; Met een negatief bsa mag je je aanmelden voor een andere opleiding |
| 3 | Lina stopt | Nee, want haar studiefinanciering stopt voor 1 februari |
| 3 | Als Ravi in maart stopt | Nee, want zijn studiefinanciering zou na 1 februari stoppen |
| 3 | **Cijfer** | **7** (september tot en met maart) |
| 4 | Soort dag | Een meeloopdag |
| 4 | Welke dag | Dinsdag 9 maart, Software developer |
| 4 | Aanmelden | Dinsdag 2 maart |
| 4 | **Cijfer** | **9** (9 maart) |
| | **Code** | **4379** |

Start- en eindcheck vorm A: A1 Naar het mbo, het hbo of de universiteit; A2 15 januari; A3 Nee, die hoef je niet terug te betalen; A4 Een open dag. Vorm B: B1 Verder in het mbo of op het hbo; B2 1 april; B3 Nee, die hoef je niet terug te betalen; B4 Proefstuderen.

## Nabespreken

Drie gespreksvragen (kies er één of twee als de tijd kort is):
1. "Welke route op de kaart had je niet verwacht? Waarom niet?"
2. "Wat zou jij willen weten over een opleiding voordat je begint?"
3. "Wat weet je nog niet over de opleiding die je leuk vindt? Hoe kom je daarachter?"

Per kamer (`discuss`):
- Kamer 1: "Ken je iemand die via een omweg bij zijn werk kwam? Hoe ging dat?"
- Kamer 2: "Welke van de drie data komt voor jou het eerst? Wat doe je er deze week mee?"
- Kamer 3: "Met wie zou jij praten als je in je eerste jaar twijfelt?"
- Kamer 4: "Wat wil je op een meeloopdag zien dat je niet op een website ziet?"

Slotvraag: "Noem één datum die je dit schooljaar niet mag missen. En noem één dag waarop je een opleiding gaat beleven."

Note: question 1 and the care point keep the talk neutral: no route is called better, and the teacher asks about fit, not level.

---

## Engine fit

Supported now, no change needed: `table` with `head` (route map, agenda), `table` rows (voortgang), `chat` (rooms 2, 3), `listing` with `facts` (room 4 pages), room `rules` with numbered lines, `multi` and `single`, `situ`, `pointTo` with `doc`/`lines`, `rule`/`rules` and `situ`, `clueFull`, `clueDocs`, `where`, `teacherNote`, `discuss`, `sources`/`sourceNone`, check forms A/B, the stop flow (here at minute 32), `teacher.plan` with `from`/`to`/`at`, `materials`, `tip`, `care`, `answers` with `format: 'text'`, and the plan with `when`, `then`, `within` and own text (never logged).

Features this lesson needs (release gate):
1. **Printable slip on the teacher screen (NEEDED; coordinator will have it built).** `teacher.handout: { title, lines }`, one click "Print de papiertjes", two slips per A4 (one cut), also on the printed teacher sheet. Content: the six-field slip under "Plan". Without it the lesson's last 5 minutes have no tool (gate T1, conditional blocker).
2. **Slip lines on the end screen (NEEDED, small).** Show the same six lines as plain text under the plan card, so pupils can copy them. Never stored, never sent.

Features this lesson would benefit from:
3. **Pointer to a gloss (V4.1).** `pointTo` cannot mark a line of a document's `plain` box. Either add `pointTo: { plain: 'part' }` (text copied word for word, like `situ`), or use the fallback that works today: `pointNone: "Lees bij Moeilijke woorden wat een meeloopdag is."`.
4. **Plan date field.** An optional `plan.date: true` that adds "Op welke datum?" and ends the card with "Datum: ...". Same privacy as the own-text field. Without it, the date goes in the own "dan" text and on the paper slip.
5. **Closed teacher detail per room (small).** `teacherDetail` shown in a closed `<details>` under `teacherNote` ("Bronnen en uitzonderingen"), so the Kern stays short (gate T4). Without it, put the detail only on the printed teacher sheet.
6. **Audience line on the teacher screen.** `teacher.audience` as the first line (gate D3), or put it at the start of `teacher.goal`.
7. **"Nu voorlezen" card (optional, gate T8).** After "Stop de escape", show the four digits on the teacher screen so no printed answer sheet is needed. Not built; the printed sheet works.
8. **Optional questions for fast pairs (optional, gate V3).** Not supported; the spec does not add an optional V3.4 (see Changelog).
9. **Plan per pupil.** The engine makes one plan per screen, and two pupils share a screen. The personal plan is therefore on paper; the screen plan is optional. No change needed.
10. **Diagram document (optional, later).** A route map with arrows would show doorstroom more clearly than a table.

`.example` addresses in `listing.site` are plain text. The validator's dash check passes. No option or explanation uses "beide", "allebei" or "geen van" (README option order).

---

## Brontabel

Pages read on 7 November 2026 with a web fetch (quotes as returned by the fetch tool). Law texts marked "read by check A" were downloaded and quoted by fact checker A on 7 November 2026 (`content_new/factcheck_A_route-18.md`); my own fetches of those pages returned only the table of contents or an empty reply, so I rely on check A's quotes and say so. "Valid until": the date the rule is next expected to change; "check" means the next scheduled check (January 2027). No page announced a change of these rules for 2027-2028.

| Key | Rule (as used) | Source 1 | Source 2 | Checked | Valid until |
|---|---|---|---|---|---|
| roDiplomas / roToelating / whw724 / whw728 | Havo, vwo or mbo 4 diploma: hbo. Universiteit: vwo diploma or hbo-propedeuse; the university may demand extra knowledge from a propedeuse holder. Some programmes have extra requirements (profile); toelatingsonderzoek from 21 for people without the right vooropleiding, sometimes younger for arts. | [Rijksoverheid, Met welke diploma's kan ik naar de universiteit of hogeschool?](https://www.rijksoverheid.nl/themas/onderwijs/hoger-onderwijs/studiekeuze-en-toelating/vraag-en-antwoord/hoger-onderwijs/met-welke-diploma-s-kan-ik-naar-de-universiteit-of-hogeschool) ("Met een havodiploma, een vwo-diploma of een mbo 4-diploma kunt u een opleiding gaan volgen aan een hogeschool"; "Voor toelating tot een universiteit heeft u een vwo-diploma of een propedeuse (eerste jaar) van een hbo-opleiding nodig"; "Voor het toelatingsonderzoek moet u 21 jaar of ouder zijn"; re-read 7 Nov 2026 for Revision 3: "Voor inschrijving aan de Open Universiteit gelden geen vooropleidingseisen." "Wanneer u 18 jaar of ouder bent, mag u uzelf aanmelden voor een bacheloropleiding."; modified 6 Oct 2026); [Rijksoverheid, Studiekeuze en toelating](https://www.rijksoverheid.nl/onderwerpen/hoger-onderwijs/studiekeuze-en-toelating) ("Studenten kunnen met een hbo-propedeuse (60 studiepunten) toegelaten worden tot een bacheloropleiding aan de universiteit"; modified 26 Aug 2026) | Law, read by check A: [WHW, BWBR0005682, version from 1 Aug 2026](https://wetten.overheid.nl/BWBR0005682/2026-08-01): art. 7.24 lid 1 and 2 (vwo for wo; vwo, havo, middenkader- or specialistenopleiding for hbo); art. 7.28 lid 1a ("Het instellingsbestuur kan ... van de bezitter van een getuigschrift van een met goed gevolg afgelegd propedeutisch examen ... eisen dat hij aantoont over kennis, inzicht en vaardigheden te beschikken"); art. 7.29 lid 1 (21 and older) and lid 4 (kunst); art. 7.8 lid 5 (propedeuse 60 studiepunten). The propedeuse is no longer named in 7.28 lid 1; the route follows from 7.28 lid 2 (Ratho, not opened) and lid 1a. | 7 Nov 2026 | No set date; check Jan 2027 |
| skToelatingseisen / skMboHbo / skPropedeuse / skRoutes | Havo or mbo 4 for hbo, vwo for wo; extra requirements possible; mbo 4 to hbo; pabo stricter for mbo and havo; propedeuse to wo, most wo programmes need extra vwo-level subjects; vwo to hbo or mbo; Ad to related bachelor of two more years; hbo bachelor to wo master via schakelprogramma. | [Studiekeuze123, Toelatingseisen](https://www.studiekeuze123.nl/studiekeuzewoordenboek/toelatingseisen) ("minimaal een havo- of mbo-4-diploma ... voor het hbo en een vwo-diploma voor de universiteit"); [Studiekeuze123, Hoe zit het met de toelatingseisen?](https://www.studiekeuze123.nl/wegwijzer/van-mbo-naar-hbo/toelatingseisen-en-kosten/hoe-zit-het-met-de-toelatingseisen) ("Als je een mbo-diploma op niveau 4 hebt behaald, kun je doorstromen naar een hbo-opleiding") | [Studiekeuze123, Doorstromen met een propedeuse](https://www.studiekeuze123.nl/wat-ga-jij-kiezen/artikel/doorstromen-met-een-propedeuse) ("Daarom moet je bij de meeste wo-opleidingen aanvullende vakken op vwo-niveau halen"); [Studiekeuze123, Mogelijke leerroutes](https://www.studiekeuze123.nl/mogelijke-leerroutes) ("Dan kun je kiezen voor een hbo-opleiding of een mbo-opleiding"; "doorstromen naar een aanverwante hbo-bachelor, die dan nog maar twee jaar duurt"). No page date shown (footer 2026). | 7 Nov 2026 | No set date; check Jan 2027 |
| roMboNiveaus / kmHavoVwo / kmVerder | Mbo 4 middenkaderopleiding is open with, among others, proof of the first 3 years of havo or vwo; with a havo diploma you can study at mbo; after mbo study further in mbo or hbo. | [Rijksoverheid, Uit welke mbo-opleidingen kan ik kiezen?](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/middelbaar-beroepsonderwijs/uit-welke-mbo-opleidingen-kan-ik-kiezen) (niveau 4 entry: "het bewijs van de eerste 3 leerjaren havo of vwo"; "Met het diploma kun je ook verder studeren op het hbo"; modified 7 Oct 2026) | [KiesMBO, Doorstromen van havo of vwo naar mbo](https://www.kiesmbo.nl/over-het-mbo/doorstromen-van-havo-of-vwo-naar-mbo) ("Als je een overgangsbewijs hebt naar havo-4/vwo-4 of hoger, dan kun je meestal doorstromen naar een mbo-4 opleiding"; metadata 07/07/2025); [KiesMBO, Over het mbo](https://kiesmbo.nl/over-het-mbo) ("Ook als je een havo diploma hebt ... kan je studeren aan het mbo"); [KiesMBO, Aan het werk of verder studeren](https://www.kiesmbo.nl/over-het-mbo/aan-het-werk-of-verder-studeren) ("Dat kan op een ander niveau in het mbo of op het hbo") | 7 Nov 2026 | No set date; check Jan 2027 |
| roAanmelden / roDeadline / skAanmelden / whw731 | Bachelor and Ad: register via Studielink by 1 May; selection programmes sometimes earlier; later: no right to admission, may be refused or required to do a studiekeuzecheck, no right to a check; registered by 1 May and switching after: allowed; after a negative bsa: right to admission elsewhere; at most 4 registrations at once, at most 2 fixus; 2027 dates: 15 Jan, 1 May, 1 Sep. | [Rijksoverheid, Hoe meld ik me aan voor een opleiding aan de hogeschool (hbo) of universiteit?](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/hoger-onderwijs/aanmelden-opleiding-hogeschool-hbo-universiteit) ("uiterlijk 1 mei"; "Dat doe je via Studielink"; "Bijvoorbeeld als er selectie-eisen zijn"; "Maar je hebt dan geen recht meer op toelating. De opleiding kan je weigeren."; modified 30 Oct 2026); [Rijksoverheid, Wanneer moet ik me aanmelden ...?](https://www.rijksoverheid.nl/onderwerpen/hoger-onderwijs/vraag-en-antwoord/deadline-aanmelden-opleiding-hogeschool-of-universiteit) ("De deadline van 1 mei en de studiekeuzecheck gelden dan niet"; "Dan mag u na 1 mei nog wisselen van opleiding tot het einde van het nieuwe studiejaar"; check A: "Bij een aantal opleidingen kunt u zich ook na 1 mei nog aanmelden."; modified 6 Oct 2026) | [Studiekeuze123, Aanmelden studie](https://www.studiekeuze123.nl/aanmelden-studie) ("Meld je uiterlijk 1 mei aan voor een opleiding met vrije instroom"; "Meld je uiterlijk 15 januari aan voor een opleiding met een numerus fixus"; "Je mag je per studiejaar voor maximaal 4 opleidingen tegelijkertijd aanmelden"; timeline 15 januari 2027, 1 mei 2027, 1 september 2027; re-read 7 Nov 2026 for Revision 3: "Bij sommige opleidingen is het mogelijk om in februari in te stromen." "Hiervoor is geen landelijke aanmelddeadline."; private programmes: "Ze mogen ook andere aanmelddeadlines gebruiken."); law, read by check A: WHW art. 7.31a lid 1 ("Uiterlijk op 1 mei voorafgaand aan het desbetreffende studiejaar meldt degene ... zich aan"), 7.31d lid 1 (refuse, or "verplicht ... deel te nemen aan de studiekeuzeactiviteiten") | 7 Nov 2026 | Dates for 2027-2028 intake: 15 Jan 2027 and 1 May 2027; check Jan 2027 |
| roFixus | Fixus: register through 15 January; at most 2 fixus programmes per study year; for geneeskunde, tandheelkunde, fysiotherapie, verloskunde and mondzorgkunde only 1 institution; selection or lottery. | [Rijksoverheid, Hoe meld ik me aan voor een fixusopleiding?](https://www.rijksoverheid.nl/themas/onderwijs/hoger-onderwijs/studiekeuze-en-toelating/vraag-en-antwoord/hoger-onderwijs/hoe-werkt-de-toelating-bij-een-opleiding-met-een-numerus-fixus) ("De uiterste aanmelddatum is tot en met 15 januari"; "Per studiejaar mag u zich voor maximaal 2 fixusopleidingen aanmelden"; "Hier mag u maar voor 1 onderwijsinstelling kiezen"; modified 6 Oct 2026) | Studiekeuze123, Aanmelden studie (as above); WHW art. 7.53 (check A) | 7 Nov 2026 | 15 Jan 2027 for 2027-2028; check Jan 2027 |
| roSkc / skSkc | Registered by 1 May for a programme that does not select: right to a studiekeuzecheck (not for numerus fixus or other selection programmes); institution may make it compulsory and refuse you if you skip it; advice not binding; forms: a talk, proefstuderen or a questionnaire. | [Rijksoverheid, Welke regels gelden voor de studiekeuzecheck?](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/hoger-onderwijs/regels-studiekeuzecheck) ("Je hebt recht op een studiekeuzecheck als je je op uiterlijk 1 mei aanmeldt"; "Opleidingen kunnen namelijk weigeren je in te schrijven als je niet mee hebt gedaan aan een studiekeuzecheck"; the form can be a talk, proefstuderen or a digital questionnaire; modified 6 Oct 2026); roAanmelden ("Het advies dat je krijgt is niet bindend") | [Studiekeuze123, Studiekeuzecheck](https://www.studiekeuze123.nl/studiekeuzewoordenboek/studiekeuzecheck) ("Dan heb je in de meeste gevallen recht op de studiekeuzecheck"); WHW art. 7.31b (check A); [Rijksoverheid, Studiekeuze en toelating](https://www.rijksoverheid.nl/onderwerpen/hoger-onderwijs/studiekeuze-en-toelating) (read 7 Nov 2026, Revision 2: "Studenten die zich uiterlijk op 1 mei aanmelden bij Studielink voor de studie van hun keuze hebben recht op een studiekeuzecheck voor opleidingen die niet selecteren."; "Wel kan de opleiding deelname aan de studiekeuzecheck verplicht stellen om aan de opleiding te mogen beginnen."; selection in 3 groups: "Opleidingen met een vastgesteld aantal plaatsen (numerus fixus)", "Kleine en intensieve opleidingen", "Opleidingen met aanvullende eisen"; modified 26 Aug 2026) | 7 Nov 2026 | No set date; minister announced an evaluation (Kamerbrief 31288-1188, research file); check Jan 2027 |
| stb2013298 / whw731b | Studiekeuzecheck right only for programmes without a selection procedure; a first registrant after 1 May may be refused or obliged to take part in the studiekeuzeactiviteiten. | [Stb. 2013, 298, Wet kwaliteit in verscheidenheid hoger onderwijs](https://zoek.officielebekendmakingen.nl/stb-2013-298.html) (read 7 Nov 2026 by me; act text as enacted: art. 7.31b lid 5, the right does not apply to "de inschrijving voor een bacheloropleiding waarvoor een selectieprocedure is ingesteld"; art. 7.31d, after a first registration after 1 May the institution may decide that "hij de betrokkene de inschrijving voor de desbetreffende bacheloropleiding weigert" or that "de betrokkene verplicht is deel te nemen aan de studiekeuzeactiviteiten") | Rijksoverheid, Studiekeuze en toelating (row roSkc); the consolidated WHW text on wetten.overheid.nl again returned only the table of contents to me (title of 7.31b: "Rechten en verplichtingen bij aanmelding uiterlijk op 1 mei") | 7 Nov 2026 | No set date; evaluation announced; check Jan 2027 |
| roMboAanmelden / roMboToelating / kmAanmelden / web801 / stb2016362 | Mbo: register by 1 April on the school's website (DigiD); then right to admission if you meet the entry requirements and take part in the intake; later: no right, may be refused; extra requirements published by 1 February; some programmes have a fixed number of places. The refusal ground for late registration applies only to someone no longer under the kwalificatieplicht. | [Rijksoverheid, Hoe meld ik mij aan voor een mbo-opleiding?](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/middelbaar-beroepsonderwijs/aanmelden-mbo) ("Meld je uiterlijk 1 april aan via de website van de mbo-school"; "Maar je hebt dan geen recht meer op toelating"; "Dan staan deze uiterlijk op 1 februari op de website van de mbo-school"; modified 30 Oct 2026); [KiesMBO, Aanmelden en toelatingsrecht](https://www.kiesmbo.nl/over-het-mbo/aanmelden-en-toelatingsrecht) ("Meld je uiterlijk 1 april aan voor de start van het nieuwe schooljaar"; "Wanneer je je na 1 april aanmeldt, dan kan de mbo-school je weigeren"; metadata 05/12/2026) | Law, read by check A: [WEB, BWBR0007625, version from 1 Aug 2026](https://wetten.overheid.nl/BWBR0007625/2026-08-01): art. 8.0.1 lid 1 ("Uiterlijk op 1 april voorafgaand aan een studiejaar meldt degene die zich als student wenst te laten inschrijven ... zich aan"); art. 8.1.1c lid 3 onder c ("paragraaf 2a van de Leerplichtwet 1969 niet meer op hem van toepassing is, en: 1°. hij zich niet uiterlijk op de datum, genoemd in artikel 8.0.1, eerste lid, heeft aangemeld"); the change of 1 Jan 2027 ([Stb. 2026, 177](https://zoek.officielebekendmakingen.nl/stb-2026-177.html)) does not touch these. My own read: table-of-contents title "Aanmelding uiterlijk op 1 april" (current version) and the inserting act [Stb. 2016, 362](https://zoek.officielebekendmakingen.nl/stb-2016-362.html). | 7 Nov 2026 | 1 Apr 2027 for 2027-2028; check Jan 2027 |
| roLeerplicht (teacher only) | Kwalificatieplichtig: 16 to 18 without startkwalificatie; startkwalificatie is at least a havo, vwo or mbo 2 diploma. | [Rijksoverheid, Leerplicht en kwalificatieplicht](https://www.rijksoverheid.nl/onderwerpen/leerplicht/leerplicht-en-kwalificatieplicht) (read by check A: "Jongeren tussen de 16 en 18 jaar die nog geen startkwalificatie hebben behaald zijn kwalificatieplichtig."; "Een startkwalificatie is (minimaal) een diploma havo, vwo of mbo (niveau 2 of hoger).") | WEB art. 8.1.1c (above) | 7 Nov 2026 | No set date; check Jan 2027 |
| roVoMbo (discrepancy only) | One Rijksoverheid page says "vóór 1 april". Not used in pupil text. | [Rijksoverheid, Wat moet ik weten als ik van het vmbo naar het mbo ga?](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/voortgezet-onderwijs/van-vo-naar-mbo) ("Zorg dat je je vóór 1 april aanmeldt"; modified 4 Aug 2026) | none; the law says "Uiterlijk op 1 april" | 7 Nov 2026 | Check Jan 2027 |
| roBsa / skBsa / whw78b | Bsa: the institution decides whether it is binding; all rules in the OER; depending on policy you must stop; personal circumstances count; objection via the studentenstatuut; after a negative bsa you may register for another programme; the rejection can extend to programmes at the same institution with the same propedeuse. | [Rijksoverheid, Wat is het bindend studieadvies ...?](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/hoger-onderwijs/wat-is-het-bindend-studieadvies-bsa-in-het-hoger-onderwijs-ho) ("De universiteit of hogeschool bepaalt zelf of dit advies bindend is"; "Alle regels die gelden bij een bsa staan in de onderwijs- en examenregeling (OER) van uw opleiding"; "Afhankelijk van het beleid bij uw instelling moet u dan stoppen met uw opleiding"; modified 6 Oct 2026) | [Studiekeuze123, Bindend studieadvies (BSA)](https://www.studiekeuze123.nl/studiekeuzewoordenboek/bindend-studieadvies-bsa) ("De kans is groot dat je dan moet stoppen met de opleiding"; "Je mag je dan wel inschrijven voor een andere opleiding"); WHW art. 7.8b lid 3, read by check A ("Het instellingsbestuur kan de afwijzing uitstrekken tot opleidingen die met de desbetreffende opleiding het propedeutisch examen gemeen hebben.") | 7 Nov 2026 | No set date; a motion of 16 Apr 2026 (kst-31288-1245) asks for talks with institutions, no bill; check Jan 2027 |
| duoEerstejaars / skFeb / wsf510 | First prestatiebeurs for hbo/wo, studiefinanciering stops before 1 February, no new studiefinanciering for hbo/wo over the same study year: the prestatiebeurs of that year becomes a gift (basisbeurs, aanvullende beurs, reisproduct); lening always repaid; once for mbo and once for hbo/wo; the months count as used; separate, sometimes wider rules for students from mbo; mbo study year from 1 August. | [DUO, Stoppen in uw 1e jaar](https://duo.nl/particulier/opleiding-stoppen-of-wijzigen/stoppen-in-je-eerste-jaar.jsp) ("U hoeft uw prestatiebeurs (basisbeurs, aanvullende beurs en studentenreisproduct) niet terug te betalen als uw studiefinanciering stopt voor 1 februari"; "Een rentedragende lening moet u altijd terugbetalen"; "U kunt 1 keer gebruikmaken van de eerstejaarsregeling voor mbo en 1 keer voor hbo of universiteit"; "De maanden die u in het 1e jaar hebt gekregen, tellen wel mee als verbruikte maanden prestatiebeurs"; mbo with diploma: "Dan geldt de regeling tot het einde van het 1e studiejaar in het hbo"; no date shown) | [Studiekeuze123, Stoppen? Voor 1 februari](https://www.studiekeuze123.nl/wat-ga-jij-kiezen/studie-kiezen/stoppen-voor-1-februari) ("deze regeling geldt alleen als je voor het eerst studiefinanciering krijgt voor een hbo- of wo-opleiding"; "Een eventuele lening moet je wel altijd terugbetalen"; collegegeld: my fetch returned "Meestal kun je een deel van het collegegeld terugkrijgen", check A quotes "Ook is het soms nog mogelijk om een deel van het collegegeld terug te krijgen"; the teacher note uses "soms"); law, read by check A: [Wsf 2000 art. 5.10, version from 1 Aug 2026](https://wetten.overheid.nl/BWBR0011453/2026-08-01) ("Indien een ho-student in het studiejaar waarvoor hij op enig moment voor het eerst prestatiebeurs hoger onderwijs geniet, ophoudt studiefinanciering te genieten vóór 1 februari, en hij niet over datzelfde studiejaar opnieuw studiefinanciering voor het volgen van hoger onderwijs krijgt toegekend, wordt ... de in dat studiejaar toegekende prestatiebeurs hoger onderwijs omgezet in een gift.") | 7 Nov 2026 | No set date; check Jan 2027 |
| stb2023186 / wsf511a (teacher only) | Students with an mbo diploma (from study year 2023-2024): the prestatiebeurs of the first ho year becomes a gift if studiefinanciering stops by 31 August of that study year (start 1 September) or 31 January (start 1 February), and no new ho studiefinanciering follows before 1 February (stop from 1 February) or 1 September (stop before 1 February). | [Stb. 2023, 186, Wet herinvoering basisbeurs hoger onderwijs](https://zoek.officielebekendmakingen.nl/stb-2023-186.html) (read 7 Nov 2026 by me; new art. 5.11a "Stoppen binnen twaalf maanden door mbo-gediplomeerden": "Onverminderd artikel 5.10 onderscheidenlijk artikel 5.11 wordt de prestatiebeurs van de ho-student die eerder een opleiding in het beroepsonderwijs heeft afgerond, omgezet in een gift, indien: a. hij uiterlijk op 31 augustus van het studiejaar waarvoor hij op enig moment voor het eerst prestatiebeurs hoger onderwijs geniet ophoudt studiefinanciering te genieten, en hij niet vóór 1 februari van het daaropvolgende studiejaar opnieuw studiefinanciering voor het volgen van hoger onderwijs krijgt toegekend") | [DUO, Stoppen in uw 1e jaar](https://duo.nl/particulier/opleiding-stoppen-of-wijzigen/stoppen-in-je-eerste-jaar.jsp) (read 7 Nov 2026: "Hebt u een mbo-diploma? Dan zijn dit de voorwaarden vanaf studiejaar 2023-2024"; "Bent u begonnen per 1 september? Dan moet uw studiefinanciering uiterlijk op 31 augustus zijn gestopt."; "Bent u begonnen per 1 februari, dan moet uw studiefinanciering uiterlijk op 31 januari zijn gestopt."; without an mbo diploma: "Uw studiefinanciering is vóór 1 februari gestopt."). The consolidated Wsf text (wetten.overheid.nl, version from 1 Aug 2026) lists "Paragraaf 5.4 ... (Artikelen 5.10-5.11a)" in its table of contents, but the article text did not load for me. | 7 Nov 2026 | No set date; check Jan 2027 |
| duoStop / duoHoelang / duoWissel / duoGift | Stop studiefinanciering at the latest on the 1st of the month (deregistered per 15 June: no right from 1 July); 4-year study: basisbeurs the first 4 years; mbo to hbo: right starts again; switching: right does not always restart; prestatiebeurs becomes a gift with a diploma within the diplomatermijn, otherwise repaid. | [DUO, Studiefinanciering stopzetten](https://duo.nl/particulier/studiefinanciering-stopzetten.jsp) ("Zet uw studiefinanciering uiterlijk stop op de 1e dag van de maand"; "U hebt dan vanaf 1 juli geen recht meer op studiefinanciering"); [DUO, Hoelang recht](https://duo.nl/particulier/studiefinanciering/hoelang-recht.jsp) ("U krijgt alleen de eerste 4 jaar de basisbeurs"; "De maanden die u voor het mbo hebt gehad, tellen niet mee voor het hbo"; page date: my two fetches show "Laatste update was op 05 november 2026", check A saw 20 October 2026) | [DUO, Nieuwe opleiding](https://duo.nl/particulier/opleiding-stoppen-of-wijzigen/van-opleiding-veranderen.jsp) ("Uw recht op studiefinanciering begint niet altijd opnieuw als u van opleiding wisselt"); [DUO, Omzetting prestatiebeurs](https://duo.nl/particulier/diploma-behaald/gift-of-lening.jsp) ("Behaalt u een diploma binnen de diplomatermijn, dan wordt de prestatiebeurs omgezet in een gift"; table "Geen diploma binnen 10 jaar": terugbetalen); Wsf 2000 art. 5.5 (check A: "De diplomatermijn hoger onderwijs is een periode van 10 jaren.") | 7 Nov 2026 | No set date; check Jan 2027 |
| skActiviteiten / skKalender | Open dag: information on several programmes, talk to students and teachers, atmosphere. Meeloopdag: a day with a current student, same lectures. Proefstuderen: lessons the institution puts together. Calendar of open days, meeloopdagen and proefstuderen for hbo and wo. | [Studiekeuze123, Open dag, meeloopdag en proefstuderen](https://www.studiekeuze123.nl/wat-ga-jij-kiezen/artikel/open-dag-meeloopdag-en-proefstuderen) ("Wil je leerling een echte studentendag meemaken? Dan is meelopen perfect."; proefstuderen: the institution "stelt een lesprogramma samen") | [Studiekeuze123, Open dagen](https://www.studiekeuze123.nl/open-dagen) (filter "Type activiteit": Meeloopdag, Proefstuderen, Open dag / avond) | 7 Nov 2026 | No set date (definitions) |
| skOver / kmOver / kmOpenDagen (teacher only) | Studiekeuze123: independent foundation (LCSK), fully funded by OCW, all accredited hbo and wo programmes. KiesMBO: developed by SBB, commissioned by OCW; open days per province. | [Studiekeuze123, Over Studiekeuze123](https://studiekeuze123.nl/over-studiekeuze123) ("Studiekeuze123.nl wordt volledig gefinancierd door het ministerie van OCW"; "een onafhankelijke website") | [KiesMBO, Over KiesMBO.nl](https://www.kiesmbo.nl/over-kiesmbonl) ("ontwikkeld door de Samenwerkingsorganisatie Beroepsonderwijs Bedrijfsleven (SBB)", "in opdracht van het Ministerie van Onderwijs, Cultuur en Wetenschap"); [KiesMBO, Open dagen](https://kiesmbo.nl/open-dagen) ("Zoek per provincie"; the words meeloopdag and proefstuderen do not appear) | 7 Nov 2026 | No set date |

## Onzeker

- **Law texts read by check A, not by me.** WEB art. 8.0.1, 8.1.1c and 8.1.7a, WHW art. 7.8b, 7.24, 7.28, 7.29, 7.31a to 7.31d and 7.53, and Wsf 2000 art. 5.5 and 5.10 were read by fact checker A on 7 November 2026 in the versions in force from 1 August 2026. My own fetches of wetten.overheid.nl returned only the table of contents or an empty reply, and the BWB XML on repository.officiele-overheidspublicaties.nl was blocked. The quotes in the source table for these articles are check A's. The change of 1 January 2027 (Stb. 2026, 177) does not touch the mbo rules used (check A). The propedeuse is no longer named in WHW 7.28 lid 1; the route follows from 7.28 lid 2 (Ratho, which neither of us could open) and lid 1a, and from Rijksoverheid. internetconsultatie.nl (robots.txt) and studielink.nl were not read; the Studielink dates rest on Rijksoverheid and Studiekeuze123, which agree.
- **"Uiterlijk 1 april" against "vóór 1 april".** The law, the Rijksoverheid mbo page and KiesMBO say "uiterlijk (op) 1 april"; the Rijksoverheid vmbo page says "vóór 1 april". The lesson says "tot en met 1 april", as the law. No question depends on registering on 1 April itself.
- **1 May 2027 is a Saturday** (calendar script: za 1 mei 2027, vr 30 april 2027). Studiekeuze123's timeline gives "1 mei 2027". Whether the Algemene termijnenwet moves "uiterlijk op 1 mei" (WHW 7.31a) to Monday 3 May was not settled by any page (check A agrees; Studiekeuze123 and Rijksoverheid say nothing about a weekend). The lesson keeps "tot en met 1 mei", advises "uiterlijk vrijdag 30 april" (room 2 remember, teacher Q&A and detail) and never presents 3 May as an extension; the teacher detail says it is not checked. V2.3 uses 10 May.
- **Law texts in Revision 2.** wetten.overheid.nl again returned only the table of contents (and curl got an empty reply), so Wsf 2000 art. 5.11a and WHW art. 7.31b lid 5 and 7.31d were read in the acts that inserted them (Stb. 2023, 186; Stb. 2013, 298), not in the consolidated text of 1 August 2026. DUO and Rijksoverheid (both read 7 Nov 2026) state the same rules as current, so no later change is assumed; a later reader should still check the consolidated articles.
- **Kwalificatieplicht and the mbo deadline.** Now sourced (WEB 8.1.1c lid 3 onder c and the Rijksoverheid leerplicht page, both via check A). How a school applies it to a pupil who gets the diploma in June, after registering, was not read. The lesson avoids the case (Lina is 18 on 10 May; B2 says "Je bent 18"); the teacher Q&A says to ask the school.
- **Single-source items.** The definitions of open dag, meeloopdag and proefstuderen (V4.1, C4, B4) come from one organisation (LCSK/Studiekeuze123). The 2-year Ad route, collegegeld restitutie and the stop-date mechanics are single-source and are teacher-only or story facts. The DUO pages on switching and the gift are one organisation and are never a right answer.
- **Collegegeld wording.** My fetch of Studiekeuze123 returned "Meestal", check A's "soms". The teacher detail uses the weaker "soms".
- **Mbo in room 3.** From Revision 3 the room has one short mbo rule (r6: with an mbo diploma a wider rule applies, see DUO); the mbo line in the plain box is gone to cut reading load (playtest S3). The DUO mbo first-year regulation and the 5.11a details are in the teacher detail. No mbo question was added: the mbo conditions differ per route (from vo, from mbo 1 or 2) and the mbo studieadvies (WEB 8.1.7a) was read only by check A, so a question would need a second source first.
- **Bsa.** No page gives a national bsa norm or a bar period after a negative bsa; the lesson names neither. A motion of 16 April 2026 asks for talks with institutions; no bill was found.
- **Studiekeuzecheck.** The minister promised an external evaluation (Kamerbrief 31288-1188, research file); whether rules change for 2027-2028 is not known. Check in January 2027.
- **Page dates.** DUO and Studiekeuze123 pages mostly show no date. DUO "Hoelang recht" showed 5 November 2026 to me twice and 20 October 2026 to check A; both are recorded. KiesMBO dates are metadata in an ambiguous format.

## Voor een nieuw schooljaar

For a class of 2027-2028 (entering 2028-2029): move every story date one year (rooms 1, 2, 4: 2027-2028; room 3: December 2028 and March 2029), re-check the weekdays, and re-read every source. The digits do not depend on the year (4: count of programmes; 3: 15 min 12; 7: September to March; 9: the mbo meeloopdag date), so the code can stay 4379 if the mbo meeloopdag stays on 9 March and the deadline gap stays 12 to 15 January. In 2028, 15 January is a Saturday; keep the rule "tot en met 15 januari" and keep Ravi's day on the 12th. The room 2 remember line and the teacher Q&A and detail name "1 mei 2027 is een zaterdag" and "vrijdag 30 april": 1 May 2028 is a Monday, so drop those sentences for that year (and re-check the weekday each year). Re-check that 9, 10 and 11 March fall on school days. Owner of the yearly update: the content team, in January (gate D8).

---

## Changelog

Item numbers refer to the room questions (V1.1 and so on), rule lines (r1 and so on) and check items (C1 to C4, B1 to B4) of this spec.

Revision 4 (7 Nov), after ChatGPT check B round 3 (end of `qa/checkB/route-18.md`, read Revision 3: 3 ERROR). Each source re-opened by me on 7 November 2026. **Lock code 4379 and all answer keys unchanged.** No engine file changed.
- R3-1 (ERROR, room 2 r2 scope: private bachelors and the Open Universiteit): applied adjusted. Studiekeuze123 aanmelden-studie: "Voor particuliere opleidingen meld je je niet aan via Studielink.nl."; "Ze mogen ook andere aanmelddeadlines gebruiken."; "Meld je uiterlijk 1 mei aan voor een opleiding met vrije instroom." r2: "Andere bachelor via Studielink, met start in september: meld je aan tot en met 1 mei. Heeft de opleiding selectie, ...". The checker's "uiterlijk 1 mei" is not used, to keep "tot en met" in all three dates (gate P2). V2.2 situ: "Ze beginnen in september. Voor HBO-ICT meld je je aan via Studielink." (no "beide", so the option order rule is unchanged). Gloss "Studielink: ... voor de meeste bachelors ...". Teacher detail Kamer 2: private programmes do not use Studielink, may use other dates and give no right to a studiekeuzecheck; for the OU, check with the OU. I did not write that the OU is exempt from WHW 7.31a to 7.31d: no page I opened says so. URLs: https://www.studiekeuze123.nl/aanmelden-studie ; https://zoek.officielebekendmakingen.nl/stb-2013-298.html
- R3-2 (ERROR, teacher detail Kamer 3, Wsf 5.11a waiting time only for a September start): applied. DUO (Voorwaarden eerstejaarsregeling, mbo-diploma from 2023-2024): start 1 September, stop before 1 February: no new prestatiebeurs for hbo or universiteit until 1 September; stop 1 February to 31 August: until 1 February. Start 1 February, stop before 1 September: until 1 February; stop 1 September to 31 January: until 1 September. Stb. 2023, 186 art. 5.11a lid 1 a and b (stop by 31 August or 31 January; no new ho studiefinanciering before 1 February or before the start of the next study year) is the basis. The teacher detail now lists all four cases. Pupil r6 is unchanged. URLs: https://duo.nl/particulier/opleiding-stoppen-of-wijzigen/stoppen-in-je-eerste-jaar.jsp ; https://zoek.officielebekendmakingen.nl/stb-2023-186.html
- R3-3 (ERROR, teacher detail Kamer 1 and 2, Open Universiteit not absolute): applied. ou.nl: "De enige voorwaarde is dat je 18 jaar of ouder bent." and "heb je geen diploma nodig en je hoeft geen toelatingsexamen te doen", but for the bachelor Lerarenopleiding "Voor deze opleiding bestaan namelijk vooropleidingseisen". Both details now say "bij de meeste bachelors ... vanaf 18 jaar zonder diploma; voor de bachelor Lerarenopleiding gelden vooropleidingseisen". Check B1 stays single-answer: its wrong options say "alleen ... niet op het hbo". URL: https://www.ou.nl/hoe-werkt-studeren-bij-de-open-universiteit-

Revision 3 (7 Nov). Inputs: ChatGPT check B round 2 (end of `qa/checkB/route-18.md`, read Revision 2: 1 ERROR, 3 RISK) and the playtest `qa/gate_route18_G4.md` (READY WITH FIXES). Every source re-opened by me on 7 November 2026. **Lock code unchanged: 4379.** Room answers unchanged (option ids and right ids of all 12 room questions and all 8 check items are the same); the wording of some check options changed (below). No engine file was changed (another agent works in `src/`); playtest items S5, S7, N2, N4, N7, N8, N9 and N11 are engine work and are left to that agent.

Check B round 2:
- R2-1 (ERROR, B1 option b "Direct op de universiteit" defensible through the Open Universiteit at 18): applied. Rijksoverheid (met-welke-diploma-s page): "Voor inschrijving aan de Open Universiteit gelden geen vooropleidingseisen." "Wanneer u 18 jaar of ouder bent, mag u uzelf aanmelden voor een bacheloropleiding." (ou.nl itself gave a client error.) B1 is now a "Alleen in het mbo, niet op het hbo"; b "Alleen op de universiteit, niet op het hbo"; c "Verder in het mbo of op het hbo" (right, still c). Both wrong options say "alleen ... niet op het hbo", which is false for anyone with an mbo 4 diploma, also with the OU route. C1 a got the same form ("Alleen naar de universiteit, niet naar het hbo"); a 17-year-old cannot use the OU route anyway. Teacher detail Kamer 1 and 2 name the OU. URL: https://www.rijksoverheid.nl/themas/onderwijs/hoger-onderwijs/studiekeuze-en-toelating/vraag-en-antwoord/hoger-onderwijs/met-welke-diploma-s-kan-ik-naar-de-universiteit-of-hogeschool
- R2-2 (RISK, room 1 r5 "geen enkele opleiding een extra eis" against extra vakken after a propedeuse): applied adjusted. r5 last sentence: "Op deze kaart vraagt geen opleiding een extra eis bij een havo-, vwo- of mbo 4-diploma." (19 words). The checker's two sentences repeated r4 and used "rechtstreekse instroom" (not B1). Basis: WHW 7.28 lid 1a (quoted in the source table). V1.1 keeps one answer: Lina has a havo diploma.
- R2-3 (RISK, room 2 r2 too general: private programmes, februari, OU): applied adjusted. r2 now "Andere bachelor met start in september: ...". The checker's "op deze kaart" does not work in room 2, which shows no map. V2.2 situ adds "Die opleidingen beginnen in september." so r2 still applies to Lina. Teacher detail Kamer 2 adds februari, private programmes and the OU. URLs: https://www.studiekeuze123.nl/aanmelden-studie ; https://www.rijksoverheid.nl/onderwerpen/hoger-onderwijs/vraag-en-antwoord/deadline-aanmelden-opleiding-hogeschool-of-universiteit
- R2-4 (RISK, room 3 r4 "studiefinanciering" where the law says "prestatiebeurs"): applied. r4: "Regel 3 geldt als je voor het eerst een prestatiebeurs krijgt voor hbo of universiteit." Gloss: "Prestatiebeurs: je basisbeurs, aanvullende beurs en studentenreisproduct samen." DUO (re-read): "U krijgt in een studiejaar voor het eerst prestatiebeurs" and "prestatiebeurs (basisbeurs, aanvullende beurs en studentenreisproduct)"; Wsf 5.10 as quoted by check A; Stb. 2023, 186 uses the same "voor het eerst prestatiebeurs hoger onderwijs geniet". r5 keeps "studiefinanciering", as the law does for the restart condition. C3 and B3 ("voor het eerst studiefinanciering ..., alleen een basisbeurs") stay true: a basisbeurs is prestatiebeurs. URL: https://duo.nl/particulier/opleiding-stoppen-of-wijzigen/stoppen-in-je-eerste-jaar.jsp

Playtest G4:
- S1 (internal label "s2" in the V3.1 hint): applied. Hint now "Het zijn er twee. Kijk ook in Lina's overzicht bij Bsa-norm."
- S2 (hints give the answer): applied. V1.1 hint "Kijk in de kolom Soort. Welke soorten staan in regel 1?" (playtest wording). V4.1 hint "Bij twee activiteiten staan studenten. Bij welke volg je samen met één student de lessen?" The playtest wording repeated the nudge; mine adds a step: "studenten" appears in both the open dag and the meeloopdag gloss, so the pupil still has to tell them apart.
- S3 (room 3 too heavy): applied, partly. 364 words of intro, rules, documents and glosses before question 1, now 296 (script count; the playtest counted 395 on screen with labels). The cut list is in the room 3 note. Not cut to 250: what is left is needed by a question (r1, r2 for V3.1; r3 to r5 for V3.2 and V3.3; the table and chat for the situations) or is a hard word on screen.
- S4 (room 2 Q2: Lina is 17 in January, r5 names under-18 exceptions): applied. V2.2 explanation adds "Lina is op 1 april al 18, dus regel 5 speelt voor haar geen rol." The intro already says "Lina wordt in maart 18"; no exact birthday added.
- S6 (antwoordblad "vorm A: C1 ..."): data-driven (`teacher.answers.after`, format text), fixed: "vorm A: A1 ... A4. Vorm B: B1 ... B4", with the new option texts. The spec tables keep C1 to C4 as question ids; the teacher never sees those ids elsewhere.
- S8 (chat sender): applied. Both chats are now "Ravi", sub "app op de telefoon van Lina"; Lina's own messages are "Jij" (engine label).
- S9 (check Q3 right option longest and carrying the reason): applied to C3 and B3: right "Nee, die hoef je niet terug te betalen"; wrong "Ja, want je hebt geen diploma gehaald", "Ja, maar alleen de helft van het bedrag" (38, 37, 39 characters). Balance across all items: C1 a and B1 a, b lengthened (above), B1 c "Verder in het mbo of op het hbo"; in no item is the right option clearly the longest now. C2, B2, C4, B4 were short and even.
- N1: applied (B4 prompt "Je wilt een paar lessen volgen die speciaal voor bezoekers zijn gemaakt.").
- N3: applied as content. The teacher note of rooms 1, 2 and 4 repeated the Kern (remember) line; it is now a teacher cue: "Vraag wie de route via mbo 4 of een propedeuse nog niet kende.", "Laat leerlingen nu de aanmelddatum die voor hen geldt in hun agenda zetten.", "Vraag wie al een open dag of meeloopdag heeft gepland, en wanneer." Room 3 keeps its note. Closing the blocks by default is engine work.
- N5: applied as content. The last material is now "1 papiertje "Mijn volgende stap" per leerling, vooraf geprint", so the engine's comma list reads correctly.
- N6: applied with the existing `clueRetry` field, one per room (rooms 1 to 4, see the Cijfer sections).
- N10: applied. C2 is now "Je wilt Geneeskunde studeren. Daar is een numerus fixus. Tot en met wanneer meld je je aan?" (Rijksoverheid fixus page, re-read 7 Nov 2026: "Voor de studies geneeskunde, tandheelkunde, fysiotherapie, verloskunde en mondzorgkunde geldt een uitzondering", the one-institution rule for fixus programmes; roFixus). The question states the fixus itself, so the item does not depend on that page. B2 is unchanged.
- Re-checked with scripts: no pupil sentence over 20 words, no em or en dashes, no "beide" or "allebei" in question text, spec-compare 0 mismatches.

Revision 2 (ChatGPT check B, 7 Nov). Check B (`qa/checkB/route-18.md`, FAIL: 3 ERROR, 3 RISK) read the pre-revision version (commit 381cd69). I opened every cited source myself on 7 November 2026 and did not take the checker's wording as given. wetten.overheid.nl again showed only the table of contents (WebFetch) or an empty reply (curl), so the law is quoted from the Staatsblad acts that inserted the articles, with DUO and Rijksoverheid for the current rule. **Lock code unchanged: 4379. No answer key changed** (all 12 room answers, 4 digits, C1 to C4 and B1 to B4 re-derived: the new rule lines add no second defensible answer, because Lina is 18 from March, B2 says "Je bent 18", and the room 3 intro, C3 and B3 say havo or vwo).
- B1 (ERROR, room 3 r4 and teacher note exclude students from mbo; Wsf 5.11a): applied adjusted. The exclusion was already gone in Revision 1, but "Kom je van het mbo? Dan gelden soms ruimere regels." was vague and sat in a fragment line. The wider rule is for students with an mbo diploma only: Stb. 2023, 186 inserts art. 5.11a "Stoppen binnen twaalf maanden door mbo-gediplomeerden" ("de ho-student die eerder een opleiding in het beroepsonderwijs heeft afgerond", stop "uiterlijk op 31 augustus", no new ho studiefinanciering "vóór 1 februari van het daaropvolgende studiejaar"); DUO: "Hebt u een mbo-diploma? Dan zijn dit de voorwaarden vanaf studiejaar 2023-2024", and without an mbo diploma the ordinary "vóór 1 februari". New r7 "Heb je een mbo-diploma? Dan geldt een ruimere regel. Je studiefinanciering mag dan stoppen tot het einde van je eerste jaar. Kijk op DUO.nl voor de voorwaarden." The checker's "Deze regel geldt ook als je via het mbo naar het hbo gaat" is not used: r4 already says the rule applies to anyone who gets studiefinanciering for hbo or universiteit for the first time. Teacher detail Kamer 3 now gives the 5.11a dates and restart periods. Source rows stb2023186 / wsf511a added. URLs: https://zoek.officielebekendmakingen.nl/stb-2023-186.html ; https://duo.nl/particulier/opleiding-stoppen-of-wijzigen/stoppen-in-je-eerste-jaar.jsp
- B2 (ERROR, room 2 r4 too absolute): applied adjusted. r4 is now "Is het je eerste aanmelding en ben je te laat? Dan heb je geen recht meer op toelating. De opleiding kan je weigeren." The scope "eerste aanmelding" follows WHW 7.31d (Stb. 2013, 298: a first registration after 1 May may be refused) and Rijksoverheid ("Studenten die zich pas ná 1 mei voor het eerst aanmelden, kunnen door de opleiding geweigerd worden"; on-time registrants keep "recht op toelating tot een andere studie"). I kept "geen recht meer op toelating" against the checker's text, because both Rijksoverheid pages say exactly that ("Maar je hebt dan geen recht meer op toelating. De opleiding kan je weigeren.") and answer d of V2.3 rests on it. New r5 for the mbo: "Ben je nog geen 18? Dan gelden bij het mbo soms uitzonderingen. Vraag het de mbo-school." Stb. 2016, 362 (WEB 8.1.1c lid 3 onder c) limits the late-registration refusal ground to persons for whom "paragraaf 2a van de Leerplichtwet 1969 niet meer op hem van toepassing is"; the Rijksoverheid mbo page names no exception, so "soms" and "vraag het de school". The checker's "Bij het mbo gelden uitzonderingen" without a "who" was too vague for pupils. URLs: https://zoek.officielebekendmakingen.nl/stb-2013-298.html ; https://zoek.officielebekendmakingen.nl/stb-2016-362.html ; https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/hoger-onderwijs/aanmelden-opleiding-hogeschool-hbo-universiteit ; https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/middelbaar-beroepsonderwijs/aanmelden-mbo ; https://www.rijksoverheid.nl/onderwerpen/hoger-onderwijs/studiekeuze-en-toelating
- B3 (ERROR, teacher text: right to a studiekeuzecheck only for non-selecting programmes): applied. Rijksoverheid: "... hebben recht op een studiekeuzecheck voor opleidingen die niet selecteren."; Stb. 2013, 298, WHW 7.31b lid 5: the right does not apply to "de inschrijving voor een bacheloropleiding waarvoor een selectieprocedure is ingesteld". Rijksoverheid lists numerus fixus, small intensive programmes and programmes with extra requirements as selection groups. Teacher detail Kamer 2 and the Q&A "Wat is een studiekeuzecheck?" now scope the right to "een opleiding zonder selectie" / "die niet selecteert" and say it does not hold for a numerus fixus or other selection. Pupil text needed no change: V2.3 is about HBO-ICT, which has no selection (chat v5). URLs: https://www.rijksoverheid.nl/onderwerpen/hoger-onderwijs/studiekeuze-en-toelating ; https://zoek.officielebekendmakingen.nl/stb-2013-298.html
- B4 (RISK, V2.3 explanation: after 1 May the programme may still oblige a check): applied, shorter than proposed. The explanation already said "Je hebt ook geen recht meer op een studiekeuzecheck."; it now adds "De opleiding kan je wel verplichten om er een te doen." (WHW 7.31d in Stb. 2013, 298: "de betrokkene verplicht is deel te nemen aan de studiekeuzeactiviteiten"; Rijksoverheid: "Wel kan de opleiding deelname aan de studiekeuzecheck verplicht stellen"). Source stb2013298 added to V2.3. URL: https://zoek.officielebekendmakingen.nl/stb-2013-298.html
- B5 (RISK, 1 mei 2027 is a Saturday): applied. Calendar script: za 1 mei 2027, vr 30 april 2027. The rule stays "tot en met 1 mei". Room 2 remember adds "1 mei 2027 is een zaterdag. Meld je voor de zekerheid uiterlijk vrijdag 30 april aan."; the teacher Q&A is now "1 mei 2027 is een zaterdag. Wat betekent dat?" with "Ga uit van 1 mei. Meld je voor de zekerheid uiterlijk vrijdag 30 april aan. Reken niet op een latere dag." (the old question "Telt dan 3 mei?" planted 3 May); the teacher detail says a move to 3 May is not checked and not to count on it. No source read says anything about a weekend (Rijksoverheid deadline page, Studiekeuze123 aanmelden-studie). "Voor een nieuw schooljaar" notes that 1 May 2028 is a Monday. URLs: https://www.studiekeuze123.nl/aanmelden-studie ; https://www.rijksoverheid.nl/onderwerpen/hoger-onderwijs/vraag-en-antwoord/deadline-aanmelden-opleiding-hogeschool-of-universiteit
- B6 (RISK, fiction line calls real programme types made up): applied adjusted. The line is now "Verzonnen zijn de mensen, de stad, de scholen, het aantal plekken en de data. De soorten opleidingen bestaan echt. De regels zijn echt; bij elke uitleg staat de bron." The checker's "aangeboden opleidingscombinaties" is not B1. Checked: Software developer is a real mbo 4 programme (ROC Da Vinci College: "Niveau 4", "Crebonummer 25998") and Bewegingswetenschappen a real wo bachelor on Studiekeuze123. URLs: https://www.davinci.nl/opleidingen/mbo-opleidingen/opleidingen/software-developer-bol/ ; https://www.studiekeuze123.nl/studies/56950-bewegingswetenschappen-wo-bachelor

Layout polish (Revision 2):
- Room 3 r5 started "En als je ...", which reads as a fragment on its own rule card. Now "Nog een voorwaarde voor regel 3: je krijgt in hetzelfde studiejaar niet opnieuw studiefinanciering voor hbo of universiteit." The mbo sentence moved to r7 (see B1), placed last so r1 to r6 keep their ids and numbers. Every rule line in rooms 2 and 3 now reads on its own.
- Printed slip "Mijn volgende stap" (engine, all lessons with a slip): labels 12 pt, choices, hints and footer 11 pt (were 10.5, 8.5 and 9 pt), title 16 pt; each field is one row with its first writing line 10.5 mm high (was 7.5 mm), extra lines 10.5 mm; a long hint (field 3) goes on its own row under the date line instead of wrapping beside the label. Still 2 slips per A4 with a cut line; measured at A4 width about 8 mm of each 133 mm half stays free and nothing is clipped. Slip text unchanged.
- Re-checked with scripts after all changes: no pupil sentence over 20 words, no em or en dashes, spec-compare 0 mismatches.

Revision 1 (7 Nov), after fact check A (`content_new/factcheck_A_route-18.md`, PASS WITH FIXES, 0 ERROR, 7 RISK) and the persona gate (`qa/gate_route18_personas.md`, READY WITH FIXES). Each check A item was re-verified where I could open the source; law texts I could not open (wetten.overheid.nl gave only the table of contents or an empty reply) are cited as "read by check A". **Lock code unchanged: 4379** (digits re-derived: 4 programmes, 15 min 12 = 3, September to March = 7 in Ravi's what-if, mbo meeloopdag on 9 March).

Fact check A:
- A1 (RISK, room 3 r4 excluded students from mbo): applied. My own earlier DUO read already listed mbo routes, so the exclusion was mine. r4 and new r5 now give the two conditions of Wsf 5.10 (first studiefinanciering for hbo or universiteit; none again in the same study year) and add "Kom je van het mbo? Dan gelden soms ruimere regels." (DUO: mbo graduates, "tot het einde van het 1e studiejaar in het hbo"). Teacher detail and the V3.2 note no longer say "van havo of vwo". Old r5 is now r6. Answers unchanged.
- A2 (RISK, WHW 7.28 reference): applied. Source table row roDiplomas now cites WHW 7.24, 7.28 lid 1a and lid 2, 7.29 and 7.8 lid 5 (read by check A); Onzeker says the propedeuse is no longer in 7.28 lid 1 and the Ratho was not opened.
- A3 (RISK, WEB 8.0.1, 8.1.1c, Wsf 5.10 "not read"): applied, attributed to check A. Source table rows web801 and wsf510 added; Onzeker rewritten. The kwalificatieplicht point is now sourced (WEB 8.1.1c lid 3 onder c; Rijksoverheid leerplicht page, both via check A); the teacher Q&A uses it.
- A4 (RISK, V2.3 explanation "Na 1 mei kun je je nog aanmelden"): applied adjusted. Now "Bij een aantal opleidingen kun je je na 1 mei nog aanmelden.", the Rijksoverheid wording check A quotes ("Bij een aantal opleidingen"), not check A's "Bij veel", which no source says. Check A's "Soms moet je dan eerst een studiekeuzecheck doen" is in the teacher detail only (WHW 7.31d), to keep the explanation at four short sentences.
- A5 (RISK, "Studiejaar: begint op 1 september"): applied. Gloss now "bij hbo en universiteit begint dat op 1 september"; the mbo study year (1 August) is in the teacher detail.
- A6 (RISK, negative bsa can extend to programmes with the same propedeuse): applied in the teacher detail (WHW 7.8b lid 3, check A). V3.1 item d stays right.
- A7 (RISK, DUO "Hoelang recht" date): rejected as stated. I re-fetched the page twice on 7 Nov 2026 and it shows "Laatste update was op 05 november 2026"; check A saw 20 October 2026. Both dates are now in the source table and Onzeker.
- Extra, from check A's verified list: Studiekeuze123 collegegeld wording differs between my fetch ("Meestal") and check A ("soms"). The teacher detail now uses "soms".

Persona gate, top 10:
1. T1 (conditional BLOCKER, slip must be printable): applied. Engine fit 1 and 2 mark a teacher-screen print of the slip and the slip lines on the end screen as NEEDED (coordinator will have it built). Materials: "Print de papiertjes vóór de les: 1 per leerling."
2. D1 (SHOULD, story lean): applied. Ravi no longer quits: w4/w5 "Ik ga eerst praten met mijn studieadviseur. Misschien maak ik het jaar gewoon af."; V3.3 is a what-if ("Ravi twijfelt, maar hij stopt niet."), digit clue "stel dat Ravi in maart stopt". Room 4: each of the three pages now has a meeloopdag (mbo 9, hbo 10, universiteit 11 March) and Lina's agenda rules out 10 (toets) and 11 (excursie), so V4.2 depends on the agenda only; explanation ends "Welke dag past, hangt van je agenda af." Care point 2 adds "In kamer 3 stopt Lina. Zeg erbij dat twijfelen bij elke route kan." Digit 4 stays 9.
3. T2 (SHOULD, timing): applied as proposed: Uitleg en inloggen 4, Startcheck 2, Escape 26, stop at minute 32, Stop en eindcheck 3, Nabespreken 4, Mijn volgende stap 5, Reserve 1 (total 45). `minutes: 26`.
4. P1 (SHOULD, room 3 density): applied. Intro cut to 5 sentences (the two mbo sentences moved to one sourced line in the plain box, see D2). Plain box adds "Negatief bsa" and "Gift". Doc 3a From "Overzicht van de opleiding (verzonnen)". r4 split into r4 and r5, each sentence at most 20 words. The gate's own split kept "alleen als je van de havo of het vwo kwam"; not used, because check A showed that condition is wrong.
5. P9 and D5 (SHOULD, slip): applied. Six fields with a fallback search date and "Toestemming van school regel ik bij: mijn mentor / mijn decaan" (the old "Wie vertel ik het" folded into it); one question instead of three. `plan.then[2]` now "zet ik de aanmelddata die voor mij gelden in mijn agenda". V4.3 explanation adds "Mis je les? Vraag dan ook toestemming aan je school." (the gate's "Zet beide" is reworded to "Zet die twee dingen", because "beide" forces keepOrder in the engine).
6. P2 and P3 (SHOULD, V2.1 give-away and V2.2 situ): applied. "Tot en met" in all options of V2.1 and V2.2, in r1 to r3 of room 2, in C2/B2 and the answer sheet; gloss "Tot en met 1 mei: 1 mei telt nog mee." replaces "Uiterlijk". Same day as "uiterlijk (op)" in the sources. V2.1 option c is now "Tot en met 1 september 2027" (not 31 August, which Studiekeuze123's timeline uses for switching and could confuse). V2.2 has its own situ "Software developer is een mbo-opleiding. HBO-ICT is een hbo-opleiding."; nudge and hint rewritten so they do not repeat the situ.
7. P4 (SHOULD, six hints give the answer): applied, with the gate's texts: V1.2, V1.3, V2.1, V3.3, V4.1, V4.3. Also rewrote two hints the gate did not list but that gave a step away: V2.2 ("Het mbo heeft een eerdere datum dan het hbo") and V3.2 ("Vergelijk 1 januari met 1 februari"); V4.2's hint now points to the agenda days.
8. T4 and T6 (SHOULD, teacher notes): applied. Per room a one-sentence Kern (`teacherNote`), a "Dit wordt vaak gevraagd" block with six Q&A (incl. the 1 May Saturday, marked "niet gecontroleerd"), and the long text in a closed block (new field `teacherDetail`, Engine fit 5).
9. T3 (SHOULD, Nabespreken): applied ("Vraag welke kamer het lastigst was en begin daar.").
10. D2, D3, V5 (SHOULD): D2 applied adjusted: one sourced mbo line in the plain box ("ook voor het mbo heeft DUO een regel voor stoppen in jaar 1 ... eigen voorwaarden"), not in the intro (gate P1 asked for a short intro), and no mbo question (conditions differ per mbo route and the mbo studieadvies has only check A's reading; see Onzeker). The gate's "Vraag ze aan je mbo-school" is not used: DUO, not the school, runs the regulation. D3 applied: audience and lesson window at the top of the spec and as the teacher screen's first line; the gate's "havo 4: alleen kamer 1 en 4" is not offered because the engine cannot skip rooms. V5 applied: V3.3 explanation ends "Haalt hij geen diploma, dan betaalt hij de basisbeurs meestal terug." (DUO gift page); room 3 remember adds "Een lening betaal je altijd terug."

Persona gate, other items:
- X1 (SHOULD, C3/B3 copy V3.2): applied. Right option of C3 and B3 is now "Nee, die hoef je niet terug te betalen. Je studiefinanciering stopte vóór februari." V3.2 keeps "Nee, want haar studiefinanciering stopt voor 1 februari".
- V1 (SHOULD, answers copy the rules): applied adjusted for V1.3 ("Ja. Na haar propedeuse kan ze naar de universiteit, maar waarschijnlijk met extra vakken."). Not applied for V2.3: the switching variant needs a new rule in the box, and "eerste aanmelding" keeps the answer single; the gate allows keeping it.
- V2 (SHOULD, "Extra eisen: geen" at universities): applied adjusted. The map note says "In het echt hebben sommige opleidingen extra eisen, zoals een profiel. Kijk altijd op de pagina van de opleiding." The gate's "bijna elke universitaire opleiding" is not used: no source read gives a share.
- P6 (NICE): applied (column "Extra eisen" removed; r5 says no programme on the map has one).
- P5 (NICE, strawman oom): applied ("Met vwo is hbo zonde."; options a and b reworded).
- P8 (NICE, fiction notices): applied (map, chat and page notes removed; start line, From and site lines keep "verzonnen").
- P10 (NICE): applied (V1.3 explanation shortened).
- P11 (NICE, answer length): applied for V1.3 b, V3.2 a and b, V3.3 b (wrong options carry a reason). Check the fixed shuffle in the data file so no letter repeats more than twice.
- P7 (NICE, digit sums): rejected. The self-contained clue is G4 fix 1; a clue that asks "how many did you tap" depends on the pupil's earlier taps and on engine state.
- V3 (NICE, optional V3.4 on the voortgang table): rejected for now; the engine has no optional question outside the lock (Engine fit 8). The table stays as context for the bsa question.
- V4 (NICE, Open Universiteit): rejected; not checked on any page, and the gate itself marks it unchecked.
- V6 (NICE, 1 May Saturday): applied in the teacher Q&A.
- V7, V8 (NICE, vwo 6): applied as care point 5.
- D4 (NICE, LOB file): applied in care point 1. D6 (NICE): applied ("Kijk bij een test wie hem heeft gemaakt en wat ze ermee willen."; the claim about institution tests is gone). D7 (NICE): applied as care point 4. D8 (NICE): applied as the teacher screen's second line and an owner line under "Voor een nieuw schooljaar".
- T5 (NICE): applied in the Escape row. T7 (NICE): applied (discuss kamer 2, nabespreken question 2). T9 (NICE): applied in materials. T10 (NICE): applied in the Uitleg row. T8 (NICE, digits card): listed as optional Engine fit 7, not required.
- Re-checked after all changes with a script: no pupil sentence over 20 words, no em or en dashes, no "beide"/"allebei" in options or explanations.

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
