import { useContext } from "react";
import { allContext } from "../context/AuthProvider";

const useProvContext = () => {
  return useContext(allContext);
};

export default useProvContext;