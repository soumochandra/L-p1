
import React, { useState } from "react";
import styles from "./styles/Form.module.css";
import axios from 'axios';


const BookForm = ({ fetchBooks, darkMode }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles/App.module.css";
import BookCard from "./BookCard";
import BookForm from "./BookForm";
import Navbar from "./Navbar";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

const fetchBooks = async () => {
  try {
    const res = await axios.get("import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles/App.module.css";
import BookCard from "./BookCard";
import BookForm from "./BookForm";
import Navbar from "./Navbar";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

const fetchBooks = async () => {
  try {
    const res = await axios.get("https://library-management-mern-1.onrender.com");
    setBooks(res.data);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};

const handleDelete = async (id) => {
  try {
    await axios.delete(`https://library-management-mern-1.onrender.com${id}`);
    fetchBooks();
  } catch (err) {
    console.error(err);
  }
};


  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className={`${styles.app} ${darkMode ? styles.dark : styles.light}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className={styles.main}>
        <BookForm fetchBooks={fetchBooks} darkMode={darkMode} />

        {loading ? (
          <div className={styles.skeletonGrid}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={styles.skeletonCard} />
            ))}
          </div>
        ) : (
          <div className={styles.bookGrid}>
            {books.map((book) => (
              <BookCard
                key={book._id}
                book={book}
                onDelete={handleDelete}
                darkMode={darkMode}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;");
    setBooks(res.data);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};

const handleDelete = async (id) => {
  try {
    await axios.delete(`https://library-management-mern-1.onrender.com${id}`);
    fetchBooks();
  } catch (err) {
    console.error(err);
  }
};


  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className={`${styles.app} ${darkMode ? styles.dark : styles.light}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className={styles.main}>
        <BookForm fetchBooks={fetchBooks} darkMode={darkMode} />

        {loading ? (
          <div className={styles.skeletonGrid}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={styles.skeletonCard} />
            ))}
          </div>
        ) : (
          <div className={styles.bookGrid}>
            {books.map((book) => (
              <BookCard
                key={book._id}
                book={book}
                onDelete={handleDelete}
                darkMode={darkMode}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;", formData);
    setFormData({ title: "", author: "", isbn: "" });
    fetchBooks();
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={`${styles.form} ${darkMode ? styles.darkForm : ""}`}
    >
      <h2>Add New Book</h2>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Author"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="ISBN"
          value={formData.isbn}
          onChange={(e) => setFormData({ ...formData, isbn: e.target.value })}
          required
        />
      </div>
      <button type="submit" className={styles.submitBtn}>
        Add Here
      </button>
    </form>
  );
};

export default BookForm;
