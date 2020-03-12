const contentTarget = document.querySelector(".noteFormContainer");

const render = () => {
  contentTarget.innerHTML = `
        <label>Suspect Name:</label>
        <input type="text" id="note-suspect">
        <label>Date of Entry:</label>
        <input type="date" id="note-date">
        <label>Note:</label>
        <textarea id="note-text"></textarea>
        <button id="saveNote">Save Note</button>
    `;
};

const NoteForm = () => {
  render();
};

export default NoteForm;
