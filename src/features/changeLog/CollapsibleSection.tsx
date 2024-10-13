import React from 'react';
import { useCollapse } from 'react-collapsed';

import './collapsible-styles.css';

export interface collapsibleProps {
  title: string;
  body: string;
}

export const CollapsibleSection = ({ title, body }: collapsibleProps) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <>
      <div className="collapsible">
        <div className="header" {...getToggleProps()}>
          {isExpanded ? 'Collapse' : `${title} Updates`}
          <div className="icon">
            <i className={'fas fa-chevron-circle-' + (isExpanded ? 'up' : 'down')}></i>
          </div>
        </div>
        <div {...getCollapseProps()}>
          <div className="content">
            <pre>{body}</pre>
          </div>
        </div>
      </div>
    </>
  );
};
