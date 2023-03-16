import React from "react";
import "./style.css";
import Editor from "./Editor"; 
import ReactFCCtest from 'react-fcctest';
import React, { useState, useEffect } from "react";

export default function App() {
  const [showText, setShowText] = useState(true);
  const [showPreview, setPreview] = useState(true);

  const willShow = () => {
    if (showText) {
      setShowText(false);
    }
    else {
      setShowText(true);
    }
  }

  const willPreview = () => {
    if (showPreview) {
      setPreview(false);
    }
    else {
      setPreview(true);
    }
  }

  return (
    <div className="wrapper">
      <ReactFCCtest />
      <button className="showButton" onClick={() => willShow()} type="button">Show/Hide Text</button>
      <button className="showButton" onClick={() => willPreview()} type="button">Show/Hide Preview</button>
      <div className="editor"> 
        <Editor textShow={showText} textPreview={showPreview}/>
      </div>
    </div>
  );
}
