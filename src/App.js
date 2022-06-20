
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Component } from "react";
import Home from './Home'
import Navbar from './Navbar';
import Locationform from './Locationform'
import { Routes, Route } from "react-router-dom";


export default class App extends Component {

  renderPageContent() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="forecast" element={<h1>hej</h1>} />
        <Route path="*" element={<h2>404 not found.</h2>} />
      </Routes>
    );
  }

  render() {
    return (
      <div className="d-flex flex-column mb-5">
        <Locationform />
        <Navbar />
        {this.renderPageContent()}
      </div>
    )
  }
}

