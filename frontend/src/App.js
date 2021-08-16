import React, { useEffect, useState } from 'react'
import AddWeekBtn from "./components/AddWeekBtn";
import WeekDashboard from "./components/WeekDashboard";

function App() {
  
    return (
        <>
           <WeekDashboard/>
           <AddWeekBtn/>
        </>
    );
}

export default App;
