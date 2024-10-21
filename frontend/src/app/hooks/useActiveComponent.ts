import { ActiveComponentContext } from "@app/providers/withActiveComponentProvider";
import { useContext } from "react";

export const useActiveComponent = () => useContext(ActiveComponentContext);
