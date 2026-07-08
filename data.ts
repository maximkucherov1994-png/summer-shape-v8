export const scanRows = [
  { label: 'Gewicht', scan1: '70,1 kg', scan2: '70,9 kg', target: '71,5–72,5 kg' },
  { label: 'Muskelmasse', scan1: '30,2 kg', scan2: '30,2 kg', target: '31,0 kg+' },
  { label: 'Muskelprotein', scan1: '9,4 kg', scan2: '9,5 kg', target: '10,0 kg+' },
  { label: 'KFA', scan1: '14,9 %', scan2: '15,0 %', target: '14–15 %' },
  { label: 'Torso', scan1: '14,1 kg', scan2: '14,4 kg', target: '14,8 kg+' }
]

export const chartData = [
  { name: 'Scan 1', Gewicht: 70.1, Muskelmasse: 30.2, KFA: 14.9, Torso: 14.1 },
  { name: 'Scan 2', Gewicht: 70.9, Muskelmasse: 30.2, KFA: 15.0, Torso: 14.4 },
  { name: 'Ziel', Gewicht: 72.0, Muskelmasse: 31.0, KFA: 14.5, Torso: 14.8 }
]

export const workouts = [
  {
    day: 'Montag',
    title: 'Brust & Schultern',
    focus: 'Obere Brust + Breite',
    items: [
      'Schrägbankdrücken 4×6–10',
      'Flachbankdrücken/Brustpresse 3×8–12',
      'Kabelzug Brustflies 3×12–15',
      'Schulterdrücken 3×8–12',
      'Seitheben 4×12–20',
      'Trizepsdrücken 3×10–15'
    ]
  },
  {
    day: 'Dienstag',
    title: 'Schwimmen + Klimmzüge/Core',
    focus: 'Rückenbreite + Core',
    items: [
      'Schwimmen 30–45 Min',
      'Klimmzüge/negative 4×Max',
      'Hängen 3×20–40 Sek.',
      'Liegestütze 3×12–20',
      'Hanging Knee Raises 3×10–15',
      'Plank 3×45–60 Sek.'
    ]
  },
  {
    day: 'Mittwoch',
    title: 'Rücken & Bizeps',
    focus: 'V-Form + Arme',
    items: [
      'Latzug/Assisted Pull-ups 4×8–12',
      'Rudern am Kabel 4×8–12',
      'Einarmiges Rudern 3×10–12',
      'Face Pulls 3×12–15',
      'Curls 3×10–12',
      'Hammer Curls 3×10–12'
    ]
  },
  {
    day: 'Donnerstag',
    title: 'Fahrrad & aktive Erholung',
    focus: 'Regeneration',
    items: [
      'Fahrrad 45–60 Min locker',
      'Mobility 10–15 Min',
      'Optional Spaziergang'
    ]
  },
  {
    day: 'Freitag',
    title: 'Brust, Schultern & Beine light',
    focus: 'Oberkörper pushen + Beine erhalten',
    items: [
      'Schrägbank Kurzhantel 3×8–12',
      'Seitheben 4×12–20',
      'Reverse Flys/Face Pulls 3×12–15',
      'Beinpresse 3×10–15',
      'Rumänisches Kreuzheben 3×8–12',
      'Wadenheben 3×12–20'
    ]
  },
  {
    day: 'Samstag',
    title: 'Schwimmen + Homeworkout',
    focus: 'Pump + Technik',
    items: [
      'Schwimmen 20–30 Min',
      'Klimmzüge/negative 4×Max',
      'Kurzhantelrudern 3×10–12',
      'Liegestütze 3×12–20',
      'Ausfallschritte 3×12',
      'Seitheben leicht 3×15–25'
    ]
  },
  {
    day: 'Sonntag',
    title: 'Erholung',
    focus: 'Wachstum',
    items: [
      'Kein Pflichttraining',
      '7–9 Std Schlaf',
      '3–4 L Wasser',
      'Optional Spaziergang'
    ]
  }
]

export const meals = [
  ['Skyr Bowl mit Whey', '430–500 kcal', '45–55 g Protein', '250 g Skyr · 80–100 g Beeren · 30–40 g Granatapfel · 15–30 g Whey'],
  ['Magerquark Bowl mit Whey', '360–430 kcal', '42–55 g Protein', '250 g Magerquark · 80–100 g Beeren · 15–30 g Whey'],
  ['Mozzarella Protein Plate', '500–550 kcal', 'ca. 50 g Protein', '125 g Light-Mozzarella · 2 Eier · 80–100 g Hähnchenbrustaufschnitt'],
  ['Hähnchen + Proteinnudeln', '650–750 kcal', '55–65 g Protein', '180–200 g Hähnchen · 100–120 g Proteinnudeln trocken · Gemüse'],
  ['Chicken Döner', '750–950 kcal', '45–60 g Protein', 'Chicken, viel Salat, Sauce moderat, kein Pommes-Menü'],
  ['Chicken Shawarma', '650–850 kcal', '45–60 g Protein', 'Gute Aufbau-Mahlzeit, wenn Kalorien und Protein fehlen'],
  ['Protein Wraps', '700–850 kcal', '50–65 g Protein', '2 Wraps · 180–200 g Hähnchen oder Hack · Salat · Gurke · Tomate']
]

export const shopping = {
  'Gemüse & Obst': ['Gurken', 'Tomaten', 'Paprika', 'Salat', 'Zwiebeln', 'Knoblauch', 'Beeren', 'Granatapfel', 'Äpfel', 'Zitronen/Limetten'],
  'Milchprodukte & Protein': ['Skyr', 'Magerquark', 'High Protein Joghurt', 'Light-Mozzarella', 'Frischkäse light', 'Eier', 'Ungesüßte Mandelmilch', 'Whey/Proteinpulver', 'Proteinriegel'],
  'Fleisch & Fisch': ['Hähnchenbrust', 'Hähnchenbrustaufschnitt', 'Mageres Hack', 'Garnelen', 'Lachs optional', 'Thunfisch optional'],
  'Kohlenhydrate & Flex': ['Proteinnudeln', 'Proteinbrot', 'Wraps', 'Zero Getränke optional', 'Weißwein optional', 'Chicken Döner/Shawarma eingeplant']
}
