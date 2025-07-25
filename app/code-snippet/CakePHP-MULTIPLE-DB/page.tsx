'use client'

import React, { useEffect, useState } from 'react';
import MarkdownViewer from '../../Component/MarkdownViewer';
 
const CodeSnippet: React.FC = ( ) => { 
    return (
        <div className='p-2 rounded-md shadow-xl markdown'>
            <MarkdownViewer filePath={'/code-snippet/CODE_SNIPPET_CakePHP4_MultipleDatabase.md'}  />
        </div>
    );
};


export default CodeSnippet;