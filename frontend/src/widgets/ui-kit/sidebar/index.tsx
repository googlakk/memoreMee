import { ReactNode } from "react";

interface SidebarItem {
  title: string;
  icon: ReactNode;
}
interface SideBarProps {
  items: SidebarItem[];
  onChangeComponents: (data: string) => void;
}
const Sidebar: React.FC<SideBarProps> = ({ items, onChangeComponents }) => {
  return (
    <>
      <ul className="menu bg-base-200 w-56 rounded-box h-full">
        {items.map((item, index) => (
          <li key={index}>
            <a onClick={() => onChangeComponents(item.title)}>
              {item.icon}
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Sidebar;
