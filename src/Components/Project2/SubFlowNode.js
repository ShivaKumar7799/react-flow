import { Handle, Position } from 'react-flow-renderer';
import './ColorStyles.css'

function SubFlowNode({ data }) {

  const handleStyle = { top: 45 };
  const handlethirdStyle = { top : 95}
  return (
    <div className="sub-flow-wrapper">
      <Handle className = 'targetCenterNode' type="target" position={Position.Left} id="l-1"> + </Handle>
      <Handle type="target" position={Position.Left} id="l-2" style={handleStyle}/>
      <Handle type="source" position={Position.Right} id="a" />
      <Handle type="source" position={Position.Right} id="b" style={handleStyle}  />
      <Handle type="source" position={Position.Right} id="b" style={handlethirdStyle}  />
      
    </div>
  );
}

export default SubFlowNode;