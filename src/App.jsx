import React from "react";
import "./App.css";
import ErrorBoundary from "./components/errorboundary";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <div>This is the place where we can put the child component chaged</div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
