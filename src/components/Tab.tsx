import React from "react";
import { useTabs } from "./Tabs";

import "../styles/Tab.css";

export interface ITabProps {
  label: string;
}

/**
 * This component allows changing of the active Tab.
 */
export const Tab: React.FC<ITabProps> = (props) => {
  const { setActiveTab } = useTabs();
  return (
    <div>
      <button className="TabButton" onClick={() => setActiveTab(props.label)}>
        {props.children}
      </button>
    </div>
  );
};
