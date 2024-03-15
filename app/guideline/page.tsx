'use client'
import React from 'react'; 
import PageLayout from '../pageLayout';
import useStore from '../Store/store'; 
import GuideDetailPage from '../Component/GuideDetailPage';

const Guideline: React.FC = () => {
  const color = useStore((state) => state.color); 

  return ( 
    <PageLayout color={color}>
      <GuideDetailPage /> 
    </PageLayout>
  );
};
export default Guideline;


//<PageLayout color={color}>
