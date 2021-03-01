import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ titulo }) => {
  return <h1>{titulo}</h1>;
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};
export default Header;
