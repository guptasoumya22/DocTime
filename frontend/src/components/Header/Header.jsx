import React from "react";
import { useEffect, useRef } from "react";
import {NavLink, Link} from 'react-router-dom';
import logo from '../../assets/images/loge.png';
import userImg from '../../assets/images/user.png';
import {BiMenu} from "react-icons/bi";
const navLinks = [
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/doctors',
        display:'Find a Doctor'
    },
    {
        path:'/Services',
        display:'Services'
    },
    {
        path:'/contact',
        display:'Contact'
    }
]
const Header = () => {
    const headerRef=useRef(null);
    const menuRef=useRef(null);
    const handleStickyHeader=()=>{
        window.addEventListener('scroll', ()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky__header')
            }else{
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }
    useEffect(()=>{
        handleStickyHeader()
        return ()=> window.removeEventListener('scroll', handleStickyHeader)
    })

    const toggleMenu=()=> menuRef.current.classList.toggle('show__menu')
    return (
        <header className="header flex items-center" ref={headerRef}>
            <div className="container">
                <div className="flex items-center justify-between">
                    <div>
                        <img src={logo} alt="" />
                    </div>

                    {/* -------menu------- */}
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className="menu flex items-center gap-[2.7rem]">
                            {
                                navLinks.map((Link,index)=><li key={index}>
                                    <NavLink to={Link.path} className={navClass=> navClass.isActive ? 'text-[#036c5f] text-[16px] leading-7 font-[600]'
                                     : 'text-textColor text-[16px] leading-7 font-[500]'}>{Link.display}</NavLink>
                                </li>)
                            }
                        </ul>
                    </div>

                    {/* --------nav right------- */}
                    <div className="flex items-center gap-4">
                        <div className="hidden">
                            <Link to ='/'>
                                <figure className="w-[35px] h-[35px] rounded-full">
                                    <img src={userImg} className="w-full rounded-full" alt="" />
                                </figure>
                            </Link>
                        </div>

                        <Link to='/login'>
                            <button className="bg-primary py-2 px-6 text-white font-[600] h-[45px] flex items-center justify-center rounded-[70px]">Login</button>
                        </Link>

                        <span className="md:hidden" onClick={toggleMenu}>
                            <BiMenu className='w-6 h-6 cursor-pointer' />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
};
export default Header;