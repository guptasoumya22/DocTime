// import {useState} from 'react';
// import { AiFillStar } from 'react-icons/ai'

// const Feedbackform = () => {
//     const [rating, setRating]=useState(0);
//     const [hover, setHover]=useState(0);
//     const [reviewText, setReviewText]=useState(0);
//     const handleSubmitReview =async e=>{
//         e.preventDefault();
//         // will use api later
//     }
//   return (
//     <form action=''>
//         <div>
//             <h3 className='text-black text-[16px] leading-6 font-semibold mb-4'>
//                 How would you rate the overall experience?*
//             </h3>
//             <div>
//                 {[...Array(5).keys()].map((_, index)=>{
//                     index+=1;
//                     return  (
//                     <button 
//                             key={index} 
//                             type="button"
//                             className={`${
//                                 index<=((rating && hover) || hover)
//                                 ? "text-yellow-500"
//                                 :"text-gray-400"
//                             }bg-transparent border-none outline-none text-[22px] cursor-pointer`}
//                             onClick={()=>setRating(index)}
//                             onMouseEnter={()=> setHover(index)}
//                             onMouseLeave={()=> setHover(rating)}
//                             onDoubleClick={()=>{
//                                 setHover(0);
//                                 setRating(0);
//                             }
//                             }>
//                         <span><AiFillStar/></span>
//                     </button>
//                 );
//                 })}
//             </div>
//         </div>
//         <div className='mt-[30px]'>
//             <h3 className='text-black text-[16px] leading-6 font-semibold mb-4 mt-0'>
//                 Share your feedback or suggestions
//             </h3>
//             <textarea className='border border-solid border-[#0066ff34] focus:outline outline-primary w-full px-4 py-3 rounded-md' 
//             rows="5" 
//             placeholder='Write your message'
//             onChange={e=>setReviewText(e.target.value)}
//             >
//             </textarea>
//         </div>
//         <button type="submit" className='btn' onClick={handleSubmitReview}>Submit Feedback</button>
//     </form>
//   )
// }

// export default Feedbackform
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const Feedbackform = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    // will use API later
  };

  return (
    <form onSubmit={handleSubmitReview}>
      <div>
        <h3 className='text-black text-[16px] leading-6 font-semibold mb-4'>
          How would you rate the overall experience?*
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                key={index}
                type='button'
                className={`${
                  index <= (hover || rating)
                    ? 'text-yellow-500'
                    : 'text-gray-400'
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(0)}
                onTouchStart={() => setHover(index)}
                onTouchEnd={() => {
                  setRating(index);
                  setHover(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className='mt-[30px]'>
        <h3 className='text-black text-[16px] leading-6 font-semibold mb-4 mt-0'>
          Share your feedback or suggestions
        </h3>
        <textarea
          className='border border-solid border-[#0066ff34] focus:outline outline-primary w-full px-4 py-3 rounded-md'
          rows='5'
          placeholder='Write your message'
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>
      <button type='submit' className='btn'>
        Submit Feedback
      </button>
    </form>
  );
};

export default Feedbackform;

