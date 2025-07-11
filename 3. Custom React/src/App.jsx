import React from 'react';

export default function DynamicAnchor() {
  const link = {
    href: "https://www.google.com",
    text: "Click me to Visit Google"
  };

  return (
    <div style={{ padding: '20px' }}>
      <a href={link.href} target="_blank" rel="noopener noreferrer">
        {link.text}
      </a>
    </div>
  );
}
