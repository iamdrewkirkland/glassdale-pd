import { saveNote } from "./noteDataProvider.js";

const contentTarget = document.querySelector(".noteFormContainer");

contentTarget.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {
    const noteText = document.querySelector("#note-text").value;
    const criminalName = document.querySelector("#note-suspect").value;
    const newNote = {
      noteText: noteText,
      cirminal: criminalName,
      timestamp: Date.now()
    };
    saveNote(newNote);
  }
});

const render = () => {
  contentTarget.innerHTML = `
      <fieldset>
      <legend>NOTES</legend>
        <label>Suspect Name:</label>
        <input type="text" id="note-suspect">
        <label>Date of Entry:</label>
        <input type="date" id="note-date">
        <label>Note:</label>
        <textarea id="note-text"></textarea>
        <button id="saveNote">Save Note</button>
        </fieldset>
        `;
};

const NoteForm = () => {
  render();
};

export default NoteForm;
