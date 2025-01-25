import { useQuery } from "@tanstack/react-query";
import Btn from "../../../components/Btn";
import SectionHeading from "../../../components/SectionHeading";
import TrainerCard from "../../../components/Shared/TrainerCard/TrainerCard";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

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
      const res = await axiosPublic.get("/trainers?limit=3");
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
            <Link to={"/allTrainer"}>
              <Btn content={"Meet the Team"}></Btn>
            </Link>
          </div>
        </div>
        {/* 2nd div */}
        <div className="col-span-4 grid grid-cols-1 lg:grid-cols-3 gap-2">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer._id} trainer={trainer}></TrainerCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainer;
