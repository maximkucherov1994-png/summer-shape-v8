'use client'

import { useEffect, useState } from 'react'
import { BarChart3, Camera, CheckCircle2, Dumbbell, Home, ShoppingCart, Utensils } from 'lucide-react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { chartData, meals, scanRows, shopping, workouts } from '@/lib/data'

type Tab = 'home' | 'training' | 'food' | 'shop' | 'scan'

function useLocal<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial)
  useEffect(() => {
    const raw = localStorage.getItem(key)
    if (raw) setValue(JSON.parse(raw))
  }, [key])
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  return [value, setValue] as const
}

function Glass({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return <div className={`glass rounded-[28px] p-4 md:p-5 ${className}`}>{children}</div>
}

function Metric({ label, value, sub }: { label: string, value: string, sub: string }) {
  return (
    <div className="soft rounded-3xl p-4">
      <p className="text-sm text-zinc-300">{label}</p>
      <p className="text-2xl font-black mt-1">{value}</p>
      <p className="text-sm text-zinc-400 mt-1">{sub}</p>
    </div>
  )
}

export default function Page() {
  const [tab, setTab] = useLocal<Tab>('ss-tab-maxim', 'home')
  const [checks, setChecks] = useLocal<Record<string, boolean>>('ss-checks-maxim', {})
  const [shop, setShop] = useLocal<Record<string, boolean>>('ss-shop-maxim', {})

  const daily = ['170 g Protein', '3 Liter Wasser', 'Kreatin 5 g', '8.000–10.000 Schritte', 'Training oder aktive Erholung', '7–9 Stunden Schlaf']
  const done = daily.filter(x => checks[x]).length

  const nav = [
    ['home', Home, 'Home'],
    ['training', Dumbbell, 'Training'],
    ['food', Utensils, 'Food'],
    ['shop', ShoppingCart, 'Einkauf'],
    ['scan', BarChart3, 'Scan']
  ] as const

  return (
    <main className="max-w-6xl mx-auto px-3 pb-24">
      <header className="text-center pt-8 pb-4">
        <p className="text-mint font-bold mb-2">Guten Morgen Maxim</p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">Summer Shape V10 ✨</h1>
        <p className="text-zinc-300 mt-2">Lean Recomp · Oberkörper aufbauen · KFA lean halten</p>
      </header>

      <nav className="sticky top-0 z-20 py-3 bg-[#071719]/90 backdrop-blur-xl">
        <div className="grid grid-cols-5 gap-2">
          {nav.map(([id, Icon, label]) => (
            <button key={id} onClick={() => setTab(id)}
              className={`rounded-full py-3 px-1 flex flex-col md:flex-row gap-1 items-center justify-center text-xs md:text-sm font-black transition ${tab === id ? 'bg-mint text-[#062326]' : 'glass text-white'}`}>
              <Icon size={17}/><span>{label}</span>
            </button>
          ))}
        </div>
      </nav>

      {tab === 'home' && (
        <section className="space-y-4">
          <Glass>
            <h2 className="text-2xl font-black mb-4">Heute im Fokus</h2>
            <div className="grid md:grid-cols-4 gap-3">
              <Metric label="Ziel" value="Lean Recomp" sub="mehr Muskelmasse, KFA stabil/leicht runter"/>
              <Metric label="Nächster Scan" value="5–6 Wochen" sub="gleiche Uhrzeit & Hydration"/>
              <Metric label="Trainingstag" value="2.350–2.450" sub="170–180 g Protein"/>
              <Metric label="Ruhetag" value="2.100–2.200" sub="ca. 170 g Protein"/>
            </div>
          </Glass>

          <Glass>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-black">Daily Check</h2>
              <span className="pill rounded-full px-3 py-1 font-bold">{done}/{daily.length}</span>
            </div>
            <div className="grid md:grid-cols-2 gap-2">
              {daily.map(item => (
                <button key={item} onClick={() => setChecks({...checks, [item]: !checks[item]})}
                  className={`text-left rounded-2xl p-4 border transition ${checks[item] ? 'bg-mint text-[#062326] border-mint' : 'bg-white/5 border-white/10'}`}>
                  <CheckCircle2 className="inline mr-2" size={18}/>{item}
                </button>
              ))}
            </div>
          </Glass>
        </section>
      )}

      {tab === 'training' && (
        <section className="space-y-4">
          <Glass>
            <h2 className="text-2xl font-black mb-3">Trainingsziel</h2>
            <div className="flex flex-wrap gap-2">
              <span className="pill rounded-full px-3 py-1 font-bold">Brust 2×/Woche</span>
              <span className="pill rounded-full px-3 py-1 font-bold">Schultern 3×/Woche</span>
              <span className="pill rounded-full px-3 py-1 font-bold">Rücken 3×/Woche</span>
              <span className="rounded-full px-3 py-1 font-bold bg-gold/20 text-gold border border-gold/30">Beine auf Erhalt</span>
            </div>
          </Glass>

          {workouts.map((w, index) => (
            <details key={w.day} open={index === 0} className="glass rounded-[28px] p-4">
              <summary className="text-xl font-black">{w.day} – {w.title}</summary>
              <p className="text-mint font-bold mt-3">{w.focus}</p>
              <div className="mt-4 space-y-2">
                {w.items.map(item => (
                  <div key={item} className="soft rounded-2xl p-3 flex items-center justify-between gap-3">
                    <p className="font-bold">{item}</p>
                    <input className="w-20 rounded-xl p-2 text-sm" placeholder="kg"/>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </section>
      )}

      {tab === 'food' && (
        <section className="space-y-4">
          <Glass>
            <h2 className="text-2xl font-black mb-4">Makros</h2>
            <div className="grid md:grid-cols-4 gap-3">
              <Metric label="Trainingstag" value="2.350–2.450" sub="170–180 g Protein"/>
              <Metric label="Ruhetag" value="2.100–2.200" sub="ca. 170 g Protein"/>
              <Metric label="Flex Meals" value="2×/Woche" sub="Döner/Shawarma okay"/>
              <Metric label="Wasser" value="3–4 L" sub="nach Wein/Reisen"/>
            </div>
          </Glass>

          <div className="grid md:grid-cols-2 gap-4">
            {meals.map(([name, kcal, protein, items]) => (
              <Glass key={name} className="border-l-4 border-l-mint">
                <h3 className="text-mint text-xl font-black">{name}</h3>
                <div className="flex flex-wrap gap-2 my-3">
                  <span className="pill rounded-full px-3 py-1 font-bold">{kcal}</span>
                  <span className="pill rounded-full px-3 py-1 font-bold">{protein}</span>
                </div>
                <p className="text-zinc-300 leading-relaxed">{items}</p>
              </Glass>
            ))}
          </div>
        </section>
      )}

      {tab === 'shop' && (
        <section className="space-y-4">
          <Glass>
            <h2 className="text-2xl font-black">Einkaufsliste</h2>
            <p className="text-zinc-400">Häkchen bleiben auf Maxims Gerät gespeichert.</p>
          </Glass>

          {Object.entries(shopping).map(([cat, items]) => (
            <details key={cat} open={cat === 'Gemüse & Obst'} className="glass rounded-[28px] p-4">
              <summary className="text-xl font-black">{cat}</summary>
              <div className="grid md:grid-cols-2 gap-2 mt-4">
                {items.map(item => (
                  <button key={item} onClick={() => setShop({...shop, [item]: !shop[item]})}
                    className={`text-left rounded-2xl p-4 border ${shop[item] ? 'bg-mint text-[#062326] border-mint' : 'bg-white/5 border-white/10'}`}>
                    <CheckCircle2 className="inline mr-2" size={18}/>{item}
                  </button>
                ))}
              </div>
            </details>
          ))}
        </section>
      )}

      {tab === 'scan' && (
        <section className="space-y-4">
          <Glass>
            <h2 className="text-2xl font-black mb-2">Body Scan Verlauf</h2>
            <p className="text-zinc-300">Scan 2 trotz Antibiotika, Dienstreisen und weniger Training: Muskelmasse stabil, Torso leicht besser, KFA praktisch gleich.</p>
          </Glass>

          <Glass>
            <h3 className="text-xl font-black text-mint mb-4">Gewicht / Muskelmasse / KFA</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid stroke="rgba(255,255,255,.12)"/>
                  <XAxis dataKey="name" stroke="#b9cecb"/>
                  <YAxis stroke="#b9cecb"/>
                  <Tooltip/>
                  <Line type="monotone" dataKey="Gewicht" stroke="#82e4d4" strokeWidth={3}/>
                  <Line type="monotone" dataKey="Muskelmasse" stroke="#f0c66a" strokeWidth={3}/>
                  <Line type="monotone" dataKey="KFA" stroke="#ff8ea3" strokeWidth={3}/>
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Glass>

          <Glass>
            <div className="overflow-x-auto">
              <table>
                <thead><tr><th>Wert</th><th>Scan 1</th><th>Scan 2</th><th>Ziel</th></tr></thead>
                <tbody>
                  {scanRows.map(r => <tr key={r.label}><td>{r.label}</td><td>{r.scan1}</td><td>{r.scan2}</td><td>{r.target}</td></tr>)}
                </tbody>
              </table>
            </div>
          </Glass>

          <Glass>
            <h2 className="text-2xl font-black mb-4">Progress Fotos</h2>
            <div className="grid md:grid-cols-3 gap-3">
              {['Front', 'Seite', 'Rücken'].map(p => (
                <div key={p} className="soft rounded-3xl h-32 grid place-items-center text-zinc-400">
                  <Camera/> {p}
                </div>
              ))}
            </div>
          </Glass>
        </section>
      )}
    </main>
  )
}
