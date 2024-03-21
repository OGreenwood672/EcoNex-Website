import React, { useState } from 'react';

import { ThemeContext } from './contexts/theme-context';

import "./App.scss";
import People from './components/People';
import Navbar from './components/navbar';
import About from './components/about';
import Footer from './components/footer';


function App() {

    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={`expand theme-${theme}`}>
                <div className="App">
                    <header>
                        <Navbar />
                    </header>
                    <div id="title-section">
                        <img id="title-logo" src="./EcoNexLogo.png" alt="EcoNex Logo" />
                    </div>
                    <About />
                    <People />
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
