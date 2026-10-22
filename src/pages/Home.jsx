import Hero from '../components/Hero'
import Services from '../components/Services'
import TrustBar from '../components/TrustBar'
import FAQ from '../components/FAQ'
import Karriere from '../components/Karriere'
import QuoteForm from '../components/QuoteForm'

export default function Home() {
    return (
        <main>
     <Hero />
    <TrustBar />
    <Services />
    <FAQ />
    <Karriere />
    <QuoteForm />
     </main>
    )
}