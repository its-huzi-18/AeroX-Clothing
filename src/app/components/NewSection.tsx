import React from 'react'
import StylishShirt from './ImagesStyle'
import Link from 'next/link'
const detail = [
  {ImgSrc:"/Images/New-01.png",title:"Cotton T-shirt",link:"b968d07d-d145-484e-bfcd-1f6fdf1d34b4",discount:25,oldPrice:2000,price:1499},
  {ImgSrc:"/Images/New-2.png",title:"Drifit T-shirt",link:"d810d01f-c468-4ed7-bc13-92b78b0d0df8",discount:20,oldPrice:2499,price:1999},
  {ImgSrc:"/Images/New-3.png",title:"Polo T-shirt",link:"ee95a203-9247-476d-849c-35d6148d0d66",discount:20,oldPrice:2499,price:1999},
  {ImgSrc:"/Images/New-4.png",title:"Sweatshirt",link:"f052adea-78e5-4eca-9b2d-659297dc6f56",discount:20,oldPrice:2499,price:1999},

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

{/* <StylishShirt
imageSrc='/Images/New-01.png'
alt='shirt-1'
/>
<StylishShirt
imageSrc='/Images/New-2.png'
alt='shirt-1'
/>
<StylishShirt
imageSrc='/Images/New-3.png'
alt='shirt-1'
/>
<StylishShirt
imageSrc='/Images/New-4.png'
alt='shirt-1'
/> */}
</div>
    </div>
  )
}

export default NewSection