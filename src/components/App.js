import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import tabsData from "../db/tabs.json";
import { TabContentLoader } from "../helpers/TabContentLoader";

function App() {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    setTabs(tabsData);
  }, []);

  const openTab = tabs.find((tab) => tab.order === 0);
  const defaultTabId = openTab ? openTab.id : null;

  return (
    <>
      <nav>
        {tabs.map((tab) => (
          <NavLink key={tab.id} to={tab.id}>
            {tab.title}
          </NavLink>
        ))}
      </nav>
      <Routes>
        <Route index element={<Navigate to={defaultTabId} />} />
        {tabs.map((tab) => (
          <Route
            key={tab.id}
            path={`/${tab.title}`}
            element={<TabContentLoader tab={tab} />}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
