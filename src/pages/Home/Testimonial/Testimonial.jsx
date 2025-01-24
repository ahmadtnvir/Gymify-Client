import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Btn from "../../../components/Btn";
import SectionHeading from "../../../components/SectionHeading";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
const Testimonial = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: reviews = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reviews");
      return res.data;
    },
  });
  if (isLoading)
    return (
      <div className="h-full w-full flex justify-center items-center">
        <div className="w-7 h-7 animate-[ping_2s_linear_infinite] rounded-full border-2 border-[#ac1929] flex items-center justify-center">
          <div className="w-5 h-5 animate-[ping_2s_linear_3s_infinite] rounded-full border-2 border-[#ac1929]"></div>
        </div>
      </div>
    );
  if (error)
    return (
      <p
        className="h-full w-full flex justify-center items-center
      "
      >
        No Data Found...
      </p>
    );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For smaller tablets & large phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For small phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false, // Optionally hide dots on very small screens
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 scroll-smooth">
      <div className="text-center">
        <SectionHeading
          subTitle={"CLIENT TESTIMONIALS"}
          firstTitle={"What Our Clients"}
          secondTitle={"Say About Us"}
          description={`Discover how we’ve helped transform lives. Our clients’ words reflect the quality, dedication, and excellence we bring to every experience.`}
          classes1={"mx-auto"}
          classes2={"w-[80%] mx-auto"}
        />
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {reviews.map((review) => (
            // TODO: Layout formatting inside the div.
            <div key={review._id} className="px-2 py-2 h-[500px]">
              <div className=" bg-transparent shadow-md rounded-lg p-6 flex items-center justify-center flex-col h-full">
                <img
                  src={review.image}
                  alt="demo/image"
                  className="w-[150px] h-[150px] object-cover rounded-full"
                />
                <h3 className="text-[1.5rem] font-[500] capitalize mt-4">
                  {review.name}
                </h3>
                <p className="text-text text-[0.9rem]">{review.location}</p>

                <div className="flex items-center gap-1 my-4">
                  <Rating
                    style={{ maxWidth: 150 }}
                    value={review.rating}
                    readOnly
                  />
                </div>

                <div className="relative">
                  <p className=" text-justify text-[0.9rem] my-3 text-text ">
                    {review.review}
                  </p>
                  <FaQuoteRight className="text-[3rem] text-red-400 text-opacity-50 absolute top-[-20%] left-0 " />
                  <FaQuoteLeft className="text-[3rem] text-red-400 text-opacity-50 absolute bottom-[0%] right-0 " />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex justify-center items-center mt-16">
        <Btn content={"VIEW ALL REVIEWS"}></Btn>
      </div>
    </div>
  );
};

export default Testimonial;
