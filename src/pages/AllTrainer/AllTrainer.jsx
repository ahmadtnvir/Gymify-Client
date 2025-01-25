import React from "react";
import RouteNaming from "../../components/RouteNaming";
import PageHeading from "../../components/PageHeading/PageHeading";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import TrainerCard from "../../components/Shared/TrainerCard/TrainerCard";
import Container from "../../utils/Container/Container";
import SectionContainer from "../../utils/SectionContainer/SectionContainer";

const AllTrainer = () => {
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
    <Container classes={"bg-[#ffeff3]"}>
      <RouteNaming name={"Trainers"}></RouteNaming>
      <PageHeading title={"Team Staff"}></PageHeading>
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trainers.map((trainer) => (
            // TODO: Need to change this card layout.
            <TrainerCard key={trainer._id} trainer={trainer}></TrainerCard>
          ))}
        </div>
      </SectionContainer>
    </Container>
  );
};

export default AllTrainer;
