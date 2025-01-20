import SectionHeading from "../../../components/SectionHeading";
import model from "../../../assets/Images/class_model.jpg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import "./class.css";
import Btn from "../../../components/Btn";
import { LazyLoadImage } from "zenui-image-react";

const Class = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 text-start pt-32 pb-16">
      <div className="text-center ">
        <SectionHeading
          subTitle={"Our Classes"}
          firstTitle={"Our Upcoming"}
          secondTitle={"Classes"}
          description={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam minus fuga voluptatum laborum eum veniam ad inventore quas quae est voluptatibus iure molestiae nisi, aut maiores delectus, ex quis dicta."
          }
          classes1={"mx-auto"}
          classes2={"w-[80%] mx-auto"}
        ></SectionHeading>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {/* 1st Div */}
        <div>
          {/* Img div */}
          <div className="rounded-3xl bg-transparent w-[90%]">
            {/* <img
            loading="lazy"
              className="rounded-3xl w-full object-cover overflow-hidden"
              src={model}
              alt=""
            /> */}
            <LazyLoadImage
              className="rounded-3xl w-full object-cover overflow-hidden"
              src={model}
              alt="Fitness Trainer"
              placeholderType="effect"
              effectType="blur"
            />
          </div>
          {/* Content Div */}
          <div className="p-3 rounded-3xl w-[90%] ml-auto relative bottom-10">
            <div className="service_card p-10 rounded-3xl">
              <h3 className="text-[#322f30] text-2xl font-bold tracking-wide mb-4">
                Fitness and Gym Training
              </h3>
              <p className="text-gray-600 text-base lg:text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem eos ducimus porro. Magni minima recusandae
                nostrum minus itaque molestiae quia.
              </p>
              <div className="divider"></div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <FaRegCalendarAlt className="text-[#ac1929] text-2xl font-semibold" />
                  <p className="text-gray-600 text-base lg:text-lg font-medium">
                    Monday: 09:00 am
                  </p>
                </div>
                <div>
                  <button className="flex items-center gap-3 text-[#ac1929] hover:text-[#322f30] text-lg sm:text-xl font-bold cursor-pointer">
                    Join Now <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <Btn content={"View All Classes"}></Btn>
      </div>
    </div>
  );
};

export default Class;
