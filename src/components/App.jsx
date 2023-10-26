import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes, useParams } from "react-router-dom";
import tabsData from "../db/tabs.json";

function App() {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    // Simulate fetching tab data from the JSON file
    setTabs(tabsData);
  }, []);

  function DefaultTabLoader() {
    const defaultTab = tabs.find((tab) => tab.order === 0);
    return defaultTab ? <TabContentLoader tab={defaultTab} /> : null;
  }

  function TabContentLoader() {
    const { tabId } = useParams();
    const tab = tabs.find((t) => t.id === tabId);

    if (tab) {
      return (
        // Load the tab content lazily using dynamic import
        <React.Suspense fallback={<div>Loading...</div>}>
          {React.lazy(() => import(`./${tab.path}`))}
        </React.Suspense>
      );
    } else {
      return <div>Tab not found</div>;
    }
  }

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
        <Route path="/:tabId" element={<TabContentLoader />} />
        <Route path="/" element={<DefaultTabLoader />} />
      </Routes>
    </>
  );
}

export default App;
