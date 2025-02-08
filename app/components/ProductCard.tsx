import React from 'react'
import AddToCart from './AddToCart';
import styles from "./ProductCard.module.css";

// styles.card

const ProductCard = () => {
  return (
    <div  className={styles.card}>
    {/* // <div className='text-center border border-blue-500 rounded-lg p-3 font-medium'> */}
        <AddToCart />
    </div>
  )
}

export default ProductCard