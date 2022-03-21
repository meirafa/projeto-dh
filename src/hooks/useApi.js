import React from "react";

export const useApis = (url) => {
    const [result, setResult] = React.useState(null);
    const [isLoading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch(url, {
            headers: {
                Accept: "application/json"
            }
        }).then(res => res.json())
            .then(res => {
                setResult(res);
                setLoading(false);
            })
    }, []);

    return [result, isLoading];
};