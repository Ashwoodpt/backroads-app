import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Services from './components/Services/Services';
import Tours from './components/Tours/Tours';

function App() {
	return (
		<>
			<NavBar />
			<Hero />
			<About />
			<Services />
			<Tours />
			<Footer />
		</>
	);
}

export default App;
