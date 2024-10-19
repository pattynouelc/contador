import React, { useState, useEffect } from "react";
import SecondsCounter from "./js/component/SecondsCounter";

const App = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div>
            <SecondsCounter seconds={seconds} />
        </div>
    );
};

export default App;
