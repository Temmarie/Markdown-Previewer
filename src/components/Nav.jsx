import React from 'react';
import M5 from '../assets/M5.png';

const Nav = ({ toggleTheme, isDarkMode }) => {
    return (
        <nav className="p-4 flex justify-between items-center bg-[#20075A] text-white">
            <a href="https://github.com/temmarie" className="flex items-center" target="_blank" rel="noopener noreferrer">
                <img src={M5} alt="Logo" className="h-6 w-6 mr-2" />
                <h1 className="text-2xl font-bold">Markkit</h1>
            </a>
            <button 
                onClick={toggleTheme} 
                className="p-2 border rounded bg-[#5C1AF4] text-white"
            >
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </nav>
    );
};

export default Nav;