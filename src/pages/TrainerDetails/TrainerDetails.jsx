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
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div
            style={{
              textShadow: "0.5px 0.5px 0.5px #000000",
            }}
            className="col-span-8 text-start space-y-4 text-gray-600"
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
            <div className="bg-[#ac1929] rounded-xl flex justify-center items-center py-5 text-lg underline text-white text-center">
              <ul>
                {trainer.achievementsTestimonials.map((achievement, i) => (
                  <li key={i} className="mb-3 hover:font-semibold">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center items-center space-x-3 mt-3">
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
          <div className="col-span-4 border border-black"></div>
        </div>
      </SectionContainer>
    </Container>
  );
};

export default TrainerDetails;
