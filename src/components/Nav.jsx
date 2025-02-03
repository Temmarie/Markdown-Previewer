import React from 'react';

const Nav = ({ toggleTheme, isDarkMode }) => {
    return (
        <nav className="p-4 flex justify-between items-center bg-gray-800 text-white">
            <h1 className="text-2xl font-bold">Markdown Previewer</h1>
            <button 
                onClick={toggleTheme} 
                className="p-2 border rounded bg-emerald-200 text-gray-800"
            >
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </nav>
    );
};

export default Nav;