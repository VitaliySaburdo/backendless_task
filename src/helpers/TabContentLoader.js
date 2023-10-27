import React from "react";

export function TabContentLoader({ tab }) {
  const Component = React.lazy(() => import(`../components/${tab.path}`));

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component />
    </React.Suspense>
  );
}
