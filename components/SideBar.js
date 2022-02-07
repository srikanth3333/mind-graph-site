import Link from 'next/link';
import { useRouter } from "next/router";
import React from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";

const navItems = [
    {name:"Artificial Intelligence", link:"contact"},
    {name:"DATATIZATION", link:"contact"},
    {name:"DIGITALIZATION", link:"contact"},
    {name:"AUTOMATION", link:"contact"},
    {name:"ENTERPRISE SOLUTIONS", link:"contact"},
    {name:"About Us", link:"/about"},
    {name:"Contact Us", link:"/contact"}    
]

function SideBar({status}) {

  const router = useRouter()

  return (
      <>
        <div className="sidebar">
            <div className="d-flex justify-content-end">
                <IoIosCloseCircle className="hover" onClick={() => status(false)} color="#fff" size={35} />
            </div>
            <div className=''>
                {navItems.map((navItem,i) => (
                    <div className="border-sidebar py-3" key={i}>
                        <IoArrowForward size={28} color="#FF6647" className="sidebar-nav-icon" />
                        <Link href={`${navItem.link}`} onClick={() => status(false)}>
                            <a className={router.pathname.includes(navItem.name) ? 'sidebar-link s-active' : 'sidebar-link'}>{navItem.name}</a>
                        </Link>
                    </div> 
                ))}
            </div>
        </div>
      </>
  );
}

export default SideBar;
