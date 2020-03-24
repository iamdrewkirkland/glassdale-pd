import { Note } from "./Note.js";
import { useNotes, getNotes, deleteNote } from "./noteDataProvider.js";


// DOM Element Selectors
const contentTarget = document.querySelector(".noteListContainer")
const eventHub = document.querySelector(".container")

// State variables
let visbility = false

// Event handler for delete note
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
      const [prefix, noteId] = clickEvent.target.id.split("--")
      deleteNote(noteId)
    }
})

// Event handler for note state
eventHub.addEventListener("noteStateChanged", customEvent => {
  render()
})

// Event handler for note visiblity toggle
eventHub.addEventListener("allNotesClicked", customEvent => {
  visbility = !visbility
  
  if (visbility){
    contentTarget.classList.remove("invisible")
  } 
  else {
    contentTarget.classList.add("invisible")
  }

})                                                


const render = () => {

  if (visbility){
    contentTarget.classList.remove("invisible")
  } else {
    contentTarget.classList.add("invisible")
  }
  
  getNotes().then(() => {
      const allTheNotes = useNotes()

      contentTarget.innerHTML = allTheNotes.map(
          currentNoteObject => {
              return Note(currentNoteObject)
          }
      ).join("")
  })
}

export const NoteList = () => {
  render()
}
