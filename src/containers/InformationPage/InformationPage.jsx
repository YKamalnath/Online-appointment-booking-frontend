import React from 'react';
import "./InformationPage.css"
import Header from "../../Pages/InfromationPage/Header";
import WhoCanUse from "../../Pages/InfromationPage/WhoCanUse";
import Services from "../../Pages/InfromationPage/Services";
import SuccessStories from "../../Pages/InfromationPage/SuccessStories";
import Questions from "../../Pages/InfromationPage/Questions";
import JoinCommunity from "../../Pages/InfromationPage/JoinCommunity";

const InformationPage = () => {
  return (
    <>
    <Header />
    <div className="main-home-container">
    <WhoCanUse />
    <Services />
    <SuccessStories />
    <Questions />
    <JoinCommunity />

    </div>
    
      
    </>
  );
};

export default InformationPage;
