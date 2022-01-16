import React from 'react';

import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <>
      <Helmet>
        <title>Snubes Example</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        <meta property="og:title" content="Snubes Example" />
        <meta
          property="og:description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    </>
  );
};

export default Head;
