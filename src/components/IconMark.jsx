import { Activity } from "lucide-react";
export function IconMark({ size = 28 }) {
  return <div className="icon-mark" style={{ width: size + 20, height: size + 20 }}><Activity size={size}/></div>;
}