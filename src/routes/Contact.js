import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero';
import contact from '../components/Assets/contact.png';
import ContactForm from '../components/ContactForm';
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"


function Contact() {
    return(
        <>
        <Navbar />
        <Hero
        cName="hero-about"
        heroImg={contact}
        title={
          <span>C<span className="highlight">O</span>NTACT</span>
        }
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
      <Copyright />
    </>
    )

}

export default Contact;