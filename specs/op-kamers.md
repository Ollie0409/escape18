# Escape "Op kamers" (content spec, ID voorstel: ESC-KAMER)

Bedragen geldig voor: kalenderjaar 2026 (huurtoeslagbedragen, alleen in de docentnotitie; alle huurbedragen in de les zijn verzonnen); gecontroleerd op 6 november 2026; validUntil: 31 december 2026

Format as ESC-MAAND (src/escaperun.js): four rooms in date order, 3 questions per room, one retry with a nudge that points to a line, a hint that costs 30 seconds, one digit per room, one lock of four digits, then a debrief. Pupil text is Dutch B1 (READABILITY.md). Rules come only from the source table at the end. All checks: 6 November 2026.

Fiction line (shown once at the start):
"Alles is verzonnen: de mensen, bedrijven, adressen, bedragen, berichten en contracten. De regels zijn echt; bij elke uitleg staat de bron."

Fictional on purpose: the city Zeestad (as in ESC-MAAND), KamerVinder Zeestad, verhuurder "Mark", Woonhuis Zeestad BV, Lindelaan 8, Havenstraat 12, the friends Daan, Sem and Noor, the bank account (ES00 0000 ...). Every rent amount is invented.

Story time: summer 2027, the summer before the pupil starts studying in Zeestad (havo 5 / vwo 6 pupils of 2026/27 start in September 2027, as in ESC-MAAND room 4).

Code: **2824**

## Leerdoelen

1. De leerling kan in een kameradvertentie twee signalen van oplichting aanwijzen en zeggen wat je doet voordat je iets betaalt.
2. De leerling kan in een huurcontract kale huur en servicekosten uit elkaar houden, de hoogste toegestane borg uitrekenen en zeggen wanneer de borg terug moet komen.
3. De leerling kan zeggen bij welke gemeente en uiterlijk wanneer je een verhuizing doorgeeft, en waarom je adres in de BRP telt voor je studiefinanciering.
4. De leerling kan uitleggen waarom je voor een gewone studentenkamer meestal geen huurtoeslag krijgt, en wanneer het soms wel kan.

---

## Kamer 1. De advertentie (maandag 14 juni 2027)

**Intro:** "Je zoekt een kamer in Zeestad voor september. Op KamerVinder Zeestad zie je een leuke kamer. Je stuurt de verhuurder een bericht."

### Document 1a: advertentie (type: list)
Title: "KamerVinder Zeestad: Kamer Havenstraat 12"
- a1 "Kamer van 14 m² in Zeestad-Centrum"
- a2 "Huur: € 495 per maand, inclusief servicekosten"
- a3 "Vrij vanaf 1 september 2027"
- a4 "Gedeelde keuken en badkamer met 3 studenten"
- a5 "Verhuurder: Mark"

Note under it: "De site, het adres en de verhuurder zijn verzonnen."

### Document 1b: chat met Mark (type: chat)
From: "Mark (verhuurder)", time 20:14.
- z1 "Hoi! Leuk dat je de kamer wilt."
- z2 "Ik woon nu in Spanje voor mijn werk."
- z3 "Bekijken kan dus helaas niet. De foto's zijn nieuw."
- z4 "Maak eerst de borg van € 990 over. Dan stuur ik je de sleutel per post."
- z5 "Rekening: ES00 0000 0000 0000 0000 0000, op naam van M. Jansen."

Note: "Het rekeningnummer is verzonnen en bestaat niet."

**Moeilijke woorden (plain):** "Borg: geld dat je vooraf betaalt. Je krijgt het terug als je weggaat. Servicekosten: kosten voor extra's, zoals energie en internet."

### Vraag 1.1 (id: signalen, kind: multi, docs: chat)
- Prompt: "Welke signalen van oplichting zie je in dit gesprek?"
- Legend: "Tik alle signalen aan."
- Items (written right answers last; shown in a fixed shuffle):
  - a "Mark antwoordt snel en vriendelijk"
  - b "De advertentie noemt een adres"
  - c "Je kunt de kamer niet eerst bekijken"
  - d "Je moet al betalen voordat je iets hebt gecheckt"
- Correct: c, d
- Retry pointer (line that gives it away): z3 "Bekijken kan dus helaas niet." and z4 "Maak eerst de borg ... over."
- Nudge: "Lees zin 3 en 4 van Mark nog eens. Wat mag je niet, en wat moet je wel?"
- Hint (30 s): "Een vriendelijk bericht of een adres bewijst niets."
- Explanation: "Niet kunnen kijken en eerst moeten betalen zijn signalen. Een adres of een vriendelijke toon bewijst niets."
- Sources: fhdHuur, omHuur
- Note for authors: the foreign account (z5) is a real warning sign at the Fraudehelpdesk, but the second source (OM) only says the account was not the advertiser's. It is not offered as an item, so a pair that notices it is not marked wrong. A pressure line ("er zijn nog meer mensen") is left out of the chat for the same reason: only the Fraudehelpdesk names it.

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
  - c "Contact opnemen met de Fraudehelpdesk"
- Correct: c
- Retry pointer: (no document line; points to the situation) "Nu antwoordt die niet meer."
- Nudge: "Wie geld kwijt is aan oplichters, kan bij een speciale helpdesk terecht."
- Hint: "Er is een helpdesk speciaal voor fraude."
- Explanation: "Denk je dat je bent opgelicht? Neem contact op met de Fraudehelpdesk. Betaal nooit nog meer."
- Sources: fhdHuur, omHuur (OM points to the Fraudehelpdesk campaign page for tips)

### Cijfer kamer 1
- Clue: "Cijfer 1 is het aantal juiste signalen bij de eerste vraag van deze kamer."
- Digit: **2** (items c and d).
- Remember: "Kun je een kamer niet bekijken, of moet je eerst betalen? Niet doen. Check het eerst."

---

## Kamer 2. Het huurcontract (donderdag 1 juli 2027)

**Intro:** "Je hebt een echte kamer gevonden en bekeken. Woonhuis Zeestad stuurt je het huurcontract. Lees het voordat je tekent."

### Document 2: huurcontract, artikel 1 tot en met 6 (type: letter, sentences)
From: "Woonhuis Zeestad BV", place "Zeestad, 1 juli 2027". Heading: "Huurovereenkomst kamer".
- c1 "Huurder: jij. Verhuurder: Woonhuis Zeestad BV."
- c2 "Adres: Lindelaan 8, kamer 3, Zeestad."
- c3 "Ingangsdatum: 1 september 2027."
- c4 "Kale huur: € 410 per maand."
- c5 "Servicekosten (energie, water en internet): € 85 per maand."
- c6 "Borg: € 1.230, te betalen bij het tekenen."

**Moeilijke woorden (plain):** "Kale huur: de huur voor de kamer zelf, zonder extra's. Servicekosten: kosten voor extra's, zoals energie en internet. Borg: geld dat je vooraf betaalt. Je krijgt het terug als je weggaat."

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
- Retry pointer: c4 "Kale huur: € 410 per maand."
- Nudge: "De borg is hoogstens twee keer de kale huur. Zonder servicekosten."
- Hint: "Reken 2 x € 410."
- Explanation: "Voor contracten vanaf 1 juli 2023 is de borg hoogstens 2 maanden kale huur. 2 x € 410 = € 820. Dus € 1.230 is te veel."
- Sources: roBorg, vhnBorg
- Expected wrong answers: € 990 (2 x 495, with servicekosten), € 1.230 (the contract's own amount), € 1.485 (3 x 495).

### Vraag 2.3 (id: terug, kind: pick, docs: contract)
- Situ: "Na een jaar ga je weg. Je kamer is netjes en je hebt alle huur betaald."
- Prompt: "Wanneer moet je borg uiterlijk terug zijn?"
- Options:
  - a "Binnen 3 maanden na het einde van de huur"
  - b "Als de nieuwe huurder zijn borg heeft betaald"
  - c "Binnen 30 dagen na het einde van de huur"
  - d "Binnen 14 dagen na het einde van de huur"
- Correct: d
- Retry pointer: plain line "Borg: ... Je krijgt het terug als je weggaat." (the contract says nothing about the term; the retry points to the hint text).
- Nudge: "Zonder schade of achterstand gaat het snel. Kies de kortste termijn die bij de wet past."
- Hint: "Het is minder dan een maand."
- Explanation: "Zonder schade of achterstand krijg je de borg binnen 14 dagen terug. Haalt de verhuurder kosten eraf? Dan krijg je de rest binnen 30 dagen."
- Sources: roBorg, vhnBorg
- Note: option c (30 days) is the term when costs are deducted, so the explanation names it; the situation rules it out (no damage, no arrears).

### Cijfer kamer 2
- Clue: "Cijfer 2 is het eerste cijfer van de borg die de verhuurder hoogstens mag vragen."
- Digit: **8** (€ 820).
- Remember: "Lees je contract: kale huur en servicekosten staan apart. De borg is hoogstens 2 maanden kale huur."

---

## Kamer 3. Inschrijven bij de gemeente (zaterdag 28 augustus 2027)

**Intro:** "Je hebt getekend. Vandaag verhuis je van het huis van je ouders in Dorpsveen naar Zeestad."

### Document 3: je verhuisplanning (type: rows)
Title: "Mijn planning, augustus en september 2027"
- r1 "za 28 aug: verhuizen naar Lindelaan 8, kamer 3, Zeestad"
- r2 "ma 30 aug: introductieweek begint"
- r3 "wo 1 sep: eerste collegedag"
- r4 "nog doen: adres doorgeven"

Note: "Dorpsveen en Zeestad zijn verzonnen gemeenten."

**Moeilijke woorden (plain):** "BRP: de lijst van de gemeente met wie waar woont. Uiterlijk: op zijn laatst. Uitwonend: je woont niet meer bij je ouders."

### Vraag 3.1 (id: gemeente, kind: pick, docs: planning)
- Prompt: "Bij wie geef je je verhuizing door?"
- Options:
  - a "Bij DUO"
  - b "Bij Woonhuis Zeestad, je verhuurder"
  - c "Bij de gemeente Dorpsveen, waar je vandaan komt"
  - d "Bij de gemeente Zeestad, waar je gaat wonen"
- Correct: d
- Retry pointer: r1 "verhuizen naar Lindelaan 8, kamer 3, Zeestad"
- Nudge: "Je oude gemeente hoeft niets te doen. Waar woon je straks?"
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
- Retry pointer: r1 "za 28 aug: verhuizen"
- Nudge: "Je hebt een paar dagen na je verhuizing. Tel vanaf 28 augustus."
- Hint: "Het zijn 5 dagen. Augustus heeft 31 dagen."
- Explanation: "Geef je verhuizing door vanaf 4 weken ervoor tot uiterlijk 5 dagen erna. Te laat? Dan kan de gemeente een boete geven."
- Sources: roVerhuis, roVerhuisProduct, rdamVerhuis
- Note: the fine is "maximaal € 325" on the two Rijksoverheid pages only; the Rotterdam page mentions no fine (fact-check A, item A12). The pupil text says only "een boete" so no amount has to be kept up to date.

### Vraag 3.3 (id: duo, kind: pick, docs: none)
- Situ: "Je huisgenoot Sem woont echt op kamers. Maar hij staat bij de gemeente nog op het adres van zijn ouders."
- Prompt: "Welke basisbeurs krijgt Sem van DUO?"
- Options:
  - a "Uitwonend, want hij woont echt op kamers"
  - b "Geen basisbeurs, want zijn adres klopt niet"
  - c "Thuiswonend, want hij staat bij zijn ouders ingeschreven"
- Correct: c
- Retry pointer: situ "hij staat bij de gemeente nog op het adres van zijn ouders"
- Nudge: "DUO kijkt naar het adres waarop je bij de gemeente staat."
- Hint: "Twee dingen moeten kloppen: je adres bij de gemeente en waar je echt woont."
- Explanation: "Uitwonend ben je als je op een ander adres staat ingeschreven dan je ouders, en daar ook echt woont. Sem moet zich dus inschrijven in Zeestad."
- Sources: duoUitwonend, wsf15
- Note: option b is wrong because basisbeurs does not depend on the address being right; Sem gets the thuiswonend amount (DUO: "Hoeveel studiefinanciering u kunt krijgen, hangt af van uw woonsituatie").

### Cijfer kamer 3
- Clue: "Cijfer 3 is de dag in september waarop je je verhuizing uiterlijk doorgeeft."
- Digit: **2** (2 september 2027).
- Remember: "Verhuisd? Geef het binnen 5 dagen door aan je nieuwe gemeente. DUO kijkt naar dat adres."

---

## Kamer 4. Huurtoeslag? (maandag 13 september 2027)

**Intro:** "Je woont twee weken op kamers. Je vriendin Noor stuurt je een appje."

### Document 4a: app van Noor (type: chat)
From: "Noor", time 18:02.
- n1 "Ik krijg huurtoeslag voor mijn studio!"
- n2 "Ik heb een eigen voordeur, keuken, wc en douche."
- n3 "Vraag jij het ook aan voor je kamer?"

### Document 4b: je kamer (type: list)
Title: "Lindelaan 8, kamer 3 (uit je contract)"
- k1 "Eigen kamer met slot"
- k2 "Keuken: samen met 4 huisgenoten"
- k3 "Wc en douche: samen met 4 huisgenoten"
- k4 "Aangewezen voor huurtoeslag: nee"

**Moeilijke woorden (plain):** "Huurtoeslag: geld van de overheid als hulp bij je huur. Je vraagt het aan bij Toeslagen. Zelfstandige woning: een woning met alles voor jou alleen. Aangewezen: Toeslagen (de dienst die de huurtoeslag betaalt) heeft lang geleden gezegd dat er voor deze kamer toch huurtoeslag kan."

### Vraag 4.1 (id: kamer, kind: pick, docs: kamer)
- Prompt: "Kun jij huurtoeslag krijgen voor kamer 3?"
- Options:
  - a "Ja, want je bent 18 en je betaalt huur"
  - b "Ja, want Noor krijgt het ook"
  - c "Nee, want je deelt de keuken, wc en douche"
- Correct: c
- Retry pointer: k2 and k3 "samen met 4 huisgenoten"
- Nudge: "Kijk wat je deelt met je huisgenoten. Wat heeft Noor wel?"
- Hint: "Huurtoeslag is er meestal alleen voor een zelfstandige woning."
- Explanation: "Je krijgt alleen huurtoeslag voor een zelfstandige woning. Deel je keuken, wc of douche? Dan is het geen zelfstandige woning."
- Sources: bdWoningen, bdStudent

### Vraag 4.2 (id: zelfstandig, kind: multi, docs: chat)
- Prompt: "Wat heeft een zelfstandige woning in ieder geval voor jou alleen?"
- Legend: "Tik alles aan wat erbij hoort."
- Items:
  - a "Een tuin of balkon"
  - b "Een woonkamer van minstens 20 m²"
  - c "Een voordeur die op slot kan"
  - d "Een keuken"
  - e "Een wc"
  - f "Een douche of bad"
- Correct: c, d, e, f
- Retry pointer: n2 "Ik heb een eigen voordeur, keuken, wc en douche."
- Nudge: "Noor noemt precies wat ze heeft. Een tuin of een grote kamer is niet nodig."
- Hint: "Het zijn er vier. Lees het appje van Noor."
- Explanation: "Een zelfstandige woning heeft een eigen voordeur die op slot kan, keuken, wc en douche of bad. De douche telt sinds 1 maart 2024."
- Sources: bdWoningen, bdKan
- Note: Belastingdienst "voor welke woningen" also lists "een eigen woon-/slaapkamer"; it is not an item because every room in the story has one.

### Vraag 4.3 (id: uitzondering, kind: pick, docs: kamer)
- Prompt: "Wanneer kan huurtoeslag voor een studentenkamer soms toch?"
- Options:
  - a "Als je kale huur lager is dan € 500"
  - b "Als je jonger bent dan 21"
  - c "Als de kamer voor 1 juli 1997 is aangewezen voor huurtoeslag"
- Correct: c
- Retry pointer: k4 "Aangewezen voor huurtoeslag: nee"
- Nudge: "Kijk naar de laatste regel over je kamer. Wat staat daar?"
- Hint: "Het gaat om een oude regel van lang geleden."
- Explanation: "Is je kamer voor 1 juli 1997 aangewezen voor huurtoeslag? Dan kan het soms wel. Vraag het na bij je verhuurder."
- Sources: bdStudent, bdWoningen

### Cijfer kamer 4
- Clue: "Cijfer 4 is het aantal dingen dat je bij de tweede vraag van deze kamer moest aantikken."
- Digit: **4** (c, d, e, f).
- Remember: "Huurtoeslag is er meestal alleen voor een zelfstandige woning. Een kamer met gedeelde keuken of wc telt meestal niet."

Not asked (teacher note only): from 1 January 2026 huurtoeslag has no maximum rent any more, the youth age limit went from 23 to 21, and servicekosten no longer count: Dienst Toeslagen calculates with the kale huur (Belastingdienst "Huurtoeslag verandert vanaf 2026", modified 8 Oct 2026). Only one source page was read for these changes, so they are not in a question.

---

## Start- en eindcheck: twee parallelle vormen, A en B (elk 4 vragen, één per kamer, enkele keuze, score 0 tot 4)

No feedback during the check. Each question works without the room's document. Question n of form A and question n of form B test the same rule at the same difficulty, with a different situation and different numbers. Form B adds no new rule or amount: it uses only rules already in the source table (same sources as the room). Use: a pair gets one form before the clock starts and the other after the lock opens; counterbalance as in ESC-BIJBAAN (odd pairs A before and B after, even pairs B before and A after). If only one form is used, the eindcheck shows the same questions in reverse order with the options turned one place (as ESC-MAAND F1).

### Vorm A

| # | Kamer | Vraag | Opties | Goed |
|---|---|---|---|---|
| C1 | 1 De advertentie | "Een verhuurder zit in het buitenland. Je kunt de kamer niet bekijken. Hij wil eerst de borg. Wat doe je?" | a Snel betalen, dan ben je de eerste; b De helft betalen als garantie; c Niets betalen voordat je de kamer hebt bekeken en gecheckt | c |
| C2 | 2 Het huurcontract | "De kale huur is € 400. De servicekosten zijn € 60. Hoeveel borg mag de verhuurder hoogstens vragen?" | a € 800; b € 920; c € 1.200 | a |
| C3 | 3 Inschrijven | "Je verhuist op 10 september. Uiterlijk wanneer geef je dat door aan je nieuwe gemeente?" | a 10 september; b 15 september; c 10 oktober | b |
| C4 | 4 Huurtoeslag | "Je huurt een kamer en deelt keuken en wc met huisgenoten. Krijg je dan meestal huurtoeslag?" | a Ja, vanaf 18 jaar altijd; b Nee, meestal niet; c Ja, als je student bent | b |

C2 uses new fictional amounts (2 x 400 = 800; 920 = 2 x 460 with servicekosten; 1.200 = 3 months) so it checks the rule, not memory of room 2.

### Vorm B

| # | Kamer (test) | Vraag | Opties | Goed | Regel en bron |
|---|---|---|---|---|---|
| B1 | 1 De advertentie | "Een verhuurder heeft geen tijd om de kamer te laten zien. Je moet eerst de huur van de eerste maand overmaken. Wat doe je?" | a De huur overmaken, want dat is minder dan de borg; b Niets betalen voordat je de kamer hebt bekeken en gecheckt; c Eerst betalen en daarna om foto's vragen | b | Niet kunnen kijken en eerst moeten betalen: niets betalen (fhdHuur / omHuur; OM noemt "huur overmaken voor een woning die je nog niet hebt kunnen bezichtigen") |
| B2 | 2 Het huurcontract | "De kale huur is € 350. De servicekosten zijn € 70. Hoeveel borg mag de verhuurder hoogstens vragen?" | a € 840; b € 1.050; c € 700 | c | Borg hoogstens 2 maanden kale huur (roBorg / vhnBorg) |
| B3 | 3 Inschrijven | "Je verhuist op 3 oktober. Uiterlijk wanneer geef je dat door aan je nieuwe gemeente?" | a 8 oktober; b 3 oktober; c 3 november | a | Uiterlijk 5 dagen na de verhuizing (roVerhuis / roVerhuisProduct / rdamVerhuis) |
| B4 | 4 Huurtoeslag | "Je huurt een kamer met een eigen keuken. De wc en de douche deel je met huisgenoten. Krijg je dan meestal huurtoeslag?" | a Ja, want je hebt een eigen keuken; b Ja, want je betaalt zelf huur; c Nee, meestal niet: je deelt de wc en douche | c | Alleen een zelfstandige woning; gedeelde wc of keuken is geen zelfstandige woning (bdWoningen / bdStudent) |

Parallel checks: B2 has new fictional amounts on the same pattern as C2 (2 x 350 = 700 is right; 840 = 2 x 420 with servicekosten; 1.050 = 3 months kale huur). B3 has the same one-step sum as C3 (3 + 5 = 8 oktober, no month change; calendar days, as in V3.2). B1 swaps the borg for the first month's rent, B4 swaps the shared kitchen for a shared wc and douche; the rule and the number of steps stay the same. Distractors mirror form A (pay part or pay first; servicekosten counted or 3 months; the day itself or a month later; a wrong reason for "ja").

Score: 1 point per right answer, 0 to 4, before and after, shown per pair on the win screen.

---

## Lesplan voor de docent (45 minuten)

| Min | Onderdeel | Wat je doet |
|---|---|---|
| 3 | Uitleg | Laat het docentenscherm zien. Leerlingen openen de link en werken met z'n tweeën op één scherm. |
| 2 | Startcheck | Elk tweetal beantwoordt vier vragen (vorm A of B) voordat de klok start. Geef geen hints. |
| 30 | Escape | Start de klastimer. Tweetallen spelen vier kamers en schrijven elk cijfer op. |
| 1 | Eindcheck | Na het slot de andere vorm: vier vragen over dezelfde regels. Daarna ziet elk tweetal wat het goed had, voor en na. |
| 7 | Nabespreken | Tel met handopsteken de start- en eindcheck en welke kamer lastig was. Begin bij die kamer. Gebruik de drie gespreksvragen. Vraag naar ervaringen, niet naar punten. |
| 2 | Afsluiten | Elke leerling maakt één als-dan-plan en zegt het tegen de buur. |

Total 45 minutes. Materials: a device per pair, pen and paper for the digits, a projector.

Voor de docent, per kamer (teacher points, each from the source table):
- Kamer 1: Betaal niets voor een kamer die je niet hebt gezien. Moet je naar een buitenlandse rekening betalen? Ook dat is een signaal (Fraudehelpdesk). Opgelicht? Fraudehelpdesk.
- Kamer 2: Borg is hoogstens 2 maanden kale huur bij een contract vanaf 1 juli 2023 (daarvoor 3 maanden). Terug binnen 14 dagen, of binnen 30 dagen als er kosten af gaan. Alleen achterstallige huur, servicekosten, schade en energieprestatievergoeding mogen eraf.
- Kamer 3: Verhuizing doorgeven aan de nieuwe gemeente, vanaf 4 weken ervoor tot 5 dagen erna. Boete tot € 325 (Rijksoverheid). DUO krijgt het adres van de gemeente; de woonsituatie zet je zelf in Mijn DUO (DUO).
- Kamer 4: Huurtoeslag meestal alleen voor een zelfstandige woning. Uitzondering voor kamers: aangewezen voor 1 juli 1997. Sinds 2026: geen huurgrens meer, jongerengrens 21 jaar, servicekosten tellen niet meer mee (één bronpagina).

## Antwoordblad

| Kamer | Vraag | Goed antwoord |
|---|---|---|
| 1 | Signalen van oplichting | Je kunt de kamer niet eerst bekijken; Je moet al betalen voordat je iets hebt gecheckt |
| 1 | Wat doe je nu | Niets betalen voordat je de kamer hebt bekeken en gecheckt |
| 1 | Advies aan Daan | Contact opnemen met de Fraudehelpdesk |
| 1 | **Cijfer** | **2** |
| 2 | Totaal per maand | € 495 |
| 2 | Hoogste borg | € 820 |
| 2 | Borg terug | Binnen 14 dagen na het einde van de huur |
| 2 | **Cijfer** | **8** |
| 3 | Bij wie doorgeven | Bij de gemeente Zeestad, waar je gaat wonen |
| 3 | Uiterlijk | 2 september 2027 |
| 3 | Basisbeurs Sem | Thuiswonend, want hij staat bij zijn ouders ingeschreven |
| 3 | **Cijfer** | **2** |
| 4 | Huurtoeslag kamer 3 | Nee, want je deelt de keuken, wc en douche |
| 4 | Zelfstandige woning | Voordeur met slot, keuken, wc, douche of bad |
| 4 | Uitzondering | Aangewezen voor 1 juli 1997 |
| 4 | **Cijfer** | **4** |
| | **Code** | **2824** |

Start/eindcheck vorm A: C1 c, C2 a, C3 b, C4 b. Vorm B: B1 b, B2 c (€ 700), B3 a (8 oktober), B4 c.

## Nabespreken

Drie gespreksvragen:
1. "Zoek jij straks een kamer? Waar zou je zoeken, en hoe check je of de verhuurder echt is?"
2. "Waarom betalen mensen toch voor een kamer die ze niet zagen? Wat zou jij doen als je echt geen kamer vindt?"
3. "Wat moet je allemaal regelen als je verhuist? Wat regel je zelf, en wat laat je nu nog aan je ouders over?"

Slotvraag: "Noem één ding dat je moet doen voordat je een kamer betaalt, en één ding dat je moet doen binnen 5 dagen nadat je verhuisd bent."

Als-dan-plan (prompt):
"Maak je eigen als-dan-plan en zeg het tegen je buur. Kies een situatie en een actie.
Als ik ... (een kamer vind die ik wil huren / een huurcontract krijg / verhuisd ben),
dan ... (bekijk ik de kamer eerst en betaal ik niets vooraf / reken ik na of de borg niet hoger is dan 2 keer de kale huur / geef ik mijn adres binnen 5 dagen door aan mijn nieuwe gemeente).
Zet één datum in je telefoon."

---

## Brontabel

Valid until: the date the rule or amount is next expected to change; "check" means the next scheduled check (January 2027) unless a known change date is given.

| Key | Rule (as used) | Source 1 | Source 2 | Checked | Valid until |
|---|---|---|---|---|---|
| fhdHuur / omHuur | Signs: you cannot view the room first; you must pay before you have checked. If scammed, contact the Fraudehelpdesk. | [Fraudehelpdesk, Woonplek gevonden? Check voordat je huurt](https://www.fraudehelpdesk.nl/campagnes/een-dak-boven-je-hoofd-of-van-je-centen-beroofd/) ("kun je de woonruimte niet eerst bekijken"; "Betaal niets voordat je een paar dingen hebt gecheckt"; "Neem dan contact op met de Fraudehelpdesk"; modified 29 Oct 2025) | [Openbaar Ministerie, Online campagne waarschuwt voor huurfraude (1 Oct 2021)](https://www.om.nl/actueel/nieuws/2021/10/01/online-campagne-waarschuwt-voor-huurfraude) ("van tevoren huur overmaken voor een woning die je nog niet hebt kunnen bezichtigen"; links to the Fraudehelpdesk page) | 6 Nov 2026 | No set date; check Jan 2027 |
| roBorg / vhnBorg | Borg at most 2 months kale huur for contracts from 1 July 2023 (before: 3); back within 14 days, or the rest within 30 days when costs are deducted. | [Rijksoverheid, woning huren waarborgsom](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/woning-huren/woning-huren-waarborgsom) (modified 9 Sep 2026) | [Volkshuisvesting Nederland, waarborgsom](https://www.volkshuisvestingnederland.nl/onderwerpen/huurbescherming-en-huurcontracten/waarborgsom) (modified 8 Oct 2025); third source: [Volkshuisvesting Nederland, WGV-brochure voor huurders (pdf)](https://volkshuisvestingnederland.nl/binaries/volkshuisvestingnederland/documenten/publicaties/2024/02/09/huurders/WGV+Brochure+huurders+NL_TG.pdf) ("maximaal 2 maanden kale huur als borg ... op of na 1 juli 2023") | 6 Nov 2026 | Law in force since 1 Jul 2023 (Wet goed verhuurderschap); check Jan 2027 |
| roVerhuis / roVerhuisProduct / rdamVerhuis | Report a move to the municipality where you will live, from 4 weeks before to at the latest 5 days after; fine up to € 325. | [Rijksoverheid, hoe kan ik mijn verhuizing doorgeven](https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/gemeenten/hoe-kan-ik-mijn-verhuizing-doorgeven-aan-de-gemeente) and [Rijksoverheid, verhuizing melden](https://www.rijksoverheid.nl/wetten-en-regelingen/productbeschrijvingen/verhuizing-melden) (both modified 23 Dec 2025) | [Gemeente Rotterdam, verhuizing doorgeven](https://www.rotterdam.nl/verhuizing-doorgeven) ("vanaf 4 weken voordat u verhuist of tot 5 dagen erna"; "aan de nieuwe gemeente"; online with DigiD) | 6 Nov 2026 | € 325 maximum (Rijksoverheid alleen): check Jan 2027 |
| duoUitwonend / wsf15 | Uitwonend: registered in the BRP at an address other than the parents' and living there. DUO gets the address from the municipality. | [DUO, uitwonend](https://duo.nl/particulier/studiefinanciering/uitwonend.jsp) | [Wet studiefinanciering 2000, art. 1.5 lid 1](https://wetten.overheid.nl/jci1.3:c:BWBR0011453&hoofdstuk=1&artikel=1.5) (version in force from 1 Aug 2026) | 6 Nov 2026 | No set date; check Jan 2027 |
| bdWoningen / bdStudent / bdKan | Huurtoeslag only for a zelfstandige woning (own lockable front door, kitchen, wc, shower or bath since 1 Mar 2024); a room with shared facilities is not one; exception: room designated before 1 July 1997. | [Belastingdienst, voor welke woningen kan ik huurtoeslag krijgen](https://belastingdienst.nl/wps/wcm/connect/nl/huurtoeslag/content/voor-welke-woningen-huurtoeslag) (modified 21 Jul 2026) and [Belastingdienst, kan ik huurtoeslag krijgen](https://belastingdienst.nl/wps/wcm/connect/nl/toeslagen/content/kan-ik-huurtoeslag-krijgen) (modified 14 Jul 2026) | [Belastingdienst, Ik woon op kamers: kan ik huurtoeslag krijgen?](https://www.belastingdienst.nl/wps/wcm/connect/nl/huurtoeslag/content/student-op-kamers-huurtoeslag) (modified 21 Jul 2026) | 6 Nov 2026 | Rules for 2026; check before 1 Jan 2027 (toeslag year) |
| (teacher only) | 2026 changes: no maximum rent; youth limit 21 (was 23); servicekosten no longer count; calculation with max € 932,93, or € 498,20 up to 21. | [Belastingdienst, Huurtoeslag verandert vanaf 2026](https://www.belastingdienst.nl/wps/wcm/connect/nl/huurtoeslag/content/huurtoeslag-verandert-vanaf-2026) (modified 8 Oct 2026) | none read (single source, so not asked) | 6 Nov 2026 | Amounts valid for 2026; change on 1 Jan 2027 |

All three huurtoeslag sources are pages of one organisation (Belastingdienst / Dienst Toeslagen). No second organisation was read for the room rules.

## Onzeker

- Huurtoeslag sources are all Dienst Toeslagen pages; a second organisation (Rijksoverheid, wetten.overheid.nl Wet op de huurtoeslag) was not read. Rijksoverheid huurtoeslag pages returned 404 on 6 Nov 2026.
- The 2026 huurtoeslag changes (no rent cap, age 21, kale huur only) have one source page and are teacher-only. The 2027 calculation amounts are not yet checked; they change on 1 January 2027.
- Left out of the questions: the tenant's notice period (BW 7:271 text not retrieved), temporary contracts for students (Wet vaste huurcontracten exceptions; a new bill "passende huurcontracten" went to consultation in July 2026), the huurcommissie and rent points for rooms (not researched in time), the foreign account, a low price and pressure as scam signs (one fitting official source each).
- Whether the 2-month borg cap applies to rooms is not said in so many words: the two pages and the WGV-brochure (added as third source, fact-check A item A7) speak of "woning"/"woonruimte" and do not exclude rooms. The rule is in BW 7:261a (huur van woonruimte, which by 7:233 covers onzelfstandige woonruimte), but the law text could not be opened on 6 Nov 2026. Keep this note until BW 7:261a is read on wetten.overheid.nl. A housing lawyer or the Huurcommissie should confirm.
- "Je krijgt de borg terug als je weggaat" (gloss) holds only without damage or arrears; the explanation of 2.3 says so.

---

## Changelog

Item numbers refer to the rows of `factcheck_A_op-kamers.md` in table order (A1 = first row, "Kamer 1, V1.1"; A21 = last row, "Fiction line and notes"). The report gives no numbers of its own.

6 november 2026:
- A12 (ERROR, source table): removed `fine "maximaal € 325"` from the Rotterdam cell of the roVerhuis row; the Rotterdam page mentions no fine. "Valid until" cell now reads "€ 325 maximum (Rijksoverheid alleen): check Jan 2027". Teacher note Kamer 3 now says "Boete tot € 325 (Rijksoverheid)." The author note under V3.2, which said both Rijksoverheid and Rotterdam give € 325, is corrected the same way. Pupil text unchanged ("een boete", no amount).
- A14 (RISK, Kamer 4 gloss): "Aangewezen" now names Toeslagen instead of de Belastingdienst and says the designation was long ago, in the checker's wording. Added to the "Huurtoeslag" gloss: "Je vraagt het aan bij Toeslagen."
- A7 (OK-with-note, source table fix): added the Volkshuisvesting Nederland WGV-brochure for huurders as third source in the roBorg / vhnBorg row; the Onzeker bullet on rooms is kept and now names BW 7:261a, as the checker asked.
- Start- en eindcheck: the existing four questions are now "Vorm A" (unchanged). Added "Vorm B" (B1 to B4), one per room, same rule and difficulty, new situation and new fictional amounts, only rules from the source table. Lesson plan rows Startcheck and Eindcheck and the Antwoordblad line updated to the two forms.
- Added the "Bedragen geldig voor" line under the title. validUntil 31 december 2026 because the huurtoeslag amounts in the teacher note (€ 932,93 / € 498,20) are 2026 values that change on 1 January 2027 (A18).
- Answers, digits and code re-checked after these fixes: no fix changes an amount or an answer. Digits stay 2, 8 (2 x € 410 = € 820), 2 (28 aug + 5 = 2 sep), 4; code stays **2824**.
- Not applied (marked optional by the checker, OK-with-note): A1 rewording of item b to "Mark noemt in de advertentie een adres"; A5 borg gloss "... als je weggaat en alles netjes is". The report header counts 3 RISK, but only one row (A14) is classed RISK; that row is applied.

