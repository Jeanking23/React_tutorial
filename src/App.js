import React, { useState } from 'react';
import DisplayEntries from './components/DisplayEntries';
import AddEntryForm from './components/AddEntry/AddEntryForm';
import EntriesChartsTracker from './components/EntriesChartsTracker/EntriesChartsTracker';

function App() {
    const [entries, setEntries] = useState([{ weight: 175, date: "11-23-2021" }, { weight: 176, date: "11-24-2021" }])

    function addNewAddEntry(entry) {
        let tempEntries = [...entries, entry];
        setEntries(tempEntries);
        entries.push(entry);
    }
    return ( <
        div >
        <
        DisplayEntries parentEntries = { entries }
        setEntries = { setEntries }
        /> <
        AddEntryForm addNewAddEntryProperty = { addNewAddEntry }
        /> <
        EntriesChartsTracker parentEntries = { entries }
        / > < /
        div >

    );
};

export default App;