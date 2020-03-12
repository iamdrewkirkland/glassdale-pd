import { NoteList } from "./Note.js";


const contentTarget = document.querySelector(".noteFormContainer")


// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {
    // Make a new object representation of a note
    const newNote = {
      // Key/value pairs here
      notetext: "sample note text about suspect John Doe",
      suspect: "",
      dateofentry: "",
    };

    // Change API state and application state
    saveNote(newNote);
  }
});

const NoteForm = () => {
  // rest of the code here
  const noteArray = NoteList()


};

