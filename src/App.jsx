import Hero from './components/Hero'
import Services from './components/Services'
import TrustBar from './components/TrustBar'
import FAQ from './components/FAQ'
import Karriere from './components/Karriere'
import QuoteForm from './components/QuoteForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <main>
     <Hero />
    <TrustBar />
    <Services />
    <FAQ />
    <Karriere />
    <QuoteForm />
     </main>
    <Footer />
    </div>
  )
}

export default App