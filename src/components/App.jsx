import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const { notes, setNotes } = useState([]);
  function addNote(Newnote) {
    setNotes((prevNotes) => {
      return [...prevNotes, Newnote];
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem) => {
        return <Note title={noteItem.title} content={noteItem.content} />;
      })}
    </div>
  );
}

export default App;
