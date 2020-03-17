import { Note } from "./Note.js";
import { useNotes, getNotes } from "./noteDataProvider.js";



const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", customEvent => {
  render()
})

eventHub.addEventListener("allNotesClicked", customEvent => {
  render()
})

const render = () => {
  getNotes().then(() => {
      const allTheNotes = useNotes()

      contentTarget.innerHTML = allTheNotes.map(
          currentNoteObject => {
              return Note(currentNoteObject)
          }
      ).join("")
  })
}
