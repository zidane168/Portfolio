'use client'
import React from 'react'; 
import PageLayout from './pageLayout';
import useStore from './Store/store';
import HomePage from './Component/HomeDetailPage';

const MainPage: React.FC = () => {
  const color = useStore((state) => state.color); 

  return ( 
    <PageLayout color={color}>
      <HomePage /> 
    </PageLayout>
  );
};
export default MainPage;


//<PageLayout color={color}>
