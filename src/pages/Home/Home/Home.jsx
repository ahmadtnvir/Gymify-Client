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

const Home = () => {
  return (
    <div className="">
      <RouteNaming name={"Home"}></RouteNaming>
      <header>
        {/* Banner Section */}
        <section className="banner">
          <Banner></Banner>
        </section>
        {/* Counter Section */}
        <section className="count_container">
          <Count></Count>
        </section>
      </header>
      <main className="mt-16 ">
        {/* About Section */}
        <section className="mb-16">
          <About></About>
        </section>
        {/* Service Section */}
        <section className="service_container">
          <Services></Services>
        </section>
        {/* Offer Section */}
        <section className="offer_container">
          <Offer></Offer>
        </section>
        {/* Class Section */}
        <section className="count_container">
          <Class></Class>
        </section>
        {/* Working Process section */}
        <section>
          <WorkingProcess></WorkingProcess>
        </section>
        {/* Pricing Section */}
        <section className="price_container">
          <Pricing></Pricing>
        </section>
        {/* Trainer Section */}
        <section className="trainer_container">
          <Trainer></Trainer>
        </section>
      </main>
    </div>
  );
};

export default Home;
