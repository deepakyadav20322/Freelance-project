import React from 'react'
import { GoArrowDownLeft } from "react-icons/go";
import { Link } from 'react-router-dom';


const FromOurBlog = () => {

      const blogs = [
        {
          title: "For Elegance",
          description: "Involving Belonging Promotion Provision Can Be Consulted.",
          image: "path_to_first_image", // Replace with the actual path to your image
          link: "#",
        },
        {
          title: "Product Superiority",
          description: "Ladyship graciously embraced the blessing as she met Sir with charm.",
          image: "path_to_second_image", // Replace with the actual path to your image
          link: "#",
        },
        {
          title: "Skillfully Designed",
          description: "As cousins and men gathered, warmth filled the assembly.",
          image: "path_to_third_image", // Replace with the actual path to your image
          link: "#",
        },
      ];
    
      return (
        <section className=" bg-white">
    <div className='flex justify-center items-center flex-col'>
      <h2 className="text-4xl font-semibold bg-gradient-to-r from-[#E66E06] to-[#6E3000] bg-clip-text text-transparent p-1">
        From Our Blogs
      </h2>
      </div>

       <div className='flex flex-row justify-center items-start gap-x-10 py-6'>

        <div className=''>
            <div className='relative'>

            <img src="/Images/blogImg1.png" alt="blogImg" className='w-96 h-80'  />
            <Link to={'/blog'} className='absolute w-12 h-12 bg-[#4b4b4b] border border-[#FFebb5] opacity-80 bottom-4 left-6 rounded-full flex justify-center items-center'><GoArrowDownLeft size={25} className='text-white '/></Link>
            <p className='absolute font-normal text-white left-24 bottom-8'>LEARN MORE</p>
            </div>
            <div className='w-[320px]'>
                <h1 className='font-semibold text-2xl pt-2'>For Elegance</h1>
                <p className='text-base font-semibold py-3 text-[#783838]'>Involving Belonging Promotion Provision Can Be Consulted.</p>
            </div>
        </div>


        <div className=''>
            <div className='relative'>
            <img src="/Images/blogImg2.png" alt="blogImg" className='  w-96 h-96'  />
            <Link to={'/blog'} className='absolute w-12 h-12 bg-[#4b4b4b] border border-[#FFebb5] opacity-80 bottom-4 left-6 rounded-full flex justify-center items-center'><GoArrowDownLeft size={25} className='text-white '/></Link>
            <p className='absolute font-normal text-white left-24 bottom-8'>LEARN MORE</p>
            </div>
            <div className='w-[320px]'>
                <h1 className='font-bold text-3xl pt-2'>Product Superiority</h1>
                <p className='text-base font-semibold py-3 text-[#783838]'>Ladyship graciously embraced the blessing as she met Sir with charm
                .</p>
            </div>
    
       </div>




        <div className=''>
            <div className='relative'>
            <img src="/Images/blogImg3.png" alt="blogImg" className='w-96 h-80'  />
            <Link to={'/blog'} className='absolute w-12 h-12 bg-[#4b4b4b] border border-[#FFebb5] opacity-80 bottom-4 left-6 rounded-full flex justify-center items-center'><GoArrowDownLeft size={25} className='text-white '/></Link>
            <p className='absolute font-normal text-white left-24 bottom-8'>LEARN MORE</p>
            </div>
            <div className='w-[320px]'>
                <h1 className='font-semibold text-2xlpt-2'>Skillfully Designed</h1>
                <p className='text-base font-semibold py-3 text-[#783838]'>As cousins and men gathered, warmth filled the assembly.</p>
            </div>
        </div>
        </div>

        </section>
      );
    };
    
    export default FromOurBlog;
    