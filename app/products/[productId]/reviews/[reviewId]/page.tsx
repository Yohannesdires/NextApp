import React from "react";

const ReviewDetails = ({ params }: { params: { 
    productId: string 
    reviewId: string};
 }) => {
  return (
    <div className="p-5 ">
      <h1 className="text-xl font-semibold text-slate-800">Review {params.reviewId} for product {params.productId}</h1>
    </div>
  );
};

export default ReviewDetails;
