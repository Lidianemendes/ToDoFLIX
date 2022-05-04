import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Movies from "./components/Movies";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Movies />
        <Routes>
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </Router>
    );
  }
}
