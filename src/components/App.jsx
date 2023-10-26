import React from "react";
// import tabsData from "../db/tabs.json";
import { Route, Routes } from "react-router-dom";
import DummyTable from "./dummyTable";
import { SharedLayout } from "./SharedLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/dummyTable" component={<DummyTable />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
