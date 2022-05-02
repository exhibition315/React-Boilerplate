import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { media } from './helper';

const Theme = ({ children }) => <ThemeProvider theme={{ ...media }}>{children}</ThemeProvider>;

Theme.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Theme;
