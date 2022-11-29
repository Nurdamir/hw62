import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="d-flex justify-content-center row px-5">
      <p className="fs-4">Вы можете просмотреть мною выполненные работы.</p>
      <div className="d-flex justify-content-around mb-4">
      <Link to="countries" className="btn btn-outline-dark w-25 d-flex align-items-center justify-content-center">About countries</Link>
      <Link to="toDoList" className="btn btn-outline-dark w-25 d-flex align-items-center justify-content-center">To do List for you</Link>
      <Link to="chat" className="btn btn-outline-dark w-25 d-flex align-items-center justify-content-center">Chat! Enjoy the fellowship!</Link>
      </div>
      <Outlet/>
    </div>
  );
};

export default Portfolio;