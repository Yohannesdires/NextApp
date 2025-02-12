'use client'
import React from 'react'
import { useRouter } from "next/navigation";
const OrderProduct = () => {
   const router = useRouter();
    const handleClick = () => {
        console.log('Order placed');
        router.push('/');
        // router.replace('/'); // This is the same as router.push but it doesn't add the page to the history
        // router.back(); // To come back to the previous page
        // router.refresh(); // To refresh the page
        //  router.forward(); // To go forward to the next page
    }
  return (
    <div>
        <h2>OrderProduct</h2>
        <button onClick={handleClick}>Place order</button>
        </div>
  )
}

export default OrderProduct