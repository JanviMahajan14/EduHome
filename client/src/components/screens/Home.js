import React, { useState } from 'react';
import baseUrl from '../../utils/baseUrl';
import hero from '../../utils/img/hero-img-1.svg'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Home = () => {
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  
  const sendFeedback = async (e) => {
      try {
          e.preventDefault();
          const res = await fetch(`${baseUrl}/feedback`, {
              method: "post",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email,
                query,
                name
              })
          })
          const data = await res.json()
          if (data.error) {
              throw new Error(data.error);
          }
          toast.success("Your Feedback is recorded!", {
          position: toast.POSITION.TOP_RIGHT,
          });
          setEmail("");
          setQuery("");
          setName("");
      }
      catch (error) {
        toast.error(error.message, { position: toast.POSITION.TOP_RIGHT });
      }
  }
  return ( 
    <>
    {/* <!-- ========================= hero-section start ========================= --> */}
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-10">
            <div className="hero-content">
              <h1>Virtual ClassRoom solutions with <span>EduHome</span></h1>

              <a href="#" class="main-btn btn-hover">Demo</a>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 offset-xxl-1">
            <div className="hero-image text-center text-lg-start">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- ========================= hero-section end ========================= --> */}

    {/* <!-- ========================= feature-section start ========================= --> */}
    <section id="features" className="feature-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-11">
            <div className="section-title text-center mb-60">
              <h2>
                Modern design <br className="d-block" />
                with EssNameential Features
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-feature">
              <div className="feature-icon color-1">
                <i className="lni lni-display"></i>
              </div>
              <div className="feature-content">
                <h4>One-on-One meetings</h4>
                <p>
                  Connect with your loved ones with Unite. Peer-to-peer
                  connection between two users.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-feature">
              <div className="feature-icon color-2">
                <i className="lni lni-customer"></i>
              </div>
              <div className="feature-content">
                <h4>Active Customer Feedback</h4>
                <p>
                  Get immediate feedback from customers with
                  <a href="#footer">Feeback forms</a>, supporting the concept of
                  Agile.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-feature">
              <div className="feature-icon color-3">
                <i className="lni lni-users"></i>
              </div>
              <div className="feature-content">
                <h4>Multiple Room Connections with Screen sharing options</h4>
                <p>
                  Join and connect with as many friends that you wish to
                  connect!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-feature">
              <div className="feature-icon color-2">
                <i className="lni lni-google"></i>
              </div>
              <div className="feature-content">
                <h4>Google Authentication</h4>
                <p>
                  Sign in with Google and connect with your loved ones, just by
                  one click!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-feature">
              <div className="feature-icon color-3">
                <i className="lni lni-bubble"></i>
              </div>
              <div className="feature-content">
                <h4>Persistent Text chat</h4>
                <p>
                  Join chat rooms and continue conversation before, after and
                  during the meet!
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-feature">
              <div className="feature-icon color-1">
                <i className="lni lni-calendar"></i>
              </div>
              <div className="feature-content">
                <h4>Schedule Meetings</h4>
                <p>
                  Schedule your meetings with Google Calendar API, and invite
                  people to join!
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
          >
            <div className="single-feature">
              <div className="feature-icon color-2">
                <i className="lni lni-rocket"></i>
              </div>
              <div className="feature-content">
                <h4>AI Bot</h4>
                <p>Keep your health in check with posture bot!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- ========================= feature-section end ========================= --> */}

    {/* <!-- ========================= service-section start ========================= --> */}
    <section id="service" className="service-section img-bg pt-100 pb-100 mt-150">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-10">
            <div className="section-title text-center mb-50">
              <h1>Main features</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-3 col-md-6">
            <div className="single-service">
              <div className="icon color-1">
                <i className="lni lni-display-alt"></i>
              </div>
              <div className="content">
                <h3>Video calling</h3>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="single-service">
              <div className="icon color-2">
                <i className="lni lni-bubble"></i>
              </div>
              <div className="content">
                <h3>Persistent Text Chat</h3>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="single-service">
              <div className="icon color-3">
                <i className="lni lni-calendar"></i>
              </div>
              <div className="content">
                <h3>Schedule Meet</h3>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="single-service">
              <div className="icon color-4">
                <i className="lni lni-rocket"></i>
              </div>
              <div className="content">
                <h3>AI Bot</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- ========================= service-section end ========================= --> */}
    
    {/* <!-- ========================= footer start ========================= --> */}
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7">
            <div className="section-title">
              <h2>Contact Us</h2>
              <p>janvimahajan336@gmail.com || Jammu, India</p>
            </div>
            <div className="newsletter-form-wrapper">
              <form>
                <input type="text" id="user-query" placeholder="Write Query" value={query}
                  onChange={(e) => setQuery(e.target.value)}/>
                <br /><br /><br />
                <input
                  type="email"
                  id="user-email"
                  placeholder="Email AddressName"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br /><br /><br />
                <input type="text" id="user-name" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}/>
                <button
                  className="main-btn btn-hover"
                  type="button"
                  onClick={(e) => sendFeedback(e)}
                >
                  Send Query
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-8">
            <div className="footer-menu">
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#service">Service</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-4">
            <div className="footer-social">
              <ul>
                <li>
                  <a href="#0"><i className="lni lni-facebook"></i></a>
                </li>
                <li>
                  <a href="#0"><i className="lni lni-linkedin"></i></a>
                </li>
                <li>
                  <a href="#0"><i className="lni lni-instagram"></i></a>
                </li>
                <li>
                  <a href="#0"><i className="lni lni-twitter"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* <!-- ========================= footer end ========================= --> */}
    </>  
  );
}
 
export default Home;