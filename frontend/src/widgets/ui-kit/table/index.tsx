import { FC, useState } from "react";

import { Teacher } from "@app/uttils";

interface TablePersonProps {
  theads: string[];
  users: Teacher[];
  onSelectUser: (teacher: Teacher) => void;
  onOpen: () => void;
}
export const TableUsers: FC<TablePersonProps> = ({
  theads,
  users,
  onSelectUser,
  onOpen,
}) => {
  const [selectedTeachers, setSelectedTeachers] = useState<Teacher["id"][]>([]);

  const handleTeacherClick = (teacher: Teacher) => {
    const teacherId = teacher.id;
    const isSelected = selectedTeachers.includes(teacherId);

    if (isSelected) {
      setSelectedTeachers(selectedTeachers.filter((id) => id !== teacherId));
    } else {
      setSelectedTeachers([...selectedTeachers, teacherId]);
    }

    onSelectUser(teacher);
    onOpen();
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table bg-[#ffffff]  rounded-xl">
          {/* head */}
          <thead>
            <tr className=" text-center">
              {theads.map((thed, idx) => (
                <th key={idx}>{thed}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users?.map((user, idx) => (
              <tr key={idx} className="">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.attributes?.avatar || ""}
                          alt="Avatar "
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {user.attributes?.first_name}
                      </div>
                    </div>
                  </div>
                </td>

                <th>{user.attributes?.students?.data.length}</th>
                <th>{user.attributes?.score || 0}</th>
                <th>
                  <button
                    onClick={() => handleTeacherClick(user)}
                    className="btn btn-ghost btn-xs"
                  >
                    details
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </>
  );
};
