import React from "react";
import StylishShirt from "./ImagesStyle";
import Image from "next/image";
import GlowingButton from "./GlowingButton";
import Link from "next/link";
import SocialMedia from "./SocialMedia";

const detail = [
  {ImgSrc:"/Images/arrival-1.png",title:"Cotton T-shirt",link:"da38278f-0704-4ec9-821b-95c2aa731e68",discount:25,oldPrice:2000,price:1499},
  {ImgSrc:"/Images/arrival-2.png",title:"Drop Shoulder",link:"a2807e85-cc15-4724-88fc-94892fb83d95",discount:20,oldPrice:2499,price:1999},
  {ImgSrc:"/Images/model-3.png",title:"Polo T-shirt",link:"1733865d-0953-47b9-ad62-734e053cbcfe",discount:20,oldPrice:2499,price:1999},
  {ImgSrc:"/Images/model-01.png",title:"Cotton T-shirt",link:"1a3a588e-ca7a-4ddb-9a1f-10280c7330c4",discount:25,oldPrice:2000,price:1499},
]

const NewArrival = () => {
  return (
    <>
      <div className="flex mt-16 mb-10  gap-3 flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-10">
          <div className="w-48 h-[3px] bg-black"></div>
          <h2 className="text-3xl font-bold">NEW ARRIVALS</h2>
          <div className="w-48 h-[3px] bg-black"></div>
        </div>
        <button className="text-xl  border-b-2 border-black/70">
          View All
        </button>
      </div>
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
      <div className="relative md:mt-24 mb-20 flex justify-center items-center">
        <Image
          src={"/Images/Bottom-2-new.png"}
          width={1200}
          height={400}
          alt="bottom"
        />
        <div className="absolute left-[20%] top-[45%]">
          <Link href={"/Shop"}>
            <GlowingButton />
          </Link>
        </div>
        <div className="absolute top-[80%] left-[22%] flex flex-col justify-center items-center">
          <SocialMedia />
          <h2 className="text-white font-medium text-[17px] tracking-wider">
            Follow us
          </h2>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
