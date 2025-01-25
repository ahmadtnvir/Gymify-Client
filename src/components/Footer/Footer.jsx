import "./footer.css";
import logo from "../../assets/Images/Nav-logo2.png";
import icon from "../../assets/Images/support_icon.png";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-16">
        <div>
          {/* Main content div */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 border-b border-b-slate-700 pb-10 mb-5">
            {/* About Gymify */}
            <div className="text-start text-white space-y-10">
              <div className="flex flex-wrap items-center gap-3 sm:gap-5">
                <a className="btn btn-ghost text-xl cursor-default flex-shrink-0">
                  <img
                    className="w-[50px] h-[35px] sm:w-[70px] sm:h-[50px] object-cover"
                    src={logo}
                    alt="Gymify Logo"
                  />
                </a>
                <div className="text-white text-center sm:text-left">
                  <h1 className="text-lg sm:text-2xl font-bold tracking-widest">
                    GYMIFY
                  </h1>
                  <p className="uppercase text-[8px] sm:text-[10px] text-[#ff2b2b] tracking-wide">
                    Healthy Lifestyle
                  </p>
                </div>
              </div>
              <p>
                At Gymify, we believe in pushing limits and achieving goals. Our
                expert trainers and modern equipment ensure you get the best
                workout experience. Join us and take your fitness journey to the
                next level!
              </p>
              <div className="flex justify-start items-center gap-2">
                <img
                  className="w-[60px] object-cover"
                  src={icon}
                  alt="Support Icon"
                />
                <div>
                  <h2 className="text-2xl font-semibold hover:text-[#ac1929]">
                    +88 01515254784
                  </h2>
                  <small>Available 24/7 for support</small>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="text-start text-white space-y-10">
              <h2 className="text-2xl font-semibold">Opening Hours</h2>
              <div className="space-y-6">
                <div className="border-b border-slate-700 pb-4">
                  <p>Monday - Saturday</p>
                  <p className="text-[#ac1929] font-semibold">
                    12:00 PM - 2:45 PM
                  </p>
                </div>
                <div className="border-b border-slate-700 pb-4">
                  <p>Sunday - Thursday</p>
                  <p className="text-[#ac1929] font-semibold">
                    5:30 PM - 12:00 AM
                  </p>
                </div>
                <div>
                  <p>Friday - Saturday</p>
                  <p className="text-[#ac1929] font-semibold">
                    3:00 PM - 6:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-start text-white space-y-10">
              <h2 className="text-2xl font-semibold text-white">Quick Links</h2>
              <div className="flex flex-col space-y-4">
                <Link
                  to={"/"}
                  className="hover:text-[#ac1929] flex items-center gap-2"
                >
                  <MdKeyboardArrowRight /> Home
                </Link>
                <Link
                  to={"/aboutUs"}
                  className="hover:text-[#ac1929] flex items-center gap-2"
                >
                  <MdKeyboardArrowRight /> About Us
                </Link>
                <Link
                  to={"/services"}
                  className="hover:text-[#ac1929] flex items-center gap-2"
                >
                  <MdKeyboardArrowRight /> Services
                </Link>
                <Link
                  to={"/contactUs"}
                  className="hover:text-[#ac1929] flex items-center gap-2"
                >
                  <MdKeyboardArrowRight /> Contact Us
                </Link>
                <Link
                  to={"/blog"}
                  className="hover:text-[#ac1929] flex items-center gap-2"
                >
                  <MdKeyboardArrowRight /> Blog
                </Link>
                <Link
                  to={"/pricing"}
                  className="hover:text-[#ac1929] flex items-center gap-2"
                >
                  <MdKeyboardArrowRight /> Pricing
                </Link>
              </div>
            </div>

            {/* Contact Info & Social Media */}
            <div className="text-start text-white space-y-10">
              <h2 className="text-2xl font-semibold">Get In Touch</h2>
              <div>
                <h4 className="text-[#ac1929] font-semibold">Address:</h4>
                <p>123 Fitness Street, Downtown, Cityville</p>
              </div>
              <div>
                <h4 className="text-[#ac1929] font-semibold">Email:</h4>
                <p>support@gymify.com</p>
              </div>
              <div className="flex space-x-3 mt-3">
                <button className="btn btn-circle btn-sm border-[#ac1929] bg-transparent hover:bg-[#ac1929]">
                  <FaFacebook className="text-white" />
                </button>
                <button className="btn btn-circle btn-sm border-[#ac1929] bg-transparent hover:bg-[#ac1929]">
                  <FaXTwitter className=" text-white" />
                </button>
                <button className="btn btn-circle btn-sm border-[#ac1929] bg-transparent hover:bg-[#ac1929]">
                  <FaYoutube className="text-white" />
                </button>
                <button className="btn btn-circle btn-sm border-[#ac1929] bg-transparent hover:bg-[#ac1929]">
                  <FaInstagram className="text-white" />
                </button>
                <button className="btn btn-circle btn-sm border-[#ac1929] bg-transparent hover:bg-[#ac1929]">
                  <FaWhatsapp className="text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="text-center text-white mt-5">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="font-bold">Gymify</span>. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
