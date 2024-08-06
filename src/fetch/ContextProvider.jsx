import { useContext, useEffect, useState, createContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// Create context
const statement = createContext();

export const Appcontext = ({ children }) => {
  const [program, setProgram] = useState([]);
  const [pcourse, setPcourse] = useState([]);

  useEffect(() => {
    const getprogram = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/program/getPrograms"
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
    <statement.Provider value={{ program, setProgram, pcourse, setPcourse }}>
      {children}
    </statement.Provider>
  );
};

export const mycontext = () => useContext(statement);
