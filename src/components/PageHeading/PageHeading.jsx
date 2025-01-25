import "./pageHeading.css";
const PageHeading = ({ title }) => {
  return (
    <div className="pageHeading_bg w-full h-96">
      <div className="flex justify-center items-center h-full">
        <h1 className="text-7xl lg:text-9xl text-white font-bold uppercase tracking-wider">{title}</h1>
      </div>
    </div>
  );
};

export default PageHeading;
