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

// import SectionHeading from "../../../components/SectionHeading";
// import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
// import { Rating } from "@smastrom/react-rating";
// import "@smastrom/react-rating/style.css";
// import { useState } from "react";
// import Btn from "../../../components/Btn";

// const Testimonial = () => {
//   const [rating] = useState(4.8);
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-16 scroll-smooth">
//       <div className="text-center">
//         <SectionHeading
//           subTitle={"CLIENT TESTIMONIALS"}
//           firstTitle={"What Our Clients"}
//           secondTitle={"Say About Us"}
//           description={`Discover how we’ve helped transform lives. Our clients’ words reflect the quality, dedication, and excellence we bring to every experience.`}
//           classes1={"mx-auto"}
//           classes2={"w-[80%] mx-auto"}
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
//         <div className="bg-white shadow-2xl rounded-lg p-6 flex flex-col items-center text-center">
//           <img
//             src="https://img.freepik.com/free-photo/handsome-smiling-man-with-glasses_176420-18048.jpg"
//             alt="Client"
//             className="w-[120px] h-[120px] object-cover rounded-full"
//           />
//           <h3 className="text-xl font-bold mt-4">David Anderson</h3>
//           <p className="text-gray-500">New York, USA</p>

//           <div className="flex items-center gap-1 my-3">
//             <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
//           </div>

//           <div className="relative">
//             <FaQuoteRight className="text-[2.5rem] text-red-400 opacity-50 absolute -top-6 left-0" />
//             <p className="text-gray-700 text-[0.95rem] my-4">
//               “Exceptional service! The team went above and beyond to ensure I
//               had the best experience. Highly recommended for anyone looking for
//               real results.”
//             </p>
//             <FaQuoteLeft className="text-[2.5rem] text-red-400 opacity-50 absolute bottom-0 right-0" />
//           </div>
//         </div>

//         <div className="bg-transparent shadow-2xl rounded-lg p-6 flex flex-col items-center text-center">
//           <img
//             src="https://img.freepik.com/free-photo/portrait-young-smiling-woman-looking-camera_176420-15450.jpg"
//             alt="Client"
//             className="w-[120px] h-[120px] object-cover rounded-full"
//           />
//           <h3 className="text-xl font-bold mt-4">Sophia Carter</h3>
//           <p className="text-gray-500">London, UK</p>

//           <div className="flex items-center gap-1 my-3">
//             <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
//           </div>

//           <div className="relative">
//             <FaQuoteRight className="text-[2.5rem] text-red-400 opacity-50 absolute -top-6 left-0" />
//             <p className="text-gray-700 text-[0.95rem] my-4">
//               “I’m so grateful for the support and professionalism. The results
//               speak for themselves! I feel more confident and empowered than
//               ever.”
//             </p>
//             <FaQuoteLeft className="text-[2.5rem] text-red-400 opacity-50 absolute bottom-0 right-0" />
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-center items-center mt-12">
//         <Btn content={"READ MORE REVIEWS"} />
//       </div>
//     </div>
//   );
// };

// export default Testimonial;
