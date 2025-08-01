import React from 'react';
import { Handle, Position } from 'reactflow';

interface BranchNodeProps {
  data: { label: string };
}

const BranchNode: React.FC<BranchNodeProps> = ({ data }) => {
  return (
    <div
      style={{
        width: 120,
        height: 40,
        backgroundColor: '#007bff', // Blue color for branches
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '0.8em',
        textAlign: 'center',
        padding: '5px',
        borderRadius: '5px',
        border: '2px solid #0056b3',
      }}
    >
      <div>{data.label}</div>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default BranchNode;
