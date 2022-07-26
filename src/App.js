import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services';
import Map from './components/Map';
import './App.css';

function App() {
  return (
    <>
    <div className='header'>
      <Header />
      <Hero />
      <Services />
    </div>
    <div className='main'>
      <Map />
    </div>
    </>
  );
}

export default App;
