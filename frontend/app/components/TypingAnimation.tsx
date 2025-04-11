"use client"
import React, { useEffect, useState } from 'react'

const TypingAnimation = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout;

        if (!isDeleting && currentIndex < text.length) {
            timeout = setTimeout(() => {
                setCurrentText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, delay);
        } else if (isDeleting && currentIndex > 0) {
            timeout = setTimeout(() => {
                setCurrentText(prev => prev.slice(0, -1));
                setCurrentIndex(prev => prev - 1);
            }, delay);
        } else {
            timeout = setTimeout(() => {
                setIsDeleting(prev => !prev);
            }, delay * 5); 
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, isDeleting, text, delay]);

    return <span className="text-[#ffffff]">{currentText}</span>;
}

export default TypingAnimation;
