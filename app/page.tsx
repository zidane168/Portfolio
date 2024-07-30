'use client'
import React from 'react'; 
import PageLayout from './pageLayout'; 
import HomeDetailPage from './Component/HomeDetailPage';
import { SpeedInsights } from '@vercel/speed-insights/next';

const MainPage: React.FC = () => { 

  return ( 
    <PageLayout >
      <HomeDetailPage /> 
      <SpeedInsights />
    </PageLayout>
  );
};
export default MainPage;

 
