// import { FC, useMemo, useState } from "react";
// import {
//   useGetStudentsQuery,
//   useGetTeachersQuery,
// } from "@entities/user/api/queries.gen";

// import { Student } from "@app/uttils";
// import StudentAddForms from "@widgets/ui-kit/studentAddForms";
// import StudentProfile from "@widgets/ui-kit/student-profile";
// import { TableUsers } from "@widgets/ui-kit/table";

// const TabStudents: FC = () => {
//   const theads = ["name", "teacher", "points"];
//   const { data } = useGetStudentsQuery();
//   const { data: teachersData } = useGetTeachersQuery();
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [showAddForms, setShowAddForms] = useState(false);
//   const [isProfileOpen, setIsProfileOpen] = useState(true);
//   const [sortOrder] = useState<"asc" | "desc">("asc");
//   const handleSelectedUser = (t: Student) => {
//     setSelectedStudent(t);
//   };
//   const onProfileOpen = () => {
//     setIsProfileOpen(true);
//   };
//   const onProfileClose = () => {
//     setIsProfileOpen(false);
//   };
//   const handleChangeTeachers = (e) => {
//     setSelecatedTeacher(e.target.value);
//   };
//   const onAddFormsOpen = () => {
//     setShowAddForms(true);
//   };
//   const onAddFormsClose = () => {
//     setShowAddForms(false);
//   };
//   const [selectedTeacher, setSelecatedTeacher] = useState("");
//   const teachers = teachersData?.usersPermissionsUsers?.data;
//   const students = data?.usersPermissionsUsers?.data;
//   const filteredStudents = useMemo(() => {
//     return students?.filter((student) => {
//       if (!selectedTeacher) {
//         return students;
//       }
//       return (
//         student.attributes?.teacher?.data?.attributes?.first_name ===
//         selectedTeacher
//       );
//     });
//   }, [selectedTeacher, students, sortOrder]);

//   return (
//     <>
//       <div>
//         <h1 className="font-bold text-xl">Students</h1>
//         <div className="flex gap-5 items-end">
//           <div className="flex mb-2 flex-col ">
//             <label className=" text-primary text-sm" htmlFor="">
//               Фильтрация
//             </label>
//             <div className=" flex gap-2">
//               <select
//                 onChange={(e) => handleChangeTeachers(e)}
//                 className="select select-bordered w-full max-w-xs"
//               >
//                 <option disabled selected>
//                   Выбрать учителя
//                 </option>

//                 {teachers?.map((teacher, idx) => (
//                   <option value={teacher.attributes?.first_name} key={idx}>
//                     {teacher.attributes?.first_name}
//                   </option>
//                 ))}
//                 <option value={""}>Все ученики</option>
//               </select>
//               <select
//                 onChange={(e) => handleChangeTeachers(e)}
//                 className="select select-bordered w-full max-w-xs"
//               >
//                 <option disabled selected>
//                   по баллам
//                 </option>
//                 <option value={""}>По возростанию</option>
//                 <option value={""}>По убыванию</option>

//                 <option value={""}>Все ученики</option>
//               </select>
//             </div>
//           </div>
//           <div className="flex gap-5 mb-2">
//             {showAddForms ? (
//               <button
//                 onClick={onAddFormsClose}
//                 className="btn btn-outline btn-primary"
//               >
//                 Закрыть
//               </button>
//             ) : (
//               <button
//                 onClick={onAddFormsOpen}
//                 className="btn btn-outline btn-primary"
//               >
//                 Добавить
//               </button>
//             )}
//           </div>
//         </div>
//         <div className="flex gap-5 flex-wrap relative ">
//           <TableUsers
//             theads={theads}
//             users={filteredStudents}
//             onSelectUser={handleSelectedUser}
//             onOpen={onProfileOpen}
//           />
//           <div className="flex gap-5 flex-col">
//             {selectedStudent != null && isProfileOpen ? (
//               <StudentProfile
//                 student={selectedStudent}
//                 onClose={onProfileClose}
//               />
//             ) : (
//               ""
//             )}

//             {showAddForms ? <StudentAddForms onClose={onAddFormsClose} /> : ""}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default TabStudents;
