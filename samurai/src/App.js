import React from 'react';
import './App.css';
import Header from './header/Header'
import Profile from './content/profile/Profile'
import Footer from "./footer/Footer";
import Sidenav from "./content/profile/Sidenav";

const App = () => {
    return <div className="app-wrapper">
        <header className='header'>
            <Header />
        </header>
        <sidenav className='sidenav'>
            <Sidenav/>
        </sidenav>
        <profile className='profile'>
            <Profile />
        </profile>
        <footer className='footer'>
            <Footer/>
        </footer>

    </div>
};

export default App;
