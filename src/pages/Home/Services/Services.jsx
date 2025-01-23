import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import * as AiIcons from "react-icons/ai";
import * as CiIcons from "react-icons/ci";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import SectionHeading from "../../../components/SectionHeading";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import "./services.css";

const iconLibraries = {
  ci: CiIcons,
  fa: FaIcons,
  md: MdIcons,
  ai: AiIcons,
};
const Services = () => {
  const axiosPublic = useAxiosPublic();
  // ! Getting data using tanstack query
  const {
    data: features = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["features"],
    queryFn: async () => {
      const res = await axiosPublic.get("/features");
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
  const featuresData = features;
  // console.log(featuresData);
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-4">
          {/* Card Main container */}
          {featuresData.map((feature) => {
            const IconComponent =
              CiIcons[feature.icon] ||
              FaIcons[feature.icon] ||
              MdIcons[feature.icon] ||
              AiIcons[feature.icon];

            return (
              <div
                key={feature._id}
                className="h-full flex flex-col  service_card rounded-2xl"
              >
                {/* cart content container */}
                <div className="w-[80%] mx-auto flex flex-col gap-6 flex-grow relative -top-10">
                  {/* Img div */}
                  <div className="border-b-2 border-b-[#f33d52] rounded-bl-2xl bg-transparent rounded-t-2xl">
                    <img
                      className="w-full h-[200px] object-cover rounded-t-2xl"
                      src={feature.image}
                      alt=""
                    />

                    <div className="flex items-center">
                      <div className="bg-[#ac1929] p-5 rounded-bl-2xl">
                        {IconComponent && (
                          <IconComponent className="text-white text-3xl" />
                        )}
                      </div>
                      <div className="flex justify-center items-center w-full">
                        <h3 className="text-[#322f30] text-2xl font-bold tracking-wide uppercase">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Description div */}
                  <div className="bg-transparent border-b-2 border-b-[#f33d52] flex-grow flex pb-3">
                    <p className="text-gray-600 text-base lg:text-lg font-medium text-start">
                      {feature.description}
                    </p>
                  </div>

                  <Link
                    to={"/allClasses"}
                    className="absolute -bottom-6 right-0"
                  >
                    <button className="btn btn-circle bg-[#ac1929] hover:bg-[#f33d52]">
                      <MdKeyboardArrowRight className="text-white text-2xl font-bold" />
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
