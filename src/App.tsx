import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Fleet from './components/Fleet';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Fleet />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;