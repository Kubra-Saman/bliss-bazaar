import React from "react";

const SearchBar = () => {
  return (
    <div>
      <form className="flex justify-center w-full my-2">
        <input
          className="p-1 m-2 w-50 border rounded outline-none"
          type="search"
          placeholder="Search Products"
        />
      </form>
    </div>
  );
};

export default SearchBar;
