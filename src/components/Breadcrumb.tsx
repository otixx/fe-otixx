import React from "react";

const Breadcrumb = ({ text }: { text: string }) => {
  return (
    <div className="bg-none py-4 md:bg-first lg:bg-first">
      <div className="container mx-auto text-center md:text-left lg:text-left">
        <span className="font-bold text-first md:font-bold md:text-white lg:text-white">
          {text}
        </span>
      </div>
    </div>
  );
};

export default Breadcrumb;
