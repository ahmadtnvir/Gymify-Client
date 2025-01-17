import CountUp from "react-countup";

const Count = () => {
  return (
    <div className="min-h-fit py-10 px-4 max-w-7xl mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center text-center">
        {/* Working Hours */}
        <div className="space-y-2">
          <h1 className="text-[#ac1929] text-4xl sm:text-5xl lg:text-6xl tracking-wider font-extrabold">
            <CountUp end={500} duration={10} separator="," />
            K+
          </h1>
          <p className="text-[#322f30] text-lg sm:text-xl font-semibold tracking-wide">
            Working Hours
          </p>
        </div>

        {/* Success Program */}
        <div className="space-y-2">
          <h1 className="text-[#ac1929] text-4xl sm:text-5xl lg:text-6xl tracking-wider font-extrabold">
            <CountUp end={590} duration={10} separator="," />+
          </h1>
          <p className="text-[#322f30] text-lg sm:text-xl font-semibold tracking-wide">
            Success Program
          </p>
        </div>

        {/* Happy Clients */}
        <div className="space-y-2">
          <h1 className="text-[#ac1929] text-4xl sm:text-5xl lg:text-6xl tracking-wider font-extrabold">
            <CountUp end={3860} duration={10} separator="," />+
          </h1>
          <p className="text-[#322f30] text-lg sm:text-xl font-semibold tracking-wide">
            Happy Clients
          </p>
        </div>

        {/* Perfect Bodies */}
        <div className="space-y-2">
          <h1 className="text-[#ac1929] text-4xl sm:text-5xl lg:text-6xl tracking-wider font-extrabold">
            <CountUp end={720} duration={10} separator="," />+
          </h1>
          <p className="text-[#322f30] text-lg sm:text-xl font-semibold tracking-wide">
            Perfect Bodies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Count;
