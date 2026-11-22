import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';


export default function PDF({ children, height = 700 }) {
    const src = useBaseUrl(String(children).trim(), { absolute: true });

    return (
        <iframe
            src={`https://docs.google.com/gview?url=${encodeURIComponent(src)}&embedded=true`}
            title="PDF viewer"
            width="100%"
            height={height}
            style={{ border: 0 }}
        />
    );
}