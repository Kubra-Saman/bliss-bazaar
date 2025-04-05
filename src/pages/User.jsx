import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const User = () => {
  const { user, login, logout } = useContext(AuthContext); // Use the context

  return (
    <>
      <div className="p-4 border rounded bg-gray-100 flex flex-column justify-center items-center">
        {user ? (
          <div>
            <h2 className="text-lg font-bold">Welcome, {user.name}!</h2>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded mt-2"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => login({ name: "Kubra" })} // Sample login
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Login
          </button>
        )}
      </div>
    </>
  );
};

export default User;
