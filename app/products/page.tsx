import Link from "next/link";
import React from "react";

const Product = () => {
  return (
    <>
      <Link href="">
        <h1>Product List</h1>
      </Link>
      <Link href="products/1" className="cursor-pointer">
        <h2>Product 1</h2>
      </Link>
      <Link href="products/2" className="cursor-pointer">
        <h2>Product 2</h2>
      </Link>
      <h2>Product 3</h2>
    </>
  );
};

export default Product;
