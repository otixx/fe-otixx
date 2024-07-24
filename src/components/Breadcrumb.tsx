import React from "react";

const Breadcrumb = ({ text }: { text: string }) => {
  return (
    <div className="bg-first py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-bold text-white">{text}</span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
