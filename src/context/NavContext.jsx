import React, { createContext, useContext, useState } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [toggle, setToggle] = useState("Home");

  return (
    <NavContext.Provider value={{ toggle, setToggle }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavToggle = () => useContext(NavContext);
