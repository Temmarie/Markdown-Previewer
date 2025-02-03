import React, { useState } from "react";
import { marked } from "marked";

const Markdown = () => { 
    const [markdown, setMarkdown] = useState('');
    const htmlContent = marked(markdown);
    
    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div className="min-h-screen p-4 bg-gray-100 dark:bg-gray-900 transition-all">
         
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto h-screen">
                {/* Markdown Input */}
                <textarea 
                    id="editor" 
                    placeholder="Enter markdown here..."
                    className="w-full h-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 resize-none"
                    value={markdown}
                    onChange={handleChange}
                ></textarea>

                {/* Markdown Preview */}
                <div 
                    id="preview" 
                    className="w-full h-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 overflow-auto"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                ></div>
            </div>
        </div>
    );
};

export default Markdown;