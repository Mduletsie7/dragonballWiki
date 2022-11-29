import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Subscribe from './components/Subscribe';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero'
import Newsletter from './components/Newsletter';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarTop from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <NavbarTop />
      <Hero />
      <Greet name="Kelvin" heroName="Vegeta">
        <p>"There’s only one certainty in life. A strong man stands above and conquers all!"</p>
        <img src={process.env.PUBLIC_URL + "/images/Vegeta.jpg"} width="820" alt='Vegeta ultra ego'/>
        </Greet>
      <Greet name="Calvin" heroName="Goku">
      <p>“I am the hope of the universe...I am the answer to all living things that cry out for peace...I am the protector of the innocent...I am the light in the darkness...I am truth. Ally to good...Nightmare to you!”</p>
        <img src={process.env.PUBLIC_URL + "/images/Goku.jpg"} width="820" alt='Goku ultra instinct'/>
      </Greet>
      <Greet name="Caylin" heroName="Broly">
      <p>"Rragh!" "Give me the ultimate power!" "Make me immortal!"</p>
        <img src={process.env.PUBLIC_URL + "/images/Broly.jpg"} width="820" alt='Vegeta ultra ego'/>
        </Greet>
        <Newsletter />
        <Footer />
      {/* <Hello /> */}
    </div>
  );
}

export default App;
