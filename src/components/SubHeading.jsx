import { Minus } from "lucide-react";
import React from "react";

const SubHeading = ({ heading, className }) => {
  return (
    <div
      data-aos="fade-up"
      className={`${className} text-3xl font-semibold flex items-center gap-1`}
    >
      <Minus size={30} /> {heading}
    </div>
  );
};

export default SubHeading;
