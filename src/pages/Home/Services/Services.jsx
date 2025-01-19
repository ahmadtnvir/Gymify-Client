import SectionHeading from "../../../components/SectionHeading";
import model from "../../../assets/Images/card_model.jpg";
import { IoFitnessOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import Btn from "../../../components/Btn";
import "./services.css";
const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 text-center py-16">
      <SectionHeading
        subTitle={"Our Services"}
        firstTitle={"We Provide Best"}
        secondTitle={"Services"}
        description={`Join our professional fitness community and unlock your potential.
              We offer expert coaching, personalized plans, and a motivating
              atmosphere to help you reach your peak performance.`}
        classes1={"mx-auto"}
        classes2={"w-[80%] mx-auto"}
      ></SectionHeading>
      <div className="mt-20">
        {/* cards div */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card Main container */}
          <div className=" service_card rounded-2xl  ">
            {/* cart content container */}
            <div className="w-[80%] mx-auto space-y-4 relative -top-10">
              {/* Img container */}
              <div className="border-b-2 border-b-[#f33d52] rounded-bl-2xl bg-transparent rounded-t-2xl">
                <img
                  className="w-full object-cover rounded-t-2xl"
                  src={model}
                  alt=""
                />
                <div className="flex items-center">
                  <div className="bg-[#ac1929] p-5 rounded-bl-2xl">
                    <IoFitnessOutline className="text-white text-3xl" />
                  </div>
                  <div className="flex justify-center items-center w-full">
                    <h3 className="text-[#322f30] text-2xl font-bold tracking-wide uppercase">
                      Nutrition
                    </h3>
                  </div>
                </div>
              </div>
              {/* Description container */}
              <div className="bg-transparent text-start border-b-2 border-b-[#f33d52] pb-4">
                <p className="text-gray-600 text-base lg:text-lg font-medium">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Autem molestiae accusantium delectus, cupiditate impedit, sunt
                  numquam laboriosam quia illo dolores quae temporibus quis
                  deserunt velit expedita ratione totam magni minima?
                </p>
              </div>
              <button className="btn btn-circle bg-[#ac1929] hover:bg-[#f33d52] absolute -bottom-6 right-0">
                <MdKeyboardArrowRight className="text-white text-2xl font-bold" />
              </button>
            </div>
          </div>
          {/* More cards will be added */}
        </div>
        <div className="flex justify-center items-center mt-4">
          <Btn content={"View All Services"} classes={"uppercase"}></Btn>
        </div>
      </div>
    </div>
  );
};

export default Services;
