
export const scans = [
  { name: 'Scan 1', weight: 70.1, muscle: 30.2, protein: 9.4, fat: 10.4, bodyFat: 14.9, torso: 14.1 },
  { name: 'Scan 2', weight: 70.9, muscle: 30.2, protein: 9.5, fat: 10.7, bodyFat: 15.0, torso: 14.4 },
  { name: 'Ziel', weight: 72.0, muscle: 31.0, protein: 10.0, fat: 10.5, bodyFat: 14.5, torso: 14.8 }
]

export const workouts = [
  {
    day: 'Montag',
    title: 'Gym: Brust & Schultern',
    focus: 'Obere Brust + breite Schultern',
    exercises: [
      ['Schrägbankdrücken', '4 × 6–10'],
      ['Flachbankdrücken oder Brustpresse', '3 × 8–12'],
      ['Kabelzug Brustflies', '3 × 12–15'],
      ['Schulterdrücken', '3 × 8–12'],
      ['Seitheben', '4 × 12–20'],
      ['Trizepsdrücken am Kabel', '3 × 10–15']
    ]
  },
  {
    day: 'Dienstag',
    title: 'Schwimmen + Klimmzüge/Core',
    focus: 'Rückenbreite + Core',
    exercises: [
      ['Schwimmen', '30–45 Min locker/moderat'],
      ['Klimmzüge oder negative Klimmzüge', '4 × Max'],
      ['Hängen an der Stange', '3 × 20–40 Sek.'],
      ['Liegestütze', '3 × 12–20'],
      ['Hanging Knee Raises', '3 × 10–15'],
      ['Plank', '3 × 45–60 Sek.']
    ]
  },
  {
    day: 'Mittwoch',
    title: 'Gym: Rücken & Bizeps',
    focus: 'V-Form + Arme',
    exercises: [
      ['Latzug oder Assisted Pull-ups', '4 × 8–12'],
      ['Rudern am Kabel', '4 × 8–12'],
      ['Einarmiges Kurzhantelrudern', '3 × 10–12 je Seite'],
      ['Face Pulls', '3 × 12–15'],
      ['Curls', '3 × 10–12'],
      ['Hammer Curls', '3 × 10–12']
    ]
  },
  {
    day: 'Donnerstag',
    title: 'Fahrrad & aktive Erholung',
    focus: 'Regeneration statt Eskalation',
    exercises: [
      ['Fahrrad', '45–60 Min locker/moderat'],
      ['Mobility', '10–15 Min'],
      ['Optional', 'Spaziergang']
    ]
  },
  {
    day: 'Freitag',
    title: 'Gym: Brust, Schultern & Beine light',
    focus: 'Oberkörper pushen + Beine erhalten',
    exercises: [
      ['Schrägbank Kurzhanteldrücken', '3 × 8–12'],
      ['Seitheben', '4 × 12–20'],
      ['Reverse Flys oder Face Pulls', '3 × 12–15'],
      ['Beinpresse', '3 × 10–15'],
      ['Rumänisches Kreuzheben', '3 × 8–12'],
      ['Wadenheben', '3 × 12–20']
    ]
  },
  {
    day: 'Samstag',
    title: 'Schwimmen + Homeworkout Full Body',
    focus: 'Technik, Pump, nicht komplett zerstören',
    exercises: [
      ['Schwimmen', '20–30 Min aktiv'],
      ['Klimmzüge/negative Klimmzüge', '4 × Max'],
      ['Kurzhantelrudern', '3 × 10–12 je Seite'],
      ['Liegestütze', '3 × 12–20'],
      ['Ausfallschritte', '3 × 12 je Bein'],
      ['Seitheben leicht', '3 × 15–25']
    ]
  },
  {
    day: 'Sonntag',
    title: 'Erholung',
    focus: 'Wachstum passiert in der Regeneration',
    exercises: [
      ['Kein Pflichttraining', 'frei'],
      ['Schlaf', '7–9 Std'],
      ['Wasser', '3–4 L'],
      ['Optional', 'Spaziergang / Mobility']
    ]
  }
]

export const meals = [
  { name: 'Skyr Bowl mit Whey', kcal: '430–500', protein: '45–55 g', items: '250 g Skyr · 80–100 g Beeren · 30–40 g Granatapfel · 15–30 g Whey · optional 10 g Nussmus' },
  { name: 'Magerquark Bowl mit Whey', kcal: '360–430', protein: '42–55 g', items: '250 g Magerquark · 80–100 g Beeren · 15–30 g Whey' },
  { name: 'Mozzarella Protein Plate', kcal: '500–550', protein: 'ca. 50 g', items: '125 g Light-Mozzarella · 2 Eier · 80–100 g Hähnchenbrustaufschnitt · Tomaten & Gurke' },
  { name: 'Hähnchen + Proteinnudeln', kcal: '650–750', protein: '55–65 g', items: '180–200 g Hähnchenbrust · 100–120 g Proteinnudeln trocken · Gemüse' },
  { name: 'Chicken Döner', kcal: '750–950', protein: '45–60 g', items: 'Chicken, viel Salat, Sauce moderat, kein Pommes-Menü' },
  { name: 'Chicken Shawarma', kcal: '650–850', protein: '45–60 g', items: 'Sehr gut als Aufbau-Mahlzeit, wenn Kalorien und Protein fehlen' },
  { name: 'Protein Wraps', kcal: '700–850', protein: '50–65 g', items: '2 Wraps · 180–200 g Hähnchen oder Hack · Salat · Gurke · Tomate' }
]

export const shopping = {
  'Gemüse & Obst': ['Gurken', 'Tomaten', 'Paprika', 'Salat', 'Zwiebeln', 'Knoblauch', 'Beeren', 'Granatapfel', 'Äpfel', 'Zitronen/Limetten'],
  'Milchprodukte & Protein': ['Skyr', 'Magerquark', 'High Protein Joghurt', 'Light-Mozzarella', 'Frischkäse light', 'Eier', 'Ungesüßte Mandelmilch', 'Whey/Proteinpulver', 'Proteinriegel'],
  'Fleisch & Fisch': ['Hähnchenbrust', 'Hähnchenbrustaufschnitt', 'Mageres Hack', 'Garnelen', 'Lachs optional', 'Thunfisch optional'],
  'Kohlenhydrate & Flex': ['Proteinnudeln', 'Proteinbrot', 'Wraps', 'Zero Getränke optional', 'Weißwein optional', 'Chicken Döner/Shawarma eingeplant']
}
