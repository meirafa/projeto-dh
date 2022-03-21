import React from "react";

export const useWidth = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    const updateDimensions = () => {
        setWidth(window.innerWidth)
    };

    React.useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return width;
};