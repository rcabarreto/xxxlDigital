import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import ErrorBoundary from "./components/ErrorBoundary";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <Router>{routes}</Router>
    </ErrorBoundary>
  );
}

export default App;
