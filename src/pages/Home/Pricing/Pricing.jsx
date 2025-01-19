import SectionHeading from "../../../components/SectionHeading";
import icon from "../../../assets/Images/offers_icon.png";

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 scroll-smooth">
      <div className="text-center">
        <SectionHeading
          subTitle={"MEMBERSHIP PLANS"}
          firstTitle={"Choose the Best"}
          secondTitle={"Plan for You"}
          description={
            "Unlock your fitness potential with our tailored membership plans. Choose the one that suits your lifestyle and goals."
          }
          classes1={"mx-auto"}
          classes2={"!text-white w-[80%] mx-auto"}
          textColor={"!text-white"}
        ></SectionHeading>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="border border-[#6b6a6a] rounded-2xl p-8 bg-black bg-opacity-50">
            <div>
              <h3 className="text-3xl text-white font-bold">Basic Plan</h3>
              <h2 className="text-[60px] text-[#ac1929] font-bold">
                $150 <span className="text-[14px] text-white">/ Month</span>
              </h2>
            </div>
            <div className="bg-gray-950 p-5 rounded-2xl">
              <div className="flex justify-start items-center gap-4">
                <img
                  className="w-8 h-8 object-cover"
                  loading="lazy"
                  src={icon}
                  alt=""
                />
                <p className="text-slate-400">Access to gym facilities</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <img
                  className="w-8 h-8 object-cover"
                  loading="lazy"
                  src={icon}
                  alt=""
                />
                <p className="text-slate-400">Standard workout plans</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <img
                  className="w-8 h-8 object-cover"
                  loading="lazy"
                  src={icon}
                  alt=""
                />
                <p className="text-slate-400">Locker room access</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <img
                  className="w-8 h-8 object-cover"
                  loading="lazy"
                  src={icon}
                  alt=""
                />
                <p className="text-slate-400">No personal training</p>
              </div>
            </div>
            <div>
              <button className="mt-4 px-6 py-2 bg-[#ac1929] text-white font-bold rounded-lg hover:bg-red-700 transition-all">
                JOIN NOW
              </button>
            </div>
          </div>
          <div className="border border-[#f1374d] rounded-2xl p-8 bg-[#ac1929]">
            <div>
              <h3 className="text-3xl text-white font-bold">Premium Plan</h3>
              <h2 className="text-[60px] text-white font-bold">
                $250 <span className="text-[14px] text-white">/ Month</span>
              </h2>
            </div>
            <div className="bg-gray-950 p-5 rounded-2xl">
              <div className="flex justify-start items-center gap-4">
                <img
                  className="w-8 h-8 object-cover"
                  loading="lazy"
                  src={icon}
                  alt=""
                />
                <p className="text-slate-400">24/7 gym access</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <img
                  className="w-8 h-8 object-cover"
                  loading="lazy"
                  src={icon}
                  alt=""
                />
                <p className="text-slate-400">Custom workout & diet plans</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <img
                  className="w-8 h-8 object-cover"
                  loading="lazy"
                  src={icon}
                  alt=""
                />
                <p className="text-slate-400">Group fitness classes</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <img
                  className="w-8 h-8 object-cover"
                  loading="lazy"
                  src={icon}
                  alt=""
                />
                <p className="text-slate-400">1-on-1 personal training</p>
              </div>
            </div>
            <div>
              <button className="mt-4 px-6 py-2 bg-white text-[#ac1929] font-bold rounded-lg hover:bg-gray-200 transition-all">
                GET STARTED
              </button>
            </div>
          </div>
          <div className=" border border-[#6b6a6a] rounded-2xl p-8 bg-black bg-opacity-50">
            <div>
              <h3 className="text-3xl text-white font-bold">Standard Plan</h3>
              <h2 className="text-[60px] text-[#ac1929] font-bold">
                $200 <span className="text-[14px] text-white">/ Month</span>
              </h2>
            </div>
            <div className="bg-gray-950 p-5 rounded-2xl">
              <div className="flex justify-start items-center gap-4">
                <img
                  className="w-8 h-8 object-cover"
                  loading="lazy"
                  src={icon}
                  alt=""
                />
                <p className="text-slate-400">Extended gym access</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <img
                  className="w-8 h-8 object-cover"
                  loading="lazy"
                  src={icon}
                  alt=""
                />
                <p className="text-slate-400">Personalized training guides</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <img
                  className="w-8 h-8 object-cover"
                  loading="lazy"
                  src={icon}
                  alt=""
                />
                <p className="text-slate-400">Nutritional support</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <img
                  className="w-8 h-8 object-cover"
                  loading="lazy"
                  src={icon}
                  alt=""
                />
                <p className="text-slate-400">Limited group classes</p>
              </div>
            </div>
            <div>
              <button className="mt-4 px-6 py-2 bg-[#ac1929] text-white font-bold rounded-lg hover:bg-red-700 transition-all">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
