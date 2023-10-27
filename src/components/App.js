import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import tabsData from "../db/tabs.json";
import { TabContentLoader } from "../helpers/TabContentLoader";

function App() {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    setTabs(tabsData);
  }, []);

  return (
    <>
      <nav style={{ display: "flex", gap: "20px" }}>
        {tabs.map((tab) => (
          <NavLink style={{ textDecoration: "none" }} key={tab.id} to={tab.id}>
            {tab.title}
          </NavLink>
        ))}
      </nav>
      <Routes>
        <Route index element={<Navigate to={"/dummyTable"} />} />
        {tabs.map((tab) => (
          <Route
            key={tab.id}
            path={`/${tab.id}`}
            element={<TabContentLoader tab={tab} />}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
