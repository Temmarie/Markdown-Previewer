import React, { useRef, useEffect } from "react";
import { marked } from "marked";
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css'; // Change style as needed
import defaultMarkdown from '../helpers/defaultMarkdown';

const Markdown = ({ isDarkMode, markdown, setMarkdown }) => { 
    const htmlContent = marked(markdown);

    const editorRef = useRef(null);
    const previewRef = useRef(null);

    const handleChange = (e) => {
        const newMarkdown = e.target.value;
        setMarkdown(newMarkdown);
        localStorage.setItem('markdown', newMarkdown);
    };

    const handleScroll = () => {
        const editor = editorRef.current;
        const preview = previewRef.current;
        const scrollRatio = editor.scrollTop / (editor.scrollHeight - editor.clientHeight);
        preview.scrollTop = scrollRatio * (preview.scrollHeight - preview.clientHeight);
    };

    useEffect(() => {
        document.querySelectorAll("pre code").forEach((block) => {
            hljs.highlightElement(block);
        });
    }, [markdown]);

    return (
        <div className="h-screen p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                {/* Markdown Input */}
                <textarea 
                    id="editor" 
                    placeholder="Enter markdown here..."
                    className={`w-full h-full p-4 border rounded-lg shadow-md focus:ring-2 focus:ring-[#5C1AF4] outline-none resize-none overflow-auto ${isDarkMode ? 'border-white bg-[#20075A] text-white' : 'border-[#5C1AF4] bg-[#F7F7F7] text-[#333333]'}`}
                    value={markdown}
                    onChange={handleChange}
                    onScroll={handleScroll}
                    ref={editorRef}
                ></textarea>

                {/* Markdown Preview */}
                <div 
                    id="preview" 
                    className={`markdown-body w-full h-full p-4 border rounded-lg shadow-md overflow-auto ${isDarkMode ? 'border-white bg-[#20075A] text-gray-100' : 'border-[#5C1AF4] bg-[#F7F7F7] text-[#333333]'}`}
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                    ref={previewRef}
                ></div>
            </div>
        </div>
    );
};

export default Markdown;