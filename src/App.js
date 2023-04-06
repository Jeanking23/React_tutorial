import React, { useState } from 'react';
import DisplayEntries from './components/DisplayEntries'

function App() {
    const [entries, setEntries] = useState([{ weight: 175, date: "11-23-2021" }, { weight: 175, date: "11-23-2021" }]);
    return ( <
        div >
        <
        DisplayEntries parentEntries = { entries }
        setEntries = { setEntries }
        />


        <
        /div>
    );
}

export default App;