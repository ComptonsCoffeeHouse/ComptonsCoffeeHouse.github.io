import React from 'react';

import './Address.css';

function Address() {
  return (
    <section id="Address">
      <h2>Location</h2>
      <div className="AddressContainer">
        <address>
          <a className="Address" target="_blank" rel="noreferrer" href="https://goo.gl/maps/qX7pHNrtavGphEDr6">
            <p>1910 Fillmore Street</p>
            <p>San Francisco, California</p>
          </a>
          <p><a className="PhoneNumber" href="tel:4154166173">415.416.6173</a></p>
        </address>
      </div>
    </section>
  );
}

export default Address;
