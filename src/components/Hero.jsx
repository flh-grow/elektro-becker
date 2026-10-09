import {company} from '../data/company'


function Hero() {
    return(
      <section className="relative overflow-hidden">
        <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="text-xl font-bold">
            <span className="text-amber-400">⚡</span>Elektro Becker
          </div>
          <a href={`tel:${company.phoneLink}`} className="hidden sm:block text-sm text-slate-300  hover:text-amber-400 transition">
            📞 {company.phone}
          </a>
        </header>

        <div className="max-w-6xl mx-auto px-6 pt-16 pb-24">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widset mb-4 ">
            Elektrofachbetrieb in Gotha
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-6">
            Ihr Elektriker in Gotha - <span className="text-amber-400"> schnell, sauber, zuverlässig</span>
          </h1>

          <p className="text-slate-300 text-lg max-w-xl mb-10">
            Von der Steckdose bis zur Wallbox: Wir erledigen Ihre Elektroarbeiten
          termingerecht und zum fairen Festpreis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#angebot"
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-4 rounded-lg text-center transition"
          >
            Kostenloses Angebot anfordern →
          </a>
          <a
            href={`tel:${company.phoneLink}`}
            className="border border-slate-600 hover:border-amber-400 px-8 py-4 rounded-lg text-center transition"
          >
            📞 Jetzt anrufen
          </a>
        </div>

        <p className="text-slate-500 text-sm mt-6">✓ Antwort innerhalb von 24 Stunden · ✓ Unverbindlich</p>
        </div>
      </section> 
    )
}
export default Hero