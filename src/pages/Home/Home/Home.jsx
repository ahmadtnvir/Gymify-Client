import RouteNaming from "../../../components/RouteNaming";
import Banner from "../Banner/Banner";
import "../Banner/style.css";
import "../Count/style.css";
import Count from "../Count/Count";
import About from "../About/About";
import Services from "../Services/Services";
import "../Services/services.css";
import Offer from "../Offer/Offer";
import "../Offer/offer.css";
import "../Class/class.css";
import Class from "../Class/Class";
import WorkingProcess from "../../../components/Shared/WorkingProcess/WorkingProcess";
import "../Pricing/pricing.css";
import Pricing from "../Pricing/Pricing";
import Trainer from "../Trainer/Trainer";
import "../Trainer/trainer.css";
import Testimonial from "../Testimonial/Testimonial";
import Blog from "../Blog/Blog";
// import "../Blog/blog.css"

const Home = () => {
  return (
    <div className="">
      <RouteNaming name={"Home"}></RouteNaming>
      <header className="scroll-smooth">
        {/* Banner Section */}
        <section className="banner scroll-smooth">
          <Banner></Banner>
        </section>
        {/* Counter Section */}
        <section className="count_container scroll-smooth">
          <Count></Count>
        </section>
      </header>
      <main className="mt-16 scroll-smooth">
        {/* About Section */}
        <section className="mb-16 scroll-smooth">
          <About></About>
        </section>
        {/* Service Section */}
        <section className="service_container scroll-smooth">
          <Services></Services>
        </section>
        {/* Offer Section */}
        <section className="offer_container scroll-smooth">
          <Offer></Offer>
        </section>
        {/* Class Section */}
        <section className="count_container scroll-smooth">
          <Class></Class>
        </section>
        {/* Working Process section */}
        <section className="scroll-smooth">
          <WorkingProcess></WorkingProcess>
        </section>
        {/* Pricing Section */}
        <section className="price_container scroll-smooth">
          <Pricing></Pricing>
        </section>
        {/* Trainer Section */}
        <section className="trainer_container scroll-smooth">
          <Trainer></Trainer>
        </section>
        {/* Testimonial Section */}
        <section className="scroll-smooth">
          <Testimonial></Testimonial>
        </section>
        {/* Blog Section */}
        <section className="service_container">
          <Blog></Blog>
        </section>
      </main>
    </div>
  );
};

export default Home;
