import React from "react";
import { useContext } from "react";
import { createContext } from "react";

const AppContext = createContext(null);

export const Parent = () => {
  const [user, setUser] = React.useState({
    name: "Demo",
    username: "Demo",
    email: "Demo",
    phone: "Demo",
  });

  return (
    <>
      <AppContext.Provider value={{ user, setUser }}>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <br />
        <Child />
      </AppContext.Provider>
    </>
  );
};

const Child = () => {
  return <GrandChild />;
};

const GrandChild = () => {
  const { setUser } = useContext(AppContext);
  return (
    <>
      <button
        onClick={() => {
          setUser({
            name: "Harshit Kumar",
            username: "harshitclub",
            email: "harshitclub@gmail.com",
            phone: 7505394360,
          });
        }}
      >
        Set Value
      </button>
    </>
  );
};
