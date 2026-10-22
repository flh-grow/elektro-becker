import { company } from '../data/company'
import { Link } from 'react-router-dom'

function Footer() {
  const titleStyle = 'text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4'

  return (
    <footer className="border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <p className="text-xl font-bold mb-3">
              <span className="text-amber-400">⚡</span> {company.name}
            </p>
            <p className="text-slate-400 text-sm">Ihr Elektriker in Gotha seit 2001.</p>
          </div>

          <div>
            <h3 className={titleStyle}>Kontakt</h3>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <a href={`tel:${company.phoneLink}`} className="hover:text-amber-400 transition">📞 {company.phone}</a>
              <a href={`mailto:${company.email}`} className="hover:text-amber-400 transition">✉️ {company.email}</a>
              <p>📍 {company.street}<br />{company.city}</p>
            </div>
          </div>

          <div>
            <h3 className={titleStyle}>Öffnungszeiten</h3>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <p>Mo–Fr: 07:00–17:00</p>
              <p>Sa: nach Vereinbarung</p>
              <p className="text-amber-400 font-semibold">⚡ Notdienst: 24/7</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 border-t border-slate-800 mt-12 pt-8 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} {company.name}</p>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-white transition">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white transition">Datenschutz</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer