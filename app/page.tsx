'use client'
import React from 'react'; 
import PageLayout from './pageLayout'; 
import HomeDetailPage from './Component/HomeDetailPage';

const MainPage: React.FC = () => { 

  return ( 
    <PageLayout >
      <HomeDetailPage /> 
    </PageLayout>
  );
};
export default MainPage;


//<PageLayout color={color}>
