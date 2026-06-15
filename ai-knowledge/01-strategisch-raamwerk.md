# Strategisch Raamwerk

> **AI-kennisbank platformonderneming** · Bron: sparsessie met Gemini (door Maxim aangeleverd) · Laatst bijgewerkt: 2026-06-15 · Status: actueel

Dit is het uitgewerkte strategische raamwerk uit een sparsessie met Gemini. Het dient als
blauwdruk voor positionering, sales-narratief en risicomanagement.

---

## 1. De strategische shift: van cost center naar profit center

De initiële aanname dat het platform voor interne *employee onboarding* moest dienen is
gecorrigeerd. De focus ligt nu op **externe partner- en klant-educatie**, aangevuld met een
tactische *wedge*.

### Core vs. Wedge

| Aspect | De Wedge (nu: snelle cash) | De Core (lange termijn: schaal & retentie) |
|---|---|---|
| **Doelgroep** | High-ticket coaches, consultants & kennis-experts | KMO's & enterprise met dealer-/installateursnetwerken (maakindustrie, HVAC, bouw-tech) |
| **Use case** | Monetized expert-academies (kennis als product verkopen) | Partner-/klantopleiding & verplichte certificering |
| **Commercieel bewijs** | Direct inzetbaar via bestaande cases (HTP2.0, CoachedBy) | Lange verkoopcycli, maar hoge contractwaarde (€20k–€60k+) |
| **Sales-boodschap** | "Snel je expertise schalen en digitaliseren zonder tech-headaches." | "Verhoog de verkoop per dealer en elimineer 30%+ van je support-tickets." |

### Waarom externe opleiding wint van onboarding
1. **Omzetmotor vs. kostenpost:** marketing-/sales-/partner-budgetten gaan veel makkelijker open dan HR-budgetten.
2. **Blijvend gebruik:** nieuwe productreleases = nieuwe modules + hercertificering → continue activiteit.
3. **Hardere ROI op AI:** een AI-mentor voor externe partners verlaagt direct de druk op de helpdesk (meetbaar in €).

---

## 2. De concurrentie & de video-mythe

### De video-mythe
Professionele video is een **hygiënefactor** (basisvereiste), géén USP. Elke concurrent kan
een videograaf inhuren of AI-videotools inzetten. Video sluit de deal niet — het is de etalage.

### Het competitieve landschap
1. **SaaS-giganten (Docebo, TalentLMS, Thinkific Plus):** veel features, maar straffen groei af via *per-seat pricing*; gesloten, weinig diep maatwerk.
2. **Lokale web agencies (Laravel/React):** kunnen maatwerk bouwen, geen licentiemodel, maar missen de e-learning-psychologie én de data-engineering voor een betrouwbare RAG-mentor.

---

## 3. De échte duurzame USP's (de moat)

- **Pijler 1 — Licentievrijheid (geen per-seat straf):** dankzij Next.js + Supabase bezit de
  klant de software. 100 of 10.000 dealers: variabele softwarekosten blijven ~nul. SaaS-spelers
  kunnen dit niet kopiëren zonder hun eigen ARR-waardering te slopen.
  *⚠️ Zie kritische kanttekening in `05-open-vragen-beslissingen.md`: dit ondergraaft je eigen recurring revenue.*
- **Pijler 2 — Diepe ecosysteem-integratie:** praat met ERP (SAP, Navision, Dynamics) en CRM
  (Salesforce, HubSpot). Bv.: certificaat behaald → kortingsmatrix automatisch geactiveerd in de B2B-webshop.
- **Pijler 3 — Operationele support via RAG:** de AI-mentor als L1-supportmedewerker getraind
  op gefragmenteerde technische documentatie; lost complexe vragen op de werf op → minder tickets.

---

## 4. Financial engineering: de ROI van 2.000 dealers

Voorbeeldcase — een Vlaams maakbedrijf met **2.000 wereldwijde dealers** (3-jaarsprojectie):

| Post | SaaS-route (enterprise LMS) | Custom route (Next.js + Supabase) | Netto impact |
|---|---|---|---|
| **Licenties / bouwkost** | €96.000/jaar (€4 p/gebruiker/maand) | €50.000 eenmalig + €12.000/jaar cloud | **€202.000 besparing** over 3 jaar |
| **Support-reductie (AI)** | €0 | 30% deflectie op 24.000 tickets (7.200 × €20) | **€144.000 winst/jaar** vanaf jaar 1 |
| **AI-lokalisatie** | Tienduizenden € handmatig vertaalwerk | On-the-fly via Whisper & LLM API's | **90%+ reductie** lokalisatiekosten |

> Commerciële conclusie: €50k investering verdient zich in jaar 1 al dubbel terug.
> **⚠️ Deze cijfers zijn illustratief, niet bewezen** — gebruik ze als raamwerk, niet als claim. Zie `05`.

---

## 5. Geïdentificeerde blinde vlekken & risicomanagement

1. **SLA- en onderhoudsvalstrik** — maatwerk is nooit "af" (Next.js/Supabase/OpenAI veranderen).
   *Oplossing:* verplicht maandelijks SLA (€1.500–€2.500/maand) voor onderhoud, updates, uptime.
2. **Juridische aansprakelijkheid bij AI-hallucinaties** — fout technisch advies → schade/letsel.
   *Oplossing:* waterdichte disclaimer + 'human-in-the-loop' escalatie voor kritieke veiligheidsvragen.
3. **De vloek van de achterkant (CMS/admin-UX)** — als de beheerder het admin-paneel haat, geen verlenging.
   *Oplossing:* vanaf dag één investeren in een intuïtieve admin-ervaring (headless CMS of strak Supabase-admin).
4. **De IT-procurementmuur** — IT blokkeert de deal zonder ISO27001/SOC2/GDPR-DPA-documentatie.
   *Oplossing:* leun op de compliance van de stack (Vercel/Supabase zijn enterprise-compliant) + vooraf security-memorandum.
5. **"Garbage in, garbage out"** — rommelige/verouderde klantcontent → slechte AI-mentor.
   *Oplossing:* verkoop vooraf een verplichte **"AI Readiness & Content Audit"** (±€2.500).

---

## 6. De "derde optie": Product Adoption Academies voor B2B SaaS

Blootgelegde blinde vlek: **Product Adoption Academies voor complexe B2B SaaS-bedrijven.**
- Enterprise softwareleveranciers kampen met hoge *churn* omdat hun software te complex is.
- Een white-labeled, ingebedde academy met AI-mentor (getraind op hun docs) lost een direct
  retentieprobleem op.
- Voordeel: digitaal extreem volwassen doelgroep, snapt API's meteen, grote budgetten voor retentie.
- **Opmerkelijk:** dit echoot wat council ronde 1 al aanwees (B2B tech/SaaS scale-ups). Zie `05`.
