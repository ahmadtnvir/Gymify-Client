import model from "../../../assets/Images/trainer_mode.png";
import SectionHeading from "../../SectionHeading";
import step1 from "../../../assets/Images/Steps/1.png";
import step2 from "../../../assets/Images/Steps/2.png";
import step3 from "../../../assets/Images/Steps/3.png";

const WorkingProcess = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto mt-16 pt-8 pb-16">
      <div
        style={{
          paddingTop: "inherit",
        }}
        className="flex-1 flex justify-center items-end"
      >
        <img src={model} alt="Trainer Mode" />
      </div>
      <div className="flex-1">
        <div className="text-start">
          <SectionHeading
            subTitle={"How It Works"}
            firstTitle={"Simple Steps to Reach"}
            secondTitle={"Your Fitness Goals"}
            description={"Follow these easy steps to stay fit and healthy."}
          ></SectionHeading>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-4">
          <div className="space-y-2">
            <img className="object-cover w-full" src={step1} alt="Step 1" />

            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#ef4f4fdc] leading-tight">
                Warm-Up
              </h3>
              <p className="text-gray-600 text-base lg:text-lg font-medium">
                Get your body ready with dynamic movements.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <img className="object-cover w-full" src={step2} alt="Step 2" />

            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#ef4f4fdc] leading-tight">
                Workout
              </h3>
              <p className="text-gray-600 text-base lg:text-lg font-medium">
                Engage in effective exercises for strength and endurance.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <img className="object-cover w-full" src={step3} alt="Step 3" />

            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#ef4f4fdc] leading-tight">
                Progress
              </h3>
              <p className="text-gray-600 text-base lg:text-lg font-medium">
                Track improvements and achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
