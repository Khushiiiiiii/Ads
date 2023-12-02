// MainAd.js

import React from 'react';
import AdForm from './AdForm';
import AdSecondForm from './AdSecondForm';

const MainAd = () => {
  // Get the ID from the URL
  const urlParts = window.location.href.split('/');
  const adId = urlParts[urlParts.length - 1];

  return (
    <div>
      {adId === '1' ? <AdForm /> : null}
      {adId === '2' ? <AdSecondForm /> : null}
    </div>
  );
};

export default MainAd;
