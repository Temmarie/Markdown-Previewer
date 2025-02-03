import React, { useState, useRef } from "react";
import { marked } from "marked";

const Markdown = () => { 
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
        <div className="min-h-screen p-4 bg-gray-100 dark:bg-gray-900 transition-all">
            <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
                Markdown Previewer
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto h-screen">
                {/* Markdown Input */}
                <textarea 
                    id="editor" 
                    placeholder="Enter markdown here..."
                    className="w-full h-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 resize-none overflow-auto"
                    value={markdown}
                    onChange={handleChange}
                    onScroll={handleScroll}
                    ref={editorRef}
                ></textarea>

                {/* Markdown Preview */}
                <div 
                    id="preview" 
                    className="w-full h-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 overflow-auto"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                    ref={previewRef}
                ></div>
            </div>
        </div>
    );
};

export default Markdown;