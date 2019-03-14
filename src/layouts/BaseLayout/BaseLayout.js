import './index.css';

import React from 'react';
import Helmet from 'react-helmet';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ThemeProvider from '../../components/ThemeProvider';

export default function TemplateWrapper({
  children,
  title,
  description,
  image,
  audio,
}) {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image} />}
        {audio && <meta property="og:audio" content={audio} />}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="google-site-verification"
          content="hBKd1L9FnkX5cAEYpx9nduhBRIDvwQo7NHy-5JMQVkU"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css"
          type="text/css"
        />
      </Helmet>
      <main>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </main>
    </div>
  );
}
