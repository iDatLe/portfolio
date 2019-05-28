import React from 'react';
import Card from './Card/Card';
import './Main.scss';

const Main = () => {
  return(
    <main className="home__main">

      <div className="home__main--container">
        <div className="home__main--project">
          Projects
        </div>

        <Card />
      </div>

    </main>

  )
}

export default Main;