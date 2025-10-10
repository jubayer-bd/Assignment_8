import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const location = useLocation();
  const [toggle, setToggle] = useState("Home");

  // Sync toggle state with current route
  useEffect(() => {
    if (location.pathname === "/") {
      setToggle("Home");
    } else if (location.pathname === "/apps") {
      setToggle("Apps");
    } else if (location.pathname === "/installs") {
      setToggle("Installs");
    }
  }, [location.pathname]);

  return (
    <NavContext.Provider value={{ toggle, setToggle }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavToggle = () => useContext(NavContext);
