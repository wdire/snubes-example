import React from 'react';
import { PageProps } from 'gatsby';
import Header from '../components/Header';
import Head from '../components/Head';

import '../styles/main.scss';

const Index = (props: PageProps) => {
  return (
    <>
      <Head />
      <Header />
    </>
  );
};

export default Index;
