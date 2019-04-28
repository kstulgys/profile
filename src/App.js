import React, { useEffect, useState } from 'react'
import Me from './me.jpeg'
import {
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaInstagram,
  FaLink
} from 'react-icons/fa'
import { Router, Link, Location } from '@reach/router'
import mvcAppImg from './img/vanilla-mvs.png'
import bookingAppImg from './img/booking-app.png'
import portfolioAppImg from './img/portfolio-app.png'

import './App.css'

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Content />
      <Footer />
    </div>
  )
}

export default App

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <Location>
            {({ location }) => (
              <>
                <li
                  className={`sidebar-item ${
                    '/' === location.pathname ? 'sidebar-item--active' : 'no'
                  } `}
                >
                  <Link to="/">Me</Link>
                </li>
                <li
                  className={`sidebar-item ${
                    '/About' === location.pathname
                      ? 'sidebar-item--active'
                      : 'no'
                  } `}
                >
                  <Link to="/About">About</Link>
                </li>
                <li
                  className={`sidebar-item ${
                    '/Portfolio' === location.pathname
                      ? 'sidebar-item--active'
                      : 'no'
                  } `}
                >
                  <Link to="/Portfolio">Portfolio</Link>
                </li>
                <li
                  className={`sidebar-item ${
                    '/Contact' === location.pathname
                      ? 'sidebar-item--active'
                      : 'no'
                  } `}
                >
                  <Link to="/Contact">Contact</Link>
                </li>
              </>
            )}
          </Location>
        </ul>
      </nav>
    </div>
  )
}

function Main() {
  return (
    <section className="hero">
      <img src={Me} alt="me" />
      <div className="hero-content">
        <h1>
          Passionate
          <br />
          Frontend Engineer
        </h1>
        <p>
          I'm Karolis - an ordinary man who learned he is capable of extra
          ordinary things
        </p>
        <a
          href="https://github.com/kstulgys"
          target="_blank"
          className="btn btn--white btn--animated"
        >
          Hire me
        </a>
      </div>
    </section>
  )
}

const portfolioItems = [
  {
    title: 'Hotel booking website',
    paragraph: 'Pure HTML and CSS hotel booking site',
    git: 'https://github.com/kstulgys/booking-app-css',
    live: 'https://hotel-booking-app-css.netlify.com/',
    img: bookingAppImg,
    tile: 'tall'
  },
  {
    title: 'Comming next',
    paragraph: 'Work in progress',
    git: '',
    live: '',
    img: 'https://source.unsplash.com/random/500x500',
    tile: 'medium-1'
  },
  {
    title: 'Comming next',
    paragraph: 'Work in progress',
    git: '',
    live: '',
    img: 'https://source.unsplash.com/random/500x500',
    tile: 'medium-2'
  },
  {
    title: 'Comming next',
    paragraph: 'Work in progress',
    git: '',
    live: '',
    img: 'https://source.unsplash.com/random/500x500',
    tile: 'small'
  },
  {
    title: 'Portfolio web application',
    paragraph: 'Portfolio website powered by reactJs view library',
    git: 'https://github.com/kstulgys/profile',
    live: 'https://imkarolis.netlify.com/',
    img: portfolioAppImg,
    tile: 'long'
  },
  {
    title: 'Search recipes web application',
    paragraph:
      'Pure vanilla js and MVC (model/view/controller) pattern web application',
    git: 'https://github.com/kstulgys/mvc-vanillajs-recipes-app',
    live: 'https://mvc-vanillajs-recipes-app.netlify.com/',
    img: mvcAppImg,
    tile: 'large'
  }
]

function PortfolioItem({ item: { img, title, paragraph, tile, git, live } }) {
  return (
    <div className={`portfolio-item ${tile}`}>
      <img className="portfolio-item__image" src={img} />
      <div className="portfolio-item__content">
        <h3>{title}</h3>
        <p>{paragraph}</p>
        <div className="portfolio-item__icons">
          <a href={git} target="_blank" className="portfolio-item__icon">
            <FaGithub size="2rem" />
          </a>
          <a target="_blank" href={live} className="portfolio-item__icon">
            <FaLink size="2rem" />
          </a>
        </div>
      </div>
    </div>
  )
}

const About = () => <h1>About</h1>
const Portfolio = () => (
  <div className="portfolio">
    <section className="portfolio-items">
      {portfolioItems.map((item, i) => {
        return <PortfolioItem key={i} item={item} />
      })}
    </section>
  </div>
)
const Contact = () => <h1>Contact</h1>

function Content() {
  return (
    <div className="content">
      <Router>
        <Main path="/" />
        <About path="/About" />
        <Portfolio path="/Portfolio" />
        <Contact path="/Contact" />
      </Router>
    </div>
  )
}

const media = [
  {
    url: 'https://linkedin.com/in/karolis-stulgys',
    icon: <FaLinkedin className="icon" />,
    first: 'first'
  },
  {
    url: 'https://github.com/kstulgys',
    icon: <FaGithub className="icon" />
  },
  {
    url: 'https://medium.com/karolis-stulgys',
    icon: <FaMedium className="icon" />
  },
  {
    url: 'https://www.instagram.com/karolis_stulgys',
    icon: <FaInstagram className="icon" />
  },
  {
    url: 'https://linkedin.com/in/karolis-stulgys',
    icon: <FaLinkedin className="icon" />
  },
  {
    url: 'https://github.com/kstulgys',
    icon: <FaGithub className="icon" />
  },
  {
    url: 'https://medium.com/karolis-stulgys',
    icon: <FaMedium className="icon" />
  },
  {
    url: 'https://www.instagram.com/karolis_stulgys',
    icon: <FaInstagram className="icon" />
  }
]

function Footer() {
  return (
    <div className="footer">
      <footer>
        <ul>
          {media.map(({ url, first, icon }, i) => {
            return (
              <li key={i} className={first}>
                <a href={url} target="_blank">
                  {icon}
                </a>
              </li>
            )
          })}
        </ul>

        {/* <div class="portfolio-grid">
      <div class="item first">
        <div class="card">
          Project-1
        </div>
      </div>
      <div class="item">
        <div class="card">Project-2</div>
      </div>
      <div class="item">
        <div class="card">Project-3</div>
      </div>

      <div class="item">
        <div class="card">Project-1</div>
      </div>
      <div class="item">
        <div class="card">Project-2</div>
      </div>
      <div class="item">
        <div class="card">Project-3</div>
      </div>
    </div>  */}
      </footer>
    </div>
  )
}
