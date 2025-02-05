import Btn from "../../../components/Btn";
import SectionHeading from "../../../components/SectionHeading";
import model from "../../../assets/Images/blog_model.jpg";
import { BsArrowRight } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Blog = () => {
  const axiosPublic = useAxiosPublic();
  // ! Getting data using tanstack query
  const {
    data: blogs = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/blogs?limit=3");
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
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="card card-compact card_content_bg shadow-xl"
          >
            <figure>
              <img src={blog.image} alt="Mental Health & Fitness" />
            </figure>
            <div className="card-body text-start">
              <h2 className="card-title text-lg font-bold">{blog.title}</h2>
              <div className="badge badge-neutral">{blog.postedBy}</div>
              <p className="text-gray-600">
                {blog.description.slice(0, 150)}...
              </p>
              <div className="flex justify-start items-center gap-3  mt-3">
                <FaRegCalendarAlt className="text-[#ac1929] text-xl font-semibold" />
                <p className="text-gray-600 text-sm font-medium">
                  Published on: {blog.date}
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
        ))}
        {/* Blog Card 1 */}
      </div>

      <div className="flex justify-center items-center mt-16">
        <Btn content={"VIEW ALL BLOGS"} />
      </div>
    </div>
  );
};

export default Blog;
