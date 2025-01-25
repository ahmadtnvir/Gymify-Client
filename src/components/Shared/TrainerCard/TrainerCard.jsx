import React from "react";
import { IoMdFitness } from "react-icons/io";
import { Link } from "react-router-dom";

const TrainerCard = ({ trainer }) => {
  return (
    <div className="relative min-h-96">
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
        className="absolute bottom-0 left-0 border-r-8 border-r-[#ffeff3] border-t-8 border-t-[#ffeff3] rounded-2xl w-[75%] md:w-[40%] lg:w-[80%] h-[50%] md:h-[25%] lg:h-[55%] bg-white py-8 text-start px-5 bg-opacity-75 space-y-2"
      >
        <div className="absolute -top-7 -right-7 w-14 h-14 rounded-full p-2 bg-[#ffeff3] flex justify-center items-center">
          <IoMdFitness className="text-[#ac1929] text-2xl font-semibold animate-spin" />
        </div>
        <div>
          <h3 className="text-3xl text-black font-bold">{trainer.name}</h3>
          <p className="text-[#ac1929] font-semibold">{trainer.expertise}</p>
          <p>{trainer.biography.slice(0, 45)}...</p>
          <Link>
            <button className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-[#ac1929] rounded-full shadow-md group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ac1929] group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-[#ac1929] bg-[#ffeff3] transition-all duration-300 transform group-hover:translate-x-full ease">
                Know More
              </span>
              <span className="relative invisible">Know More</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
