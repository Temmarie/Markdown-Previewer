import React, { useState, useRef } from "react";
import { marked } from "marked";
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css'; // Change style as needed

// useEffect(() => {
//     document.querySelectorAll("pre code").forEach((block) => {
//         hljs.highlightElement(block);
//     });
// }, [markdown]);

const defaultMarkdown = `
# 🚀 Welcome to Markkit!  
The **ultimate** markdown previewer for developers. Write markdown on the left, see the **real-time** preview on the right.  

---

## ✨ Features
- **Real-time Markdown rendering**
- **Dark mode support**
- **Easy-to-use interface**
- **Supports full markdown syntax**

---

## 🔥 Markdown Examples

### 1️⃣ Headers  
# H1  
## H2  
### H3  
#### H4  
##### H5  
###### H6  

---

### 2️⃣ Text Formatting  
**Bold**  
*Italic*  
~~Strikethrough~~  
**_Bold & Italic_**  

---

### 3️⃣ Lists  
#### 🔹 Unordered List  
- Item 1  
- Item 2  
  - Sub-item  
  - Sub-item  
- Item 3  

#### 🔢 Ordered List  
1. First item  
2. Second item  
   1. Sub-item  
   2. Sub-item  
3. Third item  

---

### 4️⃣ Links & Images  
[🌐 Visit Markkit on GitHub](https://github.com/Temmarie/Markdown-Previewer/)  

![Markdown Logo](./src/assets/markit.png)

---

### 5️⃣ Code Blocks  

#### Inline Code  
Use \`console.log('Hello, Markkit!')\` to debug.

#### JavaScript Code Block  
\`\`\`javascript
function greet() {
    console.log("Hello, Markkit!");
}
\`\`\`

#### Python Code Block  
\`\`\`python
def greet():
    print("Hello, Markkit!")
}
\`\`\`

---

### 6️⃣ Blockquotes  
> "Markkit makes writing markdown seamless and fun!"  

---

### 7️⃣ Tables  

| Feature        | Description                    |
|---------------|--------------------------------|
| 🎨 Styling    | Supports headers, bold, italics |
| 🔥 Real-time | Instant markdown rendering      |
| 🌙 Dark Mode | Perfect for late-night coding  |

---

### 8️⃣ Task Lists  
- [x] Write markdown  
- [x] Preview in real-time  
- [ ] Deploy Markkit  

---

### 🎉 Try writing your own markdown and see the magic happen! 🚀  
`;

const Markdown = ({ isDarkMode }) => { 
    const [markdown, setMarkdown] = useState(defaultMarkdown);
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