// Parallax.js
import React from 'react';
import './Parallax.css';

function Parallax() {
    const parallaxBg = React.useRef(null);

    React.useEffect(() => {
        function handleScroll() {
            if (parallaxBg.current) {
                let offset = window.pageYOffset;
                parallaxBg.current.style.backgroundPositionY = offset * 0.7 + 'px';
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="parallax-container">
            <div ref={parallaxBg} className="parallax-bg"></div>
            <div className="content">
                <h1></h1>
                <p></p>
            </div>
        </div>
    );
}

export default Parallax;
