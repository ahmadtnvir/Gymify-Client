import { FaArrowRightLong } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import Btn from "../../../components/Btn";
import aboutModel from "../../../assets/Images/about_model.jpg";
import video from "../../../assets/Images/about_video.mp4";
import "./about.css";
import SectionHeading from "../../../components/SectionHeading";
import { LazyLoadImage } from "zenui-image-react";

const About = () => {
  return (
    <div className="min-h-fit max-w-7xl mx-auto px-4 py-10 ">
      {/* Main flex container with responsive stacking */}
      <div className="flex flex-col lg:flex-row gap-10 items-stretch">
        {/* Left Section (Image, Video & Offer Box) */}
        <div className="relative college flex flex-col lg:flex-row items-start gap-4 flex-1">
          {/* "We Offer" Box */}
          <div className="flex lg:justify-end w-full lg:w-auto mt-6 lg:mt-12">
            <div className="bg-[#ac1929] rounded-xl p-6 text-white w-full sm:w-full lg:w-[250px] h-fit text-start">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-wider">
                We Offer
              </h3>
              <p className="text-sm sm:text-base mt-2 mb-4">
                Get expert guidance and achieve your fitness goals today!
              </p>
              <Link to={"/signup"}>
                <span className="flex items-center gap-3 text-gray-200 hover:text-[#322f30] text-lg sm:text-xl font-medium cursor-pointer">
                  SIGN UP <FaArrowRightLong />
                </span>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1">
            {/* <img
              className="rounded-xl object-cover w-full h-full"
              src={aboutModel}
              alt="About Model"
            /> */}
            <LazyLoadImage
              className="rounded-xl object-cover w-full h-full"
              src={aboutModel}
              alt="About Model"
              placeholderType="effect"
              effectType="blur"
            />
          </div>

          {/* Video */}
          <div className="absolute bottom-4 sm:bottom-6 lg:bottom-0 bg-white p-2 rounded-xl">
            <video
              className="rounded-xl  w-[250px] md:w-[250px] lg:w-full xl:w-[320px]"
              src={video}
              controls
            ></video>
          </div>
        </div>

        {/* Right Section (About Content) */}
        <div className="flex-1 text-start flex flex-col justify-between">
          {/* About Heading */}
          <SectionHeading
            subTitle={"About Us"}
            firstTitle={"Transform Your"}
            secondTitle={"Body & Mind"}
            description={`Join our professional fitness community and unlock your potential.
              We offer expert coaching, personalized plans, and a motivating
              atmosphere to help you reach your peak performance.`}
          ></SectionHeading>

          <div className="divider"></div>

          {/* Key Highlights */}
          <div>
            <div className="flex items-center gap-3">
              <div className="border border-[#ac1929] w-20 lg:w-24"></div>
              <p className="text-gray-600 text-base lg:text-lg font-medium">
                Certified Personal Trainers
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="border border-[#ac1929] w-20 lg:w-24"></div>
              <p className="text-gray-600 text-base lg:text-lg font-medium">
                Customized Workout Programs
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="border border-[#ac1929] w-20 lg:w-24"></div>
              <p className="text-gray-600 text-base lg:text-lg font-medium">
                Nutrition & Diet Planning
              </p>
            </div>
          </div>

          <div className="divider"></div>

          {/* CTA & Contact */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Button */}
            <Btn content={"More About Us"} />

            {/* Contact Info */}
            <div className="flex items-center gap-4">
              <button className="btn btn-circle btn-outline bg-red-200 border-red-400">
                <FiPhoneCall className="text-2xl font-bold" />
              </button>
              <div>
                <small className="text-gray-600 text-base lg:text-lg font-medium">
                  Need Assistance? Call Us
                </small>
                <h3 className="text-lg lg:text-xl font-bold text-black hover:text-[#ac1929]">
                  + (88) 0151522369
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
