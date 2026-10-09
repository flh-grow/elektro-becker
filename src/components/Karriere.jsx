

import {company} from '../data/company'
import { benefits } from '../data/benefits'

function Karriere() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="border-2 border-amber-400 rounded-2xl p-8 md:p-12">
        <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Karriere</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Wir suchen Elektriker (m/w/d)</h2>
        <p className="text-slate-300 text-lg max-w-2xl mb-8">
          Du bist Elektroniker/in oder Elektriker/in und suchst einen Betrieb, in dem deine Arbeit
          wertgeschätzt wird? Dann bist du bei uns richtig.
        </p>

        <ul className="space-y-3 mb-10">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex gap-3">
              <span className="text-amber-400 font-bold">✓</span>
              {benefit}
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${company.email}`}
          className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-4 rounded-lg transition"
        >
          Jetzt bewerben →
        </a>
      </div>
    </section>
  )
}

export default Karriere