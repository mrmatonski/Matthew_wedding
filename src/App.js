import './App.css';
import Footer from './COMPONENTS/Footer';
import Gallery from './COMPONENTS/Gallery';
import Hero from './COMPONENTS/Hero';
import Navbar from './COMPONENTS/Navbar';
import Story from './COMPONENTS/Story';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Gallery />
      <Story />
      <Footer />
    </div>
  );
}

export default App;
