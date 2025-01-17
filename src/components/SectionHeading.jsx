import React from "react";

const SectionHeading = ({
  subTitle,
  firstTitle,
  secondTitle,
  description,
  classes,
}) => {
  return (
    <div>
      <h4
        className={`uppercase border-b-4 border-[#ac1929] pb-2 text-[#ac1929] text-xl font-bold tracking-wide w-fit ${classes}`}
      >
        {subTitle}
      </h4>
      <h1 className="text-4xl lg:text-6xl font-bold text-[#322f30] mt-6 mb-4 leading-tight">
        {firstTitle} <span className="text-[#ac1929]">{secondTitle}</span>
      </h1>
      <p className="text-gray-600 text-base lg:text-lg font-medium">
        {description}
      </p>
    </div>
  );
};

export default SectionHeading;
