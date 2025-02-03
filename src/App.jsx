import React, { useState } from 'react';
import Markdown from './components/Markdown';
import Nav from './components/Nav';
import './App.css';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`min-h-screen transition-all ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
            <Nav toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <Markdown isDarkMode={isDarkMode} />
        </div>
    );
}

export default App;