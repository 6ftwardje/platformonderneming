# ICP — Core A: Dealer-/installateursnetwerken

> **AI-kennisbank platformonderneming** · Bron: outreach-strategie (Core A) · Laatst bijgewerkt: 2026-06-15 · Status: actueel — leidend voor outreach

Dit is het scherpe, operationele ICP voor het **eerste outreach-segment**: Vlaamse/Belgische
bedrijven die hun producten via een **extern dealer-/installateursnetwerk** verkopen en dat
netwerk moeten opleiden + certificeren. Voorlopig "op papier" — nog geen enrichment. Sectie 5
maakt het meteen vertaalbaar naar Apollo/Clay-filters zodra we de lijst gaan bouwen.

---

## 1. ICP-definitie (firmografisch)

| Criterium | Profiel |
|---|---|
| **Kernkenmerk (must-have)** | Verkoopt via **dealers / verdelers / erkende installateurs / resellers / integratoren** — niet (alleen) direct aan eindklant |
| **Sectoren** | HVAC/klimaat/sanitair · hernieuwbare energie (warmtepompen, zonnepanelen, laadpalen, batterijen) · domotica & elektro-installatiemateriaal · bouwtech/gevel/schrijnwerk/zonwering · machinebouw & technische installatie · bouwchemie |
| **Grootte** | ±50–500 FTE (genoeg budget + serieus netwerk, management nog bereikbaar) |
| **Netwerk-omvang** | Tientallen tot duizenden installateurs/dealers. Hoe groter, hoe hoger de ROI |
| **Productcomplexiteit** | Vereist installatie/configuratie/onderhoud, met technische docs, normen en veiligheidsvereisten → hier levert de AI-RAG-mentor echte waarde |
| **Geografie** | HQ in Vlaanderen/België; internationaal netwerk is een plus (lokalisatie-pijn = extra koopmotief) |

**Waarom dit segment (kort):** het netwerk is extern, dus opleiding/certificering raakt direct
omzet (betere dealers verkopen meer), kosten (minder support + minder garantieclaims) én binding
(gecertificeerde installateurs stappen niet over). Recurring door productlanceringen en
hercertificering. Sluit aan op de externe-educatie-strategie (zie `03`).

---

## 2. Beslisser / persona

| Rol | Pijn | Koopmotief | Bezwaar → weerwoord |
|---|---|---|---|
| **Channel / Dealer / Partner Network Manager** (primair) | Netwerk groeit, training schaalt niet, geen zicht op wie wat kan | Schaalbaar, traceerbaar netwerk dat meer verkoopt | "We hebben al een dealerportaal" → "Top, dat is de plek. Wij voegen er de leer- en AI-laag aan toe die er nu ontbreekt." |
| **Head of After-Sales / Technical Support** | Support wordt platgebeld met dezelfde vragen; dure L1-tijd | 24/7 AI-mentor schrapt tickets (meetbaar in €) | "Onze installateurs bellen liever" → "Klopt, tot het antwoord sneller in de app staat dan aan de lijn." |
| **Commercieel Directeur** | Omzet per dealer stagneert; nieuwe dealers ramp-en traag op | Snellere ramp-up, hogere omzet per dealer | "Training is HR's ding" → "Dit is geen HR, dit is verkoop per dealer verhogen." |
| **Training / Academy Manager** | Klassikaal/PDF, niet schaalbaar, geen data | Moderne academy zonder een L&D-team te bouwen | "We doen het fysiek" → "Hybride: fysiek voor de basis, platform + AI voor schaal en herhaling." |
| **In KMO: zaakvoerder / CEO / COO** | Alles hierboven, in één persoon | Groei zonder evenredige support-/trainingslast | "Geen tijd om content te maken" → "Wij halen het uit jullie experts + bestaande docs." |

---

## 3. Koopsignalen (het hart) — getrapt

### 🟢 Sterke / intent-signalen (hier op jagen)
1. **"Word dealer / verdeler / erkend installateur"-pagina** op de site → bewijst het kanaalmodel.
2. **Bestaand dealer-login / extranet / partnerportaal** → ze investeren al in kanaal-tooling = warm.
3. **Vacature** voor Channel/Partner Manager, Technical Trainer, Customer Education, Sales Enablement of After-sales support → ze bouwen actief aan kanaal/training.
4. **Bestaande "academy/opleiding/training"-pagina die rudimentair is** (PDF's, klassikale data, inschrijfformulier) → perfecte 1-op-1 vervanging, ze geloven al in training.
5. **Certificeringsprogramma** ("erkend/gecertificeerd installateur") → certificering is een kernfeature van ons platform.
6. **Nieuwe productlancering / internationale expansie** → heel netwerk moet bijgeschoold + lokalisatie-pijn.
7. **Recente funding / overname / sterke groei** → budget + groeidruk.
8. **Subsidiegedreven sector** (warmtepompen, zonnepanelen, laadpalen, isolatie) → explosieve installateur-instroom door overheidsincentives → **acute, actuele onboardingnood in BE/VL**. Sterkste timing-signaal nu.
9. **Klachten/reviews over installatiekwaliteit of support-wachttijden** → directe pijn-indicator.
10. **Grote, technisch complexe productcatalogus** (veel SKU's, specs, normen).

### 🟡 Zwakke / contextuele signalen (ondersteunend, niet doorslaggevend)
- Aanwezigheid op installateurs-/vakbeurzen.
- Meertalige website (internationaal netwerk → lokalisatiewaarde).
- Actief productnieuws op LinkedIn (digitaal volwassen genoeg).

**Beste combinatie om op te scoren:** kanaalmodel-bewijs (1 of 2) **+** een actief signaal (3, 5, 6 of 8). Dat is een prospect met pijn én timing.

---

## 4. Disqualifiers (anti-signalen — wegfilteren)
- Pure **B2C / directe verkoop** zonder kanaal.
- **Te klein** (<50 FTE / handvol installateurs) → geen schaal, geen budget.
- **Enterprise met bestaand groot LMS + L&D-team** (Docebo/Cornerstone) → trage inkoop, security-audits. Evt. later, niet nu.
- **Commodity-product** zonder installatie-/configuratiecomplexiteit → AI-mentor voegt weinig toe.
- **Overheid / sterk gereguleerd** → aanbestedingen, lange cycli.

---

## 5. Signaal → detectiemethode (klaar voor latere enrichment)

Zodra we groen licht geven voor enrichment (aparte token-approval), vertalen we het ICP zo:

| Signaal | Apollo | Clay |
|---|---|---|
| Sector + grootte + geo | Industry-filters (machinery, building materials, electrical, renewables, HVAC) + headcount 50–500 + land = België | — |
| Persona | Job titles: "Channel Manager", "Partner Manager", "After-sales", "Technical Trainer", "Academy" | Enrich beslisser-LinkedIn-URL |
| #3 Vacatures | Job-postings endpoint op de relevante functietitels | Scrape vacaturepagina |
| #1/#2 Kanaalmodel + portaal | — | Website-scrape op `/dealer`, `/verdeler`, `/installateur`, `/partner`, `/login`, `/extranet` |
| #4/#5 Academy + certificering | — | Scrape op `/academy`, `/opleiding`, `/training`, `/certificering` |
| #6/#7 Lancering/funding/groei | — | News/funding-enrichment + LinkedIn-bedrijfsupdates |
| #8 Subsidiesector | Industry = renewables/HVAC | Keyword-match op warmtepomp/zonnepaneel/laadpaal |

→ Elke prospect krijgt een **signaalscore** (aantal 🟢-signalen) zodat we de lijst kunnen prioriteren.

---

## 6. Illustratieve Vlaamse ankers (NIET gevalideerd, enkel ter beeldvorming)
Herkenbare profielen die het ICP tastbaar maken — dit is **geen doellijst**, alleen voorbeelden van
het type bedrijf:
- **Domotica/elektro:** Niko, Qbus, Teletask, Loxone-verdelers
- **Gevel/schrijnwerk/zonwering:** Renson, Reynaers Aluminium, Deceuninck (via verwerkers/installateurs)
- **Bouwchemie:** Soudal (via dealers)
- **HVAC/klimaat:** Jaga, Itho Daalderop-type fabrikanten, regionale warmtepomp-/ventilatiemerken
- **Hernieuwbare energie:** warmtepomp-, zonnepaneel- en laadpaalfabrikanten met een installateursnetwerk (sterkste timing door subsidies)

*Validatie + uitbreiding gebeurt in de lijst-bouwstap.*

---

## 7. Outreach-haak + volgende stappen

**Kern-pitch voor dit segment:**
> "Wij bouwen branded Partner Academies met een 24/7 AI-mentor die jullie technische specs ontsluit.
> Resultaat: minder support-tickets, snellere en foutloze installatie, en meer omzet per dealer —
> plus automatische, traceerbare certificering."

**Volgende stappen (zie ook `05-open-vragen-beslissingen.md`):**
1. ⏭️ Beslissen: lijst opbouwen via **Apollo/Clay-enrichment** (token-approval nodig) of **handmatig** een eerste batch.
2. ⏭️ DM-sequence schrijven (NL, geen em-dashes, blanco connectie → DM na acceptatie, Unipile-flow).
3. ⏭️ Wiring in het bestaande n8n/Unipile-outreachsysteem + signaalscore als prioritering.
