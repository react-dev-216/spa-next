import 'bootstrap/scss/bootstrap.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import Schedule from '../components/Schedule';
import Rates from '../components/Rates';
import ServicesProvided from '../components/ServicesProvided';
import Footer from '../components/Footer';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <ServicesProvided />
      <Rates />
      <Schedule />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
