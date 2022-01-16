import React from 'react';
import { PageProps } from 'gatsby';
import '../styles/main.scss';
import Header from '../components/Header';
import Head from '../components/Head';
import FormContainer from '../components/FormContainer';
import Features from '../components/Features';
import WhySnubes from '../components/WhySnubes';

const Index = (props: PageProps) => {
  return (
    <>
      <Head />
      <Header />
      <FormContainer />
      <Features />
      <WhySnubes />
    </>
  );
};

export default Index;
