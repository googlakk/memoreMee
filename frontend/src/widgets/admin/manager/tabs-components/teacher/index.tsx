import { withStudentProvider } from "@app/providers/withContexProvider";

const TabTeacher = () => {
  // const theads = ["name", "students", "points"];
  // const { data: teachersData } = useGetTeachersQuery();

  // const [selectedTeacher, setSelectedTeacher] = useState(null);
  // const [showAddForms, setShowAddForms] = useState(false);
  // const [isProfileOpen, setIsProfileOpen] = useState(true);
  // const handleSelectedTeacher = (t: Teacher) => {
  //   setSelectedTeacher(t);
  // };

  // const onProfileOpen = () => {
  //   setIsProfileOpen(true);
  // };
  // const onProfileClose = () => {
  //   setIsProfileOpen(false);
  // };
  // const onAddFormsOpen = () => {
  //   setShowAddForms(true);
  // };
  // const onAddFormsClose = () => {
  //   setShowAddForms(false);
  // };

  // return (
  //   <>
  //     <div>
  //       <h1 className="font-bold text-xl">Teachers</h1>
  //       <div className="flex gap-5 mb-2">
  //         <button
  //           onClick={onAddFormsOpen}
  //           className="btn btn-outline btn-primary"
  //         >
  //           {showAddForms ? "Закрыть" : "Добавить"}
  //         </button>
  //         <SeacrhForm />
  //       </div>
  //       <div className="flex gap-5 relative ">
  //         <TableUsers
  //           theads={theads}
  //           users={teachersData?.usersPermissionsUsers?.data}
  //           onSelectUser={handleSelectedTeacher}
  //           onOpen={onProfileOpen}
  //         />
  //         <div className="flex gap-5 flex-col">
  //           {selectedTeacher != null && isProfileOpen ? (
  //             <TeacherProfile
  //               teacher={selectedTeacher}
  //               onClose={onProfileClose}
  //             />
  //           ) : (
  //             ""
  //           )}
  //           {showAddForms ? <TeacherAddForms onClose={onAddFormsClose} /> : ""}
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
  return <></>;
};
export default withStudentProvider(TabTeacher);
