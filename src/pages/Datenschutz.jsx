import { company } from '../data/company'
import { Link } from 'react-router-dom'

export default function Datenschutz() {
    return (
        <main className='max-w-3xl mx-auto px-6 py-24'>
            <Link to="/" className="inline-block mb-6 text-amber-400 hover:text-amber-300 text-sm">
                ← Zurück zur Startseite
            </Link>
            <h1 className='text-4xl font-bold mb-10'>Datenschutzerklärung</h1>

            <section className='mb-8'>
                <h2 className='text-xl font-semibold text-amber-400 mb-3'>
                    Verantwortlicher
                </h2>
                <p className='text-slate-300'>
                    {company.name} <br />
                    {company.street} <br />
                    {company.city} <br />
                </p>
            </section>

            <section className='mb-8'>
                <h2 className='text-xl font-semibold text-amber-400 mb-3'>
                    Kontaktformular
                </h2>
                <p className='text-slate-300'>
                    Wenn Sie uns über das Kontaktformular eine Anfrage senden, werden Ihre Angaben (Name, Telefonnumm
                </p>er, Leistung, Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
            </section>

            <section className='mb-8'>
                <h2 className='text-xl font-semibold text-amber-400 mb-3'>
                    Kontakt
                </h2>
                <p className='text-slate-300'>
                    Telefon: <a href={company.phoneLink} className='hover:text-white'>{company.phone}</a><br />
                    E-Mail: <a href={`mailto:${company.email}`} className='hover:text-white'>{company.email}</a>
                </p>
            </section>

            <section className='mb-8'>
                <h2 className='text-xl font-semibold text-amber-400 mb-3'>
                    Hosting
                </h2>
                <p className='text-slate-300'>
                    Diese Website wird bei Netlify, Inc. gehostet. Beim Aufruf werden technisch notwendige Daten (z. B. IP-Adresse) verarbeitet.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-amber-400 mb-3">Ihre Rechte</h2>
                <p className="text-slate-300">
                    Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten sowie ein Beschwerderecht bei einer Aufsichtsbehörde.
                </p>
            </section>




        </main>
    )

}   