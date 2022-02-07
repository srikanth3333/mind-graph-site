import React from 'react';
import SideBar from './SideBar';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

function Header({title,image,height}) {

  const[open,setOpen] = React.useState(false)

  return (
      <>
        <div className="py-3 header shadow-lg fixed-top">
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between">
                    <Link href="/">
                        <Image src={"logo.png"} className="logo" alt="" />
                    </Link>
                    <div>
                        <Link href="/">
                            <Image src="home.png" className="icon icon-1 me-4" alt="" />
                        </Link>
                        {/* <Image src="nav.png" className="icon" alt="" /> */}
                        <FaBars size={30} onClick={() => setOpen(true)} className="nav-icon" color="#fff"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-image-box" style={{backgroundImage:`url(${image})`,minHeight:`${height}vh`}}>
            <div className="container-fluid text-center">
                <h5>{title}</h5>
            </div>
        </div>
        {
            open 
            ?
                <SideBar status={setOpen} />
            :
            null
        }
      </>
  );
}

export default Header;
