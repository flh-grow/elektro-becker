import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Impressum from "./pages/Impressum"
import ScrollToTop from './components/ScrollToTop'
import Datenschutz from './pages/Datenschutz'

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
      <Footer />
    </div>
  )
}