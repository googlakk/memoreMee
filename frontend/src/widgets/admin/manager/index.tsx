import { AiOutlineHome } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { ImCreditCard } from "react-icons/im";
import { PiStudentFill } from "react-icons/pi";
import Sidebar from "@widgets/ui-kit/sidebar";
import TabHome from "./tabs-components/home";
import TabTeacher from "./tabs-components/teacher";
import { VscAccount } from "react-icons/vsc";
import { useState } from "react";

const AdminBoard = () => {
  const sidebarItems = [
    {
      title: "Home",
      icon: <AiOutlineHome />,
    },
    {
      title: "Teacher",
      icon: <FaChalkboardTeacher />,
    },
    {
      title: "Students",
      icon: <PiStudentFill />,
    },
    {
      title: "Accounts",
      icon: <VscAccount />,
    },
    {
      title: "Plan",
      icon: <ImCreditCard />,
    },
  ];

  const [currentComponentfromChild, setCurrentComponentfromChild] =
    useState("");
  const handleChangeComponent = (component: string) => {
    setCurrentComponentfromChild(component);
  };
  const switchTabs = () => {
    switch (currentComponentfromChild) {
      case "Home":
        return <TabHome />;
      case "Teacher":
        return <TabTeacher />;
      case "Students":
        return "Tab students";
      case "Account":
        return <h1>Account</h1>;
      case "Plan":
        return <h1>Plan</h1>;
    }
  };
  return (
    <>
      <div className=" bg-base-200 w-full h-[85vh] flex rounded-2xl">
        <Sidebar
          items={sidebarItems}
          onChangeComponents={handleChangeComponent}
        />
        {switchTabs()}
      </div>
    </>
  );
};
export default AdminBoard;
