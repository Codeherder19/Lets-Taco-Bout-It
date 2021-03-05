import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <main className="landing-page">
        <img src="https://media.istockphoto.com/photos/spicy-homemade-beef-barbacoa-tacos-picture-id960337396?k=6&m=960337396&s=612x612&w=0&h=JHvHpv-7OmGIklZd1qWPsQ_OfwwKiheorszp143RVg8=" alt="3 street tacos on a plate"/>
        <p className="app-description">Welcome to Let's Taco 'Bout it, your somewhat useful taco recipe randomizer. On the next page you will have the choice to generate a taco at random, either a recipe that has been curated
        by the contributors with a well vetted flavor combination, or a WACKY taco where all of the ingredients are combined at random! Click the button below to get started on your road to flavor town!'
        </p>
        <Link to={'/RandomTaco'}>
          <button className="get-random">
            GET RANDOM!!!
          </button>
        </Link>
      </main>
    </div>
  )
}

export default HomePage;
