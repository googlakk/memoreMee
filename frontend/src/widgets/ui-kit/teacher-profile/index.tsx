import { FC, useState } from "react";

import { FaEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Teacher } from "@app/uttils";

interface TeacherProfileProps {
  teacher: Teacher;
  onClose: () => void;
}
const TeacherProfile: FC<TeacherProfileProps> = ({ teacher, onClose }) => {
  const [isEditable, setIsEditable] = useState(false);
  const handleNameEdit = () => {
    setIsEditable(!isEditable);
  };
  return (
    <>
      <div className=" bg-[#fff] rounded-2xl flex justify-between  gap-10 p-12 relative">
        <div className=" absolute right-0 top-0">
          <button onClick={onClose} className="btn btn-outline rounded-full">
            <IoMdClose />
          </button>
        </div>
        <div className="flex-col items-center text-center">
          <div className="avatar ">
            <div className="mask mask-squircle w-40 h-40">
              <img
                src={teacher.attributes?.avatar || ""}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <button className="btn btn-outline text-base">
              <FaRegEdit />
            </button>
          </div>
        </div>
        <div className=" grid grid-cols-2 gap-x-16 gap-y-5">
          <div className=" flex justify-between items-center gap-x-10">
            <div>
              <label className=" text-xs text-[#969595] font-bold" htmlFor="">
                first name:
              </label>
              <h1
                className={`text-base font-bold ${
                  isEditable ? "border-b-2 border-b-[#000]" : ""
                }`}
                contentEditable={isEditable}
              >
                {teacher.attributes?.first_name}
              </h1>
            </div>
            <button
              className="btn btn-outline text-base"
              onClick={handleNameEdit}
            >
              <FaRegEdit />
            </button>
          </div>

          <div className="flex justify-between items-center gap-x-10">
            <div>
              <label className=" text-xs text-[#969595] font-bold" htmlFor="">
                last name:
              </label>
              <h1 className="text-base font-bold">
                {teacher.attributes?.last_name}
              </h1>
            </div>
            <button className="btn btn-outline text-base">
              <FaRegEdit />
            </button>
          </div>

          <div className="flex justify-between items-center gap-x-10">
            <div>
              <label className=" text-xs text-[#969595] font-bold" htmlFor="">
                email:
              </label>
              <h1 className="text-base font-bold">
                {teacher.attributes?.email}
              </h1>
            </div>
            <button className="btn btn-outline text-base">
              <FaRegEdit />
            </button>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <label className=" text-xs text-[#969595] font-bold" htmlFor="">
                password:
              </label>
              <h1 className="text-base font-bold">********</h1>
            </div>
            <button className="btn btn-outline text-base">
              <FaRegEdit />
            </button>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <label className=" text-xs text-[#969595] font-bold" htmlFor="">
                Role:
              </label>
              <h1 className="text-base font-bold">Teacher</h1>
            </div>
            <button className="btn btn-outline text-base">
              <FaRegEdit />
            </button>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <label className=" text-xs text-[#969595] font-bold" htmlFor="">
                points:
              </label>
              <h1 className=" text-base font-bold">
                {teacher.attributes?.score || 0}
              </h1>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <label className=" text-xs text-[#969595] font-bold" htmlFor="">
                students:
              </label>
              <h1 className=" text-base font-bold">
                {teacher.attributes?.students?.data.length}
              </h1>
            </div>
            <button className="btn btn-outline text-base">
              <FaEye />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default TeacherProfile;
