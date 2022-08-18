import React, { memo } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import { Handle } from 'react-flow-renderer';
import './ColorStyles.css'

export default memo(({ data, isConnectable }) => {
  return (
   <>
      <div className='nodes-wrapper' >
      <Handle
        type="target"
        position="left"
        style={{ top: 20, background: 'black' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <div className='icon-border' >
        <SettingsIcon />
      </div>
      <Handle
        type="source"
        position="right"
        id="a"
        style={{ top: 20, background: 'black' }}
        isConnectable={isConnectable}
      />
    </div>
    <span>nodes</span>
   </>
  );
});

export const ColorSelectorInput = ({ data, isConnectable }) => {
  return (
    <>
      <div className='nodes-wrapper'>
      <div className='icon-border' >
        <SettingsIcon />
      </div>
      <Handle
        type="source"
        position="right"
        id="a"
        style={{ top: 20, background: 'black' }}
        isConnectable={isConnectable}
      />
    </div>
    <span>input</span>
    </>
  );
}