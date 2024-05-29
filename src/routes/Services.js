import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero';
import services from '../components/Assets/services.png';
import ServiceInfo from '../components/ServiceInfo';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';

function Services() {
    return(
        <>
        <Navbar />
        <Hero
        cName="hero-about"
        heroImg={services}
        title={
          <span>S<span className="highlight">E</span>RVICES</span>
        }
        btnClass="hide"
        />
        <ServiceInfo />
        <Footer />
        <Copyright />
        </>
    )

}

export default Services;