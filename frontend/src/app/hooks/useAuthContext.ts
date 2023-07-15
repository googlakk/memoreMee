import { AuthContext } from "@app/providers/withAuthProvider";
import { useContext } from "react";

export const useAuthContext = () => useContext(AuthContext);
