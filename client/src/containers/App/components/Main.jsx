import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import Footer from './Footer';
import Header from './Header';

const Main = ({ children }) => (
  <main>
    <Header />
    <Container className="mt-3">
      {children}
    </Container>
    <Footer />
  </main>
);

Main.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Main;
