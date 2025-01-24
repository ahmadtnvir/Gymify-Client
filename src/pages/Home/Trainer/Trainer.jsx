import { useQuery } from "@tanstack/react-query";
import { IoMdFitness } from "react-icons/io";
import Btn from "../../../components/Btn";
import SectionHeading from "../../../components/SectionHeading";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Trainer = () => {
  const axiosPublic = useAxiosPublic();
  // ! Get data with TSQ
  const {
    data: trainers = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/trainers");
      return res.data;
    },
  });
  if (isLoading)
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="w-7 h-7 animate-[ping_2s_linear_infinite] rounded-full border-2 border-[#ac1929] flex items-center justify-center">
          <div className="w-5 h-5 animate-[ping_2s_linear_3s_infinite] rounded-full border-2 border-[#ac1929]"></div>
        </div>
      </div>
    );
  if (error)
    return (
      <div
        className="min-h-screen w-full flex justify-center items-center text-6xl text-[#ac1929] font-bold
      "
      >
        No Data Found...
      </div>
    );
  return (
    <div className="max-w-7xl mx-auto px-4 pt-32 pb-16 scroll-smooth">
      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
        {/* 1st div */}
        <div className="text-start col-span-2">
          <SectionHeading
            subTitle={"OUR TRAINERS"}
            firstTitle={"Meet Our Professional"}
            secondTitle={"Fitness Coaches"}
            description={`Our certified trainers are here to guide, support, and motivate you on your fitness journey. Get to know the experts dedicated to your success.`}
          ></SectionHeading>
          <div className="mt-6">
            <Btn content={"Meet the Team"}></Btn>
          </div>
        </div>
        {/* 2nd div */}
        <div className="col-span-4 grid grid-cols-1 lg:grid-cols-3 gap-2">
          {trainers.map((trainer, i) => (
            <div key={i} className="relative">
              <img
                className="rounded-2xl object-cover w-full h-full"
                loading="lazy"
                src={trainer.photo}
                alt="Fitness Trainer"
              />

              <div
                style={{
                  borderBottomRightRadius: "0px",
                  borderTopLeftRadius: "0px",
                }}
                className="absolute bottom-0 left-0 border-r-8 border-r-[#ffeff3] border-t-8 border-t-[#ffeff3] rounded-2xl w-[75%] md:w-[40%] lg:w-[80%] h-[50%] md:h-[25%] lg:h-[50%] bg-white py-8 text-start px-5 bg-opacity-75"
              >
                <div className="absolute -top-7 -right-7 w-14 h-14 rounded-full p-2 bg-[#ffeff3] flex justify-center items-center">
                  <IoMdFitness className="text-[#ac1929] text-2xl font-semibold" />
                </div>
                <div>
                  <h3 className="text-3xl text-black font-bold">
                    {trainer.name}
                  </h3>
                  <p className="text-[#ac1929] font-semibold">
                    {trainer.expertise}
                  </p>
                  <p>{trainer.biography}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainer;
