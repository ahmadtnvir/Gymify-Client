import { useState } from "react";
import SectionHeading from "../../../components/SectionHeading";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import model from "../../../assets/Images/offer_model.png";
import icon from "../../../assets/Images/offers_icon.png";
import { LazyLoadImage } from "zenui-image-react";

const Offer = () => {
  const [rating, setRating] = useState(4.5);
  return (
    <div className="max-w-7xl mx-auto px-4 text-start pt-32 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
        {/* 1st div */}
        <div>
          <SectionHeading
            subTitle={"Get Fit"}
            firstTitle={"Join Our Expert Fitness"}
            secondTitle={"Training Program"}
            description={
              "Transform your body with our expert fitness training. Our personalized workout plans and professional guidance help you achieve your health goals, whether it's weight loss, muscle building, or overall fitness. Don't wait—start your journey today!"
            }
            textColor={"!text-white"}
            classes2={"!text-white"}
          ></SectionHeading>
          <div className="mt-4">
            <div>
              <Rating
                style={{ maxWidth: 150 }}
                value={rating}
                onChange={setRating}
                readOnly
              />
              <small className=" font-bold text-white">950+ Reviews</small>
            </div>
            <button className="btn bg-transparent text-white hover:bg-[#ac1929] rounded-full px-4 py-2 mt-4">
              GET STARTED
            </button>
          </div>
        </div>
        {/* 2nd div */}
        <div className="flex justify-center items-center">
          {/* <img
            className="object-cover w-full"
            src={model}
            alt="Fitness Training"
          /> */}
          <LazyLoadImage
            className="object-cover w-full"
            src={model}
            alt="Fitness Trainer"
            placeholderType="effect"
            effectType="blur"
          />
        </div>
        {/* 3rd div */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="border-2 border-white rounded-full py-4 px-8 flex justify-center items-center gap-2">
              <img src={icon} alt="Feature Icon" />
              <p className="text-white text-xl font-bold">
                Personalized Workout Plans
              </p>
            </div>
            <div className="border-2 border-white rounded-full py-4 px-8 flex justify-center items-center gap-2">
              <img src={icon} alt="Feature Icon" />
              <p className="text-white text-xl font-bold">
                Nutrition Guidance & Support
              </p>
            </div>
            <div className="border-2 border-white rounded-full py-4 px-8 flex justify-center items-center gap-2">
              <img src={icon} alt="Feature Icon" />
              <p className="text-white text-xl font-bold">
                Strength & Endurance Training
              </p>
            </div>
          </div>
          <div className="offer_card bg-[#ac1929] rounded-t-2xl pt-5 w-fit text-center">
            <div className="w-[70%] mx-auto">
              <h1 className="text-6xl font-extrabold text-white">30%</h1>
              <h1 className="text-6xl font-extrabold text-white">OFF</h1>
              <h2 className="text-xl font-bold text-white mb-8">
                New Member Registration
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
