import React from "react";
import "./App.css";
import ErrorBoundary from "./components/errorboundary";
import Input from "./components/input";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <div>This is the place where we can put the child component chaged</div>
      </div>
      <Input label="Enter name" inputtype="text" />
    </ErrorBoundary>
  );
}

export default App;
