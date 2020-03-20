import { Note } from "./Note.js";
import { useNotes, getNotes } from "./noteDataProvider.js";



const contentTarget = document.querySelector(".noteListContainer")
const eventHub = document.querySelector(".container")

let visbility = false

eventHub.addEventListener("noteStateChanged", customEvent => {
  render()
})

eventHub.addEventListener("allNotesClicked", customEvent => {
  visbility = !visbility

  if (visbility){
    contentTarget.classList.add("invisble")
  } else {
    contentTarget.classList.remove("invisible")
  }

})                                                


const render = () => {

  if (visbility){
    contentTarget.classList.add("invisble")
  } else {
    contentTarget.classList.remove("invisible")
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

export const NoteList = () => render()

