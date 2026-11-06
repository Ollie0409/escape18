# Escape "Op kamers" (content spec, ID voorstel: ESC-KAMER)

Bedragen geldig voor: kalenderjaar 2026 (huurtoeslagbedragen, alleen in de docentnotitie; alle huurbedragen in de les zijn verzonnen; de les noemt geen echt bedrag aan leerlingen); gecontroleerd op 6 november 2026; validUntil: 31 december 2026 (de huurtoeslagbedragen in de docentnotitie gelden alleen voor 2026 en veranderen op 1 januari 2027)

Format as ESC-MAAND (src/escaperun.js): four rooms in date order, 3 questions per room, one retry with a nudge that points to a line, a hint that costs 30 seconds, one digit per room, one lock of four digits, then a debrief. Pupil text is Dutch B1 (READABILITY.md). Rules come only from the source table at the end. All checks: 6 November 2026.

"Regel" lines: a rule a pupil needs on the first try is shown in the room's "Moeilijke woorden" box (rooms 2 and 3) or in the situation text (V3.3), so careful readers are not punished (G4 fix 3). Each digit clue shows the fact it needs, so the digit can be worked out from the digit screen alone (G4 fix 1). Each clue names the lock position as "Het 1e cijfer van het slot" and so on, with no second ordinal (G4 fix 2).

Fiction line (shown once at the start):
"Alles is verzonnen: de mensen, bedrijven, adressen, bedragen, berichten en contracten. De regels zijn echt; bij elke uitleg staat de bron."

Fictional on purpose: the city Zeestad (as in ESC-MAAND), KamerVinder Zeestad, verhuurder "Mark", Woonhuis Zeestad BV, Lindelaan 8, Havenstraat 12, the friends Daan, Sem and Noor, the bank account (ES00 0000 ...). Every rent amount is invented.

Story time: summer 2027, the summer before the pupil starts studying in Zeestad (havo 5 / vwo 6 pupils of 2026/27 start in September 2027, as in ESC-MAAND room 4). The pupil is 18 in the story ("Je bent inmiddels 18 jaar.", room 1 intro), so signing a lease alone fits the story.

Code: **2824** (teacher screen: show it only inside the closed Antwoordblad, not on the projected part; G3 all lessons, row 5).

## Leerdoelen

1. De leerling kan in een kameradvertentie twee signalen van oplichting aanwijzen en zeggen wat je doet voordat je iets betaalt.
2. De leerling kan in een huurcontract kale huur en servicekosten uit elkaar houden, de hoogste toegestane borg uitrekenen en zeggen wanneer de borg terug moet komen.
3. De leerling kan zeggen bij welke gemeente en uiterlijk wanneer je een verhuizing doorgeeft, en waarom je adres in de BRP telt voor je studiefinanciering.
4. De leerling kan uitleggen waarom je voor een gewone studentenkamer meestal geen huurtoeslag krijgt, en wanneer het soms wel kan.

---

## Kamer 1. De advertentie (maandag 14 juni 2027)

**Intro:** "Je bent inmiddels 18 jaar. Je zoekt een kamer in Zeestad voor september. Op KamerVinder Zeestad zie je een leuke kamer. Je stuurt de verhuurder een bericht."

### Document 1a: advertentie (type: list, id: advert)
Title: "KamerVinder Zeestad: Kamer Havenstraat 12"
- a1 "Kamer van 14 m² in Zeestad-Centrum"
- a2 "Huur: € 495 per maand, inclusief servicekosten"
- a3 "Vrij vanaf 1 september 2027"
- a4 "Gedeelde keuken en badkamer met 3 studenten"
- a5 "Verhuurder: Mark"

Note under it: "De site, het adres en de verhuurder zijn verzonnen."

### Document 1b: chat met Mark (type: chat, id: chat)
From: "Mark (verhuurder)", time 20:14.
- z1 "Hoi! Leuk dat je de kamer wilt."
- z2 "Ik woon nu in Spanje voor mijn werk."
- z3 "Bekijken kan dus helaas niet. De foto's zijn nieuw."
- z4 "Maak eerst de borg van € 990 over. Dan stuur ik je de sleutel per post."
- z5 "Rekening: ES00 0000 0000 0000 0000 0000, op naam van M. Jansen."

Note: "Het rekeningnummer is verzonnen en bestaat niet."

**Moeilijke woorden (plain):** "Borg: geld dat je vooraf betaalt. Zo heeft de verhuurder zekerheid. Als je weggaat, krijg je het terug. Heb je schade gemaakt of nog niet alles betaald? Dan mag de verhuurder dat eraf halen. Servicekosten: kosten voor extra's, zoals energie en internet."

### Vraag 1.1 (id: signalen, kind: multi, docs: advert, chat)
- Prompt: "Welke signalen van oplichting zie je in de advertentie en het gesprek?"
- Legend: "Tik alle signalen aan."
- Items (written right answers last; shown in a fixed shuffle):
  - a "Mark antwoordt snel en vriendelijk"
  - b "De advertentie noemt een adres"
  - c "Je kunt de kamer niet eerst bekijken"
  - d "Je moet al betalen voordat je iets hebt gecheckt"
- Correct: c, d
- Retry pointer (line that gives it away): z3 "Bekijken kan dus helaas niet." and z4 "Maak eerst de borg ... over."
- Nudge: "Lees bericht 3 en 4 van Mark nog eens. Wat kan niet, en wat moet je wel?"
- Hint (30 s): "Een vriendelijk bericht of een adres bewijst niets."
- Explanation: "Niet kunnen kijken en eerst moeten betalen zijn signalen. Een adres of een vriendelijke toon bewijst niets."
- Sources: fhdHuur, omHuur
- Note for authors: the foreign account (z5) is a warning sign at the Fraudehelpdesk, but the second source (OM) only says the account was not the advertiser's. It is not offered as an item, so a pair that notices it is not marked wrong. A pressure line ("er zijn nog meer mensen") is left out of the chat for the same reason: only the Fraudehelpdesk names it.

### Vraag 1.2 (id: betalen, kind: pick, docs: chat)
- Prompt: "Wat doe je nu?"
- Options:
  - a "Snel de borg betalen, voordat een ander de kamer krijgt"
  - b "De helft van de borg overmaken, als garantie"
  - c "Niets betalen voordat je de kamer hebt bekeken en gecheckt"
- Correct: c
- Retry pointer: z3 "Bekijken kan dus helaas niet."
- Nudge: "Ook een deel van het geld ben je kwijt als het nep is."
- Hint: "Eerst kijken, dan pas betalen."
- Explanation: "Betaal niets voordat je de kamer hebt gezien en gecheckt. Kun je niet kijken? Dan huur je hem niet."
- Sources: fhdHuur, omHuur

### Vraag 1.3 (id: melden, kind: pick, docs: none)
- Situ: "Je vriend Daan maakte vorige week € 990 over aan een verhuurder die hij nooit zag. Nu antwoordt die niet meer."
- Prompt: "Wat raad je Daan aan?"
- Options:
  - a "Nog een week wachten, misschien komt de sleutel nog"
  - b "Nog € 50 betalen, want de verhuurder vraagt om verzendkosten"
  - c "Het melden bij zijn bank en aangifte doen bij de politie"
- Correct: c
- Retry pointer: (no document line; points to the situation) "Nu antwoordt die niet meer."
- Nudge: "Daan is zijn geld kwijt. Wie beheert zijn rekening? En wie zoekt oplichters?"
- Hint: "Denk aan de bank en de politie."
- Explanation: "Ben je opgelicht? Meld het bij je bank en doe aangifte bij de politie. Hulp en tips krijg je bij de Fraudehelpdesk. Betaal nooit nog meer."
- Sources: fhdSlachtoffer, politieOplichting, fhdHuur

### Cijfer kamer 1
- Clue: "Het 1e cijfer van het slot: Mark vraagt € 990 borg. De huur is € 495 per maand. Voor hoeveel maanden huur is die borg?"
- Digit: **2** (€ 990 = 2 × € 495; all facts are in the clue).
- Remember: "Kun je de kamer niet bekijken, of moet je eerst betalen? Betaal dan niets."

---

## Kamer 2. Het huurcontract (donderdag 1 juli 2027)

**Intro:** "Je hebt een echte kamer gevonden en bekeken. Woonhuis Zeestad stuurt je het huurcontract. Lees het voordat je tekent."

### Document 2: huurcontract, artikel 1 tot en met 6 (type: letter, sentences, id: contract)
From: "Woonhuis Zeestad BV", place "Zeestad, 1 juli 2027". Heading: "Huurovereenkomst kamer".
- c1 "Huurder: jij. Verhuurder: Woonhuis Zeestad BV."
- c2 "Adres: Lindelaan 8, kamer 3, Zeestad."
- c3 "Ingangsdatum: 28 augustus 2027."
- c4 "Kale huur: € 410 per maand."
- c5 "Servicekosten (energie, water en internet): € 85 per maand."
- c6 "Borg: € 1.230, te betalen bij het tekenen."

Note under it: "Dit is een stukje uit een huurcontract. Een echt contract is langer."

**Moeilijke woorden (plain):** "Kale huur: de huur voor de kamer zelf, zonder extra's. Servicekosten: kosten voor extra's, zoals energie en internet. Borg: geld dat je vooraf betaalt. Zo heeft de verhuurder zekerheid. Als je weggaat, krijg je het terug. Heb je schade gemaakt of nog niet alles betaald? Dan mag de verhuurder dat eraf halen.
Regel 1: de borg is hoogstens 2 keer de kale huur. Dat geldt voor contracten vanaf 1 juli 2023.
Regel 2: haalt de verhuurder niets van de borg af? Dan krijg je hem binnen 14 dagen terug. Haalt hij er wel kosten af? Dan krijg je de rest binnen 30 dagen."

### Vraag 2.1 (id: totaal, kind: number, docs: contract)
- Prompt: "Hoeveel betaal je elke maand in totaal?"
- Correct: **€ 495** (49500 cents)
- Retry pointer: c4 and c5.
- Nudge: "Je betaalt de kale huur en de servicekosten. Tel ze op."
- Hint: "Reken € 410 + € 85."
- Explanation: "Je betaalt kale huur plus servicekosten: € 410 + € 85 = € 495 per maand."
- Sources: none. None line: "Dit haal je uit het contract zelf. Er is geen regel voor nodig."

### Vraag 2.2 (id: borg, kind: number, docs: contract)
- Prompt: "Hoeveel borg mag Woonhuis Zeestad hoogstens vragen?"
- Correct: **€ 820** (82000 cents)
- Retry pointer: c4 "Kale huur: € 410 per maand." and Regel 1.
- Nudge: "Lees regel 1. Tellen de servicekosten mee?"
- Hint: "Gebruik alleen de kale huur."
- Explanation: "De borg is hoogstens 2 keer de kale huur. 2 × € 410 = € 820. Dus € 1.230 is te veel."
- Sources: roBorg, vhnBorg, wgv261b
- Expected wrong answers: € 990 (2 × 495, with servicekosten), € 1.230 (the contract's own amount), € 1.485 (3 × 495).
- Note: with Regel 1 on screen the question is a reasoning step (pick the kale huur, leave out the servicekosten, multiply), not a recall of the rule.

### Vraag 2.3 (id: terug, kind: pick, docs: contract)
- Situ: "Na een jaar ga je weg. Je kamer is zonder schade. Je hebt alle huur en servicekosten betaald. De verhuurder haalt dus niets van je borg af."
- Prompt: "Wanneer moet je borg uiterlijk terug zijn?"
- Options:
  - a "Binnen 3 maanden na het einde van de huur"
  - b "Als de nieuwe huurder zijn borg heeft betaald"
  - c "Binnen 30 dagen, want zo lang mag de verhuurder altijd wachten"
  - d "Binnen 14 dagen na het einde van de huur"
- Correct: d
- Retry pointer: Regel 2 "haalt de verhuurder niets van de borg af? Dan krijg je hem binnen 14 dagen terug."
- Nudge: "Lees regel 2. Haalt de verhuurder iets van je borg af?"
- Hint: "Er gaat niets af. Dan geldt de kortste termijn."
- Explanation: "Gaat er niets van de borg af? Dan krijg je hem binnen 14 dagen terug. Haalt de verhuurder kosten eraf? Dan krijg je de rest binnen 30 dagen."
- Sources: roBorg, vhnBorg, wgv261b
- Note: the situation now rules out every allowed deduction (damage, unpaid rent, unpaid servicekosten; the contract has no energieprestatievergoeding), so the 30-day term cannot apply. Option c says "altijd", which is wrong by BW 7:261b lid 3.

### Cijfer kamer 2
- Clue: "Het 2e cijfer van het slot: Woonhuis Zeestad mag hoogstens € 820 borg vragen. Welk cijfer staat vooraan in 820?"
- Digit: **8** (€ 820; the amount is in the clue).
- Remember: "Lees je contract: kale huur en servicekosten staan apart. De borg is hoogstens 2 maanden kale huur."

---

## Kamer 3. Inschrijven bij de gemeente (zaterdag 28 augustus 2027)

**Intro:** "Je hebt getekend, met de juiste borg van € 820. Vandaag verhuis je van het huis van je ouders in Dorpsveen naar Zeestad."

### Document 3: je verhuisplanning (type: rows, id: planning)
Title: "Mijn planning, augustus en september 2027"
- r1 "za 28 aug: verhuizen naar Lindelaan 8, kamer 3, Zeestad"
- r2 "ma 30 aug: introductieweek begint"
- r3 "wo 1 sep: eerste collegedag"
- r4 "nog doen: adres doorgeven"

Note: "Dorpsveen en Zeestad zijn verzonnen gemeenten."

**Moeilijke woorden (plain):** "BRP: de lijst van de gemeente met wie waar woont. Uiterlijk: op zijn laatst.
Regel: je mag je verhuizing doorgeven vanaf 4 weken voor je verhuisdag. Je moet het uiterlijk 5 dagen na je verhuisdag doorgeven."

### Vraag 3.1 (id: gemeente, kind: pick, docs: planning)
- Prompt: "Bij wie geef je je verhuizing door?"
- Options:
  - a "Bij DUO"
  - b "Bij Woonhuis Zeestad, je verhuurder"
  - c "Bij de gemeente Dorpsveen, waar je vandaan komt"
  - d "Bij de gemeente Zeestad, waar je gaat wonen"
- Correct: d
- Retry pointer: r1 "verhuizen naar Lindelaan 8, kamer 3, Zeestad"
- Nudge: "Je geeft het door aan één gemeente. Waar woon je straks?"
- Hint: "Het is een gemeente."
- Explanation: "Je geeft je verhuizing door aan de gemeente waar je gaat wonen. Online kan dat met DigiD."
- Sources: roVerhuis, rdamVerhuis (DigiD for online: Rotterdam only; it is in the explanation, not asked)

### Vraag 3.2 (id: datum, kind: pick, docs: planning)
- Prompt: "Uiterlijk wanneer geef je je verhuizing door?"
- Options:
  - a "Op 28 augustus 2027, de dag zelf"
  - b "Op 1 oktober 2027"
  - c "Je hoeft niets te doen: je verhuurder regelt het"
  - d "Op 2 september 2027"
- Correct: d
- Retry pointer: r1 "za 28 aug: verhuizen" and the Regel line.
- Nudge: "Lees de regel. Tel 5 dagen verder vanaf 28 augustus."
- Hint: "Augustus heeft 31 dagen."
- Explanation: "Geef je verhuizing door vanaf 4 weken ervoor tot uiterlijk 5 dagen erna. Te laat? Dan kan de gemeente een boete geven."
- Sources: roVerhuis, roVerhuisProduct, rdamVerhuis
- Note: the fine is "maximaal € 325" on the two Rijksoverheid pages only; the Rotterdam page mentions no fine (fact-check A, item A12). The pupil text says only "een boete" so no amount has to be kept up to date. With the rule on screen the step is the date sum across the month end (28 + 5 = 2 september).

### Vraag 3.3 (id: duo, kind: pick, docs: none)
- Situ: "Je huisgenoot Sem krijgt een basisbeurs van DUO. Dat is geld voor studenten. Uitwonend krijg je meer dan thuiswonend. Regel: uitwonend ben je als je bij de gemeente op een ander adres staat dan je ouders. Je moet daar ook echt wonen. Sem woont echt op kamers. Maar bij de gemeente staat hij nog op het adres van zijn ouders."
- Prompt: "Welke basisbeurs krijgt Sem nu van DUO?"
- Options:
  - a "Uitwonend, want hij woont echt op kamers"
  - b "Geen basisbeurs, want zijn adres klopt niet"
  - c "Thuiswonend, want hij staat bij zijn ouders ingeschreven"
- Correct: c
- Retry pointer: situ "bij de gemeente staat hij nog op het adres van zijn ouders"
- Nudge: "Lees de regel nog eens. Op welk adres staat Sem bij de gemeente?"
- Hint: "Twee dingen moeten kloppen: je adres bij de gemeente en waar je echt woont."
- Explanation: "Sem staat bij de gemeente nog bij zijn ouders. Dus krijgt hij de basisbeurs voor thuiswonend. Hij moet zijn verhuizing doorgeven aan de gemeente Zeestad. In Mijn DUO zet hij dan zelf dat hij uitwonend is."
- Sources: duoUitwonend, wsf15, duoBedragen
- Note: option b is wrong because basisbeurs does not depend on the address being right; Sem gets the thuiswonend amount (DUO: "Hoeveel studiefinanciering u kunt krijgen, hangt af van uw woonsituatie"). "Uitwonend krijg je meer" is from the DUO amounts page (2026/2027: uitwonend € 324,52 / € 335,10, thuiswonend € 130,21 / € 134,45 per month, hbo and wo); the pupil text gives no amount. That Sem gets a basisbeurs is a story fact, so the question does not depend on who is entitled.

### Cijfer kamer 3
- Clue: "Het 3e cijfer van het slot: je verhuist op 28 augustus. Je hebt 5 dagen om het door te geven. Welke dag in september is je laatste dag?"
- Digit: **2** (28 augustus + 5 dagen = 2 september 2027; the facts are in the clue).
- Remember: "Verhuisd? Geef het binnen 5 dagen door aan je nieuwe gemeente. DUO kijkt naar dat adres."

---

## Kamer 4. Huurtoeslag? (maandag 13 september 2027)

**Intro:** "Je woont twee weken op kamers. Je vriendin Noor stuurt je een appje."

### Document 4a: app van Noor (type: chat, id: chat)
From: "Noor", time 18:02.
- n1 "Ik krijg huurtoeslag voor mijn studio!"
- n2 "Ik heb een eigen deur met slot, keuken, wc en douche."
- n3 "Vraag jij het ook aan voor je kamer?"

### Document 4b: je kamer (type: list, id: kamer)
Title: "Lindelaan 8, kamer 3 (uit je contract)"
- k1 "Eigen kamer met slot"
- k2 "Keuken: samen met 4 huisgenoten"
- k3 "Wc en douche: samen met 4 huisgenoten"
- k4 "Aangewezen voor huurtoeslag (voor 1 juli 1997): nee"

**Moeilijke woorden (plain):** "Huurtoeslag: geld van de overheid als hulp bij je huur. Je vraagt het aan bij Dienst Toeslagen. Zelfstandige woning: een woning met alles voor jou alleen. Aangewezen: de overheid heeft voor 1 juli 1997 officieel besloten dat een kamer toch meetelt. Voor zo'n kamer kun je soms huurtoeslag krijgen."

### Vraag 4.1 (id: kamer, kind: pick, docs: kamer)
- Prompt: "Kun jij huurtoeslag krijgen voor kamer 3?"
- Options:
  - a "Ja, want je bent 18 en je betaalt huur"
  - b "Ja, want Noor krijgt het ook"
  - c "Nee, want je deelt de keuken, wc en douche"
  - d "Ja, want je kamer heeft een eigen slot"
- Correct: c
- Retry pointer: k2 and k3 "samen met 4 huisgenoten"
- Nudge: "Kijk wat je deelt met je huisgenoten. Wat heeft Noor wel?"
- Hint: "Huurtoeslag is er meestal alleen voor een zelfstandige woning."
- Explanation: "Huurtoeslag krijg je meestal alleen voor een zelfstandige woning. Deel je keuken, wc of douche? Dan is het geen zelfstandige woning. Je kamer is ook niet aangewezen. Daarom krijg je geen huurtoeslag."
- Sources: bdWoningen, bdStudent
- Note: option d added so the two-column grid has no empty cell (G4 op-kamers room 4); k1 "Eigen kamer met slot" makes it a plausible wrong answer.

### Vraag 4.2 (id: zelfstandig, kind: multi, docs: chat)
- Prompt: "Wat heeft een zelfstandige woning in ieder geval voor jou alleen?"
- Legend: "Tik alles aan wat erbij hoort."
- Items:
  - a "Een tuin of balkon"
  - b "Een woonkamer van minstens 20 m²"
  - c "Een eigen deur naar je woning, die op slot kan"
  - d "Een keuken"
  - e "Een wc"
  - f "Een douche of bad"
- Correct: c, d, e, f
- Retry pointer: n2 "Ik heb een eigen deur met slot, keuken, wc en douche."
- Nudge: "Noor noemt precies wat ze heeft. Een tuin of een grote kamer is niet nodig."
- Hint: "Het zijn er vier. Lees het appje van Noor."
- Explanation: "Een zelfstandige woning heeft voor jou alleen: een deur die je van binnen en buiten op slot kunt doen, een keuken, een wc en een douche of bad. De douche telt sinds 1 maart 2024. Ook een eigen woon- of slaapkamer hoort erbij. Die heeft elke kamer al."
- Sources: bdWoningen, bdKan
- Note: Belastingdienst "voor welke woningen" also lists "een eigen woon-/slaapkamer"; it is not an item because every room in the story has one, but the explanation now names it. "Eigen toegangsdeur" is rendered as "eigen deur naar je woning" (B1); the shared front door of a building is covered in the teacher note.

### Vraag 4.3 (id: uitzondering, kind: pick, docs: kamer)
- Prompt: "Je deelt de keuken, wc en douche. Wanneer kun je voor zo'n kamer soms toch huurtoeslag krijgen?"
- Options:
  - a "Als je kale huur lager is dan € 500"
  - b "Als je jonger bent dan 21"
  - c "Als de kamer voor 1 juli 1997 is aangewezen voor huurtoeslag"
- Correct: c
- Retry pointer: k4 "Aangewezen voor huurtoeslag (voor 1 juli 1997): nee"
- Nudge: "Kijk naar de laatste regel over je kamer. Welk jaar staat daar?"
- Hint: "Lees wat 'aangewezen' betekent."
- Explanation: "Is je kamer voor 1 juli 1997 aangewezen? Dan kun je soms toch huurtoeslag krijgen. Je moet dan ook aan de andere voorwaarden voldoen. Vraag het na bij je verhuurder."
- Sources: bdStudent, bdWoningen, hsb1997

### Cijfer kamer 4
- Clue: "Het 4e cijfer van het slot: hoeveel dingen heeft Noor voor zichzelf alleen? Een deur met slot telt als één ding. Ze schrijft: 'Ik heb een eigen deur met slot, keuken, wc en douche.'"
- Digit: **4** (deur met slot, keuken, wc, douche; the line is in the clue; same four as the right items of V4.2).
- Remember: "Huurtoeslag is er meestal alleen voor een zelfstandige woning. Een kamer met gedeelde keuken of wc telt meestal niet."

Not asked (teacher note only): from 1 January 2026 huurtoeslag has no maximum rent any more, the youth age limit went from 23 to 21, and servicekosten no longer count: Dienst Toeslagen calculates with the kale huur (Belastingdienst "Huurtoeslag verandert vanaf 2026", modified 8 Oct 2026). Only one source page was read for these changes, so they are not in a question.

---

## Start- en eindcheck: twee parallelle vormen, A en B (elk 4 vragen, één per kamer, enkele keuze, score 0 tot 4)

No feedback during the check. Each question works without the room's document. Question n of form A and question n of form B test the same rule at the same difficulty, with a different situation and different numbers. Form B adds no new rule or amount: it uses only rules already in the source table (same sources as the room). Use: a pair gets one form before the clock starts and the other after the lock opens; counterbalance as in ESC-BIJBAAN (odd pairs A before and B after, even pairs B before and A after). If only one form is used, the eindcheck shows the same questions in reverse order with the options turned one place (as ESC-MAAND F1).

Re-checked after this revision (6 November 2026): no room change touches a check item. The Regel lines in rooms 2 and 3 state the same rules the checks test (borg 2 × kale huur; 5 days), so both forms stay one step harder than the room (no rule on screen) and stay parallel to each other. Forms A and B are unchanged.

### Vorm A

| # | Kamer | Vraag | Opties | Goed |
|---|---|---|---|---|
| C1 | 1 De advertentie | "Een verhuurder zit in het buitenland. Je kunt de kamer niet bekijken. Hij wil eerst de borg. Wat doe je?" | a Snel betalen, dan ben je de eerste; b De helft betalen als garantie; c Niets betalen voordat je de kamer hebt bekeken en gecheckt | c |
| C2 | 2 Het huurcontract | "De kale huur is € 400. De servicekosten zijn € 60. Hoeveel borg mag de verhuurder hoogstens vragen?" | a € 800; b € 920; c € 1.200 | a |
| C3 | 3 Inschrijven | "Je verhuist op 10 september. Uiterlijk wanneer geef je dat door aan je nieuwe gemeente?" | a 10 september; b 15 september; c 10 oktober | b |
| C4 | 4 Huurtoeslag | "Je huurt een kamer en deelt keuken en wc met huisgenoten. Krijg je dan meestal huurtoeslag?" | a Ja, vanaf 18 jaar altijd; b Nee, meestal niet; c Ja, als je student bent | b |

C2 uses new fictional amounts (2 × 400 = 800; 920 = 2 × 460 with servicekosten; 1.200 = 3 months) so it checks the rule, not memory of room 2.

### Vorm B

| # | Kamer (test) | Vraag | Opties | Goed | Regel en bron |
|---|---|---|---|---|---|
| B1 | 1 De advertentie | "Een verhuurder heeft geen tijd om de kamer te laten zien. Je moet eerst de huur van de eerste maand overmaken. Wat doe je?" | a De huur overmaken, want dat is minder dan de borg; b Niets betalen voordat je de kamer hebt bekeken en gecheckt; c Eerst betalen en daarna om foto's vragen | b | Niet kunnen kijken en eerst moeten betalen: niets betalen (fhdHuur / omHuur; OM noemt "huur overmaken voor een woning die je nog niet hebt kunnen bezichtigen") |
| B2 | 2 Het huurcontract | "De kale huur is € 350. De servicekosten zijn € 70. Hoeveel borg mag de verhuurder hoogstens vragen?" | a € 840; b € 1.050; c € 700 | c | Borg hoogstens 2 maanden kale huur (roBorg / vhnBorg / wgv261b) |
| B3 | 3 Inschrijven | "Je verhuist op 3 oktober. Uiterlijk wanneer geef je dat door aan je nieuwe gemeente?" | a 8 oktober; b 3 oktober; c 3 november | a | Uiterlijk 5 dagen na de verhuizing (roVerhuis / roVerhuisProduct / rdamVerhuis) |
| B4 | 4 Huurtoeslag | "Je huurt een kamer met een eigen keuken. De wc en de douche deel je met huisgenoten. Krijg je dan meestal huurtoeslag?" | a Ja, want je hebt een eigen keuken; b Ja, want je betaalt zelf huur; c Nee, meestal niet: je deelt de wc en douche | c | Alleen een zelfstandige woning; gedeelde wc of keuken is geen zelfstandige woning (bdWoningen / bdStudent) |

Parallel checks: B2 has new fictional amounts on the same pattern as C2 (2 × 350 = 700 is right; 840 = 2 × 420 with servicekosten; 1.050 = 3 months kale huur). B3 has the same one-step sum as C3 (3 + 5 = 8 oktober, no month change; calendar days, as in V3.2). B1 swaps the borg for the first month's rent, B4 swaps the shared kitchen for a shared wc and douche; the rule and the number of steps stay the same. Distractors mirror form A (pay part or pay first; servicekosten counted or 3 months; the day itself or a month later; a wrong reason for "ja").

Score: 1 point per right answer, 0 to 4, before and after, shown per pair on the win screen.

---

## Lesplan voor de docent (45 minuten)

| Lesminuut | Duur | Onderdeel | Wat je doet |
|---|---|---|---|
| 0 tot 2 | 2 | Uitleg | Zet de link en de klascode al op het bord voordat de les begint. Laat het docentenscherm zien. Leerlingen werken met z'n tweeën op één scherm. |
| 2 tot 3 | 1 | Startcheck | Elk tweetal beantwoordt vier vragen (vorm A of B) voordat de klok start. Geef geen hints. |
| 3 tot 33 | 30 | Escape | Start de klastimer. Tweetallen spelen vier kamers en schrijven elk cijfer op. Klaar voor de tijd? Laat het tweetal de gespreksvragen op het eindscherm bespreken. |
| 33 | | Stop | Op minuut 33 stopt iedereen, ook wie nog niet klaar is. Lees de cijfers voor van je geprinte antwoordblad. Alle tweetallen doen daarna de eindcheck en het plan. |
| 33 tot 35 | 2 | Eindcheck | De andere vorm: vier vragen over dezelfde regels. Daarna ziet elk tweetal wat het goed had, voor en na. |
| 35 tot 40 | 5 | Nabespreken | Vraag met handopsteken: wie had bij de startcheck 3 of 4 goed? En bij de eindcheck? Vraag welke kamer het lastigst was en begin daar. Gebruik de gespreksvragen. Vraag naar ervaringen, niet naar punten. |
| 40 tot 42 | 2 | Afsluiten | Laat twee of drie leerlingen hun als-dan-plan hardop zeggen. Stel daarna de slotvraag. |
| 42 tot 45 | 3 | Buffer | Reserve voor een late start, traag inloggen of een langer gesprek. De escape stopt altijd op minuut 33; de buffer vangt de rest op. |

Total 45 minutes: 2 + 1 + 30 + 2 + 5 + 2 + 3 = 45, of which 3 minutes buffer. Materials: a device per pair, pen and paper for the digits, a digital board or projector.

Tip voor de docent: een fout antwoord wordt doorgestreept. Een tweetal kan dus ook gokken tot het goed is. Het telt dan alleen niet mee bij "In één keer goed". Vertel de klas dat goed lezen sneller gaat. (G4 fix 12.)

Note for developers: the stop at minute 33 uses the engine stop flow (G3, all lessons, row 1): the teacher taps "Stop de escape", pupils tap "We stoppen", type the digits the teacher reads out from the printed answer sheet or skip, then do the end check and the plan. The digits are never on the open lesson plan (gate round 2). Playtest estimate for a real pair: 14 to 20 minutes (G4), so a late start of a few minutes still leaves enough escape time.

Voor de docent, per kamer (teacher points, each from the source table):
- Kamer 1: Betaal niets voor een kamer die je niet hebt gezien. Moet je naar een buitenlandse rekening betalen? Ook dat is een signaal, maar geen bewijs (Fraudehelpdesk). Opgelicht? Meld het bij je bank en doe aangifte bij de politie. De Fraudehelpdesk geeft hulp en tips.
- Kamer 2: Borg is hoogstens 2 maanden kale huur bij een contract vanaf 1 juli 2023 (daarvoor 3 maanden). Terug binnen 14 dagen, of binnen 30 dagen als er kosten af gaan. Alleen achterstallige huur, servicekosten, schade en energieprestatievergoeding mogen eraf. Het contract in de les is een kort stukje. Sinds 1 januari 2025 moet de verhuurder bij een nieuw contract ook laten weten hoeveel punten de kamer heeft. De Huurprijscheck van de Huurcommissie rekent dat uit (Volkshuisvesting Nederland).
- Kamer 3: Verhuizing doorgeven aan de nieuwe gemeente, vanaf 4 weken ervoor tot 5 dagen erna. Boete tot € 325 (Rijksoverheid). DUO krijgt het adres van de gemeente; de woonsituatie zet je zelf in Mijn DUO (DUO).
- Kamer 4: Huurtoeslag meestal alleen voor een zelfstandige woning. Een gedeelde voordeur, gang of trap van het gebouw mag; de woning zelf moet alles eigen hebben (Belastingdienst). Uitzondering voor kamers: aangewezen voor 1 juli 1997. Sinds 2026: geen huurgrens meer, jongerengrens 21 jaar, servicekosten tellen niet meer mee. Deze regels en bedragen gelden voor 2026. Kijk voor 2027 bij Dienst Toeslagen wat dan geldt.

## Antwoordblad

Answers are given as the text on screen, without letters (G3, all lessons, row 6).

| Kamer | Vraag | Goed antwoord |
|---|---|---|
| 1 | Signalen van oplichting | Je kunt de kamer niet eerst bekijken; Je moet al betalen voordat je iets hebt gecheckt |
| 1 | Wat doe je nu | Niets betalen voordat je de kamer hebt bekeken en gecheckt |
| 1 | Advies aan Daan | Het melden bij zijn bank en aangifte doen bij de politie |
| 1 | **Cijfer** | **2** (€ 990 is 2 × € 495) |
| 2 | Totaal per maand | € 495 |
| 2 | Hoogste borg | € 820 |
| 2 | Borg terug | Binnen 14 dagen na het einde van de huur |
| 2 | **Cijfer** | **8** (vooraan in 820) |
| 3 | Bij wie doorgeven | Bij de gemeente Zeestad, waar je gaat wonen |
| 3 | Uiterlijk | Op 2 september 2027 |
| 3 | Basisbeurs Sem | Thuiswonend, want hij staat bij zijn ouders ingeschreven |
| 3 | **Cijfer** | **2** (2 september) |
| 4 | Huurtoeslag kamer 3 | Nee, want je deelt de keuken, wc en douche |
| 4 | Zelfstandige woning | Een eigen deur naar je woning, die op slot kan; Een keuken; Een wc; Een douche of bad |
| 4 | Uitzondering | Als de kamer voor 1 juli 1997 is aangewezen voor huurtoeslag |
| 4 | **Cijfer** | **4** (deur, keuken, wc, douche) |
| | **Code** | **2824** |

Start- en eindcheck vorm A: C1 Niets betalen voordat je de kamer hebt bekeken en gecheckt; C2 € 800; C3 15 september; C4 Nee, meestal niet. Vorm B: B1 Niets betalen voordat je de kamer hebt bekeken en gecheckt; B2 € 700; B3 8 oktober; B4 Nee, meestal niet: je deelt de wc en douche.

## Nabespreken

Drie gespreksvragen (kies er één of twee als de tijd kort is):
1. "Zoek jij straks een kamer? Waar zou je zoeken, en hoe check je of de verhuurder echt is?"
2. "Waarom betalen mensen toch voor een kamer die ze niet zagen? Wat zou jij doen als je echt geen kamer vindt?"
3. "Wat moet je allemaal regelen als je verhuist? Wat regel je zelf, en wat laat je nu nog aan je ouders over?"

Slotvraag: "Noem één ding dat je moet doen voordat je een kamer betaalt, en één ding dat je moet doen binnen 5 dagen nadat je verhuisd bent."

Als-dan-plan (prompt):
"Maak je eigen als-dan-plan en zeg het tegen je buur. Kies een situatie en een actie.
Als ik ... (een kamer vind die ik wil huren / een huurcontract krijg / verhuisd ben),
dan ... (bekijk ik de kamer eerst en betaal ik pas als ik alles heb gecheckt / reken ik na of de borg niet hoger is dan 2 keer de kale huur / geef ik mijn adres binnen 5 dagen door aan mijn nieuwe gemeente).
Zet een herinnering in je telefoon."

---

## Brontabel

Valid until: the date the rule or amount is next expected to change; "check" means the next scheduled check (January 2027) unless a known change date is given. All rows checked 6 November 2026.

| Key | Rule (as used) | Source 1 | Source 2 | Checked | Valid until |
|---|---|---|---|---|---|
| fhdHuur / omHuur | Signs: you cannot view the room first; you must pay before you have checked. Pay nothing before you have checked. | [Fraudehelpdesk, Woonplek gevonden? Check voordat je huurt](https://www.fraudehelpdesk.nl/campagnes/een-dak-boven-je-hoofd-of-van-je-centen-beroofd/) ("kun je de woonruimte niet eerst bekijken"; "Betaal niets voordat je een paar dingen hebt gecheckt"; "Neem dan contact op met de Fraudehelpdesk"; modified 29 Oct 2025; read by check A on 6 Nov 2026, my fetch of 6 Nov 2026 was blocked) | [Openbaar Ministerie, Online campagne waarschuwt voor huurfraude (1 Oct 2021)](https://www.om.nl/actueel/nieuws/2021/10/01/online-campagne-waarschuwt-voor-huurfraude) ("van tevoren huur overmaken voor een woning die je nog niet hebt kunnen bezichtigen"; links to the Fraudehelpdesk page) | 6 Nov 2026 | No set date; check Jan 2027 |
| fhdSlachtoffer / politieOplichting | Scammed: report it to your bank and file a police report; the Fraudehelpdesk gives help and information. | [Fraudehelpdesk, Slachtoffer geworden, wat nu?](https://www.fraudehelpdesk.nl/slachtoffer-geworden-wat-nu/) ("Meld het bij uw bank en doe aangifte bij de politie!"; "Als u hulp nodig heeft, dan kunt u meer informatie vinden bij de FraudeHelpdesk"; modified 6 Mar 2023) | [Politie, Ik ben opgelicht](https://www.politie.nl/aangifte-of-melding-doen/aangifte-van-oplichting.html) ("In de meeste gevallen kunt u bellen met de politie op 0900-8844 of naar het politiebureau gaan"; no date shown) | 6 Nov 2026 | No set date; check Jan 2027 |
| roBorg / vhnBorg / wgv261b | Borg at most 2 months kale huur for contracts from 1 July 2023 (before: 3); back within 14 days, or the rest within 30 days when costs are deducted; only overdue rent, servicekosten, damage and energieprestatievergoeding may be deducted. | [Rijksoverheid, woning huren waarborgsom](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/woning-huren/woning-huren-waarborgsom) (modified 9 Sep 2026) | [Volkshuisvesting Nederland, waarborgsom](https://www.volkshuisvestingnederland.nl/onderwerpen/huurbescherming-en-huurcontracten/waarborgsom) (modified 8 Oct 2025); third source: [Volkshuisvesting Nederland, WGV-brochure voor huurders (pdf)](https://volkshuisvestingnederland.nl/binaries/volkshuisvestingnederland/documenten/publicaties/2024/02/09/huurders/WGV+Brochure+huurders+NL_TG.pdf) ("maximaal 2 maanden kale huur als borg ... op of na 1 juli 2023"); law: [Wet goed verhuurderschap, Stb. 2023, 103](https://zoek.officielebekendmakingen.nl/dossier/stb-2023-103.pdf) (wet van 24 maart 2023; art. 22 onderdeel B inserts art. 7:261b BW after 7:261a: lid 2 "ten hoogste tweemaal de huurprijs, bedoeld in artikel 237 lid 2"; lid 3 "binnen veertien dagen", "binnen dertig dagen" after damage or unpaid huur, servicekosten or energy costs) | 6 Nov 2026 | Law in force since 1 Jul 2023 (Wet goed verhuurderschap); check Jan 2027 |
| vhnPunten / hcPunten (teacher only) | From 1 Jan 2025 a landlord must tell the tenant of a room how many points it has with every new contract; the Huurprijscheck printout does this. | [Volkshuisvesting Nederland, Ik verhuur een kamer](https://www.volkshuisvestingnederland.nl/wat-betekent-de-wet-betaalbare-huur-voor-mij/situaties/ik-verhuur/ik-verhuur-een-kamer) ("Per 1 januari 2025 ben je verplicht om bij nieuwe contracten aan een huurder duidelijk te maken hoeveel punten een kamer heeft"; modified 24 Jun 2024) | [Huurcommissie, Wettelijke wijzigingen per 1 januari 2025](https://www.huurcommissie.nl/actueel/nieuws/2024/12/19/wettelijke-wijzigingen-per-1-januari-2025-om-rekening-mee-te-houden) ("een uitdraai van een puntentelling te geven", all new contracts; 19 Dec 2024) | 6 Nov 2026 | No set date; check Jan 2027 |
| roVerhuis / roVerhuisProduct / rdamVerhuis | Report a move to the municipality where you will live, from 4 weeks before to at the latest 5 days after; fine up to € 325. | [Rijksoverheid, hoe kan ik mijn verhuizing doorgeven](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/gemeenten/hoe-kan-ik-mijn-verhuizing-doorgeven-aan-de-gemeente) and [Rijksoverheid, verhuizing melden](https://www.rijksoverheid.nl/wetten-en-regelingen/productbeschrijvingen/verhuizing-melden) (both modified 23 Dec 2025) | [Gemeente Rotterdam, verhuizing doorgeven](https://www.rotterdam.nl/verhuizing-doorgeven) ("vanaf 4 weken voordat u verhuist of tot 5 dagen erna"; "aan de nieuwe gemeente"; online with DigiD) | 6 Nov 2026 | € 325 maximum (Rijksoverheid alleen): check Jan 2027 |
| duoUitwonend / wsf15 / duoBedragen | Uitwonend: registered in the BRP at an address other than the parents' and living there. DUO gets the address from the municipality; the student sets the woonsituatie in Mijn DUO. Uitwonend basisbeurs is higher than thuiswonend. | [DUO, uitwonend](https://duo.nl/particulier/studiefinanciering/uitwonend.jsp) (read by check A on 6 Nov 2026; my fetch of 6 Nov 2026 was blocked); [DUO, bedragen studiefinanciering](https://duo.nl/particulier/studiefinanciering/bedragen.jsp) (hbo/wo basisbeurs per month: sep to dec 2026 thuiswonend € 130,21, uitwonend € 324,52; 2027 € 134,45 and € 335,10) | [Wet studiefinanciering 2000, art. 1.5 lid 1](https://wetten.overheid.nl/jci1.3:c:BWBR0011453&hoofdstuk=1&artikel=1.5) (version in force from 1 Aug 2026) | 6 Nov 2026 | No set date; DUO amounts change each 1 Jan; check Jan 2027 |
| bdWoningen / bdStudent / bdKan / hsb1997 | Huurtoeslag usually only for a zelfstandige woning (own woon-/slaapkamer, kitchen, wc, shower or bath since 1 Mar 2024, own entrance door lockable from inside and outside; a shared building front door, hall or stairs is allowed); a room with shared facilities is not one; exception: room designated before 1 July 1997. Designations of onzelfstandige woonruimte under the Huursubsidiebesluit were made by the minister ("Onze Minister"). | [Belastingdienst, voor welke woningen kan ik huurtoeslag krijgen](https://belastingdienst.nl/wps/wcm/connect/nl/huurtoeslag/content/voor-welke-woningen-huurtoeslag) (modified 21 Jul 2026) and [Belastingdienst, kan ik huurtoeslag krijgen](https://belastingdienst.nl/wps/wcm/connect/nl/toeslagen/content/kan-ik-huurtoeslag-krijgen) (modified 14 Jul 2026) | [Belastingdienst, Ik woon op kamers: kan ik huurtoeslag krijgen?](https://www.belastingdienst.nl/wps/wcm/connect/nl/huurtoeslag/content/student-op-kamers-huurtoeslag) ("Als je kamer vóór 1 juli 1997 is aangewezen voor de huurtoeslag, kan je soms wel huurtoeslag krijgen"; "Je kunt het altijd navragen bij de verhuurder"; modified 21 Jul 2026); [Huursubsidiebesluit, Stb. 1997, 269](https://zoek.officielebekendmakingen.nl/stb-1997-269.pdf) (besluit van 25 juni 1997, in force 1 Jul 1997; art. 3 lid 1: aanwijzing "slechts door Onze Minister") | 6 Nov 2026 | Rules for 2026; check before 1 Jan 2027 (toeslag year) |
| (teacher only) | 2026 changes: no maximum rent; youth limit 21 (was 23); servicekosten no longer count; calculation with max € 932,93, or € 498,20 up to 21. These values hold for 2026 only. | [Belastingdienst, Huurtoeslag verandert vanaf 2026](https://www.belastingdienst.nl/wps/wcm/connect/nl/huurtoeslag/content/huurtoeslag-verandert-vanaf-2026) (modified 8 Oct 2026) | none read (single source, so not asked) | 6 Nov 2026 | Amounts valid for 2026; change on 1 Jan 2027 |

The four huurtoeslag web pages are pages of one organisation (Belastingdienst / Dienst Toeslagen). For the designation rule the Huursubsidiebesluit (Stb. 1997, 269) is now a second, official source; for the zelfstandige-woning definition no second organisation was read.

## Onzeker

- Huurtoeslag room rules: the definition of a zelfstandige woning rests on Dienst Toeslagen pages only; the Wet op de huurtoeslag on wetten.overheid.nl was not read (fetch blocked on 6 Nov 2026). Rijksoverheid huurtoeslag pages returned 404 on 6 Nov 2026 (check A).
- The 2026 huurtoeslag changes (no rent cap, age 21, kale huur only) have one source page and are teacher-only. The 2027 calculation amounts are not yet checked; they change on 1 January 2027.
- Left out of the questions: the tenant's notice period (BW 7:271 text not retrieved), temporary contracts for students (Wet vaste huurcontracten exceptions; a new bill "passende huurcontracten" went to consultation in July 2026), the huurcommissie and rent points for rooms (points only in the teacher note), the foreign account, a low price and pressure as scam signs (one fitting official source each).
- Borg cap for rooms: the rule is in BW 7:261b (inserted by Stb. 2023, 103, read on 6 Nov 2026; earlier versions of this spec said 7:261a, which was wrong). The law text speaks of "de huurovereenkomst" and the three government pages of "woning"/"woonruimte"; none excludes rooms. Whether 7:261b covers onzelfstandige woonruimte depends on BW 7:233, which could not be read on 6 Nov 2026 (wetten.overheid.nl blocked). Keep this note until BW 7:233 is read. A housing lawyer or the Huurcommissie should confirm.
- Who made designations before 1 July 1997 under the older Wet individuele huursubsidie is not stated in Stb. 1997, 269; the pupil gloss therefore says "de overheid", not "de minister".

---

## Changelog

Item numbers: A1 to A21 are the rows of `factcheck_A_op-kamers.md` in table order. B1 to B16 are the rows of `qa/checkB/op-kamers.md` in file order (B1 to B4 ERROR, B5 to B16 RISK). "G3 OK n" is row n of the op-kamers table in `qa/gate_G3_G8.md`; "G3 All n" is row n of its "All three lessons" table. "G4 R1 to R4" are the op-kamers room rows of `qa/gate_G4_playtest.md`; "G4 fix n" is item n of its "Fixes" list. Brief = the revision brief of 6 November 2026.

6 november 2026 (third revision, gate round 2, `qa/gate_round2.md`):
- Lesplan row Stop: the four digits are no longer on the open, projected plan. New text: "Lees de cijfers voor van je geprinte antwoordblad." The code stays only inside the closed Antwoordblad.
- Lesplan rows Escape and Afsluiten (shared finding): the plan is asked for once, in the Stop row. Escape row no longer says "en elk een als-dan-plan maken"; Afsluiten now "Laat twee of drie leerlingen hun als-dan-plan hardop zeggen. Stel daarna de slotvraag."
- Room 4 clue: "Hoeveel dingen heeft Noor voor zichzelf alleen? Een deur met slot telt als één ding." so deur and slot are not counted apart. Noor's line stays in the clue, after the question, so no clue sentence is over 20 words. Digit stays 4.
- Room 3 Regel: "Dat moet uiterlijk ..." now "Je moet het uiterlijk 5 dagen na je verhuisdag doorgeven." Same rule.
- Room 3 intro: "Je hebt getekend, met de juiste borg van € 820." so pupils know they did not pay the € 1.230 of the contract.
- Materials: "a digital board or projector" (Dutch: "een digibord of beamer", as the landing page).
- Tip voor de docent: "Dat kost alleen de score ..." now "Het telt dan alleen niet mee bij "In één keer goed"."
- Note for developers updated: the stop flow exists in the engine.
- Digits and code unchanged: **2824**. No answer, option or check item changed.

6 november 2026 (second revision, check B, G3, G4):
- B1 (ERROR, source table): confirmed on Stb. 2023, 103 (art. 22 onderdeel B inserts art. 7:261b after 7:261a). Source table row now cites the Staatsblad and 7:261b; Onzeker note corrected from 7:261a to 7:261b. Not applied: "geldt ook voor de huur van een kamer" as a stated fact, because BW 7:233 could not be read; kept as Onzeker.
- B2 (ERROR, V4.1 explanation): confirmed on Belastingdienst student page ("Meestal"; exception for rooms designated before 1 July 1997). Explanation now says "meestal" and adds that kamer 3 is not designated. No contradiction with V4.3 any more.
- B3 (ERROR, gloss Aangewezen) and G3 OK 1: confirmed on Stb. 1997, 269 (art. 3 lid 1: designation by "Onze Minister"; in force 1 July 1997). Gloss rewritten: "de overheid heeft voor 1 juli 1997 officieel besloten dat een kamer toch meetelt." "Lang geleden" and Toeslagen as designator removed. Kept "de overheid" instead of "de minister" (see Onzeker). G3's own wording "bepaald dat je voor deze kamer toch huurtoeslag kunt krijgen" not used: in 1997 the scheme was huursubsidie, and the Belastingdienst says only "soms".
- G3 OK 1 (second part): "Je vraagt het aan bij Dienst Toeslagen."
- B4 (ERROR, story): internal contradiction confirmed in the spec (contract from 1 Sep, move on 28 Aug). c3 now "Ingangsdatum: 28 augustus 2027". No external source needed; no digit changes.
- B5 (RISK, V3.3) and G3 OK 2: situ now says Sem gets a basisbeurs (story fact), explains basisbeurs, says uitwonend gets more (DUO amounts page, confirmed) and gives the uitwonend rule (G4 R3). Explanation adds the Mijn DUO step (DUO uitwonend page, confirmed by check A; my own fetch was blocked). Not applied: "Er geldt voor hem geen uitzondering", because the DUO exceptions were not read.
- B6 (RISK, V2.3): confirmed on Stb. 2023, 103 art. 7:261b lid 3 (30 days also after unpaid servicekosten or energy costs). Situ now excludes every deduction; option c reworded to "want zo lang mag de verhuurder altijd wachten". Regel 2 added to the plain box (G4 R2, G4 fix 3).
- B7 (RISK, gloss Borg) and A5: confirmed on Rijksoverheid waarborgsom (only overdue rent, servicekosten, damage, EPV may be deducted). Gloss in rooms 1 and 2 now says the landlord may deduct damage or unpaid costs.
- B8 (RISK, V1.3): confirmed on Fraudehelpdesk "Slachtoffer geworden, wat nu?" ("Meld het bij uw bank en doe aangifte bij de politie!") and politie.nl "Ik ben opgelicht". Right option now "Het melden bij zijn bank en aangifte doen bij de politie"; explanation names the Fraudehelpdesk for help; nudge and hint changed; new source row fhdSlachtoffer / politieOplichting. Not applied: "Bewaar berichten en betaalbewijzen", not on the pages read. Check B's attribution to Rijksoverheid not confirmed (no Rijksoverheid page read says it).
- B9 (RISK, teacher note foreign account): rejected as stated. Check A quoted the Fraudehelpdesk campaign page verbatim ("overmaken naar een buitenlands rekeningnummer") as a warning sign, so the note is supported. Only wording changed to "een signaal, maar geen bewijs".
- B10 (RISK, contract as model): confirmed on Volkshuisvesting Nederland "Ik verhuur een kamer" and Huurcommissie (points with every new contract from 1 Jan 2025). Added note under the contract "Dit is een stukje uit een huurcontract. Een echt contract is langer." and a teacher note in Kamer 2; new source row vhnPunten / hcPunten.
- B11 (RISK, plan "betaal niets vooraf"): applied. Plan option now "bekijk ik de kamer eerst en betaal ik pas als ik alles heb gecheckt" (Fraudehelpdesk wording "Betaal niets voordat je een paar dingen hebt gecheckt"). Check B's longer wording not used (B1 length).
- B12 (RISK, V3.1 nudge "oude gemeente hoeft niets te doen"): applied in own wording, "Je geeft het door aan één gemeente. Waar woon je straks?" No claim about the old municipality.
- B13 (RISK, V4.2 definition): confirmed on Belastingdienst "voor welke woningen" (door lockable from inside and outside; own woon-/slaapkamer; shared voordeur, gang, trappenhuis allowed). Item c and Noor's n2 now say "eigen deur ... met slot"; explanation adds "van binnen en buiten" and the woon- of slaapkamer; the shared building door is in the teacher note. Answer and digit unchanged (4 items).
- B14 (RISK, V4.3 stem): applied. Prompt now "Je deelt de keuken, wc en douche. Wanneer kun je voor zo'n kamer soms toch huurtoeslag krijgen?"; "andere voorwaarden" in the explanation, not in the option.
- B15 (RISK, age) and brief: added "Je bent inmiddels 18 jaar." to the room 1 intro and the story line. The claim about parental consent for minors was not checked; the line is added on the brief's instruction.
- B16 (RISK, 2026 amounts): applied. Teacher note Kamer 4 and the source table say the values hold for 2026 only and must be checked for 2027 at Dienst Toeslagen. Not applied: the claim that toeslagpartner rules change on 1 January 2027; not verified on an official page.
- G3 OK 3: nudge V1.1 "Lees bericht 3 en 4 van Mark nog eens. Wat kan niet, en wat moet je wel?"
- G3 OK 4 and A1: V1.1 docs now advert and chat; prompt says "in de advertentie en het gesprek".
- G3 OK 5: room 1 Remember "Kun je de kamer niet bekijken, of moet je eerst betalen? Betaal dan niets."
- G3 OK 6: "×" instead of "x" in all amounts in this spec.
- G3 OK 7 and G3 All 12: deleted "(één bronpagina)" from the Kamer 4 teacher note.
- G3 OK 8 and G3 All 6: Antwoordblad gives answer text without letters, also for start and end check.
- G3 All 2 and brief: lesson plan now has a 3-minute buffer and a fixed stop at minute 33 with the teacher reading out the digits, then end check and plan for everyone. Escape kept at 30 minutes (brief), so G3's "Escape 25" was not applied.
- G3 All 1: noted as a developer dependency of the minute-33 stop; engine not changed in this spec.
- G3 All 3: fast pairs line added to the Escape row.
- G3 All 4: hand count rewritten in G3's wording.
- G3 All 5: code to be shown only inside the closed Antwoordblad (note at the top).
- G3 All 11: "Zet een herinnering in je telefoon."
- G3 All 7, 8, 9, 10: engine or other files, not this spec; not applied here. G3 All 13: op-kamers forms were already parallel.
- G4 R1 and G4 fix 1: digit 1 clue now "Mark vraagt € 990 borg. De huur is € 495 per maand. Voor hoeveel maanden huur is die borg?" Digit stays 2.
- G4 R2 and G4 fix 2: digit 2 clue now "Welk cijfer staat vooraan in 820?" with the amount in the clue. Digit stays 8. Hint V2.2 no longer gives the sum ("Gebruik alleen de kale huur").
- G4 R2, R3 and G4 fix 3: Regel 1 and 2 in the room 2 plain box; Regel (4 weeks / 5 days) in the room 3 plain box; uitwonend rule in the V3.3 situ. Hint V3.2 now only "Augustus heeft 31 dagen."
- G4 R3: digit 3 clue now gives 28 August and 5 days. Digit stays 2. The "KIJK HIER" badge is engine layout, not this spec.
- G4 R4 and G4 fix 5: gloss Aangewezen rewritten (see B3); k4 now shows "(voor 1 juli 1997)". G4's "op een lijst gezet" not used: no source says there was a list.
- G4 R4: digit 4 clue now quotes Noor's line and asks how many things she names. Digit stays 4. V4.1 got a fourth option (d "Ja, want je kamer heeft een eigen slot") so the grid has no empty cell (G4 fix 13).
- G4 fix 12: tip on striking out wrong answers added to the lesson plan.
- G4 fix 11 ("ongeveer 30 minuten" too long): not applied; the brief keeps the 30-minute escape.
- Digits and code re-derived after all changes: 990 / 495 = 2; first figure of 2 × 410 = 820 is 8; 28 August + 5 days = 2 September, so 2; Noor names 4 things. Code stays **2824**. No answer letter changed except V1.3 option c text (still c) and the new V4.1 option d (answer still c). Check forms A and B unchanged and still parallel; their answers are unchanged.

6 november 2026 (first revision, check A):
- A12 (ERROR, source table): removed `fine "maximaal € 325"` from the Rotterdam cell of the roVerhuis row; the Rotterdam page mentions no fine. "Valid until" cell now reads "€ 325 maximum (Rijksoverheid alleen): check Jan 2027". Teacher note Kamer 3 now says "Boete tot € 325 (Rijksoverheid)." The author note under V3.2, which said both Rijksoverheid and Rotterdam give € 325, is corrected the same way. Pupil text unchanged ("een boete", no amount).
- A14 (RISK, Kamer 4 gloss): "Aangewezen" now names Toeslagen instead of de Belastingdienst and says the designation was long ago, in the checker's wording. Added to the "Huurtoeslag" gloss: "Je vraagt het aan bij Toeslagen." (Superseded in the second revision, B3.)
- A7 (OK-with-note, source table fix): added the Volkshuisvesting Nederland WGV-brochure for huurders as third source in the roBorg / vhnBorg row; the Onzeker bullet on rooms is kept and now names BW 7:261a, as the checker asked. (Article corrected to 7:261b in the second revision, B1.)
- Start- en eindcheck: the existing four questions are now "Vorm A" (unchanged). Added "Vorm B" (B1 to B4), one per room, same rule and difficulty, new situation and new fictional amounts, only rules from the source table. Lesson plan rows Startcheck and Eindcheck and the Antwoordblad line updated to the two forms.
- Added the "Bedragen geldig voor" line under the title. validUntil 31 december 2026 because the huurtoeslag amounts in the teacher note (€ 932,93 / € 498,20) are 2026 values that change on 1 January 2027 (A18).
- Answers, digits and code re-checked after these fixes: no fix changes an amount or an answer. Digits stay 2, 8 (2 × € 410 = € 820), 2 (28 aug + 5 = 2 sep), 4; code stays **2824**.
- Not applied (marked optional by the checker, OK-with-note): A1 rewording of item b to "Mark noemt in de advertentie een adres"; A5 borg gloss "... als je weggaat en alles netjes is". The report header counts 3 RISK, but only one row (A14) is classed RISK; that row is applied. (A1 and A5 addressed in the second revision through G3 OK 4 and B7.)
