import { company } from '../data/company'
import { Link } from 'react-router-dom'

export default function Impressum() {
    return (
        <main className='max-w-3xl mx-auto px-6 py-24'>
            <Link to="/" className="inline-block mb-6 text-amber-400 hover:text-amber-300 text-sm">
                ← Zurück zur Startseite
            </Link>
            <h1 className='text-4xl font-bold mb-10'>Impressum</h1>

            <section className='mb-8'>
                <h2 className='text-xl font-semibold text-amber-400 mb-3'>
                    Angaben gemäß § 5 DDG
                </h2>
                <p className='text-slate-300'>
                    {company.name} <br />
                    {company.street} <br />
                    {company.city} <br />
                </p>
            </section>

            <section className='mb-8'>
                <h2 className='text-xl font-semibold text-amber-400 mb-3'>
                    Vertreten durch
                </h2>
                <p className='text-slate-300'>
                    Inhaber: Thomas Becker
                </p>
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
                    Handwerksrolle
                </h2>
                <p className='text-slate-300'>
                    Eingetragen in der Handwerksrolle der Handwerkskammer Erfurt
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-amber-400 mb-3">Umsatzsteuer-ID</h2>
                <p className="text-slate-300">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
                    DE123456789
                </p>
            </section>




        </main>
    )

}   