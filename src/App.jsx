import React, { useState } from 'react';
import Markdown from './components/Markdown';
import defaultMarkdown from './helpers/defaultMarkdown';
import Nav from './components/Nav';
import './App.css';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [markdown, setMarkdown] = useState(() => {
        return localStorage.getItem('markdown') || defaultMarkdown;
    });

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleReset = () => {
        const confirmReset = window.confirm("Are you sure you want to reset the markdown to the default content?");
        if (confirmReset) {
            setMarkdown(defaultMarkdown);
            localStorage.setItem('markdown', defaultMarkdown);
        }
    };

    return (
        <div className={`min-h-screen transition-all ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
            <Nav toggleTheme={toggleTheme} isDarkMode={isDarkMode} handleReset={handleReset} />
            <Markdown isDarkMode={isDarkMode} markdown={markdown} setMarkdown={setMarkdown} />
        </div>
    );
}

export default App;