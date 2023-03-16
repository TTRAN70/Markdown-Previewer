import React from "react";
import "./Preview.css";
import { Markup } from 'interweave';
import { marked } from 'marked';

export default function Preview(props) {
    return (
      <div className="previewWrap presize">
        <div id="preview" className="preview">
          <Markup content={marked(props.convert)} />
        </div>
      </div>
    );
}