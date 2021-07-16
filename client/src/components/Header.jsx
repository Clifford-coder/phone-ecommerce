import React from 'react';

const Header = ({ name }) => (
  <h1 className="text-title mx-auto my-4">{name}</h1>
);

export const HeaderMd = ({ name }) => (
  <h3 className="text-title mx-auto my-4">{name}</h3>
);

export default Header;
