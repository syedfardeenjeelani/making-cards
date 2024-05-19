import { useState } from "react";
import "./App.css";
import Cards from "./Components/Cards";
import Form from "./Components/Form";

function App() {
  const [users, setUsers] = useState([]);

  const handleSubmitInfo = (data) => {
    setUsers([...users, data]);
  };

  const removeCard = (id) => {
    setUsers(users.filter((item, index) => index !== id))
  };

  return (
    <>
      <Cards users={users} removeCard={removeCard} />
      <Form handleSubmitInfo={handleSubmitInfo} />
    </>
  );
}

export default App;
