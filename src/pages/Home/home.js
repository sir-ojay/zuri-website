import React from 'react'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import Button from "../../components/Buttons/button";

import Article from '../../components/Article/article'

const home = () => {
  return (
    <div>
      <Header />
       <Button />
      <div className="home-art1">
        <Article />
      </div>
      <Footer />
    </div>
  );
}

export default home