# Escape "Werkproef 1" (content spec, ID voorstel: ESC-WERK-1)

Pilot van de Werkproef-game uit `content_new/werkproef-design.md` (section "Pilot scope" / "First pilot"). Revision 3, 7 november 2026. Gecontroleerd op 7 november 2026; validUntil: 31 juli 2027 (the end of school year 2026-2027; the rules have no set end date, and every "kans op werk" figure carries its read date in pupil text, in the reveal's source line "KiesMBO en Studiekeuze123, geraadpleegd op 7 november 2026."; scheduled re-checks in December 2026, after SBB's November baankans measurement [kmUitleg], and after every new ROA or Studiekeuze123 release). Every fact in pupil and teacher text comes from the source table at the end; every page in it was opened on 7 November 2026. Nothing is from memory. Status: **pilot, not for release: every task still needs practitioner verification** (section "Praktijkverificatie"; forms ready to send in `outreach/practitioners/`).

Lead: "Proef vier soorten werk. Pas na elke taak zie je welk beroep het is en hoe je er komt."

Doelgroep en moment: havo 4 en vwo 4 en 5 (15 tot 17 jaar), LOB- of mentorles. Havo 5 en vwo 6 only if there is room before Route 18; otherwise those exam years do Route 18 (deadline 15 januari). Suggested order: Werkproef 1 in the week of 30 November 2026 for havo 4 and vwo 4 and 5; Route 18 in the week of 7 or 14 December 2026 for havo 5 and vwo 6. Lesduur 45 minuten, escape 22 minuten, stop op minuut 29 (justified under "Timing").

Format as Route 18 (`content_new/route-18.md`): four rooms, two questions per room (design: "one situation, one or two documents, a rule card of at most 5 lines, two questions"), one retry with a nudge that points to a line, a hint that costs 30 seconds, one digit per room, one lock of four digits, then the end check, the end screen and the plan. Pupil text is Dutch B1, sentences at most 20 words, no em or en dashes. All four rooms build on the existing engine (`kamers-engine/README.md`, v3) plus six optional lesson-data features added in Revision 2 (default off, other lessons unchanged; section "Engine fit"); no new log event is needed. Data file: `kamers-engine/lessons/werkproef-1.js` (product `escape18-werkproef-1`).

Lessons carried over from the Route 18 checks and this lesson's own checks (fact check A, persona gate):
- **No absolute rule where the source has an exception.** Each exception is on the rule card or ruled out in the situation: the cao exception for proeftijd (now stated with its scope from BW 7:652 lid 7, and ruled out by "In de cao staat niets over proeftijd"), an extension with the same employer and an opvolgend werkgever ("Robin werkte nog nooit bij deze winkel, ook niet via een uitzendbureau"). Food safety is never stated as a yes/no: no question asks whether a guest "mag" eat something.
- **Exactly one defensible answer.** Every distractor was checked against the documents and the rule card. Removed traps: the walnut salad, `> 15` as a hidden second answer, sums where Sam's wrong units digit matches the right one.
- **Hints point, they do not answer.** No hint names an option, gives the count that is the digit, or states the digit (Revision 1 fixed 3.1, 4.1 and 3.2).
- **No story lean.** No level is a "right answer" anywhere; every reveal lists mbo, hbo, universiteit in that order; the teacher notes no longer label a task with a level.
- **No unsourced claims.** Labour-market lines are quoted with their source, and each says what it measures. Where a source says nothing (cross contamination, which word a school uses for "inwisselen"), the lesson says nothing and the point goes to the practitioner form.
- **Blind is blind.** The start check no longer names any job of the rooms (Revision 1, gate D1).

Why this lesson (design, from `research/studiekeuze_tools.md`): information and interest tests are saturated; pupils rate real experience highest; only intensive, connected activity is linked to less switching; like2be raised occupational knowledge only with lessons around it and had no effect on stereotypes. So Werkproef is not a test. Pupils do a slice of real work, rate it on paper, and leave with one dated step that leads into Route 18. Expect small effects; claim nothing about stereotypes until measured.

**Blind proeven.** The room titles are the action only ("Check een menu op allergenen"), never a job title or level. The sector is visible (a restaurant, a cinema app, groep 5, a bike shop): pupils taste the task without the job title and the level, and the reveal then names the job and the routes. The job, the routes (mbo, hbo, universiteit; every card shows at least two levels) and the "kans op werk" lines appear only after the room, in `reveal` (Revision 2: three short lines, the route first, on one card above the fold), which the engine shows on the digit screen after the digit is found and again on the end screen. Before the digit field opens, the pair taps "Klaar, ik heb omcirkeld" (`clueGate`), so the ratings on paper are given before the reveal; the start screen says the same under "Zo werkt het" (`rulesExtra`). Pairs on paper read the same lines on the printed Beroepenblad, after the digit. The start check asks about other jobs (verpleegkundige, accountant, boswachter, doktersassistent, apothekersassistent, werktuigbouwkundige), so nothing names a room job before the room. On the board the teacher shows only the engine's Projectiemodus (timer, class code, the four task titles); the teacher screen below it, which shows the reveals as "Kern", stays on the teacher's own screen. The first guess (proefkaart item 1) is circled from the four titles before the first room opens.

Fiction line (`fictional`, shown once at the start):
"Verzonnen zijn de mensen, de winkel, het restaurant, de app en alle papieren. Het werk en de opleidingen bestaan echt. De regels zijn echt; bij elke uitleg staat de bron."

Neutrality line (teacher screen, `teacher.audience`):
"Elke uitkomst zet minstens twee niveaus naast elkaar: mbo, hbo of universiteit. Wat een site niet laat zien, laten we weg. De volgorde zegt niets over goed of beter."

Fictional on purpose: the guest, the restaurant, the menu and the bouillon label; the cinema app, its code and the tester's report; Sam and the worksheet; the bike shop in Zeestad (the city of ESC-MAAND, ESC-KAMER and Route 18), Robin and the contract; Kim and Alex in the checks. No business has a name, so nothing can point to a real company. Names are gender-neutral (Sam, Robin, Kim, Alex) and no pronoun is used for them; the pupil is always "je" or "jij"; the worker in a task is never a named person. Real on purpose: the programme names and crebo numbers (KiesMBO), the hbo and wo study names (Studiekeuze123), the allergen rules (EU 1169/2011, NVWA) and the proeftijd rules (BW 7:652, Rijksoverheid, Ondernemersplein).

Code: **3231** (room digits 3, 2, 3, 1; not used by any other lesson in content_new: 1725, 2073, 2348, 2824, 3022, 3521, 4379; `verzekerd.md` lists 3231 as taken). Teacher screen: only inside the closed Antwoordblad, never on the projected part.

## Leerdoelen

1. De leerling kan bij vier beroepen zeggen via welke opleidingen op het mbo, het hbo en de universiteit je daar kunt komen.
2. De leerling kan van vier beroepen zeggen wat je op een werkdag doet, ook een minder leuke kant.
3. De leerling kiest één werk of opleiding om beter te leren kennen en zet er een stap met een datum bij.

---

## Timing

Stop at minute 29, not 28 as in the design pilot row. The design's row (4 intro, 2 start check, 22 rooms, stop at 28, 2 end check, 7 proefkaart, 6 next step, 2 reserve) has no minute for the first guess, and the Route 18 gate (T2) found that 4 minutes is already the realistic time for login alone and that stop plus end check needs 3 minutes. So: intro, login and first guess 5 (the guess is circled on paper while devices start and the teacher reads the titles), start check 2, rooms 22 (minute 7 to 29), stop and end check 3, proefkaart and debrief 6, Mijn volgende stap 6, reserve 1. Total 45. If the start runs late, the minutes come out of the debrief, not out of the rooms (plan row text).

Room time estimate (desk estimate, plus or minus 30 percent): reading intro and documents about 1 minute, two questions about 2.5 minutes, circling two choices on paper 0.25, digit 0.5, reading the reveal 0.5 (Revision 2: 60 to 72 words in three lines, plus a 23-word note on what the numbers measure): about 4.75 minutes per room, 19 to 20 for four. A vwo 5 pair may finish in 12 to 14 minutes (gate V1); the engine has no optional questions, so four bonus questions are in the teacher FAQ for the teacher to read out. The playtest (week of 23 November) times each room with `answer.sec` and logs which pairs reach room 4 (`room` event; gate D7). If many pairs miss room 4, swap rooms 3 and 4 (code then 3213) in a later revision.

---

## Kamer 1. Check een menu op allergenen

Grounding, the official task lines this task is built on: "Je stelt de menukaart op" and "Daarbij let je ook op de wettelijke regels en voorschriften die gelden" (KiesMBO, Leidinggevende keuken) [kmLeidKeuken]; "Je houdt rekening met dieetwensen" (KiesMBO, Zelfstandig werkend kok) [kmZwKok]; "Bewaken overzicht tijdens drukte" (Studiekeuze123, Chef-kok) [skChefkok]. Rule: EU Regulation 1169/2011 Annex II lists 14 allergens; information is mandatory, also for food that is not pre-packed; the NVWA explains and enforces it [euAnnexII, nvwa14, nvwaOnverpakt].

**Intro:** "Het is vrijdag, 17.30 uur. Een gast belt het restaurant en wil vanavond komen eten. De gast is allergisch voor pinda's en voor selderij. Jij zoekt uit in welke gerechten die zitten."

### Document 1a: menukaart (type: table with head, id: menu)
Title: "Menukaart van vanavond". From: "Restaurant (verzonnen)". Head: "Gerecht" | "Wat erin zit"
- m1 "Tomatensoep" | "tomaat, ui, knolselderij, room"
- m2 "Saté van kip" | "kip, pindasaus, rijst"
- m3 "Salade" | "sla, komkommer, appel, mosterddressing"
- m4 "Stoofpot" | "rundvlees, wortel, ui, runderbouillon"
- m5 "Vispakketje" | "kabeljauw, prei, citroen, boter"

### Document 1b: etiket (type: table, id: etiket)
Title: "Etiket: runderbouillon". From: "Leverancier (verzonnen etiket)".
- e1 "Ingrediënten" | "water, zout, ui, selderij, peterselie, peper"
- e2 "Bewaren" | "droog en koel"

**Moeilijke woorden (plain):** "Allergisch: je lichaam reageert slecht op iets in eten. Allergeen: een stof in eten waar sommige mensen allergisch voor zijn. NVWA: Nederlandse Voedsel- en Warenautoriteit. Die dienst van de overheid controleert of restaurants de regels volgen. Etiket: het papier op een product. Daarop staat wat erin zit. Leverancier: het bedrijf dat de keuken producten levert."

(Data: the first four sentences, up to "de regels volgen.", are the `plain` of `menu`; the rest is the `plain` of `etiket`. The NVWA gloss rests on the page header "Nederlandse Voedsel- en Warenautoriteit / Ministerie van Landbouw, Visserij, Voedselzekerheid en Natuur" and on "voor onze inspecteurs" [nvwa14, nvwaOnverpakt].)

Design note: the menu holds other allergens on purpose (room and boter are melk, mosterd, kabeljauw is vis), so pupils apply the guest's two allergens and do not tick everything on the list. The menu now says "runderbouillon", the same word as the label (fact check A), so the link between dish and label is on paper. The rule card no longer says "zoals bouillon" (gate V2): the pupil has to think of the label. The design's walnut salad stays out: "Ja, ze mag de salade" would be a food-safety yes that no source supports.

**Rule box (`rules`, title "Regels (EU-lijst, uitleg NVWA)"):**
- r1 "Een restaurant moet gasten informatie geven over 14 allergenen. Dat geldt ook voor eten dat niet verpakt is."
- r2 "Pinda's en selderij staan op die lijst. Selderij is ook knolselderij en bladselderij."
- r3 "Zit er een allergeen in een product dat je gebruikt? Dan telt dat ook. Lees het etiket."

Sources of the rule lines: r1 NVWA "Over 14 allergenen die zijn opgenomen op een EU-lijst (verordening 1169/2011) moet u altijd informatie geven aan uw klanten. Dat geldt voor zowel voorverpakte producten als voor onverpakte levensmiddelen." [nvwa14]; Annex II with Article 44(1)(a) [euAnnexII]. r2 Annex II "5. Aardnoten en producten op basis van aardnoten." and "9. Selderij en producten op basis van selderij."; NVWA "Dit gaat om zowel selderijzaad, knolselderij als bladselderij." [euAnnexII, nvwa14]. r3 NVWA "U moet ook informeren over ingrediënten die van allergenen zijn afgeleid", with "kruiden en specerijen met de allergenen selderij of mosterd(zaad)" [nvwa14]. The title now says the rules are EU rules that the NVWA explains (fact check A).

### Vraag 1.1 (id: gerechten, kind: multi, docs: menu, etiket)
- Prompt: "In welke gerechten zit pinda of selderij?"
- Legend: "Tik alle gerechten aan."
- Items (right answers last; the data file shows them in menu order c, d, a, e, b):
  - a "Salade"
  - b "Vispakketje"
  - c "Tomatensoep"
  - d "Saté van kip"
  - e "Stoofpot"
- Correct: c, d, e
- Retry pointer: rules r2, r3.
- Nudge: "Lees regel 2 en 3. Kijk bij elk gerecht ook naar wat er in een product zit."
- Hint (30 s): "Staat alles wat in een gerecht zit op de menukaart?"
- Explanation: "Pinda zit in de pindasaus van de saté. In de tomatensoep zit knolselderij, en dat is ook selderij. In de stoofpot zit runderbouillon met selderij. Dat zie je alleen op het etiket."
- Sources: nvwa14, euAnnexII
- Note: one defensible answer. Knolselderij is selderij by r2; the runderbouillon's selderij counts by r3; mosterd (salade), vis and melk are allergens but not this guest's; peterselie is not selderij. The question asks only where the allergens are, never what the guest may eat. The pointer marks r2 and r3, not the label line, so it does not hand over the stoofpot.

### Vraag 1.2 (id: regel, kind: pick, docs: none)
- Situ: "Jij neemt de telefoon op in de keuken. De gast vraagt: "Moet het restaurant mij dit eigenlijk vertellen? Jullie eten is toch niet verpakt.""
- Prompt: "Wat klopt volgens de regels?"
- Options (right answer last; data file order a, c, b, d, so the right answer is on place 4):
  - a "Nee. Dat moet alleen bij eten in een verpakking."
  - b "Nee. Een gast met een allergie zoekt het zelf uit."
  - c "Ja, maar alleen over pinda's. Selderij staat niet op de lijst."
  - d "Ja. Ook vers eten uit de keuken telt mee."
- Correct: d
- Retry pointer: rule r1.
- Nudge: "Lees regel 1. Wat staat er over eten dat niet verpakt is?"
- Hint: "Denk aan de soep en de saté van vanavond. Zijn die verpakt?"
- Explanation: "Een restaurant moet informatie geven over 14 allergenen. Dat geldt ook voor eten dat niet verpakt is. Pinda's en selderij staan op die lijst. Het restaurant kan het op de menukaart zetten, of een medewerker vertelt het."
- Sources: nvwa14, nvwaOnverpakt, euAnnexII
- Note: two options now start with "Ja" and the right one is the shortest (9, 10, 11 and 8 words), so neither the only "Ja" nor length gives it away (gate P9, X2). Option c is ruled out by r2. The last explanation sentence is the NVWA's two ways; the three conditions for oral information are in the teacher detail.

### Cijfer kamer 1
- Clue: "Het 1e cijfer van het slot: in hoeveel gerechten zit pinda of selderij?"
- Digit: **3** (tomatensoep, saté, stoofpot; `clueDocs: ['menu', 'etiket', 'rules']`, so the clue can be worked out on the digit screen alone).
- Reveal (`reveal.lines`):
  1. "Kok word je op het mbo, bijvoorbeeld met de opleiding Gespecialiseerd kok. Leidinggeven in hotels en restaurants leer je op het hbo, bij Hotel management. Studiekeuze123 koppelt geen hbo- of universitaire studie aan chef-kok."
  2. "KiesMBO over Gespecialiseerd kok: "Er zijn heel veel vacatures die passen bij deze opleiding". Studiekeuze123 over Hotel management: "56% vond een baan binnen het vakgebied van de studie"."
  3. "Minder leuk: wisselende werktijden."
- Reveal source (`reveal.src`): "KiesMBO en Studiekeuze123, geraadpleegd op 7 november 2026."

Sources of the reveal: kmGespKok (crebo 27064, niveau 4, "Met deze opleiding kun je doorstromen naar het hbo", "Baankans (op dit moment) 10 ... Er zijn heel veel vacatures die passen bij deze opleiding.", "Je vindt het niet erg om op wisselende tijden te werken."); skHotel ("Je leert hoe je binnen deze organisaties leiding geeft en adviseert", with "hotels, restaurants, cateringbedrijven"; "56% vond een baan binnen het vakgebied van de studie"; alumni "al anderhalf jaar klaar"); skChefkok ("Oeps! Je hebt een beroep gevonden waar we geen passende studie aan kunnen koppelen"; link to "de mbo-4 opleiding Gespecialiseerd kok"). Revision 2 (check B 7, gate G4 S2): three lines, the route first; the university line now says exactly what the page shows ("Studiekeuze123 koppelt geen hbo- of universitaire studie aan chef-kok"); each measure is named by its source ("KiesMBO over ...", "Studiekeuze123 over ..."), and the lesson's `revealNote` says once per card what the numbers measure. 66 words.

---

## Kamer 2. Zoek de fout in een programma

Grounding: "Je test de programmatuur" (KiesMBO, Software developer) [kmSd]; "Schrijven en testen van code" and "Oplossen van fouten of storingen" (Studiekeuze123, Softwareontwikkelaar) [skSoftw].

**Intro:** "Een bioscoop heeft een app. De app zegt of je naar een film mag. Bij deze film mag je kijken als je 16 jaar of ouder bent. Een tester meldt een fout. Jij zoekt waar die zit."

### Document 2a: code (type: table with head, id: code)
Title: "Code van de app". From: "Bioscoop (verzonnen app)". Head: "Regel" | "Code"
- c1 "1" | "lees de leeftijd"
- c2 "2" | "als leeftijd > 16: toon "Welkom""
- c3 "3" | "anders: toon "Je bent te jong""

Note: "Deze code is vereenvoudigd en in het Nederlands geschreven, zodat iedereen hem kan lezen."

### Document 2b: testverslag (type: table with head, id: test)
Title: "Testverslag". From: "Tester". Head: "Test" | "Leeftijd" | "Moet zijn" | "App zegt"
- t1 "A" | "15" | "Je bent te jong" | "Je bent te jong"
- t2 "B" | "16" | "Welkom" | "Je bent te jong"
- t3 "C" | "17" | "Welkom" | "Welkom"

**Moeilijke woorden (plain):** "Code: tekst die een computer vertelt wat hij moet doen. De computer leest de code regel voor regel. Toon: laat zien op het scherm. Anders: als dat niet zo is. Tester: iemand die een app uitprobeert en fouten zoekt."

(Data: up to "als dat niet zo is." is the `plain` of `code`; the last sentence is the `plain` of `test`. "Anders" is new: the havo 4 reader of the gate stumbled on it.)

Design note: three code lines, Dutch words, no indentation, so a pupil who never coded can trace it. The tests are named A, B, C so "regel 2" (code) and "test B" never mix. The cinema's age rule is part of the fictional situation, not a claim about Dutch film law. Engine: there is no `code` document type; the design's fallback, a `table` with head "Regel" and "Code", is used.

**Rule box (`rules`, title "Wat betekenen de tekens?"):**
- r1 "Het teken > betekent: groter dan. Het teken < betekent: kleiner dan. Het teken = betekent: gelijk aan. Het teken >= betekent: groter dan of gelijk aan."

(One line, so the engine shows no "Regel 1:" number that could be confused with the code lines.)

### Vraag 2.1 (id: regel, kind: pick, docs: code, test)
- Prompt: "In welke regel van de code zit de fout?"
- Options (right answer last; data file order a, c, b, so the screen shows Regel 1, 2, 3):
  - a "Regel 1"
  - b "Regel 3"
  - c "Regel 2"
- Correct: c
- Retry pointer: test t2.
- Nudge: "Kijk naar test B. Bij welke leeftijd gaat het fout? Welke regel van de code vergelijkt de leeftijd?"
- Hint: "Doe alsof je de computer bent. Lees de code regel voor regel met leeftijd 16."
- Explanation: "Bij leeftijd 16 moet de app "Welkom" zeggen. In regel 2 staat leeftijd > 16. Maar 16 is niet groter dan 16. Daarom zegt de app "Je bent te jong"."
- Sources: none. None line: "Dit haal je uit de code en het testverslag. Er is geen regel van buiten nodig."
- Note: regel 3 is not a second answer: it only runs when regel 2 says no. The natural order 1, 2, 3 is kept (gate X2 accepts it).

### Vraag 2.2 (id: fix, kind: pick, docs: code, test)
- Prompt: "Wat moet er in regel 2 staan, zodat alle drie de tests goed gaan?"
- Options (right answer last; data file order a, c, d, b, so the right answer is on place 3):
  - a "als leeftijd < 16: toon "Welkom""
  - b "als leeftijd > 17: toon "Welkom""
  - c "als leeftijd = 16: toon "Welkom""
  - d "als leeftijd >= 16: toon "Welkom""
- Correct: d
- Retry pointer: rule r1.
- Nudge: "Probeer elke optie met 15, 16 en 17. Welke geeft drie keer het goede antwoord?"
- Hint: "Lees in het vak met de tekens wat elk teken betekent."
- Explanation: "Met leeftijd >= 16 mag wie 16 is ook kijken. Dan gaan alle drie de tests goed: 15 is te jong, 16 en 17 zijn welkom. Met = 16 zou 17 te jong zijn."
- Sources: none. None line: "Dit haal je uit de code en het testverslag. Er is geen regel van buiten nodig."
- Note: checked by hand: `< 16` fails A, B and C; `> 17` fails B and C; `= 16` fails C; `>= 16` passes all three. `> 15` is deliberately absent: for whole ages it would be a second right answer.

### Cijfer kamer 2
- Clue: "Het 2e cijfer van het slot: in welke regel van de code zat de fout?"
- Digit: **2** (`clueDocs: ['code', 'test']`).
- Reveal (`reveal.lines`):
  1. "Softwareontwikkelaar word je via het mbo (Software developer), het hbo (HBO-ICT) of de universiteit (Informatica)."
  2. "KiesMBO over Software developer: "Er zijn vacatures die passen bij deze opleiding". Van de studenten die de bol-opleiding afrondden, ging 50% daarna naar het hbo. Studiekeuze123 over HBO-ICT: "80% vond een baan binnen het vakgebied van de studie"."
  3. "Minder leuk: opschrijven wat je deed, en storingen oplossen."
- Reveal source (`reveal.src`): "KiesMBO en Studiekeuze123, geraadpleegd op 7 november 2026."

Sources of the reveal: kmSd (crebo 25998, niveau 4; "Baankans (op dit moment) 7 ... Er zijn vacatures die passen bij deze opleiding, al gaan de meeste mensen na hun diploma een vervolgopleiding doen om een betere baan te kunnen vinden."; "Doorstroom naar hbo 50%", "Landelijk percentage na het behalen van een mbo-diploma in het afgelopen schooljaar", shown under bol); skIct ("Softwareontwikkelaars 52%"; "80% vond een baan binnen het vakgebied van de studie"); skInfWo (wo bachelor exists, no figures). Minder leuke kant: skSoftw "Documenteren van je werk en resultaten" and "Oplossen van fouten of storingen". Revision 2 (check B 3): the paraphrase "De meesten leren daarna verder, voor een betere baan" is replaced by the measured figure. Revision 3 (check B round 2, 1): KiesMBO shows the 50% under bol only, so the line now says "Van de studenten die de bol-opleiding afrondden, ging 50% daarna naar het hbo." 62 words.

---

## Kamer 3. Kijk werk na en vind het patroon

Grounding: "Begeleiden kinderen die extra aandacht nodig hebben" and "Administratie voortgang leerlingen" (Studiekeuze123, Leraar basisonderwijs) [skLeraar]; pabo: "Omdat geen kind hetzelfde is, leer je tijdens de studie zoveel mogelijk rekening te houden met individuele mogelijkheden en beperkingen" [skPabo].

**Intro:** "Je kijkt het rekenwerk na van Sam uit groep 5. Dit zijn sommen voor groep 5. Het gaat niet om de som, maar om de fout van Sam. Sam maakte vijf minsommen. Morgen wil je Sam helpen."

### Document 3: werkblad (type: table with head, id: werkblad)
Title: "Werkblad van Sam: minsommen". From: "Groep 5 (verzonnen)". Head: "Som" | "Antwoord van Sam"
- s1 "52 - 18" | "46"
- s2 "74 - 31" | "43"
- s3 "73 - 49" | "36"
- s4 "86 - 42" | "44"
- s5 "62 - 39" | "37"

**Moeilijke woorden (plain):** "Minsom: een som waarbij je aftrekt. Eenheden: het laatste cijfer van een getal. Bij 52 is dat de 2. Tientallen: het cijfer ervoor. Bij 52 is dat de 5."

Design note: the intro now frames the sums (gate P2): a 16-year-old is told that the task is the child's error, not the sum. Arithmetic: 52 - 18 = 34 (Sam 46: 8 - 2 = 6, 5 - 1 = 4); 73 - 49 = 24 (Sam 36: 9 - 3 = 6, 7 - 4 = 3); 62 - 39 = 23 (Sam 37: 9 - 2 = 7, 6 - 3 = 3); 74 - 31 = 43; 86 - 42 = 44. The right sums need no inwisselen. The minus sign is a hyphen-minus.

**Rule box (`rules`, title "Regels"):**
- r1 "Is bij de eenheden het eerste cijfer kleiner dan het tweede? Dan moet je inwisselen: je ruilt 1 tiental voor 10 eenheden."
- r2 "Voorbeeld: 41 - 15. Bij de eenheden kan 1 - 5 niet. Je wisselt in en rekent 11 - 5 = 6. Er blijven 3 tientallen over: 3 - 1 = 2. Het antwoord is 26."

Note: r1 is shorter (gate P2). "Inwisselen" and the worked example are didactic wording, not from an official page; the gate's simulated teacher expects some schools to say "lenen" or "splitsen" (L1). That is not in pupil text until a teacher confirms it; it is the first extra question on the leerkracht form.

### Vraag 3.1 (id: fout, kind: multi, docs: werkblad)
- Prompt: "Welke sommen heeft Sam fout?"
- Legend: "Tik alle foute sommen aan."
- Items (right answers last; data file shows worksheet order c, a, d, b, e):
  - a "74 - 31 = 43"
  - b "86 - 42 = 44"
  - c "52 - 18 = 46"
  - d "73 - 49 = 36"
  - e "62 - 39 = 37"
- Correct: c, d, e
- Retry pointer: rule r1.
- Nudge: "Reken elke som zelf uit. Moet je bij de eenheden inwisselen? Lees regel 1."
- Hint: "Reken elke som zelf uit. Kijk bij de eenheden: moet je inwisselen?"
- Explanation: "Goed is: 52 - 18 = 34, 73 - 49 = 24 en 62 - 39 = 23. Bij die drie sommen moet je inwisselen. 74 - 31 en 86 - 42 kloppen."
- Sources: none. None line: "Dit is rekenen. Er is geen regel van buiten nodig."

### Vraag 3.2 (id: patroon, kind: pick, docs: werkblad)
- Prompt: "Welke fout maakt Sam steeds?"
- Options (right answer last; data file order d, b, a, c, so the right answer is on place 1):
  - a "Sam telt bij elke som de twee getallen op in plaats van af te trekken."
  - b "Sam rekent de eenheden goed uit, maar maakt een fout bij de tientallen."
  - c "Sam maakt een fout bij elke som met een getal boven de 70."
  - d "Sam haalt bij de eenheden steeds het kleine cijfer van het grote af."
- Correct: d
- Retry pointer: werkblad s1, s3, s5.
- Nudge: "Kijk alleen naar de foute sommen. Wat doet Sam bij de eenheden?"
- Hint: "Doe 52 - 18 na zoals Sam. Hoe komt Sam bij de 6?"
- Explanation: "Bij 52 - 18 rekent Sam 8 - 2 = 6, in plaats van 12 - 8 = 4. Sam wisselt dus niet in. Nu weet je wat je morgen met Sam oefent."
- Sources: none. None line: "Dit is rekenen. Er is geen regel van buiten nodig."
- Note: one defensible answer. a: 52 + 18 = 70, not 46. b: Sam's units digit is wrong in all three wrong sums. c: 74 - 31 has a number above 70 and is right; 52 - 18 has none and is wrong. d fits all five sums. Options are 13 to 15 words; the right one is not the longest. The nudge no longer says "drie" (the digit; gate H5).

### Cijfer kamer 3
- Clue: "Het 3e cijfer van het slot: hoeveel sommen had Sam fout?"
- Digit: **3** (`clueDocs: ['werkblad']`; the recap on the digit screen shows the 3.1 answer).
- Reveal (`reveal.lines`):
  1. "Op het mbo is er Onderwijsassistent: je helpt de leerkracht, maar geeft zelf geen les. Leerkracht op de basisschool word je via de pabo (hbo) of Pedagogische Wetenschappen van Primair Onderwijs (universiteit)."
  2. "KiesMBO over Onderwijsassistent: "Er zijn genoeg vacatures die passen bij deze opleiding". KiesMBO verwacht wel dat dat de komende jaren moeilijker wordt. Studiekeuze123 over de pabo: "89% vond een baan binnen het vakgebied van de studie"."
  3. "Minder leuk: ook administratie."
- Reveal source (`reveal.src`): "KiesMBO en Studiekeuze123, geraadpleegd op 7 november 2026."

Sources of the reveal: kmOa (crebo 25698, niveau 4; "Als onderwijsassistent geef je zelf geen les"; "Met deze opleiding kun je doorstromen naar het hbo"; baankans 6, "Er zijn genoeg vacatures die passen bij deze opleiding. De komende jaren wordt dat moeilijker."); skPabo ("89% vond een baan binnen het vakgebied van de studie"; "Docenten basisonderwijs 87%"); skPwpo ("Je krijgt alleen universitair onderwijs en kunt in drie jaar je lesbevoegdheid halen"); skLeraar ("Administratie voortgang leerlingen"). Revision 2 (check B 4): the second KiesMBO sentence is back, as "KiesMBO verwacht wel dat dat de komende jaren moeilijker wordt", so the quote is not cut where the source turns. "Moeilijk" now appears once on the card. "Leerkracht" is the gender-neutral word KiesMBO uses. 72 words.

---

## Kamer 4. Vind de fout in een contract

Grounding: "Controleren of regels goed worden toegepast" and "Schrijven van adviezen of contracten" (Studiekeuze123, Jurist) [skJurist]; "Contractspecialisten maken en controleren contracten" [skJurist].

**Intro:** "Een fietsenwinkel neemt Robin aan. Robin werkte nog nooit bij deze winkel, ook niet via een uitzendbureau. De winkel vraagt jou: "Klopt ons contract met de regels?" In de cao staat niets over proeftijd."

### Document 4: arbeidsovereenkomst (type: contract, id: contract)
Title: "Arbeidsovereenkomst". Parties: "Een fietsenwinkel in Zeestad (werkgever) en Robin (werknemer)".
- a1 "Artikel 1. Duur" | "Robin werkt bij de winkel van 1 januari 2027 tot en met 31 december 2027."
- a2 "Artikel 2. Proeftijd" | "De proeftijd is 2 maanden."
- a3 "Artikel 3. Uren" | "Robin werkt 24 uur per week."
- a4 "Artikel 4. Loon" | "Robin krijgt loon volgens de cao."
- a5 "Artikel 5. Opzeggen" | "Bij een geldige proeftijd mogen Robin en de winkel het contract direct opzeggen."

**Moeilijke woorden (plain):** "Arbeidsovereenkomst: een contract voor werk. Tijdelijk contract: een contract voor een tijd. Dit contract stopt op 31 december 2027. Proeftijd: de eerste tijd van een nieuwe baan. Werkgever en werknemer mogen het contract dan direct opzeggen. Cao: collectieve arbeidsovereenkomst. Daarin kunnen ook regels over proeftijd staan."

Design note: Artikel 5 is new (gate P3). Before, the only article with "proeftijd" was the wrong one, so 4.1 could be answered by keyword. Artikel 5 also names the proeftijd and is correct. Revision 2 (check B 1, ERROR): it said "Tijdens de proeftijd"; with the nietig Artikel 2 a pupil could argue that Artikel 5 is wrong too, a second defensible answer. It now says "Bij een geldige proeftijd", which is true whatever Artikel 2 says (Rijksoverheid "Tijdens deze periode kunnen u en uw werkgever de arbeidsovereenkomst direct opzeggen"; Ondernemersplein "mogen u en uw medewerker de arbeidsovereenkomst direct en zonder reden opzeggen"), and no rule on the card can make it wrong. "(verzonnen)" left the contract title (gate P6); the From lines and the fiction line still say it. The "tijdelijk contract" gloss names this contract's end date, because a tijdelijk contract without a calendar end date also exists (BW 7:652 lid 5).

**Rule box (`rules`, title "Regels (Rijksoverheid)"):**
- r1 "Tijdelijk contract van 6 maanden of korter: de werkgever mag geen proeftijd afspreken."
- r2 "Tijdelijk contract van meer dan 6 maanden, maar korter dan 2 jaar: de proeftijd is hoogstens 1 maand."
- r3 "Vast contract, of tijdelijk contract van 2 jaar of langer: de proeftijd is hoogstens 2 maanden."
- r4 "Een cao kan bij een tijdelijk contract van meer dan 6 maanden en korter dan 2 jaar andere regels hebben."

Sources: Rijksoverheid ("Bij een tijdelijk contract van 6 maanden of korter mag uw werkgever geen proeftijd afspreken."; "De proeftijd mag maximaal 1 maand duren bij: een tijdelijk arbeidscontract van meer dan 6 maanden maar korter dan 2 jaar"; "De proeftijd kan maximaal 2 maanden duren bij: een vast dienstverband; een tijdelijk arbeidscontract voor 2 jaar of langer."), Ondernemersplein, and now BW 7:652 (fact check A read it; I read it too, version "Geldend van 08-10-2026 t/m heden"): lid 6 onder a "Er kan geen proeftijd worden overeengekomen indien de arbeidsovereenkomst: a. is aangegaan voor ten hoogste zes maanden"; lid 4 onder a "een maand, indien de overeenkomst is aangegaan voor langer dan zes maanden maar korter dan twee jaren"; lid 3 and 4 onder b (two months); lid 7 "Van de leden 4, onderdeel a, en 5, kan slechts bij collectieve arbeidsovereenkomst of bij regeling door of namens een daartoe bevoegd bestuursorgaan worden afgeweken ten nadele van de werknemer." So r4 now states the scope of the cao exception (lid 4a; lid 5, contracts without a calendar end date, is not on the card because Robin's contract has one), and 4.2 (6 months) has one answer even without the intro's cao line, as fact check A notes. The title "Regels (Rijksoverheid)" replaces "Regels over proeftijd" (gate P3); the lines follow the Rijksoverheid wording, the law confirms them. Exceptions closed: cao (intro), same employer and opvolgend werkgever (intro, lid 6 onder b and c); the government-employer route in lid 7 does not apply to a shop.

### Vraag 4.1 (id: artikel, kind: pick, docs: contract)
- Prompt: "Welk artikel klopt niet met de regels?"
- Options (right answer last; data file order a, e, b, c, d, so the screen shows Artikel 1, 2, 3, 4, 5):
  - a "Artikel 1. Duur"
  - b "Artikel 3. Uren"
  - c "Artikel 4. Loon"
  - d "Artikel 5. Opzeggen"
  - e "Artikel 2. Proeftijd"
- Correct: e
- Retry pointer: contract a1.
- Nudge: "Hoe lang duurt het contract van Robin? Zoek de regel die daarbij hoort."
- Hint: "Tel de maanden van 1 januari tot en met 31 december."
- Explanation: "Het contract duurt 1 jaar. Dat is meer dan 6 maanden en korter dan 2 jaar. Artikel 2 gaat daarom niet goed. Kijk in de regels hoe lang de proeftijd dan mag zijn."
- Sources: roProeftijd, opProeftijd, bwProeftijd
- Note: the explanation no longer states "hoogstens 1 maand", which is the digit (gate H2). Articles 3, 4 and 5 cannot break any rule on the card. 1 January to 31 December 2027 is 12 months, so r2 applies.

### Vraag 4.2 (id: advies, kind: pick, docs: contract)
- Situ: "De winkel belt terug: "Dan maken we er een contract van 6 maanden van. Dan mag 2 maanden proeftijd toch wel?""
- Prompt: "Wat zeg je tegen de winkel?"
- Options (right answer last; data file order b, a, d, c, so the right answer is on place 3):
  - a "Ja. Bij 6 maanden mag de proeftijd 2 maanden zijn."
  - b "Nee. Bij 6 maanden is de proeftijd hoogstens 1 maand."
  - c "Ja. Als Robin het goed vindt, mag 2 maanden proeftijd."
  - d "Nee. Bij een contract van 6 maanden mag er geen proeftijd in."
- Correct: d
- Retry pointer: rule r1.
- Nudge: "Lees regel 1. Hoe lang wordt het nieuwe contract?"
- Hint: "Zoek in de regels de woorden 6 maanden."
- Explanation: "Bij een tijdelijk contract van 6 maanden of korter mag de werkgever geen proeftijd afspreken. Een korter contract helpt de winkel dus niet. Ook als Robin het goed vindt, verandert die regel niet."
- Sources: roProeftijd, opProeftijd, bwProeftijd
- Note: the jurist's advice step ("Schrijven van adviezen", skJurist). Option b is the near miss. Revision 2 (gate N8): option c is as long as the others (10, 10, 10 and 11 words). Option c is excluded by BW 7:652 lid 6, 7 and 8. The hint names words that occur in r1, r2 and r4.

### Cijfer kamer 4
- Clue: "Het 4e cijfer van het slot: het contract van Robin duurt 1 jaar. Hoeveel maanden proeftijd mag de winkel dan hoogstens afspreken?"
- Digit: **1** (r2; `clueDocs: ['contract', 'rules']`). Revision 2 (check B 2): the clue asks how long a proeftijd the shop may agree at most ("mag de winkel dan hoogstens afspreken"), not how long Robin's proeftijd now is, because the nietig clause is not cut back to 1 month.
- Reveal (`reveal.lines`):
  1. "Op het mbo is er Legal, insurance & HR services specialist: daarmee werk je bijvoorbeeld op een juridische afdeling. Jurist word je via HBO-Rechten (hbo) of Rechtsgeleerdheid (universiteit)."
  2. "KiesMBO over die mbo-opleiding: "Er zijn heel veel vacatures die passen bij deze opleiding". Studiekeuze123 over HBO-Rechten: "74% vond een baan binnen het vakgebied van de studie"."
  3. "Minder leuk: veel kleine lettertjes."
- Reveal source (`reveal.src`): "KiesMBO en Studiekeuze123, geraadpleegd op 7 november 2026."

Sources of the reveal: kmLegal (crebo 25726, niveau 4; "Als medewerker op een juridische afdeling of personeelszaken ..."; baankans 10, "Er zijn heel veel vacatures die passen bij deze opleiding."; "De kleine lettertjes, daar ga je veel van zien!"); skRechten ("Juristen 25%"; "74% vond een baan binnen het vakgebied van de studie"); skRgWo (bachelor, no figures); skRgMaster (in the teacher detail). The mbo route keeps KiesMBO's own words "op een juridische afdeling", so the card does not suggest every route leads to the same job title (gate J3). 60 words.

---

## Proefkaart en Mijn volgende stap

The lesson has one printable slip (engine `slip`). It is the paper proefkaart: first guess, two ratings per task, the favourite with "een dag meelopen", the lock digits, and then the Route 18 "Mijn volgende stap" idea (one activity and place, a date or a search date, school permission, one question), so the lesson ends on a dated step as Route 18 does. Fields with `lines: 0` are circle choices; nothing on it is collected or logged. Each pupil has their own card. Printed from the teacher screen with the button "Print proefkaarten" (`slip.button`): the validator estimate is 259.6 mm of 266 mm, so one card per A4 (30 pages for 30 pupils); the print test measures the real page (Engine fit). End screen: the default read-only reminder, not `screen: true`, with the line "Vul je proefkaart op papier in." (`slip.paper`, gate G4 S5: the engine's default says "strookje").

Revision 2 (gate G4 S5): every circle choice is printed in its own box, one row per scale (`choices`). A short label ("Taak 1, menu.") takes the first row on its own line, and "Moeilijk?" lines up under "Leuk?". To fit one A4, four labels are shorter ("Lijkt me het leukst:", "Was echt het leukst:", "Toestemming via:") and the place and the date share field 10. The numbering stays 1 to 12, so the plan rows (vraag 1, 6, 8 tot en met 12) still match.

`slip`:
- button: "Print proefkaarten"
- title: "Mijn proefkaart"
- intro: "Omcirkel na elke taak, vóór je het cijfer invult."
- paper: "Vul je proefkaart op papier in."
- fields:
  1. "Lijkt me het leukst:" choices: 1 menu | 2 programma | 3 rekenwerk | 4 contract (lines 0)
  2. "Taak 1, menu." choices: [Leuk?] ja | beetje | nee; [Moeilijk?] makkelijk | te doen | pittig (lines 0)
  3. "Taak 2, programma." choices: [Leuk?] ja | beetje | nee; [Moeilijk?] makkelijk | te doen | pittig (lines 0)
  4. "Taak 3, rekenwerk." choices: [Leuk?] ja | beetje | nee; [Moeilijk?] makkelijk | te doen | pittig (lines 0)
  5. "Taak 4, contract." choices: [Leuk?] ja | beetje | nee; [Moeilijk?] makkelijk | te doen | pittig (lines 0)
  6. "Was echt het leukst:" choices: 1 | 2 | 3 | 4 | geen; [Een dag meelopen bij dat werk?] ja | misschien | nee (lines 0)
  7. "Mijn cijfers voor het slot:" (lines 1)
  8. "Mijn volgende stap. Welk werk wil ik beter leren kennen?" hint "(Vond je niets leuk? Kies het werk dat je het minst erg vond.)" (lines 1)
  9. "Ik ga naar een:" choices: open dag | meeloopdag | proefstuderen | een dag meelopen in een bedrijf (lines 0)
  10. "Bij (school of bedrijf) en op (datum):" hint "(Weet je de datum nog niet? Schrijf: ik zoek hem op uiterlijk op ...)" (lines 1)
  11. "Toestemming via:" choices: mijn mentor | mijn decaan (lines 0)
  12. "Eén vraag die ik daar stel:" (lines 1)
- footer: "De kaart is van jou. Open dagen: KiesMBO (mbo) en Studiekeuze123 (hbo en universiteit). Meelopen in een bedrijf: vraag je mentor of decaan."

Choices (Revision 1): two ratings per task instead of three, and the long hint printed once (gate M1, P7); "een dag meelopen" asked once, for the favourite; a digit line (gate M2); a path for a pupil who liked nothing (gate P5, also in the plan and the FAQ); the intro line says to circle before the digit (gate M3). "Leuk" and "moeilijk" stay separate on purpose, so a hard task can still be the one you liked. Item 6 against item 1 gives the show of hands "Wie vond een taak leuker dan de eerste gok?". The design's "Wat paste bij mij?" item is a debrief question for the teacher.

---

## Reveal, omcirkelen en Beroepenblad (Revision 2)

From the pupil playtest (gate G4 B1, S1, S2) and check B (5, 6). These are optional engine fields (Engine fit); the default is off, so other lessons do not change.

- `rulesExtra`: "Pak je proefkaart. Na elke taak omcirkel je eerst op de kaart. Dan pas vul je het cijfer in."
- `clueGate`: text "Pak je proefkaart. Omcirkel bij taak {n}: was het leuk? Was het moeilijk?", button "Klaar, ik heb omcirkeld"
- `revealNote`: "Dit zijn verschillende metingen, soms uit eerdere jaren. Het percentage gaat over afgestudeerden na 1,5 jaar, niet over jouw eigen kans."
- `beroepenblad`: button "Print beroepenblad", title "Beroepenblad: welk werk was het?", intro "Klaar met een kamer? Omcirkel eerst op je proefkaart: was de taak leuk? Was hij moeilijk? Lees dan pas bij die kamer welk werk het was."

Start screen: the rulesExtra line is the fifth item under "Zo werkt het", so pairs know about the proefkaart before room 1 (S1). Digit screen: the clue card and the documents stay; below them the gate card shows the text ("{n}" becomes the room number) and one button; the digit field opens only after the tap (S1). The tap is not logged and not stored. After the digit, the screen is one card at the top: "Gevonden!", the digit, the heading "Zo kom je bij dit werk", the three reveal lines, the revealNote, the button to the next room, and under it the source line with the read date (S2, check B 6). At 1366 x 768 and 1024 x 768 the button is above the fold (tested). The revealNote says in two sentences what the numbers measure (check B 5): the vacancy sentence and the percentage are different measures, maybe from earlier years, and the percentage is about graduates after 1,5 years, not the pupil's own chance.

Paper (B1): the teacher prints the Beroepenblad, one A4 per pair, from the plan card or step 3 of "Klaar in 15 minuten". It holds the intro line, then per room its title, the three reveal lines and the source line, then the revealNote. No answers, no digits, no code. The note under the print buttons says it is one per pair. Care point 7 tells the teacher to print it. The paper rooms and the teacher answers stay as they were.

---

## Start- en eindcheck: twee parallelle vormen, A en B (elk 4 vragen, enkele keuze, score 0 tot 4)

Revision 1 (gate D1, BLOCKER): no item names a job of the rooms or primes a room. The engine gives every pair form A or B first at random and the other form at the end, so both forms are seen before the rooms and both use other jobs. The check therefore measures transfer of the two constructs, not recall of the reveals (this also settles gate X4): items 1 and 2 "knows routes into a job across levels" (one job with routes on all three levels; one mbo programme that leads to a neighbouring role, with the job itself via the universiteit), items 3 and 4 "can tell what a job's daily work involves" (a part of the work beyond the obvious one; what the job's day is about). Expect a small gain; the proefkaart and the follow-up count say more (teacher line for vwo). Item n of A and item n of B have the same shape with another job. Option shape (gate X3): every option has the same build (no option starts with "Alleen" or "Niets", every option in items 3 and 4 is "X en Y"), and the right option is never the only longest one. Right answers: A b, c, a, b; B c, a, b, a. Jobs used: boswachter or natuurbeheerder, doktersassistent and arts, mbo-verpleegkundige (form A); accountant, apothekersassistent and apotheker, werktuigbouwkundige (form B). These six are not in Werkproef 1; four of them are on the design's list for a later Werkproef set, whose checks must then use other jobs.

### Vorm A

| # | Construct | Vraag | Opties | Goed | Bron |
|---|---|---|---|---|---|
| A1 | Routes, meer niveaus | "Noor wil boswachter of natuurbeheerder worden. Moet Noor daarvoor naar de universiteit?" | a Ja. Op het mbo en het hbo is er geen opleiding voor dit werk.; b Nee. Er zijn ook opleidingen voor dit werk op het mbo en het hbo.; c Ja. Eerst doe je het hbo, en daarna moet je naar de universiteit. | b | kmNatuur, skBnbHbo (Boswachters, bos- en natuurbeheerders 18%), skBnbWo |
| A2 | Route naar een buurrol | "Kim doet de mbo-opleiding Doktersassistent. Wat klopt?" | a Kim mag daarna zelf patiënten behandelen, net als een arts. Dat leer je allemaal in deze mbo-opleiding.; b Kim kan daarna samenwerken met een arts. Verder leren na dit mbo-diploma kan dan helemaal niet meer.; c Kim kan daarna samenwerken met een arts. Arts word je na de master Geneeskunde (universiteit) en inschrijving in het BIG-register. | c | kmDoka ("assisteer je een huisarts of medisch specialist", "Je helpt de arts bij sommige onderzoeken", "doorstromen naar het hbo"), skGenMaster ("Alleen na afronding van deze masterstudie ben je bevoegd om je te registreren als (basis)arts."), skGen ("(Basis)arts word je pas na afronding van de co-assistentschappen en het afleggen van het artsexamen."), wetBig (Wet BIG art. 3 and 4: registers for arts and apotheker; only a registered person may use the title) |
| A3 | Werk naast het bekende deel | "Wat hoort ook bij het werk van een mbo-verpleegkundige?" | a Een verpleegplan maken en werken in wisselende diensten; b Operaties uitvoeren en zelf nieuwe medicijnen bedenken; c Verzorgen en zelf beslissen welke medicijnen iemand krijgt | a | kmVerpl ("Je stelt een verpleegplan op en verzorgt de patiënt", tag "ploegen - wisselende diensten", "Je draagt de zorg over en overlegt met collega's") |
| A4 | Waar de werkdag om draait | "Wat doet een boswachter of natuurbeheerder op een werkdag?" | a Dieren in een dierentuin voeren en verzorgen; b Paden en natuurgebieden controleren en rapporten schrijven; c Planten verkopen en klanten helpen in een tuincentrum | b | skBoswachter ("Controleren wandelpaden en natuurgebieden", "Schrijven rapporten over natuur en milieu"), kmNatuur |

### Vorm B

| # | Construct | Vraag | Opties | Goed | Bron |
|---|---|---|---|---|---|
| B1 | Routes, meer niveaus | "Sem wil op een accountantskantoor werken. Kan Sem daarvoor ook naar de universiteit?" | a Nee. Dat werk leer je op het mbo, en niet aan de universiteit.; b Nee. Aan de universiteit leer je geen werk voor een kantoor.; c Ja. Accountancy is er aan de universiteit, en ook op het hbo. | c | kmBac ("Bij administratiekantoren of accountantskantoren"), skAccHbo (Accountants 20%), skAccWo ("Naast je studie ben je vier dagen per week werkzaam bij een accountantskantoor.") |
| B2 | Route naar een buurrol | "Alex doet de mbo-opleiding Apothekersassistent. Wat klopt?" | a Alex kan daarna samenwerken met een apotheker. Apotheker word je na de master Farmacie (universiteit) en inschrijving in het BIG-register.; b Alex is daarna zelf apotheker en mag alle medicijnen zelf maken. Dat leer je allemaal in deze opleiding.; c Alex kan daarna samenwerken met een apotheker. Verder leren na dit mbo-diploma kan dan helemaal niet meer. | a | kmApo ("Je werkt nauw samen met je collega-assistenten, de apotheker", "doorstromen naar het hbo"), skFarmMaster ("te beantwoorden aan de eisen die de wet aan het beroep van apotheker stelt"; Apothekers 31%), wetBig (Wet BIG art. 3 and 4) |
| B3 | Werk naast het bekende deel | "Wat hoort ook bij het werk van een accountant?" | a Belasting innen en boetes uitdelen aan bedrijven; b Een jaarrekening controleren en ondernemers advies geven; c Prijzen bepalen en reclame maken voor bedrijven | b | skAccountant ("Controleren van jaarrekeningen en financiële rapporten", "Adviseren over geld en regels", "Overleggen met collega's en ondernemers") |
| B4 | Waar de werkdag om draait | "Wat doet een werktuigbouwkundige op een werkdag?" | a Onderdelen ontwerpen en tekeningen en berekeningen maken; b Machines verkopen en klanten bellen in een winkel; c Auto's wassen en banden verwisselen in een garage | a | skWtb ("Ontwerpen van onderdelen of machines", "Maken van tekeningen en berekeningen") |

Parallel checks (Revision 2, gate G4 S3 and check B 8): A1 and B1 no longer share a right answer, and the right answer is not the only hedged or the longest option. Both ask one yes/no question about a level; the right answer is "Nee" in A1 and "Ja" in B1, so a pair that copies the pattern of the first form gets the second wrong. Every option is two short sentences or one, built the same way within an item. A2 and B2: both right and one wrong option start with the same words ("... kan daarna samenwerken met ..."), so "helpt" or "samen" no longer marks the right one; the right option says the job needs the university master (Geneeskunde: registration as basisarts only after the master; Farmacie: the master meets the legal requirements for apotheker) and uses "kan", not a certainty. The "verder leren kan niet" option is wrong by KiesMBO ("doorstromen naar het hbo"). A3 and B3: no "nooit"; one wrong option names another profession's work, one a task that is not theirs. A4 and B4: unchanged. Word counts (spec order): A1 13, 14, 13; A2 17, 17, 20; A3 8, 7, 8; A4 7, 7, 8; B1 13, 11, 12; B2 20, 18, 17; B3 7, 7, 7; B4 7, 8, 8. Revision 3 (check B round 2, 3): the right A2 and B2 options now name the BIG-register (Wet BIG art. 3 and 4: the title arts or apotheker is reserved for those in the register), so the master alone is not presented as the title; the wrong options were lengthened so the right one is at most 3 words longer. Sources as in the table; skGen (wo bachelor Geneeskunde) and wetBig are new.

Score: 1 point per right answer, 0 to 4, before and after, shown per pair on the end screen.

---

## Lesplan voor de docent (45 minuten)

| Lesminuut | Duur | Onderdeel | Wat je doet |
|---|---|---|---|
| 0 tot 5 | 5 | Uitleg, inloggen en eerste gok | Zet de link en de klascode al op het bord voordat de les begint. Deel de proefkaarten uit, één per leerling. Pak de apparaten terwijl je de vier taken voorleest: een menu checken op allergenen, een fout zoeken in een programma, rekenwerk nakijken, een contract controleren. Zeg er geen beroep bij. Iedereen omcirkelt bij vraag 1 de taak die het leukst lijkt, terwijl de tweetallen inloggen. Zeg: je hoeft het nog niet te kunnen. |
| 5 tot 7 | 2 | Startcheck | Elk tweetal beantwoordt vier vragen (vorm A of B) voordat de klok start. De vragen gaan over ander werk dan de taken. Geef geen hints. |
| 7 tot 29 | 22 | Vier taken | Start de klastimer en zet het bord in Projectiemodus. Na elke taak omcirkelt iedereen eerst de eigen proefkaart. Dan pas vult het tweetal het cijfer in en ziet het welk werk het was. Loopt het begin uit? Haal de minuten uit de nabespreking, niet uit de taken. |
| 29 | | Stop | Op minuut 29 stopt iedereen, ook wie nog niet klaar is. Lees de cijfers voor van je geprinte antwoordblad. Een taak niet gedaan? Dan blijft die regel op de proefkaart leeg. |
| 29 tot 32 | 3 | Stop en eindcheck | De andere vorm: vier vragen. Daarna ziet elk tweetal wat het goed had, voor en na. |
| 32 tot 38 | 6 | Proefkaart en nabespreken | Iedereen omcirkelt vraag 6. Vraag met handopsteken: wie vond een taak leuker dan de eerste gok? Vraag daarna: wat zag je niet in deze taken? Vraag naar ervaringen, niet naar punten. |
| 38 tot 44 | 6 | Mijn volgende stap | Iedereen vult vraag 8 tot en met 12 in, met een datum. Laat twee of drie leerlingen hun stap hardop zeggen. Stel daarna de slotvraag. |
| 44 tot 45 | 1 | Reserve | Voor inloggen dat uitloopt. De taken stoppen altijd op minuut 29. |

Total 45 minutes: 5 + 2 + 22 + 3 + 6 + 6 + 1 = 45. `minutes: 22` (board timer default; the early-stop question fires before pupil minute 17). The stop stays a separate moment row (gate M6 asked to merge it; the engine and `spec-compare.js` expect the stop as a moment).
Materials: een apparaat per tweetal (laptop, Chromebook of telefoon), een pen voor de proefkaart en een digibord of beamer
Tip voor de docent: Zie je op minuut 22 een tweetal nog in kamer 2? Help dan bij de vraag waar het vastzit. Een fout antwoord wordt doorgestreept; gokken telt niet mee bij "In één keer goed".

Care points ("Let op"):
1. "Zet op het bord alleen de Projectiemodus: timer, klascode en de titels van de taken. Lager op dit scherm staan de beroepen. Die horen leerlingen pas na elke taak."
2. "Zeg niet dat een beroep bij een bepaald gender hoort. Zeg ook niet welke route beter is: de taken horen niet bij één niveau. Vraag wat iedere leerling zelf interessant vond, en waarom."
3. "Moeilijk is iets anders dan niet leuk. Zeg: je hoeft het nog niet te kunnen. Dat leer je in de opleiding."
4. "De taken zijn kort en vereenvoudigd. Een echte werkdag is meer. Vraag daarom: wat zag je niet?"
5. "De proefkaart is van de leerling. Laat hem niet inleveren. Wil je hem in het LOB-dossier? Vraag de leerling hem zelf te laten zien of te fotograferen."
6. "Leerlingen kunnen vragen om een dag meelopen in een bedrijf. Spreek vooraf met je decaan af hoe je school dat regelt."
7. "Print de proefkaarten vóór de les: 1 per leerling, 1 per A4. Werken tweetallen op papier? Print dan ook het beroepenblad, 1 per tweetal. Test de afdruk één keer."
8. "Over twee tot vier weken: vraag met handopsteken wie een stap heeft gezet of een datum heeft geboekt. Zet het aantal in het lesverslag of het feedbackformulier, zonder namen."

Teacher screen, first lines (`teacher.audience`, in this order):
1. "Doe Werkproef 1 in havo 4 en vwo 4 en 5. In havo 5 en vwo 6 alleen als er ruimte is vóór Route 18. Kies anders Route 18."
2. "Pilot: mensen uit het vak hebben de vier taken nog niet gecontroleerd. Gebruik de les alleen als pilot."
3. "Je proeft het werk zonder de naam van het beroep en zonder het niveau. De sector zie je wel. Pas na de taak zie je welk beroep het is."
4. "Gecontroleerd op 7 november 2026. De cijfers over werk staan met die datum in de les. Controleer ze opnieuw in december 2026."
5. "Elke uitkomst zet minstens twee niveaus naast elkaar: mbo, hbo of universiteit. Wat een site niet laat zien, laten we weg. De volgorde zegt niets over goed of beter."
6. "Een vacaturezin en een percentage afgestudeerden zijn verschillende dingen. Vergelijk ze niet als een score."

`teacher.goal`: the three Leerdoelen above, numbered as one text.

Kern (`teacherNote`):
- Kamer 1: "Allergenen kunnen ook in een product van een leverancier zitten. Dan staan ze op het etiket."
- Kamer 2: "Een test laat zien waar het misgaat: precies op de grens van 16 jaar."
- Kamer 3: "Wie dit werk doet, zoekt het patroon in de fouten, niet alleen het aantal fouten."
- Kamer 4: "De lengte van het contract bepaalt hoe lang de proeftijd mag zijn."

(These are the visible teacher notes per room: Revision 1 removed the job and the level from them (gate D5, M5). The engine also shows the reveal lines as "Kern", inside the closed block "Niet op het bord: beroep en route" (`hideKern`); care point 1 keeps the teacher screen off the board.)

Bronnen en uitzonderingen (`teacherDetail`, closed, per room; names the job):
- Kamer 1: Werk van een kok. Regels: EU-verordening 1169/2011, bijlage II (14 allergenen), uitgelegd door de NVWA; ook voor onverpakt eten. Bij noten en glutenbevattende granen zeg je welke precies. Schriftelijk of mondeling; mondeling mag als het personeel het altijd vóór de aankoop kan zeggen, de informatie ook op papier of elektronisch klaarligt voor personeel en inspecteurs, en er een duidelijk bordje hangt. Kruisbesmetting en sporen zitten niet in deze taak; dat is een vraag voor de kok die de taak controleert. Koksopleidingen (KiesMBO, crebo): Kok niveau 2 (27060), Zelfstandig werkend kok niveau 3 (27062), Gespecialiseerd kok niveau 4 (27064), Leidinggevende keuken niveau 4 (27065); niveau 4 geeft doorstroom naar het hbo. Studiekeuze123 koppelt geen hbo- of wo-studie aan chef-kok. Hotel management (hbo) is leidinggeven en adviseren in hotels, restaurants en catering, geen koksopleiding; na 1,5 jaar 56% in het vakgebied, een baan vinden duurt gemiddeld 14 maanden, 36% vast contract. Baankans: 10 (Kok, Gespecialiseerd kok, Leidinggevende keuken), 9 (Zelfstandig werkend kok). Voorspellingen, niet in de leerlingtekst: Studiekeuze123 noemt Hotel management "goed" (ROA, tot 2028); ROA tot 2030 geeft mbo4-dienstverlening (daaronder horeca) en de bachelor dienstverlening (daaronder horeca) een matig perspectief.
- Kamer 2: Werk van een softwareontwikkelaar: software testen, code schrijven en testen, fouten of storingen oplossen. Software developer (mbo 4, crebo 25998, 3 tot 4 jaar): baankans 7, "al gaan de meeste mensen na hun diploma een vervolgopleiding doen om een betere baan te kunnen vinden"; doorstroom naar het hbo 50% (bol, landelijk, afgelopen schooljaar; bij bbl toont KiesMBO geen doorstroom). HBO-ICT: meest gekozen beroep softwareontwikkelaars (52%); na 1,5 jaar 80% in het vakgebied, een baan vinden duurt gemiddeld 3 maanden, 71% vast contract. Informatica (wo): de bachelorpagina toont geen cijfers; na de master werkt 35% als softwareontwikkelaar en 82% in het vakgebied. Voorspellingen, niet in de leerlingtekst: Studiekeuze123 noemt HBO-ICT "minder goed" en de master Informatica "goed" (ROA, tot 2028); ROA tot 2030: bachelor techniek en ict "goed", master informatica "redelijk", mbo4 ict, media en vormgeving "slecht", vooral door mediavormgeving. De code is vereenvoudigd en verzonnen.
- Kamer 3: Werk van een leerkracht in het basisonderwijs (Studiekeuze123: Leraar basisonderwijs): les geven, de voortgang bijhouden, overleggen met collega's en ouders, kinderen begeleiden die extra aandacht nodig hebben. Onderwijsassistent (mbo 4, crebo 25698) geeft zelf geen les; baankans 6, "De komende jaren wordt dat moeilijker"; doorstroom naar het hbo. Pabo (hbo, officieel Lerarenopleiding basisonderwijs): 87% van de werkende afgestudeerden werkt als docent basisonderwijs; 89% in het vakgebied, een baan vinden duurt gemiddeld 1 maand, 72% vast contract; Studiekeuze123: "niet mogelijk om de werkgelegenheid te bepalen". Voor mbo- en havostudenten gelden bij de pabo extra eisen voor aardrijkskunde, geschiedenis en natuur en techniek; kijk op de site van de pabo hoe en wanneer je die haalt. Pedagogische Wetenschappen van Primair Onderwijs (wo): lesbevoegdheid in drie jaar; op 7 november 2026 bij één universiteit; geen cijfers. ROA tot 2030: lerarenopleiding basisonderwijs "goed"; "Voor docenten in het vo en po blijven de knelpunten groot". Inwisselen en het voorbeeld zijn rekendidactiek, niet van een officiële pagina: een leerkracht controleert dit.
- Kamer 4: Werk van een jurist. De taak is één stuk juridisch werk: een contract controleren. Een jurist adviseert ook en weegt belangen af; dat vraagt de les aan een jurist die de taak controleert. Regels: BW 7:652 (geldend vanaf 8 oktober 2026), Rijksoverheid en Ondernemersplein. Geen proeftijd bij een contract van 6 maanden of korter (lid 6a), bij een opvolgend contract met dezelfde werkgever tenzij het werk duidelijk anders is (lid 6b), en bij een werkgever die de opvolger is, bijvoorbeeld na werk via een uitzendbureau (lid 6c). Hoogstens 1 maand bij meer dan 6 maanden en korter dan 2 jaar (lid 4a) en bij een contract zonder einde op een kalenderdatum (lid 5); hoogstens 2 maanden bij een vast contract of 2 jaar of langer (lid 3 en 4b). Alleen een cao of een regeling van een bevoegd bestuursorgaan mag afwijken van lid 4a en 5 (lid 7). Een afspraak in strijd met het artikel is nietig (lid 8): de wet maakt van 2 maanden niet zelf 1 maand; 1 maand is wat de winkel bij dit jaarcontract hoogstens geldig had kunnen afspreken. Wat er dan voor Robin geldt, laat de les aan de jurist die de taak controleert. Artikel 5 volgt Rijksoverheid en Ondernemersplein: tijdens een (geldige) proeftijd mogen beide direct opzeggen. De proeftijd is schriftelijk en voor beide partijen gelijk (lid 1 en 2). Legal, insurance & HR services specialist (mbo 4, crebo 25726): baankans 10; werk op een juridische afdeling, bij de overheid, een notaris, advocaat, verzekeraar of rechtbank. HBO-Rechten: 74% in het vakgebied; juristen 25%, notarieel en juridisch assistenten en deurwaarders 23%. Master Rechtsgeleerdheid: 78% in het vakgebied, advocaten 18%. Voorspellingen, niet in de leerlingtekst: Studiekeuze123 "goed" voor HBO-Rechten en de master (ROA, tot 2028); ROA tot 2030: bachelor economie en recht "matig", master economie en recht "redelijk", behalve de master economie en econometrie ("goed"). Deze taak lijkt op Je eerste bijbaan (kamer 1, proeftijd bij 6 maanden).

Dit wordt vaak gevraagd (`teacher.faq`):
- "Kan ik met hbo of universiteit ook kok worden?" Antwoord: "Koksopleidingen zijn er op het mbo. Bij Hotel management op het hbo leer je leidinggeven in de horeca; het is geen koksopleiding. Studiekeuze123 koppelt geen hbo- of wo-studie aan het beroep chef-kok."
- "Word je met mbo of hbo ook jurist?" Antwoord: "Met de mbo-opleiding werk je bijvoorbeeld als medewerker op een juridische afdeling. HBO-Rechten leidt op voor een zelfstandige juridische functie of een ondersteunende rol. Wil een leerling advocaat of rechter worden? Zoek dat beroep samen op Studiekeuze123."
- "Is een onderwijsassistent hetzelfde als een leerkracht?" Antwoord: "Nee. Een onderwijsassistent geeft zelf geen les en ondersteunt de leerkracht. Met het mbo 4-diploma kun je doorstromen naar het hbo. Voor de pabo gelden dan extra eisen voor aardrijkskunde, geschiedenis en natuur en techniek. Welke toetsen je moet doen, hangt af van je vooropleiding en je vakken. Bij de pabo van de CHE in Ede geldt voor de start in september 2026: je moet vóór de start één keer meedoen aan de toetsen. Haal je een toets niet, dan mag je beginnen, maar moet je hem in het eerste jaar alsnog halen. Lukt dat niet, dan moet je stoppen. Vraag bij jouw pabo of dat daar ook zo is."
- "Waarom staan er verschillende cijfers bij kans op werk?" Antwoord: "KiesMBO geeft de baankans van SBB: de verhouding tussen banen en werkzoekenden voor schoolverlaters. Studiekeuze123 laat zien welk deel van de afgestudeerden na 1,5 jaar werk heeft in het vakgebied. Dat zijn verschillende metingen. Vergelijk ze niet als een score."
- "Mag de gast dan wel de salade of de vis?" Antwoord: "Dat vraagt de taak niet, en de kaart zegt daar niets over. De taak vraagt alleen waar pinda of selderij in zit. Vraag het bij een meeloopdag aan een kok."
- "Is dit echte code?" Antwoord: "Nee. De code is vereenvoudigd en in het Nederlands geschreven. Het werk is wel echt: een test laat een fout zien, en je zoekt waar die zit."
- "Wat als er toch een te lange proeftijd in een contract staat?" Antwoord: "Volgens de wet (BW 7:652 lid 8) is een afspraak die tegen deze regels ingaat nietig. De wet maakt van 2 maanden dus niet zelf 1 maand. 1 maand is wat de winkel bij dit jaarcontract hoogstens geldig had kunnen afspreken. Wat dat precies betekent voor Robin, vraag je aan een jurist. Voor je eigen bijbaan: zie de les Je eerste bijbaan, of Rijksoverheid.nl."
- "Een leerling vond niets leuk. Wat nu?" Antwoord: "Dat is ook een uitkomst. Laat de leerling het werk kiezen dat het minst erg was, en opschrijven wat die daarvan nog wil weten."
- "Een tweetal is snel klaar. Wat nu?" Antwoord: "Lees een bonusvraag voor; die telt niet mee voor het slot. Kamer 1: de gast vraagt ook naar noten; wat vraag je de keuken? Kamer 2: verzin een vierde test voor de app; welke leeftijd kies je, en waarom? Kamer 3: schrijf een som waarbij Sam deze fout maakt, en een waarbij niet. Kamer 4: hoe lang moet het contract zijn, zodat 2 maanden proeftijd wel mag? (Antwoord: 2 jaar of langer, of een vast contract.)"
- "Waarom gaat de startcheck over ander werk?" Antwoord: "Zo noemt niets de beroepen van de taken vóór de taak. De check meet of leerlingen het idee meenemen: werk kun je vaak via meer niveaus bereiken, en elk werk heeft ook een minder bekende kant. Bij vwo 4 en 5 is de winst op de check klein; kijk vooral naar de proefkaart."
- "Wat leg je uit als een leerling moeite heeft met rekenen?" Antwoord: "Laat een buur voorrekenen. De vraag is welke fout Sam maakt, niet of jij snel rekent."

## Antwoordblad

Answers are given as the text on screen, without letters.

| Kamer | Vraag | Goed antwoord |
|---|---|---|
| 1 | Gerechten met pinda of selderij | Tomatensoep; Saté van kip; Stoofpot |
| 1 | Moet het restaurant het vertellen? | Ja. Ook vers eten uit de keuken telt mee. |
| 1 | **Cijfer** | **3** (tomatensoep, saté, stoofpot) |
| 2 | Regel met de fout | Regel 2 |
| 2 | Wat in regel 2 | als leeftijd >= 16: toon "Welkom" |
| 2 | **Cijfer** | **2** (regel 2) |
| 3 | Foute sommen | 52 - 18 = 46; 73 - 49 = 36; 62 - 39 = 37 |
| 3 | Patroon | Sam haalt bij de eenheden steeds het kleine cijfer van het grote af. |
| 3 | **Cijfer** | **3** (drie foute sommen) |
| 4 | Artikel | Artikel 2. Proeftijd |
| 4 | Advies | Nee. Bij een contract van 6 maanden mag er geen proeftijd in. |
| 4 | **Cijfer** | **1** (hoogstens 1 maand bij een contract van 1 jaar) |
| | **Code** | **3231** |

Start- en eindcheck vorm A: A1 Nee. Er zijn ook opleidingen voor dit werk op het mbo en het hbo.; A2 Kim kan daarna samenwerken met een arts. Arts word je na de master Geneeskunde (universiteit) en inschrijving in het BIG-register.; A3 Een verpleegplan maken en werken in wisselende diensten; A4 Paden en natuurgebieden controleren en rapporten schrijven. Vorm B: B1 Ja. Accountancy is er aan de universiteit, en ook op het hbo.; B2 Alex kan daarna samenwerken met een apotheker. Apotheker word je na de master Farmacie (universiteit) en inschrijving in het BIG-register.; B3 Een jaarrekening controleren en ondernemers advies geven; B4 Onderdelen ontwerpen en tekeningen en berekeningen maken.

## Nabespreken

End screen (`debrief`, "Praat erover met je buur"):
1. "Welke taak was leuker dan je dacht? Waarom?"
2. "Wat zag je niet in deze taken? Wat hoort er nog meer bij dat werk?"
3. "Bij welk werk zag je een route die je niet had verwacht?"

Per kamer (`discuss`):
- Kamer 1: "Een gast met een pinda-allergie komt echt eten. Wat moet de keuken nog meer doen dan de kaart lezen?"
- Kamer 2: "Hoe weet je zeker dat de fout weg is? Welke leeftijden test je opnieuw?"
- Kamer 3: "Hoe leg je Sam uit wat er misgaat, zonder dat Sam zich dom voelt?"
- Kamer 4: "Wat kan de winkel wel doen als ze toch een proeftijd wil?"

Teacher, extra (the design's proefkaart item "Wat paste bij mij?"): ask "Wat paste bij jou: werken met mensen, met cijfers, met regels, of iets maken?" as a conversation starter, not a test result. Debrief question 3 makes the end-screen list of reveals ("Dit neem je mee") something pupils read on purpose (gate, reveal length).

Als-dan-plan (prompt):
"Maak je eigen plan. Kies één ding dat je gaat doen.
Als ik ... (vandaag thuis ben / deze week mijn mentor of decaan zie / in het weekend tijd heb),
dan ... (zoek ik een open dag of meeloopdag op voor werk dat ik leuk of het minst erg vond / zoek ik op KiesMBO of Studiekeuze123 welke opleidingen bij dat werk horen / vraag ik mijn mentor of decaan hoe ik een dag kan meelopen in een bedrijf).
Zet er een datum bij en zeg het tegen je buur."

(Engine: the plan intro is the first and the last line joined; the three "als" choices each start with "ik"; the "binnen" choices are "een dag" / "een week" / "twee weken". The plan stays on screen only: never logged, never stored.)

Slotvraag (`teacher.closing`): "Welk werk wil je beter leren kennen? En via welke opleiding op het mbo, het hbo of de universiteit kom je daar?"

Lock (`lock`): title "Het slot", intro "Vul de vier cijfers in die je bij de taken hebt gevonden."

---

## Engine fit

Validated on 7 November 2026 (Revision 2) with the real data file `kamers-engine/lessons/werkproef-1.js`: `node build.js lessons/werkproef-1.js` builds without errors; `node tests/spec-compare.js` reports 0 mismatches for werkproef-1 and for the other five lessons; `node tests/lessons-e2e.js werkproef-1` runs the full playthrough (lock 3231, both checks 4 of 4, with the circling gate), the wrong-answer run, pointers, A/B assignment, logging (product `escape18-werkproef-1`), keyboard, 360 px, paper prints and the outdated banner; `node tests/werkproef-e2e.js` tests the six new optional features (below); `node tests/long-sentences.js`: 0 sentences over 20 words. No em or en dash in the spec or the data file.

Supported now, no change needed: `table` with `head` (menu, code, test, werkblad), `table` rows (etiket), `contract`, room `rules` with a custom `title` (one line shows no number), `multi` and `single`, `situ`, `legend`, `pointTo` with `doc`/`line`/`lines` and `rule`/`rules`, `clueFull`, `clueDocs` (with `'rules'`), `teacherNote`, `teacherDetail`, `discuss`, `sources`/`sourceNone`, check forms A/B (ids A1 to A4 and B1 to B4), the stop flow (minute 29), `teacher.plan` with `from`/`to`/`at`, `teacher.audience`, `teacher.faq`, `teacher.hideKern`, `materials`, `tip`, `care`, `answers` with `format: 'text'`, `slip` (12 fields and an intro, 1 per A4, with its own `button`), `plan` with `within`, `lock`, `debrief`, `pupil_feedback` taps, and the v3 teacher kit (Projectiemodus, Klaar in 15 minuten, Lesverslag). No option, prompt, nudge, hint or explanation uses "beide", "allebei", "geen van", "bovenstaande" or an option letter, so every question uses a fixed shuffle and none needs `keepOrder`.

New in Revision 2: six optional lesson-data features in `kamers-engine/src/` (default off; a lesson without them renders as before; validator in `build.js`; tests in `tests/werkproef-e2e.js`):
1. **`room.reveal`** `{ lines, src }`, in place of `remember`: after the digit, one card at the top of the screen with the digit, the heading (`revealTitle`, default "Zo kom je bij dit werk"), the lines, the lesson's `revealNote`, the button and the source line. The end screen ("Dit neem je mee"), the teacher's Kern and the Beroepenblad use the lines joined.
2. **`revealNote`** (lesson): one short line under every reveal.
3. **`clueGate`** `{ text, button }` (lesson): the digit field opens only after the tap; not logged, not stored.
4. **`rulesExtra`** (lesson): extra lines under "Zo werkt het" on the start screen.
5. **`beroepenblad`** `{ button, title, intro, note }` (lesson): a print button on the plan card and in step 3 of the kit; one A4 with the reveals per room, no answers or code.
6. **`slip.paper`** (end-screen line instead of "Vul je strookje op papier in.") and **slip field `choices`** (circle rows with a box per choice; counted in the A4 height estimate).

What the pilot still does without the design's later engine items, and the cost:
1. **Rating and first-guess taps** (design item 3): on paper only. Nothing new is logged.
2. **"Jullie top"** (design item 4): the end screen lists the four reveals in room order, not sorted by "leuk".
3. **`code` document** (design item 5): a table with "Regel" and "Code".
4. **Two slips** (design item 6): one slip; the step fields sit on the proefkaart.
5. **Bonus questions** (gate V1): the engine has no optional question outside the lock (Route 18 Engine fit 8), so four bonus questions are teacher text in the FAQ.
6. **The paper rooms** still show no reveal: the Beroepenblad is a separate A4, so the teacher hands it out with the rooms and pupils read one block per room.

Logging: only existing v3 events (`start`, `check`, `answer`, `room`, `lock`, `end`, `pupil_feedback`, `teacher_start`, `feedback`, `plan`, `reuse`), only after the teacher chose Ja; product `escape18-werkproef-1`; no free text from pupils. The pilot measures time per room and first-try right from `answer` and `room`, which pairs reach room 4 from `room`, the check scores from `check`, and fun and learning from `pupil_feedback`. LOGGING_SPEC v3 (7 November 2026) does not have the Werkproef events; a later version would add `predict {room}` (first guess), `taste {room, like: 1-3, hard: 1-3, day: 'ja'|'misschien'|'nee'}` per task, `pick {rooms: [ids]}` for a free-choice version, and perhaps `reveal {room, sec}`; each needs the whitelist in `src/log.js`, the backend whitelist and a line in `privacy.html`. Not built.

---

## Praktijkverificatie

**Every task needs practitioner verification before release.** Per room: 2 practitioners and 1 student or trainee in the field, from at least two different institutions or employers (design section 2). Nobody had checked any task by 7 November 2026. Ready-to-send pages, one per job, in Dutch B1: `outreach/practitioners/kok.md`, `softwareontwikkelaar.md`, `leraar-basisonderwijs.md`, `jurist.md`. Each has a short intro, the task as pupils see it, the answer and why, the 5-item form and yes/no questions built from the gate's simulated practitioner doubts. The gate's persona 5 opinions are hypotheses, not sign-off; nothing from them is in pupil text. Record each check in the source table as "gecontroleerd door: [rol], [datum]" (a name only with consent), and after sign-off add a teacher line "Taken gecontroleerd door: ..." (gate D10).

### Formulier (5 vragen, the same on every page)

1. **Is de taak echt?** Komt deze taak, of iets dat er sterk op lijkt, zo voor in jouw werk? ja / een beetje / nee. Wat zou je veranderen?
2. **Klopt het antwoord?** Is met de regelkaart en de papieren maar één antwoord goed, en is dat het antwoord hierboven? ja / nee, want ...
3. **Is het eerlijk voor 16-jarigen?** Kan een leerling van havo 4 of vwo 4 dit met de regelkaart in 5 minuten? te makkelijk / goed / te moeilijk. Welk woord of welke stap is te moeilijk?
4. **Wat mist er?** Wat hoort bij dit werk dat de taak of de uitleg niet laat zien, ook aan de minder leuke kant? Klopt de zin "Minder leuk: ..."?
5. **Teken je ervoor?** Mag deze taak zo in de les? ja / ja, met deze wijzigingen: ... / nee. Je rol, jaren in het vak, datum (naam alleen als je dat wilt).

### Extra ja/nee-vragen per taak (on each job page)
- Kok: Waarschuw je een gast met een pinda-allergie ook voor noten? Is kruisbesmetting de volgende stap na het etiket? Lees je het etiket van elk product bij elke levering? Mist "lang staan, hitte, avond- en weekendwerk" bij "minder leuk"?
- Softwareontwikkelaar: Is fouten zoeken met een testverslag een echte taak voor een beginner? Is Nederlandse pseudocode met `>=` eerlijk? Test je na de reparatie alle leeftijden opnieuw? Is "opschrijven wat je deed" een minder leuke kant? Klopt het dat veel mensen met een mbo-diploma direct als developer werken?
- Leerkracht: Past aftrekken met inwisselen tot 100 bij groep 5? Zegt jouw school "inwisselen", of "lenen" of "splitsen"? Is "Sam wisselt niet in" de fout die je hier ziet? Hoort "nakijken in de avond" of "werkdruk" bij "minder leuk"?
- Jurist: Is een contract controleren op de proeftijd werk van een jurist, of meer van HR of een juridisch medewerker? Is een proeftijd van 2 maanden in een contract van 1 jaar nietig, zodat er helemaal geen proeftijd is? Klopt regel 4 over de cao zoals hij er staat? Moet de les zeggen wat de winkel wel kan doen?

---

## Brontabel

All pages opened on 7 November 2026 (HTML downloaded with curl and read as text; Rijksoverheid and Ondernemersplein also with WebFetch). Page dates are the page's own metadata where it has one. "Valid until": when the fact is next expected to change; "check Dec 2026" is the next scheduled check, after SBB's November baankans measurement. KiesMBO shows a bol and a bbl value; on every KiesMBO page below both values are the same.

| Key | Fact (as used) | Source | Read | Valid until |
|---|---|---|---|---|
| nvwa14 | 14 allergens on an EU list (1169/2011); information always required, pre-packed and not pre-packed; "Pinda's (aardnoten)", "Noten" (with walnoten), "Selderij ... zowel selderijzaad, knolselderij als bladselderij", "Mosterd"; derived ingredients count, incl. "kruiden en specerijen met de allergenen selderij of mosterd(zaad)"; for noten and glutenbevattende granen say which | [NVWA, Over welke allergenen moet ik informatie geven?](https://www.nvwa.nl/onderwerpen/voedselveiligheid/allergenen/over-welke-allergenen-moet-ik-informatie-geven) (DCTERMS.modified 17 Mar 2026) | 7 Nov 2026 | No set date; check Dec 2026 |
| nvwaOnverpakt | Horeca must inform about allergens in unpackaged food; "U moet over 14 allergenen informatie geven aan uw klanten"; written or oral under 3 conditions; inspectors; suppliers must inform their buyers | [NVWA, Allergenen bij onverpakte levensmiddelen](https://www.nvwa.nl/onderwerpen/voedselveiligheid/allergenen/allergenen-bij-onverpakte-levensmiddelen) (modified 17 Mar 2026) | 7 Nov 2026 | No set date; check Dec 2026 |
| euAnnexII | Regulation 1169/2011, Annex II "Stoffen of producten die allergieën of intoleranties veroorzaken": 14 items, incl. "5. Aardnoten en producten op basis van aardnoten.", "8. Noten, namelijk ... walnoten", "9. Selderij en producten op basis van selderij.", "10. Mosterd en producten op basis van mosterd."; Article 44(1)(a): the allergen information is mandatory for non-prepacked food | [EUR-Lex, Verordening (EU) 1169/2011, geconsolideerde versie 1 januari 2018](https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:02011R1169-20180101) | 7 Nov 2026 | Until the regulation changes |
| roProeftijd | ≤ 6 months temporary: no proeftijd; > 6 months and < 2 years, or temporary without end date: max 1 month; permanent or ≥ 2 years: max 2 months; other rules for temporary contracts only via cao or a regeling of a bevoegd bestuursorgaan; "Tijdens deze periode kunnen u en uw werkgever de arbeidsovereenkomst direct opzeggen" | [Rijksoverheid, Hoelang duurt mijn proeftijd?](https://www.rijksoverheid.nl/onderwerpen/arbeidsovereenkomst-en-cao/vraag-en-antwoord/hoelang-duurt-een-proeftijd) (modified 12 Aug 2026) | 7 Nov 2026 | No set date; check Dec 2026 |
| opProeftijd | Same lengths; "De proeftijd is nooit langer dan 2 maanden"; written; no proeftijd at extension, temporary to permanent (unless the job changes), or opvolgend werkgeverschap ("eerst voor u werkte via een uitzendbureau"); "mogen u en uw medewerker de arbeidsovereenkomst direct en zonder reden opzeggen"; cao = "collectieve arbeidsovereenkomst" | [Ondernemersplein (RVO), Proeftijd afspreken met een werknemer](https://ondernemersplein.overheid.nl/wetten-en-regels/proeftijd-afspreken-met-een-werknemer/) (no date shown) | 7 Nov 2026 | No set date; check Dec 2026 |
| bwProeftijd | BW 7:652 lid 1 to 8: equal for both, written; max 2 months for onbepaalde tijd (lid 3) and for bepaalde tijd of 2 years or longer (lid 4b); max 1 month for longer than 6 months and shorter than 2 years (lid 4a) and without a calendar end date (lid 5); no proeftijd for 6 months or shorter (lid 6a), a successive contract with the same employer (lid 6b) or a successor employer (lid 6c); deviation only from lid 4a and 5, by cao or bestuursorgaan (lid 7); "Elk beding in strijd met dit artikel is nietig." (lid 8) | [wetten.overheid.nl, Burgerlijk Wetboek Boek 7, geldend vanaf 8 oktober 2026](https://wetten.overheid.nl/BWBR0005290/2026-10-08) (Titel 10, artikel 652) | 7 Nov 2026 | Until the law changes |
| kmKok | Kok, niveau 2, crebo 27060, 1 to 2 jaar, doorstroom to niveau 3; baankans 10; "Je helpt mee met de ontwikkeling van de menukaart" | [KiesMBO, Kok](https://www.kiesmbo.nl/opleidingen/horeca-bakkerij-en-recreatie/horeca-toerisme-en-recreatie/kok) | 7 Nov 2026 | Baankans: check Dec 2026 |
| kmZwKok | Zelfstandig werkend kok, niveau 3, crebo 27062, 2 to 3 jaar; baankans 9; "Je houdt rekening met dieetwensen"; "Je beheert keukenvoorraden"; tag "stressbestendig" | [KiesMBO, Zelfstandig werkend kok](https://www.kiesmbo.nl/opleidingen/horeca-bakkerij-en-recreatie/horeca-toerisme-en-recreatie/zelfstandig-werkend-kok) | 7 Nov 2026 | Baankans: check Dec 2026 |
| kmGespKok | Gespecialiseerd kok, niveau 4, crebo 27064, 3 to 4 jaar; doorstroom to hbo; baankans 10, "Er zijn heel veel vacatures die passen bij deze opleiding"; "Je vindt het niet erg om op wisselende tijden te werken" | [KiesMBO, Gespecialiseerd kok](https://www.kiesmbo.nl/opleidingen/horeca-bakkerij-en-recreatie/horeca-toerisme-en-recreatie/gespecialiseerd-kok) | 7 Nov 2026 | Baankans: check Dec 2026 |
| kmLeidKeuken | Leidinggevende keuken, niveau 4, crebo 27065, 3 to 4 jaar, doorstroom to hbo; baankans 10; "Daarbij let je ook op de wettelijke regels en voorschriften die gelden"; "Je stelt de menukaart op" | [KiesMBO, Leidinggevende keuken](https://www.kiesmbo.nl/opleidingen/horeca-bakkerij-en-recreatie/horeca-toerisme-en-recreatie/leidinggevende-keuken) | 7 Nov 2026 | Baankans: check Dec 2026 |
| skChefkok | Tasks "Bedenken menu en bespreken met team", "Bewaken overzicht tijdens drukte"; "Oeps! Je hebt een beroep gevonden waar we geen passende studie aan kunnen koppelen."; link to mbo-4 Gespecialiseerd kok; other jobs Hotelmanager, Restaurantmanager | [Studiekeuze123, Chef-kok](https://www.studiekeuze123.nl/beroepen/toerisme-en-horeca/3434-chef-kok) | 7 Nov 2026 | No set date |
| skHotel | "Je leert hoe je binnen deze organisaties leiding geeft en adviseert" (hotels, restaurants, cateringbedrijven ...); 56% binnen het vakgebied, 75% op niveau; 14 maanden; 36% vast; "goed" (ROA tot 2028); Restaurantmanagers 5% | [Studiekeuze123, Hotel management (hbo-bachelor)](https://www.studiekeuze123.nl/studies/34411-hotel-management-hbo-bachelor) | 7 Nov 2026 | Check Dec 2026 |
| kmSd | Software developer, niveau 4, crebo 25998, 3 to 4 jaar; doorstroom to hbo; baankans 7, "Er zijn vacatures die passen bij deze opleiding, al gaan de meeste mensen na hun diploma een vervolgopleiding doen om een betere baan te kunnen vinden."; "Je test de programmatuur" | [KiesMBO, Software developer](https://www.kiesmbo.nl/opleidingen/media-vormgeving-en-ict/ict/software-developer) | 7 Nov 2026 | Baankans: check Dec 2026 |
| skIct | HBO-ICT; Softwareontwikkelaars 52%; 80% binnen het vakgebied, 88% op niveau; 3 maanden; 71% vast; "minder goed" (ROA tot 2028) | [Studiekeuze123, ICT (hbo-bachelor)](https://www.studiekeuze123.nl/studies/30020-ict-hbo-bachelor) | 7 Nov 2026 | Check Dec 2026 |
| skInfWo | Wo bachelor Informatica exists; no labour data shown | [Studiekeuze123, Informatica (wo-bachelor)](https://www.studiekeuze123.nl/studies/56978-informatica-wo-bachelor) | 7 Nov 2026 | No set date |
| skInfMaster | Master Informatica; Softwareontwikkelaars 35%; 82% binnen het vakgebied; "goed" (ROA tot 2028) | [Studiekeuze123, Informatica (wo-master)](https://www.studiekeuze123.nl/studies/66978-informatica-wo-master) | 7 Nov 2026 | Check Dec 2026 |
| skSoftw | Tasks "Schrijven en testen van code", "Overleggen met ontwerpers en gebruikers", "Oplossen van fouten of storingen", "Documenteren van je werk en resultaten" | [Studiekeuze123, Softwareontwikkelaar](https://www.studiekeuze123.nl/beroepen/ict/2512-softwareontwikkelaar) | 7 Nov 2026 | No set date |
| kmOa | Onderwijsassistent, niveau 4, crebo 25698; "Als onderwijsassistent geef je zelf geen les"; doorstroom to hbo; baankans 6, "Er zijn genoeg vacatures die passen bij deze opleiding. De komende jaren wordt dat moeilijker." | [KiesMBO, Onderwijsassistent](https://www.kiesmbo.nl/opleidingen/zorg-en-welzijn/welzijn/onderwijsassistent) | 7 Nov 2026 | Baankans: check Dec 2026 |
| skPabo | Lerarenopleiding Basisonderwijs (hbo); Docenten basisonderwijs 87% (of working graduates); 89% binnen het vakgebied; 1 maand; 72% vast; "niet mogelijk om de werkgelegenheid te bepalen" | [Studiekeuze123, Lerarenopleiding basisonderwijs (hbo-bachelor)](https://www.studiekeuze123.nl/studies/34808-lerarenopleiding-basisonderwijs-hbo-bachelor) | 7 Nov 2026 | Check Dec 2026 |
| skPwpo | "Je krijgt alleen universitair onderwijs en kunt in drie jaar je lesbevoegdheid halen."; one university listed; no labour data | [Studiekeuze123, Pedagogische Wetenschappen van Primair Onderwijs (wo-bachelor)](https://www.studiekeuze123.nl/studies/59329-pedagogische-wetenschappen-van-primair-onderwijs-wo-bachelor) | 7 Nov 2026 | No set date |
| skLeraar | Tasks "Geven van les in verschillende vakken", "Administratie voortgang leerlingen", "Overleggen met collega's en ouders", "Begeleiden kinderen die extra aandacht nodig hebben" | [Studiekeuze123, Leraar basisonderwijs](https://www.studiekeuze123.nl/beroepen/onderwijs-opvoeding/2341-leraar-basisonderwijs) | 7 Nov 2026 | No set date |
| skMboHbo | "Als je een mbo-diploma op niveau 4 hebt behaald, kun je doorstromen naar een hbo-opleiding."; pabo: "Voor mbo- en havo-studenten gelden er strengere toelatingseisen." (the old URL redirects here) | [Studiekeuze123, Toelatingseisen hbo](https://www.studiekeuze123.nl/wat-ga-jij-kiezen/artikel/toelatingseisen-hbo) | 7 Nov 2026 | No set date |
| cheToets (FAQ pabo) | CHE (Christelijke Hogeschool Ede), letter for instroom september 2026: three Cito toelatingstoetsen (aardrijkskunde, geschiedenis, natuur & techniek); "Voor de start is er een verplichte kans voor de toetsen die je moet maken." "Als een toets niet wordt behaald, dan mag je beginnen, maar moet er in het eerste jaar van inschrijving alsnog worden voldaan ... Als dat niet lukt, moet je de opleiding verlaten." | [CHE, Brief voor aspirant-studenten, september 2026 (PDF)](https://www.che.nl/media/vrtkyhfy/briefvooraspirantstudenten-september-2026a.pdf) | 7 Nov 2026 | Instroom september 2026; check for 2027 |
| roPabo | Pabo entry requirements for havo and mbo concern "aardrijkskunde, geschiedenis en natuur&techniek"; a 2022 experiment lets them meet the requirements in the first year | [Rijksoverheid, Kabinet wil experiment om toegankelijkheid pabo te vergroten (11 Feb 2022)](https://www.rijksoverheid.nl/actueel/nieuws/2022/02/11/kabinet-wil-experiment-om-toegankelijkheid-pabo-te-vergroten) | 7 Nov 2026 | Status of the experiment after 2025 not read; teacher text names only the subjects |
| kmLegal | Legal, insurance & HR services specialist, niveau 4, crebo 25726; doorstroom to hbo; baankans 10, "Er zijn heel veel vacatures die passen bij deze opleiding."; "Als medewerker op een juridische afdeling of personeelszaken ..."; workplaces incl. notaris, advocaat, verzekeringskantoor, rechtbank; "De kleine lettertjes, daar ga je veel van zien!" | [KiesMBO, Legal, insurance & HR services specialist](https://www.kiesmbo.nl/opleidingen/economie-en-ondernemen/financieel-en-juridisch/legal-insurance-hr-services-specialist) | 7 Nov 2026 | Baankans: check Dec 2026 |
| skRechten | HBO-Rechten; "zelfstandige juridische functie of ... ondersteunende rol"; Juristen 25%, Notarieel en juridisch assistenten en deurwaarders 23%; 74% binnen het vakgebied; "goed" (ROA tot 2028) | [Studiekeuze123, HBO-Rechten (hbo-bachelor)](https://www.studiekeuze123.nl/studies/39205-hbo-rechten-hbo-bachelor) | 7 Nov 2026 | Check Dec 2026 |
| skRgWo | Wo bachelor Rechtsgeleerdheid; no labour data | [Studiekeuze123, Rechtsgeleerdheid (wo-bachelor)](https://www.studiekeuze123.nl/studies/50700-rechtsgeleerdheid-wo-bachelor) | 7 Nov 2026 | No set date |
| skRgMaster | Master Rechtsgeleerdheid; Juristen n.e.g. 35%, Advocaten 18%; 78% binnen het vakgebied; "goed" (ROA tot 2028) | [Studiekeuze123, Rechtsgeleerdheid (wo-master)](https://www.studiekeuze123.nl/studies/60084-rechtsgeleerdheid-wo-master) | 7 Nov 2026 | Check Dec 2026 |
| skJurist | Tasks "Bestuderen van wetten en uitspraken", "Schrijven van adviezen of contracten", "Controleren of regels goed worden toegepast"; "Contractspecialisten maken en controleren contracten" | [Studiekeuze123, Jurist](https://www.studiekeuze123.nl/beroepen/maatschappij-recht/2619-jurist) | 7 Nov 2026 | No set date |
| kmUitleg | Baankans: source SBB; ratio of jobs to job seekers for school leavers, 10-point scale; "Het meetmoment voor Baankans is november van ieder jaar." | [KiesMBO, Extra uitleg over Studie in Cijfers](https://www.kiesmbo.nl/extra-uitleg-over-studie-in-cijfers) | 7 Nov 2026 | Check Dec 2026 |
| kmNatuur (check A1, A4) | Beheerder/uitvoerder natuur, water en natuurrecreatie, niveau 4, crebo 27086; "Je draagt zorg voor flora, fauna, bodem en water"; workplaces incl. Staatsbosbeheer, Natuurmonumenten; doorstroom to hbo | [KiesMBO, Beheerder/uitvoerder natuur, water en natuurrecreatie](https://www.kiesmbo.nl/opleidingen/groen/groen/beheerderuitvoerder-natuur-water-en-natuurrecreatie) | 7 Nov 2026 | No set date |
| skBnbHbo (check A1) | HBO Bos- en Natuurbeheer; "Boswachters, bos- en natuurbeheerders 18%" among the most chosen jobs; 78% binnen het vakgebied | [Studiekeuze123, Bos- en natuurbeheer (hbo-bachelor)](https://www.studiekeuze123.nl/studies/34221-bos-en-natuurbeheer-hbo-bachelor) | 7 Nov 2026 | No set date |
| skBnbWo (check A1) | Wo bachelor Bos- en Natuurbeheer, "gericht op het begrijpen en beheren van bos- en natuurgebieden" | [Studiekeuze123, Bos- en natuurbeheer (wo-bachelor)](https://www.studiekeuze123.nl/studies/56219-bos-en-natuurbeheer-wo-bachelor) | 7 Nov 2026 | No set date |
| skBoswachter (check A4) | Tasks "Controleren wandelpaden en natuurgebieden", "Meten planten- of diersoorten", "Schrijven rapporten over natuur en milieu" | [Studiekeuze123, Boswachter, bos- en natuurbeheerder](https://www.studiekeuze123.nl/beroepen/natuur-milieu-techniek/3143-boswachter-bos-en-natuurbeheerder) | 7 Nov 2026 | No set date |
| kmDoka (check A2) | Doktersassistent, niveau 4, crebo 27142; "assisteer je een huisarts of medisch specialist"; "Met deze opleiding kun je doorstromen naar het hbo." | [KiesMBO, Doktersassistent](https://www.kiesmbo.nl/opleidingen/zorg-en-welzijn/zorg/doktersassistent) | 7 Nov 2026 | No set date |
| skGen (check A2) | Wo bachelor Geneeskunde: "(Basis)arts word je pas na afronding van de co-assistentschappen en het afleggen van het artsexamen." | [Studiekeuze123, Geneeskunde (wo-bachelor)](https://www.studiekeuze123.nl/studies/56551-geneeskunde-wo-bachelor) | 7 Nov 2026 | No set date |
| wetBig (check A2, B2) | Wet BIG art. 3 lid 1: registers "als: arts, tandarts, apotheker, ..."; art. 4 lid 1 and 2: only a registered person may use the title, others are forbidden to | [wetten.overheid.nl, Wet op de beroepen in de individuele gezondheidszorg](https://wetten.overheid.nl/BWBR0006251/) ("Geldend van 05-07-2025 t/m heden") | 7 Nov 2026 | Until the law changes |
| skGenMaster (check A2) | "Alleen na afronding van deze masterstudie ben je bevoegd om je te registreren als (basis)arts."; Huisartsen 62%, Medisch specialisten 31% | [Studiekeuze123, Geneeskunde (wo-master)](https://www.studiekeuze123.nl/studies/66551-geneeskunde-wo-master) | 7 Nov 2026 | No set date |
| kmVerpl (check A3) | Mbo-Verpleegkundige, niveau 4, crebo 27145; "Je stelt een verpleegplan op en verzorgt de patiënt"; "Je draagt de zorg over en overlegt met collega's"; tag "ploegen - wisselende diensten" | [KiesMBO, Mbo-Verpleegkundige](https://www.kiesmbo.nl/opleidingen/zorg-en-welzijn/zorg/mbo-verpleegkundige) | 7 Nov 2026 | No set date |
| kmBac (check B1) | Business administration & control specialist, niveau 4, crebo 25725; workplaces "Bij administratiekantoren of accountantskantoren"; doorstroom to hbo | [KiesMBO, Business administration & control specialist](https://www.kiesmbo.nl/opleidingen/economie-en-ondernemen/financieel-en-juridisch/business-administration-control-specialist) | 7 Nov 2026 | No set date |
| skAccHbo (check B1) | HBO Accountancy; Accountants 20% among the most chosen jobs; 87% binnen het vakgebied | [Studiekeuze123, Accountancy (hbo-bachelor)](https://www.studiekeuze123.nl/studies/34406-accountancy-hbo-bachelor) | 7 Nov 2026 | No set date |
| skAccWo (check B1) | Wo bachelor Accountancy: "Naast je studie ben je vier dagen per week werkzaam bij een accountantskantoor." | [Studiekeuze123, Accountancy (wo-bachelor)](https://www.studiekeuze123.nl/studies/56435-accountancy-wo-bachelor) | 7 Nov 2026 | No set date |
| skAccountant (check B3) | Tasks "Controleren van jaarrekeningen en financiële rapporten", "Adviseren over geld en regels", "Overleggen met collega's en ondernemers" | [Studiekeuze123, Accountant](https://www.studiekeuze123.nl/beroepen/economie-bedrijf/2411-accountant) | 7 Nov 2026 | No set date |
| kmApo (check B2) | Apothekersassistent, niveau 4, crebo 27141; "Je werkt nauw samen met je collega-assistenten, de apotheker"; "Met deze opleiding kun je doorstromen naar het hbo." | [KiesMBO, Apothekersassistent](https://www.kiesmbo.nl/opleidingen/zorg-en-welzijn/zorg/apothekersassistent) | 7 Nov 2026 | No set date |
| skFarmMaster (check B2) | Master Farmacie: "te beantwoorden aan de eisen die de wet aan het beroep van apotheker stelt"; Apothekers 31% | [Studiekeuze123, Farmacie (wo-master)](https://www.studiekeuze123.nl/studies/66157-farmacie-wo-master) | 7 Nov 2026 | No set date |
| skWtb (check B4) | Tasks "Ontwerpen van onderdelen of machines", "Maken van tekeningen en berekeningen", "Controleren van veiligheid en kwaliteit" | [Studiekeuze123, Werktuigbouwkundige](https://www.studiekeuze123.nl/beroepen/natuur-milieu-techniek/2144-werktuigbouwkundige) | 7 Nov 2026 | No set date |
| roa2030 (teacher only) | Published 25 Nov 2025; bachelor techniek en ict "goed"; master informatica "redelijk"; mbo4 ict, media en vormgeving "slecht"; mbo4 dienstverlening (incl. horeca) "matig"; bachelor dienstverlening (incl. horeca) "matig"; bachelor economie en recht "matig"; master economie en recht "redelijk", except economie en econometrie ("goed"); lerarenopleiding basisonderwijs "goed"; "Voor docenten in het vo en po blijven de knelpunten groot." | [ROA, De arbeidsmarkt naar opleiding en beroep tot 2030, ROA-R-2025/8](https://cris.maastrichtuniversity.nl/ws/portalfiles/portal/286490364/ROA_R_2025_8_anob_tot_2030.pdf) (Table 3.1 and section 3) | 7 Nov 2026 | Until the next ROA release |

## Onzeker (not verifiable today, or verified only in part)

- **Practitioner checks: none done.** Authenticity, difficulty for 16-year-olds and the "minder leuk" lines are the team's reading of official task lists. The gate's persona 5 is simulated. The lesson is a pilot until two practitioners and one student sign each card.
- **Too long a proeftijd.** BW 7:652 lid 8 says a clause against the article is "nietig"; the article has no rule that turns 2 months into 1. The teacher detail and the FAQ now say that (check B 2); they do not say that Robin has no proeftijd at all, because no page read today says so (case law was not read). Pupil text says nothing about it; the digit clue asks what the shop may agree at most.
- **Kruisbesmetting and sporen**: no page about it was read. Not in the task; first extra question for the kok.
- **"Inwisselen", "lenen" or "splitsen", and the groep 5 level**: no official page read. Leerkracht questions.
- **Pabo admission**: the Rijksoverheid news of 2022 describes a three-year experiment; goedvoorbereidnaardepabo.nl blocks downloads (Cloudflare). Check B round 2 cites HU and Hogeschool Rotterdam for the 2026-2027 rule (start after the compulsory test chance, missing tests in year 1); I could not open those pages, but I read the same rule in a pabo's own letter for instroom september 2026 (CHE, Ede; row cheToets). The FAQ therefore states it for the CHE and tells the pupil to ask their own pabo, and it does not mention exemptions (no page read today states them for pabo tests).
- **`>=` and pseudocode**: no source on which languages use `>=`; the lesson makes no claim about real languages.
- **KiesMBO baankans date**: measured each November, but the page does not say which November the shown value is from. Pupil text says "geraadpleegd op 7 november 2026" and the revealNote says the numbers may be from earlier years (check B 6).
- **Studiekeuze123 percentages**: graduates "al anderhalf jaar klaar"; the survey year is not on the page.
- **Software developer doorstroom 50%**: KiesMBO shows it under bol ("Landelijk percentage na het behalen van een mbo-diploma in het afgelopen schooljaar"); the bbl column shows no doorstroom. The reveal gives the bol figure without the word bol; the teacher detail says it.
- **Studiekeuze123 against ROA 2030**: Studiekeuze123 forecasts are "tot 2028"; ROA 2030 differs for ICT, horeca and recht. Pupil text uses measured outcomes, not forecast verdicts.
- **Check-form jobs for later sets**: boswachter, verpleegkundige, accountant and werktuigbouwkundige are on the design's list of twelve. A later Werkproef with those rooms needs other jobs in its checks.
- **Advocaat or rechter worden**: which degree is required was not read; the FAQ sends to Studiekeuze123.

## Voor een nieuw schooljaar

The rooms carry no school-year dates except the contract (1 January to 31 December 2027). For a class after 2027, move both dates one year; the digit (1) depends only on the length. Re-read every KiesMBO baankans and every Studiekeuze123 line each December and change the read date in the four reveal source lines ("geraadpleegd op 7 november 2026"); check the crebo numbers. The lock code 3231 depends only on the tasks. Owner of the yearly update: the content team, in December.

---

## Changelog

**Revision 3 (7 Nov)**, after ChatGPT check B round 2 (`qa/checkB/werkproef-1_round2.md`, FAIL: 1 ERROR, 2 RISK; 72 claims OK). **Lock code unchanged: 3231**; room answers and digits unchanged.
- 1 (ERROR, software reveal): applied. "Van de studenten die de bol-opleiding afrondden, ging 50% daarna naar het hbo." (kmSd shows "Doorstroom naar hbo 50%" under bol only.) Teacher detail: "bij bbl toont KiesMBO geen doorstroom".
- 2 (RISK, pabo FAQ): applied in a cautious form. Verified on a pabo's own page for instroom september 2026 (CHE, Ede: the compulsory test chance before the start; a test not passed may be passed in year 1; otherwise you leave). The FAQ states this for the CHE and says "Vraag bij jouw pabo of dat daar ook zo is." Not stated: exemptions, and that all pabos do this (HU and Hogeschool Rotterdam pages not read). New source cheToets.
- 3 (RISK, A2/B2 title): applied. "Arts word je na de master Geneeskunde (universiteit) en inschrijving in het BIG-register." and the same for apotheker with the master Farmacie (Wet BIG art. 3 and 4, new source wetBig; skGenMaster "bevoegd om je te registreren als (basis)arts"). The wrong options were lengthened to keep the right one from being the clearly longest (A2 17, 17, 20; B2 20, 18, 17).

**Revision 2 (7 Nov)**, after ChatGPT check B (`qa/checkB/werkproef-1.md`, FAIL: 1 ERROR, 9 RISK) and the pupil playtest (`qa/gate_werkproef1_G4.md`, READY WITH FIXES, 1 BLOCKER for paper). Every changed fact was read again on its page today (dl copies of kmSd, kmOa, kmGespKok, skChefkok, skHotel, skGen, skGenMaster, skFarmMaster, kmDoka, kmApo, bwProeftijd, opProeftijd, roPabo). **Lock code unchanged: 3231**; every digit re-derived (3 dishes, regel 2, 3 sums, 1 month). Room answers unchanged.

Check B:
- 1 (ERROR, Artikel 5 a second defensible answer in 4.1): applied. Artikel 5 now "Bij een geldige proeftijd mogen Robin en de winkel het contract direct opzeggen." (Ondernemersplein "Tijdens deze proeftijd mogen u en uw medewerker de arbeidsovereenkomst direct en zonder reden opzeggen"; BW 7:652 lid 8).
- 2 (nietig clause not cut to 1 month): applied in the teacher detail and FAQ ("De wet maakt van 2 maanden dus niet zelf 1 maand"; lid 8 has no such rule). The checker's "Er geldt dus niet automatisch alsnog een maand proeftijd" is covered; "no proeftijd at all" is not stated (Onzeker). The digit clue now asks what the shop may agree at most.
- 3 (software "De meesten leren daarna verder"): applied with the measured figure, "Van de studenten met dat diploma ging 50% daarna naar het hbo" (kmSd, bol).
- 4 (onderwijsassistent quote cut): applied, "KiesMBO verwacht wel dat dat de komende jaren moeilijker wordt."
- 5 (what the measures mean): applied as `revealNote`, two short sentences on every reveal card and on the Beroepenblad.
- 6 (date wording): applied, source line "KiesMBO en Studiekeuze123, geraadpleegd op 7 november 2026." and "soms uit eerdere jaren" in the revealNote.
- 7 (kok university line too broad): applied, "Studiekeuze123 koppelt geen hbo- of universitaire studie aan chef-kok." (skChefkok "Oeps! ...").
- 8 (A2/B2 certainty, master): applied, "kan daarna samenwerken met" and "Arts word je na de bachelor en master Geneeskunde (universiteit)" / "Apotheker word je na de master Farmacie (universiteit)".
- 9 (pabo FAQ): applied in part. The dependence on vooropleiding and subjects is stated; the 2026-2027 start rule is not (not readable today; Onzeker).
- 10 (gender line): applied, care point 2 "Zeg niet dat een beroep bij een bepaald gender hoort. ..."

Pupil playtest G4:
- B1 (paper has no reveals): applied. New print "Beroepenblad" (`beroepenblad`), one A4 per pair, with the four reveals and the instruction to circle first; button on the plan card and in step 3 of the kit; note under the buttons; care point 7.
- S1 (circling not explicit, not enforced): applied. "Zo werkt het" has a fifth line (`rulesExtra`); the digit field opens only after "Klaar, ik heb omcirkeld" (`clueGate`, text "Omcirkel bij taak {n}: was het leuk? Was het moeilijk?"). The clues no longer start with "Omcirkel eerst taak N".
- S2 (dense reveal below the fold): applied. `reveal` with three lines (route first, then the two measures by source, then "Minder leuk"), the revealNote, then the button, then the source line; one card at the top, button above the fold at 1366 x 768 and 1024 x 768 (tested).
- S3 (start check answerable by wording): applied. Q1 is now a yes/no level question with different right answers in A ("Nee") and B ("Ja"); Q2 options all share the build and length; "nooit" is gone from Q3.
- S4 ("Nodig" line): applied, "een apparaat per tweetal (laptop, Chromebook of telefoon), een pen voor de proefkaart en een digibord of beamer."; the print instructions moved to care point 7.
- S5 (no space to circle; "strookje"): applied. Slip `choices`: a box per choice, one row per scale; end-screen line "Vul je proefkaart op papier in." (`slip.paper`). 259.6 mm of 266 mm (estimate; real print checked by `tests/werkproef-e2e.js`).
- N8: applied (hint 1.1 "Staat alles wat in een gerecht zit op de menukaart?"; 4.2 option c as long as the others). N9: applied (follow-up line only in care point 6, no longer in the check key line; answer row "Moet het restaurant het vertellen?"). N1 is covered by the reveal heading "Zo kom je bij dit werk" and the route-first line.
- N2, N3, N4, N6, N7, N10: engine-wide, not in this lesson's scope. N5 (a digit that needs a step): not applied, it would change the code.

**Revision 1 (7 November 2026)**, after fact check A (`content_new/factcheck_A_werkproef-1.md`, PASS, 0 ERROR, 7 RISK) and the persona gate (`qa/gate_werkproef1_personas.md`, READY WITH FIXES, 1 BLOCKER). Every new fact was read on its page today (source table rows bwProeftijd, euAnnexII, roPabo, skMboHbo new URL, and the twelve check-form rows). **Lock code unchanged: 3231.** Room answers unchanged except that 4.1 has a fifth option (Artikel 5, wrong) and its right option id is now e; every digit is re-derived (3 dishes, regel 2, 3 sums, 1 month).

Fact check A:
- A1 (menu "bouillon" against label "runderbouillon"): applied. Menu m4 now "runderbouillon"; 1.1 explanation follows.
- A2 (pabo FAQ follows an old Studiekeuze123 phrasing): applied adjusted. The FAQ and teacher detail name the subjects (Rijksoverheid 2022: "aardrijkskunde, geschiedenis en natuur&techniek") and send to the pabo's site. The experiment's current status was not read, so its "in het eerste jaar" route is not stated.
- A3 (BW 7:652 and Annex II readable): applied. Both read by me today; rows bwProeftijd and euAnnexII added; removed from Onzeker; r4 now states the cao scope (lid 7); the teacher detail lists lid 1 to 8; FAQ 7 cites lid 8 "nietig" and leaves the practical meaning to a jurist.
- A4 (skMboHbo URL redirects): applied, new URL.
- A5 (ROA "behalve econometrie"): applied, "behalve de master economie en econometrie".
- A6 (NVWA against EU rules): applied. Rule box title "Regels (EU-lijst, uitleg NVWA)"; 1.2 prompt "Wat klopt volgens de regels?"; gloss "Die dienst van de overheid controleert of restaurants de regels volgen".
- A7 (opvolgend werkgeverschap): applied. Intro "Robin werkte nog nooit bij deze winkel, ook niet via een uitzendbureau."

Persona gate:
- D1 (BLOCKER, start check names the room jobs): applied. Both forms now ask about six other jobs (both forms are a start check for half the pairs). The check measures transfer of the two constructs; this also settles X4 (no reveal sentence repeated). Every option traced to KiesMBO or Studiekeuze123 pages read today.
- D2 (blind is not sector-blind): applied in the Blind proeven paragraph and teacher line 3.
- D3 (neutrality line untrue for the kok card): applied, new line; the kok reveal says "Universiteit: geen studie voor dit werk op Studiekeuze123".
- D4, V5, P1 (two measures side by side; reveals too long): applied. Each reveal is 71 to 74 words (was 86 to 97) with the same template: job, routes, "Cijfers van 7 november 2026", "Vacatures na het mbo (KiesMBO): ...", "Na [studie] (Studiekeuze123, na 1,5 jaar): "...%"", one "Minder leuk". The quotes stay verbatim; the labels say what each measures. "Moeilijk? Dat leer je in de opleiding." moved to care point 3 and the plan row. Teacher line 6 says not to compare the measures.
- D5, V6 (level labels in teacher notes): applied. teacherNotes name neither job nor level; care point 2 adds "De taken horen niet bij één niveau."
- D6 (scheduling and validUntil): applied. Audience havo 4 and vwo 4 and 5, Route 18 for exam years; validUntil 31 juli 2027, with the read date in every reveal and a December re-check.
- D7 (slow pairs miss room 4): applied as a pilot measure and a teacher tip; the room swap is kept for after the playtest.
- D8 (meeloop requests reach the decaan): applied, care point 6.
- M1, P7 (proefkaart margin, long hint four times, many circles): applied. Two ratings per task, the long hint once, "meelopen" once; 240.1 mm of 266 mm. The engine's button name is noted (Engine fit 9).
- M2 (no place for the digits): applied, field 7.
- M3 (ratings after the reveal): applied. Every clue starts "Omcirkel eerst taak N op je proefkaart."; the slip intro says the same; the plan row too.
- M4 (first 5 minutes): applied in the plan row.
- M5 (jobs on the board): applied. Care point 1 uses the engine's Projectiemodus, which shows only the task titles; the jobs are in the closed teacherDetail; the visible teacherNotes name no job.
- M6 (merge the stop rows): not applied; the engine and spec-compare expect a stop moment row.
- M8, P5, V7 (liked nothing): applied in the FAQ, field 8 and the plan.
- M9: applied (follow-up line under the Antwoordblad).
- P2 (kamer 3 frame): applied, intro "Dit zijn sommen voor groep 5. Het gaat niet om de som, maar om de fout van Sam."; r1 shortened; FAQ for pupils who find sums hard. The gate's "kinderen van 8 of 9 jaar" is not used: no page read gives the age of groep 5.
- P3 (4.1 by keyword): applied. Rule box title "Regels (Rijksoverheid)" and a new correct Artikel 5 that also names the proeftijd.
- P6: applied for the contract title and the tester line.
- P8: settled by the shorter onderwijsassistent quote.
- P9 (1.2 not a work moment, only "Ja"): applied. Situ "Jij neemt de telefoon op in de keuken."; two "Ja" options; the right one is the shortest.
- V1 (bonus for fast pairs): applied as teacher text (FAQ); the engine has no optional questions.
- V2 ("zoals bouillon" in r3): applied.
- V3: applied in the FAQ on the start check.
- X2 (right answer always on place 2): applied. 1.2 place 4, 2.2 place 3, 3.2 place 1, 4.2 place 3; 2.1 and 4.1 keep the natural order.
- X3 (check items guessable by form): applied in the new items (same build per option; no "Alleen" or "Niets"; word counts in the check section).
- X5 (C1 for form A): applied, A1 to A4. `tests/spec-compare.js` gets a per-lesson tag for this.
- X6 (menu order note wrong): applied, options in menu order c, d, a, e, b.
- H1 to H5 (hints and explanations): applied (3.1 hint, 4.1 explanation, 1.1 hint, 1.2 nudge and hint, 3.2 nudge).
- K1, S2, L2, J4 (simulated practitioners' discussion points): applied as the per-room `discuss` lines. S1, S3 (software reveal): applied with sourced wording. J1 (cao scope): settled by BW 7:652 lid 7. J2: FAQ cites lid 8 and leaves the meaning to a jurist. J3: teacher detail. K2, K3, L1, L3, L4: not in pupil text; questions on the practitioner pages.
- D9, D10, S4, J5, K4, P4, V4: no change needed or kept for after sign-off.

Also new: `kamers-engine/lessons/werkproef-1.js`; `tests/spec-compare.js` entries for werkproef-1 (default list, format A, checked 2026-11-07, stop at 29, check tags A and B via a new per-lesson `CHECK_TAG`); `tests/lessons-e2e.js` entries (code 3231, the multi-line pointer of 3.2, the teacher lines), not in its default list until the lesson is in `../site`; `tests/long-sentences.js` list; and `outreach/practitioners/` (four pages). Results: spec-compare 0 mismatches, lessons-e2e 24 of 25 (site index only), long sentences 0.

**7 November 2026, first version and self-review** (summary). Built from the design in the Route 18 format; changed against the design sketches to keep one defensible answer or avoid unsourced claims (walnut salad replaced, `> 15` kept out, sums changed, "eerste/tweede getal", proeftijd exceptions ruled out, kansen lines from measured outcomes instead of Studiekeuze123's "minder goed" for HBO-ICT); stop at minute 29; one slip; scratch validation. The self-review as fact checker, havo 4 pupil, decaan and mentor fixed 22 points (among them "Dat is geen koksopleiding" instead of "geen koken", "kun je worden" instead of "word je", SBB as the source of the baankans, three NVWA conditions for oral information, glosses for NVWA, arbeidsovereenkomst and tijdelijk contract, the four task titles in the plan row).
