import React, { useEffect } from "react";

function App() {
    useEffect(() => {
        if (typeof window !== "undefined")
            window.location.href =
                "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    });
    return <></>;
}

export default App;
