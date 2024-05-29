import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero';
import about from '../components/Assets/about.png';
import TeamInfo from '../components/TeamInfo';
import Footer from '../components/Footer';
import Copyright from "../components/Copyright"

function About() {
    return(
        <>
        <Navbar />
        <Hero
        cName="hero-about"
        heroImg={about}
        title={
          <span>A<span className="highlight">B</span>OUT <span className="highlight">U</span>S</span>
        }
        btnClass="hide"
      />
    <TeamInfo />
    <Footer />
    <Copyright />
    </>
    )
}

export default About;