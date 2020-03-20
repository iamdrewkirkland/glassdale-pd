import { saveNote } from "./noteDataProvider.js";

const contentTarget = document.querySelector(".noteFormContainer");
const eventHub = document.querySelector(".container")

let visbility = false

eventHub.addEventListener("noteFormButtonClicked", customEvent => {
  visbility = !visbility                                              

  if (visbility) {
    contentTarget.classList.remove("invisible")
  } else {
    contentTarget.classList.add("invisible")
  }

})

contentTarget.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {
    const noteText = document.querySelector("#note-text").value;
    const criminalName = document.querySelector("#note-suspect").value;
    const noteDate = document.querySelector("#noteDate").value;

    const newNote = {
      noteText: noteText,
      cirminal: criminalName,
      timestamp: noteDate,
    };
    saveNote(newNote);
  }
});

const render = () => {
  contentTarget.classList.add("invisible")
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
