import React from 'react';
import './Home.scss';
import Footer from './Footer/Footer';
import Main from './Main/Main';

const Home = () => {

  return (
    <div className="home">
      
      <header className="home__header">
        <h2 className="home__header--name">Dat Le</h2>
      </header>

      <Main />
      <Footer />
    </div>
  )
}

export default Home;