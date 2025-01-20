// import Btn from "../../../components/Btn";
// import SectionHeading from "../../../components/SectionHeading";
// import model from "../../../assets/Images/blog_model.jpg";
// import { BsArrowRight } from "react-icons/bs";
// import { FaRegCalendarAlt } from "react-icons/fa";

// const Blog = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 pt-32 pb-16 scroll-smooth">
//       <div>
//         <SectionHeading
//           subTitle={"BLOG & NEWS"}
//           firstTitle={"Our Latest"}
//           secondTitle={"Blog Post"}
//           description={
//             "Blanditiis commodi repudiandae occaecat sodales integer ullam corper aute, eget tortor, veritatis aperiam veniam ante, ridiculus excepteur."
//           }
//           classes1={"mx-auto"}
//           classes2={"w-[80%] mx-auto"}
//         ></SectionHeading>
//       </div>
//       <div className="flex justify-center items-center my-16">
//         <Btn content={"VIEW ALL BLOG"}></Btn>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
//         <div className="card card-compact bg-base-100 shadow-xl">
//           <figure>
//             <img src={model} alt="Shoes" />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">Shoes!</h2>
//             <p>If a dog chews shoes whose shoes does he choose?</p>
//             <div className="flex items-center gap-3">
//               <FaRegCalendarAlt className="text-[#ac1929] text-2xl font-semibold" />
//               <p className="text-gray-600 text-base lg:text-lg font-medium">
//                 Monday: 09:00 am
//               </p>
//             </div>
//             <div className="card-actions justify-end">
//               <button className="py-2.5 px-4 bg-gray-300 mt-4 rounded-md w-full flex items-center justify-center gap-[10px] group">
//                 Learn more
//                 <BsArrowRight className="text-[1.3rem] text-gray-600 group-hover:ml-2 transition-all duration-200" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;

import Btn from "../../../components/Btn";
import SectionHeading from "../../../components/SectionHeading";
import model from "../../../assets/Images/blog_model.jpg";
import { BsArrowRight } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-32 pb-16 scroll-smooth">
      <div>
        <SectionHeading
          subTitle={"BLOG & UPDATES"}
          firstTitle={"Stay Updated With"}
          secondTitle={"Our Latest Insights"}
          description={`Explore expert tips, industry news, and insightful stories that inspire and inform. Stay ahead with our latest blog posts.`}
          classes1={"mx-auto"}
          classes2={"w-[80%] mx-auto"}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
        {/* Blog Card 1 */}
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src={model} alt="Mental Health & Fitness" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-bold">
              How Fitness Improves Mental Health
            </h2>
            <p className="text-gray-600">
              Explore the connection between physical activity and mental
              well-being. A healthy body leads to a healthy mind!
            </p>
            <div className="flex justify-start items-center  mt-3">
              <FaRegCalendarAlt className="text-[#ac1929] text-xl font-semibold" />
              <p className="text-gray-600 text-sm font-medium">
                Published on: Jan 5, 2025
              </p>
            </div>
            <div className="card-actions justify-end">
              <button className="py-2.5 px-4 bg-red-300 mt-4 rounded-md w-full flex items-center justify-center gap-[10px] group text-[#322f30]">
                Read More
                <BsArrowRight className="text-[1.3rem] text-[#322f30] group-hover:ml-2 transition-all duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-16">
        <Btn content={"VIEW ALL BLOGS"} />
      </div>
    </div>
  );
};

export default Blog;
