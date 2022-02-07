import React from 'react';
import { IoLogoFacebook,IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram,IoArrowForward } from 'react-icons/io5';
import Image from 'next/image';

function Footer() {
  return (
      <>
        <section className="blogs">
            
            <div className="container-fluid">
            <div className="roundedcircle_left"></div>
                <h2>AT MINDGRAPH</h2>
                <div className="row mt-5">
                    <div className="col-lg-3">
                        <div className="card">
                            <Image src="b-1.jpg" className="Image-top" alt="" />
                            <div className="card-body">
                                <p>Artificial Intelligence and the Future of Web Design</p>
                                <span>10 Apr 2021</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card">
                            <Image src="b-2.jpg" className="Image-top" alt="" />
                            <div className="card-body">
                                <p>Solution for clean look working space</p>
                                <span>05 Apr 2021</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card">
                            <Image src="b-3.jpg" className="Image-top" alt="" />
                            <div className="card-body">
                                <p>Enable joint learning (Human + Machines)</p>
                                <span>25 Mar 2021</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card">
                            <Image src="b-4.jpg" className="Image-top" alt="" />
                            <div className="card-body">
                                <p>Implement right technology solutions</p>
                                <span>05 Feb 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="footer">
        <div className="roundedcircle_right"></div>
            <div className="container-fluid">
                <div className="row w-100 row-footer">
                    <div className="col-lg-6">
                        <div className="mt-lg-5 p-lg-5">
                            <h4>GET IN TOUCH</h4>
                            <p className="my-4">Have any questions? Feel free to use the contact form below to get in touch with us. We will answer you as soon as possible!</p>
                            <h4 style={{fontSize:'2em'}}>Locations</h4>
                            <ul style={{paddingLeft:0}}>
                                <li>Bangalore, India</li>
                                <li>Bhubaneswar, India</li>
                                <li>Hyderabad, India</li>
                                <li>Kuala Lumpur, Malaysia</li>
                                <li>Singapore</li>
                                <li>Cincinnati, Ohio, USA</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h4>TAKE YOUR FIRST STEP</h4>   
                        <div className="card">
                            <div className="card-body p-4">
                                
                               <form action="">
                                   <div className="form-group">
                                       <input type="text" placeholder='Name' className="form-control"/>
                                   </div>
                                   <div className="form-group">
                                       <input type="text" placeholder='Email' className="form-control"/>
                                   </div>
                                   <div className="form-group">
                                       <input type="text" placeholder='Contact' className="form-control"/>
                                   </div>
                                   <div className="form-group">
                                       <textarea placeholder="Message" name="" id="" cols="30" rows="10" className="form-control"></textarea>
                                   </div>
                                   <div className="form-group">
                                        <button className="explore">
                                                <p className="m-0">Submit</p>
                                                <IoArrowForward size={35} className="ms-4 btn-icon" />
                                        </button>
                                   </div>
                               </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="path-box">
                </div>
            </div>
        </section>
        <section className="bottom-footer pt-0 pb-5">
            <div className="container-fluid">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-4 sm-text">
                        <Image src="logo.png" alt="" />
                    </div>  
                    <div className="col-lg-4 text-center sm-text">
                        <p className="mb-0">&copy; 2022 Mindgragh. All rights reserved.</p>
                    </div>
                    <div className="col-lg-4 text-lg-end sm-text">
                        <IoLogoFacebook size={40} className="me-4" />
                        <IoLogoTwitter size={40}className="me-4"/>
                        <IoLogoLinkedin  size={40}className="me-4"/>
                        <IoLogoInstagram size={40} />
                    </div>
                </div>
            </div>
        </section>
      </>
  );
}

export default Footer;
