import React from 'react';

export default function ScrollProgressBar({ height, color, delay }) {

    const scrollBarStyle = (width, height = "4", color = "#FE1D00", delay = "0s") => ({
        zIndex: "99",
        backgroundColor: `${color}`,
        height: `${height}`,
        width: `${width}`,
        transitionProperty: "width",
        transitionDelay: `${delay}`,
        transitionTimingFunction: `ease-out`,
    });

    const [progress, setProgress] = React.useState(0);

    function scrolling() {
        const scrollDistance = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (scrollDistance / height) * 100;
        scrolled = Math.round(scrolled)
        if (height > 0) {
        setProgress(scrolled);
        } else {
        setProgress(null);
        }
    }

    React.useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", scrolling);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", scrolling);
        };
    });

    const width = `${progress}%`

    return (
        <div style={scrollBarStyle(width, height, color, delay)}/>
    );
}
