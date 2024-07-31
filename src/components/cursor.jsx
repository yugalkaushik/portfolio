import React, { useEffect, useState } from 'react';

const Cursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 9999,
                transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
                width: '16px',
                height: '16px',
                backgroundColor: 'transparent',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #111111 20%, transparent 60%)',
                border: '0px solid #111111',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                mixBlendMode: 'difference',
                transition: 'transform 0.1s ease',
            }}
        />
    );
};

export default Cursor;
