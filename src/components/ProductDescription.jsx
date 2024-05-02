import React from "react";

const ProductDescription = () => {
  return (
    <div className="mt-20">
      <div className="flex gap-3 mb-4 ">
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
          Descriptiom
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Care Guide
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Size Guide
        </button>
      </div>
      <div className="flex flex-col pb-16">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quae
          ratione minima ducimus sequi et! Voluptas dolor dolores aperiam magnam
          laudantium sequi. Et, non. Voluptates nam corporis perferendis
          architecto accusantium cupiditate velit consequuntur dignissimos
          provident illum neque alias sequi laboriosam vitae error quasi
          doloremque sunt ab, numquam, ipsam earum necessitatibus debitis
          aliquid! Possimus, explicabo autem.
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint cum
          maiores quia sed odio tempora adipisci. Dolorum quidem sit
          reprehenderit totam placeat quos pariatur in eum maiores dignissimos.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
