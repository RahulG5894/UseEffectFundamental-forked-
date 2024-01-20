import { useState, useEffect } from "react";
import List from "./List";

const url = "https://api.github.com/users";

const UseEffectFundamental = () => {
  const [users, setUsers] = useState([]);

  const asyncFetchData = async () => {
    const res = await fetch(url);
    const userData = await res.json();
    setUsers(userData);
  };

  useEffect(() => {
    asyncFetchData();
  }, []);

  return <List users={users} />;
};
export default UseEffectFundamental;
