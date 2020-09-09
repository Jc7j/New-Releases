import { useTabs } from "./Tabs";

export interface IPanelProps {
  label: string;
}

/**
 * Individual panel component.
 */
export const Panel: React.FC<IPanelProps> = (props) => {
  const { activeTab } = useTabs();
  return activeTab === props.label ? <div>{props.children}</div> : null;
};
