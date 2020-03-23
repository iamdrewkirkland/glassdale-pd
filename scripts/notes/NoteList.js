import { Note } from "./Note.js";
import { useNotes, getNotes } from "./noteDataProvider.js";


// DOM Element Selectors
const contentTarget = document.querySelector(".noteListContainer")
const eventHub = document.querySelector(".container")

// State variables
let visbility = false

// Event handler for note state
eventHub.addEventListener("noteStateChanged", customEvent => {
  render()
})

// Event handler for note visiblity toggle
eventHub.addEventListener("allNotesClicked", customEvent => {
  visbility = !visbility

  if (visbility){
    contentTarget.classList.remove("invisble")
  } 
  else {
    contentTarget.classList.add("invisible")
  }

})                                                


const render = () => {

  if (visbility){
    contentTarget.classList.remove("invisble")
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
