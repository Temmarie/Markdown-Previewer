import React from 'react';
import M5 from '../assets/M5.png';

const Nav = ({ toggleTheme, isDarkMode, handleReset }) => {
    return (
        <nav className="p-2 flex justify-between items-center bg-[#20075A] text-white">
            <a href="https://github.com/temmarie" className="flex items-center" target="_blank" rel="noopener noreferrer">
                <img src={M5} alt="Logo" className="h-6 w-6 mr-2" />
                <h1 className="text-2xl font-bold font">MARKKIT</h1>
            </a>
            <div className="flex items-center">
                <button 
                    onClick={handleReset} 
                    className="p-2 border rounded bg-[#20075A] text-white mr-2 hover:bg-red-700 hover:text-white hover:text-[#20075A]"
                >
                    Reset
                </button>
                <button 
                    onClick={toggleTheme} 
                    className="p-2 border rounded bg-[#20075A] text-white hover:bg-[#5C1AF4] hover:text-white"
                >
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </nav>
    );
};

export default Nav;