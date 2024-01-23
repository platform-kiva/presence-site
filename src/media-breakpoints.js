const size = {
    // +1 added to all values 
    mobileS: '321px',
    mobileM: '376px',
    mobileL: '431px',
    tablet: '769px',
    laptop: '1025px',
    laptopL: '1441px',
    desktop: '2561px'
  };
  
export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop}) and (min-resolution: 192dpi)`
  };