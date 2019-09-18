import React from 'react';

function AdBanner({link = ""}){


  return (
    <button className="button-normal" href={link}>Shop Now!</button>

  );
}

export default AdBanner;
