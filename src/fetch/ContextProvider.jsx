import {
  useContext,
  useEffect,
  useState,
  createContext,
} from "react";
import axios from "axios";
const statement = createContext();
export const Appcontext = ({ children }) => {
  const [program, setProgram] = useState([]);
  useEffect(() => {
    const getprogram = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/program/getPrograms"
        );
        console.log(response.data);
        setProgram(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data.message);
          console.log(err.response.status);
         console.log(err.response.headers);
        } else {
          console.log(program);
          console.log("error");
        }
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
