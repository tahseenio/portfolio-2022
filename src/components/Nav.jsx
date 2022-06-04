// TODO: What should the nav bar include?
// TODO: get a nav bar design UI
// TODO: animate my T logo
// TODO: after a certain point, nav bar gets hidden and on scroll up nav bar is shown

import { useEffect, useState } from 'react';
import { motion, useViewportScroll } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

import DarkModeSwitch from './ui/DarkModeSwitch';
import navLogo from '../components/assets/logo.svg';
import navLogoInverted from '../components/assets/logo_inverted.svg';

const Nav = () => {
  const links = ['Home', 'About', 'Projects', 'Resume', 'Contact'];
  const location = useLocation();

  const getURL = () => {
    let pathname = location.pathname;
    if (pathname === '/') {
      return 'Home';
    } else if (pathname === '/about') {
      return 'About';
    } else if (pathname === '/projects') {
      return 'Projects';
    } else if (pathname === '/resume') {
      return 'Resume';
    } else if (pathname === '/contact') {
      return 'Contact';
    }
  };

  const [selectedTab, setSelectedTab] = useState(() => getURL());

  // dark mode functions
  const [isOn, setIsOn] = useState(() => {
    if (localStorage.getItem('theme') === 'dark') {
      return true;
    } else return false;
  });

  if (isOn) {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }

  // hide nav on scroll
  const [navVisible, setNavVisible] = useState(true);

  const { scrollY } = useViewportScroll();

  const updateNavPosition = () => {
    if (scrollY?.current < scrollY?.prev) {
      setNavVisible(true);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setNavVisible(false);
    }
  };

  useEffect(() => {
    return scrollY.onChange(() => updateNavPosition());
  });

  const navAnimation = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 1, y: -80 },
  };

  return (
    <motion.div
      variants={navAnimation}
      animate={navVisible ? 'visible' : 'hidden'}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.3 }}
      className='nav__container'
    >
      <nav>
        <img
          src={isOn ? navLogoInverted : navLogo}
          className='nav__logo'
          alt='nav logo'
        />
        <ul className='nav__links'>
          {links.map((item) => (
            <Link
              to={item !== 'Home' ? `/${item.toLowerCase()}` : '/'}
              key={item}
              className='nav__link'
              onClick={() => setSelectedTab(item)}
            >
              {item}
              {item === selectedTab ? (
                <motion.div
                  layoutId='navLinksBackground'
                  className='selected'
                ></motion.div>
              ) : null}
            </Link>
          ))}
          <DarkModeSwitch setIsOn={setIsOn} isOn={isOn} />
        </ul>
      </nav>
    </motion.div>
  );
};

export default Nav;
