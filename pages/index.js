import React from 'react';
import ImageSlider from '../components/ImageSlider';
import { IoArrowForward, IoHeartSharp } from 'react-icons/io5';
import Footer from '../components/Footer';
import Image from 'next/image';
import Script from 'next/script';



export default function Home() {
  
  return (
   <div className="page">
      <ImageSlider />
      <section className="video pb-0">
      <div className="roundedcircle_left"></div>
        {/* <Image src="Ellipse1.png" className="shape" /> */}
        <div className="container-fluid">
          <div className="row align-items-center">
              <div className="col-lg-7 position-relative">
                <div className="main-video">
                  <video width="100%" height="100%" autoPlay="autoplay" controls>
                    <source src="main-video.mp4" type="video/mp4" />
                    <source src="main-video.mp4" type="video/ogg" />
                      Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="col-lg-5">
                <p>We know your success depends on being prepared for it. At Mindgraph, we collaborate with you to look up and see the future with our agile, people-centric, and ROI-able Intelligent Enterprise solutions. Our best-in-className solutions utilize Artificial Intelligence, Data Innovation, and Visual Analytics to prepare and strategically transform the enterprise for an inevitable shift to come. Because when you do that, you have a chance to greet the future on your terms</p>
              </div>
          </div>
        </div>
      </section>
      <section className="meet">
        <div className="roundedcircle_left"></div>
          <div className="container-fluid">
            <div className="roundedcircle_right"></div>
              <h2>Meet A-D-D-A-S</h2>
              <p className="text-title" style={{position:'relative',zIndex:9999}}>Our state-of-the-art platform-driven enterprise transformation solutions</p>
              <div className="row">
                <div className="col-lg-2">
                    <Image src="ai.png" className="Image-fluid" alt="" />
                    <div className="text-box">
                      <h5>ARTIFICIAL INTELLIGENCE </h5>
                      <p className="text-box-text">Capture lasting value from AI at the enterprise level by reimaging the core processes. Deliver great customer experiences and become ‘smarter’ from insights into products and business operations, while able to comprehend and trust output created by the ML algorithms.</p>
                      <IoArrowForward size={40} color="#FF6647" className="bottom-icon" />
                    </div>
                </div>
                <div className="col-lg-2">
                    <Image src="data.png" className="Image-fluid" alt="" />
                    <div className="text-box">
                      <h5>DATATIZATION</h5>
                      <p className="text-box-text">Unlock the possibilities and opportunities hidden away in the tremendous amount of data. Use data in a combination of scientific and behavioral principles to draw patterns and enrich businesses with digital insights, enabling them to evolve in a customer-centric economy.</p>
                      <IoArrowForward size={40} color="#FF6647" className="bottom-icon" />
                    </div>
                </div>
                <div className="col-lg-2">
                    <Image src="digi.png" className="Image-fluid" alt="" />
                    <div className="text-box">
                      <h5>DIGITALIZATION</h5>
                      <p className="text-box-text">Accelerating the shift to digital requires creating a digital roadmap that defines the trajectory for transformation and value creation. Implement an insight-driven, agile working process to prioritize and rapidly develop solutions to meet the digital roadmap with a plan for organization change management.</p>
                      <IoArrowForward size={40} color="#FF6647" className="bottom-icon" />
                    </div>
                </div>
                <div className="col-lg-2">
                    <Image src="auto.png" className="Image-fluid" alt="" />
                    <div className="text-box">
                      <h5>AUTOMATION</h5>
                      <p className="text-box-text">Design & Implement the simplified business process with necessary process automation and intelligence using AI to run the process in optimal form with predictive knowledge of business outcomes</p>
                      <IoArrowForward size={40} color="#FF6647" className="bottom-icon" />
                    </div>
                </div>
                <div className="col-lg-2">
                    <Image src="ai.png" className="Image-fluid" alt="" />
                    <div className="text-box">
                      <h5>Enterprise SOLUTIONS & PRODUCTS</h5>
                      <p className="text-box-text">Our engineering talent pool and vibrant product innovation culture help build products and experiences that enable traditional organizations to imagine new intricacies of digital business models and build sustainable transformation.</p>
                      <IoArrowForward size={40} color="#FF6647" className="bottom-icon" />
                    </div>
                </div>
              </div>
          </div>
      </section>
      <section className="automation pt-0">
        <div className="container-fluid">
          <h2>AUTOMATION</h2>
          <div className="row  align-items-stretch mt-5 color-row p-5">
            <div className="col-lg-6">
                <div className="main-video">
                    <video width="100%" height="100%" autoPlay="autoplay" controls>
                      <source src="video-2.mp4" type="video/mp4" />
                      <source src="video-2.mp4" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="col-lg-6">
              <h3>Harnessing automation in combination with artificial intelligence for a new future</h3>
              <p className="mt-5">Everything is connected, everything is creating data and all of that data will be used to power the future of customer experience or optimize business operations</p>
              <p className="mt-5">Mindgrpah provides services in the core enterprise areas of customer experience, customer engagement, and operational efficiency. We help integrate various intelligent process automation tools and technologies including RPA with AI & machine learning-based models to drive enterprise-wide transformation.</p>
            </div>
            <div className="col-lg-12 mt-5 pb-5">
              <div className="row">
                <div className="col-lg-4 position-relative">
                  <Image src="a-1.png" className='a-icon' alt="" />
                  <h6>IIoT</h6>
                  <p>Plant Solutions and Services</p>
                  <p>ERP</p>
                  <p>Asset Performance Management</p>
                  <p>Digital twin</p>
                  <p>MES</p>
                  <p>Historian</p>
                  <IoArrowForward size={40} className="icon-arrow" />
                </div>
                <div className="col-lg-4 position-relative">
                  <Image src="a-2.png" className='a-icon' alt="" />
                  <h6>Digital Manufacturing</h6>
                  <p>Build a resilient, adaptive, and intelligent neural manufacturing enterprise</p>
                  <p>The impact of digital technologies on the manufacturing industry will create a value chain that operates like a neural network – an intensely networked set of collaborative partners aligned to a purpose-driven ecosystem.</p>
                  <IoArrowForward size={40} className="icon-arrow" />
                </div>
                <div className="col-lg-4 position-relative">
                  <Image src="a-3.png" className='a-icon' alt="" />
                  <h6>RPA</h6>
                  <p>Robotic Process Automation (RPA) is transforming the world of business applications from simple, back-office task automation to handling complex, real-time business processes. Coupling RPA with a blend of AI technologies, such as computer vision, speech recognition, and Natural language processing, organisations can automate higher-order tasks that in the past require perceptual and judgment capabilities of a human.</p>
                  <IoArrowForward size={40} className="icon-arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="research" style={{backgroundImage: "url('research.png')"}}>
          <div className="aoim_main">
            <div className="aoim_aimanagement">
              <h4>Automation of <br /> inventory <br /> Management</h4>
              {/* <a href="https://mind-graph.com/demo3/automation_one" className="explore">Explore</a> */}
              <button className="explore">
                <p className="m-0">Explore</p>
                <IoArrowForward size={35} className="ms-4 btn-icon" />
              </button>
            </div>
          </div>
      </section>
      <section className="testimonials">
      <div className="roundedcircle_right"></div>
      <div className="roundedcircle_left"></div>
          <div className="container-fluid">
            <div >
              <IoHeartSharp style={{position: "relative",zIndex:9999}} className="heart-icon" color="#FF6647" size={60} />
              <h2 style={{position: "relative",zIndex:9999}}>CONTRIBUTING TO 50+ CUSTOMER SUCCESS STORIES</h2>
            </div>
            <div className="row mt-5">
              <div className="col-lg-3">
                <div className="card">
                  <div className="card-body py-5">
                      <Image src="testi.png" className="testi-icon" alt="" />
                      <p className="testi-text">Good though process bringing more edge to data driven innovstion</p>
                      <p className="testi-sub-text"><b>-Banking Customer</b></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card">
                  <div className="card-body py-5">
                      <Image src="testi.png" className="testi-icon" alt="" />
                      <p className="testi-text">Thinking beyound organizations boundaries for AI solutions</p>
                      <p className="testi-sub-text"><b>- Transport Customer</b></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card">
                  <div className="card-body py-5">
                      <Image src="testi.png" className="testi-icon" alt="" />
                      <p className="testi-text">Good solutions that supported the cost and risk metrics management of the supply chain management.</p>
                      <p className="testi-sub-text"><b>-Pharma Customer</b></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      <Footer />
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous" />
   </div>
  )
}
