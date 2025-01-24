import { FaRegCalendarAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import model from "../../../assets/Images/class_model.jpg";
import Btn from "../../../components/Btn";
import SectionHeading from "../../../components/SectionHeading";
import "./class.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import booking from "../../../assets/Images/icon-booking.png";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Class = () => {
  const axiosPublic = useAxiosPublic();
  // ! Getting data using tanstack query
  const {
    data: classes = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosPublic.get("/classes");
      return res.data;
    },
  });
  if (isLoading)
    return (
      <div className="h-full w-full flex justify-center items-center">
        <div className="w-7 h-7 animate-[ping_2s_linear_infinite] rounded-full border-2 border-[#ac1929] flex items-center justify-center">
          <div className="w-5 h-5 animate-[ping_2s_linear_3s_infinite] rounded-full border-2 border-[#ac1929]"></div>
        </div>
      </div>
    );
  if (error)
    return (
      <p
        className="h-full w-full flex justify-center items-center
      "
      >
        No Data Found...
      </p>
    );
  // console.log(classes);
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
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {classes.map((cls, i) => (
          <div key={i} className="h-full flex flex-col">
            {/* Added h-full flex flex-col to structure the layout */}

            {/* Img div */}
            <div className="rounded-3xl bg-transparent w-[90%] h-[400px] overflow-hidden">
              {/* Added h-[200px]->h-[400px] to maintain consistent image height */}
              <img
                loading="lazy"
                className="rounded-3xl w-full h-full object-cover"
                src={model}
                alt=""
              />
            </div>

            {/* Content Div */}
            <div className="p-3 rounded-3xl w-[90%] ml-auto relative bottom-10 h-[50%] flex flex-col">
              {/* Added h-full flex flex-col to ensure content fills available space */}
              {/* h-full -> h-[50%] */}

              <div className="card service_card text-primary-content flex flex-col h-full">
                {/* Added h-full to maintain height consistency */}

                <div className="card-body flex flex-col h-full">
                  {/* Added h-full to ensure equal height for all cards */}

                  <h3 className="card-title text-[#322f30] text-2xl font-bold tracking-wide mb-4 h-[50px] flex items-end">
                    <span>{cls.title}</span>
                  </h3>

                  <p className="text-gray-600 text-base lg:text-lg font-medium flex-grow">
                    {/* Added flex-grow to push content evenly */}
                    {cls.description}
                  </p>

                  <div className="divider"></div>

                  <div className="card-actions mt-auto">
                    {/* Added mt-auto to push this section to the bottom */}

                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center gap-3">
                        <div>
                          <img src={booking} alt="" />
                        </div>
                        <p className="text-gray-600 text-base lg:text-lg font-medium">
                          {cls.totalBookings}
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
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-4">
        <Btn content={"View All Classes"}></Btn>
      </div>
    </div>
  );
};

export default Class;
