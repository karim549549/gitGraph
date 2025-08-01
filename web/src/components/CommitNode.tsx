import React from 'react';
import { Handle, Position } from 'reactflow';

interface CommitNodeProps {
  data: { label: string };
}

const CommitNode: React.FC<CommitNodeProps> = ({ data }) => {
  return (
    <div
      style={{
        width: 60,
        height: 60,
        borderRadius: '50%',
        backgroundColor: '#6a0dad', // Purple color for commits
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '0.7em',
        textAlign: 'center',
        padding: '5px',
        border: '2px solid #4b0082',
      }}
    >
      <div>{data.label}</div>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default CommitNode;
