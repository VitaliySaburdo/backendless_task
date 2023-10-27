import React, { useEffect, useState } from "react";
import {
  NavLink,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import tabsData from "../db/tabs.json";
import { TabContentLoader } from "../helpers/TabContentLoader";

function App() {
  const [tabs, setTabs] = useState([]);

  const location = useLocation();

  useEffect(() => {
    setTabs(tabsData);
  }, []);

  const defaultTabId =
    tabs.find((tab) => location.pathname.includes(tab.id)) || tabs[0];

  console.log(defaultTabId);

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
        <Route index element={<Navigate to={`/${defaultTabId}`} />} />
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
