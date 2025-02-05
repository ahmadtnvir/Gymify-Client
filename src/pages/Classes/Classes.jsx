import { useQuery } from "@tanstack/react-query";
import PageHeading from "../../components/PageHeading/PageHeading";
import RouteNaming from "../../components/RouteNaming";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Container from "../../utils/Container/Container";
import SectionContainer from "../../utils/SectionContainer/SectionContainer";
import SectionHeading from "../../components/SectionHeading";
import model from "../../assets/Images/class_model.jpg";
import booking from "../../assets/Images/icon-booking.png";
import { FaArrowRight } from "react-icons/fa";

const Classes = () => {
  const axiosPublic = useAxiosPublic();
  // ! Getting data using tanstack query
  const {
    data: classes = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosPublic.get("/classes");
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
  // console.log(classes);
  return (
    <Container>
      <RouteNaming name={"Classes"}></RouteNaming>
      <PageHeading title={"Classes"}></PageHeading>
      <SectionContainer>
        <SectionHeading
          subTitle={"Our Classes"}
          firstTitle={"Our Upcoming"}
          secondTitle={"Classes"}
          description={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam minus fuga voluptatum laborum eum veniam ad inventore quas quae est voluptatibus iure molestiae nisi, aut maiores delectus, ex quis dicta."
          }
          classes1={"mx-auto"}
          classes2={"w-[80%] mx-auto"}
        ></SectionHeading>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {classes.map((cls, i) => (
            <div key={i} className="h-full flex flex-col">
              {/* Added h-full flex flex-col to structure the layout */}

              {/* Img div */}
              <div className="rounded-3xl bg-transparent w-[90%] h-[400px] overflow-hidden">
                {/* Added h-[200px]->h-[400px] to maintain consistent image height */}
                <img
                  loading="lazy"
                  className="rounded-3xl w-full h-full object-cover"
                  src={model}
                  alt=""
                />
              </div>

              {/* Content Div */}
              <div className="p-3 rounded-3xl w-[90%] ml-auto relative bottom-10 h-[50%] flex flex-col">
                {/* Added h-full flex flex-col to ensure content fills available space */}
                {/* h-full -> h-[50%] */}

                <div className="card service_card text-primary-content flex flex-col h-full">
                  {/* Added h-full to maintain height consistency */}

                  <div className="card-body flex flex-col h-full">
                    {/* Added h-full to ensure equal height for all cards */}

                    <h3 className="card-title text-[#322f30] text-2xl font-bold tracking-wide mb-4 h-[50px] flex items-end">
                      <span>{cls.title}</span>
                    </h3>

                    <p className="text-gray-600 text-base lg:text-lg font-medium flex-grow">
                      {/* Added flex-grow to push content evenly */}
                      {cls.description}
                    </p>

                    <div className="divider"></div>

                    <div className="card-actions mt-auto">
                      {/* Added mt-auto to push this section to the bottom */}

                      <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-3">
                          <div>
                            <img src={booking} alt="" />
                          </div>
                          <p className="text-gray-600 text-base lg:text-lg font-medium">
                            {cls.totalBookings}
                          </p>
                        </div>
                        <div>
                          <button className="flex items-center gap-3 text-[#ac1929] hover:text-[#322f30] text-lg sm:text-xl font-bold cursor-pointer">
                            Join Now <FaArrowRight />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </Container>
  );
};

export default Classes;
