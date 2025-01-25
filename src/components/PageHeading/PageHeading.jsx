import "./pageHeading.css";
const PageHeading = ({ title }) => {
  return (
    <div className="pageHeading_bg h-96">
      <div className="flex justify-center items-center h-full max-w-7xl mx-auto">
        <h1 className="text-5xl lg:text-7xl text-white font-bold uppercase tracking-wider">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PageHeading;
