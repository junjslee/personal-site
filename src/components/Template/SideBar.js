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
        <h2>Tarun Bathini</h2>
        <p><a href="mailto:bathinitarun@gmail.com">bathinitarun@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Tarun. I like Tennis, Blockchain and Podcasts.
        I am a <a href="https://illinois.edu">University of Illinois</a> student, Vernon Hills High School Alumni, and
        the co-founder and CTO of <a href="https://tbath18.github.io/Scroll.github.io/">SCROLL</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Tarun Bathini <Link to="/">https://www.linkedin.com/in/tarunbathini/</Link>.</p>
    </section>
  </section>
);

export default SideBar;
