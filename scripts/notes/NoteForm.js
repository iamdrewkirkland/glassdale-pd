import { saveNote } from "./noteDataProvider.js";
import { useCriminals } from "../criminals/criminalProvier.js";

const contentTarget = document.querySelector(".noteFormContainer");
const eventHub = document.querySelector(".container");

let visbility = false;

// Event handler for toggling note form visibility
eventHub.addEventListener("noteFormButtonClicked", customEvent => {
  visbility = !visbility;

  if (visbility) {
    contentTarget.classList.remove("invisible");
  } else {
    contentTarget.classList.add("invisible");
  }
});

// Event handler for adding (saving) a note
contentTarget.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {
    const criminalId = document.querySelector("#criminalDropdown").value;
    const noteText = document.querySelector("#note-text").value;
    const noteDate = document.querySelector("#noteDate").value;

    const newNote = {
      noteText: noteText,
      criminalId: parseInt(criminalId),
      noteDate: noteDate
    };
    saveNote(newNote);
  }
});

// Render dropdown with criminals as options
const render = () => {
  contentTarget.classList.add("invisible");
  const criminalArrray = useCriminals();

  contentTarget.innerHTML = `
      <fieldset>
      <legend>NOTES</legend>
        <label>Suspect Name:</label>
        <select id="criminalDropdown">
          <option value="0">Select a Criminal
          </option>
          ${criminalArrray.map(currentCriminalObject => {
            return `<option value ="${currentCriminalObject.id}>${currentCriminalObject.name}</option>`;
          })}
        </select>
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
