import { LazyLoadImage } from "zenui-image-react";
import model from "../../../assets/Images/banner_model.png";

const Banner = () => {
  return (
    <div className="min-h-fit max-w-7xl mx-auto px-4 pt-10">
      {/* Header Section */}
      <div className="text-white text-start">
        <h2 className="font-bold text-2xl uppercase tracking-wide sm:text-3xl lg:text-4xl">
          Unleash Your Potential
        </h2>
        <h1 className="font-extrabold text-5xl uppercase tracking-widest sm:text-6xl lg:text-9xl">
          Breathe Strength
        </h1>
      </div>

      {/* Image and Content */}
      <div className="relative text-white mt-8">
        {/* <img
          className="w-full h-auto object-cover rounded-lg"
          src={model}
          alt="Fitness Model"
        /> */}
        <LazyLoadImage
          className="w-full h-auto object-cover rounded-lg"
          src={model}
          alt="Fitness Model"
          placeholderType="effect"
          effectType="blur"
        />

        {/* Top Right Content */}
        <div className="absolute top-5 right-5 lg:top-20 lg:right-20 hidden md:flex lg:flex flex-col items-end space-y-4 sm:w-[40%] lg:w-[30%] text-sm sm:text-base">
          <div className="bg-black bg-opacity-50 p-4 rounded-lg text-end">
            <p className="lg:block hidden">
              Empower your mind and body through transformative workouts.
              Discover strength, resilience, and the power to conquer every
              challenge.
            </p>
            <p className="lg:hidden">
              Transform your mind and body. Conquer every challenge.
            </p>
          </div>
          <div className="flex items-center">
            <div className="h-6 w-6 bg-white p-1 rounded-full">
              <div className="bg-[#ac1929] rounded-full w-full h-full p-1">
                <div className="bg-white rounded-full w-full h-full"></div>
              </div>
            </div>
            <div className="border w-32 sm:w-40 lg:w-80"></div>
            <button className="btn bg-transparent text-white hover:bg-[#ac1929] rounded-full px-4 py-2">
              Join Us
            </button>
          </div>
        </div>

        {/* Bottom Left Content */}
        <div className="absolute bottom-5 left-5 lg:top-[340px] xl:top-[450px] hidden md:flex lg:flex flex-col space-y-4 sm:w-[40%] lg:w-[30%] text-sm sm:text-base">
          <div className="flex items-center">
            <div className="border w-28 sm:w-36 lg:w-96"></div>
            <div className="h-6 w-6 bg-white p-1 rounded-full">
              <div className="bg-[#ac1929] rounded-full w-full h-full p-1">
                <div className="bg-white rounded-full w-full h-full"></div>
              </div>
            </div>
          </div>
          <div className="bg-black bg-opacity-50 p-4 rounded-lg text-start">
            <p className="lg:block hidden">
              Whether you are starting your journey or reaching for new goals,
              we’re here to help you breathe life into every step of your
              fitness evolution.
            </p>
            <p className="lg:hidden">
              Start your journey or reach new goals with us.
            </p>
          </div>
        </div>
        {/* Bottom right content */}
        <div className="absolute bottom-10 right-5 lg:bottom-24 lg:right-20">
          <div className="avatar-group -space-x-3 rtl:space-x-reverse">
            <div className="avatar">
              <div className="w-8 sm:w-10 lg:w-12">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="User"
                />
              </div>
            </div>
            <div className="avatar">
              <div className="w-8 sm:w-10 lg:w-12">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="User"
                />
              </div>
            </div>
            <div className="avatar">
              <div className="w-8 sm:w-10 lg:w-12">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="User"
                />
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="bg-[#ac1929] text-neutral-content w-8 sm:w-10 lg:w-12">
                <span className="text-xs sm:text-sm lg:text-base">+99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
