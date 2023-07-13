import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({product}) => {

  const navigate =useNavigate();

  return (
    <div onClick={()=> navigate(`products/${product?.id}`)} className='w-[430px] p-2 mb-5 mx-5 border rounded-md relative cursor-pointer'>
        <div className='text-1xl font-bold absolute top-0 right-0 absulote rounded-md  bg-black text-white p-2'>{product?.price} <span>€</span></div>
        <img className='w-[200px] h-[200px] object-cover m-auto' src={product?.image} alt="" />
        <div className='text-center px-3 mt-3 text-md font-bold'>{product?.title}</div>
    </div>
  )
}

export default Product