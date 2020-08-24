import React, { Component } from 'react';
import homepageImage from './assets/home1.jpg'
import about from './assets/about.jpg'
import image1 from './assets/image-1.jpg'
import image2 from './assets/image-2.jpg'
import image3 from './assets/image-3.jpg'
import image4 from './assets/image-4.jpg'
import image5 from './assets/image-5.jpg'
import image6 from './assets/image-6.jpg'
import HTMLLogo from './assets/HTML5.png'
import CSS3Logo from './assets/CSS3.png'
import ReactLogo from './assets/React.png'
import NodejsLogo from './assets/nodejs.png'
import MongodbLogo from './assets/mongodb.png'
import JSLogo from './assets/javascript.png'
import Typist from 'react-typist';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import scrollToComponent from 'react-scroll-to-component';

var skills = [
  {
    name: "HTML 5",
    icon: HTMLLogo,
    value: 70,
    status: "success",
    color: "#E44D26"
  },
  {
    name: "CSS 3",
    icon: CSS3Logo,
    value: 60,
    status: "success",
    color: "#0170BA"
  },
  {
    name: "React js",
    icon: ReactLogo,
    value: 60,
    status: "success",
    color: "#61DBFB"
  },
  {
    name: "Javascript",
    icon: JSLogo,
    value: 60,
    status: "success",
    color: "#F0DB4F"
  },
  {
    name: "Node js",
    icon: NodejsLogo,
    value: 60,
    status: "success",
    color: "#83CE25"
  },
  {
    name: "Mongodb",
    icon: MongodbLogo,
    value: 60,
    status: "success",
    color: "#439744"
  },
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      showMobileMenu: false
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleHeaderScroll)
  }

  handleHeaderScroll = () => {
    var header = document.getElementById("header-bar")
    header.classList.toggle("sticky", window.scrollY > 0)
  }
  handleMenuToggle = () => {
    this.setState((prevState) => {
      return { showMobileMenu: !prevState.showMobileMenu }
    })
  }
  handleCloseMobileMenu = () => {
    this.setState({ showMobileMenu: false })
  }
  render() {
    var { showMobileMenu } = this.state
    return (
      <div className="App">
        <header className="header" id="header-bar">
          <div className="hamburger" onClick={() => this.handleMenuToggle()}>
            <div className="hamburger__line"></div>
            <div className="hamburger__line"></div>
            <div className="hamburger__line"></div>
          </div>
          <label className="header-logo">Portfolio</label>
          <div>
            <ul className="header-options">
              <li onClick={() => scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 1500 })}>Home</li>
              <li onClick={() => scrollToComponent(this.About, { offset: -70, align: 'top', duration: 1500 })}>About</li>
              <li onClick={() => scrollToComponent(this.Contact, { offset: 0, align: 'bottom', duration: 1500 })}>Contact</li>
              <li onClick={() => scrollToComponent(this.Skills, { offset: -70, align: 'top', duration: 1500 })}>Skills</li>
              <li onClick={() => scrollToComponent(this.Projects, { offset: -70, align: 'top', duration: 1500 })}>Experience</li>
            </ul>
          </div>
        </header>
        <section className={showMobileMenu ? "sideDrawer open" : "sideDrawer"}>
          <ul>
            <li onClick={() => scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 1500 })}>Home</li>
            <li onClick={() => scrollToComponent(this.About, { offset: -70, align: 'top', duration: 1500 })}>About</li>
            <li onClick={() => scrollToComponent(this.Contact, { offset: 0, align: 'bottom', duration: 1500 })}>Contact</li>
            <li onClick={() => scrollToComponent(this.Skills, { offset: -70, align: 'top', duration: 1500 })}>Skills</li>
            <li onClick={() => scrollToComponent(this.Projects, { offset: -70, align: 'top', duration: 1500 })}>Experience</li>
          </ul>
        </section>
        {showMobileMenu && <section className="blur-effect" onClick={() => this.handleCloseMobileMenu()}></section>}
        <section className="home" ref={(section) => { this.Home = section; }}>
          <img src={homepageImage} />
          <div className="home-typist">
            <Typist cursor={{ show: false }}>
              <label> Hello I'm </label>
              <label>Ahammed Shaqil </label>
              <label> I'm a Front End Web Developer<Typist.Delay ms={300} /> .</label>
              <Typist.Delay ms={300} />
              <a href="#" className="home-anchor">About me</a>
            </Typist>
          </div>
        </section>
        <section className="about-me" ref={(section) => { this.About = section; }}>
          <div className="section-header"><label>About me</label></div>
          <div className="content">
            <div className="content-left">
              <h3>I'm a Front End Developer</h3>
              Elit ut reprehenderit nisi ex officia voluptate labore anim sit. Officia tempor esse proident cillum voluptate officia sunt culpa. Aliquip velit amet tempor incididunt ad mollit non ullamco aliqua quis dolor. Voluptate proident commodo incididunt officia cillum.
              Sint magna anim reprehenderit excepteur. Veniam ex commodo elit aliquip nisi pariatur aliquip anim proident duis eu. Reprehenderit nisi pariatur exercitation culpa proident nulla ipsum deserunt labore cillum dolore sint. Exercitation non excepteur proident sunt. Lorem cillum labore commodo ut Lorem culpa mollit mollit. Sunt ullamco eu reprehenderit enim officia aliqua sit consequat esse incididunt laboris. Id quis aliquip labore amet.
            </div>
            <div className="content-right">
              <img src={about} />
            </div>
          </div>
        </section>
        <section className="black-container" ref={(section) => { this.Projects = section; }}>
          <div className="gallery-wrapper">
            <div className="section-header white-header"><label>Projects</label></div>
            <div className="gallery">
              <figure className="gallery__item gallery__item--1">
                <img src={image1} className="gallery__img" alt="Image 1" />
              </figure>
              <figure className="gallery__item gallery__item--2">
                <img src={image2} className="gallery__img" alt="Image 2" />
              </figure>
              <figure className="gallery__item gallery__item--3">
                <img src={image3} className="gallery__img" alt="Image 3" />
              </figure>
              <figure className="gallery__item gallery__item--4">
                <img src={image4} className="gallery__img" alt="Image 4" />
              </figure>
              <figure className="gallery__item gallery__item--5">
                <img src={image5} className="gallery__img" alt="Image 5" />
              </figure>
              <figure className="gallery__item gallery__item--6">
                <img src={image6} className="gallery__img" alt="Image 6" />
              </figure>
            </div>
          </div>
        </section>
        <section className="skills-container" ref={(section) => { this.Skills = section; }}>
          <div className="section-header skills-header"><label>Skills</label></div>
          {skills.map((item, i) => (
            <div key={i} className="skills-item">
              <label>
                <img src={item.icon} />
              </label>
              <Progress percent={item.value}
                theme={{
                  success: {
                    symbol: item.value + "%",
                    color: item.color,
                    trailColor: 'lightgrey',
                  }
                }}
                status={item.status}
              />
            </div>
          ))}
        </section>
        <section className="contact-container black-container" ref={(section) => { this.Contact = section; }}>
          <div className="section-header contact-header"><label>Contact me</label></div>
          <div className="contact-wrapper">
            <div className="contact-left">
              <div className="contact-left-item">
                <label>
                  <i className="material-icons contact-icon">location_on</i>
                </label>
                <label>Junglighat, Port Blair, Andaman and Nicobar Islands 744103</label>
                {/* 11°39'53.4"N 92°43'54.4"E */}
              </div>
              <div className="contact-left-item">
                <label>
                  <i className="material-icons contact-icon">local_phone</i>
                </label>
                <label>
                  +91 9531809616
              </label>
              </div>
              <div className="contact-left-item">
                <label>
                  <i className="material-icons contact-icon">email</i>
                </label>
                <label>
                  ahammedshaqil0@gmail.com
              </label>
              </div>
            </div>
            <div className="contact-right">
              <div className="contact-right-wrapper">
                <label>Say Hello</label>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea rows="6" placeholder="Message" />
                <a href="#" className="submit-btn">Send</a>
              </div>
            </div>
          </div>
          <span className="footer"> &#169; 2020 Ahammed Shaqil </span>
        </section>
      </div>
    );
  }
}

export default App;
