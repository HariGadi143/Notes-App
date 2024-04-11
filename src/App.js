import React, { useState } from "react";
import styles from "./App.module.css";

const App = () => {
  const [notesObj, setNotesObj] = useState({
    title: "",
    notes: "",
  });
  const [notesList, setNotesList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotesObj({ ...notesObj, [name]: value });
  };

  const handleAddNotes = () => {
    const updatedNotesList = [...notesList, notesObj];
    setNotesList(updatedNotesList);
    setNotesObj({
      title: "",
      notes: "",
    });
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.notesContainer}>
        <h1 className={styles.notesText}>Notes</h1>
        <div className={styles.inputsCon}>
          <input
            placeholder="Title"
            name="title"
            value={notesObj?.title}
            onChange={handleChange}
          />
          <textarea
            rows={20}
            style={{ width: "100%" }}
            placeholder="Take a Note..."
            name="notes"
            value={notesObj?.notes}
            onChange={handleChange}
          />
          <button className={styles.addBtn} onClick={handleAddNotes}>
            ADD
          </button>
        </div>
        <div className={styles.bottomCon}>
          {notesList.length === 0 && (
            <div className={styles.emptyNotesCon}>
              <img
                src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png "
                alt="notes_empty"
              />
              <h3>Notes Empty</h3>
              <p>Notes you add will appear here.</p>
            </div>
          )}
          {notesList.length > 0 && (
            <div className={styles.presentNotesCon}>
              {notesList.map((item, index) => {
                return (
                  <div className={styles.noteCard} key={index}>
                    <h3>{item?.title}</h3>
                    <p>{item?.notes}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
