import React from "react";
import { Link} from "react-router-dom";
import logo from "../../assets/images/loge.png";
import {RiLinkedinFill} from 'react-icons/ri';
import { AiFillGithub,AiOutlineInstagram } from "react-icons/ai";
const socialLinks = [
    {
        path:"https://github.com/guptasoumya22",
        icon:<AiFillGithub className="group-hover:text-white w-4 h-5"/>
    },
    {
        path:"https://www.instagram.com/soumya__22/",
        icon:<AiOutlineInstagram className="group-hover:text-white w-4 h-5"/>
    },
    {
        path:"https://www.linkedin.com/in/soumya-gupta-522a02237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        icon:<RiLinkedinFill className="group-hover:text-white w-4 h-5"/>
    },
];

const quickLink01=[
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/",
        display: "About Us",
    },
    {
        path:"/services",
        display:"Sevices",
    },
    {
        path:"/",
        display:"Blog",
    },
];

const quickLink02=[
    {
        path:"/find-a-doctor",
        display:"Find a Doctor",
    },
    {
        path:"/",
        display:"Request an Appointment", 
    },
    {
        path:"/",
        display:"Find a Location", 
    },
    {
        path:"/",
        display:"Get a Opinion", 
    }
];

const quickLink03=[
    {
        path:"/",
        display:"Donate", 
    },
    {
        path:"/contact",
        display:"Contact Us", 
    } ,
];

const Footer = () => {
    const year=new Date().getFullYear();
    return (
        <footer className="pb-16 pt-10">
            <div className="container">
                <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
                    <div>
                        <img src={logo} alt=""/>
                        <p className="text-[16px] leading-7 font-[400] text-neutral ">Copyright © {year} developed by 
                        Soumya Gupta all right reserved</p>
                   
                    <div className="flex items-center gap-3.5 mt-4 ">
                        {socialLinks.map((link,index) => (
                            <Link to={link.path} key={index} className="w-9 h-9 border border-solid border-[#181A1E]
                            rounded-full flex items-center justify-between group hover:bg-primary hover:border-none "
                            ><span className="ml-2">{link.icon}</span></Link>
                        ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-black">Quick Links
                        </h2>
                        <ul>
                            {quickLink01.map((item, index) => <li key={index} className="mb-4">
                                <Link to={item.path} className="text-[16px] leading-7 font-[400] text-neutral">{item.display}</Link>
                            </li>)}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-black">I want to:
                        </h2>
                        <ul>
                            {quickLink02.map((item, index) => <li key={index} className="mb-4">
                                <Link to={item.path} className="text-[16px] leading-7 font-[400] text-neutral">{item.display}</Link>
                            </li>)}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-black">Support
                        </h2>
                        <ul>
                            {quickLink03.map((item, index) => <li key={index} className="mb-4">
                                <Link to={item.path}
                                className="text-[16px] leading-7 font-[400] text-neutral">{item.display}</Link>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};
export default Footer;