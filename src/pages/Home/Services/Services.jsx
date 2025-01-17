import SectionHeading from "../../../components/SectionHeading";

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 text-center">
      <SectionHeading
        subTitle={"Our Services"}
        firstTitle={"We Provide Best"}
        secondTitle={"Services"}
        description={`Join our professional fitness community and unlock your potential.
              We offer expert coaching, personalized plans, and a motivating
              atmosphere to help you reach your peak performance.`}
        classes={"mx-auto"}
      ></SectionHeading>
    </div>
  );
};

export default Services;
