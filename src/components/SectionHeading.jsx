import React from "react";

const SectionHeading = ({
  subTitle,
  firstTitle,
  secondTitle,
  description,
  classes1,
  classes2,
  textColor,
}) => {
  return (
    <div>
      <h4
        className={`uppercase border-b-4 border-[#ac1929] pb-2 text-[#ac1929] text-xl font-bold tracking-wide w-fit ${classes1}`}
      >
        {subTitle}
      </h4>
      <h1
        style={{
          "text-shadow": "1px 1px 2px #000000",
        }}
        className={`text-4xl lg:text-6xl font-bold text-[#404040] mt-6 mb-4 leading-tight ${textColor}`}
      >
        {firstTitle}{" "}
        <span
          style={{
            "text-shadow": "none",
          }}
          className="text-[#ac1929]"
        >
          {secondTitle}
        </span>
      </h1>
      <p
        className={`text-gray-600 text-base lg:text-lg font-medium ${classes2}`}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionHeading;
