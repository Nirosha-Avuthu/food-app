import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Components/Layout';

export const App = () => {
    return (
        <div>
            <Layout />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
