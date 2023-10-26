// import React, { useState } from "react";
import tabsData from "../db/tabs.json";
import { NavLink, Route, Routes } from "react-router-dom";
// import DummyTable from "./dummyTable";
// import { SharedLayout } from "./SharedLayout";

function App() {
  // const [tabs, setTabs] = useState(tabsData);

  return (
    <>
      <nav>
        {tabsData.map((tab) => (
          <NavLink key={tab.id} to={tab.id}>
            {tab.title}
          </NavLink>
        ))}
      </nav>
      <Routes>
        {/* <Route path="/:tabId" element={<TabContentLoader />} />
        <Route path="/" element={<DefaultTabLoader />} /> */}
      </Routes>
    </>
  );
}

export default App;
