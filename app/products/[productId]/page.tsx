import React from "react";

const ProductDetails = ({ params }: { params: { productId: string }; }) => {
  return (
    <div className="p-5 ">
      <h1 className="text-xl font-semibold text-slate-800">Details about product {params.productId}</h1>
    </div>
  );
};

export default ProductDetails;
