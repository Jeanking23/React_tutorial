import React, { useState } from 'react';
import DisplayEntries from './components/DisplayEntries';
import AddEntryForm from './components/AddEntry/AddEntryForm';
import EntriesChartsTracker from './components/EntriesChartsTracker/EntriesChartsTracker';
import './App.css';

function App() {
    const [entries, setEntries] = useState([{ weight: 175, date: "11-23-2021" }, { weight: 176, date: "11-24-2021" }])

    function addNewAddEntry(entry) {
        let tempEntries = [...entries, entry];
        setEntries(tempEntries);
        entries.push(entry);
    }
    return ( <
        div className = 'container-fluid' >

        <
        div className = 'row' >
        <
        h3 style = {
            { 'margin': '1em' }
        } > Weight Tracker < /h3> <
        div className = 'col-md-6' >
        <
        div className = 'border-box' >
        <
        DisplayEntries parentEntries = { entries }
        setEntries = { setEntries }
        /> < /
        div > <
        div className = 'border-box' >
        <
        AddEntryForm addNewAddEntryProperty = { addNewAddEntry }
        /> < /
        div > <
        /div> <
        div className = 'col-md-6' >
        <
        div className = 'border-box' >
        <
        EntriesChartsTracker parentEntries = { entries }
        /> < /
        div > <
        /div> < /
        div > <
        /div>

    );
};

export default App;