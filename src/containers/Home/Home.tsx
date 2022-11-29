import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="px-4 mb-4">
      <div className="py-3 px-3 d-flex justify-content-between bg-light fs-5">
        <span>Nurdamir Akmataliev</span>
        <span>Javascript Developer</span>
        <span>RU | KG | ENG</span>
      </div>
      <img className="img-home" src="https://img.freepik.com/premium-photo/confident-male-programmer-working-on-computer-at-night-table-light-turned-on-caucasian-guy-in-formal-wear-engaged-in-work-in-office-in-dark-office-networking-freelance-deadline-copy-space_183219-7635.jpg" alt="pic"/>
    </div>
  );
};

export default Home;