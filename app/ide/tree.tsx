import React, { useState } from "react";

const FileTreeNode = ({ fileName, nodes, onSelect, path }: any) => {
  const isDir = !!nodes;
  const [isExpanded, setIsExpanded] = useState(false); // Tracks expand/collapse state

  return (
    <div style={{ marginLeft: "10px" }}>
      <p
        className={isDir ? "folder-node" : "file-node"}
        onClick={(e) => {
          e.stopPropagation();
          if (isDir) {
            setIsExpanded(!isExpanded); // Toggle expand/collapse state
          } else {
            onSelect(path);
          }
        }}
      >
        {isDir ? (isExpanded ? "📂" : "📁") : "📄"} {fileName}
      </p>
      {isExpanded && nodes && (
        <ul style={{ paddingLeft: "20px", marginTop: "5px" }}>
          {Object.keys(nodes).map((child) => (
            <li key={child}>
              <FileTreeNode
                onSelect={onSelect}
                path={path + "/" + child}
                fileName={child}
                nodes={nodes[child]}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const FileTree = ({ tree, onSelect }: any) => {
  return <FileTreeNode onSelect={onSelect} fileName="/" path="" nodes={tree} />;
};

export default FileTree;
