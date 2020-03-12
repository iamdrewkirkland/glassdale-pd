import { getCriminals } from "./criminals/criminalProvier.js";
import { criminalList } from "./criminals/CriminalList.js";
import { getCrimes } from "./convictions/crimeData.js";
import { crimeSelect } from "./convictions/CrimeSelect.js";
import NoteForm from "./notes/NoteForm.js";

getCrimes().then (
    () => crimeSelect()
)

NoteForm()

getCriminals().then(
    () => criminalList()
);


