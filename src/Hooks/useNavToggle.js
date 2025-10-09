import {  useState } from "react";


const useNavToggle = () => {
  
  const [toggle, setToggle] = useState("");

  

  return { toggle, setToggle,  };
};

export default useNavToggle;
