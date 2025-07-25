'use client'

import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

// interface Props {
//     filePath: string;
// }

// const MarkdownViewer: React.FC<Props> = ( ) => {
const MarkdownViewer: React.FC = ( ) => {

    const [content, setMarkdownContent] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        // const filePath = path.join(process.cwd(), 'public/code-snippet', 'CODE_SNIPPET_CakePHP4_SOCKET_RABBITMQ.md'); // Path to your Markdown file

        const fetchMarkdown = async () => {
            const filePath = ('/code-snippet/CODE_SNIPPET_CakePHP4_SOCKET_RABBITMQ.md'); // Path to your Markdown file

            try {
                const response = await fetch(filePath); // Adjust the path if needed
                if (!response.ok) {
                    throw new Error('Failed to fetch the Markdown file');
                }
                const text = await response.text();
                setMarkdownContent(text);

            } catch (err: any) {
                setError(err.message);

            } finally {
                setLoading(false);
            }
        };

        fetchMarkdown();
    }, [])

    return (
        <div className='p-2 rounded-md shadow-xl markdown'>
            <ReactMarkdown>{content}</ReactMarkdown>
 
        </div>
    );
};


export default MarkdownViewer;