import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Theory.css"

const FrontPage = () => {

  // const navigate = useNavigate();

  //  const openGridTraversal = () => {
  //   navigate("https://www.google.com");
  //  }

  return (
    <>
    <button className="btn"><Link to="/sortingVisualizer">Sorting Visualizer</Link></button>
    <br />
   <button className="btn" onClick={() => {window.open("https://637b775d5ca7a73c8b4bc679--heartfelt-entremet-2f56cd.netlify.app/")}}>Traversal Visualizer</button>
   <br />
   <button className="btn"><Link to="/theory">Theory</Link></button>
    </>
  )
}

export default FrontPage;