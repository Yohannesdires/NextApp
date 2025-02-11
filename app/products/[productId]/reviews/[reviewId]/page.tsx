import React from "react";
import {  notFound } from "next/navigation";
const ReviewDetails = ({ params }: { params: { 
    productId: string 
    reviewId: string};
 }) => {
  if(parseInt(params.reviewId) > 100) {
    notFound();
  }    
  return (
    <div className="p-5 ">
      <h1 className="text-xl font-semibold text-slate-800">Review {params.reviewId} for product {params.productId}</h1>
    </div>
  );
};

export default ReviewDetails;
