import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Junseong Lee (Jun) </h2>
        <p><a href="mailto:junseong.lee652@gmail.com">junseong.lee652@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Jun. I am currently studying Finance + Data Science + Computer Science at <a href="https://illinois.edu">University of Illinois</a>. My main interests include cloud computing solutions, computer networks and systems architecture, and full stack development.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Jun Lee <Link to="/">https://www.linkedin.com/in/junseong-lee/</Link>.</p>
    </section>
  </section>
);

export default SideBar;
