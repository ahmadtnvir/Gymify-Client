import { Link } from "react-router-dom";
import Btn from "../../components/Btn";
import "./style.css";

const Error = () => {
  return (
    <div className="main-container min-h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-[#ac1929] text-[15vw] lg:text-[10rem] font-bold">
        404
      </h1>
      <p className="text-white text-center text-[5vw] lg:text-4xl font-bold my-5">
        Oops! That page can not be found
      </p>
      <Link to={"/"}>
        <Btn content={"Back to Home"} />
      </Link>
    </div>
  );
};

export default Error;
