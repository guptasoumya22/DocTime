import React from "react";
import about from '../../assets/images/about.png';
import aboutCard from '../../assets/images/about-card.png';
import { Link } from "react-router-dom";
const About = () => {
    return(
         <section>
        <div className="container">
            <div className="flex justify-betweengap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                    <img src={about} alt=""/>
                    <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-8%] md:right-[-15%] lg:right-[7%]">
                        <img src={aboutCard} alt=""/>
                    </div>
                </div>
            {/* ----about content---- */}
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                <h2 className="heading">Proud to be one of the nations best</h2>
                <p className="text__para">For 30 years in a row Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="test__para mt-[30px]">Our best is something we strive for each day, caring for our patients-not looking back at what we accomplished towards what we can do tomorrow. Providing the best. </p>
                <Link to ="/"><button className="btn">Learn More</button></Link>
            </div>
            </div>
        </div>
    </section>
    );
};
 export default About;