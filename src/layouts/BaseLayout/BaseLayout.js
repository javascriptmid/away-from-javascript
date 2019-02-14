import './index.css';

import React from 'react';
import Helmet from 'react-helmet';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ThemeProvider from '../../components/ThemeProvider';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Away from Javscript</title>
      <meta name="description" content="Away from Javascript Podcast" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css"
        type="text/css"
      />
    </Helmet>
    <body>
      <ThemeProvider>
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </body>
  </div>
);

export default TemplateWrapper;
