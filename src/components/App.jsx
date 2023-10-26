import React from "react";
// import tabsData from "../db/tabs.json";
import { Route, Routes } from "react-router-dom";
import DummyTable from "./dummyTable";

function App() {
  return (
    <>
      <Routes>
        <Route index component={<DummyTable />} />
      </Routes>
    </>
  );
}

export default App;
