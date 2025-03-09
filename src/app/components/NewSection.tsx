import React from 'react'
import StylishShirt from './ImagesStyle'
import Link from 'next/link'
const detail = [
  {ImgSrc:"/Images/New-01.png",title:"Cotton T-shirt",link:"b968d07d-d145-484e-bfcd-1f6fdf1d34b4",discount:25,oldPrice:2000,price:1499},
  {ImgSrc:"/Images/New-04.png",title:"Drifit T-shirt",link:"d810d01f-c468-4ed7-bc13-92b78b0d0df8",discount:20,oldPrice:2499,price:1999},
  {ImgSrc:"/Images/New-3.png",title:"Polo T-shirt",link:"d5096a4e-311d-41da-ac9e-5ea5b4b6ba5c",discount:20,oldPrice:2499,price:1999},
  {ImgSrc:"/Images/new-2-.png",title:"Sweatshirt",link:"490d584e-659d-4220-9d5d-60fa9d0ac777",discount:20,oldPrice:2499,price:1999},

]

const NewSection = () => {
  return (
  <div className='my-10'>
    <div className='text-center'>
        <h2 className='font-bold text-3xl tracking-widest my-2'>NEW</h2>
        <button className=' rounded-3xl border-[1px] px-4 hover:border-gray-800 py-[6px] text-black/90 tracking-widest border-gray-400'>VIEW ALL</button>
        </div>
<div className='flex justify-center gap-7 my-10 flex-wrap'>
<div className="flex justify-center gap-7 my-8 flex-wrap items-center">
          {detail.map((data,id)=>(
        <div key={id} className="flex flex-col gap-4 items-center justify-center">
        <Link href={`/shirtDetail/${data.link}`}>
                  <StylishShirt alt="shirt" imageSrc={data.ImgSrc} discount={data.discount} />
          </Link>
          <div className="flex flex-col justify-center items-center">

          <h2 className="font-semibold cursor-pointer text-lg">
            {data.title}
          </h2>
          <div className="flex  gap-12">
            <h2 className="font-semibold">Rs.{data.price}.00</h2>
            <h2 className="line-through text-red-500">Rs.{data.oldPrice}.00</h2>
          </div>
          </div>
         
        </div>
        ))}
        </div>
</div>
    </div>
  )
}

export default NewSection