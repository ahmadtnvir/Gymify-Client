import PageHeading from "../../components/PageHeading/PageHeading";
import RouteNaming from "../../components/RouteNaming";
import Container from "../../utils/Container/Container";
import SectionContainer from "../../utils/SectionContainer/SectionContainer";

const Payment = () => {
  return (
    <Container>
      <RouteNaming name={"Payment"}></RouteNaming>
      <PageHeading title={"Payment"}></PageHeading>
      <SectionContainer></SectionContainer>
    </Container>
  );
};

export default Payment;
