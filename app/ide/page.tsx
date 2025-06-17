"use client";

import React, { useEffect, useState } from "react";
import Terminal from "./Terminal";
import "xterm/css/xterm.css";
import Split from "react-split";
import FileTree from "./tree";
import Editor from "./Editor";
import socket from "../../components/globals/socket";
import { Room } from "./Room";
import { CollaborativeEditor } from "./CollaborativeEditor";

const Page = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [editorContent, setEditorContent] = useState<string>("");
  const [fileTree, setFileTree] = useState<any>();

  const getFileTree = async () => {
    const response = await fetch("http://localhost:9000/files");
    const result = await response.json();
    setFileTree(result.tree);
  };

  const fetchFileContent = async (path: string) => {
    const response = await fetch(`http://localhost:9000/files/content?path=${path}`);
    const result = await response.json();
    setEditorContent(result.content);
  };

  const saveFile = async () => {
    if (!selectedFile) return;
    await fetch("http://localhost:9000/files/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: selectedFile, content: editorContent }),
    });
    socket.emit("file:change", { path: selectedFile, content: editorContent });
  };

  useEffect(() => {
    getFileTree();
  }, []);

  useEffect(() => {
    socket.on("file:refresh", getFileTree);
    return () => {
      socket.off("file:refresh", getFileTree);
    };
  }, []);

  useEffect(() => {
    if (selectedFile) {
      fetchFileContent(selectedFile);
    }
  }, [selectedFile]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        saveFile();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [editorContent, selectedFile]);

  return (
    <div className="h-screen flex flex-col font-mono">
      {/* Top Bar - VS Code style */}
      <div className="flex h-10 bg-[#1e1e1e] text-white items-center px-4 text-sm shadow-sm">
        <span className="font-semibold">CodeBurst</span>
        <span className="ml-4 text-gray-400">{selectedFile ?? "Welcome!"}</span>
        <button
          onClick={saveFile}
          className="ml-auto bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs"
        >
          Save (Ctrl+S)
        </button>
      </div>

      {/* Editor Area Split */}
      <Split
        className="flex-grow flex"
        sizes={[20, 80]}
        minSize={180}
        gutterSize={4}
        direction="horizontal"
      >
        {/* Sidebar */}
        <div className="bg-[#252526] text-gray-300 overflow-auto py-2 px-1 text-sm border-r border-[#333]">
          <FileTree
            onSelect={(path: any) => setSelectedFile(path)}
            tree={fileTree}
          />
        </div>

        {/* Main Area */}
        <div className="flex flex-col bg-[#1e1e1e] text-white">
          {/* Breadcrumb path */}
          <div className="text-xs text-gray-400 px-4 py-2 border-b border-[#333] bg-[#2d2d2d]">
            {selectedFile ? selectedFile.replaceAll("/", " ▸ ") : "No file selected"}
          </div>

          {/* Editor */}
          <div className="flex-grow overflow-hidden">
            <Room>
              <CollaborativeEditor
                content={editorContent}
                onContentChange={(value: any) => setEditorContent(value)}
              />
            </Room>
          </div>

          {/* Terminal */}
          <div className="bg-[#111315] border-t border-[#333] h-[160px] overflow-hidden">
            <Terminal />
          </div>
        </div>
      </Split>
    </div>
  );
};

export default Page;
