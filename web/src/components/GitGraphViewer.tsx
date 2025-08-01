'use client';

import React from 'react';
import ReactFlow, { Background } from 'reactflow';

import 'reactflow/dist/style.css';
import { GitTreeData } from '../types/github';

interface GitGraphViewerProps {
  initialData: GitTreeData;
}

const GitGraphViewer: React.FC<GitGraphViewerProps> = ({ initialData }) => {
  console.log("Initial Data:", initialData);
  return (
    <ReactFlow>
      <Background gap={12} size={1} />
    </ReactFlow>
  );
};

export default GitGraphViewer;
