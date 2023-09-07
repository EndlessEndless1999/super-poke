import React, { useState, useContext, createContext } from "react"

const TeamContext = createContext()

export const TeamProvider = ({ children }) => {
  const [team, setTeam] = useState([])

  return (
    <TeamContext.Provider value={{ team, setTeam }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => useContext(TeamContext)