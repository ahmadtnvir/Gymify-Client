import RouteNaming from "../../../components/RouteNaming";
import Banner from "../Banner/Banner";
import "../Banner/style.css";
import "../Count/style.css";
import Count from "../Count/Count";
import About from "../About/About";
import Services from "../Services/Services";
import "../Services/services.css";

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
      <main className="mt-24 space-y-12">
        {/* About Section */}
        <section>
          <About></About>
        </section>
        {/* Service Section */}
        <section className="service_container">
          <Services></Services>
        </section>
      </main>
    </div>
  );
};

export default Home;
