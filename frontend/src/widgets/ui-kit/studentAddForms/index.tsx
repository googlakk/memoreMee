import { FC } from "react";
import { IoMdClose } from "react-icons/io";
import { useGetTeachersQuery } from "@entities/user/api/queries.gen";

interface StudentAddFormsProps {
  onClose: () => void;
}
const StudentAddForms: FC<StudentAddFormsProps> = ({ onClose }) => {
  const { data: teachersData } = useGetTeachersQuery();
  return (
    <>
      <div className=" bg-[#fff] grid grid-cols-2 relative  gap-5 rounded-xl p-12">
        <div className=" absolute right-0 top-0">
          <button onClick={onClose} className="btn btn-outline rounded-full">
            <IoMdClose />
          </button>
        </div>
        <input
          type="text"
          name="firstName"
          id=""
          placeholder="first name"
          className="text-xs p-2 border-b"
          autoComplete="off"
        />
        <input
          type="text"
          name="LastName"
          id=""
          placeholder="last name"
          className="text-xs p-2 border-b"
          autoComplete="off"
        />
        <input
          type="email"
          name="email"
          id=""
          placeholder="email"
          className="text-xs p-2 border-b"
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          className="text-xs p-2 border-b"
          autoComplete="new-password"
        />
        <input
          type="file"
          className="block w-full text-sm text-slate-500 cursor-pointer
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
        />

        <select className="select select-primary w-full max-w-xs">
          <option disabled selected>
            Должность
          </option>
          <option>Ученик</option>
        </select>
        <select className="select select-primary w-full max-w-xs">
          <option disabled selected>
            Выбрать учителя
          </option>
          {teachersData?.usersPermissionsUsers?.data.map((teacher) => (
            <option value={teacher.attributes?.email}>
              {teacher.attributes?.last_name} {teacher.attributes?.first_name}
            </option>
          ))}
        </select>
        <button className="btn btn-outline">Добавить</button>
      </div>
    </>
  );
};
export default StudentAddForms;
