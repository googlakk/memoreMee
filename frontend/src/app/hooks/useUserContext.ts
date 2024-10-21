import { StudentContext } from "@app/providers/withContexProvider";
import { useContext } from "react";

export const useStudentContext = () => useContext(StudentContext);
