import React from 'react';
import { PageProps } from 'gatsby';
import Header from '../components/Header';
import Head from '../components/Head';
import FormContainer from '../components/FormContainer';

import '../styles/main.scss';

const Index = (props: PageProps) => {
  return (
    <>
      <Head />
      <Header />
      <FormContainer />
    </>
  );
};

export default Index;
