import React from "react";

const ProductDescription = () => {
  return (
    <div className="mt-20">
      <div className="flex gap-3 mb-4">
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
          Description
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis a
          veniam nihil culpa cumque voluptate facilis expedita omnis impedit,
          repudiandae iste doloribus soluta maxime laudantium minima nesciunt
          praesentium ipsam cum libero illum temporibus numquam consectetur!
          Soluta repudiandae excepturi praesentium voluptas molestiae eligendi
          illum asperiores in sit. Omnis aliquam harum sapiente voluptatem quas
          illum, obcaecati molestiae?
        </p>

        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          recusandae delectus quia dolorum non necessitatibus beatae veritatis,
          nostrum, laudantium repudiandae dolor! Assumenda eaque dolores alias,
          aliquam minima in. Officiis nobis possimus quaerat harum architecto
          labore eligendi est, natus velit earum blanditiis quisquam expedita
          voluptates minus, beatae consequuntur fugit ducimus rem.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
