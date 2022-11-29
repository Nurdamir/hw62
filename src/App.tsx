import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import Home from "./containers/Home/Home";
import AboutMe from "./containers/AboutMe/AboutMe";
import Skills from "./containers/Skills/Skills";
import Portfolio from "./containers/Portfolio/Portfolio";
import Contacts from "./containers/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Countries from "./components/Countries/Countries";
import Chat from "./components/Chat/Chat";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  return (
    <div className="App">
      <header className="header mb-4">
        <Navbar/>
      </header>

      <main className="main-block">
        <Routes>
          <Route path="/" element={(
            <Home/>
          )}/>
          <Route path="/about-me" element={(
            <AboutMe/>
          )}/>
          <Route path="/skills" element={(
            <Skills/>
          )}/>
          <Route path="/portfolio" element={(
            <Portfolio/>
          )}>
            <Route path="countries" element={(
              <Countries/>
            )}/>
            <Route path="toDoList" element={(
              <ToDoList/>
            )}/>
            <Route path="chat" element={(
              <Chat/>
            )}/>
          </Route>
          <Route path="/contacts" element={(
            <Contacts/>
          )}/>
          <Route path="*" element={(
            <h1>Not found!</h1>
          )}/>
        </Routes>
      </main>
      <div className="footer py-3 mt-5">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
