import React from "react";


//taking props from homesectioncarosel 
const HomeSectionCard = ({ product }) => {
  return (
    <div
      className="cursor-pointer flex flex-col itmes-center bg-white rounded-lg 
    shadow-lg overflow-hidden w-[15rem] h-[28rem] mx-1 border "
    >
      <div className="h-[13rem] w-[full]">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt="f"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 ">{product.title}</h3>
        <p className="mt-2 text-sm text-gray-500 h-5px">
          {product.description}
        </p>
        <p className="mt-2 text-sm text-gray-500 h-5px">
          {product.price}
        </p>

      </div>
    </div>
  );
};

export default HomeSectionCard;
