import React from "react";

export function TabContentLoader({ tab }) {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {React.lazy(() => import(`./${tab.path}`))}
    </React.Suspense>
  );
}
