import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import PageHeading from "../../components/PageHeading/PageHeading";
import RouteNaming from "../../components/RouteNaming";
import Container from "../../utils/Container/Container";
import SectionContainer from "../../utils/SectionContainer/SectionContainer";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Lottie from "lottie-react";
import beATrainer from "../../assets/lottie/be_trainer.json";
import Btn from "../../components/Btn";

const TrainerDetails = () => {
  const trainerId = useParams();
  const axiosPublic = useAxiosPublic();
  // ! Getting data using tanstack query
  const {
    data: trainer = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["trainer"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/trainers/${trainerId.id}`);
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
      <p
        className="min-h-screen w-full flex justify-center items-center text-6xl text-[#ac1929] font-bold
      "
      >
        No Data Found...
      </p>
    );
  // console.log(blogs);
  console.log(trainerId);
  return (
    <Container>
      <RouteNaming name={"Trainer Details"}></RouteNaming>
      <PageHeading title={"Trainer Details"}></PageHeading>
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div
            style={{
              textShadow: "0.5px 0.5px 0.5px #000000",
            }}
            className="col-span-8 text-start space-y-4 text-gray-600 h-full flex flex-col justify-between"
          >
            <h1 className="text-3xl font-bold text-black">{trainer.name}</h1>
            <h3 className="text-xl font-bold text-[#ac1929]">
              {trainer.title}
            </h3>
            <h3 className="text-xl font-bold">{trainer.expertise}</h3>
            <div className="w-full rounded-xl">
              <img
                className="w-full rounded-xl object-cover"
                src={trainer.photo}
                alt=""
              />
            </div>
            <p className="text-lg font-normal">{trainer.biography}</p>
            <div className="divider"></div>
            <div className="text-lg font-semibold">
              <ul>
                {trainer.experienceCertifications.map((certificate, i) => (
                  <li key={i}> - {certificate}</li>
                ))}
              </ul>
            </div>
            <div className="divider"></div>
            <div className="bg-[#ac1929] rounded-xl flex justify-center items-center py-5 text-lg text-white text-center">
              <ul>
                {trainer.achievementsTestimonials.map((achievement, i) => (
                  <li
                    key={i}
                    className="mb-3 hover:font-semibold transition-all duration-300"
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center items-center space-x-3 mt-auto">
              <button className="btn btn-circle btn-sm border-[#ac1929] bg-transparent hover:bg-[#ac1929]">
                <FaLinkedin />
              </button>
              <button className="btn btn-circle btn-sm border-[#ac1929] bg-transparent hover:bg-[#ac1929]">
                <FaFacebook />
              </button>
              <button className="btn btn-circle btn-sm border-[#ac1929] bg-transparent hover:bg-[#ac1929]">
                <FaXTwitter />
              </button>
              <button className="btn btn-circle btn-sm border-[#ac1929] bg-transparent hover:bg-[#ac1929]">
                <FaYoutube />
              </button>
              <button className="btn btn-circle btn-sm border-[#ac1929] bg-transparent hover:bg-[#ac1929]">
                <FaInstagram />
              </button>
              <button className="btn btn-circle btn-sm border-[#ac1929] bg-transparent hover:bg-[#ac1929]">
                <FaWhatsapp />
              </button>
            </div>
          </div>
          <div className="col-span-4 grid grid-cols-1 grid-rows-2 gap-5">
            {/* // TODO: Implement Available Slots functionality. */}
            <div className=" flex justify-center items-center">
              <h1>Available Slots Section</h1>
              <Link to={"/trainerBooking"}>
                <Btn content={"Available Slot"}></Btn>
              </Link>
            </div>
            <div className=" bg-[#ac1929] rounded-xl text-white p-6">
              <div>
                <h2 className="text-2xl font-bold">Become a Trainer</h2>
                <p className="mt-2">
                  Turn your passion into a career! Join us and train the next
                  generation of fitness enthusiasts.
                </p>
                <div className=" w-full p-5 flex justify-center">
                  <Link to={`/career`}>
                    <button className="btn relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-[#ac1929] rounded-full shadow-md group">
                      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ac1929] group-hover:translate-x-0 ease">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <span className="absolute flex items-center justify-center w-full h-full text-[#ac1929] bg-[#ffeff3] transition-all duration-300 transform group-hover:translate-x-full ease">
                        Apply Now
                      </span>
                      <span className="relative invisible">Apply Now</span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="animate-pulse">
                <Lottie animationData={beATrainer} loop={true} />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Container>
  );
};

export default TrainerDetails;
