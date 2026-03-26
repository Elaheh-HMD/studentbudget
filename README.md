# Student Budget App

## Beskrivning

Detta projekt är en webbapplikation byggd med React och TypeScript. Applikationen gör det möjligt för användare att hantera sina utgifter (expenses) genom att lägga till, visa och ta bort poster.

Projektet är utvecklat som en del av kursen och följer krav för både G och VG.

---

## Funktionalitet

* Visa lista av expenses (GET)
* Lägga till ny expense (POST)
* Ta bort expense (DELETE)
* Uppdatera expense (PUT - förberedd)
* Felhantering vid API-anrop
* Loading state vid hämtning av data
* Empty state när inga data finns

---

## Tekniker

* React
* TypeScript
* Context API (state management)
* Fetch API (REST-anrop)
* LocalStorage (tidigare steg)
* CSS (enkel styling)

---

## Arkitektur

Applikationen är uppdelad i flera delar för att skapa en tydlig struktur:

* **Components** – UI-komponenter (ExpenseList, ExpenseItem, ExpenseForm)
* **Context** – Global state (ExpenseContext)
* **Services** – API-logik (expenseService)
* **Utils** – Hjälpfunktioner (t.ex. formatCurrency)

Denna struktur gör koden mer modulär och lättare att underhålla.

---

## Felhantering

Applikationen hanterar fel från API och visar meddelanden i användargränssnittet.

Exempel:

* Misslyckad hämtning av data
* Problem vid skapande eller borttagning

---

## Användarupplevelse (UX)

Följande förbättringar har implementerats:

* Loading-indikator vid API-anrop
* Meddelande när inga expenses finns
* Tydlig feedback vid fel

---

## Återanvändbara komponenter

Applikationen använder återanvändbara komponenter för bättre struktur, t.ex:

* ExpenseItem
* Button (reusable)
* Input (reusable)

---

## Installation

1. Klona repository:

```
git clone https://github.com/Elaheh-HMD/studentbudget.git
```

2. Installera dependencies:

```
npm install
```

3. Starta projektet:

```
npm run dev
```

---

## Syfte

Syftet med projektet är att:

* Förstå React med TypeScript
* Arbeta med API-anrop (REST)
* Använda Context API för state management
* Skriva strukturerad och modulär kod
* Förbättra användarupplevelse

---

## Resultat

Projektet uppfyller krav för VG genom att:

* Använda TypeScript
* Implementera flera API-anrop (GET, POST, DELETE, PUT)
* Separera logik och UI
* Ha tydlig felhantering
* Använda återanvändbara komponenter
* Visa förståelse för arkitektur och struktur

---

## Författare

Elaheh Hamednezhad
