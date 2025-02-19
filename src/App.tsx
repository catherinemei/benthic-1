import type { Component } from "solid-js";
import { TraversalOutputComponentKeyboardParentFocus } from "./priority-traversal-parent-focus";

import { lineGraphHypergraph } from "./input-line";
const App: Component = () => {
  return (
    <TraversalOutputComponentKeyboardParentFocus
      nodeGraph={lineGraphHypergraph}
      showHypergraph={false}
    />
  );
};

export default App;
