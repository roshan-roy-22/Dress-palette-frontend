import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import dress from '../assets/dress.png'
import user from "../assets/user.svg";
import logout from "../assets/logout.svg";
import Navbar from "./Navbar";
import { MdClose, MdMenu } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import { ShopContext } from "../Context/ShopConext";


const Header = () => {

  const [menuOpened, setmenuOpened] = useState(false);
  const toggleMenu =()=>{
    setmenuOpened(!menuOpened)
  }
  const {getTotalCartItems} =useContext(ShopContext);

  return (
    <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5 z-10">
      <div className="px-4 flexBetween py-3 max-xs:px-2 ">
        {/* Logo */}
        <div>
          <Link>
            <img className="scale-150 h-14" src={dress} height={100} width={100} alt="logo" />
          </Link>
        </div>
        {/* Navbar Desktop  */}
        <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15 "} />
        {/* {navbar mobile} */}
        <Navbar containerStyles={`${menuOpened ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300":"flex item-start flex-col gap-y-12 fixed top-20  p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"}`} />
        {/* buttons */}
        <div className="flexBetween sm:gap-x-6 bold-16"> 
          {
            !menuOpened?(<MdMenu className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/300 h-8 w-8 rounded-full hover:ring-secondary" onClick={toggleMenu}/>
            ):(
            <MdClose className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/300 h-8 w-8 rounded-full hover:ring-secondary" onClick={toggleMenu}/>)
          }
          <div className="flexBetween sm:gap-x-2">
            <NavLink to={"cart-page"} className={"flex"}>
              <FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full "/>
              <span className="relative flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14 -top-2">{getTotalCartItems()}</span>
            </NavLink>
           {localStorage.getItem("auth-token")?
            <NavLink onClick={()=>{localStorage.removeItem("auth-token");window.location.replace('/')}} to={'logout'} className={'btn_secondary_rounded flexCenter gap-x-2 medium-16 hidden'}>
              <img src={logout} height={19} width={19} alt="logout" />Logout</NavLink>:
              <NavLink to={'login'} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}>
                <img src={user} alt="userIcon" height={19} width={19}/>Login
              </NavLink>
           }
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
