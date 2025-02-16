import { useState } from "react";
import css from "./SearchBar.module.css";
import { IoSearchOutline } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter text to search for images.", { duration: 1000 });
      return;
    }
    onSubmit(query);
    setQuery(""); 
  };

  return (
    <header className={css.header}>
      <Toaster />
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={css.button}>
          <IoSearchOutline className={css.icon} />
        </button>
      </form>
    </header>
  );
}
