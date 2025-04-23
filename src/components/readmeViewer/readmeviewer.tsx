import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./readmeviewer.css"
type ReadmeViewerProps = {
  src: string;
  start_from?:number;
};

const ReadmeViewer: React.FC<ReadmeViewerProps> = ({ src ,start_from=0}) => {
  const [text, setText] = useState<string>("Loading...");

  useEffect(() => {
    fetch(src)
      .then((res) => res.text())
      .then((data) => setText(data.slice(start_from)))
      .catch(() => setText("Error loading README"));
  }, [src, start_from]);
  
  return (
    <div className="markdown-content">
        <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};

export default ReadmeViewer;