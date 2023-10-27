import React from "react";

export function TabContentLoader({ tab }) {
  console.log(`../components${tab.path}`);
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {React.lazy(() => import(`../components${tab.path}`))}
    </React.Suspense>
  );
}
