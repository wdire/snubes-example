import React from 'react';
import '../styles/main.scss';
import Header from '../components/Header';
import Head from '../components/Head';
import FormContainer from '../components/FormContainer';
import Features from '../components/Features';
import WhySnubes from '../components/WhySnubes';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <>
      <Head />
      <Header />
      <FormContainer />
      <Features />
      <WhySnubes />
      <Reviews />
      <Footer />
    </>
  );
};

export default Index;
