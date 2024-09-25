"use client";

const SearchBar = () => {
  const handleSubmit = () => {};

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Product Link"
        className="searchbar-input"
      />
      <button className="searchbar-btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
