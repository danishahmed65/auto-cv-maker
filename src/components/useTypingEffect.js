// useTypingEffect.js
import { useState, useEffect } from 'react';

function useTypingEffect(texts, typingSpeed = 100, delay = 2000) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let typingTimeout;
        let pauseTimeout;

        if (isTyping) {
            if (displayedText.length < texts[currentTextIndex].length) {
                typingTimeout = setTimeout(() => {
                    setDisplayedText(texts[currentTextIndex].slice(0, displayedText.length + 1));
                }, typingSpeed);
            } else {
                pauseTimeout = setTimeout(() => {
                    setIsTyping(false);
                    setIsDeleting(true);
                }, delay);
            }
        }

        if (isDeleting) {
            if (displayedText.length > 0) {
                typingTimeout = setTimeout(() => {
                    setDisplayedText(texts[currentTextIndex].slice(0, displayedText.length - 1));
                }, typingSpeed / 2);
            } else {
                setIsDeleting(false);
                setIsTyping(true);
                setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }
        }

        return () => {
            clearTimeout(typingTimeout);
            clearTimeout(pauseTimeout);
        };
    }, [displayedText, isTyping, isDeleting, texts, typingSpeed, delay, currentTextIndex]);

    return displayedText;
}

export default useTypingEffect;
