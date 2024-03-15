'use client'
import React from 'react'; 
import PageLayout from './pageLayout';
import useStore from './Store/store';
import HomeDetailPage from './Component/HomeDetailPage';

const MainPage: React.FC = () => {
  const color = useStore((state) => state.color); 

  return ( 
    <PageLayout color={color}>
      <HomeDetailPage /> 
    </PageLayout>
  );
};
export default MainPage;


//<PageLayout color={color}>
