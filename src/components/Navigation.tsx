import React, { useState } from 'react';

import './Navigation.css';

function Navigation(props: any) {
  const { mobile } = props;
  const [open, setOpen] = useState(true)
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
      <div className={`Navigation-Container ${open && 'Open'}`}>
        { sections.map(s => navItem(s.text, s.linkId))}
        {/* { mobile && <button id='NavigationToggle' onClick={e => setOpen(!open)}><img className='Hamburger' alt="Open Navigation" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABaklEQVR4Xu2aTUoDQRCFv2yNP9cInsCtbkWCl9EraE4jwWXIVo8gXiIkxL0URNBON3Yyq6p6s00z9Hv1VVdPpUYkf0bJ9SMDREByB5QCyQHQIagUUAokd0Ap0ABgAjwBN8CZc0i+gCXwAHyUWmoEmPh34MK58HL7a+CqNKFmwAswDSb+R8681FYzYBMA+1b8tqW2mgG2aByUgC4DDJO7oAZYet//1pbpEFztDsHP/wyw360SPO/K4KlzGgz7BfAI/BFvunQRch7dwdsXAYMtdP4CEeA8gIO3LwIGW+j8BS0CLoEZcA2cONd4cD/AxL8B586FH90PeAVug4k/qB9gyHjHXv2AhgPqB6gfUHwSt8qg+gFBq8CeLF2Fs0S6pVMEiIDkDigFkgPQ/F9A/QD1A2LmRtd8gPoBmg/QfEDIISnNB2g+oFLZdBWOWe77VYmAfq9irhQBMePar0oE9HsVc6UIiBnXflXpCfgGC8dCQbbkoGgAAAAASUVORK5CYII="/></button>} */}
      </div>
    </nav>
  );
}

export default Navigation;
