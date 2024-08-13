import { useContext, useEffect, useState, createContext } from "react";
import axios from "axios";

// Create context
const statement = createContext();

export const Appcontext = ({ children }) => {
  const [program, setProgram] = useState([]);

  useEffect(() => {
    const getprogram = async () => {
      try {
        const response = await axios.get(
          "https://future-focus-rwanada.onrender.com/program/getPrograms"
        );
        console.log(response.data);
        setProgram(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getprogram();
  }, []);

  return (
    <statement.Provider value={{ program, setProgram }}>
      {children}
    </statement.Provider>
  );
};

export const mycontext = () => useContext(statement);
