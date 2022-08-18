import React, { useCallback } from 'react'
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'react-flow-renderer';
import SettingsIcon from '@mui/icons-material/Settings';
import ColorSelectorNode from './ColorSelectorNode';
import {ColorSelectorInput} from "./ColorSelectorNode"
import '../../App.css'

const nodeTypes = {
  selectorNode: ColorSelectorNode,
  inputMode : ColorSelectorInput
};

const initialNodes = [
  {
    id: 'A',
    type: 'group',
    position: { x: 0, y: 0 },
    style: {
      width: 1000,
      height: 140,
    },
  },
  {
    id: 'horizontal-1',
    sourcePosition: 'right',
    type: 'inputMode',
    data: { label: <SettingsIcon /> },
    position: { x: 100, y:  50 },
    parentNode: 'A',
    extent: 'parent',
  },
  {
    id: 'horizontal-2',
    sourcePosition: 'right',
    type : "selectorNode",
    targetPosition: 'left',
    data: { label: 'A Node' },
    position: { x: 200, y: 50 },
    parentNode: 'A',
    extent: 'parent',
  },
  {
    id: 'horizontal-3',
    sourcePosition: 'right',
    type : "selectorNode",
    targetPosition: 'left',
    data: { label: 'Node 3' },
    position: { x: 300, y: 50 },
    parentNode: 'A',
    extent: 'parent',
  },
  {
    id: 'horizontal-4',
    sourcePosition: 'right',
    targetPosition: 'left',
    type : "selectorNode",
    data: { label: 'Node 4' },
    position: { x: 400, y: 50 },
    // parentNode: 'A',
    // extent: 'parent',
  },
  {
    id: 'horizontal-5',
    sourcePosition: 'right',
    targetPosition: 'left',
    type : "selectorNode",
    data: { label: 'Node 5' },
    position: { x: 500, y: 50 },
    parentNode: 'A',
    extent: 'parent',
  },
  {
    id: 'horizontal-6',
    sourcePosition: 'right',
    targetPosition: 'left',
    type : "selectorNode",
    data: { label: 'Node 6' },
    position: { x: 600, y: 50 },
    parentNode: 'A',
    extent: 'parent',
  },
  {
    id: 'horizontal-7',
    sourcePosition: 'right',
    targetPosition: 'left',
    type : "selectorNode",
    data: { label: 'Node 7' },
    position: { x: 700, y: 50 },
    parentNode: 'A',
    extent: 'parent',
  },
  {
    id: 'horizontal-8',
    sourcePosition: 'right',
    targetPosition: 'left',
    type : "selectorNode",
    data: { label: 'Node 8' },
    position: { x: 800, y: 50 },
    parentNode: 'A',
    extent: 'parent',
  },
];

const initialEdges = [
  {
    id: 'horizontal-e1-2',
    source: 'horizontal-1',
    type: 'smoothstep',
    target: 'horizontal-2',
    label : "1-2"
    // animated : true
  },
  {
    id: 'horizontal-e2-3',
    // source: 'horizontal-2',
    type: 'smoothstep',
    // target: 'horizontal-3',
  },
  {
    id: 'horizontal-e3-4',
    source: 'horizontal-3',
    type: 'smoothstep',
    target: 'horizontal-4',
    // label: 'edge label',
  },
  {
    id: 'horizontal-e4-5',
    source: 'horizontal-4',
    type: 'smoothstep',
    target: 'horizontal-5',
    label : "4-5"
  },
  {
    id: 'horizontal-e5-6',
    // source: 'horizontal-5',
    type: 'smoothstep',
    // target: 'horizontal-6',
  },
  {
    id: 'horizontal-e6-7',
    source: 'horizontal-6',
    type: 'smoothstep',
    target: 'horizontal-7',
  },
  {
    id: 'horizontal-e7-8',
    source: 'horizontal-7',
    type: 'smoothstep',
    target: 'horizontal-8',
  },
];

function Project1() {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((els) => addEdge(params, els)), []);
  return (
    <div style={{width: "100%", height : "300px"}} >
      <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      attributionPosition="bottom-left"
      nodeTypes={nodeTypes}
      defaultZoom={1}
    ></ReactFlow>
    </div>
  )
}

export default Project1