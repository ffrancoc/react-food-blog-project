import { createContext } from "react";

const AppProvider = ({ children }) => {
  const AppContext = createContext();

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppProvider;
