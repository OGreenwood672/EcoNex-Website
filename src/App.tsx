import React, { useState } from 'react';

import { ThemeContext } from './contexts/theme-context';

import "./App.scss";
import People from './components/People';
import Navbar from './components/navbar';
import About from './components/about';
import Footer from './components/footer';
import Contact from './components/contact';


function App() {

    const [theme, setTheme] = useState('light');

    function changeLightMode() {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={`expand theme-${theme}`}>
                <div className="App">
                    <header>
                        <Navbar changeLightMode={changeLightMode}/>
                    </header>
                    <div className="whitespace" />
                    <div id="title-section">
                        <img id="title-logo" src="./EcoNex.png" alt="EcoNex Logo" />
                    </div>
                    <div className="whitespace" />
                    <About />
                    <People />
                    <Contact />
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
