import client from "./api/index";
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AddItems from "./Components/AddItems";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Detail from "./Components/Detail";

function App() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [simpsonsData, setSimpsonsData] = useState([]);
  const [form, setForm] = useState({
    name: "",
    job: "",
  });

  useEffect(() => {
    const localData = localStorage.getItem("data") ?? [];
    setData(Array.isArray(localData) ? [] : JSON.parse(localData));
  }, []);

  const saveItem = () => {
    if (form.name === "" || form.job === "") {
      alert("Please enter a name and job");
      return;
    }
    data.push({
      ...form,
    });
    setForm({
      name: "",
      job: "",
    });

    localStorage.setItem("data", JSON.stringify(data));
    navigate("/");
  };

  const removeItem = (index) => {
    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
    setData([...data]);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await client.get("/simpsons");
        console.log("response.data :>> ", response.data);
        setSimpsonsData(response.data);
      } catch (error) {
        console.log("error :>> ", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                data={data}
                key={data.id}
                setData={setData}
                simpsonsData={simpsonsData}
                setSimpsonsData={setSimpsonsData}
                removeItem={removeItem}
              />
            }
          />
          <Route
            path="/AddItems"
            element={
              <AddItems
                data={data}
                setData={setData}
                form={form}
                setForm={setForm}
                saveItem={saveItem}
              />
            }
          />
          <Route path="/Detail/:id" element={<Detail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
