import React from "react";
import heroImg1 from '../assets/images/hero-img01.png';
import heroImg2 from '../assets/images/hero-img02.png';
import heroImg3 from '../assets/images/hero-img03.png';
import icon1 from '../assets/images/icon01.png';
import icon2 from '../assets/images/icon02.png';
import icon3 from '../assets/images/icon03.png';
import {BsArrowRight} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import featureImg from '../assets/images/feature-img.png';
import videoIcon from "../assets/images/video-icon.png";
import user from "../assets/images/avatar-icon.png"; 
import DoctorList from "../components/Doctors/DoctorList";
import faqImg from "../assets/images/faq-img.png";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";
const Home = () => {
    return (
        <>
        {/* -----hero section----- */}
        <section className="hero__section pt-[60px] 2xl:h-[800px]">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-[30px] items-start lg:items-center justify-between">
                        {/* -----hero content----- */}
                        <div className="w-full lg:w-1/2">
                            <div className="lg:w-[570px]">
                                <h1 className="text-[36px] leading-[46px] text-black font-[500] md:text-[60px] md:leading-[70px]">
                                    Skip the Wait, Schedule Online.
                                </h1>
                                <p className="text__para">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                                <button className="btn">Request an Appointment</button>
                            </div>

                            {/* -----hero counter ----- */}
                            <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700px] text-black">
                                        30+
                                    </h2>
                                    <span className="w-[100px] h-2 bg-accent rounded-full block mt-[-14px]"></span>
                                    <p className="text__para">Years of Experience</p>
                                </div>
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700px] text-black">
                                        15+
                                    </h2>
                                    <span className="w-[100px] h-2 bg-purple rounded-full block mt-[-14px]"></span>
                                    <p className="text__para">Clinic Location</p>
                                </div>
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700px] text-black">
                                        100%
                                    </h2>
                                    <span className="w-[100px] h-2 bg-skyblue rounded-full block mt-[-14px]"></span>
                                    <p className="text__para">Patient Satisfaction</p>
                                </div>
                            </div>
                        </div>

                        {/* -----hero images----- */}
                        <div className="w-full lg:w-1/2 flex flex-row items-start gap-5">
                        <div className="w-1/2 mt-[30px]">
                                <img className="w-full" src={heroImg1} alt=""/>
                            </div>
                            <div className="w-1/2 flex flex-col gap-5">
                                <img src={heroImg2} alt="" className="w-full"/>
                                <img src={heroImg3} alt="" className="w-full"/>
                            </div>
                           
                        </div>
                    </div>
                </div>
        </section>
        <section>
            <div className="container">
                <div className="lg:w-[470px] mx-auto">
                    <h2 className="heading text-center">
                        Providing the best medical services
                    </h2>
                    <p className="text__para text-center">
                        World class care for everyone. Our health System offers unmatched expert health care.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
                    <div className="py-[30px] px-5">
                        <div className="flex items-center justify-center">
                            <img src={icon1} alt="" />
                        </div>
                        <div className="mt-[30px]">
                            <h2 className="text-[26px] leading-9 text-black font-[700] text-center">
                                Find a Doctor
                            </h2>
                            <p className="text-[16px] leading-7 text-neutral-dark font-[400] mt-4 text-center">
                            World class care for everyone. Our health System offers unmatched expert health care.
                            </p>
                            <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none">
                                <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                            </Link>
                        </div>
                    </div>
                    <div className="py-[30px] px-5">
                        <div className="flex items-center justify-center">
                            <img src={icon2} alt="" />
                        </div>
                        <div className="mt-[30px]">
                            <h2 className="text-[26px] leading-9 text-black font-[700] text-center">
                                Find a Location
                            </h2>
                            <p className="text-[16px] leading-7 text-neutral-dark font-[400] mt-4 text-center">
                            World class care for everyone. Our health System offers unmatched expert health care.
                            </p>
                            <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none">
                                <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                            </Link>
                        </div>
                    </div>
                    <div className="py-[30px] px-5">
                        <div className="flex items-center justify-center">
                            <img src={icon3} alt="" />
                        </div>
                        <div className="mt-[30px]">
                            <h2 className="text-[26px] leading-9 text-black font-[700] text-center">
                               Book Appointment
                            </h2>
                            <p className="text-[16px] leading-7 text-neutral-dark font-[400] mt-4 text-center">
                            World class care for everyone. Our health System offers unmatched expert health care.
                            </p>
                            <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none">
                                <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* -----about section ----- */}
        <About />
        {/* -----services section----- */}
        <section>
            <div className="container">
                <div className="xl:w-[470px] mx-auto">
                    <h2 className="heading text-center">Our Medical Services</h2>
                    <p className="text-[16px] leading-7 text-neutral-dark font-[400] mt-4 text-center">
                             World class care for everyone. Our health System offers unmatched expert health care.
                    </p>
                </div>
                <ServiceList/>
            </div>
        </section>
        {/* -----feature section----- */}
        <section>
            <div className="container">
                <div className="flex items-center justify-between flex-col lg:flex-row">
                    <div className="xl:w-[670px]">
                        <h2 className="heading">Get Virtual Treatment<br/>anytime.</h2>
                        <ul className="pl-4">
                            <li className="text__para">
                                1.Schedule the appointment directly.
                            </li>
                            <li className="text__para">
                                2.Search for your physician here, and contact their office.
                            </li>
                            <li className="text__para">
                                3.View our physicians who are accepting new patients, use the 
                                online scheduling tool to select an appointment time.
                            </li>
                        </ul>
                        <Link to='/'><button className="btn">Learn More</button></Link>
                    </div>
                    {/* ----feature image---- */}
                    <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                        <img src={featureImg} className="w-3/4" alt="" />
                        <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom 
                        -[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-[6px] lg:gap-3">
                                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-black
                                    font-[600]">
                                        Tue, 24
                                    </p>
                                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-black
                                    font-[600]">
                                        10:00AM
                                    </p>
                                </div>
                                <span className="w-5 h-5 lg:w-[34px] flex items-center justify-center
                                bg-yellow-300 rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                                    <img src={videoIcon} alt=""/>
                                </span>
                            </div>
                            <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] 
                            text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 
                            text-skyblue font-[500] mt-2 lg:mt-4 rounded-full">
                                Consultation
                            </div>
                            <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                                <img src={user} alt=""/>
                                <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px]
                                font-[700] text-black">
                                    Wayne Collins
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* -----Our great doctors----- */}
        <section>
            <div className="container">
            <div className="xl:w-[470px] mx-auto">
                    <h2 className="heading text-center">Our Great Doctors</h2>
                    <p className="text-[16px] leading-7 text-neutral-dark font-[400] mt-4 text-center">
                             World class care for everyone. Our health System offers unmatched expert health care.
                    </p>
                </div>
                <DoctorList />
            </div>
            
        </section>
        {/* -----faq section----- */}
        <section>
            <div className="container">
                <div className="flex justify-between gap-[50px] lg:gap-0">
                    <div className="w-1/2 hidden md:block"> <img src={faqImg} alt=""/>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="heading"> Most questions by our beloved patients</h2>
                        <FaqList/>
                    </div>
                </div>
            </div>
        </section>
        {/* -----Testimonial section----- */}
        <section>
        <div className="container">
                <div className="xl:w-[470px] mx-auto">
                    <h2 className="heading text-center">
                        What our patient say
                    </h2>
                    <p className="text__para text-center">
                        World class care for everyone. Our health System offers unmatched expert health care.
                    </p>
                </div>
                <Testimonial/>
                </div>
        </section>
        </>
    );
};

export default Home;




// import React from "react";
// import heroImg1 from '../assets/images/hero-img01.png';
// import heroImg2 from '../assets/images/hero-img02.png';
// import heroImg3 from '../assets/images/hero-img03.png';
// import Doctors from './Doctors/Doctors';
// const Home = () => {
//     return <>
//     <>
//     <section className="hero__section pt-[60px] 2xl:h-[800px]">
//         <div className="container">
//             <div className="flex-flex-col lg:flex-row gap-[90px] items-center justify-between">
//                 {/* -----hero content----- */}
//             <div>
                
//             <div className="lg:w-[570px]">
//                 <h1 className="text-[36px] leading-[46px] text-black font-[500] md:text-[60px] md:leading-[70px]">
//                     Skip the Wait, Schedule Online.
//                 </h1>
//                 <p className="text__para">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
//                 <button className="btn">Request an Appointment</button>
//             </div>
            
//             {/* -----hero content----- */}
//             {/* -----hero counter ----- */}
//             <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                
//                 <div>
//                     <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700px] text-black">
//                         30+
//                     </h2>
//                     <span className="w-[100px] h-2 bg-accent rounded-full block mt-[-14px]"></span>
//                     <p className="text__p">Years of Experience</p>
//                 </div>
//                 <div>
//                     <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700px] text-black">
//                         15+
//                     </h2>
//                     <span className="w-[100px] h-2 bg-purple rounded-full block mt-[-14px]"></span>
//                     <p className="text__para">Clinic Location</p>
//                 </div>
//                 <div>
//                     <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700px] text-black">
//                         100%
//                     </h2>
//                     <span className="w-[100px] h-2 bg-skyblue rounded-full block mt-[-14px]"></span>
//                     <p className="text__para">Patient Satisfaction</p>
//                 </div>
//             </div>
//             <div className="flex gap-[30px] justify-end">
//                 <div>
//                     <img className="w-full" src={heroImg1} alt=""/>
//                 </div>
//                 <div className="mt-[30px]">
//                     <img src={heroImg2} alt="" className="w-full mb-[30px]"/>
//                     <img src={heroImg3} alt="" className="w-full "/>
//                 </div>
//             </div>
           
            
         
//         </div>   

         
            
//         </div>
//         </div>

//     </section>
//     </>
//     </>
// };
// export default Home;
// import React from "react";
// import { Link } from "react-router-dom";
// import {BsRightArrow} from "react-icons/bs";
// import icon1 from '../assets/images/icon01.png';
// import heroImg1 from '../assets/images/hero-img01.png';
// import heroImg2 from '../assets/images/hero-img02.png';
// import heroImg3 from '../assets/images/hero-img03.png';

// const Home = () => {
//     return (
//         <>
//         <section className="hero__section pt-[60px] 2xl:h-[600px]">
//             <div className="container mx-auto px-4">
//                 <div className="flex flex-col lg:flex-row items-center justify-between gap-[30px]">
//                     {/* Hero content */}
//                     <div className="lg:w-1/2">
//                         <h1 className="text-[36px] leading-[46px] text-black font-[500] md:text-[60px] md:leading-[70px]">
//                             Skip the Wait, Schedule Online.
//                         </h1>
//                         <p className="mt-4 text-[16px] text-gray-700">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//                         </p>
//                         <button className="btn mt-4 bg-blue-500 text-white py-2 px-4 rounded-[100px]">
//                             Request an Appointment
//                         </button>
//                     </div>

//                     {/* Hero images */}
//                     {/* <div className="lg:w-1/2 flex flex-col gap-[30px] h-[350px]">
//                         <img className="w-full" src={heroImg1} alt="Doctor"/>
//                     </div> */}
//                 </div>

//                 {/* Hero counter */}
//                 <div className="mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
//                     <div>
//                         <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black">
//                             30+
//                         </h2>
//                         <span className="w-[100px] h-2 bg-accent rounded-full block mt-[-14px]"></span>
//                         <p className="text-[16px] text-gray-700">Years of Experience</p>
//                     </div>
//                     <div>
//                         <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black">
//                             15+
//                         </h2>
//                         <span className="w-[100px] h-2 bg-purple rounded-full block mt-[-14px]"></span>
//                         <p className="text-[16px] text-gray-700">Clinic Locations</p>
//                     </div>
//                     <div>
//                         <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black">
//                             100%
//                         </h2>
//                         <span className="w-[100px] h-2 bg-skyblue rounded-full block mt-[-14px]"></span>
//                         <p className="text-[16px] text-gray-700">Patient Satisfaction</p>
//                     </div>
//                     <div className="w-full lg:w-1/2 flex flex-row items-start gap-5">
//                             <div className="w-1/2 flex flex-col gap-5">
//                                 <img src={heroImg2} alt="" className="w-full"/>
//                                 <img src={heroImg3} alt="" className="w-full"/>
//                             </div>
//                             <div className="w-1/2 mt-[30px]">
//                                 <img className="w-full" src={heroImg1} alt=""/>
//                             </div>
//                         </div>
//                 </div>
//             </div>
//         </section>
        // <section>
        //     <div className="container">
        //         <div className="lg:w-[470px] mx-auto">
        //             <h2 className="heading text-center">
        //                 Providing the best medical services
        //             </h2>
        //             <p className="text__para text-center">
        //                 World class care for everyone. Our health System offers unmatched expert health care.
        //             </p>
        //         </div>
        //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
        //             <div className="py-[30px] px-5">
        //                 <div className="flex items-center justify-center">
        //                     <img src={icon1} alt="" />
        //                 </div>
        //                 <div className="mt-[30px]">
        //                     <h2 className="text-[26px] leading-9 text-black font-[700] text-center">
        //                         Find a Doctor
        //                     </h2>
        //                     <p className="text-[16px] leading-7 text-neutral-dark font-[400] mt-4 text-center">
        //                     World class care for everyone. Our health System offers unmatched expert health care.
        //                     </p>
        //                     <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none">
        //                         <BsRightArrow/>
        //                     </Link>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
//         </>
//     );
// };

// export default Home;
// import React from "react";
// import { Link } from "react-router-dom";
// import { BsRightArrow } from "react-icons/bs";
// import icon1 from '../assets/images/icon01.png';
// import heroImg1 from '../assets/images/hero-img01.png';
// import heroImg2 from '../assets/images/hero-img02.png';
// import heroImg3 from '../assets/images/hero-img03.png';

// const Home = () => {
//     return (
//         <>
//             <section className="hero__section pt-[60px] 2xl:h-[800px]">
//                 <div className="container mx-auto px-4">
//                     <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[30px]">
//                         {/* Hero content */}
//                         <div className="lg:w-1/2">
//                             <h1 className="text-[36px] leading-[46px] text-black font-[500] md:text-[60px] md:leading-[70px]">
//                                 Skip the Wait, Schedule Online.
//                             </h1>
//                             <p className="mt-4 text-[16px] text-gray-700">
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//                             </p>
//                             <button className="btn mt-4 bg-blue-500 text-white py-2 px-4 rounded-[100px]">
//                                 Request an Appointment
//                             </button>

//                             {/* Hero counter */}
//                             <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
//                                 <div>
//                                     <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black">
//                                         30+
//                                     </h2>
//                                     <span className="w-[100px] h-2 bg-accent rounded-full block mt-[-14px]"></span>
//                                     <p className="text-[16px] text-gray-700">Years of Experience</p>
//                                 </div>
//                                 <div>
//                                     <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black">
//                                         15+
//                                     </h2>
//                                     <span className="w-[100px] h-2 bg-purple rounded-full block mt-[-14px]"></span>
//                                     <p className="text-[16px] text-gray-700">Clinic Locations</p>
//                                 </div>
//                                 <div>
//                                     <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black">
//                                         100%
//                                     </h2>
//                                     <span className="w-[100px] h-2 bg-skyblue rounded-full block mt-[-14px]"></span>
//                                     <p className="text-[16px] text-gray-700">Patient Satisfaction</p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Hero images */}
//                         <div className="lg:w-1/2 flex flex-col gap-[30px]">
//                         <img className="w-full mt-[30px]" src={heroImg1} alt=""/>
//                             <div className="flex flex-row gap-[30px]">
//                                 <img className="w-1/2" src={heroImg2} alt=""/>
//                                 <img className="w-1/2" src={heroImg3} alt=""/>
//                             </div>
                           
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* <section className="mt-[70px]">
//                 <div className="container mx-auto px-4">
//                     <div className="lg:w-[470px] mx-auto text-center">
//                         <h2 className="heading">Providing the best medical services</h2>
//                         <p className="text__para">
//                             World class care for everyone. Our health System offers unmatched expert health care.
//                         </p>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
//                         <div className="py-[30px] px-5">
//                             <div className="flex items-center justify-center">
//                                 <img src={icon1} alt=""/>
//                             </div>
//                             <div className="mt-[30px] text-center">
//                                 <h2 className="text-[26px] leading-9 text-black font-[700]">Find a Doctor</h2>
//                                 <p className="text-[16px] leading-7 text-neutral-dark font-[400] mt-4">
//                                     World class care for everyone. Our health System offers unmatched expert health care.
//                                 </p>
//                                 <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none">
//                                     <BsRightArrow/>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section> */}
//         </>
//     );
// };

// export default Home;

