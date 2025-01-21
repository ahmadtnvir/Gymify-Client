import SectionHeading from "../../../components/SectionHeading";
import { FaQuoteLeft, FaRegStar, FaStar, FaQuoteRight } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import Btn from "../../../components/Btn";

const Testimonial = () => {
  const [rating, setRating] = useState(4.5);
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 scroll-smooth">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-16">
        <div>
          <div className=" bg-transparent shadow-2xl rounded-lg p-6 flex items-center justify-center flex-col">
            <img
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
              alt="demo/image"
              className="w-[150px] h-[150px] object-cover rounded-full"
            />
            <h3 className="text-[1.5rem] font-[500] capitalize mt-4">
              Jhone Dehon
            </h3>
            <p className="text-text text-[0.9rem]">London</p>

            <div className="flex items-center gap-1 my-4">
              <Rating
                style={{ maxWidth: 150 }}
                value={rating}
                onChange={setRating}
                readOnly
              />
            </div>

            <div className="relative">
              <p className=" text-justify text-[0.9rem] my-3 text-text ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                nesciunt saepe quam doloremque nulla cumque vero sequi,
                repellendus vel reiciendis? Eos totam quidem ducimus amet, in
                fuga quia minus ab!
              </p>
              <FaQuoteRight className="text-[3rem] text-red-400 text-opacity-50 absolute top-[-20%] left-0 " />
              <FaQuoteLeft className="text-[3rem] text-red-400 text-opacity-50 absolute bottom-[0%] right-0 " />
            </div>
          </div>
        </div>
        <div>
          <div className=" bg-transparent shadow-2xl rounded-lg p-6 flex items-center justify-center flex-col">
            <img
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
              alt="demo/image"
              className="w-[150px] h-[150px] object-cover rounded-full"
            />
            <h3 className="text-[1.5rem] font-[500] capitalize mt-4">
              Jhone Dehon
            </h3>
            <p className="text-text text-[0.9rem]">London</p>

            <div className="flex items-center gap-1 my-4">
              <Rating
                style={{ maxWidth: 150 }}
                value={rating}
                onChange={setRating}
                readOnly
              />
            </div>

            <div className="relative">
              <p className=" text-justify text-[0.9rem] my-3 text-text ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                nesciunt saepe quam doloremque nulla cumque vero sequi,
                repellendus vel reiciendis? Eos totam quidem ducimus amet, in
                fuga quia minus ab!
              </p>
              <FaQuoteRight className="text-[3rem] text-red-400 text-opacity-50 absolute top-[-20%] left-0 " />
              <FaQuoteLeft className="text-[3rem] text-red-400 text-opacity-50 absolute bottom-[0%] right-0 " />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-16">
        <Btn content={"VIEW ALL REVIEWS"}></Btn>
      </div>
    </div>
  );
};

export default Testimonial;
