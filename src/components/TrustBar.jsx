import { stats } from '../data/stats'

function TrustBar() {
  return (
    <section className="border-y border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-amber-400">{stat.value}</p>
            <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar