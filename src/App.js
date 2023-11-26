import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [backendData, setBackendData] = useState([{}]);
  console.log(backendData);
  async function getData() {
    try {
      const response = await fetch("/api");
      if (!response.ok) {
        throw new Error("Network is error");
      }
    } catch (error) {
      console.error(`Problem with fetch:${error.message}`);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return <div></div>;
}

export default App;
