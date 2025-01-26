import PageHeading from "../../components/PageHeading/PageHeading";
import RouteNaming from "../../components/RouteNaming";
import Container from "../../utils/Container/Container";
import Pricing from "../Home/Pricing/Pricing";

const TrainerBooking = () => {
  return (
    <Container>
      <RouteNaming name={"Slot Booking"}></RouteNaming>
      <PageHeading title={"Slot Booking"}></PageHeading>
      <div className="min-h-24 flex justify-center items-center">
        {/* // TODO: Implement Slot Booking. */}
        <h3>Slot Booking</h3>
      </div>
      <div className="price_container">
        <Pricing></Pricing>
      </div>
    </Container>
  );
};

export default TrainerBooking;
