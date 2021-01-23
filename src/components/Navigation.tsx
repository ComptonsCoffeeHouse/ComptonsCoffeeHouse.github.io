import React from 'react';
import { useMediaQuery } from 'react-responsive';

import './Navigation.css';

function Navigation() {
  
  const mobile = useMediaQuery({maxWidth: 700});
  const navItem = (text: string, linkId: string) => {
    return <a className="Nav-Link" href={`#${linkId}`} key={text}>{text}</a>
  }

  const sections = [
    {
      text: 'Hours',
      linkId: 'Hours'
    },
    {
      text: 'Location',
      linkId: 'Address'
    },
    {
      text: 'About',
      linkId: 'About'
    },
  ];
  return (
    <nav id="Navigation">
      <div className="Navigation-Container">
        { mobile && <p>Hamburger</p>}
        {sections.map(s => navItem(s.text, s.linkId))}
      </div>
    </nav>
  );
}

export default Navigation;
