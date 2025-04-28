import type {JSX} from 'react';
import React from 'react';
import {type MyCommonType, myConst2} from "@my-common/types/common";
import {createRoot} from "react-dom/client";


function App(): JSX.Element {

    const myVar = React.useMemo<MyCommonType>(() => {
        return {
            name: "test",
            value: 100
        }
    }, []);

    return (
        <div>Example: {myVar.name}, {myConst2}
        </div>

    );
}


const rootElem = document.getElementById('root');
if (rootElem) {
    const root = createRoot(rootElem);
    root.render(
            <React.StrictMode>
                <App/>
            </React.StrictMode>
    )
} else {
    console.error('Cannot find root')
}
