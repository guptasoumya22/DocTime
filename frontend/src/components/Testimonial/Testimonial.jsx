// import React from 'react'
// import { useSwiper } from 'swiper/react';
// import {Pagination} from 'swiper/modules';
// import { Swiper,SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import patient from '../../assets/images/patient-avatar.png';
// import 'swiper/swiper-bundle.min.css';
// import {HiStar} from 'react-icons/hi';
// const Testimonial = () => {
//   return (
//     <div className='mt-[30px] lg:mt-[55px]'>
//       <Swiper 
//       modules={[Pagination]} 
//       spaceBetween={30} 
//       slidesPerView={1}
//       pagination={{clickable: true}}
//       breakpoints={{
//         640:{
//             slidesPerView:1,
//             spaceBetween:0,
//         },
//         768:{
//             slidesPerView:2,
//             spaceBetween:20,
//         },
//         1024:{
//             slidesPerView:3,
//             spaceBetween:30,
//         },
//       }}
//       >
//         <SwiperSlide>
//             <div className='py-[30px] px-5 rounded-lg'>
//                 <div className='flex items-center gap-[13px]'>
//                     <img src={patient} alt=""/>
//                     <div>
//                         <h4 className='text-[18px] leading-[30px] font-semibold text-black'>
//                             Soumya Gupta
//                         </h4>
//                         {/* <div className='flex items-center gap-[2px]'>
//                             <HiStar className='text-yellow-500 w-[18px] h-5'/>
//                             <HiStar className='text-yellow-500 w-[18px] h-5'/>
//                             <HiStar className='text-yellow-500 w-[18px] h-5'/>
//                             <HiStar className='text-yellow-500 w-[18px] h-5'/>
//                             <HiStar className='text-yellow-500 w-[18px] h-5'/>
//                         </div> */}
//                     </div>
//                 </div>
//                 {/* <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
//                     "I have taken medical services from them. They treat so well and 
//                     they are provided the best medical services."
//                 </p> */}
//             </div>
//         </SwiperSlide>

//       </Swiper>
//     </div>
//   )
// }

// export default Testimonial;
import React, { useState, useEffect } from 'react';
import patient from '../../assets/images/patient-avatar.png';
import { HiStar } from 'react-icons/hi';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Soumya Gupta',
      image: patient,
      rating: 5,
      text: 'I have taken medical services from them. They treat so well and they are provided the best medical services.',
    },
    {
      name: 'John Doe',
      image: patient,
      rating: 4,
      text: 'Great service and friendly staff!',
    },
    {
      name: 'Jane Smith',
      image: patient,
      rating: 5,
      text: 'Highly recommend their services.',
    },
    {
      name: 'Alex Johnson',
      image: patient,
      rating: 5,
      text: 'Professional and reliable.',
    },
    {
      name: 'Emily Davis',
      image: patient,
      rating: 4,
      text: 'Very satisfied with the service.',
    },
    {
      name: 'Michael Brown',
      image: patient,
      rating: 5,
      text: 'Exceptional medical care.',
    },
    // Add more testimonials as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  // useEffect(() => {
  //   const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  //   return () => clearInterval(slideInterval);
  // }, []);

  return (
    <div className="relative mt-8 lg:mt-14 overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${Math.ceil(testimonials.length / 3) * 100}%` }}>
        {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, slideIndex) => (
          <div key={slideIndex} className="grid grid-cols-1 md:grid-cols-3 gap-4 min-w-full">
            {testimonials.slice(slideIndex * 3, slideIndex * 3 + 3).map((testimonial, index) => (
              <div key={index} className="p-6 rounded-lg bg-primary">
                <div className="flex items-center gap-3">
                  <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center gap-1">
                      {Array(testimonial.rating).fill().map((_, i) => (
                        <HiStar key={i} className="text-yellow-500 w-4 h-4" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white mt-4">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full">‹</button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full">›</button>
    </div>
  );
};

export default Testimonial;

