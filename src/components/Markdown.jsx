import React, { useState, useRef } from "react";
import { marked } from "marked";

const Markdown = ({ isDarkMode }) => { 
    const [markdown, setMarkdown] = useState('');
    const htmlContent = marked(markdown);

    const editorRef = useRef(null);
    const previewRef = useRef(null);

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    const handleScroll = () => {
        const editor = editorRef.current;
        const preview = previewRef.current;
        const scrollRatio = editor.scrollTop / (editor.scrollHeight - editor.clientHeight);
        preview.scrollTop = scrollRatio * (preview.scrollHeight - preview.clientHeight);
    };

    return (
        <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto h-screen">
                {/* Markdown Input */}
                <textarea 
                    id="editor" 
                    placeholder="Enter markdown here..."
                    className={`w-full h-full p-4 border rounded-lg shadow-md focus:ring-2 focus:ring-emerald-200 outline-none resize-none overflow-auto ${isDarkMode ? 'border-gray-700 bg-gray-800 text-gray-100' : 'border-gray-300 bg-white text-gray-900'}`}
                    value={markdown}
                    onChange={handleChange}
                    onScroll={handleScroll}
                    ref={editorRef}
                ></textarea>

                {/* Markdown Preview */}
                <div 
                    id="preview" 
                    className={`w-full h-full p-4 border rounded-lg shadow-md overflow-auto ${isDarkMode ? 'border-gray-700 bg-gray-800 text-gray-100' : 'border-gray-300 bg-white text-gray-900'}`}
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                    ref={previewRef}
                ></div>
            </div>
        </div>
    );
};

export default Markdown;