import React, { useState } from "react";

import { Student } from "@app/uttils";

type StudentContextPayload = {
  student: Student;
  setStudent: (user: Student) => void;
};

export const StudentContext = React.createContext<StudentContextPayload>({
  student: {},
  setStudent: () => {},
});

export const withStudentProvider =
  (Component: React.FC): React.FC =>
  () => {
    const [student, setStudent] = useState<Student | {}>({});

    return (
      <StudentContext.Provider value={{ student, setStudent }}>
        <Component />
      </StudentContext.Provider>
    );
  };
