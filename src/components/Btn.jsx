import { Button } from "flowbite-react";

const Btn = ({ content, classes }) => {
  return (
    <Button
      color="failure"
      className={`text-white bg-[#ac1929] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold ${classes}`}
    >
      {content}
    </Button>
  );
};

export default Btn;
