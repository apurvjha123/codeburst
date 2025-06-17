import React, { useState } from "react";
import { ChevronRight, ChevronDown, FileText, Folder, FolderOpen } from "lucide-react";

const FileTreeNode = ({ fileName, nodes, onSelect, path }: any) => {
  const isDir = !!nodes;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isDir) {
      setIsExpanded(!isExpanded);
    } else {
      onSelect(path);
    }
  };

  return (
    <div className="ml-3">
      <div
        className={`flex items-center space-x-1 cursor-pointer hover:bg-muted px-1 py-0.5 rounded-sm select-none`}
        onClick={handleClick}
      >
        {isDir ? (
          isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />
        ) : (
          <span className="w-[14px]" /> // Placeholder for alignment
        )}
        {isDir ? (
          isExpanded ? <FolderOpen size={16} className="text-yellow-600" /> : <Folder size={16} className="text-yellow-500" />
        ) : (
          <FileText size={16} className="text-blue-500" />
        )}
        <span className="text-sm">{fileName}</span>
      </div>

      {isExpanded && isDir && (
        <div className="pl-4 border-l border-muted">
          {Object.keys(nodes).map((child) => (
            <FileTreeNode
              key={child}
              fileName={child}
              nodes={nodes[child]}
              path={`${path}/${child}`}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const FileTree = ({ tree, onSelect }: any) => {
  return (
    <div className="text-sm font-mono">
      <FileTreeNode onSelect={onSelect} fileName="root" path="" nodes={tree} />
    </div>
  );
};

export default FileTree;
