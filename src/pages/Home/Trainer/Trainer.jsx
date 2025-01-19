import Btn from "../../../components/Btn";
import SectionHeading from "../../../components/SectionHeading";
import model from "../../../assets/Images/team_model_.jpg";
import { IoMdFitness } from "react-icons/io";

const Trainer = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-32 pb-16 scroll-smooth">
      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* 1st div */}
        <div className="text-start">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="relative">
            <img
              className="rounded-2xl object-cover w-full h-full"
              loading="lazy"
              src={model}
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
                <h3 className="text-3xl text-black font-bold">Esa Elizabeth</h3>
                <p className="text-[#ac1929] font-semibold">
                  Certified Personal Trainer
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="rounded-2xl object-cover w-full h-full"
              loading="lazy"
              src={model}
              alt="Gym Trainer"
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
                <h3 className="text-3xl text-black font-bold">John Williams</h3>
                <p className="text-[#ac1929] font-semibold">
                  Strength & Conditioning Coach
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainer;
