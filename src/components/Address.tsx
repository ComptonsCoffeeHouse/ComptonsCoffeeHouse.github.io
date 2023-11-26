import React from 'react';

import './Address.css';

function Address() {
  return (
    <section id="Address">
      <h2>Locations</h2>
      <div className="AddressContainer">
        <address>
          <a className="Address" target="_blank" rel="noreferrer" href="https://goo.gl/maps/qX7pHNrtavGphEDr6">
            <p className='StoreName'>Compton's Pacific Heights</p>
            <p>1910 Fillmore Street</p>
            <p>San Francisco, California</p>
          </a>
          <p><a className="PhoneNumber" href="tel:4154166173">415.416.6173</a></p>
        </address>
        <address>
          <a className="Address" target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/r2gq5qNFPPwpZCR1A">
            <p className='StoreName'>Compton's North Beach</p>
            <p>543 Columbus Avenue</p>
            <p>San Francisco, California</p>
          </a>
          <p><a className="PhoneNumber" href="tel:6282014198">628.201.4198</a></p>
        </address>
      </div>
    </section>
  );
}

export default Address;
