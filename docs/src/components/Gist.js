import React from 'react';

export default function Gist({ children }) {
    return (
        <iframe
            width="100%"
            height="700"
            src={`data:text/html;charset=utf-8,
    <head><base target='_blank' /></head>
    <body>
    <script src='https://gist.github.com/${children}.js'>
    </script>
    </body>`}
        />
    );
}